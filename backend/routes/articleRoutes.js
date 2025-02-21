const express = require("express")
const router = express.Router()
const {
  getArticle,
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle
} = require("../controllers/articleController")

const requireAuth = require("../middleware/requireAuth")

// Public routes
router.get("/", getArticles)
router.get("/:id", getArticle)

// Protected routes
router.use(requireAuth)
router.post("/", createArticle)
router.patch("/:id", updateArticle)
router.delete("/:id", deleteArticle)

module.exports = router 