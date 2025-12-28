import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield, Heart, Sparkles, Star, ArrowUpRight } from "lucide-react";
import aaharithmImage from "@/assets/aaharithm-dashboard.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "KAVACH",
      category: "Cybersecurity",
      badge: "SIH 2025 Finalist",
      description:
        "An AI/ML-driven predictive system to forecast high-risk ATM withdrawal locations from cybercrime complaints using pattern detection and geospatial analysis. Features a real-time risk heatmap dashboard and alerting framework for law enforcement.",
      techStack: ["Python", "Flask", "Security Tools", "APIs"],
      icon: Shield,
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-500/10 to-orange-500/10",
      link: "#",
      github: "https://github.com/aloksingh123321",
      featured: true,
      image: null,
    },
    {
      title: "Aaharithm",
      category: "Health Tech",
      badge: "95% Accuracy",
      description:
        "Architected a Python/Flask backend and a rule-based AI engine that processes user health data to create personalized wellness plans with 95% recommendation accuracy using Ayurvedic principles.",
      techStack: ["Python", "Flask", "AI/ML", "REST API"],
      icon: Heart,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      link: "https://alok-aahritham.vercel.app/",
      github: "https://github.com/aloksingh123321",
      featured: false,
      image: aaharithmImage,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
          animate={{ x: [50, -50, 50], y: [-50, 50, -50] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl"
          animate={{ x: [-30, 30, -30], y: [30, -30, 30] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="section-title justify-center">
            <Sparkles className="w-4 h-4 text-primary" />
            Featured Projects
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold">
            Our Featured{" "}
            <span className="font-serif italic text-primary">Projects</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative"
            >
              {/* Glow effect */}
              <motion.div
                className={`absolute -inset-2 bg-gradient-to-br ${project.bgGradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500">
                {/* Project Header */}
                <div className={`relative h-52 overflow-hidden ${!project.image ? `bg-gradient-to-br ${project.bgGradient}` : ''}`}>
                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  ) : (
                    <>
                      {/* Animated pattern for non-image projects */}
                      <div className="absolute inset-0">
                        <motion.div
                          className="absolute inset-0 opacity-30"
                          style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                            backgroundSize: "24px 24px",
                          }}
                          animate={{ opacity: [0.1, 0.3, 0.1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                      </div>

                      {/* Icon */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <project.icon
                          size={80}
                          className="text-foreground/10 group-hover:text-primary/20 transition-colors duration-500"
                        />
                      </motion.div>
                    </>
                  )}

                  {/* Featured star */}
                  {project.featured && (
                    <motion.div
                      className="absolute top-4 right-16 z-10"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="w-6 h-6 text-primary fill-primary" />
                    </motion.div>
                  )}

                  {/* Badge */}
                  <motion.div
                    className="absolute top-4 left-4 z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className={`px-4 py-2 bg-gradient-to-r ${project.gradient} text-white text-xs font-bold rounded-full shadow-lg`}>
                      {project.badge}
                    </span>
                  </motion.div>

                  {/* Category */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-4 py-2 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full border border-border">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                        className="px-3 py-1.5 bg-secondary/50 border border-border text-xs font-medium rounded-lg text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 gap-2 group/btn"
                      asChild
                    >
                      <a href={project.github}>
                        <Github size={16} className="group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </a>
                    </Button>
                    <Button variant="default" size="sm" className="flex-1 gap-2 group/btn" asChild>
                      <a href={project.link}>
                        <ExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="heroOutline" size="lg" asChild>
              <a
                href="https://github.com/aloksingh123321"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-3"
              >
                View More Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ExternalLink size={18} />
                </motion.span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
