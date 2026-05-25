const Contact = () => {
    return (
        <section className="py-20 px-4 md:px-8 bg-[#050B14] scroll-mt-24" id="contact">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
                {/* Left Side */}
                <div className="flex-1 md:pr-8">
                    <h2 className="text-white text-4xl font-bold mb-4 relative inline-block">
                        Establish Link
                        <div className="absolute -bottom-3 left-0 w-12 h-1 bg-white"></div>
                    </h2>

                    <h3 className="text-white text-3xl mt-16 mb-6">Let's Connect</h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">
                        I am always open to collaborating on new projects, sharing technical insights, or discussing modern cybersecurity and developer-centric operations. Feel free to reach out.
                    </p>

                    <a href="/Assets/Guston_CV.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-[#111111] hover:bg-[#222222] border border-gray-800 text-white transition-colors text-sm font-medium">
                        <i className="fa-solid fa-file-lines"></i>
                        Get Resume
                    </a>
                </div>

                {/* Right Side */}
                <div className="flex-1 flex flex-col justify-center">
                    {/* Facebook (First - Red Background to match reference) */}
                    <a href="https://www.facebook.com/mikdurs.tugons/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-6 bg-[#bc2a2f] hover:bg-[#a02428] transition-colors border-b border-[#bc2a2f]">
                        <div className="flex items-center gap-4">
                            <i className="fa-brands fa-facebook text-white text-xl w-6"></i>
                            <span className="text-white font-medium">Facebook</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-white/90 font-mono text-sm hidden sm:block">Kim Ruds Guston</span>
                            <i className="fa-solid fa-arrow-right text-white opacity-100 group-hover:translate-x-1 transition-transform"></i>
                        </div>
                    </a>

                    {/* Gmail */}
                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-6 hover:bg-[#111] transition-colors border-b border-gray-800/50">
                        <div className="flex items-center gap-4">
                            <i className="fa-solid fa-envelope text-gray-300 text-xl w-6"></i>
                            <span className="text-gray-300 font-medium">Gmail</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-500 font-mono text-sm hidden sm:block">Kim Ruds Guston</span>
                            <i className="fa-solid fa-arrow-right text-gray-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"></i>
                        </div>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/kim-ruds-guston-4a1822374/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-6 hover:bg-[#111] transition-colors border-b border-gray-800/50">
                        <div className="flex items-center gap-4">
                            <i className="fa-brands fa-linkedin text-gray-300 text-xl w-6"></i>
                            <span className="text-gray-300 font-medium">LinkedIn</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-500 font-mono text-sm hidden sm:block">Kim Ruds Guston</span>
                            <i className="fa-solid fa-arrow-right text-gray-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"></i>
                        </div>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/kimruds12" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-6 hover:bg-[#111] transition-colors border-b border-gray-800/50">
                        <div className="flex items-center gap-4">
                            <i className="fa-brands fa-github text-gray-300 text-xl w-6"></i>
                            <span className="text-gray-300 font-medium">GitHub</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-500 font-mono text-sm hidden sm:block">@kimruds12</span>
                            <i className="fa-solid fa-arrow-right text-gray-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"></i>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
