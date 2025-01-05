const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const newsRoutes = require('./routes/newsRoutes');
const payoutRoutes = require('./routes/payoutRoutes');

dotenv.config();
const app = express();
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/payouts', payoutRoutes);

app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${process.env.PORT}`));
