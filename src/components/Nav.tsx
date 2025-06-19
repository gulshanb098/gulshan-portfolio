import { allThemes, Themes } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, Palette, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface Props {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
  currentTheme: Themes;
  toggleTheme: () => void;
}

export const Nav: React.FC<Props> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  currentTheme,
  toggleTheme,
}: Props) => {
  const [selectedSection, setSelectedSection] = useState("");

  // Find the next theme in the array based on the current theme
  const currentThemeIndex = allThemes.findIndex(
    (theme) => theme.name === currentTheme.name
  );
  const nextTheme = allThemes[(currentThemeIndex + 1) % allThemes.length];

  const navItems = [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Articles", href: "#articles" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  console.log("setIsMobileMenuOpen: ", isMobileMenuOpen);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md px-6 py-4 transition-all duration-300 dark:bg-black/50"
      )}
    >
      <div className="flex items-center justify-between">
        {isMobileMenuOpen && (
          <div className="text-lg font-bold sm:hidden">My Portfolio</div>
        )}

        {/* Hamburger button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "p-2 rounded-md",
              isMobileMenuOpen
                ? "bg-gray-200 dark:bg-gray-800"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            )}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav items dropdown */}
      {/* {isMobileMenuOpen && (
        <div className="flex flex-col mt-4 gap-4 sm:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-semibold text-gray-800 dark:text-gray-100 px-2 py-1 hover:underline"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
            >
              {item.label}
            </a>
          ))}
        </div>
      )} */}

      {/* Navigation Links */}
      <div
        className={cn(
          "mt-4 sm:mt-0 flex-col sm:flex-row flex justify-between items-center gap-4 sm:flex sm:gap-6 sm:items-center sm:justify-between",
          isMobileMenuOpen ? "flex" : "hidden sm:flex"
        )}
      >
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "relative group text-lg font-semibold transition-colors duration-300 cursor-pointer",
                currentTheme.isDark ? "text-gray-200" : "text-gray-800",
                selectedSection === item.label ? "text-primary" : ""
              )}
              onClick={async (e) => {
                e.preventDefault();
                setSelectedSection(item.label);
                const target = document.querySelector(item.href);
                if (target) {
                  // Optional: Add a small delay before starting scroll for effect
                  await new Promise((res) => setTimeout(res, 100));
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              <motion.span
                layout
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                {item.label}
              </motion.span>
              <motion.span
                layoutId="nav-underline"
                className={cn(
                  "absolute left-0 -bottom-1 h-[2px] bg-current transition-all duration-300",
                  selectedSection === item.label
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                )}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            </a>
          ))}
        </div>

        {/* Theme Switcher */}
        <motion.div
          whileHover={{ scale: 1.08, rotate: 2 }}
          whileTap={{ scale: 0.96 }}
          className="flex justify-center sm:justify-end mt-4 sm:mt-0"
        >
          <div className="relative group">
            <Button
              onClick={toggleTheme}
              variant="outline"
              className={cn(
                "transition-all duration-300 transform hover:scale-105 shadow-md font-medium",
                currentTheme.isDark
                  ? "text-white border-gray-600"
                  : "text-gray-900 border-gray-300"
              )}
            >
              <motion.div
                key={currentTheme.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2"
              >
                <Palette className="w-4 h-4" />
              </motion.div>
            </Button>
            <span
              className={cn(
                "pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 shadow-lg"
              )}
            >
              Switch to{" "}
              <span className="font-bold capitalize">{nextTheme.name}</span>{" "}
              theme
            </span>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};
