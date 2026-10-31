const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/kimruds12',
    icon: 'fa-brands fa-github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kim-ruds-guston-4a1822374/',
    icon: 'fa-brands fa-linkedin-in',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/mikdurs.tugons/',
    icon: 'fa-brands fa-facebook-f',
  },
  {
    label: 'Email',
    href: 'mailto:kimrudsguston@gmail.com',
    icon: 'fa-solid fa-envelope',
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-page)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 items-center gap-6 sm:gap-8">

        {/* Left: Identity (Pyramid vertical stack strictly on mobile, horizontal row on desktop/tablet) */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 justify-center md:justify-start">
          <div className="flex h-9 w-9 items-center justify-center rounded-full overflow-hidden border border-[var(--border-color)] bg-[var(--surface-soft)] shrink-0">
            <img
              src="/Assets/KDLogo.jpg"
              alt="KimDev logo"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '/Assets/cleaned_logo.png';
              }}
            />
          </div>
          <div className="flex flex-col text-center md:text-left items-center md:items-start">
            <span className="font-['Sora',_sans-serif] text-sm font-bold text-[var(--text-main)] tracking-tight">
              Kim Ruds Guston
            </span>
            <span className="font-mono text-[11px] text-[var(--text-muted)] mt-0.5">
              Front-End Developer &bull; KimDev
            </span>
          </div>
        </div>

        {/* Center: Copyright */}
        <div className="flex flex-col items-center justify-center gap-1.5 text-center">
          <p className="text-xs font-mono text-[var(--text-muted)]">
            &copy; 2026 Kim Ruds Guston. All rights reserved.
          </p>
        </div>

        {/* Right: Connect (4 items matching Let's Connect: GitHub, LinkedIn, Facebook, Email) */}
        <div className="flex flex-col items-center md:items-end gap-2.5">
          <span className="font-['Sora',_sans-serif] text-base font-bold text-[var(--text-main)] tracking-tight">
            Connect
          </span>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 sm:h-11 sm:w-11 min-w-[40px] min-h-[40px] items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-main)] shadow-sm transition-all duration-200 ease-out hover:-translate-y-1.5 hover:bg-[var(--surface-hover)] hover:border-[var(--text-muted)] hover:shadow-lg hover:shadow-black/30 active:scale-90 active:translate-y-0.5 active:duration-75 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)]"
                aria-label={item.label}
                title={item.label}
              >
                <i className={`${item.icon} text-base sm:text-lg`} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;