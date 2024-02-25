const express = require('express');
const router = express.Router();
const maincontroller = require('../controller/maincontrol')

router.get('/',maincontroller.homepage);
router.get('/about',maincontroller.about);


module.exports = router;