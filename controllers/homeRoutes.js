const router = require('express').Router();

const { response, request } = require('express');
// Importing Model dependencies from the models folder
const { Information , User} = require('../models');
// Importing a helper, auth, to help authenticate user credentials
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
console.log("The homepage has been requested");
res.render('standby');
});


router.get('/login', async (req,res) => {

    if(req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
console.log("The user has clicked the login button on the standbypage, we are redirecting the user to the login page");
res.render('login');
});


router.post('/homepage', async (req,res) => {
console.log("The user has submitted a password and email");
response.ok = true;
res.render('login');
});


router.post('/profile', async (req,res) => {
    console.log("The user has logged in via POST, redirecting to profile.handlebars");
    if(res){
    res.render('profile');
    }
    return response.ok = true;
});


router.get('/profile', async (req,res) => {
    console.log("The user has logged in via GET, redirecting to profile.handlebars");
/*
try {
    const userData = await User.findByPk(req.session.user_id, {
        include: [
            {model:User,
            attributes: ['name'],
        },
        ],
    });

    const profile = profileData.get({plain:true});

    res.render('profile', {
        ...profile,
        logged_in: req.session.logged_in,
        user_name: profile
    });
  

} catch (err) {
    res.status(404).json(err);
}


*/
res.render('profile');
})

module.exports = router;