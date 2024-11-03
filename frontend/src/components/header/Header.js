import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-blue-900 bg-opacity-90 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="text-2xl font-bold">Olivier Bazou MENIN</a>
        </motion.div>
        <div className="hidden md:flex space-x-4">
          {['Accueil', 'À propos', 'Projets', 'Compétences', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-orange-300 transition-colors"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-blue-800 py-2"
        >
          {['Accueil', 'À propos', 'Projets', 'Compétences', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block px-4 py-2 hover:bg-blue-700">{item}</a>
          ))}
        </motion.div>
      )}
    </header>
  )
}