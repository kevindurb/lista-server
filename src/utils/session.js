module.exports = {
  isLoggedIn: req => !!req.session.user,
  isLoggedOut: req => !req.session.user,
  getCurrentUser: req => req.session.user,
};
