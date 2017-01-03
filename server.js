var express        = require("express");
var app            = express();
var bodyParser     = require("body-Parser");
var methodOverride = require("method-Override");

app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/nvd.api+json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(express.static(__dirname + "/public"));

require("./app/routes")(app);
// Port
var port = process.env.PORT || 3333;

app.listen(process.env.PORT || port);

exports = module.exports = app;
