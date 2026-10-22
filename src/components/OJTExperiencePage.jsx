import { useNavigate } from 'react-router-dom';

const OJTExperiencePage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex min-h-[70vh] items-start px-4 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <button
          type="button"
          onClick={() => navigate('/about?record=11ftc#credentials')}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--text-main)] shadow-sm transition hover:bg-[var(--surface-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)]"
        >
          <i className="fa-solid fa-arrow-left text-xs" />
          Back to Work Experience
        </button>
      </div>
    </section>
  );
};

export default OJTExperiencePage;
