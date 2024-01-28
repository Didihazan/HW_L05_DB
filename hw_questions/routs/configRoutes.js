const vipsR = require("./vips");
const showsR= require("./shows");


exports.routesInit = (app) => {
  // הגדרת ראוטים לאיזה ראוטר הם שייכים
  app.use("/shows", showsR);
  app.use("/vips", vipsR);

}