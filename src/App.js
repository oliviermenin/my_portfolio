import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './css/index.css'

export default function App() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-orange-100 min-h-screen text-white">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  )
}