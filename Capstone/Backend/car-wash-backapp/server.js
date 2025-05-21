const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//const authRoutes = require('./routes/userRoutes');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();
require('./dbConnect');

const app = express();

//app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

app.get('/', (req, res) => { res.send('Hello world') })

//app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


