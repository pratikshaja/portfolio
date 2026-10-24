import React from 'react'
import { motion } from 'framer-motion'
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaDatabase, FaBootstrap, FaJava,
  FaPython
} from 'react-icons/fa'
import {
  SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiMysql,
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    description: 'Building beautiful, responsive interfaces',
    gradient: 'from-accent to-accentBlue',
    skills: [
      { name: 'React.js', icon: FaReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
    ]
  },
  {
    title: 'Backend',
    description: 'Powering apps with robust APIs',
    gradient: 'from-accentPurple to-accentPink',
    skills: [
      { name: 'Python Django', icon: FaPython, color: '#007396' },
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
    ]
  },
  {
    title: 'Database',
    description: 'Managing data efficiently',
    gradient: 'from-accentBlue to-accent',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ]
  },
  {
    title: 'Tools & Others',
    description: 'Streamlining development workflow',
    gradient: 'from-accentPink to-accentYellow',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: FaGithub, color: '#FFFFFF' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      // { name: 'VS Code', icon: SiVscode, color: '#FF6C37' },
    ]
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accentPurple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-accentPurple/10 border border-accentPurple/30 text-accentPurple text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            My Skills
          </motion.span>
          <h2 className="section-title">
            Technologies I Work With
          </h2>
          <p className="section-subtitle">
            Constantly learning and improving my skill set to deliver the best solutions
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-card-hover p-6 rounded-2xl h-full">
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">{category.title[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="text-sm text-slate-400">{category.description}</p>
                  </div>
                </div>

                {/* Skills list */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 hover:bg-white/10 transition-all duration-300 group/skill"
                      whileHover={{ scale: 1.02, y: -2 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                    >
                      <skill.icon
                        className="text-xl transition-all duration-300 group-hover/skill:scale-110"
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm text-slate-300 group-hover/skill:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech stack marquee */}
        <motion.div
          className="mt-16 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center mb-6">
            <span className="text-sm text-slate-500 uppercase tracking-wider">Tech Stack</span>
          </div>
          <div className="relative">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-darkbg to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-darkbg to-transparent z-10" />

            {/* Scrolling icons */}
            <motion.div
              className="flex gap-12 items-center"
              animate={{ x: [0, -500] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...skillCategories.flatMap(c => c.skills), ...skillCategories.flatMap(c => c.skills)].map((skill, i) => (
                <div key={i} className="flex flex-col items-center gap-2 min-w-max">
                  <skill.icon className="text-3xl text-slate-500 hover:text-accent transition-colors" />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
