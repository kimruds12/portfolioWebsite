const Skills = () => {
    return (
        <section className="min-h-[80vh] flex items-center justify-center p-4 md:p-8 bg-cyber-bg scroll-mt-24" id="skills">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side / Terminal Intro */}
                <div className="lg:col-span-5 bg-cyber-terminalDark rounded-lg border border-cyber-border overflow-hidden shadow-cyan-glow">
                    {/* Terminal Header */}
                    <div className="bg-cyber-card border-b border-cyber-border px-4 py-2 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="ml-4 font-mono text-xs text-cyber-textMuted">root@guston:~/mission</span>
                    </div>
                    {/* Terminal Body */}
                    <div className="p-6 md:p-8 font-mono text-sm">
                        <div className="mb-6">
                            <span className="text-cyber-cyan font-bold">-&gt; ~</span> <span className="text-cyber-textPrimary">./list_objectives.sh</span>
                        </div>
                        <p className="text-cyber-textMuted leading-relaxed mb-6">
                            Executing comprehensive service discovery protocols. Establishing full-stack development capabilities, robust database management, and tailored software solutions.
                        </p>
                        <ul className="text-cyber-textMuted space-y-3 mb-6">
                            <li className="flex items-start gap-2"><span className="text-cyber-cyan">*</span> Dominate front-end architectures</li>
                            <li className="flex items-start gap-2"><span className="text-cyber-cyan">*</span> Develop custom software solutions</li>
                            <li className="flex items-start gap-2"><span className="text-cyber-cyan">*</span> Optimize database operations</li>
                        </ul>
                        <div>
                            <span className="text-cyber-cyan font-bold border-r-8 border-cyber-cyan animate-pulse pr-1">-&gt; ~</span>
                        </div>
                    </div>
                </div>

                {/* Right Side / Active Directives (Services) */}
                <div className="lg:col-span-7 font-mono">
                    <div className="mb-8 flex items-center">
                        <span className="text-cyber-cyan font-bold mr-3 text-xl">//</span>
                        <h2 className="text-cyber-textPrimary text-xl uppercase tracking-widest font-bold">ACTIVE_DIRECTIVES</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        {/* Service 1 */}
                        <div className="bg-cyber-card border border-cyber-border rounded-lg p-5 flex items-center gap-6 hover:border-cyber-cyan hover:shadow-cyan-glow transition-all group">
                            <div className="text-cyber-textMuted group-hover:text-cyber-cyan text-3xl transition-colors w-10 text-center">
                                <i className="fa-solid fa-code"></i>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1 border-b border-cyber-border/50 pb-2">
                                    <h3 className="text-cyber-textPrimary font-bold uppercase tracking-wider text-sm md:text-base">Web Development</h3>
                                    <span className="text-cyber-textMuted text-xs tracking-widest">MOD_01</span>
                                </div>
                                <p className="text-cyber-textMuted text-xs md:text-sm mt-2">Frontend development using HTML, CSS, JavaScript etc.</p>
                            </div>
                            <div>
                                <a href="#" className="text-cyber-textMuted hover:text-cyber-cyan text-xs uppercase tracking-widest border border-cyber-border group-hover:border-cyber-cyan px-3 py-1 rounded transition-all">Select</a>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-cyber-card border border-cyber-border rounded-lg p-5 flex items-center gap-6 hover:border-cyber-cyan hover:shadow-cyan-glow transition-all group">
                            <div className="text-cyber-textMuted group-hover:text-cyber-cyan text-3xl transition-colors w-10 text-center">
                                <i className="fa-solid fa-palette"></i>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1 border-b border-cyber-border/50 pb-2">
                                    <h3 className="text-cyber-textPrimary font-bold uppercase tracking-wider text-sm md:text-base">Software Development</h3>
                                    <span className="text-cyber-textMuted text-xs tracking-widest">MOD_02</span>
                                </div>
                                <p className="text-cyber-textMuted text-xs md:text-sm mt-2">Custom software solutions tailored to business needs.</p>
                            </div>
                            <div>
                                <a href="#" className="text-cyber-textMuted hover:text-cyber-cyan text-xs uppercase tracking-widest border border-cyber-border group-hover:border-cyber-cyan px-3 py-1 rounded transition-all">Select</a>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-cyber-card border border-cyber-border rounded-lg p-5 flex items-center gap-6 hover:border-cyber-cyan hover:shadow-cyan-glow transition-all group">
                            <div className="text-cyber-textMuted group-hover:text-cyber-cyan text-3xl transition-colors w-10 text-center">
                                <i className="fa-brands fa-android"></i>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-1 border-b border-cyber-border/50 pb-2">
                                    <h3 className="text-cyber-textPrimary font-bold uppercase tracking-wider text-sm md:text-base">Database Management</h3>
                                    <span className="text-cyber-textMuted text-xs tracking-widest">MOD_03</span>
                                </div>
                                <p className="text-cyber-textMuted text-xs md:text-sm mt-2">Designing and optimizing database(MySQL etc).</p>
                            </div>
                            <div>
                                <a href="#" className="text-cyber-textMuted hover:text-cyber-cyan text-xs uppercase tracking-widest border border-cyber-border group-hover:border-cyber-cyan px-3 py-1 rounded transition-all">Select</a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Stats Row */}
                    <div className="flex justify-between mt-8 px-4 py-4 border-t border-cyber-border text-center bg-cyber-terminalDark rounded">
                        <div>
                            <div className="text-cyber-textPrimary text-xl md:text-2xl font-bold mb-1">100%</div>
                            <div className="text-cyber-textMuted text-xs tracking-widest">DEDICATION</div>
                        </div>
                        <div>
                            <div className="text-cyber-textPrimary text-xl md:text-2xl font-bold mb-1">99.9%</div>
                            <div className="text-cyber-textMuted text-xs tracking-widest">UPTIME</div>
                        </div>
                        <div>
                            <div className="text-cyber-textPrimary text-xl md:text-2xl font-bold mb-1">NaN</div>
                            <div className="text-cyber-textMuted text-xs tracking-widest">SLEEP</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Skills;
