
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 border-t border-white/10 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-gradient">Your Name</a>
            <p className="text-sm text-muted-foreground mt-2">
              Software Engineer at Contentstack
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((item, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg hover:bg-primary/80 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
