const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express()

let items = [ "Obtain money", "Save money", "Invest money"];

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {

  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };


  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day,
    newListItems: items
  });

});


app.post("/", function(req, res){
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});



app.listen(3000, function() {
  console.log('app listening on port 3000')
});
