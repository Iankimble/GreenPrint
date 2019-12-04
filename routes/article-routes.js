const express = require("express");
const {
  getAllArticles,
  createNewArticle,
  articleById,
  editArticle,
  deleteArticle
} = require("../controllers/article-controller");

const router = express.Router();

// Route to get all articles
router.get("/articles", getAllArticles);

// Route to create a new article
router.post("/new/article", createNewArticle);

// Route to get a specific by article by ID
router.get("/read/article/:id", articleById);

// Route to edit a specific article by ID
router.put("/edit/article/:id", editArticle);

// Route to delete a specific article by ID
router.delete("/delete/article/:id", deleteArticle);

module.exports = router;
