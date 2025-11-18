
import React, { useState } from 'react';
import { COURSES_DATA, CONVERSING_LANGUAGES } from '../constants';
// FIX: Import ChildProfile from types and alias it to avoid name conflict. Import User.
import { User, ChildProfile as BaseChildProfile } from '../types';

interface ChildProfile {
    id: number;
    name: string;
    ageCategory: string;
    gender: string;
    standard: string;
    curriculum: string;
    school: string;
    district: string;
    state: string;
    country: string;
    conversingLanguage: string;
    curiosity: string;
    questions: string;
    courses: string[];
}

// FIX: Update DashboardPageProps to include all props passed from App.tsx
interface DashboardPageProps {
    currentUser: User;
    activeChild: BaseChildProfile | null;
    setActiveChild: (child: BaseChildProfile | null) => void;
    navigate: (page: string) => void;
}

const standards = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const curriculums = ['CBSE', 'Matric', 'Stateboard', 'ICSE', 'IB', 'Other'];
const ageCategories = [
    'Junior Aviators (Ages 5-10)',
    'Senior Innovators (Ages 11-15)'
];
const genders = ['Male', 'Female', 'Prefer not to say'];

const AddProfileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 1.66.43 3.24 1.21 4.6l-1.36 4.95 5.07-1.33c1.32.75 2.82 1.18 4.38 1.18h.01c5.5 0 9.96-4.49 9.96-10.02S17.5 2.04 12 2.04zM16.51 13.96c-.22-.11-.78-.38-1.02-.43-.24-.05-.42-.08-.59.16-.18.24-.38.43-.47.54-.08.11-.17.13-.33.08-.16-.05-1.02-.37-1.95-1.2-.72-.64-1.21-1.44-1.36-1.68-.15-.24-.02-.38.07-.5.08-.11.17-.28.26-.42.09-.14.12-.24.18-.4.06-.16.03-.29-.02-.39-.05-.11-.59-1.42-.81-1.94-.21-.52-.43-.45-.59-.45-.15 0-.32-.03-.49-.03s-.42 0-1.08.5c-.66.5-1.02 1.23-1.02 2.4s1.05 2.78 1.2 2.97c.15.19 2.11 3.2 5.1 4.48.71.3 1.27.48 1.71.61.73.22 1.39.19 1.9.11.57-.08 1.76-.72 2-1.42.24-.7.24-1.3.17-1.42-.08-.12-.3-.19-.52-.3z"/></svg>
);

const ChildProfileCard: React.FC<{ profile: ChildProfile }> = ({ profile }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-sky">
        <h3 className="text-xl font-bold text-slate-800">{profile.name}</h3>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500 my-2">
            <span className="font-semibold">{profile.ageCategory}</span>
            <span className="text-slate-300">|</span>
            <span><span className="font-semibold">{profile.gender}</span></span>
            <span className="text-slate-300">|</span>
            <span>Std: <span className="font-semibold">{profile.standard}</span></span>
            <span className="text-slate-300">|</span>
            <span><span className="font-semibold">{profile.curriculum}</span></span>
            <span className="text-slate-300">|</span>
            <span>Lang: <span className="font-semibold">{profile.conversingLanguage}</span></span>
        </div>
        <p className="text-sm text-slate-600 font-medium mb-4">{profile.school}, {profile.district}, {profile.state}, {profile.country}</p>
        
        <div className="space-y-4">
            <div>
                <h4 className="font-semibold text-slate-700">Courses of Interest:</h4>
                 <div className="flex flex-wrap gap-2 mt-1">
                    {profile.courses.map(course => (
                        <span key={course} className="bg-sky-100 text-sky-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{course}</span>
                    ))}
                </div>
            </div>
            <div>
                <h4 className="font-semibold text-slate-700">Curiosity Corner:</h4>
                <p className="text-slate-600 text-sm italic">"{profile.curiosity}"</p>
            </div>
            <div>
                <h4 className="font-semibold text-slate-700">Favorite Questions:</h4>
                <p className="text-slate-600 text-sm italic">"{profile.questions}"</p>
            </div>
        </div>
    </div>
);

