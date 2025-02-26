"use client";

import { GraduationCap, Calendar, Award } from "lucide-react";
import Image from "next/image";
import AnimatedSectionHeader from "./AnimatedSectionHeader";
import { motion } from "framer-motion";
import Logo from "@/assets/logo2.png";

export default function Education() {
  const education = [
    {
      degree: "Technician in Internet Computing",
      institution: "National Service for Industrial Learning (SENAI)",
      period: "2023 – 2024",
      achievements: [
        "Highest grades in the class",
        "Highest score on the SAEP assessment",
        "First place in the Mundo Senai project",
      ],
    },
    {
      degree: "Industrial Automation: Control Systems and Robotics",
      institution: "National Service for Industrial Learning (SENAI)",
      period: "2021 – 2022",
      achievements: [
        "Creation of a humanoid robotic arm",
        "Proficient in configuring PLCs with ease",
        "Second place in the Mundo Senai project",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Education" />
        {/* Grid para alinhar lado a lado em telas maiores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 dark:bg-purple-700 rounded-br-full z-0 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  {edu.degree}
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  {edu.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.period}
                </p>
                <h4 className="text-lg font-medium mb-2 dark:text-gray-200 flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-32 right-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image src={Logo} alt="Decorative logo" width={256} height={256} />
      </div>
    </section>
  );
}
