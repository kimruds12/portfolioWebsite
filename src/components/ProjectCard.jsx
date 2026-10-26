import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';
import { getTagConfig } from './ProjectsPage';
import { getProjectAction } from './ProjectDetailsDialog';

const getCategoryLabel = (project) => {
  if (project.categoryLabel) return project.categoryLabel.toUpperCase();
  if (project.isLocal) return 'LOCAL SYSTEM';
  if (project.meta && project.meta.toLowerCase().includes('academic')) return 'SCHOOL PROJECTS';
  if (project.category === 'web') return 'WEB APPLICATIONS';
  if (project.category === 'mobile') return 'MOBILE APPS';
  if (project.category === 'game') return 'GAME PROJECTS';
  if (project.category === 'java') return 'JAVA PROJECTS';
  if (project.category === 'networking') return 'NETWORKING';
  if (project.category === 'prototype') return 'UI PROTOTYPE';
  return project.category ? project.category.toUpperCase() : 'PROJECT';
};

const ProjectCard = ({ project, index = 0, onOpenDetails }) => {
  const wrapperRef = useRef(null);
  const detailsBtnRef = useRef(null);

  // Framer Motion spring physics for ultra-smooth hardware-accelerated 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const translateYTarget = useMotionValue(0);
  const scaleTarget = useMotionValue(1);
  const glareOpacityTarget = useMotionValue(0);

  const springConfig = { stiffness: 280, damping: 22, mass: 0.35 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);
  const translateY = useSpring(translateYTarget, springConfig);
  const scale = useSpring(scaleTarget, springConfig);
  const glareOpacity = useSpring(glareOpacityTarget, { stiffness: 200, damping: 25 });

  // 3D rotation angles (up to ±10 degrees for distinct, clear perspective)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

  // Interactive dynamic specular glare highlight
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareBackground = useMotionTemplate`radial-gradient(circle 350px at ${glareX} ${glareY}, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 70%)`;

  const handleMouseMove = (e) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    // Normalizing coordinates from -0.5 to 0.5 relative to card center
    const normX = Math.max(-0.5, Math.min(0.5, (e.clientX - rect.left) / rect.width - 0.5));
    const normY = Math.max(-0.5, Math.min(0.5, (e.clientY - rect.top) / rect.height - 0.5));

    x.set(normX);
    y.set(normY);
    translateYTarget.set(-8);
    scaleTarget.set(1.02);
    glareOpacityTarget.set(1);
  };

  const handleMouseEnter = () => {
    translateYTarget.set(-8);
    scaleTarget.set(1.02);
    glareOpacityTarget.set(1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    translateYTarget.set(0);
    scaleTarget.set(1);
    glareOpacityTarget.set(0);
  };

  // Touch support for 2-in-1 laptops & touchscreens
  const handleTouchMove = (e) => {
    if (!wrapperRef.current || !e.touches || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = wrapperRef.current.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const normX = Math.max(-0.5, Math.min(0.5, (touch.clientX - rect.left) / rect.width - 0.5));
    const normY = Math.max(-0.5, Math.min(0.5, (touch.clientY - rect.top) / rect.height - 0.5));

    x.set(normX);
    y.set(normY);
    translateYTarget.set(-6);
    scaleTarget.set(1.01);
    glareOpacityTarget.set(0.8);
  };

  const handleTouchEnd = () => {
    x.set(0);
    y.set(0);
    translateYTarget.set(0);
    scaleTarget.set(1);
    glareOpacityTarget.set(0);
  };

  const action = getProjectAction(project);
  const hasGithub = Boolean(project.href && project.href.includes('github.com'));
  const isWebsite = Boolean(
    project.title === 'PLV-QLib' ||
    (project.href && !project.href.includes('github.com') && !project.isLocal)
  );

  return (
    <motion.div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: '-30px' }}
      className="w-full h-full relative"
      style={{ perspective: 1000 }}
    >
      <motion.article
        onClick={() => onOpenDetails?.(project, detailsBtnRef)}
        style={{
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
          y: translateY,
          scale,
        }}
        className="@container project-card-container project-tilt-card group relative flex flex-col justify-between rounded-3xl will-change-transform h-full select-none cursor-pointer"
      >
        {/* Interactive 3D specular light glare */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl z-30 overflow-hidden"
          style={{
            opacity: glareOpacity,
            background: glareBackground,
          }}
        />

        <div className="flex flex-col flex-1" style={{ transform: 'translateZ(16px)', transformStyle: 'preserve-3d' }}>
          {/* Image / Video Container */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface-soft)] border-b border-[var(--border-color)] rounded-t-3xl">
            <div className="absolute inset-[6px] overflow-hidden rounded-2xl bg-[var(--surface)]">
              {project.video || (project.image && project.image.endsWith('.mp4')) ? (
                <video
                  src={project.video || project.image}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none select-none"
                />
              ) : project.image ? (
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
                    <span className="text-xs font-mono opacity-70">Local System</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-5 @md:p-6 flex flex-col flex-1" style={{ transform: 'translateZ(20px)' }}>
            {/* Badges Row placed directly below Image */}
            <div className="flex items-center justify-between gap-2 mb-3">
              {/* Category Pill */}
              <span className="project-card-category inline-flex items-center rounded-md px-2.5 py-1 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-xs transition-colors">
                {getCategoryLabel(project)}
              </span>

              {/* Status Pill with Pulsing Indicator */}
              <span className="project-card-status inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] sm:text-[11px] font-semibold shadow-xs transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{project.status || 'Completed'}</span>
              </span>
            </div>

            {/* Title & Year */}
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="project-card-title font-['Sora',_sans-serif] text-base sm:text-lg @md:text-xl font-extrabold tracking-tight break-words transition-colors">
                {project.title}
              </h3>
              {project.year && (
                <span className="font-mono text-xs opacity-60 shrink-0">
                  {project.year}
                </span>
              )}
            </div>

            {/* Subtitle / Meta */}
            {project.meta && (
              <p className="project-card-meta mt-1 text-xs sm:text-[13px] font-semibold line-clamp-1 leading-snug transition-colors">
                {project.meta}
              </p>
            )}

            {/* Description */}
            <p className="project-card-desc mt-2.5 text-xs sm:text-[13px] leading-relaxed line-clamp-3 transition-colors">
              {project.description}
            </p>

            {/* Tech Tags / Icons */}
            {project.tags && project.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => {
                  const config = getTagConfig(tag);
                  return (
                    <span
                      key={tag}
                      className="project-card-tag inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-mono shadow-2xs transition-colors"
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
        <div
          className="project-card-footer flex items-center justify-between px-4 @md:px-5 py-3 @md:py-3.5 relative z-20 transition-colors rounded-b-3xl"
          style={{ transform: 'translateZ(24px)' }}
        >
          <div className="flex items-center gap-2">
            {isWebsite && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="project-card-btn inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer relative z-20 shadow-xs"
              >
                <span>Live</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
              </a>
            )}

            {hasGithub && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="project-card-btn inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer relative z-20 shadow-xs"
              >
                <i className="fa-brands fa-github text-xs" />
                <span>Source</span>
              </a>
            )}

            {!isWebsite && !hasGithub && action && (
              <a
                href={action.href}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="project-card-btn inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer relative z-20 shadow-xs"
              >
                <i className={`${action.icon} text-[10px]`} />
                <span>{action.label}</span>
              </a>
            )}
          </div>

          {/* Details Action Button */}
          <button
            ref={detailsBtnRef}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails?.(project, detailsBtnRef);
            }}
            className="project-card-details inline-flex items-center gap-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--text-main)] rounded-md px-2 py-1 cursor-pointer relative z-20"
            aria-label={`View details for ${project.title}`}
          >
            <span>Details</span>
            <i className="fa-solid fa-arrow-right text-[10px]" />
          </button>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default ProjectCard;
