import { useEffect, useRef, useState } from 'react';

const skillCategories = [
    {
        title: 'Languages',
        description: 'Core Logic & Scripting',
        icon: 'fa-solid fa-code',
        skills: [
            { name: 'JavaScript', icon: 'fa-brands fa-js text-yellow-400' },
            { name: 'TypeScript', icon: 'fa-brands fa-connectdevelop text-blue-400' },
            { name: 'Python', icon: 'fa-brands fa-python text-yellow-300' },
            { name: 'Java', icon: 'fa-brands fa-java text-orange-500' },
            { name: 'C#', icon: 'fa-solid fa-c text-purple-500' },
            { name: 'C', icon: 'fa-solid fa-c text-blue-500' },
            { name: 'PHP', icon: 'fa-brands fa-php text-indigo-400' },
        ]
    },
    {
        title: 'AI & Machine Learning',
        description: 'Intelligent Solutions',
        icon: 'fa-solid fa-brain',
        skills: [
            { name: 'OpenCV', icon: 'fa-solid fa-camera text-green-500' },
            { name: 'Ultralytics', icon: 'fa-solid fa-layer-group text-blue-500' },
            { name: 'Roboflow', icon: 'fa-solid fa-robot text-purple-500' },
        ]
    },
    {
        title: 'Frameworks & Libraries',
        description: 'Modern Application Stacks',
        icon: 'fa-solid fa-layer-group',
        skills: [
            { name: 'React', icon: 'fa-brands fa-react text-cyan-400' },
            { name: 'Node.js', icon: 'fa-brands fa-node-js text-green-500' },
            { name: 'Express.js', icon: 'fa-brands fa-node text-gray-400' },
            { name: '.NET', icon: 'fa-brands fa-microsoft text-purple-500' },
            { name: 'FastAPI', icon: 'fa-solid fa-bolt text-teal-400' },
            { name: 'Livewire', icon: 'fa-solid fa-bolt text-pink-500' },
            { name: 'Laravel', icon: 'fa-brands fa-laravel text-red-500' },
            { name: 'Alpine JS', icon: 'fa-solid fa-mountain text-blue-300' },
            { name: 'Axios', icon: 'fa-solid fa-a text-purple-400' },
            { name: 'JWT', icon: 'fa-solid fa-key text-red-400' },
            { name: 'Spring Boot', icon: 'fa-solid fa-leaf text-green-500' },
            { name: 'Tailwind CSS', icon: 'fa-solid fa-wind text-cyan-400' },
            { name: 'daisyUI', icon: 'fa-solid fa-flower text-purple-400' },
        ]
    },
    {
        title: 'Databases',
        description: 'Storage & Retrieval',
        icon: 'fa-solid fa-database',
        skills: [
            { name: 'MySQL', icon: 'fa-solid fa-database text-blue-400' },
            { name: 'PostgreSQL', icon: 'fa-solid fa-database text-indigo-500' },
            { name: 'MongoDB', icon: 'fa-solid fa-leaf text-green-500' },
            { name: 'SQL Server', icon: 'fa-solid fa-server text-red-500' },
            { name: 'SQL Alchemy', icon: 'fa-solid fa-flask text-red-400' },
        ]
    },
    {
        title: 'Tools & Platforms',
        description: 'Development Environment',
        icon: 'fa-solid fa-wrench',
        skills: [
            { name: 'Git', icon: 'fa-brands fa-git-alt text-orange-500' },
            { name: 'GitHub', icon: 'fa-brands fa-github text-white' },
            { name: 'VS Code', icon: 'fa-solid fa-code text-blue-500' },
            { name: 'Visual Studio', icon: 'fa-solid fa-v text-purple-500' },
            { name: 'PyCharm', icon: 'fa-solid fa-p text-green-500' },
            { name: 'IntelliJ IDEA', icon: 'fa-solid fa-i text-red-500' },
            { name: 'Postman', icon: 'fa-solid fa-rocket text-orange-500' },
            { name: 'Sentry', icon: 'fa-solid fa-bug text-purple-400' },
            { name: 'Ubuntu', icon: 'fa-brands fa-ubuntu text-orange-500' },
            { name: 'NPM', icon: 'fa-brands fa-npm text-red-500' },
            { name: 'Swagger', icon: 'fa-solid fa-circle-nodes text-green-500' },
            { name: 'Vite', icon: 'fa-solid fa-bolt text-purple-500' },
            { name: 'Figma', icon: 'fa-brands fa-figma text-pink-500' },
        ]
    },
    {
        title: 'Cloud & DevOps',
        description: 'Deployment & Infrastructure',
        icon: 'fa-solid fa-cloud',
        skills: [
            { name: 'Vercel', icon: 'fa-solid fa-caret-up text-white' },
            { name: 'Render', icon: 'fa-solid fa-r text-gray-300' },
            { name: 'Cloudflare', icon: 'fa-brands fa-cloudflare text-orange-500' },
            { name: 'Railway', icon: 'fa-solid fa-train-tram text-gray-400' },
            { name: 'Docker', icon: 'fa-brands fa-docker text-blue-500' },
            { name: 'Cloudinary', icon: 'fa-solid fa-cloud-arrow-up text-blue-400' },
        ]
    }
];

