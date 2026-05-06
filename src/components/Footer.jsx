const Footer = () => {
    return (
        <footer className="font-mono pt-12 pb-6 px-4 md:px-8 relative z-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                <div className="flex flex-col gap-4">
                    <img src="/Assets/Footer Logo.PNG" alt="Footer Logo" className="w-32 opacity-80" />
                    <p className="text-cyber-textMuted text-sm leading-relaxed">
                        Interested in collaborating or have a project in mind? <br/>Feel free to reach out!
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a href="https://www.facebook.com/mikdurs.tugons" target="_blank" rel="noreferrer" className="text-cyber-textMuted hover:text-cyber-cyan transition-colors text-xl"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/kemiilng/" target="_blank" rel="noreferrer" className="text-cyber-textMuted hover:text-cyber-cyan transition-colors text-xl"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.youtube.com/@KimRudsGuston" target="_blank" rel="noreferrer" className="text-cyber-textMuted hover:text-cyber-cyan transition-colors text-xl"><i className="fa-brands fa-youtube"></i></a>
                        <a href="https://www.tiktok.com/@just_ruds" target="_blank" rel="noreferrer" className="text-cyber-textMuted hover:text-cyber-cyan transition-colors text-xl"><i className="fa-brands fa-tiktok"></i></a>
                    </div> 
                </div>
                
                <div>
                    <h2 className="text-cyber-cyan font-bold text-lg mb-4 uppercase tracking-wider">// Resources</h2>
                    <ul className="flex flex-col gap-2 text-cyber-textMuted text-sm">
                        <li><a href="#about" className="hover:text-cyber-cyan transition-colors flex items-center gap-2"><span className="text-cyber-cyan">&gt;</span> About Me</a></li>
                        <li><a href="#contact" className="hover:text-cyber-cyan transition-colors flex items-center gap-2"><span className="text-cyber-cyan">&gt;</span> Contact Me</a></li>
                    </ul>
                </div>
                
                <div>
                    <h2 className="text-cyber-cyan font-bold text-lg mb-4 uppercase tracking-wider">// Address</h2>
                    <ul className="flex flex-col gap-2 text-cyber-textMuted text-sm">
                        <li className="flex items-start gap-2"><span className="text-cyber-cyan mt-1">&gt;</span> 124, Hulo St. Bignay</li>
                        <li className="flex items-start gap-2"><span className="text-cyber-cyan mt-1">&gt;</span> Valenzuela City</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto border-t border-cyber-border pt-6 text-center">
                <p className="text-cyber-textMuted text-xs tracking-widest uppercase">©Copyright.Guston</p>
            </div>
        </footer>
    );
};

export default Footer;
