const Contact = () => {
    return (
        <section className="min-h-[80vh] flex items-center justify-center p-4 md:p-8 bg-cyber-bg scroll-mt-24" id="contact">
            <div className="max-w-2xl w-full bg-cyber-terminalDark rounded-lg border border-cyber-border overflow-hidden shadow-cyan-glow">
                {/* Terminal Header */}
                <div className="bg-cyber-card border-b border-cyber-border px-4 py-2 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 font-mono text-xs text-cyber-textMuted">guest@guston:~/contact_transmission</span>
                </div>

                {/* Terminal Body */}
                <div className="p-6 md:p-10 font-mono">
                    <div className="mb-8 border-b border-cyber-border pb-4">
                        <h2 className="text-cyber-cyan text-2xl font-bold mb-2 uppercase tracking-wider">SECURE <span className="text-cyber-textPrimary">CHANNEL</span></h2>
                        <p className="text-cyber-textMuted text-sm">Initiate a secure transmission. All messages are end-to-end encrypted.</p>
                    </div>

                    <form action="#" className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative group">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-cyber-cyan font-bold group-focus-within:text-cyber-textPrimary transition-colors">&gt;</span>
                                <input type="text" placeholder="FULL NAME" className="w-full bg-cyber-card border border-cyber-border rounded px-10 py-3 text-cyber-textPrimary focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all placeholder-cyber-textMuted/50 text-sm tracking-wide" />
                            </div>
                            <div className="relative group">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-cyber-cyan font-bold group-focus-within:text-cyber-textPrimary transition-colors">@</span>
                                <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-cyber-card border border-cyber-border rounded px-10 py-3 text-cyber-textPrimary focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all placeholder-cyber-textMuted/50 text-sm tracking-wide" />
                            </div>
                        </div>
                        
                        <div className="relative group">
                            <span className="absolute top-3 left-4 text-cyber-cyan font-bold group-focus-within:text-cyber-textPrimary transition-colors">#</span>
                            <textarea cols="30" rows="6" placeholder="Kindly type your message" className="w-full bg-cyber-card border border-cyber-border rounded px-10 py-3 text-cyber-textPrimary focus:outline-none focus:border-cyber-cyan focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all placeholder-cyber-textMuted/50 resize-none text-sm tracking-wide leading-relaxed"></textarea>
                        </div>

                        <div className="flex justify-end mt-2">
                            <button type="button" className="inline-flex items-center gap-2 px-8 py-3 bg-cyber-terminalDark border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-bg transition-all font-bold tracking-widest uppercase text-sm shadow-cyan-glow group">
                                Transmit Payload
                                <i className="fa-solid fa-paper-plane group-hover:translate-x-1 transition-transform"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
