const express = require('express');

const router = express.Router();
const {registerUser, loginUser, updateProfiles} = require('../controllers/user-controller');
const authMiddleware = require('../middleWare/authMiddleware');



router.post('/register',registerUser );
router.post('/login', loginUser);
router.put('/update-profile',authMiddleware, updateProfiles);

module.exports = router;
