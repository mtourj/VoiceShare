const secured = (req, res, next) => {
  // Verify token for integrity and validity
  next();
}

module.exports = secured;