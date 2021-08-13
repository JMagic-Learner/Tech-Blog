const router = require('express').Router();

// Importing Model dependencies from the models folder
const { Information , User} = require('../../models');
// Importing a helper, auth, to help authenticate user credentials
const withAuth = require('../../utils/auth');

router.get('/', async (req,res) => {
console.log("The homepage has been requested");


res.render('homepage')
});

module.exports = router;