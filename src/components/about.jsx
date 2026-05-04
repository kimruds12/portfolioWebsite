const About = () => {
    return (
        <section className="min-h-[80vh] flex items-center justify-center p-4 md:p-8 bg-cyber-bg scroll-mt-24" id="about">
            <div className="max-w-5xl w-full bg-cyber-terminalDark rounded-lg border border-cyber-border overflow-hidden shadow-cyan-glow grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side / Image */}
                <div className="p-6 md:p-10 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-cyber-border bg-cyber-card relative">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20 pointer-events-none"></div>
                    <img src="/Assets/NewAboutMe.png" alt="About Me" className="w-full max-w-sm rounded object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 border border-cyber-border z-10 relative" />
                </div>

                {/* Right Side / Content */}
                <div className="flex flex-col h-full bg-cyber-terminalDark">
                    {/* Terminal Header */}
                    <div className="bg-cyber-card border-b border-cyber-border px-4 py-2 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-4 font-mono text-xs text-cyber-textMuted">guest@guston:~/about</span>
                    </div>
                    {/* Terminal Body */}
                    <div className="p-6 md:p-10 font-mono flex flex-col flex-1">
                        <div className="mb-6">
                            <span className="text-cyber-cyan font-bold">-&gt; ~</span> <span className="text-cyber-textPrimary">./cat bio.txt</span>
                        </div>
                        <h2 className="text-cyber-cyan text-3xl font-bold mb-2 uppercase tracking-wider">ABOUT <span className="text-cyber-textPrimary">ME</span></h2>
                        <h3 className="text-cyber-textMuted mb-6 text-sm">Software Engineer</h3>

                        <p className="text-cyber-textMuted text-sm leading-relaxed mb-8 flex-1">
                            I am a recent Bachelor of Science in Information Technology graduate with a strong passion for software development and problem-solving. I have experience analyzing and improving existing software, as well as designing, developing, and testing applications to meet user needs. Proficient in various programming languages, I am dedicated to building efficient, scalable, and user-friendly solutions. I am eager to apply my technical skills and creativity as a Software Engineer to contribute to innovative projects and grow in a dynamic environment.
                        </p>

                        <div>
                            <a href="#" className="inline-block px-6 py-2 border border-cyber-cyan text-cyber-cyan text-sm font-bold uppercase tracking-widest hover:bg-cyber-cyan hover:text-cyber-bg transition-all shadow-cyan-glow">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
