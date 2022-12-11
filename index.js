const express = require('express');
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

require('dotenv').config();

const app = express();

const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());

app.listen(8080, () => {
    console.log(`Server Started at ${8080}`)
})