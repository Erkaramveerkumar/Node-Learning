import mangoose from 'mongoose';

const orderSchema = new mangoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    userId: {
        type: mangoose.Schema.Types.ObjectId,
        ref: 'User',
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
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "processing", "shipped", "delivered", "cancelled"],
        required: true,
        default: "pending"
    }
});
const Order = mangoose.model('Order', orderSchema);
export default Order;
