import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eye, FileText } from "lucide-react";
import RobotVisual from "@/components/RobotVisual";

const CV_DRIVE_LINK = "https://drive.google.com/file/d/1XvACt-fziaUDGew3r4pheeTl2tXWFXyc/view?usp=sharing";

const roles = ["Manual", "Automation", "API", "Performance"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // const reviewCV = () => {
  //   window.open(CV_DRIVE_LINK, "_blank", "noopener,noreferrer");
  // };

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const speed = isDeleting ? 80 : 120;
    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-24 lg:py-0">
        <motion.div
          className="text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base font-mono mb-4 tracking-widest uppercase"
          >
            Welcome to my Portfolio
          </motion.p>

          <h1 className="text-4xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">I am a Jr. SQA Engineer With</span>
            <br />
            <span className="text-foreground">Expertise in </span> <br />
            <span className="text-primary typing-cursor inline-block min-w-[4ch]">
              {displayText}
            </span>
            <br />
            <span className="text-foreground">Testing</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            A modern QA Engineer focused on quality, reliability, and user experience. I find bugs, validate functionality, and help build software that users can trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            {/* <Button variant="glow" size="lg" className="w-44 justify-center" onClick={reviewCV}>
                <FileText className="w-4 h-4" />
                Review CV
            </Button> */}
            <a
  href={CV_DRIVE_LINK}
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="glow"
    size="lg"
    className="w-44 justify-center"
  >
    <FileText className="w-4 h-4" />
    Review CV
  </Button>
</a>
            <Button variant="outline-glow" size="lg" className="w-44 justify-center" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              <Eye className="w-4 h-4" />
              View Projects
            </Button>
          </motion.div>
        </motion.div>

        {/* Right: animated QA visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="relative px-6 sm:px-10 lg:px-0"
        >
          <RobotVisual />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
