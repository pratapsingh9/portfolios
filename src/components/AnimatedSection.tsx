import { FC } from 'react';
import { useIntersectionObserver } from '../hooks';

interface AnimatedSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const AnimatedSection: FC<AnimatedSectionProps> = ({ children, id, className }) => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section 
      ref={ref} 
      id={id} 
      className={`py-8 md:py-12 transition-all duration-700 ease-out ${className || ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
