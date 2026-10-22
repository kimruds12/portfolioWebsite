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
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-page)] px-4 py-12 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">

        {/* Identity */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full overflow-hidden border border-[var(--border-color)] bg-[var(--surface-soft)]">
            <img
              src="/Assets/KDLogo.jpg"
              alt="KimDev logo"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = '/Assets/cleaned_logo.png';
              }}
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-['Sora',_sans-serif] text-sm font-bold text-[var(--text-main)] tracking-tight">
              Kim Ruds Guston
            </span>
            <span className="font-mono text-[11px] text-[var(--text-muted)]">
              Front-End Developer &bull; KimDev
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--surface-hover)] hover:border-[var(--text-muted)] transition-all shadow-xs"
              aria-label={item.label}
              title={item.label}
            >
              <i className={`${item.icon} text-sm`} />
            </a>
          ))}
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex flex-col items-center sm:items-end gap-1 text-xs font-mono text-[var(--text-muted)]">
          <p>© 2026 Kim Ruds Guston. All rights reserved.</p>
          <a
            href="#"
            onClick={handleScrollTop}
            className="hover:text-[var(--text-main)] transition-colors inline-flex items-center gap-1 font-sans text-xs font-semibold"
          >
            <span>Back to Top</span>
            <i className="fa-solid fa-arrow-up text-[10px]" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;