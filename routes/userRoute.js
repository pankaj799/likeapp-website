const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/userController');

router.get('/adminpanal', usercontroller.getadminpanal);
router.get('/', usercontroller.getindex);
router.get('/about', usercontroller.getabout);
router.get('/contact', usercontroller.getcontact);
router.post('/contactpost', usercontroller.postcontact);
router.get('/blog', usercontroller.getblog);
router.get('/project', usercontroller.getproject);
router.post('/projectpost', usercontroller.project);
router.get('/profile', usercontroller.getprofile);
router.post('/profilepost', usercontroller.profile);






module.exports = router;