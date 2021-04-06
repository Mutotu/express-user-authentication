# Craigslist
Craigslist is a site that lets users create posts belonging to a category. It also lets users tag existing posts with one or more pre-defined tags (for example, Best-Of, Offensive, etc.)

### Setup
Set up a database using sequelize, and set up a webserver using express.

Seed a few categories: some good ideas are "For Sale", "Community", and "Discussion".

Seed a few tags: some good ideas are "Best-Of" and "Offensive".

For seeding, you can use `sequelize seed:generate`, then put some `model.whicheverModel.create` statements in it, then `sequelize db:seed:all`. Or, you can just use a dbTest file. You could even just put them in manually through psql.

### Core goals
You will build a backend to power our knock-off version of Craigslist. (No frontend is required as part of the core goals.) The required user stories are:

1. A user can get a list of all existing categories (`GET /categories`)
1. A user can get info on a single existing category (`GET /categories/:id`)
1. A user can create a new post inside an existing category(`POST /categories/:id/posts`)
1. A user can see a list of all posts inside an existing category (`GET /categories/:id/posts`)
1. A user can see a list of existing tags(`GET /tags`)
1. A user can associate an existing post with an existing tag (`PUT /tags/:tagId/tags/:tagId`)
1. A user can see a list of all posts that are associated with a tag (`GET /tags/:id/posts`)
1. A user can see a list of all tags that are associated with a post (`GET /posts/:id/tags`)

### Stretch goals
1. When a post gets created, a random 8-character string is generated and saved as its key. This key serves as the pseudo-password to restrict who can edit this post.
1. After creating a post, the response to the `POST /categories/:id/posts` request contains the key of the post that got created. The user is expected to hold onto this value for future editing and deleting of that post.
1. A user can delete a post by using its key (`DELETE /posts/:key`)
1. A user can edit a post using its key (`PUT /posts/:key`)

### Super stretch goals
Slap a frontend on this bad boy! You can use a Unit 1 style index.html/style.css/main.js trio. For an extra challenge, create an entirely separate express server that serves up these three files. (You would want to put all the existing work up til this point into one `backend` folder, and put the frontend server in its own `frontend` folder.)
