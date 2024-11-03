const Comment = require('../models/Comment.js');

exports.addComment = async (req, res) => {
  const { name, message } = req.body;

  const newComment = new Comment({ name, message });
  try {
    await newComment.save();
    res.status(201).json({ message: 'Commentaire ajouté avec succès', comment: newComment });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout du commentaire', error });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des commentaires', error });
  }
};
