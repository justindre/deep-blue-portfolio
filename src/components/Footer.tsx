import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-4">
            <h3 className="text-2xl font-heading font-bold text-gradient inline-block">
              Alex Chen
            </h3>
            <p className="text-muted-foreground mt-2">Product Designer</p>
          </div>

          <div className="w-16 h-0.5 gradient-accent mx-auto mb-6 rounded-full" />

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alex Chen. Crafted with passion and attention to detail.
          </p>

          <p className="text-xs text-muted-foreground mt-2">
            Designed in Figma · Built with React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
