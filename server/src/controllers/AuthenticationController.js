const {User} = require('..models/')

module.exports = {
    async register (req, res) {
        try{
            const user = await User.create(req.Body)
            res.send(user.toJSON)
        } catch (err) {
            res.status(400).send({
                error: 'This account is already in use.'
            })
        }
    }
}