const { response } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require('./models/Users');
mongoose.connect("mongodb+srv://admin:0546797212Jm@cluster0.y5bnnam.mongodb.net/mapfind?retryWrites=true&w=majority");
app.use(express.json());
app.get("/getUsers", (req, res) =>{
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
            
    });
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.listen(3001, () => {
    console.log('SERVER IS RUNNING WELL');
});