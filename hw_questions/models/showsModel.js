const mongoose = require("mongoose");

// מייצרים סכמה של איזה מאפיינים קיימים בקולקשן/טבלה
const ShowsSchema = new mongoose.Schema({
  name:String,
  views:Number
})

// מייצר ומייצא מודל שמורכב משם הקולקשן והסכמה 
exports.ShowsModel = mongoose.model("shows",showsSchema)