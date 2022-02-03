const express = require("express");
const app = express();

const PORT = process.env.PORT || 3002;

const rowdy = require("rowdy-logger");
const routesReport = rowdy.begin(app);
const models = require("./models");
// const categoryRoutes = require("./routes/categoryRoutes");
// const tagRoutes = require("./routes/tagRoutes");
// const postRoutes = require("./routes/postRoutes");
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Listening  on port ${PORT}...`);
  routesReport.print();
});

// app.get("/", (req, res) => {
//   res.render("home.ejs");
// });

// app.use("/category", categoryRoutes);
// app.use("/tags", tagRoutes);
// app.use("/categories", postRoutes);

// app.set("view engine", "ejs");
