const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 8000;

//setup static folder
//app.use(express.static(path.join(__dirname, "public")));
//setup static folder
let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

//Get all posts
app.get("/api/posts", (req, res) => {
  console.log(query);
  res.json(posts);
});

//Get a single post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    res.status(404).json({ msg: `A post with the id of ${id} was not found` });
  } else {
    res.status(200).json(post);
  }
  //console.log(req.params);
  //res.json(posts.filter((post) => post.id === id));
});

//creating routes and loading html pagesKs
//adding a route using the get method
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));

//   res.send("Hello World");
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
//   res.send("About");
// });

//listen on a port
app.listen(port, () => console.log(`Server is running on port ${port}`));
//No new changes tracked
