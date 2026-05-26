import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) =>{
    const fname = req.body['fName'];
    const lname = req.body['LName'];
    res.render("index.ejs", {numberofletters: fname.length + lname.length});
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);  
});