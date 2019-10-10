const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// IMPORT Routes
const robotRouter = require('./routes/robot.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

//Routes
app.use('/robots', robotRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => {
  console.log(`LISTENING ON PORT: ${PORT}`)
})


