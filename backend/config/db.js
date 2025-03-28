const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB conectado');
  } catch (error) {
    console.log('Erro ao tentar se conectar ao MongoDB', error);
    process.exit(1);
  }
}

module.exports = connectDB;
