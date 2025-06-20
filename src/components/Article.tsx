import { Themes } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { BookOpen, ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";

interface ArticleCard {
  id: number;
  image: string;
  title: string;
  platform: string;
  readTime: string;
  link: string;
  description: string;
}

interface Props {
  currentTheme: Themes;
}

const articles: ArticleCard[] = [
  // ...same as before
  {
    id: 1,
    image: "/article1.png",
    title: "Rendering Data-Frame to html template in Django Framework",
    platform: "Geeksforgeeks",
    readTime: "6 min read",
    link: "https://www.geeksforgeeks.org/python/rendering-data-frame-to-html-template-in-table-view-using-django-framework/",
    description:
      "In Django, It is easy to render the HTML templates by setting URLs of respective HTML pages. Here we will let to know about how we can work with DataFrame to modify them for table view in the HTML template or web-pages, and for that, we have to use 'render' and 'HttpResponse' functions to manipulate the data inside the DataFrame.",
  },
  {
    id: 2,
    image: "/article2.png",
    title: "Difference between DataClass vs NamedTuple vs Object in Python",
    platform: "Geeksforgeeks",
    readTime: "8 min read",
    link: "https://www.geeksforgeeks.org/python/difference-between-dataclass-vs-namedtuple-vs-object-in-python/",
    description:
      "Data Class is a type of class that is used to store data without any functionality. These data classes are just regular classes having the main purpose to store state and data without knowing the constraints and logic behind it. Whenever you create a class that mostly contains attributes and certain properties to deal with the data and its representation.",
  },
  {
    id: 3,
    image: "/article3.png",
    title: "Major Kernel Functions in Support Vector Machine (SVM)",
    platform: "Geeksforgeeks",
    readTime: "10 min read",
    link: "https://www.geeksforgeeks.org/machine-learning/major-kernel-functions-in-support-vector-machine-svm/",
    description:
      "SVM algorithm use the mathematical function defined by the kernel. Kernel Function is a method used to take data as input and transform it into the required form of processing data. Different algorithm uses different type of kernel functions. These function are of different types. For example Linear, Polynomial, Gaussian etc.",
  },
  {
    id: 4,
    image: "/article4.png",
    title: "Random Walk Method — Page Rank Algorithm using networkx",
    platform: "Medium",
    readTime: "4 min read",
    link: "https://medium.com/@gbrnc28/random-walk-method-page-rank-algorithm-using-networkx-7da8696ecc38",
    description:
      "Random Walk Method is an algorithm that is used to define and set random paths in a graph. Basically a random walk refers to where one can start from a node that is allocated randomly from a given set of nodes, then choosing a neighbor from its neighbor nodes to navigate and after walking throughout the area by keeping the path of a list of nodes.",
  },
  {
    id: 5,
    image: "/article5.png",
    title: "What is APIPA (Automatic Private IP Addressing)?",
    platform: "Geekforgeeks",
    readTime: "8 min read",
    link: "https://www.geeksforgeeks.org/computer-networks/what-is-apipa-automatic-private-ip-addressing/",
    description:
      "APIPA ​comprises Automatic Private IP Addressing, a networking functionality that enables computers to automatically assign themselves an IP address when they are unable to acquire one from a DHCP server.",
  },
  {
    id: 6,
    image: "/article6.png",
    title: "What is ExecuteScalar() method in ADO.NET",
    platform: "Medium",
    readTime: "3 min read",
    link: "https://medium.com/@gbrnc28/what-is-executescalar-method-in-ado-net-adf3b7a8eb68",
    description:
      "ExecuteScalar() is a standard SQL command object that is used to fetch a single value from the database by the successful execution of it. The main purpose of ExecuteScalar() is to execute the SQL the query and returns the set the scalar values which can have multiple rows and columns stored in the database.",
  },
];

const truncate = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

export const Article: React.FC<Props> = ({ currentTheme }) => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [currentDot, setCurrentDot] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Unified drag-to-scroll handlers (mouse + touch)
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
    const walk = (x - startX.current) * 1.1; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const onPointerLeave = () => {
    isDragging.current = false;
  };

  // Update currentDot on scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild
      ? (scrollRef.current.firstElementChild as HTMLElement).offsetWidth + 24 // gap-6 = 1.5rem = 24px
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

  // Use theme classes
  const cardClass = cn(
    "snap-start shrink-0 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[33%] xl:w-[25%] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[340px] relative",
    currentTheme.card
  );

  // Determine text color
  const textColor = currentTheme.isDark ? "text-white" : "text-gray-900";

  // --- Dots optimization based on visible cards ---
  // Calculate how many cards are visible based on screen size
  const [cardsVisible, setCardsVisible] = useState(1);

  React.useEffect(() => {
    const updateCardsVisible = () => {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;
      if (width >= 1280) setCardsVisible(4); // xl:w-[25%]
      else if (width >= 1024) setCardsVisible(3); // lg:w-[33%]
      else if (width >= 768) setCardsVisible(2); // md:w-[50%]
      else if (width >= 640) setCardsVisible(1); // sm:w-[70%]
      else setCardsVisible(1); // w-[90%]
    };
    updateCardsVisible();
    window.addEventListener("resize", updateCardsVisible);
    return () => window.removeEventListener("resize", updateCardsVisible);
  }, []);

  // Number of dots = articles.length - cardsVisible + 1 (minimum 1)
  const dotCount = Math.max(1, articles.length - cardsVisible + 1);

  return (
    <motion.section
      id="articles"
      className="mt-5 px-4 md:px-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold text-center mb-4",
          currentTheme.isDark ? "text-white" : "text-gray-900"
        )}
      >
        📰 Articles
      </h2>
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
        {articles.map((article, idx) => (
          <motion.div
            key={article.id}
            className={cardClass}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <div
              className="relative"
              style={{
                background: `url(${article.image}) center/cover no-repeat`,
                height: 210,
              }}
            />
            <div
              className={cn(
                "absolute left-0 right-0 top-[170px] px-6 py-3 flex flex-col gap-1 bg-black/80",
                "rounded-b-xl"
              )}
            >
              <div className="font-bold text-lg text-white leading-tight">
                {article.title}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <span>{article.platform}</span>
                <span className="mx-1">•</span>
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center mt-2">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center px-3 py-1 rounded font-semibold text-sm shadow transition",
                    "bg-white text-gray-900 hover:bg-gray-200"
                  )}
                  style={{ textDecoration: "none" }}
                >
                  ↗ View Article
                </a>
              </div>
            </div>
            <div className={cn("p-4 text-sm flex-1", textColor, "mt-[90px]")}>
              {expanded === article.id ? (
                <>
                  {article.description}{" "}
                  <span
                    className={cn(
                      "cursor-pointer font-medium underline",
                      currentTheme.isDark ? "text-blue-300" : "text-blue-700"
                    )}
                    onClick={() => setExpanded(null)}
                  >
                    Show less
                  </span>
                </>
              ) : (
                <>
                  {truncate(article.description, 20)}{" "}
                  <span
                    className={cn(
                      "cursor-pointer font-medium underline",
                      currentTheme.isDark ? "text-blue-300" : "text-blue-700"
                    )}
                    onClick={() => setExpanded(article.id)}
                  >
                    Read more
                  </span>
                </>
              )}
            </div>
          </motion.div>
        ))}

        {/* Explore More Button */}
        <div className="shrink-0 snap-start w-[280px] flex items-center justify-center">
          <motion.a
            href="https://www.geeksforgeeks.org/user/night_fury1/contributions/?type=articles"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "flex items-center gap-2 px-5 py-2 rounded-full shadow-md transition-all duration-300",
              currentTheme.card,
              currentTheme.isDark ? "text-gray-200" : "text-gray-800"
            )}
          >
            <BookOpen className="w-5 h-5" />
            <span className="text-md font-medium">Explore More</span>
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
      {/* Optimized Slider Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: dotCount }).map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to article ${idx + 1}`}
            className={cn(
              "w-3 h-3 rounded-full border-2 transition-all duration-200",
              idx === currentDot
                ? "bg-blue-600 border-blue-600 scale-110"
                : "bg-gray-300 border-gray-400 opacity-70"
            )}
            style={{ outline: "none" }}
            onClick={() => scrollToCard(idx)}
          />
        ))}
      </div>
    </motion.section>
  );
};
