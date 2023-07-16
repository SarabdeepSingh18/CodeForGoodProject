const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
dotenv.config();

const Event = require("./models/schema")
const User = require("./models/user");
const Tree = require("./models/tree");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.set('strictQuery',true);
mongoose.connect("mongodb://localhost:27017/hello",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);






app.get("/treetag", (req,res)=>{
    res.render("treetag");
})

app.get("/", (req,res)=>{
     try {
        Event.find({}, (err,result)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                res.render("home", {posts : result});
            }
        });
    } catch(error) {
        console.log(error);
    }
})

app.get("/login", (req,res)=>{
    res.render("login");
})

app.get("/signup",(req,res) =>{
    res.render("signup");
})


app.get("/maps",(req,res)=>{
    res.render("map");
})

//user signup
app.post("/user/signup", async(req, res) => {
    try {
        const {name,email, phone, age, address, password} = req.body;
        console.log(name);
        console.log(password);
        const user = await User.findOne({email});
        if(user) throw new Error("user already exists");
        else {
            const result = await User.create({name,email, phone, age, address, password});
            res.redirect("/");
        }
    } catch (e){
        let msg;
        if(e.code == 11000){
            msg = "User already exists";
        } else {
            msg = e.message;
        }
        console.log(e);
        res.status(400).json(msg);
    }
});

app.get("/landing", (req,res)=>{
     try {
        Event.find({}, (err,result)=>{
            if(err)
            {
                console.log(err);
            }
            else
            {
                res.render("landing", {posts : result});
            }
        });
    } catch(error) {
        console.log(error);
    }
})

//user login
app.post("/user/login", async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        console.log(email);
        if(!user) {alert("User or password does not exist"); res.redirect("/login");}
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {alert("User or password does not exist"); res.redirect("/login");}
        // res.status(200).json(user);
        login_done = 1;
        res.redirect("/landing");
    } catch (error) {
        res.status(400).json(error.message);
    }
});

app.post("/tree/location", async(req, res) => {
    try{
        const {type, name, longitude, latitude, Age} = req.body;
        const tree = await Tree.create({type, name, longitude, latitude, Age});
        res.status(201).json(tree);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

//getting locations of all shops
app.get("/get/trees", async(req, res) => {
    try {
        // console.log("here");
        const trees =  Tree.find({}, (err, docs) => {
            res.send(docs);
            // console.log(docs);
        });
    } catch (error) {
        console.log(error);
    }
});
app.post("/event", async (req, res) => {
    try {
        const title = req.body.title;
        const date = req.body.date;
        const content = req.body.content;
        const organizer = req.body.organizer;
        const location = req.body.location;
        console.log(location)
        const event = await Event.create({title, date, content, organizer, location});
        console.log(event);
        res.status(200).send(event);

    } catch(error){
        return res.status(500).send(error);
    }
})

app.get("/allEvents", async (req, res) => {
    try {
        const events = await Event.find();
        console.log(events);
        res.send(events);
    } catch(error) {
        console.log(error);
    }
})

app.get("/event/:name", async (req,res)=>{
    try{
        const event = await Event.findOne({title: req.params.name});
        res.send(event);
    }catch(err){
        console.log(err);
    }
})

app.listen(3000, ()=>{console.log("Server is live at port 3000")});
