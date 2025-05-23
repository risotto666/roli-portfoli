"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioSection() {
  const portfolioRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      title: "Barber website",
      category: "Next.js / Supabase",
      image: "/projects/fodraszat.png",
      link: "https://fodraszat-eight.vercel.app",
    },
    {
      title: "Portfolio Template",
      category: "React / Tailwind",
      image: "/projects/vivi.png",
      link: "https://vivike2.vercel.app",
    },
    {
      title: "Restaurant website",
      category: "Next.js / Tailwind",
      image: "/projects/etterem.png",
      link: "https://etterem.vercel.app",
    },
    {
      title: "Wordle game",
      category: "React / Tailwind",
      image: "/projects/wordle.png",
      link: "https://worlde-magyar.vercel.app",
    },
    {
      title: "Quiz game",
      category: "React",
      image: "/projects/quiz.png",
      link: "https://quiz-virid-six.vercel.app",
    },
    {
      title: "Portfolio Template",
      category: "Next.js / Tailwind",
      image: "/projects/roli.png",
      link: "https://portfolio2-eosin-iota.vercel.app",
    },
  ];

  // Set up Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 ${isVisible ? "fade-in" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-green-500">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out some of my recent projects built with React, Next.js, and
            Tailwind CSS.
          </p>
        </div>
        <div
          ref={portfolioRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                isVisible
                  ? "portfolio-card-animate"
                  : "opacity-0 scale-90 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Link>

              {/* Próbáld kikommentelni az overlay-t, ha gond van vele */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
                <h3 className="text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-green-400 mb-4">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
