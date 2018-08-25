"use strict";

var getToken = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var codeElement, eproof, securityKey, redirect, res, _ref2, token, refreshToken;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            codeElement = document.getElementById('code');
            eproof = getParameterByName('eproof');
            securityKey = codeElement.value;
            redirect = getParameterByName('redirect');
            _context.next = 6;
            return fetch('/token', {
              body: JSON.stringify({ eproof: eproof, securityKey: securityKey }),
              mode: 'cors',
              method: 'post',
              headers: {
                'content-type': 'application/json'
              }
            });

          case 6:
            res = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 18;
              break;
            }

            _context.next = 10;
            return res.json();

          case 10:
            _ref2 = _context.sent;
            token = _ref2.token;
            refreshToken = _ref2.refreshToken;

            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
            location.href = redirect;
            _context.next = 20;
            break;

          case 18:
            document.getElementById('code').className = codeElement.className.concat(" is-invalid");
            document.getElementById('go').className = document.getElementById('go').className.concat(" btn-danger");

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getToken() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

document.getElementById('go').onclick = getToken;