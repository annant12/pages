const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

// Serve static files from the "out" directory
app.use(express.static(path.join(__dirname, 'out')));

// Fallback for SPA routing
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
