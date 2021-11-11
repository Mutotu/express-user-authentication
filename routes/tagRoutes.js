const tagController = require("../controllers/tagController");
const express = require("express");
const tagRoutes = express.Router();

//A user can see a list of existing tags(GET /tags)
tagRoutes.get("/", tagController.getAllTags);

tagRoutes.post("/", tagController.postTag);

module.exports = tagRoutes;
