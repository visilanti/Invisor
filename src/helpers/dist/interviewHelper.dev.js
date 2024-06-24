"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGenerateQuestion = handleGenerateQuestion;
exports.handleGetQuestionById = handleGetQuestionById;
exports.handlePostAnswer = handlePostAnswer;
exports.handleSummaryFeedbackById = handleSummaryFeedbackById;
exports.handleGetAllFeedbackSummary = handleGetAllFeedbackSummary;
exports.handleGetFeedBackSummary1 = handleGetFeedBackSummary1;

var _axios = _interopRequireDefault(require("axios"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function handleGenerateQuestion(uploadFormData) {
  var token, response, generateQuestionId;
  return regeneratorRuntime.async(function handleGenerateQuestion$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          token = _jsCookie["default"].get("token");

          if (token) {
            _axios["default"].defaults.headers.common["Authorization"] = "Bearer ".concat(token);
          }

          _context.next = 5;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(process.env.NEXT_PUBLIC_API_URL, "/generate-question"), uploadFormData, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }));

        case 5:
          response = _context.sent;
          generateQuestionId = response.data.data.question_id; // console.log(generateQuestionId);

          return _context.abrupt("return", generateQuestionId);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0.message);
          return _context.abrupt("return", false);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
}

function handleGetQuestionById(id) {
  var token, response, getQuestionId;
  return regeneratorRuntime.async(function handleGetQuestionById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          token = _jsCookie["default"].get("token");

          if (token) {
            _axios["default"].defaults.headers.common["Authorization"] = "Bearer ".concat(token);
          }

          _context2.next = 5;
          return regeneratorRuntime.awrap(_axios["default"].get(process.env.NEXT_PUBLIC_API_URL + "/questions/".concat(id)));

        case 5:
          response = _context2.sent;
          console.log(response);
          getQuestionId = response.data.data.questions;
          return _context2.abrupt("return", getQuestionId);

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0.message);
          return _context2.abrupt("return", false);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
}

function handlePostAnswer(answerData) {
  var token, response;
  return regeneratorRuntime.async(function handlePostAnswer$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          token = _jsCookie["default"].get("token");

          if (token) {
            _axios["default"].defaults.headers.common["Authorization"] = "Bearer ".concat(token);
          }

          _context3.next = 5;
          return regeneratorRuntime.awrap(_axios["default"].post(process.env.NEXT_PUBLIC_API_URL + "/user-answer", answerData, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }));

        case 5:
          response = _context3.sent;
          return _context3.abrupt("return", response);

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0.message);
          return _context3.abrupt("return", false);

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

function handleSummaryFeedbackById(id) {
  var token, response;
  return regeneratorRuntime.async(function handleSummaryFeedbackById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          token = _jsCookie["default"].get("token");

          if (token) {
            _axios["default"].defaults.headers.common["Authorization"] = "Bearer ".concat(token);
          }

          _context4.next = 5;
          return regeneratorRuntime.awrap(_axios["default"].get(process.env.NEXT_PUBLIC_API_URL + "/feedback-summary/".concat(id), {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }));

        case 5:
          response = _context4.sent;
          return _context4.abrupt("return", response);

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0.message);
          return _context4.abrupt("return", false);

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

function handleGetAllFeedbackSummary() {
  var token, response;
  return regeneratorRuntime.async(function handleGetAllFeedbackSummary$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          token = _jsCookie["default"].get("token");

          if (token) {
            _axios["default"].defaults.headers.common["Authorization"] = "Bearer ".concat(token);
          }

          _context5.next = 5;
          return regeneratorRuntime.awrap(_axios["default"].get(process.env.NEXT_PUBLIC_API_URL + "/feedback-summaries", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }));

        case 5:
          response = _context5.sent;
          return _context5.abrupt("return", response.data.data);

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0.message);
          return _context5.abrupt("return", false);

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 9]]);
}

function handleGetFeedBackSummary1() {
  var token, response;
  return regeneratorRuntime.async(function handleGetFeedBackSummary1$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          token = _jsCookie["default"].get("token");

          if (token) {
            _axios["default"].defaults.headers.common["Authorization"] = "Bearer ".concat(token);
          }

          _context6.next = 5;
          return regeneratorRuntime.awrap(_axios["default"].get(process.env.NEXT_PUBLIC_API_URL + "/feedback-summaries", {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          }));

        case 5:
          response = _context6.sent;
          return _context6.abrupt("return", response.data.data.slice(0, 2));

        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0.message);
          return _context6.abrupt("return", false);

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 9]]);
}