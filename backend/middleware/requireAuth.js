const { getAuth } = require('@clerk/clerk-sdk-node')

const requireAuth = async (req, res, next) => {
  try {
    const auth = getAuth(req)
    if (!auth.userId) {
      return res.status(401).json({ error: "Unauthorized request" })
    }
    req.auth = auth
    next()
  } catch (error) {
    res.status(401).json({ error: "Request is not authorized" })
  }
}

module.exports = requireAuth 