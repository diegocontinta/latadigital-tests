const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.login = async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.scope('withoutPassword').findOne({ where: {
                                                    email : email,
                                                    password : password
                                                    }
                                        });

        if (!user) {
            return res.status(401).json({ message: 'Credentials invalid' });
        }

        /* ------ FOR REAL ACCESS ------ */
        // const passwordMatch = await bcrypt.compare(password, user.password);
        //
        // if (!passwordMatch) {
        //     return res.status(401).json({ message: 'Credentials invalid' });
        // }
        //
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        res.json( {token : token, user : user } );

    } catch (error) {
        console.error('Error auth:', error);
        res.status(500).json({ message: 'Error auth' });
    }
};


exports.register = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await User.create({
            email: req.body.email,
            password: hashedPassword
        });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering user' });
    }
};
