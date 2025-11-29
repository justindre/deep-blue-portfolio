import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Sparkles, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Heart,
      title: "User-Centered",
      description: "Every design decision starts with understanding user needs and pain points"
    },
    {
      icon: Sparkles,
      title: "Detail-Oriented",
      description: "Obsessed with pixel-perfect interfaces and delightful micro-interactions"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Working closely with teams to bring the best ideas to life"
    }
  ];

  return (
    <section id="about" ref={ref} className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 lg:p-12 mb-12"
          >
            <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed mb-6">
              I'm a passionate <span className="text-primary font-semibold">Product Designer</span> with 
              a love for creating intuitive and beautiful digital experiences. With a background in both 
              design and user research, I bridge the gap between user needs and business goals.
            </p>
            <p className="text-lg lg:text-xl text-foreground/90 leading-relaxed">
              My approach combines <span className="text-primary font-semibold">strategic thinking</span>, 
              meticulous attention to detail, and a deep understanding of user behavior. I believe great 
              design isn't just about how it looks—it's about how it works and how it makes people feel.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center group hover:glow-effect transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-full gradient-accent mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
