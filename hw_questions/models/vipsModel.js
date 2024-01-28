const mongoose = require("mongoose");

// מייצרים סכמה של איזה מאפיינים קיימים בקולקשן/טבלה
const vipsSchema = new mongoose.Schema({
  name:String,
  worth:Number
})

// מייצר ומייצא מודל שמורכב משם הקולקשן והסכמה 
exports.VipsModel = mongoose.model("vips",vipsSchema)