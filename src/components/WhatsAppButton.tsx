import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "8801828353322";
  const url = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
    >
      {/* Glow rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping" />
      <span className="absolute inset-[-4px] rounded-full bg-[#25D366]/20 animate-pulse" />
      
      {/* WhatsApp SVG */}
      <svg viewBox="0 0 32 32" className="w-7 h-7 relative z-10 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.914 15.914 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.178 2.28-.852.182-1.964.326-5.71-1.228-4.8-1.988-7.886-6.852-8.126-7.17-.23-.318-1.932-2.572-1.932-4.904s1.222-3.476 1.656-3.952c.434-.476.948-.594 1.264-.594.316 0 .632.002.906.016.292.014.682-.11 1.066.814.39.94 1.326 3.234 1.442 3.468.116.234.194.508.04.814-.156.316-.234.508-.468.786-.234.278-.49.62-.702.832-.234.234-.478.488-.204.956.274.468 1.22 2.012 2.618 3.262 1.798 1.608 3.314 2.106 3.782 2.34.468.234.742.194 1.016-.116.274-.312 1.178-1.372 1.492-1.844.316-.468.632-.39 1.066-.234.434.156 2.726 1.286 3.194 1.52.468.234.78.352.896.546.116.194.116 1.126-.274 2.228z" />
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
