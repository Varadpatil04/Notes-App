const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkingauth');
const dashcontroller = require('../controller/dashcontroller');


router.get('/dashboard', isLoggedIn ,dashcontroller.dashboard);
router.get('/dashboard/item/:id', isLoggedIn ,dashcontroller.dashboardViewNote);
router.put('/dashboard/item/:id', isLoggedIn ,dashcontroller.dashboardUpdateNote);
router.delete('/dashboard/item-delete/:id', isLoggedIn ,dashcontroller.dashboardDeleteNote);
router.get('/dashboard/add', isLoggedIn ,dashcontroller.dashboardAddNote);
router.post('/dashboard/add', isLoggedIn ,dashcontroller.dashboardAddNoteSubmit);
router.get('/dashboard/search', isLoggedIn ,dashcontroller.dashboardSearch);
router.post('/dashboard/search', isLoggedIn ,dashcontroller.dashboardSearchSubmit);




module.exports = router;