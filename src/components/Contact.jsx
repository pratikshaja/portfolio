import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from '@formspree/react'
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'pratikshajadhav2401@gmail.com',
    href: 'mailto:pratikshajadhav2401@gmail.com',
    color: 'accent',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'pratikshajadhav24',
    href: 'https://linkedin.com/in/pratikshajadhav24',
    color: 'accentBlue',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'pratikshaja',
    href: 'https://github.com/pratikshaja',
    color: 'accentPurple',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Maharashtra, India',
    href: '#',
    color: 'accentPink',
  },
]

export default function Contact() {
  const [state, handleSubmit] = useForm("xanapwap")
  const [focused, setFocused] = useState(null)

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accentPurple/10 rounded-full blur-3xl" />

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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <HiSparkles />
            Let's Connect
          </motion.span>
          <h2 className="section-title">
            Get In Touch
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's work together!
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              {/* Contact links */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                      style={{
                        background: item.color === 'accent' ? 'rgba(0, 245, 212, 0.1)' :
                          item.color === 'accentBlue' ? 'rgba(0, 187, 249, 0.1)' :
                            item.color === 'accentPurple' ? 'rgba(155, 93, 229, 0.1)' :
                              'rgba(255, 107, 157, 0.1)',
                      }}
                    >
                      <item.icon
                        className="text-xl"
                        style={{
                          color: item.color === 'accent' ? '#00F5D4' :
                            item.color === 'accentBlue' ? '#00BBF9' :
                              item.color === 'accentPurple' ? '#9B5DE5' :
                                '#FF6B9D'
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-accent transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              {state.succeeded ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    <FaCheckCircle className="text-6xl text-accent mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">Thank you for reaching out. I'll get back to you soon!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-accent/50 focus:bg-white/10 transition-all duration-300"
                        placeholder="John Doe"
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-accent/50 focus:bg-white/10 transition-all duration-300"
                        placeholder="john@example.com"
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-accent/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="Project Inquiry"
                      onFocus={() => setFocused('subject')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-accent/50 focus:bg-white/10 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or idea..."
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full btn btn-primary py-4 text-lg group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {state.submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.span
                          className="w-5 h-5 border-2 border-darkbg/30 border-t-darkbg rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Send Message
                      </span>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
