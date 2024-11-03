import React from 'react';
import { motion } from 'framer-motion';
import IRC from '../../assets/images/projectsPictures/irc.png';
import Puissance4 from '../../assets/images/projectsPictures/Puissance4.png';
import FlappyFlop from '../../assets/images/projectsPictures/FlappyFlop.jpeg';
import Morpion from '../../assets/images/projectsPictures/Morpion.png';
import MyVarDump from '../../assets/images/projectsPictures/MyVarDump.png';
import CombDisplay from '../../assets/images/projectsPictures/CombDisplay.png';

const projects = [
  { 
    title: 'My Internet Relay Chat', 
    description: 'Chat instantanée réalisé avec Express.js, Socket.io et React.js', 
    image: IRC,
    github: 'https://github.com/oliviermenin/MyIRC'
  },
  { 
    title: 'Puissance 4', 
    description: 'Jeu du puissance 4', 
    image: Puissance4,
    github: 'https://github.com/oliviermenin/Puissance4'
  },
  { 
    title: 'Flappy Flop', 
    description: 'Remake du jeu Flappy Bird', 
    image: FlappyFlop,
    github: 'https://github.com/oliviermenin/FlappyFlop'
  },
  { 
    title: 'Morpion', 
    description: 'Jeu du morpion', 
    image: Morpion,
    github: 'https://github.com/oliviermenin/TicTacToe'
  },
  { 
    title: 'MyVarDump', 
    description: 'Fonction vardump recréée en PHP pour afficher les types et valeurs des variables.', 
    image: MyVarDump,
    github: 'https://github.com/oliviermenin/MyVarDump'
  },
  { 
    title: 'CombDisplay', 
    description: 'Fonction en C qui affiche toutes les combinaisons possibles de trois chiffres différents, en évitant les répétitions', 
    image: CombDisplay,
    github: 'https://github.com/oliviermenin/CombDisplay'
  },
];

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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  Voir GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
