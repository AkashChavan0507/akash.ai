'use client';

import { motion } from 'framer-motion';
import experienceData from '@/data/experience.json';
import { FaBriefcase } from 'react-icons/fa';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 relative"
            >
              {/* Timeline Line */}
              {index < experienceData.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-accent/30" />
              )}

              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                    <FaBriefcase className="text-accent text-xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                      {exp.title}
                    </h3>
                    <span className="text-accent font-medium">{exp.period}</span>
                  </div>
                  <h4 className="text-xl text-accent mb-2">{exp.company}</h4>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-400">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

