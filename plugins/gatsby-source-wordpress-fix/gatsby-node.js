'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

/**
 * Helper for axios GET with auth
 * 
 * @param {any} url 
 * @param {any} auth 
 * @returns 
 */
var axiosHelper = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(url) {
    var result, options;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            result = void 0;
            _context2.prev = 1;
            options = {
              method: 'get',
              url: url,
              params: {
                per_page: 100
              }
            };

            if (_auth != undefined) {
              if (_hostingWPCOM) {
                options.headers = {
                  Authorization: 'Bearer ' + _accessToken
                };
              } else {
                options.auth = {
                  username: _auth.user,
                  password: _auth.pass
                };
              }
            }

            _context2.next = 6;
            return axios(options);

          case 6:
            result = _context2.sent;
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2['catch'](1);

            httpExceptionHandler(_context2.t0);

          case 12:
            return _context2.abrupt('return', result);

          case 13:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 9]]);
  }));

  return function axiosHelper(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * Gets wordpress.com access token so it can fetch private data
 */


var getWPCOMAccessToken = function () {
  var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
    var result, oauthUrl, options;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            result = void 0;
            oauthUrl = 'https://public-api.wordpress.com/oauth2/token';
            _context3.prev = 2;
            options = {
              url: oauthUrl,
              method: 'post',
              data: qs.stringify({
                client_secret: _auth.clientSecret,
                client_id: _auth.clientId,
                username: _auth.user,
                password: _auth.pass,
                grant_type: 'password'
              })
            };
            _context3.next = 6;
            return axios(options);

          case 6:
            result = _context3.sent;

            result = result.data.access_token;
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3['catch'](2);

            httpExceptionHandler(_context3.t0);

          case 13:
            return _context3.abrupt('return', result);

          case 14:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[2, 10]]);
  }));

  return function getWPCOMAccessToken() {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * Handles HTTP Exceptions (axios)
 * 
 * @param {any} e 
 */


/**
 * Fetch the data from specified route url, using the auth provided.
 *
 * @param {any} route
 * @param {any} createNode
 * @param {any} parentNodeId (Optionnal parent node ID)
 */
var fetchData = function () {
  var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(route, createNode, parentNodeId) {
    var type, url, routeResponse, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, ent, length;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            type = route.type;
            url = route.url;


            if (parentNodeId != undefined) {
              console.log(colorized.out('Extended node content', colorized.color.Font.FgBlue), url);
            } else {
              console.log(colorized.out('=== [ Fetching ' + type + ' ] ===', colorized.color.Font.FgBlue), url);
              if (_verbose) console.time('Fetching the ' + type + ' took');
            }

            _context4.next = 5;
            return axiosHelper(url);

          case 5:
            routeResponse = _context4.sent;

            if (!routeResponse) {
              _context4.next = 41;
              break;
            }

            if (!Array.isArray(routeResponse.data)) {
              _context4.next = 36;
              break;
            }

            _iteratorNormalCompletion4 = true;
            _didIteratorError4 = false;
            _iteratorError4 = undefined;
            _context4.prev = 11;
            _iterator4 = (0, _getIterator3.default)(routeResponse.data);

          case 13:
            if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
              _context4.next = 20;
              break;
            }

            ent = _step4.value;
            _context4.next = 17;
            return createGraphQLNode(ent, type, createNode, parentNodeId);

          case 17:
            _iteratorNormalCompletion4 = true;
            _context4.next = 13;
            break;

          case 20:
            _context4.next = 26;
            break;

          case 22:
            _context4.prev = 22;
            _context4.t0 = _context4['catch'](11);
            _didIteratorError4 = true;
            _iteratorError4 = _context4.t0;

          case 26:
            _context4.prev = 26;
            _context4.prev = 27;

            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }

          case 29:
            _context4.prev = 29;

            if (!_didIteratorError4) {
              _context4.next = 32;
              break;
            }

            throw _iteratorError4;

          case 32:
            return _context4.finish(29);

          case 33:
            return _context4.finish(26);

          case 34:
            _context4.next = 38;
            break;

          case 36:
            _context4.next = 38;
            return createGraphQLNode(routeResponse.data, type, createNode, parentNodeId);

          case 38:

            // TODO : Get the number of created nodes using the nodes in state.
            length = void 0;

            if (routeResponse != undefined && routeResponse.data != undefined && Array.isArray(routeResponse.data)) {
              length = routeResponse.data.length;
            } else if (routeResponse.data != undefined && !Array.isArray(routeResponse.data)) {
              length = (0, _keys2.default)(routeResponse.data).length;
            }
            console.log(colorized.out(type + ' fetched : ' + length, colorized.color.Font.FgGreen));

          case 41:

            if (_verbose && parentNodeId == undefined) console.timeEnd('Fetching the ' + type + ' took');

          case 42:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[11, 22, 26, 34], [27,, 29, 33]]);
  }));

  return function fetchData(_x4, _x5, _x6) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * Encrypts a String using md5 hash of hexadecimal digest.
 * 
 * @param {any} str 
 */


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var axios = require('axios');
var crypto = require('crypto');
var _ = require('lodash');
var stringify = require('json-stringify-safe');
var colorized = require('./output-color');
var qs = require('qs');

