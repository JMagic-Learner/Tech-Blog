const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req,res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in=true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/login', async (req, res) => {
  console.log("userRoutes /loggedin post route has been called from login.js");
  console.log(req.body);
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    

    console.log("loggedIn is about to initate saving");
    req.session.save(() => {
      console.log("req.session.save() has been initiated");
      req.session.user_id = userData.id;
      req.session.logged_in = true;
    });
    
  
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  console.log(req.body);
  if (req.session.logged_in) {
    // TODO: Add a comment describing the functionality of this method
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

/*
router.get('/profile', (req, res) => {
 res.render('profile');
});
*/

module.exports = router;
