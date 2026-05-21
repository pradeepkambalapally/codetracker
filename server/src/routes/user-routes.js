const express = require('express');

const router = express.Router();
const {registerUser, loginUser, updateProfiles, getUserData, updatePreferences, changePassword} = require('../controllers/user-controller');
const {getCodeforcesData} = require('../controllers/codeforces-controller');
const authmiddleware = require('../middleware/temp-auth');
const { getCodeforcesContestData } = require('../controllers/codeforces-contest-controller');
const { getCodeforcesProfileStats } = require('../controllers/codeforces-profile-stats');
const {getLeetcodeProfile, getLeetcodeSubmissions} = require('../controllers/leetcode-controller');
const { getActivityHeatmap } = require('../controllers/activity-controller');


router.post('/register',registerUser );
router.post('/login', loginUser);
router.put('/update-profile',authmiddleware, updateProfiles);
router.get('/codeforces', authmiddleware, getCodeforcesData);
router.get('/codeforces-contests', authmiddleware, getCodeforcesContestData)
router.get('/codeforces-profile-stats', authmiddleware, getCodeforcesProfileStats);
router.get("/me", authmiddleware, getUserData);
router.put("/update-preferences",authmiddleware, updatePreferences);
router.put("/change-password", authmiddleware, changePassword)



router.get("/leetcode-profile",authmiddleware,getLeetcodeProfile);
router.get("/leetcode-submissions",authmiddleware,getLeetcodeSubmissions);

router.get("/activity-heatmap",authmiddleware, getActivityHeatmap)

module.exports = router;
