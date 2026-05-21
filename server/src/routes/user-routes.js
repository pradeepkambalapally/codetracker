const express = require('express');

const router = express.Router();
const {registerUser, loginUser, updateProfiles, getUserData, updatePreferences, changePassword} = require('../controllers/user-controller');
const {getCodeforcesData} = require('../controllers/codeforces-controller');
const authMiddleware = require('../middleware/authMiddleware');
const { getCodeforcesContestData } = require('../controllers/codeforces-contest-controller');
const { getCodeforcesProfileStats } = require('../controllers/codeforecs-profile-stats');
const {getLeetcodeProfile, getLeetcodeSubmissions} = require('../controllers//leetcode-controller');
const { getActivityHeatmap } = require('../controllers/activity-controller');


router.post('/register',registerUser );
router.post('/login', loginUser);
router.put('/update-profile',authMiddleware, updateProfiles);
router.get('/codeforces', authMiddleware, getCodeforcesData);
router.get('/codeforces-contests', authMiddleware, getCodeforcesContestData)
router.get('/codeforces-profile-stats', authMiddleware, getCodeforcesProfileStats);
router.get("/me", authMiddleware, getUserData);
router.put("/update-preferences",authMiddleware, updatePreferences);
router.put("/change-password", authMiddleware, changePassword)



router.get("/leetcode-profile",authMiddleware,getLeetcodeProfile);
router.get("/leetcode-submissions",authMiddleware,getLeetcodeSubmissions);

router.get("/activity-heatmap",authMiddleware, getActivityHeatmap)

module.exports = router;
