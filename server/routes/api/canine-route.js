
const router = require('express').Router();
const Canine = require('.../models/canine.js')
// post new article
router.post("/new", (req, res) => {
  // save request body into a var
  const newCanine = req.body;
  //   function to create a new document
Canine.create(newCanine, (err, data) => {
    // if there is error
    if (err) {
      // set response to 500, which means internal server error and send error back
      res.status(500).send(err);
    } else {
      // 201 means created, successfully created our data and send back the data
      res.status(201).send(data);
    }
  });
});
module.exports = router