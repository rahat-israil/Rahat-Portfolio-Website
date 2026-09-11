import { Github, Linkedin, Twitter, Heart, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { FaReddit } from "react-icons/fa";
import logoImg from "@/assets/Logo.png";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/rahat-israil", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rahat-israil/", label: "LinkedIn" },
  { icon: FaReddit, href: "https://www.reddit.com/user/rahat_israil", label: "Reddit" },
  { icon: Facebook, href: "https://www.facebook.com/rahat.bin.israil.2025", label: "Facebook" },
];

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-wrap md:flex-row justify-between gap-8">
          <div className="md:w-[45%] lg:w-auto">
            <button onClick={() => scrollTo("#home")} className="flex items-center gap-2 mb-3">
              <img src={logoImg} alt="Logo" className="w-8 h-8 object-contain" />
              <span className="text-2xl font-bold font-mono tracking-tight text-foreground">Rahat</span>
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs text-justify w-[300px] md:w-[300px] lg:w-[299px]">
              SQA Engineer with hands-on experience in <span className="text-primary font-semibold">Manual</span> and growing expertise in <span className="text-primary font-semibold">Automation</span> testing, dedicated to delivering high-quality, bug-free software.
            </p>
          </div>

          <div className="md:w-[45%] lg:w-auto lg:min-w-[180px]">
            <h4 className="font-semibold text-foreground mb-4 text-sm">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:w-[45%] lg:w-auto">
            <h4 className="font-semibold text-foreground mb-4 text-sm">Contact Info</h4>
            <div className="space-y-3">
              <a href="mailto:rahat.bin.israil@gmail.com" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                rahat.bin.israil@gmail.com
              </a>
              <a href="tel:+8801828353322" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +8801828353322
              </a>
              <p className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                Mirpur, Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <div className="md:w-[45%] lg:w-auto">
            <h4 className="font-semibold text-foreground mb-4 text-sm">Connect With Me</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Rahat Bin Israil | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
