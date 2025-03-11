import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res, next) => {
    try {
        const { name, email, age, address, password } = req.body;

        const userExists = await User.findOne({ email }); // it return {}|| null
        if (userExists) {
            res.status(400);
            throw new Error('User already exists');
        } else {

            const hashPassword = await bcrypt.hash(password, 14);
            const user = await User.create({
                name,
                email,
                age,
                address,
                password: hashPassword
            });

            res.status(201).json({
                status: 'success',
                statusCode: 201,
                message: 'User created successfully',
                data: user
            });
        }
    } catch (error) {
        next(error);
    }
};



const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            throw new Error('Invalid email or password');
        }
        // if (password !== user.password) {
        //     throw new Error('Invalid email or password');
        // }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid email or password');
        }
        return res.json({ user });
    } catch (error) {
        next(error);
    }
};




export {
    registerUser, loginUser
};