//instance of express
const express = require("express");
const app = express();
const connectDB = require("./db");

const PORT = 3000;

const users = require("./routes/users");

app.use(express.json());

//connect to mongodb
connectDB();

app.use("/api", users);

// ek route create kar dia
app.get("/", (req, res) => {
  console.log("inside home page route handler");
  res.send("Hello ji ");
});

app.listen(PORT, () => {
  console.log("Server is Up");
});
