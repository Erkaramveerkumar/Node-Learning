import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        default: ""
    },
    thumbnail: {
        type: String,
        required: false,
        default: ""
    },
    mrp: {
        type: Number,
        required: true
    },
    sellPrice: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    status: {
        type: String,
        enum: ["published", "draft"],
        required: true,
        default: "published"
    }
}, {
    timestamps: true,
    versionKey: false
});


const Product = mongoose.model("Product", productSchema);

export default Product;