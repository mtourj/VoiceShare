exports.login = (req, res) => {
  // Check token in headers against user in body
  
  // Check if user exists in database

  // If not, create the user

  // If they do, retrieve the user

  // Return user object to client
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