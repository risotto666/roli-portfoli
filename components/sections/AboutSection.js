"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-green-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="about-image-container relative group">
              {/* Decorative elements that appear on hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-green-700 rounded-lg blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-green-700 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-green-500 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-green-500 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-green-500 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-2 group-hover:translate-y-2"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-green-500 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

              {/* Main image with hover effects */}
              <div className="relative rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 group-hover:scale-[1.03] group-hover:rotate-2 z-10">
                <Image
                  src="/developer.jpg"
                  alt="About Roland"
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-lg transition-all duration-700 group-hover:brightness-110 group-hover:contrast-110"
                />

                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4 text-green-400">
              Web Developer based in Your Location
            </h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate web developer with expertise in creating modern,
              responsive websites. With a strong foundation in React,
              JavaScript, Next.js, Tailwind CSS, and Supabase, I bring ideas to
              life through clean code and intuitive user experiences.
            </p>
            <p className="text-gray-300 mb-8">
              My journey in web development started several years ago, and I've
              been continuously learning and adapting to new technologies. I
              believe in creating websites that not only look great but also
              perform exceptionally well.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">React</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">JavaScript</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Supabase</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Responsive Design</span>
              </div>
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-medium inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
