const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();
const app = express();
PORT=5000

app.use(cors());
app.use(bodyParser.json());
app.use('/api', contactRoutes);

mongoose
    .connect("mongodb+srv://TEST:12345@mubustest.yfyj3.mongodb.net/contact_app", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(process.env.PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => console.error('MongoDB connection error:', error));
