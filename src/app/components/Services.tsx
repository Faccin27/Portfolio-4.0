"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code, Eye } from "lucide-react";
import Image from "next/image";
import Logo from "@/assets/logo2.png";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with Next.js and Tailwind CSS, featuring animations and dark mode support.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      image: "/projects/portfolio.jpg",
      github: "https://github.com/yourusername/portfolio",
      liveDemo: "https://yourportfolio.com"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with cart functionality, user authentication, and payment processing.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "/projects/ecommerce.jpg",
      github: "https://github.com/yourusername/ecommerce",
      liveDemo: "https://yourecommerce.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and drag-and-drop interface.",
      technologies: ["React", "Firebase", "Tailwind CSS", "React DnD"],
      image: "/projects/taskapp.jpg",
      github: "https://github.com/yourusername/taskapp",
      liveDemo: "https://yourtaskapp.com"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts and visual data representations.",
      technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation"],
      image: "/projects/weather.jpg",
      github: "https://github.com/yourusername/weather",
      liveDemo: "https://yourweatherapp.com"
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-full h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    fill
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <Code className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-semibold mb-3 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github className="w-5 h-5 mr-2" />
                  <span>Code</span>
                </a>
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-32 left-20 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image src={Logo} alt="Decorative logo" width={256} height={256} />
      </div>
    </section>
  );
}