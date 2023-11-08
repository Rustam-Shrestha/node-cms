const express = require("express");
const { blogs } = require('./model/index.js'); // Adjust the path as needed
const app = express();
const secret = require("dotenv").config();
const port = 3000; // You can change this to any port you prefer
require("./model/index.js") 
//importing objects from config file
const { multer, storage } = require("./middleware/multerconfig.js");
//upload is place where storing will be done
const upload = multer({storage:storage})
// const storage = require("./middleware/multerConfig.js").storage;
// other way to do  the same as above

app.set("view engine", "ejs");

// Middleware for parsing data
app.use(express.json());
//form bata data ayo vane yo garne

app.use(express.urlencoded({ extended: true }));

// Routes

// Home route to render the blog page
app.get("/", (req, res) => {
  res.render("ourBlogs");
});

// Index route with dynamic data
// app.get('/index', (req, res) => {
//   const name = "santosh";
//   res.render('index.ejs', { name, profession: "Student" });
// });

// Add Blog route to render the form
app.get('/addBlog', (req, res) => {
  res.render("addblog");
});

// Create Blog route to handle form submission
// api for handling formdata
app.post("/addBlog",upload.single("image"), async(req,res)=>{
  //showing data in console

  console.log(req.body)
  // destructuiring
  const {title,subTitle, description} = req.body;
  await blogs.create({
    title,
    subTitle,
    description,
    imageUrl: req.file.filename
   })
   res.send("BLOG HAS BEEN CREATED ")
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Showing secret name
console.log(process.env.secretName);