const Skills = () => {
    const skillsViewportRef = useRef(null);
    const skillCardRefs = useRef([]);
    const [activeSkill, setActiveSkill] = useState(0);

    useEffect(() => {
        const viewport = skillsViewportRef.current;
        if (!viewport) return;

        let frameId = null;

        const updateActiveSkill = () => {
            frameId = null;
            const viewportRect = viewport.getBoundingClientRect();
            const viewportCenter = viewportRect.top + viewportRect.height / 2;

            let nextIndex = 0;
            let closestDistance = Number.POSITIVE_INFINITY;

            skillCardRefs.current.forEach((card, index) => {
                if (!card) return;
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.top + rect.height / 2;
                const distance = Math.abs(cardCenter - viewportCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    nextIndex = index;
                }
            });

            setActiveSkill((current) => (current === nextIndex ? current : nextIndex));
        };

        const handleSkillScroll = () => {
            if (frameId !== null) cancelAnimationFrame(frameId);
            frameId = window.requestAnimationFrame(updateActiveSkill);
        };

        handleSkillScroll();
        viewport.addEventListener('scroll', handleSkillScroll, { passive: true });
        window.addEventListener('resize', handleSkillScroll);

        return () => {
            viewport.removeEventListener('scroll', handleSkillScroll);
            window.removeEventListener('resize', handleSkillScroll);
            if (frameId !== null) cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <section id="skills" className="scroll-mt-32 px-4 py-24 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-[85rem]">
                <div className="grid gap-10 xl:grid-cols-[0.8fr_1.2fr] xl:items-center">
                    
                    {/* Left Side: Context / Title */}
                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">Tech Stack</span>
                        <h2 className="mt-4 font-['Sora',_sans-serif] text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-[-0.04em] text-white">
                            Skills &<br />Technologies
                        </h2>
                        <p className="mt-5 text-lg leading-8 text-[#B0B0B0]">
                            Technologies and tools I use to bring ideas to life. Scroll vertically through the skill categories to explore my technical proficiencies.
                        </p>

                        <div className="mt-10 flex gap-2">
                            {skillCategories.map((_, idx) => (
                                <div 
                                    key={idx} 
                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeSkill ? 'w-8 bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]' : 'w-2 bg-white/20'}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Scrollable Container */}
                    <div className="relative">
                        <div className="relative mx-auto w-full rounded-[2rem] border border-cyan-300/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(7,20,39,0.4))] p-2 backdrop-blur-md sm:p-4">
                            
                            <div 
                                ref={skillsViewportRef}
                                className="relative flex h-[550px] flex-col gap-6 overflow-y-auto px-2 py-[250px] scroll-smooth sm:px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-y snap-mandatory"
                            >
                                {skillCategories.map((category, index) => {
                                    const isActive = index === activeSkill;
                                    return (
                                        <div 
                                            key={category.title}
                                            ref={(el) => (skillCardRefs.current[index] = el)}
                                            className={`snap-center transition-all duration-700 ease-out ${isActive ? 'opacity-100 scale-100' : 'opacity-30 scale-[0.92] blur-[2px]'}`}
                                        >
                                            <div className="rounded-[1.5rem] bg-white/[0.03] border border-white/5 p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                                                <div className="mb-6 flex items-center gap-5">
                                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300 border border-cyan-300/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                                                        <i className={`${category.icon} text-2xl`} />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-white tracking-wide">{category.title}</h3>
                                                        <p className="text-sm text-cyan-200/60 font-mono mt-1">{category.description}</p>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-3">
                                                    {category.skills.map(skill => (
                                                        <div 
                                                            key={skill.name}
                                                            className="flex items-center gap-2.5 rounded-full border border-white/10 bg-black/20 px-4 py-2.5 text-sm font-medium text-white/90 transition-all hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                                                        >
                                                            <i className={`${skill.icon} text-lg`} />
                                                            <span>{skill.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
