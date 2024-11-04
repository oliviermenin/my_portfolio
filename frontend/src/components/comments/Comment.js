import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Database_URL = process.env.REACT_APP_DATABASE_URL;

const Comments = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`${Database_URL}/comments`);
      setComments(response.data.reverse());
    } catch (error) {
      console.error('Erreur lors de la récupération des commentaires:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message) return;

    try {
      const response = await axios.post(`${Database_URL}/comments`, { name, message });

      const newComment = {
        ...response.data.comment,
        date: new Date().toISOString()
      };
      setComments([newComment, ...comments]);
      setName('');
      setMessage('');
    } catch (error) {
      console.error("Erreur lors de l'ajout du commentaire:", error);
    }
  };

  return (
    <section className="py-20 bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Commentaires
        </h2>

        <form onSubmit={handleSubmit} className="mb-8 max-w-md mx-auto bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full mb-4 p-2 border border-gray-300 rounded dark:border-gray-600 text-gray-800 dark:text-gray-200 dark:bg-gray-700"
          />
          <textarea
            placeholder="Votre commentaire"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full mb-4 p-2 border border-gray-300 rounded dark:border-gray-600 text-gray-800 dark:text-gray-200 dark:bg-gray-700"
          />
          <motion.button
            type="submit"
            className="w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition-colors mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ajouter un commentaire
          </motion.button>
        </form>

        <div className="max-w-lg mx-auto space-y-4">
          {comments.map((comment) => (
            <div key={comment._id} className="bg-gray-100 dark:bg-gray-900 p-4 rounded shadow-sm">
              <strong className="text-lg text-gray-900 dark:text-gray-100">{comment.name}</strong>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">{comment.message}</p>
              <small className="text-gray-500 dark:text-gray-500">{new Date(comment.date).toLocaleString()}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comments;
