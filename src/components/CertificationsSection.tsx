import { FC } from 'react';
import { FiAward } from 'react-icons/fi';
import { portfolioData } from '../data';
import AnimatedSection from './AnimatedSection';

const CertificationsSection: FC = () => (
  <AnimatedSection id="certifications">
    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-8 border-b border-[var(--border)] pb-2">Certifications</h2>
    <div className="space-y-6">
      {portfolioData.certifications.map((cert, index) => (
        <div key={index}>
          <h3 className="text-xl md:text-2xl font-bold text-[var(--accent)]">
            {cert.title}
          </h3>
          <div className="flex items-center text-sm text-slate-500 mt-1">
            <FiAward className="inline-block h-4 w-4 mr-1.5 opacity-70" />
            <span>{cert.issuer} &bull; {cert.date}</span>
          </div>
        </div>
      ))}
    </div>
  </AnimatedSection>
);

export default CertificationsSection;
