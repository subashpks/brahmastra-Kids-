import React from 'react';

export const GallerySection = () => (
    <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    Glimpse into Our Workshops
                </h2>
                <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                    Take a look at one of our exciting workshops conducted in partnership with the US Consulate in Chennai, showcasing our hands-on, immersive approach to learning.
                </p>
            </div>
            <div className="max-w-4xl mx-auto">
                 <div style={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingTop: '60.0000%', // Aspect ratio 370x222 -> (222/370)*100 = 60%
                    paddingBottom: 0,
                    boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                    marginTop: '1.6em',
                    marginBottom: '0.9em',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    willChange: 'transform'
                }}>
                    <iframe
                        loading="lazy"
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0,
                            border: 'none',
                            padding: 0,
                            margin: 0
                        }}
                        src="https://www.canva.com/design/DAG5EsZ7AbM/r3EoG53_byxqg_oaTwXTdw/view?embed"
                        allowFullScreen={true}
                        allow="fullscreen"
                        title="Brahmastra Aerospace VR Workshop Glimpse"
                    >
                    </iframe>
                </div>
            </div>
        </div>
    </section>
);