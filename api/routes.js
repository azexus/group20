module.exports = function(app) {
  var arithmetic = require("./controllers/arithmeticController");

  app.route("/arithmetic").get(arithmetic.calculate);

  app.get('/square/:num', function(req, res) {
    const num = Number(req.params.num);
    res.json({ result: num * num });
});
};
