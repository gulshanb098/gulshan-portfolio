import { Themes } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  currentTheme: Themes;
}

export const Experience: React.FC<Props> = ({ currentTheme }: Props) => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Goavega Software Inc",
      duration: "Dec 2022 - Present",
      points: [
        "Enhanced Byju’s CRM tool by optimizing performance and stability using Node, React, MySQL, and AWS Cloud.",
        "Led the development of the Encrypted Messenger App (Qverse) using Node, Angular, MongoDB, Redis, AWS EC2.",
        "Led frontend for OptionsPlay (React, TypeScript, Material-UI, Azure CI/CD).",
        "Collaborated with CTO/CRO for app flow & embedding setup for trading platforms.",
        "Mentored team members and earned a ⭐ Star Team Player Award.",
      ],
    },
    {
      role: "Associate Software Engineer",
      company: "Goavega Software Inc",
      duration: "Aug 2021 - Nov 2022",
      points: [
        "Key contributor to Negobot.co (NodeJs, Restify, PostgreSQL, Google Cloud, ReactJS).",
        "Built AI-based negotiation chatbot for sales & procurement.",
        "Worked on eCommerce project (Spring Boot, Angular, SQL, AWS) boosting API efficiency by 30%.",
        "Designed business flows and earned a 🌟 Rising Star award.",
      ],
    },
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner (CLF-C02)",
      level: "2024",
      link: "https://www.credly.com/badges/eaad4a7e-e2f9-44d9-b698-497188917e53",
      icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
    },
    {
      title: "MongoDB - SI Associate",
      level: "2023",
      link: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/1f498938-b252-5e5e-9e46-03c3495074f6-gulshan-baraik-d8df8f69-e62b-444c-9139-87f42b864e27-certificate.pdf",
      icon: "https://img.icons8.com/color/48/000000/mongodb.png",
    },
    {
      title: "Next JS: The Complete Developer's Guide",
      level: "2025",
      link: "https://ude.my/UC-067109b2-d1b3-41fb-9146-8e3dabc378c4",
      icon: "https://img.icons8.com/color/48/udemy.png",
    },
  ];

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 80 },
    { name: "React.js", level: 75 },
    { name: "Java Springboot", level: 60 }
  ];

  return (
    <section id="experience" className="py-10 px-6 md:px-20 mt-5 bg-muted/10">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-8"
      >
        🏢 Work Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Side - Experience Timeline */}
        <div className="md:col-span-2 space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border-l-4 border-primary pl-6 relative"
            >
              <div className="absolute left-[-10px] top-2 w-4 h-4 bg-primary rounded-full shadow-md" />
              <h3 className="text-xl md:text-2xl font-semibold">
                {exp.role}{" "}
                <span className="text-muted-foreground font-normal">
                  – {exp.company}
                </span>
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {exp.duration}
              </p>
              <ul
                className={cn(
                  "list-disc pl-5 space-y-2 text-base",
                  currentTheme.isDark ? "text-gray-200" : "text-gray-800"
                )}
              >
                {exp.points.map((point, i) => (
                  <li key={i}>
                    {point.includes("⭐") || point.includes("🌟") ? (
                      <span className="font-semibold">{point}</span>
                    ) : (
                      point
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Right Side - Certifications and Skills */}
        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">📜 Certifications</h4>
            <ul className="space-y-3">
              {certifications.map((cert, i) => (
                <li key={i} className="flex items-start gap-3">
                  {cert.icon && (
                    <img
                      src={cert.icon}
                      alt={cert.title}
                      className="w-6 h-6 mt-1"
                    />
                  )}
                  <div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline font-medium"
                    >
                      {cert.title}
                    </a>
                    <p className="text-sm text-muted-foreground">
                      {cert.level}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {/* <h4 className="text-xl font-semibold mb-4">💻 Languages</h4> */}
            <ul className="space-y-4">
              {skills.map((skill, i) => (
                <li key={i}>
                  <div className="flex justify-between mb-1 text-sm font-medium">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-300 rounded-full">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
