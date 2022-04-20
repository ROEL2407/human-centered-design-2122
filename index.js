const express = require("express");
const app = express();
const port = process.env.PORT || 4242;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric'
}

app.get("/", (req, res) => {
  let date = new Date();
  var allDates = [new Date().toLocaleDateString("nl-NL", options)];
  let length = 7;

  for (let i = 0; i < length; i++) {
    date.setDate(date.getDate()+1);
    allDates.push(date.toLocaleDateString("nl-NL", options));
  }
  res.render("index", {data: allDates});
});

app.listen(port, () => {
  console.log("listening on port ", port);
});