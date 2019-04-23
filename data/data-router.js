const express = require('express');

const db = require('./db.js');

const router = express.Router();

router.get('/', (req, res) => {
   db.find()
   .then(post => {
       res.json(post);
   })
   .catch(err => {
       res.status(500).json({ error: "There was an error while saving the post to the database" })
   }) 
})

module.exports = router