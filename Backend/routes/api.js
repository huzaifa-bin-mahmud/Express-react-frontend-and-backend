const express = require('express');
const { AllStudent,ChangePass } = require('../controller/apiController');
const router = express.Router();

router.get('/all-student', AllStudent);

router.post("/change-pass",ChangePass)

module.exports = router;