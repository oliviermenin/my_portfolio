import React from 'react';
import { motion } from 'framer-motion';
import IMG_0357 from '../../assets/images/IMG_0357.jpg';

export default function About() {
  return (
    <section id="à propos" className="py-20 bg-blue-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          À propos de moi
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src={IMG_0357} 
              alt="Votre photo" 
              className="w-[200px] h-[300px] sm:w-[300px] sm:h-[400px] md:w-[300px] md:h-[600px] lg:w-[600px] lg:h-[800px] rounded-full mx-auto" 
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              {[
                "Bonjour à tous, je m'appelle Olivier MENIN, j'ai 23 ans, et je suis passionné par l'informatique depuis mon plus jeune âge.",
                "Cependant, à cause de quelques échecs scolaires et d’un manque de confiance en mes capacités, je n'ai pas poursuivi dans le développement.",
                "J'ai alors enchaîné avec des emplois difficiles pendant trois ans.",
                "Ces expériences m'ont permis de développer persévérance et résilience, mais j'ai ressenti le besoin de me réorienter vers un domaine qui me passionne réellement.",
                "J'ai alors initié ma reconversion dans l'informatique en intégrant la Webacadémie d'EPITECH.",
                "Pendant ma formation, j'ai eu l'occasion de réaliser plusieurs projets, aussi bien en solo qu'en équipe, en utilisant divers langages et outils du web.",
                "Cette expérience m'a permis d'acquérir une solide autonomie grâce à l'approche autodidacte de la formation, renforçant ainsi ma capacité à apprendre et à m'adapter rapidement.",
                "Aujourd'hui, je suis déterminé à transformer ma passion en carrière.",
                "À travers ma formation à la Webacadémie d'EPITECH, j'ai développé les compétences techniques nécessaires et je m'immerge dans des projets concrets qui me permettent de mettre en pratique ce que j'apprends.",
                "Mon objectif est de devenir un développeur compétent et créatif, capable de concevoir des applications innovantes."
              ].map((sentence, index) => (
                <span key={index} className="block">{sentence}</span>
              ))}
            </p>
            <p className="text-lg mb-4 font-semibold">Cette formation m'a permis de :</p>
            <ul className="text-lg list-disc list-inside space-y-2">
              <li>Maîtriser les technologies frontend et backend essentielles</li>
              <li>Développer des projets web complets, seul et en équipe</li>
              <li>Acquérir une forte autonomie grâce à l'approche autodidacte de la formation</li>
              <li>Cultiver ma capacité à apprendre et à m'adapter rapidement</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}