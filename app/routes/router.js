//Import express package
const express = require('express');

const router = express.Router();

router.use('/restaurants', require('./api/restroutes'));
router.use('/diningtype', require('./api/typeroutes'));

module.exports = router;