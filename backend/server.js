require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

// Middlewares para lidar com o cors
app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

// Middleware
app.use(express.json());

//Rotas
// app.use('/api/auth', authRoutes);
// app.use('/api/auth', userRoutes);
// app.use('/api/auth', taskRoutes);
// app.use('/api/auth', reportRoutes);

// Conexão com o banco de dados
connectDB();

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});