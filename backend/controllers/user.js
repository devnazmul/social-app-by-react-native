const { User } = require("../models");

const createUser = (req, res) => {
    User.findOne({
        email: req.body.email,
    }, (err, user) => {
        err && res.send({ err });
        if (user === null) {
            User.create({
                fullName: req.body.fullName,
                email: req.body.email,
                password: req.body.password,
            }).then((user) => {
                res.send(user);
            }).catch((err) => {
                res.send(err)
            })
        } else {
            res.send({
                message: "user already exist with this email!"
            })
        }
    })
}

const loginUser = (req, res) => {
    User.findOne({
        email: req.body.email,
    }).then((user) => {
        if (user.password === req.body.password) {
            res.send(user)
        } else {
            res.send({
                message: 'invalid password or email!'
            })
        }
    }).catch((err) => {
        res.send({
            err,
            message: 'user not exist!'
        })
    })
}



const updateUser = (req, res) => {
    User.findOneAndUpdate({
        email: req.params.email
    }, req.body, { upsert: true }, (err, doc) => {
        if (err) return res.send(500, { error: err });
        return res.send({
            message: 'succesfully saved.'
        });
    });
}

const deleteUser = (req, res) => {
    console.log(req.params.email);
    User.findOneAndRemove({
        email: req.params.email
    }).then((user) => {
        if (!user) {
            res.status(400).send(req.params.email + ' was not found');
        } else {
            res.status(200).send(req.params.email + ' was deleted.');
        }
    }).catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
}

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
}
