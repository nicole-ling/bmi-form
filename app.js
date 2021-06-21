const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Import helper functions
const helper = require(__dirname + '/helper.js');

// Setup view engine/body parser/static path
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Global vars
let formValues = {
  age: '',
  weight: '',
  height: ''
};
let result = '';

app.get('/', (req, res) => {
  res.render('bmi', {
    formValues: formValues,
    result: result
  });
});

app.post("/", (req, res) => {
  const age = req.body.age;
  const weight = req.body.weight;
  const height = req.body.height;

  if(helper.validate(age) && helper.validate(weight) && helper.validate(height)) {
    formValues.age = age;
    formValues.weight = weight;
    formValues.height = height;
    result = `Your BMI Result is: ${helper.calculateBMI(weight, height)}`;
  } else {
    result = 'Invalid form input. Try again.';
  }

  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server running on port 3000.');
});