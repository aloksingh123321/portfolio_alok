import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technicalSkills = [
    { name: "Python", level: 90, color: "from-yellow-400 to-yellow-600" },
    { name: "C", level: 85, color: "from-blue-400 to-blue-600" },
    { name: "Java", level: 50, color: "from-red-400 to-red-600" },
    { name: "JavaScript", level: 50, color: "from-yellow-300 to-yellow-500" },
  ];

  const softSkills = [
    { name: "Team Leadership", icon: "👥", description: "Leading collaborative projects" },
    { name: "Problem Solving", icon: "💡", description: "Analytical thinking approach" },
    { name: "Adaptability", icon: "🔄", description: "Quick to learn new tech" },
    { name: "Communication", icon: "💬", description: "Clear technical writing" },
  ];

  const tools = [
    { name: "Git", icon: "📦" },
    { name: "VS Code", icon: "💻" },
    { name: "Linux", icon: "🐧" },
    { name: "Docker", icon: "🐳" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "REST APIs", icon: "🔗" },
    { name: "Postman", icon: "📬" },
    { name: "Figma", icon: "🎨" },
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
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
            My Skills
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold">
            Let's Explore{" "}
            <span className="font-serif italic text-primary">Skills</span>
            <br />& <span className="font-serif italic text-primary">Experience</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Technical Skills */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 h-full hover:border-primary/50 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">⚡</span>
                Technical Skills
              </h3>

              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <motion.span
                        className="text-primary font-bold text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden relative">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 h-full hover:border-primary/50 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">🎯</span>
                Soft Skills
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-secondary/30 border border-border rounded-2xl p-4 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default group/card"
                  >
                    <motion.div
                      className="text-3xl mb-2"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <div className="font-medium text-sm mb-1">{skill.name}</div>
                    <div className="text-xs text-muted-foreground opacity-0 group-hover/card:opacity-100 transition-opacity">
                      {skill.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold mb-8 text-muted-foreground">
            Tools & Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-card/80 backdrop-blur-sm border border-border rounded-xl text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2 cursor-default"
              >
                <span className="text-lg">{tool.icon}</span>
                {tool.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
