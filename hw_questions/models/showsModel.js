const mongoose = require("mongoose");
const Joi = require("joi");

// מייצרים סכמה של איזה מאפיינים קיימים בקולקשן/טבלה
const ShowsSchema = new mongoose.Schema({
  name:String,
  kind:String,
  genere:String,
  images:String,
  descprion:String,
  views:Number
})

// מייצר ומייצא מודל שמורכב משם הקולקשן והסכמה 
exports.ShowsModel = mongoose.model("shows",showsSchema)

exports.validateShows = (_reqBody) => {
  const joiSchema = Joi.object({
    name:Joi.string().min(2).max(100).required(),
    genere:Joi.string().min(2).max(100).required(),
    kind:Joi.string().min(2).max(100).required(),
    views:Joi.number().min(1).max(999999).required(),
    images:Joi.string().min(2).max(300).required(),
    descprion:Joi.string().min(2).max(500).required(),
  })
  return joiSchema.validate(_reqBody)
}
