"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleRegister = handleRegister;
exports.handleLogin = handleLogin;
exports.handleLogout = handleLogout;

var _axios = _interopRequireDefault(require("axios"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function handleRegister(email, password) {
  var response;
  return regeneratorRuntime.async(function handleRegister$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post(process.env.NEXT_PUBLIC_API_URL + "/register", {
            email: email,
            password: password
          }, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }));

        case 3:
          response = _context.sent;

          if (!(response.status === 201)) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", true);

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0.message);
          return _context.abrupt("return", false);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}

function handleLogin(email, password) {
  var response, token, _email, user_id;

  return regeneratorRuntime.async(function handleLogin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post(process.env.NEXT_PUBLIC_API_URL + "/login", {
            email: email,
            password: password
          }, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }));

        case 3:
          response = _context2.sent;

          if (!(response.status === 200)) {
            _context2.next = 13;
            break;
          }

          token = response.data.data.token;
          _email = response.data.data.user.email;
          user_id = response.data.data.user.id;

          _jsCookie["default"].set("email", _email, {
            expires: 1
          });

          _jsCookie["default"].set("user_id", user_id, {
            expires: 1
          });

          _jsCookie["default"].set("token", token, {
            expires: 1
          });

          _axios["default"].defaults.headers.common["Authorization"] = "Bearer ".concat(token);
          return _context2.abrupt("return", true);

        case 13:
          _context2.next = 19;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0.message);
          return _context2.abrupt("return", false);

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 15]]);
}

function handleLogout() {
  var token, email, user_id, response;
  return regeneratorRuntime.async(function handleLogout$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          token = _jsCookie["default"].get("token");
          email = _jsCookie["default"].get("email");
          user_id = _jsCookie["default"].get("user_id");

          if (token) {
            _axios["default"].defaults.headers.common["Authorization"] = "Bearer ".concat(token);
          }

          _context3.next = 7;
          return regeneratorRuntime.awrap(_axios["default"].post(process.env.NEXT_PUBLIC_API_URL + "/logout"));

        case 7:
          response = _context3.sent;

          // console.log(response);
          _jsCookie["default"].remove("token");

          _jsCookie["default"].remove("email");

          _jsCookie["default"].remove("user_id");

          return _context3.abrupt("return", true);

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0.message);
          return _context3.abrupt("return", false);

        case 18:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 14]]);
}