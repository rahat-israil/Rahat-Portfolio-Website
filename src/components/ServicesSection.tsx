import { motion } from "framer-motion";
import { ClipboardCheck, Bot, Globe, Gauge, FileText, Bug, CheckCircle, Monitor, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Manual Testing",
    desc: "Thorough manual testing with detailed test cases, exploratory testing, and comprehensive bug reporting.",
  },
  {
    icon: Bot,
    title: "Automation Testing",
    desc: "Building scalable automation frameworks using Selenium, Playwright, and Cypress for efficient regression testing.",
  },
  {
    icon: Globe,
    title: "API Testing",
    desc: "REST & GraphQL API testing with Postman, ensuring endpoint reliability, data integrity, and proper error handling.",
  },
  {
    icon: Gauge,
    title: "Performance Testing",
    desc: "Load and stress testing with JMeter and LoadRunner to identify bottlenecks and ensure scalability.",
  },
  {
    icon: FileText,
    title: "Test Case Design",
    desc: "Creating comprehensive test strategies, test plans, and well-structured test cases for complete coverage.",
  },
  {
    icon: Bug,
    title: "Bug Tracking & Reporting",
    desc: "Detailed bug documentation with clear reproduction steps, severity assessment, and tracking through resolution.",
  },
  {
    icon: CheckCircle,
    title: "Functional Testing",
    desc: "Validating software features against requirements to ensure every function works correctly and reliably.",
  },
  {
    icon: Monitor,
    title: "GUI Testing",
    desc: "Verifying user interface elements, layout consistency, and usability across devices and screen sizes.",
  },
  {
    icon: ShieldCheck,
    title: "Defect Validation",
    desc: "Re-testing fixed defects, confirming resolutions, and ensuring no regressions slip through.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">What I offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Services</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group bg-card border border-border rounded-xl p-6 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
