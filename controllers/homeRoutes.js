const router = require('express').Router();
const { response, request } = require('express');
// Importing Model dependencies from the models folder
const { User, blogposts } = require('../models/');
// Importing a helper, auth, to help authenticate user credentials
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
    try {
        const blogData = await blogposts.findAll({
            include: [
                {model:User,
                attributes: ['name'],
            },
            ],
        });
    const blogs = blogData.map((blogpost) => blogpost.get({plain:true}));
    res.render('homepage', {
        blogs,
        logged_in:req.session.logged_in
    });
} catch (err) {
    res.status(500).json(err);
}
});

router.get('/profile', async (req,res) => {

    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: {exclude: ['password']},
            include: [{model: blogposts}],
        });
        const user = userData.get({ plain:true});

        res.render('standby', {
            ...user,
            logged_in:true,
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
    res.redirect('/profile');
    
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



module.exports = router;