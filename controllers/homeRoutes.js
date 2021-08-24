const router = require('express').Router();
const { response, request } = require('express');
// Importing Model dependencies from the models folder
const { User, blogposts } = require('../models/');
// Importing a helper, auth, to help authenticate user credentials
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {

    try {
        const blogpostEntry = await blogposts.findAll({
            include:[{ model: User}]
        });
        const blogpostsData = blogpostEntry.map((blogposts) => blogposts.get({ plain:true}));

        res.render('standby', {
            blogpostsData,
            textExample: "Hello, this proves something is being passed through",
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', async (req,res) => {
    console.log("router.get('/login' has been requested");
    console.log(req.body);

if(req.session.logged_in) {
    console.log("The user is logged in. We are loading into the profile page");
    res.render('profile' , {
        logged_in: true,
        test: 'Trying to pass values into profile'
    });
    return;
}

    console.log("The user is not logged in");
    console.log("The user will be directed to the log in page");
    res.render('login');

});


router.get('/signUp', async (req,res)=> {
console.log("signing up has been initiated");
res.render('login', {
sign_up: true
})
});

router.post('/profile', async (req,res) => {
    console.log("The user has logged in via POST, redirecting to profile.handlebars");

    res.redirect('/profile');
  
});


router.get('/profile', withAuth, async (req,res) => {
    console.log("The user has logged in via GET, redirecting to profile.handlebars");

res.render('profile', {
    logged_in:true,
    test: "You just logged in via router.get(/profile)"
});
});

module.exports = router;