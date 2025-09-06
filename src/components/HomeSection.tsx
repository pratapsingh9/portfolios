import { FC } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { portfolioData } from '../data';
import AnimatedSection from './AnimatedSection';

const HomeSection: FC = () => (
  <AnimatedSection id="home">
    <h1 className="text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-2 tracking-tight">
      {portfolioData.name}
    </h1>
    <p className="text-lg md:text-xl  text-slate-400 mb-6">{portfolioData.role}</p>
    <p className="max-w-xl md:text-lg text-slate-400 mb-8 leading-relaxed">
      {portfolioData.bio}
    </p>
    <div className="flex items-center text-slate-400">
      <p className="mr-4">Connect with me:</p>
      <div className="flex items-center space-x-4">
        <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="Github" className="hover:text-[var(--accent)] transition-colors duration-300">
          <FiGithub className="h-5 w-5"/>
        </a>
        <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[var(--accent)] transition-colors duration-300">
          <FiLinkedin className="h-5 w-5"/>
        </a>
        <a href={`mailto:${portfolioData.contact.email}`} aria-label="Email" className="hover:text-[var(--accent)] transition-colors duration-300">
          <FiMail className="h-5 w-5"/>
        </a>
      </div>
    </div>
  </AnimatedSection>
);

export default HomeSection;
