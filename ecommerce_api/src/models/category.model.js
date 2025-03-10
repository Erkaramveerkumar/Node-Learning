import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    title: {
        type: "String",
        required: true,
    },
    description: {
        type: "String",
        required: false,
        default: ""
    },
    thumbnail: {
        type: "String",
        required: false,
        default: ""
    },
    slug: {
        type: "String", // Fruit Vegitabeles>> fruit-vegitabeles
        required: true,
        unique: true
    },
    status: {
        type: "String",
        enum: ["active", "inactive"],
        required: true,
        default: "active"
    }
}, {
    timestamps: true,
    versionKey: false
});

const Category = mongoose.model("Category", categorySchema);

export default Category;