import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import designerPortrait from '@/assets/designer-portrait.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-primary opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 glass-card rounded-full mb-6"
            >
              <span className="text-primary font-medium">Available for new projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-heading font-bold mb-4"
            >
              Hi, I'm <span className="text-gradient">Onyeka Justin</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl lg:text-4xl font-heading font-medium mb-6 text-foreground/80"
            >
              Product Designer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Designing intuitive experiences that feel like home.
              <br />
              Building digital products that users love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="gradient-accent glow-effect-hover text-lg px-8 py-6 rounded-full group"
              >
                View My Work
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
              </Button>
            </motion.div>
          </motion.div>

          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-accent opacity-20 blur-3xl rounded-full" />
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-card glow-effect p-2">
                  <img
                    src={designerPortrait}
                    alt="Onyeka Justin - Product Designer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-muted-foreground" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
