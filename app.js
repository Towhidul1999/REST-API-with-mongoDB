const express = require("express");
const cors = require("cors");
require("./config/db");
const {getAllUsers, getSingleUser, createUser, updateUser, deleteUser} = require("./controllers/usersControllers");

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//get route
app.get("/", (req, res)=>{
    res.send("Home Route")
});

//all users api
app.get("/api/users", getAllUsers);
app.get("/api/users/:id", getSingleUser);
app.post("/api/users", createUser);
app.patch("/api/users/:id", updateUser);
app.delete("/api/users/:id", deleteUser);

//Not found
app.use((req, res)=>{
    res.send("Page not found")
});

//Server error
app.use((err, req, res)=>{
    res.send("Server error")
});

module.exports = app;