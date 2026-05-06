const Projects = () => {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center p-4 md:p-8 bg-cyber-bg relative scroll-mt-24" id="projects">
            <div className="max-w-6xl w-full mx-auto relative z-10">
                
                {/* Header */}
                <div className="mb-12">
                    <div className="text-cyber-cyan text-sm tracking-widest uppercase font-mono mb-2">Featured Work</div>
                    <h2 className="text-white text-3xl md:text-4xl font-bold tracking-wide">Featured Works</h2>
                    <p className="text-cyber-textMuted text-sm md:text-base mt-2">A curated selection of high-precision architectural solutions.</p>
                </div>

                {/* Project 1 */}
                <div className="flex flex-col lg:flex-row items-center gap-8 bg-cyber-terminalDark/30 border border-cyber-border rounded-2xl p-6 lg:p-8 mb-10 hover:border-cyber-cyan/50 hover:shadow-cyan-glow transition-all duration-300">
                    {/* Project Image */}
                    <div className="w-full lg:w-1/2 aspect-video bg-cyber-card border border-cyber-border rounded-xl overflow-hidden relative group">
                        <div className="absolute inset-0 bg-cyber-cyan/10 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                        {/* Placeholder for project image */}
                        <div className="absolute inset-0 flex items-center justify-center text-cyber-textMuted font-mono">
                            <i className="fa-solid fa-image text-4xl mb-2 opacity-50"></i>
                        </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <div className="flex flex-wrap gap-4 mb-4 text-cyber-cyan font-mono text-xs md:text-sm">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>MongoDB</span>
                        </div>
                        
                        <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">Drake's Sugary Treats' Website</h3>
                        
                        <p className="text-cyber-textMuted text-sm md:text-base leading-relaxed mb-6">
                            A MERN-based menu and order management platform for small food and beverage businesses, enabling flexible menu configuration and a real-time, mobile-friendly customer ordering experience.
                        </p>
                        
                        <div className="flex items-center gap-6 mt-auto">
                            <button className="flex items-center gap-2 text-cyber-cyan font-bold hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] transition-all">
                                View Details <i className="fa-solid fa-chevron-right text-xs"></i>
                            </button>
                            <button className="flex items-center gap-2 text-cyber-textMuted hover:text-white transition-all font-mono text-sm">
                                <i className="fa-brands fa-github text-lg"></i> Source
                            </button>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8 bg-cyber-terminalDark/30 border border-cyber-border rounded-2xl p-6 lg:p-8 mb-10 hover:border-cyber-cyan/50 hover:shadow-cyan-glow transition-all duration-300">
                    {/* Project Image */}
                    <div className="w-full lg:w-1/2 aspect-video bg-cyber-card border border-cyber-border rounded-xl overflow-hidden relative group">
                        <div className="absolute inset-0 bg-cyber-cyan/10 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                        {/* Placeholder for project image */}
                        <div className="absolute inset-0 flex items-center justify-center text-cyber-textMuted font-mono">
                            <i className="fa-solid fa-chart-line text-4xl mb-2 opacity-50"></i>
                        </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <div className="flex flex-wrap gap-4 mb-4 text-cyber-cyan font-mono text-xs md:text-sm">
                            <span>React</span>
                            <span>TypeScript</span>
                            <span>ASP.NET</span>
                            <span>SQL Server</span>
                        </div>
                        
                        <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">Survey Management with Data Analysis</h3>
                        
                        <p className="text-cyber-textMuted text-sm md:text-base leading-relaxed mb-6">
                            An enterprise-grade survey platform that enables secure survey creation, large-scale response handling, and advanced analytics through a dual admin and respondent interface.
                        </p>
                        
                        <div className="flex items-center gap-6 mt-auto">
                            <button className="flex items-center gap-2 text-cyber-cyan font-bold hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] transition-all">
                                View Details <i className="fa-solid fa-chevron-right text-xs"></i>
                            </button>
                            <button className="flex items-center gap-2 text-cyber-textMuted hover:text-white transition-all font-mono text-sm">
                                <i className="fa-brands fa-github text-lg"></i> Source
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
