import { FC } from 'react';
import { useTheme, useActiveLink } from './hooks';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';

const App: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const activeLink = useActiveLink();

  return (
    <>
      <style>{`
        :root, html[data-theme="light"] {
            --background: #ffffff;
            --foreground: #1f2937;
            --accent: #3b82f6;
            --muted: #f1f5f9;
            --border: #e5e7eb;
        }
        html[data-theme="dark"] {
            --background: #0d1117;
            --foreground: #c9d1d9;
            --accent: #3b82f6;
            --muted: #161b22;
            --border: #303d36;
        }
        .active-nav {
            text-decoration-line: underline;
            text-decoration-style: wavy;
            text-decoration-color: var(--accent);
            text-decoration-thickness: 2px;
            text-underline-offset: 4px;
        }
        :target {
            scroll-margin-block: 5rem;
        }
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
      <div className="bg-[var(--background)] text-[var(--foreground)] font-mono leading-normal tracking-tight min-h-screen flex flex-col">
        <Header theme={theme} toggleTheme={toggleTheme} activeLink={activeLink} />
        {/* The change is in the line below */}
        <main className="container mx-auto px-6 md:px-8 max-w-5xl flex-grow">
          <HomeSection />
          <ProjectsSection />
          <SkillsSection />
          <CertificationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App;