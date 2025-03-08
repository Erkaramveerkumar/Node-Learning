import User from "../models/user.model.js";


const registerUser = async (req, res, next) => {
    try {
        const { name, email, age, address, password } = req.body;

        const userExists = await User.findOne({ email }); // it return {}|| null
        if (userExists) {
            res.status(400);
            throw new Error('User already exists');
        } else {
            const user = await User.create({
                name,
                email,
                age,
                address,
                password
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




export {
    registerUser
};