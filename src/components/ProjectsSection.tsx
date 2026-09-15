import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ClipboardList, Bot } from "lucide-react";
import { FileText, Github, Eye, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import BurgerShopImg from "@/assets/projects/BurgerShop.png";
import PhotoStudioImg from "@/assets/projects/PhotoStudio.png";
import FlutterQuizImg from "@/assets/projects/FlutterQuiz.jpg";
import CalculatorMenuImg from "@/assets/projects/CalculatorMenu.png";
import VoicemailImg from "@/assets/projects/Voicemail.png";
import ForkifyImg from "@/assets/projects/Forkify.png";
import BDTripImg from "@/assets/projects/BDTrip.png";
import HealthCareImg from "@/assets/projects/HealthCare.png";
import projectImage from "@/assets/project-image.png";
import Automation1Img from "@/assets/projects/Automation1.jpg";
import Automation2Img from "@/assets/projects/AUtomation.jpg";

interface ProjectLink {
  label: string;
  url: string;
}

interface DetailSection {
  heading?: string;
  bullets: string[];
}

interface ProjectDetails {
  intro: string;
  sections?: DetailSection[];
  note?: string;
  result: string;
}

interface Project {
  title: string;
  desc: string;
  tags: string[];
  links?: ProjectLink[];
  repo?: string;
  details: ProjectDetails;
  category: "Manual" | "Automation";
  image?: string;
  mobile?: boolean;
}

const projects: Project[] = [
  // Project 1
  {
    title: "BurgerShop - Web Application Testing (v1.0 & v2.0)",
    desc: "Complete testing lifecycle across two versions of a food ordering web app. 61 bugs found in v1.0, 9 more in v2.0 with full regression & defect validation.",
    tags: [
      "Manual Testing",
      "Functional Testing",
      "Smoke Testing",
      "Regression Testing",
      "GUI Testing",
      "Defect Validation",
      "JIRA",
      "Excel",
    ],
    links: [
      { label: "Quality Report", url: "#" },
      { label: "Bug Reports", url: "#" },
    ],
    repo: "#",
    category: "Manual",
    image: BurgerShopImg,
    details: {
      intro:
        "Complete testing lifecycle across two versions of a food ordering web application. Validated bug fixes, tested new features, and ensured no regression.",
      sections: [
        {
          heading: "Version 1.0",
          bullets: [
            "Found and reported 61 bugs in JIRA",
            "Delivered complete QA documentation: Acceptance Sheets, Test Surveys, Test Cases, and Quality Report",
          ],
        },
        {
          heading: "Version 2.0 (Bug fix release + new features)",
          bullets: [
            "Found 9 additional bugs",
            "Performed Regression Testing – confirmed existing features remained intact after fixes",
            "Executed Defect Validation (DV) – retested all 61 v1.0 bugs, verified fixes",
            "Performed New Feature Testing (NFT) – validated newly added functionality",
            "Produced Quality Report for version 2.0",
          ],
        },
      ],
      result:
        "Detected and documented 100% of critical bugs across both versions, achieving a 94% overall bug finding ratio, with all v1.0 defects successfully validated as fixed in v2.0.",
    },
  },

   // Project 2
  {
    title: "Greg.Olsen.PhotoStudio - Web Application Testing",
    desc: "End-to-end functional testing of a photography studio management app. 55 defects found, 90% bug finding ratio.",
    tags: [
      "Manual Testing",
      "Smoke Testing",
      "Acceptance Testing",
      "Boundary Value Analysis",
      "Cross-Browser Testing",
      "JIRA",
      "Excel",
    ],
    links: [
      { label: "Bug Reports", url: "#" },
      { label: "Acceptance Sheet", url: "#" },
    ],
    repo: "#",
    category: "Manual",
    image: PhotoStudioImg,
    details: {
      intro:
        "Performed end-to-end functional testing of Greg.Olsen.PhotoStudio, a web-based photography studio management application.",
      sections: [
        {
          bullets: [
            "Identified and reported 55 defects in Jira covering UI inconsistencies, functional failures, and edge-case behaviour",
            "Created Acceptance Sheets, Test Surveys, Test Cases, and a Quality Report for full traceability",
            "Applied boundary value analysis and scenario-based testing to uncover edge cases",
            "Applied functional, smoke, boundary, UI, and cross-browser test coverage across the application",
          ],
        },
      ],
      result:
        "Detected and documented 100% of critical bugs before release, achieving a 90% overall bug finding ratio, ensuring full functional and cross-browser reliability.",
    },
  },

   // Project 3
  {
    title: "FlutterQuiz - Android Application Testing",
    desc: "Functional QA of a Flutter-based Android quiz app. 44 defects found, with device logs attached for every functional bug.",
    tags: [
      "Android Studio",
      "Functional Testing",
      "Compatibility Testing",
      "Manual Testing",
    ],
    links: [
      { label: "Quality Report", url: "#" },
      { label: "Bug Reports", url: "#" },
    ],
    repo: "#",
    category: "Manual",
    image: FlutterQuizImg,
    mobile: true,
    details: {
      intro:
        "Performed functional QA testing of FlutterQuiz, a Flutter-based Android quiz application.",
      sections: [
        {
          bullets: [
            "Identified and reported 44 defects in Jira covering UI rendering issues, interaction bugs, and functional failures specific to the Android platform",
            "For each functional bug, captured and attached application logs using Android Studio — providing full reproduction evidence with every defect report",
            "Tested across different device configurations and screen sizes for compatibility coverage",
            "Delivered QA documentation: Acceptance Sheet and Quality Report for v1.0",
          ],
        },
      ],
      note:
        "The log collection practice — attaching device logs to every functional defect — significantly improved defect reproducibility and accelerated developer investigation. This goes beyond standard manual testing methodology.",
      result:
        "Detected and documented 100% of critical bugs, achieving an 80% overall bug finding ratio, with full log-based reproduction evidence provided for every functional defect.",
    },
  },

   // Project 4
  {
    title: "Calculator Menu - Web Application Testing",
    desc: "Functional & logical testing of a Supershop billing module. 30 bugs found in calculation, discount & tax logic.",
    tags: [
      "Manual Testing",
      "Functional Testing",
      "GUI Testing",
      "Equivalence Partitioning",
      "Boundary Value Analysis",
      "Financial Accuracy",
    ],
    links: [
      { label: "Bug Reports", url: "#" },
      { label: "Test Survey", url: "#" },
    ],
    repo: "#",
    category: "Manual",
    image: CalculatorMenuImg,
    details: {
      intro:
        "Performed functional, logical, and UI testing of the Calculator Menu module within a Supershop billing and ordering web application.",
      sections: [
        {
          bullets: [
            "Identified and reported 30 defects in JIRA related to calculation errors, currency formatting mismatches, discount logic failures, and tax computation inaccuracies",
            "Applied Equivalence Partitioning and Boundary Value Analysis to billing arithmetic — including quantity multipliers, percentage discounts — to ensure financial accuracy",
            "Validated cart state management, confirming totals updated instantly when quantities were modified or items removed",
            "Documented the complete testing lifecycle through a Quality Report and Test Survey, ensuring financial data integrity",
          ],
        },
      ],
      result:
        "Detected and documented 100% of calculation-related critical bugs, achieving a 90% overall bug finding ratio and ensuring system compliance with financial accuracy standards.",
    },
  },

   // Project 5
  {
    title: "Voicemail - Android Application Testing",
    desc: "QA testing of voice recording & playback app. 25 defects found across recording, playback, and toggle features.",
    tags: [
      "Manual Testing",
      "Functional Testing",
      "GUI Testing",
      "Android Studio",
      "Log Capture",
    ],
    links: [
      { label: "Quality Report", url: "#" },
      { label: "Test Survey", url: "#" },
    ],
    repo: "#",
    category: "Manual",
    image: VoicemailImg,
    mobile: true,
    details: {
      intro:
        "Performed functional QA testing of a Voicemail Android application that allows users to record and store a custom voice message, automatically played to callers when an incoming call goes unanswered.",
      sections: [
        {
          bullets: [
            "Identified and reported 25 defects in JIRA covering voice recording functionality, playback behaviour, and system toggle (on/off) failures",
            "Tested the core voice recording flow — record, save, re-record, and delete — to ensure message data was stored and retrieved correctly",
            "Validated automatic voicemail playback when calls went unanswered, checking trigger timing and audio playback quality",
            "Verified the on/off toggle correctly enabled/disabled the voicemail system, with no unexpected playback when turned off",
            "Captured application logs using Android Studio for functional defects to support reproducibility",
            "Tested across different device configurations for compatibility coverage",
            "Documented findings through an Acceptance Sheet and Quality Report",
          ],
        },
      ],
      result:
        "Detected and documented 100% of critical playback/recording failures, achieving a 87% overall bug finding ratio, ensuring reliable voicemail functionality across devices.",
    },
  },

   // Project 6
  {
    title: "Forkify - Web Application Testing",
    desc: "Functional testing of a recipe discovery web app. 20 bugs found, with BVA applied on serving/quantity scaling.",
    tags: [
      "Manual Testing",
      "Functional Testing",
      "GUI Testing",
      "Boundary Value Analysis",
      "Cross-Browser Testing",
    ],
    links: [
      { label: "Bug Reports", url: "#" },
      { label: "Quality Report", url: "#" },
    ],
    repo: "#",
    category: "Manual",
    image: ForkifyImg,
    details: {
      intro:
        "Performed functional QA testing of Forkify, a recipe search and discovery web application.",
      sections: [
        {
          bullets: [
            "Identified and reported 20 defects in JIRA covering recipe search functionality, UI/layout inconsistencies, and recipe detail page (ingredients, servings) errors",
            "Applied Boundary Value Analysis on servings/quantity adjustments to verify correct ingredient scaling",
            "Verified core user flows — recipe search, bookmarking, and detail view — for correctness and edge-case handling",
            "Performed functional and cross-browser testing to ensure consistent behaviour across platforms",
            "Documented findings through Test Cases and a Quality Report",
          ],
        },
      ],
      result:
        "Detected and documented 100% of critical bugs, achieving a 73% overall bug finding ratio, ensuring reliable core functionality before release.",
    },
  },

   // Project 7
  {
    title: "BDTrip - Tourism Web Application Testing",
    desc: "End-to-end manual testing of a full-stack tourism platform (Node.js, Express.js, MongoDB) across 6 core modules: Auth, Destination Management, Booking, Admin Dashboard, and more. 42+ defects found, including session management and booking sync issues.",
    tags: [
      "Manual Testing",
      "Functional Testing",
      "GUI Testing",
      "REST API Testing (Postman)",
      "Cross-Browser Testing",
      "Responsive Testing",
    ],
    repo: "#",
    category: "Manual",
    image: BDTripImg,
    details: {
      intro:
        "Performed end-to-end manual testing of a full-stack tourism web application built with Node.js, Express.js, and MongoDB.",
      sections: [
        {
          bullets: [
            "Validated 6 core modules — User Authentication, Destination Management, Service Booking, Admin Dashboard, Booking History, and CRUD operations",
            "Identified and documented 42+ defects, including booking status synchronization issues, client-side validation gaps, and cross-tab session management bugs",
            "Validated REST API endpoints using Postman, ensuring proper request/response handling and authentication checks",
            "Tested admin panel workflows with status tracking (Pending/Approved/Rejected)",
            "Conducted cross-browser testing and responsive design validation across different screen sizes",
            "Verified security measures, including auto-logout on account deletion and client-side authentication state management",
          ],
        },
      ],
      result:
        "Ensured stable, secure performance across 6 core modules, with all critical synchronization and validation issues identified before submission.",
    },
  },

   // Project 8
  {
    title: "Health Care Application - Android Application Testing",
    desc: "End-to-end manual testing of a full-featured healthcare platform (Java, Firebase) across 8 modules: Lab Booking, Medicine Ordering, Doctor Appointments, Order Tracking, and more. 34+ defects found, including critical appointment sync and payment gateway bugs.",
    tags: [
      "Manual Testing",
      "Functional Testing",
      "Firebase Realtime DB Testing",
      "Android Emulator",
      "UI/UX Validation",
    ],
    repo: "#",
    category: "Manual",
    image: HealthCareImg,
    mobile: true,
    details: {
      intro:
        "Performed end-to-end manual testing of a full-featured healthcare platform developed with Java and Firebase.",
      sections: [
        {
          bullets: [
            "Validated 8 core modules — Lab Test Booking, Medicine Ordering, Doctor Appointment Scheduling, Health Articles, User Profile, Order Tracking, Registration, and Authentication",
            "Identified and documented 34+ defects throughout the testing lifecycle, including critical bugs in appointment slot synchronization and payment gateway integration, collaborating with developers for timely resolution",
            "Validated Firebase Realtime Database synchronization for real-time cart updates, order tracking, and doctor appointment availability",
            "Conducted UI/UX validation across different Android screen sizes using Android Emulator",
            "Verified seamless integration across 7 dashboard modules, ensuring a consistent user experience",
          ],
        },
      ],
      result:
        "Identified and helped resolve critical appointment and payment-related defects, ensuring reliable real-time synchronization across 8 core modules.",
    },
  },


  // ---------------- Automation Example Projects ----------------

   // Project 1
  {
    title: "ShopFlow - E-Commerce API Automation",
    desc: "End-to-end REST API automation framework for an e-commerce platform. 120+ automated test cases covering auth, cart, checkout & order management with CI integration.",
    tags: [
      "REST Assured",
      "Java",
      "TestNG",
      "API Automation",
      "CI/CD (Jenkins)",
      "Allure Reports",
    ],
    links: [
      { label: "Automation Report", url: "#" },
      { label: "Test Cases", url: "#" },
    ],
    repo: "#",
    category: "Automation",
    image: Automation1Img,
    details: {
      sections: [
        {
          heading: "Framework Highlights",
          bullets: [
            "Developed 120+ automated API test cases covering authentication, product catalog, cart management, checkout, and order tracking endpoints",
            "Implemented data-driven testing using Excel and JSON feeds to validate positive, negative, and edge-case scenarios",
            "Integrated the framework with Jenkins CI pipeline — tests run automatically on every pull request and nightly build",
            "Generated rich Allure reports with request/response logs, assertions, and screenshots of failures for fast triage",
            "Built reusable utility libraries for token handling, request payload generation, and response validation",
          ],
        },
        {
          heading: "Coverage Areas",
          bullets: [
            "Authentication & authorization — valid/invalid tokens, role-based access, session expiry",
            "Cart & checkout — add/remove items, quantity updates, coupon application, payment validation",
            "Order management — order creation, status transitions, cancellation, and refund flows",
          ],
        },
      ],
      result:
        "Achieved 95% API test coverage across 40+ endpoints, reducing regression cycle time from 2 days to under 30 minutes, with zero critical defects escaping to production.",
    },
  },

   // Project 2
  // {
  //   title: "CloudBank — Web UI Automation (Playwright)",
  //   desc: "Cross-browser web UI automation suite for a banking dashboard. 80+ automated tests with Page Object Model, visual regression & parallel execution.",
  //   tags: [
  //     "Playwright",
  //     "TypeScript",
  //     "Page Object Model",
  //     "Cross-Browser",
  //     "Visual Regression",
  //     "GitHub Actions",
  //   ],
  //   links: [
  //     { label: "Automation Report", url: "#" },
  //     { label: "Test Suites", url: "#" },
  //   ],
  //   repo: "#",
  //   category: "Automation",
  //   image: Automation2Img,
  //   details: {
  //     intro:
  //       "Built a robust cross-browser UI automation framework for CloudBank, an online banking web application, using Playwright and TypeScript with the Page Object Model design pattern.",
  //     sections: [
  //       {
  //         heading: "Framework Highlights",
  //         bullets: [
  //           "Developed 80+ automated UI test cases covering login, account overview, fund transfer, statement download, and beneficiary management flows",
  //           "Implemented the Page Object Model for maintainable, reusable page components and selectors",
  //           "Executed tests in parallel across Chromium, Firefox, and WebKit browsers for full cross-browser coverage",
  //           "Integrated visual regression testing to catch unintended UI changes across releases",
  //           "Configured GitHub Actions CI pipeline with auto-trigger on push and scheduled nightly runs",
  //           "Generated HTML and Allure reports with trace viewer for debugging failures",
  //         ],
  //       },
  //       {
  //         heading: "Coverage Areas",
  //         bullets: [
  //           "Authentication — login, logout, session timeout, multi-factor validation",
  //           "Transactions — fund transfer, schedule payment, recurring transfer, transaction history",
  //           "Account management — profile update, beneficiary CRUD, statement generation",
  //         ],
  //       },
  //     ],
  //     result:
  //       "Reduced manual regression effort by 70%, achieved 90% UI test coverage, and caught 15+ visual regressions before release across three browsers.",
  //   },
  // },

  //  // Project 3
  // {
  //   title: "FitTrack — Mobile App Automation (Appium)",
  //   desc: "Mobile automation framework for an Android & iOS fitness app. 60+ automated tests covering onboarding, workout tracking & sync with cloud devices.",
  //   tags: [
  //     "Appium",
  //     "Java",
  //     "TestNG",
  //     "Android & iOS",
  //     "Page Object Model",
  //     "BrowserStack",
  //   ],
  //   links: [
  //     { label: "Automation Report", url: "#" },
  //     { label: "Test Plan", url: "#" },
  //   ],
  //   repo: "#",
  //   category: "Automation",
  //   image: Automation1Img,
  //   details: {
  //     intro:
  //       "Created a mobile test automation framework for FitTrack, a cross-platform fitness application, using Appium, Java, and TestNG, with cloud execution via BrowserStack.",
  //     sections: [
  //       {
  //         heading: "Framework Highlights",
  //         bullets: [
  //           "Developed 60+ automated test cases covering onboarding, profile setup, workout logging, progress tracking, and device sync flows",
  //           "Designed reusable Page Object components for shared screens across Android and iOS",
  //           "Executed tests on real devices via BrowserStack cloud for broad device coverage",
  //           "Handled dynamic elements, app restarts, and network condition simulations (Wi-Fi, 4G, offline)",
  //           "Integrated with CI to run smoke suites on every build and full regression nightly",
  //           "Generated consolidated reports with screenshots, video logs, and device-level execution details",
  //         ],
  //       },
  //       {
  //         heading: "Coverage Areas",
  //         bullets: [
  //           "Onboarding — sign-up, login, permission grants, tutorial flow",
  //           "Workout tracking — start/pause/stop session, log exercise, view history",
  //           "Sync — cloud sync, conflict resolution, offline-to-online data reconciliation",
  //         ],
  //       },
  //     ],
  //     result:
  //       "Achieved 85% test coverage across 25+ device profiles, cut regression time by 65%, and improved release confidence for bi-weekly production deployments.",
  //   },
  // },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.96,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] as const },
  },
};

