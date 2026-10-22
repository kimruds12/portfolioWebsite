import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { getTagConfig } from './ProjectsPage';
import { getProjectAction } from './ProjectDetailsDialog';

const ProjectCard = ({ project, index = 0, onOpenDetails }) => {
  const cardRef = useRef(null);
  const detailsBtnRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, translateY: 0, isActive: false });

  const updateTilt = (clientX, clientY) => {
    if (shouldReduceMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5; // -0.5 (left) to 0.5 (right)
    const y = (clientY - rect.top) / rect.height - 0.5; // -0.5 (upper) to 0.5 (lower)

    // Direction matching specification:
    // Upper right (y < 0, x > 0): rotateX > 0, rotateY > 0 -> tilts upward and right
    // Upper left (y < 0, x < 0): rotateX > 0, rotateY < 0 -> tilts upward and left
    // Lower right (y > 0, x > 0): rotateX < 0, rotateY > 0 -> tilts downward and right
    // Lower left (y > 0, x < 0): rotateX < 0, rotateY < 0 -> tilts downward and left
    const maxRot = 6;
    const rotateX = -y * maxRot * 2;
    const rotateY = x * maxRot * 2;
    const clampedRotateX = Math.max(-maxRot, Math.min(maxRot, rotateX));
    const clampedRotateY = Math.max(-maxRot, Math.min(maxRot, rotateY));

    setTilt({
      rotateX: clampedRotateX,
      rotateY: clampedRotateY,
      translateY: -5,
      isActive: true,
    });
  };

  const handlePointerMove = (e) => {
    // Do not tilt while a button, link, tag, or Details action is being hovered/clicked
    if (e.target.closest('button, a, input, select, [role="button"]')) {
      setTilt({ rotateX: 0, rotateY: 0, translateY: 0, isActive: false });
      return;
    }
    updateTilt(e.clientX, e.clientY);
  };

  const handlePointerDown = (e) => {
    if (e.target.closest('button, a, input, select, [role="button"]')) return;
    updateTilt(e.clientX, e.clientY);
  };

  const handleReset = () => {
    setTilt({ rotateX: 0, rotateY: 0, translateY: 0, isActive: false });
  };

  const action = getProjectAction(project);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: '-30px' }}
      className="w-full h-full"
      style={{ perspective: 1000 }}
    >
      <article
        ref={cardRef}
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerLeave={handleReset}
        onPointerUp={handleReset}
        onPointerCancel={handleReset}
        style={{
          transformStyle: 'preserve-3d',
          transform: shouldReduceMotion
            ? 'none'
            : tilt.isActive
            ? `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(${tilt.translateY}px)`
            : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
          transition: tilt.isActive
            ? 'transform 100ms ease-out'
            : 'transform 380ms cubic-bezier(0.16, 1, 0.3, 1)',
          touchAction: 'pan-y',
        }}
        className="glass-neu-card project-tilt-card group flex flex-col justify-between overflow-hidden rounded-3xl will-change-transform h-full select-none cursor-default"
      >
        <div>
          {/* Image Container with Badges */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface-soft)] border-b border-[var(--border-color)]">
            <div className="absolute inset-[6px] overflow-hidden rounded-2xl">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none select-none"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center p-6 text-[var(--text-muted)] bg-[var(--surface-soft)] rounded-2xl">
                  <div className="flex flex-col items-center gap-3">
                    <i className="fa-solid fa-laptop-code text-4xl opacity-40" />
                    <span className="text-xs font-mono opacity-60">Local System</span>
                  </div>
                </div>
              )}
            </div>

            {/* Badges Overlay */}
            <div className="absolute inset-x-3 top-3 flex items-center justify-between pointer-events-none">
              <span className="rounded-full border border-[var(--border-color)] bg-[var(--surface)]/90 px-2.5 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider text-[var(--text-main)] backdrop-blur-md">
                {project.isLocal ? 'LOCAL' : (project.category ? project.category.toUpperCase() : 'PROJECT')}
              </span>
              {project.status && (
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-500 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.status}
                </span>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-['Sora',_sans-serif] text-lg font-bold text-[var(--text-main)] tracking-tight">
                {project.title}
              </h3>
              {project.year && (
                <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">
                  {project.year}
                </span>
              )}
            </div>

            {project.meta && (
              <p className="mt-1 text-xs font-medium text-[var(--text-muted)] line-clamp-1">
                {project.meta}
              </p>
            )}

            <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)] line-clamp-3">
              {project.description}
            </p>

            {/* Tech Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => {
                  const config = getTagConfig(tag);
                  return (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-soft)] px-2.5 py-1 text-[11px] font-mono text-[var(--text-main)] shadow-2xs"
                    >
                      <i className={`${config.icon} text-xs shrink-0`} style={{ color: config.color }} />
                      <span>{tag}</span>
                    </span>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="flex items-center justify-between border-t border-[var(--border-color)] px-5 py-3.5 bg-[var(--surface-soft)]/50">
          <div className="flex items-center gap-2">
            {action ? (
              <a
                href={action.href}
                target="_blank"
                rel="noreferrer"
                className="glass-neu-pill inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold text-[var(--text-main)] hover:opacity-90 shadow-xs transition-opacity"
              >
                <i className={`${action.icon} text-[10px]`} />
                <span>{action.label}</span>
              </a>
            ) : null}
          </div>

          {/* Details Action Button - opens modal */}
          <button
            ref={detailsBtnRef}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails?.(project, detailsBtnRef);
            }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--text-main)] rounded-md px-1 py-0.5"
            aria-label={`View details for ${project.title}`}
          >
            <span>Details</span>
            <i className="fa-solid fa-arrow-right text-[10px]" />
          </button>
        </div>
      </article>
    </motion.div>
  );
};

export default ProjectCard;
