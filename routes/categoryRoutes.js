const categoryController = require("../controllers/categoryControler");
const express = require("express");
const categoryRoutes = express.Router();

categoryRoutes.get("/", categoryController.getAllCategory);
categoryRoutes.get("/:id", categoryController.getOneCategory);
// categoryRoutes.post("/:id/posts", categoryController.createPost);

module.exports = categoryRoutes;
