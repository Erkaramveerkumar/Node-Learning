import mongoose, { Schema } from "mongoose";

const userCartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

const UserCart = mongoose.model("UserCart", userCartSchema);

export default UserCart;