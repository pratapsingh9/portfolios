import { FC } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { portfolioData } from '../data';

const Footer: FC = () => (
  <footer className="py-8 mt-auto border-t border-[var(--border)]">
    <div className="container mx-auto px-6 md:px-8 max-w-3xl text-center text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="text-sm">&copy; {new Date().getFullYear()} {portfolioData.name}</p>
      <div className="flex items-center space-x-5">
        <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-slate-400 hover:text-[var(--accent)] transition-colors duration-300">
          <FiGithub className="h-5 w-5"/>
        </a>
        <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-[var(--accent)] transition-colors duration-300">
          <FiLinkedin className="h-5 w-5"/>
        </a>
        <a href={`mailto:${portfolioData.contact.email}`} aria-label="Email" className="text-slate-400 hover:text-[var(--accent)] transition-colors duration-300">
          <FiMail className="h-5 w-5"/>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
