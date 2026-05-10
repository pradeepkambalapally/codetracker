const express = require('express');

const router = express.Router();
const {registerUser, loginUser, updateProfiles} = require('../controllers/user-controller');
const {getCodeforcesData} = require('../controllers/codeforces-controller');
const authMiddleware = require('../middleWare/authMiddleware');
const { getCodeforcesContestData } = require('../controllers/codeforces-contest-controller');



router.post('/register',registerUser );
router.post('/login', loginUser);
router.put('/update-profile',authMiddleware, updateProfiles);
router.get('/codeforces', authMiddleware, getCodeforcesData);
router.get('/codeforces-contests', authMiddleware, getCodeforcesContestData)
module.exports = router;
