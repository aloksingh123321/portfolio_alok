import { motion, Variants } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Sparkles, Code2, Trophy, Zap } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { label: "Years Coding", value: "3+", icon: Code2 },
    { label: "Projects", value: "2+", icon: Zap },
    { label: "Hackathons", value: "5+", icon: Trophy },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          {/* Left Column - About Text */}
          <div>
            <motion.div variants={itemVariants} className="section-title">
              <Sparkles className="w-4 h-4 text-primary" />
              About Me
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6">
              Dedicated CS Student{" "}
              <span className="font-serif italic text-primary">&</span>
              <br />
              <span className="font-serif italic text-primary">Developer</span>{" "}
              <span className="text-muted-foreground">in India</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg leading-relaxed mb-8"
            >
              I am Alok Kumar Singh, a dedicated student with a keen interest in academic learning and skill development. I am focused on building a strong foundation in Computer Science while continuously improving my knowledge. Self-motivated and responsible, I am committed to solving real-world problems through technology.
            </motion.p>

            {/* Stats Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-4 text-center hover:border-primary/50 transition-colors duration-300">
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skill tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
              {["Python Developer", "AI/ML Enthusiast", "Cybersecurity", "Backend Dev", "Problem Solver"].map(
                (tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                    className="px-4 py-2 bg-secondary border border-border rounded-full text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300 cursor-default"
                  >
                    {tag}
                  </motion.span>
                )
              )}
            </motion.div>

            <motion.a
              variants={itemVariants}
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-medium group"
              whileHover={{ x: 5 }}
            >
              Let's work together
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </div>

          {/* Right Column - Education */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              {/* Decorative ring */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl blur-2xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 hover:border-primary/50 transition-colors duration-500">
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center shrink-0"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <GraduationCap className="text-primary" size={28} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Education</h3>
                    <p className="text-sm text-muted-foreground">Academic Background</p>
                  </div>
                </div>

                {/* Education Card */}
                <motion.div
                  className="bg-secondary/30 border border-border rounded-2xl p-6 mb-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-3">
                    <motion.span
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Currently Pursuing
                  </div>

                  <h4 className="text-lg font-semibold mb-2">B.Tech in Computer Science</h4>
                  <p className="text-muted-foreground mb-4">Shri Ramswaroop Memorial University</p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary" />
                      <span>2023 - 2027</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-primary" />
                      <span>Lucknow, India</span>
                    </div>
                  </div>
                </motion.div>

                {/* Highlight */}
                <motion.div
                  className="relative p-5 rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
                  <div className="absolute inset-0 border border-primary/30 rounded-2xl" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        className="text-2xl"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🏆
                      </motion.div>
                      <span className="text-primary font-bold">Smart India Hackathon 2025</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Finalist with Project KAVACH - An AI-based predictive analytics system forecasting cybercrime cash withdrawal locations with 93%+ accuracy. Architected a scalable real-time backend processing 60,000+ transactions at ~200ms latency.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
