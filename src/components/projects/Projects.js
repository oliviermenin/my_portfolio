import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  { title: 'Projet 1', description: 'Description du projet 1', image: '/placeholder.svg?height=200&width=300' },
  { title: 'Projet 2', description: 'Description du projet 2', image: '/placeholder.svg?height=200&width=300' },
  { title: 'Projet 3', description: 'Description du projet 3', image: '/placeholder.svg?height=200&width=300' },
]

export default function Projects() {
  return (
    <section id="projets" className="py-20 bg-blue-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mes Projets
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-blue-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}