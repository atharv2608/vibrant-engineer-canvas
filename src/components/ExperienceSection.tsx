
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);
  
  const experiences = [
    {
      company: "Contentstack",
      position: "Software Engineer",
      duration: "2022 - Present",
      description: "Working on enterprise-level content management solutions, building scalable and robust features for the Contentstack platform. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Led the development of a key feature that improved system performance by 40%",
        "Implemented CI/CD pipelines that reduced deployment time by 60%",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      company: "Previous Company",
      position: "Frontend Developer",
      duration: "2020 - 2022",
      description: "Developed and maintained responsive web applications using React and TypeScript. Worked closely with designers to implement pixel-perfect UIs and ensure optimal user experience.",
      achievements: [
        "Built and maintained several client-facing applications with React",
        "Implemented state management solutions using Redux and Context API",
        "Improved application load time by 30% through code optimization"
      ]
    },
    {
      company: "First Company",
      position: "Junior Developer",
      duration: "2018 - 2020",
      description: "Started as a junior developer working on full-stack web applications. Learned and applied various technologies and best practices in a professional environment.",
      achievements: [
        "Developed RESTful APIs using Node.js and Express",
        "Created responsive UIs with HTML, CSS, and JavaScript",
        "Collaborated on database design and implementation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      </div>
      
      <motion.div 
        className="container mx-auto px-4 md:px-6"
        style={{ opacity, y }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey as a software engineer.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-accent/50 to-transparent transform lg:-translate-x-0.5"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div 
                key={index}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Circle */}
                <div className="absolute left-4 lg:left-1/2 w-6 h-6 rounded-full bg-accent border-2 border-background transform -translate-y-1/2 lg:-translate-x-3"></div>
                
                {/* Left Content (visible on large screens) */}
                <div className={`hidden lg:block ${index % 2 === 0 ? 'text-right' : 'lg:col-start-2 text-left'}`}>
                  {index % 2 === 0 ? (
                    <div className="pr-12">
                      <motion.h3 
                        className="text-xl font-bold text-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        {experience.company}
                      </motion.h3>
                      <motion.p 
                        className="text-primary font-medium mb-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        {experience.position}
                      </motion.p>
                      <motion.p 
                        className="text-sm text-muted-foreground mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {experience.duration}
                      </motion.p>
                      <motion.p 
                        className="text-muted-foreground mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {experience.description}
                      </motion.p>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <motion.li 
                            key={achievementIndex} 
                            className="text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 + achievementIndex * 0.1 }}
                          >
                            • {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
                
                {/* Right Content (visible on large screens) */}
                <div className={`hidden lg:block ${index % 2 === 1 ? 'text-right' : 'lg:col-start-2 text-left'}`}>
                  {index % 2 === 1 ? (
                    <div className="pr-12">
                      <motion.h3 
                        className="text-xl font-bold text-foreground"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                      >
                        {experience.company}
                      </motion.h3>
                      <motion.p 
                        className="text-primary font-medium mb-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        {experience.position}
                      </motion.p>
                      <motion.p 
                        className="text-sm text-muted-foreground mb-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {experience.duration}
                      </motion.p>
                      <motion.p 
                        className="text-muted-foreground mb-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {experience.description}
                      </motion.p>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <motion.li 
                            key={achievementIndex} 
                            className="text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 + achievementIndex * 0.1 }}
                          >
                            • {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
                
                {/* Mobile Content (visible on small screens) */}
                <div className="lg:hidden ml-16">
                  <motion.h3 
                    className="text-xl font-bold text-foreground"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    {experience.company}
                  </motion.h3>
                  <motion.p 
                    className="text-primary font-medium mb-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {experience.position}
                  </motion.p>
                  <motion.p 
                    className="text-sm text-muted-foreground mb-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {experience.duration}
                  </motion.p>
                  <motion.p 
                    className="text-muted-foreground mb-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {experience.description}
                  </motion.p>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <motion.li 
                        key={achievementIndex} 
                        className="text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 + achievementIndex * 0.1 }}
                      >
                        • {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
