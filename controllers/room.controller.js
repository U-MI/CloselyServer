const bcrypt = require("bcrypt")
class Room{
    create(req,res){
        const hash = bcrypt.hashSync(req.body.name,4);
        const invite_link = `https://closely.com/inv=${encodeURIComponent(hash)}`
        try {
            res.status(200).send(invite_link)
        } catch (error) {
            res.status(401).send(error.message)
        }
    }
}

module.exports = new Room();