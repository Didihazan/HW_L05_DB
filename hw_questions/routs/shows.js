const express = require("express");
const {ShowsModel} = require("../models/showsModel")
const router = express.Router();

// הגדרת ראוטר של הרואט שנגדיר באפ
router.get("/",async(req,res) => {
  try{
    const data = await ShowsModel.find({});
    res.json(data);

  }
  catch(err){
    console.log(err);
    // 502 - שגיאה בשרת
    res.status(502).json({err:"there problem , try again later"})
  }
})

// בקשת פוסט להוספת רשומה חדשה
router.post("/",async(req,res) => {
  // בדיקה תקינות לבאדי
  const validBody = validateShows(req.body);
  // בודק אם יש שגיאה
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  }

  try{
    const shows = new ShowsModel(req.body);
    // שומר את הרשומה
    await shows.save();
    res.json(shows);
 
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

// עריכת רשומה
router.put("/:id",async(req,res) => {
  // בדיקה תקינות לבאדי
  const validBody = validateShows(req.body);
  // בודק אם יש שגיאה
  if(validBody.error){
    // מחזיר את השגיאה המודייקת שיש בבאדי לפי הסכמה
    return res.status(400).json(validBody.error.details);
  }
  try{
    const id = req.params.id;
    // בקשת עדכון לפי מאפיין האיי די
    const data = await ShowsModel.updateOne({_id:id},req.body)
    // modfiedCount:1 אם הצליח למחוק
    res.json(data)
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

// מחיקת רשומה
router.delete("/:id",async(req,res) => {
  try{
    const id = req.params.id;
    // בקשת מחיקה לפי מאפיין האיי די
    const data = await ShowsModel.deleteOne({_id:id})
    // deletedCount:1 אם הצליח למחוק
    res.json(data)
  }
  catch(err){
    console.log(err);
    res.status(502).json({err})
  }
})

module.exports = router;
