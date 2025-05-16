const express = require('express'); 
const router = express.Router(); 

const RotasGiovanny = require ('/.routesGiovanny');

router.use('/', RotasGiovanny);

module.exports = router;