const postControllers = require("../controllers/postControllers");

const express = require("express");

const postRoutes = express.Router();

//A user can get a list of all existing categories (GET /categories)
postRoutes.get("/", postControllers.getPost);
//A user can create a new post inside an existing category
postRoutes.post("/:id/posts", postControllers.createPost);
///
//A user can see a list of all posts inside an existing category (GET /categories/:id/posts)
postRoutes.get("/:id/posts", postControllers.getAllPosts);
//A user can get info on a single existing category (GET /categories/:id)

postRoutes.get("/:id", postControllers.getOneCategory);

postRoutes.get("/post/:id/tag", postControllers.getTaggedPosts);

//get posts with category and tags
postRoutes.get("/tags/:id/posts", postControllers.getAllTaggedPosts);
module.exports = postRoutes;
