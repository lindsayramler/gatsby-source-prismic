'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentNode = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _lodash = require('lodash');

var _crypto = require('crypto');

var _jsonStringifySafe = require('json-stringify-safe');

var _jsonStringifySafe2 = _interopRequireDefault(_jsonStringifySafe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sourceId = '__SOURCE__';
var typePrefix = 'Prismic';
var conflictFieldPrefix = 'prismic';
var restrictedNodeFields = ['id', 'children', 'parent', 'fields', 'internal'];

var makeTypeName = function makeTypeName(type) {
  return (0, _lodash.upperFirst)((0, _lodash.camelCase)(typePrefix + ' ' + type));
};
var digest = function digest(str) {
  return (0, _crypto.createHash)('md5').update(str).digest('hex');
};

// DocumentNode
//
// Each document is a DocumentNode. Data is available in the `data` property.
var DocumentNode = exports.DocumentNode = function DocumentNode(_ref) {
  var documentItemOriginal = _ref.documentItem;

  var documentItem = (0, _assign2.default)({}, documentItemOriginal);

  // Prefix conflicting keys.
  (0, _keys2.default)(documentItem).forEach(function (key) {
    if (restrictedNodeFields.includes(key)) {
      documentItem[conflictFieldPrefix + (0, _lodash.upperFirst)(key)] = documentItem[key];
      delete documentItem[key];
    }
  });

  // Need to use prismicId since the original id key conflicts with Gatsby.
  var node = (0, _extends3.default)({}, documentItem, {
    id: documentItem.prismicId,
    parent: sourceId,
    children: [],
    internal: {
      type: makeTypeName('Document')
    }
  });

  node.internal.contentDigest = digest((0, _jsonStringifySafe2.default)(node));

  return node;
};