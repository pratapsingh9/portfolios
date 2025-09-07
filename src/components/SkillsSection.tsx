import { FC } from 'react';
import { 
  FiCode, FiCloud, FiDatabase, FiSettings, FiUsers, 
  FiTrendingUp, FiTarget, FiEye, FiMessageCircle, 
  FiAward, FiStar, FiCpu, FiLayers 
} from 'react-icons/fi';
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
        return <FiEye className="w-4 h-4" />;
      case 'Modern Design Mindset':
        return <FiAward className="w-4 h-4" />;
      case 'Communication':
        return <FiMessageCircle className="w-4 h-4" />;
      default:
        return <FiStar className="w-4 h-4" />;
    }
  };

  return (
    <AnimatedSection id="skills" className="py-16 md:py-20 h-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-3">
          Skills & Technologies
        </h2>
        <p className="text-[var(--foreground-muted)] max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and professional strengths
        </p>
        <div className="w-20 h-1 bg-[var(--accent)] mx-auto mt-4 rounded-full"></div>
      </div>
      
      <div className="space-y-12">
        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center bg-[var(--muted)]/50 px-4 py-2 rounded-full">
              <FiCpu className="w-5 h-5 mr-2 text-[var(--accent)]" />
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                Technical Skills
              </h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.skills.technical.map((category, index) => (
              <div 
                key={category.title} 
                className="bg-[var(--muted)]/30 rounded-xl p-6 border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all duration-300 hover:shadow-lg group"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transform: 'translateY(0)'
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-[var(--accent)]/10 group-hover:bg-[var(--accent)]/20 transition-colors duration-300">
                    {getCategoryIcon(category.title)}
                  </div>
                  <h4 className="font-bold text-lg text-[var(--foreground)] ml-3">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium px-3 py-1.5 rounded-full border border-[var(--accent)]/20 hover:bg-[var(--accent)]/20 hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center bg-[var(--muted)]/50 px-4 py-2 rounded-full">
              <FiLayers className="w-5 h-5 mr-2 text-[var(--accent)]" />
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                Professional Strengths
              </h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioData.skills.nonTechnical.map((skill, index) => (
              <div 
                key={skill} 
                className="bg-[var(--muted)]/30 rounded-xl p-5 border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all duration-300 group hover:shadow-lg flex items-center"
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  transform: 'translateY(0)'
                }}
              >
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] group-hover:bg-[var(--accent)]/20 group-hover:scale-110 transition-all duration-300">
                    {getNonTechIcon(skill)}
                  </div>
                  <span className="font-medium text-[var(--foreground)] ml-3">
                    {skill}
                  </span>
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