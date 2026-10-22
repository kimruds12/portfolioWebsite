import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getTagConfig } from './ProjectsPage';

export const getProjectAction = (project) => {
  if (!project) return null;
  const isWebsite = project.title === 'PLV-QLib' || project.title.startsWith('ARTA-CSS');
  if (isWebsite && project.href) {
    return {
      label: 'View Website',
      href: project.href,
      icon: 'fa-solid fa-arrow-up-right-from-square',
    };
  }
  if (project.href) {
    return {
      label: 'View Source',
      href: project.href,
      icon: 'fa-brands fa-github',
    };
  }
  return null;
};

const ProjectDetailsDialog = ({ project, onClose, triggerRef }) => {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    // Save previous overflow style and lock scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Move focus to close button
    const timer = setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      triggerRef?.current?.focus?.();
    };
  }, [project, onClose, triggerRef]);

  if (!project) return null;

  const action = getProjectAction(project);

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-project-title"
      >
        {/* Low-opacity dark backdrop - keeps page visible behind but visually subdued */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/65 backdrop-blur-[4px]"
          aria-hidden="true"
        />

        {/* Centered Modal Panel matching Reference Image 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="project-dialog-content relative z-10 w-full max-w-4xl lg:max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col justify-between"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'var(--border-color) transparent',
          }}
        >
          {/* Header Row: Metadata Badges + Fixed X Close Button */}
          <div className="flex items-start justify-between gap-4 pb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
                {project.category ? project.category.toUpperCase() : 'PROJECT'}
                {project.meta ? ` • ${project.meta.split('|')[0].trim()}` : ''}
              </span>

              {project.status && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-emerald-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.status}
                </span>
              )}

              {project.year && (
                <span className="rounded-full border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] text-[var(--text-muted)]">
                  {project.year}
                </span>
              )}
            </div>

            {/* X Close Button */}
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--surface-soft)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--surface-hover)] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] shadow-sm"
            >
              <i className="fa-solid fa-xmark text-sm" />
            </button>
          </div>

          {/* Project Title & Subtitle/Role */}
          <div className="mt-1">
            <h2
              id="dialog-project-title"
              className="font-['Sora',_sans-serif] text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text-main)] leading-tight"
            >
              {project.title}
            </h2>

            {project.role && (
              <p className="mt-1.5 text-xs sm:text-sm font-mono text-[var(--text-muted)]">
                {project.role}
              </p>
            )}
          </div>

          {/* Large Project Image Preview */}
          <div className="mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] flex items-center justify-center shadow-inner">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center gap-3 text-[var(--text-muted)] p-8">
                <i className="fa-solid fa-laptop-code text-5xl opacity-40" />
                <span className="text-xs font-mono opacity-60">Local System Architecture</span>
              </div>
            )}
          </div>

          {/* Full Project Description */}
          <div className="mt-6">
            <p className="text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
              {project.description}
            </p>
          </div>

          {/* Technology Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="mt-6">
              <span className="block font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2.5">
                TECHNOLOGIES USED
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => {
                  const config = getTagConfig(tag);
                  return (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs font-mono font-medium text-[var(--text-main)] shadow-2xs"
                    >
                      <i className={`${config.icon} text-xs shrink-0`} style={{ color: config.color }} />
                      <span>{tag}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {/* Allowed Action Buttons - Full Available Width */}
          {action && (
            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
              <a
                href={action.href}
                target="_blank"
                rel="noreferrer"
                className="group w-full inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--surface-soft)] hover:bg-[var(--surface-hover)] px-6 py-3 font-['Sora',_sans-serif] text-sm font-bold tracking-tight text-[var(--text-main)] shadow-sm hover:border-[var(--text-muted)] transition-all active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)]"
              >
                <i className={`${action.icon} text-sm transition-transform duration-200 group-hover:translate-x-0.5`} />
                <span>{action.label}</span>
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectDetailsDialog;
