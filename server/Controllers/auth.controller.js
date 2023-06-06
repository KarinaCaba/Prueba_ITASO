const Users = require("../Models/User.model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signToken = (_id) => jwt.sign({ _id }, process.env.SECRET_TOKEN,{ expiresIn: '2h' });

const register = async (req, res, next) => {

    const { body } = req;
    try {
        const isUser = await Users.findOne({ clave: body.clave });
        if (isUser) {
            return res.status(403).json({ message: 'User already exists' });
        }
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(body.password, salt);

        const user = await Users.create({
            email : body.email,
            password: hash,
            name : body.name,
            surname : body.surname,
            level : body.level
        });
        const signed = await signToken(user._id);
        res.status(201).send({token:signed,clave:user.clave, placas:user.placas});
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const login = async (req, res, next) => {

    const { body } = req;
    try {
        const user = await Users.findOne({ email: body.email });
        if (!user) {
            return res.status(403).json({ message: 'User does not exist' });
        }
        const isMatch = await bcrypt.compare(body.password, user.password);
        if (!isMatch) {
            return res.status(403).json({ message: 'Wrong password' });
        }

        const signed = await signToken(user._id);
        console.log('body.clave: ' + body.clave);
        res.status(200).json({token:signed, clave:body.clave, placas: user.placas});
    } catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = {
    register,
    login
}