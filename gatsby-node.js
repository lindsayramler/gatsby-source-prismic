'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _fetch = require('./fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _nodes = require('./nodes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.sourceNodes = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2, _ref3) {
    var boundActionCreators = _ref2.boundActionCreators,
        getNodes = _ref2.getNodes,
        hasNodeChanged = _ref2.hasNodeChanged,
        store = _ref2.store;
    var repositoryName = _ref3.repositoryName,
        accessToken = _ref3.accessToken;

    var createNode, deleteNodes, touchNode, setPluginStatus, _ref4, documents;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            createNode = boundActionCreators.createNode, deleteNodes = boundActionCreators.deleteNodes, touchNode = boundActionCreators.touchNode, setPluginStatus = boundActionCreators.setPluginStatus;
            _context.next = 3;
            return (0, _fetch2.default)({
              repositoryName: repositoryName,
              accessToken: accessToken
            });

          case 3:
            _ref4 = _context.sent;
            documents = _ref4.documents;


            documents.forEach(function (doc) {
              var node = (0, _nodes.DocumentNode)({
                documentItem: doc
              });

              createNode(node);
            });

            return _context.abrupt('return');

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();