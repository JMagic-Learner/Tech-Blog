const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  // withAuth is a custom middleware, that checks for req.sessions status. If logged in, it redirects to login.
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
