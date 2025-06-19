import { Themes } from "@/lib/themes";
import { motion } from "framer-motion";
import { useState } from "react";

interface EducationProps {
  currentTheme: Themes;
}

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services (AWS)",
    image: "/ccp-aws.png",
    date: "September 26, 2024",
    url: "https://www.credly.com/badges/eaad4a7e-e2f9-44d9-b698-497188917e53",
  },
  {
    title: "MongoDB - SI Associate",
    issuer: "MongoDB",
    image: "/mongodb-si.png",
    date: "August 07, 2023",
    url: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/1f498938-b252-5e5e-9e46-03c3495074f6-gulshan-baraik-d8df8f69-e62b-444c-9139-87f42b864e27-certificate.pdf",
  },
  {
    title: "Next JS: The Complete Developer's Guide",
    issuer: "Udemy - Stephen Grider",
    image: "/nextjs-udemy.png",
    date: "March 02, 2025",
    url: "https://ude.my/UC-067109b2-d1b3-41fb-9146-8e3dabc378c4",
  },
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    image: "/aws-cloud-quest.png",
    date: "August 22, 2024",
    url: "https://www.credly.com/badges/0b3c329f-af2a-424f-a3dc-c0c586feaea3",
  },
  {
    title: "AWS Partner: Accreditation (Technical)",
    issuer: "Amazon Web Services (AWS)",
    image: "/aws-tech-accreditation.png",
    date: "November 11, 2022",
    url: "https://drive.google.com/file/d/1SQ-1P8NwIu_b-8Vaa19AfrFES51GhmKr/view?usp=sharing",
  },
  // Add more certifications as needed
];

import { useRef } from "react";

