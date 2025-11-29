import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "HealthTrack Mobile App",
      description: "A comprehensive health tracking app with intuitive UI, helping users monitor their wellness journey with personalized insights and beautiful data visualization.",
      image: project1,
      tags: ["Mobile App", "Health & Wellness", "UI/UX"],
      link: "#"
    },
    {
      title: "EcoShop E-Commerce",
      description: "Modern e-commerce platform for sustainable products. Features include smart product filtering, seamless checkout, and an engaging shopping experience.",
      image: project2,
      tags: ["E-Commerce", "Web Design", "Design System"],
      link: "#"
    },
    {
      title: "DataViz Dashboard",
      description: "Enterprise analytics dashboard with complex data visualization, real-time updates, and customizable views for business intelligence.",
      image: project3,
      tags: ["Dashboard", "Data Viz", "SaaS"],
      link: "#"
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-4">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my latest work, showcasing design thinking and user-centered solutions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="glass-card rounded-3xl overflow-hidden group hover:glow-effect transition-all duration-500"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
                {/* Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full glass-card text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-heading font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <Button
                    variant="ghost"
                    className="w-fit gradient-accent text-primary-foreground px-6 py-3 rounded-xl group/btn hover:glow-effect"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-2 transition-transform" size={18} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary/50 hover:border-primary hover:glow-effect px-8 py-6 text-lg rounded-full group"
          >
            View All Projects
            <ExternalLink className="ml-2 group-hover:scale-110 transition-transform" size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
