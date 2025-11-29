import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      icon: Briefcase,
      type: "Work Experience",
      title: "Senior Product Designer",
      organization: "TechFlow Inc.",
      period: "2022 - Present",
      description: "Leading design initiatives for enterprise SaaS products, managing design systems, and mentoring junior designers.",
      highlights: ["Redesigned core product", "Built design system", "Led team of 4 designers"]
    },
    {
      icon: Briefcase,
      type: "Work Experience",
      title: "Product Designer",
      organization: "StartupHub",
      period: "2020 - 2022",
      description: "Designed user experiences for multiple startup products, conducted user research, and collaborated with cross-functional teams.",
      highlights: ["User research", "Rapid prototyping", "A/B testing"]
    },
    {
      icon: Award,
      type: "Certification",
      title: "UX Design Certification",
      organization: "Interaction Design Foundation",
      period: "2021",
      description: "Comprehensive certification in user experience design, covering research methods, design thinking, and usability testing.",
      highlights: []
    },
    {
      icon: Award,
      type: "Certification",
      title: "Product Management Fundamentals",
      organization: "Product School",
      period: "2020",
      description: "Understanding product strategy, roadmapping, and cross-functional collaboration.",
      highlights: []
    },
    {
      icon: GraduationCap,
      type: "Education",
      title: "Bachelor of Design",
      organization: "Design University",
      period: "2016 - 2020",
      description: "Focused on interaction design, visual communication, and human-computer interaction.",
      highlights: []
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Experience & <span className="text-gradient">Qualifications</span>
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden lg:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-${index}`}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="relative"
              >
                <div className="flex gap-6 items-start">
                  {/* Icon */}
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full gradient-accent glow-effect flex-shrink-0 relative z-10">
                    <exp.icon className="text-primary-foreground" size={24} />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 glass-card rounded-2xl p-6 hover:glow-effect transition-all duration-300 group">
                    <div className="flex lg:hidden items-center gap-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full gradient-accent glow-effect">
                        <exp.icon className="text-primary-foreground" size={20} />
                      </div>
                      <span className="text-sm text-primary font-medium">{exp.type}</span>
                    </div>

                    <div className="hidden lg:block text-sm text-primary font-medium mb-2">{exp.type}</div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                      <h3 className="text-xl font-heading font-semibold group-hover:text-gradient transition-all">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-muted-foreground font-medium px-3 py-1 rounded-full glass-card w-fit">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-primary font-medium mb-3">{exp.organization}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    {exp.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
