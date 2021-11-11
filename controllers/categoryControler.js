const models = require("../models");
const categoryController = {};

categoryController.getAllCategory = async (req, res) => {
  try {
    const allCategory = await models.category.findAll();
    res.send(allCategory);
  } catch (err) {
    res.send(err.message);
  }
};

categoryController.getOneCategory = async (req, res) => {
  try {
    const oneCate = await models.category.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(oneCate);
  } catch (err) {
    res.send(err);
  }
};

module.exports = categoryController;
