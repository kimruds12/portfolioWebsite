import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const credentials = [
  {
    title: 'ITLympics 2025 - Web Design Champion',
    description: 'Awarded first place in web design for creating an innovative, highly responsive, and accessible interface under strict time constraints.',
    tags: ['Web Design', 'UI/UX', 'Competition'],
    href: '#',
    image: '/Assets/plv-qlib.png',
    imageAlt: 'Certificate showcase visual',
  },
  {
    title: 'UMAK 14th IT Skills Olympics 2025',
    description: 'Demonstrated advanced technical proficiency and problem-solving skills against top peers in a rigorous competitive environment.',
    tags: ['Programming', 'Problem Solving', 'IT Skills'],
    href: '#',
    image: '/Assets/ARTA-CSS.png',
    imageAlt: 'UMAK IT Skills Olympics',
  },
  {
    title: 'Network Addressing and Basic Troubleshooting',
    description: 'Certified expertise in configuring network addresses and resolving foundational connectivity issues efficiently.',
    tags: ['Networking', 'Troubleshooting', 'Cisco'],
    href: '#',
    image: '/Assets/amaro_resort.png',
    imageAlt: 'Networking Certificate',
  },
  {
    title: 'Networking Basics',
    description: 'Comprehensive understanding of network topologies, protocols, and the fundamental architecture of modern communications.',
    tags: ['Fundamentals', 'Protocols', 'Architecture'],
    href: '#',
    image: '/Assets/1by1.jpg',
    imageAlt: 'Networking Basics',
  },
  {
    title: 'Networking Devices and Initial Configuration',
    description: 'Proven ability to set up, configure, and manage core networking hardware, ensuring stable and secure operations.',
    tags: ['Hardware', 'Configuration', 'Routing'],
    href: '#',
    image: '/Assets/NewAboutMe.png',
    imageAlt: 'Networking Devices',
  },
  {
    title: 'Network Support and Security',
    description: 'Specialized in maintaining network health and implementing robust security measures to protect against vulnerabilities.',
    tags: ['Security', 'Maintenance', 'Firewalls'],
    href: '#',
    image: '/Assets/plv-qlib.png',
    imageAlt: 'Network Security',
  },
];

const Credentials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % credentials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + credentials.length) % credentials.length);
  };

  const getCardStyle = (index) => {
    const diff = (index - activeIndex + credentials.length) % credentials.length;
    
    // Center Card
    if (diff === 0) {
      return {
        x: '0%',
        scale: 1,
        rotateY: 0,
        zIndex: 30,
        opacity: 1,
        filter: 'brightness(1)',
      };
    }
    
    // Right Card
    if (diff === 1 || (diff > 1 && diff <= credentials.length / 2)) {
      return {
        x: '60%',
        scale: 0.8,
        rotateY: -45,
        zIndex: 20 - diff,
        opacity: 0.8,
        filter: 'brightness(0.5)',
      };
    }
    
    // Left Card
    return {
      x: '-60%',
      scale: 0.8,
      rotateY: 45,
      zIndex: 20 - (credentials.length - diff),
      opacity: 0.8,
      filter: 'brightness(0.5)',
    };
  };

  return (
    <section id="credentials" className="scroll-mt-32 px-4 py-24 sm:px-6 lg:px-8 relative overflow-hidden bg-[#050B14]">
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_70%)]" />
        <div className="h-full w-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-16 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-cyan-300 text-sm tracking-[0.5em] uppercase mb-4"
          >
            [ Secure.Credentials.Vault ]
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Certificates</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg font-medium"
          >
            A curated showcase of professional certifications and technical achievements. 
            Click the side cards or use arrows to explore the vault.
          </motion.p>
        </div>

        {/* 3D Coverflow Container */}
        <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center perspective-[1200px] mt-10">
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-[10%] top-1/2 -translate-y-1/2 z-40 h-12 w-12 md:h-16 md:w-16 rounded-full border border-cyan-300/30 bg-black/80 text-cyan-300 backdrop-blur-xl flex items-center justify-center hover:bg-cyan-300 hover:text-black transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            <i className="fa-solid fa-chevron-left text-lg md:text-2xl" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 md:right-[10%] top-1/2 -translate-y-1/2 z-40 h-12 w-12 md:h-16 md:w-16 rounded-full border border-cyan-300/30 bg-black/80 text-cyan-300 backdrop-blur-xl flex items-center justify-center hover:bg-cyan-300 hover:text-black transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            <i className="fa-solid fa-chevron-right text-lg md:text-2xl" />
          </button>

          {/* Cards */}
          <div className="relative w-full max-w-[800px] h-full flex items-center justify-center transform-style-3d">
            {credentials.map((item, index) => {
              const isCenter = index === activeIndex;
              const style = getCardStyle(index);

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={style}
                  transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  onClick={() => !isCenter && setActiveIndex(index)}
                  onMouseEnter={() => isCenter && setIsHovered(true)}
                  onMouseLeave={() => isCenter && setIsHovered(false)}
                  className={`absolute w-[85%] md:w-[700px] h-[300px] md:h-[500px] cursor-pointer ${
                    isCenter ? 'shadow-[0_0_50px_rgba(34,211,238,0.4)]' : 'shadow-[0_0_30px_rgba(0,0,0,0.8)]'
                  } rounded-[2rem] border border-cyan-300/30 bg-[#0A1223] overflow-hidden`}
                >
                  {/* Glowing Border for Center Card */}
                  {isCenter && (
                    <div className="absolute inset-0 z-0 pointer-events-none rounded-[2rem] shadow-[inset_0_0_30px_rgba(34,211,238,0.3)] border-2 border-cyan-400" />
                  )}

                  {/* Background Image */}
                  <motion.div 
                    className="absolute inset-0 z-0"
                    animate={{ scale: isCenter && isHovered ? 1.05 : 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="h-full w-full object-cover"
                    />
                    {/* Dark Overlay that fades when centered and hovered */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent transition-opacity duration-500 ${isCenter && isHovered ? 'opacity-0' : 'opacity-90'}`} />
                  </motion.div>

                  {/* Permanent Text Overlay (Disappears on hover) */}
                  <div className={`absolute bottom-6 left-0 w-full px-8 z-10 pointer-events-none transition-opacity duration-300 ${isCenter && isHovered ? 'opacity-0' : 'opacity-100'}`}>
                    <p className="text-cyan-300 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase mb-2">
                      Authenticated Credential
                    </p>
                    <h4 className="text-white text-xl md:text-3xl font-bold tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                      {item.title}
                    </h4>
                    
                    {isCenter && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-cyan-300/30 bg-cyan-300/20 px-3 py-1 text-[10px] md:text-xs font-mono text-cyan-100 uppercase tracking-widest backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Floating ID */}
                  <div className={`absolute right-6 top-6 z-20 rounded-full border border-cyan-300/30 bg-black/60 px-4 py-1.5 text-[10px] md:text-xs font-mono text-cyan-300 backdrop-blur-md transition-opacity duration-300 ${isCenter && isHovered ? 'opacity-0' : 'opacity-100'}`}>
                    ID_CERT_0{index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Indicators */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex gap-3">
            {credentials.map((_, index) => (
              <button
                key={index} 
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  activeIndex === index 
                    ? 'w-12 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]' 
                    : 'w-4 bg-cyan-300/20 hover:bg-cyan-300/50'
                }`}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
          <p className="text-cyan-300/50 font-mono text-[10px] tracking-[0.4em] uppercase">
            Click side cards or arrows to navigate
          </p>
        </div>
      </div>
    </section>
  );
};

export default Credentials;





