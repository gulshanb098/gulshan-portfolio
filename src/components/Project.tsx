import { Themes } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";

export interface ProjectCard {
  id: number;
  title: string;
  image: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
}

const projects: ProjectCard[] = [
  {
    id: 1,
    title: "Secure Messenger",
    image: "/messenger.png",
    description:
      "End-to-end encrypted real-time chat app with group messaging and offline sync.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    github: "https://github.com/gulshanbaraik01/secure-messenger",
    live: "https://secure-messenger-demo.vercel.app",
  },
  {
    id: 2,
    title: "CRM Dashboard",
    image: "/crm.png",
    description:
      "Client relationship management tool with analytics, invoicing, and task tracking.",
    tags: ["Next.js", "PostgreSQL", "TailwindCSS"],
    github: "https://github.com/gulshanbaraik01/crm-dashboard",
    live: "https://crm-demo.vercel.app",
  },
  {
    id: 3,
    title: "AI Price Negotiator",
    image: "/negotiator.png",
    description:
      "Conversational agent that negotiates price using AI logic and rule trees.",
    tags: ["React", "Node.js", "Redis", "LangChain"],
    github: "https://github.com/gulshanbaraik01/negobot",
    live: "https://ai-bot-demo.vercel.app",
  },
  {
    id: 4,
    title: "Secure Messenger",
    image: "/messenger.png",
    description:
      "End-to-end encrypted real-time chat app with group messaging and offline sync.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO"],
    github: "https://github.com/gulshanbaraik01/secure-messenger",
    live: "https://secure-messenger-demo.vercel.app",
  },
  {
    id: 5,
    title: "CRM Dashboard",
    image: "/crm.png",
    description:
      "Client relationship management tool with analytics, invoicing, and task tracking.",
    tags: ["Next.js", "PostgreSQL", "TailwindCSS"],
    github: "https://github.com/gulshanbaraik01/crm-dashboard",
    live: "https://crm-demo.vercel.app",
  },
  {
    id: 6,
    title: "AI Price Negotiator",
    image: "/negotiator.png",
    description:
      "Conversational agent that negotiates price using AI logic and rule trees.",
    tags: ["React", "Node.js", "Redis", "LangChain"],
    github: "https://github.com/gulshanbaraik01/negobot",
    live: "https://ai-bot-demo.vercel.app",
  },
];

interface Props {
  currentTheme: Themes;
}

// Helper to determine cards visible based on screen width
function getCardsVisible() {
  if (typeof window === "undefined") return 1;
  const width = window.innerWidth;
  if (width >= 1280) return 4;
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
}

export const Project: React.FC<Props> = ({ currentTheme }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const [currentDot, setCurrentDot] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(1);
  const [mounted, setMounted] = useState(false);

  // Responsive cardsVisible
  React.useEffect(() => {
    setMounted(true);
    const update = () => setCardsVisible(getCardsVisible());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Drag/slide handlers (mouse + touch)
  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startX.current = e.clientX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.clientX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.1;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const onPointerLeave = () => {
    isDragging.current = false;
  };

  // Update currentDot on scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild
      ? (scrollRef.current.firstElementChild as HTMLElement).offsetWidth + 24 // gap-6 = 24px
      : 1;
    const scrollLeftVal = scrollRef.current.scrollLeft;
    const idx = Math.round(scrollLeftVal / cardWidth);
    setCurrentDot(idx);
  };

  // Scroll to card by index
  const scrollToCard = (idx: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild
      ? (scrollRef.current.firstElementChild as HTMLElement).offsetWidth + 24
      : 1;
    scrollRef.current.scrollTo({
      left: idx * cardWidth,
      behavior: "smooth",
    });
    setCurrentDot(idx);
  };

  // Number of dots = projects.length - cardsVisible + 1 (minimum 1)
  const dotCount = Math.max(1, projects.length - cardsVisible + 1);

  return (
    <section id="projects" className="mt-5 px-4 md:px-12">
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold text-center mb-4",
          currentTheme.isDark ? "text-white" : "text-gray-900"
        )}
      >
        🚀 Projects
      </h2>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 px-4 py-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{ WebkitOverflowScrolling: "touch" }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          onScroll={handleScroll}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={cn(
                "snap-start shrink-0 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[33%] xl:w-[25%] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300",
                currentTheme.card
              )}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={350}
                className="object-cover w-full h-48"
              />
              <div className="p-4">
                <h3
                  className={cn(
                    "text-xl font-semibold mb-2",
                    currentTheme.isDark ? "text-white" : "text-gray-900"
                  )}
                >
                  {project.title}
                </h3>
                <p
                  className={cn(
                    "text-sm mb-3",
                    currentTheme.isDark ? "text-gray-300" : "text-gray-700"
                  )}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "text-xs px-2 py-1 rounded-md",
                        currentTheme.isDark
                          ? "bg-white/10 text-white"
                          : "bg-gray-200 text-gray-900"
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-2 gap-4">
                  {/* Live Demo Icon (left) */}
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center"
                    aria-label="Live Demo"
                  >
                    {/* Cool External Link Icon (Heroicons style) */}
                    <svg
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={currentTheme.isDark ? "#fff" : "#222"}
                      strokeWidth={1.7}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-colors duration-200"
                    >
                      <path d="M14 3h7v7" />
                      <path d="M10 14L21 3" />
                      <rect x="3" y="7" width="14" height="14" rx="2" />
                    </svg>
                    {/* Tooltip (right-top) */}
                    <span
                      className={cn(
                        "absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10",
                        currentTheme.isDark ? "bg-white/90 text-black" : "bg-black/90 text-white"
                      )}
                    >
                      Live Demo
                    </span>
                  </motion.a>
                  {/* GitHub Icon (right) */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center"
                    aria-label="GitHub Repository"
                  >
                    {/* GitHub Icon */}
                    <svg
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={currentTheme.isDark ? "#fff" : "#222"}
                      strokeWidth={1.7}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-colors duration-200"
                    >
                      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1-2.75-.1-.26-.44-1.3.09-2.7 0 0 .83-.27 2.75 1.02A9.36 9.36 0 0 1 12 6.84c.84.004 1.69.11 2.48.32 1.92-1.29 2.75-1.02 2.75-1.02.53 1.4.19 2.44.09 2.7.62.72 1 1.63 1 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48C19.13 20.54 22 16.74 22 12.26 22 6.58 17.52 2 12 2Z" />
                    </svg>
                    {/* Tooltip (left-top) */}
                    <span
                      className={cn(
                        "absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10",
                        currentTheme.isDark ? "bg-white/90 text-black" : "bg-black/90 text-white"
                      )}
                    >
                      View on GitHub
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Slider Dots */}
        {mounted && (
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: dotCount }).map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to project ${idx + 1}`}
                className={cn(
                  "w-3 h-3 rounded-full border-2 transition-all duration-200",
                  idx === currentDot
                    ? "bg-blue-600 border-blue-600 scale-110"
                    : "bg-gray-300 border-gray-400 opacity-70"
                )}
                style={{ outline: "none" }}
                onClick={() => scrollToCard(idx)}
                type="button"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
