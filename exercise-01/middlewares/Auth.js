
const jwt = require('jsonwebtoken');
require('dotenv').config();

function authToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message : 'No access' });

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {

        res.status(400).json({ message: 'Token no valid' });
    }
}

module.exports = authToken;