const { hashSync, compareSync } = require("bcrypt");
const { User } = require("../models");
const jwt = require('jsonwebtoken');

const getSingleUser = (req, res) => {
    User.findOne({
        userId: req.body.user_id,
    }, (err, user) => {
        err ? res.send({ err }) : res.status(200).send({
            success: true,
            data: {
                username: user.fullName,
                profilePic: {
                    url: user.profilePicture
                }
            }
        });
    })
}

const createUser = (req, res, next) => {
    User.findOne({
        email: req.body.email,
    }, (err, user) => {
        err && res.send({ err });
        if (user === null) {
            User.create({
                fullName: req.body.fullName,
                email: req.body.email,
                password: hashSync(req.body.password, 10),
            }).then((user) => {
                res.send({
                    success: true,
                    message: 'user created successfully!',
                    data: {
                        userId: user._id,
                        username: user.fullName,
                        email: user.email,
                    }
                });
            }).catch((error) => {
                res.send({
                    success: false,
                    message: 'user not created! something was wrong!',
                    error
                })
            })
        } else {
            res.send({
                success: false,
                message: "user already exist with this email!"
            })
        }
    })
}

const loginUser = (req, res, next) => {
    User.findOne({
        email: req.body.email,
    }).then((user) => {
        if (!user) {
            res.status(401).send({
                success: false,
                message: 'userr not exist!.',
            })
        } else {
            if (compareSync(req.body.password, user.password)) {
                payload = {
                    userId: user._id,
                    username: user.fullName,
                    email: user.email,
                }
                const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '7d' })
                res.send({
                    success: true,
                    message: 'user loged in successfully.',
                    data: {
                        userId: user._id,
                        username: user.fullName,
                        email: user.email,
                        profilePic: {
                            url: user.profilePicture
                        },
                        token: `Bearer ${token}`
                    }
                })
            } else {
                res.send({
                    success: false,
                    message: 'invalid password or email!'
                })
            }
        }

    }).catch((error) => {
        res.send({
            success: false,
            message: 'user err not exist!',
            error: error
        })
    })
}

const updateUser = (req, res) => {
    User.findOneAndUpdate({
        email: req.params.email
    }, req.body, { upsert: true }, (err, doc) => {
        if (err) return res.send(500, { error: err });
        return res.send({
            success: true,
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
            res.status(400).send({
                success: false,
                message: req.params.email + ' was not found'
            });
        } else {
            res.status(200).send({
                success: true,
                message: req.params.email + ' was deleted.'
            });
        }
    }).catch((error) => {
        res.status(500).send(
            {
                success: false,
                message: 'something was wrong!',
                error
            }
        );
    });
}

module.exports = {
    getSingleUser,
    createUser,
    loginUser,
    updateUser,
    deleteUser,
}
