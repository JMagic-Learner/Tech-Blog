const router = require('express').Router();
const userRoutes = require('./userRoutes');

// Calls and uses the userRoutes, allows the user to navigate to userRoutes.
router.use('/users', userRoutes);

// Calls and uses the homepage, directs the user to homepage.
router.use('/homepage', homepageRoutes);

module.exports = router;