var typePrefix = 'wordpress__';

var conflictFieldPrefix = 'wordpress_';
// restrictedNodeFields from here https://www.gatsbyjs.org/docs/node-interface/
var restrictedNodeFields = ['id', 'children', 'parent', 'fields', 'internal'];

/* If true, will output many console logs. */
var _verbose = void 0;
var _siteURL = void 0;
var _getNode = void 0;
var _useACF = void 0;
var _hostingWPCOM = void 0;
var _auth = void 0;
var _accessToken = void 0;

var _parentChildNodes = [];

var refactoredEntityTypes = {
  post: typePrefix + 'POST',
  page: typePrefix + 'PAGE',
  tag: typePrefix + 'TAG',
  category: typePrefix + 'CATEGORY'

  // ========= Main ===========
};exports.sourceNodes = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2, _ref3) {
    var boundActionCreators = _ref2.boundActionCreators,
        getNode = _ref2.getNode,
        hasNodeChanged = _ref2.hasNodeChanged,
        store = _ref2.store;
    var baseUrl = _ref3.baseUrl,
        protocol = _ref3.protocol,
        hostingWPCOM = _ref3.hostingWPCOM,
        useACF = _ref3.useACF,
        auth = _ref3.auth,
        verboseOutput = _ref3.verboseOutput;

    var createNode, touchNode, setPluginStatus, createParentChildLink, url, allRoutes, validRoutes, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, route, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            createNode = boundActionCreators.createNode, touchNode = boundActionCreators.touchNode, setPluginStatus = boundActionCreators.setPluginStatus, createParentChildLink = boundActionCreators.createParentChildLink;

            _verbose = verboseOutput;
            _siteURL = protocol + '://' + baseUrl;
            _getNode = getNode;
            _useACF = useACF;
            _hostingWPCOM = hostingWPCOM;
            _auth = auth;

            // If the site is hosted on wordpress.com, the API Route differs.
            // Same entity types are exposed (excepted for medias and users which need auth)
            // but the data model contain slights variations.
            url = void 0;

            if (!hostingWPCOM) {
              _context.next = 15;
              break;
            }

            url = 'https://public-api.wordpress.com/wp/v2/sites/' + baseUrl;
            _context.next = 12;
            return getWPCOMAccessToken();

          case 12:
            _accessToken = _context.sent;
            _context.next = 16;
            break;

          case 15:
            url = _siteURL + '/wp-json';

          case 16:

            console.log();
            console.log(colorized.out('=START PLUGIN=====================================', colorized.color.Font.FgBlue));
            console.time('=END PLUGIN=====================================');
            console.log('');
            console.log(colorized.out('Site URL: ' + _siteURL, colorized.color.Font.FgBlue));
            console.log(colorized.out('Site hosted on Wordpress.com: ' + hostingWPCOM, colorized.color.Font.FgBlue));
            console.log(colorized.out('Using ACF: ' + useACF, colorized.color.Font.FgBlue));
            console.log(colorized.out('Using Auth: ' + _auth.user + ' ' + _auth.pass, colorized.color.Font.FgBlue));
            console.log(colorized.out('Verbose output: ' + verboseOutput, colorized.color.Font.FgBlue));
            console.log('');
            console.log(colorized.out('Mama Route URL: ' + url, colorized.color.Font.FgBlue));
            console.log('');

            // Touch existing Wordpress nodes so Gatsby doesn`t garbage collect them.
            _.values(store.getState().nodes).filter(function (n) {
              return n.internal.type.slice(0, 10) === typePrefix;
            }).forEach(function (n) {
              return touchNode(n.id);
            });

            // Call the main API Route to discover the all the routes exposed on this API.
            _context.next = 31;
            return axiosHelper(url);

          case 31:
            allRoutes = _context.sent;

            if (!(allRoutes != undefined)) {
              _context.next = 87;
              break;
            }

            validRoutes = getValidRoutes(allRoutes, url, baseUrl);


            console.log('');
            console.log(colorized.out('Fetching the JSON data from ' + validRoutes.length + ' valid API Routes...', colorized.color.Font.FgBlue));
            console.log('');

            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 40;
            _iterator = (0, _getIterator3.default)(validRoutes);

          case 42:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 50;
              break;
            }

            route = _step.value;
            _context.next = 46;
            return fetchData(route, createNode);

          case 46:
            console.log('');

          case 47:
            _iteratorNormalCompletion = true;
            _context.next = 42;
            break;

          case 50:
            _context.next = 56;
            break;

          case 52:
            _context.prev = 52;
            _context.t0 = _context['catch'](40);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 56:
            _context.prev = 56;
            _context.prev = 57;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 59:
            _context.prev = 59;

            if (!_didIteratorError) {
              _context.next = 62;
              break;
            }

            throw _iteratorError;

          case 62:
            return _context.finish(59);

          case 63:
            return _context.finish(56);

          case 64:
            _iteratorNormalCompletion2 = true;
            _didIteratorError2 = false;
            _iteratorError2 = undefined;
            _context.prev = 67;


            for (_iterator2 = (0, _getIterator3.default)(_parentChildNodes); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              item = _step2.value;

              createParentChildLink({
                parent: _getNode(item.parentId),
                child: _getNode(item.childNodeId)
              });
            }

            _context.next = 75;
            break;

          case 71:
            _context.prev = 71;
            _context.t1 = _context['catch'](67);
            _didIteratorError2 = true;
            _iteratorError2 = _context.t1;

          case 75:
            _context.prev = 75;
            _context.prev = 76;

            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }

          case 78:
            _context.prev = 78;

            if (!_didIteratorError2) {
              _context.next = 81;
              break;
            }

            throw _iteratorError2;

          case 81:
            return _context.finish(78);

          case 82:
            return _context.finish(75);

          case 83:
            setPluginStatus({
              status: {
                lastFetched: new Date().toJSON()
              }
            });

            console.timeEnd('=END PLUGIN=====================================');
            _context.next = 88;
            break;

          case 87:
            console.log(colorized.out('No routes to fetch. Ending.', colorized.color.Font.FgRed));

          case 88:
            return _context.abrupt('return');

          case 89:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[40, 52, 56, 64], [57,, 59, 63], [67, 71, 75, 83], [76,, 78, 82]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();function httpExceptionHandler(e) {
  console.log(colorized.out('The server response was "' + e.response.status + ' ' + e.response.statusText + '"', colorized.color.Font.FgRed));
  if (e.response.data.message != undefined) console.log(colorized.out('Inner exception message : "' + e.response.data.message + '"', colorized.color.Font.FgRed));
  if (e.response.status == 400 || e.response.status == 401 || e.response.status == 402 || e.response.status == 403) console.log(colorized.out('Auth on endpoint is not implemented on this gatsby-source plugin.', colorized.color.Font.FgRed));
}

