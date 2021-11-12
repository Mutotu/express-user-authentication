const models = require("../models");
const postControllers = {};

postControllers.getPost = async (req, res) => {
  try {
    const post = await models.category.findAll();

    res.send(post);
  } catch (err) {
    res.send(err.message);
  }
};

postControllers.createPost = async (req, res) => {
  // console.log(req.body);
  try {
    const category = await models.category.findOne({
      where: {
        id: req.params.id,
      },
    });

    return await category
      .createPost({
        title: req.body.title,
        description: req.body.description,
      })
      .then((data) => {
        res.send(data);
      });

    // const createPost = await models.post.create({
    //   title: req.body.title,
    //   description: req.body.description,
    //   categoryId: category.id,
    // });
    // res.send(createPost);
  } catch (err) {
    res.send(err.message);
  }
};

//////////////////getAllPosts
postControllers.getAllPosts = async (req, res) => {
  try {
    const category = await models.category.findOne({
      where: {
        id: req.params.id,
      },
      include: models.post,
    });
    // res.send(category);
    res.render("index.ejs", { category });
  } catch (err) {
    res.send(err.message);
  }
};

postControllers.getOneCategory = async (req, res) => {
  try {
    const category = await models.category.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(category.title);
  } catch (err) {
    res.send(err);
  }
};
//working
postControllers.getTaggedPosts = async (req, res) => {
  try {
    const post = await models.post.findOne({
      where: {
        id: req.params.id,
      },
      include: models.tag,
    });
    console.log(post);
    // res.send(post);
    res.render("show.ejs", { post });
  } catch (err) {
    res.send(err.message);
  }
};

postControllers.getAllTaggedPosts = async (req, res) => {
  console.log("alll");
  try {
  } catch (err) {
    res.send(err.message);
  }
};

//check again
//A user can associate an existing post with an existing tag (PUT /tags/:tagId/posts/:postId)
postControllers.associateTagPost = async (req, res) => {
  try {
    const post = await models.post.findOne({
      where: { id: req.params.id },
    });
    const tag = await models.tag.findOne({
      where: { postId: post.id },
    });
    tag.update(req.params.postId);
    res.send(post);
  } catch (err) {
    res.send(err.message);
  }
};
module.exports = postControllers;