const hoverSpring = { type: "spring" as const, stiffness: 300, damping: 20 };

const INITIAL_COUNT = 6;
const LOAD_STEP = 3;

const CATEGORIES = ["Manual", "Automation"] as const;

const categoryTabs: { key: (typeof CATEGORIES)[number]; label: string; icon: typeof ClipboardList }[] = [
  { key: "Manual", label: "Manual", icon: ClipboardList },
  { key: "Automation", label: "Automation", icon: Bot },
];

const ProjectsSection = () => {
  const [active, setActive] = useState<Project | null>(null);
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("Manual");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const sectionRef = useRef<HTMLElement>(null);

  const handleShowLess = () => {
    setVisibleCount(INITIAL_COUNT);
    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const handleCategoryChange = (cat: (typeof CATEGORIES)[number]) => {
    setCategory(cat);
    setVisibleCount(INITIAL_COUNT);
  };

  const filteredProjects = projects.filter((p) => p.category === category);
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-card/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">My work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Projects</h2>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {categoryTabs.map((tab) => {
            const isActive = category === tab.key;
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => handleCategoryChange(tab.key)}
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                exit="exit"
                whileHover={{ y: -8, transition: hoverSpring }}
                className="bg-card border border-border rounded-xl overflow-hidden glow-border transition-all duration-300 flex flex-col"
              >
                <div className="p-4 pb-0">
                  <div className="aspect-video w-full rounded-xl overflow-hidden flex justify-center items-center bg-muted">
                    <img
                      src={project.image ?? projectImage}
                      alt={project.title}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col md:flex-col lg:flex-row gap-3">
                  <Button asChild variant="glow" size="sm" className="w-full">
                    <a href={project.repo ?? "#"} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    variant="outline-glow"
                    size="sm"
                    className="w-full"
                    onClick={() => setActive(project)}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    View Details
                  </Button>
                </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center mt-12">
          {hasMore ? (
            <Button
              variant="outline-glow"
              size="lg"
              onClick={() => setVisibleCount((c) => Math.min(c + LOAD_STEP, filteredProjects.length))}
            >
              Show More
            </Button>
          ) : visibleCount > INITIAL_COUNT && (
            <Button
              variant="outline-glow"
              size="lg"
              onClick={handleShowLess}
            >
              Show Less
            </Button>
          )}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-card border-border">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-foreground text-left pr-6">
                  {active.title}
                </DialogTitle>
              </DialogHeader>

               <div className="flex justify-center">
                 <div className="w-full max-w-2xl rounded-xl overflow-hidden flex justify-center items-center bg-muted border border-border max-h-[400px] sm:max-h-[480px]">
                    <img
                      src={active.image ?? projectImage}
                      alt={active.title}
                      className="w-full h-full object-contain"
                    />
                </div>
              </div>

              {/* Full description */}
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {active.details.intro}
                </p>

                {active.details.sections?.map((section, i) => (
                  <div key={i} className="space-y-2">
                    {section.heading && (
                      <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                        {section.heading}
                      </p>
                    )}
                    <ul className="space-y-1.5">
                      {section.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed"
                        >
                          <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {active.details.note && (
                  <p className="text-muted-foreground text-sm leading-relaxed italic border-l-2 border-primary/40 pl-3">
                    {active.details.note}
                  </p>
                )}

                {/* Result */}
                <div className="flex items-start gap-2 rounded-lg bg-primary/5 border border-primary/20 p-3">
                  <Target className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground text-sm leading-relaxed font-medium">
                    <span className="text-primary font-semibold">Result: </span>
                    {active.details.result}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {active.links && (
                <div className="flex flex-col sm:flex-row gap-3">
                  {active.links.map((link, i) => (
                    <Button
                      key={link.label}
                      asChild
                      variant={i === 0 ? "glow" : "outline-glow"}
                      size="sm"
                      className="w-full"
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <FileText className="w-3.5 h-3.5" />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
