import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Award, Briefcase } from "lucide-react";

type TabKey = "education" | "certification" | "experience";

interface TimelineItem {
  title: string;
  company?: string;
  subtitle: string;
  period: string;
  description: string | string[];
  credentialId?: string;
}

const data: Record<TabKey, TimelineItem[]> = {
  education: [
    {
      title: "B.Sc. in Computer Science & Engineering",
      subtitle: "Bangladesh University of Business & Technology",
      period: "2022 - 2026",
      description:
        "Focused on software engineering, data structures, and quality assurance. Contributed as the manual tester for the team's final-year SDP(Software Development Project).",
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      subtitle: "Science Group",
      period: "2018 - 2021",
      description:
        "Completed HSC with a strong foundation in mathematics, physics, and computer fundamentals.",
    },
    {
      title: "Secondary School Certificate (SSC)",
      subtitle: "Science Group",
      period: "2016 - 2018",
      description:
        "Built early interest in technology, problem-solving, and analytical thinking.",
    },
  ],
  certification: [
    {
      title: "JavaScript (Intermediate) Certificate",
      subtitle: "HackerRank",
      period: "Issued Dec 2024",
      description:
        "Demonstrates intermediate-level JavaScript proficiency, including closures, prototypes, async/await, and DOM manipulation.",
      credentialId: "15528FED66EC",
    },
    {
      title: "JavaScript (Basic) Certificate",
      subtitle: "HackerRank",
      period: "Issued Nov 2024",
      description:
        "Validates core JavaScript fundamentals — variables, functions, loops, arrays, and objects.",
      credentialId: "E891E873940B",
    },
    {
      title: "CSS (Basic) Certificate",
      subtitle: "HackerRank",
      period: "Issued Nov 2024",
      description:
        "Confirms foundational CSS skills including selectors, box model, flexbox, and basic responsive styling techniques.",
      credentialId: "D735B2F2D9EB",
    },
    {
      title: "HTML Certification Test",
      subtitle: "Complete Coding by Prashant Sir",
      period: "Issued Nov 2024",
      description:
        "Covers semantic HTML structure, forms, and core web page fundamentals essential for front-end development.",
      credentialId: "ZVYP6OPU",
    },
  ],
  experience: [
    // {
    //   title: "SQA Engineer",
    //   company: "XYZ",
    //   subtitle: "Current Role - Remote",
    //   period: "2024 - Present",
    //   description: [
    //     "Designing manual and automated test suites and executing regression cycles.",
    //     "Collaborating with developers to maintain product quality.",
    //     "Maintaining and expanding test case repositories.",
    //   ],
    // },
    // {
    //   title: "Junior QA Engineer",
    //   company: "XYZ",
    //   subtitle: "Previous Company",
    //   period: "2023 - 2024",
    //   description: [
    //     "Performed functional, regression, and API testing.",
    //     "Authored detailed bug reports and contributed to test case repositories.",
    //     "Supported release cycles with smoke and sanity testing.",
    //   ],
    // },
    // {
    //   title: "QA Intern",
    //   company: "XYZ",
    //   subtitle: "Internship",
    //   period: "2022 - 2023",
    //   description: [
    //     "Learned manual testing fundamentals and test documentation.",
    //     "Performed exploratory testing on live web applications.",
    //     "Assisted in creating and maintaining test cases.",
    //   ],
    // },
    {
      title: "QA Functional testing (Intern)",
      company: "a1qa",
      subtitle: "Internship - Remote",
      period: "April 2026 - June 2026 | 2.5 Month",
      description: [
        "Tested 6 real-world web and Android applications through end-to-end manual testing.",
        "Reported 240+ defects in Jira, including functional and GUI issues.",
        "Created test documentation, including Test Cases, Acceptance Sheets, Test Surveys, and Quality Reports.",
        "Performed Functional, Regression, Smoke, Acceptance, Defect Validation, and New Feature Testing.",
      ],
    },
  ],
};

const tabs: { key: TabKey; label: string; icon: typeof GraduationCap }[] = [
  { key: "education", label: "Education", icon: GraduationCap },
  { key: "certification", label: "Certification", icon: Award },
  { key: "experience", label: "Experience", icon: Briefcase },
];

const JourneySection = () => {
  const [active, setActive] = useState<TabKey>("education");
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const items = data[active];

  return (
    <section id="journey" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">
            My Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Education, Certification & Experience
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {tabs.map((tab) => {
            const isActive = active === tab.key;
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`flex items-center gap-2 px-5 md:px-6 py-2.5 rounded-full border transition-all duration-300 font-medium text-sm md:text-base ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
                    : "bg-card text-foreground border-border hover:border-primary/50 hover:text-primary"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-5xl mx-auto">
          {/* Vertical line - background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-border" />
          {/* Vertical line - progress */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-0.5 -translate-x-1/2 bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.7)]"
          />

          <div className="space-y-12 md:space-y-16">
            {items.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={`${active}-${idx}`}
                  className="relative md:grid md:grid-cols-2 md:gap-12 items-center"
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_10px_hsl(var(--primary)/0.7)]" />
                  </div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className={`pl-12 md:pl-0 ${
                      isLeft ? "md:pr-8 md:text-right" : "md:col-start-2 md:pl-8"
                    }`}
                  >
                    <div className="bg-card border border-border rounded-xl p-6 card-hover">
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {item.title}
                      </h3>
                      {item.company && (
                        <p className="text-primary font-semibold text-sm mb-1">
                          {item.company}
                        </p>
                      )}
                      <p
                        className={`text-sm font-medium mb-1 ${
                          active === "experience"
                            ? "text-foreground/70"
                            : "text-primary"
                        }`}
                      >
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono mb-3">
                        {item.period}
                      </p>
                      {item.credentialId && (
                        <p className="text-xs text-muted-foreground/80 font-mono mb-3">
                          Credential ID:{" "}
                          <span className="text-foreground/80">
                            {item.credentialId}
                          </span>
                        </p>
                      )}
                      {Array.isArray(item.description) ? (
                        <ul className="text-sm text-muted-foreground leading-relaxed space-y-1.5 list-disc pl-4">
                          {item.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;