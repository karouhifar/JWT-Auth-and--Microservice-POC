const uuid = require('uuid');
const jwt = require('jsonwebtoken');

exports.user = (req, res) => {
    const username = req.body.username;
    const user = { id: uuid.v4(), name: username };
    const accessToken = generateAccess(user);
    const refreshToken = jwt.sign(user, process.env.TOKEN_SECRET_REFRESH);
    res.json({ accessToken: accessToken, refreshToken: refreshToken });
};

function generateAccess(user) {
    return jwt.sign(user, process.env.TOKEN_SECRET);
}
