import { motion } from "framer-motion";
import { Themes } from "@/lib/themes";
import { cn } from "@/lib/utils";

interface ContactProps {
  currentTheme: Themes;
}

export const Contact: React.FC<ContactProps> = ({ currentTheme }) => {
  const textColor = currentTheme.isDark ? "text-gray-200" : "text-gray-800";
  const subTextColor = currentTheme.isDark ? "text-gray-400" : "text-gray-600";
  const borderColor = currentTheme.isDark
    ? "border-zinc-700"
    : "border-zinc-300";
  const terminalBg = currentTheme.isDark
    ? "bg-black text-green-400"
    : "bg-gray-900 text-green-400";

  return (
    <section id="contact" className="py-16 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        <span className="text-primary">#</span> Get In Touch
      </motion.h2>
      <p className={`text-center mb-12 ${subTextColor}`}>
        Have a project in mind or want to discuss opportunities? Let's talk!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {/* Left - Form */}
        <form
          className={`space-y-6 p-6 rounded-xl shadow-md ${currentTheme.card} ${borderColor} border`}
        >
          <div>
            <label className={`block mb-1 font-medium ${textColor}`}>
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className={`w-full px-4 py-3 rounded border border-muted/40 focus:ring-2 focus:ring-primary placeholder-gray-500 ${currentTheme.isDark ? "placeholder-gray-400" : "placeholder-gray-500"}`}
            />
          </div>
          <div>
            <label className={`block mb-1 font-medium ${textColor}`}>
              Email
            </label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className={`w-full px-4 py-3 rounded border border-muted/40 focus:ring-2 focus:ring-primary placeholder-gray-500 ${currentTheme.isDark ? "placeholder-gray-400" : "placeholder-gray-500"}`}
            />
          </div>
          <div>
            <label className={`block mb-1 font-medium ${textColor}`}>
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Your message here..."
              className={`w-full px-4 py-3 rounded border border-muted/40 focus:ring-2 focus:ring-primary placeholder-gray-500 ${currentTheme.isDark ? "placeholder-gray-400" : "placeholder-gray-500"}`}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className={cn(
              "w-full py-3 btn-primary border border-muted/40 font-semibold rounded shadow-md hover:shadow-lg transition-all duration-300",
              currentTheme.isDark ? "text-white" : "text-gray-900"
            )}
          >
            Send Message
          </motion.button>
        </form>

        {/* Right - Contact Info + Terminal View */}
        <div
          className={`space-y-8 p-6 rounded-xl shadow-md ${currentTheme.card} ${borderColor} border`}
        >
          <div>
            <h4 className={`text-xl font-semibold mb-4 ${textColor}`}>
              Contact Information
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a
                  href="mailto:gulshanbaraik@gmail.com"
                  className="text-primary underline"
                >
                  gulshanbaraik@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>🐙</span>
                <a
                  href="https://github.com/gulshanbaraik01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  github.com/gulshanbaraik01
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>🔗</span>
                <a
                  href="https://www.linkedin.com/in/gulshan-baraik-667120a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  linkedin.com/in/gulshan-baraik-667120a4/
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                +917903189580
              </li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`rounded-lg overflow-hidden border border-muted shadow-xl font-mono text-sm ${terminalBg}`}
          >
            <motion.div
              className="flex items-center px-4 py-2 border-b border-muted/40 bg-black/30"
              style={{ borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="terminal-circle bg-red-500 w-3 h-3 rounded-full mr-2"></div>
              <div className="terminal-circle bg-yellow-500 w-3 h-3 rounded-full mr-2"></div>
              <div className="terminal-circle bg-green-500 w-3 h-3 rounded-full mr-2"></div>
              <div className="ml-2 text-xs text-gray-400">contact-me</div>
            </motion.div>
            <div className="p-4">
              <p className="mb-2">→ Let's build something awesome together!</p>
              <p className="text-blue-400 mb-2">$ cat availability.txt</p>
              <p className="mb-2">
                → Available for freelance work and consulting
              </p>
              <p className="text-blue-400 mb-2">$ cat response-time.txt</p>
              <p className="mb-2">→ Usually respond within 24 hours</p>
              <p className="mb-2">
                <span className="text-primary-500">$</span>{" "}
                <span className="animate-cursor">_</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
