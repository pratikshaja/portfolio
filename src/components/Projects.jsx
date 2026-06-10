import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiMongodb, SiTailwindcss, SiExpress, SiJavascript } from 'react-icons/si'

const projects = [
  {
    title: 'SweetCrust Bakery',
    category: 'Landing Page',
    desc: 'A vibrant, responsive bakery landing page with smooth scroll navigation, promotional showcases, and delightful animations.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    techIcons: [FaReact, SiTailwindcss, SiJavascript],
    github: 'https://github.com/pratikshaja/bakery-landing-page.git',
    live: 'https://sweetcrustbakery.netlify.app/',
    gradient: 'from-orange-500 to-pink-500',
    image: '🧁',
  },
  {
    title: 'Task Manager',
    category: 'Full Stack App',
    desc: 'Full-stack task management app with CRUD operations, role-based access control, authentication, and dynamic UI updates.',
    tech: ['React', 'Express', 'Node.js', 'MongoDB'],
    techIcons: [FaReact, SiExpress, FaNodeJs, SiMongodb],
    github: 'https://github.com/pratikshaja/task-manager-app.git',
    live: '#',
    gradient: 'from-accent to-accentBlue',
    image: '✅',
  },
  {
    title: 'Dental Clinic',
    category: 'Business Website',
    desc: 'Modern dental clinic website featuring service information, appointment scheduling, doctor profiles, and testimonials.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/pratikshaja/Dental_Clinic.git',
    live: 'https://mellifluous-tapioca-fe7e66.netlify.app/',
    gradient: 'from-blue-500 to-cyan-400',
    image: '🦷',
  },
  {
    title: 'Ideal Industries',
    category: 'Corporate Website',
    desc: 'Sleek industrial website with clean navigation, service overview, team profiles, and portfolio highlights.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/pratikshaja/Dental_Clinic.git',
    live: 'https://stately-jalebi-cf4b32.netlify.app/',
    gradient: 'from-slate-600 to-slate-800',
    image: '🏭',
  },
  {
    title: 'Digital Marketing',
    category: 'Marketing Website',
    desc: 'Professional digital marketing landing page with service highlights, pricing plans, testimonials, and lead generation.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/pratikshaja/Digital_Marketing.git',
    live: 'https://digital-marketing-black-ten.vercel.app/',
    gradient: 'from-accentPurple to-accentPink',
    image: '📈',
  },
  {
    title: 'Digital Visiting Card',
    category: 'Personal Website',
    desc: 'Responsive digital business card with contact details, social links, location map, and modern mobile-first design.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/pratikshaja/visiting_card_mahiseva.git',
    live: 'https://visiting-card-mahiseva.vercel.app/',
    gradient: 'from-yellow-500 to-orange-500',
    image: '💳',
  }
]

const categories = ['All', 'Full Stack App', 'Landing Page', 'Business Website', 'Corporate Website', 'Marketing Website', 'Personal Website']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accentPurple/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-accentBlue/10 border border-accentBlue/30 text-accentBlue text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            My Work
          </motion.span>
          <h2 className="section-title">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            A collection of projects I've built with passion and dedication
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === category
                  ? 'bg-gradient-to-r from-accent to-accentBlue text-darkbg shadow-[0_0_20px_rgba(0,245,212,0.3)]'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:border-accent/30 hover:text-white'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="glass-card-hover h-full flex flex-col overflow-hidden project-card">
                  {/* Project header with emoji/gradient */}
                  <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '20px 20px'
                      }} />
                    </div>

                    {/* Project emoji */}
                    <motion.span
                      className="text-6xl relative z-10"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {project.image}
                    </motion.span>

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-darkbg/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-xl bg-white/10 border border-white/20 text-white hover:border-accent hover:text-accent transition-all duration-300 hover:scale-110"
                      >
                        <FaGithub size={20} />
                      </a>
                      {project.live !== '#' && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="p-3 rounded-xl bg-accent text-darkbg hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(0,245,212,0.3)]"
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      )}
                    </motion.div>

                    {/* Category badge */}
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium text-white">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                      {project.desc}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View more CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/pratikshaja"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:border-accent/30 hover:text-accent transition-all duration-300 group"
          >
            <FaGithub className="group-hover:rotate-12 transition-transform" />
            <span>View More on GitHub</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
