import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contactez-moi
        </motion.h2>
        <motion.form
          className="max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Nom</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 bg-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300" required></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Envoyer
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}   