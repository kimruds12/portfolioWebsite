const Home = () => {
    return (
        <section className="min-h-[90vh] flex items-center p-4 md:p-12 relative scroll-mt-24 overflow-hidden" id="home">


            <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">

                {/* Left Content */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-white text-2xl md:text-3xl mb-2 font-medium tracking-wide">
                        Hi, Everyone
                    </h2>

                    <h1 className="text-white text-5xl md:text-5xl lg:text-5xl font-bold mb-4 tracking-tight uppercase">
                        KIM RUDS C GUSTON
                    </h1>

                    <h3 className="text-white text-3xl md:text-5xl font-bold mb-6 flex items-center gap-3">
                        I'm a <span className="text-cyber-cyan drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">Software Engineer</span>
                    </h3>

                    <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mb-10 max-w-xl">
                        A recent Bachelor of Science in Information Technology graduate with strong skills in analyzing and enhancing existing software, as well as designing, developing, and testing end-user applications to meet user needs. Proficient in various programming languages and committed to building efficient, scalable, and user-friendly software solutions.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <a href="#about" className="px-6 py-3 bg-[#699cf4] text-white font-bold rounded-lg hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-lg text-sm md:text-base">
                            Interested
                        </a>
                        <a href="/Assets/Guston_CV.pdf" target="_blank" rel="noreferrer" className="px-6 py-3 bg-transparent border-2 border-white/70 text-white font-bold rounded-lg hover:border-white hover:bg-white/5 hover:scale-105 transition-all duration-300 text-sm md:text-base">
                            View curriculum vitae
                        </a>
                    </div>
                </div>

                {/* Right Side Decoration (Floating Logo) */}
                <div className="hidden lg:flex justify-center items-center">
                    <div className="relative w-72 h-72 xl:w-96 xl:h-96">
                        {/* Subtle decorative circles */}
                        <div className="absolute inset-0 border-2 border-cyber-cyan/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                        <div className="absolute inset-6 border border-cyber-cyan/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                        <img src="/Assets/NewestLogo.png" alt="Logo" className="absolute inset-0 w-full h-full object-contain p-12 drop-shadow-[0_0_20px_rgba(0,229,255,0.3)] animate-[pulse_4s_ease-in-out_infinite]" />
                    </div>
                </div>

            </div>

            {/* Gradient Transition Layer to About Section */}
            <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent via-cyber-bg/60 to-cyber-bg pointer-events-none z-10"></div>
        </section>
    );
};

export default Home;
