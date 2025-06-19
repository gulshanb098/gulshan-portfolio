"use client";

import { Article } from "@/components/Article";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Intro } from "@/components/Intro";
import { Nav } from "@/components/Nav";
import { Project } from "@/components/Project";
import { Skill } from "@/components/Skill";
import { Social } from "@/components/Social";
import { allThemes } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { useRef, useEffect, useState } from "react";

// Simple animated background with moving dots/stars

type AnimatedBackgroundProps = {
  containerRef: React.RefObject<HTMLDivElement | null>;
};

function AnimatedBackground({ containerRef }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    function resize() {
      if (containerRef.current) {
        const bounds = containerRef.current.getBoundingClientRect();
        width = bounds.width;
        height = containerRef.current.scrollHeight;
        canvas!.width = width;
        canvas!.height = height;
      }
    }

    resize();
    window.addEventListener("resize", resize);

    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      speed: Math.random() * 2 + 1, // 🚀 much faster
      alpha: Math.random() * 0.5 + 0.5,
    }));

    const stars = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      twinkle: Math.random() * 0.15 + 0.05, // ✨ twinkle faster
      alpha: Math.random() * 0.5 + 0.5,
      phase: Math.random() * Math.PI * 2,
    }));

    const sprinkles = Array.from({ length: 20 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      len: Math.random() * 18 + 8,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 2.5 + 1.2, // 🚀 super fast
      color: `hsl(${Math.floor(Math.random() * 360)}, 100%, 40%)`, // 🎨 much darker
      alpha: Math.random() * 0.5 + 0.5,
    }));

    const shapes = Array.from({ length: 10 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 18 + 8,
      speed: Math.random() * 1.5 + 0.8, // 🚀 significantly faster
      angle: Math.random() * Math.PI * 2,
      type: Math.random() > 0.5 ? "triangle" : "diamond",
      color: `hsl(${Math.floor(Math.random() * 360)}, 90%, 35%)`, // 🌈 dark and rich
      alpha: Math.random() * 0.4 + 0.4,
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        ctx.globalAlpha = dot.alpha;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.shadowColor = "#fff";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
        dot.y += dot.speed;
        if (dot.y > height) {
          dot.y = -dot.r;
          dot.x = Math.random() * width;
        }
      });

      stars.forEach((star) => {
        star.phase += star.twinkle;
        const twinkleAlpha = star.alpha + Math.sin(star.phase) * 0.3;
        ctx.globalAlpha = Math.max(0, Math.min(1, twinkleAlpha));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = "#fffbe9";
        ctx.shadowColor = "#fffbe9";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      sprinkles.forEach((sprinkle) => {
        ctx.save();
        ctx.globalAlpha = sprinkle.alpha;
        ctx.translate(sprinkle.x, sprinkle.y);
        ctx.rotate(sprinkle.angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(sprinkle.len, 0);
        ctx.strokeStyle = sprinkle.color;
        ctx.lineWidth = 2;
        ctx.shadowColor = sprinkle.color;
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.restore();

        sprinkle.x += Math.cos(sprinkle.angle) * sprinkle.speed;
        sprinkle.y += Math.sin(sprinkle.angle) * sprinkle.speed;
        if (
          sprinkle.x < -20 ||
          sprinkle.x > width + 20 ||
          sprinkle.y < -20 ||
          sprinkle.y > height + 20
        ) {
          sprinkle.x = Math.random() * width;
          sprinkle.y = Math.random() * height;
        }
      });

      shapes.forEach((shape) => {
        ctx.save();
        ctx.globalAlpha = shape.alpha;
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.angle);
        ctx.fillStyle = shape.color;
        ctx.shadowColor = shape.color;
        ctx.shadowBlur = 10;
        if (shape.type === "triangle") {
          ctx.beginPath();
          ctx.moveTo(0, -shape.size / 2);
          ctx.lineTo(-shape.size / 2, shape.size / 2);
          ctx.lineTo(shape.size / 2, shape.size / 2);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -shape.size / 2);
          ctx.lineTo(shape.size / 2, 0);
          ctx.lineTo(0, shape.size / 2);
          ctx.lineTo(-shape.size / 2, 0);
          ctx.closePath();
          ctx.fill();
        }
        ctx.shadowBlur = 0;
        ctx.restore();

        shape.y += shape.speed;
        if (shape.y > height + 20) {
          shape.y = -20;
          shape.x = Math.random() * width;
        }
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(draw);
    }

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

export default function Portfolio() {
  useEffect(() => {
    document.title = "Gulshan Baraik | Full Stack Developer";
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const themes = allThemes;
  const [themeIndex, setThemeIndex] = useState(0);
  const currentTheme = themes[themeIndex];

  const toggleTheme = () => setThemeIndex((prev) => (prev + 1) % themes.length);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative min-h-screen p-4 md:p-10 transition-colors duration-500 overflow-hidden",
        currentTheme.isDark
          ? `bg-gradient-to-br ${currentTheme.gradient} text-white`
          : currentTheme.light
      )}
    >
      <AnimatedBackground containerRef={containerRef} />

      <Nav
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        currentTheme={currentTheme}
        toggleTheme={toggleTheme}
      />
      <Intro currentTheme={currentTheme} />
      <Social currentTheme={currentTheme} />
      <Project currentTheme={currentTheme} />
      <Skill currentTheme={currentTheme} />
      <Article currentTheme={currentTheme} />
      <Education currentTheme={currentTheme} />
      <Contact currentTheme={currentTheme} />
      <Footer currentTheme={currentTheme} />
    </div>
  );
}
