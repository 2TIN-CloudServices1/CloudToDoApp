require('dotenv').config()
const express = require('express');
const cors = require('cors');
const healthRoutes = require('./routes/health.routes');
const todoRoutes = require('./routes/todo.routes');
const carrouselRoutes = require('./routes/carrousel.routes');
const app = express();
const db = require('./db');
const PORT = process.env.PORT || 3000;

// Custom middleware to log CORS details
app.use((req, res, next) => {
    console.log('Incoming request:', {
        origin: req.headers.origin,
        method: req.method,
        path: req.path
    });
    next();
});

// CORS middleware configuration
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    next();
});

app.use(express.json());
app.use('/health', healthRoutes);
app.use('/todo', todoRoutes);
app.use('/carrousel', carrouselRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
