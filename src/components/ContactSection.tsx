import { FC } from 'react';
import AnimatedSection from './AnimatedSection';

const ContactSection: FC = () => (
  <AnimatedSection id="contact" className="text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
      Get In Touch
    </h2>
    <p className="max-w-xl mx-auto text-slate-400 mb-8 leading-relaxed md:text-lg">
      I'm currently open to new opportunities and collaborations. My inbox is
      always open, feel free to reach out and I'll get back to you!
    </p>
    {/* Direct email link */}
    <a
      href="mailto:pratap.09082005@gmail.com"
      className="inline-block bg-[var(--accent)] text-white font-bold py-3 px-8 rounded-md shadow-lg hover:brightness-110 transform hover:scale-105 transition-all duration-300 ease-in-out"
    >
      Say Hello
    </a>
  </AnimatedSection>
);

export default ContactSection;
