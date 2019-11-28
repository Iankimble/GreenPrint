const Article = require("../models/article-model");
const _ = require("lodash");

// Logic for creating a new article
exports.createNewArticle = (req, res) => {
  let newArticle = new Article(req.body);
  newArticle.save(err => {
    if (err) {
      return res.status(400).json({
        msg: "something went wrong..."
      });
    }
    res.json({ message: "test article has been added!" });
  });
};

// Logic for getting all articles
exports.getAllArticles = (req, res) => {
  Article.find((err, articles) => {
    if (err) {
      res.status(400).json({
        err: err
      });
    }
    res.json(articles);
  });
};

// Logic for getting an article by ID
exports.articleById = (req, res) => {
  let id = req.params.id;
  Article.findById(id, (err, data) => {
    if (err) {
      return res.status(400).json({
        msg: `Can't find article`
      });
    }
    res.json(data);
  });
};

// Logic to edit a article
exports.editArticle = (req, res) => {
  Article.findById(req.params.id, (err, newData) => {
    if (err || !newData) {
      res.status(400).json({ msg: "nope" });
    }
    newData.title = req.body.title;
    newData.subTitle = req.body.subTitle;
    newData.body = req.body.body;

    newData.save().then(newData => {
      res.json(newData);
    });
  });
};

// Logice to delete an article
exports.deleteArticle = (req, res) => {
  let id = req.params.id;
  Article.findById(id, (err, data) => {
    if (err || !data) {
      return res.status(400).json({ msg: "nope" });
    }
    data.remove();
    res.json({ msg: "done" });
  });
};
