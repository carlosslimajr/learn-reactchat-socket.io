"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _express.default.Router(); //modulo de roteamento do express !


routes.get('/', function (req, res) {
  res.send('Chegou aqui');
});
routes.get('/teste', function (req, res) {
  var teste = 20;
  var teste2 = 30;
  return res.json(teste, teste2);
});
var _default = routes;
exports.default = _default;