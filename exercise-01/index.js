const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3002;
const app = express();
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(cors({
    origin: 'http://localhost:3003',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.use(express.json());
app.use('/users', userRoutes);
app.use('/auth', authRoutes);



app.listen(PORT, () => {
    console.log(`Server in port ${PORT}` )
})