const WhatsAppCtaCard = () => (
    <div className="mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center max-w-4xl mx-auto border-t-4 border-green-500">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            Get Regular Updates & Free Activities
        </h2>
        <p className="mt-4 text-lg text-slate-600">
            Join our WhatsApp channel for the latest news on upcoming courses, free workshops, and fun aerospace activities for your kids.
        </p>
        <div className="mt-8">
            <a 
                href="https://whatsapp.com/channel/0029Vb6qN88JuyA4MCaa5K01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 text-white hover:bg-green-600 transition-colors font-semibold px-8 py-3 rounded-full text-lg shadow-lg">
                <WhatsAppIcon />
                Follow on WhatsApp
            </a>
        </div>
    </div>
);

export const DashboardPage: React.FC<DashboardPageProps> = ({ currentUser, activeChild, setActiveChild, navigate }) => {
    const [profiles, setProfiles] = useState<ChildProfile[]>([]);
    const [showForm, setShowForm] = useState<boolean>(false);
    const [formState, setFormState] = useState({
        name: '',
        ageCategory: '',
        gender: '',
        standard: '',
        curriculum: '',
        school: '',
        district: '',
        state: '',
        country: '',
        conversingLanguage: '',
        curiosity: '',
        questions: '',
        courses: [] as string[]
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleCourseChange = (courseTitle: string) => {
        setFormState(prevState => {
            const newCourses = prevState.courses.includes(courseTitle)
                ? prevState.courses.filter(c => c !== courseTitle)
                : [...prevState.courses, courseTitle];
            return { ...prevState, courses: newCourses };
        });
    };

    const handleSaveProfile = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newProfile: ChildProfile = {
            id: Date.now(),
            ...formState
        };
        setProfiles(prevProfiles => [...prevProfiles, newProfile]);
        setShowForm(false);
        setFormState({
            name: '', ageCategory: '', gender: '', standard: '', curriculum: '', school: '',
            district: '', state: '', country: '', conversingLanguage: '',
            curiosity: '', questions: '', courses: []
        }); // Reset form
    };

    return (
        <section className="py-16 md:py-24 bg-slate-100 animate-fade-in-up min-h-[calc(100vh-128px)]">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
                    Welcome, {currentUser.name.split(' ')[0]}!
                </h1>
                <p className="text-lg text-slate-600 mb-10">Manage your children's profiles and learning journey here.</p>

                <div className="bg-white p-8 rounded-2xl shadow-xl">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-brand-space">My Children's Profiles</h2>
                        {!showForm && (
                            <button
                                onClick={() => setShowForm(true)}
                                className="inline-flex items-center bg-brand-space hover:bg-blue-800 transition-colors text-white font-semibold px-5 py-2 rounded-full text-sm shadow-md"
                            >
                                <AddProfileIcon />
                                Add Child Profile
                            </button>
                        )}
                    </div>

                    {showForm && (
                        <div className="mb-8 p-6 bg-slate-50 rounded-lg border border-slate-200 animate-fade-in-up">
                            <h3 className="text-xl font-bold text-slate-800 mb-4">New Child Profile</h3>
                            <form className="space-y-4" onSubmit={handleSaveProfile}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-1 text-slate-700">Child's Name</label>
                                        <input type="text" name="name" value={formState.name} onChange={handleInputChange} required placeholder="Full name" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                                    </div>
                                    <div>
                                        <label htmlFor="school" className="block text-sm font-medium mb-1 text-slate-700">School</label>
                                        <input type="text" name="school" value={formState.school} onChange={handleInputChange} required placeholder="Name of school" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                     <div>
                                        <label htmlFor="ageCategory" className="block text-sm font-medium mb-1 text-slate-700">Age Category</label>
                                        <select name="ageCategory" id="ageCategory" value={formState.ageCategory} onChange={handleInputChange} required className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                            <option value="" disabled>Select a category</option>
                                            {ageCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="standard" className="block text-sm font-medium mb-1 text-slate-700">Standard/Class</label>
                                        <select name="standard" id="standard" value={formState.standard} onChange={handleInputChange} required className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                            <option value="" disabled>Select a standard</option>
                                            {standards.map(std => <option key={std} value={std}>{std}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="curriculum" className="block text-sm font-medium mb-1 text-slate-700">Curriculum/Board</label>
                                        <select name="curriculum" id="curriculum" value={formState.curriculum} onChange={handleInputChange} required className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                            <option value="" disabled>Select a board</option>
                                            {curriculums.map(board => <option key={board} value={board}>{board}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label htmlFor="district" className="block text-sm font-medium mb-1 text-slate-700">District</label>
                                        <input type="text" name="district" value={formState.district} onChange={handleInputChange} required placeholder="e.g., Chennai" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                                    </div>
                                    <div>
                                        <label htmlFor="state" className="block text-sm font-medium mb-1 text-slate-700">State</label>
                                        <input type="text" name="state" value={formState.state} onChange={handleInputChange} required placeholder="e.g., Tamil Nadu" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                                    </div>
                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium mb-1 text-slate-700">Country</label>
                                        <input type="text" name="country" value={formState.country} onChange={handleInputChange} required placeholder="e.g., India" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="gender" className="block text-sm font-medium mb-1 text-slate-700">Gender</label>
                                        <select name="gender" id="gender" value={formState.gender} onChange={handleInputChange} required className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                            <option value="" disabled>Select Gender</option>
                                            {genders.map(g => <option key={g} value={g}>{g}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="conversingLanguage" className="block text-sm font-medium mb-1 text-slate-700">Conversing Language in Home.</label>
                                        <select name="conversingLanguage" id="conversingLanguage" value={formState.conversingLanguage} onChange={handleInputChange} required className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky">
                                            <option value="" disabled>Select a language</option>
                                            {CONVERSING_LANGUAGES.map(lang => (
                                                <option key={lang} value={lang}>{lang}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-slate-700">Courses of Interest</label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2">
                                        {COURSES_DATA.map(course => (
                                            <label key={course.title} className="flex items-center text-sm text-slate-700 hover:bg-slate-100 p-2 rounded-md cursor-pointer">
                                                <input 
                                                    type="checkbox" 
                                                    checked={formState.courses.includes(course.title)} 
                                                    onChange={() => handleCourseChange(course.title)} 
                                                    className="h-4 w-4 rounded border-slate-300 text-brand-space focus:ring-brand-sky" 
                                                />
                                                <span className="ml-2">{course.title}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="curiosity" className="block text-sm font-medium mb-1 text-slate-700">What are they curious about?</label>
                                    <textarea name="curiosity" value={formState.curiosity} onChange={handleInputChange} required rows={3} placeholder="Loves building with LEGOs, watching rocket launches, asking about stars..." className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky"></textarea>
                                </div>
                                <div>
                                    <label htmlFor="questions" className="block text-sm font-medium mb-1 text-slate-700">What are their favorite questions to ask?</label>
                                    <textarea name="questions" value={formState.questions} onChange={handleInputChange} required rows={3} placeholder="'Why is the sky blue?', 'How do planes stay up?', 'Are there aliens on other planets?'" className="w-full bg-white text-slate-900 px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky"></textarea>
                                </div>
                                <div className="flex justify-end gap-4 pt-2">
                                    <button type="button" onClick={() => setShowForm(false)} className="px-5 py-2 rounded-full text-sm font-medium text-slate-700 bg-slate-200 hover:bg-slate-300">
                                        Cancel
                                    </button>
                                    <button type="submit" className="px-5 py-2 rounded-full text-sm font-medium text-white bg-brand-space hover:bg-blue-800">
                                        Save Profile
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                    
                    {profiles.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {profiles.map(profile => (
                                <ChildProfileCard key={profile.id} profile={profile} />
                            ))}
                        </div>
                    ) : (
                        !showForm && (
                            <div className="text-center py-10 border-2 border-dashed border-slate-300 rounded-lg">
                                <p className="text-slate-500">You haven't added any child profiles yet.</p>
                                <p className="text-slate-500 mt-1">Click the button above to get started!</p>
                            </div>
                        )
                    )}
                </div>

                <WhatsAppCtaCard />
            </div>
        </section>
    );
};
