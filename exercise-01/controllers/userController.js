
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config();


exports.getAllUsers = async (req, res) => {
                           res.json( await User.findAll());
                     }

exports.getUserByID = async (req, res) => {
                         res.json( await User.findOne({where: {id : req.params.id}}));
                     }

exports.storeUser = async (req,res) => {

                            await User.create({
                                email: req.body.email,
                                password: req.body.password,
                                first_name: req.body.first_name,
                                last_name: req.body.last_name,
                                age: req.body.age,
                            }).then((user) => res.status(201).send(user)).catch((error) => {
                                console.log(error);
                                res.status(400).send(error);
                            });
                    }


exports.updateUser = async (req, res) => {

                        await   User.update(
                                            {
                                                email: req.body.email,
                                                password: req.body.password,
                                                first_name: req.body.first_name,
                                                last_name: req.body.last_name,
                                                age: req.body.age,
                                            },
                                            { where : {
                                                        id : req.body.id
                                                        }
                                            })
                                    .then((r) => res.status(201).send({ updated: r[0] === 1 }))
                                    .catch((error) => {
                                        console.log(error);
                                        res.status(400).send(error);
                                    });
                    }


exports.destroyUser = async (req, res) => {

                        await   User.destroy({ where : { id : req.body.id}})
                                    .then((status) => res.status(201).json({message: "User deleted successfully"}))
                                    .catch((error) => {
                                        console.log(error);
                                        res.status(400).send(error);
                                    });
}
