import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Figma, Palette, Layout, Zap, Users, Code } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const coreSkills = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces",
      level: 95
    },
    {
      icon: Layout,
      title: "Design Systems",
      description: "Building scalable component libraries",
      level: 90
    },
    {
      icon: Users,
      title: "User Research",
      description: "Understanding user needs through research",
      level: 85
    },
    {
      icon: Zap,
      title: "Prototyping",
      description: "Interactive prototypes & user flows",
      level: 92
    }
  ];

  const tools = [
    { name: "Figma", icon: Figma },
    { name: "Miro", icon: Users },
    { name: "Framer", icon: Zap },
    { name: "Notion", icon: Code }
  ];

  const softSkills = [
    "Creative Problem Solving",
    "Effective Communication",
    "Team Collaboration",
    "Attention to Detail",
    "Time Management",
    "Adaptability"
  ];

  return (
    <section id="skills" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full" />
        </motion.div>

        {/* Core Skills */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-heading font-semibold mb-8 text-center"
          >
            Core Expertise
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6">
            {coreSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:glow-effect transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl gradient-accent">
                    <skill.icon className="text-primary-foreground" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-heading font-semibold mb-1">{skill.title}</h4>
                    <p className="text-muted-foreground text-sm">{skill.description}</p>
                  </div>
                </div>
                <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                    className="absolute top-0 left-0 h-full gradient-accent rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-heading font-semibold mb-8 text-center"
          >
            Design Tools
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="glass-card rounded-xl px-6 py-3 flex items-center gap-3 hover:glow-effect transition-all duration-300 group cursor-pointer"
              >
                <tool.icon className="text-primary group-hover:scale-110 transition-transform" size={20} />
                <span className="font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl font-heading font-semibold mb-8 text-center"
          >
            Soft Skills
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                className="px-5 py-2 rounded-full glass-card text-sm font-medium hover:gradient-accent hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
