exports.register = (req, res) => {
  // Register a user to the database
  // Then login
}

exports.login = (req, res) => {
  // Log user in
}

exports.resume = (req, res) => {
  // Resume a user's session based on a JWT token
}

exports.logout = (req, res) => {
  // Log user out based on JWT token
}

exports.getById = (req, res) => {
  // Responds with user of that ID
  // Retrieves private data if token matches user ID
}

exports.update = (req, res) => {
  // Updates user based on token
}

exports.delete = (req, res) => {
  // Sets account into motion of being deleted
  // 30 day countdown before deletion is done
}