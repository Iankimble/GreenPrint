const Article = require("../models/article-model");

exports.getAllArticles = (req, res, next) => {
  Article.find((err, articles) => {
    if (err) {
      res.status(400).json({
        err: err
      });
    }
    res.json(articles);
  });
};

exports.createNewArticle = (req, res) => {
  let newArticle = new Article(req.body);
  newArticle.save(err => {
    if (err) {
      return res.status(400).json({
        message: "something went wrong..."
      });
    }
    res.json({ message: "test article has been added!" });
  });
};

exports.articleById = (req, res, next, id) => {};

exports.editArticle = (req, res, next) => {};

exports.deleteArticle = (req, res, next) => {};
