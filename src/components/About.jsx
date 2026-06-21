import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa'

const highlights = [
  { icon: FaCode, label: 'Clean Code', color: 'text-accent' },
  { icon: FaLightbulb, label: 'Creative Solutions', color: 'text-accentYellow' },
  { icon: FaRocket, label: 'Fast Delivery', color: 'text-accentBlue' },
  { icon: FaHeart, label: 'Passionate', color: 'text-accentPink' },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accentPurple/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-x-1/3" />

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
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.span>
          <h2 className="section-title">
            Passionate Developer & <br className="hidden sm:block" />Creative Problem Solver
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left: Visual element */}
          <motion.div
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-accentPurple/10 to-accentBlue/20 rounded-3xl blur-xl" />

              {/* Code block mockup */}
              <div className="relative glass-card p-6 rounded-2xl max-w-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="text-sm font-mono">
                  <code>
                    <span className="text-accentPurple">const</span>{' '}
                    <span className="text-accentBlue">developer</span>{' '}
                    <span className="text-slate-400">=</span> {'{'}
                    {'\n'}  <span className="text-accent">name</span>: <span className="text-accentYellow">"Pratiksha"</span>,
                    {'\n'}  <span className="text-accent">skills</span>: <span className="text-slate-400">[</span>
                    {'\n'}    <span className="text-accentPink">"React"</span>,
                    {'\n'}    <span className="text-accentPink">"Node.js"</span>,
                    {'\n'}    <span className="text-accentPink">"MongoDB"</span>
                    {'\n'}  <span className="text-slate-400">]</span>,
                    {'\n'}  <span className="text-accent">passion</span>: <span className="text-accentYellow">"∞"</span>
                    {'\n'}{'}'}
                  </code>
                </pre>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-lg glass-card text-xs font-medium text-accent"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                MCA Graduate 🎓
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a <span className="text-accent font-semibold">detail-oriented MERN Stack Developer</span> who
              loves crafting interactive and efficient web experiences. With a strong foundation in
              computer applications and hands-on experience in modern web technologies.
            </p>

            <p className="text-slate-400 leading-relaxed">
              My strengths lie in building <span className="text-white">responsive UIs with React.js</span>,
              developing clean APIs, and writing maintainable, modular code. I'm constantly exploring
              new tools, improving my development workflow, and pushing myself to grow as a
              <span className="text-accentPurple"> full-stack engineer</span>.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Beyond coding, I believe in creating <span className="text-accentBlue">meaningful user experiences</span> that
              not only function flawlessly but also delight users with thoughtful design and smooth interactions.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="glass-card p-4 rounded-xl text-center group hover:border-accent/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <item.icon className={`text-2xl mx-auto mb-2 ${item.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm text-slate-300">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8 pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {[
                { value: '1+', label: 'Years Experience' },
                // { value: '5+', label: 'Projects Completed' },
                // { value: '100%', label: 'Client Satisfaction' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
