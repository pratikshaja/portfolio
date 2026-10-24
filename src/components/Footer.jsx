import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/pratikshaja', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/pratikshajadhav24', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:pratikshajadhav2401@gmail.com', label: 'Email' },
]

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/5 bg-darkbg/50 backdrop-blur-xl">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="text-white">Pratiksha</span>
                <span className="gradient-text">.</span>
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed mb-6">
              Full Stack Developer crafting beautiful, functional web experiences with clean code and creative solutions.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-accent hover:border-accent/30 hover:shadow-[0_0_20px_rgba(0,245,212,0.2)] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-accent transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4 text-slate-400">
              <p>
                <span className="text-slate-500">Email:</span>
                <br />
                <a href="mailto:pratikshajadhav2401@gmail.com" className="hover:text-accent transition-colors">
                  pratikshajadhav2401@gmail.com
                </a>
              </p>
              <p>
                <span className="text-slate-500">Location:</span>
                <br />
                Maharashtra, India
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            className="text-slate-500 text-sm text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Pratiksha Dilip Jadhav. All rights reserved.
          </motion.p>

          <motion.p
            className="text-slate-500 text-sm flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Built with <FaHeart className="text-accentPink animate-pulse" /> using React & Tailwind
          </motion.p>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 hover:shadow-[0_0_20px_rgba(0,245,212,0.3)] transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            aria-label="Scroll to top"
          >
            <FaArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
