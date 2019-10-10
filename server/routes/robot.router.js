const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
const router = express.Router();

router.get('/', (req, res) => {
  
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then( response => {
    console.log('back from API');
    res.send(response.data);
  })
  .catch( error => {
    console.log(' error with getting data from API', error);
    res.sendStatus(500);
  })

})

module.exports = router; 