const router = require('express').Router();

const { response, request } = require('express');
// Importing Model dependencies from the models folder
const { User } = require('../models/');
// Importing a helper, auth, to help authenticate user credentials
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {

    console.log("The homepage has been requested");
res.render('standby');
});


router.get('/login', async (req,res) => {
    console.log(req.body);
if(req.session.logged_in) {
    res.render('profile' , {
        test: 'Trying to pass values into profile'
    });
    return;
}

    console.log("The user is not logged in, therefore we are being redirected to the standbypage");
    res.render('login');

});


router.post('/login', async (req,res) => {
console.log(req.body);
console.log("The user has clicked the login button on the standbypage");
response.ok = true;
res.render('login');
});


router.post('/profile', async (req,res) => {
    console.log("The user has logged in via POST, redirecting to profile.handlebars");

    res.redirect('/profile');
  
});


router.get('/profile', withAuth, async (req,res) => {
    console.log("The user has logged in via GET, redirecting to profile.handlebars");

try {
    const userData = await User.findByPk(req.session.user_id, {
        attributes: {exclude: ['password']},
    
    });

    const user= userData.get({plain:true});


    res.render('profile', {
        
        logged_in: true,
        name: user.name,
        email: user.email
    });
  

} catch (err) {
    res.status(404).json(err);
}



//res.render('profile');
});

module.exports = router;