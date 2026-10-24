import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const timeline = [
  {
    type: 'experience',
    title: 'Full Stack Developer',
    organization: 'TechB Softwares LLP, Pune',
    year: '2026',
    description: 'Built production features for SolarOps — a real-time solar energy invoicing portal. Delivered CUF invoice calculation logic, real-time dashboards with third-party API integration, PDF/Excel export, and scheduler-based invoice automation using Python Django and React.js.',
    icon: FaBriefcase,
    color: 'accent',
  },
  {
    type: 'experience',
    title: 'React JS Developer',
    organization: 'CodeInfinitys Solution, Sangli',
    year: '2025',
    description: 'Built dynamic and responsive web interfaces using React.js. Developed reusable components, integrated REST APIs, and improved frontend performance. Collaborated on MERN-based features.',
    icon: FaBriefcase,
    color: 'accentPurple',
  },
  {
    type: 'education',
    title: 'Master of Computer Applications (MCA)',
    organization: 'Shivaji University, Kolhapur',
    year: '2024',
    description: 'Specialized in advanced programming, web technologies, and software development methodologies. Graduated with 75%.',
    icon: FaGraduationCap,
    color: 'accentBlue',
  },
  {
    type: 'education',
    title: 'Bachelor of Computer Science (BCS)',
    organization: 'Shivaji University, Kolhapur',
    year: '2022',
    description: 'Foundation in computer science fundamentals, data structures, algorithms, and programming. Graduated with 78%.',
    icon: FaGraduationCap,
    color: 'accentPink',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accentPurple/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -translate-x-1/3" />

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-accentPink/10 border border-accentPink/30 text-accentPink text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Journey
          </motion.span>
          <h2 className="section-title">
            Education & Experience
          </h2>
          <p className="section-subtitle">
            My academic background and professional experience
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accentPurple to-accentPink" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              className={`relative flex items-start gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-${item.color}/20 border border-${item.color}/40 flex items-center justify-center shadow-lg`}
                  style={{
                    background: item.color === 'accent' ? 'rgba(0, 245, 212, 0.1)' :
                      item.color === 'accentBlue' ? 'rgba(0, 187, 249, 0.1)' :
                        'rgba(155, 93, 229, 0.1)',
                    borderColor: item.color === 'accent' ? 'rgba(0, 245, 212, 0.3)' :
                      item.color === 'accentBlue' ? 'rgba(0, 187, 249, 0.3)' :
                        'rgba(155, 93, 229, 0.3)',
                    boxShadow: item.color === 'accent' ? '0 0 30px rgba(0, 245, 212, 0.2)' :
                      item.color === 'accentBlue' ? '0 0 30px rgba(0, 187, 249, 0.2)' :
                        '0 0 30px rgba(155, 93, 229, 0.2)',
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <item.icon
                    className="text-2xl"
                    style={{
                      color: item.color === 'accent' ? '#00F5D4' :
                        item.color === 'accentBlue' ? '#00BBF9' :
                          '#9B5DE5'
                    }}
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className={`flex-1 ml-28 md:ml-0 ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
                <motion.div
                  className="glass-card-hover p-6 rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Type badge */}
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium mb-3 ${item.type === 'education'
                      ? 'bg-accent/10 text-accent border border-accent/20'
                      : 'bg-accentPurple/10 text-accentPurple border border-accentPurple/20'
                    }`}>
                    {item.type === 'education' ? <FaGraduationCap /> : <FaBriefcase />}
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>

                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>

                  <div className={`flex items-center gap-4 text-sm text-slate-400 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-accent" />
                      {item.organization}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-accentPurple" />
                      {item.year}
                    </span>
                  </div>

                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
