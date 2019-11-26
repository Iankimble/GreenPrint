const express = require("express");
const {
  getAllArticles,
  createNewArticle
} = require("../controllers/article-controller");

const router = express.Router();

// Get all articles
router.get("/articles", getAllArticles);

// Create new article
router.post("/new", createNewArticle);

// Get article by ID
router.get("/read/:articleId");

// Edit article by ID
router.put("/edit/articleId");

// Delete article by ID
router.delete("/delete/articleId");

module.exports = router;
