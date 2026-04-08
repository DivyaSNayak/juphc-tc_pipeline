const express = require('express');
const calculateTax = require('./tax');

const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.send("Tax Calculator App is Running");
});

// Tax API
app.get('/tax/:income', (req, res) => {
    const income = parseInt(req.params.income);

    if (isNaN(income)) {
        return res.status(400).json({ error: "Invalid income" });
    }

    const tax = calculateTax(income);

    res.json({
        income: income,
        tax: tax
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});