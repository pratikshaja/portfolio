// src/components/Hero.jsx
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

// Typing animation component
function TypeWriter({ words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1))
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1))
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className="gradient-text">
      {currentText}
      <span className="animate-pulse text-accent">|</span>
    </span>
  )
}

// Floating particles component
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: i % 3 === 0 ? '#00F5D4' : i % 3 === 1 ? '#9B5DE5' : '#00BBF9',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const roles = ['MERN Stack Developer', 'Python Full Stack Developer', 'UI/UX Designer', 'Problem Solver']

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Floating particles */}
      <FloatingParticles />

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Greeting badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <HiSparkles className="text-lg" />
            <span>Welcome to my portfolio</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-white">Hi, I'm</span>
            <br />
            <span className="gradient-text-animated inline-block mt-2">
              Pratiksha Jadhav
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-300 mt-4 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <TypeWriter words={roles} />
          </motion.h2>

          <motion.p
            className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Crafting <span className="text-accent">immersive digital experiences</span> with clean code and creative design.
            I build scalable, maintainable web applications using modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="btn btn-primary group"
            >
              <span>View My Work</span>
              <motion.span
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
            >
              Let's Connect
            </a>
            <a
              href="/Pratiksha_Jadhav.pdf"
              download
              className="btn border-2 border-accentPurple/50 text-accentPurple hover:bg-accentPurple/10 hover:border-accentPurple"
            >
              <FaDownload className="mr-2" />
              Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-10 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <span className="text-slate-500 text-sm">Find me on:</span>
            <div className="flex gap-3">
              {[
                { icon: FaGithub, href: 'https://github.com/pratikshaja', color: 'hover:text-white' },
                { icon: FaLinkedin, href: 'https://linkedin.com/in/pratikshajadhav24', color: 'hover:text-accentBlue' },
                { icon: FaEnvelope, href: 'mailto:pratikshajadhav2401@gmail.com', color: 'hover:text-accent' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 ${social.color} transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_20px_rgba(0,245,212,0.2)]`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Creative visual */}
        <motion.div
          className="hidden lg:flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Animated rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-accent/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{ width: '350px', height: '350px', margin: '-25px' }}
            >
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(0,245,212,0.8)]" />
            </motion.div>

            <motion.div
              className="absolute inset-0 rounded-full border-2 border-accentPurple/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              style={{ width: '400px', height: '400px', margin: '-50px' }}
            >
              <div className="absolute top-1/2 right-0 w-2 h-2 bg-accentPurple rounded-full translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(155,93,229,0.8)]" />
            </motion.div>

            {/* Main profile container */}
            <motion.div
              className="relative w-72 h-72 rounded-3xl overflow-hidden"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Glassmorphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accentPurple/10 to-accentBlue/20 backdrop-blur-sm" />

              {/* Gradient border effect */}
              <div className="absolute inset-[2px] rounded-3xl overflow-hidden bg-darkbg">
                <img
                  src="/profile.jpeg"
                  alt="Pratiksha Jadhav"
                  className="w-full h-full object-cover opacity-90"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-darkbg/60 via-transparent to-transparent" />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl shadow-[0_0_60px_rgba(0,245,212,0.3)]" />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl glass-card text-sm font-medium text-accent"
              animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* <motion.div
              className="absolute -bottom-2 -left-6 px-4 py-2 rounded-xl glass-card text-sm"
              animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            >
              <span className="text-accentPurple font-semibold">50+</span>
              <span className="text-slate-400 ml-1">Projects</span>
            </motion.div> */}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="flex flex-col items-center text-slate-500 hover:text-accent transition-colors">
          <span className="text-xs mb-2">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-current rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </a>
      </motion.div>
    </section>
  )
}
