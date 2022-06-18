const bcrypt = require('bcrypt');

module.exports = async function authenticateToken(req, res, next) {
    try {
        if (!req.body.password) throw new Error('Password not provided');
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        if (!hashPassword) return res.sendStatus(401);
        req.hashPassword = hashPassword;
        next();
    } catch (err) {
        res.status(500).send({ err: 'Password not provided' });
    }
};