export const Education: React.FC<EducationProps> = ({ currentTheme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const directionRef = useRef<number>(0);

  const textColor = currentTheme.isDark ? "text-gray-200" : "text-gray-800";
  const subTextColor = currentTheme.isDark ? "text-gray-400" : "text-gray-600";
  //   const cardBg = currentTheme.isDark ? "bg-zinc-900" : "bg-white";
  const borderColor = currentTheme.isDark
    ? "border-zinc-700"
    : "border-zinc-300";

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certifications.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === certifications.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="education" className="py-16 px-6 md:px-20 bg-muted/10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-2"
      >
        <span className="text-3xl md:text-4xl">🎓</span>
        Education & Certifications
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Left - Education */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
          viewport={{ once: true }}
          className={`relative overflow-hidden p-8 rounded-2xl shadow-xl ${currentTheme.card} ${borderColor} border flex flex-col gap-5 h-full min-h-full`}
        >
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="w-40 h-40 bg-gradient-to-br from-primary/60 to-secondary/60 rounded-full blur-2xl absolute -top-10 -left-10"
            />
          </div>
          <div className="flex items-center gap-4 mb-2">
            <motion.img
              src="/nit-logo.png"
              alt="University Logo"
              className="w-14 h-14 rounded-full border-2 border-primary shadow"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            />
            <div>
              <h3 className={`text-2xl font-bold ${textColor}`}>
                Master in Computer Applications
              </h3>
              <p className="text-primary font-medium">
                National Institute of Technology, Jamshedpur
              </p>
              <p className={`text-sm ${subTextColor}`}>2017 &ndash; 2020</p>
            </div>
          </div>
          <motion.ul
            className={`list-disc pl-8 space-y-5 ${subTextColor} text-lg`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.18,
                },
              },
            }}
          >
            <motion.li
              variants={{
                hidden: { opacity: 0, x: -40, scale: 0.95 },
                visible: { opacity: 1, x: 0, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="flex items-center gap-3"
            >
              <span>
                <span className="font-semibold text-green-500 text-xl">
                  8.01 CGPA
                </span>{" "}
                &mdash; First Class with Distinction
              </span>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, x: -40, scale: 0.95 },
                visible: { opacity: 1, x: 0, scale: 1 },
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                delay: 0.1,
              }}
              className="flex items-center gap-3"
            >
              <span>
                <span className="font-semibold text-xl">
                  Final Year Project:
                </span>{" "}
                Result Analysis Platform (AI-powered)
              </span>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, x: -40, scale: 0.95 },
                visible: { opacity: 1, x: 0, scale: 1 },
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                delay: 0.2,
              }}
              className="flex items-center gap-3"
            >
              <span>
                <span className="font-semibold text-xl">
                  Member of Public Relations Team
                </span>{" "}
                &mdash; NSS (2017-19)
              </span>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, x: -40, scale: 0.95 },
                visible: { opacity: 1, x: 0, scale: 1 },
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                delay: 0.3,
              }}
              className="flex items-center gap-3"
            >
              <span>
                <span className="font-semibold text-xl">
                  Secured third position:
                </span>{" "}
                SimplySQL, Neodrishti, OJASS 2018-19.
              </span>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, x: -40, scale: 0.95 },
                visible: { opacity: 1, x: 0, scale: 1 },
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                delay: 0.4,
              }}
              className="flex items-center gap-3"
            >
              <span>
                <span className="font-semibold text-xl">
                  Secured fourth position:
                </span>{" "}
                Netkraft - Networking, Silicon Valley, OJASS 2017-18.
              </span>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, x: -40, scale: 0.95 },
                visible: { opacity: 1, x: 0, scale: 1 },
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                delay: 0.5,
              }}
              className="flex items-center gap-3"
            >
              <span>
                <span className="font-semibold text-xl">
                  Open Source Contributor:
                </span>{" "}
                Contributed to university and community tech projects.
              </span>
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Right - Certifications Slider */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
          viewport={{ once: true }}
          className={`relative p-6 rounded-xl shadow-md ${currentTheme.card} ${borderColor} border flex flex-col items-center h-full min-h-full`}
        >
          <div className="flex justify-between w-full mb-4">
            <button
              onClick={handlePrev}
              className="p-2 bg-muted hover:bg-primary/10 rounded"
              aria-label="Previous Certification"
            >
              ◀
            </button>
            <h4 className={`text-xl font-semibold ${textColor}`}>
              Certifications
            </h4>
            <button
              onClick={handleNext}
              className="p-2 bg-muted hover:bg-primary/10 rounded"
              aria-label="Next Certification"
            >
              ▶
            </button>
          </div>
          {/* Animated slider */}
          <div
            className="w-full flex-1 flex relative rounded-lg overflow-hidden border border-muted touch-pan-x min-h-[320px]"
            style={{ aspectRatio: "16/9" }}
          >
            <motion.div
              key={currentIndex}
              initial={{ x: 80 * (directionRef.current || 0), opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -80 * (directionRef.current || 0), opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="absolute inset-0 h-full w-full"
              style={{ willChange: "transform, opacity" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={(_, info) => {
                if (info.offset.x < -40) {
                  directionRef.current = 1;
                  handleNext();
                } else if (info.offset.x > 40) {
                  directionRef.current = -1;
                  handlePrev();
                }
              }}
            >
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${certifications[currentIndex].image})`,
                  filter: "brightness(0.85)",
                  objectFit: "cover",
                  minHeight: "100%",
                  minWidth: "100%",
                }}
              />
              <div className="absolute bottom-0 left-0 w-full px-6 py-4 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-start">
                <h2 className="text-2xl font-bold text-white drop-shadow-md">
                  {certifications[currentIndex].title}
                </h2>
                <p className="text-primary mb-1">
                  {certifications[currentIndex].issuer}
                </p>
                <p className={`text-sm ${subTextColor}`}>
                  {certifications[currentIndex].date}
                </p>
              </div>
              {/* Certification Link Button */}
              {certifications[currentIndex].url && (
                <motion.a
                  href={certifications[currentIndex].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 8px 24px 0 rgba(0,0,0,0.18)",
                    backgroundColor: "#2563eb",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="absolute bottom-3 right-3 bg-primary text-white px-4 py-2 rounded shadow-lg hover:bg-primary/90 transition-all duration-200 font-semibold flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7h6m0 0v6m0-6L10 19"
                    />
                  </svg>
                  View Certificate
                </motion.a>
              )}
            </motion.div>
          </div>
          {/* Slider Dots - moved below the slider */}
          <div className="flex gap-2 mt-5">
            {certifications.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  directionRef.current = idx > currentIndex ? 1 : -1;
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to certification ${idx + 1}`}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-200 ${
                  idx === currentIndex
                    ? "bg-blue-600 border-blue-600 scale-110"
                    : "bg-gray-300 border-gray-400 opacity-70"
                }`}
                style={{ outline: "none" }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
