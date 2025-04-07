
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      toast({
        title: "Message sent!",
        description: "I'll get back to you as soon as possible.",
        variant: "default",
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-background via-background to-transparent opacity-80" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? 
            I'd love to hear from you.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out through any of the following methods. 
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="rounded-full p-3 bg-secondary/50">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="rounded-full p-3 bg-secondary/50">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <p className="text-muted-foreground">(+1) 123-456-7890</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="rounded-full p-3 bg-secondary/50">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </motion.div>
            </div>
            
            {/* Social Links */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-medium mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {[
                  { label: "GitHub", url: "#" },
                  { label: "LinkedIn", url: "#" },
                  { label: "Twitter", url: "#" },
                  { label: "Medium", url: "#" }
                ].map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    className="rounded-full h-10 w-10 flex items-center justify-center bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                    aria-label={social.label}
                  >
                    <span className="text-sm font-medium">{social.label.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-6 rounded-xl border border-white/10 bg-secondary/20 relative card-glow">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <motion.div 
                  className="flex flex-col items-center justify-center text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <CheckCircle className="w-16 h-16 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background/70 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background/70 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Your email"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background/70 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Subject"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-background/70 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                        placeholder="Your message"
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium ${
                        isSubmitting 
                        ? 'bg-primary/70 cursor-not-allowed' 
                        : 'bg-primary hover:bg-primary/80'
                      } text-white transition-colors`}
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="inline-flex items-center">
                          <Send className="w-4 h-4 mr-2" /> Send Message
                        </span>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
