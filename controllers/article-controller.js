const Article = require("../models/article-model");
const fs = require("fs");
const_ = require("lodash");

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

exports.articleById = (req, res, next, id) => {
  Article.findById(id).exec((err, article) => {
    if (err) {
      return res.json({ message: "nah..." });
    }
    res.json(article);
  });
};

exports.editArticle = (req, res, next) => {};

exports.deleteArticle = (req, res, next) => {};
