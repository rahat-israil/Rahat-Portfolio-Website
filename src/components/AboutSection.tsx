import { motion } from "framer-motion";
import { Code2, Bug, Gauge, Award } from "lucide-react";
import rahatProfile from "@/assets/rahat-profile.png";
import CountUp from "@/components/CountUp";

const highlights = [
  { icon: Code2, title: "Manual Testing & Automation", desc: "From detailed manual checks to scalable automated coverage" },
  { icon: Bug, title: "Bug Hunter", desc: "Finding critical issues before users do" },
  { icon: Gauge, title: "Performance", desc: "Ensuring apps run fast and smooth" },
  { icon: Award, title: "Quality First", desc: "Delivering excellence in every release" },
];

const stats = [
  { value: 8, suffix: "+", label: "Projects Tested" },
  { value: 320, suffix: "+", label: "Bugs Found & Documented" },
  { value: 4, suffix: "", label: "Certifications Earned" },
  { value: 0.5, suffix: "+", label: "Years of Experience" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const } },
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Get to know me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 rotate-6" />
              <div className="absolute inset-0 rounded-2xl border-4 border-primary/30 shadow-xl overflow-hidden">
                <img src={rahatProfile} alt="Rahat Bin Israil" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Hi, I'm <span className="text-primary">Rahat Bin Israil</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I’m a detail-oriented SQA Engineer with hands-on experience in manual and functional testing across real-world web and Android applications. I focus on identifying defects, validating functionality, and ensuring a reliable user experience through structured and thorough testing.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I’ve worked with test cases, acceptance testing, regression testing, smoke testing, cross-browser testing, API testing, and defect reporting using Jira. With a foundation in software development and a growing focus on test automation, I bring both a tester’s attention to detail and a developer’s mindset to every product I test.
            </p>
          </motion.div>
        </div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative bg-card border border-border rounded-xl p-6 text-center card-hover overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold text-primary font-mono mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="bg-card border border-border rounded-xl p-6 text-center card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
              <p className="text-muted-foreground text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
