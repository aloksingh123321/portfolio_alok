import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Send, MapPin, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/aloksingh123c@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _template: "table", // Optional: makes the email look nicer
          _subject: `New Portfolio Contact: ${formData.subject}`,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aloksingh123c@gmail.com",
      href: "mailto:aloksingh123c@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9555707521",
      href: "tel:+919555707521",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/alok-singh-76ab99381",
      color: "hover:bg-[#0077B5]",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/aloksingh123321",
      color: "hover:bg-[#333]",
    },
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
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [-50, 50, -50] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], y: [-30, 30, -30] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Contact Info */}
          <div>
            <motion.div variants={itemVariants} className="section-title">
              <Sparkles className="w-4 h-4 text-primary" />
              Contact Me
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6">
              Get In Touch{" "}
              <span className="font-serif italic text-primary">Today</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-muted-foreground text-lg mb-10 max-w-md">
              Ready to collaborate or have a question? Feel free to reach out
              through any of the channels below.
            </motion.p>

            {/* Contact Cards */}
            <motion.div variants={itemVariants} className="space-y-4 mb-10">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 p-4 bg-card/80 backdrop-blur-sm border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 group"
                >
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <item.icon className="text-white" size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links & WhatsApp */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-semibold text-muted-foreground mb-4">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4 items-center">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center ${link.color} hover:border-transparent hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl`}
                    aria-label={link.label}
                  >
                    <link.icon size={22} />
                  </motion.a>
                ))}

                {/* WhatsApp Button */}
                <motion.a
                  href="https://wa.me/919555707521?text=Hi%20Alok,%20I%20want%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-2xl font-medium shadow-lg hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl blur-2xl opacity-50"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 hover:border-primary/30 transition-colors duration-500">
              <h3 className="text-2xl font-bold mb-2">Leave A Message</h3>
              <p className="text-muted-foreground text-sm mb-6">I'll respond within 24 hours</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="text-sm font-medium mb-2 block text-muted-foreground">
                      Your Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-secondary/50 border-border focus:border-primary h-12 rounded-xl transition-all duration-300"
                    />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="text-sm font-medium mb-2 block text-muted-foreground">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-secondary/50 border-border focus:border-primary h-12 rounded-xl transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <label className="text-sm font-medium mb-2 block text-muted-foreground">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+91 1234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-secondary/50 border-border focus:border-primary h-12 rounded-xl transition-all duration-300"
                  />
                </motion.div>

                <div>
                  <label className="text-sm font-medium mb-2 block text-muted-foreground">
                    Subject
                  </label>
                  <Input
                    placeholder="How can I help you?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-secondary/50 border-border focus:border-primary h-12 rounded-xl transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-secondary/50 border-border focus:border-primary resize-none rounded-xl transition-all duration-300"
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full gap-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Send size={18} />
                        </motion.span>
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
