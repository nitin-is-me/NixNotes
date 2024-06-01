const express=require('express');
const mongoose=require("mongoose");
const cors=require("cors");
const collection=require("./models/note.js")
mongoose.connect("mongodb+srv://nitinjha2609:notesmanager@cluster0.fetyubc.mongodb.net/")
const app=express();
app.use(cors());
app.use(express.json());

app.get("/get", (req, res)=>{
    collection.find()
    .then(result => res.json(result))
    .catch(err => console.log(err));
})
app.post("/add", (req, res)=>{
    const note=req.body.note;
    collection.create({
        note: note
    }).then(result => res.json(result))
    .catch(err => console.log(err))
})

app.delete("/delete/:id", (req, res)=>{
    const {id}=req.params;
    collection.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => console.log(err));
})

app.listen(5000, ()=>{
    console.log("server is running")
})