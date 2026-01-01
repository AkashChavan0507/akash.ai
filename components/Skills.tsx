'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import skillsData from '@/data/skills.json';

const skillCategories = Object.keys(skillsData) as Array<keyof typeof skillsData>;

export default function Skills() {
  const [activeTab, setActiveTab] = useState<keyof typeof skillsData>('generativeAi');

  return (
    <section id="skills" className="py-20 px-4 bg-dark">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          Skills
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {skillCategories.map((category) => {
            const categoryData = skillsData[category];
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === category
                    ? 'bg-accent text-black'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{categoryData.icon}</span>
                {categoryData.title}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {skillsData[activeTab].skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 hover:border-accent transition-all cursor-default"
              >
                <span className="text-white font-medium">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

