const express = require('express');
const router = express.Router();
const controller = require('../controllers/schoolController');


router.post('/add',controller.addSchool);
router.get('/listSchools',controller.listSchools);


module.exports = router;