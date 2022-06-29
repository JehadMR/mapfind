const { response } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require('./models/Users');
const HiketrailsModel = require('./models/Hiketrails');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:0546797212Jm@cluster0.y5bnnam.mongodb.net/mapfind?retryWrites=true&w=majority");



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

app.get("/getTrails", (req, res) =>{
    HiketrailsModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
            
    });
});

app.post("/createTrail", async (req, res) => {
    const trail = req.body;
    const newTrail = new HiketrailsModel(trail);
    await newTrail.save();

    res.json(trail);
});

app.listen(3001, () => {
    console.log('SERVER IS RUNNING WELL');
});