
import { motion } from 'framer-motion';
import { Code, Briefcase, GitBranch, Rocket } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    'JavaScript/TypeScript', 'React', 'Node.js', 'Next.js',
    'GraphQL', 'REST APIs', 'CSS/SCSS', 'Tailwind CSS',
    'Git/GitHub', 'CI/CD', 'Docker', 'Cloud Services',
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate software engineer with a keen eye for detail and a love for building innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a software engineer currently working at Contentstack, where I develop scalable and robust solutions 
                that help businesses manage their digital content effectively.
              </p>
              <p>
                With a strong foundation in both frontend and backend technologies, I enjoy tackling complex problems 
                and transforming them into simple, elegant solutions. I'm passionate about clean code, performance optimization, 
                and creating exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you might find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { 
                icon: <Code className="text-primary h-8 w-8" />, 
                title: "Clean Code", 
                description: "I write maintainable, scalable and well-documented code."
              },
              { 
                icon: <Briefcase className="text-primary h-8 w-8" />, 
                title: "Experience", 
                description: "Years of experience in building production-ready applications."
              },
              { 
                icon: <GitBranch className="text-primary h-8 w-8" />, 
                title: "Collaboration", 
                description: "I thrive in team environments with a collaborative approach."
              },
              { 
                icon: <Rocket className="text-primary h-8 w-8" />, 
                title: "Innovation", 
                description: "I'm always exploring new technologies and methodologies."
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="p-6 rounded-xl border border-white/10 bg-secondary/50 hover-effect hover:border-primary/50 hover:shadow-md relative overflow-hidden card-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="px-4 py-2 rounded-full bg-secondary text-foreground border border-white/10 hover:border-primary/50 hover-effect"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
