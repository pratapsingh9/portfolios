import { FC } from 'react';
import { FiCode, FiCloud, FiDatabase, FiSettings, FiUsers, FiTrendingUp, FiTarget, FiEye, FiMessageCircle } from 'react-icons/fi';
import { portfolioData } from '../data';
import AnimatedSection from './AnimatedSection';

const SkillsSection: FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Full-Stack Development':
        return <FiCode className="w-5 h-5" />;
      case 'Cloud & DevOps':
        return <FiCloud className="w-5 h-5" />;
      case 'Databases':
        return <FiDatabase className="w-5 h-5" />;
      case 'System':
        return <FiSettings className="w-5 h-5" />;
      default:
        return <FiCode className="w-5 h-5" />;
    }
  };

  const getNonTechIcon = (skill: string) => {
    switch (skill) {
      case 'Leadership':
        return <FiUsers className="w-4 h-4" />;
      case 'Persistence':
        return <FiTrendingUp className="w-4 h-4" />;
      case 'Structured Problem Solving':
        return <FiTarget className="w-4 h-4" />;
      case 'Curiosity':
        // FiLightbulb does not exist in react-icons/fi, use FiZap as a lightbulb alternative
        // FiZap is not imported, so use FiEye as a fallback for now
        return <FiEye className="w-4 h-4" />;
      case 'Modern Design Mindset':
        return <FiEye className="w-4 h-4" />;
      case 'Communication':
        return <FiMessageCircle className="w-4 h-4" />;
      default:
        return <FiUsers className="w-4 h-4" />;
    }
  };

  return (
    <AnimatedSection id="skills">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-8 border-b border-[var(--border)] pb-2">Skills & Technologies</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[var(--accent)] mb-6 flex items-center">
            <FiCode className="w-6 h-6 mr-3" />
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.skills.technical.map(category => (
              <div key={category.title} className="bg-[var(--muted)]/50 rounded-lg p-6 border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {getCategoryIcon(category.title)}
                  <h4 className="font-bold text-lg text-[var(--foreground)] ml-3">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium px-3 py-1.5 rounded-full border border-[var(--accent)]/20 hover:bg-[var(--accent)]/20 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[var(--accent)] mb-6 flex items-center">
            <FiUsers className="w-6 h-6 mr-3" />
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioData.skills.nonTechnical.map(skill => (
              <div key={skill} className="bg-[var(--muted)]/30 rounded-lg p-4 border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300 group">
                <div className="flex items-center">
                  <div className="text-[var(--accent)] group-hover:scale-110 transition-transform duration-200">
                    {getNonTechIcon(skill)}
                  </div>
                  <span className="font-medium text-[var(--foreground)] ml-3 text-sm">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;
