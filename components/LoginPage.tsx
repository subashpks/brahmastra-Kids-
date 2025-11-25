
import React, { useState } from 'react';
import { User } from '../types';

interface LoginPageProps {
  navigate: (page: string) => void;
  onLoginSuccess: (user: User) => void;
}

const emailDomains = ['@gmail.com', '@outlook.com', '@yahoo.com'];

const LoginIllustration = () => (
    <div className="hidden lg:block lg:w-1/2">
        <img src="https://files.catbox.moe/vwlnrr.png" alt="Astronaut floating in space" className="w-full h-full object-cover rounded-r-2xl" />
    </div>
);

const GoogleIcon = () => (
    <svg className="w-5 h-5 mr-3" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
        <path fill="currentColor" d="M488 261.8C488 403.3 381.5 512 244 512 109.8 512 0 402.2 0 266.3 0 130.4 109.8 21.8 244 21.8c68.2 0 125 28.2 165.7 68.4l-64 64c-21.6-20.5-51.4-33.8-98.2-33.8-84.9 0-154.6 69.5-154.6 155.3s69.7 155.3 154.6 155.3c99.1 0 133.4-80.4 136.9-120.3H244v-75.1h244z"></path>
    </svg>
);

export const LoginPage: React.FC<LoginPageProps> = ({ navigate, onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [statusIsError, setStatusIsError] = useState<boolean>(false);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage('');
        setStatusIsError(false);

        const dummyUser: User = {
            name: 'Demo Parent',
            email: 'parent@demo.com',
            password: 'password123'
        };
        
        // Simulate a network request
        setTimeout(() => {
            try {
                setStatusMessage("Login successful! Redirecting to your dashboard...");
                setStatusIsError(false);
                setTimeout(() => onLoginSuccess(dummyUser), 1000);
            } catch (error: any) {
                setStatusMessage('An unexpected error occurred during login.');
                setStatusIsError(true);
            } finally {
                setIsSubmitting(false);
            }
        }, 1000);
    };
    
    const handleGoogleLogin = () => {
        // Placeholder for Azure AD B2C Google login logic
        setStatusMessage("Google Sign-In is not yet connected to a backend service.");
        setStatusIsError(true);
    };

    const handleEmailDomainClick = (domain: string) => {
        setEmail(prev => prev.includes('@') ? prev : prev + domain);
    };

    return (
        <section className="min-h-[calc(100vh-128px)] flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
            <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl flex">
                <div className="w-full lg:w-1/2 p-8 sm:p-12">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-space">
                            Welcome Back!
                        </h1>
                        <p className="mt-2 text-slate-600">This is a demo login. Use any details to continue.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email address</label>
                            <div className="mt-1">
                                <input id="email" name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" placeholder="you@example.com" />
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {emailDomains.map(domain => (
                                        <button
                                            key={domain}
                                            type="button"
                                            onClick={() => handleEmailDomainClick(domain)}
                                            className="px-2 py-1 text-xs font-medium text-brand-space bg-sky-50 hover:bg-sky-100 rounded-md border border-sky-200 transition-colors"
                                        >
                                            {domain}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password"className="block text-sm font-medium text-slate-700">Password</label>
                            <div className="mt-1">
                                <input id="password" name="password" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-slate-50 text-slate-900 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-sky" placeholder="Your password" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-brand-space hover:text-blue-800">Forgot your password?</a>
                            </div>
                        </div>
                        
                        {statusMessage && (
                            <div className={`p-4 rounded-md text-sm whitespace-pre-line ${statusIsError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                {statusMessage}
                            </div>
                        )}

                        <div>
                            <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-brand-space hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-space disabled:bg-slate-400 disabled:cursor-not-allowed">
                                {isSubmitting ? 'Signing in...' : 'Sign In'}
                            </button>
                        </div>
                    </form>
                    
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-slate-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-slate-500">Or continue with</span>
                        </div>
                    </div>

                    <div>
                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="w-full inline-flex justify-center items-center py-3 px-4 border border-slate-300 rounded-full shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-sky"
                        >
                            <GoogleIcon />
                            Sign in with Google
                        </button>
                    </div>

                    <p className="mt-6 text-center text-sm text-slate-600">
                        Don't have an account?{' '}
                        <a href="#" onClick={(e) => { e.preventDefault(); navigate('signup'); }} className="font-medium text-brand-space hover:text-blue-800">
                            Sign up
                        </a>
                    </p>
                </div>
                <LoginIllustration />
            </div>
        </section>
    );
};