/**
 * Extract valid routes and format its data.
 * 
 * @param {any} allRoutes 
 * @param {any} url 
 * @param {any} baseUrl 
 * @returns 
 */
function getValidRoutes(allRoutes, url, baseUrl) {
  var validRoutes = [];

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = (0, _getIterator3.default)((0, _keys2.default)(allRoutes.data.routes)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var key = _step3.value;

      if (_verbose) console.log('Route discovered :', key);
      var route = allRoutes.data.routes[key];

      // A valid route exposes its _links (for now)
      if (route._links) {
        var entityType = getRawEntityType(route);

        // Excluding the "technical" API Routes
        var excludedTypes = [undefined, 'v2', 'v3', '1.0', '2.0', 'embed', 'proxy', '', baseUrl];
        if (!excludedTypes.includes(entityType)) {
          if (_verbose) console.log(colorized.out('Valid route found. Will try to fetch.', colorized.color.Font.FgGreen));

          var manufacturer = getManufacturer(route);

          var rawType = '';
          if (manufacturer == 'wp') {
            rawType = '' + typePrefix + entityType;
          }

          var validType = void 0;
          switch (rawType) {
            case typePrefix + 'posts':
              validType = refactoredEntityTypes.post;
              break;
            case typePrefix + 'pages':
              validType = refactoredEntityTypes.page;
              break;
            case typePrefix + 'tags':
              validType = refactoredEntityTypes.tag;
              break;
            case typePrefix + 'categories':
              validType = refactoredEntityTypes.category;
              break;
            default:
              validType = '' + typePrefix + manufacturer.replace(/-/g, '_') + '_' + entityType.replace(/-/g, '_');
              break;
          }
          validRoutes.push({ url: route._links.self, type: validType });
        } else {
          if (_verbose) console.log(colorized.out('Invalid route.', colorized.color.Font.FgRed));
        }
      } else {
        if (_verbose) console.log(colorized.out('Invalid route.', colorized.color.Font.FgRed));
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  if (_useACF) {
    // The OPTIONS ACF API Route is not giving a valid _link so let`s add it manually.
    validRoutes.push({
      url: url + '/acf/v2/options',
      type: typePrefix + 'acf_options'
    });
    if (_verbose) console.log(colorized.out('Added ACF Options route.', colorized.color.Font.FgGreen));
    if (_hostingWPCOM) {
      // TODO : Need to test that out with ACF on Wordpress.com hosted site. Need a premium account on wp.com to install extensions.
      console.log(colorized.out('The ACF options pages is untested under wordpress.com hosting. Please let me know if it works.', colorized.color.Effect.Blink));
    }
  }

  return validRoutes;
}

/**
 * Extract the raw entity type from route
 * 
 * @param {any} route 
 */
var getRawEntityType = function getRawEntityType(route) {
  return route._links.self.substring(route._links.self.lastIndexOf('/') + 1, route._links.self.length);
};

/**
 * Extract the route manufacturer
 * 
 * @param {any} route 
 */
var getManufacturer = function getManufacturer(route) {
  return route.namespace.substring(0, route.namespace.lastIndexOf('/'));
};var digest = function digest(str) {
  return crypto.createHash('md5').update(str).digest('hex');
};

/**
 * Create the Graph QL Node
 *
 * @param {any} ent
 * @param {any} type
 * @param {any} createNode
 * @param {any} parentNodeId (Optionnal parent node ID)
 */
function createGraphQLNode(ent, type, createNode, parentNodeId) {
  var id = ent.id == undefined ? ent.ID == undefined ? 0 : ent.ID : ent.id;
  var node = {
    id: type + '_' + id.toString(),
    children: [],
    parent: '__SOURCE__',
    internal: {
      type: type.toUpperCase(),
      content: (0, _stringify2.default)(node),
      mediaType: 'text/html'
    }
  };

  if (type == refactoredEntityTypes.post) {
    node.id = 'POST_' + ent.id.toString();
    node.internal.type = refactoredEntityTypes.post;
  } else if (type == refactoredEntityTypes.page) {
    node.id = 'PAGE_' + ent.id.toString();
    node.internal.type = refactoredEntityTypes.page;
  } else if (type == refactoredEntityTypes.tag) {
    node.id = 'TAG_' + ent.id.toString();
    node.internal.type = refactoredEntityTypes.tag;
  } else if (type == refactoredEntityTypes.category) {
    node.id = 'CATEGORY_' + ent.id.toString();
    node.internal.type = refactoredEntityTypes.category;
  }

  node = addFields(ent, node, createNode);

  if (type == refactoredEntityTypes.post || type == refactoredEntityTypes.page) {
    // TODO : Move this to field recursive and add other fields that have rendered field
    node.title = ent.title.rendered;
    node.content = ent.content.rendered;
    node.excerpt = ent.excerpt.rendered;
  }
  node.internal.contentDigest = digest(stringify(node));
  createNode(node);

  if (parentNodeId != undefined) {
    _parentChildNodes.push({ parentId: parentNodeId, childNodeId: node.id });
  }
}

/**
 * Loop through fields to validate naming conventions and extract child nodes.
 * 
 * @param {any} ent
 * @param {any} newEnt 
 * @returns the new entity with fields
 */
function addFields(ent, newEnt, createNode) {
  newEnt = recursiveAddFields(ent, newEnt);

  // TODO : add other types of child nodes
  if (_useACF && ent.acf != undefined && ent.acf != 'false') {
    //Create a child node with acf field json
    var acfNode = {
      id: newEnt.id + '_ACF_Field',
      children: [],
      parent: newEnt.id,
      internal: {
        type: typePrefix + 'ACF_Field',
        content: (0, _stringify2.default)(ent.acf),
        mediaType: 'application/json'
      }
    };
    acfNode.internal.contentDigest = digest(stringify(acfNode));
    createNode(acfNode);
    _parentChildNodes.push({ parentId: newEnt.id, childNodeId: acfNode.id });
  } else if (newEnt.meta != undefined && newEnt.meta.links != undefined && newEnt.meta.links.self != undefined) {
    //The entity as a link to more content for this entity
    fetchData({ url: newEnt.meta.links.self, type: newEnt.internal.type + '_Extended' }, createNode, newEnt.id);
  }
  return newEnt;
}

/**
 * Add fields recursively
 * 
 * @param {any} ent 
 * @param {any} newEnt 
 * @returns the new node
 */
function recursiveAddFields(ent, newEnt) {
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = (0, _getIterator3.default)((0, _keys2.default)(ent)), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var k = _step5.value;

      if (!newEnt.hasOwnProperty(k)) {
        (function () {
          var key = getValidName(k);
          if (key !== 'acf') {
            newEnt[key] = ent[k];
            // Nested Objects & Arrays of Objects
            if (typeof ent[key] == 'object') {
              if (!Array.isArray(ent[key]) && ent[key] != null) {
                newEnt[key] = recursiveAddFields(ent[key], {});
              } else if (Array.isArray(ent[key])) {
                if (ent[key].length > 0 && typeof ent[key][0] == 'object') {
                  ent[k].map(function (el, i) {
                    newEnt[key][i] = recursiveAddFields(el, {});
                  });
                }
              }
            }
          }
        })();
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  return newEnt;
}

/**
 * Validate the GraphQL naming convetions & protect specific fields.
 * 
 * @param {any} key 
 * @returns the valid name
 */
function getValidName(key) {
  var nkey = key;
  var NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
  if (!NAME_RX.test(nkey)) {
    nkey = ('_' + nkey).replace(/-/g, '_').replace(/:/g, '_');
    if (_verbose) console.log(colorized.out('Object with key "' + key + '" breaks GraphQL naming convention. Renamed to "' + nkey + '"', colorized.color.Font.FgRed));
  }
  if (restrictedNodeFields.includes(nkey)) {
    if (_verbose) console.log('Restricted field found for ' + nkey + '. Prefixing with ' + conflictFieldPrefix + '.');
    nkey = '' + conflictFieldPrefix + nkey;
  }
  return nkey;
}