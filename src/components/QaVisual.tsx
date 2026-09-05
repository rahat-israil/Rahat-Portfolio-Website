import { motion } from "framer-motion";
import { Bug, CheckCircle2, ShieldCheck, Play } from "lucide-react";

const testRuns = [
  { name: "login_auth.spec.ts", status: "pass", time: "142ms" },
  { name: "checkout_flow.spec.ts", status: "run", time: "—" },
  { name: "api_orders.postman", status: "pass", time: "88ms" },
  { name: "cart_boundary.spec.ts", status: "fail", time: "301ms" },
  { name: "regression_suite.js", status: "queue", time: "—" },
];

const statusStyles: Record<string, string> = {
  pass: "text-emerald-500",
  fail: "text-destructive",
  run: "text-primary",
  queue: "text-muted-foreground",
};

const QaVisual = () => {
  return (
    <div className="relative w-full max-w-[520px] mx-auto aspect-square flex items-center justify-center">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-6 right-8 w-56 h-56 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute bottom-6 left-8 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float-slow" />
      </div>

      {/* Orbit rings */}
      <motion.div
        aria-hidden
        className="absolute inset-[8%] rounded-full border border-border/60"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_14px_hsl(var(--primary))]" />
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute inset-[20%] rounded-full border border-dashed border-border"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent))]" />
      </motion.div>

      {/* Center test console card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-[86%] rounded-2xl border border-border/70 bg-card/70 backdrop-blur-xl p-5 shadow-2xl overflow-hidden"
      >
        {/* Scan line */}
        <motion.div
          aria-hidden
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
        />

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
          </div>
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
            qa_pipeline // live
          </span>
        </div>

        <div className="space-y-2">
          {testRuns.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              className="flex items-center justify-between gap-3 rounded-lg border border-border/50 bg-background/40 px-3 py-2"
            >
              <div className="flex items-center gap-2 min-w-0">
                {t.status === "pass" && <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-500" />}
                {t.status === "fail" && <Bug className="w-3.5 h-3.5 shrink-0 text-destructive" />}
                {t.status === "run" && (
                  <motion.span
                    className="w-3.5 h-3.5 shrink-0 rounded-full border-2 border-primary border-t-transparent"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                )}
                {t.status === "queue" && <Play className="w-3.5 h-3.5 shrink-0 text-muted-foreground" />}
                <span className="font-mono text-[11px] truncate text-foreground/80">{t.name}</span>
              </div>
              <span className={`font-mono text-[10px] shrink-0 ${statusStyles[t.status]}`}>
                {t.status === "run" ? "RUNNING" : t.status === "queue" ? "QUEUED" : t.time}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Coverage bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              coverage
            </span>
            <span className="font-mono text-[10px] text-primary">96%</span>
          </div>
          <div className="h-1.5 rounded-full bg-muted overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
              initial={{ width: "0%" }}
              animate={{ width: "96%" }}
              transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute z-20 -top-1 left-0 flex items-center gap-2 rounded-xl border border-destructive/30 bg-card/80 backdrop-blur-md px-3 py-2 shadow-lg"
      >
        <Bug className="w-4 h-4 text-destructive" />
        <span className="font-mono text-[11px] text-foreground/80">276 bugs found</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute z-20 -bottom-1 right-0 flex items-center gap-2 rounded-xl border border-primary/30 bg-card/80 backdrop-blur-md px-3 py-2 shadow-lg"
      >
        <ShieldCheck className="w-4 h-4 text-primary" />
        <span className="font-mono text-[11px] text-foreground/80">Quality Verified</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute z-20 top-[62%] -left-2 hidden sm:flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-card/80 backdrop-blur-md px-3 py-2 shadow-lg"
      >
        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
        <span className="font-mono text-[11px] text-foreground/80">1,429 passed</span>
      </motion.div>
    </div>
  );
};

export default QaVisual;