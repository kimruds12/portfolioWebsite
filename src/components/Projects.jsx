import { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectDetailsDialog from './ProjectDetailsDialog';
import { categories, projects, getTagConfig } from './ProjectsPage';
import useProjectBatch from '../hooks/useProjectBatch';

export { projects, categories, getTagConfig };

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const activeTriggerRef = useRef(null);
  const gridRef = useRef(null);

  // GSAP ScrollTrigger.batch: rise project cards from 34px below in groups of up to 4, staggered 0.1s
  useProjectBatch(gridRef, [filteredProjects]);

  const handleOpenDetails = (project, triggerRef) => {
    activeTriggerRef.current = triggerRef?.current || triggerRef;
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'all' || project.category === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase();
      const titleMatch = project.title.toLowerCase().includes(query);
      const descMatch = project.description.toLowerCase().includes(query);
      const tagMatch = project.tags.some((tag) => tag.toLowerCase().includes(query));

      return titleMatch || descMatch || tagMatch;
    });
  }, [activeCategory, searchQuery]);

  const getCategoryCount = (key) => {
    if (key === 'all') return projects.length;
    return projects.filter((p) => p.category === key).length;
  };

  return (
    <section
      id="projects"
      className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <h2 className="mt-3 font-['Sora',_sans-serif] text-[clamp(2.4rem,5vw,3.8rem)] font-bold tracking-tight text-[var(--text-main)]">
              Projects
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[var(--text-muted)]">
              Here are some of my works, including web and mobile apps, games, and network configurations.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full max-w-xs self-center md:self-end">
            <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or keyword..."
              aria-label="Search projects"
              className="w-full rounded-full border border-[var(--border-color)] bg-[var(--surface-soft)] py-2.5 pl-9 pr-4 text-xs font-mono text-[var(--text-main)] placeholder-[var(--text-muted)] backdrop-blur-md transition-all focus:border-[var(--text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--text-muted)]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--text-muted)] hover:text-[var(--text-main)]"
                aria-label="Clear search"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            )}
          </div>
        </motion.div>

        {/* ── Category Filter Pills ── */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category.key;
            const count = getCategoryCount(category.key);
            return (
              <button
                key={category.key}
                type="button"
                onClick={() => setActiveCategory(category.key)}
                className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] ${isActive
                  ? 'bg-[var(--btn-strong-bg)] text-[var(--btn-strong-text)] shadow-md glass-neu-pill-active'
                  : 'bg-[var(--surface)] border border-[var(--border-color)] text-[var(--text-muted)] hover:border-[var(--text-muted)] hover:text-[var(--text-main)] shadow-xs'
                  }`}
              >
                <span>{category.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 font-mono text-[10px] ${isActive
                    ? 'bg-[var(--btn-strong-text)]/15 text-[var(--btn-strong-text)]'
                    : 'bg-[var(--surface-soft)] text-[var(--text-muted)]'
                    }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Project Cards Grid ── */}
        <div ref={gridRef} className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              project={project}
              index={index}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* Empty state when searching */}
        {filteredProjects.length === 0 && (
          <div className="mt-16 flex flex-col items-center justify-center py-20 text-center rounded-3xl border border-[var(--border-color)] bg-[var(--surface)]">
            <i className="fa-solid fa-folder-open text-4xl text-[var(--text-muted)] opacity-40 mb-3" />
            <p className="text-sm font-semibold text-[var(--text-main)]">No projects found</p>
            <p className="text-xs text-[var(--text-muted)] mt-1">Try another search keyword or select a different category.</p>
          </div>
        )}

        {/* Project Details Modal Dialog */}
        <ProjectDetailsDialog
          project={selectedProject}
          onClose={handleCloseDetails}
          triggerRef={activeTriggerRef}
        />

      </div>
    </section>
  );
};

export default Projects;
