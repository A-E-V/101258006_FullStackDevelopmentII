const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST submission handler */
router.post('/', function(req, res, next) {
  const { firstname, lastname } = req.body; // Destructuring request body
  console.log('First Name:', firstname);
  console.log('Last Name:', lastname);
  res.send('POST received!');
});

module.exports = router;