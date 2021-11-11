const models = require("../models");

const tagController = {};

tagController.getAllTags = async (req, res) => {
  try {
    const allTags = await models.tag.findAll();

    res.send(allTags);
  } catch (err) {
    res.send(allTags);
  }
};

tagController.postTag = async (req, res) => {
  try {
    const tag = await models.tag.create({
      title: req.body.title,
      postId: req.body.postId,
    });
    console.log(tag);
    res.send(tag);
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = tagController;
