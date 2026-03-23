var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(express.static('public'));
app.get('/convert', (req, res) => {
    const amount = parseFloat(req.query.amount) || 0;
    const rate = 0.051;
    const result = (amount * rate).toFixed(2);
    res.json({ result: result });
});

var routes = require("./api/routes");
routes(app);

if (!module.parent) {
    app.listen(port);
}

module.exports = app

console.log("Server running on port " + port);