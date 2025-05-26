let express = require("express"); // Load the Express library to help build a web server
let path = require("path"); // Load the path module to work with file and directory paths
let fs = require("fs"); // Load the file system module to read files
let bodyParser = require("body-parser"); // Load body-parser to handle form and JSON data
let app = express(); // Create an Express application

// Allow the app to read form data sent through POST requests
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Allow the app to read JSON data sent in request bodies
app.use(bodyParser.json());

// When someone visits the home page ("/"), send them the HTML file called "index.html"
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// When someone goes to "/profile-picture", send them an image file
app.get("/profile-picture", function (req, res) {
  let img = fs.readFileSync(path.join(__dirname, "images/profile-1.jpg")); // Read the image from the "images" folder
  res.writeHead(200, { "Content-Type": "image/jpg" }); // Tell the browser that it's a JPG image
  res.end(img, "binary"); // Send the image as binary data
});

// This route sends back some example user information as JSON
app.get("/get-profile", function (req, res) {
  res.json({
    userid: 1,
    name: "John Doe",
    email: "john@example.com",
  });
});

// This route receives updated user information and sends it back as confirmation
app.post("/update-profile", function (req, res) {
  let userObj = req.body; // Get the data that was sent by the user
  userObj["userid"] = 1; // Set a fixed user ID
  res.json(userObj); // Send the updated data back to the user
});

// Start the server and listen on port 3000
app.listen(3000, function () {
  console.log("app listening on port 3000!"); // Print a message to the terminal when the server starts
});
