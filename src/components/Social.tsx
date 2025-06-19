import { Themes } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BookOpen, Code, FileDown, Github, Linkedin, Mail } from "lucide-react";
import React, { useState } from "react";
import {
  SiGeeksforgeeks,
  SiHackerrank,
  SiLeetcode,
  SiMedium,
} from "react-icons/si";
import { Experience } from "./Experience";
import { Card, CardContent } from "./ui/card";

interface Props {
  currentTheme: Themes;
}

const RESUME_URL =
  "https://drive.google.com/file/d/1nW8muqECk67E9fDY9hAOKGTZqBWIXDql/view";

export const Social: React.FC<Props> = ({ currentTheme }) => {
  const [expanded, setExpanded] = useState<"coding" | "article" | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure client-only code runs after hydration
  React.useEffect(() => {
    setIsClient(true);
  }, []);

  // First row
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/gulshanbaraik01",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/gulshan-baraik-667120a4/",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      url: "mailto:gulshanbaraik@gmail.com",
    },
  ];

  const codingLinks = [
    {
      icon: (
        <span
          className={cn(
            "w-5 h-5 flex items-center justify-center rounded-full",
            currentTheme.isDark ? currentTheme.card : "bg-[#2F8D46]" // GeeksForGeeks green
          )}
        >
          <SiGeeksforgeeks
            className={cn(
              "w-4 h-4",
              currentTheme.isDark ? "text-gray-200" : "text-white"
            )}
          />
        </span>
      ),
      label: "GeeksForGeeks",
      url: "https://www.geeksforgeeks.org/user/night_fury1/",
    },
    {
      icon: (
        <span
          className={cn(
            "w-5 h-5 flex items-center justify-center rounded-full",
            currentTheme.isDark ? currentTheme.card : "bg-[#FFA116]" // LeetCode yellow
          )}
        >
          <SiLeetcode
            className={cn(
              "w-4 h-4",
              currentTheme.isDark ? "text-gray-200" : "text-white"
            )}
          />
        </span>
      ),
      label: "LeetCode",
      url: "https://leetcode.com/u/nightfury1/",
    },
    {
      icon: (
        <span
          className={cn(
            "w-5 h-5 flex items-center justify-center rounded-full",
            currentTheme.isDark ? currentTheme.card : "bg-[#2EC866]" // HackerRank green
          )}
        >
          <SiHackerrank
            className={cn(
              "w-4 h-4",
              currentTheme.isDark ? "text-gray-200" : "text-white"
            )}
          />
        </span>
      ),
      label: "HackerRank",
      url: "https://www.hackerrank.com/profile/gulshanbaraik",
    },
  ];

  const articleLinks = [
    {
      icon: (
        <span
          className={cn(
            "w-5 h-5 flex items-center justify-center rounded-full",
            currentTheme.isDark ? currentTheme.card : "bg-[#2F8D46]" // GeeksForGeeks green
          )}
        >
          <SiGeeksforgeeks
            className={cn(
              "w-4 h-4",
              currentTheme.isDark ? "text-gray-200" : "text-white"
            )}
          />
        </span>
      ),
      label: "GeeksForGeeks",
      url: "https://www.geeksforgeeks.org/user/night_fury1/contributions/?type=articles",
    },
    {
      icon: (
        <span
          className={cn(
            "w-5 h-5 flex items-center justify-center rounded-full",
            currentTheme.isDark ? currentTheme.card : "bg-[#12100E]" // Medium black
          )}
        >
          <SiMedium
            className={cn(
              "w-4 h-4",
              currentTheme.isDark ? "text-gray-200" : "text-white"
            )}
          />
        </span>
      ),
      label: "Medium",
      url: "https://medium.com/@gbrnc28",
    },
  ];

  // Google Drive blocks CORS for direct fetch, so we can't fetch the file as a blob.
  // The best approach is to create a hidden anchor with the direct download link and trigger a click.
  const handleResumeDownload = () => {
    // Convert Google Drive "view" link to direct download link
    const match = RESUME_URL.match(/\/d\/([^/]+)\//);
    const fileId = match ? match[1] : null;
    if (!fileId) {
      alert("Resume file not found.");
      return;
    }
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Create a temporary anchor and trigger download
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = "resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section>
      {/* First row */}
      {isClient && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-6 md:px-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="block"
            >
              <Card
                className={cn(
                  "transition-all duration-300 ease-in-out hover:shadow-xl border border-gray-200 dark:border-gray-700",
                  currentTheme.card
                )}
              >
                <CardContent className="flex items-center gap-4 py-6 px-6">
                  <span className="text-2xl">{link.icon}</span>
                  <span
                    className={cn(
                      "text-md font-medium",
                      currentTheme.isDark ? "text-gray-200" : "text-gray-800"
                    )}
                  >
                    {link.label}
                  </span>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </motion.div>
      )}

      {/* Second Row */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-6 md:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {/* Coding Platform */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="relative overflow-visible"
        >
          <div
            className={cn(
              "transition-all duration-300 ease-in-out hover:shadow-xl border-none cursor-pointer",
              currentTheme.card,
              "relative"
            )}
            onClick={() => setExpanded(expanded === "coding" ? null : "coding")}
            tabIndex={0}
            role="button"
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setExpanded(expanded === "coding" ? null : "coding");
              }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Card
                className={cn(
                  "transition-all duration-300 ease-in-out hover:shadow-xl border border-gray-200 dark:border-gray-700 cursor-pointer",
                  currentTheme.card
                )}
              >
                <CardContent className="flex items-center gap-4 py-6 px-6">
                <span className="text-2xl">
                  <Code className="w-5 h-5" />
                </span>
                <span
                  className={cn(
                    "text-md font-medium",
                    currentTheme.isDark ? "text-gray-200" : "text-gray-800"
                  )}
                >
                  Code
                </span>
                {expanded === "coding" && (
                  <motion.div
                    className="flex gap-2 ml-auto"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.2,
                        },
                      },
                    }}
                  >
                    {codingLinks.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          "flex items-center justify-center w-6 h-6 rounded-full shadow bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition",
                          currentTheme.isDark
                            ? "text-gray-200"
                            : "text-gray-800"
                        )}
                        title={link.label}
                        variants={{
                          hidden: { opacity: 0, x: 30 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.4, type: "tween" }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span
                          className="w-3.5 h-3.5 flex items-center justify-center"
                          title={link.label}
                        >
                          {link.icon}
                        </span>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Article Platform */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="relative overflow-visible"
        >
          <div
            className={cn(
              "transition-all duration-300 ease-in-out hover:shadow-xl border-none cursor-pointer",
              currentTheme.card,
              "relative"
            )}
            onClick={() =>
              setExpanded(expanded === "article" ? null : "article")
            }
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setExpanded(expanded === "article" ? null : "article");
              }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Card
                className={cn(
                  "transition-all duration-300 ease-in-out hover:shadow-xl border border-gray-200 dark:border-gray-700 cursor-pointer",
                  currentTheme.card
                )}
              >
                <CardContent className="flex items-center gap-4 py-6 px-6">
                  <span className="text-2xl">
                    <BookOpen className="w-5 h-5" />
                  </span>
                  <span
                    className={cn(
                      "text-md font-medium",
                      currentTheme.isDark ? "text-gray-200" : "text-gray-800"
                    )}
                  >
                    Articles
                  </span>
                  {expanded === "article" && (
                    <motion.div
                      className="flex gap-2 ml-auto"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.2,
                          },
                        },
                      }}
                    >
                      {articleLinks.map((link) => (
                        <motion.a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "flex items-center justify-center w-6 h-6 rounded-full shadow bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition",
                            currentTheme.isDark
                              ? "text-gray-200"
                              : "text-gray-800"
                          )}
                          title={link.label}
                          variants={{
                            hidden: { opacity: 0, x: 30 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          transition={{ duration: 0.4, type: "tween" }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                            <span
                            className="w-3.5 h-3.5 flex items-center justify-center"
                            title={link.label}
                            >
                            {link.icon}
                            </span>
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Resume */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <div
              onClick={handleResumeDownload}
              tabIndex={0}
              role="button"
              onKeyDown={(e: any) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleResumeDownload();
                }
              }}
              className="cursor-pointer"
            >
              <Card
                className={cn(
                  "transition-all duration-300 ease-in-out hover:shadow-xl border border-gray-200 dark:border-gray-700 cursor-pointer",
                  currentTheme.card
                )}
              >
                <CardContent className="flex items-center gap-4 py-6 px-6">
                  <span className="text-2xl">
                    <FileDown className="w-5 h-5" />
                  </span>
                  <span
                    className={cn(
                      "text-md font-medium",
                      currentTheme.isDark ? "text-gray-200" : "text-gray-800"
                    )}
                  >
                    Resume
                  </span>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Experience Section */}
      <Experience currentTheme={currentTheme} />
    </section>
  );
};
