import { Themes } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Props {
  currentTheme: Themes;
}

export const Intro: React.FC<Props> = ({ currentTheme }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
          },
        },
      }}
      className="flex flex-col items-center mt-15"
    >
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
      >
        <motion.div
          className={cn(
        "inline-block mb-3 px-4 rounded-full font-semibold tracking-wide",
        "border-b border-muted/40 shadow-lg",
        currentTheme.isDark ? "text-white" : "text-gray-900"
          )}
          style={{
        background: currentTheme.gradient,
          }}
          initial={{ scale: 0.9, rotate: -4 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 90, delay: 0.2 }}
        >
          <span>
        Software Engineer | Full Stack Developer | Open Source Enthusiast
          </span>
        </motion.div>
      </motion.div>
      {/* Profile Image */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.8, y: -30 },
          visible: { opacity: 1, scale: 1, y: 0 },
        }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        className="relative w-[160px] h-[160px] mb-4"
      >
        {/* Spinning Ring */}
        <div className="absolute inset-0 rounded-full border-[6px] border-t-emerald-500 border-l-transparent border-b-transparent border-r-transparent animate-spin-slow z-0" />

        {/* Profile Image */}
        <Image
          src="/gulshan.jpg"
          alt="Gulshan Baraik"
          width={140}
          height={140}
          className="rounded-full border-4 border-white shadow-xl relative z-10 mx-auto mt-2"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-center"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Gulshan Baraik 👋
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className={cn(
          "text-lg md:text-xl max-w-3xl mx-auto text-center mt-4",
          currentTheme.isDark ? "text-gray-300" : "text-gray-900"
        )}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8 }}
      >
        Innovative Full Stack Developer with 3+ years of experience in MERN,
        MEAN, and Spring Boot. I build performant, scalable applications with
        cloud-native best practices.
      </motion.p>
    </motion.div>
  );
};
