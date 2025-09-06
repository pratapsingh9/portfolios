import { FC } from 'react';
import { FiCalendar, FiExternalLink } from 'react-icons/fi';
import { portfolioData } from '../data';
import AnimatedSection from './AnimatedSection';

const ProjectsSection: FC = () => (
  <AnimatedSection id="projects">
    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-8 border-b border-[var(--border)] pb-2">Featured Projects</h2>
    <div className="space-y-8">
      {portfolioData.projects.map((project, index) => (
        <div key={index}>
          <a href="#" className="inline-block group mb-2">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--accent)] transition-colors duration-300 group-hover:brightness-125 flex items-center">
              {project.title}
              <FiExternalLink className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
            </h3>
          </a>
          <div className="flex items-center text-sm text-slate-500 mb-3">
            <FiCalendar className="inline-block h-4 w-4 mr-1.5 opacity-70" />
            <span>Updated: {project.date}</span>
          </div>
          <p className="text-slate-400 leading-relaxed mb-4 md:text-lg">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="bg-[var(--muted)] text-[var(--foreground)] text-xs font-semibold px-3 py-1 rounded-full border border-[var(--border)]">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </AnimatedSection>
);

export default ProjectsSection;
