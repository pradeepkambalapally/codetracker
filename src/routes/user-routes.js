const express = require('express');

const router = express.Router();
const {registerUser, loginUser, updateProfiles, getCodeforcesData} = require('../controllers/user-controller');
const authMiddleware = require('../middleWare/authMiddleware');



router.post('/register',registerUser );
router.post('/login', loginUser);
router.put('/update-profile',authMiddleware, updateProfiles);
router.get('/codeforces', authMiddleware, getCodeforcesData);

module.exports = router;
