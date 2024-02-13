const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/users', userRoutes);
app.use('/auth', authRoutes);



app.listen(PORT, () => {
    console.log(`Server in port ${PORT}` )
})