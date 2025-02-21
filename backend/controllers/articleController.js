const Article = require("../models/articleModel")
const mongoose = require("mongoose")

// Get all articles
const getArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 })
    res.status(200).json(articles)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Get single article
const getArticle = async (req, res) => {
  const { id } = req.params
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid article ID" })
  }

  const article = await Article.findById(id)
  
  if (!article) {
    return res.status(404).json({ error: "Article not found" })
  }

  res.status(200).json(article)
}

// Create article
const createArticle = async (req, res) => {
  const { name, description, image, text, audio } = req.body

  try {
    const article = await Article.create({
      name,
      description,
      image,
      text,
      audio,
      likeCount: 0
    })
    res.status(201).json(article)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// Update article
const updateArticle = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid article ID" })
  }

  const article = await Article.findByIdAndUpdate(id, req.body, { new: true })

  if (!article) {
    return res.status(404).json({ error: "Article not found" })
  }

  res.status(200).json(article)
}

// Delete article
const deleteArticle = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid article ID" })
  }

  const article = await Article.findByIdAndDelete(id)

  if (!article) {
    return res.status(404).json({ error: "Article not found" })
  }

  res.status(200).json(article)
}

module.exports = {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle
} 