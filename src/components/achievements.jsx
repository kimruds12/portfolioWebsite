const Achievements = () => {
    return (
        <section className="min-h-screen p-4 md:p-12 bg-cyber-bg scroll-mt-24" id="achievements">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 font-mono border-b border-cyber-border pb-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-cyber-textPrimary flex items-center gap-4 uppercase tracking-wide">
                            <i className="fa-solid fa-trophy text-cyber-cyan drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]"></i>
                            Mission <span className="text-cyber-cyan">Accomplished</span>
                        </h2>
                        <p className="text-cyber-textMuted mt-3 text-sm tracking-wide">Here is a list of our achievements!</p>
                    </div>
                    <div className="bg-cyber-terminalDark px-4 py-2 border border-cyber-border rounded text-cyber-cyan text-xs tracking-widest uppercase">
                        SYS_STATUS: <span className="text-green-400 font-bold ml-1">ONLINE</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-mono">
                    {[1, 2, 3, 4].map((item, index) => (
                        <div key={index} className="bg-cyber-card rounded-xl overflow-hidden border border-cyber-border hover:border-cyber-cyan hover:shadow-cyan-glow transition-all duration-300 group flex flex-col h-full shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                            <div className="relative overflow-hidden">
                                <img src={`/Assets/Project${item}.jpg`} onError={(e) => { e.target.src = `/Assets/Project${item}.png`; e.target.onerror = null; }} alt="Art Design" className="w-full h-52 object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-cyber-card to-transparent opacity-80"></div>
                                <div className="absolute top-3 right-3 bg-cyber-cyan text-cyber-bg text-xs font-bold px-2 py-1 rounded shadow-cyan-glow tracking-widest">{item <= 3 ? '2025' : '2024'}</div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col relative z-10 -mt-8 bg-cyber-card rounded-t-xl">
                                <h4 className="text-cyber-cyan text-lg font-bold mb-3 uppercase tracking-wider">Art Design</h4>
                                <p className="text-cyber-textMuted text-sm leading-relaxed mb-6 flex-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <a href="#" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyber-textPrimary hover:text-cyber-cyan transition-colors mt-auto border border-cyber-border hover:border-cyber-cyan self-start px-4 py-2 rounded">
                                    <span>View Source</span> <i className="fa-solid fa-up-right-from-square"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                    
                    <div className="bg-cyber-card rounded-xl overflow-hidden border border-cyber-border hover:border-cyber-cyan hover:shadow-cyan-glow transition-all duration-300 group flex flex-col h-full shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                        <div className="relative overflow-hidden">
                            <div className="w-full h-52 bg-cyber-terminalDark flex items-center justify-center text-cyber-border">
                                <i className="fa-solid fa-image text-4xl"></i>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-cyber-card to-transparent opacity-80"></div>
                            <div className="absolute top-3 right-3 bg-cyber-cyan text-cyber-bg text-xs font-bold px-2 py-1 rounded shadow-cyan-glow tracking-widest">2024</div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col relative z-10 -mt-8 bg-cyber-card rounded-t-xl">
                            <h4 className="text-cyber-cyan text-lg font-bold mb-3 uppercase tracking-wider">Art Design</h4>
                            <p className="text-cyber-textMuted text-sm leading-relaxed mb-6 flex-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <a href="#" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyber-textPrimary hover:text-cyber-cyan transition-colors mt-auto border border-cyber-border hover:border-cyber-cyan self-start px-4 py-2 rounded">
                                <span>View Source</span> <i className="fa-solid fa-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
