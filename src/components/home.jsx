import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Projects from './Projects';
import Skills from './Skills';
import Credentials from './Credentials';

const contactLinks = [
  {
    label: 'Facebook',
    value: 'Kim Ruds Guston',
    href: 'https://www.facebook.com/mikdurs.tugons/',
    icon: 'fa-brands fa-facebook-f',
  },
  {
    label: 'Email',
    value: '@kimrudsguston@gmail.com',
    href: 'https://mail.google.com/mail/u/0/#inbox',
    icon: 'fa-solid fa-envelope',
  },
  {
    label: 'LinkedIn',
    value: 'Kim Ruds Guston',
    href: 'https://www.linkedin.com/in/kim-ruds-guston-4a1822374/',
    icon: 'fa-brands fa-linkedin-in',
  },
  {
    label: 'GitHub',
    value: '@kimruds12',
    href: 'https://github.com/kimruds12',
    icon: 'fa-brands fa-github',
  },
];

const Home = () => {
  return (
    <>
      <section id="home" className="scroll-mt-32 px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pt-36 min-h-[90vh] flex flex-col justify-center">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-white/[0.03] px-4 py-2 text-sm uppercase tracking-[0.3em] text-white/70 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.85)]" />
              Hello, I&apos;m
            </span>

            <h1 className="mt-8 font-['Sora',_sans-serif] text-[clamp(3.5rem,8vw,4.875rem)] font-bold leading-[0.92] tracking-[-0.04em]">
              <span className="block text-[#F5F5F5]">Kim Ruds C.</span>
              <span className="hero-name-glow block bg-[linear-gradient(135deg,#ffffff_10%,#7dd3fc_45%,#38bdf8_85%)] bg-clip-text text-transparent">
                Guston
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-[clamp(1rem,1.8vw,1.1rem)] leading-8 text-[#B0B0B0]">
              I build clean, polished digital experiences by combining good design, solid engineering, and AI-assisted development — turning ideas into interfaces that look great, systems that work reliably, and web applications that feel smooth on every screen.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full border border-cyan-300/40 bg-[linear-gradient(135deg,#38bdf8,#0ea5e9)] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_0_28px_rgba(56,189,248,0.34)] transition duration-300 hover:-translate-y-1 hover:px-7 hover:shadow-[0_0_42px_rgba(56,189,248,0.46)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B14]"
              >
                Let's Connect
                <i className="fa-solid fa-arrow-right text-xs transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-cyan-300/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:text-white hover:shadow-[0_0_30px_rgba(56,189,248,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050B14]"
              >
                Explore Projects
              </a>
            </div>

            <div className="mt-10 w-fit overflow-hidden rounded-[1.75rem] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(5,11,20,0.94))] shadow-[0_0_50px_rgba(56,189,248,0.08)] backdrop-blur-xl text-left">
              <div className="flex items-center justify-between border-b border-cyan-300/12 bg-white/[0.03] px-5 py-3">
                <div className="flex items-center gap-2 font-mono text-sm text-cyan-200">
                  <span className="text-cyan-300">-&gt;</span>
                  <span><b>Objectives</b></span>
                </div>
              </div>
              <div className="px-5 py-6 font-mono text-sm leading-8 text-[#D8D8D8]">
                <ul className="grid grid-cols-1 gap-x-8 gap-y-2 text-[#B8C5D8] sm:grid-flow-col sm:grid-rows-3">
                  {[
                    'AI-assisted workflows',
                    'Futuristic UI systems',
                    'Secure product mindset',
                    'Scalable network infrastructure',
                    'Structured problem-solving approach',
                    'Collaborative, agile development',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative flex h-[20rem] w-[20rem] items-center justify-center sm:h-[14rem] sm:w-[24rem] lg:h-[28rem] lg:w-[28rem]">
              <div className="hero-orbit absolute inset-0 rounded-full border border-cyan-300/20" />
              <div className="hero-orbit-reverse absolute inset-[1.25rem] rounded-full border border-dashed border-cyan-300/20" />
              <div className="absolute inset-[2.5rem] rounded-full border border-cyan-300/15 shadow-[0_0_45px_rgba(56,189,248,0.18)]" />
              <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.12),transparent_65%)] blur-2xl" />
              <span className="hero-signal absolute right-[8%] top-[16%] h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(34,211,238,0.95)]" />

              <div className="relative z-10 flex h-[70%] w-[70%] items-center justify-center overflow-hidden rounded-full border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(7,20,39,0.95),rgba(5,11,20,0.98))] shadow-[0_0_60px_rgba(56,189,248,0.16)]">
                <img
                  src="/Assets/homeKimImage.jpg"
                  alt="Kim Guston profile"
                  className="profile-float h-full w-full object-cover object-center scale-[1.06]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>



      <Skills />

      <Projects />

      <Credentials />

      <section id="contact" className="scroll-mt-12 px-4 pt-16 pb-20 sm:px-6 lg:px-8 min-h-[95vh] flex flex-col justify-center">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* Left Side: "Let's Connect" layout matching reference */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-xl flex flex-col items-center text-center md:items-start md:text-left"
          >
            <h2 className="font-['Sora',_sans-serif] text-[clamp(2.5rem,5vw,3.5rem)] font-bold tracking-[-0.03em] text-white">
              Let's Connect
            </h2>
            <p className="mt-6 text-base leading-8 text-[#B0B0B0]">
              I am always open to collaborating on new projects, sharing technical insights, or discussing modern cybersecurity and developer-centric operations. Feel free to reach out.
            </p>

            <a
              href="/Assets/FINAL_GUSTON_CV.pdf"
              download="FINAL_GUSTON_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-[1rem] border border-cyan-300/20 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
            >
              <i className="fa-solid fa-file-lines text-cyan-300" />
              Download CV
            </a>
          </motion.div>

          {/* Right Side: 1-column list with Cyan rounded hover style */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-4"
          >
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-[1.4rem] border border-cyan-300/10 bg-black/20 px-6 py-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.03] hover:shadow-[0_8px_30px_rgba(56,189,248,0.1)]"
              >
                <div className="flex items-center gap-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/10 bg-cyan-300/10 text-cyan-200 transition group-hover:bg-cyan-300/20 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                    <i className={`${item.icon} text-lg`} />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-white">{item.label}</p>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.18em] text-cyan-300/70 group-hover:text-cyan-300"></p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="hidden font-mono text-sm text-[#B0B0B0] sm:block group-hover:text-white transition-colors">{item.value}</span>
                  <i className="fa-solid fa-arrow-right text-sm text-white/45 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300" />
                </div>
              </a>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Home;
