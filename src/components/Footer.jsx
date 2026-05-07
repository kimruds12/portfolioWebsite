const Footer = () => {
  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-cyan-300/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
        <p>Cyber-futuristic portfolio experience with a polished AI-enabled developer identity.</p>
        <a href="#home" className="inline-flex items-center gap-2 text-white/55 transition hover:text-white">
          Back to top
          <i className="fa-solid fa-arrow-up text-xs" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
