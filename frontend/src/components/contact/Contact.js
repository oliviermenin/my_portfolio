import React, { useRef, useState } from 'react'; // Ajout de useState
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef(); // Création de la référence pour le formulaire
  const [successMessage, setSuccessMessage] = useState(''); // État pour le message de succès

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccessMessage('Votre message a été envoyé avec succès !'); // Mettez à jour le message de succès
          form.current.reset(); // Réinitialisez le formulaire si nécessaire

          // Faire disparaître le message après 5 secondes
          setTimeout(() => {
            setSuccessMessage('');
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccessMessage('Échec de l\'envoi du message. Veuillez réessayer.'); // Message d'erreur

          // Faire disparaître le message après 5 secondes
          setTimeout(() => {
            setSuccessMessage('');
          }, 5000);
        }
      );
  };

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
        {successMessage && ( // Afficher le message de succès s'il existe
          <motion.div
            className="bg-green-500 text-white p-4 rounded-md mb-4 w-1/2 mx-auto" // Réduire la largeur à la moitié et centrer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {successMessage}
          </motion.div>
        )}
        <motion.form
          ref={form} // Référence au formulaire
          onSubmit={sendEmail} // Gestionnaire de soumission
          className="max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Nom</label>
            <input type="text" id="name" name="user_name" className="w-full px-3 py-2 bg-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input type="email" id="email" name="user_email" className="w-full px-3 py-2 bg-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300" required />
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
  );
}
