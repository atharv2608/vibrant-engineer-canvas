
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Web', 'Mobile', 'Backend'];
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform with user authentication, product catalog, and payment integration.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "A mobile-first task management application with drag-and-drop interface and real-time updates.",
      image: "/placeholder.svg",
      tags: ["React Native", "Firebase", "Redux"],
      category: "Mobile",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "API Gateway Service",
      description: "A microservice architecture API gateway with authentication, rate limiting, and request routing.",
      image: "/placeholder.svg",
      tags: ["Node.js", "Express", "Docker", "Kubernetes"],
      category: "Backend",
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Content Management System",
      description: "A custom CMS built for content creators with a rich text editor and media management.",
      image: "/placeholder.svg",
      tags: ["Next.js", "GraphQL", "PostgreSQL"],
      category: "Web",
      demoLink: "#",
      githubLink: "#"
    }
  ];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience.
          </p>
        </motion.div>
        
        {/* Project Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter 
                ? 'bg-primary text-white' 
                : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group rounded-xl overflow-hidden border border-white/10 bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 relative card-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Project Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-1 bg-background/80 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.demoLink} 
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* More Projects Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a 
            href="#" 
            className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
