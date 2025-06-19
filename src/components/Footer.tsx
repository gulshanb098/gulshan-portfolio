import { Themes } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  currentTheme: Themes;
}

export const Footer: React.FC<Props> = ({ currentTheme }: Props) => {
  return (
    <footer
      className={cn(
        "text-center text-sm px-4 py-8 border-t w-full",
        currentTheme.isDark
          ? "text-gray-400 border-gray-700"
          : "text-gray-700 border-gray-300"
      )}
    >
      <motion.div
        className="flex flex-col items-center justify-center gap-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
      >
        <div className="relative mb-2 flex items-center gap-2">
          <div className="relative">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
          </div>
            <motion.span
              className={cn(
                "text-green-500 font-bold",
                currentTheme.isDark ? "text-green-400" : "text-green-600"
              )}
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, type: "spring" }}
              whileHover={{ scale: 1.08, textShadow: "0px 0px 8px #22c55e" }}
            >
              Available for Hire
            </motion.span>
        </div>
        <motion.span
          className={cn(
            "font-semibold text-base text-center tracking-wide flex flex-col items-center gap-1",
            currentTheme.isDark ? "text-white" : "text-gray-900"
          )}
          initial={{ opacity: 0, y: 20, letterSpacing: "-0.05em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.08em" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <span>
            Crafted with <span className="animate-pulse">✨</span> curiosity &{" "}
            <span className="animate-bounce">🛠️</span> innovation by Gulshan
            Baraik
          </span>
          <span className="text-xs font-normal mt-1 opacity-80">
            <motion.span
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
              className="inline-block"
            >
              Exploring new perspectives • Always learning, always building •{" "}
              {new Date().getFullYear()}
            </motion.span>
          </span>
        </motion.span>
      </motion.div>
    </footer>
  );
};
