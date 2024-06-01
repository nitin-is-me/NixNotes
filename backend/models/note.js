const mongoose = require("mongoose");
const schema=mongoose.Schema({
    note: String
})

const collection = mongoose.model("notes-collection", schema);
module.exports=collection;