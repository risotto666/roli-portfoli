"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      ease: [0.25, 0.1, 0.25, 1], // Custom easing function for a smooth feel
    },
  },
};

export default function HeroSection({ scrollToSection }) {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    // Trigger the background animation after component mounts
    setBgLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Animated Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-all duration-[2500ms] ease-out ${
          bgLoaded ? "scale-100 opacity-20" : "scale-110 opacity-0"
        }`}
        style={{
          backgroundImage: "url('/bg2.jpg')",
          transformOrigin: "center",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-600/30 via-gray-900/20 to-gray-600/30 z-0"></div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div className="md:w-1/2" variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="text-green-500 inline-block">Roland</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Web Developer & Designer
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              I create modern, responsive websites using React, Next.js, and
              Tailwind CSS. Let's build something amazing together.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-medium inline-block"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-green-600 text-green-500 hover:bg-green-600/10 px-6 py-3 rounded-lg transition-colors font-medium inline-block"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <div className="hero-image-container relative">
              {/* Glow effect container */}
              <div className="absolute inset-0 rounded-full blur-md bg-green-500/0 scale-100 transition-all duration-500 hero-glow"></div>

              {/* Rotating border effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 transition-all duration-500 hero-border">
                <div
                  className="w-full h-full border-4 border-green-400/50 rounded-full"
                  style={{ borderStyle: "dashed" }}
                ></div>
              </div>

              {/* Main image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-green-500/30 transition-all duration-300 hover:border-green-400/80 z-10">
                <Image
                  src="/me.JPG"
                  alt="Roland"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Pulse effect (added via CSS) */}
            </div>
          </motion.div>
        </div>
        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
            transition: {
              y: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                ease: "easeInOut",
              },
            },
          }}
        >
          <ChevronDown className="w-10 h-10 text-green-500" />
        </motion.a>
      </motion.div>
    </section>
  );
}
