import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import errorHandler from './middlewares/errorHandler.js';
import { connectDB } from './config/dbConfig.js';

// Routes

// import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
// import orderRoutes from './routes/orderRoutes.js';

const app = express();
app.use(express.json()); // for body parser
app.use(cors({
    // origin: process.env.CORS_ORIGIN
}));

connectDB();

// app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
// app.use('/api/orders', orderRoutes);

// error handling middleware
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

