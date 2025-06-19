import { Themes } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiSpringboot,
  SiReact,
  SiAngular,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiCircleci,
  SiSocketdotio,
  SiGraphql,
} from "react-icons/si";

interface Props {
  currentTheme: Themes;
}

export const Skill: React.FC<Props> = ({ currentTheme }) => {
  const skills = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "React", icon: SiReact },
    { name: "Angular", icon: SiAngular },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    // { name: "AWS", icon: SiAmazonaws },
    { name: "Docker", icon: SiDocker },
    { name: "CI/CD", icon: SiCircleci },
    { name: "Socket.IO", icon: SiSocketdotio },
    // { name: "REST", icon: SiRest },
    { name: "GraphQL", icon: SiGraphql },
  ];

  return (
    <section id="skills" className="py-5 mt-5 px-4 md:px-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={cn(
          "text-3xl md:text-4xl font-bold text-center mb-4",
          currentTheme.isDark ? "text-white" : "text-gray-900"
        )}
      >
        💻 Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full mx-auto"
        style={{ maxWidth: "100%" }}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {skills.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className={cn(
              "flex flex-col items-center justify-center py-4 px-3 rounded-lg shadow-sm cursor-pointer transition-all font-medium text-sm gap-2",
              currentTheme.card
            )}
          >
            <Icon
              size={28}
              className={cn(
                currentTheme.isDark ? "text-white" : "text-gray-900"
              )}
            />
            <span>{name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
