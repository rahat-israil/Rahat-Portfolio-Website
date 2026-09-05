import { motion } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

interface Skill {
  name: string;
  color: string;
  percent: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface SkillLogo {
  name: string;
  icon?: string; // devicon CDN slug
  imgUrl?: string; // fallback for icons not in devicon
}

const skillLogos: SkillLogo[] = [
  { name: "Excel", imgUrl: "https://img.icons8.com/color/96/microsoft-excel-2019--v1.png" },
  { name: "TestRail", imgUrl: "https://img.icons8.com/color/96/test-tube.png" },
  { name: "Jira", icon: "jira-original" },
  { name: "Postman", icon: "postman-original" },
  { name: "JMeter", imgUrl: "https://jmeter.apache.org/images/jmeter_square.svg" },
  { name: "Selenium", icon: "selenium-original" },
  { name: "Playwright", icon: "playwright-original" },
  { name: "Cypress", icon: "cypressio-original" },
  { name: "WebDriverIO", imgUrl: "https://avatars.githubusercontent.com/u/6512473?s=200&v=4" },
  { name: "MySQL", icon: "mysql-original" },
  { name: "MongoDB", icon: "mongodb-original" },
  { name: "GitHub", icon: "github-original" },
  { name: "HTML", icon: "html5-original" },
  { name: "CSS", icon: "css3-original" },
  { name: "Tailwind CSS", icon: "tailwindcss-original" },
  { name: "JavaScript", icon: "javascript-original" },
  { name: "React", icon: "react-original" },
];

const categories: SkillCategory[] = [
  {
    title: "Testing Tools",
    skills: [
      { name: "Selenium", color: "43 100% 50%", percent: 90 },
      { name: "Playwright", color: "142 71% 45%", percent: 85 },
      { name: "Cypress", color: "160 50% 40%", percent: 80 },
    ],
  },
  {
    title: "API & Performance",
    skills: [
      { name: "Postman", color: "19 89% 51%", percent: 92 },
      { name: "JMeter", color: "0 70% 50%", percent: 80 },
      { name: "LoadRunner", color: "210 80% 50%", percent: 70 },
    ],
  },
  {
    title: "Project Management",
    skills: [
      { name: "Jira", color: "213 80% 50%", percent: 88 },
      { name: "TestRail", color: "142 50% 45%", percent: 82 },
      { name: "Excel", color: "142 71% 35%", percent: 85 },
      { name: "GitHub", color: "0 0% 40%", percent: 85 },
    ],
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML", color: "14 90% 55%", percent: 90 },
      { name: "CSS", color: "210 80% 50%", percent: 85 },
      { name: "Tailwind CSS", color: "190 90% 50%", percent: 88 },
      { name: "JavaScript", color: "50 90% 50%", percent: 82 },
      { name: "React", color: "195 90% 55%", percent: 80 },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0, 0, 0.2, 1] as const } },
};

const skillIconMap: Record<string, { icon?: string; imgUrl?: string }> = {
  "Selenium": { icon: "selenium-original" },
  "Playwright": { icon: "playwright-original" },
  "Cypress": { icon: "cypressio-original" },
  "Appium": { imgUrl: "https://img.icons8.com/color/96/appium.png" },
  "Postman": { icon: "postman-original" },
  "JMeter": { imgUrl: "https://jmeter.apache.org/images/jmeter_square.svg" },
  "LoadRunner": { imgUrl: "https://img.icons8.com/color/96/speed.png" },
  "Jira": { icon: "jira-original" },
  "TestRail": { imgUrl: "https://img.icons8.com/color/96/test-tube.png" },
  "Excel": { imgUrl: "https://img.icons8.com/color/96/microsoft-excel-2019--v1.png" },
  "HTML": { icon: "html5-original" },
  "CSS": { icon: "css3-original" },
  "Tailwind CSS": { icon: "tailwindcss-original" },
  "JavaScript": { icon: "javascript-original" },
  "React": { icon: "react-original" },
  "GitHub": { icon: "github-original" },
};

const SkillBar = ({ name, color, percent }: { name: string; color: string; percent: number }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const iconInfo = skillIconMap[name];
  const needsInvert = isDark && ["Cypress", "GitHub"].includes(name);

  const iconSrc = iconInfo
    ? iconInfo.imgUrl
      ? iconInfo.imgUrl
      : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconInfo.icon!.split('-')[0]}/${iconInfo.icon}.svg`
    : undefined;

  return (
    <motion.div
      variants={itemVariants}
      className="bg-card border border-border rounded-xl p-4 card-hover flex items-center gap-4"
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
        style={{ backgroundColor: `hsl(${color} / 0.15)` }}
      >
        {iconSrc ? (
          <img src={iconSrc} alt={name} className={`w-6 h-6 ${needsInvert ? "invert brightness-[2]" : ""}`} loading="lazy" />
        ) : (
          <span className="text-xs font-bold" style={{ color: `hsl(${color})` }}>{name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-sm font-medium text-foreground">{name}</p>
          <span className="text-xs font-mono text-muted-foreground">{percent}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percent}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{ backgroundColor: `hsl(${color})` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const SkillLogoItem = ({ name, icon, imgUrl }: SkillLogo) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const needsInvert = isDark && ["Cypress", "GitHub"].includes(name);

  const src = imgUrl
    ? imgUrl
    : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon!.split('-')[0]}/${icon}.svg`;

  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center gap-3"
    >
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-card border border-border flex items-center justify-center card-hover">
        <img
          src={src}
          alt={name}
          className={`w-10 h-10 md:w-12 md:h-12 ${needsInvert ? "invert brightness-[2]" : ""}`}
          loading="lazy"
        />
      </div>
      <p className="text-xs md:text-sm font-medium text-muted-foreground">{name}</p>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">What I use</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Tools</h2>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16"
        >
          {skillLogos.map((logo) => (
            <SkillLogoItem key={logo.name} {...logo} />
          ))}
        </motion.div>

        {/* Category Bars */}
        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                {cat.title}
              </motion.h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
              >
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} color={skill.color} percent={skill.percent} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
