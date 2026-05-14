const express = require('express');

const router = express.Router();
const {registerUser, loginUser, updateProfiles, getUserData, updatePreferences, changePassword} = require('../controllers/user-controller');
const {getCodeforcesData} = require('../controllers/codeforces-controller');
const authMiddleware = require('../middleWare/authMiddleware');
const { getCodeforcesContestData } = require('../controllers/codeforces-contest-controller');
const { getCodeforcesProfileStats } = require('../controllers/codeforecs-profile-stats');



router.post('/register',registerUser );
router.post('/login', loginUser);
router.put('/update-profile',authMiddleware, updateProfiles);
router.get('/codeforces', authMiddleware, getCodeforcesData);
router.get('/codeforces-contests', authMiddleware, getCodeforcesContestData)
router.get('/codeforces-profile-stats', authMiddleware, getCodeforcesProfileStats);
router.get("/me", authMiddleware, getUserData);
router.put("/update-preferences",authMiddleware, updatePreferences);
router.put("/change-password", authMiddleware, changePassword)
module.exports = router;
