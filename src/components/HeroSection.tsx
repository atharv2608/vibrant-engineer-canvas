
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HeroSection = () => {
  const profileImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!profileImageRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = profileImageRef.current.getBoundingClientRect();
      
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const moveX = (clientX - centerX) / 25;
      const moveY = (clientY - centerY) / 25;
      
      profileImageRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background to-secondary/30" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p 
              className="text-accent font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Your Name
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl font-medium text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Software Engineer at Contentstack
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I craft elegant solutions through code, specializing in building exceptional 
              digital experiences with a focus on performance and user experience.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/80 transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium border border-primary text-primary hover:bg-primary/10 transition-colors"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full blur-2xl bg-gradient-to-tr from-primary/20 via-accent/20 to-primary/20 animate-pulse" style={{ animationDuration: '4s' }} />
              
              <div 
                ref={profileImageRef}
                className="relative w-64 h-64 md:w-80 md:h-80 transition-transform duration-200 group"
              >
                <Avatar className="w-full h-full border-4 border-white/10 shadow-xl">
                  <AvatarImage 
                    src="/placeholder.svg" 
                    alt="Your profile photo"
                    className="object-cover" 
                  />
                  <AvatarFallback className="bg-gradient-to-br from-primary/30 to-accent/30 text-foreground text-4xl font-bold flex items-center justify-center">
                    YN
                  </AvatarFallback>
                </Avatar>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary animate-pulse" style={{ animationDuration: '2s' }} />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-accent animate-pulse" style={{ animationDuration: '3s' }} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator - Updated to be more responsive */}
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 w-full flex flex-col items-center"
          style={{ bottom: "5vh" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="text-sm text-muted-foreground mb-2 hidden sm:block">Scroll Down</span>
          <motion.button
            onClick={scrollToNextSection}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            aria-label="Scroll to next section"
          >
            <ChevronDown className="text-primary w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
