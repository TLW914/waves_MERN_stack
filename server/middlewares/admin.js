let admin = (req, res, next) => {
  if (req.user.role === 0) {
    return res.send('Request Forbidden');
  }
  next();
};

module.exports = { admin };
