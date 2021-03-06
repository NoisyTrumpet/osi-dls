'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var SVG = _interopDefault(require('react-inlinesvg'));
var reactDom = _interopDefault(require('react-dom'));
var formik = require('formik');
var Yup = require('yup');

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var reactResponsive = createCommonjsModule(function (module, exports) {
!function(root, factory) {
     module.exports = factory(React__default) ;
}("undefined" != typeof self ? self : commonjsGlobal, function(__WEBPACK_EXTERNAL_MODULE_1__) {
    return function(modules) {
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.l = !0, module.exports;
        }
        var installedModules = {};
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        }, __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            return __webpack_require__.d(getter, "a", getter), getter;
        }, __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 6);
    }([ function(module, __webpack_exports__, __webpack_require__) {
        function _slicedToArray(arr, i) {
            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
        }
        function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function _iterableToArrayLimit(arr, i) {
            var _arr = [], _n = !0, _d = !1, _e = void 0;
            try {
                for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), 
                !i || _arr.length !== i); _n = !0) ;
            } catch (err) {
                _d = !0, _e = err;
            } finally {
                try {
                    _n || null == _i.return || _i.return();
                } finally {
                    if (_d) throw _e;
                }
            }
            return _arr;
        }
        function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__), __WEBPACK_IMPORTED_MODULE_1_matchmediaquery__ = __webpack_require__(7), __WEBPACK_IMPORTED_MODULE_1_matchmediaquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_matchmediaquery__), __WEBPACK_IMPORTED_MODULE_2_hyphenate_style_name__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects__ = __webpack_require__(9), __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects__), __WEBPACK_IMPORTED_MODULE_4__toQuery__ = __webpack_require__(10), __WEBPACK_IMPORTED_MODULE_5__Context__ = __webpack_require__(5), makeQuery = function(settings) {
            return settings.query || Object(__WEBPACK_IMPORTED_MODULE_4__toQuery__.a)(settings);
        }, hyphenateKeys = function(obj) {
            if (!obj) return null;
            var keys = Object.keys(obj);
            return 0 === keys.length ? null : keys.reduce(function(result, key) {
                return result[Object(__WEBPACK_IMPORTED_MODULE_2_hyphenate_style_name__.a)(key)] = obj[key], 
                result;
            }, {});
        }, useIsUpdate = function() {
            var ref = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useRef(!1);
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                ref.current = !0;
            }, []), ref.current;
        }, useDevice = function(deviceFromProps) {
            var deviceFromContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useContext(__WEBPACK_IMPORTED_MODULE_5__Context__.a), getDevice = function() {
                return hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext);
            }, _React$useState = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getDevice), _React$useState2 = _slicedToArray(_React$useState, 2), device = _React$useState2[0], setDevice = _React$useState2[1];
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                var newDevice = getDevice();
                __WEBPACK_IMPORTED_MODULE_3_shallow_equal_objects___default()(device, newDevice) || setDevice(newDevice);
            }, [ deviceFromProps, deviceFromContext ]), device;
        }, useQuery = function(settings) {
            var getQuery = function() {
                return makeQuery(settings);
            }, _React$useState3 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getQuery), _React$useState4 = _slicedToArray(_React$useState3, 2), query = _React$useState4[0], setQuery = _React$useState4[1];
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                var newQuery = getQuery();
                query !== newQuery && setQuery(newQuery);
            }, [ settings ]), query;
        }, useMatchMedia = function(query, device) {
            var getMatchMedia = function() {
                return __WEBPACK_IMPORTED_MODULE_1_matchmediaquery___default()(query, device || {}, !!device);
            }, _React$useState5 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(getMatchMedia), _React$useState6 = _slicedToArray(_React$useState5, 2), mq = _React$useState6[0], setMq = _React$useState6[1], isUpdate = useIsUpdate();
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                return isUpdate && setMq(getMatchMedia()), function() {
                    mq.dispose();
                };
            }, [ query, device ]), mq;
        }, useMatches = function(mediaQuery) {
            var _React$useState7 = __WEBPACK_IMPORTED_MODULE_0_react___default.a.useState(mediaQuery.matches), _React$useState8 = _slicedToArray(_React$useState7, 2), matches = _React$useState8[0], setMatches = _React$useState8[1];
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                var updateMatches = function() {
                    setMatches(mediaQuery.matches);
                };
                return mediaQuery.addListener(updateMatches), updateMatches(), function() {
                    mediaQuery.removeListener(updateMatches);
                };
            }, [ mediaQuery ]), matches;
        }, useMediaQuery = function(settings, device, onChange) {
            var deviceSettings = useDevice(device), query = useQuery(settings);
            if (!query) throw new Error("Invalid or missing MediaQuery!");
            var mq = useMatchMedia(query, deviceSettings), matches = useMatches(mq), isUpdate = useIsUpdate();
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.useEffect(function() {
                isUpdate && onChange && onChange(matches);
            }, [ matches ]), matches;
        };
        __webpack_exports__.a = useMediaQuery;
    }, function(module, exports) {
        module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
    }, function(module, __webpack_exports__, __webpack_require__) {
        function toHyphenLower(match) {
            return "-" + match.toLowerCase();
        }
        function hyphenateStyleName(name) {
            if (cache.hasOwnProperty(name)) return cache[name];
            var hName = name.replace(uppercasePattern, toHyphenLower);
            return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
        }
        var uppercasePattern = /[A-Z]/g, msPattern = /^ms-/, cache = {};
        __webpack_exports__.a = hyphenateStyleName;
    }, function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(13);
    }, function(module, exports, __webpack_require__) {
        module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    }, function(module, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__), Context = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext();
        __webpack_exports__.a = Context;
    }, function(module, __webpack_exports__, __webpack_require__) {
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        });
        var __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1__Component__ = __webpack_require__(17), __WEBPACK_IMPORTED_MODULE_2__Context__ = __webpack_require__(5);
        __webpack_require__.d(__webpack_exports__, "default", function() {
            return __WEBPACK_IMPORTED_MODULE_1__Component__.a;
        }), __webpack_require__.d(__webpack_exports__, "useMediaQuery", function() {
            return __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__.a;
        }), __webpack_require__.d(__webpack_exports__, "Context", function() {
            return __WEBPACK_IMPORTED_MODULE_2__Context__.a;
        });
    }, function(module, exports, __webpack_require__) {
        function Mql(query, values, forceStatic) {
            function addListener(listener) {
                mql && mql.addListener(listener);
            }
            function removeListener(listener) {
                mql && mql.removeListener(listener);
            }
            function update(evt) {
                self.matches = evt.matches, self.media = evt.media;
            }
            function dispose() {
                mql && mql.removeListener(update);
            }
            var self = this;
            if (dynamicMatch && !forceStatic) {
                var mql = dynamicMatch.call(window, query);
                this.matches = mql.matches, this.media = mql.media, mql.addListener(update);
            } else this.matches = staticMatch(query, values), this.media = query;
            this.addListener = addListener, this.removeListener = removeListener, this.dispose = dispose;
        }
        function matchMedia(query, values, forceStatic) {
            return new Mql(query, values, forceStatic);
        }
        var staticMatch = __webpack_require__(8).match, dynamicMatch = "undefined" != typeof window ? window.matchMedia : null;
        module.exports = matchMedia;
    }, function(module, exports, __webpack_require__) {
        function matchQuery(mediaQuery, values) {
            return parseQuery(mediaQuery).some(function(query) {
                var inverse = query.inverse, typeMatch = "all" === query.type || values.type === query.type;
                if (typeMatch && inverse || !typeMatch && !inverse) return !1;
                var expressionsMatch = query.expressions.every(function(expression) {
                    var feature = expression.feature, modifier = expression.modifier, expValue = expression.value, value = values[feature];
                    if (!value) return !1;
                    switch (feature) {
                      case "orientation":
                      case "scan":
                        return value.toLowerCase() === expValue.toLowerCase();

                      case "width":
                      case "height":
                      case "device-width":
                      case "device-height":
                        expValue = toPx(expValue), value = toPx(value);
                        break;

                      case "resolution":
                        expValue = toDpi(expValue), value = toDpi(value);
                        break;

                      case "aspect-ratio":
                      case "device-aspect-ratio":
                      case "device-pixel-ratio":
                        expValue = toDecimal(expValue), value = toDecimal(value);
                        break;

                      case "grid":
                      case "color":
                      case "color-index":
                      case "monochrome":
                        expValue = parseInt(expValue, 10) || 1, value = parseInt(value, 10) || 0;
                    }
                    switch (modifier) {
                      case "min":
                        return value >= expValue;

                      case "max":
                        return value <= expValue;

                      default:
                        return value === expValue;
                    }
                });
                return expressionsMatch && !inverse || !expressionsMatch && inverse;
            });
        }
        function parseQuery(mediaQuery) {
            return mediaQuery.split(",").map(function(query) {
                query = query.trim();
                var captures = query.match(RE_MEDIA_QUERY), modifier = captures[1], type = captures[2], expressions = captures[3] || "", parsed = {};
                return parsed.inverse = !!modifier && "not" === modifier.toLowerCase(), parsed.type = type ? type.toLowerCase() : "all", 
                expressions = expressions.match(/\([^\)]+\)/g) || [], parsed.expressions = expressions.map(function(expression) {
                    var captures = expression.match(RE_MQ_EXPRESSION), feature = captures[1].toLowerCase().match(RE_MQ_FEATURE);
                    return {
                        modifier: feature[1],
                        feature: feature[2],
                        value: captures[2]
                    };
                }), parsed;
            });
        }
        function toDecimal(ratio) {
            var numbers, decimal = Number(ratio);
            return decimal || (numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/), decimal = numbers[1] / numbers[2]), 
            decimal;
        }
        function toDpi(resolution) {
            var value = parseFloat(resolution);
            switch (String(resolution).match(RE_RESOLUTION_UNIT)[1]) {
              case "dpcm":
                return value / 2.54;

              case "dppx":
                return 96 * value;

              default:
                return value;
            }
        }
        function toPx(length) {
            var value = parseFloat(length);
            switch (String(length).match(RE_LENGTH_UNIT)[1]) {
              case "em":
              case "rem":
                return 16 * value;

              case "cm":
                return 96 * value / 2.54;

              case "mm":
                return 96 * value / 2.54 / 10;

              case "in":
                return 96 * value;

              case "pt":
                return 72 * value;

              case "pc":
                return 72 * value / 12;

              default:
                return value;
            }
        }
        exports.match = matchQuery, exports.parse = parseQuery;
        var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/, RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/, RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
    }, function(module, exports, __webpack_require__) {
        function shallowEqualObjects(objA, objB) {
            if (objA === objB) return !0;
            if (!objA || !objB) return !1;
            var aKeys = Object.keys(objA), bKeys = Object.keys(objB), len = aKeys.length;
            if (bKeys.length !== len) return !1;
            for (var i = 0; i < len; i++) {
                var key = aKeys[i];
                if (objA[key] !== objB[key]) return !1;
            }
            return !0;
        }
        module.exports = shallowEqualObjects;
    }, function(module, __webpack_exports__, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_1__mediaQuery__ = __webpack_require__(11), negate = function(cond) {
            return "not ".concat(cond);
        }, keyVal = function(k, v) {
            var realKey = Object(__WEBPACK_IMPORTED_MODULE_0_hyphenate_style_name__.a)(k);
            return "number" == typeof v && (v = "".concat(v, "px")), !0 === v ? realKey : !1 === v ? negate(realKey) : "(".concat(realKey, ": ").concat(v, ")");
        }, join = function(conds) {
            return conds.join(" and ");
        };
        __webpack_exports__.a = function(obj) {
            var rules = [];
            return Object.keys(__WEBPACK_IMPORTED_MODULE_1__mediaQuery__.a.all).forEach(function(k) {
                var v = obj[k];
                null != v && rules.push(keyVal(k, v));
            }), join(rules);
        };
    }, function(module, __webpack_exports__, __webpack_require__) {
        function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                enumerableOnly && (symbols = symbols.filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                })), keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ownKeys(source, !0).forEach(function(key) {
                    _defineProperty(target, key, source[key]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(source).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
            return target;
        }
        function _defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__), stringOrNumber = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([ __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number ]), matchers = {
            orientation: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf([ "portrait", "landscape" ]),
            scan: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOf([ "progressive", "interlace" ]),
            aspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            deviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            height: stringOrNumber,
            deviceHeight: stringOrNumber,
            width: stringOrNumber,
            deviceWidth: stringOrNumber,
            color: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            colorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            monochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            resolution: stringOrNumber
        }, features = _objectSpread({
            minAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            maxAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            minDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            maxDeviceAspectRatio: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
            minHeight: stringOrNumber,
            maxHeight: stringOrNumber,
            minDeviceHeight: stringOrNumber,
            maxDeviceHeight: stringOrNumber,
            minWidth: stringOrNumber,
            maxWidth: stringOrNumber,
            minDeviceWidth: stringOrNumber,
            maxDeviceWidth: stringOrNumber,
            minColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            maxColor: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            minColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            maxColorIndex: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            minMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            maxMonochrome: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
            minResolution: stringOrNumber,
            maxResolution: stringOrNumber
        }, matchers), types = {
            all: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            grid: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            aural: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            braille: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            handheld: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            print: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            projection: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            screen: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            tty: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            tv: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool,
            embossed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.bool
        }, all = _objectSpread({}, types, {}, features);
        matchers.type = Object.keys(types), __webpack_exports__.a = {
            all: all,
            types: types,
            matchers: matchers,
            features: features
        };
    }, function(module, exports, __webpack_require__) {
        var ReactIs = __webpack_require__(3);
        module.exports = __webpack_require__(14)(ReactIs.isElement, !0);
    }, function(module, exports, __webpack_require__) {
        !function() {
            function isValidElementType(type) {
                return "string" == typeof type || "function" == typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" == typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
            }
            function typeOf(object) {
                if ("object" == typeof object && null !== object) {
                    var $$typeof = object.$$typeof;
                    switch ($$typeof) {
                      case REACT_ELEMENT_TYPE:
                        var type = object.type;
                        switch (type) {
                          case REACT_ASYNC_MODE_TYPE:
                          case REACT_CONCURRENT_MODE_TYPE:
                          case REACT_FRAGMENT_TYPE:
                          case REACT_PROFILER_TYPE:
                          case REACT_STRICT_MODE_TYPE:
                          case REACT_SUSPENSE_TYPE:
                            return type;

                          default:
                            var $$typeofType = type && type.$$typeof;
                            switch ($$typeofType) {
                              case REACT_CONTEXT_TYPE:
                              case REACT_FORWARD_REF_TYPE:
                              case REACT_PROVIDER_TYPE:
                                return $$typeofType;

                              default:
                                return $$typeof;
                            }
                        }

                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PORTAL_TYPE:
                        return $$typeof;
                    }
                }
            }
            function isAsyncMode(object) {
                return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = !0, 
                lowPriorityWarning$1(!1, "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), 
                isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
            }
            function isConcurrentMode(object) {
                return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
            }
            function isContextConsumer(object) {
                return typeOf(object) === REACT_CONTEXT_TYPE;
            }
            function isContextProvider(object) {
                return typeOf(object) === REACT_PROVIDER_TYPE;
            }
            function isElement(object) {
                return "object" == typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
            }
            function isForwardRef(object) {
                return typeOf(object) === REACT_FORWARD_REF_TYPE;
            }
            function isFragment(object) {
                return typeOf(object) === REACT_FRAGMENT_TYPE;
            }
            function isLazy(object) {
                return typeOf(object) === REACT_LAZY_TYPE;
            }
            function isMemo(object) {
                return typeOf(object) === REACT_MEMO_TYPE;
            }
            function isPortal(object) {
                return typeOf(object) === REACT_PORTAL_TYPE;
            }
            function isProfiler(object) {
                return typeOf(object) === REACT_PROFILER_TYPE;
            }
            function isStrictMode(object) {
                return typeOf(object) === REACT_STRICT_MODE_TYPE;
            }
            function isSuspense(object) {
                return typeOf(object) === REACT_SUSPENSE_TYPE;
            }
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
            var hasSymbol = "function" == typeof Symbol && Symbol.for, REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103, REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106, REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107, REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108, REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114, REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109, REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110, REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111, REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111, REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112, REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113, REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120, REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115, REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116, REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117, REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118, lowPriorityWarning = function() {}, printWarning = function(format) {
                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
                var argIndex = 0, message = "Warning: " + format.replace(/%s/g, function() {
                    return args[argIndex++];
                });
                "undefined" != typeof console && console.warn(message);
                try {
                    throw new Error(message);
                } catch (x) {}
            };
            lowPriorityWarning = function(condition, format) {
                if (void 0 === format) throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");
                if (!condition) {
                    for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) args[_key2 - 2] = arguments[_key2];
                    printWarning.apply(void 0, [ format ].concat(args));
                }
            };
            var lowPriorityWarning$1 = lowPriorityWarning, AsyncMode = REACT_ASYNC_MODE_TYPE, ConcurrentMode = REACT_CONCURRENT_MODE_TYPE, ContextConsumer = REACT_CONTEXT_TYPE, ContextProvider = REACT_PROVIDER_TYPE, Element = REACT_ELEMENT_TYPE, ForwardRef = REACT_FORWARD_REF_TYPE, Fragment = REACT_FRAGMENT_TYPE, Lazy = REACT_LAZY_TYPE, Memo = REACT_MEMO_TYPE, Portal = REACT_PORTAL_TYPE, Profiler = REACT_PROFILER_TYPE, StrictMode = REACT_STRICT_MODE_TYPE, Suspense = REACT_SUSPENSE_TYPE, hasWarnedAboutDeprecatedIsAsyncMode = !1;
            exports.typeOf = typeOf, exports.AsyncMode = AsyncMode, exports.ConcurrentMode = ConcurrentMode, 
            exports.ContextConsumer = ContextConsumer, exports.ContextProvider = ContextProvider, 
            exports.Element = Element, exports.ForwardRef = ForwardRef, exports.Fragment = Fragment, 
            exports.Lazy = Lazy, exports.Memo = Memo, exports.Portal = Portal, exports.Profiler = Profiler, 
            exports.StrictMode = StrictMode, exports.Suspense = Suspense, exports.isValidElementType = isValidElementType, 
            exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, 
            exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, 
            exports.isElement = isElement, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, 
            exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, 
            exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense;
        }();
    }, function(module, exports, __webpack_require__) {
        function emptyFunctionThatReturnsNull() {
            return null;
        }
        var ReactIs = __webpack_require__(3), assign = __webpack_require__(15), ReactPropTypesSecret = __webpack_require__(4), checkPropTypes = __webpack_require__(16), has = Function.call.bind(Object.prototype.hasOwnProperty), printWarning = function() {};
        printWarning = function(text) {
            var message = "Warning: " + text;
            "undefined" != typeof console && console.error(message);
            try {
                throw new Error(message);
            } catch (x) {}
        }, module.exports = function(isValidElement, throwOnDirectAccess) {
            function getIteratorFn(maybeIterable) {
                var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
                if ("function" == typeof iteratorFn) return iteratorFn;
            }
            function is(x, y) {
                return x === y ? 0 !== x || 1 / x == 1 / y : x !== x && y !== y;
            }
            function PropTypeError(message) {
                this.message = message, this.stack = "";
            }
            function createChainableTypeChecker(validate) {
                function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
                    if (componentName = componentName || ANONYMOUS, propFullName = propFullName || propName, 
                    secret !== ReactPropTypesSecret) {
                        if (throwOnDirectAccess) {
                            var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                            throw err.name = "Invariant Violation", err;
                        }
                        if ("undefined" != typeof console) {
                            var cacheKey = componentName + ":" + propName;
                            !manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3 && (printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), 
                            manualPropTypeCallCache[cacheKey] = !0, manualPropTypeWarningCount++);
                        }
                    }
                    return null == props[propName] ? isRequired ? new PropTypeError(null === props[propName] ? "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `null`." : "The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `undefined`.") : null : validate(props, propName, componentName, location, propFullName);
                }
                var manualPropTypeCallCache = {}, manualPropTypeWarningCount = 0, chainedCheckType = checkType.bind(null, !1);
                return chainedCheckType.isRequired = checkType.bind(null, !0), chainedCheckType;
            }
            function createPrimitiveTypeChecker(expectedType) {
                function validate(props, propName, componentName, location, propFullName, secret) {
                    var propValue = props[propName];
                    if (getPropType(propValue) !== expectedType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPreciseType(propValue) + "` supplied to `" + componentName + "`, expected `" + expectedType + "`.");
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createArrayOfTypeChecker(typeChecker) {
                function validate(props, propName, componentName, location, propFullName) {
                    if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
                    var propValue = props[propName];
                    if (!Array.isArray(propValue)) {
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected an array.");
                    }
                    for (var i = 0; i < propValue.length; i++) {
                        var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
                        if (error instanceof Error) return error;
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createInstanceTypeChecker(expectedClass) {
                function validate(props, propName, componentName, location, propFullName) {
                    if (!(props[propName] instanceof expectedClass)) {
                        var expectedClassName = expectedClass.name || ANONYMOUS;
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getClassName(props[propName]) + "` supplied to `" + componentName + "`, expected instance of `" + expectedClassName + "`.");
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createEnumTypeChecker(expectedValues) {
                function validate(props, propName, componentName, location, propFullName) {
                    for (var propValue = props[propName], i = 0; i < expectedValues.length; i++) if (is(propValue, expectedValues[i])) return null;
                    var valuesString = JSON.stringify(expectedValues, function(key, value) {
                        return "symbol" === getPreciseType(value) ? String(value) : value;
                    });
                    return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` supplied to `" + componentName + "`, expected one of " + valuesString + ".");
                }
                return Array.isArray(expectedValues) ? createChainableTypeChecker(validate) : (printWarning(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), 
                emptyFunctionThatReturnsNull);
            }
            function createObjectOfTypeChecker(typeChecker) {
                function validate(props, propName, componentName, location, propFullName) {
                    if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
                    var propValue = props[propName], propType = getPropType(propValue);
                    if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected an object.");
                    for (var key in propValue) if (has(propValue, key)) {
                        var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                        if (error instanceof Error) return error;
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createUnionTypeChecker(arrayOfTypeCheckers) {
                function validate(props, propName, componentName, location, propFullName) {
                    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                        if (null == (0, arrayOfTypeCheckers[i])(props, propName, componentName, location, propFullName, ReactPropTypesSecret)) return null;
                    }
                    return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`.");
                }
                if (!Array.isArray(arrayOfTypeCheckers)) return printWarning("Invalid argument supplied to oneOfType, expected an instance of array."), 
                emptyFunctionThatReturnsNull;
                for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                    var checker = arrayOfTypeCheckers[i];
                    if ("function" != typeof checker) return printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."), 
                    emptyFunctionThatReturnsNull;
                }
                return createChainableTypeChecker(validate);
            }
            function createShapeTypeChecker(shapeTypes) {
                function validate(props, propName, componentName, location, propFullName) {
                    var propValue = props[propName], propType = getPropType(propValue);
                    if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
                    for (var key in shapeTypes) {
                        var checker = shapeTypes[key];
                        if (checker) {
                            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                            if (error) return error;
                        }
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function createStrictShapeTypeChecker(shapeTypes) {
                function validate(props, propName, componentName, location, propFullName) {
                    var propValue = props[propName], propType = getPropType(propValue);
                    if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
                    var allKeys = assign({}, props[propName], shapeTypes);
                    for (var key in allKeys) {
                        var checker = shapeTypes[key];
                        if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
                        var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                        if (error) return error;
                    }
                    return null;
                }
                return createChainableTypeChecker(validate);
            }
            function isNode(propValue) {
                switch (typeof propValue) {
                  case "number":
                  case "string":
                  case "undefined":
                    return !0;

                  case "boolean":
                    return !propValue;

                  case "object":
                    if (Array.isArray(propValue)) return propValue.every(isNode);
                    if (null === propValue || isValidElement(propValue)) return !0;
                    var iteratorFn = getIteratorFn(propValue);
                    if (!iteratorFn) return !1;
                    var step, iterator = iteratorFn.call(propValue);
                    if (iteratorFn !== propValue.entries) {
                        for (;!(step = iterator.next()).done; ) if (!isNode(step.value)) return !1;
                    } else for (;!(step = iterator.next()).done; ) {
                        var entry = step.value;
                        if (entry && !isNode(entry[1])) return !1;
                    }
                    return !0;

                  default:
                    return !1;
                }
            }
            function isSymbol(propType, propValue) {
                return "symbol" === propType || !!propValue && ("Symbol" === propValue["@@toStringTag"] || "function" == typeof Symbol && propValue instanceof Symbol);
            }
            function getPropType(propValue) {
                var propType = typeof propValue;
                return Array.isArray(propValue) ? "array" : propValue instanceof RegExp ? "object" : isSymbol(propType, propValue) ? "symbol" : propType;
            }
            function getPreciseType(propValue) {
                if (void 0 === propValue || null === propValue) return "" + propValue;
                var propType = getPropType(propValue);
                if ("object" === propType) {
                    if (propValue instanceof Date) return "date";
                    if (propValue instanceof RegExp) return "regexp";
                }
                return propType;
            }
            function getPostfixForTypeWarning(value) {
                var type = getPreciseType(value);
                switch (type) {
                  case "array":
                  case "object":
                    return "an " + type;

                  case "boolean":
                  case "date":
                  case "regexp":
                    return "a " + type;

                  default:
                    return type;
                }
            }
            function getClassName(propValue) {
                return propValue.constructor && propValue.constructor.name ? propValue.constructor.name : ANONYMOUS;
            }
            var ITERATOR_SYMBOL = "function" == typeof Symbol && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator", ANONYMOUS = "<<anonymous>>", ReactPropTypes = {
                array: createPrimitiveTypeChecker("array"),
                bool: createPrimitiveTypeChecker("boolean"),
                func: createPrimitiveTypeChecker("function"),
                number: createPrimitiveTypeChecker("number"),
                object: createPrimitiveTypeChecker("object"),
                string: createPrimitiveTypeChecker("string"),
                symbol: createPrimitiveTypeChecker("symbol"),
                any: function() {
                    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
                }(),
                arrayOf: createArrayOfTypeChecker,
                element: function() {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName];
                        if (!isValidElement(propValue)) {
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement.");
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }(),
                elementType: function() {
                    function validate(props, propName, componentName, location, propFullName) {
                        var propValue = props[propName];
                        if (!ReactIs.isValidElementType(propValue)) {
                            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPropType(propValue) + "` supplied to `" + componentName + "`, expected a single ReactElement type.");
                        }
                        return null;
                    }
                    return createChainableTypeChecker(validate);
                }(),
                instanceOf: createInstanceTypeChecker,
                node: function() {
                    function validate(props, propName, componentName, location, propFullName) {
                        return isNode(props[propName]) ? null : new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`, expected a ReactNode.");
                    }
                    return createChainableTypeChecker(validate);
                }(),
                objectOf: createObjectOfTypeChecker,
                oneOf: createEnumTypeChecker,
                oneOfType: createUnionTypeChecker,
                shape: createShapeTypeChecker,
                exact: createStrictShapeTypeChecker
            };
            return PropTypeError.prototype = Error.prototype, ReactPropTypes.checkPropTypes = checkPropTypes, 
            ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache, ReactPropTypes.PropTypes = ReactPropTypes, 
            ReactPropTypes;
        };
    }, function(module, exports, __webpack_require__) {
        function toObject(val) {
            if (null === val || void 0 === val) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(val);
        }
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
        var getOwnPropertySymbols = Object.getOwnPropertySymbols, hasOwnProperty = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;
        module.exports = function() {
            try {
                if (!Object.assign) return !1;
                var test1 = new String("abc");
                if (test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) return !1;
                for (var test2 = {}, i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
                if ("0123456789" !== Object.getOwnPropertyNames(test2).map(function(n) {
                    return test2[n];
                }).join("")) return !1;
                var test3 = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                    test3[letter] = letter;
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, test3)).join("");
            } catch (err) {
                return !1;
            }
        }() ? Object.assign : function(target, source) {
            for (var from, symbols, to = toObject(target), s = 1; s < arguments.length; s++) {
                from = Object(arguments[s]);
                for (var key in from) hasOwnProperty.call(from, key) && (to[key] = from[key]);
                if (getOwnPropertySymbols) {
                    symbols = getOwnPropertySymbols(from);
                    for (var i = 0; i < symbols.length; i++) propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
                }
            }
            return to;
        };
    }, function(module, exports, __webpack_require__) {
        function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
            for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
                var error;
                try {
                    if ("function" != typeof typeSpecs[typeSpecName]) {
                        var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
                        throw err.name = "Invariant Violation", err;
                    }
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                } catch (ex) {
                    error = ex;
                }
                if (!error || error instanceof Error || printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), 
                error instanceof Error && !(error.message in loggedTypeFailures)) {
                    loggedTypeFailures[error.message] = !0;
                    var stack = getStack ? getStack() : "";
                    printWarning("Failed " + location + " type: " + error.message + (null != stack ? stack : ""));
                }
            }
        }
        var printWarning = function() {}, ReactPropTypesSecret = __webpack_require__(4), loggedTypeFailures = {}, has = Function.call.bind(Object.prototype.hasOwnProperty);
        printWarning = function(text) {
            var message = "Warning: " + text;
            "undefined" != typeof console && console.error(message);
            try {
                throw new Error(message);
            } catch (x) {}
        }, checkPropTypes.resetWarningCache = function() {
            loggedTypeFailures = {};
        }, module.exports = checkPropTypes;
    }, function(module, __webpack_exports__, __webpack_require__) {
        function _objectWithoutProperties(source, excluded) {
            if (null == source) return {};
            var key, i, target = _objectWithoutPropertiesLoose(source, excluded);
            if (Object.getOwnPropertySymbols) {
                var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
                for (i = 0; i < sourceSymbolKeys.length; i++) key = sourceSymbolKeys[i], excluded.indexOf(key) >= 0 || Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }
        function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key, i, target = {}, sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
        }
        function MediaQuery(_ref) {
            var children = _ref.children, device = _ref.device, onChange = _ref.onChange, settings = _objectWithoutProperties(_ref, [ "children", "device", "onChange" ]), matches = Object(__WEBPACK_IMPORTED_MODULE_0__useMediaQuery__.a)(settings, device, onChange);
            return "function" == typeof children ? children(matches) : matches ? children : null;
        }
        __webpack_exports__.a = MediaQuery;
        var __WEBPACK_IMPORTED_MODULE_0__useMediaQuery__ = __webpack_require__(0);
    } ]);
});

});

var reactResponsive$1 = /*@__PURE__*/unwrapExports(reactResponsive);

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var InlineSVG = function InlineSVG(_ref) {
  var path = _ref.path,
      title = _ref.title,
      description = _ref.description,
      role = _ref.role,
      focus = _ref.focus,
      className = _ref.className,
      preProcessor = _ref.preProcessor,
      rest = _objectWithoutProperties(_ref, ["path", "title", "description", "role", "focus", "className", "preProcessor"]);

  return /*#__PURE__*/React__default.createElement(SVG, _extends({
    src: path,
    title: title,
    description: description,
    role: role,
    focus: focus.toString(),
    className: className,
    preProcessor: preProcessor // eslint-disable-next-line react/jsx-props-no-spreading

  }, rest));
};

InlineSVG.defaultProps = {
  path: '',
  title: '',
  description: '',
  role: '',
  focus: false,
  preProcessor: null
};
InlineSVG.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  role: PropTypes.string,
  focus: PropTypes.bool,
  className: PropTypes.string,
  preProcessor: PropTypes.func
};

var eventlistener = createCommonjsModule(function (module, exports) {
(function(root,factory){
    {
        module.exports = factory();
    }
}(commonjsGlobal, function () {
	function wrap(standard, fallback) {
		return function (el, evtName, listener, useCapture) {
			if (el[standard]) {
				el[standard](evtName, listener, useCapture);
			} else if (el[fallback]) {
				el[fallback]('on' + evtName, listener);
			}
		}
	}

    return {
		add: wrap('addEventListener', 'attachEvent'),
		remove: wrap('removeEventListener', 'detachEvent')
	};
}));
});

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var lodash_debounce = debounce;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN$1 = 0 / 0;

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim$1 = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex$1 = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary$1 = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal$1 = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt$1 = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf$1 = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$1 = freeGlobal$1 || freeSelf$1 || Function('return this')();

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$1.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max,
    nativeMin$1 = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now$1 = function() {
  return root$1.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce$1(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber$1(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax$1(toNumber$1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin$1(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now$1());
  }

  function debounced() {
    var time = now$1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  if (isObject$1(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce$1(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$1(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$1(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike$1(value) && objectToString$1.call(value) == symbolTag$1);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber$1(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol$1(value)) {
    return NAN$1;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject$1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim$1, '');
  var isBinary = reIsBinary$1.test(value);
  return (isBinary || reIsOctal$1.test(value))
    ? freeParseInt$1(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex$1.test(value) ? NAN$1 : +value);
}

var lodash_throttle = throttle;

var parentScroll = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var style = function style(element, prop) {
  return typeof getComputedStyle !== 'undefined' ? getComputedStyle(element, null).getPropertyValue(prop) : element.style[prop];
};

var overflow = function overflow(element) {
  return style(element, 'overflow') + style(element, 'overflow-y') + style(element, 'overflow-x');
};

var scrollParent = function scrollParent(element) {
  if (!(element instanceof HTMLElement)) {
    return window;
  }

  var parent = element;

  while (parent) {
    if (parent === document.body || parent === document.documentElement) {
      break;
    }

    if (!parent.parentNode) {
      break;
    }

    if (/(scroll|auto)/.test(overflow(parent))) {
      return parent;
    }

    parent = parent.parentNode;
  }

  return window;
};

exports.default = scrollParent;
});

var getElementPosition_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getElementPosition;
/*
* Finds element's position relative to the whole document,
* rather than to the viewport as it is the case with .getBoundingClientRect().
*/
function getElementPosition(element) {
  var rect = element.getBoundingClientRect();

  return {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset
  };
}
});

var inViewport_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inViewport;



var _getElementPosition2 = _interopRequireDefault(getElementPosition_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isHidden = function isHidden(element) {
  return element.offsetParent === null;
};

function inViewport(element, container, customOffset) {
  if (isHidden(element)) {
    return false;
  }

  var top = void 0;
  var bottom = void 0;
  var left = void 0;
  var right = void 0;

  if (typeof container === 'undefined' || container === window) {
    top = window.pageYOffset;
    left = window.pageXOffset;
    bottom = top + window.innerHeight;
    right = left + window.innerWidth;
  } else {
    if (!inViewport(container, window, customOffset)) return false;

    var containerPosition = (0, _getElementPosition2.default)(container);

    top = containerPosition.top;
    left = containerPosition.left;
    bottom = top + container.offsetHeight;
    right = left + container.offsetWidth;
  }

  var elementPosition = (0, _getElementPosition2.default)(element);

  return top <= elementPosition.top + element.offsetHeight + customOffset.top && bottom >= elementPosition.top - customOffset.bottom && left <= elementPosition.left + element.offsetWidth + customOffset.left && right >= elementPosition.left - customOffset.right;
}
});

var LazyLoad_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(PropTypes);







var _lodash2 = _interopRequireDefault(lodash_debounce);



var _lodash4 = _interopRequireDefault(lodash_throttle);



var _parentScroll2 = _interopRequireDefault(parentScroll);



var _inViewport2 = _interopRequireDefault(inViewport_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LazyLoad = function (_Component) {
  _inherits(LazyLoad, _Component);

  function LazyLoad(props) {
    _classCallCheck(this, LazyLoad);

    var _this = _possibleConstructorReturn(this, (LazyLoad.__proto__ || Object.getPrototypeOf(LazyLoad)).call(this, props));

    _this.lazyLoadHandler = _this.lazyLoadHandler.bind(_this);

    if (props.throttle > 0) {
      if (props.debounce) {
        _this.lazyLoadHandler = (0, _lodash2.default)(_this.lazyLoadHandler, props.throttle);
      } else {
        _this.lazyLoadHandler = (0, _lodash4.default)(_this.lazyLoadHandler, props.throttle);
      }
    }

    _this.state = { visible: false };
    return _this;
  }

  _createClass(LazyLoad, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._mounted = true;
      var eventNode = this.getEventNode();

      this.lazyLoadHandler();

      if (this.lazyLoadHandler.flush) {
        this.lazyLoadHandler.flush();
      }

      (0, eventlistener.add)(window, 'resize', this.lazyLoadHandler);
      (0, eventlistener.add)(eventNode, 'scroll', this.lazyLoadHandler);

      if (eventNode !== window) (0, eventlistener.add)(window, 'scroll', this.lazyLoadHandler);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      if (!this.state.visible) {
        this.lazyLoadHandler();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(_nextProps, nextState) {
      return nextState.visible;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._mounted = false;
      if (this.lazyLoadHandler.cancel) {
        this.lazyLoadHandler.cancel();
      }

      this.detachListeners();
    }
  }, {
    key: 'getEventNode',
    value: function getEventNode() {
      return (0, _parentScroll2.default)((0, reactDom.findDOMNode)(this));
    }
  }, {
    key: 'getOffset',
    value: function getOffset() {
      var _props = this.props,
          offset = _props.offset,
          offsetVertical = _props.offsetVertical,
          offsetHorizontal = _props.offsetHorizontal,
          offsetTop = _props.offsetTop,
          offsetBottom = _props.offsetBottom,
          offsetLeft = _props.offsetLeft,
          offsetRight = _props.offsetRight,
          threshold = _props.threshold;


      var _offsetAll = threshold || offset;
      var _offsetVertical = offsetVertical || _offsetAll;
      var _offsetHorizontal = offsetHorizontal || _offsetAll;

      return {
        top: offsetTop || _offsetVertical,
        bottom: offsetBottom || _offsetVertical,
        left: offsetLeft || _offsetHorizontal,
        right: offsetRight || _offsetHorizontal
      };
    }
  }, {
    key: 'lazyLoadHandler',
    value: function lazyLoadHandler() {
      if (!this._mounted) {
        return;
      }
      var offset = this.getOffset();
      var node = (0, reactDom.findDOMNode)(this);
      var eventNode = this.getEventNode();

      if ((0, _inViewport2.default)(node, eventNode, offset)) {
        var onContentVisible = this.props.onContentVisible;


        this.setState({ visible: true }, function () {
          if (onContentVisible) {
            onContentVisible();
          }
        });
        this.detachListeners();
      }
    }
  }, {
    key: 'detachListeners',
    value: function detachListeners() {
      var eventNode = this.getEventNode();

      (0, eventlistener.remove)(window, 'resize', this.lazyLoadHandler);
      (0, eventlistener.remove)(eventNode, 'scroll', this.lazyLoadHandler);

      if (eventNode !== window) (0, eventlistener.remove)(window, 'scroll', this.lazyLoadHandler);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          height = _props2.height,
          width = _props2.width;
      var visible = this.state.visible;


      var elStyles = { height: height, width: width };
      var elClasses = 'LazyLoad' + (visible ? ' is-visible' : '') + (className ? ' ' + className : '');

      return _react2.default.createElement(this.props.elementType, {
        className: elClasses,
        style: elStyles
      }, visible && React__default.Children.only(children));
    }
  }]);

  return LazyLoad;
}(React__default.Component);

exports.default = LazyLoad;


LazyLoad.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  debounce: _propTypes2.default.bool,
  elementType: _propTypes2.default.string,
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  offset: _propTypes2.default.number,
  offsetBottom: _propTypes2.default.number,
  offsetHorizontal: _propTypes2.default.number,
  offsetLeft: _propTypes2.default.number,
  offsetRight: _propTypes2.default.number,
  offsetTop: _propTypes2.default.number,
  offsetVertical: _propTypes2.default.number,
  threshold: _propTypes2.default.number,
  throttle: _propTypes2.default.number,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onContentVisible: _propTypes2.default.func
};

LazyLoad.defaultProps = {
  elementType: 'div',
  debounce: true,
  offset: 0,
  offsetBottom: 0,
  offsetHorizontal: 0,
  offsetLeft: 0,
  offsetRight: 0,
  offsetTop: 0,
  offsetVertical: 0,
  throttle: 250
};
});

var LazyLoad = /*@__PURE__*/unwrapExports(LazyLoad_1);

var ImageSource = function ImageSource(_ref) {
  var srcSet = _ref.srcSet,
      dataSrcSet = _ref.dataSrcSet,
      media = _ref.media;
  return /*#__PURE__*/React__default.createElement("source", {
    srcSet: srcSet,
    "data-srcset": dataSrcSet,
    media: media
  });
};

ImageSource.defaultProps = {};
ImageSource.propTypes = {
  media: PropTypes.string,
  srcSet: PropTypes.string,
  dataSrcSet: PropTypes.string
};

var Image = function Image(_ref) {
  var src = _ref.src,
      dataSrc = _ref.dataSrc,
      alt = _ref.alt,
      className = _ref.className,
      addClass = _ref.addClass,
      children = _ref.children,
      pictureClass = _ref.pictureClass,
      ariaHidden = _ref.ariaHidden,
      lazyLoad = _ref.lazyLoad,
      lazyOffsetVertical = _ref.lazyOffsetVertical,
      lazyOffsetHorizontal = _ref.lazyOffsetHorizontal;
  var classes = classnames(className || 'image', addClass);
  var imageComponent = /*#__PURE__*/React__default.createElement("picture", {
    className: pictureClass
  }, children, /*#__PURE__*/React__default.createElement("img", {
    "data-src": dataSrc,
    src: src,
    alt: alt,
    className: classes,
    "aria-hidden": ariaHidden
  }));
  return lazyLoad ? /*#__PURE__*/React__default.createElement(LazyLoad, {
    className: "lazy-image-container",
    debounce: false,
    offsetHorizontal: lazyOffsetHorizontal,
    offsetVertical: lazyOffsetVertical
  }, imageComponent) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, imageComponent);
};

Image.Source = ImageSource;
Image.defaultProps = {
  lazyLoad: true,
  lazyOffsetVertical: 128,
  lazyOffsetHorizontal: 128
};
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  dataSrc: PropTypes.string,
  className: PropTypes.string,
  addClass: PropTypes.string,
  pictureClass: PropTypes.string,
  ariaHidden: PropTypes.string,

  /** Flag to determine if image should be lazily loaded (Gets wrapped with https://www.npmjs.com/package/react-lazy-load) */
  lazyLoad: PropTypes.bool,

  /** https://www.npmjs.com/package/react-lazy-load#offsetvertical */
  lazyOffsetVertical: PropTypes.number,

  /** https://www.npmjs.com/package/react-lazy-load#offsethorizontal */
  lazyOffsetHorizontal: PropTypes.number,
  children: function children(props, propName, componentName) {
    var error;
    var prop = props[propName];
    var requiredChildType = 'ImageSource';
    React__default.Children.forEach(prop, function (child) {
      // type.name seems to work for both Class and Functional components
      if (child.type.name !== requiredChildType) {
        error = new Error("`".concat(componentName, "` only accepts children of type `").concat(requiredChildType, "`. Child of type ").concat(child.type.name, " was found."));
      }
    });
    return error;
  }
};

var AccentCircle = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"69px\" height=\"60px\" viewBox=\"0 0 69 60\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>95DE4D24-F79F-4C0E-89DF-9FA6E1DBCE29@1.00x</title>\r\n    <g id=\"Specs\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <g id=\"Feature-Modals\" transform=\"translate(-471.000000, -3020.000000)\">\r\n            <g id=\"Modal-Icon\" transform=\"translate(472.000000, 3021.000000)\">\r\n                <g id=\"Glitter\" stroke=\"#00adbb\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                    <path d=\"M45.4785156,4.91666667 C45.7535793,4.91666667 45.9765625,5.13865881 45.9765625,5.4125\" id=\"Shape\"></path>\r\n                    <path d=\"M44.9804688,5.4125 C44.9804688,5.13865881 45.2034519,4.91666667 45.4785156,4.91666667\" id=\"Shape\"></path>\r\n                    <path d=\"M45.4785156,5.90833333 C45.2034519,5.90833333 44.9804688,5.68634119 44.9804688,5.4125\" id=\"Shape\"></path>\r\n                    <path d=\"M45.9765625,5.4125 C45.9765625,5.68634119 45.7535793,5.90833333 45.4785156,5.90833333\" id=\"Shape\"></path>\r\n                    <path d=\"M0.498046875,45 C0.773110569,45 0.99609375,45.2219921 0.99609375,45.4958333\" id=\"Shape\"></path>\r\n                    <path d=\"M0,45.4958333 C0,45.2219921 0.222983181,45 0.498046875,45\" id=\"Shape\"></path>\r\n                    <path d=\"M0.498046875,45.9916667 C0.222983181,45.9916667 0,45.7696745 0,45.4958333\" id=\"Shape\"></path>\r\n                    <path d=\"M0.99609375,45.4958333 C0.99609375,45.7696745 0.773110569,45.9916667 0.498046875,45.9916667\" id=\"Shape\"></path>\r\n                    <line x1=\"8.95703125\" y1=\"53.975\" x2=\"8.95703125\" y2=\"57.9416667\" id=\"Shape\"></line>\r\n                    <line x1=\"10.9492188\" y1=\"55.9583333\" x2=\"6.96484375\" y2=\"55.9583333\" id=\"Shape\"></line>\r\n                    <line x1=\"34.9921875\" y1=\"0\" x2=\"34.9921875\" y2=\"3.96666667\" id=\"Shape\"></line>\r\n                    <line x1=\"36.984375\" y1=\"1.98333333\" x2=\"33\" y2=\"1.98333333\" id=\"Shape\"></line>\r\n                    <path d=\"M57.1386719,53 C57.4137356,53 57.6367188,53.2219921 57.6367188,53.4958333\" id=\"Shape\" transform=\"translate(57.802734, 53.661111) scale(-1, 1) translate(-57.802734, -53.661111) \"></path>\r\n                    <path d=\"M57.6367188,53.4958333 C57.6367188,53.2219921 57.8597019,53 58.1347656,53\" id=\"Shape\" transform=\"translate(58.300781, 53.661111) scale(-1, 1) translate(-58.300781, -53.661111) \"></path>\r\n                    <path d=\"M58.1347656,53.9916667 C57.8597019,53.9916667 57.6367188,53.7696745 57.6367188,53.4958333\" id=\"Shape\" transform=\"translate(58.300781, 54.156944) scale(-1, 1) translate(-58.300781, -54.156944) \"></path>\r\n                    <path d=\"M57.6367188,53.4958333 C57.6367188,53.7696745 57.4137356,53.9916667 57.1386719,53.9916667\" id=\"Shape\" transform=\"translate(57.802734, 54.156944) scale(-1, 1) translate(-57.802734, -54.156944) \"></path>\r\n                    <line x1=\"63.6796875\" y1=\"40.975\" x2=\"63.6796875\" y2=\"44.9416667\" id=\"Shape\" transform=\"translate(64.343750, 42.958333) scale(-1, 1) translate(-64.343750, -42.958333) \"></line>\r\n                    <line x1=\"67\" y1=\"42.9583333\" x2=\"63.015625\" y2=\"42.9583333\" id=\"Shape\" transform=\"translate(65.007812, 43.619444) scale(-1, 1) translate(-65.007812, -43.619444) \"></line>\r\n                </g>\r\n                <circle id=\"Fill\" fill=\"#00adbb\" cx=\"34\" cy=\"34\" r=\"24\"></circle>\r\n            </g>\r\n        </g>\r\n    </g>\r\n</svg>";

var DesktopModalCurveBottom = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"475px\" height=\"29px\" viewBox=\"0 0 475 29\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>eda0f1e8-d214-4325-9808-614dab51bd99@1.00x</title>\r\n    <g id=\"🧩-Symbols\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <g id=\"_Primitives/Curves/Bottom-For-Export/Desktop-Bottom\" fill=\"#FFFFFF\">\r\n            <path d=\"M475,28.94025 C475,18.13825 467.575,8.75625 457.059,6.28425 C421.42,-2.09475 53.58,-2.09475 17.94,6.28425 C7.425,8.75625 1.13686838e-13,18.13825 1.13686838e-13,28.94025 L475,28.94025 Z\" id=\"Curve-Bottom\" transform=\"translate(237.500000, 14.470125) rotate(-180.000000) translate(-237.500000, -14.470125) \"></path>\r\n        </g>\r\n    </g>\r\n</svg>";

var DesktopModalCurveTop = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"475px\" height=\"48px\" viewBox=\"0 0 475 48\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>c674b65f-38f7-4864-b6e5-b7f9d08e9bd8@1.00x</title>\r\n    <g id=\"🧩-Symbols\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <g id=\"_Primitives/Curves/For-Export/Desktop-Top\" fill=\"#FFFFFF\">\r\n            <path d=\"M475,48 C475,37.2289667 467.575,27.8738626 457.059,25.4089493 C421.42,17.0539698 336.539,0 237.5,0 C138.46,0 53.58,17.0539698 17.94,25.4089493 C7.425,27.8738626 0,37.2289667 0,48 L475,48 Z\" id=\"Top\"></path>\r\n        </g>\r\n    </g>\r\n</svg>";

var LogoHoriz = "<svg id=\"logo_horiz\" data-name=\"Layer 2\" xmlns=\"http://www.w3.org/2000/svg\" width=\"4.47in\" height=\"1.3in\" viewBox=\"0 0 321.93 93.45\">\n  <g>\n    <g>\n      <g>\n        <path d=\"M147.92,92.56a23.79,23.79,0,0,1-8.28-1.4,17.91,17.91,0,0,1-6.36-4,18.5,18.5,0,0,1-4.2-6.45,24.23,24.23,0,0,1-1.56-9,23.94,23.94,0,0,1,1.59-9.08,17.63,17.63,0,0,1,10.63-10.32,25.14,25.14,0,0,1,16.37,0,18.44,18.44,0,0,1,6.42,3.92,18.09,18.09,0,0,1,4.28,6.4,24,24,0,0,1,1.6,9.08,24.81,24.81,0,0,1-1.57,9.15,17.89,17.89,0,0,1-4.21,6.42,18.21,18.21,0,0,1-6.4,3.91A24.43,24.43,0,0,1,147.92,92.56Zm.08-37a11.91,11.91,0,0,0-9.53,4.3c-2.29,2.71-3.45,6.7-3.45,11.84s1.14,9.13,3.39,11.85a12.63,12.63,0,0,0,19.11,0c2.24-2.73,3.38-6.71,3.38-11.85s-1.12-9-3.33-11.76A11.73,11.73,0,0,0,148,55.57Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #00adbb\"/>\n        <path d=\"M183.23,92.49a32.93,32.93,0,0,1-5.27-.4A13.61,13.61,0,0,1,174.22,91a5.39,5.39,0,0,1-1.93-1.48,2.45,2.45,0,0,1-.48-1.57,3,3,0,0,1,.3-1.47,34.77,34.77,0,0,0,3.32,1.29,23,23,0,0,0,7.28,1.07,10.11,10.11,0,0,0,4.88-1,4.86,4.86,0,0,0,2.72-4.3,4.7,4.7,0,0,0-2.17-4,10.43,10.43,0,0,0-4-1.4L182,77.66c-3.77-.74-6.53-1.85-8.23-3.3-1.43-1.23-2.13-3-2.13-5.52a7.3,7.3,0,0,1,3.25-6.25,14.11,14.11,0,0,1,4.25-1.88,22.33,22.33,0,0,1,5.83-.71,27.31,27.31,0,0,1,4.65.37,13.67,13.67,0,0,1,3.44,1,4.65,4.65,0,0,1,1.75,1.29,1.84,1.84,0,0,1,.4,1.25,3.64,3.64,0,0,1-.23,1.42c-.84-.29-1.78-.55-2.78-.79s-2-.44-3.06-.6a20.39,20.39,0,0,0-3.06-.25,12.8,12.8,0,0,0-4.87.77,4.66,4.66,0,0,0-3.09,4.39,4.42,4.42,0,0,0,2,3.69,10.49,10.49,0,0,0,3.84,1.41l2.25.51c5.21,1.19,7.61,2.69,8.71,3.74a6.81,6.81,0,0,1,2.09,5.24,7.49,7.49,0,0,1-3.05,6.47C191.6,91.62,188,92.49,183.23,92.49Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #00adbb\"/>\n        <path d=\"M206.4,91.83a14.61,14.61,0,0,1-2.43-.18,2.23,2.23,0,0,1-.93-.35,1.38,1.38,0,0,1-.43-.61,5,5,0,0,1-.26-1.88V61.25a17.61,17.61,0,0,1,2.72-.22,14.4,14.4,0,0,1,2.42.18,2.23,2.23,0,0,1,.94.35,1.46,1.46,0,0,1,.44.62,5.14,5.14,0,0,1,.25,1.87V91.61A17.61,17.61,0,0,1,206.4,91.83Zm-.67-39.72a3.67,3.67,0,0,1-2.91-1.06,3.58,3.58,0,0,1-1.06-2.7,3.65,3.65,0,0,1,1.06-2.7,4.57,4.57,0,0,1,5.83,0,4,4,0,0,1,0,5.4A3.7,3.7,0,0,1,205.73,52.11Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #00adbb\"/>\n      </g>\n      <g>\n        <path d=\"M220,90.69a6,6,0,0,1-1.66-4.46V47.39c.54-.09,1.32-.22,2.32-.36a20.28,20.28,0,0,1,3-.23,8.09,8.09,0,0,1,4.79,1.11q1.47,1.11,1.47,4.35V83H247.6a10.68,10.68,0,0,1,.84,1.91,7.93,7.93,0,0,1,.41,2.58,5.41,5.41,0,0,1-1.07,3.65,3.67,3.67,0,0,1-2.91,1.21H224.46A6,6,0,0,1,220,90.69Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #ffa400\"/>\n        <path d=\"M259.24,92.71q-3.47,0-4.83-1.18c-.91-.78-1.36-2.21-1.36-4.27V47.39c.54-.09,1.31-.22,2.32-.36a20.8,20.8,0,0,1,3.06-.23c2.21,0,3.79.37,4.75,1.11s1.44,2.19,1.44,4.35V92.12a16.27,16.27,0,0,1-2.29.41A25.43,25.43,0,0,1,259.24,92.71Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #ffa400\"/>\n        <path d=\"M302.64,47.54a9.16,9.16,0,0,1,1.18,4.5,5.26,5.26,0,0,1-1.07,3.61,3.83,3.83,0,0,1-3,1.18H283.41v9.65h16.73A14.83,14.83,0,0,1,301,68.4a7.41,7.41,0,0,1,.41,2.57,5,5,0,0,1-1.11,3.58,3.9,3.9,0,0,1-2.94,1.14H283.56V92.12a16.55,16.55,0,0,1-2.29.41,25.43,25.43,0,0,1-3.09.18q-3.46,0-4.83-1.18c-.91-.78-1.36-2.21-1.36-4.27V53.66a5.72,5.72,0,0,1,6.11-6.12Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #ffa400\"/>\n        <path d=\"M309.61,90.69A6,6,0,0,1,308,86.23V53.66a5.72,5.72,0,0,1,6.11-6.12h24.4a10.07,10.07,0,0,1,.81,1.84,8.13,8.13,0,0,1,.36,2.51,5.26,5.26,0,0,1-1.06,3.61,3.83,3.83,0,0,1-3,1.18H319.22v8.25h17.1a10.07,10.07,0,0,1,.81,1.84,8.13,8.13,0,0,1,.37,2.51,5.25,5.25,0,0,1-1,3.57,3.75,3.75,0,0,1-3,1.15h-14.3v9.21h19.53a9.08,9.08,0,0,1,1.18,4.49,5,5,0,0,1-1.07,3.54,3.84,3.84,0,0,1-2.91,1.1H314.06A6,6,0,0,1,309.61,90.69Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #ffa400\"/>\n      </g>\n    </g>\n    <g>\n      <path d=\"M42.59,60.77c-.42-2,.76-2.83,2.59-2A8,8,0,0,1,50,65.49c.4,4.17-.87,8.4,0,12.6a2.72,2.72,0,0,0,3.24,2.13,9.53,9.53,0,0,0,6-3.68A107.69,107.69,0,0,0,66.72,66c2.8-4.5,3.78-9.82,4.69-15.12.34-2,.58-4,1.07-5.91A4.32,4.32,0,0,1,74,42.76c1.18-.87,2.25-.41,2.52,1.15,1.33,9.08.31,19.93-3.16,28a51.63,51.63,0,0,1-5,8.36l-.58.82c5.72-4.9,11-13,13.52-26.43V22.3H59.37v0A12.66,12.66,0,0,0,47.44,35v1.76h0v18H18V76.6h0A12.65,12.65,0,0,0,30.65,88.52h7.54a127.87,127.87,0,0,1,3-14.42C42.62,69.81,43.62,65.52,42.59,60.77Zm23.7-15.11c.55-.95,1.49-.68,2,.38a12.92,12.92,0,0,1,.36,10.83c-.46,1.26-.84,2.55-1.35,4.08-.82-4.32-1.85-7.93-2-12.1A6.64,6.64,0,0,1,66.29,45.66Zm-2,8.6c.62,1.62,1.76,5.94,2,6.41.76,1.85-.34,3.1-1,4.45a12.83,12.83,0,0,1-2.05,2.62c-.64-3.85-1.32-7.69-1.86-11.54C61.11,54.52,63.1,51.35,64.33,54.26ZM58.5,61.54C59.92,59,61.92,65.36,62.39,67a3.19,3.19,0,0,1-.57,3.15c-.6.82-1.29,1.6-2.06,2.6C59,69.4,57.07,64.11,58.5,61.54Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #00adbb\"/>\n      <path d=\"M111.43,66.9A12.66,12.66,0,0,0,98.79,54.69H81.27c-2.47,13.42-7.8,21.54-13.52,26.44-1.56,2.19-3,4.29-4.2,6.36-4.92,8.36-6.61,16.23-1.47,28,.09.15.12.31.23.31h6.76a12.66,12.66,0,0,0,12.2-12.65V93h0V88.52h30.17V66.9Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #ffa400\"/>\n    </g>\n  </g>\n</svg>";

var LogoHorizBlack = "<svg id=\"Layer_2\" data-name=\"Layer 2\" xmlns=\"http://www.w3.org/2000/svg\" width=\"4.47in\" height=\"1.3in\" viewBox=\"0 0 321.93 93.45\">\r\n  <g>\r\n    <g>\r\n      <g>\r\n        <path d=\"M147.92,92.56a23.79,23.79,0,0,1-8.28-1.4,17.91,17.91,0,0,1-6.36-4,18.5,18.5,0,0,1-4.2-6.45,24.23,24.23,0,0,1-1.56-9,23.94,23.94,0,0,1,1.59-9.08,17.63,17.63,0,0,1,10.63-10.32,25.14,25.14,0,0,1,16.37,0,18.44,18.44,0,0,1,6.42,3.92,18.09,18.09,0,0,1,4.28,6.4,24,24,0,0,1,1.6,9.08,24.81,24.81,0,0,1-1.57,9.15,17.89,17.89,0,0,1-4.21,6.42,18.21,18.21,0,0,1-6.4,3.91A24.43,24.43,0,0,1,147.92,92.56Zm.08-37a11.91,11.91,0,0,0-9.53,4.3c-2.29,2.71-3.45,6.7-3.45,11.84s1.14,9.13,3.39,11.85a12.63,12.63,0,0,0,19.11,0c2.24-2.73,3.38-6.71,3.38-11.85s-1.12-9-3.33-11.76A11.73,11.73,0,0,0,148,55.57Z\" transform=\"translate(-18 -22.3)\"/>\r\n        <path d=\"M183.23,92.49a32.93,32.93,0,0,1-5.27-.4A13.61,13.61,0,0,1,174.22,91a5.39,5.39,0,0,1-1.93-1.48,2.45,2.45,0,0,1-.48-1.57,3,3,0,0,1,.3-1.47,34.77,34.77,0,0,0,3.32,1.29,23,23,0,0,0,7.28,1.07,10.11,10.11,0,0,0,4.88-1,4.86,4.86,0,0,0,2.72-4.3,4.7,4.7,0,0,0-2.17-4,10.43,10.43,0,0,0-4-1.4L182,77.66c-3.77-.74-6.53-1.85-8.23-3.3-1.43-1.23-2.13-3-2.13-5.52a7.3,7.3,0,0,1,3.25-6.25,14.11,14.11,0,0,1,4.25-1.88,22.33,22.33,0,0,1,5.83-.71,27.31,27.31,0,0,1,4.65.37,13.67,13.67,0,0,1,3.44,1,4.65,4.65,0,0,1,1.75,1.29,1.84,1.84,0,0,1,.4,1.25,3.64,3.64,0,0,1-.23,1.42c-.84-.29-1.78-.55-2.78-.79s-2-.44-3.06-.6a20.39,20.39,0,0,0-3.06-.25,12.8,12.8,0,0,0-4.87.77,4.66,4.66,0,0,0-3.09,4.39,4.42,4.42,0,0,0,2,3.69,10.49,10.49,0,0,0,3.84,1.41l2.25.51c5.21,1.19,7.61,2.69,8.71,3.74a6.81,6.81,0,0,1,2.09,5.24,7.49,7.49,0,0,1-3.05,6.47C191.6,91.62,188,92.49,183.23,92.49Z\" transform=\"translate(-18 -22.3)\"/>\r\n        <path d=\"M206.4,91.83a14.61,14.61,0,0,1-2.43-.18,2.23,2.23,0,0,1-.93-.35,1.38,1.38,0,0,1-.43-.61,5,5,0,0,1-.26-1.88V61.25a17.61,17.61,0,0,1,2.72-.22,14.4,14.4,0,0,1,2.42.18,2.23,2.23,0,0,1,.94.35,1.46,1.46,0,0,1,.44.62,5.14,5.14,0,0,1,.25,1.87V91.61A17.61,17.61,0,0,1,206.4,91.83Zm-.67-39.72a3.67,3.67,0,0,1-2.91-1.06,3.58,3.58,0,0,1-1.06-2.7,3.65,3.65,0,0,1,1.06-2.7,4.57,4.57,0,0,1,5.83,0,4,4,0,0,1,0,5.4A3.7,3.7,0,0,1,205.73,52.11Z\" transform=\"translate(-18 -22.3)\"/>\r\n      </g>\r\n      <g>\r\n        <path d=\"M220,90.69a6,6,0,0,1-1.66-4.46V47.39c.54-.09,1.32-.22,2.32-.36a20.28,20.28,0,0,1,3-.23,8.09,8.09,0,0,1,4.79,1.11q1.47,1.11,1.47,4.35V83H247.6a10.68,10.68,0,0,1,.84,1.91,7.93,7.93,0,0,1,.41,2.58,5.41,5.41,0,0,1-1.07,3.65,3.67,3.67,0,0,1-2.91,1.21H224.46A6,6,0,0,1,220,90.69Z\" transform=\"translate(-18 -22.3)\"/>\r\n        <path d=\"M259.24,92.71q-3.47,0-4.83-1.18c-.91-.78-1.36-2.21-1.36-4.27V47.39c.54-.09,1.31-.22,2.32-.36a20.8,20.8,0,0,1,3.06-.23c2.21,0,3.79.37,4.75,1.11s1.44,2.19,1.44,4.35V92.12a16.27,16.27,0,0,1-2.29.41A25.43,25.43,0,0,1,259.24,92.71Z\" transform=\"translate(-18 -22.3)\"/>\r\n        <path d=\"M302.64,47.54a9.16,9.16,0,0,1,1.18,4.5,5.26,5.26,0,0,1-1.07,3.61,3.83,3.83,0,0,1-3,1.18H283.41v9.65h16.73A14.83,14.83,0,0,1,301,68.4a7.41,7.41,0,0,1,.41,2.57,5,5,0,0,1-1.11,3.58,3.9,3.9,0,0,1-2.94,1.14H283.56V92.12a16.55,16.55,0,0,1-2.29.41,25.43,25.43,0,0,1-3.09.18q-3.46,0-4.83-1.18c-.91-.78-1.36-2.21-1.36-4.27V53.66a5.72,5.72,0,0,1,6.11-6.12Z\" transform=\"translate(-18 -22.3)\"/>\r\n        <path d=\"M309.61,90.69A6,6,0,0,1,308,86.23V53.66a5.72,5.72,0,0,1,6.11-6.12h24.4a10.07,10.07,0,0,1,.81,1.84,8.13,8.13,0,0,1,.36,2.51,5.26,5.26,0,0,1-1.06,3.61,3.83,3.83,0,0,1-3,1.18H319.22v8.25h17.1a10.07,10.07,0,0,1,.81,1.84,8.13,8.13,0,0,1,.37,2.51,5.25,5.25,0,0,1-1,3.57,3.75,3.75,0,0,1-3,1.15h-14.3v9.21h19.53a9.08,9.08,0,0,1,1.18,4.49,5,5,0,0,1-1.07,3.54,3.84,3.84,0,0,1-2.91,1.1H314.06A6,6,0,0,1,309.61,90.69Z\" transform=\"translate(-18 -22.3)\"/>\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <path d=\"M42.59,60.77c-.42-2,.76-2.83,2.59-2A8,8,0,0,1,50,65.49c.4,4.17-.87,8.4,0,12.6a2.72,2.72,0,0,0,3.24,2.13,9.53,9.53,0,0,0,6-3.68A107.69,107.69,0,0,0,66.72,66c2.8-4.5,3.78-9.82,4.69-15.12.34-2,.58-4,1.07-5.91A4.32,4.32,0,0,1,74,42.76c1.18-.87,2.25-.41,2.52,1.15,1.33,9.08.31,19.93-3.16,28a51.63,51.63,0,0,1-5,8.36l-.58.82c5.72-4.9,11-13,13.52-26.43V22.3H59.37v0A12.66,12.66,0,0,0,47.44,35v1.76h0v18H18V76.6h0A12.65,12.65,0,0,0,30.65,88.52h7.54a127.87,127.87,0,0,1,3-14.42C42.62,69.81,43.62,65.52,42.59,60.77Zm23.7-15.11c.55-.95,1.49-.68,2,.38a12.92,12.92,0,0,1,.36,10.83c-.46,1.26-.84,2.55-1.35,4.08-.82-4.32-1.85-7.93-2-12.1A6.64,6.64,0,0,1,66.29,45.66Zm-2,8.6c.62,1.62,1.76,5.94,2,6.41.76,1.85-.34,3.1-1,4.45a12.83,12.83,0,0,1-2.05,2.62c-.64-3.85-1.32-7.69-1.86-11.54C61.11,54.52,63.1,51.35,64.33,54.26ZM58.5,61.54C59.92,59,61.92,65.36,62.39,67a3.19,3.19,0,0,1-.57,3.15c-.6.82-1.29,1.6-2.06,2.6C59,69.4,57.07,64.11,58.5,61.54Z\" transform=\"translate(-18 -22.3)\"/>\r\n      <path d=\"M111.43,66.9A12.66,12.66,0,0,0,98.79,54.69H81.27c-2.47,13.42-7.8,21.54-13.52,26.44-1.56,2.19-3,4.29-4.2,6.36-4.92,8.36-6.61,16.23-1.47,28,.09.15.12.31.23.31h6.76a12.66,12.66,0,0,0,12.2-12.65V93h0V88.52h30.17V66.9Z\" transform=\"translate(-18 -22.3)\"/>\r\n    </g>\r\n  </g>\r\n</svg>";

var LogoHorizWhite = "<svg id=\"Layer_2\" data-name=\"Layer 2\" xmlns=\"http://www.w3.org/2000/svg\" width=\"4.47in\" height=\"1.3in\" viewBox=\"0 0 321.93 93.45\">\r\n  <g>\r\n    <g>\r\n      <g>\r\n        <path d=\"M147.92,92.56a23.79,23.79,0,0,1-8.28-1.4,17.91,17.91,0,0,1-6.36-4,18.5,18.5,0,0,1-4.2-6.45,24.23,24.23,0,0,1-1.56-9,23.94,23.94,0,0,1,1.59-9.08,17.63,17.63,0,0,1,10.63-10.32,25.14,25.14,0,0,1,16.37,0,18.44,18.44,0,0,1,6.42,3.92,18.09,18.09,0,0,1,4.28,6.4,24,24,0,0,1,1.6,9.08,24.81,24.81,0,0,1-1.57,9.15,17.89,17.89,0,0,1-4.21,6.42,18.21,18.21,0,0,1-6.4,3.91A24.43,24.43,0,0,1,147.92,92.56Zm.08-37a11.91,11.91,0,0,0-9.53,4.3c-2.29,2.71-3.45,6.7-3.45,11.84s1.14,9.13,3.39,11.85a12.63,12.63,0,0,0,19.11,0c2.24-2.73,3.38-6.71,3.38-11.85s-1.12-9-3.33-11.76A11.73,11.73,0,0,0,148,55.57Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #fff\"/>\r\n        <path d=\"M183.23,92.49a32.93,32.93,0,0,1-5.27-.4A13.61,13.61,0,0,1,174.22,91a5.39,5.39,0,0,1-1.93-1.48,2.45,2.45,0,0,1-.48-1.57,3,3,0,0,1,.3-1.47,34.77,34.77,0,0,0,3.32,1.29,23,23,0,0,0,7.28,1.07,10.11,10.11,0,0,0,4.88-1,4.86,4.86,0,0,0,2.72-4.3,4.7,4.7,0,0,0-2.17-4,10.43,10.43,0,0,0-4-1.4L182,77.66c-3.77-.74-6.53-1.85-8.23-3.3-1.43-1.23-2.13-3-2.13-5.52a7.3,7.3,0,0,1,3.25-6.25,14.11,14.11,0,0,1,4.25-1.88,22.33,22.33,0,0,1,5.83-.71,27.31,27.31,0,0,1,4.65.37,13.67,13.67,0,0,1,3.44,1,4.65,4.65,0,0,1,1.75,1.29,1.84,1.84,0,0,1,.4,1.25,3.64,3.64,0,0,1-.23,1.42c-.84-.29-1.78-.55-2.78-.79s-2-.44-3.06-.6a20.39,20.39,0,0,0-3.06-.25,12.8,12.8,0,0,0-4.87.77,4.66,4.66,0,0,0-3.09,4.39,4.42,4.42,0,0,0,2,3.69,10.49,10.49,0,0,0,3.84,1.41l2.25.51c5.21,1.19,7.61,2.69,8.71,3.74a6.81,6.81,0,0,1,2.09,5.24,7.49,7.49,0,0,1-3.05,6.47C191.6,91.62,188,92.49,183.23,92.49Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #fff\"/>\r\n        <path d=\"M206.4,91.83a14.61,14.61,0,0,1-2.43-.18,2.23,2.23,0,0,1-.93-.35,1.38,1.38,0,0,1-.43-.61,5,5,0,0,1-.26-1.88V61.25a17.61,17.61,0,0,1,2.72-.22,14.4,14.4,0,0,1,2.42.18,2.23,2.23,0,0,1,.94.35,1.46,1.46,0,0,1,.44.62,5.14,5.14,0,0,1,.25,1.87V91.61A17.61,17.61,0,0,1,206.4,91.83Zm-.67-39.72a3.67,3.67,0,0,1-2.91-1.06,3.58,3.58,0,0,1-1.06-2.7,3.65,3.65,0,0,1,1.06-2.7,4.57,4.57,0,0,1,5.83,0,4,4,0,0,1,0,5.4A3.7,3.7,0,0,1,205.73,52.11Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #fff\"/>\r\n      </g>\r\n      <g>\r\n        <path d=\"M220,90.69a6,6,0,0,1-1.66-4.46V47.39c.54-.09,1.32-.22,2.32-.36a20.28,20.28,0,0,1,3-.23,8.09,8.09,0,0,1,4.79,1.11q1.47,1.11,1.47,4.35V83H247.6a10.68,10.68,0,0,1,.84,1.91,7.93,7.93,0,0,1,.41,2.58,5.41,5.41,0,0,1-1.07,3.65,3.67,3.67,0,0,1-2.91,1.21H224.46A6,6,0,0,1,220,90.69Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #fff\"/>\r\n        <path d=\"M259.24,92.71q-3.47,0-4.83-1.18c-.91-.78-1.36-2.21-1.36-4.27V47.39c.54-.09,1.31-.22,2.32-.36a20.8,20.8,0,0,1,3.06-.23c2.21,0,3.79.37,4.75,1.11s1.44,2.19,1.44,4.35V92.12a16.27,16.27,0,0,1-2.29.41A25.43,25.43,0,0,1,259.24,92.71Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #fff\"/>\r\n        <path d=\"M302.64,47.54a9.16,9.16,0,0,1,1.18,4.5,5.26,5.26,0,0,1-1.07,3.61,3.83,3.83,0,0,1-3,1.18H283.41v9.65h16.73A14.83,14.83,0,0,1,301,68.4a7.41,7.41,0,0,1,.41,2.57,5,5,0,0,1-1.11,3.58,3.9,3.9,0,0,1-2.94,1.14H283.56V92.12a16.55,16.55,0,0,1-2.29.41,25.43,25.43,0,0,1-3.09.18q-3.46,0-4.83-1.18c-.91-.78-1.36-2.21-1.36-4.27V53.66a5.72,5.72,0,0,1,6.11-6.12Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #fff\"/>\r\n        <path d=\"M309.61,90.69A6,6,0,0,1,308,86.23V53.66a5.72,5.72,0,0,1,6.11-6.12h24.4a10.07,10.07,0,0,1,.81,1.84,8.13,8.13,0,0,1,.36,2.51,5.26,5.26,0,0,1-1.06,3.61,3.83,3.83,0,0,1-3,1.18H319.22v8.25h17.1a10.07,10.07,0,0,1,.81,1.84,8.13,8.13,0,0,1,.37,2.51,5.25,5.25,0,0,1-1,3.57,3.75,3.75,0,0,1-3,1.15h-14.3v9.21h19.53a9.08,9.08,0,0,1,1.18,4.49,5,5,0,0,1-1.07,3.54,3.84,3.84,0,0,1-2.91,1.1H314.06A6,6,0,0,1,309.61,90.69Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #fff\"/>\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <path d=\"M42.59,60.77c-.42-2,.76-2.83,2.59-2A8,8,0,0,1,50,65.49c.4,4.17-.87,8.4,0,12.6a2.72,2.72,0,0,0,3.24,2.13,9.53,9.53,0,0,0,6-3.68A107.69,107.69,0,0,0,66.72,66c2.8-4.5,3.78-9.82,4.69-15.12.34-2,.58-4,1.07-5.91A4.32,4.32,0,0,1,74,42.76c1.18-.87,2.25-.41,2.52,1.15,1.33,9.08.31,19.93-3.16,28a51.63,51.63,0,0,1-5,8.36l-.58.82c5.72-4.9,11-13,13.52-26.43V22.3H59.37v0A12.66,12.66,0,0,0,47.44,35v1.76h0v18H18V76.6h0A12.65,12.65,0,0,0,30.65,88.52h7.54a127.87,127.87,0,0,1,3-14.42C42.62,69.81,43.62,65.52,42.59,60.77Zm23.7-15.11c.55-.95,1.49-.68,2,.38a12.92,12.92,0,0,1,.36,10.83c-.46,1.26-.84,2.55-1.35,4.08-.82-4.32-1.85-7.93-2-12.1A6.64,6.64,0,0,1,66.29,45.66Zm-2,8.6c.62,1.62,1.76,5.94,2,6.41.76,1.85-.34,3.1-1,4.45a12.83,12.83,0,0,1-2.05,2.62c-.64-3.85-1.32-7.69-1.86-11.54C61.11,54.52,63.1,51.35,64.33,54.26ZM58.5,61.54C59.92,59,61.92,65.36,62.39,67a3.19,3.19,0,0,1-.57,3.15c-.6.82-1.29,1.6-2.06,2.6C59,69.4,57.07,64.11,58.5,61.54Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #fff\"/>\r\n      <path d=\"M111.43,66.9A12.66,12.66,0,0,0,98.79,54.69H81.27c-2.47,13.42-7.8,21.54-13.52,26.44-1.56,2.19-3,4.29-4.2,6.36-4.92,8.36-6.61,16.23-1.47,28,.09.15.12.31.23.31h6.76a12.66,12.66,0,0,0,12.2-12.65V93h0V88.52h30.17V66.9Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #fff\"/>\r\n    </g>\r\n  </g>\r\n</svg>";

var LogoHorizBlue = "<svg id=\"Layer_2\" data-name=\"Layer 2\" xmlns=\"http://www.w3.org/2000/svg\" width=\"4.47in\" height=\"1.3in\" viewBox=\"0 0 321.93 93.45\">\r\n  <g>\r\n    <g>\r\n      <g>\r\n        <path d=\"M147.92,92.56a23.79,23.79,0,0,1-8.28-1.4,17.91,17.91,0,0,1-6.36-4,18.5,18.5,0,0,1-4.2-6.45,24.23,24.23,0,0,1-1.56-9,23.94,23.94,0,0,1,1.59-9.08,17.63,17.63,0,0,1,10.63-10.32,25.14,25.14,0,0,1,16.37,0,18.44,18.44,0,0,1,6.42,3.92,18.09,18.09,0,0,1,4.28,6.4,24,24,0,0,1,1.6,9.08,24.81,24.81,0,0,1-1.57,9.15,17.89,17.89,0,0,1-4.21,6.42,18.21,18.21,0,0,1-6.4,3.91A24.43,24.43,0,0,1,147.92,92.56Zm.08-37a11.91,11.91,0,0,0-9.53,4.3c-2.29,2.71-3.45,6.7-3.45,11.84s1.14,9.13,3.39,11.85a12.63,12.63,0,0,0,19.11,0c2.24-2.73,3.38-6.71,3.38-11.85s-1.12-9-3.33-11.76A11.73,11.73,0,0,0,148,55.57Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #00adbb\"/>\r\n        <path d=\"M183.23,92.49a32.93,32.93,0,0,1-5.27-.4A13.61,13.61,0,0,1,174.22,91a5.39,5.39,0,0,1-1.93-1.48,2.45,2.45,0,0,1-.48-1.57,3,3,0,0,1,.3-1.47,34.77,34.77,0,0,0,3.32,1.29,23,23,0,0,0,7.28,1.07,10.11,10.11,0,0,0,4.88-1,4.86,4.86,0,0,0,2.72-4.3,4.7,4.7,0,0,0-2.17-4,10.43,10.43,0,0,0-4-1.4L182,77.66c-3.77-.74-6.53-1.85-8.23-3.3-1.43-1.23-2.13-3-2.13-5.52a7.3,7.3,0,0,1,3.25-6.25,14.11,14.11,0,0,1,4.25-1.88,22.33,22.33,0,0,1,5.83-.71,27.31,27.31,0,0,1,4.65.37,13.67,13.67,0,0,1,3.44,1,4.65,4.65,0,0,1,1.75,1.29,1.84,1.84,0,0,1,.4,1.25,3.64,3.64,0,0,1-.23,1.42c-.84-.29-1.78-.55-2.78-.79s-2-.44-3.06-.6a20.39,20.39,0,0,0-3.06-.25,12.8,12.8,0,0,0-4.87.77,4.66,4.66,0,0,0-3.09,4.39,4.42,4.42,0,0,0,2,3.69,10.49,10.49,0,0,0,3.84,1.41l2.25.51c5.21,1.19,7.61,2.69,8.71,3.74a6.81,6.81,0,0,1,2.09,5.24,7.49,7.49,0,0,1-3.05,6.47C191.6,91.62,188,92.49,183.23,92.49Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #00adbb\"/>\r\n        <path d=\"M206.4,91.83a14.61,14.61,0,0,1-2.43-.18,2.23,2.23,0,0,1-.93-.35,1.38,1.38,0,0,1-.43-.61,5,5,0,0,1-.26-1.88V61.25a17.61,17.61,0,0,1,2.72-.22,14.4,14.4,0,0,1,2.42.18,2.23,2.23,0,0,1,.94.35,1.46,1.46,0,0,1,.44.62,5.14,5.14,0,0,1,.25,1.87V91.61A17.61,17.61,0,0,1,206.4,91.83Zm-.67-39.72a3.67,3.67,0,0,1-2.91-1.06,3.58,3.58,0,0,1-1.06-2.7,3.65,3.65,0,0,1,1.06-2.7,4.57,4.57,0,0,1,5.83,0,4,4,0,0,1,0,5.4A3.7,3.7,0,0,1,205.73,52.11Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #00adbb\"/>\r\n      </g>\r\n      <g>\r\n        <path d=\"M220,90.69a6,6,0,0,1-1.66-4.46V47.39c.54-.09,1.32-.22,2.32-.36a20.28,20.28,0,0,1,3-.23,8.09,8.09,0,0,1,4.79,1.11q1.47,1.11,1.47,4.35V83H247.6a10.68,10.68,0,0,1,.84,1.91,7.93,7.93,0,0,1,.41,2.58,5.41,5.41,0,0,1-1.07,3.65,3.67,3.67,0,0,1-2.91,1.21H224.46A6,6,0,0,1,220,90.69Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #00adbb\"/>\r\n        <path d=\"M259.24,92.71q-3.47,0-4.83-1.18c-.91-.78-1.36-2.21-1.36-4.27V47.39c.54-.09,1.31-.22,2.32-.36a20.8,20.8,0,0,1,3.06-.23c2.21,0,3.79.37,4.75,1.11s1.44,2.19,1.44,4.35V92.12a16.27,16.27,0,0,1-2.29.41A25.43,25.43,0,0,1,259.24,92.71Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #00adbb\"/>\r\n        <path d=\"M302.64,47.54a9.16,9.16,0,0,1,1.18,4.5,5.26,5.26,0,0,1-1.07,3.61,3.83,3.83,0,0,1-3,1.18H283.41v9.65h16.73A14.83,14.83,0,0,1,301,68.4a7.41,7.41,0,0,1,.41,2.57,5,5,0,0,1-1.11,3.58,3.9,3.9,0,0,1-2.94,1.14H283.56V92.12a16.55,16.55,0,0,1-2.29.41,25.43,25.43,0,0,1-3.09.18q-3.46,0-4.83-1.18c-.91-.78-1.36-2.21-1.36-4.27V53.66a5.72,5.72,0,0,1,6.11-6.12Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #00adbb\"/>\r\n        <path d=\"M309.61,90.69A6,6,0,0,1,308,86.23V53.66a5.72,5.72,0,0,1,6.11-6.12h24.4a10.07,10.07,0,0,1,.81,1.84,8.13,8.13,0,0,1,.36,2.51,5.26,5.26,0,0,1-1.06,3.61,3.83,3.83,0,0,1-3,1.18H319.22v8.25h17.1a10.07,10.07,0,0,1,.81,1.84,8.13,8.13,0,0,1,.37,2.51,5.25,5.25,0,0,1-1,3.57,3.75,3.75,0,0,1-3,1.15h-14.3v9.21h19.53a9.08,9.08,0,0,1,1.18,4.49,5,5,0,0,1-1.07,3.54,3.84,3.84,0,0,1-2.91,1.1H314.06A6,6,0,0,1,309.61,90.69Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #00adbb\"/>\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <path d=\"M42.59,60.77c-.42-2,.76-2.83,2.59-2A8,8,0,0,1,50,65.49c.4,4.17-.87,8.4,0,12.6a2.72,2.72,0,0,0,3.24,2.13,9.53,9.53,0,0,0,6-3.68A107.69,107.69,0,0,0,66.72,66c2.8-4.5,3.78-9.82,4.69-15.12.34-2,.58-4,1.07-5.91A4.32,4.32,0,0,1,74,42.76c1.18-.87,2.25-.41,2.52,1.15,1.33,9.08.31,19.93-3.16,28a51.63,51.63,0,0,1-5,8.36l-.58.82c5.72-4.9,11-13,13.52-26.43V22.3H59.37v0A12.66,12.66,0,0,0,47.44,35v1.76h0v18H18V76.6h0A12.65,12.65,0,0,0,30.65,88.52h7.54a127.87,127.87,0,0,1,3-14.42C42.62,69.81,43.62,65.52,42.59,60.77Zm23.7-15.11c.55-.95,1.49-.68,2,.38a12.92,12.92,0,0,1,.36,10.83c-.46,1.26-.84,2.55-1.35,4.08-.82-4.32-1.85-7.93-2-12.1A6.64,6.64,0,0,1,66.29,45.66Zm-2,8.6c.62,1.62,1.76,5.94,2,6.41.76,1.85-.34,3.1-1,4.45a12.83,12.83,0,0,1-2.05,2.62c-.64-3.85-1.32-7.69-1.86-11.54C61.11,54.52,63.1,51.35,64.33,54.26ZM58.5,61.54C59.92,59,61.92,65.36,62.39,67a3.19,3.19,0,0,1-.57,3.15c-.6.82-1.29,1.6-2.06,2.6C59,69.4,57.07,64.11,58.5,61.54Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #00adbb\"/>\r\n      <path d=\"M111.43,66.9A12.66,12.66,0,0,0,98.79,54.69H81.27c-2.47,13.42-7.8,21.54-13.52,26.44-1.56,2.19-3,4.29-4.2,6.36-4.92,8.36-6.61,16.23-1.47,28,.09.15.12.31.23.31h6.76a12.66,12.66,0,0,0,12.2-12.65V93h0V88.52h30.17V66.9Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #00adbb\"/>\r\n    </g>\r\n  </g>\r\n</svg>";

var LogoHorizOrange = "<svg id=\"Layer_2\" data-name=\"Layer 2\" xmlns=\"http://www.w3.org/2000/svg\" width=\"4.47in\" height=\"1.3in\" viewBox=\"0 0 321.93 93.45\">\r\n  <g>\r\n    <g>\r\n      <g>\r\n        <path d=\"M147.92,92.56a23.79,23.79,0,0,1-8.28-1.4,17.91,17.91,0,0,1-6.36-4,18.5,18.5,0,0,1-4.2-6.45,24.23,24.23,0,0,1-1.56-9,23.94,23.94,0,0,1,1.59-9.08,17.63,17.63,0,0,1,10.63-10.32,25.14,25.14,0,0,1,16.37,0,18.44,18.44,0,0,1,6.42,3.92,18.09,18.09,0,0,1,4.28,6.4,24,24,0,0,1,1.6,9.08,24.81,24.81,0,0,1-1.57,9.15,17.89,17.89,0,0,1-4.21,6.42,18.21,18.21,0,0,1-6.4,3.91A24.43,24.43,0,0,1,147.92,92.56Zm.08-37a11.91,11.91,0,0,0-9.53,4.3c-2.29,2.71-3.45,6.7-3.45,11.84s1.14,9.13,3.39,11.85a12.63,12.63,0,0,0,19.11,0c2.24-2.73,3.38-6.71,3.38-11.85s-1.12-9-3.33-11.76A11.73,11.73,0,0,0,148,55.57Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #faa31a\"/>\r\n        <path d=\"M183.23,92.49a32.93,32.93,0,0,1-5.27-.4A13.61,13.61,0,0,1,174.22,91a5.39,5.39,0,0,1-1.93-1.48,2.45,2.45,0,0,1-.48-1.57,3,3,0,0,1,.3-1.47,34.77,34.77,0,0,0,3.32,1.29,23,23,0,0,0,7.28,1.07,10.11,10.11,0,0,0,4.88-1,4.86,4.86,0,0,0,2.72-4.3,4.7,4.7,0,0,0-2.17-4,10.43,10.43,0,0,0-4-1.4L182,77.66c-3.77-.74-6.53-1.85-8.23-3.3-1.43-1.23-2.13-3-2.13-5.52a7.3,7.3,0,0,1,3.25-6.25,14.11,14.11,0,0,1,4.25-1.88,22.33,22.33,0,0,1,5.83-.71,27.31,27.31,0,0,1,4.65.37,13.67,13.67,0,0,1,3.44,1,4.65,4.65,0,0,1,1.75,1.29,1.84,1.84,0,0,1,.4,1.25,3.64,3.64,0,0,1-.23,1.42c-.84-.29-1.78-.55-2.78-.79s-2-.44-3.06-.6a20.39,20.39,0,0,0-3.06-.25,12.8,12.8,0,0,0-4.87.77,4.66,4.66,0,0,0-3.09,4.39,4.42,4.42,0,0,0,2,3.69,10.49,10.49,0,0,0,3.84,1.41l2.25.51c5.21,1.19,7.61,2.69,8.71,3.74a6.81,6.81,0,0,1,2.09,5.24,7.49,7.49,0,0,1-3.05,6.47C191.6,91.62,188,92.49,183.23,92.49Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #faa31a\"/>\r\n        <path d=\"M206.4,91.83a14.61,14.61,0,0,1-2.43-.18,2.23,2.23,0,0,1-.93-.35,1.38,1.38,0,0,1-.43-.61,5,5,0,0,1-.26-1.88V61.25a17.61,17.61,0,0,1,2.72-.22,14.4,14.4,0,0,1,2.42.18,2.23,2.23,0,0,1,.94.35,1.46,1.46,0,0,1,.44.62,5.14,5.14,0,0,1,.25,1.87V91.61A17.61,17.61,0,0,1,206.4,91.83Zm-.67-39.72a3.67,3.67,0,0,1-2.91-1.06,3.58,3.58,0,0,1-1.06-2.7,3.65,3.65,0,0,1,1.06-2.7,4.57,4.57,0,0,1,5.83,0,4,4,0,0,1,0,5.4A3.7,3.7,0,0,1,205.73,52.11Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #faa31a\"/>\r\n      </g>\r\n      <g>\r\n        <path d=\"M220,90.69a6,6,0,0,1-1.66-4.46V47.39c.54-.09,1.32-.22,2.32-.36a20.28,20.28,0,0,1,3-.23,8.09,8.09,0,0,1,4.79,1.11q1.47,1.11,1.47,4.35V83H247.6a10.68,10.68,0,0,1,.84,1.91,7.93,7.93,0,0,1,.41,2.58,5.41,5.41,0,0,1-1.07,3.65,3.67,3.67,0,0,1-2.91,1.21H224.46A6,6,0,0,1,220,90.69Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #faa31a\"/>\r\n        <path d=\"M259.24,92.71q-3.47,0-4.83-1.18c-.91-.78-1.36-2.21-1.36-4.27V47.39c.54-.09,1.31-.22,2.32-.36a20.8,20.8,0,0,1,3.06-.23c2.21,0,3.79.37,4.75,1.11s1.44,2.19,1.44,4.35V92.12a16.27,16.27,0,0,1-2.29.41A25.43,25.43,0,0,1,259.24,92.71Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #faa31a\"/>\r\n        <path d=\"M302.64,47.54a9.16,9.16,0,0,1,1.18,4.5,5.26,5.26,0,0,1-1.07,3.61,3.83,3.83,0,0,1-3,1.18H283.41v9.65h16.73A14.83,14.83,0,0,1,301,68.4a7.41,7.41,0,0,1,.41,2.57,5,5,0,0,1-1.11,3.58,3.9,3.9,0,0,1-2.94,1.14H283.56V92.12a16.55,16.55,0,0,1-2.29.41,25.43,25.43,0,0,1-3.09.18q-3.46,0-4.83-1.18c-.91-.78-1.36-2.21-1.36-4.27V53.66a5.72,5.72,0,0,1,6.11-6.12Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #faa31a\"/>\r\n        <path d=\"M309.61,90.69A6,6,0,0,1,308,86.23V53.66a5.72,5.72,0,0,1,6.11-6.12h24.4a10.07,10.07,0,0,1,.81,1.84,8.13,8.13,0,0,1,.36,2.51,5.26,5.26,0,0,1-1.06,3.61,3.83,3.83,0,0,1-3,1.18H319.22v8.25h17.1a10.07,10.07,0,0,1,.81,1.84,8.13,8.13,0,0,1,.37,2.51,5.25,5.25,0,0,1-1,3.57,3.75,3.75,0,0,1-3,1.15h-14.3v9.21h19.53a9.08,9.08,0,0,1,1.18,4.49,5,5,0,0,1-1.07,3.54,3.84,3.84,0,0,1-2.91,1.1H314.06A6,6,0,0,1,309.61,90.69Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #faa31a\"/>\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <path d=\"M42.59,60.77c-.42-2,.76-2.83,2.59-2A8,8,0,0,1,50,65.49c.4,4.17-.87,8.4,0,12.6a2.72,2.72,0,0,0,3.24,2.13,9.53,9.53,0,0,0,6-3.68A107.69,107.69,0,0,0,66.72,66c2.8-4.5,3.78-9.82,4.69-15.12.34-2,.58-4,1.07-5.91A4.32,4.32,0,0,1,74,42.76c1.18-.87,2.25-.41,2.52,1.15,1.33,9.08.31,19.93-3.16,28a51.63,51.63,0,0,1-5,8.36l-.58.82c5.72-4.9,11-13,13.52-26.43V22.3H59.37v0A12.66,12.66,0,0,0,47.44,35v1.76h0v18H18V76.6h0A12.65,12.65,0,0,0,30.65,88.52h7.54a127.87,127.87,0,0,1,3-14.42C42.62,69.81,43.62,65.52,42.59,60.77Zm23.7-15.11c.55-.95,1.49-.68,2,.38a12.92,12.92,0,0,1,.36,10.83c-.46,1.26-.84,2.55-1.35,4.08-.82-4.32-1.85-7.93-2-12.1A6.64,6.64,0,0,1,66.29,45.66Zm-2,8.6c.62,1.62,1.76,5.94,2,6.41.76,1.85-.34,3.1-1,4.45a12.83,12.83,0,0,1-2.05,2.62c-.64-3.85-1.32-7.69-1.86-11.54C61.11,54.52,63.1,51.35,64.33,54.26ZM58.5,61.54C59.92,59,61.92,65.36,62.39,67a3.19,3.19,0,0,1-.57,3.15c-.6.82-1.29,1.6-2.06,2.6C59,69.4,57.07,64.11,58.5,61.54Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #faa31a\"/>\r\n      <path d=\"M111.43,66.9A12.66,12.66,0,0,0,98.79,54.69H81.27c-2.47,13.42-7.8,21.54-13.52,26.44-1.56,2.19-3,4.29-4.2,6.36-4.92,8.36-6.61,16.23-1.47,28,.09.15.12.31.23.31h6.76a12.66,12.66,0,0,0,12.2-12.65V93h0V88.52h30.17V66.9Z\" transform=\"translate(-18 -22.3)\" style=\"fill: #faa31a\"/>\r\n    </g>\r\n  </g>\r\n</svg>";

var LogoRegular = "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"4.27in\" height=\"4.19in\" viewBox=\"0 0 307.61 301.47\">\n  <g>\n    <g>\n      <g>\n        <path d=\"M55.78,331.1a34.43,34.43,0,0,1-12-2,26,26,0,0,1-9.21-5.75A26.77,26.77,0,0,1,28.49,314a35.19,35.19,0,0,1-2.26-13.07,34.75,34.75,0,0,1,2.3-13.15,25.51,25.51,0,0,1,15.39-14.95,34.49,34.49,0,0,1,11.86-2,34.43,34.43,0,0,1,11.85,2,26.84,26.84,0,0,1,9.3,5.68,26,26,0,0,1,6.2,9.27,34.78,34.78,0,0,1,2.31,13.15,35.79,35.79,0,0,1-2.27,13.24,25.66,25.66,0,0,1-6.1,9.3,26.1,26.1,0,0,1-9.27,5.66A35.21,35.21,0,0,1,55.78,331.1Zm.11-53.57a17.27,17.27,0,0,0-13.81,6.23c-3.31,3.93-5,9.7-5,17.15s1.64,13.21,4.89,17.16a17,17,0,0,0,13.79,6.32,17.12,17.12,0,0,0,13.89-6.32c3.25-3.95,4.9-9.73,4.9-17.16s-1.62-13.08-4.83-17A17,17,0,0,0,55.89,277.53Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: rgb(0, 173, 187);\" class=\"svg-elem-1\"></path>\n        <path d=\"M106.91,331a46.39,46.39,0,0,1-7.64-.59,20,20,0,0,1-5.41-1.6,7.61,7.61,0,0,1-2.79-2.15,3.52,3.52,0,0,1-.7-2.27,4.32,4.32,0,0,1,.44-2.12q2.25,1,4.8,1.86a33.64,33.64,0,0,0,10.55,1.55,14.55,14.55,0,0,0,7.06-1.47,7,7,0,0,0,3.94-6.23,6.8,6.8,0,0,0-3.13-5.81,15.46,15.46,0,0,0-5.86-2l-3.11-.62c-5.46-1.07-9.47-2.68-11.92-4.78-2.08-1.79-3.09-4.4-3.09-8a10.72,10.72,0,0,1,1.22-5.19,10.84,10.84,0,0,1,3.49-3.87,20.27,20.27,0,0,1,6.15-2.72,32.4,32.4,0,0,1,8.45-1,40.82,40.82,0,0,1,6.73.53,20.06,20.06,0,0,1,5,1.44,6.77,6.77,0,0,1,2.54,1.86,2.71,2.71,0,0,1,.58,1.82,5.5,5.5,0,0,1-.33,2c-1.23-.42-2.58-.8-4-1.15s-2.94-.63-4.44-.86a28.93,28.93,0,0,0-4.43-.37,18.26,18.26,0,0,0-7,1.12,6.75,6.75,0,0,0-4.49,6.36,6.36,6.36,0,0,0,2.86,5.34,15,15,0,0,0,5.56,2l3.26.74c7.54,1.73,11,3.9,12.61,5.41a9.91,9.91,0,0,1,3,7.6,10.86,10.86,0,0,1-4.42,9.37C119,329.73,113.84,331,106.91,331Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: rgb(0, 173, 187);\" class=\"svg-elem-2\"></path>\n        <path d=\"M140.46,330a21.41,21.41,0,0,1-3.51-.26,3.08,3.08,0,0,1-1.35-.51,1.94,1.94,0,0,1-.63-.89,7.22,7.22,0,0,1-.37-2.71V285.76a24.55,24.55,0,0,1,3.94-.32,21.41,21.41,0,0,1,3.51.26,3.13,3.13,0,0,1,1.35.51,2,2,0,0,1,.63.89,7.22,7.22,0,0,1,.37,2.71v39.91A24.64,24.64,0,0,1,140.46,330Zm-1-57.53a5.42,5.42,0,0,1-4.23-1.52,5.76,5.76,0,0,1,0-7.82,6.6,6.6,0,0,1,8.45,0,5.76,5.76,0,0,1,0,7.82A5.4,5.4,0,0,1,139.5,272.51Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: rgb(0, 173, 187);\" class=\"svg-elem-3\"></path>\n      </g>\n      <g>\n        <path d=\"M160.15,328.38a8.72,8.72,0,0,1-2.4-6.45V265.68c.78-.14,1.9-.32,3.36-.53a30.33,30.33,0,0,1,4.32-.32q4.8,0,6.94,1.6t2.13,6.3v44.5h25.62a15.24,15.24,0,0,1,1.22,2.78,11.4,11.4,0,0,1,.59,3.73,7.8,7.8,0,0,1-1.55,5.28,5.3,5.3,0,0,1-4.21,1.76H166.61A8.72,8.72,0,0,1,160.15,328.38Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: rgb(255, 164, 0);\" class=\"svg-elem-4\"></path>\n        <path d=\"M217,331.32q-5,0-7-1.71t-2-6.19V265.68c.78-.14,1.9-.32,3.36-.53a31.11,31.11,0,0,1,4.43-.32q4.8,0,6.89,1.6c1.38,1.07,2.08,3.17,2.08,6.3v57.73a24.69,24.69,0,0,1-3.31.59A35.83,35.83,0,0,1,217,331.32Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: rgb(255, 164, 0);\" class=\"svg-elem-5\"></path>\n        <path d=\"M279.83,265.9a13.13,13.13,0,0,1,1.18,2.77,12.71,12.71,0,0,1,.53,3.74,7.6,7.6,0,0,1-1.55,5.23,5.52,5.52,0,0,1-4.32,1.71H252v14H276.2a19.8,19.8,0,0,1,1.23,2.77,10.87,10.87,0,0,1,.59,3.74c0,2.34-.53,4.07-1.6,5.17a5.64,5.64,0,0,1-4.27,1.65h-20v23.8a24.19,24.19,0,0,1-3.3.59,35.88,35.88,0,0,1-4.49.27q-5,0-7-1.71t-2-6.19V274.76a8.27,8.27,0,0,1,8.86-8.86Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: rgb(255, 164, 0);\" class=\"svg-elem-6\"></path>\n        <path d=\"M289.92,328.38a8.72,8.72,0,0,1-2.4-6.45V274.76a8.27,8.27,0,0,1,8.86-8.86H331.7a13,13,0,0,1,1.17,2.67,11.25,11.25,0,0,1,.54,3.62c0,2.35-.52,4.1-1.55,5.23a5.52,5.52,0,0,1-4.32,1.71H303.85v11.95H328.6a13.78,13.78,0,0,1,1.18,2.67,11.65,11.65,0,0,1,.53,3.63c0,2.35-.5,4.07-1.49,5.18a5.47,5.47,0,0,1-4.27,1.65h-20.7v13.34h28.28a13.58,13.58,0,0,1,1.17,2.78,12.32,12.32,0,0,1,.53,3.73q0,3.53-1.54,5.12a5.6,5.6,0,0,1-4.22,1.6H296.38A8.72,8.72,0,0,1,289.92,328.38Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: rgb(255, 164, 0);\" class=\"svg-elem-7\"></path>\n      </g>\n    </g>\n    <g>\n      <path d=\"M140,115.86c-.95-4.38,1.7-6.35,5.79-4.55a17.76,17.76,0,0,1,10.77,15.1c.91,9.32-1.94,18.78,0,28.17a6.1,6.1,0,0,0,7.24,4.77c5.59-.88,10-4.11,13.32-8.24A241,241,0,0,0,194,127.57c6.25-10.06,8.45-21.95,10.49-33.81.76-4.42,1.29-8.91,2.39-13.21a9.43,9.43,0,0,1,3.32-5c2.64-2,5-.92,5.65,2.56,3,20.31.67,44.56-7.08,62.69-2.9,6.67-7.1,12.73-11.18,18.7l-1.3,1.82c12.79-11,24.72-29.1,30.24-59.09V29.85h-49v0a28.3,28.3,0,0,0-26.66,28.25v3.92h0v40.2H85.06v49h0a28.3,28.3,0,0,0,28.25,26.65H130.2c2.34-14.05,5-26.57,6.81-32.24C140.1,136.06,142.35,126.47,140,115.86Zm53-33.79c1.24-2.13,3.35-1.52,4.55.85,4.18,8.24,3.74,16.26.81,24.21-1,2.81-1.89,5.69-3,9.13-1.82-9.67-4.13-17.74-4.48-27.07A15,15,0,0,1,193,82.07Zm-4.38,19.23c1.38,3.61,4,13.28,4.38,14.32,1.69,4.14-.78,6.93-2.37,9.95a28.47,28.47,0,0,1-4.58,5.87c-1.42-8.61-2.95-17.2-4.15-25.82C181.45,101.87,185.9,94.78,188.64,101.3Zm-13,16.26c3.19-5.75,7.65,8.55,8.7,12.2a7.1,7.1,0,0,1-1.27,7c-1.34,1.85-2.88,3.6-4.62,5.83C176.69,135.14,172.42,123.31,175.61,117.56Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: rgb(0, 173, 187);\" class=\"svg-elem-8\"></path>\n      <path d=\"M294,129.54a28.29,28.29,0,0,0-28.27-27.27H226.53c-5.52,30-17.45,48.13-30.24,59.09-3.49,4.91-6.66,9.61-9.39,14.23-11,18.68-14.78,36.28-3.28,62.49.21.33.26.7.51.7h15.12v0a28.31,28.31,0,0,0,27.28-28.28V187.94h0v-10H294V129.54Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: rgb(255, 164, 0);\" class=\"svg-elem-9\"></path>\n    </g>\n  </g>\n</svg>";

var LogoRegularBlack = "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"4.27in\" height=\"4.19in\" viewBox=\"0 0 307.61 301.47\">\r\n  <g>\r\n    <g>\r\n      <g>\r\n        <path d=\"M55.78,331.1a34.43,34.43,0,0,1-12-2,26,26,0,0,1-9.21-5.75A26.77,26.77,0,0,1,28.49,314a35.19,35.19,0,0,1-2.26-13.07,34.75,34.75,0,0,1,2.3-13.15,25.51,25.51,0,0,1,15.39-14.95,34.49,34.49,0,0,1,11.86-2,34.43,34.43,0,0,1,11.85,2,26.84,26.84,0,0,1,9.3,5.68,26,26,0,0,1,6.2,9.27,34.78,34.78,0,0,1,2.31,13.15,35.79,35.79,0,0,1-2.27,13.24,25.66,25.66,0,0,1-6.1,9.3,26.1,26.1,0,0,1-9.27,5.66A35.21,35.21,0,0,1,55.78,331.1Zm.11-53.57a17.27,17.27,0,0,0-13.81,6.23c-3.31,3.93-5,9.7-5,17.15s1.64,13.21,4.89,17.16a17,17,0,0,0,13.79,6.32,17.12,17.12,0,0,0,13.89-6.32c3.25-3.95,4.9-9.73,4.9-17.16s-1.62-13.08-4.83-17A17,17,0,0,0,55.89,277.53Z\" transform=\"translate(-26.23 -29.85)\"/>\r\n        <path d=\"M106.91,331a46.39,46.39,0,0,1-7.64-.59,20,20,0,0,1-5.41-1.6,7.61,7.61,0,0,1-2.79-2.15,3.52,3.52,0,0,1-.7-2.27,4.32,4.32,0,0,1,.44-2.12q2.25,1,4.8,1.86a33.64,33.64,0,0,0,10.55,1.55,14.55,14.55,0,0,0,7.06-1.47,7,7,0,0,0,3.94-6.23,6.8,6.8,0,0,0-3.13-5.81,15.46,15.46,0,0,0-5.86-2l-3.11-.62c-5.46-1.07-9.47-2.68-11.92-4.78-2.08-1.79-3.09-4.4-3.09-8a10.72,10.72,0,0,1,1.22-5.19,10.84,10.84,0,0,1,3.49-3.87,20.27,20.27,0,0,1,6.15-2.72,32.4,32.4,0,0,1,8.45-1,40.82,40.82,0,0,1,6.73.53,20.06,20.06,0,0,1,5,1.44,6.77,6.77,0,0,1,2.54,1.86,2.71,2.71,0,0,1,.58,1.82,5.5,5.5,0,0,1-.33,2c-1.23-.42-2.58-.8-4-1.15s-2.94-.63-4.44-.86a28.93,28.93,0,0,0-4.43-.37,18.26,18.26,0,0,0-7,1.12,6.75,6.75,0,0,0-4.49,6.36,6.36,6.36,0,0,0,2.86,5.34,15,15,0,0,0,5.56,2l3.26.74c7.54,1.73,11,3.9,12.61,5.41a9.91,9.91,0,0,1,3,7.6,10.86,10.86,0,0,1-4.42,9.37C119,329.73,113.84,331,106.91,331Z\" transform=\"translate(-26.23 -29.85)\"/>\r\n        <path d=\"M140.46,330a21.41,21.41,0,0,1-3.51-.26,3.08,3.08,0,0,1-1.35-.51,1.94,1.94,0,0,1-.63-.89,7.22,7.22,0,0,1-.37-2.71V285.76a24.55,24.55,0,0,1,3.94-.32,21.41,21.41,0,0,1,3.51.26,3.13,3.13,0,0,1,1.35.51,2,2,0,0,1,.63.89,7.22,7.22,0,0,1,.37,2.71v39.91A24.64,24.64,0,0,1,140.46,330Zm-1-57.53a5.42,5.42,0,0,1-4.23-1.52,5.76,5.76,0,0,1,0-7.82,6.6,6.6,0,0,1,8.45,0,5.76,5.76,0,0,1,0,7.82A5.4,5.4,0,0,1,139.5,272.51Z\" transform=\"translate(-26.23 -29.85)\"/>\r\n      </g>\r\n      <g>\r\n        <path d=\"M160.15,328.38a8.72,8.72,0,0,1-2.4-6.45V265.68c.78-.14,1.9-.32,3.36-.53a30.33,30.33,0,0,1,4.32-.32q4.8,0,6.94,1.6t2.13,6.3v44.5h25.62a15.24,15.24,0,0,1,1.22,2.78,11.4,11.4,0,0,1,.59,3.73,7.8,7.8,0,0,1-1.55,5.28,5.3,5.3,0,0,1-4.21,1.76H166.61A8.72,8.72,0,0,1,160.15,328.38Z\" transform=\"translate(-26.23 -29.85)\"/>\r\n        <path d=\"M217,331.32q-5,0-7-1.71t-2-6.19V265.68c.78-.14,1.9-.32,3.36-.53a31.11,31.11,0,0,1,4.43-.32q4.8,0,6.89,1.6c1.38,1.07,2.08,3.17,2.08,6.3v57.73a24.69,24.69,0,0,1-3.31.59A35.83,35.83,0,0,1,217,331.32Z\" transform=\"translate(-26.23 -29.85)\"/>\r\n        <path d=\"M279.83,265.9a13.13,13.13,0,0,1,1.18,2.77,12.71,12.71,0,0,1,.53,3.74,7.6,7.6,0,0,1-1.55,5.23,5.52,5.52,0,0,1-4.32,1.71H252v14H276.2a19.8,19.8,0,0,1,1.23,2.77,10.87,10.87,0,0,1,.59,3.74c0,2.34-.53,4.07-1.6,5.17a5.64,5.64,0,0,1-4.27,1.65h-20v23.8a24.19,24.19,0,0,1-3.3.59,35.88,35.88,0,0,1-4.49.27q-5,0-7-1.71t-2-6.19V274.76a8.27,8.27,0,0,1,8.86-8.86Z\" transform=\"translate(-26.23 -29.85)\"/>\r\n        <path d=\"M289.92,328.38a8.72,8.72,0,0,1-2.4-6.45V274.76a8.27,8.27,0,0,1,8.86-8.86H331.7a13,13,0,0,1,1.17,2.67,11.25,11.25,0,0,1,.54,3.62c0,2.35-.52,4.1-1.55,5.23a5.52,5.52,0,0,1-4.32,1.71H303.85v11.95H328.6a13.78,13.78,0,0,1,1.18,2.67,11.65,11.65,0,0,1,.53,3.63c0,2.35-.5,4.07-1.49,5.18a5.47,5.47,0,0,1-4.27,1.65h-20.7v13.34h28.28a13.58,13.58,0,0,1,1.17,2.78,12.32,12.32,0,0,1,.53,3.73q0,3.53-1.54,5.12a5.6,5.6,0,0,1-4.22,1.6H296.38A8.72,8.72,0,0,1,289.92,328.38Z\" transform=\"translate(-26.23 -29.85)\"/>\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <path d=\"M140,115.86c-.95-4.38,1.7-6.35,5.79-4.55a17.76,17.76,0,0,1,10.77,15.1c.91,9.32-1.94,18.78,0,28.17a6.1,6.1,0,0,0,7.24,4.77c5.59-.88,10-4.11,13.32-8.24A241,241,0,0,0,194,127.57c6.25-10.06,8.45-21.95,10.49-33.81.76-4.42,1.29-8.91,2.39-13.21a9.43,9.43,0,0,1,3.32-5c2.64-2,5-.92,5.65,2.56,3,20.31.67,44.56-7.08,62.69-2.9,6.67-7.1,12.73-11.18,18.7l-1.3,1.82c12.79-11,24.72-29.1,30.24-59.09V29.85h-49v0a28.3,28.3,0,0,0-26.66,28.25v3.92h0v40.2H85.06v49h0a28.3,28.3,0,0,0,28.25,26.65H130.2c2.34-14.05,5-26.57,6.81-32.24C140.1,136.06,142.35,126.47,140,115.86Zm53-33.79c1.24-2.13,3.35-1.52,4.55.85,4.18,8.24,3.74,16.26.81,24.21-1,2.81-1.89,5.69-3,9.13-1.82-9.67-4.13-17.74-4.48-27.07A15,15,0,0,1,193,82.07Zm-4.38,19.23c1.38,3.61,4,13.28,4.38,14.32,1.69,4.14-.78,6.93-2.37,9.95a28.47,28.47,0,0,1-4.58,5.87c-1.42-8.61-2.95-17.2-4.15-25.82C181.45,101.87,185.9,94.78,188.64,101.3Zm-13,16.26c3.19-5.75,7.65,8.55,8.7,12.2a7.1,7.1,0,0,1-1.27,7c-1.34,1.85-2.88,3.6-4.62,5.83C176.69,135.14,172.42,123.31,175.61,117.56Z\" transform=\"translate(-26.23 -29.85)\"/>\r\n      <path d=\"M294,129.54a28.29,28.29,0,0,0-28.27-27.27H226.53c-5.52,30-17.45,48.13-30.24,59.09-3.49,4.91-6.66,9.61-9.39,14.23-11,18.68-14.78,36.28-3.28,62.49.21.33.26.7.51.7h15.12v0a28.31,28.31,0,0,0,27.28-28.28V187.94h0v-10H294V129.54Z\" transform=\"translate(-26.23 -29.85)\"/>\r\n    </g>\r\n  </g>\r\n</svg>";

var LogoRegularWhite = "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"4.27in\" height=\"4.19in\" viewBox=\"0 0 307.61 301.47\">\r\n  <g>\r\n    <g>\r\n      <g>\r\n        <path d=\"M55.78,331.1a34.43,34.43,0,0,1-12-2,26,26,0,0,1-9.21-5.75A26.77,26.77,0,0,1,28.49,314a35.19,35.19,0,0,1-2.26-13.07,34.75,34.75,0,0,1,2.3-13.15,25.51,25.51,0,0,1,15.39-14.95,34.49,34.49,0,0,1,11.86-2,34.43,34.43,0,0,1,11.85,2,26.84,26.84,0,0,1,9.3,5.68,26,26,0,0,1,6.2,9.27,34.78,34.78,0,0,1,2.31,13.15,35.79,35.79,0,0,1-2.27,13.24,25.66,25.66,0,0,1-6.1,9.3,26.1,26.1,0,0,1-9.27,5.66A35.21,35.21,0,0,1,55.78,331.1Zm.11-53.57a17.27,17.27,0,0,0-13.81,6.23c-3.31,3.93-5,9.7-5,17.15s1.64,13.21,4.89,17.16a17,17,0,0,0,13.79,6.32,17.12,17.12,0,0,0,13.89-6.32c3.25-3.95,4.9-9.73,4.9-17.16s-1.62-13.08-4.83-17A17,17,0,0,0,55.89,277.53Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #fff\"/>\r\n        <path d=\"M106.91,331a46.39,46.39,0,0,1-7.64-.59,20,20,0,0,1-5.41-1.6,7.61,7.61,0,0,1-2.79-2.15,3.52,3.52,0,0,1-.7-2.27,4.32,4.32,0,0,1,.44-2.12q2.25,1,4.8,1.86a33.64,33.64,0,0,0,10.55,1.55,14.55,14.55,0,0,0,7.06-1.47,7,7,0,0,0,3.94-6.23,6.8,6.8,0,0,0-3.13-5.81,15.46,15.46,0,0,0-5.86-2l-3.11-.62c-5.46-1.07-9.47-2.68-11.92-4.78-2.08-1.79-3.09-4.4-3.09-8a10.72,10.72,0,0,1,1.22-5.19,10.84,10.84,0,0,1,3.49-3.87,20.27,20.27,0,0,1,6.15-2.72,32.4,32.4,0,0,1,8.45-1,40.82,40.82,0,0,1,6.73.53,20.06,20.06,0,0,1,5,1.44,6.77,6.77,0,0,1,2.54,1.86,2.71,2.71,0,0,1,.58,1.82,5.5,5.5,0,0,1-.33,2c-1.23-.42-2.58-.8-4-1.15s-2.94-.63-4.44-.86a28.93,28.93,0,0,0-4.43-.37,18.26,18.26,0,0,0-7,1.12,6.75,6.75,0,0,0-4.49,6.36,6.36,6.36,0,0,0,2.86,5.34,15,15,0,0,0,5.56,2l3.26.74c7.54,1.73,11,3.9,12.61,5.41a9.91,9.91,0,0,1,3,7.6,10.86,10.86,0,0,1-4.42,9.37C119,329.73,113.84,331,106.91,331Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #fff\"/>\r\n        <path d=\"M140.46,330a21.41,21.41,0,0,1-3.51-.26,3.08,3.08,0,0,1-1.35-.51,1.94,1.94,0,0,1-.63-.89,7.22,7.22,0,0,1-.37-2.71V285.76a24.55,24.55,0,0,1,3.94-.32,21.41,21.41,0,0,1,3.51.26,3.13,3.13,0,0,1,1.35.51,2,2,0,0,1,.63.89,7.22,7.22,0,0,1,.37,2.71v39.91A24.64,24.64,0,0,1,140.46,330Zm-1-57.53a5.42,5.42,0,0,1-4.23-1.52,5.76,5.76,0,0,1,0-7.82,6.6,6.6,0,0,1,8.45,0,5.76,5.76,0,0,1,0,7.82A5.4,5.4,0,0,1,139.5,272.51Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #fff\"/>\r\n      </g>\r\n      <g>\r\n        <path d=\"M160.15,328.38a8.72,8.72,0,0,1-2.4-6.45V265.68c.78-.14,1.9-.32,3.36-.53a30.33,30.33,0,0,1,4.32-.32q4.8,0,6.94,1.6t2.13,6.3v44.5h25.62a15.24,15.24,0,0,1,1.22,2.78,11.4,11.4,0,0,1,.59,3.73,7.8,7.8,0,0,1-1.55,5.28,5.3,5.3,0,0,1-4.21,1.76H166.61A8.72,8.72,0,0,1,160.15,328.38Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #fff\"/>\r\n        <path d=\"M217,331.32q-5,0-7-1.71t-2-6.19V265.68c.78-.14,1.9-.32,3.36-.53a31.11,31.11,0,0,1,4.43-.32q4.8,0,6.89,1.6c1.38,1.07,2.08,3.17,2.08,6.3v57.73a24.69,24.69,0,0,1-3.31.59A35.83,35.83,0,0,1,217,331.32Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #fff\"/>\r\n        <path d=\"M279.83,265.9a13.13,13.13,0,0,1,1.18,2.77,12.71,12.71,0,0,1,.53,3.74,7.6,7.6,0,0,1-1.55,5.23,5.52,5.52,0,0,1-4.32,1.71H252v14H276.2a19.8,19.8,0,0,1,1.23,2.77,10.87,10.87,0,0,1,.59,3.74c0,2.34-.53,4.07-1.6,5.17a5.64,5.64,0,0,1-4.27,1.65h-20v23.8a24.19,24.19,0,0,1-3.3.59,35.88,35.88,0,0,1-4.49.27q-5,0-7-1.71t-2-6.19V274.76a8.27,8.27,0,0,1,8.86-8.86Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #fff\"/>\r\n        <path d=\"M289.92,328.38a8.72,8.72,0,0,1-2.4-6.45V274.76a8.27,8.27,0,0,1,8.86-8.86H331.7a13,13,0,0,1,1.17,2.67,11.25,11.25,0,0,1,.54,3.62c0,2.35-.52,4.1-1.55,5.23a5.52,5.52,0,0,1-4.32,1.71H303.85v11.95H328.6a13.78,13.78,0,0,1,1.18,2.67,11.65,11.65,0,0,1,.53,3.63c0,2.35-.5,4.07-1.49,5.18a5.47,5.47,0,0,1-4.27,1.65h-20.7v13.34h28.28a13.58,13.58,0,0,1,1.17,2.78,12.32,12.32,0,0,1,.53,3.73q0,3.53-1.54,5.12a5.6,5.6,0,0,1-4.22,1.6H296.38A8.72,8.72,0,0,1,289.92,328.38Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #fff\"/>\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <path d=\"M140,115.86c-.95-4.38,1.7-6.35,5.79-4.55a17.76,17.76,0,0,1,10.77,15.1c.91,9.32-1.94,18.78,0,28.17a6.1,6.1,0,0,0,7.24,4.77c5.59-.88,10-4.11,13.32-8.24A241,241,0,0,0,194,127.57c6.25-10.06,8.45-21.95,10.49-33.81.76-4.42,1.29-8.91,2.39-13.21a9.43,9.43,0,0,1,3.32-5c2.64-2,5-.92,5.65,2.56,3,20.31.67,44.56-7.08,62.69-2.9,6.67-7.1,12.73-11.18,18.7l-1.3,1.82c12.79-11,24.72-29.1,30.24-59.09V29.85h-49v0a28.3,28.3,0,0,0-26.66,28.25v3.92h0v40.2H85.06v49h0a28.3,28.3,0,0,0,28.25,26.65H130.2c2.34-14.05,5-26.57,6.81-32.24C140.1,136.06,142.35,126.47,140,115.86Zm53-33.79c1.24-2.13,3.35-1.52,4.55.85,4.18,8.24,3.74,16.26.81,24.21-1,2.81-1.89,5.69-3,9.13-1.82-9.67-4.13-17.74-4.48-27.07A15,15,0,0,1,193,82.07Zm-4.38,19.23c1.38,3.61,4,13.28,4.38,14.32,1.69,4.14-.78,6.93-2.37,9.95a28.47,28.47,0,0,1-4.58,5.87c-1.42-8.61-2.95-17.2-4.15-25.82C181.45,101.87,185.9,94.78,188.64,101.3Zm-13,16.26c3.19-5.75,7.65,8.55,8.7,12.2a7.1,7.1,0,0,1-1.27,7c-1.34,1.85-2.88,3.6-4.62,5.83C176.69,135.14,172.42,123.31,175.61,117.56Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #fff\"/>\r\n      <path d=\"M294,129.54a28.29,28.29,0,0,0-28.27-27.27H226.53c-5.52,30-17.45,48.13-30.24,59.09-3.49,4.91-6.66,9.61-9.39,14.23-11,18.68-14.78,36.28-3.28,62.49.21.33.26.7.51.7h15.12v0a28.31,28.31,0,0,0,27.28-28.28V187.94h0v-10H294V129.54Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #fff\"/>\r\n    </g>\r\n  </g>\r\n</svg>";

var LogoRegularBlue = "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"4.27in\" height=\"4.19in\" viewBox=\"0 0 307.61 301.47\">\r\n  <g>\r\n    <g>\r\n      <g>\r\n        <path d=\"M55.78,331.1a34.43,34.43,0,0,1-12-2,26,26,0,0,1-9.21-5.75A26.77,26.77,0,0,1,28.49,314a35.19,35.19,0,0,1-2.26-13.07,34.75,34.75,0,0,1,2.3-13.15,25.51,25.51,0,0,1,15.39-14.95,34.49,34.49,0,0,1,11.86-2,34.43,34.43,0,0,1,11.85,2,26.84,26.84,0,0,1,9.3,5.68,26,26,0,0,1,6.2,9.27,34.78,34.78,0,0,1,2.31,13.15,35.79,35.79,0,0,1-2.27,13.24,25.66,25.66,0,0,1-6.1,9.3,26.1,26.1,0,0,1-9.27,5.66A35.21,35.21,0,0,1,55.78,331.1Zm.11-53.57a17.27,17.27,0,0,0-13.81,6.23c-3.31,3.93-5,9.7-5,17.15s1.64,13.21,4.89,17.16a17,17,0,0,0,13.79,6.32,17.12,17.12,0,0,0,13.89-6.32c3.25-3.95,4.9-9.73,4.9-17.16s-1.62-13.08-4.83-17A17,17,0,0,0,55.89,277.53Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #00adbb\"/>\r\n        <path d=\"M106.91,331a46.39,46.39,0,0,1-7.64-.59,20,20,0,0,1-5.41-1.6,7.61,7.61,0,0,1-2.79-2.15,3.52,3.52,0,0,1-.7-2.27,4.32,4.32,0,0,1,.44-2.12q2.25,1,4.8,1.86a33.64,33.64,0,0,0,10.55,1.55,14.55,14.55,0,0,0,7.06-1.47,7,7,0,0,0,3.94-6.23,6.8,6.8,0,0,0-3.13-5.81,15.46,15.46,0,0,0-5.86-2l-3.11-.62c-5.46-1.07-9.47-2.68-11.92-4.78-2.08-1.79-3.09-4.4-3.09-8a10.72,10.72,0,0,1,1.22-5.19,10.84,10.84,0,0,1,3.49-3.87,20.27,20.27,0,0,1,6.15-2.72,32.4,32.4,0,0,1,8.45-1,40.82,40.82,0,0,1,6.73.53,20.06,20.06,0,0,1,5,1.44,6.77,6.77,0,0,1,2.54,1.86,2.71,2.71,0,0,1,.58,1.82,5.5,5.5,0,0,1-.33,2c-1.23-.42-2.58-.8-4-1.15s-2.94-.63-4.44-.86a28.93,28.93,0,0,0-4.43-.37,18.26,18.26,0,0,0-7,1.12,6.75,6.75,0,0,0-4.49,6.36,6.36,6.36,0,0,0,2.86,5.34,15,15,0,0,0,5.56,2l3.26.74c7.54,1.73,11,3.9,12.61,5.41a9.91,9.91,0,0,1,3,7.6,10.86,10.86,0,0,1-4.42,9.37C119,329.73,113.84,331,106.91,331Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #00adbb\"/>\r\n        <path d=\"M140.46,330a21.41,21.41,0,0,1-3.51-.26,3.08,3.08,0,0,1-1.35-.51,1.94,1.94,0,0,1-.63-.89,7.22,7.22,0,0,1-.37-2.71V285.76a24.55,24.55,0,0,1,3.94-.32,21.41,21.41,0,0,1,3.51.26,3.13,3.13,0,0,1,1.35.51,2,2,0,0,1,.63.89,7.22,7.22,0,0,1,.37,2.71v39.91A24.64,24.64,0,0,1,140.46,330Zm-1-57.53a5.42,5.42,0,0,1-4.23-1.52,5.76,5.76,0,0,1,0-7.82,6.6,6.6,0,0,1,8.45,0,5.76,5.76,0,0,1,0,7.82A5.4,5.4,0,0,1,139.5,272.51Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #00adbb\"/>\r\n      </g>\r\n      <g>\r\n        <path d=\"M160.15,328.38a8.72,8.72,0,0,1-2.4-6.45V265.68c.78-.14,1.9-.32,3.36-.53a30.33,30.33,0,0,1,4.32-.32q4.8,0,6.94,1.6t2.13,6.3v44.5h25.62a15.24,15.24,0,0,1,1.22,2.78,11.4,11.4,0,0,1,.59,3.73,7.8,7.8,0,0,1-1.55,5.28,5.3,5.3,0,0,1-4.21,1.76H166.61A8.72,8.72,0,0,1,160.15,328.38Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #00adbb\"/>\r\n        <path d=\"M217,331.32q-5,0-7-1.71t-2-6.19V265.68c.78-.14,1.9-.32,3.36-.53a31.11,31.11,0,0,1,4.43-.32q4.8,0,6.89,1.6c1.38,1.07,2.08,3.17,2.08,6.3v57.73a24.69,24.69,0,0,1-3.31.59A35.83,35.83,0,0,1,217,331.32Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #00adbb\"/>\r\n        <path d=\"M279.83,265.9a13.13,13.13,0,0,1,1.18,2.77,12.71,12.71,0,0,1,.53,3.74,7.6,7.6,0,0,1-1.55,5.23,5.52,5.52,0,0,1-4.32,1.71H252v14H276.2a19.8,19.8,0,0,1,1.23,2.77,10.87,10.87,0,0,1,.59,3.74c0,2.34-.53,4.07-1.6,5.17a5.64,5.64,0,0,1-4.27,1.65h-20v23.8a24.19,24.19,0,0,1-3.3.59,35.88,35.88,0,0,1-4.49.27q-5,0-7-1.71t-2-6.19V274.76a8.27,8.27,0,0,1,8.86-8.86Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #00adbb\"/>\r\n        <path d=\"M289.92,328.38a8.72,8.72,0,0,1-2.4-6.45V274.76a8.27,8.27,0,0,1,8.86-8.86H331.7a13,13,0,0,1,1.17,2.67,11.25,11.25,0,0,1,.54,3.62c0,2.35-.52,4.1-1.55,5.23a5.52,5.52,0,0,1-4.32,1.71H303.85v11.95H328.6a13.78,13.78,0,0,1,1.18,2.67,11.65,11.65,0,0,1,.53,3.63c0,2.35-.5,4.07-1.49,5.18a5.47,5.47,0,0,1-4.27,1.65h-20.7v13.34h28.28a13.58,13.58,0,0,1,1.17,2.78,12.32,12.32,0,0,1,.53,3.73q0,3.53-1.54,5.12a5.6,5.6,0,0,1-4.22,1.6H296.38A8.72,8.72,0,0,1,289.92,328.38Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #00adbb\"/>\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <path d=\"M140,115.86c-.95-4.38,1.7-6.35,5.79-4.55a17.76,17.76,0,0,1,10.77,15.1c.91,9.32-1.94,18.78,0,28.17a6.1,6.1,0,0,0,7.24,4.77c5.59-.88,10-4.11,13.32-8.24A241,241,0,0,0,194,127.57c6.25-10.06,8.45-21.95,10.49-33.81.76-4.42,1.29-8.91,2.39-13.21a9.43,9.43,0,0,1,3.32-5c2.64-2,5-.92,5.65,2.56,3,20.31.67,44.56-7.08,62.69-2.9,6.67-7.1,12.73-11.18,18.7l-1.3,1.82c12.79-11,24.72-29.1,30.24-59.09V29.85h-49v0a28.3,28.3,0,0,0-26.66,28.25v3.92h0v40.2H85.06v49h0a28.3,28.3,0,0,0,28.25,26.65H130.2c2.34-14.05,5-26.57,6.81-32.24C140.1,136.06,142.35,126.47,140,115.86Zm53-33.79c1.24-2.13,3.35-1.52,4.55.85,4.18,8.24,3.74,16.26.81,24.21-1,2.81-1.89,5.69-3,9.13-1.82-9.67-4.13-17.74-4.48-27.07A15,15,0,0,1,193,82.07Zm-4.38,19.23c1.38,3.61,4,13.28,4.38,14.32,1.69,4.14-.78,6.93-2.37,9.95a28.47,28.47,0,0,1-4.58,5.87c-1.42-8.61-2.95-17.2-4.15-25.82C181.45,101.87,185.9,94.78,188.64,101.3Zm-13,16.26c3.19-5.75,7.65,8.55,8.7,12.2a7.1,7.1,0,0,1-1.27,7c-1.34,1.85-2.88,3.6-4.62,5.83C176.69,135.14,172.42,123.31,175.61,117.56Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #00adbb\"/>\r\n      <path d=\"M294,129.54a28.29,28.29,0,0,0-28.27-27.27H226.53c-5.52,30-17.45,48.13-30.24,59.09-3.49,4.91-6.66,9.61-9.39,14.23-11,18.68-14.78,36.28-3.28,62.49.21.33.26.7.51.7h15.12v0a28.31,28.31,0,0,0,27.28-28.28V187.94h0v-10H294V129.54Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #00adbb\"/>\r\n    </g>\r\n  </g>\r\n</svg>";

var LogoRegularOrange = "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"4.27in\" height=\"4.19in\" viewBox=\"0 0 307.61 301.47\">\r\n  <g>\r\n    <g>\r\n      <g>\r\n        <path d=\"M55.78,331.1a34.43,34.43,0,0,1-12-2,26,26,0,0,1-9.21-5.75A26.77,26.77,0,0,1,28.49,314a35.19,35.19,0,0,1-2.26-13.07,34.75,34.75,0,0,1,2.3-13.15,25.51,25.51,0,0,1,15.39-14.95,34.49,34.49,0,0,1,11.86-2,34.43,34.43,0,0,1,11.85,2,26.84,26.84,0,0,1,9.3,5.68,26,26,0,0,1,6.2,9.27,34.78,34.78,0,0,1,2.31,13.15,35.79,35.79,0,0,1-2.27,13.24,25.66,25.66,0,0,1-6.1,9.3,26.1,26.1,0,0,1-9.27,5.66A35.21,35.21,0,0,1,55.78,331.1Zm.11-53.57a17.27,17.27,0,0,0-13.81,6.23c-3.31,3.93-5,9.7-5,17.15s1.64,13.21,4.89,17.16a17,17,0,0,0,13.79,6.32,17.12,17.12,0,0,0,13.89-6.32c3.25-3.95,4.9-9.73,4.9-17.16s-1.62-13.08-4.83-17A17,17,0,0,0,55.89,277.53Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #faa31a\"/>\r\n        <path d=\"M106.91,331a46.39,46.39,0,0,1-7.64-.59,20,20,0,0,1-5.41-1.6,7.61,7.61,0,0,1-2.79-2.15,3.52,3.52,0,0,1-.7-2.27,4.32,4.32,0,0,1,.44-2.12q2.25,1,4.8,1.86a33.64,33.64,0,0,0,10.55,1.55,14.55,14.55,0,0,0,7.06-1.47,7,7,0,0,0,3.94-6.23,6.8,6.8,0,0,0-3.13-5.81,15.46,15.46,0,0,0-5.86-2l-3.11-.62c-5.46-1.07-9.47-2.68-11.92-4.78-2.08-1.79-3.09-4.4-3.09-8a10.72,10.72,0,0,1,1.22-5.19,10.84,10.84,0,0,1,3.49-3.87,20.27,20.27,0,0,1,6.15-2.72,32.4,32.4,0,0,1,8.45-1,40.82,40.82,0,0,1,6.73.53,20.06,20.06,0,0,1,5,1.44,6.77,6.77,0,0,1,2.54,1.86,2.71,2.71,0,0,1,.58,1.82,5.5,5.5,0,0,1-.33,2c-1.23-.42-2.58-.8-4-1.15s-2.94-.63-4.44-.86a28.93,28.93,0,0,0-4.43-.37,18.26,18.26,0,0,0-7,1.12,6.75,6.75,0,0,0-4.49,6.36,6.36,6.36,0,0,0,2.86,5.34,15,15,0,0,0,5.56,2l3.26.74c7.54,1.73,11,3.9,12.61,5.41a9.91,9.91,0,0,1,3,7.6,10.86,10.86,0,0,1-4.42,9.37C119,329.73,113.84,331,106.91,331Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #faa31a\"/>\r\n        <path d=\"M140.46,330a21.41,21.41,0,0,1-3.51-.26,3.08,3.08,0,0,1-1.35-.51,1.94,1.94,0,0,1-.63-.89,7.22,7.22,0,0,1-.37-2.71V285.76a24.55,24.55,0,0,1,3.94-.32,21.41,21.41,0,0,1,3.51.26,3.13,3.13,0,0,1,1.35.51,2,2,0,0,1,.63.89,7.22,7.22,0,0,1,.37,2.71v39.91A24.64,24.64,0,0,1,140.46,330Zm-1-57.53a5.42,5.42,0,0,1-4.23-1.52,5.76,5.76,0,0,1,0-7.82,6.6,6.6,0,0,1,8.45,0,5.76,5.76,0,0,1,0,7.82A5.4,5.4,0,0,1,139.5,272.51Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #faa31a\"/>\r\n      </g>\r\n      <g>\r\n        <path d=\"M160.15,328.38a8.72,8.72,0,0,1-2.4-6.45V265.68c.78-.14,1.9-.32,3.36-.53a30.33,30.33,0,0,1,4.32-.32q4.8,0,6.94,1.6t2.13,6.3v44.5h25.62a15.24,15.24,0,0,1,1.22,2.78,11.4,11.4,0,0,1,.59,3.73,7.8,7.8,0,0,1-1.55,5.28,5.3,5.3,0,0,1-4.21,1.76H166.61A8.72,8.72,0,0,1,160.15,328.38Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #faa31a\"/>\r\n        <path d=\"M217,331.32q-5,0-7-1.71t-2-6.19V265.68c.78-.14,1.9-.32,3.36-.53a31.11,31.11,0,0,1,4.43-.32q4.8,0,6.89,1.6c1.38,1.07,2.08,3.17,2.08,6.3v57.73a24.69,24.69,0,0,1-3.31.59A35.83,35.83,0,0,1,217,331.32Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #faa31a\"/>\r\n        <path d=\"M279.83,265.9a13.13,13.13,0,0,1,1.18,2.77,12.71,12.71,0,0,1,.53,3.74,7.6,7.6,0,0,1-1.55,5.23,5.52,5.52,0,0,1-4.32,1.71H252v14H276.2a19.8,19.8,0,0,1,1.23,2.77,10.87,10.87,0,0,1,.59,3.74c0,2.34-.53,4.07-1.6,5.17a5.64,5.64,0,0,1-4.27,1.65h-20v23.8a24.19,24.19,0,0,1-3.3.59,35.88,35.88,0,0,1-4.49.27q-5,0-7-1.71t-2-6.19V274.76a8.27,8.27,0,0,1,8.86-8.86Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #faa31a\"/>\r\n        <path d=\"M289.92,328.38a8.72,8.72,0,0,1-2.4-6.45V274.76a8.27,8.27,0,0,1,8.86-8.86H331.7a13,13,0,0,1,1.17,2.67,11.25,11.25,0,0,1,.54,3.62c0,2.35-.52,4.1-1.55,5.23a5.52,5.52,0,0,1-4.32,1.71H303.85v11.95H328.6a13.78,13.78,0,0,1,1.18,2.67,11.65,11.65,0,0,1,.53,3.63c0,2.35-.5,4.07-1.49,5.18a5.47,5.47,0,0,1-4.27,1.65h-20.7v13.34h28.28a13.58,13.58,0,0,1,1.17,2.78,12.32,12.32,0,0,1,.53,3.73q0,3.53-1.54,5.12a5.6,5.6,0,0,1-4.22,1.6H296.38A8.72,8.72,0,0,1,289.92,328.38Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #faa31a\"/>\r\n      </g>\r\n    </g>\r\n    <g>\r\n      <path d=\"M140,115.86c-.95-4.38,1.7-6.35,5.79-4.55a17.76,17.76,0,0,1,10.77,15.1c.91,9.32-1.94,18.78,0,28.17a6.1,6.1,0,0,0,7.24,4.77c5.59-.88,10-4.11,13.32-8.24A241,241,0,0,0,194,127.57c6.25-10.06,8.45-21.95,10.49-33.81.76-4.42,1.29-8.91,2.39-13.21a9.43,9.43,0,0,1,3.32-5c2.64-2,5-.92,5.65,2.56,3,20.31.67,44.56-7.08,62.69-2.9,6.67-7.1,12.73-11.18,18.7l-1.3,1.82c12.79-11,24.72-29.1,30.24-59.09V29.85h-49v0a28.3,28.3,0,0,0-26.66,28.25v3.92h0v40.2H85.06v49h0a28.3,28.3,0,0,0,28.25,26.65H130.2c2.34-14.05,5-26.57,6.81-32.24C140.1,136.06,142.35,126.47,140,115.86Zm53-33.79c1.24-2.13,3.35-1.52,4.55.85,4.18,8.24,3.74,16.26.81,24.21-1,2.81-1.89,5.69-3,9.13-1.82-9.67-4.13-17.74-4.48-27.07A15,15,0,0,1,193,82.07Zm-4.38,19.23c1.38,3.61,4,13.28,4.38,14.32,1.69,4.14-.78,6.93-2.37,9.95a28.47,28.47,0,0,1-4.58,5.87c-1.42-8.61-2.95-17.2-4.15-25.82C181.45,101.87,185.9,94.78,188.64,101.3Zm-13,16.26c3.19-5.75,7.65,8.55,8.7,12.2a7.1,7.1,0,0,1-1.27,7c-1.34,1.85-2.88,3.6-4.62,5.83C176.69,135.14,172.42,123.31,175.61,117.56Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #faa31a\"/>\r\n      <path d=\"M294,129.54a28.29,28.29,0,0,0-28.27-27.27H226.53c-5.52,30-17.45,48.13-30.24,59.09-3.49,4.91-6.66,9.61-9.39,14.23-11,18.68-14.78,36.28-3.28,62.49.21.33.26.7.51.7h15.12v0a28.31,28.31,0,0,0,27.28-28.28V187.94h0v-10H294V129.54Z\" transform=\"translate(-26.23 -29.85)\" style=\"fill: #faa31a\"/>\r\n    </g>\r\n  </g>\r\n</svg>";

var LogoMark = "<svg id=\"logo_mark\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"4.26in\" height=\"4.26in\" viewBox=\"0 0 306.81 306.81\">\n  <g>\n    <path d=\"M106.39,152.61c-1.4-6.43,2.49-9.33,8.5-6.68A26.08,26.08,0,0,1,130.7,168.1c1.34,13.69-2.84,27.58,0,41.37,1.16,5.14,5.61,7.78,10.65,7,8.2-1.29,14.68-6,19.55-12.1a357.81,357.81,0,0,0,24.78-34.57C194.8,155,198,137.57,201,120.16c1.12-6.49,1.9-13.09,3.52-19.41a13.87,13.87,0,0,1,4.88-7.28c3.87-2.87,7.39-1.35,8.28,3.75,4.36,29.83,1,65.45-10.39,92.07-4.26,9.8-10.42,18.69-16.41,27.46L189,219.42c18.78-16.09,36.3-42.72,44.4-86.77V26.3H161.46v.07a41.55,41.55,0,0,0-39.14,41.49v5.75h0v59H25.64v71.92h.07A41.56,41.56,0,0,0,67.2,243.71H91.93c3.44-20.63,7.32-39,10-47.34C106.48,182.27,109.78,168.19,106.39,152.61ZM184.19,103c1.82-3.13,4.91-2.24,6.67,1.24,6.14,12.11,5.5,23.89,1.2,35.56-1.51,4.12-2.78,8.35-4.45,13.41-2.67-14.2-6.06-26.06-6.58-39.75A21.93,21.93,0,0,1,184.19,103Zm-6.43,28.24c2,5.29,5.79,19.49,6.42,21,2.48,6.08-1.14,10.17-3.47,14.6-1.59,3-6.33,8.62-6.73,8.62-2.08-12.63-4.34-25.25-6.09-37.91C167.19,132.06,173.73,121.65,177.76,131.23ZM158.62,155.1c4.68-8.44,11.23,12.57,12.77,17.92,1.11,3.84.83,6.64-1.85,10.33-2,2.71-4.24,5.27-6.79,8.55C160.21,180.91,153.94,163.54,158.62,155.1Z\" transform=\"translate(-25.64 -26.3)\" style=\"fill: #00adbb\"/>\n    <path d=\"M332.42,172.7a41.56,41.56,0,0,0-41.53-40h-57.5c-8.1,44-25.62,70.68-44.4,86.77-5.13,7.21-9.79,14.11-13.79,20.91-16.16,27.42-21.71,53.27-4.82,91.75.3.49.38,1,.75,1h22.2v0a41.56,41.56,0,0,0,40.06-41.53v-33.1h0V243.71h99.06v-71Z\" transform=\"translate(-25.64 -26.3)\" style=\"fill: #ffa400\"/>\n  </g>\n</svg>";

var LogoMarkBlack = "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"4.26in\" height=\"4.26in\" viewBox=\"0 0 306.81 306.81\">\r\n  <g>\r\n    <path d=\"M106.39,152.61c-1.4-6.43,2.49-9.33,8.5-6.68A26.08,26.08,0,0,1,130.7,168.1c1.34,13.69-2.84,27.58,0,41.37,1.16,5.14,5.61,7.78,10.65,7,8.2-1.29,14.68-6,19.55-12.1a357.81,357.81,0,0,0,24.78-34.57C194.8,155,198,137.57,201,120.16c1.12-6.49,1.9-13.09,3.52-19.41a13.87,13.87,0,0,1,4.88-7.28c3.87-2.87,7.39-1.35,8.28,3.75,4.36,29.83,1,65.45-10.39,92.07-4.26,9.8-10.42,18.69-16.41,27.46L189,219.42c18.78-16.09,36.3-42.72,44.4-86.77V26.3H161.46v.07a41.55,41.55,0,0,0-39.14,41.49v5.75h0v59H25.64v71.92h.07A41.56,41.56,0,0,0,67.2,243.71H91.93c3.44-20.63,7.32-39,10-47.34C106.48,182.27,109.78,168.19,106.39,152.61ZM184.19,103c1.82-3.13,4.91-2.24,6.67,1.24,6.14,12.11,5.5,23.89,1.2,35.56-1.51,4.12-2.78,8.35-4.45,13.41-2.67-14.2-6.06-26.06-6.58-39.75A21.93,21.93,0,0,1,184.19,103Zm-6.43,28.24c2,5.29,5.79,19.49,6.42,21,2.48,6.08-1.14,10.17-3.47,14.6-1.59,3-6.33,8.62-6.73,8.62-2.08-12.63-4.34-25.25-6.09-37.91C167.19,132.06,173.73,121.65,177.76,131.23ZM158.62,155.1c4.68-8.44,11.23,12.57,12.77,17.92,1.11,3.84.83,6.64-1.85,10.33-2,2.71-4.24,5.27-6.79,8.55C160.21,180.91,153.94,163.54,158.62,155.1Z\" transform=\"translate(-25.64 -26.3)\"/>\r\n    <path d=\"M332.42,172.7a41.56,41.56,0,0,0-41.53-40h-57.5c-8.1,44-25.62,70.68-44.4,86.77-5.13,7.21-9.79,14.11-13.79,20.91-16.16,27.42-21.71,53.27-4.82,91.75.3.49.38,1,.75,1h22.2v0a41.56,41.56,0,0,0,40.06-41.53v-33.1h0V243.71h99.06v-71Z\" transform=\"translate(-25.64 -26.3)\"/>\r\n  </g>\r\n</svg>";

var LogoMarkWhite = "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"4.26in\" height=\"4.26in\" viewBox=\"0 0 306.81 306.81\">\r\n  <g>\r\n    <path d=\"M106.39,152.61c-1.4-6.43,2.49-9.33,8.5-6.68A26.08,26.08,0,0,1,130.7,168.1c1.34,13.69-2.84,27.58,0,41.37,1.16,5.14,5.61,7.78,10.65,7,8.2-1.29,14.68-6,19.55-12.1a357.81,357.81,0,0,0,24.78-34.57C194.8,155,198,137.57,201,120.16c1.12-6.49,1.9-13.09,3.52-19.41a13.87,13.87,0,0,1,4.88-7.28c3.87-2.87,7.39-1.35,8.28,3.75,4.36,29.83,1,65.45-10.39,92.07-4.26,9.8-10.42,18.69-16.41,27.46L189,219.42c18.78-16.09,36.3-42.72,44.4-86.77V26.3H161.46v.07a41.55,41.55,0,0,0-39.14,41.49v5.75h0v59H25.64v71.92h.07A41.56,41.56,0,0,0,67.2,243.71H91.93c3.44-20.63,7.32-39,10-47.34C106.48,182.27,109.78,168.19,106.39,152.61ZM184.19,103c1.82-3.13,4.91-2.24,6.67,1.24,6.14,12.11,5.5,23.89,1.2,35.56-1.51,4.12-2.78,8.35-4.45,13.41-2.67-14.2-6.06-26.06-6.58-39.75A21.93,21.93,0,0,1,184.19,103Zm-6.43,28.24c2,5.29,5.79,19.49,6.42,21,2.48,6.08-1.14,10.17-3.47,14.6-1.59,3-6.33,8.62-6.73,8.62-2.08-12.63-4.34-25.25-6.09-37.91C167.19,132.06,173.73,121.65,177.76,131.23ZM158.62,155.1c4.68-8.44,11.23,12.57,12.77,17.92,1.11,3.84.83,6.64-1.85,10.33-2,2.71-4.24,5.27-6.79,8.55C160.21,180.91,153.94,163.54,158.62,155.1Z\" transform=\"translate(-25.64 -26.3)\" style=\"fill: #fff\"/>\r\n    <path d=\"M332.42,172.7a41.56,41.56,0,0,0-41.53-40h-57.5c-8.1,44-25.62,70.68-44.4,86.77-5.13,7.21-9.79,14.11-13.79,20.91-16.16,27.42-21.71,53.27-4.82,91.75.3.49.38,1,.75,1h22.2v0a41.56,41.56,0,0,0,40.06-41.53v-33.1h0V243.71h99.06v-71Z\" transform=\"translate(-25.64 -26.3)\" style=\"fill: #fff\"/>\r\n  </g>\r\n</svg>";

var LogoMarkBlue = "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"4.26in\" height=\"4.26in\" viewBox=\"0 0 306.81 306.81\">\r\n  <g>\r\n    <path d=\"M106.39,152.61c-1.4-6.43,2.49-9.33,8.5-6.68A26.08,26.08,0,0,1,130.7,168.1c1.34,13.69-2.84,27.58,0,41.37,1.16,5.14,5.61,7.78,10.65,7,8.2-1.29,14.68-6,19.55-12.1a357.81,357.81,0,0,0,24.78-34.57C194.8,155,198,137.57,201,120.16c1.12-6.49,1.9-13.09,3.52-19.41a13.87,13.87,0,0,1,4.88-7.28c3.87-2.87,7.39-1.35,8.28,3.75,4.36,29.83,1,65.45-10.39,92.07-4.26,9.8-10.42,18.69-16.41,27.46L189,219.42c18.78-16.09,36.3-42.72,44.4-86.77V26.3H161.46v.07a41.55,41.55,0,0,0-39.14,41.49v5.75h0v59H25.64v71.92h.07A41.56,41.56,0,0,0,67.2,243.71H91.93c3.44-20.63,7.32-39,10-47.34C106.48,182.27,109.78,168.19,106.39,152.61ZM184.19,103c1.82-3.13,4.91-2.24,6.67,1.24,6.14,12.11,5.5,23.89,1.2,35.56-1.51,4.12-2.78,8.35-4.45,13.41-2.67-14.2-6.06-26.06-6.58-39.75A21.93,21.93,0,0,1,184.19,103Zm-6.43,28.24c2,5.29,5.79,19.49,6.42,21,2.48,6.08-1.14,10.17-3.47,14.6-1.59,3-6.33,8.62-6.73,8.62-2.08-12.63-4.34-25.25-6.09-37.91C167.19,132.06,173.73,121.65,177.76,131.23ZM158.62,155.1c4.68-8.44,11.23,12.57,12.77,17.92,1.11,3.84.83,6.64-1.85,10.33-2,2.71-4.24,5.27-6.79,8.55C160.21,180.91,153.94,163.54,158.62,155.1Z\" transform=\"translate(-25.64 -26.3)\" style=\"fill: #00adbb\"/>\r\n    <path d=\"M332.42,172.7a41.56,41.56,0,0,0-41.53-40h-57.5c-8.1,44-25.62,70.68-44.4,86.77-5.13,7.21-9.79,14.11-13.79,20.91-16.16,27.42-21.71,53.27-4.82,91.75.3.49.38,1,.75,1h22.2v0a41.56,41.56,0,0,0,40.06-41.53v-33.1h0V243.71h99.06v-71Z\" transform=\"translate(-25.64 -26.3)\" style=\"fill: #00adbb\"/>\r\n  </g>\r\n</svg>";

var LogoMarkOrange = "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"4.26in\" height=\"4.26in\" viewBox=\"0 0 306.81 306.81\">\r\n  <g>\r\n    <path d=\"M106.39,152.61c-1.4-6.43,2.49-9.33,8.5-6.68A26.08,26.08,0,0,1,130.7,168.1c1.34,13.69-2.84,27.58,0,41.37,1.16,5.14,5.61,7.78,10.65,7,8.2-1.29,14.68-6,19.55-12.1a357.81,357.81,0,0,0,24.78-34.57C194.8,155,198,137.57,201,120.16c1.12-6.49,1.9-13.09,3.52-19.41a13.87,13.87,0,0,1,4.88-7.28c3.87-2.87,7.39-1.35,8.28,3.75,4.36,29.83,1,65.45-10.39,92.07-4.26,9.8-10.42,18.69-16.41,27.46L189,219.42c18.78-16.09,36.3-42.72,44.4-86.77V26.3H161.46v.07a41.55,41.55,0,0,0-39.14,41.49v5.75h0v59H25.64v71.92h.07A41.56,41.56,0,0,0,67.2,243.71H91.93c3.44-20.63,7.32-39,10-47.34C106.48,182.27,109.78,168.19,106.39,152.61ZM184.19,103c1.82-3.13,4.91-2.24,6.67,1.24,6.14,12.11,5.5,23.89,1.2,35.56-1.51,4.12-2.78,8.35-4.45,13.41-2.67-14.2-6.06-26.06-6.58-39.75A21.93,21.93,0,0,1,184.19,103Zm-6.43,28.24c2,5.29,5.79,19.49,6.42,21,2.48,6.08-1.14,10.17-3.47,14.6-1.59,3-6.33,8.62-6.73,8.62-2.08-12.63-4.34-25.25-6.09-37.91C167.19,132.06,173.73,121.65,177.76,131.23ZM158.62,155.1c4.68-8.44,11.23,12.57,12.77,17.92,1.11,3.84.83,6.64-1.85,10.33-2,2.71-4.24,5.27-6.79,8.55C160.21,180.91,153.94,163.54,158.62,155.1Z\" transform=\"translate(-25.64 -26.3)\" style=\"fill: #faa31a\"/>\r\n    <path d=\"M332.42,172.7a41.56,41.56,0,0,0-41.53-40h-57.5c-8.1,44-25.62,70.68-44.4,86.77-5.13,7.21-9.79,14.11-13.79,20.91-16.16,27.42-21.71,53.27-4.82,91.75.3.49.38,1,.75,1h22.2v0a41.56,41.56,0,0,0,40.06-41.53v-33.1h0V243.71h99.06v-71Z\" transform=\"translate(-25.64 -26.3)\" style=\"fill: #ffa400\"/>\r\n  </g>\r\n</svg>";

var LogoHorizTagline = "<svg id=\"logo_horiz_tagline\" data-name=\"Layer 4\" xmlns=\"http://www.w3.org/2000/svg\" width=\"auto\" height=\"2in\" viewBox=\"0 0 275.53 113.25\" >\r\n  <defs/>\r\n  <style>\r\n    .st0{fill:#00adbc}\r\n\t.st1{fill:#ffa500}\r\n  </style>\r\n  <path d=\"M113.24 82.84c.61.53.91 1.24.91 2.14s-.3 1.61-.91 2.14c-.61.53-1.43.8-2.45.8h-2.19v4.05h-1.33v-9.91h3.52c1.02-.01 1.84.25 2.45.78zm-1.06 3.46c.38-.33.57-.77.57-1.32s-.19-.99-.57-1.32-.89-.5-1.54-.5h-2.05v3.63h2.05c.65 0 1.16-.16 1.54-.49zM115.76 91.57c-.43-.37-.64-.87-.64-1.49 0-.74.33-1.28.98-1.65.5-.25 1.28-.44 2.35-.57l1.3-.15v-.11c0-.64-.12-1.1-.36-1.38-.24-.28-.63-.42-1.17-.42-.47 0-.85.12-1.13.36s-.43.58-.46 1.02h-1.27c.05-.72.33-1.29.84-1.72s1.18-.64 2-.64c.96 0 1.66.23 2.09.69.44.46.66 1.2.66 2.21v1.88c0 1.06.08 1.85.24 2.36h-1.24c-.06-.39-.09-.81-.11-1.27-.16.45-.45.8-.87 1.05s-.91.38-1.48.38c-.72.01-1.3-.18-1.73-.55zm3.45-1.03c.37-.41.55-.95.55-1.63v-.35l-1.9.28c-.51.07-.89.21-1.12.4-.24.19-.36.46-.36.8s.12.61.36.81.58.29 1 .29c.61.01 1.1-.19 1.47-.6zM122.36 84.98h1.3v-1.83l1.19-.5v2.33h1.75v.98h-1.75v3.87c0 .4.08.69.25.87.16.18.42.27.77.27.21 0 .45-.03.73-.1v1.09c-.31.08-.65.13-1.03.13-.71 0-1.2-.19-1.48-.57s-.42-.93-.42-1.65v-3.91h-1.3v-.98zM128.53 82.18h1.35v1.49h-1.35v-1.49zm.09 2.8h1.19v6.98h-1.19v-6.98zM138.11 88.82h-4.96c.01.68.2 1.23.58 1.64s.88.62 1.5.62c.92 0 1.54-.44 1.86-1.33l.98.43c-.49 1.29-1.47 1.94-2.92 1.94-1 0-1.79-.31-2.35-.93-.56-.62-.84-1.5-.84-2.65 0-1.17.28-2.09.84-2.75.56-.66 1.34-.99 2.33-.99.95 0 1.68.27 2.2.81.52.54.77 1.33.77 2.36v.85zm-1.2-1.12c0-.63-.16-1.12-.47-1.45-.31-.33-.76-.5-1.33-.5-.6 0-1.08.19-1.42.56-.34.37-.52.89-.54 1.55h3.75v-.16zM140.34 84.98h1.12v1.38c.46-1.05 1.23-1.58 2.33-1.58 1.55 0 2.33.94 2.33 2.83v4.34h-1.19v-4.27c0-1.24-.51-1.86-1.54-1.86-.58 0-1.03.22-1.37.66-.33.44-.5 1.05-.5 1.82v3.64h-1.19v-6.96zM147.51 84.98h1.3v-1.83l1.19-.5v2.33h1.75v.98H150v3.87c0 .4.08.69.25.87.16.18.42.27.77.27.21 0 .45-.03.73-.1v1.09c-.31.08-.65.13-1.03.13-.71 0-1.2-.19-1.48-.57s-.42-.93-.42-1.65v-3.91h-1.3v-.98zM158.18 90.73c-.76-.98-1.14-2.23-1.14-3.76 0-1.56.39-2.82 1.17-3.76.78-.94 1.89-1.41 3.34-1.41 1.16 0 2.08.31 2.74.94.66.62 1.06 1.47 1.19 2.54l-1.35.14c-.1-.76-.38-1.37-.83-1.81s-1.05-.67-1.81-.67c-.96 0-1.71.37-2.24 1.1s-.8 1.71-.8 2.92c0 1.2.27 2.18.8 2.94.54.76 1.29 1.14 2.27 1.14.7 0 1.29-.22 1.76-.65.47-.43.78-1.02.92-1.77l1.29.22c-.21 1-.64 1.81-1.29 2.43s-1.55.92-2.67.92c-1.48.01-2.59-.48-3.35-1.46zM167.65 91.57c-.43-.37-.64-.87-.64-1.49 0-.74.33-1.28.98-1.65.5-.25 1.28-.44 2.35-.57l1.3-.15v-.11c0-.64-.12-1.1-.36-1.38-.24-.28-.63-.42-1.17-.42-.47 0-.85.12-1.13.36s-.43.58-.46 1.02h-1.27c.05-.72.33-1.29.84-1.72s1.18-.64 2-.64c.96 0 1.66.23 2.09.69.44.46.66 1.2.66 2.21v1.88c0 1.06.08 1.85.24 2.36h-1.24c-.06-.39-.09-.81-.11-1.27-.16.45-.45.8-.87 1.05s-.91.38-1.48.38c-.73.01-1.3-.18-1.73-.55zm3.44-1.03c.37-.41.55-.95.55-1.63v-.35l-1.9.28c-.51.07-.89.21-1.12.4-.24.19-.36.46-.36.8s.12.61.36.81.58.29 1 .29c.62.01 1.1-.19 1.47-.6zM177.35 85.3c.37-.33.8-.49 1.3-.49.11 0 .2 0 .25.01v1.16h-.06c-.66 0-1.17.18-1.54.54-.21.2-.36.46-.47.77-.11.31-.18.57-.2.8-.02.22-.03.52-.03.88v2.99h-1.19v-6.98h1.1v1.59c.2-.52.48-.95.84-1.27zM186.1 88.82h-4.96c.01.68.2 1.23.58 1.64s.88.62 1.5.62c.92 0 1.54-.44 1.86-1.33l.98.43c-.49 1.29-1.47 1.94-2.92 1.94-1 0-1.79-.31-2.35-.93-.56-.62-.84-1.5-.84-2.65 0-1.17.28-2.09.84-2.75.56-.66 1.34-.99 2.33-.99.95 0 1.68.27 2.2.81.52.54.77 1.33.77 2.36v.85zm-1.2-1.12c0-.63-.16-1.12-.47-1.45-.31-.33-.76-.5-1.33-.5-.6 0-1.08.19-1.42.56-.34.37-.52.89-.54 1.55h3.75v-.16zM198.34 82.84c.61.53.91 1.24.91 2.14s-.3 1.61-.91 2.14c-.61.53-1.43.8-2.45.8h-2.19v4.05h-1.33v-9.91h3.52c1.03-.01 1.84.25 2.45.78zm-1.05 3.46c.38-.33.57-.77.57-1.32s-.19-.99-.57-1.32-.89-.5-1.54-.5h-2.05v3.63h2.05c.65 0 1.16-.16 1.54-.49zM200.87 91.57c-.43-.37-.64-.87-.64-1.49 0-.74.33-1.28.98-1.65.5-.25 1.28-.44 2.35-.57l1.3-.15v-.11c0-.64-.12-1.1-.36-1.38-.24-.28-.63-.42-1.17-.42-.47 0-.85.12-1.13.36s-.43.58-.46 1.02h-1.27c.05-.72.33-1.29.84-1.72s1.18-.64 2-.64c.96 0 1.66.23 2.09.69.44.46.66 1.2.66 2.21v1.88c0 1.06.08 1.85.24 2.36h-1.24c-.06-.39-.09-.81-.11-1.27-.16.45-.45.8-.87 1.05s-.91.38-1.48.38c-.73.01-1.3-.18-1.73-.55zm3.44-1.03c.37-.41.55-.95.55-1.63v-.35l-1.9.28c-.51.07-.89.21-1.12.4-.24.19-.36.46-.36.8s.12.61.36.81.58.29 1 .29c.62.01 1.11-.19 1.47-.6zM210.58 85.3c.37-.33.8-.49 1.3-.49.11 0 .2 0 .25.01v1.16h-.06c-.66 0-1.17.18-1.54.54-.21.2-.36.46-.47.77-.11.31-.18.57-.2.8-.02.22-.03.52-.03.88v2.99h-1.19v-6.98h1.1v1.59c.2-.52.47-.95.84-1.27zM213.25 84.98h1.3v-1.83l1.19-.5v2.33h1.75v.98h-1.75v3.87c0 .4.08.69.24.87.16.18.42.27.78.27.21 0 .45-.03.73-.1v1.09c-.31.08-.65.13-1.03.13-.71 0-1.2-.19-1.48-.57s-.42-.93-.42-1.65v-3.91h-1.3v-.98zM219.5 84.98h1.12v1.38c.46-1.05 1.23-1.58 2.33-1.58 1.55 0 2.33.94 2.33 2.83v4.34h-1.19v-4.27c0-1.24-.51-1.86-1.54-1.86-.58 0-1.03.22-1.37.66-.33.44-.5 1.05-.5 1.82v3.64h-1.19v-6.96zM233.38 88.82h-4.96c.01.68.2 1.23.58 1.64s.88.62 1.5.62c.92 0 1.54-.44 1.86-1.33l.98.43c-.49 1.29-1.47 1.94-2.92 1.94-1 0-1.79-.31-2.35-.93-.56-.62-.84-1.5-.84-2.65 0-1.17.28-2.09.84-2.75.56-.66 1.34-.99 2.33-.99.95 0 1.68.27 2.2.81.52.54.77 1.33.77 2.36v.85zm-1.21-1.12c0-.63-.16-1.12-.47-1.45-.31-.33-.76-.5-1.33-.5-.6 0-1.08.19-1.42.56-.34.37-.52.89-.54 1.55h3.75v-.16zM237.53 85.3c.37-.33.8-.49 1.3-.49.11 0 .2 0 .25.01v1.16h-.06c-.66 0-1.17.18-1.54.54-.21.2-.36.46-.47.77-.11.31-.18.57-.2.8-.02.22-.03.52-.03.88v2.99h-1.19v-6.98h1.1v1.59c.2-.52.47-.95.84-1.27zM241.04 91.57c-.53-.37-.85-.9-.97-1.59l1.2-.21c.08.44.28.78.6 1.02.32.24.73.36 1.24.36.46 0 .81-.1 1.07-.3.26-.2.38-.45.38-.76 0-.3-.08-.52-.25-.67-.17-.15-.42-.25-.75-.31l-1.37-.25c-1.24-.23-1.86-.88-1.86-1.95 0-.61.24-1.12.72-1.51s1.12-.59 1.93-.59c.78 0 1.42.17 1.92.5.5.34.78.8.84 1.38l-1.17.27c-.08-.36-.27-.65-.54-.87-.28-.21-.65-.32-1.1-.32-.45 0-.8.09-1.05.28s-.38.45-.38.8c0 .53.36.86 1.08.99l1.35.25c1.21.23 1.82.87 1.82 1.9 0 .64-.24 1.16-.71 1.55-.47.39-1.12.59-1.96.59-.83 0-1.51-.19-2.04-.56z\" class=\"st0\"/>\r\n  <g>\r\n    <path d=\"M112.71 69.37c-2.16 0-4.18-.34-6-1.02-1.78-.66-3.33-1.62-4.6-2.87-1.28-1.25-2.3-2.82-3.04-4.67-.75-1.88-1.13-4.07-1.13-6.53 0-2.49.39-4.7 1.15-6.57.76-1.85 1.79-3.41 3.08-4.64 1.3-1.23 2.85-2.19 4.61-2.83 1.81-.66 3.8-.99 5.93-.99s4.12.33 5.92.99c1.77.65 3.33 1.6 4.65 2.84 1.3 1.23 2.35 2.79 3.1 4.63.76 1.87 1.15 4.08 1.15 6.57 0 2.5-.38 4.72-1.13 6.62-.74 1.86-1.76 3.42-3.05 4.65-1.29 1.23-2.85 2.18-4.63 2.83-1.82.66-3.84.99-6.01.99zm.06-26.77c-2.84 0-5.16 1.05-6.9 3.11-1.65 1.96-2.49 4.85-2.49 8.57 0 3.72.82 6.6 2.45 8.58 1.72 2.1 4.04 3.16 6.89 3.16 2.88 0 5.22-1.06 6.94-3.16 1.62-1.98 2.45-4.86 2.45-8.58 0-3.67-.81-6.54-2.41-8.51-1.72-2.1-4.05-3.17-6.93-3.17zM138.26 69.32c-1.37 0-2.66-.1-3.82-.29-1.08-.18-1.99-.45-2.7-.8-.61-.3-1.08-.66-1.39-1.07-.24-.31-.35-.67-.35-1.14 0-.45.07-.81.22-1.06.75.33 1.55.65 2.4.93 1.54.51 3.31.77 5.27.77 1.47 0 2.62-.24 3.53-.73 1.25-.68 1.97-1.82 1.97-3.11 0-1.2-.56-2.23-1.57-2.91-.69-.46-1.61-.78-2.92-1.01l-1.56-.31c-2.73-.53-4.73-1.34-5.96-2.39-1.04-.89-1.54-2.2-1.54-3.99 0-.98.2-1.83.61-2.59.41-.77.98-1.41 1.75-1.93.83-.57 1.86-1.03 3.07-1.36 1.25-.34 2.68-.51 4.23-.51 1.19 0 2.32.09 3.36.26.97.16 1.81.41 2.49.72.55.25.98.57 1.27.93.2.25.29.53.29.91 0 .41-.06.75-.16 1.03-.61-.21-1.29-.4-2.02-.57-.72-.17-1.47-.32-2.22-.43-.8-.12-1.54-.18-2.21-.18-1.46 0-2.62.18-3.52.56-1.42.59-2.24 1.75-2.24 3.18 0 1.08.51 2.03 1.43 2.67.6.42 1.46.74 2.78 1.02l1.63.37c3.77.86 5.51 1.95 6.3 2.7 1.02.97 1.51 2.21 1.51 3.8 0 2.06-.7 3.55-2.21 4.68-1.66 1.22-4.25 1.85-7.72 1.85zM155.03 68.84c-.66 0-1.25-.04-1.76-.13-.29-.05-.52-.14-.67-.25-.08-.06-.2-.17-.32-.44-.07-.17-.19-.56-.19-1.36V46.71c.65-.1 1.31-.16 1.97-.16.66 0 1.25.04 1.75.13.29.05.52.14.68.25.05.03.19.14.32.45.07.16.18.56.18 1.35v19.95c-.64.11-1.3.16-1.96.16zm-.48-28.75c-1.22 0-1.79-.43-2.11-.76-.52-.53-.76-1.15-.76-1.95s.24-1.42.77-1.96c.32-.33.89-.76 2.11-.76 1.22 0 1.79.43 2.11.76.52.53.76 1.15.76 1.95s-.24 1.42-.76 1.95c-.33.34-.89.77-2.12.77z\" class=\"st0\"/>\r\n    <g>\r\n      <path d=\"M164.88 68.02c-.8-.8-1.2-1.88-1.2-3.23V36.68c.39-.07.95-.16 1.68-.27.73-.11 1.45-.16 2.16-.16 1.6 0 2.75.27 3.47.8.71.53 1.07 1.58 1.07 3.15v22.24h12.8c.21.36.42.82.61 1.39.2.57.29 1.19.29 1.87 0 1.17-.26 2.05-.77 2.64-.52.59-1.22.88-2.11.88H168.1c-1.35 0-2.42-.4-3.22-1.2zM193.27 69.48c-1.67 0-2.83-.29-3.49-.85s-.99-1.6-.99-3.09V36.68c.39-.07.95-.16 1.68-.27.73-.11 1.47-.16 2.21-.16 1.6 0 2.75.27 3.44.8s1.04 1.58 1.04 3.15v28.85c-.39.11-.94.2-1.65.29-.71.1-1.45.14-2.24.14zM224.69 36.79c.21.36.41.82.59 1.39s.27 1.19.27 1.87c0 1.17-.26 2.04-.77 2.61-.52.57-1.24.85-2.16.85h-11.84v6.99h12.11c.21.39.42.85.61 1.39s.29 1.16.29 1.87c0 1.17-.27 2.04-.8 2.59-.53.55-1.25.83-2.13.83h-9.97v11.89c-.39.11-.94.2-1.65.29-.71.09-1.46.13-2.24.13-1.67 0-2.83-.29-3.49-.85s-.99-1.6-.99-3.09V41.22c0-1.35.4-2.43 1.2-3.23.8-.8 1.88-1.2 3.23-1.2h17.74zM229.73 68.02c-.8-.8-1.2-1.88-1.2-3.23V41.22c0-1.35.4-2.43 1.2-3.23.8-.8 1.88-1.2 3.23-1.2h17.65c.21.36.41.8.59 1.33s.27 1.14.27 1.81c0 1.17-.26 2.04-.77 2.61-.52.57-1.24.85-2.16.85H236.7v5.97h12.37c.21.36.41.8.59 1.33s.27 1.14.27 1.81c0 1.17-.25 2.04-.75 2.59-.5.55-1.21.83-2.13.83H236.7v6.67h14.13c.21.36.41.82.59 1.39s.27 1.19.27 1.87c0 1.17-.26 2.03-.77 2.56-.52.53-1.22.8-2.11.8h-15.84c-1.37.01-2.44-.39-3.24-1.19z\" class=\"st1\"/>\r\n    </g>\r\n    <g>\r\n      <path d=\"M36.48 46.37c-.31-1.42.55-2.05 1.87-1.47 2.1.92 3.28 2.74 3.49 4.89.29 3.02-.63 6.08-.01 9.12.25 1.13 1.24 1.72 2.35 1.54 1.81-.28 3.24-1.33 4.31-2.67 1.95-2.43 3.81-4.96 5.46-7.62 2.02-3.26 2.73-7.11 3.39-10.94.25-1.43.42-2.89.77-4.28.16-.61.58-1.24 1.08-1.61.85-.63 1.63-.3 1.83.83.96 6.58.22 14.43-2.29 20.3-.94 2.16-2.3 4.12-3.62 6.05-.14.2-.28.39-.42.59 4.14-3.55 8-9.42 9.79-19.13V18.53H48.63v.02c-4.81.28-8.63 4.26-8.63 9.14v14.29H18.69v15.85h.02c.28 4.81 4.26 8.63 9.14 8.63H33.3c.76-4.55 1.61-8.6 2.2-10.44 1-3.11 1.73-6.22.98-9.65zm17.15-10.94c.4-.69 1.08-.49 1.47.27 1.35 2.67 1.21 5.27.26 7.84-.33.91-.61 1.84-.98 2.95-.59-3.13-1.34-5.74-1.45-8.76.01-.79.31-1.63.7-2.3zm-1.42 6.23c.45 1.17 1.28 4.3 1.42 4.64.55 1.34-.25 2.24-.76 3.22-.35.67-1.4 1.9-1.48 1.9-.46-2.79-.96-5.57-1.34-8.36-.17-1.22 1.27-3.52 2.16-1.4zm-4.22 5.26c1.03-1.86 2.48 2.77 2.82 3.95.24.85.18 1.46-.41 2.28-.44.6-.93 1.16-1.5 1.89-.56-2.43-1.94-6.26-.91-8.12z\" class=\"st0\"/>\r\n      <path d=\"M86.3 50.8c-.17-4.91-4.21-8.83-9.15-8.83H64.47c-1.79 9.71-5.65 15.58-9.79 19.13-1.13 1.59-2.16 3.11-3.04 4.61-3.56 6.05-4.79 11.74-1.06 20.22.07.11.08.23.17.23h4.89v-.01c4.91-.17 8.83-4.21 8.83-9.15v-7.3-2.81-.44h21.84v-9.16-6.16c0-.11 0-.22-.01-.33.01 0 .01 0 0 0z\" class=\"st1\"/>\r\n    </g>\r\n  </g>\r\n</svg>";

var LogoHorizTaglineBlack = "<svg id=\"logo_horiz_tagline\" data-name=\"Layer 4\" xmlns=\"http://www.w3.org/2000/svg\" width=\"auto\" height=\"2in\" viewBox=\"0 0 275.53 113.25\" >\r\n  <defs/>\r\n  <style>\r\n    .st0{fill:#000}\r\n\t.st1{fill:#000}\r\n  </style>\r\n  <path d=\"M113.24 82.84c.61.53.91 1.24.91 2.14s-.3 1.61-.91 2.14c-.61.53-1.43.8-2.45.8h-2.19v4.05h-1.33v-9.91h3.52c1.02-.01 1.84.25 2.45.78zm-1.06 3.46c.38-.33.57-.77.57-1.32s-.19-.99-.57-1.32-.89-.5-1.54-.5h-2.05v3.63h2.05c.65 0 1.16-.16 1.54-.49zM115.76 91.57c-.43-.37-.64-.87-.64-1.49 0-.74.33-1.28.98-1.65.5-.25 1.28-.44 2.35-.57l1.3-.15v-.11c0-.64-.12-1.1-.36-1.38-.24-.28-.63-.42-1.17-.42-.47 0-.85.12-1.13.36s-.43.58-.46 1.02h-1.27c.05-.72.33-1.29.84-1.72s1.18-.64 2-.64c.96 0 1.66.23 2.09.69.44.46.66 1.2.66 2.21v1.88c0 1.06.08 1.85.24 2.36h-1.24c-.06-.39-.09-.81-.11-1.27-.16.45-.45.8-.87 1.05s-.91.38-1.48.38c-.72.01-1.3-.18-1.73-.55zm3.45-1.03c.37-.41.55-.95.55-1.63v-.35l-1.9.28c-.51.07-.89.21-1.12.4-.24.19-.36.46-.36.8s.12.61.36.81.58.29 1 .29c.61.01 1.1-.19 1.47-.6zM122.36 84.98h1.3v-1.83l1.19-.5v2.33h1.75v.98h-1.75v3.87c0 .4.08.69.25.87.16.18.42.27.77.27.21 0 .45-.03.73-.1v1.09c-.31.08-.65.13-1.03.13-.71 0-1.2-.19-1.48-.57s-.42-.93-.42-1.65v-3.91h-1.3v-.98zM128.53 82.18h1.35v1.49h-1.35v-1.49zm.09 2.8h1.19v6.98h-1.19v-6.98zM138.11 88.82h-4.96c.01.68.2 1.23.58 1.64s.88.62 1.5.62c.92 0 1.54-.44 1.86-1.33l.98.43c-.49 1.29-1.47 1.94-2.92 1.94-1 0-1.79-.31-2.35-.93-.56-.62-.84-1.5-.84-2.65 0-1.17.28-2.09.84-2.75.56-.66 1.34-.99 2.33-.99.95 0 1.68.27 2.2.81.52.54.77 1.33.77 2.36v.85zm-1.2-1.12c0-.63-.16-1.12-.47-1.45-.31-.33-.76-.5-1.33-.5-.6 0-1.08.19-1.42.56-.34.37-.52.89-.54 1.55h3.75v-.16zM140.34 84.98h1.12v1.38c.46-1.05 1.23-1.58 2.33-1.58 1.55 0 2.33.94 2.33 2.83v4.34h-1.19v-4.27c0-1.24-.51-1.86-1.54-1.86-.58 0-1.03.22-1.37.66-.33.44-.5 1.05-.5 1.82v3.64h-1.19v-6.96zM147.51 84.98h1.3v-1.83l1.19-.5v2.33h1.75v.98H150v3.87c0 .4.08.69.25.87.16.18.42.27.77.27.21 0 .45-.03.73-.1v1.09c-.31.08-.65.13-1.03.13-.71 0-1.2-.19-1.48-.57s-.42-.93-.42-1.65v-3.91h-1.3v-.98zM158.18 90.73c-.76-.98-1.14-2.23-1.14-3.76 0-1.56.39-2.82 1.17-3.76.78-.94 1.89-1.41 3.34-1.41 1.16 0 2.08.31 2.74.94.66.62 1.06 1.47 1.19 2.54l-1.35.14c-.1-.76-.38-1.37-.83-1.81s-1.05-.67-1.81-.67c-.96 0-1.71.37-2.24 1.1s-.8 1.71-.8 2.92c0 1.2.27 2.18.8 2.94.54.76 1.29 1.14 2.27 1.14.7 0 1.29-.22 1.76-.65.47-.43.78-1.02.92-1.77l1.29.22c-.21 1-.64 1.81-1.29 2.43s-1.55.92-2.67.92c-1.48.01-2.59-.48-3.35-1.46zM167.65 91.57c-.43-.37-.64-.87-.64-1.49 0-.74.33-1.28.98-1.65.5-.25 1.28-.44 2.35-.57l1.3-.15v-.11c0-.64-.12-1.1-.36-1.38-.24-.28-.63-.42-1.17-.42-.47 0-.85.12-1.13.36s-.43.58-.46 1.02h-1.27c.05-.72.33-1.29.84-1.72s1.18-.64 2-.64c.96 0 1.66.23 2.09.69.44.46.66 1.2.66 2.21v1.88c0 1.06.08 1.85.24 2.36h-1.24c-.06-.39-.09-.81-.11-1.27-.16.45-.45.8-.87 1.05s-.91.38-1.48.38c-.73.01-1.3-.18-1.73-.55zm3.44-1.03c.37-.41.55-.95.55-1.63v-.35l-1.9.28c-.51.07-.89.21-1.12.4-.24.19-.36.46-.36.8s.12.61.36.81.58.29 1 .29c.62.01 1.1-.19 1.47-.6zM177.35 85.3c.37-.33.8-.49 1.3-.49.11 0 .2 0 .25.01v1.16h-.06c-.66 0-1.17.18-1.54.54-.21.2-.36.46-.47.77-.11.31-.18.57-.2.8-.02.22-.03.52-.03.88v2.99h-1.19v-6.98h1.1v1.59c.2-.52.48-.95.84-1.27zM186.1 88.82h-4.96c.01.68.2 1.23.58 1.64s.88.62 1.5.62c.92 0 1.54-.44 1.86-1.33l.98.43c-.49 1.29-1.47 1.94-2.92 1.94-1 0-1.79-.31-2.35-.93-.56-.62-.84-1.5-.84-2.65 0-1.17.28-2.09.84-2.75.56-.66 1.34-.99 2.33-.99.95 0 1.68.27 2.2.81.52.54.77 1.33.77 2.36v.85zm-1.2-1.12c0-.63-.16-1.12-.47-1.45-.31-.33-.76-.5-1.33-.5-.6 0-1.08.19-1.42.56-.34.37-.52.89-.54 1.55h3.75v-.16zM198.34 82.84c.61.53.91 1.24.91 2.14s-.3 1.61-.91 2.14c-.61.53-1.43.8-2.45.8h-2.19v4.05h-1.33v-9.91h3.52c1.03-.01 1.84.25 2.45.78zm-1.05 3.46c.38-.33.57-.77.57-1.32s-.19-.99-.57-1.32-.89-.5-1.54-.5h-2.05v3.63h2.05c.65 0 1.16-.16 1.54-.49zM200.87 91.57c-.43-.37-.64-.87-.64-1.49 0-.74.33-1.28.98-1.65.5-.25 1.28-.44 2.35-.57l1.3-.15v-.11c0-.64-.12-1.1-.36-1.38-.24-.28-.63-.42-1.17-.42-.47 0-.85.12-1.13.36s-.43.58-.46 1.02h-1.27c.05-.72.33-1.29.84-1.72s1.18-.64 2-.64c.96 0 1.66.23 2.09.69.44.46.66 1.2.66 2.21v1.88c0 1.06.08 1.85.24 2.36h-1.24c-.06-.39-.09-.81-.11-1.27-.16.45-.45.8-.87 1.05s-.91.38-1.48.38c-.73.01-1.3-.18-1.73-.55zm3.44-1.03c.37-.41.55-.95.55-1.63v-.35l-1.9.28c-.51.07-.89.21-1.12.4-.24.19-.36.46-.36.8s.12.61.36.81.58.29 1 .29c.62.01 1.11-.19 1.47-.6zM210.58 85.3c.37-.33.8-.49 1.3-.49.11 0 .2 0 .25.01v1.16h-.06c-.66 0-1.17.18-1.54.54-.21.2-.36.46-.47.77-.11.31-.18.57-.2.8-.02.22-.03.52-.03.88v2.99h-1.19v-6.98h1.1v1.59c.2-.52.47-.95.84-1.27zM213.25 84.98h1.3v-1.83l1.19-.5v2.33h1.75v.98h-1.75v3.87c0 .4.08.69.24.87.16.18.42.27.78.27.21 0 .45-.03.73-.1v1.09c-.31.08-.65.13-1.03.13-.71 0-1.2-.19-1.48-.57s-.42-.93-.42-1.65v-3.91h-1.3v-.98zM219.5 84.98h1.12v1.38c.46-1.05 1.23-1.58 2.33-1.58 1.55 0 2.33.94 2.33 2.83v4.34h-1.19v-4.27c0-1.24-.51-1.86-1.54-1.86-.58 0-1.03.22-1.37.66-.33.44-.5 1.05-.5 1.82v3.64h-1.19v-6.96zM233.38 88.82h-4.96c.01.68.2 1.23.58 1.64s.88.62 1.5.62c.92 0 1.54-.44 1.86-1.33l.98.43c-.49 1.29-1.47 1.94-2.92 1.94-1 0-1.79-.31-2.35-.93-.56-.62-.84-1.5-.84-2.65 0-1.17.28-2.09.84-2.75.56-.66 1.34-.99 2.33-.99.95 0 1.68.27 2.2.81.52.54.77 1.33.77 2.36v.85zm-1.21-1.12c0-.63-.16-1.12-.47-1.45-.31-.33-.76-.5-1.33-.5-.6 0-1.08.19-1.42.56-.34.37-.52.89-.54 1.55h3.75v-.16zM237.53 85.3c.37-.33.8-.49 1.3-.49.11 0 .2 0 .25.01v1.16h-.06c-.66 0-1.17.18-1.54.54-.21.2-.36.46-.47.77-.11.31-.18.57-.2.8-.02.22-.03.52-.03.88v2.99h-1.19v-6.98h1.1v1.59c.2-.52.47-.95.84-1.27zM241.04 91.57c-.53-.37-.85-.9-.97-1.59l1.2-.21c.08.44.28.78.6 1.02.32.24.73.36 1.24.36.46 0 .81-.1 1.07-.3.26-.2.38-.45.38-.76 0-.3-.08-.52-.25-.67-.17-.15-.42-.25-.75-.31l-1.37-.25c-1.24-.23-1.86-.88-1.86-1.95 0-.61.24-1.12.72-1.51s1.12-.59 1.93-.59c.78 0 1.42.17 1.92.5.5.34.78.8.84 1.38l-1.17.27c-.08-.36-.27-.65-.54-.87-.28-.21-.65-.32-1.1-.32-.45 0-.8.09-1.05.28s-.38.45-.38.8c0 .53.36.86 1.08.99l1.35.25c1.21.23 1.82.87 1.82 1.9 0 .64-.24 1.16-.71 1.55-.47.39-1.12.59-1.96.59-.83 0-1.51-.19-2.04-.56z\" class=\"st0\"/>\r\n  <g>\r\n    <path d=\"M112.71 69.37c-2.16 0-4.18-.34-6-1.02-1.78-.66-3.33-1.62-4.6-2.87-1.28-1.25-2.3-2.82-3.04-4.67-.75-1.88-1.13-4.07-1.13-6.53 0-2.49.39-4.7 1.15-6.57.76-1.85 1.79-3.41 3.08-4.64 1.3-1.23 2.85-2.19 4.61-2.83 1.81-.66 3.8-.99 5.93-.99s4.12.33 5.92.99c1.77.65 3.33 1.6 4.65 2.84 1.3 1.23 2.35 2.79 3.1 4.63.76 1.87 1.15 4.08 1.15 6.57 0 2.5-.38 4.72-1.13 6.62-.74 1.86-1.76 3.42-3.05 4.65-1.29 1.23-2.85 2.18-4.63 2.83-1.82.66-3.84.99-6.01.99zm.06-26.77c-2.84 0-5.16 1.05-6.9 3.11-1.65 1.96-2.49 4.85-2.49 8.57 0 3.72.82 6.6 2.45 8.58 1.72 2.1 4.04 3.16 6.89 3.16 2.88 0 5.22-1.06 6.94-3.16 1.62-1.98 2.45-4.86 2.45-8.58 0-3.67-.81-6.54-2.41-8.51-1.72-2.1-4.05-3.17-6.93-3.17zM138.26 69.32c-1.37 0-2.66-.1-3.82-.29-1.08-.18-1.99-.45-2.7-.8-.61-.3-1.08-.66-1.39-1.07-.24-.31-.35-.67-.35-1.14 0-.45.07-.81.22-1.06.75.33 1.55.65 2.4.93 1.54.51 3.31.77 5.27.77 1.47 0 2.62-.24 3.53-.73 1.25-.68 1.97-1.82 1.97-3.11 0-1.2-.56-2.23-1.57-2.91-.69-.46-1.61-.78-2.92-1.01l-1.56-.31c-2.73-.53-4.73-1.34-5.96-2.39-1.04-.89-1.54-2.2-1.54-3.99 0-.98.2-1.83.61-2.59.41-.77.98-1.41 1.75-1.93.83-.57 1.86-1.03 3.07-1.36 1.25-.34 2.68-.51 4.23-.51 1.19 0 2.32.09 3.36.26.97.16 1.81.41 2.49.72.55.25.98.57 1.27.93.2.25.29.53.29.91 0 .41-.06.75-.16 1.03-.61-.21-1.29-.4-2.02-.57-.72-.17-1.47-.32-2.22-.43-.8-.12-1.54-.18-2.21-.18-1.46 0-2.62.18-3.52.56-1.42.59-2.24 1.75-2.24 3.18 0 1.08.51 2.03 1.43 2.67.6.42 1.46.74 2.78 1.02l1.63.37c3.77.86 5.51 1.95 6.3 2.7 1.02.97 1.51 2.21 1.51 3.8 0 2.06-.7 3.55-2.21 4.68-1.66 1.22-4.25 1.85-7.72 1.85zM155.03 68.84c-.66 0-1.25-.04-1.76-.13-.29-.05-.52-.14-.67-.25-.08-.06-.2-.17-.32-.44-.07-.17-.19-.56-.19-1.36V46.71c.65-.1 1.31-.16 1.97-.16.66 0 1.25.04 1.75.13.29.05.52.14.68.25.05.03.19.14.32.45.07.16.18.56.18 1.35v19.95c-.64.11-1.3.16-1.96.16zm-.48-28.75c-1.22 0-1.79-.43-2.11-.76-.52-.53-.76-1.15-.76-1.95s.24-1.42.77-1.96c.32-.33.89-.76 2.11-.76 1.22 0 1.79.43 2.11.76.52.53.76 1.15.76 1.95s-.24 1.42-.76 1.95c-.33.34-.89.77-2.12.77z\" class=\"st0\"/>\r\n    <g>\r\n      <path d=\"M164.88 68.02c-.8-.8-1.2-1.88-1.2-3.23V36.68c.39-.07.95-.16 1.68-.27.73-.11 1.45-.16 2.16-.16 1.6 0 2.75.27 3.47.8.71.53 1.07 1.58 1.07 3.15v22.24h12.8c.21.36.42.82.61 1.39.2.57.29 1.19.29 1.87 0 1.17-.26 2.05-.77 2.64-.52.59-1.22.88-2.11.88H168.1c-1.35 0-2.42-.4-3.22-1.2zM193.27 69.48c-1.67 0-2.83-.29-3.49-.85s-.99-1.6-.99-3.09V36.68c.39-.07.95-.16 1.68-.27.73-.11 1.47-.16 2.21-.16 1.6 0 2.75.27 3.44.8s1.04 1.58 1.04 3.15v28.85c-.39.11-.94.2-1.65.29-.71.1-1.45.14-2.24.14zM224.69 36.79c.21.36.41.82.59 1.39s.27 1.19.27 1.87c0 1.17-.26 2.04-.77 2.61-.52.57-1.24.85-2.16.85h-11.84v6.99h12.11c.21.39.42.85.61 1.39s.29 1.16.29 1.87c0 1.17-.27 2.04-.8 2.59-.53.55-1.25.83-2.13.83h-9.97v11.89c-.39.11-.94.2-1.65.29-.71.09-1.46.13-2.24.13-1.67 0-2.83-.29-3.49-.85s-.99-1.6-.99-3.09V41.22c0-1.35.4-2.43 1.2-3.23.8-.8 1.88-1.2 3.23-1.2h17.74zM229.73 68.02c-.8-.8-1.2-1.88-1.2-3.23V41.22c0-1.35.4-2.43 1.2-3.23.8-.8 1.88-1.2 3.23-1.2h17.65c.21.36.41.8.59 1.33s.27 1.14.27 1.81c0 1.17-.26 2.04-.77 2.61-.52.57-1.24.85-2.16.85H236.7v5.97h12.37c.21.36.41.8.59 1.33s.27 1.14.27 1.81c0 1.17-.25 2.04-.75 2.59-.5.55-1.21.83-2.13.83H236.7v6.67h14.13c.21.36.41.82.59 1.39s.27 1.19.27 1.87c0 1.17-.26 2.03-.77 2.56-.52.53-1.22.8-2.11.8h-15.84c-1.37.01-2.44-.39-3.24-1.19z\" class=\"st1\"/>\r\n    </g>\r\n    <g>\r\n      <path d=\"M36.48 46.37c-.31-1.42.55-2.05 1.87-1.47 2.1.92 3.28 2.74 3.49 4.89.29 3.02-.63 6.08-.01 9.12.25 1.13 1.24 1.72 2.35 1.54 1.81-.28 3.24-1.33 4.31-2.67 1.95-2.43 3.81-4.96 5.46-7.62 2.02-3.26 2.73-7.11 3.39-10.94.25-1.43.42-2.89.77-4.28.16-.61.58-1.24 1.08-1.61.85-.63 1.63-.3 1.83.83.96 6.58.22 14.43-2.29 20.3-.94 2.16-2.3 4.12-3.62 6.05-.14.2-.28.39-.42.59 4.14-3.55 8-9.42 9.79-19.13V18.53H48.63v.02c-4.81.28-8.63 4.26-8.63 9.14v14.29H18.69v15.85h.02c.28 4.81 4.26 8.63 9.14 8.63H33.3c.76-4.55 1.61-8.6 2.2-10.44 1-3.11 1.73-6.22.98-9.65zm17.15-10.94c.4-.69 1.08-.49 1.47.27 1.35 2.67 1.21 5.27.26 7.84-.33.91-.61 1.84-.98 2.95-.59-3.13-1.34-5.74-1.45-8.76.01-.79.31-1.63.7-2.3zm-1.42 6.23c.45 1.17 1.28 4.3 1.42 4.64.55 1.34-.25 2.24-.76 3.22-.35.67-1.4 1.9-1.48 1.9-.46-2.79-.96-5.57-1.34-8.36-.17-1.22 1.27-3.52 2.16-1.4zm-4.22 5.26c1.03-1.86 2.48 2.77 2.82 3.95.24.85.18 1.46-.41 2.28-.44.6-.93 1.16-1.5 1.89-.56-2.43-1.94-6.26-.91-8.12z\" class=\"st0\"/>\r\n      <path d=\"M86.3 50.8c-.17-4.91-4.21-8.83-9.15-8.83H64.47c-1.79 9.71-5.65 15.58-9.79 19.13-1.13 1.59-2.16 3.11-3.04 4.61-3.56 6.05-4.79 11.74-1.06 20.22.07.11.08.23.17.23h4.89v-.01c4.91-.17 8.83-4.21 8.83-9.15v-7.3-2.81-.44h21.84v-9.16-6.16c0-.11 0-.22-.01-.33.01 0 .01 0 0 0z\" class=\"st1\"/>\r\n    </g>\r\n  </g>\r\n</svg>";

var LogoHorizTaglineWhite = "<svg id=\"logo_horiz_tagline\" data-name=\"Layer 4\" xmlns=\"http://www.w3.org/2000/svg\" width=\"auto\" height=\"2in\" viewBox=\"0 0 275.53 113.25\" >\r\n  <defs/>\r\n  <style>\r\n    .st0{fill:#fff}\r\n\t.st1{fill:#fff}\r\n  </style>\r\n  <path d=\"M113.24 82.84c.61.53.91 1.24.91 2.14s-.3 1.61-.91 2.14c-.61.53-1.43.8-2.45.8h-2.19v4.05h-1.33v-9.91h3.52c1.02-.01 1.84.25 2.45.78zm-1.06 3.46c.38-.33.57-.77.57-1.32s-.19-.99-.57-1.32-.89-.5-1.54-.5h-2.05v3.63h2.05c.65 0 1.16-.16 1.54-.49zM115.76 91.57c-.43-.37-.64-.87-.64-1.49 0-.74.33-1.28.98-1.65.5-.25 1.28-.44 2.35-.57l1.3-.15v-.11c0-.64-.12-1.1-.36-1.38-.24-.28-.63-.42-1.17-.42-.47 0-.85.12-1.13.36s-.43.58-.46 1.02h-1.27c.05-.72.33-1.29.84-1.72s1.18-.64 2-.64c.96 0 1.66.23 2.09.69.44.46.66 1.2.66 2.21v1.88c0 1.06.08 1.85.24 2.36h-1.24c-.06-.39-.09-.81-.11-1.27-.16.45-.45.8-.87 1.05s-.91.38-1.48.38c-.72.01-1.3-.18-1.73-.55zm3.45-1.03c.37-.41.55-.95.55-1.63v-.35l-1.9.28c-.51.07-.89.21-1.12.4-.24.19-.36.46-.36.8s.12.61.36.81.58.29 1 .29c.61.01 1.1-.19 1.47-.6zM122.36 84.98h1.3v-1.83l1.19-.5v2.33h1.75v.98h-1.75v3.87c0 .4.08.69.25.87.16.18.42.27.77.27.21 0 .45-.03.73-.1v1.09c-.31.08-.65.13-1.03.13-.71 0-1.2-.19-1.48-.57s-.42-.93-.42-1.65v-3.91h-1.3v-.98zM128.53 82.18h1.35v1.49h-1.35v-1.49zm.09 2.8h1.19v6.98h-1.19v-6.98zM138.11 88.82h-4.96c.01.68.2 1.23.58 1.64s.88.62 1.5.62c.92 0 1.54-.44 1.86-1.33l.98.43c-.49 1.29-1.47 1.94-2.92 1.94-1 0-1.79-.31-2.35-.93-.56-.62-.84-1.5-.84-2.65 0-1.17.28-2.09.84-2.75.56-.66 1.34-.99 2.33-.99.95 0 1.68.27 2.2.81.52.54.77 1.33.77 2.36v.85zm-1.2-1.12c0-.63-.16-1.12-.47-1.45-.31-.33-.76-.5-1.33-.5-.6 0-1.08.19-1.42.56-.34.37-.52.89-.54 1.55h3.75v-.16zM140.34 84.98h1.12v1.38c.46-1.05 1.23-1.58 2.33-1.58 1.55 0 2.33.94 2.33 2.83v4.34h-1.19v-4.27c0-1.24-.51-1.86-1.54-1.86-.58 0-1.03.22-1.37.66-.33.44-.5 1.05-.5 1.82v3.64h-1.19v-6.96zM147.51 84.98h1.3v-1.83l1.19-.5v2.33h1.75v.98H150v3.87c0 .4.08.69.25.87.16.18.42.27.77.27.21 0 .45-.03.73-.1v1.09c-.31.08-.65.13-1.03.13-.71 0-1.2-.19-1.48-.57s-.42-.93-.42-1.65v-3.91h-1.3v-.98zM158.18 90.73c-.76-.98-1.14-2.23-1.14-3.76 0-1.56.39-2.82 1.17-3.76.78-.94 1.89-1.41 3.34-1.41 1.16 0 2.08.31 2.74.94.66.62 1.06 1.47 1.19 2.54l-1.35.14c-.1-.76-.38-1.37-.83-1.81s-1.05-.67-1.81-.67c-.96 0-1.71.37-2.24 1.1s-.8 1.71-.8 2.92c0 1.2.27 2.18.8 2.94.54.76 1.29 1.14 2.27 1.14.7 0 1.29-.22 1.76-.65.47-.43.78-1.02.92-1.77l1.29.22c-.21 1-.64 1.81-1.29 2.43s-1.55.92-2.67.92c-1.48.01-2.59-.48-3.35-1.46zM167.65 91.57c-.43-.37-.64-.87-.64-1.49 0-.74.33-1.28.98-1.65.5-.25 1.28-.44 2.35-.57l1.3-.15v-.11c0-.64-.12-1.1-.36-1.38-.24-.28-.63-.42-1.17-.42-.47 0-.85.12-1.13.36s-.43.58-.46 1.02h-1.27c.05-.72.33-1.29.84-1.72s1.18-.64 2-.64c.96 0 1.66.23 2.09.69.44.46.66 1.2.66 2.21v1.88c0 1.06.08 1.85.24 2.36h-1.24c-.06-.39-.09-.81-.11-1.27-.16.45-.45.8-.87 1.05s-.91.38-1.48.38c-.73.01-1.3-.18-1.73-.55zm3.44-1.03c.37-.41.55-.95.55-1.63v-.35l-1.9.28c-.51.07-.89.21-1.12.4-.24.19-.36.46-.36.8s.12.61.36.81.58.29 1 .29c.62.01 1.1-.19 1.47-.6zM177.35 85.3c.37-.33.8-.49 1.3-.49.11 0 .2 0 .25.01v1.16h-.06c-.66 0-1.17.18-1.54.54-.21.2-.36.46-.47.77-.11.31-.18.57-.2.8-.02.22-.03.52-.03.88v2.99h-1.19v-6.98h1.1v1.59c.2-.52.48-.95.84-1.27zM186.1 88.82h-4.96c.01.68.2 1.23.58 1.64s.88.62 1.5.62c.92 0 1.54-.44 1.86-1.33l.98.43c-.49 1.29-1.47 1.94-2.92 1.94-1 0-1.79-.31-2.35-.93-.56-.62-.84-1.5-.84-2.65 0-1.17.28-2.09.84-2.75.56-.66 1.34-.99 2.33-.99.95 0 1.68.27 2.2.81.52.54.77 1.33.77 2.36v.85zm-1.2-1.12c0-.63-.16-1.12-.47-1.45-.31-.33-.76-.5-1.33-.5-.6 0-1.08.19-1.42.56-.34.37-.52.89-.54 1.55h3.75v-.16zM198.34 82.84c.61.53.91 1.24.91 2.14s-.3 1.61-.91 2.14c-.61.53-1.43.8-2.45.8h-2.19v4.05h-1.33v-9.91h3.52c1.03-.01 1.84.25 2.45.78zm-1.05 3.46c.38-.33.57-.77.57-1.32s-.19-.99-.57-1.32-.89-.5-1.54-.5h-2.05v3.63h2.05c.65 0 1.16-.16 1.54-.49zM200.87 91.57c-.43-.37-.64-.87-.64-1.49 0-.74.33-1.28.98-1.65.5-.25 1.28-.44 2.35-.57l1.3-.15v-.11c0-.64-.12-1.1-.36-1.38-.24-.28-.63-.42-1.17-.42-.47 0-.85.12-1.13.36s-.43.58-.46 1.02h-1.27c.05-.72.33-1.29.84-1.72s1.18-.64 2-.64c.96 0 1.66.23 2.09.69.44.46.66 1.2.66 2.21v1.88c0 1.06.08 1.85.24 2.36h-1.24c-.06-.39-.09-.81-.11-1.27-.16.45-.45.8-.87 1.05s-.91.38-1.48.38c-.73.01-1.3-.18-1.73-.55zm3.44-1.03c.37-.41.55-.95.55-1.63v-.35l-1.9.28c-.51.07-.89.21-1.12.4-.24.19-.36.46-.36.8s.12.61.36.81.58.29 1 .29c.62.01 1.11-.19 1.47-.6zM210.58 85.3c.37-.33.8-.49 1.3-.49.11 0 .2 0 .25.01v1.16h-.06c-.66 0-1.17.18-1.54.54-.21.2-.36.46-.47.77-.11.31-.18.57-.2.8-.02.22-.03.52-.03.88v2.99h-1.19v-6.98h1.1v1.59c.2-.52.47-.95.84-1.27zM213.25 84.98h1.3v-1.83l1.19-.5v2.33h1.75v.98h-1.75v3.87c0 .4.08.69.24.87.16.18.42.27.78.27.21 0 .45-.03.73-.1v1.09c-.31.08-.65.13-1.03.13-.71 0-1.2-.19-1.48-.57s-.42-.93-.42-1.65v-3.91h-1.3v-.98zM219.5 84.98h1.12v1.38c.46-1.05 1.23-1.58 2.33-1.58 1.55 0 2.33.94 2.33 2.83v4.34h-1.19v-4.27c0-1.24-.51-1.86-1.54-1.86-.58 0-1.03.22-1.37.66-.33.44-.5 1.05-.5 1.82v3.64h-1.19v-6.96zM233.38 88.82h-4.96c.01.68.2 1.23.58 1.64s.88.62 1.5.62c.92 0 1.54-.44 1.86-1.33l.98.43c-.49 1.29-1.47 1.94-2.92 1.94-1 0-1.79-.31-2.35-.93-.56-.62-.84-1.5-.84-2.65 0-1.17.28-2.09.84-2.75.56-.66 1.34-.99 2.33-.99.95 0 1.68.27 2.2.81.52.54.77 1.33.77 2.36v.85zm-1.21-1.12c0-.63-.16-1.12-.47-1.45-.31-.33-.76-.5-1.33-.5-.6 0-1.08.19-1.42.56-.34.37-.52.89-.54 1.55h3.75v-.16zM237.53 85.3c.37-.33.8-.49 1.3-.49.11 0 .2 0 .25.01v1.16h-.06c-.66 0-1.17.18-1.54.54-.21.2-.36.46-.47.77-.11.31-.18.57-.2.8-.02.22-.03.52-.03.88v2.99h-1.19v-6.98h1.1v1.59c.2-.52.47-.95.84-1.27zM241.04 91.57c-.53-.37-.85-.9-.97-1.59l1.2-.21c.08.44.28.78.6 1.02.32.24.73.36 1.24.36.46 0 .81-.1 1.07-.3.26-.2.38-.45.38-.76 0-.3-.08-.52-.25-.67-.17-.15-.42-.25-.75-.31l-1.37-.25c-1.24-.23-1.86-.88-1.86-1.95 0-.61.24-1.12.72-1.51s1.12-.59 1.93-.59c.78 0 1.42.17 1.92.5.5.34.78.8.84 1.38l-1.17.27c-.08-.36-.27-.65-.54-.87-.28-.21-.65-.32-1.1-.32-.45 0-.8.09-1.05.28s-.38.45-.38.8c0 .53.36.86 1.08.99l1.35.25c1.21.23 1.82.87 1.82 1.9 0 .64-.24 1.16-.71 1.55-.47.39-1.12.59-1.96.59-.83 0-1.51-.19-2.04-.56z\" class=\"st0\"/>\r\n  <g>\r\n    <path d=\"M112.71 69.37c-2.16 0-4.18-.34-6-1.02-1.78-.66-3.33-1.62-4.6-2.87-1.28-1.25-2.3-2.82-3.04-4.67-.75-1.88-1.13-4.07-1.13-6.53 0-2.49.39-4.7 1.15-6.57.76-1.85 1.79-3.41 3.08-4.64 1.3-1.23 2.85-2.19 4.61-2.83 1.81-.66 3.8-.99 5.93-.99s4.12.33 5.92.99c1.77.65 3.33 1.6 4.65 2.84 1.3 1.23 2.35 2.79 3.1 4.63.76 1.87 1.15 4.08 1.15 6.57 0 2.5-.38 4.72-1.13 6.62-.74 1.86-1.76 3.42-3.05 4.65-1.29 1.23-2.85 2.18-4.63 2.83-1.82.66-3.84.99-6.01.99zm.06-26.77c-2.84 0-5.16 1.05-6.9 3.11-1.65 1.96-2.49 4.85-2.49 8.57 0 3.72.82 6.6 2.45 8.58 1.72 2.1 4.04 3.16 6.89 3.16 2.88 0 5.22-1.06 6.94-3.16 1.62-1.98 2.45-4.86 2.45-8.58 0-3.67-.81-6.54-2.41-8.51-1.72-2.1-4.05-3.17-6.93-3.17zM138.26 69.32c-1.37 0-2.66-.1-3.82-.29-1.08-.18-1.99-.45-2.7-.8-.61-.3-1.08-.66-1.39-1.07-.24-.31-.35-.67-.35-1.14 0-.45.07-.81.22-1.06.75.33 1.55.65 2.4.93 1.54.51 3.31.77 5.27.77 1.47 0 2.62-.24 3.53-.73 1.25-.68 1.97-1.82 1.97-3.11 0-1.2-.56-2.23-1.57-2.91-.69-.46-1.61-.78-2.92-1.01l-1.56-.31c-2.73-.53-4.73-1.34-5.96-2.39-1.04-.89-1.54-2.2-1.54-3.99 0-.98.2-1.83.61-2.59.41-.77.98-1.41 1.75-1.93.83-.57 1.86-1.03 3.07-1.36 1.25-.34 2.68-.51 4.23-.51 1.19 0 2.32.09 3.36.26.97.16 1.81.41 2.49.72.55.25.98.57 1.27.93.2.25.29.53.29.91 0 .41-.06.75-.16 1.03-.61-.21-1.29-.4-2.02-.57-.72-.17-1.47-.32-2.22-.43-.8-.12-1.54-.18-2.21-.18-1.46 0-2.62.18-3.52.56-1.42.59-2.24 1.75-2.24 3.18 0 1.08.51 2.03 1.43 2.67.6.42 1.46.74 2.78 1.02l1.63.37c3.77.86 5.51 1.95 6.3 2.7 1.02.97 1.51 2.21 1.51 3.8 0 2.06-.7 3.55-2.21 4.68-1.66 1.22-4.25 1.85-7.72 1.85zM155.03 68.84c-.66 0-1.25-.04-1.76-.13-.29-.05-.52-.14-.67-.25-.08-.06-.2-.17-.32-.44-.07-.17-.19-.56-.19-1.36V46.71c.65-.1 1.31-.16 1.97-.16.66 0 1.25.04 1.75.13.29.05.52.14.68.25.05.03.19.14.32.45.07.16.18.56.18 1.35v19.95c-.64.11-1.3.16-1.96.16zm-.48-28.75c-1.22 0-1.79-.43-2.11-.76-.52-.53-.76-1.15-.76-1.95s.24-1.42.77-1.96c.32-.33.89-.76 2.11-.76 1.22 0 1.79.43 2.11.76.52.53.76 1.15.76 1.95s-.24 1.42-.76 1.95c-.33.34-.89.77-2.12.77z\" class=\"st0\"/>\r\n    <g>\r\n      <path d=\"M164.88 68.02c-.8-.8-1.2-1.88-1.2-3.23V36.68c.39-.07.95-.16 1.68-.27.73-.11 1.45-.16 2.16-.16 1.6 0 2.75.27 3.47.8.71.53 1.07 1.58 1.07 3.15v22.24h12.8c.21.36.42.82.61 1.39.2.57.29 1.19.29 1.87 0 1.17-.26 2.05-.77 2.64-.52.59-1.22.88-2.11.88H168.1c-1.35 0-2.42-.4-3.22-1.2zM193.27 69.48c-1.67 0-2.83-.29-3.49-.85s-.99-1.6-.99-3.09V36.68c.39-.07.95-.16 1.68-.27.73-.11 1.47-.16 2.21-.16 1.6 0 2.75.27 3.44.8s1.04 1.58 1.04 3.15v28.85c-.39.11-.94.2-1.65.29-.71.1-1.45.14-2.24.14zM224.69 36.79c.21.36.41.82.59 1.39s.27 1.19.27 1.87c0 1.17-.26 2.04-.77 2.61-.52.57-1.24.85-2.16.85h-11.84v6.99h12.11c.21.39.42.85.61 1.39s.29 1.16.29 1.87c0 1.17-.27 2.04-.8 2.59-.53.55-1.25.83-2.13.83h-9.97v11.89c-.39.11-.94.2-1.65.29-.71.09-1.46.13-2.24.13-1.67 0-2.83-.29-3.49-.85s-.99-1.6-.99-3.09V41.22c0-1.35.4-2.43 1.2-3.23.8-.8 1.88-1.2 3.23-1.2h17.74zM229.73 68.02c-.8-.8-1.2-1.88-1.2-3.23V41.22c0-1.35.4-2.43 1.2-3.23.8-.8 1.88-1.2 3.23-1.2h17.65c.21.36.41.8.59 1.33s.27 1.14.27 1.81c0 1.17-.26 2.04-.77 2.61-.52.57-1.24.85-2.16.85H236.7v5.97h12.37c.21.36.41.8.59 1.33s.27 1.14.27 1.81c0 1.17-.25 2.04-.75 2.59-.5.55-1.21.83-2.13.83H236.7v6.67h14.13c.21.36.41.82.59 1.39s.27 1.19.27 1.87c0 1.17-.26 2.03-.77 2.56-.52.53-1.22.8-2.11.8h-15.84c-1.37.01-2.44-.39-3.24-1.19z\" class=\"st1\"/>\r\n    </g>\r\n    <g>\r\n      <path d=\"M36.48 46.37c-.31-1.42.55-2.05 1.87-1.47 2.1.92 3.28 2.74 3.49 4.89.29 3.02-.63 6.08-.01 9.12.25 1.13 1.24 1.72 2.35 1.54 1.81-.28 3.24-1.33 4.31-2.67 1.95-2.43 3.81-4.96 5.46-7.62 2.02-3.26 2.73-7.11 3.39-10.94.25-1.43.42-2.89.77-4.28.16-.61.58-1.24 1.08-1.61.85-.63 1.63-.3 1.83.83.96 6.58.22 14.43-2.29 20.3-.94 2.16-2.3 4.12-3.62 6.05-.14.2-.28.39-.42.59 4.14-3.55 8-9.42 9.79-19.13V18.53H48.63v.02c-4.81.28-8.63 4.26-8.63 9.14v14.29H18.69v15.85h.02c.28 4.81 4.26 8.63 9.14 8.63H33.3c.76-4.55 1.61-8.6 2.2-10.44 1-3.11 1.73-6.22.98-9.65zm17.15-10.94c.4-.69 1.08-.49 1.47.27 1.35 2.67 1.21 5.27.26 7.84-.33.91-.61 1.84-.98 2.95-.59-3.13-1.34-5.74-1.45-8.76.01-.79.31-1.63.7-2.3zm-1.42 6.23c.45 1.17 1.28 4.3 1.42 4.64.55 1.34-.25 2.24-.76 3.22-.35.67-1.4 1.9-1.48 1.9-.46-2.79-.96-5.57-1.34-8.36-.17-1.22 1.27-3.52 2.16-1.4zm-4.22 5.26c1.03-1.86 2.48 2.77 2.82 3.95.24.85.18 1.46-.41 2.28-.44.6-.93 1.16-1.5 1.89-.56-2.43-1.94-6.26-.91-8.12z\" class=\"st0\"/>\r\n      <path d=\"M86.3 50.8c-.17-4.91-4.21-8.83-9.15-8.83H64.47c-1.79 9.71-5.65 15.58-9.79 19.13-1.13 1.59-2.16 3.11-3.04 4.61-3.56 6.05-4.79 11.74-1.06 20.22.07.11.08.23.17.23h4.89v-.01c4.91-.17 8.83-4.21 8.83-9.15v-7.3-2.81-.44h21.84v-9.16-6.16c0-.11 0-.22-.01-.33.01 0 .01 0 0 0z\" class=\"st1\"/>\r\n    </g>\r\n  </g>\r\n</svg>";

var LogoHorizTaglineBlue = "<svg id=\"logo_horiz_tagline\" data-name=\"Layer 4\" xmlns=\"http://www.w3.org/2000/svg\" width=\"auto\" height=\"2in\" viewBox=\"0 0 275.53 113.25\" >\r\n  <defs/>\r\n  <style>\r\n    .st0{fill:#00adbc}\r\n\t.st1{fill:#00adbc}\r\n  </style>\r\n  <path d=\"M113.24 82.84c.61.53.91 1.24.91 2.14s-.3 1.61-.91 2.14c-.61.53-1.43.8-2.45.8h-2.19v4.05h-1.33v-9.91h3.52c1.02-.01 1.84.25 2.45.78zm-1.06 3.46c.38-.33.57-.77.57-1.32s-.19-.99-.57-1.32-.89-.5-1.54-.5h-2.05v3.63h2.05c.65 0 1.16-.16 1.54-.49zM115.76 91.57c-.43-.37-.64-.87-.64-1.49 0-.74.33-1.28.98-1.65.5-.25 1.28-.44 2.35-.57l1.3-.15v-.11c0-.64-.12-1.1-.36-1.38-.24-.28-.63-.42-1.17-.42-.47 0-.85.12-1.13.36s-.43.58-.46 1.02h-1.27c.05-.72.33-1.29.84-1.72s1.18-.64 2-.64c.96 0 1.66.23 2.09.69.44.46.66 1.2.66 2.21v1.88c0 1.06.08 1.85.24 2.36h-1.24c-.06-.39-.09-.81-.11-1.27-.16.45-.45.8-.87 1.05s-.91.38-1.48.38c-.72.01-1.3-.18-1.73-.55zm3.45-1.03c.37-.41.55-.95.55-1.63v-.35l-1.9.28c-.51.07-.89.21-1.12.4-.24.19-.36.46-.36.8s.12.61.36.81.58.29 1 .29c.61.01 1.1-.19 1.47-.6zM122.36 84.98h1.3v-1.83l1.19-.5v2.33h1.75v.98h-1.75v3.87c0 .4.08.69.25.87.16.18.42.27.77.27.21 0 .45-.03.73-.1v1.09c-.31.08-.65.13-1.03.13-.71 0-1.2-.19-1.48-.57s-.42-.93-.42-1.65v-3.91h-1.3v-.98zM128.53 82.18h1.35v1.49h-1.35v-1.49zm.09 2.8h1.19v6.98h-1.19v-6.98zM138.11 88.82h-4.96c.01.68.2 1.23.58 1.64s.88.62 1.5.62c.92 0 1.54-.44 1.86-1.33l.98.43c-.49 1.29-1.47 1.94-2.92 1.94-1 0-1.79-.31-2.35-.93-.56-.62-.84-1.5-.84-2.65 0-1.17.28-2.09.84-2.75.56-.66 1.34-.99 2.33-.99.95 0 1.68.27 2.2.81.52.54.77 1.33.77 2.36v.85zm-1.2-1.12c0-.63-.16-1.12-.47-1.45-.31-.33-.76-.5-1.33-.5-.6 0-1.08.19-1.42.56-.34.37-.52.89-.54 1.55h3.75v-.16zM140.34 84.98h1.12v1.38c.46-1.05 1.23-1.58 2.33-1.58 1.55 0 2.33.94 2.33 2.83v4.34h-1.19v-4.27c0-1.24-.51-1.86-1.54-1.86-.58 0-1.03.22-1.37.66-.33.44-.5 1.05-.5 1.82v3.64h-1.19v-6.96zM147.51 84.98h1.3v-1.83l1.19-.5v2.33h1.75v.98H150v3.87c0 .4.08.69.25.87.16.18.42.27.77.27.21 0 .45-.03.73-.1v1.09c-.31.08-.65.13-1.03.13-.71 0-1.2-.19-1.48-.57s-.42-.93-.42-1.65v-3.91h-1.3v-.98zM158.18 90.73c-.76-.98-1.14-2.23-1.14-3.76 0-1.56.39-2.82 1.17-3.76.78-.94 1.89-1.41 3.34-1.41 1.16 0 2.08.31 2.74.94.66.62 1.06 1.47 1.19 2.54l-1.35.14c-.1-.76-.38-1.37-.83-1.81s-1.05-.67-1.81-.67c-.96 0-1.71.37-2.24 1.1s-.8 1.71-.8 2.92c0 1.2.27 2.18.8 2.94.54.76 1.29 1.14 2.27 1.14.7 0 1.29-.22 1.76-.65.47-.43.78-1.02.92-1.77l1.29.22c-.21 1-.64 1.81-1.29 2.43s-1.55.92-2.67.92c-1.48.01-2.59-.48-3.35-1.46zM167.65 91.57c-.43-.37-.64-.87-.64-1.49 0-.74.33-1.28.98-1.65.5-.25 1.28-.44 2.35-.57l1.3-.15v-.11c0-.64-.12-1.1-.36-1.38-.24-.28-.63-.42-1.17-.42-.47 0-.85.12-1.13.36s-.43.58-.46 1.02h-1.27c.05-.72.33-1.29.84-1.72s1.18-.64 2-.64c.96 0 1.66.23 2.09.69.44.46.66 1.2.66 2.21v1.88c0 1.06.08 1.85.24 2.36h-1.24c-.06-.39-.09-.81-.11-1.27-.16.45-.45.8-.87 1.05s-.91.38-1.48.38c-.73.01-1.3-.18-1.73-.55zm3.44-1.03c.37-.41.55-.95.55-1.63v-.35l-1.9.28c-.51.07-.89.21-1.12.4-.24.19-.36.46-.36.8s.12.61.36.81.58.29 1 .29c.62.01 1.1-.19 1.47-.6zM177.35 85.3c.37-.33.8-.49 1.3-.49.11 0 .2 0 .25.01v1.16h-.06c-.66 0-1.17.18-1.54.54-.21.2-.36.46-.47.77-.11.31-.18.57-.2.8-.02.22-.03.52-.03.88v2.99h-1.19v-6.98h1.1v1.59c.2-.52.48-.95.84-1.27zM186.1 88.82h-4.96c.01.68.2 1.23.58 1.64s.88.62 1.5.62c.92 0 1.54-.44 1.86-1.33l.98.43c-.49 1.29-1.47 1.94-2.92 1.94-1 0-1.79-.31-2.35-.93-.56-.62-.84-1.5-.84-2.65 0-1.17.28-2.09.84-2.75.56-.66 1.34-.99 2.33-.99.95 0 1.68.27 2.2.81.52.54.77 1.33.77 2.36v.85zm-1.2-1.12c0-.63-.16-1.12-.47-1.45-.31-.33-.76-.5-1.33-.5-.6 0-1.08.19-1.42.56-.34.37-.52.89-.54 1.55h3.75v-.16zM198.34 82.84c.61.53.91 1.24.91 2.14s-.3 1.61-.91 2.14c-.61.53-1.43.8-2.45.8h-2.19v4.05h-1.33v-9.91h3.52c1.03-.01 1.84.25 2.45.78zm-1.05 3.46c.38-.33.57-.77.57-1.32s-.19-.99-.57-1.32-.89-.5-1.54-.5h-2.05v3.63h2.05c.65 0 1.16-.16 1.54-.49zM200.87 91.57c-.43-.37-.64-.87-.64-1.49 0-.74.33-1.28.98-1.65.5-.25 1.28-.44 2.35-.57l1.3-.15v-.11c0-.64-.12-1.1-.36-1.38-.24-.28-.63-.42-1.17-.42-.47 0-.85.12-1.13.36s-.43.58-.46 1.02h-1.27c.05-.72.33-1.29.84-1.72s1.18-.64 2-.64c.96 0 1.66.23 2.09.69.44.46.66 1.2.66 2.21v1.88c0 1.06.08 1.85.24 2.36h-1.24c-.06-.39-.09-.81-.11-1.27-.16.45-.45.8-.87 1.05s-.91.38-1.48.38c-.73.01-1.3-.18-1.73-.55zm3.44-1.03c.37-.41.55-.95.55-1.63v-.35l-1.9.28c-.51.07-.89.21-1.12.4-.24.19-.36.46-.36.8s.12.61.36.81.58.29 1 .29c.62.01 1.11-.19 1.47-.6zM210.58 85.3c.37-.33.8-.49 1.3-.49.11 0 .2 0 .25.01v1.16h-.06c-.66 0-1.17.18-1.54.54-.21.2-.36.46-.47.77-.11.31-.18.57-.2.8-.02.22-.03.52-.03.88v2.99h-1.19v-6.98h1.1v1.59c.2-.52.47-.95.84-1.27zM213.25 84.98h1.3v-1.83l1.19-.5v2.33h1.75v.98h-1.75v3.87c0 .4.08.69.24.87.16.18.42.27.78.27.21 0 .45-.03.73-.1v1.09c-.31.08-.65.13-1.03.13-.71 0-1.2-.19-1.48-.57s-.42-.93-.42-1.65v-3.91h-1.3v-.98zM219.5 84.98h1.12v1.38c.46-1.05 1.23-1.58 2.33-1.58 1.55 0 2.33.94 2.33 2.83v4.34h-1.19v-4.27c0-1.24-.51-1.86-1.54-1.86-.58 0-1.03.22-1.37.66-.33.44-.5 1.05-.5 1.82v3.64h-1.19v-6.96zM233.38 88.82h-4.96c.01.68.2 1.23.58 1.64s.88.62 1.5.62c.92 0 1.54-.44 1.86-1.33l.98.43c-.49 1.29-1.47 1.94-2.92 1.94-1 0-1.79-.31-2.35-.93-.56-.62-.84-1.5-.84-2.65 0-1.17.28-2.09.84-2.75.56-.66 1.34-.99 2.33-.99.95 0 1.68.27 2.2.81.52.54.77 1.33.77 2.36v.85zm-1.21-1.12c0-.63-.16-1.12-.47-1.45-.31-.33-.76-.5-1.33-.5-.6 0-1.08.19-1.42.56-.34.37-.52.89-.54 1.55h3.75v-.16zM237.53 85.3c.37-.33.8-.49 1.3-.49.11 0 .2 0 .25.01v1.16h-.06c-.66 0-1.17.18-1.54.54-.21.2-.36.46-.47.77-.11.31-.18.57-.2.8-.02.22-.03.52-.03.88v2.99h-1.19v-6.98h1.1v1.59c.2-.52.47-.95.84-1.27zM241.04 91.57c-.53-.37-.85-.9-.97-1.59l1.2-.21c.08.44.28.78.6 1.02.32.24.73.36 1.24.36.46 0 .81-.1 1.07-.3.26-.2.38-.45.38-.76 0-.3-.08-.52-.25-.67-.17-.15-.42-.25-.75-.31l-1.37-.25c-1.24-.23-1.86-.88-1.86-1.95 0-.61.24-1.12.72-1.51s1.12-.59 1.93-.59c.78 0 1.42.17 1.92.5.5.34.78.8.84 1.38l-1.17.27c-.08-.36-.27-.65-.54-.87-.28-.21-.65-.32-1.1-.32-.45 0-.8.09-1.05.28s-.38.45-.38.8c0 .53.36.86 1.08.99l1.35.25c1.21.23 1.82.87 1.82 1.9 0 .64-.24 1.16-.71 1.55-.47.39-1.12.59-1.96.59-.83 0-1.51-.19-2.04-.56z\" class=\"st0\"/>\r\n  <g>\r\n    <path d=\"M112.71 69.37c-2.16 0-4.18-.34-6-1.02-1.78-.66-3.33-1.62-4.6-2.87-1.28-1.25-2.3-2.82-3.04-4.67-.75-1.88-1.13-4.07-1.13-6.53 0-2.49.39-4.7 1.15-6.57.76-1.85 1.79-3.41 3.08-4.64 1.3-1.23 2.85-2.19 4.61-2.83 1.81-.66 3.8-.99 5.93-.99s4.12.33 5.92.99c1.77.65 3.33 1.6 4.65 2.84 1.3 1.23 2.35 2.79 3.1 4.63.76 1.87 1.15 4.08 1.15 6.57 0 2.5-.38 4.72-1.13 6.62-.74 1.86-1.76 3.42-3.05 4.65-1.29 1.23-2.85 2.18-4.63 2.83-1.82.66-3.84.99-6.01.99zm.06-26.77c-2.84 0-5.16 1.05-6.9 3.11-1.65 1.96-2.49 4.85-2.49 8.57 0 3.72.82 6.6 2.45 8.58 1.72 2.1 4.04 3.16 6.89 3.16 2.88 0 5.22-1.06 6.94-3.16 1.62-1.98 2.45-4.86 2.45-8.58 0-3.67-.81-6.54-2.41-8.51-1.72-2.1-4.05-3.17-6.93-3.17zM138.26 69.32c-1.37 0-2.66-.1-3.82-.29-1.08-.18-1.99-.45-2.7-.8-.61-.3-1.08-.66-1.39-1.07-.24-.31-.35-.67-.35-1.14 0-.45.07-.81.22-1.06.75.33 1.55.65 2.4.93 1.54.51 3.31.77 5.27.77 1.47 0 2.62-.24 3.53-.73 1.25-.68 1.97-1.82 1.97-3.11 0-1.2-.56-2.23-1.57-2.91-.69-.46-1.61-.78-2.92-1.01l-1.56-.31c-2.73-.53-4.73-1.34-5.96-2.39-1.04-.89-1.54-2.2-1.54-3.99 0-.98.2-1.83.61-2.59.41-.77.98-1.41 1.75-1.93.83-.57 1.86-1.03 3.07-1.36 1.25-.34 2.68-.51 4.23-.51 1.19 0 2.32.09 3.36.26.97.16 1.81.41 2.49.72.55.25.98.57 1.27.93.2.25.29.53.29.91 0 .41-.06.75-.16 1.03-.61-.21-1.29-.4-2.02-.57-.72-.17-1.47-.32-2.22-.43-.8-.12-1.54-.18-2.21-.18-1.46 0-2.62.18-3.52.56-1.42.59-2.24 1.75-2.24 3.18 0 1.08.51 2.03 1.43 2.67.6.42 1.46.74 2.78 1.02l1.63.37c3.77.86 5.51 1.95 6.3 2.7 1.02.97 1.51 2.21 1.51 3.8 0 2.06-.7 3.55-2.21 4.68-1.66 1.22-4.25 1.85-7.72 1.85zM155.03 68.84c-.66 0-1.25-.04-1.76-.13-.29-.05-.52-.14-.67-.25-.08-.06-.2-.17-.32-.44-.07-.17-.19-.56-.19-1.36V46.71c.65-.1 1.31-.16 1.97-.16.66 0 1.25.04 1.75.13.29.05.52.14.68.25.05.03.19.14.32.45.07.16.18.56.18 1.35v19.95c-.64.11-1.3.16-1.96.16zm-.48-28.75c-1.22 0-1.79-.43-2.11-.76-.52-.53-.76-1.15-.76-1.95s.24-1.42.77-1.96c.32-.33.89-.76 2.11-.76 1.22 0 1.79.43 2.11.76.52.53.76 1.15.76 1.95s-.24 1.42-.76 1.95c-.33.34-.89.77-2.12.77z\" class=\"st0\"/>\r\n    <g>\r\n      <path d=\"M164.88 68.02c-.8-.8-1.2-1.88-1.2-3.23V36.68c.39-.07.95-.16 1.68-.27.73-.11 1.45-.16 2.16-.16 1.6 0 2.75.27 3.47.8.71.53 1.07 1.58 1.07 3.15v22.24h12.8c.21.36.42.82.61 1.39.2.57.29 1.19.29 1.87 0 1.17-.26 2.05-.77 2.64-.52.59-1.22.88-2.11.88H168.1c-1.35 0-2.42-.4-3.22-1.2zM193.27 69.48c-1.67 0-2.83-.29-3.49-.85s-.99-1.6-.99-3.09V36.68c.39-.07.95-.16 1.68-.27.73-.11 1.47-.16 2.21-.16 1.6 0 2.75.27 3.44.8s1.04 1.58 1.04 3.15v28.85c-.39.11-.94.2-1.65.29-.71.1-1.45.14-2.24.14zM224.69 36.79c.21.36.41.82.59 1.39s.27 1.19.27 1.87c0 1.17-.26 2.04-.77 2.61-.52.57-1.24.85-2.16.85h-11.84v6.99h12.11c.21.39.42.85.61 1.39s.29 1.16.29 1.87c0 1.17-.27 2.04-.8 2.59-.53.55-1.25.83-2.13.83h-9.97v11.89c-.39.11-.94.2-1.65.29-.71.09-1.46.13-2.24.13-1.67 0-2.83-.29-3.49-.85s-.99-1.6-.99-3.09V41.22c0-1.35.4-2.43 1.2-3.23.8-.8 1.88-1.2 3.23-1.2h17.74zM229.73 68.02c-.8-.8-1.2-1.88-1.2-3.23V41.22c0-1.35.4-2.43 1.2-3.23.8-.8 1.88-1.2 3.23-1.2h17.65c.21.36.41.8.59 1.33s.27 1.14.27 1.81c0 1.17-.26 2.04-.77 2.61-.52.57-1.24.85-2.16.85H236.7v5.97h12.37c.21.36.41.8.59 1.33s.27 1.14.27 1.81c0 1.17-.25 2.04-.75 2.59-.5.55-1.21.83-2.13.83H236.7v6.67h14.13c.21.36.41.82.59 1.39s.27 1.19.27 1.87c0 1.17-.26 2.03-.77 2.56-.52.53-1.22.8-2.11.8h-15.84c-1.37.01-2.44-.39-3.24-1.19z\" class=\"st1\"/>\r\n    </g>\r\n    <g>\r\n      <path d=\"M36.48 46.37c-.31-1.42.55-2.05 1.87-1.47 2.1.92 3.28 2.74 3.49 4.89.29 3.02-.63 6.08-.01 9.12.25 1.13 1.24 1.72 2.35 1.54 1.81-.28 3.24-1.33 4.31-2.67 1.95-2.43 3.81-4.96 5.46-7.62 2.02-3.26 2.73-7.11 3.39-10.94.25-1.43.42-2.89.77-4.28.16-.61.58-1.24 1.08-1.61.85-.63 1.63-.3 1.83.83.96 6.58.22 14.43-2.29 20.3-.94 2.16-2.3 4.12-3.62 6.05-.14.2-.28.39-.42.59 4.14-3.55 8-9.42 9.79-19.13V18.53H48.63v.02c-4.81.28-8.63 4.26-8.63 9.14v14.29H18.69v15.85h.02c.28 4.81 4.26 8.63 9.14 8.63H33.3c.76-4.55 1.61-8.6 2.2-10.44 1-3.11 1.73-6.22.98-9.65zm17.15-10.94c.4-.69 1.08-.49 1.47.27 1.35 2.67 1.21 5.27.26 7.84-.33.91-.61 1.84-.98 2.95-.59-3.13-1.34-5.74-1.45-8.76.01-.79.31-1.63.7-2.3zm-1.42 6.23c.45 1.17 1.28 4.3 1.42 4.64.55 1.34-.25 2.24-.76 3.22-.35.67-1.4 1.9-1.48 1.9-.46-2.79-.96-5.57-1.34-8.36-.17-1.22 1.27-3.52 2.16-1.4zm-4.22 5.26c1.03-1.86 2.48 2.77 2.82 3.95.24.85.18 1.46-.41 2.28-.44.6-.93 1.16-1.5 1.89-.56-2.43-1.94-6.26-.91-8.12z\" class=\"st0\"/>\r\n      <path d=\"M86.3 50.8c-.17-4.91-4.21-8.83-9.15-8.83H64.47c-1.79 9.71-5.65 15.58-9.79 19.13-1.13 1.59-2.16 3.11-3.04 4.61-3.56 6.05-4.79 11.74-1.06 20.22.07.11.08.23.17.23h4.89v-.01c4.91-.17 8.83-4.21 8.83-9.15v-7.3-2.81-.44h21.84v-9.16-6.16c0-.11 0-.22-.01-.33.01 0 .01 0 0 0z\" class=\"st1\"/>\r\n    </g>\r\n  </g>\r\n</svg>";

var LogoHorizTaglineOrange = "<svg id=\"logo_horiz_tagline\" data-name=\"Layer 4\" xmlns=\"http://www.w3.org/2000/svg\" width=\"auto\" height=\"2in\" viewBox=\"0 0 275.53 113.25\" >\r\n  <defs/>\r\n  <style>\r\n    .st0{fill:#ffa500}\r\n\t.st1{fill:#ffa500}\r\n  </style>\r\n  <path d=\"M113.24 82.84c.61.53.91 1.24.91 2.14s-.3 1.61-.91 2.14c-.61.53-1.43.8-2.45.8h-2.19v4.05h-1.33v-9.91h3.52c1.02-.01 1.84.25 2.45.78zm-1.06 3.46c.38-.33.57-.77.57-1.32s-.19-.99-.57-1.32-.89-.5-1.54-.5h-2.05v3.63h2.05c.65 0 1.16-.16 1.54-.49zM115.76 91.57c-.43-.37-.64-.87-.64-1.49 0-.74.33-1.28.98-1.65.5-.25 1.28-.44 2.35-.57l1.3-.15v-.11c0-.64-.12-1.1-.36-1.38-.24-.28-.63-.42-1.17-.42-.47 0-.85.12-1.13.36s-.43.58-.46 1.02h-1.27c.05-.72.33-1.29.84-1.72s1.18-.64 2-.64c.96 0 1.66.23 2.09.69.44.46.66 1.2.66 2.21v1.88c0 1.06.08 1.85.24 2.36h-1.24c-.06-.39-.09-.81-.11-1.27-.16.45-.45.8-.87 1.05s-.91.38-1.48.38c-.72.01-1.3-.18-1.73-.55zm3.45-1.03c.37-.41.55-.95.55-1.63v-.35l-1.9.28c-.51.07-.89.21-1.12.4-.24.19-.36.46-.36.8s.12.61.36.81.58.29 1 .29c.61.01 1.1-.19 1.47-.6zM122.36 84.98h1.3v-1.83l1.19-.5v2.33h1.75v.98h-1.75v3.87c0 .4.08.69.25.87.16.18.42.27.77.27.21 0 .45-.03.73-.1v1.09c-.31.08-.65.13-1.03.13-.71 0-1.2-.19-1.48-.57s-.42-.93-.42-1.65v-3.91h-1.3v-.98zM128.53 82.18h1.35v1.49h-1.35v-1.49zm.09 2.8h1.19v6.98h-1.19v-6.98zM138.11 88.82h-4.96c.01.68.2 1.23.58 1.64s.88.62 1.5.62c.92 0 1.54-.44 1.86-1.33l.98.43c-.49 1.29-1.47 1.94-2.92 1.94-1 0-1.79-.31-2.35-.93-.56-.62-.84-1.5-.84-2.65 0-1.17.28-2.09.84-2.75.56-.66 1.34-.99 2.33-.99.95 0 1.68.27 2.2.81.52.54.77 1.33.77 2.36v.85zm-1.2-1.12c0-.63-.16-1.12-.47-1.45-.31-.33-.76-.5-1.33-.5-.6 0-1.08.19-1.42.56-.34.37-.52.89-.54 1.55h3.75v-.16zM140.34 84.98h1.12v1.38c.46-1.05 1.23-1.58 2.33-1.58 1.55 0 2.33.94 2.33 2.83v4.34h-1.19v-4.27c0-1.24-.51-1.86-1.54-1.86-.58 0-1.03.22-1.37.66-.33.44-.5 1.05-.5 1.82v3.64h-1.19v-6.96zM147.51 84.98h1.3v-1.83l1.19-.5v2.33h1.75v.98H150v3.87c0 .4.08.69.25.87.16.18.42.27.77.27.21 0 .45-.03.73-.1v1.09c-.31.08-.65.13-1.03.13-.71 0-1.2-.19-1.48-.57s-.42-.93-.42-1.65v-3.91h-1.3v-.98zM158.18 90.73c-.76-.98-1.14-2.23-1.14-3.76 0-1.56.39-2.82 1.17-3.76.78-.94 1.89-1.41 3.34-1.41 1.16 0 2.08.31 2.74.94.66.62 1.06 1.47 1.19 2.54l-1.35.14c-.1-.76-.38-1.37-.83-1.81s-1.05-.67-1.81-.67c-.96 0-1.71.37-2.24 1.1s-.8 1.71-.8 2.92c0 1.2.27 2.18.8 2.94.54.76 1.29 1.14 2.27 1.14.7 0 1.29-.22 1.76-.65.47-.43.78-1.02.92-1.77l1.29.22c-.21 1-.64 1.81-1.29 2.43s-1.55.92-2.67.92c-1.48.01-2.59-.48-3.35-1.46zM167.65 91.57c-.43-.37-.64-.87-.64-1.49 0-.74.33-1.28.98-1.65.5-.25 1.28-.44 2.35-.57l1.3-.15v-.11c0-.64-.12-1.1-.36-1.38-.24-.28-.63-.42-1.17-.42-.47 0-.85.12-1.13.36s-.43.58-.46 1.02h-1.27c.05-.72.33-1.29.84-1.72s1.18-.64 2-.64c.96 0 1.66.23 2.09.69.44.46.66 1.2.66 2.21v1.88c0 1.06.08 1.85.24 2.36h-1.24c-.06-.39-.09-.81-.11-1.27-.16.45-.45.8-.87 1.05s-.91.38-1.48.38c-.73.01-1.3-.18-1.73-.55zm3.44-1.03c.37-.41.55-.95.55-1.63v-.35l-1.9.28c-.51.07-.89.21-1.12.4-.24.19-.36.46-.36.8s.12.61.36.81.58.29 1 .29c.62.01 1.1-.19 1.47-.6zM177.35 85.3c.37-.33.8-.49 1.3-.49.11 0 .2 0 .25.01v1.16h-.06c-.66 0-1.17.18-1.54.54-.21.2-.36.46-.47.77-.11.31-.18.57-.2.8-.02.22-.03.52-.03.88v2.99h-1.19v-6.98h1.1v1.59c.2-.52.48-.95.84-1.27zM186.1 88.82h-4.96c.01.68.2 1.23.58 1.64s.88.62 1.5.62c.92 0 1.54-.44 1.86-1.33l.98.43c-.49 1.29-1.47 1.94-2.92 1.94-1 0-1.79-.31-2.35-.93-.56-.62-.84-1.5-.84-2.65 0-1.17.28-2.09.84-2.75.56-.66 1.34-.99 2.33-.99.95 0 1.68.27 2.2.81.52.54.77 1.33.77 2.36v.85zm-1.2-1.12c0-.63-.16-1.12-.47-1.45-.31-.33-.76-.5-1.33-.5-.6 0-1.08.19-1.42.56-.34.37-.52.89-.54 1.55h3.75v-.16zM198.34 82.84c.61.53.91 1.24.91 2.14s-.3 1.61-.91 2.14c-.61.53-1.43.8-2.45.8h-2.19v4.05h-1.33v-9.91h3.52c1.03-.01 1.84.25 2.45.78zm-1.05 3.46c.38-.33.57-.77.57-1.32s-.19-.99-.57-1.32-.89-.5-1.54-.5h-2.05v3.63h2.05c.65 0 1.16-.16 1.54-.49zM200.87 91.57c-.43-.37-.64-.87-.64-1.49 0-.74.33-1.28.98-1.65.5-.25 1.28-.44 2.35-.57l1.3-.15v-.11c0-.64-.12-1.1-.36-1.38-.24-.28-.63-.42-1.17-.42-.47 0-.85.12-1.13.36s-.43.58-.46 1.02h-1.27c.05-.72.33-1.29.84-1.72s1.18-.64 2-.64c.96 0 1.66.23 2.09.69.44.46.66 1.2.66 2.21v1.88c0 1.06.08 1.85.24 2.36h-1.24c-.06-.39-.09-.81-.11-1.27-.16.45-.45.8-.87 1.05s-.91.38-1.48.38c-.73.01-1.3-.18-1.73-.55zm3.44-1.03c.37-.41.55-.95.55-1.63v-.35l-1.9.28c-.51.07-.89.21-1.12.4-.24.19-.36.46-.36.8s.12.61.36.81.58.29 1 .29c.62.01 1.11-.19 1.47-.6zM210.58 85.3c.37-.33.8-.49 1.3-.49.11 0 .2 0 .25.01v1.16h-.06c-.66 0-1.17.18-1.54.54-.21.2-.36.46-.47.77-.11.31-.18.57-.2.8-.02.22-.03.52-.03.88v2.99h-1.19v-6.98h1.1v1.59c.2-.52.47-.95.84-1.27zM213.25 84.98h1.3v-1.83l1.19-.5v2.33h1.75v.98h-1.75v3.87c0 .4.08.69.24.87.16.18.42.27.78.27.21 0 .45-.03.73-.1v1.09c-.31.08-.65.13-1.03.13-.71 0-1.2-.19-1.48-.57s-.42-.93-.42-1.65v-3.91h-1.3v-.98zM219.5 84.98h1.12v1.38c.46-1.05 1.23-1.58 2.33-1.58 1.55 0 2.33.94 2.33 2.83v4.34h-1.19v-4.27c0-1.24-.51-1.86-1.54-1.86-.58 0-1.03.22-1.37.66-.33.44-.5 1.05-.5 1.82v3.64h-1.19v-6.96zM233.38 88.82h-4.96c.01.68.2 1.23.58 1.64s.88.62 1.5.62c.92 0 1.54-.44 1.86-1.33l.98.43c-.49 1.29-1.47 1.94-2.92 1.94-1 0-1.79-.31-2.35-.93-.56-.62-.84-1.5-.84-2.65 0-1.17.28-2.09.84-2.75.56-.66 1.34-.99 2.33-.99.95 0 1.68.27 2.2.81.52.54.77 1.33.77 2.36v.85zm-1.21-1.12c0-.63-.16-1.12-.47-1.45-.31-.33-.76-.5-1.33-.5-.6 0-1.08.19-1.42.56-.34.37-.52.89-.54 1.55h3.75v-.16zM237.53 85.3c.37-.33.8-.49 1.3-.49.11 0 .2 0 .25.01v1.16h-.06c-.66 0-1.17.18-1.54.54-.21.2-.36.46-.47.77-.11.31-.18.57-.2.8-.02.22-.03.52-.03.88v2.99h-1.19v-6.98h1.1v1.59c.2-.52.47-.95.84-1.27zM241.04 91.57c-.53-.37-.85-.9-.97-1.59l1.2-.21c.08.44.28.78.6 1.02.32.24.73.36 1.24.36.46 0 .81-.1 1.07-.3.26-.2.38-.45.38-.76 0-.3-.08-.52-.25-.67-.17-.15-.42-.25-.75-.31l-1.37-.25c-1.24-.23-1.86-.88-1.86-1.95 0-.61.24-1.12.72-1.51s1.12-.59 1.93-.59c.78 0 1.42.17 1.92.5.5.34.78.8.84 1.38l-1.17.27c-.08-.36-.27-.65-.54-.87-.28-.21-.65-.32-1.1-.32-.45 0-.8.09-1.05.28s-.38.45-.38.8c0 .53.36.86 1.08.99l1.35.25c1.21.23 1.82.87 1.82 1.9 0 .64-.24 1.16-.71 1.55-.47.39-1.12.59-1.96.59-.83 0-1.51-.19-2.04-.56z\" class=\"st0\"/>\r\n  <g>\r\n    <path d=\"M112.71 69.37c-2.16 0-4.18-.34-6-1.02-1.78-.66-3.33-1.62-4.6-2.87-1.28-1.25-2.3-2.82-3.04-4.67-.75-1.88-1.13-4.07-1.13-6.53 0-2.49.39-4.7 1.15-6.57.76-1.85 1.79-3.41 3.08-4.64 1.3-1.23 2.85-2.19 4.61-2.83 1.81-.66 3.8-.99 5.93-.99s4.12.33 5.92.99c1.77.65 3.33 1.6 4.65 2.84 1.3 1.23 2.35 2.79 3.1 4.63.76 1.87 1.15 4.08 1.15 6.57 0 2.5-.38 4.72-1.13 6.62-.74 1.86-1.76 3.42-3.05 4.65-1.29 1.23-2.85 2.18-4.63 2.83-1.82.66-3.84.99-6.01.99zm.06-26.77c-2.84 0-5.16 1.05-6.9 3.11-1.65 1.96-2.49 4.85-2.49 8.57 0 3.72.82 6.6 2.45 8.58 1.72 2.1 4.04 3.16 6.89 3.16 2.88 0 5.22-1.06 6.94-3.16 1.62-1.98 2.45-4.86 2.45-8.58 0-3.67-.81-6.54-2.41-8.51-1.72-2.1-4.05-3.17-6.93-3.17zM138.26 69.32c-1.37 0-2.66-.1-3.82-.29-1.08-.18-1.99-.45-2.7-.8-.61-.3-1.08-.66-1.39-1.07-.24-.31-.35-.67-.35-1.14 0-.45.07-.81.22-1.06.75.33 1.55.65 2.4.93 1.54.51 3.31.77 5.27.77 1.47 0 2.62-.24 3.53-.73 1.25-.68 1.97-1.82 1.97-3.11 0-1.2-.56-2.23-1.57-2.91-.69-.46-1.61-.78-2.92-1.01l-1.56-.31c-2.73-.53-4.73-1.34-5.96-2.39-1.04-.89-1.54-2.2-1.54-3.99 0-.98.2-1.83.61-2.59.41-.77.98-1.41 1.75-1.93.83-.57 1.86-1.03 3.07-1.36 1.25-.34 2.68-.51 4.23-.51 1.19 0 2.32.09 3.36.26.97.16 1.81.41 2.49.72.55.25.98.57 1.27.93.2.25.29.53.29.91 0 .41-.06.75-.16 1.03-.61-.21-1.29-.4-2.02-.57-.72-.17-1.47-.32-2.22-.43-.8-.12-1.54-.18-2.21-.18-1.46 0-2.62.18-3.52.56-1.42.59-2.24 1.75-2.24 3.18 0 1.08.51 2.03 1.43 2.67.6.42 1.46.74 2.78 1.02l1.63.37c3.77.86 5.51 1.95 6.3 2.7 1.02.97 1.51 2.21 1.51 3.8 0 2.06-.7 3.55-2.21 4.68-1.66 1.22-4.25 1.85-7.72 1.85zM155.03 68.84c-.66 0-1.25-.04-1.76-.13-.29-.05-.52-.14-.67-.25-.08-.06-.2-.17-.32-.44-.07-.17-.19-.56-.19-1.36V46.71c.65-.1 1.31-.16 1.97-.16.66 0 1.25.04 1.75.13.29.05.52.14.68.25.05.03.19.14.32.45.07.16.18.56.18 1.35v19.95c-.64.11-1.3.16-1.96.16zm-.48-28.75c-1.22 0-1.79-.43-2.11-.76-.52-.53-.76-1.15-.76-1.95s.24-1.42.77-1.96c.32-.33.89-.76 2.11-.76 1.22 0 1.79.43 2.11.76.52.53.76 1.15.76 1.95s-.24 1.42-.76 1.95c-.33.34-.89.77-2.12.77z\" class=\"st0\"/>\r\n    <g>\r\n      <path d=\"M164.88 68.02c-.8-.8-1.2-1.88-1.2-3.23V36.68c.39-.07.95-.16 1.68-.27.73-.11 1.45-.16 2.16-.16 1.6 0 2.75.27 3.47.8.71.53 1.07 1.58 1.07 3.15v22.24h12.8c.21.36.42.82.61 1.39.2.57.29 1.19.29 1.87 0 1.17-.26 2.05-.77 2.64-.52.59-1.22.88-2.11.88H168.1c-1.35 0-2.42-.4-3.22-1.2zM193.27 69.48c-1.67 0-2.83-.29-3.49-.85s-.99-1.6-.99-3.09V36.68c.39-.07.95-.16 1.68-.27.73-.11 1.47-.16 2.21-.16 1.6 0 2.75.27 3.44.8s1.04 1.58 1.04 3.15v28.85c-.39.11-.94.2-1.65.29-.71.1-1.45.14-2.24.14zM224.69 36.79c.21.36.41.82.59 1.39s.27 1.19.27 1.87c0 1.17-.26 2.04-.77 2.61-.52.57-1.24.85-2.16.85h-11.84v6.99h12.11c.21.39.42.85.61 1.39s.29 1.16.29 1.87c0 1.17-.27 2.04-.8 2.59-.53.55-1.25.83-2.13.83h-9.97v11.89c-.39.11-.94.2-1.65.29-.71.09-1.46.13-2.24.13-1.67 0-2.83-.29-3.49-.85s-.99-1.6-.99-3.09V41.22c0-1.35.4-2.43 1.2-3.23.8-.8 1.88-1.2 3.23-1.2h17.74zM229.73 68.02c-.8-.8-1.2-1.88-1.2-3.23V41.22c0-1.35.4-2.43 1.2-3.23.8-.8 1.88-1.2 3.23-1.2h17.65c.21.36.41.8.59 1.33s.27 1.14.27 1.81c0 1.17-.26 2.04-.77 2.61-.52.57-1.24.85-2.16.85H236.7v5.97h12.37c.21.36.41.8.59 1.33s.27 1.14.27 1.81c0 1.17-.25 2.04-.75 2.59-.5.55-1.21.83-2.13.83H236.7v6.67h14.13c.21.36.41.82.59 1.39s.27 1.19.27 1.87c0 1.17-.26 2.03-.77 2.56-.52.53-1.22.8-2.11.8h-15.84c-1.37.01-2.44-.39-3.24-1.19z\" class=\"st1\"/>\r\n    </g>\r\n    <g>\r\n      <path d=\"M36.48 46.37c-.31-1.42.55-2.05 1.87-1.47 2.1.92 3.28 2.74 3.49 4.89.29 3.02-.63 6.08-.01 9.12.25 1.13 1.24 1.72 2.35 1.54 1.81-.28 3.24-1.33 4.31-2.67 1.95-2.43 3.81-4.96 5.46-7.62 2.02-3.26 2.73-7.11 3.39-10.94.25-1.43.42-2.89.77-4.28.16-.61.58-1.24 1.08-1.61.85-.63 1.63-.3 1.83.83.96 6.58.22 14.43-2.29 20.3-.94 2.16-2.3 4.12-3.62 6.05-.14.2-.28.39-.42.59 4.14-3.55 8-9.42 9.79-19.13V18.53H48.63v.02c-4.81.28-8.63 4.26-8.63 9.14v14.29H18.69v15.85h.02c.28 4.81 4.26 8.63 9.14 8.63H33.3c.76-4.55 1.61-8.6 2.2-10.44 1-3.11 1.73-6.22.98-9.65zm17.15-10.94c.4-.69 1.08-.49 1.47.27 1.35 2.67 1.21 5.27.26 7.84-.33.91-.61 1.84-.98 2.95-.59-3.13-1.34-5.74-1.45-8.76.01-.79.31-1.63.7-2.3zm-1.42 6.23c.45 1.17 1.28 4.3 1.42 4.64.55 1.34-.25 2.24-.76 3.22-.35.67-1.4 1.9-1.48 1.9-.46-2.79-.96-5.57-1.34-8.36-.17-1.22 1.27-3.52 2.16-1.4zm-4.22 5.26c1.03-1.86 2.48 2.77 2.82 3.95.24.85.18 1.46-.41 2.28-.44.6-.93 1.16-1.5 1.89-.56-2.43-1.94-6.26-.91-8.12z\" class=\"st0\"/>\r\n      <path d=\"M86.3 50.8c-.17-4.91-4.21-8.83-9.15-8.83H64.47c-1.79 9.71-5.65 15.58-9.79 19.13-1.13 1.59-2.16 3.11-3.04 4.61-3.56 6.05-4.79 11.74-1.06 20.22.07.11.08.23.17.23h4.89v-.01c4.91-.17 8.83-4.21 8.83-9.15v-7.3-2.81-.44h21.84v-9.16-6.16c0-.11 0-.22-.01-.33.01 0 .01 0 0 0z\" class=\"st1\"/>\r\n    </g>\r\n  </g>\r\n</svg>";

var LogoTagline = "<svg id=\"logo_tagline\" data-name=\"Layer 3\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2in\" height=\"100%\" viewBox=\"0 0 360 360\" >\r\n  <defs/>\r\n  <style>\r\n    .st0{fill:#00adbc}\r\n\t.st1{fill:#ffa500}\r\n  </style>\r\n  <path d=\"M74.75 282.6c-3.65 0-7.06-.58-10.14-1.72-3.01-1.11-5.62-2.75-7.78-4.85-2.16-2.11-3.89-4.76-5.14-7.9-1.27-3.17-1.91-6.89-1.91-11.05 0-4.21.65-7.95 1.95-11.11 1.28-3.13 3.03-5.77 5.21-7.84 2.19-2.09 4.81-3.7 7.8-4.79 3.05-1.12 6.42-1.68 10.02-1.68 3.59 0 6.96.57 10.02 1.68 2.99 1.09 5.63 2.71 7.86 4.8 2.2 2.07 3.97 4.71 5.24 7.83 1.29 3.17 1.95 6.9 1.95 11.11 0 4.22-.64 7.99-1.92 11.19-1.25 3.14-2.98 5.79-5.15 7.86-2.19 2.08-4.82 3.69-7.83 4.78-3.1 1.12-6.52 1.69-10.18 1.69zm.09-45.27c-4.79 0-8.72 1.77-11.66 5.26-2.8 3.32-4.21 8.19-4.21 14.49 0 6.28 1.39 11.16 4.14 14.5 2.91 3.55 6.83 5.34 11.65 5.34 4.87 0 8.82-1.8 11.74-5.34 2.75-3.34 4.14-8.22 4.14-14.5 0-6.21-1.37-11.05-4.08-14.39-2.9-3.56-6.84-5.36-11.72-5.36zM117.95 282.51c-2.32 0-4.5-.17-6.45-.49-1.82-.3-3.36-.76-4.57-1.36-1.03-.51-1.83-1.12-2.36-1.81-.4-.53-.59-1.14-.59-1.92 0-.76.12-1.36.37-1.79 1.26.57 2.62 1.09 4.06 1.57 2.6.87 5.6 1.31 8.91 1.31 2.48 0 4.43-.41 5.97-1.24 2.11-1.15 3.33-3.07 3.33-5.26 0-2.03-.94-3.77-2.65-4.91-1.16-.77-2.73-1.31-4.94-1.71l-2.63-.53c-4.62-.9-8-2.26-10.07-4.04-1.76-1.51-2.61-3.71-2.61-6.75 0-1.65.34-3.09 1.03-4.38.7-1.31 1.66-2.38 2.95-3.27 1.4-.97 3.15-1.74 5.19-2.3 2.12-.57 4.52-.87 7.14-.87 2.01 0 3.93.15 5.68.45 1.64.28 3.06.69 4.21 1.22.93.43 1.65.96 2.14 1.57.34.42.49.9.49 1.54 0 .69-.09 1.28-.28 1.74-1.04-.35-2.18-.68-3.41-.97-1.22-.29-2.48-.53-3.75-.73-1.36-.21-2.61-.31-3.74-.31-2.47 0-4.42.31-5.95.95-2.41 1-3.79 2.96-3.79 5.37 0 1.83.86 3.43 2.41 4.51 1.01.71 2.47 1.25 4.7 1.73l2.76.62c6.37 1.46 9.31 3.29 10.66 4.57 1.72 1.63 2.56 3.73 2.56 6.42 0 3.48-1.19 5.99-3.74 7.92-2.79 2.08-7.17 3.15-13.03 3.15zM146.3 281.69c-1.11 0-2.11-.07-2.97-.22-.49-.08-.87-.23-1.14-.43-.14-.11-.34-.29-.53-.75-.12-.29-.32-.95-.32-2.29v-33.72c1.09-.18 2.21-.27 3.33-.27 1.11 0 2.11.07 2.97.22.49.08.88.23 1.14.43.08.06.32.24.54.76.11.27.31.94.31 2.29v33.72c-1.09.17-2.21.26-3.33.26zm-.81-48.6c-2.07 0-3.03-.73-3.57-1.29-.88-.9-1.29-1.95-1.29-3.3 0-1.36.41-2.41 1.29-3.31.54-.55 1.5-1.29 3.57-1.29s3.03.73 3.57 1.29c.88.9 1.29 1.95 1.29 3.3 0 1.36-.41 2.41-1.29 3.3-.54.57-1.5 1.3-3.57 1.3z\" class=\"st0\"/>\r\n  <g>\r\n    <path d=\"M162.94 280.3c-1.35-1.35-2.03-3.17-2.03-5.46v-47.52c.66-.12 1.61-.27 2.84-.45 1.23-.18 2.45-.27 3.65-.27 2.7 0 4.66.45 5.86 1.35 1.2.9 1.8 2.68 1.8 5.32v37.6h21.64c.36.6.7 1.38 1.04 2.34.33.96.5 2.01.5 3.16 0 1.98-.44 3.47-1.31 4.46-.87.99-2.06 1.49-3.56 1.49H168.4c-2.29.01-4.11-.67-5.46-2.02zM210.96 282.78c-2.83 0-4.8-.48-5.91-1.44-1.11-.96-1.67-2.71-1.67-5.23v-48.78c.66-.12 1.61-.27 2.84-.45 1.23-.18 2.48-.27 3.74-.27 2.71 0 4.64.45 5.82 1.35 1.17.9 1.76 2.68 1.76 5.32v48.78c-.66.18-1.59.35-2.8.5-1.2.14-2.46.22-3.78.22zM264.07 227.5c.36.6.69 1.38.99 2.34.3.96.45 2.01.45 3.16 0 1.98-.44 3.46-1.31 4.42-.87.96-2.09 1.44-3.65 1.44h-20.02v11.81H261c.36.66.71 1.44 1.04 2.34.33.9.5 1.95.5 3.16 0 1.98-.45 3.44-1.35 4.37-.9.93-2.1 1.4-3.61 1.4h-16.86v20.11c-.66.18-1.59.35-2.8.5-1.2.15-2.47.23-3.79.23-2.83 0-4.8-.48-5.91-1.44-1.11-.96-1.67-2.71-1.67-5.23v-41.12c0-2.28.68-4.1 2.03-5.46 1.35-1.35 3.17-2.03 5.46-2.03h30.03zM272.59 280.3c-1.35-1.35-2.03-3.17-2.03-5.46v-39.86c0-2.28.68-4.1 2.03-5.46 1.35-1.35 3.17-2.03 5.46-2.03h29.85c.36.6.69 1.35.99 2.25.3.9.45 1.93.45 3.07 0 1.98-.44 3.46-1.31 4.42-.87.96-2.09 1.44-3.65 1.44h-20.02v10.1h20.92c.36.6.69 1.35.99 2.25.3.9.45 1.93.45 3.07 0 1.98-.42 3.44-1.26 4.37-.84.93-2.04 1.4-3.61 1.4h-17.49v11.27h23.9c.36.6.69 1.38.99 2.35.3.96.45 2.01.45 3.16 0 1.98-.44 3.43-1.31 4.33-.87.9-2.06 1.35-3.56 1.35h-26.78c-2.29.01-4.11-.67-5.46-2.02z\" class=\"st1\"/>\r\n  </g>\r\n  <g>\r\n    <path d=\"M145.95 100.72c-.8-3.7 1.43-5.36 4.89-3.84 5.48 2.41 8.57 7.16 9.1 12.76.77 7.88-1.64 15.87-.03 23.8.66 2.96 3.23 4.48 6.12 4.03 4.72-.74 8.45-3.47 11.25-6.96 5.08-6.35 9.94-12.95 14.26-19.89 5.28-8.5 7.14-18.55 8.86-28.56.64-3.73 1.09-7.53 2.02-11.17.41-1.6 1.52-3.24 2.81-4.19 2.23-1.65 4.25-.78 4.77 2.16 2.51 17.16.57 37.66-5.98 52.98-2.45 5.63-5.99 10.75-9.44 15.8-.37.52-.74 1.03-1.1 1.54 10.81-9.26 20.89-24.58 25.55-49.93V28.06h-41.39v.04c-12.56.72-22.52 11.13-22.52 23.87v37.28H99.49v41.39h.04c.72 12.56 11.13 22.52 23.87 22.52h14.23c1.98-11.87 4.21-22.45 5.75-27.24 2.62-8.13 4.52-16.23 2.57-25.2zm44.76-28.54c1.05-1.8 2.83-1.29 3.84.71 3.53 6.97 3.16 13.75.69 20.46-.87 2.37-1.6 4.81-2.56 7.71-1.54-8.17-3.49-14.99-3.79-22.87.01-2.07.81-4.26 1.82-6.01zm-3.69 16.24c1.17 3.05 3.33 11.22 3.69 12.1 1.43 3.5-.66 5.85-2 8.4-.91 1.74-3.64 4.96-3.87 4.96-1.2-7.27-2.49-14.53-3.5-21.82-.41-3.16 3.36-9.15 5.68-3.64zM176 102.16c2.69-4.86 6.46 7.23 7.35 10.31.64 2.21.48 3.82-1.07 5.95-1.14 1.56-2.44 3.03-3.91 4.92-1.45-6.33-5.06-16.32-2.37-21.18z\" class=\"st0\"/>\r\n    <path d=\"M276.01 112.29c-.45-12.81-10.98-23.05-23.89-23.05h-33.08c-4.66 25.35-14.74 40.67-25.55 49.93-2.95 4.15-5.63 8.12-7.93 12.03-9.3 15.78-12.49 30.65-2.77 52.79.17.28.22.59.43.59h12.77v-.02c12.81-.45 23.05-10.98 23.05-23.89v-19.04-7.33-1.15h57v-23.91-16.09-.86h-.03z\" class=\"st1\"/>\r\n  </g>\r\n  <g>\r\n    <path d=\"M63.89 314.15c1.13.98 1.69 2.29 1.69 3.94s-.56 2.96-1.69 3.94-2.63 1.47-4.52 1.47h-4.05v7.47h-2.45v-18.3h6.5c1.88.01 3.39.5 4.52 1.48zm-1.95 6.38c.7-.61 1.06-1.42 1.06-2.44 0-1.01-.35-1.83-1.06-2.44-.7-.61-1.65-.91-2.84-.91h-3.79v6.7h3.79c1.19 0 2.14-.3 2.84-.91zM68.56 330.25c-.79-.69-1.18-1.61-1.18-2.76 0-1.36.6-2.37 1.8-3.04.93-.46 2.37-.82 4.33-1.06l2.4-.28v-.21c0-1.19-.22-2.04-.67-2.55-.45-.52-1.17-.77-2.16-.77-.88 0-1.57.22-2.09.67s-.8 1.07-.85 1.88h-2.35c.09-1.32.6-2.38 1.56-3.17.95-.79 2.19-1.19 3.7-1.19 1.77 0 3.06.43 3.87 1.28.81.85 1.21 2.21 1.21 4.08v3.48c0 1.96.15 3.41.44 4.36h-2.29c-.1-.72-.17-1.5-.21-2.35-.29.83-.83 1.47-1.6 1.95-.77.47-1.68.71-2.73.71-1.34 0-2.39-.34-3.18-1.03zm6.35-1.89c.68-.75 1.02-1.75 1.02-3v-.64l-3.51.52c-.94.14-1.64.38-2.07.73-.44.35-.66.85-.66 1.48s.22 1.13.67 1.49c.45.36 1.07.54 1.86.54 1.11 0 2.01-.37 2.69-1.12zM80.74 318.09h2.4v-3.38l2.19-.93v4.3h3.22v1.8h-3.22v7.14c0 .74.15 1.28.45 1.61.3.34.78.5 1.43.5.38 0 .83-.06 1.34-.18v2.01c-.57.15-1.2.23-1.91.23-1.31 0-2.22-.35-2.73-1.06-.52-.7-.77-1.72-.77-3.04v-7.22h-2.4v-1.78zM92.12 312.94h2.5v2.76h-2.5v-2.76zm.16 5.15h2.19v12.88h-2.19v-12.88zM109.8 325.18h-9.15c.02 1.25.38 2.26 1.07 3.03.7.77 1.62 1.15 2.77 1.15 1.7 0 2.84-.82 3.43-2.45l1.8.8c-.91 2.39-2.71 3.58-5.39 3.58-1.86 0-3.3-.57-4.33-1.71-1.03-1.14-1.55-2.77-1.55-4.88 0-2.16.52-3.86 1.55-5.08 1.03-1.22 2.46-1.83 4.3-1.83 1.75 0 3.11.5 4.06 1.5s1.43 2.45 1.43 4.35v1.54zm-2.22-2.06c0-1.17-.29-2.06-.86-2.68-.57-.62-1.4-.93-2.46-.93-1.12 0-1.99.34-2.62 1.03-.63.69-.96 1.64-.99 2.86h6.93v-.28zM113.91 318.09h2.06v2.55c.84-1.94 2.27-2.91 4.3-2.91 2.87 0 4.3 1.74 4.3 5.23v8.01h-2.19v-7.89c0-2.29-.95-3.43-2.84-3.43-1.06 0-1.91.41-2.53 1.22-.62.82-.93 1.94-.93 3.36v6.73h-2.19v-12.87zM127.15 318.09h2.4v-3.38l2.19-.93v4.3h3.22v1.8h-3.22v7.14c0 .74.15 1.28.45 1.61.3.34.78.5 1.43.5.38 0 .83-.06 1.34-.18v2.01c-.57.15-1.2.23-1.91.23-1.31 0-2.22-.35-2.73-1.06-.52-.7-.77-1.72-.77-3.04v-7.22h-2.4v-1.78zM146.84 328.71c-1.4-1.8-2.1-4.11-2.1-6.93 0-2.89.72-5.2 2.16-6.93 1.44-1.74 3.49-2.6 6.16-2.6 2.15 0 3.83.57 5.05 1.73 1.22 1.15 1.95 2.71 2.19 4.69l-2.5.26c-.19-1.41-.7-2.53-1.53-3.35-.83-.82-1.95-1.24-3.34-1.24-1.77 0-3.15.67-4.14 2.02-.99 1.35-1.48 3.15-1.48 5.4 0 2.22.49 4.02 1.48 5.42.99 1.4 2.38 2.1 4.19 2.1 1.29 0 2.37-.4 3.25-1.2.88-.8 1.44-1.89 1.7-3.26l2.37.41c-.38 1.86-1.17 3.35-2.38 4.49-1.21 1.13-2.86 1.7-4.93 1.7-2.7-.01-4.75-.91-6.15-2.71zM164.32 330.25c-.79-.69-1.18-1.61-1.18-2.76 0-1.36.6-2.37 1.8-3.04.93-.46 2.37-.82 4.33-1.06l2.4-.28v-.21c0-1.19-.22-2.04-.67-2.55-.45-.52-1.17-.77-2.16-.77-.88 0-1.57.22-2.09.67s-.8 1.07-.85 1.88h-2.35c.09-1.32.6-2.38 1.56-3.17.95-.79 2.19-1.19 3.7-1.19 1.77 0 3.06.43 3.87 1.28.81.85 1.21 2.21 1.21 4.08v3.48c0 1.96.15 3.41.44 4.36h-2.29c-.1-.72-.17-1.5-.21-2.35-.29.83-.83 1.47-1.6 1.95-.77.47-1.68.71-2.73.71-1.33 0-2.39-.34-3.18-1.03zm6.35-1.89c.68-.75 1.02-1.75 1.02-3v-.64l-3.51.52c-.94.14-1.64.38-2.07.73-.44.35-.66.85-.66 1.48s.22 1.13.67 1.49c.45.36 1.07.54 1.86.54 1.11 0 2.01-.37 2.69-1.12zM182.23 318.68c.68-.6 1.48-.9 2.41-.9.21 0 .36.01.46.03v2.14h-.1c-1.22 0-2.17.33-2.84 1.01-.38.38-.67.85-.88 1.42-.21.57-.33 1.06-.36 1.47-.03.41-.05.95-.05 1.62v5.51h-2.19V318.1h2.04v2.94c.33-.97.84-1.76 1.51-2.36zM198.37 325.18h-9.15c.02 1.25.38 2.26 1.07 3.03.7.77 1.62 1.15 2.77 1.15 1.7 0 2.84-.82 3.43-2.45l1.8.8c-.91 2.39-2.71 3.58-5.39 3.58-1.86 0-3.3-.57-4.33-1.71-1.03-1.14-1.55-2.77-1.55-4.88 0-2.16.52-3.86 1.55-5.08 1.03-1.22 2.46-1.83 4.3-1.83 1.75 0 3.11.5 4.06 1.5s1.43 2.45 1.43 4.35v1.54zm-2.21-2.06c0-1.17-.29-2.06-.86-2.68-.57-.62-1.4-.93-2.46-.93-1.12 0-1.99.34-2.62 1.03-.63.69-.96 1.64-.99 2.86h6.93v-.28zM220.98 314.15c1.13.98 1.69 2.29 1.69 3.94s-.56 2.96-1.69 3.94-2.63 1.47-4.52 1.47h-4.05v7.47h-2.45v-18.3h6.5c1.88.01 3.39.5 4.52 1.48zm-1.95 6.38c.7-.61 1.06-1.42 1.06-2.44 0-1.01-.35-1.83-1.06-2.44-.7-.61-1.65-.91-2.84-.91h-3.79v6.7h3.79c1.19 0 2.14-.3 2.84-.91zM225.65 330.25c-.79-.69-1.18-1.61-1.18-2.76 0-1.36.6-2.37 1.8-3.04.93-.46 2.37-.82 4.33-1.06l2.4-.28v-.21c0-1.19-.22-2.04-.67-2.55-.45-.52-1.17-.77-2.16-.77-.88 0-1.57.22-2.09.67s-.8 1.07-.85 1.88h-2.35c.09-1.32.6-2.38 1.56-3.17.95-.79 2.19-1.19 3.7-1.19 1.77 0 3.06.43 3.87 1.28.81.85 1.21 2.21 1.21 4.08v3.48c0 1.96.15 3.41.44 4.36h-2.29c-.1-.72-.17-1.5-.21-2.35-.29.83-.83 1.47-1.6 1.95-.77.47-1.68.71-2.73.71-1.34 0-2.39-.34-3.18-1.03zm6.35-1.89c.68-.75 1.02-1.75 1.02-3v-.64l-3.51.52c-.94.14-1.64.38-2.07.73-.44.35-.66.85-.66 1.48s.22 1.13.67 1.49c.45.36 1.07.54 1.86.54 1.11 0 2.01-.37 2.69-1.12zM243.56 318.68c.68-.6 1.48-.9 2.41-.9.21 0 .36.01.46.03v2.14h-.1c-1.22 0-2.17.33-2.84 1.01-.38.38-.67.85-.88 1.42-.21.57-.33 1.06-.36 1.47-.03.41-.05.95-.05 1.62v5.51h-2.19V318.1h2.04v2.94c.33-.97.83-1.76 1.51-2.36zM248.49 318.09h2.4v-3.38l2.19-.93v4.3h3.22v1.8h-3.22v7.14c0 .74.15 1.28.45 1.61.3.34.78.5 1.43.5.38 0 .83-.06 1.34-.18v2.01c-.57.15-1.2.23-1.91.23-1.31 0-2.22-.35-2.73-1.06-.52-.7-.77-1.72-.77-3.04v-7.22h-2.4v-1.78zM260.03 318.09h2.06v2.55c.84-1.94 2.27-2.91 4.3-2.91 2.87 0 4.3 1.74 4.3 5.23v8.01h-2.19v-7.89c0-2.29-.94-3.43-2.84-3.43-1.06 0-1.91.41-2.53 1.22-.62.82-.93 1.94-.93 3.36v6.73h-2.19v-12.87zM285.64 325.18h-9.15c.02 1.25.38 2.26 1.07 3.03.7.77 1.62 1.15 2.77 1.15 1.7 0 2.84-.82 3.43-2.45l1.8.8c-.91 2.39-2.71 3.58-5.39 3.58-1.86 0-3.3-.57-4.33-1.71-1.03-1.14-1.55-2.77-1.55-4.88 0-2.16.52-3.86 1.55-5.08 1.03-1.22 2.46-1.83 4.3-1.83 1.75 0 3.11.5 4.06 1.5s1.43 2.45 1.43 4.35v1.54zm-2.22-2.06c0-1.17-.29-2.06-.86-2.68-.57-.62-1.4-.93-2.46-.93-1.12 0-1.99.34-2.62 1.03-.63.69-.96 1.64-.99 2.86h6.93v-.28zM293.3 318.68c.68-.6 1.48-.9 2.41-.9.21 0 .36.01.46.03v2.14h-.1c-1.22 0-2.17.33-2.84 1.01-.38.38-.67.85-.88 1.42-.21.57-.33 1.06-.36 1.47-.03.41-.05.95-.05 1.62v5.51h-2.19V318.1h2.04v2.94c.33-.97.83-1.76 1.51-2.36zM299.79 330.25c-.97-.69-1.57-1.67-1.79-2.94l2.22-.39c.16.81.52 1.43 1.11 1.88.58.45 1.35.67 2.29.67.84 0 1.5-.18 1.97-.55.47-.37.71-.84.71-1.4 0-.55-.15-.96-.46-1.24-.31-.28-.77-.46-1.39-.57l-2.53-.46c-2.29-.43-3.43-1.63-3.43-3.61 0-1.13.44-2.06 1.33-2.78.89-.72 2.08-1.08 3.57-1.08 1.44 0 2.62.31 3.54.93.92.62 1.44 1.47 1.56 2.55l-2.16.49c-.15-.67-.49-1.2-1-1.6-.52-.4-1.2-.59-2.04-.59-.83 0-1.47.17-1.95.52-.47.34-.71.83-.71 1.47 0 .98.66 1.59 1.98 1.83l2.5.46c2.23.43 3.35 1.6 3.35 3.51 0 1.18-.43 2.14-1.3 2.86-.87.72-2.08 1.08-3.62 1.08-1.53-.01-2.78-.35-3.75-1.04z\" class=\"st0\"/>\r\n  </g>\r\n</svg>";

var LogoTaglineBlack = "<svg id=\"logo_tagline\" data-name=\"Layer 3\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2in\" height=\"100%\" viewBox=\"0 0 360 360\" >\r\n  <defs/>\r\n  <style>\r\n    .st0{fill:#000}\r\n\t.st1{fill:#000}\r\n  </style>\r\n  <path d=\"M74.75 282.6c-3.65 0-7.06-.58-10.14-1.72-3.01-1.11-5.62-2.75-7.78-4.85-2.16-2.11-3.89-4.76-5.14-7.9-1.27-3.17-1.91-6.89-1.91-11.05 0-4.21.65-7.95 1.95-11.11 1.28-3.13 3.03-5.77 5.21-7.84 2.19-2.09 4.81-3.7 7.8-4.79 3.05-1.12 6.42-1.68 10.02-1.68 3.59 0 6.96.57 10.02 1.68 2.99 1.09 5.63 2.71 7.86 4.8 2.2 2.07 3.97 4.71 5.24 7.83 1.29 3.17 1.95 6.9 1.95 11.11 0 4.22-.64 7.99-1.92 11.19-1.25 3.14-2.98 5.79-5.15 7.86-2.19 2.08-4.82 3.69-7.83 4.78-3.1 1.12-6.52 1.69-10.18 1.69zm.09-45.27c-4.79 0-8.72 1.77-11.66 5.26-2.8 3.32-4.21 8.19-4.21 14.49 0 6.28 1.39 11.16 4.14 14.5 2.91 3.55 6.83 5.34 11.65 5.34 4.87 0 8.82-1.8 11.74-5.34 2.75-3.34 4.14-8.22 4.14-14.5 0-6.21-1.37-11.05-4.08-14.39-2.9-3.56-6.84-5.36-11.72-5.36zM117.95 282.51c-2.32 0-4.5-.17-6.45-.49-1.82-.3-3.36-.76-4.57-1.36-1.03-.51-1.83-1.12-2.36-1.81-.4-.53-.59-1.14-.59-1.92 0-.76.12-1.36.37-1.79 1.26.57 2.62 1.09 4.06 1.57 2.6.87 5.6 1.31 8.91 1.31 2.48 0 4.43-.41 5.97-1.24 2.11-1.15 3.33-3.07 3.33-5.26 0-2.03-.94-3.77-2.65-4.91-1.16-.77-2.73-1.31-4.94-1.71l-2.63-.53c-4.62-.9-8-2.26-10.07-4.04-1.76-1.51-2.61-3.71-2.61-6.75 0-1.65.34-3.09 1.03-4.38.7-1.31 1.66-2.38 2.95-3.27 1.4-.97 3.15-1.74 5.19-2.3 2.12-.57 4.52-.87 7.14-.87 2.01 0 3.93.15 5.68.45 1.64.28 3.06.69 4.21 1.22.93.43 1.65.96 2.14 1.57.34.42.49.9.49 1.54 0 .69-.09 1.28-.28 1.74-1.04-.35-2.18-.68-3.41-.97-1.22-.29-2.48-.53-3.75-.73-1.36-.21-2.61-.31-3.74-.31-2.47 0-4.42.31-5.95.95-2.41 1-3.79 2.96-3.79 5.37 0 1.83.86 3.43 2.41 4.51 1.01.71 2.47 1.25 4.7 1.73l2.76.62c6.37 1.46 9.31 3.29 10.66 4.57 1.72 1.63 2.56 3.73 2.56 6.42 0 3.48-1.19 5.99-3.74 7.92-2.79 2.08-7.17 3.15-13.03 3.15zM146.3 281.69c-1.11 0-2.11-.07-2.97-.22-.49-.08-.87-.23-1.14-.43-.14-.11-.34-.29-.53-.75-.12-.29-.32-.95-.32-2.29v-33.72c1.09-.18 2.21-.27 3.33-.27 1.11 0 2.11.07 2.97.22.49.08.88.23 1.14.43.08.06.32.24.54.76.11.27.31.94.31 2.29v33.72c-1.09.17-2.21.26-3.33.26zm-.81-48.6c-2.07 0-3.03-.73-3.57-1.29-.88-.9-1.29-1.95-1.29-3.3 0-1.36.41-2.41 1.29-3.31.54-.55 1.5-1.29 3.57-1.29s3.03.73 3.57 1.29c.88.9 1.29 1.95 1.29 3.3 0 1.36-.41 2.41-1.29 3.3-.54.57-1.5 1.3-3.57 1.3z\" class=\"st0\"/>\r\n  <g>\r\n    <path d=\"M162.94 280.3c-1.35-1.35-2.03-3.17-2.03-5.46v-47.52c.66-.12 1.61-.27 2.84-.45 1.23-.18 2.45-.27 3.65-.27 2.7 0 4.66.45 5.86 1.35 1.2.9 1.8 2.68 1.8 5.32v37.6h21.64c.36.6.7 1.38 1.04 2.34.33.96.5 2.01.5 3.16 0 1.98-.44 3.47-1.31 4.46-.87.99-2.06 1.49-3.56 1.49H168.4c-2.29.01-4.11-.67-5.46-2.02zM210.96 282.78c-2.83 0-4.8-.48-5.91-1.44-1.11-.96-1.67-2.71-1.67-5.23v-48.78c.66-.12 1.61-.27 2.84-.45 1.23-.18 2.48-.27 3.74-.27 2.71 0 4.64.45 5.82 1.35 1.17.9 1.76 2.68 1.76 5.32v48.78c-.66.18-1.59.35-2.8.5-1.2.14-2.46.22-3.78.22zM264.07 227.5c.36.6.69 1.38.99 2.34.3.96.45 2.01.45 3.16 0 1.98-.44 3.46-1.31 4.42-.87.96-2.09 1.44-3.65 1.44h-20.02v11.81H261c.36.66.71 1.44 1.04 2.34.33.9.5 1.95.5 3.16 0 1.98-.45 3.44-1.35 4.37-.9.93-2.1 1.4-3.61 1.4h-16.86v20.11c-.66.18-1.59.35-2.8.5-1.2.15-2.47.23-3.79.23-2.83 0-4.8-.48-5.91-1.44-1.11-.96-1.67-2.71-1.67-5.23v-41.12c0-2.28.68-4.1 2.03-5.46 1.35-1.35 3.17-2.03 5.46-2.03h30.03zM272.59 280.3c-1.35-1.35-2.03-3.17-2.03-5.46v-39.86c0-2.28.68-4.1 2.03-5.46 1.35-1.35 3.17-2.03 5.46-2.03h29.85c.36.6.69 1.35.99 2.25.3.9.45 1.93.45 3.07 0 1.98-.44 3.46-1.31 4.42-.87.96-2.09 1.44-3.65 1.44h-20.02v10.1h20.92c.36.6.69 1.35.99 2.25.3.9.45 1.93.45 3.07 0 1.98-.42 3.44-1.26 4.37-.84.93-2.04 1.4-3.61 1.4h-17.49v11.27h23.9c.36.6.69 1.38.99 2.35.3.96.45 2.01.45 3.16 0 1.98-.44 3.43-1.31 4.33-.87.9-2.06 1.35-3.56 1.35h-26.78c-2.29.01-4.11-.67-5.46-2.02z\" class=\"st1\"/>\r\n  </g>\r\n  <g>\r\n    <path d=\"M145.95 100.72c-.8-3.7 1.43-5.36 4.89-3.84 5.48 2.41 8.57 7.16 9.1 12.76.77 7.88-1.64 15.87-.03 23.8.66 2.96 3.23 4.48 6.12 4.03 4.72-.74 8.45-3.47 11.25-6.96 5.08-6.35 9.94-12.95 14.26-19.89 5.28-8.5 7.14-18.55 8.86-28.56.64-3.73 1.09-7.53 2.02-11.17.41-1.6 1.52-3.24 2.81-4.19 2.23-1.65 4.25-.78 4.77 2.16 2.51 17.16.57 37.66-5.98 52.98-2.45 5.63-5.99 10.75-9.44 15.8-.37.52-.74 1.03-1.1 1.54 10.81-9.26 20.89-24.58 25.55-49.93V28.06h-41.39v.04c-12.56.72-22.52 11.13-22.52 23.87v37.28H99.49v41.39h.04c.72 12.56 11.13 22.52 23.87 22.52h14.23c1.98-11.87 4.21-22.45 5.75-27.24 2.62-8.13 4.52-16.23 2.57-25.2zm44.76-28.54c1.05-1.8 2.83-1.29 3.84.71 3.53 6.97 3.16 13.75.69 20.46-.87 2.37-1.6 4.81-2.56 7.71-1.54-8.17-3.49-14.99-3.79-22.87.01-2.07.81-4.26 1.82-6.01zm-3.69 16.24c1.17 3.05 3.33 11.22 3.69 12.1 1.43 3.5-.66 5.85-2 8.4-.91 1.74-3.64 4.96-3.87 4.96-1.2-7.27-2.49-14.53-3.5-21.82-.41-3.16 3.36-9.15 5.68-3.64zM176 102.16c2.69-4.86 6.46 7.23 7.35 10.31.64 2.21.48 3.82-1.07 5.95-1.14 1.56-2.44 3.03-3.91 4.92-1.45-6.33-5.06-16.32-2.37-21.18z\" class=\"st0\"/>\r\n    <path d=\"M276.01 112.29c-.45-12.81-10.98-23.05-23.89-23.05h-33.08c-4.66 25.35-14.74 40.67-25.55 49.93-2.95 4.15-5.63 8.12-7.93 12.03-9.3 15.78-12.49 30.65-2.77 52.79.17.28.22.59.43.59h12.77v-.02c12.81-.45 23.05-10.98 23.05-23.89v-19.04-7.33-1.15h57v-23.91-16.09-.86h-.03z\" class=\"st1\"/>\r\n  </g>\r\n  <g>\r\n    <path d=\"M63.89 314.15c1.13.98 1.69 2.29 1.69 3.94s-.56 2.96-1.69 3.94-2.63 1.47-4.52 1.47h-4.05v7.47h-2.45v-18.3h6.5c1.88.01 3.39.5 4.52 1.48zm-1.95 6.38c.7-.61 1.06-1.42 1.06-2.44 0-1.01-.35-1.83-1.06-2.44-.7-.61-1.65-.91-2.84-.91h-3.79v6.7h3.79c1.19 0 2.14-.3 2.84-.91zM68.56 330.25c-.79-.69-1.18-1.61-1.18-2.76 0-1.36.6-2.37 1.8-3.04.93-.46 2.37-.82 4.33-1.06l2.4-.28v-.21c0-1.19-.22-2.04-.67-2.55-.45-.52-1.17-.77-2.16-.77-.88 0-1.57.22-2.09.67s-.8 1.07-.85 1.88h-2.35c.09-1.32.6-2.38 1.56-3.17.95-.79 2.19-1.19 3.7-1.19 1.77 0 3.06.43 3.87 1.28.81.85 1.21 2.21 1.21 4.08v3.48c0 1.96.15 3.41.44 4.36h-2.29c-.1-.72-.17-1.5-.21-2.35-.29.83-.83 1.47-1.6 1.95-.77.47-1.68.71-2.73.71-1.34 0-2.39-.34-3.18-1.03zm6.35-1.89c.68-.75 1.02-1.75 1.02-3v-.64l-3.51.52c-.94.14-1.64.38-2.07.73-.44.35-.66.85-.66 1.48s.22 1.13.67 1.49c.45.36 1.07.54 1.86.54 1.11 0 2.01-.37 2.69-1.12zM80.74 318.09h2.4v-3.38l2.19-.93v4.3h3.22v1.8h-3.22v7.14c0 .74.15 1.28.45 1.61.3.34.78.5 1.43.5.38 0 .83-.06 1.34-.18v2.01c-.57.15-1.2.23-1.91.23-1.31 0-2.22-.35-2.73-1.06-.52-.7-.77-1.72-.77-3.04v-7.22h-2.4v-1.78zM92.12 312.94h2.5v2.76h-2.5v-2.76zm.16 5.15h2.19v12.88h-2.19v-12.88zM109.8 325.18h-9.15c.02 1.25.38 2.26 1.07 3.03.7.77 1.62 1.15 2.77 1.15 1.7 0 2.84-.82 3.43-2.45l1.8.8c-.91 2.39-2.71 3.58-5.39 3.58-1.86 0-3.3-.57-4.33-1.71-1.03-1.14-1.55-2.77-1.55-4.88 0-2.16.52-3.86 1.55-5.08 1.03-1.22 2.46-1.83 4.3-1.83 1.75 0 3.11.5 4.06 1.5s1.43 2.45 1.43 4.35v1.54zm-2.22-2.06c0-1.17-.29-2.06-.86-2.68-.57-.62-1.4-.93-2.46-.93-1.12 0-1.99.34-2.62 1.03-.63.69-.96 1.64-.99 2.86h6.93v-.28zM113.91 318.09h2.06v2.55c.84-1.94 2.27-2.91 4.3-2.91 2.87 0 4.3 1.74 4.3 5.23v8.01h-2.19v-7.89c0-2.29-.95-3.43-2.84-3.43-1.06 0-1.91.41-2.53 1.22-.62.82-.93 1.94-.93 3.36v6.73h-2.19v-12.87zM127.15 318.09h2.4v-3.38l2.19-.93v4.3h3.22v1.8h-3.22v7.14c0 .74.15 1.28.45 1.61.3.34.78.5 1.43.5.38 0 .83-.06 1.34-.18v2.01c-.57.15-1.2.23-1.91.23-1.31 0-2.22-.35-2.73-1.06-.52-.7-.77-1.72-.77-3.04v-7.22h-2.4v-1.78zM146.84 328.71c-1.4-1.8-2.1-4.11-2.1-6.93 0-2.89.72-5.2 2.16-6.93 1.44-1.74 3.49-2.6 6.16-2.6 2.15 0 3.83.57 5.05 1.73 1.22 1.15 1.95 2.71 2.19 4.69l-2.5.26c-.19-1.41-.7-2.53-1.53-3.35-.83-.82-1.95-1.24-3.34-1.24-1.77 0-3.15.67-4.14 2.02-.99 1.35-1.48 3.15-1.48 5.4 0 2.22.49 4.02 1.48 5.42.99 1.4 2.38 2.1 4.19 2.1 1.29 0 2.37-.4 3.25-1.2.88-.8 1.44-1.89 1.7-3.26l2.37.41c-.38 1.86-1.17 3.35-2.38 4.49-1.21 1.13-2.86 1.7-4.93 1.7-2.7-.01-4.75-.91-6.15-2.71zM164.32 330.25c-.79-.69-1.18-1.61-1.18-2.76 0-1.36.6-2.37 1.8-3.04.93-.46 2.37-.82 4.33-1.06l2.4-.28v-.21c0-1.19-.22-2.04-.67-2.55-.45-.52-1.17-.77-2.16-.77-.88 0-1.57.22-2.09.67s-.8 1.07-.85 1.88h-2.35c.09-1.32.6-2.38 1.56-3.17.95-.79 2.19-1.19 3.7-1.19 1.77 0 3.06.43 3.87 1.28.81.85 1.21 2.21 1.21 4.08v3.48c0 1.96.15 3.41.44 4.36h-2.29c-.1-.72-.17-1.5-.21-2.35-.29.83-.83 1.47-1.6 1.95-.77.47-1.68.71-2.73.71-1.33 0-2.39-.34-3.18-1.03zm6.35-1.89c.68-.75 1.02-1.75 1.02-3v-.64l-3.51.52c-.94.14-1.64.38-2.07.73-.44.35-.66.85-.66 1.48s.22 1.13.67 1.49c.45.36 1.07.54 1.86.54 1.11 0 2.01-.37 2.69-1.12zM182.23 318.68c.68-.6 1.48-.9 2.41-.9.21 0 .36.01.46.03v2.14h-.1c-1.22 0-2.17.33-2.84 1.01-.38.38-.67.85-.88 1.42-.21.57-.33 1.06-.36 1.47-.03.41-.05.95-.05 1.62v5.51h-2.19V318.1h2.04v2.94c.33-.97.84-1.76 1.51-2.36zM198.37 325.18h-9.15c.02 1.25.38 2.26 1.07 3.03.7.77 1.62 1.15 2.77 1.15 1.7 0 2.84-.82 3.43-2.45l1.8.8c-.91 2.39-2.71 3.58-5.39 3.58-1.86 0-3.3-.57-4.33-1.71-1.03-1.14-1.55-2.77-1.55-4.88 0-2.16.52-3.86 1.55-5.08 1.03-1.22 2.46-1.83 4.3-1.83 1.75 0 3.11.5 4.06 1.5s1.43 2.45 1.43 4.35v1.54zm-2.21-2.06c0-1.17-.29-2.06-.86-2.68-.57-.62-1.4-.93-2.46-.93-1.12 0-1.99.34-2.62 1.03-.63.69-.96 1.64-.99 2.86h6.93v-.28zM220.98 314.15c1.13.98 1.69 2.29 1.69 3.94s-.56 2.96-1.69 3.94-2.63 1.47-4.52 1.47h-4.05v7.47h-2.45v-18.3h6.5c1.88.01 3.39.5 4.52 1.48zm-1.95 6.38c.7-.61 1.06-1.42 1.06-2.44 0-1.01-.35-1.83-1.06-2.44-.7-.61-1.65-.91-2.84-.91h-3.79v6.7h3.79c1.19 0 2.14-.3 2.84-.91zM225.65 330.25c-.79-.69-1.18-1.61-1.18-2.76 0-1.36.6-2.37 1.8-3.04.93-.46 2.37-.82 4.33-1.06l2.4-.28v-.21c0-1.19-.22-2.04-.67-2.55-.45-.52-1.17-.77-2.16-.77-.88 0-1.57.22-2.09.67s-.8 1.07-.85 1.88h-2.35c.09-1.32.6-2.38 1.56-3.17.95-.79 2.19-1.19 3.7-1.19 1.77 0 3.06.43 3.87 1.28.81.85 1.21 2.21 1.21 4.08v3.48c0 1.96.15 3.41.44 4.36h-2.29c-.1-.72-.17-1.5-.21-2.35-.29.83-.83 1.47-1.6 1.95-.77.47-1.68.71-2.73.71-1.34 0-2.39-.34-3.18-1.03zm6.35-1.89c.68-.75 1.02-1.75 1.02-3v-.64l-3.51.52c-.94.14-1.64.38-2.07.73-.44.35-.66.85-.66 1.48s.22 1.13.67 1.49c.45.36 1.07.54 1.86.54 1.11 0 2.01-.37 2.69-1.12zM243.56 318.68c.68-.6 1.48-.9 2.41-.9.21 0 .36.01.46.03v2.14h-.1c-1.22 0-2.17.33-2.84 1.01-.38.38-.67.85-.88 1.42-.21.57-.33 1.06-.36 1.47-.03.41-.05.95-.05 1.62v5.51h-2.19V318.1h2.04v2.94c.33-.97.83-1.76 1.51-2.36zM248.49 318.09h2.4v-3.38l2.19-.93v4.3h3.22v1.8h-3.22v7.14c0 .74.15 1.28.45 1.61.3.34.78.5 1.43.5.38 0 .83-.06 1.34-.18v2.01c-.57.15-1.2.23-1.91.23-1.31 0-2.22-.35-2.73-1.06-.52-.7-.77-1.72-.77-3.04v-7.22h-2.4v-1.78zM260.03 318.09h2.06v2.55c.84-1.94 2.27-2.91 4.3-2.91 2.87 0 4.3 1.74 4.3 5.23v8.01h-2.19v-7.89c0-2.29-.94-3.43-2.84-3.43-1.06 0-1.91.41-2.53 1.22-.62.82-.93 1.94-.93 3.36v6.73h-2.19v-12.87zM285.64 325.18h-9.15c.02 1.25.38 2.26 1.07 3.03.7.77 1.62 1.15 2.77 1.15 1.7 0 2.84-.82 3.43-2.45l1.8.8c-.91 2.39-2.71 3.58-5.39 3.58-1.86 0-3.3-.57-4.33-1.71-1.03-1.14-1.55-2.77-1.55-4.88 0-2.16.52-3.86 1.55-5.08 1.03-1.22 2.46-1.83 4.3-1.83 1.75 0 3.11.5 4.06 1.5s1.43 2.45 1.43 4.35v1.54zm-2.22-2.06c0-1.17-.29-2.06-.86-2.68-.57-.62-1.4-.93-2.46-.93-1.12 0-1.99.34-2.62 1.03-.63.69-.96 1.64-.99 2.86h6.93v-.28zM293.3 318.68c.68-.6 1.48-.9 2.41-.9.21 0 .36.01.46.03v2.14h-.1c-1.22 0-2.17.33-2.84 1.01-.38.38-.67.85-.88 1.42-.21.57-.33 1.06-.36 1.47-.03.41-.05.95-.05 1.62v5.51h-2.19V318.1h2.04v2.94c.33-.97.83-1.76 1.51-2.36zM299.79 330.25c-.97-.69-1.57-1.67-1.79-2.94l2.22-.39c.16.81.52 1.43 1.11 1.88.58.45 1.35.67 2.29.67.84 0 1.5-.18 1.97-.55.47-.37.71-.84.71-1.4 0-.55-.15-.96-.46-1.24-.31-.28-.77-.46-1.39-.57l-2.53-.46c-2.29-.43-3.43-1.63-3.43-3.61 0-1.13.44-2.06 1.33-2.78.89-.72 2.08-1.08 3.57-1.08 1.44 0 2.62.31 3.54.93.92.62 1.44 1.47 1.56 2.55l-2.16.49c-.15-.67-.49-1.2-1-1.6-.52-.4-1.2-.59-2.04-.59-.83 0-1.47.17-1.95.52-.47.34-.71.83-.71 1.47 0 .98.66 1.59 1.98 1.83l2.5.46c2.23.43 3.35 1.6 3.35 3.51 0 1.18-.43 2.14-1.3 2.86-.87.72-2.08 1.08-3.62 1.08-1.53-.01-2.78-.35-3.75-1.04z\" class=\"st0\"/>\r\n  </g>\r\n</svg>";

var LogoTaglineWhite = "<svg id=\"logo_tagline\" data-name=\"Layer 3\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2in\" height=\"100%\" viewBox=\"0 0 360 360\" >\r\n  <defs/>\r\n  <style>\r\n    .st0{fill:#fff}\r\n\t.st1{fill:#fff}\r\n  </style>\r\n  <path d=\"M74.75 282.6c-3.65 0-7.06-.58-10.14-1.72-3.01-1.11-5.62-2.75-7.78-4.85-2.16-2.11-3.89-4.76-5.14-7.9-1.27-3.17-1.91-6.89-1.91-11.05 0-4.21.65-7.95 1.95-11.11 1.28-3.13 3.03-5.77 5.21-7.84 2.19-2.09 4.81-3.7 7.8-4.79 3.05-1.12 6.42-1.68 10.02-1.68 3.59 0 6.96.57 10.02 1.68 2.99 1.09 5.63 2.71 7.86 4.8 2.2 2.07 3.97 4.71 5.24 7.83 1.29 3.17 1.95 6.9 1.95 11.11 0 4.22-.64 7.99-1.92 11.19-1.25 3.14-2.98 5.79-5.15 7.86-2.19 2.08-4.82 3.69-7.83 4.78-3.1 1.12-6.52 1.69-10.18 1.69zm.09-45.27c-4.79 0-8.72 1.77-11.66 5.26-2.8 3.32-4.21 8.19-4.21 14.49 0 6.28 1.39 11.16 4.14 14.5 2.91 3.55 6.83 5.34 11.65 5.34 4.87 0 8.82-1.8 11.74-5.34 2.75-3.34 4.14-8.22 4.14-14.5 0-6.21-1.37-11.05-4.08-14.39-2.9-3.56-6.84-5.36-11.72-5.36zM117.95 282.51c-2.32 0-4.5-.17-6.45-.49-1.82-.3-3.36-.76-4.57-1.36-1.03-.51-1.83-1.12-2.36-1.81-.4-.53-.59-1.14-.59-1.92 0-.76.12-1.36.37-1.79 1.26.57 2.62 1.09 4.06 1.57 2.6.87 5.6 1.31 8.91 1.31 2.48 0 4.43-.41 5.97-1.24 2.11-1.15 3.33-3.07 3.33-5.26 0-2.03-.94-3.77-2.65-4.91-1.16-.77-2.73-1.31-4.94-1.71l-2.63-.53c-4.62-.9-8-2.26-10.07-4.04-1.76-1.51-2.61-3.71-2.61-6.75 0-1.65.34-3.09 1.03-4.38.7-1.31 1.66-2.38 2.95-3.27 1.4-.97 3.15-1.74 5.19-2.3 2.12-.57 4.52-.87 7.14-.87 2.01 0 3.93.15 5.68.45 1.64.28 3.06.69 4.21 1.22.93.43 1.65.96 2.14 1.57.34.42.49.9.49 1.54 0 .69-.09 1.28-.28 1.74-1.04-.35-2.18-.68-3.41-.97-1.22-.29-2.48-.53-3.75-.73-1.36-.21-2.61-.31-3.74-.31-2.47 0-4.42.31-5.95.95-2.41 1-3.79 2.96-3.79 5.37 0 1.83.86 3.43 2.41 4.51 1.01.71 2.47 1.25 4.7 1.73l2.76.62c6.37 1.46 9.31 3.29 10.66 4.57 1.72 1.63 2.56 3.73 2.56 6.42 0 3.48-1.19 5.99-3.74 7.92-2.79 2.08-7.17 3.15-13.03 3.15zM146.3 281.69c-1.11 0-2.11-.07-2.97-.22-.49-.08-.87-.23-1.14-.43-.14-.11-.34-.29-.53-.75-.12-.29-.32-.95-.32-2.29v-33.72c1.09-.18 2.21-.27 3.33-.27 1.11 0 2.11.07 2.97.22.49.08.88.23 1.14.43.08.06.32.24.54.76.11.27.31.94.31 2.29v33.72c-1.09.17-2.21.26-3.33.26zm-.81-48.6c-2.07 0-3.03-.73-3.57-1.29-.88-.9-1.29-1.95-1.29-3.3 0-1.36.41-2.41 1.29-3.31.54-.55 1.5-1.29 3.57-1.29s3.03.73 3.57 1.29c.88.9 1.29 1.95 1.29 3.3 0 1.36-.41 2.41-1.29 3.3-.54.57-1.5 1.3-3.57 1.3z\" class=\"st0\"/>\r\n  <g>\r\n    <path d=\"M162.94 280.3c-1.35-1.35-2.03-3.17-2.03-5.46v-47.52c.66-.12 1.61-.27 2.84-.45 1.23-.18 2.45-.27 3.65-.27 2.7 0 4.66.45 5.86 1.35 1.2.9 1.8 2.68 1.8 5.32v37.6h21.64c.36.6.7 1.38 1.04 2.34.33.96.5 2.01.5 3.16 0 1.98-.44 3.47-1.31 4.46-.87.99-2.06 1.49-3.56 1.49H168.4c-2.29.01-4.11-.67-5.46-2.02zM210.96 282.78c-2.83 0-4.8-.48-5.91-1.44-1.11-.96-1.67-2.71-1.67-5.23v-48.78c.66-.12 1.61-.27 2.84-.45 1.23-.18 2.48-.27 3.74-.27 2.71 0 4.64.45 5.82 1.35 1.17.9 1.76 2.68 1.76 5.32v48.78c-.66.18-1.59.35-2.8.5-1.2.14-2.46.22-3.78.22zM264.07 227.5c.36.6.69 1.38.99 2.34.3.96.45 2.01.45 3.16 0 1.98-.44 3.46-1.31 4.42-.87.96-2.09 1.44-3.65 1.44h-20.02v11.81H261c.36.66.71 1.44 1.04 2.34.33.9.5 1.95.5 3.16 0 1.98-.45 3.44-1.35 4.37-.9.93-2.1 1.4-3.61 1.4h-16.86v20.11c-.66.18-1.59.35-2.8.5-1.2.15-2.47.23-3.79.23-2.83 0-4.8-.48-5.91-1.44-1.11-.96-1.67-2.71-1.67-5.23v-41.12c0-2.28.68-4.1 2.03-5.46 1.35-1.35 3.17-2.03 5.46-2.03h30.03zM272.59 280.3c-1.35-1.35-2.03-3.17-2.03-5.46v-39.86c0-2.28.68-4.1 2.03-5.46 1.35-1.35 3.17-2.03 5.46-2.03h29.85c.36.6.69 1.35.99 2.25.3.9.45 1.93.45 3.07 0 1.98-.44 3.46-1.31 4.42-.87.96-2.09 1.44-3.65 1.44h-20.02v10.1h20.92c.36.6.69 1.35.99 2.25.3.9.45 1.93.45 3.07 0 1.98-.42 3.44-1.26 4.37-.84.93-2.04 1.4-3.61 1.4h-17.49v11.27h23.9c.36.6.69 1.38.99 2.35.3.96.45 2.01.45 3.16 0 1.98-.44 3.43-1.31 4.33-.87.9-2.06 1.35-3.56 1.35h-26.78c-2.29.01-4.11-.67-5.46-2.02z\" class=\"st1\"/>\r\n  </g>\r\n  <g>\r\n    <path d=\"M145.95 100.72c-.8-3.7 1.43-5.36 4.89-3.84 5.48 2.41 8.57 7.16 9.1 12.76.77 7.88-1.64 15.87-.03 23.8.66 2.96 3.23 4.48 6.12 4.03 4.72-.74 8.45-3.47 11.25-6.96 5.08-6.35 9.94-12.95 14.26-19.89 5.28-8.5 7.14-18.55 8.86-28.56.64-3.73 1.09-7.53 2.02-11.17.41-1.6 1.52-3.24 2.81-4.19 2.23-1.65 4.25-.78 4.77 2.16 2.51 17.16.57 37.66-5.98 52.98-2.45 5.63-5.99 10.75-9.44 15.8-.37.52-.74 1.03-1.1 1.54 10.81-9.26 20.89-24.58 25.55-49.93V28.06h-41.39v.04c-12.56.72-22.52 11.13-22.52 23.87v37.28H99.49v41.39h.04c.72 12.56 11.13 22.52 23.87 22.52h14.23c1.98-11.87 4.21-22.45 5.75-27.24 2.62-8.13 4.52-16.23 2.57-25.2zm44.76-28.54c1.05-1.8 2.83-1.29 3.84.71 3.53 6.97 3.16 13.75.69 20.46-.87 2.37-1.6 4.81-2.56 7.71-1.54-8.17-3.49-14.99-3.79-22.87.01-2.07.81-4.26 1.82-6.01zm-3.69 16.24c1.17 3.05 3.33 11.22 3.69 12.1 1.43 3.5-.66 5.85-2 8.4-.91 1.74-3.64 4.96-3.87 4.96-1.2-7.27-2.49-14.53-3.5-21.82-.41-3.16 3.36-9.15 5.68-3.64zM176 102.16c2.69-4.86 6.46 7.23 7.35 10.31.64 2.21.48 3.82-1.07 5.95-1.14 1.56-2.44 3.03-3.91 4.92-1.45-6.33-5.06-16.32-2.37-21.18z\" class=\"st0\"/>\r\n    <path d=\"M276.01 112.29c-.45-12.81-10.98-23.05-23.89-23.05h-33.08c-4.66 25.35-14.74 40.67-25.55 49.93-2.95 4.15-5.63 8.12-7.93 12.03-9.3 15.78-12.49 30.65-2.77 52.79.17.28.22.59.43.59h12.77v-.02c12.81-.45 23.05-10.98 23.05-23.89v-19.04-7.33-1.15h57v-23.91-16.09-.86h-.03z\" class=\"st1\"/>\r\n  </g>\r\n  <g>\r\n    <path d=\"M63.89 314.15c1.13.98 1.69 2.29 1.69 3.94s-.56 2.96-1.69 3.94-2.63 1.47-4.52 1.47h-4.05v7.47h-2.45v-18.3h6.5c1.88.01 3.39.5 4.52 1.48zm-1.95 6.38c.7-.61 1.06-1.42 1.06-2.44 0-1.01-.35-1.83-1.06-2.44-.7-.61-1.65-.91-2.84-.91h-3.79v6.7h3.79c1.19 0 2.14-.3 2.84-.91zM68.56 330.25c-.79-.69-1.18-1.61-1.18-2.76 0-1.36.6-2.37 1.8-3.04.93-.46 2.37-.82 4.33-1.06l2.4-.28v-.21c0-1.19-.22-2.04-.67-2.55-.45-.52-1.17-.77-2.16-.77-.88 0-1.57.22-2.09.67s-.8 1.07-.85 1.88h-2.35c.09-1.32.6-2.38 1.56-3.17.95-.79 2.19-1.19 3.7-1.19 1.77 0 3.06.43 3.87 1.28.81.85 1.21 2.21 1.21 4.08v3.48c0 1.96.15 3.41.44 4.36h-2.29c-.1-.72-.17-1.5-.21-2.35-.29.83-.83 1.47-1.6 1.95-.77.47-1.68.71-2.73.71-1.34 0-2.39-.34-3.18-1.03zm6.35-1.89c.68-.75 1.02-1.75 1.02-3v-.64l-3.51.52c-.94.14-1.64.38-2.07.73-.44.35-.66.85-.66 1.48s.22 1.13.67 1.49c.45.36 1.07.54 1.86.54 1.11 0 2.01-.37 2.69-1.12zM80.74 318.09h2.4v-3.38l2.19-.93v4.3h3.22v1.8h-3.22v7.14c0 .74.15 1.28.45 1.61.3.34.78.5 1.43.5.38 0 .83-.06 1.34-.18v2.01c-.57.15-1.2.23-1.91.23-1.31 0-2.22-.35-2.73-1.06-.52-.7-.77-1.72-.77-3.04v-7.22h-2.4v-1.78zM92.12 312.94h2.5v2.76h-2.5v-2.76zm.16 5.15h2.19v12.88h-2.19v-12.88zM109.8 325.18h-9.15c.02 1.25.38 2.26 1.07 3.03.7.77 1.62 1.15 2.77 1.15 1.7 0 2.84-.82 3.43-2.45l1.8.8c-.91 2.39-2.71 3.58-5.39 3.58-1.86 0-3.3-.57-4.33-1.71-1.03-1.14-1.55-2.77-1.55-4.88 0-2.16.52-3.86 1.55-5.08 1.03-1.22 2.46-1.83 4.3-1.83 1.75 0 3.11.5 4.06 1.5s1.43 2.45 1.43 4.35v1.54zm-2.22-2.06c0-1.17-.29-2.06-.86-2.68-.57-.62-1.4-.93-2.46-.93-1.12 0-1.99.34-2.62 1.03-.63.69-.96 1.64-.99 2.86h6.93v-.28zM113.91 318.09h2.06v2.55c.84-1.94 2.27-2.91 4.3-2.91 2.87 0 4.3 1.74 4.3 5.23v8.01h-2.19v-7.89c0-2.29-.95-3.43-2.84-3.43-1.06 0-1.91.41-2.53 1.22-.62.82-.93 1.94-.93 3.36v6.73h-2.19v-12.87zM127.15 318.09h2.4v-3.38l2.19-.93v4.3h3.22v1.8h-3.22v7.14c0 .74.15 1.28.45 1.61.3.34.78.5 1.43.5.38 0 .83-.06 1.34-.18v2.01c-.57.15-1.2.23-1.91.23-1.31 0-2.22-.35-2.73-1.06-.52-.7-.77-1.72-.77-3.04v-7.22h-2.4v-1.78zM146.84 328.71c-1.4-1.8-2.1-4.11-2.1-6.93 0-2.89.72-5.2 2.16-6.93 1.44-1.74 3.49-2.6 6.16-2.6 2.15 0 3.83.57 5.05 1.73 1.22 1.15 1.95 2.71 2.19 4.69l-2.5.26c-.19-1.41-.7-2.53-1.53-3.35-.83-.82-1.95-1.24-3.34-1.24-1.77 0-3.15.67-4.14 2.02-.99 1.35-1.48 3.15-1.48 5.4 0 2.22.49 4.02 1.48 5.42.99 1.4 2.38 2.1 4.19 2.1 1.29 0 2.37-.4 3.25-1.2.88-.8 1.44-1.89 1.7-3.26l2.37.41c-.38 1.86-1.17 3.35-2.38 4.49-1.21 1.13-2.86 1.7-4.93 1.7-2.7-.01-4.75-.91-6.15-2.71zM164.32 330.25c-.79-.69-1.18-1.61-1.18-2.76 0-1.36.6-2.37 1.8-3.04.93-.46 2.37-.82 4.33-1.06l2.4-.28v-.21c0-1.19-.22-2.04-.67-2.55-.45-.52-1.17-.77-2.16-.77-.88 0-1.57.22-2.09.67s-.8 1.07-.85 1.88h-2.35c.09-1.32.6-2.38 1.56-3.17.95-.79 2.19-1.19 3.7-1.19 1.77 0 3.06.43 3.87 1.28.81.85 1.21 2.21 1.21 4.08v3.48c0 1.96.15 3.41.44 4.36h-2.29c-.1-.72-.17-1.5-.21-2.35-.29.83-.83 1.47-1.6 1.95-.77.47-1.68.71-2.73.71-1.33 0-2.39-.34-3.18-1.03zm6.35-1.89c.68-.75 1.02-1.75 1.02-3v-.64l-3.51.52c-.94.14-1.64.38-2.07.73-.44.35-.66.85-.66 1.48s.22 1.13.67 1.49c.45.36 1.07.54 1.86.54 1.11 0 2.01-.37 2.69-1.12zM182.23 318.68c.68-.6 1.48-.9 2.41-.9.21 0 .36.01.46.03v2.14h-.1c-1.22 0-2.17.33-2.84 1.01-.38.38-.67.85-.88 1.42-.21.57-.33 1.06-.36 1.47-.03.41-.05.95-.05 1.62v5.51h-2.19V318.1h2.04v2.94c.33-.97.84-1.76 1.51-2.36zM198.37 325.18h-9.15c.02 1.25.38 2.26 1.07 3.03.7.77 1.62 1.15 2.77 1.15 1.7 0 2.84-.82 3.43-2.45l1.8.8c-.91 2.39-2.71 3.58-5.39 3.58-1.86 0-3.3-.57-4.33-1.71-1.03-1.14-1.55-2.77-1.55-4.88 0-2.16.52-3.86 1.55-5.08 1.03-1.22 2.46-1.83 4.3-1.83 1.75 0 3.11.5 4.06 1.5s1.43 2.45 1.43 4.35v1.54zm-2.21-2.06c0-1.17-.29-2.06-.86-2.68-.57-.62-1.4-.93-2.46-.93-1.12 0-1.99.34-2.62 1.03-.63.69-.96 1.64-.99 2.86h6.93v-.28zM220.98 314.15c1.13.98 1.69 2.29 1.69 3.94s-.56 2.96-1.69 3.94-2.63 1.47-4.52 1.47h-4.05v7.47h-2.45v-18.3h6.5c1.88.01 3.39.5 4.52 1.48zm-1.95 6.38c.7-.61 1.06-1.42 1.06-2.44 0-1.01-.35-1.83-1.06-2.44-.7-.61-1.65-.91-2.84-.91h-3.79v6.7h3.79c1.19 0 2.14-.3 2.84-.91zM225.65 330.25c-.79-.69-1.18-1.61-1.18-2.76 0-1.36.6-2.37 1.8-3.04.93-.46 2.37-.82 4.33-1.06l2.4-.28v-.21c0-1.19-.22-2.04-.67-2.55-.45-.52-1.17-.77-2.16-.77-.88 0-1.57.22-2.09.67s-.8 1.07-.85 1.88h-2.35c.09-1.32.6-2.38 1.56-3.17.95-.79 2.19-1.19 3.7-1.19 1.77 0 3.06.43 3.87 1.28.81.85 1.21 2.21 1.21 4.08v3.48c0 1.96.15 3.41.44 4.36h-2.29c-.1-.72-.17-1.5-.21-2.35-.29.83-.83 1.47-1.6 1.95-.77.47-1.68.71-2.73.71-1.34 0-2.39-.34-3.18-1.03zm6.35-1.89c.68-.75 1.02-1.75 1.02-3v-.64l-3.51.52c-.94.14-1.64.38-2.07.73-.44.35-.66.85-.66 1.48s.22 1.13.67 1.49c.45.36 1.07.54 1.86.54 1.11 0 2.01-.37 2.69-1.12zM243.56 318.68c.68-.6 1.48-.9 2.41-.9.21 0 .36.01.46.03v2.14h-.1c-1.22 0-2.17.33-2.84 1.01-.38.38-.67.85-.88 1.42-.21.57-.33 1.06-.36 1.47-.03.41-.05.95-.05 1.62v5.51h-2.19V318.1h2.04v2.94c.33-.97.83-1.76 1.51-2.36zM248.49 318.09h2.4v-3.38l2.19-.93v4.3h3.22v1.8h-3.22v7.14c0 .74.15 1.28.45 1.61.3.34.78.5 1.43.5.38 0 .83-.06 1.34-.18v2.01c-.57.15-1.2.23-1.91.23-1.31 0-2.22-.35-2.73-1.06-.52-.7-.77-1.72-.77-3.04v-7.22h-2.4v-1.78zM260.03 318.09h2.06v2.55c.84-1.94 2.27-2.91 4.3-2.91 2.87 0 4.3 1.74 4.3 5.23v8.01h-2.19v-7.89c0-2.29-.94-3.43-2.84-3.43-1.06 0-1.91.41-2.53 1.22-.62.82-.93 1.94-.93 3.36v6.73h-2.19v-12.87zM285.64 325.18h-9.15c.02 1.25.38 2.26 1.07 3.03.7.77 1.62 1.15 2.77 1.15 1.7 0 2.84-.82 3.43-2.45l1.8.8c-.91 2.39-2.71 3.58-5.39 3.58-1.86 0-3.3-.57-4.33-1.71-1.03-1.14-1.55-2.77-1.55-4.88 0-2.16.52-3.86 1.55-5.08 1.03-1.22 2.46-1.83 4.3-1.83 1.75 0 3.11.5 4.06 1.5s1.43 2.45 1.43 4.35v1.54zm-2.22-2.06c0-1.17-.29-2.06-.86-2.68-.57-.62-1.4-.93-2.46-.93-1.12 0-1.99.34-2.62 1.03-.63.69-.96 1.64-.99 2.86h6.93v-.28zM293.3 318.68c.68-.6 1.48-.9 2.41-.9.21 0 .36.01.46.03v2.14h-.1c-1.22 0-2.17.33-2.84 1.01-.38.38-.67.85-.88 1.42-.21.57-.33 1.06-.36 1.47-.03.41-.05.95-.05 1.62v5.51h-2.19V318.1h2.04v2.94c.33-.97.83-1.76 1.51-2.36zM299.79 330.25c-.97-.69-1.57-1.67-1.79-2.94l2.22-.39c.16.81.52 1.43 1.11 1.88.58.45 1.35.67 2.29.67.84 0 1.5-.18 1.97-.55.47-.37.71-.84.71-1.4 0-.55-.15-.96-.46-1.24-.31-.28-.77-.46-1.39-.57l-2.53-.46c-2.29-.43-3.43-1.63-3.43-3.61 0-1.13.44-2.06 1.33-2.78.89-.72 2.08-1.08 3.57-1.08 1.44 0 2.62.31 3.54.93.92.62 1.44 1.47 1.56 2.55l-2.16.49c-.15-.67-.49-1.2-1-1.6-.52-.4-1.2-.59-2.04-.59-.83 0-1.47.17-1.95.52-.47.34-.71.83-.71 1.47 0 .98.66 1.59 1.98 1.83l2.5.46c2.23.43 3.35 1.6 3.35 3.51 0 1.18-.43 2.14-1.3 2.86-.87.72-2.08 1.08-3.62 1.08-1.53-.01-2.78-.35-3.75-1.04z\" class=\"st0\"/>\r\n  </g>\r\n</svg>";

var LogoTaglineBlue = "<svg id=\"logo_tagline\" data-name=\"Layer 3\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2in\" height=\"100%\" viewBox=\"0 0 360 360\" >\r\n  <defs/>\r\n  <style>\r\n    .st0{fill:#00adbc}\r\n\t.st1{fill:#00adbc}\r\n  </style>\r\n  <path d=\"M74.75 282.6c-3.65 0-7.06-.58-10.14-1.72-3.01-1.11-5.62-2.75-7.78-4.85-2.16-2.11-3.89-4.76-5.14-7.9-1.27-3.17-1.91-6.89-1.91-11.05 0-4.21.65-7.95 1.95-11.11 1.28-3.13 3.03-5.77 5.21-7.84 2.19-2.09 4.81-3.7 7.8-4.79 3.05-1.12 6.42-1.68 10.02-1.68 3.59 0 6.96.57 10.02 1.68 2.99 1.09 5.63 2.71 7.86 4.8 2.2 2.07 3.97 4.71 5.24 7.83 1.29 3.17 1.95 6.9 1.95 11.11 0 4.22-.64 7.99-1.92 11.19-1.25 3.14-2.98 5.79-5.15 7.86-2.19 2.08-4.82 3.69-7.83 4.78-3.1 1.12-6.52 1.69-10.18 1.69zm.09-45.27c-4.79 0-8.72 1.77-11.66 5.26-2.8 3.32-4.21 8.19-4.21 14.49 0 6.28 1.39 11.16 4.14 14.5 2.91 3.55 6.83 5.34 11.65 5.34 4.87 0 8.82-1.8 11.74-5.34 2.75-3.34 4.14-8.22 4.14-14.5 0-6.21-1.37-11.05-4.08-14.39-2.9-3.56-6.84-5.36-11.72-5.36zM117.95 282.51c-2.32 0-4.5-.17-6.45-.49-1.82-.3-3.36-.76-4.57-1.36-1.03-.51-1.83-1.12-2.36-1.81-.4-.53-.59-1.14-.59-1.92 0-.76.12-1.36.37-1.79 1.26.57 2.62 1.09 4.06 1.57 2.6.87 5.6 1.31 8.91 1.31 2.48 0 4.43-.41 5.97-1.24 2.11-1.15 3.33-3.07 3.33-5.26 0-2.03-.94-3.77-2.65-4.91-1.16-.77-2.73-1.31-4.94-1.71l-2.63-.53c-4.62-.9-8-2.26-10.07-4.04-1.76-1.51-2.61-3.71-2.61-6.75 0-1.65.34-3.09 1.03-4.38.7-1.31 1.66-2.38 2.95-3.27 1.4-.97 3.15-1.74 5.19-2.3 2.12-.57 4.52-.87 7.14-.87 2.01 0 3.93.15 5.68.45 1.64.28 3.06.69 4.21 1.22.93.43 1.65.96 2.14 1.57.34.42.49.9.49 1.54 0 .69-.09 1.28-.28 1.74-1.04-.35-2.18-.68-3.41-.97-1.22-.29-2.48-.53-3.75-.73-1.36-.21-2.61-.31-3.74-.31-2.47 0-4.42.31-5.95.95-2.41 1-3.79 2.96-3.79 5.37 0 1.83.86 3.43 2.41 4.51 1.01.71 2.47 1.25 4.7 1.73l2.76.62c6.37 1.46 9.31 3.29 10.66 4.57 1.72 1.63 2.56 3.73 2.56 6.42 0 3.48-1.19 5.99-3.74 7.92-2.79 2.08-7.17 3.15-13.03 3.15zM146.3 281.69c-1.11 0-2.11-.07-2.97-.22-.49-.08-.87-.23-1.14-.43-.14-.11-.34-.29-.53-.75-.12-.29-.32-.95-.32-2.29v-33.72c1.09-.18 2.21-.27 3.33-.27 1.11 0 2.11.07 2.97.22.49.08.88.23 1.14.43.08.06.32.24.54.76.11.27.31.94.31 2.29v33.72c-1.09.17-2.21.26-3.33.26zm-.81-48.6c-2.07 0-3.03-.73-3.57-1.29-.88-.9-1.29-1.95-1.29-3.3 0-1.36.41-2.41 1.29-3.31.54-.55 1.5-1.29 3.57-1.29s3.03.73 3.57 1.29c.88.9 1.29 1.95 1.29 3.3 0 1.36-.41 2.41-1.29 3.3-.54.57-1.5 1.3-3.57 1.3z\" class=\"st0\"/>\r\n  <g>\r\n    <path d=\"M162.94 280.3c-1.35-1.35-2.03-3.17-2.03-5.46v-47.52c.66-.12 1.61-.27 2.84-.45 1.23-.18 2.45-.27 3.65-.27 2.7 0 4.66.45 5.86 1.35 1.2.9 1.8 2.68 1.8 5.32v37.6h21.64c.36.6.7 1.38 1.04 2.34.33.96.5 2.01.5 3.16 0 1.98-.44 3.47-1.31 4.46-.87.99-2.06 1.49-3.56 1.49H168.4c-2.29.01-4.11-.67-5.46-2.02zM210.96 282.78c-2.83 0-4.8-.48-5.91-1.44-1.11-.96-1.67-2.71-1.67-5.23v-48.78c.66-.12 1.61-.27 2.84-.45 1.23-.18 2.48-.27 3.74-.27 2.71 0 4.64.45 5.82 1.35 1.17.9 1.76 2.68 1.76 5.32v48.78c-.66.18-1.59.35-2.8.5-1.2.14-2.46.22-3.78.22zM264.07 227.5c.36.6.69 1.38.99 2.34.3.96.45 2.01.45 3.16 0 1.98-.44 3.46-1.31 4.42-.87.96-2.09 1.44-3.65 1.44h-20.02v11.81H261c.36.66.71 1.44 1.04 2.34.33.9.5 1.95.5 3.16 0 1.98-.45 3.44-1.35 4.37-.9.93-2.1 1.4-3.61 1.4h-16.86v20.11c-.66.18-1.59.35-2.8.5-1.2.15-2.47.23-3.79.23-2.83 0-4.8-.48-5.91-1.44-1.11-.96-1.67-2.71-1.67-5.23v-41.12c0-2.28.68-4.1 2.03-5.46 1.35-1.35 3.17-2.03 5.46-2.03h30.03zM272.59 280.3c-1.35-1.35-2.03-3.17-2.03-5.46v-39.86c0-2.28.68-4.1 2.03-5.46 1.35-1.35 3.17-2.03 5.46-2.03h29.85c.36.6.69 1.35.99 2.25.3.9.45 1.93.45 3.07 0 1.98-.44 3.46-1.31 4.42-.87.96-2.09 1.44-3.65 1.44h-20.02v10.1h20.92c.36.6.69 1.35.99 2.25.3.9.45 1.93.45 3.07 0 1.98-.42 3.44-1.26 4.37-.84.93-2.04 1.4-3.61 1.4h-17.49v11.27h23.9c.36.6.69 1.38.99 2.35.3.96.45 2.01.45 3.16 0 1.98-.44 3.43-1.31 4.33-.87.9-2.06 1.35-3.56 1.35h-26.78c-2.29.01-4.11-.67-5.46-2.02z\" class=\"st1\"/>\r\n  </g>\r\n  <g>\r\n    <path d=\"M145.95 100.72c-.8-3.7 1.43-5.36 4.89-3.84 5.48 2.41 8.57 7.16 9.1 12.76.77 7.88-1.64 15.87-.03 23.8.66 2.96 3.23 4.48 6.12 4.03 4.72-.74 8.45-3.47 11.25-6.96 5.08-6.35 9.94-12.95 14.26-19.89 5.28-8.5 7.14-18.55 8.86-28.56.64-3.73 1.09-7.53 2.02-11.17.41-1.6 1.52-3.24 2.81-4.19 2.23-1.65 4.25-.78 4.77 2.16 2.51 17.16.57 37.66-5.98 52.98-2.45 5.63-5.99 10.75-9.44 15.8-.37.52-.74 1.03-1.1 1.54 10.81-9.26 20.89-24.58 25.55-49.93V28.06h-41.39v.04c-12.56.72-22.52 11.13-22.52 23.87v37.28H99.49v41.39h.04c.72 12.56 11.13 22.52 23.87 22.52h14.23c1.98-11.87 4.21-22.45 5.75-27.24 2.62-8.13 4.52-16.23 2.57-25.2zm44.76-28.54c1.05-1.8 2.83-1.29 3.84.71 3.53 6.97 3.16 13.75.69 20.46-.87 2.37-1.6 4.81-2.56 7.71-1.54-8.17-3.49-14.99-3.79-22.87.01-2.07.81-4.26 1.82-6.01zm-3.69 16.24c1.17 3.05 3.33 11.22 3.69 12.1 1.43 3.5-.66 5.85-2 8.4-.91 1.74-3.64 4.96-3.87 4.96-1.2-7.27-2.49-14.53-3.5-21.82-.41-3.16 3.36-9.15 5.68-3.64zM176 102.16c2.69-4.86 6.46 7.23 7.35 10.31.64 2.21.48 3.82-1.07 5.95-1.14 1.56-2.44 3.03-3.91 4.92-1.45-6.33-5.06-16.32-2.37-21.18z\" class=\"st0\"/>\r\n    <path d=\"M276.01 112.29c-.45-12.81-10.98-23.05-23.89-23.05h-33.08c-4.66 25.35-14.74 40.67-25.55 49.93-2.95 4.15-5.63 8.12-7.93 12.03-9.3 15.78-12.49 30.65-2.77 52.79.17.28.22.59.43.59h12.77v-.02c12.81-.45 23.05-10.98 23.05-23.89v-19.04-7.33-1.15h57v-23.91-16.09-.86h-.03z\" class=\"st1\"/>\r\n  </g>\r\n  <g>\r\n    <path d=\"M63.89 314.15c1.13.98 1.69 2.29 1.69 3.94s-.56 2.96-1.69 3.94-2.63 1.47-4.52 1.47h-4.05v7.47h-2.45v-18.3h6.5c1.88.01 3.39.5 4.52 1.48zm-1.95 6.38c.7-.61 1.06-1.42 1.06-2.44 0-1.01-.35-1.83-1.06-2.44-.7-.61-1.65-.91-2.84-.91h-3.79v6.7h3.79c1.19 0 2.14-.3 2.84-.91zM68.56 330.25c-.79-.69-1.18-1.61-1.18-2.76 0-1.36.6-2.37 1.8-3.04.93-.46 2.37-.82 4.33-1.06l2.4-.28v-.21c0-1.19-.22-2.04-.67-2.55-.45-.52-1.17-.77-2.16-.77-.88 0-1.57.22-2.09.67s-.8 1.07-.85 1.88h-2.35c.09-1.32.6-2.38 1.56-3.17.95-.79 2.19-1.19 3.7-1.19 1.77 0 3.06.43 3.87 1.28.81.85 1.21 2.21 1.21 4.08v3.48c0 1.96.15 3.41.44 4.36h-2.29c-.1-.72-.17-1.5-.21-2.35-.29.83-.83 1.47-1.6 1.95-.77.47-1.68.71-2.73.71-1.34 0-2.39-.34-3.18-1.03zm6.35-1.89c.68-.75 1.02-1.75 1.02-3v-.64l-3.51.52c-.94.14-1.64.38-2.07.73-.44.35-.66.85-.66 1.48s.22 1.13.67 1.49c.45.36 1.07.54 1.86.54 1.11 0 2.01-.37 2.69-1.12zM80.74 318.09h2.4v-3.38l2.19-.93v4.3h3.22v1.8h-3.22v7.14c0 .74.15 1.28.45 1.61.3.34.78.5 1.43.5.38 0 .83-.06 1.34-.18v2.01c-.57.15-1.2.23-1.91.23-1.31 0-2.22-.35-2.73-1.06-.52-.7-.77-1.72-.77-3.04v-7.22h-2.4v-1.78zM92.12 312.94h2.5v2.76h-2.5v-2.76zm.16 5.15h2.19v12.88h-2.19v-12.88zM109.8 325.18h-9.15c.02 1.25.38 2.26 1.07 3.03.7.77 1.62 1.15 2.77 1.15 1.7 0 2.84-.82 3.43-2.45l1.8.8c-.91 2.39-2.71 3.58-5.39 3.58-1.86 0-3.3-.57-4.33-1.71-1.03-1.14-1.55-2.77-1.55-4.88 0-2.16.52-3.86 1.55-5.08 1.03-1.22 2.46-1.83 4.3-1.83 1.75 0 3.11.5 4.06 1.5s1.43 2.45 1.43 4.35v1.54zm-2.22-2.06c0-1.17-.29-2.06-.86-2.68-.57-.62-1.4-.93-2.46-.93-1.12 0-1.99.34-2.62 1.03-.63.69-.96 1.64-.99 2.86h6.93v-.28zM113.91 318.09h2.06v2.55c.84-1.94 2.27-2.91 4.3-2.91 2.87 0 4.3 1.74 4.3 5.23v8.01h-2.19v-7.89c0-2.29-.95-3.43-2.84-3.43-1.06 0-1.91.41-2.53 1.22-.62.82-.93 1.94-.93 3.36v6.73h-2.19v-12.87zM127.15 318.09h2.4v-3.38l2.19-.93v4.3h3.22v1.8h-3.22v7.14c0 .74.15 1.28.45 1.61.3.34.78.5 1.43.5.38 0 .83-.06 1.34-.18v2.01c-.57.15-1.2.23-1.91.23-1.31 0-2.22-.35-2.73-1.06-.52-.7-.77-1.72-.77-3.04v-7.22h-2.4v-1.78zM146.84 328.71c-1.4-1.8-2.1-4.11-2.1-6.93 0-2.89.72-5.2 2.16-6.93 1.44-1.74 3.49-2.6 6.16-2.6 2.15 0 3.83.57 5.05 1.73 1.22 1.15 1.95 2.71 2.19 4.69l-2.5.26c-.19-1.41-.7-2.53-1.53-3.35-.83-.82-1.95-1.24-3.34-1.24-1.77 0-3.15.67-4.14 2.02-.99 1.35-1.48 3.15-1.48 5.4 0 2.22.49 4.02 1.48 5.42.99 1.4 2.38 2.1 4.19 2.1 1.29 0 2.37-.4 3.25-1.2.88-.8 1.44-1.89 1.7-3.26l2.37.41c-.38 1.86-1.17 3.35-2.38 4.49-1.21 1.13-2.86 1.7-4.93 1.7-2.7-.01-4.75-.91-6.15-2.71zM164.32 330.25c-.79-.69-1.18-1.61-1.18-2.76 0-1.36.6-2.37 1.8-3.04.93-.46 2.37-.82 4.33-1.06l2.4-.28v-.21c0-1.19-.22-2.04-.67-2.55-.45-.52-1.17-.77-2.16-.77-.88 0-1.57.22-2.09.67s-.8 1.07-.85 1.88h-2.35c.09-1.32.6-2.38 1.56-3.17.95-.79 2.19-1.19 3.7-1.19 1.77 0 3.06.43 3.87 1.28.81.85 1.21 2.21 1.21 4.08v3.48c0 1.96.15 3.41.44 4.36h-2.29c-.1-.72-.17-1.5-.21-2.35-.29.83-.83 1.47-1.6 1.95-.77.47-1.68.71-2.73.71-1.33 0-2.39-.34-3.18-1.03zm6.35-1.89c.68-.75 1.02-1.75 1.02-3v-.64l-3.51.52c-.94.14-1.64.38-2.07.73-.44.35-.66.85-.66 1.48s.22 1.13.67 1.49c.45.36 1.07.54 1.86.54 1.11 0 2.01-.37 2.69-1.12zM182.23 318.68c.68-.6 1.48-.9 2.41-.9.21 0 .36.01.46.03v2.14h-.1c-1.22 0-2.17.33-2.84 1.01-.38.38-.67.85-.88 1.42-.21.57-.33 1.06-.36 1.47-.03.41-.05.95-.05 1.62v5.51h-2.19V318.1h2.04v2.94c.33-.97.84-1.76 1.51-2.36zM198.37 325.18h-9.15c.02 1.25.38 2.26 1.07 3.03.7.77 1.62 1.15 2.77 1.15 1.7 0 2.84-.82 3.43-2.45l1.8.8c-.91 2.39-2.71 3.58-5.39 3.58-1.86 0-3.3-.57-4.33-1.71-1.03-1.14-1.55-2.77-1.55-4.88 0-2.16.52-3.86 1.55-5.08 1.03-1.22 2.46-1.83 4.3-1.83 1.75 0 3.11.5 4.06 1.5s1.43 2.45 1.43 4.35v1.54zm-2.21-2.06c0-1.17-.29-2.06-.86-2.68-.57-.62-1.4-.93-2.46-.93-1.12 0-1.99.34-2.62 1.03-.63.69-.96 1.64-.99 2.86h6.93v-.28zM220.98 314.15c1.13.98 1.69 2.29 1.69 3.94s-.56 2.96-1.69 3.94-2.63 1.47-4.52 1.47h-4.05v7.47h-2.45v-18.3h6.5c1.88.01 3.39.5 4.52 1.48zm-1.95 6.38c.7-.61 1.06-1.42 1.06-2.44 0-1.01-.35-1.83-1.06-2.44-.7-.61-1.65-.91-2.84-.91h-3.79v6.7h3.79c1.19 0 2.14-.3 2.84-.91zM225.65 330.25c-.79-.69-1.18-1.61-1.18-2.76 0-1.36.6-2.37 1.8-3.04.93-.46 2.37-.82 4.33-1.06l2.4-.28v-.21c0-1.19-.22-2.04-.67-2.55-.45-.52-1.17-.77-2.16-.77-.88 0-1.57.22-2.09.67s-.8 1.07-.85 1.88h-2.35c.09-1.32.6-2.38 1.56-3.17.95-.79 2.19-1.19 3.7-1.19 1.77 0 3.06.43 3.87 1.28.81.85 1.21 2.21 1.21 4.08v3.48c0 1.96.15 3.41.44 4.36h-2.29c-.1-.72-.17-1.5-.21-2.35-.29.83-.83 1.47-1.6 1.95-.77.47-1.68.71-2.73.71-1.34 0-2.39-.34-3.18-1.03zm6.35-1.89c.68-.75 1.02-1.75 1.02-3v-.64l-3.51.52c-.94.14-1.64.38-2.07.73-.44.35-.66.85-.66 1.48s.22 1.13.67 1.49c.45.36 1.07.54 1.86.54 1.11 0 2.01-.37 2.69-1.12zM243.56 318.68c.68-.6 1.48-.9 2.41-.9.21 0 .36.01.46.03v2.14h-.1c-1.22 0-2.17.33-2.84 1.01-.38.38-.67.85-.88 1.42-.21.57-.33 1.06-.36 1.47-.03.41-.05.95-.05 1.62v5.51h-2.19V318.1h2.04v2.94c.33-.97.83-1.76 1.51-2.36zM248.49 318.09h2.4v-3.38l2.19-.93v4.3h3.22v1.8h-3.22v7.14c0 .74.15 1.28.45 1.61.3.34.78.5 1.43.5.38 0 .83-.06 1.34-.18v2.01c-.57.15-1.2.23-1.91.23-1.31 0-2.22-.35-2.73-1.06-.52-.7-.77-1.72-.77-3.04v-7.22h-2.4v-1.78zM260.03 318.09h2.06v2.55c.84-1.94 2.27-2.91 4.3-2.91 2.87 0 4.3 1.74 4.3 5.23v8.01h-2.19v-7.89c0-2.29-.94-3.43-2.84-3.43-1.06 0-1.91.41-2.53 1.22-.62.82-.93 1.94-.93 3.36v6.73h-2.19v-12.87zM285.64 325.18h-9.15c.02 1.25.38 2.26 1.07 3.03.7.77 1.62 1.15 2.77 1.15 1.7 0 2.84-.82 3.43-2.45l1.8.8c-.91 2.39-2.71 3.58-5.39 3.58-1.86 0-3.3-.57-4.33-1.71-1.03-1.14-1.55-2.77-1.55-4.88 0-2.16.52-3.86 1.55-5.08 1.03-1.22 2.46-1.83 4.3-1.83 1.75 0 3.11.5 4.06 1.5s1.43 2.45 1.43 4.35v1.54zm-2.22-2.06c0-1.17-.29-2.06-.86-2.68-.57-.62-1.4-.93-2.46-.93-1.12 0-1.99.34-2.62 1.03-.63.69-.96 1.64-.99 2.86h6.93v-.28zM293.3 318.68c.68-.6 1.48-.9 2.41-.9.21 0 .36.01.46.03v2.14h-.1c-1.22 0-2.17.33-2.84 1.01-.38.38-.67.85-.88 1.42-.21.57-.33 1.06-.36 1.47-.03.41-.05.95-.05 1.62v5.51h-2.19V318.1h2.04v2.94c.33-.97.83-1.76 1.51-2.36zM299.79 330.25c-.97-.69-1.57-1.67-1.79-2.94l2.22-.39c.16.81.52 1.43 1.11 1.88.58.45 1.35.67 2.29.67.84 0 1.5-.18 1.97-.55.47-.37.71-.84.71-1.4 0-.55-.15-.96-.46-1.24-.31-.28-.77-.46-1.39-.57l-2.53-.46c-2.29-.43-3.43-1.63-3.43-3.61 0-1.13.44-2.06 1.33-2.78.89-.72 2.08-1.08 3.57-1.08 1.44 0 2.62.31 3.54.93.92.62 1.44 1.47 1.56 2.55l-2.16.49c-.15-.67-.49-1.2-1-1.6-.52-.4-1.2-.59-2.04-.59-.83 0-1.47.17-1.95.52-.47.34-.71.83-.71 1.47 0 .98.66 1.59 1.98 1.83l2.5.46c2.23.43 3.35 1.6 3.35 3.51 0 1.18-.43 2.14-1.3 2.86-.87.72-2.08 1.08-3.62 1.08-1.53-.01-2.78-.35-3.75-1.04z\" class=\"st0\"/>\r\n  </g>\r\n</svg>";

var LogoTaglineOrange = "<svg id=\"logo_tagline\" data-name=\"Layer 3\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2in\" height=\"100%\" viewBox=\"0 0 360 360\" >\r\n  <defs/>\r\n  <style>\r\n    .st0{fill:#ffa500}\r\n\t.st1{fill:#ffa500}\r\n  </style>\r\n  <path d=\"M74.75 282.6c-3.65 0-7.06-.58-10.14-1.72-3.01-1.11-5.62-2.75-7.78-4.85-2.16-2.11-3.89-4.76-5.14-7.9-1.27-3.17-1.91-6.89-1.91-11.05 0-4.21.65-7.95 1.95-11.11 1.28-3.13 3.03-5.77 5.21-7.84 2.19-2.09 4.81-3.7 7.8-4.79 3.05-1.12 6.42-1.68 10.02-1.68 3.59 0 6.96.57 10.02 1.68 2.99 1.09 5.63 2.71 7.86 4.8 2.2 2.07 3.97 4.71 5.24 7.83 1.29 3.17 1.95 6.9 1.95 11.11 0 4.22-.64 7.99-1.92 11.19-1.25 3.14-2.98 5.79-5.15 7.86-2.19 2.08-4.82 3.69-7.83 4.78-3.1 1.12-6.52 1.69-10.18 1.69zm.09-45.27c-4.79 0-8.72 1.77-11.66 5.26-2.8 3.32-4.21 8.19-4.21 14.49 0 6.28 1.39 11.16 4.14 14.5 2.91 3.55 6.83 5.34 11.65 5.34 4.87 0 8.82-1.8 11.74-5.34 2.75-3.34 4.14-8.22 4.14-14.5 0-6.21-1.37-11.05-4.08-14.39-2.9-3.56-6.84-5.36-11.72-5.36zM117.95 282.51c-2.32 0-4.5-.17-6.45-.49-1.82-.3-3.36-.76-4.57-1.36-1.03-.51-1.83-1.12-2.36-1.81-.4-.53-.59-1.14-.59-1.92 0-.76.12-1.36.37-1.79 1.26.57 2.62 1.09 4.06 1.57 2.6.87 5.6 1.31 8.91 1.31 2.48 0 4.43-.41 5.97-1.24 2.11-1.15 3.33-3.07 3.33-5.26 0-2.03-.94-3.77-2.65-4.91-1.16-.77-2.73-1.31-4.94-1.71l-2.63-.53c-4.62-.9-8-2.26-10.07-4.04-1.76-1.51-2.61-3.71-2.61-6.75 0-1.65.34-3.09 1.03-4.38.7-1.31 1.66-2.38 2.95-3.27 1.4-.97 3.15-1.74 5.19-2.3 2.12-.57 4.52-.87 7.14-.87 2.01 0 3.93.15 5.68.45 1.64.28 3.06.69 4.21 1.22.93.43 1.65.96 2.14 1.57.34.42.49.9.49 1.54 0 .69-.09 1.28-.28 1.74-1.04-.35-2.18-.68-3.41-.97-1.22-.29-2.48-.53-3.75-.73-1.36-.21-2.61-.31-3.74-.31-2.47 0-4.42.31-5.95.95-2.41 1-3.79 2.96-3.79 5.37 0 1.83.86 3.43 2.41 4.51 1.01.71 2.47 1.25 4.7 1.73l2.76.62c6.37 1.46 9.31 3.29 10.66 4.57 1.72 1.63 2.56 3.73 2.56 6.42 0 3.48-1.19 5.99-3.74 7.92-2.79 2.08-7.17 3.15-13.03 3.15zM146.3 281.69c-1.11 0-2.11-.07-2.97-.22-.49-.08-.87-.23-1.14-.43-.14-.11-.34-.29-.53-.75-.12-.29-.32-.95-.32-2.29v-33.72c1.09-.18 2.21-.27 3.33-.27 1.11 0 2.11.07 2.97.22.49.08.88.23 1.14.43.08.06.32.24.54.76.11.27.31.94.31 2.29v33.72c-1.09.17-2.21.26-3.33.26zm-.81-48.6c-2.07 0-3.03-.73-3.57-1.29-.88-.9-1.29-1.95-1.29-3.3 0-1.36.41-2.41 1.29-3.31.54-.55 1.5-1.29 3.57-1.29s3.03.73 3.57 1.29c.88.9 1.29 1.95 1.29 3.3 0 1.36-.41 2.41-1.29 3.3-.54.57-1.5 1.3-3.57 1.3z\" class=\"st0\"/>\r\n  <g>\r\n    <path d=\"M162.94 280.3c-1.35-1.35-2.03-3.17-2.03-5.46v-47.52c.66-.12 1.61-.27 2.84-.45 1.23-.18 2.45-.27 3.65-.27 2.7 0 4.66.45 5.86 1.35 1.2.9 1.8 2.68 1.8 5.32v37.6h21.64c.36.6.7 1.38 1.04 2.34.33.96.5 2.01.5 3.16 0 1.98-.44 3.47-1.31 4.46-.87.99-2.06 1.49-3.56 1.49H168.4c-2.29.01-4.11-.67-5.46-2.02zM210.96 282.78c-2.83 0-4.8-.48-5.91-1.44-1.11-.96-1.67-2.71-1.67-5.23v-48.78c.66-.12 1.61-.27 2.84-.45 1.23-.18 2.48-.27 3.74-.27 2.71 0 4.64.45 5.82 1.35 1.17.9 1.76 2.68 1.76 5.32v48.78c-.66.18-1.59.35-2.8.5-1.2.14-2.46.22-3.78.22zM264.07 227.5c.36.6.69 1.38.99 2.34.3.96.45 2.01.45 3.16 0 1.98-.44 3.46-1.31 4.42-.87.96-2.09 1.44-3.65 1.44h-20.02v11.81H261c.36.66.71 1.44 1.04 2.34.33.9.5 1.95.5 3.16 0 1.98-.45 3.44-1.35 4.37-.9.93-2.1 1.4-3.61 1.4h-16.86v20.11c-.66.18-1.59.35-2.8.5-1.2.15-2.47.23-3.79.23-2.83 0-4.8-.48-5.91-1.44-1.11-.96-1.67-2.71-1.67-5.23v-41.12c0-2.28.68-4.1 2.03-5.46 1.35-1.35 3.17-2.03 5.46-2.03h30.03zM272.59 280.3c-1.35-1.35-2.03-3.17-2.03-5.46v-39.86c0-2.28.68-4.1 2.03-5.46 1.35-1.35 3.17-2.03 5.46-2.03h29.85c.36.6.69 1.35.99 2.25.3.9.45 1.93.45 3.07 0 1.98-.44 3.46-1.31 4.42-.87.96-2.09 1.44-3.65 1.44h-20.02v10.1h20.92c.36.6.69 1.35.99 2.25.3.9.45 1.93.45 3.07 0 1.98-.42 3.44-1.26 4.37-.84.93-2.04 1.4-3.61 1.4h-17.49v11.27h23.9c.36.6.69 1.38.99 2.35.3.96.45 2.01.45 3.16 0 1.98-.44 3.43-1.31 4.33-.87.9-2.06 1.35-3.56 1.35h-26.78c-2.29.01-4.11-.67-5.46-2.02z\" class=\"st1\"/>\r\n  </g>\r\n  <g>\r\n    <path d=\"M145.95 100.72c-.8-3.7 1.43-5.36 4.89-3.84 5.48 2.41 8.57 7.16 9.1 12.76.77 7.88-1.64 15.87-.03 23.8.66 2.96 3.23 4.48 6.12 4.03 4.72-.74 8.45-3.47 11.25-6.96 5.08-6.35 9.94-12.95 14.26-19.89 5.28-8.5 7.14-18.55 8.86-28.56.64-3.73 1.09-7.53 2.02-11.17.41-1.6 1.52-3.24 2.81-4.19 2.23-1.65 4.25-.78 4.77 2.16 2.51 17.16.57 37.66-5.98 52.98-2.45 5.63-5.99 10.75-9.44 15.8-.37.52-.74 1.03-1.1 1.54 10.81-9.26 20.89-24.58 25.55-49.93V28.06h-41.39v.04c-12.56.72-22.52 11.13-22.52 23.87v37.28H99.49v41.39h.04c.72 12.56 11.13 22.52 23.87 22.52h14.23c1.98-11.87 4.21-22.45 5.75-27.24 2.62-8.13 4.52-16.23 2.57-25.2zm44.76-28.54c1.05-1.8 2.83-1.29 3.84.71 3.53 6.97 3.16 13.75.69 20.46-.87 2.37-1.6 4.81-2.56 7.71-1.54-8.17-3.49-14.99-3.79-22.87.01-2.07.81-4.26 1.82-6.01zm-3.69 16.24c1.17 3.05 3.33 11.22 3.69 12.1 1.43 3.5-.66 5.85-2 8.4-.91 1.74-3.64 4.96-3.87 4.96-1.2-7.27-2.49-14.53-3.5-21.82-.41-3.16 3.36-9.15 5.68-3.64zM176 102.16c2.69-4.86 6.46 7.23 7.35 10.31.64 2.21.48 3.82-1.07 5.95-1.14 1.56-2.44 3.03-3.91 4.92-1.45-6.33-5.06-16.32-2.37-21.18z\" class=\"st0\"/>\r\n    <path d=\"M276.01 112.29c-.45-12.81-10.98-23.05-23.89-23.05h-33.08c-4.66 25.35-14.74 40.67-25.55 49.93-2.95 4.15-5.63 8.12-7.93 12.03-9.3 15.78-12.49 30.65-2.77 52.79.17.28.22.59.43.59h12.77v-.02c12.81-.45 23.05-10.98 23.05-23.89v-19.04-7.33-1.15h57v-23.91-16.09-.86h-.03z\" class=\"st1\"/>\r\n  </g>\r\n  <g>\r\n    <path d=\"M63.89 314.15c1.13.98 1.69 2.29 1.69 3.94s-.56 2.96-1.69 3.94-2.63 1.47-4.52 1.47h-4.05v7.47h-2.45v-18.3h6.5c1.88.01 3.39.5 4.52 1.48zm-1.95 6.38c.7-.61 1.06-1.42 1.06-2.44 0-1.01-.35-1.83-1.06-2.44-.7-.61-1.65-.91-2.84-.91h-3.79v6.7h3.79c1.19 0 2.14-.3 2.84-.91zM68.56 330.25c-.79-.69-1.18-1.61-1.18-2.76 0-1.36.6-2.37 1.8-3.04.93-.46 2.37-.82 4.33-1.06l2.4-.28v-.21c0-1.19-.22-2.04-.67-2.55-.45-.52-1.17-.77-2.16-.77-.88 0-1.57.22-2.09.67s-.8 1.07-.85 1.88h-2.35c.09-1.32.6-2.38 1.56-3.17.95-.79 2.19-1.19 3.7-1.19 1.77 0 3.06.43 3.87 1.28.81.85 1.21 2.21 1.21 4.08v3.48c0 1.96.15 3.41.44 4.36h-2.29c-.1-.72-.17-1.5-.21-2.35-.29.83-.83 1.47-1.6 1.95-.77.47-1.68.71-2.73.71-1.34 0-2.39-.34-3.18-1.03zm6.35-1.89c.68-.75 1.02-1.75 1.02-3v-.64l-3.51.52c-.94.14-1.64.38-2.07.73-.44.35-.66.85-.66 1.48s.22 1.13.67 1.49c.45.36 1.07.54 1.86.54 1.11 0 2.01-.37 2.69-1.12zM80.74 318.09h2.4v-3.38l2.19-.93v4.3h3.22v1.8h-3.22v7.14c0 .74.15 1.28.45 1.61.3.34.78.5 1.43.5.38 0 .83-.06 1.34-.18v2.01c-.57.15-1.2.23-1.91.23-1.31 0-2.22-.35-2.73-1.06-.52-.7-.77-1.72-.77-3.04v-7.22h-2.4v-1.78zM92.12 312.94h2.5v2.76h-2.5v-2.76zm.16 5.15h2.19v12.88h-2.19v-12.88zM109.8 325.18h-9.15c.02 1.25.38 2.26 1.07 3.03.7.77 1.62 1.15 2.77 1.15 1.7 0 2.84-.82 3.43-2.45l1.8.8c-.91 2.39-2.71 3.58-5.39 3.58-1.86 0-3.3-.57-4.33-1.71-1.03-1.14-1.55-2.77-1.55-4.88 0-2.16.52-3.86 1.55-5.08 1.03-1.22 2.46-1.83 4.3-1.83 1.75 0 3.11.5 4.06 1.5s1.43 2.45 1.43 4.35v1.54zm-2.22-2.06c0-1.17-.29-2.06-.86-2.68-.57-.62-1.4-.93-2.46-.93-1.12 0-1.99.34-2.62 1.03-.63.69-.96 1.64-.99 2.86h6.93v-.28zM113.91 318.09h2.06v2.55c.84-1.94 2.27-2.91 4.3-2.91 2.87 0 4.3 1.74 4.3 5.23v8.01h-2.19v-7.89c0-2.29-.95-3.43-2.84-3.43-1.06 0-1.91.41-2.53 1.22-.62.82-.93 1.94-.93 3.36v6.73h-2.19v-12.87zM127.15 318.09h2.4v-3.38l2.19-.93v4.3h3.22v1.8h-3.22v7.14c0 .74.15 1.28.45 1.61.3.34.78.5 1.43.5.38 0 .83-.06 1.34-.18v2.01c-.57.15-1.2.23-1.91.23-1.31 0-2.22-.35-2.73-1.06-.52-.7-.77-1.72-.77-3.04v-7.22h-2.4v-1.78zM146.84 328.71c-1.4-1.8-2.1-4.11-2.1-6.93 0-2.89.72-5.2 2.16-6.93 1.44-1.74 3.49-2.6 6.16-2.6 2.15 0 3.83.57 5.05 1.73 1.22 1.15 1.95 2.71 2.19 4.69l-2.5.26c-.19-1.41-.7-2.53-1.53-3.35-.83-.82-1.95-1.24-3.34-1.24-1.77 0-3.15.67-4.14 2.02-.99 1.35-1.48 3.15-1.48 5.4 0 2.22.49 4.02 1.48 5.42.99 1.4 2.38 2.1 4.19 2.1 1.29 0 2.37-.4 3.25-1.2.88-.8 1.44-1.89 1.7-3.26l2.37.41c-.38 1.86-1.17 3.35-2.38 4.49-1.21 1.13-2.86 1.7-4.93 1.7-2.7-.01-4.75-.91-6.15-2.71zM164.32 330.25c-.79-.69-1.18-1.61-1.18-2.76 0-1.36.6-2.37 1.8-3.04.93-.46 2.37-.82 4.33-1.06l2.4-.28v-.21c0-1.19-.22-2.04-.67-2.55-.45-.52-1.17-.77-2.16-.77-.88 0-1.57.22-2.09.67s-.8 1.07-.85 1.88h-2.35c.09-1.32.6-2.38 1.56-3.17.95-.79 2.19-1.19 3.7-1.19 1.77 0 3.06.43 3.87 1.28.81.85 1.21 2.21 1.21 4.08v3.48c0 1.96.15 3.41.44 4.36h-2.29c-.1-.72-.17-1.5-.21-2.35-.29.83-.83 1.47-1.6 1.95-.77.47-1.68.71-2.73.71-1.33 0-2.39-.34-3.18-1.03zm6.35-1.89c.68-.75 1.02-1.75 1.02-3v-.64l-3.51.52c-.94.14-1.64.38-2.07.73-.44.35-.66.85-.66 1.48s.22 1.13.67 1.49c.45.36 1.07.54 1.86.54 1.11 0 2.01-.37 2.69-1.12zM182.23 318.68c.68-.6 1.48-.9 2.41-.9.21 0 .36.01.46.03v2.14h-.1c-1.22 0-2.17.33-2.84 1.01-.38.38-.67.85-.88 1.42-.21.57-.33 1.06-.36 1.47-.03.41-.05.95-.05 1.62v5.51h-2.19V318.1h2.04v2.94c.33-.97.84-1.76 1.51-2.36zM198.37 325.18h-9.15c.02 1.25.38 2.26 1.07 3.03.7.77 1.62 1.15 2.77 1.15 1.7 0 2.84-.82 3.43-2.45l1.8.8c-.91 2.39-2.71 3.58-5.39 3.58-1.86 0-3.3-.57-4.33-1.71-1.03-1.14-1.55-2.77-1.55-4.88 0-2.16.52-3.86 1.55-5.08 1.03-1.22 2.46-1.83 4.3-1.83 1.75 0 3.11.5 4.06 1.5s1.43 2.45 1.43 4.35v1.54zm-2.21-2.06c0-1.17-.29-2.06-.86-2.68-.57-.62-1.4-.93-2.46-.93-1.12 0-1.99.34-2.62 1.03-.63.69-.96 1.64-.99 2.86h6.93v-.28zM220.98 314.15c1.13.98 1.69 2.29 1.69 3.94s-.56 2.96-1.69 3.94-2.63 1.47-4.52 1.47h-4.05v7.47h-2.45v-18.3h6.5c1.88.01 3.39.5 4.52 1.48zm-1.95 6.38c.7-.61 1.06-1.42 1.06-2.44 0-1.01-.35-1.83-1.06-2.44-.7-.61-1.65-.91-2.84-.91h-3.79v6.7h3.79c1.19 0 2.14-.3 2.84-.91zM225.65 330.25c-.79-.69-1.18-1.61-1.18-2.76 0-1.36.6-2.37 1.8-3.04.93-.46 2.37-.82 4.33-1.06l2.4-.28v-.21c0-1.19-.22-2.04-.67-2.55-.45-.52-1.17-.77-2.16-.77-.88 0-1.57.22-2.09.67s-.8 1.07-.85 1.88h-2.35c.09-1.32.6-2.38 1.56-3.17.95-.79 2.19-1.19 3.7-1.19 1.77 0 3.06.43 3.87 1.28.81.85 1.21 2.21 1.21 4.08v3.48c0 1.96.15 3.41.44 4.36h-2.29c-.1-.72-.17-1.5-.21-2.35-.29.83-.83 1.47-1.6 1.95-.77.47-1.68.71-2.73.71-1.34 0-2.39-.34-3.18-1.03zm6.35-1.89c.68-.75 1.02-1.75 1.02-3v-.64l-3.51.52c-.94.14-1.64.38-2.07.73-.44.35-.66.85-.66 1.48s.22 1.13.67 1.49c.45.36 1.07.54 1.86.54 1.11 0 2.01-.37 2.69-1.12zM243.56 318.68c.68-.6 1.48-.9 2.41-.9.21 0 .36.01.46.03v2.14h-.1c-1.22 0-2.17.33-2.84 1.01-.38.38-.67.85-.88 1.42-.21.57-.33 1.06-.36 1.47-.03.41-.05.95-.05 1.62v5.51h-2.19V318.1h2.04v2.94c.33-.97.83-1.76 1.51-2.36zM248.49 318.09h2.4v-3.38l2.19-.93v4.3h3.22v1.8h-3.22v7.14c0 .74.15 1.28.45 1.61.3.34.78.5 1.43.5.38 0 .83-.06 1.34-.18v2.01c-.57.15-1.2.23-1.91.23-1.31 0-2.22-.35-2.73-1.06-.52-.7-.77-1.72-.77-3.04v-7.22h-2.4v-1.78zM260.03 318.09h2.06v2.55c.84-1.94 2.27-2.91 4.3-2.91 2.87 0 4.3 1.74 4.3 5.23v8.01h-2.19v-7.89c0-2.29-.94-3.43-2.84-3.43-1.06 0-1.91.41-2.53 1.22-.62.82-.93 1.94-.93 3.36v6.73h-2.19v-12.87zM285.64 325.18h-9.15c.02 1.25.38 2.26 1.07 3.03.7.77 1.62 1.15 2.77 1.15 1.7 0 2.84-.82 3.43-2.45l1.8.8c-.91 2.39-2.71 3.58-5.39 3.58-1.86 0-3.3-.57-4.33-1.71-1.03-1.14-1.55-2.77-1.55-4.88 0-2.16.52-3.86 1.55-5.08 1.03-1.22 2.46-1.83 4.3-1.83 1.75 0 3.11.5 4.06 1.5s1.43 2.45 1.43 4.35v1.54zm-2.22-2.06c0-1.17-.29-2.06-.86-2.68-.57-.62-1.4-.93-2.46-.93-1.12 0-1.99.34-2.62 1.03-.63.69-.96 1.64-.99 2.86h6.93v-.28zM293.3 318.68c.68-.6 1.48-.9 2.41-.9.21 0 .36.01.46.03v2.14h-.1c-1.22 0-2.17.33-2.84 1.01-.38.38-.67.85-.88 1.42-.21.57-.33 1.06-.36 1.47-.03.41-.05.95-.05 1.62v5.51h-2.19V318.1h2.04v2.94c.33-.97.83-1.76 1.51-2.36zM299.79 330.25c-.97-.69-1.57-1.67-1.79-2.94l2.22-.39c.16.81.52 1.43 1.11 1.88.58.45 1.35.67 2.29.67.84 0 1.5-.18 1.97-.55.47-.37.71-.84.71-1.4 0-.55-.15-.96-.46-1.24-.31-.28-.77-.46-1.39-.57l-2.53-.46c-2.29-.43-3.43-1.63-3.43-3.61 0-1.13.44-2.06 1.33-2.78.89-.72 2.08-1.08 3.57-1.08 1.44 0 2.62.31 3.54.93.92.62 1.44 1.47 1.56 2.55l-2.16.49c-.15-.67-.49-1.2-1-1.6-.52-.4-1.2-.59-2.04-.59-.83 0-1.47.17-1.95.52-.47.34-.71.83-.71 1.47 0 .98.66 1.59 1.98 1.83l2.5.46c2.23.43 3.35 1.6 3.35 3.51 0 1.18-.43 2.14-1.3 2.86-.87.72-2.08 1.08-3.62 1.08-1.53-.01-2.78-.35-3.75-1.04z\" class=\"st0\"/>\r\n  </g>\r\n</svg>";

var infographic = "<svg id=\"infographic\" xmlns=\"http://www.w3.org/2000/svg\" width=\"843\" height=\"100%\" viewBox=\"0 0 843 846.945\">\r\n  <text id=\"Patient_Care_Partners_\" data-name=\"Patient Care Partners \" transform=\"translate(0 694.945)\" fill=\"orange\" font-size=\"61.695\" font-family=\"Baloo2-Medium, 'Baloo \\32 '\" font-weight=\"500\"><tspan x=\"132.99\" y=\"65\">Patient Care Partners </tspan></text>\r\n  <text id=\"Remote_Patient_Monitoring_Services\" data-name=\"Remote Patient\r\nMonitoring Services\" transform=\"translate(415.191 451.448)\" fill=\"#00adbc\" font-size=\"40.293\" font-family=\"Baloo2-SemiBold, 'Baloo \\32 '\" font-weight=\"600\" letter-spacing=\"-0.012em\"><tspan x=\"-134.881\" y=\"0\">Remote Patient</tspan><tspan x=\"-174.025\" y=\"37.246\">Monitoring Services</tspan></text>\r\n  <g id=\"Group_85\" data-name=\"Group 85\" transform=\"translate(-96.282 -651.043)\">\r\n    <text id=\"OsiLIFE_Care_Managers\" data-name=\"OsiLIFE Care\r\nManagers\" transform=\"translate(211.134 1290.017)\" fill=\"#00adbc\" font-size=\"35.168\" font-family=\"Baloo2-SemiBold, 'Baloo \\32 '\" font-weight=\"600\"><tspan x=\"-96.712\" y=\"0\">OsiLIFE Care</tspan><tspan x=\"-76.525\" y=\"32.533\">Managers</tspan></text>\r\n  </g>\r\n  <g id=\"Group_86\" data-name=\"Group 86\" transform=\"translate(-96.282 -651.043)\">\r\n    <text id=\"Healthcare_Providers\" data-name=\"Healthcare\r\nProviders\" transform=\"translate(507.812 688.043)\" fill=\"#00adbc\" font-size=\"35.168\" font-family=\"Baloo2-SemiBold, 'Baloo \\32 '\" font-weight=\"600\"><tspan x=\"-85.511\" y=\"0\">Healthcare</tspan><tspan x=\"-74.626\" y=\"32.533\">Providers</tspan></text>\r\n  </g>\r\n  <g id=\"Group_87\" data-name=\"Group 87\" transform=\"translate(-96.282 -651.043)\">\r\n    <text id=\"Patients\" transform=\"translate(803.259 1290.017)\" fill=\"#00adbc\" font-size=\"35.44\" font-family=\"Baloo2-SemiBold, 'Baloo \\32 '\" font-weight=\"600\"><tspan x=\"-65.422\" y=\"0\">Patients</tspan></text>\r\n  </g>\r\n  <g id=\"Group_88\" data-name=\"Group 88\" transform=\"translate(-96.282 -651.043)\">\r\n    <path id=\"Path_104\" data-name=\"Path 104\" d=\"M506.7,752.988,505.056,857.37c0,10.756-2.834,12.668-2.834,0l-1.64-104.382a7.06,7.06,0,1,1,6.117,0\" fill=\"orange\" fill-rule=\"evenodd\" class=\"svg-infographic-1\"></path>\r\n    <path id=\"Path_105\" data-name=\"Path 105\" d=\"M508.831,755.517v16.427l2.23.585c2.319.673,5.719,1.946,8.016.739a2.906,2.906,0,0,0,1.35-1.09,5.861,5.861,0,0,0,5.464.444c1.6-.821,2.1-2.656,2.5-4.238a9.472,9.472,0,0,0,2.946,1.542,9.29,9.29,0,0,0,2.767.439,8.5,8.5,0,0,0,2.138-.184,5.934,5.934,0,0,0,4.822-5.239,8.427,8.427,0,0,0,6.888-.673,4.378,4.378,0,0,0,1.986-4.115c5.759,1.393,13.453-.849,16.388-6.3h-26.6a44.354,44.354,0,0,1-12.137-1.6c-2.243-.63-4.155-1.632-6.433-2.281a10.184,10.184,0,0,0-3.347-.449,5.176,5.176,0,0,0-2.483.707c-1.747,1.034-1.282,2.151-2.2,3.438-1.369,1.922-1.742,2.193-4.291,1.85\" fill=\"orange\" fill-rule=\"evenodd\" class=\"svg-infographic-2\"></path>\r\n    <path id=\"Path_106\" data-name=\"Path 106\" d=\"M498.443,755.517v16.427c-.736.194-1.483.391-2.228.585-2.315.673-5.718,1.946-8.012.739a2.917,2.917,0,0,1-1.354-1.09,5.852,5.852,0,0,1-5.46.444c-1.606-.821-2.1-2.656-2.5-4.238a9.478,9.478,0,0,1-2.951,1.542,9.266,9.266,0,0,1-2.759.439,8.548,8.548,0,0,1-2.143-.184,5.925,5.925,0,0,1-4.817-5.239,8.442,8.442,0,0,1-6.894-.673,4.391,4.391,0,0,1-1.986-4.115c-5.755,1.393-13.454-.849-16.387-6.3h26.6a44.316,44.316,0,0,0,12.136-1.6c2.247-.63,4.161-1.632,6.437-2.281a10.188,10.188,0,0,1,3.352-.449,5.182,5.182,0,0,1,2.478.707c1.749,1.034,1.279,2.151,2.2,3.438,1.372,1.922,1.741,2.193,4.288,1.85\" fill=\"orange\" fill-rule=\"evenodd\" class=\"svg-infographic-3\"></path>\r\n    <path id=\"Path_107\" data-name=\"Path 107\" d=\"M491.974,775.866c-2.9-.542-7.9.159-10.4,1.917-2.222,1.555-2.879,3.772-2.775,6.37a8.55,8.55,0,0,0,2.5,5.484c7.292,8.332,16.089,6.527,25.022,8.587,8,1.845,4.36,5.947-.462,8.457-1.763.922-3.624,1.675-5.4,2.584-.649.332-1.29.675-1.928,1.024-1.536.834-3.352,1.544-4.91,2.538-4.028,2.569-4.36,6.846-2.2,10.8,1.09,2,2.757,2.986,5.075,3.818,2.183.789,4.488,1.26,6.665,2.2a8.052,8.052,0,0,1,2.994,2.009,2.963,2.963,0,0,1,.505,1.114,8.57,8.57,0,0,1-1.127,5.357c-2.385,4.57-12.19,14.029-12.551,15.053,1.47.327,3.379-.752,3.626-.893,3.509-1.992,8.031-6.413,9.159-7.452,2.456-2.26,7.047-7.184,7.467-10.674.864-7.2-5.463-8.146-10.525-10.166a8.473,8.473,0,0,1-4.4-3.4,3.534,3.534,0,0,1-.1-3.594c1.749-3.185,5.333-3.467,8.643-4.456,4.144-1.242,8.422-2.007,10.782-5.5,6.482-9.571-6.407-16.589-15.485-16.983-4.621-.2-11.767-.619-15.763-3.794-1.2-.954-2.129-2.432-1.066-3.857a1.548,1.548,0,0,1,1.731-.548c.625.157,2.81,2.029,3.961,2.531a7.617,7.617,0,0,0,6.152.112c1.571-.694,1.287-2.677.521-4.357a7.31,7.31,0,0,0-3-3.294,8.45,8.45,0,0,0-2.7-.992\" fill=\"orange\" fill-rule=\"evenodd\" class=\"svg-infographic-4\"></path>\r\n    <path id=\"Path_108\" data-name=\"Path 108\" d=\"M494.414,779.223c-.71-.346-1.47-.388-1.7-.1s.149.8.854,1.151,1.467.388,1.7.1-.151-.806-.853-1.151\" fill=\"orange\" fill-rule=\"evenodd\" class=\"svg-infographic-5\"></path>\r\n    <path id=\"Path_109\" data-name=\"Path 109\" d=\"M497.343,784.417c-.979-.407-2.571-.893-3.183-1.773.306.81,1.388,1.483,1.694,2.291a6.043,6.043,0,0,0,1.489-.518\" fill=\"orange\" fill-rule=\"evenodd\" class=\"svg-infographic-6\"></path>\r\n    <path id=\"Path_110\" data-name=\"Path 110\" d=\"M515.3,775.865c2.9-.542,7.9.162,10.4,1.917,2.22,1.555,2.876,3.772,2.773,6.372a8.562,8.562,0,0,1-2.5,5.482c-7.289,8.335-16.086,6.527-25.022,8.59-8,1.842-4.362,5.947.46,8.454,1.766.922,3.627,1.675,5.4,2.587.649.329,1.292.675,1.927,1.023,1.54.832,3.353,1.545,4.916,2.539,4.022,2.571,4.355,6.843,2.2,10.8-1.088,2-2.755,2.986-5.07,3.823-2.183.787-4.5,1.255-6.673,2.191a8.057,8.057,0,0,0-2.988,2.012,3.011,3.011,0,0,0-.508,1.114,8.579,8.579,0,0,0,1.127,5.354c2.39,4.57,12.19,14.029,12.554,15.056-1.47.329-3.379-.758-3.629-.894-3.507-1.991-8.026-6.412-9.156-7.452-2.456-2.262-7.045-7.183-7.465-10.676-.867-7.205,5.463-8.143,10.52-10.166a8.5,8.5,0,0,0,4.4-3.393,3.56,3.56,0,0,0,.1-3.6c-1.749-3.183-5.333-3.467-8.648-4.456-4.142-1.239-8.417-2.005-10.775-5.493-6.482-9.57,6.407-16.589,15.48-16.982,4.621-.2,11.767-.622,15.763-3.794,1.207-.954,2.129-2.435,1.071-3.86a1.554,1.554,0,0,0-1.736-.545c-.622.154-2.813,2.026-3.959,2.531a7.634,7.634,0,0,1-6.154.109c-1.566-.691-1.289-2.675-.521-4.358a7.364,7.364,0,0,1,3.007-3.291,8.454,8.454,0,0,1,2.7-.994\" fill=\"orange\" fill-rule=\"evenodd\" class=\"svg-infographic-7\"></path>\r\n    <path id=\"Path_111\" data-name=\"Path 111\" d=\"M512.868,779.223c.707-.346,1.465-.388,1.7-.1s-.149.8-.859,1.151-1.462.388-1.7.1.149-.806.856-1.151\" fill=\"orange\" fill-rule=\"evenodd\" class=\"svg-infographic-8\"></path>\r\n    <path id=\"Path_112\" data-name=\"Path 112\" d=\"M509.937,784.417c.981-.407,2.568-.893,3.182-1.773-.3.81-1.39,1.483-1.693,2.291a6,6,0,0,1-1.489-.518\" fill=\"orange\" fill-rule=\"evenodd\" class=\"svg-infographic-9\"></path>\r\n    <path id=\"Path_113\" data-name=\"Path 113\" d=\"M497.158,780.622a.66.66,0,0,0-.071.032l.071-.032\" fill=\"#00adbc\" fill-rule=\"evenodd\" class=\"svg-infographic-10\"></path>\r\n  </g>\r\n  <g id=\"Group_89\" data-name=\"Group 89\" transform=\"translate(-96.282 -651.043)\">\r\n    <path id=\"Path_114\" data-name=\"Path 114\" d=\"M501.412,983.817l12.673-35.7a3.478,3.478,0,0,1,6.543-.033l9.706,24.75,12.677-21.2a3.461,3.461,0,0,1,5.746-.312l0,0,14.4,19.07a3.434,3.434,0,0,1,.48.871c9.319-14.675,15.144-29.35,15.144-44.025a37.07,37.07,0,0,0-37.058-37.058c-18.527,0-27.794,9.267-37.058,27.795a77.5,77.5,0,0,0-10.131-16.023Z\" fill=\"orange\" fill-rule=\"evenodd\" class=\"svg-infographic-11\"></path>\r\n    <path id=\"Path_115\" data-name=\"Path 115\" d=\"M452.654,948.488a3.461,3.461,0,0,1,4.894-.16,3.424,3.424,0,0,1,.935,1.485l.018-.007,3.67,11.634,22.089-67.725a36.24,36.24,0,0,0-16.655-3.54,37.069,37.069,0,0,0-37.054,37.058c0,11.527,3.584,23.049,9.639,34.576Z\" fill=\"orange\" fill-rule=\"evenodd\" class=\"svg-infographic-12\"></path>\r\n    <path id=\"Path_116\" data-name=\"Path 116\" d=\"M557.608,974.57,546.32,959.62l-13.577,22.71a3.521,3.521,0,0,1-1.8,1.593,3.48,3.48,0,0,1-4.5-1.98l-8.921-22.733-14.9,41.978a3.479,3.479,0,0,1-6.8-.729l-8-95.259-22.345,68.514a3.482,3.482,0,0,1-6.689.16l-5.143-16.312-9.074,9.7a3.339,3.339,0,0,1-.915.7c14.057,23.481,37.523,46.966,61,70.446,20.823-20.816,41.639-41.635,55.89-62.455a3.469,3.469,0,0,1-2.944-1.381\" fill=\"orange\" fill-rule=\"evenodd\" class=\"svg-infographic-13\"></path>\r\n    <path id=\"Path_117\" data-name=\"Path 117\" d=\"M588.142,973.207a31.12,31.12,0,0,1,10.641,60.989,30.5,30.5,0,0,1-23.447-2.706,1.1,1.1,0,0,0-1.646.3q-8.652,10.081-17.358,20.116c-2.077,2.4-3.759,2.531-6.148.476-.689-.6-1.385-1.176-2.059-1.782a3.489,3.489,0,0,1-.39-5.267c1.507-1.786,3.055-3.532,4.585-5.3q6.566-7.6,13.145-15.185c.566-.647.685-1.06.1-1.831a31.1,31.1,0,0,1,17.53-48.971c1.652-.4,3.364-.569,5.046-.841m.681,9.476a21.666,21.666,0,1,0,23.135,20.027,21.558,21.558,0,0,0-23.135-20.027\" fill=\"orange\" class=\"svg-infographic-14\"></path>\r\n  </g>\r\n  <g id=\"Group_98\" data-name=\"Group 98\" transform=\"translate(-96.282 -651.043)\">\r\n    <path id=\"Path_118\" data-name=\"Path 118\" d=\"M222.773,1195.481H197.747c-15.381,0-27.849,16.466-27.849,36.778v1.55c0,6.555,4.273,11.869,9.543,11.869h61.637c5.271,0,9.543-5.314,9.543-11.869v-1.55C250.621,1211.947,238.153,1195.481,222.773,1195.481Z\" fill=\"orange\" class=\"svg-infographic-15\"></path>\r\n    <circle id=\"Ellipse_15\" data-name=\"Ellipse 15\" cx=\"23.285\" cy=\"23.285\" r=\"23.285\" transform=\"translate(187.497 1154.597)\" fill=\"orange\" stroke=\"#fff\" stroke-miterlimit=\"10\" stroke-width=\"1\" class=\"svg-infographic-16\"></circle>\r\n    <g id=\"Group_91\" data-name=\"Group 91\">\r\n      <g id=\"Group_90\" data-name=\"Group 90\">\r\n        <path id=\"Path_119\" data-name=\"Path 119\" d=\"M287.26,1146.409a23.089,23.089,0,0,0-46.136-.421c-.011.335-.021.67-.021,1.005a22.744,22.744,0,0,0,3.306,11.834l-4.161,12.288,12.785-4.064a23.114,23.114,0,0,0,34.238-20.058C287.271,1146.8,287.271,1146.6,287.26,1146.409Zm-23.073,19.842a19.331,19.331,0,0,1-10.678-3.188l-7.457,2.378,2.421-7.155a19.061,19.061,0,0,1-3.7-11.293,17.863,17.863,0,0,1,.1-1.87,19.417,19.417,0,0,1,38.657.367c.044.5.065.995.065,1.5A19.355,19.355,0,0,1,264.187,1166.251Z\" fill=\"orange\" fill-rule=\"evenodd\" class=\"svg-infographic-17\"></path>\r\n        <path id=\"Path_120\" data-name=\"Path 120\" d=\"M274.767,1151.618c-.573-.28-3.35-1.643-3.869-1.826s-.9-.281-1.276.281-1.469,1.826-1.794,2.194-.658.421-1.231.14a15.291,15.291,0,0,1-4.55-2.788,16.786,16.786,0,0,1-3.145-3.88c-.324-.562-.032-.864.249-1.146.259-.259.562-.659.853-.983.076-.1.14-.184.205-.27a6.28,6.28,0,0,0,.357-.67,1.012,1.012,0,0,0-.043-.984c-.14-.281-1.275-3.047-1.751-4.171s-.94-.93-1.275-.93-.7-.054-1.081-.054a2.1,2.1,0,0,0-1.513.7,6.3,6.3,0,0,0-1.977,4.691,7.171,7.171,0,0,0,.291,1.913,12.762,12.762,0,0,0,2.021,3.891c.281.367,3.913,6.224,9.662,8.483,5.76,2.238,5.76,1.492,6.8,1.395s3.35-1.352,3.814-2.67a4.638,4.638,0,0,0,.335-2.669C275.707,1152.04,275.328,1151.9,274.767,1151.618Z\" fill=\"orange\" fill-rule=\"evenodd\" class=\"svg-infographic-18\"></path>\r\n      </g>\r\n    </g>\r\n    <g id=\"Group_97\" data-name=\"Group 97\">\r\n      <g id=\"Group_93\" data-name=\"Group 93\">\r\n        <g id=\"Group_92\" data-name=\"Group 92\">\r\n          <path id=\"Path_121\" data-name=\"Path 121\" d=\"M242.177,1201.819l3.875-9.706a6.936,6.936,0,0,1-.194-1.579V1182.7a7.356,7.356,0,0,1,7.347-7.347h19.521a7.356,7.356,0,0,1,7.349,7.347v7.831a7.356,7.356,0,0,1-7.349,7.349H254Z\" fill=\"orange\" class=\"svg-infographic-19\"></path>\r\n        </g>\r\n      </g>\r\n      <g id=\"Group_94\" data-name=\"Group 94\">\r\n        <circle id=\"Ellipse_16\" data-name=\"Ellipse 16\" cx=\"2.751\" cy=\"2.751\" r=\"2.751\" transform=\"translate(252.135 1183.009)\" fill=\"#fff\" class=\"svg-infographic-20\"></circle>\r\n      </g>\r\n      <g id=\"Group_95\" data-name=\"Group 95\">\r\n        <circle id=\"Ellipse_17\" data-name=\"Ellipse 17\" cx=\"2.751\" cy=\"2.751\" r=\"2.751\" transform=\"translate(260.043 1183.009)\" fill=\"#fff\" class=\"svg-infographic-21\"></circle>\r\n      </g>\r\n      <g id=\"Group_96\" data-name=\"Group 96\">\r\n        <circle id=\"Ellipse_18\" data-name=\"Ellipse 18\" cx=\"2.751\" cy=\"2.751\" r=\"2.751\" transform=\"translate(267.951 1183.009)\" fill=\"#fff\" class=\"svg-infographic-22\"></circle>\r\n      </g>\r\n    </g>\r\n  </g>\r\n  <g id=\"Group_99\" data-name=\"Group 99\" transform=\"translate(-96.282 -651.043)\">\r\n    <path id=\"Path_122\" data-name=\"Path 122\" d=\"M832.781,1163.219,805.438,1188.1a33.444,33.444,0,0,1,7.7,5.482l22.765-20.735,27.637,25.345v-12.474l-24.517-22.5a4.647,4.647,0,0,0-6.241,0\" fill=\"orange\" class=\"svg-infographic-23\"></path>\r\n    <path id=\"Path_123\" data-name=\"Path 123\" d=\"M854.078,1216.772c-.255-8.159-.514-23.626-.514-23.626L835.9,1177.078l-20.7,18.833.017,27.509,16.091.122v-22.883h9.483v22.954l9.709.073C853.626,1223.772,854.231,1221.639,854.078,1216.772Z\" fill=\"orange\" class=\"svg-infographic-24\"></path>\r\n    <path id=\"Path_124\" data-name=\"Path 124\" d=\"M807.5,1195.294H782.768c-15.2,0-27.526,16.275-27.526,36.352v1.532c0,6.479,4.223,11.731,9.432,11.731H825.6c5.209,0,9.432-5.252,9.432-11.731v-1.532C835.029,1211.569,822.706,1195.294,807.5,1195.294Z\" fill=\"orange\" stroke=\"#fff\" stroke-miterlimit=\"10\" stroke-width=\"1\" class=\"svg-infographic-25\"></path>\r\n    <circle id=\"Ellipse_19\" data-name=\"Ellipse 19\" cx=\"23.015\" cy=\"23.015\" r=\"23.015\" transform=\"translate(772.637 1154.884)\" fill=\"orange\" stroke=\"#fff\" stroke-miterlimit=\"10\" stroke-width=\"1\" class=\"svg-infographic-26\"></circle>\r\n  </g>\r\n  <g id=\"Group_102\" data-name=\"Group 102\" transform=\"translate(-96.282 -651.043)\">\r\n    <line id=\"Line_4\" data-name=\"Line 4\" x2=\"346.053\" transform=\"translate(337.868 1209.636)\" fill=\"none\" stroke=\"#00adbc\" stroke-miterlimit=\"10\" stroke-width=\"7\" class=\"svg-infographic-27\"></line>\r\n    <g id=\"Group_100\" data-name=\"Group 100\">\r\n      <path id=\"Path_125\" data-name=\"Path 125\" d=\"M357.528,1235.558l-11.012-25.922,11.012-25.922-61.448,25.922Z\" fill=\"#00adbc\" class=\"svg-infographic-28\"></path>\r\n    </g>\r\n    <g id=\"Group_101\" data-name=\"Group 101\">\r\n      <path id=\"Path_126\" data-name=\"Path 126\" d=\"M664.261,1235.558l11.013-25.922-11.013-25.922,61.448,25.922Z\" fill=\"#00adbc\" class=\"svg-infographic-29\"></path>\r\n    </g>\r\n  </g>\r\n  <g id=\"Group_105\" data-name=\"Group 105\" transform=\"translate(-96.282 -651.043)\">\r\n    <line id=\"Line_5\" data-name=\"Line 5\" x2=\"160.388\" y2=\"265.441\" transform=\"translate(592.033 825.495)\" fill=\"none\" stroke=\"#00adbc\" stroke-miterlimit=\"10\" stroke-width=\"7\" class=\"svg-infographic-30\"></line>\r\n    <g id=\"Group_103\" data-name=\"Group 103\">\r\n      <path id=\"Path_127\" data-name=\"Path 127\" d=\"M580.015,855.727,596.505,832.9l27.882-3.98-53.965-39.187Z\" fill=\"#00adbc\" class=\"svg-infographic-31\"></path>\r\n    </g>\r\n    <g id=\"Group_104\" data-name=\"Group 104\">\r\n      <path id=\"Path_128\" data-name=\"Path 128\" d=\"M720.068,1087.515l27.882-3.98L764.44,1060.7l9.592,66Z\" fill=\"#00adbc\" class=\"svg-infographic-32\"></path>\r\n    </g>\r\n  </g>\r\n  <g id=\"Group_108\" data-name=\"Group 108\" transform=\"translate(-96.282 -651.043)\">\r\n    <line id=\"Line_6\" data-name=\"Line 6\" x1=\"160.388\" y2=\"265.441\" transform=\"translate(249.807 825.495)\" fill=\"none\" stroke=\"#00adbc\" stroke-miterlimit=\"10\" stroke-width=\"7\" class=\"svg-infographic-33\"></line>\r\n    <g id=\"Group_106\" data-name=\"Group 106\">\r\n      <path id=\"Path_129\" data-name=\"Path 129\" d=\"M377.842,828.916l27.882,3.98,16.491,22.831,9.592-66Z\" fill=\"#00adbc\" class=\"svg-infographic-34\"></path>\r\n    </g>\r\n    <g id=\"Group_107\" data-name=\"Group 107\">\r\n      <path id=\"Path_130\" data-name=\"Path 130\" d=\"M237.788,1060.7l16.491,22.831,27.882,3.98L228.2,1126.7Z\" fill=\"#00adbc\" class=\"svg-infographic-35\"></path>\r\n    </g>\r\n  </g>\r\n</svg>";

var MobileModalCurveTop = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\r\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" focusable=\"false\" preserveAspectRatio=\"none\" viewBox=\"0 0 375 24\" width=\"100%\" height=\"24\">\r\n    <title>Dialog Curve</title>\r\n    <g>\r\n        <path d=\"M188.93 0C127.54 0 64.57 8 0 24C25 24 150 24 375 24C291.87 8 229.85 0 188.93 0Z\" id=\"a3hxwL0dIW\"></path>\r\n    </g>\r\n</svg>";

var TabBrushStroke = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg\r\n  width=\"162px\"\r\n  height=\"48px\"\r\n  viewBox=\"0 0 162 48\"\r\n  version=\"1.1\"\r\n  xmlns=\"http://www.w3.org/2000/svg\"\r\n  xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n  preserveAspectRatio=\"none\"\r\n>\r\n    <title>Brush Stroke</title>\r\n    <g\r\n      stroke=\"none\"\r\n      stroke-width=\"1\"\r\n      fill=\"none\"\r\n      fill-rule=\"evenodd\"\r\n      opacity=\"0.72\"\r\n    >\r\n        <g transform=\"translate(-559.000000, -913.000000)\">\r\n            <g transform=\"translate(558.911531, 912.466576)\">\r\n                <path \r\n                  class=\"brush-stroke-fill\"\r\n                  fill=\"#48464F\"\r\n                  d=\"M115.319479,5.75993685 C115.325149,5.78336736 115.322179,5.81738665 115.339189,5.82752485 C115.364838,5.8426195 115.404527,5.84036657 115.438007,5.84554832 C115.429367,5.80679786 115.420457,5.7682727 115.411547,5.72952225 C115.381038,5.73966045 115.349988,5.74979865 115.319479,5.75993685 M156.776847,40.563405 C156.755248,40.5397492 156.733918,40.5160934 156.712319,40.4922123 C156.686129,40.5120381 156.66021,40.5318639 156.63402,40.5514644 C156.669659,40.5821043 156.705299,40.6125189 156.740938,40.6429335 C156.752818,40.6163489 156.764697,40.5899896 156.776847,40.563405 M7.56201708,8.40128832 C7.54041753,8.37763251 7.51881798,8.35420201 7.49721843,8.33054621 C7.47129897,8.35014673 7.44510952,8.36997254 7.41865007,8.38957306 C7.45455932,8.41998766 7.49019858,8.45062756 7.52610783,8.48104216 C7.53798758,8.45445754 7.55013733,8.42787293 7.56201708,8.40128832 M29.9548181,43.4922897 C30.0170482,43.5162322 30.0929144,43.5711462 30.1382853,43.5555506 C30.1829125,43.5401747 30.1972923,43.4542893 30.2248124,43.3991556 C30.1628303,43.3752131 30.087212,43.3202992 30.042089,43.3356751 C29.996966,43.3512706 29.9825861,43.4367168 29.9548181,43.4922897 M117.068354,43.1910064 C116.905785,43.2129785 116.910555,43.3218835 116.905976,43.4193249 C116.899298,43.5573668 116.963409,43.6849003 117.136282,43.6962048 C117.31507,43.7078277 117.415244,43.6100679 117.342165,43.4535567 C117.290265,43.3427411 117.252294,43.2107494 117.068354,43.1910064 M25.1403321,27.2338691 C24.6863982,27.4483357 24.3936976,27.0010926 24.0542488,27.3195284 C24.0282988,27.3438887 24.0916473,27.4822491 24.1536602,27.5161625 C24.49101,27.6999 24.7974488,27.6946458 25.1403321,27.2338691 M147.496813,25.106081 C147.029141,24.9443156 146.77174,24.7446564 146.411112,24.8553128 C146.376194,24.8659804 146.34929,25.0103911 146.385734,25.0493994 C146.639891,25.3229358 146.961595,25.2904554 147.496813,25.106081 M16.6205314,23.8312232 C17.0899209,23.9742009 17.3459862,24.1886674 17.7081412,24.0632037 C17.742296,24.0512624 17.7609952,23.9062149 17.7224519,23.8675249 C17.4627612,23.6054522 17.1460187,23.6259913 16.6205314,23.8312232 M15.845848,26.3648578 C15.4279768,26.2739444 15.0635322,25.9085393 14.4025707,26.2906623 C14.962976,26.4216986 15.3526074,26.6573411 15.845848,26.3648578 M24.6016791,23.9734048 C24.6261026,24.2574496 24.6642643,24.4072736 24.6442294,24.5518435 C24.6238129,24.7002346 24.4957802,24.865662 24.7860003,24.9104022 C24.9970348,24.9428827 25.1638016,24.8395502 25.2216167,24.6851089 C25.3618611,24.3103099 24.9666962,24.2248099 24.6016791,23.9734048 M139.535701,24.9508436 C139.497539,24.6822429 139.450982,24.5335334 139.462621,24.3880082 C139.47426,24.2434384 139.63702,24.0718015 139.339168,24.0157568 C139.126798,23.9757931 138.947819,24.078011 138.894393,24.2353183 C138.754911,24.6464189 139.16267,24.7156787 139.535701,24.9508436 M149.635207,22.6335861 C149.122695,22.4875833 148.712074,22.2318793 148.249745,22.5265917 C148.207958,22.5531811 148.219979,22.7240219 148.257377,22.7388292 C148.689177,22.9080778 149.125748,22.9736756 149.635207,22.6335861 M144.964591,28.6416739 C144.736002,28.2334392 144.695169,27.8557743 144.231504,27.9565592 C144.048136,27.9965229 143.527229,28.142685 143.657169,28.353171 C143.893963,28.7373639 144.429181,28.4252968 144.964591,28.6416739 M149.850439,32.3457193 C149.84357,32.7845239 149.758469,33.231767 150.151535,33.5928732 C150.177295,33.6164375 150.36028,33.580295 150.379552,33.5409682 C150.638098,33.0142753 150.118144,32.7213144 149.850439,32.3457193 M19.2374732,20.4231639 C19.4775106,20.6226639 19.3851591,21.0929936 19.8785905,20.9772422 C20.0604313,20.934731 20.5800034,20.7828371 20.4586491,20.5771276 C20.2222371,20.1762169 19.6839656,20.5088231 19.2374732,20.4231639 M146.369515,24.3005976 C146.551165,24.2353183 146.990216,24.4085474 146.910267,24.0872456 C146.787196,23.5925556 146.125662,24.0644775 145.806057,23.7643517 C145.677643,23.6438237 145.50935,23.8020863 145.542741,23.9453825 C145.631849,24.3281423 146.011177,24.293592 146.369515,24.3005976 M17.748211,24.6233323 C17.5608369,24.683039 17.1170157,24.5306675 17.209558,24.8432123 C17.3349193,25.2681648 17.926808,25.0073659 18.2708362,25.1683352 C18.4458078,25.2501732 18.5980731,25.1393576 18.5686886,24.9887374 C18.4923651,24.598972 18.1084579,24.6308156 17.748211,24.6233323 M13.8215581,15.2867942 C13.7591637,15.3199115 13.618156,15.3590791 13.6170112,15.4009534 C13.6055626,15.8220848 13.7687041,16.2053223 14.0520551,16.5492329 C14.0823937,16.5860123 14.2787359,16.5895151 14.2978167,16.5613335 C14.5222078,16.2279312 14.1194106,15.9356071 14.1945892,15.5959953 C14.2295072,15.4374143 14.0614047,15.3138612 13.8215581,15.2867942 M54.1997389,41.6590117 C53.7135582,41.9955983 53.2420698,42.2196179 53.2699279,42.6429784 C53.2846202,42.8666795 53.6265494,42.6952018 53.8253721,42.6512577 C54.4733586,42.50828 54.2794969,42.1345956 54.1997389,41.6590117 M109.955768,7.28657189 C110.320976,6.89139304 110.976594,6.83582599 110.880618,6.29671415 C110.846845,6.10835937 110.586772,6.19481469 110.400734,6.22936498 C109.752938,6.35021137 109.751984,6.70574496 109.955768,7.28657189 M11.3059358,13.960509 C10.9372933,13.9468162 10.5848696,14.1467939 10.1984819,14.0127324 C10.1473452,13.9950593 10.0013765,14.1198861 9.93745557,14.1998135 C9.91436771,14.2289504 10.0025213,14.320023 10.0399199,14.3827549 C10.5264821,14.181185 10.9481694,14.7795259 11.449424,14.4599756 C11.6148551,14.3544141 11.9167146,14.3189085 11.8113881,14.076738 C11.7327749,13.8961849 11.4820523,13.9863023 11.3059358,13.960509 M152.906432,34.9809349 C153.24817,34.6992785 154.002819,35.1726333 154.136767,34.6863818 C154.218623,34.3884851 153.401962,34.733988 153.148377,34.3805242 C153.121473,34.343108 152.853578,34.3988343 152.717531,34.4493063 C152.525387,34.5204767 152.237838,34.5806611 152.288784,34.8051584 C152.347362,35.06134 152.654946,34.9186807 152.906432,34.9809349 M12.9856251,18.5135043 C13.0411504,18.4905769 13.4737138,18.7518535 13.4962292,18.3808758 C13.5261862,17.8836382 12.9821905,17.8583226 12.5667999,17.7903365 C12.2981412,17.7462332 11.883323,17.8161298 11.9460991,18.0555936 C12.0226134,18.3482361 12.2651313,18.7102976 12.9856251,18.5135043 M20.5078777,7.82202172 C20.4409039,7.40232331 20.3741208,6.99106345 20.3101999,6.57964438 C20.2846315,6.4162868 20.2151771,6.22283704 20.007768,6.24512755 C19.6425601,6.28429516 19.8623718,6.50481196 19.8795446,6.66721423 C19.9201868,7.05538749 19.9358332,7.44547137 19.9703695,7.83412228 C19.9884964,8.03823964 19.9842986,8.31384584 20.3315705,8.27420058 C20.6269424,8.24044638 20.4773483,7.97901058 20.5078777,7.82202172 M143.602598,41.0465004 C143.67625,41.5187407 143.740744,41.9828609 143.826607,42.4442744 C143.850268,42.5718079 143.943955,42.6932912 144.135718,42.6862856 C144.308972,42.6799169 144.340837,42.5464923 144.29905,42.4608331 C144.065691,41.9811095 144.182847,41.4790954 144.137244,40.9882266 C144.121789,40.8220031 144.046038,40.6366735 143.844353,40.6376251 C143.50872,40.6390618 143.626831,40.8901484 143.602598,41.0465004 M24.0752378,23.7598936 C23.9458695,23.1008907 23.2423577,23.2972064 22.8874534,23.0432538 C22.7206866,22.9238404 22.5079349,22.8025163 22.3215147,23.0055191 C22.1801255,23.1593236 22.2146618,23.358346 22.2951831,23.5303014 C22.3860081,23.7245472 22.5649867,23.8213517 22.817045,23.7259802 C23.2133547,23.5761561 23.6035586,23.7044858 24.0752378,23.7598936 M140.051075,25.1657877 C140.153921,25.7865784 140.776148,25.6455113 141.138685,25.8324331 C141.339988,25.9364024 141.53862,26.1476846 141.783046,25.9260532 C141.941608,25.7821203 141.898294,25.5759331 141.824261,25.4057291 C141.719888,25.1653101 141.50561,25.1135643 141.223022,25.2156229 C140.858959,25.3469777 140.496995,25.219285 140.051075,25.1657877 M16.2329989,17.9425489 C15.9609056,18.3463255 15.5640235,18.4754512 15.6395837,18.8722222 C15.7122819,19.2543452 16.0114699,19.4503425 16.3993841,19.4549598 C16.9286875,19.4611693 16.7897788,18.9876552 16.7947398,18.7908619 C16.8012273,18.530063 16.3215341,18.3891551 16.2329989,17.9425489 M144.441202,30.9477861 C144.638499,30.838881 144.89132,30.8452498 145.143569,30.827895 C145.371395,30.8121324 145.714851,30.9447609 145.784305,30.6594425 C145.83029,30.4714061 145.76179,30.2235038 145.638718,30.0568027 C145.432072,29.7768976 145.129259,30.0923083 144.865752,30.038015 C144.51619,29.9658892 144.637735,30.4846212 144.240853,30.3889312 C144.006922,30.3322497 143.751047,30.3656854 143.810389,30.6344452 C143.863243,30.8751827 144.149456,30.9113252 144.441202,30.9477861 M20.3855693,18.4342138 C20.243226,18.0958757 20.0110118,17.9826718 19.709534,17.9928617 C19.3988974,18.0036885 19.0901688,18.0852081 18.7808679,18.0840936 C18.3305593,18.0823422 18.2120671,18.2213394 18.385703,18.5627026 C18.4715669,18.731792 18.3463964,19.0042139 18.7823944,18.9683899 C19.3891661,18.9188731 19.7536108,18.4732222 20.3855693,18.4342138 M148.644146,27.5324027 C148.655404,27.8678749 149.13815,27.8893693 148.999051,28.1391822 C148.867774,28.3746655 148.543781,28.2726068 148.311567,28.2734029 C147.707848,28.2753135 147.085811,28.4522046 146.5027,28.1313805 C146.392222,28.0705593 146.147987,28.1710258 145.972061,28.2151291 C145.956033,28.2192688 145.964047,28.4117632 146.000301,28.4222716 C146.535328,28.5784644 146.973998,29.0884394 147.567031,28.9295399 C148.298783,28.7337018 149.013934,28.7501013 149.751982,28.7456432 C150.209732,28.7429365 150.724534,28.9258779 151.177705,28.5033135 C150.00175,28.765227 149.691114,27.577143 148.644146,27.5324027 M15.4808309,21.384044 C15.5228088,21.0581249 14.9223337,21.0412478 15.1230645,20.7680299 C15.2879232,20.5436918 15.6491242,20.6416109 15.9158748,20.6505271 C16.454337,20.6683595 17.0151239,20.4476834 17.5369858,20.7841109 C17.6703611,20.8699293 17.9775631,20.8646751 18.1366976,20.6925606 C18.1731421,20.6532338 18.1374608,20.5013399 18.0922392,20.4854181 C17.5885041,20.307094 17.0834334,19.8308733 16.6048851,19.9720996 C15.7744855,20.2171359 14.976905,20.173351 14.1474594,20.1698482 C13.7669868,20.168256 13.3023676,19.9963007 12.9419299,20.4468874 C14.1569999,20.1144404 14.3697516,21.4295803 15.4808309,21.384044 M147.603094,30.5163056 L147.594698,30.5094592 C147.621412,30.6363559 147.630189,30.80449 147.828248,30.7998727 C148.25108,30.7896827 148.431204,30.4577134 148.470129,30.2266882 C148.515541,29.9555401 148.434638,29.59523 147.933002,29.5200791 C147.723113,29.488554 147.419345,29.3517858 147.441288,29.6302579 C147.463994,29.9200345 146.800552,30.3308167 147.603094,30.5163056 M138.253657,20.8035355 C137.585445,20.7495606 137.131511,21.2644713 136.462344,21.2628791 C136.856937,21.4991585 137.297514,21.3765607 137.703364,21.4329239 C138.416798,21.5319574 138.392566,21.202854 138.245643,20.7966891 C138.854132,20.7815634 139.500783,21.0312171 140.043634,20.561365 C139.460331,20.7307729 138.675726,19.5559039 138.253657,20.8035355 M25.8596811,28.1205537 C26.5189252,28.1788274 26.9553048,27.6715592 27.7559382,27.7475061 C27.2325499,27.3911764 26.8047567,27.552305 26.4176058,27.4962603 C25.7163837,27.3946792 25.7106594,27.7107268 25.867695,28.1275593 C25.2649302,28.1614727 24.6440386,28.0532045 24.067033,28.288847 C24.6701794,28.2765872 25.4154783,29.3353863 25.8596811,28.1205537 M139.200831,21.5926194 C139.344892,21.6324239 139.494868,21.6614016 139.631677,21.7145803 C139.785279,21.7742871 139.951473,21.9655078 140.087329,21.7553401 C140.210019,21.5650747 140.050312,21.3963037 139.823249,21.3332535 C139.531312,21.2518931 139.258265,21.2616054 139.208082,21.5986697 C139.192627,21.6172982 139.177171,21.6360859 139.161906,21.6548736 C139.175072,21.6340161 139.187856,21.613477 139.200831,21.5926194 M70.4051738,0.549749461 C70.390904,1.23162275 70.9046181,1.30134996 71.3349964,1.38474578 C71.6986734,1.45518979 71.7492876,1.26742738 71.7709877,1.06125317 L71.7828113,0.937257592 C71.7871114,0.896468165 71.7925281,0.856860624 71.8013346,0.820353325 C71.8397681,0.662039683 72.0631386,0.509435714 72.1072799,0.575702517 C72.5146362,1.1887137 73.453972,0.728479506 73.8533372,1.31553763 C73.9412394,1.7560475 73.7709526,2.524604 74.715045,1.86885679 C74.8619292,1.76677477 74.9949241,1.87646968 75.1419985,1.92491539 C75.8429329,2.15624363 75.7268716,1.80760758 75.5491645,1.42834692 C75.6477215,1.3169218 75.7464688,1.2056697 75.8450258,1.0944176 C76.4620536,1.57870162 77.2470848,1.05687218 77.7918121,1.29079572 C78.4252026,1.56261073 78.9373946,1.43907418 79.5043827,1.34097163 C79.6661075,1.31294233 79.8831993,1.24442626 79.8647437,1.00929157 C79.8538986,0.869664131 79.4202858,0.674151109 79.9001329,0.606500143 C80.108092,0.57708668 80.4304,0.721558691 80.4182231,0.903230084 C80.3913958,1.30602151 81.2810725,1.85864859 80.0000217,2.05866014 C80.3424978,2.19724946 80.4772051,2.2545192 80.6143858,2.30677135 C80.7736371,2.36732848 80.8773313,2.61267137 81.0923302,2.47183279 C81.2787894,2.34968041 81.1345689,2.16575975 81.1412281,2.00779215 C81.1539758,1.70344931 80.7125622,1.32955228 81.1908872,1.10393372 C81.6309689,0.896309269 82.058303,0.93402771 82.4336948,1.34858452 C82.860458,1.819719 83.3730306,1.59513856 83.7733471,1.28249074 C84.7227669,0.540752401 85.4060066,0.634010383 85.3862191,1.66313556 C85.3689051,2.56076526 85.768841,2.34016428 86.2878825,2.31196196 C86.432103,2.30434907 86.5848854,2.42511729 86.7669685,2.23358373 C86.539983,1.85743744 86.2465952,1.45983662 86.3168027,0.973303335 C86.6440577,0.907382573 86.7780039,1.17244978 87.0171663,1.23664034 C87.0891163,1.25595488 87.1620151,1.28454782 87.2348409,1.31568528 L87.3800926,1.37935768 C87.7173739,1.5265319 88.0382357,1.63135445 88.2388546,1.00946459 C88.2744341,0.898731554 88.7689315,0.477080904 88.9972489,1.13144396 C89.098089,1.42004194 89.6079979,1.2710714 89.9164166,1.09459062 C90.6124041,0.696816778 90.9341414,0.9942388 91.0471585,1.61572798 C91.0688486,1.73459298 91.0703707,1.82369847 91.1831976,1.9020767 C91.3570993,2.02319096 93.2117976,1.94135232 93.2867618,1.76815893 C93.473982,1.33526196 93.7683212,1.09476364 94.2820353,1.24027377 C94.7915636,1.38474578 94.5316623,1.82629378 94.638591,2.12821433 C94.6633253,2.19828758 94.712033,2.26109397 94.7535107,2.33376253 C95.0602171,2.20088288 94.8948772,1.96609424 94.9591866,1.79618823 C95.0468985,1.56434093 94.6009186,1.18456121 94.9947661,1.13732665 C95.080752,1.12705665 95.1687474,1.10251777 95.2585912,1.0747045 L95.4406957,1.0179697 C95.7174061,0.936091596 96.0097864,0.890710824 96.3134892,1.17867852 C96.5838551,1.43492169 97.0675074,1.66140536 97.4976954,1.21120635 C97.7591188,0.937661138 98.0696305,1.1615495 98.3732926,1.216743 C98.9646346,1.32418865 99.5896535,1.46502724 100.130005,1.0850745 C100.303906,0.962749092 100.361937,0.988356107 100.501211,1.10185747 C100.96869,1.48250229 101.442639,1.71434959 101.87492,1.05047042 C101.97576,0.895444167 102.08364,0.990259331 102.163932,1.08351731 C102.239848,1.17158468 102.345254,1.35654346 102.365803,1.34858452 C103.086905,1.06431205 103.925591,1.50724421 104.452624,1.33318571 C105.25592,1.06777246 105.930598,1.52714155 106.677957,1.29304498 C107.055061,1.17504509 107.199282,1.60690394 107.027853,1.96782444 C106.710873,1.89463682 106.488454,1.57299195 106.112871,1.67040242 C106.067398,1.6821678 106.01146,1.83719406 106.040761,1.88269842 C106.276689,2.24638724 106.647134,2.31282707 107.071995,2.23202655 C107.246848,2.40919941 107.330374,2.61595876 107.359675,2.85403479 C107.388405,3.08622813 107.261879,3.41098738 107.70177,3.45130112 C107.987167,3.47760022 108.178002,3.32811062 108.338395,3.14142163 C108.572421,2.86908757 108.342962,2.51456882 108.207683,2.45089732 C107.625094,2.17700607 107.554886,1.88858111 107.944738,1.42523255 C108.157834,1.17210374 108.267807,0.911016 108.74499,1.02209508 C109.375717,1.16881636 109.647034,1.48976915 109.647034,2.05433463 C109.647034,2.09672462 109.714769,2.13894159 109.788781,2.22527876 C110.280805,1.55257554 111.698276,2.48221401 111.812244,0.964652316 C112.234932,1.68685757 112.365613,2.48096069 113.270556,2.45059618 L113.421044,2.43774946 L113.447783,2.32333691 C113.647063,1.60605226 114.338296,1.36648758 114.977104,1.86003275 C115.25508,2.07492405 115.418517,2.1237158 115.67918,1.89031131 C116.159978,1.45983662 116.675595,1.37851705 117.268269,1.74272494 C117.407733,1.82837002 117.618736,1.89238756 117.858279,1.71037013 C118.565492,1.17331489 119.337966,1.32730302 119.890874,2.05571879 C119.972688,2.47390903 119.696614,2.68499389 119.273466,2.80853044 C119.489827,2.94272847 119.707767,3.04651845 119.934457,3.13079131 L119.928959,3.0894286 L119.928959,3.0894286 C120.07815,3.0840132 120.274177,3.20759562 120.456317,3.28935654 C120.548305,3.31372975 120.643472,3.33550679 120.741095,3.35621827 C120.879125,3.33695603 120.973501,3.19694856 120.977262,2.79965201 C120.978979,2.59282794 121.395133,2.63342851 121.563045,2.84152632 C121.698894,3.01002226 121.767608,3.25271439 122.058146,3.02294517 L122.050751,3.09172356 C122.082035,2.91060504 122.049791,2.65609085 122.158423,2.56354023 C122.317537,2.42840783 122.458336,2.58807604 122.586618,2.71360282 L122.464807,2.7391492 C122.770482,2.66346622 123.076539,2.64791734 123.382597,2.73612406 C123.473281,3.02015205 123.391243,3.10807915 123.248266,3.12682849 L123.196127,3.13004126 C123.735906,3.37194626 124.326391,3.3458458 124.965387,3.2055153 C125.079249,3.18051668 125.190871,3.14535681 125.302175,3.1082892 L125.524932,3.03405584 C125.934632,2.90226476 126.357305,2.81880118 126.887749,3.19053272 C127.317671,3.49208083 128.244305,3.34756532 128.936209,3.32935864 C129.322946,3.31911739 129.49242,3.29787626 129.612184,3.68040616 C129.687804,3.9218343 129.960151,3.98612664 130.178183,3.91842055 C130.680583,3.76243002 130.843873,3.82474638 130.853209,3.98773781 C130.907641,4.0007947 130.963622,4.01510536 131.019907,4.02961035 C131.318141,4.10635338 131.629732,4.18198189 131.919189,3.99442319 C132.300043,3.70098459 132.549239,4.33976684 132.923415,4.0931383 C133.433637,4.07705729 133.774803,4.51538419 134.343986,4.41650987 C134.594555,4.37298043 134.775847,4.40322256 134.906772,4.48588023 C134.8422,3.99497748 134.630062,3.63344816 133.9701,3.7478756 C133.359282,3.85377641 132.99316,3.38429989 132.445614,3.40152369 C132.37538,2.95165843 132.547383,2.67522493 133.157382,2.71137786 C133.191169,2.71342426 133.245022,2.71973397 133.256694,2.70557975 C133.847035,1.97569981 134.459082,2.69517726 135.058638,2.69057287 C135.504619,2.68699169 135.873403,2.93562836 136.016945,3.22195276 C136.159462,3.5074245 135.789244,3.73576778 135.493357,3.82103413 C136.651925,4.4910571 137.916562,3.70882361 139.113831,4.13447323 C139.398866,4.23576965 140.115957,4.20626749 140.339972,3.7645878 C140.527333,3.39521398 140.225098,3.19381487 139.793246,3.12236167 C139.495311,3.32887676 140.206055,3.51066462 139.827442,3.67164748 C139.56186,3.7843696 139.227271,3.81063163 139.016772,3.53794985 C138.934251,3.43102585 138.942032,3.24889693 138.687507,3.32154386 C137.96632,3.52788842 137.793088,3.51919125 137.420823,3.26799659 C137.094835,3.3275125 137.724082,3.90630048 137.003714,3.78010628 C136.556408,3.70176155 136.644073,3.5693674 136.767,3.44312201 L136.834544,3.3752325 C136.877901,3.33086179 136.913905,3.28875142 136.918531,3.25179598 C137.00699,2.53777558 136.538075,2.39947356 135.776958,2.41294564 C137.8924,2.00912421 139.956649,1.64128519 142.100553,1.9230052 C141.979205,2.16621834 142.155248,2.4214228 142.210921,2.69049099 L142.227077,2.60915451 L142.227077,2.60915451 C142.484318,2.79846841 142.379718,3.21549478 142.600091,3.51232468 C142.896435,3.02010855 142.489485,2.57004155 142.624669,2.15355097 C143.331315,2.59736704 144.11086,2.1149738 144.826723,2.4389506 C144.819627,2.53585127 144.807377,2.62143099 144.790639,2.6966569 C145.054407,2.7418663 145.251297,3.00558492 145.56918,3.03299402 C145.534296,2.99179835 145.495315,2.95765646 145.452713,2.92849792 C145.412235,2.22521687 145.903621,2.30128323 146.37286,2.34475832 C146.437864,2.28511566 146.527101,2.25082997 146.660326,2.25979778 C147.371995,2.30773458 146.469612,3.07547833 147.176313,3.15870719 C147.676317,3.21759019 148.215847,3.05924776 148.925788,3.34781221 C148.153211,3.59787624 147.616706,3.79113327 147.005038,3.75017939 L146.925589,3.74764999 C146.877552,3.77838792 146.814652,3.80653974 146.73395,3.83167199 C146.657237,3.85553512 146.587521,3.86903989 146.523755,3.87369815 C146.468279,3.93462276 146.446284,4.02811511 146.473932,4.15858584 C146.55039,4.5190555 146.860976,4.32844065 147.114974,4.36712981 C147.694244,4.45564304 148.398785,3.94249278 148.881079,4.61776002 C148.927515,4.68287103 149.282378,4.60058581 149.484323,4.55415883 C149.662079,4.51320494 149.823203,4.4622485 150.109814,4.67343465 C148.582804,5.43872494 146.937434,4.72986419 145.428567,5.16544742 C145.579756,5.65519546 145.986023,5.60631502 146.419936,5.53252254 C148.051482,5.25490429 148.341118,5.48043373 148.265523,6.93005018 C148.257532,7.0800886 148.327727,7.23975212 148.391442,7.38507235 C148.507426,7.64891349 149.018877,7.89161714 148.616066,8.17282121 C148.39425,8.32776655 147.791005,8.36834297 147.635712,8.22774094 C147.345861,7.96522089 147.083008,7.54756678 147.464869,7.13708432 L147.557054,7.04678167 C147.613466,6.98436178 147.641976,6.90916433 147.535711,6.77114157 C146.959897,6.85889989 146.389266,6.92023635 146.858168,7.67495789 C146.992079,7.89029604 147.200504,8.149419 146.840457,8.32757782 L146.721206,8.37792411 C146.722645,8.37795294 146.72409,8.37798808 146.72554,8.37802958 C146.889363,8.3826049 146.924154,8.49437345 146.917464,8.60467135 C146.910009,8.73032926 146.800092,8.79748843 146.666664,8.79846885 C146.537823,8.79928588 146.423892,8.74928416 146.41032,8.61463901 C146.427665,8.5440546 146.459125,8.48526985 146.507581,8.44392463 C146.169848,8.52427406 145.811894,8.48836996 145.49833,8.35871787 C145.168738,8.22226784 145.369171,7.92955138 145.462692,7.69250955 C145.629852,7.26944649 145.643877,6.94110175 145.29403,6.80893372 C145.261365,7.02392565 145.02993,7.14956818 144.783197,7.10549389 C143.725579,6.91654366 142.664889,6.94570475 141.594985,6.93342639 C140.976181,6.92626402 140.436622,7.18479159 139.759869,7.07718546 C139.214166,6.99021378 139.608751,7.5306319 139.617351,7.79717451 C138.332296,8.17820047 137.07418,8.13047911 135.836453,7.67070122 C135.824694,7.69428399 135.813375,7.72025743 135.803291,7.74671165 C135.750246,7.88539045 135.839926,7.98585695 136.012227,8.05241003 C137.188562,8.50649951 138.384361,8.56031516 139.606109,8.19729833 L140.091695,8.21075071 C140.37006,7.99543965 140.686623,7.92789957 141.112197,8.24454494 C141.243075,8.34201697 141.387134,8.32173588 141.533547,8.28120691 L141.709679,8.22909348 L141.709679,8.22909348 C141.959333,8.159309 142.220386,8.10769989 142.321691,8.33516309 C142.395178,8.32783037 142.47394,8.3210609 142.555482,8.31469634 C142.624265,8.35695369 142.693049,8.3990822 142.761832,8.44121072 C142.741871,8.52916213 142.7464,8.61229458 142.767825,8.69210143 C142.828016,8.71356099 142.87833,8.75221909 142.914975,8.81689977 C143.18857,9.2049862 143.441908,9.6169528 143.888459,9.8447343 C143.941488,9.82351966 143.993709,9.79775832 144.046408,9.76736909 C144.12589,9.77327993 144.202574,9.77381366 144.271391,9.75923406 C144.123756,9.65686095 144.00082,9.5240711 143.891599,9.37359419 C143.640357,9.19580301 143.409498,9.01405449 143.25671,8.76127449 C143.290744,8.6602707 143.348928,8.58500898 143.421937,8.5418086 C143.413567,8.5246526 143.405219,8.50830983 143.396849,8.49200121 C143.499346,8.46910746 143.601676,8.44621371 143.704007,8.42331996 L143.770044,8.55274946 L143.854053,8.58918136 C144.494503,8.83109781 145.420307,8.57786859 145.650881,9.57434689 C145.855147,10.4583334 147.252716,10.94969 146.861529,12.1093632 C146.845107,12.157832 147.124842,12.2840461 147.313054,12.4037543 C146.719632,12.7690594 145.978408,12.7324639 145.41211,12.9744826 C144.563678,13.3370228 143.564308,13.0909379 142.801864,13.6190527 C142.760346,13.6478412 142.605348,13.6099445 142.556818,13.5614757 C141.85582,12.8596538 141.975575,13.7351827 141.665947,13.9314976 C141.673881,13.3353963 140.816593,13.4999951 140.766034,12.86925 C140.305652,13.7517727 139.494862,13.5803427 138.826709,13.6021374 C138.454713,13.6143359 138.329791,13.6444256 138.331083,13.9664667 C138.332559,14.3132301 138.503795,14.4008969 138.851988,14.2790743 C138.995546,14.228979 139.167705,14.1577396 139.276758,14.281514 C139.437845,14.4640039 139.244466,14.5720015 139.099801,14.6632465 C138.954767,14.7548168 138.878559,14.8537062 139.004957,14.9908176 C139.110319,15.1053211 139.251478,15.1560669 139.405369,15.0584787 C139.929965,14.725703 140.488697,14.9903296 140.981002,15.0745808 C141.53346,15.1690787 142.077246,15.1510249 142.495188,14.9527582 C143.030117,14.6988662 143.024766,14.9532461 143.105402,15.2455228 C143.150425,15.4629819 143.059456,15.9052191 143.247853,15.8551238 C143.642176,15.7503791 144.20792,15.8152753 144.399638,15.3322137 L144.721998,15.3179007 L144.721998,15.3179007 C145.177214,16.098769 146.017895,15.9488085 146.782554,15.9815005 C146.774619,17.2114372 146.759673,17.2999172 145.366718,17.1156381 C145.039276,17.0723759 144.711891,17.0345012 144.384472,17.0014577 C144.400619,17.0768717 144.413325,17.1520768 144.423121,17.2286423 C144.431377,17.235302 144.439901,17.2441431 144.448316,17.2531888 L144.433333,17.3203379 C144.439504,17.385766 144.443329,17.4522889 144.444204,17.5201843 L144.436044,17.7227495 L144.344517,17.5731706 C144.339147,17.5655437 144.333745,17.5580245 144.32831,17.5506098 C144.224715,17.6747969 144.082388,17.6569599 143.933417,17.5616993 C143.782256,17.7047606 143.561207,17.7822754 143.208125,17.7322346 C143.244277,17.5046219 143.210029,17.2951352 143.145213,17.0936026 C142.939564,17.0709229 142.720289,17.14085 142.458891,17.3176434 C142.011227,17.6201739 141.408647,17.5580419 140.930038,17.2791255 C140.663416,17.123815 140.419788,16.9224115 140.139591,16.7978394 C140.094672,16.7986458 140.050334,16.7984585 140.005988,16.7983138 C139.868888,16.7978259 139.731973,16.7096712 139.594873,16.6621783 C139.571808,16.5253921 139.527338,16.3703895 139.362745,16.3494081 C138.601961,16.253121 137.794309,16.4473216 137.081132,16.0309452 C136.96802,15.9649105 136.783314,16.0942149 136.742719,16.234254 C136.689576,16.418533 136.882402,16.4178824 137.010091,16.4788751 C137.430247,16.6794188 137.912218,16.5514156 138.340678,16.6912921 L138.488296,17.1263728 C138.406873,17.4011012 138.435539,17.5778609 138.527923,17.69593 C138.56444,17.6956136 138.600142,17.6959831 138.635844,17.6963526 C138.646075,17.7232368 138.636678,17.752806 138.621181,17.7832211 C138.72281,17.8550879 138.859134,17.8952689 139.003914,17.9251111 L139.177622,17.95693 C139.352137,17.986583 139.52436,18.0137284 139.651891,18.0742796 C139.643885,18.1490471 139.610896,18.1932815 139.565671,18.2222296 C139.755234,18.2802923 139.939578,18.3470189 140.134054,18.4036011 C140.712158,18.5718046 141.439486,18.609274 141.979997,18.4268298 C142.630536,18.2071497 143.064686,18.2610775 143.577461,18.5014183 C143.880454,18.6434007 144.198602,18.6895898 144.343842,18.4639744 L144.379044,18.3917495 L144.517094,18.3986409 C144.820511,18.3996428 144.9635,18.3199709 145.059648,18.2167768 C145.063534,18.0781966 145.147569,17.9951637 145.266213,17.9451686 C145.27428,17.9362554 145.283826,17.9266552 145.293893,17.9173167 L145.342565,17.9185793 C145.492802,17.8756487 145.677015,17.8706193 145.829867,17.8719467 C146.237845,17.8756876 146.224929,17.7507747 146.198911,17.5116836 C146.479384,17.4492271 146.761149,17.381078 146.968552,17.6455421 C146.902132,17.7492045 146.705117,17.8421359 146.635512,17.9465603 C146.833035,17.9506166 147.029363,17.9548622 147.225716,17.9591136 C147.261448,17.8896673 147.298419,17.8222749 147.346637,17.7764729 C148.182521,17.9508305 148.250056,18.5723047 148.158903,19.1106663 C148.075683,19.6031615 148.691248,19.5179344 148.704349,19.868764 C148.044499,20.3321454 147.39572,20.8786393 146.369409,20.2875801 C146.498021,20.6333676 146.627925,20.8765249 146.937183,20.7506361 C147.526999,20.5108234 147.990994,21.0614756 148.534515,21.026986 C149.01933,20.6769648 149.377972,20.9895484 149.771254,21.3436026 C149.936462,21.4922948 150.161883,21.484689 150.388726,21.4553652 C150.350719,21.3654453 150.400004,21.2312266 150.410765,21.1256873 C150.536548,21.1389231 150.661948,21.1523222 150.787348,21.1657214 C150.775133,21.3041408 150.819942,21.5174455 150.655263,21.5518451 C150.626145,21.6933928 150.615963,21.8360278 150.867641,21.8389295 C151.09394,21.8411586 151.038987,21.6058345 151.052534,21.4580803 C151.426138,21.4456613 151.448081,21.7405329 151.616565,21.907234 C151.598573,22.5247031 151.709605,22.9282192 152.038872,23.2153427 C151.797734,22.9206984 151.714506,22.5228471 151.730551,21.9566528 C152.330994,22.3456011 152.800177,21.7684739 153.362319,21.7786826 C153.503514,21.7812221 153.489717,21.5853109 153.414351,21.4445924 C153.354353,21.470786 153.283811,21.488885 153.199987,21.4983842 L153.069225,21.505976 L153.069225,21.505976 L153.067514,21.5059318 C152.440842,21.5103202 152.207009,21.1872882 152.243037,20.7382129 C152.273175,20.6795064 152.294916,20.6126473 152.315599,20.5432566 L152.357727,20.4027652 C152.372418,20.3569532 152.388737,20.3116579 152.408721,20.2684371 C152.356229,20.1679154 152.299468,20.0613979 152.239465,19.9487927 C152.3531,19.9915455 152.46021,20.0318431 152.56095,20.0699802 C152.626147,20.0145974 152.716171,19.9747818 152.838951,19.9578309 C152.862158,19.8576541 153.146895,19.7666775 153.326612,19.7548241 C153.747919,19.7269206 154.183789,19.8354722 154.859237,19.5729406 C153.910498,19.3202773 153.151466,19.4402285 152.427743,19.3718308 C152.268755,19.3568582 152.101589,19.4210023 151.937814,19.4223635 C151.718383,19.4238948 151.416366,19.4851465 151.393226,19.2023678 C151.377666,19.013168 151.608268,18.9563401 151.804958,18.900533 C152.019602,18.8397917 152.453077,19.0434536 152.409391,18.6769642 C152.373284,18.3732579 151.975316,18.3941855 151.6731,18.4013316 C151.573558,18.4035434 151.473418,18.412561 151.374674,18.4059254 C151.070862,18.3855082 150.659928,18.5758989 150.527471,18.1813359 C150.385639,17.7585289 150.837866,17.5968925 151.123126,17.3843831 C151.525084,17.0849303 151.598294,17.4515898 151.757681,17.6372165 C151.986288,17.9036615 152.276136,17.9404125 152.636801,17.840368 C153.052124,17.7251808 152.969339,17.5594609 152.843864,17.2787239 C152.733151,17.0315052 153.043147,17.1158965 153.218891,17.0742113 C154.088179,16.8684927 154.857279,17.58696 155.747314,17.2563348 L155.729353,17.279649 C156.113773,16.7203161 156.60987,16.7214599 157.091181,16.7750565 C157.23935,16.7915603 157.419133,17.0013715 157.298176,17.2195162 C157.172501,17.4456678 157.075137,17.4015486 156.908566,17.1869988 C156.605447,16.7959752 156.324302,17.1884654 155.95466,17.2730434 C156.08956,17.3145143 156.224467,17.419584 156.175624,17.5962119 C156.115579,17.8128048 156.484423,18.0778885 156.032196,18.2563692 C155.638417,18.4117103 155.275159,18.5762392 154.813556,18.5503774 C154.236253,18.5180501 153.654761,18.5427209 153.065689,18.6733912 C154.06183,18.8870278 155.098445,18.8020942 156.089604,18.9817802 L156.4754,19.0690105 C156.665649,18.9884881 156.856229,18.8947285 157.040401,18.7875706 C157.008786,18.7430529 157.011919,18.6809213 157.030495,18.6251658 C157.048273,18.571896 157.148631,18.5387249 157.212096,18.4964032 C157.241484,18.5300275 157.271006,18.5637661 157.31489,18.6139024 C157.775184,18.2981924 158.168707,17.8893665 158.373696,17.385155 C158.431476,17.243045 158.450915,17.0681067 158.687743,17.1215074 C158.958455,17.182495 158.7202,17.3739204 158.770669,17.4747397 C159.113785,18.1601942 157.905924,18.3726297 158.089609,19.0016196 C158.094245,19.017669 157.981716,19.0847846 157.956571,19.0744254 C156.657403,18.5430449 157.397314,19.5159293 157.199005,19.7813277 C157.132487,19.8704748 157.32705,20.0891841 157.043498,20.1082974 C156.787944,20.1256599 156.962712,19.9171639 156.890308,19.8471302 C156.711082,19.6739428 156.506889,19.5454018 156.52276,19.938174 C156.52704,20.0445376 156.48852,20.1243468 156.254902,20.2260415 C156.178218,20.102899 156.143621,19.9734826 156.045537,19.9019899 C155.897109,19.7938122 155.767604,19.7135991 155.690428,19.6436413 C155.287693,19.7931361 154.837022,19.8740283 154.469049,20.0760553 C154.321033,20.1575541 154.018617,20.0561485 154.004055,20.2916273 C153.996575,20.4118975 154.089069,20.4702914 154.199476,20.5195632 L154.335311,20.5776872 C154.357632,20.5877702 154.379357,20.5983324 154.399829,20.6097958 C155.18619,21.0501275 155.320441,21.819517 154.993489,22.5303771 C154.767037,23.0228408 154.461301,22.9665981 154.136441,22.8728313 L153.972696,22.8251875 C153.945233,22.8175145 153.917706,22.8101726 153.890151,22.8034576 C153.55861,22.7226394 153.162039,22.6135773 153.113565,22.9928275 C153.07287,23.3121871 153.495574,23.3138885 153.800184,23.3019785 C154.843478,23.2614843 155.821741,23.4404754 156.74774,24.0041612 C156.777463,23.2306883 156.686299,22.6887808 155.55603,23.1726693 C155.566005,22.6397795 156.023618,22.2533833 155.698062,21.7904225 C155.546256,21.5743401 155.293112,21.2175489 155.651184,21.0251164 C156.004467,20.8348959 156.551249,21.0479157 156.733377,21.2252053 C157.257418,21.7356362 157.751138,21.6439288 158.321459,21.3902447 C158.578991,21.2759081 158.847096,21.2372855 159.04199,21.4457115 C159.225514,21.6423975 159.39667,21.8719213 159.168861,22.1392169 C159.016656,22.3175274 158.752341,22.5399051 159.136146,22.6843571 C159.421805,22.7917177 159.586977,22.4990707 159.74397,22.3367537 C159.94824,22.1254353 160.001502,21.840785 159.785063,21.6296367 C159.277579,21.1348591 159.310893,20.7328097 160.199189,20.3571326 C159.482448,20.1926037 159.048573,20.2923078 158.730997,20.6325951 C158.585175,20.7891272 158.499397,21.0618675 158.257824,20.8365973 C158.080085,20.6710475 157.998297,20.3666606 158.013856,20.1310117 C158.030015,19.881411 158.261015,20.0428773 158.445138,20.0534262 C158.996708,20.0850729 159.063135,19.6309596 159.267804,19.3325276 C159.287318,19.3040363 159.302247,19.270601 159.315602,19.2355974 L159.353951,19.1292578 C159.400198,19.0075828 159.464005,18.9080502 159.67435,18.9753962 C159.852089,19.0323943 159.962603,19.2260177 160.068328,19.4272976 C160.12933,19.5431654 160.172873,19.670637 160.213041,19.8014285 L160.272522,19.9990701 C160.413619,20.4612111 160.599631,20.913281 161.434386,21.0001053 C161.138553,21.177395 160.957423,21.2978567 160.762528,21.398922 C160.609325,21.4780388 160.310899,21.435673 160.366555,21.6825514 C160.417822,21.9093529 160.629274,21.8669871 160.840326,21.8241109 C161.046591,21.7822556 161.296942,22.0163732 161.187227,22.0320264 C160.442757,22.1385363 160.488638,23.1963193 159.525935,22.9945289 C159.27718,22.9422948 158.989526,22.9625419 158.735784,23.0106926 C158.536102,23.0484644 158.21314,23.073986 158.252438,23.3371982 C158.28615,23.5648504 158.487827,23.6604711 158.773087,23.5473256 C159.032814,23.4440484 159.209755,23.5337141 159.338621,23.7438415 C159.470479,23.9590731 159.466689,24.1050564 159.161281,24.2033994 C158.82994,24.3102496 158.93028,24.5746528 158.915917,24.7909053 C158.861458,25.6065739 158.865049,26.3742619 157.94683,26.9883103 C157.128951,27.535322 157.228693,27.6440438 158.445337,27.8505982 C157.88918,28.2897389 157.718024,28.9328818 156.866432,29.1253142 C156.542073,29.1986461 155.875402,29.5610521 156.614286,30.1102757 C156.862043,30.2945412 157.001681,30.6743018 157.308685,30.895999 C157.70027,31.1787777 158.216331,31.4060896 158.442944,31.7654329 C158.674942,32.1332834 157.557839,32.3119342 158.015452,32.8693247 C157.364939,32.8832765 157.046365,33.6084287 156.322443,33.4500249 C156.099421,33.4013639 155.883381,33.3989819 155.86084,33.60996 C155.838099,33.8211082 156.112587,33.8901865 156.288132,33.8583696 C157.125161,33.7072821 157.713834,33.8285945 157.906934,34.660767 C157.951019,34.8501368 158.516752,34.5433679 158.647413,34.9040724 C158.811388,35.3559739 158.919308,35.7893297 157.879804,35.76602 C158.161702,35.9107879 158.385822,36.0258883 158.58548,36.1284329 L158.276171,36.1573961 C158.516399,36.1554854 158.756628,36.1532564 158.997047,36.1507089 C159.002031,36.214254 158.999224,36.2761143 158.990305,36.3366533 C158.995544,36.3390576 159.001511,36.3421231 159.00748,36.3451889 C159.000056,36.3808488 158.986749,36.4109314 158.968833,36.4365978 C158.86257,36.8558906 158.493989,37.2194343 158.463873,37.6563714 L158.471044,37.8357495 L158.168637,37.9854285 C157.640932,38.2229211 157.072613,38.3767876 156.493827,38.5131842 C156.344424,38.5485306 156.223451,38.6571172 156.271916,38.8164944 C156.311032,38.9457793 156.457382,38.966 156.573585,38.9567653 C156.844811,38.9353738 157.095244,38.930214 157.289978,38.9725115 C157.292924,38.9527094 157.297309,38.9313462 157.298313,38.9117498 L157.297044,38.8927495 L157.40262,39.0048523 C157.665189,39.1021102 157.778447,39.3273079 157.614637,39.7947292 C158.645768,40.3661623 157.494809,40.2744527 157.316212,40.4771371 C157.565027,40.8992238 158.086316,40.3967321 158.453432,40.7306121 C157.995873,40.9496959 157.425737,40.9122797 157.123496,41.2716345 C157.180738,41.3299613 157.26745,41.3396913 157.360134,41.3414958 L157.500701,41.3433423 C157.639872,41.3494125 157.766044,41.3834055 157.799913,41.5825871 C157.674933,41.6099726 157.501679,41.6034446 157.448634,41.6669726 C157.098118,42.0849196 155.952502,41.6411793 156.060119,42.5697381 C156.075574,42.7030035 155.790887,42.7709896 155.587485,42.7553862 C155.418047,42.7423303 155.208158,42.6496655 155.280474,42.5264308 C155.650834,41.8943357 154.985675,42.1213805 154.775785,42.1403274 C154.174165,42.1947799 153.534574,42.1779028 153.008133,42.4789839 C152.905669,42.5375761 153.278318,42.8763918 152.829536,42.8560119 C152.569654,42.8440706 152.41758,42.6520538 152.277526,42.4601962 C152.103509,42.221847 152.3445,41.7690313 151.757954,41.733048 C151.762279,42.4253629 151.14045,42.8948508 150.399125,42.7989475 L150.273044,42.7767495 L150.260093,42.8207243 C150.214696,42.9465547 150.10586,43.1020832 150.03457,43.0190511 C149.61479,42.5310482 149.103614,42.8198695 148.746611,42.962051 C148.353354,43.1188807 148.106638,42.5054141 147.852099,42.8870594 C147.473535,43.4549897 146.600394,42.7926432 146.264952,43.3809534 C146.25961,43.390188 146.032166,43.350702 146.021671,43.3124897 C145.814644,42.5495174 145.322357,43.0749365 144.950662,43.1526349 C144.626668,43.2203025 144.271383,43.4701154 144.009402,43.4073835 C142.90481,43.1435595 141.82178,43.4217131 140.732835,43.3968752 C139.92476,43.3784059 139.001055,43.615959 138.529185,42.7313443 C138.446564,42.5765845 138.074106,42.482009 137.77549,42.5665538 C137.735611,42.9389644 138.324256,43.0085427 138.298688,43.3585036 C137.91266,43.5201275 137.578194,43.3463638 137.231231,43.2750027 L137.106044,43.2547495 L137.07764,43.344347 C136.924937,43.7077552 136.491817,43.7170256 136.149418,43.6841043 C135.16847,43.589688 134.221677,43.8305847 133.239203,43.8119562 C132.243945,43.7933277 131.279598,44.017825 130.791509,43.0195287 C130.487932,43.2303332 130.778343,43.552431 130.530483,43.7503389 C129.958438,43.3021405 129.913026,43.2980008 129.441346,43.797149 C129.289844,43.9573222 129.117735,44.0805569 128.887619,44.0418669 C127.887972,43.8734144 126.933547,44.1878697 125.956034,44.2069759 C125.097395,44.223853 124.21624,44.1553893 123.38336,44.1440848 C122.639397,44.1340541 122.047699,43.9719702 121.335028,43.7743808 C121.369565,44.0058837 121.423373,44.204906 121.422228,44.40361 C121.420892,44.5918056 121.156813,44.7500682 121.070758,44.6077273 C120.748864,44.0756211 120.630562,44.3244787 120.287107,44.6094787 C120.065768,44.7932162 119.806269,44.5050318 119.775548,44.2302217 L119.841377,44.1181323 L119.841377,44.1181323 C119.795774,44.1359647 119.750362,44.1536379 119.704758,44.1713111 C119.604162,44.192353 119.502781,44.2240964 119.401109,44.2594905 L119.197524,44.333057 C118.722271,44.5063201 118.247863,44.6567162 117.824529,44.0676602 C117.78942,44.0184619 117.578386,44.071163 117.455887,44.049987 C116.606215,43.9012775 115.704262,44.2482133 114.962207,44.1074647 C113.681117,43.8644981 113.421236,44.4212832 113.152386,45.1656269 C112.470436,44.6341575 111.087073,45.4262666 110.840548,44.0998222 C110.588108,44.5134703 110.397872,44.4989815 109.808845,44.5945123 C109.374564,44.665205 108.875218,45.077261 108.732493,44.4348167 C108.612462,43.8943462 107.850505,44.3753753 107.731604,43.9821081 L107.717044,43.8937495 L107.633398,43.9397627 C107.183266,44.1760789 106.785206,44.2241615 106.606502,43.6030623 C106.54159,43.6699032 106.487503,43.762935 106.437628,43.8615556 L106.379377,43.9812645 C106.198636,44.3604869 106.040519,44.7014148 105.542171,43.8735736 C105.524617,43.8444367 105.375023,43.8434814 105.305377,43.8670456 C104.443685,44.1593697 103.604317,43.7106936 102.712859,43.8235791 C102.202637,43.8880624 101.67734,43.6027439 101.568197,44.407272 C101.42261,44.0004702 101.343425,43.6185065 100.816984,43.7809087 C100.293023,43.9428334 100.119005,43.7581406 100.060427,43.3634394 C100.033141,43.1784282 99.6919752,43.1004114 99.7032329,43.1687159 C99.7738322,43.5955791 99.1836608,43.7914171 99.250253,44.177839 C99.2775387,44.3348279 99.3975574,44.5115597 99.1960633,44.6053391 C98.999912,44.6965709 98.8413499,44.538786 98.7146529,44.4255821 C98.3952391,44.1404228 98.1754274,43.9095568 97.8670805,44.4887916 C97.6888652,44.823786 96.8180141,44.6271519 96.8451089,44.5688782 C96.9970376,44.2413763 96.8027692,44.0883376 96.5667999,43.9593997 L96.3867617,43.8648657 C96.1786966,43.7543662 95.9969866,43.6335385 96.0456204,43.4016517 C96.0656553,43.3070763 95.8200844,43.2258751 95.6601867,43.3241126 C95.5233769,43.4083388 95.6017992,43.509283 95.6680099,43.6003556 C95.7500576,43.7135596 95.8702671,43.818325 95.9080473,43.941082 C95.9962009,44.2265597 96.8309891,44.8269704 95.539214,44.5903726 C95.2926891,44.5453139 95.1087495,44.7115374 95.1938502,44.9446324 C95.3298968,45.3183169 95.1375616,45.2106856 94.8248261,45.2076604 C94.0842974,45.2008141 93.4265797,44.6946603 92.7186793,44.888747 C92.2021601,45.0304509 91.8262669,45.1385599 91.4519001,44.7386045 C91.4179362,44.7021436 91.2399116,44.7029397 91.1908738,44.7414704 C90.6025543,45.2042138 90.2283843,45.0580992 89.9576452,44.4779463 L89.9080438,44.3647495 L89.901297,44.4537268 C89.8911746,44.7559645 89.9895593,45.0838613 89.7187844,45.1387191 C89.2352751,45.2367973 88.9862697,44.7577106 88.4539133,44.4999368 C88.7235261,45.1141995 88.6027441,45.1804342 87.939493,45.0753503 C87.2464757,44.9656492 86.3262051,45.6351605 85.9596616,44.5790681 C85.9508844,44.5537525 85.8438407,44.5429257 85.7814462,44.541015 C85.2635913,44.522705 85.2261928,44.181501 85.1506325,43.8703892 C84.9056341,43.9455401 85.1281171,44.2595178 84.7346695,44.2913614 C84.649378,43.6770987 84.281308,43.5500428 83.5192179,43.6844227 C83.1322578,43.7524087 82.6806135,43.8574926 82.1957685,43.8229423 C81.4000961,43.7661015 80.5662619,44.1834116 79.7757414,43.7095791 C79.2779532,44.1636774 78.7714714,44.0518259 78.2631765,43.9025139 L77.9857863,43.8205324 C77.7545469,43.7544127 77.5231913,43.7004064 77.2923657,43.7081462 C76.6483862,43.7296406 76.2803162,43.9046211 76.4882977,44.4413446 C76.5743524,44.6624983 76.7643979,44.8554704 76.9055964,45.061976 C77.0149298,45.2218308 76.984782,45.3729286 76.8267924,45.4913867 C76.7668785,45.5362862 76.6594531,45.5369231 76.57378,45.5579398 C76.4827642,44.8986185 75.2631148,45.0393671 75.2890648,44.2942273 C75.3029939,43.8952272 75.0144911,43.6790093 74.6134111,43.5196322 C74.4212667,44.170515 73.6515443,44.5023251 72.8184733,44.1413781 C72.1901402,43.8689563 71.5076174,43.9431518 71.127908,44.1338949 C70.6883059,44.3546682 70.6243802,44.2130861 70.6046073,44.0453049 L70.5962083,43.95321 C70.589537,43.8776666 70.5795343,43.809338 70.5350652,43.7797942 C70.2643077,43.8920428 70.3263205,44.2305401 69.956724,44.1830932 C68.0625657,43.9407635 66.1981736,44.5889396 64.2276918,44.1268893 C63.0998214,43.8625875 61.7011934,44.2638167 60.4420465,44.0823082 C59.7343369,43.9800904 58.6591297,44.7327134 58.4276787,43.5517942 C58.0109525,43.5167662 58.1235296,44.176406 57.8300658,43.9100345 C57.2958013,43.4248975 56.4239962,43.8167328 55.9454479,43.2733221 C55.8483263,43.1628248 55.4033603,42.9700119 55.1856476,43.39385 C55.0444491,43.6691378 54.6779055,43.5974897 54.4565674,43.4248975 C53.6462027,42.7929616 53.6431498,43.402607 53.5359153,43.9335987 C52.4399099,42.8453443 51.0519672,43.5258417 50.0717827,43.7178585 C48.3854152,44.0480764 46.9068383,43.3339841 45.3286593,43.5460623 C45.1645638,43.5681936 45.0680145,43.2489617 44.8617503,43.4153444 C44.7146368,43.5339618 44.7707345,43.7148333 44.8928521,43.8522384 C45.3330479,44.3474061 44.9407451,44.3411966 44.4854755,44.3653977 C44.0307783,44.389758 43.5100612,44.1740178 43.0156758,44.6088419 C43.9189643,44.7233195 44.6915489,44.8863587 45.1824998,45.4885208 C45.1521612,46.0637751 44.9880657,46.3495713 44.2187249,45.9488198 C43.9529283,45.8104594 43.2505614,44.9258447 43.137221,46.1241187 C43.1166136,46.342088 42.7162969,46.2897053 42.5497209,46.0816075 C42.4096673,45.9067863 42.3400221,45.6556996 42.0249969,45.9262108 C41.8326617,45.9445209 41.7061555,46.0298617 41.6487221,46.1850992 L41.6329886,46.1889126 C41.8664107,46.2900372 42.0973814,46.4094262 42.3270124,46.5406574 C42.3185736,46.6253924 42.2952343,46.6854468 42.2612818,46.7276278 C42.3231992,46.6802219 42.4037819,46.6531222 42.5012333,46.6436185 C42.5323922,46.8947709 42.4257256,47.003108 42.1240772,46.9093139 C42.1425319,46.858384 42.1680385,46.8147846 42.2004972,46.7784198 C41.9149212,46.9486833 41.2624385,46.4939593 41.4664293,47.3548325 C41.435859,47.5624701 41.4685443,47.8506736 41.360683,47.9602783 C41.1857208,48.1377855 41.0217179,47.907441 40.895399,47.7504574 C40.2964902,47.0063681 39.5130058,47.0133549 38.7481713,47.157675 C38.027558,47.2939167 37.4009628,47.9085327 36.5738341,47.2011239 C36.3379236,46.9993814 35.5261762,47.0437036 34.9837935,47.1343131 C34.194349,47.2657514 33.7613657,46.1443774 32.8369503,46.457253 C32.4691453,46.5817045 32.8411802,45.9286614 32.8648289,45.629541 C33.0922797,45.4291571 33.3295005,45.4621582 33.5688923,45.5229841 L33.7744398,45.5771404 L33.7744398,45.5771404 C34.5423932,45.7681293 34.5576164,45.7699335 34.9187534,44.9590559 C34.6388063,44.9103464 34.4157301,44.7402498 34.2543112,44.4052022 C33.8744111,45.0320431 33.8740294,45.0336353 33.0970563,44.8916129 L32.8676207,44.8474523 C32.638686,44.8062621 32.4120052,44.7889173 32.1943402,44.9298252 C31.9751009,44.9791827 31.7518547,45.0517861 31.5810809,44.8483056 C31.7318198,44.3620541 31.1834355,43.9541378 31.3608876,43.4607215 C31.4059185,43.3357355 31.3980953,43.1634662 31.1731318,43.1725371 C30.9451154,43.1817718 30.8344463,43.3393975 30.9187838,43.510716 C31.1094017,43.8979339 30.7955213,44.2518753 30.9390095,44.6273112 C30.3331918,44.622057 30.5417457,44.166853 30.2957933,43.99442 C30.0508865,44.1516572 29.8583974,44.2592258 29.7008385,44.3133686 C29.7098459,44.3166091 29.717658,44.3200956 29.7252616,44.3231054 C29.697691,44.3797064 29.6832848,44.4678777 29.6383274,44.4836629 C29.5931216,44.499448 29.5171163,44.4430725 29.454772,44.4182673 C29.464393,44.3985159 29.4724412,44.3749476 29.4807636,44.3519606 C29.2220713,44.3482441 29.0725662,44.110148 28.8809465,43.6073612 C28.6983426,43.1281153 28.4029707,42.6520538 27.6861022,42.641227 L27.6046037,42.6397097 C27.652843,42.6556951 27.7010584,42.6721962 27.7492514,42.6891931 C27.909986,42.7459969 28.0458947,42.8495803 27.9569198,42.975758 C27.8101385,43.1837205 27.6744111,43.4589883 27.2951354,43.3985248 C26.6833654,43.3005104 26.0788439,43.0627936 25.9088675,43.974837 C25.8666452,44.2018932 25.0377838,44.3105683 24.5269486,44.1859817 C24.3044209,44.1315646 24.1078064,44.1092886 23.9628372,44.2887696 C23.9229707,44.338095 23.9178968,44.4687279 23.9575821,44.4976867 C24.0634096,44.574789 24.1753909,44.5729186 24.2899419,44.5555208 L24.4632477,44.5257094 C24.4923039,44.5214435 24.5214087,44.5181897 24.5505061,44.5169396 C25.4926247,44.4765245 26.437099,44.4480431 27.3797612,44.4629998 C28.0603916,44.4738196 28.3410882,44.9497306 28.5145076,45.4285056 C28.8318089,46.3045892 29.0275174,46.3765089 29.8580096,45.8153126 C30.0915913,45.9876335 29.8937083,46.4425414 30.4688736,46.4479513 C30.3326026,46.0726005 30.6308767,45.7190484 30.4498464,45.3319232 C30.3697509,45.1607162 30.4748536,45.0033521 30.6914013,44.9939644 C30.9050497,44.9848949 30.9124793,45.1570566 30.8695322,45.2821205 C30.7011867,45.7750567 31.2219886,46.1828668 31.0788315,46.6686429 C30.8207863,47.3359684 29.7867935,47.1033432 29.4805461,47.7240483 C29.4671364,47.7515751 29.2612802,47.7553938 29.2402596,47.7229345 C28.8865348,47.1743082 27.9831955,47.3833845 27.6445112,46.8240976 L27.6387124,46.8190059 C27.5368716,46.2127803 27.2137715,45.7807848 26.455945,46.0504836 C25.7129778,46.3147726 25.0337972,45.7938322 24.3114881,46.0297988 C24.0630472,46.1109471 23.7539003,46.0627354 23.6942818,46.3795321 C23.6290456,46.7252876 23.8785739,46.8451007 24.1998618,46.9149519 C24.470773,46.7216279 23.8457746,46.5515347 24.1697807,46.401649 C24.4049933,46.2928148 24.7001868,46.2706979 24.8893716,46.5203483 C24.9645744,46.6194765 24.9580507,46.7906836 25.1803973,46.7281516 C26.0353531,46.4883663 26.3410569,46.6428663 26.7482391,47.3537892 C26.9274573,47.666608 26.8069517,47.8734567 26.6248341,48.0683717 C26.3644332,48.3472992 26.2270749,47.9404438 26.0725015,47.9433079 C25.3574409,47.9566735 24.6342258,47.9942245 23.9334809,48.1124464 C23.2655354,48.2249403 22.648329,48.1057636 22.0168069,47.9851549 C22.3848475,47.6718588 21.7489763,47.1849689 22.2273747,46.8509879 C22.4999168,47.0944328 22.3181617,47.4858541 22.6939943,47.6225334 C22.7861986,46.5272346 22.4079897,46.1779221 21.3927445,46.4479677 C21.391353,46.4588719 21.3905228,46.4694323 21.3896474,46.4800659 L21.3510638,46.4593025 C21.3038327,46.4724226 21.255264,46.486835 21.2053418,46.5025275 C21.1911038,46.6100433 21.2725334,46.6837676 21.3688978,46.750106 L21.4865368,46.8278566 C21.6200897,46.9183728 21.7196201,47.0151143 21.563597,47.1905379 C21.3967012,47.3781337 21.0714265,47.4904684 20.750501,47.3615858 C20.5892228,47.2968263 20.4368239,47.1848098 20.2699281,47.1660343 C19.7357166,47.1063664 19.1935318,47.076612 19.2868557,47.7923084 C19.1879142,47.7872167 19.089154,47.7818068 18.9911186,47.7767152 C18.9262448,47.7315267 18.8135313,47.6933392 18.8026586,47.6393995 C18.7482951,47.3668366 18.5560297,47.2311121 18.2660914,47.2013577 C18.1234779,47.1867192 18.033597,47.3109875 18.0760005,47.4048649 C18.1869019,47.6513331 18.1202161,48.0122044 18.5451571,48.078396 C18.7158583,48.1051272 18.8983383,48.0726678 19.0753819,48.0670988 C19.1583768,48.1958223 19.3645955,48.4192189 19.1650816,48.4564516 C18.8026586,48.5240752 18.320636,48.6165207 18.0484563,48.3312286 C18.0006,48.2810453 17.9537445,48.2336616 17.9077832,48.189597 C17.6803534,48.2085631 17.4513489,48.2373368 17.2339467,48.1999119 C17.0901185,48.1752471 16.9816708,48.1272487 16.8983604,48.0628021 C16.827074,48.1459692 16.7550906,48.2573948 16.6824841,48.3988522 C16.5768378,48.6042689 16.1265272,48.6036324 16.1754543,48.3743486 C16.3072494,47.7599763 15.9996936,47.7372882 15.6599679,47.7621048 L15.5135887,47.7740624 C15.4162724,47.7818577 15.3210783,47.7871849 15.2375036,47.7773516 C15.0412515,47.7544391 14.8299589,47.8044011 14.6048943,47.5840277 C15.1407367,47.4102748 15.5903224,47.2468644 16.1027885,47.281074 C16.2944551,47.2939436 16.463692,47.2646104 16.529917,47.1490754 C16.5179195,47.1039364 16.5036261,47.0609327 16.4867592,47.019749 C16.4602563,46.9549024 16.4664351,46.8817818 16.4975388,46.8185533 C16.396247,46.6861762 16.1897781,46.7871866 16.0138136,46.7599745 C15.8843562,46.7399049 15.7499117,46.7548998 15.6139304,46.7772969 L15.409237,46.8129863 C15.1017617,46.8644744 14.7952388,46.8834154 14.5289666,46.554717 C14.3479363,46.3313204 13.9365863,46.780182 13.409442,46.4657721 C14.8957387,45.9532648 16.2510195,46.3104765 17.5530241,46.2609919 C17.3674635,45.7134794 17.2909923,45.7015459 16.4559697,45.8202452 C15.8470991,45.9068034 15.0834738,46.151203 14.9491961,45.2650952 C14.8698255,44.7425637 15.1208034,44.179458 14.6438547,43.7068884 C14.5691956,43.6327411 14.7288429,43.4806278 14.8408316,43.5297942 C14.9348804,43.5710048 15.0399025,43.5630844 15.1464415,43.5484105 L15.3062054,43.5266318 C15.4647428,43.5103822 15.6160544,43.5266119 15.7282243,43.7183447 C15.9358927,44.0739652 15.8713814,44.3648262 15.6033696,44.6773268 C16.1183727,44.6447084 16.6277582,44.6273649 16.215502,43.9530383 C16.1002515,43.7648061 15.9581817,43.5528657 16.2613486,43.4075943 C16.5956838,43.2472071 16.9811206,43.274893 17.3161807,43.3646335 C17.6173542,43.4451453 17.5367151,43.7056155 17.4220082,43.9010079 C17.2825271,44.138452 17.3123937,44.3861833 17.3181819,44.6329794 L17.3180438,44.7497495 L17.4038151,44.7666603 C17.5000199,44.7807181 17.6018585,44.7833486 17.7047689,44.7838017 L17.9106673,44.7845453 C18.2517077,44.7900817 18.5708664,44.8399417 18.6991868,45.2767106 C18.8397163,45.1182327 19.0257837,45.1310165 19.2223087,45.1730395 L19.4210202,45.2195487 C19.6871519,45.2805293 19.9510865,45.309329 20.1296704,44.9693016 C20.2208198,44.7953897 20.6415929,44.7253794 20.9505585,44.8170292 C21.1942879,44.8892671 21.4595816,44.6644386 21.3954327,44.6391394 C20.8916647,44.4407238 21.6023762,43.7710115 20.9675924,43.7546227 C20.5921221,43.7447576 20.2110344,43.5377499 19.8228793,43.7329832 C19.6155734,43.8373622 19.3776427,43.8322705 19.335964,43.5797561 C19.2935605,43.323582 19.5360215,43.1272349 19.7732274,43.1980408 C20.7048357,43.4761726 21.6525718,43.2575495 22.5829116,43.3393343 C23.1655066,43.39041 23.695369,43.1829249 24.2953603,43.2300227 C24.7028085,43.2618818 24.4848346,42.9780188 24.3922145,42.7367526 C24.2865521,42.7505745 24.1820398,42.7446496 24.0826793,42.6759365 C24.0408922,42.6469588 24.0464257,42.5162409 24.0882128,42.4668833 C24.2408598,42.2872855 24.4478872,42.3095761 24.6823912,42.3640286 C24.7596217,42.3819348 24.8437644,42.3950256 24.9313729,42.4036418 C25.2559656,42.3391388 25.5778863,42.3147318 25.8981257,42.3223732 C26.0339469,42.2798579 26.1239347,42.2217682 26.1374986,42.1527464 C26.2974666,41.3361764 26.8238883,41.4406507 27.3943511,41.5418311 L27.5969946,41.5758999 L27.5969946,41.5758999 C27.9965481,41.636562 28.139273,41.361115 28.2938281,41.1530172 C28.387706,41.0267574 28.2445994,40.9231065 28.0751613,40.8661065 C27.7577831,40.7597766 27.4394798,40.6728387 27.1199134,40.6101841 C27.1144733,40.7499822 27.0524583,40.9090396 26.8952789,41.1017445 C25.9875553,42.2145292 24.8567828,42.1534119 23.7226291,42.0531507 L23.3646191,42.0215116 C23.1262125,42.0013161 22.8886808,41.9846798 22.6540738,41.9821909 C22.4925572,41.9804829 22.3587864,41.9858615 22.2496327,42.0040817 C22.5927078,41.9731367 22.9387125,42.037653 23.2854611,42.1255609 C22.8150207,42.4404098 22.3529878,42.9889462 21.850131,42.4020255 C21.8437381,42.4477344 21.8414617,42.5014541 21.8424665,42.5610226 C21.711416,42.5548003 21.5801765,42.5487419 21.4491259,42.5425196 C21.4031178,42.431336 21.356657,42.3203967 21.3081368,42.2101349 L20.8763211,42.2218754 L20.8763211,42.2218754 C20.8034793,42.180038 20.7304227,42.1382006 20.657581,42.0963632 C20.9244525,41.5987249 19.8651317,41.2666719 20.191308,40.6646921 L20.2957523,40.7228008 C20.231255,40.6650874 20.163077,40.6084128 20.0908451,40.5528778 C19.8040067,41.3350783 20.7351457,41.7665413 20.5004254,42.4131626 L20.1885699,42.3293742 L20.1885699,42.3293742 L20.101393,42.3373489 L20.101393,42.3373489 C19.8780693,42.3458522 19.7513751,42.2641349 19.7063447,42.1037104 L19.6697764,42.1132518 L19.6697764,42.1132518 C19.7096637,41.6747782 19.4785937,41.4540834 19.2055398,41.247712 C18.9636366,41.1179972 18.6713449,41.0288875 18.3205291,40.9825395 C18.6502327,41.6065643 19.6621926,41.642424 19.5781616,42.4192211 C18.8449203,42.3583087 17.939085,42.757678 17.6069265,41.7156172 C17.4741764,41.2988911 17.0598752,40.9303055 16.7090222,40.5898837 C16.2565766,40.1505611 15.8949601,39.7114022 16.1151402,39.0888511 C16.2365603,38.7454819 15.758811,38.8543711 15.6834663,38.6136688 C16.2688508,38.2791417 16.9235373,38.1276794 17.6307195,38.0970595 C18.0580843,38.0785916 18.4138903,37.7183388 18.755974,37.6426814 C18.7534368,37.6452909 18.7507316,37.6429932 18.7480244,37.6406936 C19.521307,37.3826679 19.9243044,37.4049117 20.1335334,37.5920503 C20.1808597,37.5440479 20.2265745,37.4835136 20.2708036,37.4093386 C20.2800564,37.3934556 20.4135619,37.4006602 20.4424534,37.430789 C21.0922302,38.1093402 21.1607769,37.4566604 21.4595118,36.9074662 C21.3728371,37.6508596 22.1523427,37.5318184 22.2850928,37.9601703 C22.3126625,38.0499015 22.4486227,37.9888253 22.4963977,37.9187433 C22.934303,37.2773617 23.6932257,37.4551867 24.32884,37.4353738 L24.372111,37.435727 C24.2591399,37.4056965 24.1429068,37.3664741 24.0229562,37.3155471 C24.320632,37.2737447 24.5944182,37.2349126 24.8310943,37.1682125 C24.835148,37.1382786 24.8368693,37.1028178 24.8366138,37.0630221 C24.8345367,36.7117932 24.658166,36.6310679 24.3007038,36.7476529 C24.0944974,36.8149513 23.7228726,36.8601444 23.8244651,36.6104363 C24.1364184,35.8428088 23.4241377,36.0813825 23.1461745,36.1031603 C22.2112588,36.1768447 21.2701116,35.6001416 20.325943,36.1716049 C20.0725282,36.3251959 20.0136121,35.9621775 19.9507305,35.7758379 C19.8721756,35.5315333 20.1210585,35.0273684 19.6217821,35.1293803 C19.3188929,35.191439 18.7365297,35.2217314 18.6262508,35.6885629 C18.5165384,35.6934752 18.4066372,35.6983875 18.2963583,35.7029723 C17.9458358,35.116199 17.3777768,35.0463217 16.7835348,35.0386616 L16.4851178,35.0379113 C16.3855087,35.0379861 16.2860583,35.0376842 16.1876523,35.0349006 C16.1957148,33.8054168 16.2108521,33.7089143 17.6065941,33.8890724 L17.6964635,33.8919992 L17.6964635,33.8919992 L17.8999596,33.8923003 C18.1288246,33.8925517 18.3554841,33.9004782 18.5567571,33.996737 C18.9622514,34.040695 19.3678198,34.0747698 19.7735843,34.10264 C19.9434707,34.0674721 20.1106421,34.0499066 20.2374649,34.0285528 C20.487399,33.986587 20.582981,34.0474199 20.6156787,34.1505078 C21.4489637,34.192462 22.2843358,34.2098185 23.1223814,34.212583 C23.2045561,34.2128703 23.2866017,34.2433518 23.3686314,34.2781753 L23.6557317,34.2723509 L23.6557317,34.2723509 C24.0863408,34.4560173 24.5397013,34.5460531 25.0368951,34.5187646 C25.2155676,34.5089603 25.5013184,34.4803646 25.4462138,34.73838 C25.6714175,34.7816738 25.8925784,34.8539615 26.1017997,34.9908537 C26.1982937,35.0542223 26.4199845,34.9287951 26.4475542,34.7860112 C26.4972175,34.5276246 26.2387041,34.5562797 26.0772513,34.5661042 C25.6274494,34.5934493 25.2173026,34.5032269 24.8275498,34.3191797 C24.7769424,34.1734484 24.7263349,34.0278808 24.6757275,33.8823133 C24.948781,32.9537264 23.9685453,33.1292589 23.4809766,32.932931 L23.4901787,32.9014589 C22.615469,32.9063858 21.7566767,32.6692998 20.8826028,32.6661809 C20.7850783,32.5391777 20.6687066,32.4473305 20.5416418,32.375419 C20.6391217,32.4841279 20.7284713,32.6184712 20.8054651,32.792911 C20.3299324,32.7148925 19.8542578,32.6373754 19.3786931,32.559915 C19.1905235,32.6901079 19.0030502,32.9171954 18.8143089,32.4938677 C18.8776038,32.3027047 18.9162991,32.0710422 18.9650492,31.8558789 C18.4764434,31.8970697 18.4728881,32.2795979 18.2807166,32.5288481 C17.6600191,32.5099478 17.0393216,32.4911602 16.4186241,32.472205 C16.4169243,32.5088448 16.4151808,32.543999 16.4125325,32.5728456 C16.1485402,32.6396739 15.8833322,32.7124039 15.6881169,32.4301628 C15.7726986,32.2636995 16.0660426,32.2310664 15.9892765,31.961323 C15.9517618,31.8297493 15.8456438,31.7636153 15.7306683,31.8035387 C15.4447924,31.9024793 15.3965096,32.1623287 15.3612528,32.4214838 C14.6951934,32.0810932 14.4136595,31.5528891 14.5699707,30.8090985 C14.5816072,30.7545944 14.6036645,30.6945356 14.591507,30.6440238 C14.3120573,29.4815581 14.5592026,29.2685754 15.9043474,29.5065537 C16.0113337,29.5256475 16.126483,29.4973539 16.2906097,29.487807 C16.0115074,28.9885907 15.3452743,28.9957075 15.164127,28.4756616 C15.2428375,28.3232542 15.3034995,28.2076768 15.3571772,28.1251421 L15.3730239,28.1283554 C15.0480767,28.1117967 14.9358811,27.8627799 14.722557,27.7314251 C14.1148311,27.3578999 13.6307494,26.624383 12.6415969,27.0802239 C12.4395305,27.005073 12.3240912,26.8792909 12.316268,26.6909361 C12.5766427,26.3226949 13.1211371,26.4647918 13.6025837,26.2297895 C13.467155,26.1933146 13.3247948,26.153645 13.170876,26.1205049 C13.2582097,26.0740318 13.3408986,26.0383389 13.4195927,26.0116786 C12.0588537,25.8760907 11.1113109,24.937931 9.7392053,25.0882486 C9.67078977,25.0957407 9.59071606,25.0993801 9.52111419,25.0871058 C9.53155317,25.2449943 9.60023117,25.3798377 9.87078509,25.4069102 C10.2295264,25.4427007 10.6084443,25.4248911 10.9320782,25.8769818 C10.2026914,25.7079615 9.6510611,26.0247675 9.04011141,25.9958269 C8.69791501,25.9795584 8.64061326,26.1864242 8.60550584,26.368288 C8.55667829,26.6227603 8.82422099,26.6294389 9.01024993,26.608718 C10.6223662,26.4290805 11.6800275,27.6947633 13.3944395,27.6242097 C13.2648587,27.7511429 13.124361,27.8318304 12.9808166,27.8867156 C12.9811988,27.8935561 12.9839741,27.9003744 12.9865049,27.9072757 C13.2823415,28.0796648 13.552396,28.3006794 13.8471412,28.4589653 C14.0984217,28.593935 14.2305799,28.8502791 14.6131196,28.8673141 C14.5254637,29.0696048 14.2786783,29.2599383 14.0557175,29.1777116 C13.6253391,29.018691 13.1885733,28.8629954 12.777364,28.6804249 C12.7244179,28.952433 12.6720588,29.2072138 12.043967,29.1285142 L11.9835114,29.116913 C12.0373191,29.146429 12.0788193,29.2024016 12.0953135,29.3066497 C12.1490327,29.6470332 11.9204791,29.6859404 11.7377351,29.7639721 C11.5655372,29.8376566 11.213067,29.5781305 11.2676101,30.0782725 C11.3028736,30.4030062 11.5902546,30.4090922 11.8161716,30.3995285 C11.9255874,30.3951813 12.0356622,30.3812703 12.1444188,30.3906168 C12.3940645,30.4123526 12.7321986,30.1793443 12.8262895,30.7064387 C12.9235113,31.2513566 12.5496194,31.4537174 12.3126619,31.7130261 C11.9776587,32.0801447 11.9270704,31.5756555 11.7932669,31.3517762 C11.5942094,31.0190003 11.3513197,30.9774848 11.0614669,31.1270275 C10.8093494,31.2572253 10.7170711,31.3915528 10.8927295,31.7530201 C11.0201065,32.0147198 10.8546647,32.065799 10.6585733,32.1116617 C9.88442422,32.2931561 9.16481823,31.6167363 8.3817709,31.8908254 C8.2390691,31.9408179 8.06637684,31.6988978 8.14876819,31.444371 C8.23626779,31.1739769 7.86715458,30.789035 8.27416781,30.6210168 C8.6035684,30.4851677 8.86260678,30.153696 9.26418219,30.1949941 C9.41114351,30.2101011 9.55980357,30.2269349 9.70929486,30.2335722 C9.4971584,30.0767905 9.27595673,29.9539385 9.07570596,29.8195802 C8.71390794,29.778993 8.35485775,29.6526112 8.01628291,29.2846965 C8.16274663,29.1923652 8.30759722,29.130273 8.45101841,29.0903923 C8.44100002,29.0740981 8.43372992,29.0519795 8.42694228,29.0292871 C8.29236386,28.5799364 8.55062529,28.3523498 8.67995777,28.0322901 C8.87123264,27.5581086 9.13616499,27.6653517 9.41363839,27.8012759 L9.55313724,27.8690691 C9.59979659,27.8907575 9.64652135,27.9106837 9.69302859,27.9262885 C9.95673772,28.0144805 10.2295264,27.9531742 10.4561104,27.8100121 C10.5077627,27.7773041 10.5444842,27.6497254 10.5126051,27.6122225 C10.3455422,27.414604 10.107861,27.4401197 9.83910771,27.404843 C8.82240509,27.270757 7.72560108,27.3317207 6.83520444,26.7208845 C6.86456498,26.8101689 6.87865507,26.913829 6.88958926,27.0202092 L6.9019708,27.1484252 C6.94750119,27.6178675 7.02574878,28.04971 8.16868084,27.4510795 C7.5282732,28.2458345 8.05468263,28.9416089 8.04620843,29.6497132 C7.5082983,29.5873794 7.83616925,28.9842493 7.31702342,29.0010315 C7.2589146,28.9107846 7.22622839,28.7864596 7.13664396,28.7386818 C7.04201535,28.6878216 6.92620124,28.7917683 6.97946766,28.8686579 C7.03354115,28.9464038 7.17598847,28.9794544 7.27949481,29.0321983 C7.28010011,29.352258 7.09790474,29.7212942 6.78032389,29.3412982 L6.71815627,29.2742984 C6.76270639,29.5962808 6.71955706,30.000431 6.82837496,30.2947518 C6.39206891,30.4405102 6.38365012,29.8032451 6.17162462,29.6120382 L6.12504382,29.5797495 L6.13055168,29.5111822 C6.13256472,29.4719149 6.13344388,29.4301995 6.13391194,29.3873292 C5.90892612,29.609663 5.66706293,29.8345818 5.73309883,30.2205331 C5.76141071,30.3847306 5.35485205,30.0143399 5.13911549,29.9083595 C5.41375522,29.6255239 5.19483148,29.4707879 5.02243998,29.2863193 C4.86435969,29.3369206 4.69468984,29.3411199 4.50863213,29.1828952 C4.1804518,28.9038548 4.32231803,28.6471008 4.4807567,28.3864972 L4.56609572,28.243811 C4.59327283,28.196017 4.61827218,28.1479386 4.63836815,28.0994187 C3.43240833,28.2687815 3.40577512,28.4264995 4.29758412,29.7682157 C3.35815817,30.1093387 3.35815817,30.1093387 2.20687713,29.5887494 C2.41106508,29.4673357 2.59447105,29.3459219 2.79200069,29.2442015 C2.94675578,29.1645719 3.24839706,29.207041 3.1910953,28.9585623 C3.13843418,28.730462 2.92395614,28.767965 2.71169752,28.8177977 C2.54826646,28.8561569 2.34347322,28.853417 2.34649972,28.6527161 C2.34791209,28.5686341 2.48813997,28.4840383 2.56965374,28.4030387 C3.23528222,27.7408286 4.05909583,27.3969656 5.10485286,27.4834451 C5.18293659,27.4899525 5.27009982,27.4175152 5.35443832,27.3812109 C5.2113857,27.0781047 4.90934088,27.1719477 4.65854482,27.1341023 C4.26631028,27.0746797 3.96386193,26.6953688 4.22333396,26.5648789 C4.95635254,26.1963565 4.61294554,25.6404904 4.69244164,25.1885709 C4.79736034,24.5936606 4.90712145,24.1376312 5.561451,23.7182486 C5.98576646,23.4463092 6.02410214,23.4201084 6.33805119,23.7237285 C6.67782638,24.052008 6.94355318,23.759519 7.14188989,23.5380973 C7.33457713,23.322498 7.17881321,23.149539 6.92478888,23.078643 C6.55676634,22.9760663 5.95953678,23.0250428 5.96437918,22.6258672 C5.96922158,22.2133345 6.65401791,22.0205109 6.9780553,21.8982409 C7.99173141,21.5160188 7.84121342,21.1975003 7.27485417,20.5770743 C6.72524157,19.9751429 6.27388936,19.3201251 5.48699907,18.9039961 C5.2295447,18.7678551 5.2204652,18.590615 5.4783231,18.4330682 C5.58404887,18.3681658 5.80740466,18.2976123 5.79852692,18.2623355 C5.60072345,17.4850293 6.10675521,17.4524324 6.61707815,17.4260121 L6.81977801,17.4140228 C7.18573401,17.3862276 7.50383781,17.3087984 7.49820996,16.8904799 C7.46794495,16.6704282 7.16287363,16.6462824 6.80917653,16.750914 C6.6207264,16.8067404 6.38062397,16.9464775 6.24564202,16.8135902 C5.69804708,16.2729651 5.11272176,15.7385048 4.71423244,15.1211612 C4.57440809,14.9048769 5.23035177,14.8968283 5.55055559,14.703491 C5.20674506,14.5284771 4.88694478,14.3656217 4.56532859,14.2017388 C4.63777837,13.8607739 5.24524192,14.0259852 5.28478893,13.696222 L5.28204382,13.6077495 L5.36475207,13.6125449 C5.57463204,13.621149 5.77918253,13.6180023 5.88811135,13.4061276 C6.66134464,13.1831526 7.42924044,13.2555185 8.23822753,13.3637157 C8.48124548,13.0250503 8.87348119,12.8161646 9.57892596,12.8499641 C8.59950474,12.7224305 7.69717024,12.5549333 6.78682178,12.8130255 C6.595059,12.7961484 6.40329623,12.7791121 6.21172426,12.7620758 C6.08502726,12.6598579 5.95985673,12.6477573 5.83716672,12.7666931 C5.59693852,12.7687629 5.35671033,12.7708328 5.11629133,12.7733802 C5.07318763,12.2239829 5.61275657,11.8004569 5.64946511,11.2677608 L5.64821221,11.2354432 C5.36510122,11.3143465 5.08372184,11.393017 4.83137921,11.5191287 L4.61504382,11.6457495 L4.62309907,11.8312212 C4.58667839,12.3770776 4.04960459,12.8111749 4.09249668,13.3744132 C3.49534928,13.3922005 2.89592341,13.4421356 2.30067474,13.4187999 C1.78099511,13.3984016 1.61884443,12.8233323 1.07448144,12.7538149 C0.970621468,12.7405968 0.909292816,12.4019848 0.613282389,12.4894527 C0.281196284,12.587691 0.720560061,12.9076997 0.422840786,13.0273155 C-0.13006644,12.4427814 -0.0875351146,12.039058 0.693788111,11.8321375 C1.68093257,11.5707127 2.71725387,11.4378789 3.7399044,11.2872577 C4.08395244,11.2365067 4.40350699,11.1882035 4.75439042,10.9491353 C3.95142179,10.6573578 3.20123757,10.9045853 2.37187673,10.9811198 C2.53554638,10.5137536 3.37288185,10.131734 2.65649484,9.78953192 C2.23972583,9.59060756 1.75308393,9.29099713 1.18194899,9.35056021 C1.05739297,9.36345194 0.929419247,9.35708767 0.803344248,9.35268163 C0.6755604,9.34811241 0.525371659,9.33032508 0.517397035,9.19961269 C0.508093308,9.04719649 0.653725122,8.90750883 0.806382199,8.95205875 C1.19182233,9.06449426 1.44928875,8.85985837 1.76523573,8.76455745 C2.05232218,8.67790542 2.23763724,8.74432232 2.03884127,8.34875823 C1.83928581,7.95205182 2.17061242,7.70971985 2.71174759,7.88547172 C3.36281863,8.33619286 4.09040808,8.3309709 4.80888368,7.86915307 C4.52198711,7.62975846 4.12971158,7.82231854 3.81832153,7.68866879 C3.25895865,6.68001298 4.12249645,6.27106758 4.89679441,5.85282056 C5.21141229,5.68278022 5.35875296,5.43930594 5.55868816,5.20007452 C5.72691474,4.99886555 5.34849987,4.07017113 6.30032814,4.72291717 C6.41368171,4.80075713 6.51241515,4.58045534 6.54317441,4.44778471 C6.56861726,4.33796019 6.70152765,4.18587036 6.76266643,4.25375595 C7.4839901,5.05973412 8.08056789,4.21589668 8.73144906,4.163677 L8.74363213,4.16306626 C8.90668065,4.06376916 9.07064814,3.98491357 9.23661585,3.96435329 C9.26569603,3.84591543 9.32815174,3.74312262 9.49150662,3.7426558 C9.83479517,3.74183987 9.60903738,4.13903583 9.95897145,4.24184334 L9.99504382,4.12874946 L9.95241648,4.14360673 C9.84046844,4.16305631 9.84147458,4.02402734 9.79449004,3.95968689 C9.83363937,3.93582987 9.87257477,3.91082901 9.9110823,3.88517453 C9.96287785,3.91917996 10.0213424,3.96425725 10.048933,4.00861122 C10.2507326,3.61838736 10.6260822,3.61616968 11.023362,3.6525487 L11.2392456,3.67392368 C11.4194668,3.69147643 11.5986585,3.70414379 11.7631351,3.68015537 C12.5461671,3.56592481 13.3366042,3.46295412 14.1524842,3.74396129 C14.3493814,3.58436489 14.1564715,3.32816207 14.234319,3.10427018 C14.643683,3.02316648 14.585772,3.43015364 14.8253905,3.51860072 C14.8905166,3.59986761 14.9499465,3.68570371 15.0257054,3.75881127 C15.0376674,3.77023432 15.1631727,3.73155912 15.170198,3.70381741 C15.2150078,3.524965 15.0501989,3.49183814 14.9058962,3.44843053 C14.892795,2.8777673 15.2807035,2.94043092 15.6209541,3.17231895 C15.8934204,3.35769883 15.9868374,3.607211 16.1820258,3.11047126 C16.2517088,2.9334139 16.841831,2.89343321 16.9918298,3.13560199 C17.1894866,3.45446843 16.6234782,3.39115206 16.5023399,3.5877918 C17.7070776,4.22356645 17.7070776,4.22356645 17.8718865,2.93112929 C18.626058,4.18750223 19.5888989,4.66873925 20.92218,4.45561766 C21.2073677,4.78704946 21.5394538,5.05728632 22.0481209,5.09938844 C22.6490657,5.29162215 22.6490657,5.29162215 23.565198,5.15601416 C23.1670365,4.86195207 22.1052723,5.00294522 22.5676106,4.3111976 C22.6845273,4.13607095 22.8658555,4.07110964 23.0687149,4.07840379 C22.9825066,3.96979691 22.9006492,3.85306527 22.8213311,3.73200321 C23.7042619,3.08625084 24.0015486,3.43494369 24.1777751,3.98908243 C24.3064514,3.68483661 24.4426083,3.40065503 24.8715173,3.3676532 C25.4369561,3.32408241 25.1172116,3.79520186 25.1922111,4.05727939 C26.0918246,4.02121517 25.7969534,3.22453863 26.2522664,2.876625 C26.5351756,3.15273657 26.8856793,3.38658284 26.8184647,3.82180126 C26.5454287,3.96671088 26.2178996,4.14540011 26.3175823,4.43636166 C26.4349232,4.77823739 26.860996,4.56707405 27.142766,4.63006404 C27.9316841,4.80630547 28.1625684,4.3511783 28.3404785,3.83975178 C28.3279203,3.77470328 28.3173114,3.71418284 28.3090871,3.65808652 C28.0983959,3.65754197 27.8411661,3.77697602 27.7620473,3.46569584 C27.6833429,3.15624137 27.941601,2.96591472 28.1566166,2.81170845 C28.3111824,2.83619391 28.4965716,2.96556741 28.5679442,2.67677797 C28.6111867,2.50173302 28.1832504,2.32686172 28.527395,2.17421836 C28.7567749,2.07262977 28.8048055,2.41698903 28.9165777,2.58421948 C28.9820721,2.68205124 29.0598551,2.75154059 29.1500495,2.7913685 C29.2176983,2.58571618 29.3359781,2.39769465 29.4977046,2.21012125 C29.5908746,2.62859118 29.6592516,2.98818507 29.6065883,3.29781214 L29.2843321,3.2176848 C29.8752138,3.38021856 30.558563,3.49134858 31.1929254,3.65469827 C31.0531796,3.87140996 30.9134338,4.08795846 30.7552704,4.33355415 C30.8726493,4.33133482 30.9882965,4.33785575 31.1037873,4.3476378 L31.4513654,4.38128817 C31.8016246,4.41376359 32.1646522,4.42627673 32.5829782,4.27089053 C32.5186779,4.2500182 32.4551138,4.23109457 32.3930301,4.21300463 L32.5094425,4.17131337 C31.895815,4.4307994 31.4173794,4.22294913 30.9008427,4.23422402 C31.0400453,3.98830055 31.1630381,3.77129963 31.286031,3.55429872 C31.3988302,3.56083489 31.5116294,3.56720766 31.6245956,3.57374383 L31.6400438,3.62574946 L31.7140705,3.56928516 C32.194555,3.2674931 32.913856,3.40167017 33.3555673,2.91937986 C33.5444899,2.7132753 34.0831567,3.11079764 34.4629007,3.22225402 C35.1489082,3.42362618 35.218971,3.24493695 34.9062518,2.75488786 C35.1819459,2.73954833 35.3794128,2.80906578 35.468083,2.94369465 C35.9239657,3.63364721 36.582062,3.51060459 37.3149678,3.37434385 C37.9757223,3.25146441 38.6972359,3.20838317 38.8048933,4.05515797 C38.8278678,4.23662137 38.944829,4.34008161 39.2110295,4.49543517 L39.2033251,4.40970046 L39.2033251,4.40970046 L39.1877081,4.23941147 C39.1313695,3.59304057 39.1466994,3.0462762 40.3071605,3.49493868 C40.4453873,3.54846386 41.0915216,3.39523172 41.4465823,3.28246985 C41.7976556,3.17101346 41.9444266,3.205609 42.1637288,3.39294711 C42.2702469,3.48400518 42.4164484,3.54046772 42.5448018,3.61259615 C42.7889472,3.08900794 43.1853226,3.113537 43.5955752,3.18502763 L43.819894,3.22566766 C44.0439258,3.26494063 44.2646023,3.29107579 44.4594709,3.22274358 C44.8052278,3.10149601 44.9531381,3.38576691 45.1612378,3.53606168 C45.4466154,3.74216624 45.6814871,4.07017113 45.9518648,3.46866565 C46.1793314,2.96295066 46.5440755,3.49363319 46.6048345,3.57897973 C47.1579316,4.35852169 47.262741,4.01990968 47.3876767,3.40012732 C47.440651,3.13690748 47.6840669,2.90224528 47.8391923,2.6576287 C48.5774146,3.11830422 47.6861555,3.92101866 48.4798204,4.39556503 C48.6714012,3.99167842 48.8870958,3.59366652 49.0488667,3.1801519 C49.1910809,2.81640917 49.5744324,2.70201543 49.6929125,3.00994837 C49.9412295,3.65497365 50.3998148,3.75480364 50.896256,3.75183186 C50.9117073,3.73453556 50.9323775,3.7180185 50.9548456,3.70178068 L50.988637,3.75020889 C51.0234429,3.74923639 51.0583805,3.74789881 51.0933916,3.74634497 L51.4597344,3.72851641 C51.6620192,3.72123555 51.8599647,3.7241638 52.0421986,3.76648103 L52.1276944,3.76458909 L52.1276944,3.76458909 L52.313852,3.71209403 C52.3440357,3.70602043 52.3729556,3.7039806 52.3993478,3.7100185 C53.4337704,3.94663894 53.4322514,3.95088179 53.3844037,2.96344022 C53.3832645,2.93961499 53.4102263,2.91481064 53.4552259,2.83631793 C53.5854781,2.97192592 53.6847812,3.11014489 53.8224384,3.2091991 C53.9895257,3.32946756 53.9008555,3.71262948 54.3054727,3.57995885 C54.5786985,3.49053265 54.5450911,3.30270497 54.4680031,3.10296468 C54.4004087,2.92786556 54.536357,2.85051515 54.7136975,2.84235583 C54.9271136,2.83256464 55.0924921,2.93439302 55.1452765,3.10329106 C55.3543256,3.771703 55.8012842,3.81837434 56.4054569,3.4778041 C56.84577,3.22943423 56.9122252,3.6653054 57.1457677,3.78182056 C57.4879171,3.95202409 57.6952573,4.25424551 58.010065,4.51224338 C57.910762,4.02105199 58.5362003,3.42101519 57.5951947,3.09611085 C57.3726648,3.01925001 57.4074113,2.83028003 57.6168401,2.7229033 C58.0444319,2.50358063 58.621263,2.78262957 58.61082,3.22698643 C58.6026555,3.566088 58.8903116,3.44940964 59.0648039,3.49118539 C59.2510683,3.53557212 59.482902,3.74494041 59.6340401,3.47633542 C59.742457,3.28361215 59.5379649,3.22355952 59.3701181,3.12809541 C58.9448048,2.886253 59.1230946,2.73595822 59.5189777,2.7036473 C59.5883592,2.69796457 59.6588076,2.68979733 59.7295395,2.68106943 L59.9418024,2.65512753 C60.4001532,2.60361227 60.8373818,2.60969026 61.0383333,3.20169252 C61.0964342,3.37238561 61.4015585,3.52480181 61.6783918,3.44092395 C61.9320608,3.3640631 61.9726934,3.1814574 61.8686435,2.97274185 C61.7757961,2.78621967 61.8897193,2.56673381 62.0588953,2.59414915 C62.7198397,2.70087312 63.3703411,2.86161184 64.0136274,3.03328404 C64.1229936,3.06249443 64.1569807,3.26598801 64.3641311,3.21099415 C64.657863,3.13315419 65.1074799,3.16481237 65.2212132,3.26582482 C65.37425,3.07098013 65.5120971,2.86536513 65.6845009,2.68390173 C65.8382972,2.5221839 66.0526626,2.47159608 66.2780407,2.58827443 C66.4624064,2.68357535 66.4785455,2.80612842 66.4316471,2.99803576 C66.3031038,3.52382269 66.5784182,3.84693198 67.2023375,3.9386428 C67.3737188,4.20380331 68.0251667,4.57683663 67.2144124,4.62754088 C67.2591888,5.00617077 68.1296084,5.02304868 68.0381422,5.48072237 C68.013337,5.60459391 68.2516571,5.68913862 68.4071663,5.62656598 C68.5759604,5.55871925 68.5326349,5.44979181 68.4592153,5.34351572 L68.4264379,5.29825865 C68.2924902,5.11945694 68.1621679,4.93794852 68.046347,4.75054904 C67.8814882,4.48290374 67.7780699,4.24471375 68.3382843,4.24503218 C69.4663455,4.24566905 68.7225731,3.84555445 68.5372978,3.56724155 C68.5311919,3.45467448 68.5252769,3.34210742 68.5203158,3.23017723 C68.8498425,3.43652364 69.1662034,3.65847341 69.5113764,3.84300696 C69.7590461,3.97531705 69.939742,4.3518674 70.2986532,4.16319418 C70.936336,3.82788126 71.51296,4.07657964 72.1122902,4.19583385 C72.3941147,4.25187855 72.7058962,4.32368583 72.9430715,4.17545396 C73.5317164,3.80766059 73.9721029,3.72614102 74.0625463,4.51602106 C74.5321266,4.32766628 74.151654,3.92500419 74.4584744,3.74874996 C74.9074474,3.83504607 75.1503469,4.17258803 75.5300562,4.36142047 C75.7076992,4.12116065 75.3558479,3.90589804 75.6065705,3.70878627 C75.9162531,3.67789799 75.8530954,4.16685619 76.3140893,4.03677516 C77.4824112,3.70735331 78.5232728,4.11431428 79.0359759,5.03459379 C79.1703052,4.91772785 78.9953336,4.61696522 79.3798132,4.64833115 C79.5767278,4.89304907 79.4496492,5.36210503 80.1006886,5.313862 C81.5010339,5.21037036 82.8903123,4.67571663 84.3141271,5.21005193 C84.3332079,5.21705752 84.3753767,5.2017726 84.3935035,5.18616924 C85.1897483,4.4994624 85.9900002,5.36513017 86.7910152,5.18298488 C86.8491425,5.16978427 86.9118113,5.18492313 86.9756698,5.20768866 L87.1039795,5.25725148 C87.231889,5.30470895 87.3556182,5.32743895 87.4483513,5.15973907 C87.5737126,4.93269433 87.7910438,4.69036467 87.600235,4.40982272 L87.5121008,4.28764994 C87.5089891,4.29361084 87.5059237,4.29956165 87.5029116,4.30550271 C87.3333859,4.63977807 87.0599758,4.27833851 86.8474504,4.3309367 C86.581207,4.39685746 86.3150481,4.33630033 86.0490936,4.25389137 L85.7832116,4.1680735 C85.3402033,4.02582061 84.8978736,3.91974417 84.4567771,4.33422409 C84.438702,4.35135311 84.3966535,4.36796306 84.3776271,4.36017714 C83.7354866,4.09755203 83.100391,4.07259856 82.4681328,4.13445341 C82.474425,4.14450979 82.4770021,4.15684101 82.4789833,4.16979803 C82.2111082,4.40722449 81.7232431,4.44856577 81.2950937,4.4913777 C81.1108828,4.50976763 80.9895463,4.45787323 80.9253979,4.37711278 C80.6754102,4.41792699 80.425985,4.4530421 80.1762066,4.47315945 C79.5270242,4.5254116 79.6537404,4.0158666 79.4573874,3.74976127 C79.0740045,3.71584927 79.248477,4.04268476 79.1145308,4.16950869 C78.6032901,3.16945093 77.5653973,2.72721086 76.4004079,3.08536303 C76.2650139,3.12699855 76.1749625,3.11025939 76.1073985,3.06678301 C76.1450753,3.46114544 76.0594422,3.67485376 75.6470714,3.37936281 L75.6186111,3.43797855 L75.6186111,3.43797855 C75.5041697,3.37600766 75.4021913,3.29925748 75.3032348,3.21973424 L75.2646639,3.26595766 L75.2646639,3.26595766 C74.6085581,4.26628495 74.5651877,3.54756065 74.5374425,2.78313898 L74.5500857,2.77236918 C74.2441404,2.96390273 74.6235278,3.40147126 74.1552869,3.60615436 C74.0651015,2.74780028 73.6259711,2.83638672 73.0390051,3.23606378 C72.8025064,3.39714575 72.4916142,3.31894054 72.2105936,3.25803737 C71.6129728,3.12861813 71.0379935,2.8583603 70.4021296,3.22274121 C70.0442421,3.42777035 69.8640616,3.01857717 69.6170983,2.87462422 C69.2729099,2.67409361 68.9574513,2.43307623 68.6288646,2.2086688 C68.4755114,2.10433752 68.3626845,1.98893293 68.3000875,1.8086457 C68.1927784,1.49980433 68.1954421,1.19476941 68.5200333,1.05842936 C68.9899866,0.861186133 68.9559292,1.30740568 69.0978665,1.52108584 C69.1410566,1.5861415 69.2023217,1.64116198 69.2552153,1.70068098 C69.7050005,1.53544653 69.2953611,1.23871659 69.4530903,0.977801865 C70.0248351,1.48457854 70.299577,1.2354292 70.4051738,0.549749461 Z M88.8444584,46.9474433 C89.0347769,47.3691984 89.1204203,47.8723959 88.847687,48.3374576 C88.4075752,48.2815468 87.9674635,48.2243432 87.5273518,48.1674629 C87.3504574,47.4318961 87.3132434,46.899612 87.898473,47.1642997 C88.0517475,47.2334611 88.2209951,47.235077 88.3785177,47.1975877 C88.5392689,47.159452 88.6295003,46.4713933 88.8444584,46.9474433 Z M61.8324294,46.6940505 C62.0140302,47.0587175 61.9111868,47.3537405 61.7777014,47.6483352 L61.6758076,47.8702825 C61.6425717,47.9449591 61.6113863,48.0206905 61.586217,48.098558 C61.4659782,47.6160296 61.1870777,47.1667491 61.406719,46.6688977 C61.4858587,46.4890698 61.7364678,46.5012126 61.8324294,46.6940505 Z M143.917084,46.7429242 C143.87996,47.2005601 143.58269,47.3378509 143.177897,47.3655951 C142.638907,47.4022059 142.268763,47.2420334 142.346312,46.5936204 C142.379036,46.3198969 142.114766,45.9017321 142.641657,45.8176415 C143.025275,45.7564327 143.880235,46.3573659 143.917084,46.7429242 Z M135.536058,46.5691708 C135.694996,46.5556083 135.889123,46.6051198 135.825001,46.7833939 C135.764788,46.9500662 135.585714,47.2124936 135.381616,47.0564424 C135.047514,46.8008781 134.637754,46.9811131 134.228973,46.7886228 C134.650071,46.4010278 135.120043,46.6046296 135.536058,46.5691708 Z M130.923846,46.2805255 C131.119784,46.2766038 131.217848,46.3883723 131.268696,46.5145204 C131.323176,46.6496558 131.296605,46.7893665 131.091492,46.8220473 C130.898039,46.8530942 130.795578,46.7452473 130.765949,46.6027588 C130.739569,46.4756302 130.720262,46.3297102 130.923846,46.2805255 Z M61.685602,46.2369863 C61.4436647,46.8157643 60.7728584,46.60628 60.3347853,46.7401081 C60.2922709,46.7531805 60.1009564,46.6077506 60.0803566,46.5221268 C60.0529633,46.4077438 60.1975998,46.3456501 60.3591105,46.3345386 C60.7772413,46.3052893 61.1953721,46.273262 61.685602,46.2369863 Z M82.6578818,46.3207929 C82.6774686,46.6206398 82.3295164,46.6763607 81.8479137,46.6520134 C81.7829718,46.6413796 81.7015554,46.6396131 81.6157353,46.6390388 L81.4418004,46.6372055 C81.2115961,46.6308163 81.0073026,46.5965188 81.0578203,46.3887691 C81.1246456,46.1129427 81.7355781,46.1418652 82.1091659,46.057712 C82.4401237,45.9831996 82.6454961,46.1338584 82.6578818,46.3207929 Z M56.8589786,46.2336934 C56.9043268,46.2766687 56.817753,46.4230789 56.747375,46.4341904 C56.1660938,46.5263505 55.8218599,46.2222551 55.3312751,46.153135 C55.30919,46.0701256 55.2862214,45.9869529 55.2629584,45.9037801 C55.9205069,45.8273069 56.4941319,45.8902175 56.8589786,46.2336934 Z M127.486391,44.7813826 C127.651764,44.8378368 127.787013,44.903476 127.89522,44.9805254 L127.900686,44.8356944 L127.900686,44.8356944 C128.120324,44.928557 128.336435,45.074956 128.559836,45.1033766 C129.013457,45.1602177 129.393944,45.3191747 129.474133,46.0468737 C129.485421,46.1489895 129.377248,46.2765516 129.324572,46.3928777 C129.025797,46.0882236 128.510681,46.5576974 128.223396,46.2000761 L128.215661,46.3385659 L128.215661,46.3385659 C127.525387,46.148827 127.760895,45.4145306 127.486391,44.7813826 Z M38.7614405,45.1516722 L38.5683533,45.1908894 C38.7551621,45.2106625 38.9944469,45.281664 39.0667563,45.4815092 C39.2217227,45.9096662 38.6774174,45.8205851 38.5186056,46.3338931 C39.2974453,45.8735948 40.0187391,45.7791425 40.7083138,45.9013334 C40.8170132,45.6188922 41.5290176,46.0058292 41.5848011,45.5942415 C40.6867093,45.2171667 39.7680868,44.9741654 38.7614405,45.1516722 Z M57.3230444,44.7164255 C57.5922835,45.2234751 58.1594712,45.5404459 58.5323446,45.9604839 C58.0768439,46.3486695 57.4683425,46.3445261 57.1462359,46.1192282 C56.5195286,45.6810628 57.4266787,45.2053477 57.3230444,44.7164255 Z M116.51278,45.3162569 C116.696101,45.3371727 116.734141,45.4726349 116.786137,45.5863643 C116.859159,45.7469907 116.758992,45.8473209 116.579876,45.8353924 C116.406687,45.8236273 116.342457,45.6929039 116.349148,45.5510689 C116.353736,45.4512289 116.348957,45.3394603 116.51278,45.3162569 Z M37.6169335,44.6145737 C37.024854,45.1352163 36.2620007,44.6847888 35.6401551,44.8766464 C35.3865405,44.9548918 35.1592246,44.9887132 34.9597081,44.9637267 L34.9405337,44.9101238 C35.2245107,45.7122904 35.6978698,45.8251701 36.3371545,45.5566168 C36.937238,45.3045763 37.6678935,45.8608442 38.252749,45.2805339 C38.1048879,45.322425 37.9561624,45.3777792 37.8052618,45.4433029 C37.9628698,45.0691408 38.5030493,45.1341018 38.3492574,44.8218754 C38.2282847,44.5762022 37.6362052,44.5975374 37.6169335,44.6145737 Z M48.9042568,45.6218671 C48.3399721,45.1232054 48.006341,44.1887488 47.295657,44.5738841 C48.2879854,43.7416623 48.4092877,43.8228397 48.9042568,45.6218671 Z M135.968232,44.0464329 C136.100763,44.3965796 135.840377,44.6746725 135.846882,45.0343997 L135.865044,45.1787495 L135.829264,45.1730072 C135.813912,45.1717243 135.798261,45.1716297 135.782443,45.1721644 L135.686591,45.1784524 C135.574882,45.1841642 135.467877,45.1659306 135.410612,44.9320156 C135.190033,44.0300091 135.017694,44.4090604 134.834918,44.9703379 C134.761095,45.1976644 134.674671,45.4372436 134.547899,45.1238876 C134.457274,44.8999501 134.343612,44.6173561 134.425454,44.3084319 C134.589265,43.6911048 135.754272,43.4815056 135.968232,44.0464329 Z M150.907679,44.6165608 C151.236944,45.0420656 151.647931,44.4757063 152.108806,44.8293132 C151.591865,44.9963124 151.213346,45.1338989 150.794599,45.1018716 C150.560202,45.0838971 150.465334,44.9499056 150.51158,44.7283294 C150.569071,44.4521761 150.778286,44.4492348 150.907679,44.6165608 Z M146.39726,44.1600855 C146.870497,44.1692362 147.252024,44.3404839 147.290537,44.5705571 C147.350661,44.9338049 146.753574,44.7034048 146.48814,44.7983427 C146.190011,44.7403342 145.651109,44.9251445 145.687959,44.5574848 C145.709016,44.3478371 145.927902,44.1509349 146.39726,44.1600855 Z M134.937973,42.7130342 C134.815093,42.9017075 134.985676,43.0742997 135.121531,43.2110679 C135.311577,43.4024478 135.440945,43.2561265 135.551614,43.1172885 C135.825616,42.7744923 136.083971,42.5429895 136.414833,43.0938835 C136.534746,43.2934366 136.800144,43.2359766 137.026897,43.2406487 L137.097044,43.2447495 L137.070637,43.1753653 C137.036123,42.9463537 137.454951,42.7728365 137.250766,42.5530202 C136.929826,42.207995 135.183544,42.3360062 134.937973,42.7130342 Z M10.9039733,41.6737749 C11.464194,42.4111912 12.2964344,41.5492845 12.9219632,42.4893495 C13.0031609,42.4858854 12.9275027,42.1968512 12.9725478,42.020616 C13.0668655,41.6519079 13.284802,41.6677127 13.4562356,41.7714187 C13.7595974,41.9552315 13.5057998,42.1743346 13.4658569,42.4254805 C13.3581278,43.0998938 13.1380046,43.1377822 12.7049014,43.1165647 C12.2891456,43.0964298 11.8649347,43.1654949 11.458946,43.1778357 C11.3847456,42.7294537 11.9080847,42.6564914 11.6814016,42.5045049 C11.3101078,42.2561735 10.8494527,41.8649489 10.3860279,42.4518941 C10.5097925,42.0229976 10.7270001,41.4410319 10.9039733,41.6737749 Z M158.751952,42.2606217 C158.45089,42.2903612 158.149988,42.320591 157.849086,42.3509842 C157.621368,42.2529417 157.304612,42.426477 157.143352,42.1143748 C157.69247,41.7905075 158.592773,41.8744973 158.751952,42.2606217 Z M15.7850391,40.3439202 C15.9000642,40.3597293 16.0610127,40.4329294 16.0802919,40.494306 C16.1532927,40.7298485 16.156542,40.9740263 16.3859424,41.1612115 C16.1444113,41.4014038 16.0729268,41.5552437 16.6374379,41.5280095 C16.8150662,41.5193743 16.9864124,41.6013425 16.8995479,41.7450859 C16.8289298,41.8613294 16.6593165,41.916462 16.471074,41.889095 C16.3003776,41.8641193 16.1407288,41.8053997 15.9832462,41.7534555 C15.6561504,41.6457143 15.174388,40.6837497 15.352666,40.4977601 C15.4486286,40.3975914 15.594847,40.3174831 15.7850391,40.3439202 Z M14.7173787,38.6779012 C15.4094397,38.6509447 15.2817887,39.128598 15.3819845,39.4124333 C15.486125,39.7076123 15.450307,40.0562163 14.9912998,40.2116122 C14.8428206,40.2619877 14.5075197,40.231738 14.5636925,40.0754883 C14.6850912,39.7386092 14.473038,39.66207 14.2293577,39.6125523 L14.0817689,39.5842177 C13.9840657,39.5650009 13.8909605,39.5426414 13.8217702,39.5022068 C13.9887106,39.3049736 14.2323363,39.4215815 14.4059038,39.3491284 C14.5277167,39.2983869 14.6477939,39.2334963 14.620812,39.1259146 C14.5854673,38.9844238 14.4818002,38.9170937 14.3020789,39.0491924 C14.211666,39.1157907 14.1018451,39.0935913 14.0661848,38.997963 C14.0347849,38.9135565 14.0928511,38.838542 14.2009364,38.8067066 C14.3705592,38.7568189 14.5427066,38.6847318 14.7173787,38.6779012 Z M10.6125017,39.0352947 C10.5859021,39.6169742 10.6653935,40.142576 10.0002483,39.7988022 C9.79406244,39.6924243 9.67397958,39.6139154 9.87493771,39.3924932 C9.99625062,39.2585862 10.2176582,39.1501692 9.98487273,38.938603 C9.82635105,38.7941602 9.61186245,38.6755472 9.42750989,38.8634927 C9.16996981,39.1256989 9.05434585,38.9605243 9.01452324,38.7047756 C8.96224645,38.3686488 9.22378416,38.4712881 9.37923073,38.4541249 C9.53144845,38.4374715 9.69996422,38.4908304 9.83680641,38.4371316 C10.5279363,38.1659191 10.6404852,38.5814045 10.6125017,39.0352947 Z M25.6229174,38.0700418 C25.4635417,38.8584647 24.8196188,38.955728 23.987051,39.0770616 C24.7699555,39.4225595 25.3927291,39.2445708 25.9845339,39.2840328 L26.0628818,39.2876733 L26.0628818,39.2876733 L26.2204764,39.2908164 C26.4395525,39.2963245 26.6407287,39.3203959 26.7156035,39.5393496 C26.7987619,39.4651651 26.880953,39.3790325 26.9614107,39.2841174 C27.2655706,38.9253541 27.2170607,38.6864962 27.0976055,38.4750952 L27.0414362,38.5290136 L27.0414362,38.5290136 C26.5529234,39.0569212 26.0351414,38.6742537 25.6229174,38.0700418 Z M33.7599465,35.9339322 L33.5724152,35.9613179 C33.3080716,36.0027858 33.0372841,36.0623883 32.7755606,36.0813825 C32.6463627,36.0907395 32.5240337,36.0766618 32.4737919,36.1579849 C32.9376832,36.1315891 33.4564672,36.0484184 33.8274721,36.4651643 C33.7709458,36.2610077 33.7526284,36.0880686 33.7599465,35.9339322 Z M156.205437,34.7949552 L156.191395,34.8403455 L156.191395,34.8403455 C155.987802,35.5628764 155.660756,36.1282592 154.534412,36.0742843 C155.164803,36.1563695 155.76326,36.2549445 156.352524,36.24596 C156.416762,36.0993363 156.468097,35.9421215 156.513547,35.7772495 C156.609099,35.430837 156.818955,35.0900394 157.343395,34.9641331 C156.893191,35.0021411 156.518469,34.9474779 156.205437,34.7949552 Z M31.1335508,32.4121026 L31.051986,32.4498897 C30.8237466,32.5459756 30.5240741,32.5958611 30.0939331,32.6332812 C29.9889416,32.6424509 29.3859955,33.75181 29.4386801,33.8400675 C29.5098704,33.9591087 29.6382774,34.0033194 29.724952,33.8927928 C30.1545487,33.3444173 30.4863295,33.6992485 30.8698508,33.9492842 C31.3630844,34.2708755 32.0164491,34.1691911 32.5051507,34.1076237 C33.0608691,34.0375826 33.5629371,34.1289506 34.0543945,34.248007 C34.1997512,34.2399671 34.340625,34.2456121 34.4745045,34.2748035 C34.6397781,34.3108075 34.8480352,34.28546 35.0590725,34.262381 L35.2397048,34.2446385 C35.658393,34.2114604 36.0422554,34.2600655 36.0696655,34.8994154 C36.0742449,35.0067282 36.2883323,35.1393568 36.4384988,35.0212171 C36.5907642,34.9016444 36.7960744,34.6935466 36.758485,34.5714265 C36.6939917,34.362851 36.5003208,34.1402644 36.284707,34.0146414 C35.8759947,33.7766107 35.0232704,33.7891889 35.6788892,33.07032 C35.755976,32.9859345 35.5605878,32.9068032 35.4354173,32.8894485 C34.9827123,32.8264508 34.5501594,32.6992749 34.1070571,32.599515 C34.1274319,32.7708514 33.9641968,32.8940563 33.7248276,32.8913403 C33.4619711,32.8883929 33.1966598,33.1541479 32.9375799,32.8936327 C32.787805,32.7429 32.8648087,32.5977378 32.9388347,32.4607563 C32.8371861,32.4633654 32.7345127,32.4706048 32.6299565,32.4832836 C32.1861344,32.537089 31.6079099,32.6224046 31.1335508,32.4121026 Z M152.418916,33.1102837 C152.686811,33.3179039 153.019391,33.3857307 153.364945,33.3626441 C153.603647,33.3468815 153.897111,33.1230212 154.067885,33.3362139 C154.354839,33.3398283 154.644139,33.3560844 154.921055,33.3350377 C154.945696,33.2859189 154.970477,33.2346554 154.995055,33.1817808 L155.063906,33.0301971 L155.063906,33.0301971 C155.110431,33.1250443 155.159897,33.2133134 155.212536,33.2950898 L155.310667,33.2727353 L155.310667,33.2727353 C155.454294,33.234453 155.655772,33.3164622 155.659362,33.1129704 C155.660958,33.0168393 155.542466,32.8301917 155.508354,32.835296 C155.050771,32.9013941 154.70697,32.7635404 154.394449,32.5655343 C153.681061,32.5693936 152.923444,32.4488721 152.418916,33.1102837 Z M14.6672857,32.2699042 C14.751969,32.5236711 14.4289109,32.5545545 14.3358166,32.7112593 C14.2159601,32.7084814 14.0959124,32.7058669 13.9760559,32.703089 C14.0148611,32.4591264 14.0680032,32.2145102 14.3826505,32.1212063 C14.5091975,32.0837867 14.6259955,32.1460438 14.6672857,32.2699042 Z M4.69862853,31.5624327 C5.76963565,31.587597 5.93780744,31.8109707 6.3072283,32.0258473 C5.19792118,32.1755257 5.21463391,31.8611358 4.69862853,31.5624327 Z M4.04756209,30.1494914 C4.14932814,30.5963717 4.57385071,30.4194248 4.70187896,30.8469941 C4.77932262,31.1062225 4.79096156,31.4124687 4.65114516,31.6261485 C4.51356701,31.8364698 4.41299471,31.5774513 4.28914453,31.4976888 C4.04994956,31.3434112 3.78792438,31.2565119 3.53246475,31.1559691 C3.37668212,31.0946779 3.1440527,31.1544998 3.1501706,30.817398 C3.15613929,30.4781972 3.39055931,30.5707637 3.54350681,30.5012863 C3.70093083,30.4297099 3.84388078,30.295373 4.04756209,30.1494914 Z M21.6123845,30.1291565 L21.2255892,30.1328384 C21.2207938,30.133286 21.2159816,30.1337391 21.2111526,30.134197 L20.7539909,30.1686838 C20.7856944,30.197409 20.8129516,30.2362513 20.8352711,30.2880111 C20.965183,30.5895197 20.9356576,30.9222727 20.8498601,31.2213512 L20.8427629,31.2372584 C20.9704519,31.2495165 21.0975214,31.2661975 21.2237808,31.2887814 L21.4054301,31.3230208 C21.6183227,31.3608745 21.8231749,31.3742454 21.8999647,31.1829541 C22.0133891,30.9000916 22.0524217,30.5855629 21.8806779,30.3007315 C21.8183404,30.1973684 21.7268666,30.148504 21.6123845,30.1291565 Z M19.2838397,27.8513162 C18.8514671,27.8256821 19.0291101,28.1968191 18.9684329,28.4025286 L18.9577982,28.4326236 C18.9347158,28.5468389 18.8734081,28.6777338 18.8768654,28.7799475 C18.8832915,28.9729685 19.0592285,28.9710591 19.1842774,29.0243482 C19.1973033,29.2664924 19.2103293,29.508463 19.2233552,29.7507808 C18.452741,29.7870591 17.6838636,29.5921286 16.7765639,29.7556411 L16.8240438,29.7667495 L16.9565638,29.7543001 C17.96843,29.6854588 18.8580559,29.8228677 19.7492639,29.7935806 L20.9847555,29.7865495 C20.9797797,29.6745179 20.9748045,29.5625824 20.969862,29.4506074 C21.4469987,29.7006973 21.9481706,29.774167 22.4603693,29.7683222 C22.4825957,29.7479567 22.5053159,29.7351885 22.5296687,29.7322889 C22.5944715,29.7244038 22.6703615,29.7820635 22.7965262,29.8333166 C22.6937744,29.8926934 22.6305056,29.9547788 22.5711746,29.9620671 L22.5784618,30.118114 L22.5784618,30.118114 L22.4049046,30.1200842 C22.4051094,30.1404364 22.4056044,30.1607829 22.4064711,30.1811219 C22.4107804,30.2857514 22.4170441,30.3811873 22.4263625,30.4682551 L22.0103397,30.4631946 C23.8808509,30.4839362 25.747907,30.4878541 27.6107276,30.6753379 C27.4297566,30.5345854 27.1374241,30.4068048 27.5198341,30.2763241 C27.8613174,30.1599452 28.4657368,30.2369522 28.7397152,30.5727719 C28.8058892,30.6539932 28.861603,30.7405662 28.8879703,30.8299066 C29.5207119,30.9016647 30.2869711,30.8768915 30.721994,30.2416502 C30.9504828,29.9081056 30.9884384,30.2771824 31.056985,30.3272878 C31.2106235,30.4396958 31.3639696,30.5493263 31.5192889,30.6387046 C31.6534849,30.5085223 31.7634529,30.3346386 31.8819863,30.1002692 C31.9138513,30.0376965 32.010973,29.9709842 32.0901586,29.9577691 C32.2378446,29.9327719 32.290317,30.0247999 32.3349662,30.1376854 C32.3483922,30.1715409 32.3616495,30.2072794 32.3749304,30.2436006 L32.4150365,30.3530119 C32.536722,30.6786881 32.6759067,30.9462373 32.9728398,30.2077412 C33.0323721,30.0590317 33.1934147,30.0283027 33.3561745,30.1109368 C33.4908855,30.179082 33.479437,30.2983362 33.4208587,30.3917972 C33.3927777,30.4366346 33.3578699,30.478895 33.3213267,30.5204152 C33.3430416,30.5501623 33.367851,30.582946 33.39739,30.6144931 C33.5968891,30.8274007 33.707343,31.0627146 33.7815593,31.3070153 C33.8079149,31.3027998 33.8351655,31.3003355 33.8623901,31.300613 C34.1394444,31.3036381 34.3155608,31.1461716 34.2291245,30.9430096 C33.9688614,30.3325681 34.0642657,29.6337607 33.5315278,29.086688 C33.3783084,28.9292214 33.3510227,28.7400706 33.0796927,28.9779421 C32.3590081,29.609878 31.7652113,29.2288695 31.1666443,28.8074197 C31.0975716,28.7586991 31.0590282,28.3999811 30.8283405,28.724308 C30.3402517,29.4097411 29.4400161,29.3640455 28.7685602,29.2720176 C26.5267484,28.9644086 24.2784491,28.9637717 22.0255704,28.9394114 C21.2569928,28.9561293 20.504634,28.8918052 19.7908185,28.63228 C19.6530546,28.5832409 19.4597654,28.5849923 19.4527054,28.4077828 C19.4509473,28.3644187 19.4644431,28.3154104 19.4819674,28.2648846 L19.5190612,28.1630323 C19.5727806,28.0108867 19.5954031,27.8698423 19.2838397,27.8513162 Z M150.634091,30.5782413 C150.602898,30.7847549 150.6992,30.8998299 150.848991,30.9719149 C151.080146,30.8091666 151.510115,30.9468447 151.639587,31.0135682 C151.750837,31.0707343 151.855755,31.1121928 151.956728,31.1397054 C152.169052,31.110359 152.384147,31.0547594 152.614304,31.0633783 L152.767118,31.0804856 C152.836061,31.0544058 152.90638,31.0238398 152.978914,30.9894078 C153.184979,30.8915752 153.492981,30.9499345 153.922866,30.929177 C153.682869,30.7457606 153.501879,30.5233886 153.32835,30.3061621 C153.109599,30.302713 152.939339,30.3001788 152.810646,30.3599536 C152.366825,30.5659815 152.009822,30.6240961 151.529556,30.3825625 C151.366415,30.3004061 150.705835,30.1032943 150.634091,30.5782413 Z M7.81266448,30.2064522 C7.88645173,30.5814651 8.3419829,29.987327 8.39072836,30.3829288 C8.41538783,30.5829357 8.26131393,30.653363 8.0495101,30.6654549 C7.7769178,30.6808149 7.64692989,30.5708438 7.65400277,30.3435484 C7.65648783,30.266585 7.60965395,30.1175602 7.81266448,30.2064522 Z M25.7770438,29.7167495 C25.383842,30.9571104 24.7180382,29.8704717 24.1792246,29.8832173 C24.630253,29.6714657 25.1112978,29.7300692 25.5852463,29.7247119 L25.7770438,29.7167495 Z M9.9424678,29.8385576 L9.77485082,29.8373204 C9.85238047,29.9402463 9.90493962,30.0668887 9.91210926,30.2333345 C10.1811938,30.2264799 10.4533477,30.1671186 10.7218498,29.9871993 C10.4723979,29.8709764 10.2102309,29.843408 9.9424678,29.8385576 Z M9.16399619,29.0109638 L9.12697502,29.0364981 C9.41613253,29.0583825 9.70039519,29.1207982 9.98140509,29.1519894 L9.93010125,29.1375014 L9.93010125,29.1375014 C9.87617936,29.1401503 9.82103547,29.1218115 9.76517365,29.0699941 C9.76023904,29.0683194 9.75493845,29.0657528 9.74963956,29.0631483 L9.74118957,29.0457026 C9.69487616,28.9947957 9.6480776,28.9198776 9.60082118,28.8142016 C9.51728975,28.6270291 9.30442584,28.924313 9.16399619,29.0109638 Z M15.4957541,27.9354262 L15.4457092,28.0141188 C15.5885224,27.8823956 15.7265919,28.0095379 16.1289145,28.3034702 C16.4952037,28.5711307 17.0259671,28.2533056 17.4851747,28.3050324 C17.5600303,28.3131907 17.6399227,28.2763917 17.7489932,28.2538263 C17.7568088,28.4230669 17.7592403,28.5659233 17.7707031,28.7077382 C17.7872026,28.9148192 17.8063073,29.1347452 18.0961778,29.1109647 C18.2906984,29.0949953 18.3900428,28.9606443 18.4360678,28.7742193 C18.4416667,28.7514127 18.4450259,28.7267409 18.4469566,28.7008485 C18.2687453,28.6576012 18.2521528,28.495801 18.2374446,28.3415481 C18.2250421,28.2114671 18.2221799,28.08059 18.2135935,27.9251933 C18.0937656,27.9458916 18.0059936,27.9798051 17.9239459,27.9721626 C17.4192568,27.9247157 16.8361453,28.2162436 16.4337297,27.9707296 C15.8309986,27.6030767 15.7682595,27.5200328 15.4957541,27.9354262 Z M11.4677883,28.390917 L11.3484653,28.4344358 C11.0504329,28.5643634 10.797298,28.775084 10.469427,28.8267025 C10.4431899,28.8308332 10.4166785,28.8408984 10.3899003,28.8549965 C10.7137716,28.8720281 11.0340722,28.9251541 11.3456927,29.0584096 L11.221413,29.090719 C11.3765614,29.0870976 11.5331682,29.0878326 11.6850046,29.0890738 C11.7325144,29.0894671 11.7848052,29.0848785 11.8358428,29.0856763 C11.4263785,28.9704872 11.3049359,28.689937 11.4677883,28.390917 Z M151.848254,28.5366051 L151.83668,28.5409742 C151.691348,28.6067733 151.5609,28.7154661 151.453233,28.9027913 C151.774583,28.8653149 152.027384,28.8920075 152.236316,28.9622111 C152.598913,28.8966166 153.014239,28.9443608 153.395633,28.7111846 C152.849683,28.6495948 152.341888,28.5922997 151.848254,28.5366051 Z M1.83074379,28.1850768 C1.9014725,28.1994564 1.93511643,28.3479909 1.95499693,28.3821424 C1.93186673,28.5988165 1.85979991,28.7045391 1.66424457,28.6921204 C1.50921487,28.6826429 1.44345628,28.5883587 1.49201058,28.4752829 C1.5506963,28.3391671 1.57764968,28.1337679 1.83074379,28.1850768 Z M153.12191,26.9067062 L153.118449,26.972278 C153.074377,27.2622778 152.725897,27.495207 152.534355,27.7889028 C152.115911,27.0565004 151.347906,26.8539752 150.354747,27.1545786 C150.402133,27.3529657 150.738615,27.3417629 150.88338,27.4528392 C151.659907,27.3298467 152.270328,27.5618763 152.644301,28.1639353 C152.673433,28.168908 152.704068,28.1722894 152.734814,28.1756831 L152.690262,28.2419285 C152.950587,27.8339241 153.488193,27.5356623 153.243228,27.0704896 C153.208381,27.0042689 153.167641,26.9503271 153.12191,26.9067062 Z M150.127684,27.8879363 C150.430591,27.9213572 150.728248,27.9542053 151.026752,27.9871506 C151.008316,27.8727102 150.882014,27.8304007 150.748614,27.7895106 C150.562432,27.7887434 150.291107,27.6496244 150.127684,27.8879363 Z M153.887765,25.2429355 L153.89407,25.3020135 C153.895239,25.3285562 153.894764,25.3565945 153.892722,25.3861453 C153.870016,25.7152487 153.56663,25.5638325 153.391086,25.6383465 C153.233722,25.7051296 153.045778,25.7299582 152.852108,25.7501696 L152.618546,25.7745966 C152.191142,25.8240781 151.784137,25.9234969 151.662168,26.4704193 C151.760508,26.4621959 151.861094,26.4482099 151.961406,26.4338205 C152.334691,25.9741494 153.099678,26.1546465 153.58574,25.9437985 C153.769464,25.8641713 154.086641,26.0259779 154.110379,25.674291 C154.125289,25.4537048 154.060286,25.3119881 153.887765,25.2429355 Z M154.613025,24.2856311 C154.574863,24.4007457 154.450456,24.3926256 154.312883,24.3994719 C153.757439,24.4270166 153.235004,24.6653658 152.604763,24.4964356 C152.651589,24.6101482 152.710673,24.6940067 152.778227,24.7559983 L152.763871,24.7235285 L152.763871,24.7235285 C153.422763,24.9038807 153.968946,24.6493458 154.549441,24.6197408 C154.693467,24.6125948 154.823331,24.6212721 154.863427,24.4982583 C154.914295,24.3408754 154.822134,24.2261986 154.63442,24.18043 L154.623682,24.1764809 C154.629356,24.209689 154.626093,24.2462299 154.613025,24.2856311 Z M10.930464,22.4335574 C10.6162462,22.8416294 10.4323104,23.0806755 10.4148421,23.2545511 C10.4698871,23.2437545 10.5362596,23.2518324 10.6129185,23.2796924 C10.7862422,23.3427427 10.9382963,23.3042304 11.0867331,23.2417705 L11.3088821,23.139822 C11.4954231,23.0560675 11.6901032,22.9955318 11.9273998,23.1098069 C11.9655139,23.1281896 12.0014119,23.1248708 12.0344705,23.1072646 C11.5767881,23.0228973 11.1881894,22.7930659 10.930464,22.4335574 Z M162.051044,22.0116793 C161.990064,22.1543313 161.974198,22.3415926 161.750925,22.362345 C161.582705,22.3780318 161.583852,22.2360334 161.57697,22.1353764 C161.567221,21.9943585 161.614629,21.8651057 161.801964,21.8422291 C161.932143,21.8263788 162.038619,21.8785048 162.051044,22.0116793 Z M11.2121028,21.6609708 L11.1797186,21.6645977 C10.946912,21.6924574 10.7117489,21.7300769 10.5119998,21.8999534 L11.067955,21.9671455 C11.0771399,21.8849376 11.1266712,21.7870614 11.2121028,21.6609708 Z M8.04358546,17.2905117 C8.00928512,17.3656889 7.94088619,17.4432636 7.94774626,17.5157008 C7.96247523,17.6698227 8.08757061,17.7759955 8.26028295,17.8148684 C8.82966869,17.9427896 9.49368304,17.7652069 9.8124745,18.4971144 C9.97308082,18.8658081 10.7081171,19.0338009 11.0422428,19.4572935 C10.716793,19.7785519 10.1966384,19.4713357 9.78039358,19.7504675 C9.97343392,19.8816851 10.1287439,20.0460603 10.2744195,20.2166405 L10.4464038,20.4225903 C10.8168088,20.867793 11.1980572,21.2820618 12.0839645,21.1916779 C12.0126404,21.3306243 11.9261631,21.4248946 11.8294472,21.490428 C12.2995783,21.8698113 13.000483,21.9718315 13.7416093,21.750882 C13.6857023,21.5134881 13.2315775,21.6523261 13.2226095,21.3697144 C13.3823164,21.145854 13.7996151,21.4115887 13.9539794,21.0447506 C13.0508817,20.9368009 12.1596141,20.8299656 11.1593947,20.7102338 C11.328056,20.5691553 11.5234159,20.5261462 11.7200588,20.5001178 L11.9550194,20.4718448 C12.2260632,20.4362596 12.4796957,20.3703831 12.6461763,20.0517085 C11.3572633,20.1808342 11.1979381,19.1995743 10.467713,18.7117306 C10.8611606,18.4522054 11.3530656,18.7378423 11.66084,18.4391495 C11.3448608,18.0452444 10.6499354,17.8892109 10.4980516,17.5464147 C10.4302775,17.3933989 10.3460042,17.2831262 10.2499552,17.2027607 C9.98272859,17.3464089 9.68218309,17.3968521 9.24147462,17.1478634 C8.9261132,16.969767 8.49856947,17.5031998 8.04358546,17.2905117 Z M142.613722,19.8275576 L142.61482,20.0699532 L142.61482,20.0699532 C143.029448,20.0183517 143.435953,20.0088636 143.811902,20.2263598 L144.309443,20.2288699 C144.327169,20.2064574 144.342903,20.1839759 144.35572,20.1630018 C144.399725,20.1840206 144.445125,20.2053639 144.487498,20.2288468 L145.424269,20.2291693 C145.447383,20.2222989 145.472195,20.2167742 145.498855,20.2126778 C145.542888,20.2059417 145.58691,20.2058574 145.627976,20.2114651 L145.663613,20.2295151 C145.286082,20.026369 144.892312,19.9559428 144.483411,19.8887696 C143.864579,19.7868952 143.228519,19.8322484 142.613722,19.8275576 Z M132.343547,18.5927948 C132.240246,18.8004731 132.15631,18.9210446 132.086001,18.9781973 L132.031691,18.9501337 C132.162701,18.9901449 132.179677,19.094239 132.202004,19.2061401 C132.30423,19.7188035 132.309396,19.7179903 133.212446,19.6249562 C132.577506,19.4558033 132.482847,19.1061122 132.421401,18.7427588 C132.396306,18.592473 132.452401,18.4660962 132.640244,18.4469039 L132.720429,18.4458813 C132.719658,18.4456521 132.718883,18.4454249 132.718105,18.4451998 C132.543896,18.3945685 132.41739,18.4444037 132.343547,18.5927948 Z M131.23285,18.3568339 C131.362229,18.6180656 131.309701,18.8743752 131.075837,19.1122856 L131.10359,19.195982 C131.141994,19.310176 131.181433,19.411913 131.22818,19.4738338 L131.420102,19.4948772 C131.488159,19.4366024 131.569425,19.3133823 131.669474,19.1009075 C131.715593,19.0030076 131.782954,18.9471007 131.870265,18.9337126 C131.803934,18.8358099 131.751278,18.6642468 131.693653,18.4974233 C131.650721,18.3732333 131.521162,18.2770657 131.23285,18.3568339 Z M159.20563,17.3393029 L159.275626,17.4135586 C159.299263,17.4383358 159.323346,17.4614184 159.348307,17.4776471 C159.587176,17.6331895 159.847815,17.7244495 160.102638,17.8275121 C160.258306,17.8901085 160.491508,17.8275121 160.491211,18.1613592 C160.490763,18.5021615 160.257411,18.4178567 160.102936,18.4859328 C159.945032,18.5552735 159.801442,18.6888967 159.596271,18.8336902 C159.493835,18.4014172 159.078125,18.5658116 158.943333,18.149135 C158.859982,17.8911623 158.851931,17.5853465 158.985978,17.3651002 C159.066764,17.2324465 159.136116,17.2702825 159.20563,17.3393029 Z M133.347392,17.9525796 C133.153149,17.9713673 133.094952,18.0950796 133.121093,18.242197 C133.159083,18.4548664 133.209351,18.6627548 133.383972,18.8309456 C133.404699,18.8197979 133.414549,18.7975465 133.414682,18.762927 C133.41587,18.4929656 133.450584,18.2323271 133.517926,17.9721672 C133.477298,17.9531994 133.420835,17.94555 133.347392,17.9525796 Z M149.581521,17.9578014 C149.538907,17.9970562 149.504774,18.0520964 149.472509,18.1107526 L149.408514,18.2292805 C149.321286,18.384131 149.216011,18.5070033 148.967328,18.3671292 C148.714917,18.2251075 148.831116,18.1146221 148.977087,18.0071947 L149.075092,17.935717 C149.122582,17.8998921 149.165014,17.8637039 149.189837,17.8260976 C149.34544,17.8156397 149.490721,17.827078 149.581521,17.9578014 Z M149.090848,16.3967765 C149.354394,16.4163851 149.401749,16.6554456 149.142965,16.8644397 C148.609568,16.831432 148.023411,16.9822542 147.705947,16.1975867 C148.181436,16.0872888 148.624496,16.3621348 149.090848,16.3967765 Z M7.14220419,14.9366999 L7.02510957,14.9574825 C6.8815373,15.2822354 6.5939487,15.5537595 6.07050849,15.7244626 C7.19313864,15.496191 7.85977596,15.8564936 8.3085052,16.7094724 C8.54921292,16.1619973 8.73181182,15.6486004 9.31189121,16.3758842 L9.34500285,16.4079388 C9.57474411,16.3232888 9.78431895,16.195439 9.95806291,16.2919368 L10.1020438,16.3627495 L10.1910977,16.3566297 C10.3518185,16.3530015 10.5085747,16.3785679 10.6709131,16.4325356 C11.0756362,16.3454695 11.3515395,15.9612978 11.799558,15.8583864 C11.401531,15.6227439 11.0796366,15.5221182 10.7239692,15.5659031 C10.4848858,15.5951992 10.2055418,15.797406 10.0244644,15.5740233 C9.47588925,14.897984 9.30339815,15.3751601 9.07576333,15.884339 C8.67636698,15.1377756 8.09425906,14.7971175 7.14220419,14.9366999 Z M127.515705,14.0404364 C127.393643,14.1417719 127.371736,14.2276448 127.394156,14.3192598 C127.540716,14.3985901 127.546006,14.5608726 127.604732,14.7061614 C127.76462,14.8802831 128.038447,14.9886258 128.277784,15.115896 C128.551038,15.1038221 128.849977,15.0163332 129.097608,15.0627076 C129.562419,15.1497237 130.078711,14.8332126 130.586146,15.0246482 C130.751293,15.0867793 130.821412,14.9948838 130.870679,14.9067291 C130.945595,14.7723827 130.917548,14.6201451 130.746311,14.5707004 L130.648692,14.5525546 C130.316305,14.5885065 129.989378,14.693855 129.683864,14.6397326 C129.169444,14.5485007 128.440555,14.9865092 128.141366,14.2935928 C128.065997,14.11909 128.075919,13.9183162 127.802872,13.8708693 C127.64908,13.8441207 127.602523,13.9681514 127.515705,14.0404364 Z M8.14723675,13.5054547 L8.06283991,13.5293164 C7.47637332,13.7194508 7.24693603,14.2002426 7.09023761,14.7733596 C7.07443889,14.8311155 7.05502916,14.8876079 7.03156884,14.9426092 L6.95931287,14.9685176 C7.54509568,14.7806404 7.8187154,14.4614085 7.92366021,14.0842213 C7.98200342,13.874183 8.05104573,13.6775028 8.14723675,13.5054547 Z M134.415921,12.7848439 C133.784725,13.0131624 133.38708,13.1187239 132.940969,12.7141512 C132.612587,12.8719361 133.015385,13.0951596 132.709709,13.2736429 C132.228489,12.667978 131.575542,12.7517266 130.809063,12.9060088 C130.469229,12.9744001 130.328503,13.1127403 130.264672,13.2745791 L130.185549,13.2916443 C130.926774,13.1340393 131.558392,13.048487 132.023572,13.6671962 C132.31936,13.4848689 131.92965,13.2568378 132.247212,13.0956546 C132.678624,13.5089407 133.063168,13.4011057 133.673566,13.1678699 C134.419035,12.8832376 135.361757,13.0162829 136.212403,13.122654 C136.462799,13.1538823 136.731832,13.2711508 136.869854,13.0444208 C136.887503,13.015374 136.902238,12.9831462 136.915344,12.9496529 L136.95106,12.8472917 C136.964049,12.8074978 136.97657,12.7685884 136.990663,12.7336048 L137.041258,12.7405814 C136.16163,12.6364528 135.186597,12.5062126 134.415921,12.7848439 Z M6.17938976,12.9980272 L6.23060937,13.035152 C6.26629607,13.0383859 6.30198401,13.0416147 6.33767194,13.0448323 C6.30892287,13.1011118 6.2731435,13.1419451 6.23218311,13.1713929 L6.22804382,13.2757495 L6.16370026,13.2646716 C6.12465834,13.2573124 6.08677476,13.2485926 6.05160828,13.2366888 C6.01267246,13.2425632 5.97000822,13.2441824 5.9264896,13.2439201 L5.75654952,13.2379762 L5.75654952,13.2379762 C5.75826995,13.1562741 5.75999038,13.0745719 5.76151965,12.9928698 L5.90104382,13.0047495 L5.91132453,12.9974913 C5.99968108,12.9371674 6.0890826,12.9424674 6.17938976,12.9980272 Z M147.59289,8.66988757 C147.743301,8.71649895 147.810872,8.82662823 147.952511,8.93628349 C147.459048,9.23364833 147.496082,9.4749215 148.121764,9.73452322 L148.156541,9.75306184 C148.165739,9.52814013 148.210192,9.2919435 148.267547,9.05008577 C148.32602,8.80405859 148.448511,8.74376602 148.638471,8.74745056 C148.761713,8.74979527 148.968015,8.76888792 148.942377,8.89851695 C148.802044,9.60812702 149.3148,9.57613846 149.763388,9.69253662 C148.790349,10.127983 148.793498,10.1261407 149.258427,11.1914769 C149.329194,11.3539319 149.477023,11.5309576 149.328144,11.7232239 C149.270721,11.7974173 149.152128,11.8761326 149.078363,11.8593846 C148.769359,11.7893783 149.027537,11.5515576 148.987806,11.3961367 C148.939079,11.2057127 148.866363,11.0372284 148.709088,10.9265246 C148.326249,10.6566092 148.18042,10.3200132 148.157949,9.94527866 C148.074714,10.0330984 147.898751,10.1207667 147.696521,10.163348 C147.248213,10.2576768 146.902236,10.1505496 146.932124,9.93329313 C146.947717,9.82061998 146.880919,9.70725003 146.803812,9.59349897 L146.725938,9.47963257 C146.573997,9.25169246 146.476929,9.02264886 147.01139,8.79502729 C147.216377,8.70765069 147.311886,8.58330099 147.59289,8.66988757 Z M142.591293,10.2517891 L142.730269,10.469556 L142.730269,10.469556 C142.18556,10.809163 141.696393,10.5681201 141.195785,10.3657872 C141.000192,10.2867408 140.747212,10.2358323 140.628011,10.4417434 C140.536857,10.599023 140.69979,10.7553268 140.846485,10.8488489 C141.218481,11.0858255 143.173491,10.8914624 143.472601,10.6009748 C143.62723,10.450689 143.62723,10.450689 143.130681,10.3197581 L143.11509,10.2462691 C142.929894,10.2553008 142.751209,10.2575319 142.591293,10.2517891 Z M5.79402862,8.27069708 L5.71819417,8.31784166 C5.41133343,8.4912543 5.00827036,8.52900679 4.6169231,8.64869503 C4.98394565,9.04393276 5.50818221,8.49774751 5.75976259,8.95956533 C5.59134614,9.15506277 4.93305996,9.13303259 5.07128677,9.21495222 C5.64223183,9.55438016 5.25128541,10.1655136 5.64526978,10.4501109 C5.9012308,10.635235 6.38590285,10.3803559 6.74500635,10.6650542 C7.14082369,10.5612886 7.53661215,10.4463457 7.85764039,10.198349 C7.49224166,9.81415619 6.95244376,10.1138043 6.67653433,9.92035454 C6.28060621,9.64251929 6.6736722,9.04624822 6.09971953,8.71507497 C5.96081078,8.63514758 6.62234465,8.656642 6.791592,8.46589894 C6.57180323,8.07388853 6.14433401,8.42628096 5.79402862,8.27069708 Z M153.620357,9.1927505 L153.671847,9.21054325 C153.90525,9.27628432 153.983564,9.39535617 153.788548,9.60465429 C153.688651,9.71198666 153.480531,9.77420589 153.610028,9.98149153 C153.713471,10.1468505 153.892608,10.2112499 154.079916,10.1986719 C154.273082,10.1859262 154.571232,9.71232207 154.629043,10.2481454 C154.683617,10.7541169 154.227141,10.4386603 154.014397,10.533247 C153.970923,10.552701 153.913883,10.536098 153.847593,10.536098 C153.620049,10.4646549 153.298311,10.8611138 153.127499,10.4218897 C152.985053,10.0561211 153.004015,9.64540705 153.104837,9.27980617 C153.200508,8.93191233 153.42792,9.1159927 153.620357,9.1927505 Z M141.670184,8.7889369 L141.668281,8.83024116 C141.674467,8.93388171 141.751429,9.07341122 141.925016,9.2640164 C142.023851,9.37240055 142.112221,9.48817996 142.194689,9.60812178 C142.257068,9.62121705 142.320739,9.64106959 142.379656,9.66311715 L142.629938,9.757432 C142.738917,9.79778149 142.84786,9.83582933 142.957352,9.8665051 C142.669512,9.54840479 142.435567,9.19887983 142.075012,8.91390039 C142.018185,8.86896612 141.970772,8.82761543 141.932024,8.7895312 C141.84608,8.81404605 141.758006,8.80396741 141.670184,8.7889369 Z M137.924292,9.01877264 L138.029925,9.00338745 C138.416219,8.9552334 138.819719,8.97361986 139.225277,9.00095942 L139.573048,9.02524278 C139.862688,9.0450675 140.15117,9.06106546 140.432972,9.05224999 C140.634839,9.0460694 140.844455,9.17342201 141.046691,9.04346705 C141.15959,8.97114385 141.24426,8.87913283 141.222885,8.75879488 C140.100876,8.75618764 138.895566,8.46246154 137.924292,9.01877264 Z M6.37345433,7.49543928 L6.2768949,7.51272371 C6.01171512,7.55563262 5.73591467,7.58484954 5.56115649,7.7309341 C5.50134682,7.78070598 5.39103119,7.78560158 5.29514584,7.81399603 C5.3299076,8.18992553 5.70761949,7.98505597 5.9074023,8.09460518 C6.32523304,7.99664703 6.72865073,7.93585284 6.98793418,7.65754962 C6.83751431,7.50594553 6.50173973,7.67035143 6.37345433,7.49543928 Z M152.213153,5.86854454 C152.244184,6.25354347 151.726566,6.31334694 151.961847,6.48756686 C152.326787,6.75747232 152.794872,7.1361524 153.255235,6.57580518 C153.046469,6.9933011 153.018789,7.73463844 152.452804,7.14089155 C152.189698,6.86511857 151.6849,6.76717628 151.411159,6.97434453 C150.936227,7.33361669 150.879993,7.04498032 150.905342,6.44581727 C150.636699,6.53608665 150.709833,6.82020955 150.659572,7.00864689 C150.558467,7.38868101 150.339503,7.34332065 150.166284,7.24063922 C149.92605,7.09801359 150.088634,6.8784333 150.133505,6.6240993 C150.2687,5.85838923 150.593722,5.85816356 151.018102,5.81596262 C151.429515,5.77489005 151.818493,5.86606213 152.213153,5.86854454 Z M11.9344144,6.65845036 L11.9084706,6.6717975 C11.9102744,6.68417935 11.9118995,6.69665985 11.9134291,6.70919623 L11.9296378,6.84155088 C11.9561886,7.01583646 12.0217956,7.17148009 12.3580551,7.1897674 C12.3547853,6.94500983 12.4319352,6.7275761 12.566001,6.55330966 C12.3365841,6.5347684 12.1207984,6.57404802 11.9344144,6.65845036 Z M7.02165182,6.78657377 C7.02789318,6.91810967 7.01253752,7.02423921 6.98029947,7.1104749 C7.23430149,7.05639588 7.52570244,7.04332773 7.74174899,6.94348903 L7.74784595,6.89776986 C7.75511438,6.85961161 7.7646952,6.81868603 7.77677271,6.77482434 C7.78645618,6.73892331 7.60303984,6.63040428 7.49633178,6.6108219 C7.30114338,6.57524724 7.0150063,6.64672293 7.02165182,6.78657377 Z M28.5600062,5.81094032 C28.3816001,6.04626438 28.0730624,6.3416136 27.8601198,6.02126717 C27.7376842,5.83720832 27.5213039,5.77760725 27.3389026,5.65698583 C26.8780589,5.69279642 26.4159223,5.7333754 25.9518889,5.77220642 C26.1113814,6.17592985 26.5334668,6.15765296 26.7246679,6.45399966 C26.8224412,6.45704519 26.9155949,6.45587575 27.0051059,6.46341531 C27.090237,6.47059453 27.1803544,6.43828226 27.267746,6.41876122 C27.3244952,6.36252083 27.3768476,6.298477 27.4211183,6.2382671 C27.5257378,6.09596846 27.6546609,5.9394726 27.8485202,6.13578597 C27.9863672,6.27547362 28.1158599,6.62338726 28.0429491,6.62142902 C27.9581361,6.61921147 27.8789176,6.64038298 27.8031597,6.67575125 C28.3680918,6.97100008 28.6764452,6.171718 29.184714,6.18462475 C29.2579846,6.18653536 29.127853,5.84708278 28.9895167,5.71095147 C28.7945102,5.51925311 28.6651419,5.67194308 28.5600062,5.81094032 Z M143.84024,5.37453118 L143.801949,5.37563814 C143.708535,5.37753802 143.61402,5.37700644 143.523679,5.37953245 C142.907332,5.39675625 142.906513,5.38004405 143.167181,5.83877701 C143.452362,6.34065552 143.632735,6.52047356 144.132675,6.5395599 C144.038307,6.41420459 144.009573,6.2371342 144.05253,6.01774112 C144.140137,5.77171497 143.969022,5.57814181 143.84024,5.37453118 Z M135.26404,5.38335347 C135.426474,6.0603247 135.84175,6.25942178 136.8058,6.31900466 C137.118061,6.3383477 137.409817,6.26796421 137.70263,6.21869168 C137.793347,6.10777927 137.993655,6.08367693 138.286984,6.10719547 C138.448545,6.12015596 138.671945,6.10975346 138.661707,5.91790418 C138.650854,5.71735773 138.434211,5.66022927 138.223507,5.63908322 C137.675347,5.58400116 137.174694,5.82018894 136.611996,5.78557081 C135.947836,5.74460233 135.526381,5.64199556 135.26404,5.38335347 Z M87.410443,2.37909387 C87.226267,2.47546622 87.1402675,2.64450712 87.2285502,2.81994978 C87.3321672,3.02527119 87.4740986,3.21403938 87.6021218,3.40923692 C87.6457368,3.4463606 87.6842243,3.4939217 87.7284585,3.53332813 C88.3741553,4.10921931 89.1091505,4.62285628 89.5001176,5.58373636 C89.680241,4.16462714 89.680241,4.16462714 90.1982867,4.01735057 C90.4848815,4.27655733 89.4999268,4.72905463 90.1753897,4.71536189 C91.0954694,4.69673339 92.0455061,5.17263572 92.9508935,4.6835183 C93.1115545,4.59674454 93.3264051,4.50821939 93.4880201,4.61266633 C94.1342893,5.03061334 94.7727353,4.82649599 95.3369567,4.54897917 C95.8441263,4.29932549 96.3283989,4.4612501 96.7922549,4.49818866 C97.2692768,4.53640096 97.7193946,4.54149593 98.1945083,4.50439816 C98.5753625,4.47446519 99.1109626,4.31524728 99.3452758,4.56744845 C99.8205326,5.07853794 99.9823861,4.82630691 100.157736,4.50180091 L100.229371,4.36978188 C100.266323,4.30348307 100.305559,4.23797883 100.349693,4.17879753 C100.450631,4.62651829 100.690668,4.81232559 101.046908,4.72682557 C102.230685,4.4434177 103.394619,4.99415244 104.586219,4.74736469 C105.14319,4.6319317 105.772859,4.6408479 105.668296,5.34968603 C106.11288,5.41655756 106.051439,4.75023061 106.26629,5.00513848 C106.791587,5.62879503 107.722924,5.14365806 108.265202,5.6703509 C108.6327,6.02715824 109.053242,5.36417486 109.464435,5.53947378 C109.603261,5.598632 109.730045,5.64153028 109.84388,5.66442266 C109.768412,5.31332544 109.814717,5.04849012 110.073168,4.8698079 C109.909435,4.89069416 109.7017,4.83227337 109.456199,4.71832932 C109.046179,4.52783389 108.626836,5.24829072 108.260387,4.86055206 C107.719655,4.28820067 106.790974,4.81539375 106.267176,4.13767294 C106.052938,3.86066733 106.114203,4.58458457 105.670887,4.51191601 C105.72709,4.09679467 105.570561,3.90262463 105.327324,3.83146907 C105.294508,3.95647286 105.281457,4.08291704 105.311482,4.21244434 C105.270255,4.05163422 105.187124,3.92069517 105.095646,3.79833033 C104.936959,3.79367286 104.761065,3.81934429 104.591897,3.85755296 C104.194592,3.94722617 103.800372,3.94000115 103.407465,3.90216633 C103.421193,3.92113673 103.432126,3.94558059 103.439989,3.97363509 C103.527498,4.28459348 103.117226,4.22805559 102.906521,4.20844707 C102.548528,4.1751126 102.213718,4.42724543 101.843451,4.24635687 C101.925278,3.79307334 102.472156,3.95468019 102.804692,3.84601633 L102.845349,3.8342496 C102.615511,3.80379285 102.385834,3.77369418 102.155961,3.75730896 C102.138947,3.81663164 102.114101,3.87535004 102.082087,3.93513015 C102.034871,4.02353909 101.788085,4.0124515 101.730738,3.91441386 C101.697349,3.85737043 101.671203,3.80251082 101.651305,3.74951234 C101.457159,3.75754623 101.260197,3.7836998 101.062681,3.83523333 C100.707457,3.92797225 100.468105,3.7262305 100.367455,3.23969721 C100.074067,3.66844169 99.9977708,4.40256714 99.3659024,3.66186692 C99.1322576,3.38780265 98.5981852,3.56099604 98.2184173,3.59335085 C97.7446587,3.63383762 97.2958248,3.62830096 96.8201636,3.58677608 C96.3576306,3.54646233 95.8747393,3.37067363 95.3690163,3.64196957 C94.8064042,3.94354409 94.1697793,4.1653562 93.5253534,3.71117772 C93.3641994,3.59767636 93.1499616,3.69387569 92.9897589,3.78817179 C92.0869539,4.31951736 91.139627,3.80253248 90.2221716,3.82277586 C89.5486354,3.83765562 90.5307806,3.34593172 90.2450034,3.06425455 C89.7284353,3.22429839 89.7284353,3.22429839 89.5488256,4.76642898 C89.1589737,3.72225103 88.4260749,3.16391428 87.7822198,2.53827261 C87.6752912,2.43446039 87.6020394,2.27856903 87.410443,2.37909387 Z M47.1606691,5.29340529 L47.0451203,5.31027111 C46.9202259,5.3276461 46.7953846,5.34384149 46.6704282,5.35584463 C46.7895535,5.49837348 46.9100258,5.64105454 47.0499448,5.77240958 C47.248993,5.60385908 47.2063971,5.44727362 47.1606691,5.29340529 Z M63.6549592,4.69974468 C63.3850944,4.77871363 63.4746798,4.93955817 63.5363773,5.0916671 C63.849733,5.0550715 64.0006572,5.20641645 64.0487132,5.53947378 C64.0824863,5.77352411 64.4835663,5.78116657 64.4576163,5.7316498 C64.2321184,5.30396469 64.8666279,5.17196094 64.8908179,4.85916463 C64.6195089,5.39704064 64.417675,5.19615804 64.1190063,4.92755305 C63.9925516,4.81397524 63.8573627,4.64067117 63.6549592,4.69974468 Z M114.570318,2.6638854 C114.376819,2.75818151 114.44931,2.89555968 114.562898,3.01182937 L114.624291,3.07969181 L114.624291,3.07969181 L114.668854,3.09051886 C114.713105,3.10593127 114.755965,3.12534637 114.79703,3.14992705 C114.796105,3.21411025 114.780332,3.26848953 114.751356,3.31416436 C114.763096,3.3640828 114.767416,3.41829749 114.761154,3.47638908 C114.539495,3.50735972 114.282068,3.56774383 114.274838,3.78747971 C114.264944,4.08507475 114.599809,3.94475523 114.771808,4.01950003 C114.685619,4.43734423 114.215856,4.51105091 113.966038,4.4702181 C113.21925,4.34806572 112.541338,4.50741748 111.848585,4.67991879 C111.667316,4.72506109 111.509279,4.71405896 111.361635,4.6648185 C111.382773,4.68557028 111.397396,4.7157415 111.40483,4.75395654 C111.461429,5.04637747 111.347331,5.237638 111.153814,5.39415839 C111.365678,5.51133019 111.587856,5.56723547 111.863664,5.50412741 C112.558399,5.34538715 113.23825,5.19874746 113.987175,5.3111553 C114.237707,5.34873073 114.708813,5.2809039 114.79525,4.89639265 C114.911071,4.89894013 115.026891,4.90164684 115.142522,4.90419433 C115.187934,5.06866642 115.110466,5.30972234 115.458692,5.29507429 C116.56004,5.24906032 117.661197,5.17008823 118.759873,5.32946536 C118.921107,5.35287039 119.171448,5.31338435 119.118212,5.17709382 C118.809675,4.38434785 119.45041,4.70055462 119.888316,4.63384232 C120.244365,4.57970823 120.702497,4.7128144 121.119987,4.34725008 C120.426779,4.22990648 119.86313,4.09695953 119.309784,3.7820265 C119.365039,3.76724495 119.417794,3.75109209 119.467581,3.73332645 C119.132867,3.70878583 118.859799,3.70107239 119.082441,4.32436193 C119.135524,4.47264039 118.885897,4.51554944 118.725124,4.49011544 C117.932052,4.3647394 117.137684,4.37500571 116.342885,4.40926629 C116.365438,4.78189199 116.10062,4.84933192 115.865489,4.91849787 C115.631172,4.63503726 115.325153,4.76828797 115.06053,4.66195659 C115.081526,4.3736505 114.990215,4.14672049 114.854339,3.93917241 C114.736091,3.75827446 114.660626,3.54453493 114.862064,3.39782455 C114.981698,3.3103367 115.143522,3.38463407 115.187097,3.57199265 C115.226365,3.74149096 115.274992,3.87697664 115.338098,3.97047508 C115.461344,3.91119294 115.53243,3.80710534 115.534198,3.64127749 C115.786489,3.59162065 116.074359,3.54334796 115.975421,3.22360631 C115.919293,3.04193492 115.718374,2.98137779 115.510986,3.06754193 C115.16166,3.21270603 114.987378,3.07861524 114.882542,2.77582959 C114.840684,2.65540741 114.685238,2.60765378 114.570318,2.6638854 Z M32.955507,4.51599667 C32.6470747,4.67520964 32.728256,4.90443935 32.862198,5.12623953 C33.1970237,5.14352027 33.5337948,5.17124772 33.8727627,5.2093378 C33.7938876,5.15927814 33.7306745,5.07833185 33.691261,4.97634582 C33.563667,4.64540357 33.3637318,4.30499651 32.955507,4.51599667 Z M49.7062036,4.07669859 C49.4105329,4.29678819 49.4276228,4.56692936 49.3548824,4.8026305 C49.5624841,4.80068625 49.7731944,4.82034034 49.9861096,4.87250996 C50.2685065,4.94176975 50.4095142,4.76567474 50.5405998,4.54881995 C50.5681744,4.50325363 50.5876961,4.45534874 50.6031646,4.40591959 C50.2596847,4.46232543 49.9311611,4.46361199 49.7062036,4.07669859 Z M126.883557,4.85340556 L126.810857,4.85786191 C127.163853,4.82761051 127.540891,4.96485635 127.820999,4.60247639 L127.835344,4.5817979 C127.494344,4.47004027 127.184631,4.56152061 126.883557,4.85340556 Z M110.517114,4.06984896 C110.503017,4.40713425 110.436088,4.62523237 110.321654,4.74816205 C110.420219,4.71202555 110.537126,4.68253392 110.672562,4.65924178 C110.840679,4.63046706 111.048416,4.57609215 111.200589,4.59154532 C110.975201,4.47511387 110.764696,4.27645382 110.517114,4.06984896 Z M141.517378,2.35786358 C141.293195,2.87080927 141.702333,3.22040947 141.970815,3.5537259 C142.123471,3.57607913 142.147957,3.66793477 142.125543,3.78573892 C142.145394,3.82658636 142.160237,3.86751748 142.168913,3.90898168 C142.306369,3.93690311 142.442974,3.94516599 142.568628,3.92722928 C142.43689,3.65454891 142.225724,3.37803906 142.188606,3.02315769 C142.167054,3.08753454 142.126113,3.15356915 142.064309,3.22041797 C141.741188,2.93682209 141.894558,2.53879877 141.517378,2.35786358 Z M143.209956,3.09279794 C143.027101,3.27161725 143.047446,3.37919078 143.120018,3.46927057 C143.153674,3.38311776 143.176992,3.28078384 143.189672,3.16248174 L143.617105,3.16229301 L143.617105,3.16229301 C143.911924,3.38178317 143.945617,3.9919394 144.467868,3.81510167 C144.88546,3.6736006 144.585665,3.39978417 144.490909,3.14147181 C144.312956,3.21552621 144.088299,3.14368619 143.879594,3.01653659 C143.590512,2.84061754 143.432564,2.87508696 143.209956,3.09279794 Z M21.3297303,2.46449455 C21.315671,2.81114683 21.3756385,3.27246713 20.7928917,3.14958962 C20.2219088,3.02909551 19.7395861,2.64430883 19.724379,2.08023751 C19.712902,1.65546267 20.1966593,1.61176701 20.6706612,1.61706345 C21.2912823,1.5651583 21.3492413,1.98304775 21.3297303,2.46449455 Z\"></path>\r\n            </g>\r\n        </g>\r\n    </g>\r\n</svg>";

var WaveSVG = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\r\n<svg width=\"320px\" height=\"44px\" viewBox=\"0 0 320 44\" preserveAspectRatio=\"none\"version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r\n    <title>Top Wave</title>\r\n    <g id=\"🧩-Symbols\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <path d=\"M320,43.9992979 L320,0 C315.399975,2.30785117 273.670562,21.5879915 163.504435,21.993093 L159.926758,21.9996489 C39.8718262,21.9996489 0,44.1435924 0,43.9992979 L320,43.9992979 Z\" id=\"Top-Wave\" fill=\"#ECECF0\"></path>\r\n    </g>\r\n</svg>";

var colorChoices = ["primary", "primary1", "gray5", "gray4", "gray3", "gray2", "gray1", "gray0", "accentA", "accentA1", "accentB", "accentB1", "util-error", "util-success", "brand-black", "brand-white", "brand-transparent", "brand-blue", "brand-orange", "brand-grey", "disabled"];

var Wave = function Wave(_ref) {
  var colorTop = _ref.colorTop,
      colorBottom = _ref.colorBottom,
      reverseDirection = _ref.reverseDirection;
  var classes = classnames("wave-inlinesvg", "color-top-".concat(colorTop), "color-bottom-".concat(colorBottom), reverseDirection && "reverse-direction");
  return /*#__PURE__*/React__default.createElement("div", {
    className: "wave"
  }, /*#__PURE__*/React__default.createElement(InlineSVG, {
    path: "".concat(WaveSVG),
    title: "Wave svg",
    description: "Decorative wave image",
    role: "img",
    focus: false,
    className: classes
  }));
};

Wave.defaultProps = {
  colorTop: "brand-white",
  colorBottom: "gray1",
  reverseDirection: false
};
Wave.propTypes = {
  colorTop: PropTypes.oneOf(colorChoices),
  colorBottom: PropTypes.oneOf(colorChoices),
  reverseDirection: PropTypes.bool
};

var _this = undefined;

var trapFocus = function trapFocus(element, prepend, append) {
  if (!element) {
    return;
  }

  var KEYCODE_TAB = 9;
  var focusableEls = Array.prototype.slice.call(element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'));

  if (prepend) {
    focusableEls.unshift(document.querySelector(prepend));
  }

  if (append) {
    focusableEls.push(document.querySelector(append));
  }

  var firstFocusableEl = focusableEls[0];
  var lastFocusableEl = focusableEls[focusableEls.length - 1]; // focus first element

  if (firstFocusableEl) {
    firstFocusableEl.tabIndex = -1;
    firstFocusableEl.focus();
    firstFocusableEl.tabIndex = 0;
  }

  var keydownHandler = function keydownHandler(e) {
    var isTabPressed = e.key === "Tab" || e.keyCode === KEYCODE_TAB;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      /* shift + tab */
      if (typeof document !== "undefined" && document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } else if (typeof document !== "undefined" && document.activeElement === lastFocusableEl) {
      firstFocusableEl.focus();
      e.preventDefault();
    }
  };

  element.addEventListener("keydown", keydownHandler);
  return function () {
    element.removeEventListener("keydown", keydownHandler);
  };
}; // Consolidating DOM check with single function. Should return bool true|false.

var canUseDOM = function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement && (typeof isServer === "undefined" || global.isServer !== true));
};
var scrollElement = function scrollElement(element, to, scrollType, duration) {
  if (!element) {
    return;
  }

  var easing = function easing(t, b, c, d) {
    return c * (t / d) * (t / d) + b;
  };

  var startDate = new Date().getTime();
  var start = element[scrollType];

  var animateScroll = function animateScroll() {
    var currentTime = new Date().getTime() - startDate;
    element[scrollType] = Number(easing(currentTime, start, to - start, duration));

    if (canUseDOM() && currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      element[scrollType] = to; // eslint-disable-line no-param-reassign
    }
  };

  animateScroll();
};
var bodyScroll = function bodyScroll(bool) {
  if (typeof document !== "undefined") {
    return bool ? document.body.removeAttribute("data-dialog") : document.body.setAttribute("data-dialog", "open");
  }

  return null;
};
var debounce$2 = function debounce(fn, ms) {
  var timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      timer = null;
      fn.apply(_this);
    }, ms);
  };
};

var VideoPlayer = function VideoPlayer(_ref) {
  var videoSrc = _ref.videoSrc,
      trackSrc = _ref.trackSrc,
      width = _ref.width,
      poster = _ref.poster,
      preload = _ref.preload,
      mute = _ref.mute,
      fallbackContent = _ref.fallbackContent,
      isDecoration = _ref.isDecoration,
      addClass = _ref.addClass;
  var myRef = React__default.useRef(null);
  var baseClassName = 'video-player';
  var pausedByScrollAttributeName = 'data-paused-by-scroll'; // The <video /> data attribute for whether or not the element was paused by scrolling away

  var classes = classnames(baseClassName, addClass);

  var onScroll = function onScroll() {
    var video = myRef.current;
    var isVideoPlaying = !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2); // https://stackoverflow.com/a/6647216/13158371

    var videoRect = video.getBoundingClientRect();

    var isVideoPartiallyVisible = function isVideoPartiallyVisible() {
      return canUseDOM() && videoRect.top < window.innerHeight && videoRect.bottom >= 0;
    };

    var isVideoFullyVisible = function isVideoFullyVisible() {
      return canUseDOM() && videoRect.top >= 0 && videoRect.bottom <= window.innerHeight;
    }; // [If] video scrolls out of view, pause it
    // [else If] the video is fully in view, and was paused by scrolling away, play it


    if (!isVideoPartiallyVisible() && isVideoPlaying) {
      myRef.current.setAttribute(pausedByScrollAttributeName, true);
      myRef.current.pause();
    } else if (isVideoFullyVisible() && video.getAttribute(pausedByScrollAttributeName) === 'true') {
      myRef.current.play();
    }
  };

  React__default.useEffect(function () {
    // This is for Safari browser to play after component loads.
    if (isDecoration) {
      myRef.current.play();
    }

    return function () {
      if (typeof document !== 'undefined') {
        document.removeEventListener('scroll', onScroll);
      }
    };
  }, []);

  var onPlay = function onPlay() {
    var video = myRef.current;
    var selector = ".".concat(baseClassName, "[data-interactable]"); // Video Components that are not used for decoration

    if (typeof document !== 'undefined') {
      document.querySelectorAll(selector).forEach(function (el) {
        if (video !== el) {
          el.pause();
        }
      });
      document.addEventListener('scroll', onScroll);
    }

    video.setAttribute(pausedByScrollAttributeName, false);
  };

  var onPause = function onPause() {
    // Remove scroll Listener if pause event was triggered by anything other than scrolling away
    if (typeof document !== 'undefined' && !(myRef.current.getAttribute(pausedByScrollAttributeName) === 'true')) {
      document.removeEventListener('scroll', onScroll);
    }
  };

  var onEnded = function onEnded() {
    // Remove scroll Listener if video ended playback
    myRef.current.setAttribute(pausedByScrollAttributeName, false);

    if (typeof document !== 'undefined') {
      document.removeEventListener('scroll', onScroll);
    }
  };

  var closedCaptionsTrack = /*#__PURE__*/React__default.createElement("track", {
    default: true,
    kind: "captions",
    srcLang: "en" // If mute is true then we wont need the trackSrc. This is just making sure to remove
    // any trackSrc if supplied with a true mute prop
    ,
    src: mute ? '' : trackSrc
  }); // Breakpoints utilized by the useMediaQuery functions below.

  var breakpoints = {
    desktop: '(min-width: 1024px)',
    tablet: '(min-width: 768px)'
  }; // The react-responsive useMediaQuery function takes a breakpoint
  // and returns true if the window size falls into the specified width.

  var desktop = reactResponsive.useMediaQuery({
    query: breakpoints.desktop
  });
  var tablet = reactResponsive.useMediaQuery({
    query: breakpoints.tablet
  });
  /**
   * pickSrc() returns the correct videoSrc based on screen resolution.
   * If useMediaQuery fails to return true, it will try to return a
   * valid source (from smallest to largest)
   */

  var pickSrc = function pickSrc() {
    switch (true) {
      // Corercing the string or lack thereof contained in videoSrc.override
      // into a boolean here to use in the case switch.
      case Boolean(videoSrc.override):
        return videoSrc.override;

      case desktop:
        return videoSrc.large;

      case tablet:
        return videoSrc.medium;

      default:
        return videoSrc.small || videoSrc.medium || videoSrc.large;
    }
  };

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/media-has-caption
    React__default.createElement("video", {
      ref: myRef,
      className: classes,
      src: pickSrc(),
      crossOrigin: "anonymous",
      controls: !isDecoration,
      controlslist: "nodownload",
      poster: poster,
      width: width,
      muted: mute || isDecoration,
      preload: preload,
      autoPlay: isDecoration,
      loop: isDecoration,
      playsInline: !isDecoration,
      "data-interactable": isDecoration ? undefined : true,
      onPlay: isDecoration ? null : onPlay,
      onEnded: isDecoration ? null : onEnded,
      onPause: isDecoration ? null : onPause
    }, !isDecoration && closedCaptionsTrack, fallbackContent)
  );
};

VideoPlayer.defaultProps = {
  poster: '',
  trackSrc: '',
  mute: false,
  fallbackContent: 'Your browser does not support the video tag.',
  preload: 'metadata',
  isDecoration: false
};
VideoPlayer.propTypes = {
  videoSrc: PropTypes.shape({
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
    override: PropTypes.string
  }).isRequired,
  trackSrc: PropTypes.string,
  width: PropTypes.number,
  poster: PropTypes.string,
  addClass: PropTypes.string,
  mute: PropTypes.bool,

  /** fallbackContent will only be displayed in browsers
   * that do not support the `<video/>` element. */
  fallbackContent: PropTypes.node,
  preload: PropTypes.string,
  isDecoration: PropTypes.bool
};

/* TypographyDetails returns 2 props: 'html_tag' and 'className' */

var TypographyDetails = function TypographyDetails(defaultTag, className) {
  return {
    defaultTag: defaultTag,
    className: classnames('typography', className)
  };
};
/*
TypographyComponents is a Key / Value pair
- Key: a valid type of <Typography />
- Value: a TypographyDetails object (defined above)
*/


var TypographyComponents = {
  'headline-1': TypographyDetails('h1', 'typography-headline typography-headline-1'),
  'headline-2': TypographyDetails('h2', 'typography-headline typography-headline-2'),
  'headline-3': TypographyDetails('h3', 'typography-headline typography-headline-3'),
  'headline-4': TypographyDetails('h4', 'typography-headline typography-headline-4'),
  'headline-5': TypographyDetails('h5', 'typography-headline typography-headline-5'),
  'headline-6': TypographyDetails('h6', 'typography-headline typography-headline-6'),
  'price-unit': TypographyDetails('span', 'typography-price-unit'),
  'price-unit-strikethrough': TypographyDetails('span', 'typography-price-unit-strikethrough'),
  'price-sale': TypographyDetails('span', 'typography-price-sale'),
  cta: TypographyDetails('span', 'typography-cta'),
  'cta-tertiary': TypographyDetails('span', 'typography-cta-tertiary'),
  subtitle: TypographyDetails('span', 'typography-subtitle'),
  'field-label': TypographyDetails('span', 'typography-field-label'),
  body: TypographyDetails('span', 'typography-body'),
  'body-medium': TypographyDetails('span', 'typography-body typography-body-medium'),
  eyebrow: TypographyDetails('span', 'typography-eyebrow'),
  'text-link': TypographyDetails('span', 'typography-text-link'),
  'input-text': TypographyDetails('span', 'typography-input-text'),
  caption: TypographyDetails('span', 'typography-caption'),
  helper: TypographyDetails('span', 'typography-helper'),
  breadcrumb: TypographyDetails('span', 'typography-breadcrumb'),
  srt: TypographyDetails('span', 'screen-reader-text'),
  licensing: TypographyDetails('span', 'typography-licensing'),
  subtext: TypographyDetails('span', 'typography-subtext')
};

/**
 * Utilize `Typography` to present text
 */

var Typography = function Typography(_ref) {
  var addClass = _ref.addClass,
      variant = _ref.variant,
      htmlTagOverride = _ref.htmlTagOverride,
      color = _ref.color,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["addClass", "variant", "htmlTagOverride", "color", "children"]);

  if (!(variant in TypographyComponents)) {
    return null;
  }

  var _TypographyComponents = TypographyComponents[variant],
      defaultTag = _TypographyComponents.defaultTag,
      className = _TypographyComponents.className;

  var colorClass = _defineProperty({}, "color-".concat(color), color);

  var newProps = _objectSpread2({
    className: classnames(className, colorClass, addClass)
  }, rest);

  var tag = htmlTagOverride || defaultTag;
  return /*#__PURE__*/React__default.createElement(tag, newProps, children);
};

Typography.variants = Object.keys(TypographyComponents);
Typography.propTypes = {
  /** Variant determines the styling for the component */
  variant: PropTypes.oneOf(['headline-1', 'headline-2', 'headline-3', 'headline-4', 'headline-5', 'headline-6', 'price-unit', 'price-unit-strikethrough', 'price-sale', 'cta', 'cta-tertiary', 'subtitle', 'field-label', 'body', 'body-medium', 'eyebrow', 'text-link', 'input-text', 'caption', 'helper', 'breadcrumb', 'srt', 'licensing', 'subtext']).isRequired,

  /** The content of the component */
  children: PropTypes.node,

  /** Overides the default tag that the component is rendered as */
  htmlTagOverride: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'address', 'div']),

  /** Color provides the component with a class name that affects the color of text */
  color: PropTypes.string,

  /** addClass appends a string to the component's className prop */
  addClass: PropTypes.string
};

var Badge = function Badge(_ref) {
  var count = _ref.count,
      color = _ref.color;
  var badgeClasses = classnames("badge", "background-color-".concat(color));

  if (!count || count < 1) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: badgeClasses,
    color: color
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "caption",
    color: "brand-white"
  }, count));
};

Badge.defaultProps = {
  color: "brand-blue"
};
Badge.propTypes = {
  count: PropTypes.number.isRequired,
  color: PropTypes.string
};

var Icon = function Icon(_ref) {
  var name = _ref.name,
      color = _ref.color,
      size = _ref.size,
      error = _ref.error,
      disabled = _ref.disabled,
      addClass = _ref.addClass,
      badgeCount = _ref.badgeCount,
      badgeColor = _ref.badgeColor,
      testId = _ref.testId;
  var classes = classnames('icon', "icon-".concat(name), color ? "icon-".concat(color) : '', "icon-".concat(size), error ? 'error' : '', disabled ? 'disabled' : '', badgeCount ? 'badge' : '', addClass);

  if (badgeCount && badgeCount > 0) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "icon-badge"
    }, /*#__PURE__*/React__default.createElement("span", {
      className: classes,
      "aria-hidden": "true",
      "data-testid": testId
    }, /*#__PURE__*/React__default.createElement(Badge, {
      count: badgeCount,
      color: badgeColor
    })));
  }

  return /*#__PURE__*/React__default.createElement("span", {
    className: classes,
    "aria-hidden": "true",
    "data-testid": testId
  });
};

Icon.defaultProps = {
  size: 24,
  badgeColor: 'brand-blue',
  testId: 'icon'
};
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  addClass: PropTypes.string,
  // Badge props:
  badgeCount: PropTypes.number,
  badgeColor: PropTypes.string,
  testId: PropTypes.string
};

// Utilize `TextLink` to navigate around the application, or to link to an external site

var TextLink = function TextLink(_ref) {
  var defaultClassOverride = _ref.defaultClassOverride,
      addClass = _ref.addClass,
      to = _ref.to,
      title = _ref.title,
      color = _ref.color,
      icon = _ref.icon,
      iconPos = _ref.iconPos,
      typoVariant = _ref.typoVariant,
      target = _ref.target,
      rel = _ref.rel;
  var defaultClass = defaultClassOverride || 'text-link';
  var iconClass = iconPos ? "has-icon icon-".concat(iconPos) : '';
  var classes = classnames(defaultClass, addClass, iconClass);
  return /*#__PURE__*/React__default.createElement("a", {
    href: to,
    className: classes,
    target: target,
    rel: rel
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: typoVariant,
    color: color
  }, title), iconPos && /*#__PURE__*/React__default.createElement(Icon, {
    name: icon,
    color: color || 'accentB',
    size: 14
  }));
};

TextLink.defaultProps = {
  icon: 'placeholder-bold',
  typoVariant: 'text-link'
};
TextLink.propTypes = {
  defaultClassOverride: PropTypes.string,
  addClass: PropTypes.string,
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  iconPos: PropTypes.oneOf(['left', 'right']),
  icon: PropTypes.string,
  typoVariant: PropTypes.oneOf(['text-link', 'helper', 'cta-tertiary', 'cta', 'body']),
  target: PropTypes.string,
  rel: PropTypes.string
};

var CTA = function CTA(_ref) {
  var text = _ref.text,
      textColor = _ref.textColor,
      link = _ref.link,
      color = _ref.color,
      style = _ref.style;

  if (style === 'text-link') {
    return /*#__PURE__*/React__default.createElement(TextLink, {
      addClass: "cta2",
      to: link,
      title: text,
      color: textColor,
      typoVariant: style
    });
  }

  return /*#__PURE__*/React__default.createElement(TextLink, {
    addClass: "ctaButton btn btn-".concat(style, " background-color-").concat(color),
    to: link,
    title: text,
    color: textColor,
    typoVariant: "cta"
  });
};

CTA.defaultProps = {};
CTA.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.string
};

var Headline = function Headline(_ref) {
  var text1 = _ref.text1,
      text2 = _ref.text2,
      text3 = _ref.text3,
      color = _ref.color,
      state = _ref.state,
      headlineTag = _ref.headlineTag;
  var isMobile = reactResponsive.useMediaQuery({
    query: "(max-width: 767px)"
  });

  var variantValue = function variantValue() {
    if (isMobile) {
      return "headline-4";
    }

    return "headline-1";
  };

  return /*#__PURE__*/React__default.createElement(Typography, {
    variant: state ? "body-medium" : variantValue(),
    addClass: "typoOverride",
    htmlTagOverride: headlineTag,
    color: color
  }, text1, text2 && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("br", null), " ", text2), text3 && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("br", null), " ", text3));
};

Headline.defaultProps = {
  text1: "",
  text2: "",
  text3: "",
  color: "",
  headlineTag: "h1"
};
Headline.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  color: PropTypes.string,
  state: PropTypes.bool,
  headlineTag: PropTypes.oneOf(["h1", "h2", "p"])
};

var Hero = function Hero(_ref) {
  var presetLayout = _ref.presetLayout,
      layout = _ref.layout,
      isAlt = _ref.isAlt,
      isLeft = _ref.isLeft,
      headlineArtworkDesktop = _ref.headlineArtworkDesktop,
      headlineArtworkMobile = _ref.headlineArtworkMobile,
      headline1 = _ref.headline1,
      headline2 = _ref.headline2,
      headline3 = _ref.headline3,
      headlineFontStyle = _ref.headlineFontStyle,
      headlineFontColor = _ref.headlineFontColor,
      bodySubtitle = _ref.bodySubtitle,
      bodySubtitleWidth = _ref.bodySubtitleWidth,
      heroSVG = _ref.heroSVG,
      textAlign = _ref.textAlign,
      textPlacementDesktop = _ref.textPlacementDesktop,
      textPlacementMobile = _ref.textPlacementMobile,
      textShadow = _ref.textShadow,
      textBackgroundColor = _ref.textBackgroundColor,
      primaryCTAText = _ref.primaryCTAText,
      primaryCTALink = _ref.primaryCTALink,
      primaryCTATextColor = _ref.primaryCTATextColor,
      primaryCTAColor = _ref.primaryCTAColor,
      primaryCTAStyle = _ref.primaryCTAStyle,
      secondaryCTAText = _ref.secondaryCTAText,
      secondaryCTALink = _ref.secondaryCTALink,
      secondaryCTATextColor = _ref.secondaryCTATextColor,
      secondaryCTAColor = _ref.secondaryCTAColor,
      secondaryCTAStyle = _ref.secondaryCTAStyle,
      image = _ref.image,
      imageAltText = _ref.imageAltText,
      video = _ref.video,
      wave = _ref.wave,
      waveColorTop = _ref.waveColorTop,
      waveColorBottom = _ref.waveColorBottom,
      tint = _ref.tint,
      bottomPadding = _ref.bottomPadding;
  var isDesktop = reactResponsive.useMediaQuery({
    query: "(min-width: 767px)"
  });
  var presetLayoutDetails = {
    "50/50, Image Right": {
      layout: layout || "50/50",
      bodySubtitleWidth: bodySubtitleWidth || false,
      headlineFontColor: headlineFontColor || "brand-white",
      headlineFontStyle: headlineFontStyle || "h1",
      textBackgroundColor: textBackgroundColor || "primary",
      primaryCTATextColor: primaryCTATextColor || "primary",
      primaryCTAColor: primaryCTAColor || "brand-white",
      primaryCTAStyle: primaryCTAStyle || "secondary",
      secondaryCTATextColor: secondaryCTATextColor || "brand-white",
      secondaryCTAColor: secondaryCTAColor || "brand-white",
      secondaryCTAStyle: secondaryCTAStyle || "text-link",
      textShadow: textShadow || false,
      textAlign: textAlign || "Center",
      textPlacementDesktop: textPlacementDesktop || "Centered",
      textPlacementMobile: textPlacementMobile || "Center",
      isAlt: isAlt || false,
      tint: tint || false,
      isLeft: isLeft || false
    },
    "50/50, Osi": {
      layout: layout || "50/50",
      bodySubtitleWidth: bodySubtitleWidth || false,
      headlineFontColor: headlineFontColor || "primary",
      headlineFontStyle: headlineFontStyle || "h1",
      textBackgroundColor: textBackgroundColor || "brand-transparent"
    },
    "50/50, Image Left": {
      layout: layout || "50/50",
      bodySubtitleWidth: bodySubtitleWidth || false,
      headlineFontColor: headlineFontColor || "primary",
      headlineFontStyle: headlineFontStyle || "h1",
      textBackgroundColor: textBackgroundColor || "pastel-blue",
      primaryCTATextColor: primaryCTATextColor || "brand-white",
      primaryCTAColor: primaryCTAColor || "primary",
      primaryCTAStyle: primaryCTAStyle || "primary",
      secondaryCTATextColor: secondaryCTATextColor || "text-link",
      secondaryCTAColor: secondaryCTAColor || "brand-white",
      secondaryCTAStyle: secondaryCTAStyle || "text-link",
      textShadow: textShadow || false,
      textAlign: textAlign || "Center",
      textPlacementDesktop: textPlacementDesktop || "Centered",
      textPlacementMobile: textPlacementMobile || "Center",
      isAlt: isAlt || true,
      tint: tint || false,
      isLeft: isLeft || true
    },
    "Full Width, Text Left": {
      layout: layout || "Full",
      bodySubtitleWidth: bodySubtitleWidth || false,
      headlineFontColor: headlineFontColor || "brand-white",
      headlineFontStyle: headlineFontStyle || "h1",
      textBackgroundColor: textBackgroundColor || "brand-transparent",
      primaryCTATextColor: primaryCTATextColor || "primary",
      primaryCTAColor: primaryCTAColor || "brand-white",
      primaryCTAStyle: primaryCTAStyle || "secondary",
      secondaryCTATextColor: secondaryCTATextColor || "brand-white",
      secondaryCTAColor: secondaryCTAColor || "brand-white",
      secondaryCTAStyle: secondaryCTAStyle || "text-link",
      textShadow: textShadow || true,
      textAlign: textAlign || "Center",
      textPlacementDesktop: textPlacementDesktop || "Centered",
      textPlacementMobile: textPlacementMobile || "Top",
      tint: tint || true,
      isLeft: isLeft || true
    },
    "Full Width, Text Center": {
      layout: layout || "Full",
      bodySubtitleWidth: bodySubtitleWidth || true,
      headlineFontColor: headlineFontColor || "brand-white",
      headlineFontStyle: headlineFontStyle || "h1",
      textBackgroundColor: textBackgroundColor || "primary",
      primaryCTATextColor: primaryCTATextColor || "primary",
      primaryCTAColor: primaryCTAColor || "brand-white",
      primaryCTAStyle: primaryCTAStyle || "secondary",
      secondaryCTATextColor: secondaryCTATextColor || "brand-white",
      secondaryCTAColor: secondaryCTAColor || "brand-white",
      secondaryCTAStyle: secondaryCTAStyle || "text-link",
      textShadow: textShadow || true,
      textAlign: textAlign || "Center",
      textPlacementDesktop: textPlacementDesktop || "Centered",
      textPlacementMobile: textPlacementMobile || "Center",
      tint: tint || true,
      isLeft: isLeft || false
    },
    "Full Width, Headline Artwork": {
      layout: layout || "Full",
      bodySubtitleWidth: bodySubtitleWidth || false,
      headlineFontColor: headlineFontColor || "brand-white",
      headlineFontStyle: headlineFontStyle || "h1",
      textBackgroundColor: textBackgroundColor || "brand-transparent",
      primaryCTATextColor: primaryCTATextColor || "primary",
      primaryCTAColor: primaryCTAColor || "brand-white",
      primaryCTAStyle: primaryCTAStyle || "secondary",
      secondaryCTATextColor: secondaryCTATextColor || "brand-white",
      secondaryCTAColor: secondaryCTAColor || "brand-white",
      secondaryCTAStyle: secondaryCTAStyle || "text-link",
      textShadow: textShadow || true,
      textAlign: textAlign || "Center",
      textPlacementDesktop: textPlacementDesktop || "Centered",
      textPlacementMobile: textPlacementMobile || "Center",
      tint: tint || true,
      isLeft: isLeft || false
    }
  };
  var classes = classnames("hero", {
    "osi-hero": presetLayout === "50/50, Osi"
  }, {
    hero50: presetLayoutDetails[presetLayout].layout === "50/50"
  }, {
    "hero-full": presetLayoutDetails[presetLayout].layout === "Full"
  }, {
    "hero-full-left": presetLayoutDetails[presetLayout].layout === "Full" && presetLayoutDetails[presetLayout].isLeft
  }, {
    "hero50-Alt": presetLayoutDetails[presetLayout].layout === "50/50" && presetLayoutDetails[presetLayout].isAlt
  }, {
    paddingSmall: bottomPadding === "Small"
  }, {
    paddingLarge: bottomPadding === "Large"
  }, {
    "no-sub": bodySubtitle
  });
  var imageClasses = classnames("hero-image", {
    image50: presetLayoutDetails[presetLayout].layout === "50/50"
  }, {
    imageFull: presetLayoutDetails[presetLayout].layout === "Full"
  }, {
    image50Alt: presetLayoutDetails[presetLayout].layout === "50/50" && presetLayoutDetails[presetLayout].isAlt
  });
  var contentClasses = classnames("content", {
    "text-shadow": presetLayoutDetails[presetLayout].textShadow
  }, presetLayoutDetails[presetLayout].tint ? "tint" : "background-color-".concat(presetLayoutDetails[presetLayout].textBackgroundColor), {
    "align-left": presetLayoutDetails[presetLayout].textAlign === "Left"
  }, {
    "align-center": presetLayoutDetails[presetLayout].textAlign === "Center"
  }, {
    "top-left": presetLayoutDetails[presetLayout].textPlacementDesktop === "Top-Left" && isDesktop
  }, {
    "top-center": presetLayoutDetails[presetLayout].textPlacementDesktop === "Top-center" && isDesktop || presetLayoutDetails[presetLayout].textPlacementMobile === "Top"
  }, {
    "top-right": presetLayoutDetails[presetLayout].textPlacementDesktop === "Top-right" && isDesktop
  }, {
    "center-left": presetLayoutDetails[presetLayout].textPlacementDesktop === "Center-left" && isDesktop
  }, {
    center: presetLayoutDetails[presetLayout].textPlacementDesktop === "Centered" && isDesktop || presetLayoutDetails[presetLayout].textPlacementMobile === "Center" && !isDesktop
  }, {
    "center-right": presetLayoutDetails[presetLayout].textPlacementDesktop === "Center-right" && isDesktop
  }, {
    "bottom-left": presetLayoutDetails[presetLayout].textPlacementDesktop === "Bottom-left" && isDesktop
  }, {
    "bottom-center": presetLayoutDetails[presetLayout].textPlacementDesktop === "Bottom-center" && isDesktop || presetLayoutDetails[presetLayout].textPlacementMobile === "Bottom"
  }, {
    "bottom-right": presetLayoutDetails[presetLayout].textPlacementDesktop === "Bottom-right" && isDesktop
  });
  var ctaClasses = classnames("cta-wrapper");
  return /*#__PURE__*/React__default.createElement("section", {
    className: classes
  }, /*#__PURE__*/React__default.createElement("div", {
    className: contentClasses
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "typoWrapper ".concat(presetLayoutDetails[presetLayout].bodySubtitleWidth && "max")
  }, headline1 === "" && headlineArtworkDesktop && headlineArtworkMobile && (!isDesktop ? /*#__PURE__*/React__default.createElement(InlineSVG, {
    path: headlineArtworkMobile,
    className: "inline-svg",
    title: imageAltText
  }) : /*#__PURE__*/React__default.createElement(InlineSVG, {
    path: headlineArtworkDesktop,
    className: "inline-svg",
    title: imageAltText
  })), headline1 && /*#__PURE__*/React__default.createElement(Headline, {
    text1: headline1,
    text2: headline2,
    text3: headline3,
    color: presetLayoutDetails[presetLayout].headlineFontColor,
    headlineTag: presetLayoutDetails[presetLayout].headlineFontStyle
  }), bodySubtitle && /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body-medium",
    addClass: "body-sub",
    color: presetLayoutDetails[presetLayout].headlineFontColor
  }, bodySubtitle), /*#__PURE__*/React__default.createElement("div", {
    className: ctaClasses
  }, presetLayout === "50/50, Osi" && /*#__PURE__*/React__default.createElement(InlineSVG, {
    path: heroSVG,
    className: "inline-svg infogrpahic-svg",
    title: headline1
  }), primaryCTAText && primaryCTALink && /*#__PURE__*/React__default.createElement(CTA, {
    text: primaryCTAText,
    textColor: presetLayoutDetails[presetLayout].primaryCTATextColor,
    link: primaryCTALink,
    color: presetLayoutDetails[presetLayout].primaryCTAColor,
    style: presetLayoutDetails[presetLayout].primaryCTAStyle
  }), secondaryCTAText && secondaryCTALink && /*#__PURE__*/React__default.createElement(CTA, {
    text: secondaryCTAText,
    textColor: presetLayoutDetails[presetLayout].secondaryCTATextColor,
    link: secondaryCTALink,
    color: presetLayoutDetails[presetLayout].secondaryCTAColor,
    style: presetLayoutDetails[presetLayout].secondaryCTAStyle
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: imageClasses
  }, video ? /*#__PURE__*/React__default.createElement(VideoPlayer, {
    isDecoration: true,
    videoSrc: video
  }) : /*#__PURE__*/React__default.createElement(Image, {
    src: image.imageDesktop,
    alt: imageAltText
  }, /*#__PURE__*/React__default.createElement(Image.Source, {
    media: "(max-width:767px)",
    srcSet: image.imageMobile
  }), /*#__PURE__*/React__default.createElement(Image.Source, {
    media: "(max-width:1024px)",
    srcSet: image.imageTablet
  }))), wave && /*#__PURE__*/React__default.createElement("div", {
    className: "hero-wave"
  }, /*#__PURE__*/React__default.createElement(Wave, {
    colorTop: waveColorTop,
    colorBottom: waveColorBottom
  })));
};

Hero.defaultProps = {
  wave: false,
  waveColorTop: "brand-transparent",
  waveColorBottom: "brand-white",
  bottomPadding: "None"
};
Hero.propTypes = {
  layout: PropTypes.oneOf(["50/50", "Full"]),
  presetLayout: PropTypes.oneOf(["50/50, Osi", "50/50, Image Right", "50/50, Image Left", "Full Width, Text Left", "Full Width, Text Center", "Full Width, Headline Artwork"]).isRequired,
  isAlt: PropTypes.bool,
  isLeft: PropTypes.bool,
  headlineArtworkDesktop: PropTypes.string,
  headlineArtworkMobile: PropTypes.string,
  headline1: PropTypes.string.isRequired,
  headline2: PropTypes.string,
  headline3: PropTypes.string,
  headlineFontStyle: PropTypes.oneOf(["h1", "h2"]),
  headlineFontColor: PropTypes.oneOf(["brand-white", "gray5", "primary"]),
  bodySubtitle: PropTypes.string,
  bodySubtitleWidth: PropTypes.bool,
  textAlign: PropTypes.oneOf(["Left", "Center"]),
  textPlacementDesktop: PropTypes.oneOf(["Top-Left", "Top-center", "Top-right", "Center-left", "Centered", "Center-right", "Bottom-left", "Bottom-center", "Bottom-right"]),
  heroSVG: PropTypes.string,
  textPlacementMobile: PropTypes.oneOf(["Top", "Center", "Bottom"]),
  textShadow: PropTypes.bool,
  textBackgroundColor: PropTypes.oneOf(["primary", "primary1", "gray3", "pastel-blue", "brand-transparent"]),
  primaryCTAText: PropTypes.string,
  primaryCTALink: PropTypes.string,
  primaryCTATextColor: PropTypes.oneOf(["primary", "brand-white"]),
  primaryCTAColor: PropTypes.string,
  primaryCTAStyle: PropTypes.oneOf(["primary", "secondary", "text-link"]),
  secondaryCTAText: PropTypes.string,
  secondaryCTALink: PropTypes.string,
  secondaryCTATextColor: PropTypes.oneOf(["primary", "brand-white", "text-link"]),
  secondaryCTAColor: PropTypes.string,
  secondaryCTAStyle: PropTypes.oneOf(["primary", "secondary", "text-link"]),
  image: PropTypes.shape({
    imageDesktop: PropTypes.string,
    imageTablet: PropTypes.string,
    imageMobile: PropTypes.string
  }).isRequired,
  imageAltText: PropTypes.string.isRequired,
  tint: PropTypes.bool,
  bottomPadding: PropTypes.oneOf(["None", "Small", "Large"]),
  wave: PropTypes.bool,
  waveColorTop: PropTypes.string,
  waveColorBottom: PropTypes.string,
  video: PropTypes.shape({
    large: PropTypes.string,
    medium: PropTypes.string,
    small: PropTypes.string,
    override: PropTypes.string
  })
};

var Logo = function Logo(_ref) {
  var variant = _ref.variant,
      title = _ref.title,
      color = _ref.color,
      description = _ref.description,
      className = _ref.className,
      addClass = _ref.addClass,
      animated = _ref.animated,
      tagline = _ref.tagline,
      to = _ref.to;
  var classes = classnames(className || "logo", addClass, animated && "logo-animated");

  function variantChoice() {
    // Horizontal
    if (variant === "horizontal") {
      if (color === "black") {
        return LogoHorizBlack;
      }

      if (color === "white") {
        return LogoHorizWhite;
      }

      if (color === "blue") {
        return LogoHorizBlue;
      }

      if (color === "orange") {
        return LogoHorizOrange;
      }

      return LogoHoriz;
    } // Mark


    if (variant === "mark") {
      if (color === "black") {
        return LogoMarkBlack;
      }

      if (color === "white") {
        return LogoMarkWhite;
      }

      if (color === "blue") {
        return LogoMarkBlue;
      }

      if (color === "orange") {
        return LogoMarkOrange;
      }

      return LogoMark;
    } // Regular Logo


    if (variant === "regular") {
      if (color === "black") {
        return LogoRegularBlack;
      }

      if (color === "white") {
        return LogoRegularWhite;
      }

      if (color === "blue") {
        return LogoRegularBlue;
      }

      if (color === "orange") {
        return LogoRegularOrange;
      }

      return LogoRegular;
    } // Horizontal Tagline


    if (variant === "horizontalTagline") {
      if (color === "black") {
        return LogoHorizTaglineBlack;
      }

      if (color === "white") {
        return LogoHorizTaglineWhite;
      }

      if (color === "blue") {
        return LogoHorizTaglineBlue;
      }

      if (color === "orange") {
        return LogoHorizTaglineOrange;
      }

      return LogoHorizTagline;
    } // Stacked Tagline


    if (variant === "regularTagline") {
      if (color === "black") {
        return LogoTaglineBlack;
      }

      if (color === "white") {
        return LogoTaglineWhite;
      }

      if (color === "blue") {
        return LogoTaglineBlue;
      }

      if (color === "orange") {
        return LogoTaglineOrange;
      }

      return LogoTagline;
    }
  }

  if (to) {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "logo-wrapper"
    }, /*#__PURE__*/React__default.createElement("a", {
      href: to
    }, /*#__PURE__*/React__default.createElement(InlineSVG, {
      path: "".concat(variantChoice()),
      title: title,
      description: description,
      role: "img",
      className: classes
    }), variant === "horizontal" && tagline && /*#__PURE__*/React__default.createElement("div", {
      className: "tagline-wrapper"
    }, /*#__PURE__*/React__default.createElement(Typography, {
      variant: "body",
      color: "primary"
    }, tagline))));
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: "logo-wrapper"
  }, /*#__PURE__*/React__default.createElement(InlineSVG, {
    path: "".concat(variantChoice()),
    title: title,
    description: description,
    role: "img",
    className: classes
  }), variant === "horizontal" && tagline && /*#__PURE__*/React__default.createElement("div", {
    className: "tagline-wrapper"
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body",
    color: "primary"
  }, tagline)));
};

Logo.defaultProps = {
  variant: "regular"
};
Logo.propTypes = {
  variant: PropTypes.oneOf(["regular", "horizontal", "mark", "horizontalTagline", "regularTagline"]),
  tagline: PropTypes.string,
  color: PropTypes.oneOf(["black", "white", "blue", "orange"]),
  animated: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  addClass: PropTypes.string,
  to: PropTypes.string
};

var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      addClass = _ref.addClass,
      rest = _objectWithoutProperties(_ref, ["children", "addClass"]);

  var classes = classnames('list-item', addClass);
  return /*#__PURE__*/React__default.createElement("li", _extends({
    className: classes
  }, rest), children);
};

ListItem.defaultProps = {};
ListItem.propTypes = {
  children: PropTypes.node,
  addClass: PropTypes.string
};

var List = function List(_ref) {
  var children = _ref.children,
      className = _ref.className,
      addClass = _ref.addClass,
      ordered = _ref.ordered,
      horizontal = _ref.horizontal,
      rest = _objectWithoutProperties(_ref, ["children", "className", "addClass", "ordered", "horizontal"]);

  var classes = classnames(className, addClass, {
    'list-horizontal': horizontal
  });
  var ListTag = ordered ? 'ol' : 'ul';
  return /*#__PURE__*/React__default.createElement(ListTag, _extends({
    className: classes
  }, rest), children);
};

List.Item = ListItem;
List.defaultProps = {};
List.propTypes = {
  ordered: PropTypes.bool,
  horizontal: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.oneOf(['list-ordered', 'list-unordered']),
  addClass: PropTypes.string
};

var Nav = function Nav() {
  return /*#__PURE__*/React__default.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React__default.createElement(Logo, {
    variant: "horizontal",
    to: "/"
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "menu-wrapper"
  }, /*#__PURE__*/React__default.createElement(List, {
    horizontal: true
  }, /*#__PURE__*/React__default.createElement(List.Item, null, /*#__PURE__*/React__default.createElement(TextLink, {
    to: "#about",
    title: "About",
    typoVariant: "cta-tertiary",
    addClass: "nav-item",
    color: "brand-blue"
  })), /*#__PURE__*/React__default.createElement(List.Item, null, /*#__PURE__*/React__default.createElement(TextLink, {
    to: "#benefits",
    title: "Benefits",
    typoVariant: "cta-tertiary",
    addClass: "nav-item",
    color: "brand-blue"
  })))));
}; // Nav.defaultProps = {

var Footer = function Footer(_ref) {
  var backgroundColor = _ref.backgroundColor,
      businessName = _ref.businessName,
      footerText = _ref.footerText;
  var classes = classnames("footer", "background-color-".concat(backgroundColor));
  var year = new Date().getFullYear();
  return /*#__PURE__*/React__default.createElement("footer", {
    className: classes
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body-medium",
    color: "brand-white"
  }, "\xA9 ", year, " ", businessName, ". All Rights Reserved."), /*#__PURE__*/React__default.createElement(List, {
    horizontal: true
  }, /*#__PURE__*/React__default.createElement(List.Item, null, /*#__PURE__*/React__default.createElement(TextLink, {
    to: "/terms",
    title: "Terms & Conditions ",
    typoVariant: "text-link",
    color: "brand-white",
    addClass: "bold footer-item typography-headline6"
  })), /*#__PURE__*/React__default.createElement(List.Item, null, /*#__PURE__*/React__default.createElement(TextLink, {
    to: "/privacy",
    title: "Privacy Policy",
    typoVariant: "text-link",
    color: "brand-white",
    addClass: "bold footer-item typography-headline6"
  }))), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "licensing",
    color: "brand-white"
  }, footerText));
};

Footer.defaultProps = {
  backgroundColor: "brand-blue",
  businessName: "Osi Vision LLC dba OsiLife",
  footerText: "The health information contained on this website is for educational purposes only and does not constitute medical advice or a guaranty of treatment, outcome, or cure. Please consult with your healthcare provider for specific medical advice. This information is not intended to create a physician-patient relationship between OsiLife or any physician and the reader."
};
Footer.propTypes = {
  backgroundColor: PropTypes.oneOf(["brand-blue", "brand-orange", "secondary"]),
  businessName: PropTypes.string,
  footerText: PropTypes.string // Links Prop

};

var Shell = function Shell(_ref) {
  var children = _ref.children,
      contained = _ref.contained;
  var classes = classnames(contained ? "shell-contained" : "shell");
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default.createElement(Nav, null), children, /*#__PURE__*/React__default.createElement(Footer, null));
};

Shell.defaultProps = {};
Shell.propTypes = {
  children: PropTypes.node,
  contained: PropTypes.bool
};

var Button = /*#__PURE__*/React__default.forwardRef(function (_ref, ref) {
  var type = _ref.type,
      mode = _ref.mode,
      disabled = _ref.disabled,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      color = _ref.color,
      children = _ref.children,
      iconLeft = _ref.iconLeft,
      iconRight = _ref.iconRight,
      click = _ref.click,
      addClass = _ref.addClass,
      typoVariant = _ref.typoVariant,
      ariaControls = _ref.ariaControls,
      ariaSelected = _ref.ariaSelected,
      role = _ref.role,
      id = _ref.id,
      onKeyDown = _ref.onKeyDown,
      onKeyUp = _ref.onKeyUp,
      tabIndex = _ref.tabIndex,
      testId = _ref.testId;
  var classes = classnames("btn", "btn-".concat(mode), (iconLeft || iconRight) && "has-icon", {
    "has-icon-left": iconLeft,
    "has-icon-right": iconRight
  }, addClass);
  var btnDetails = {
    primary: {
      iconSize: 20,
      color: color || "brand-white",
      typoVariant: typoVariant || "cta"
    },
    secondary: {
      iconSize: 20,
      color: color || "primary",
      typoVariant: typoVariant || "cta"
    },
    // osi-button
    osi: {
      iconSize: 20,
      color: color || "secondary",
      typoVariant: typoVariant || "cta"
    },
    tertiary: {
      iconSize: 10,
      color: color || "primary",
      typoVariant: typoVariant || "cta-tertiary"
    },
    "quick-action-deactivated": {
      iconSize: 10,
      color: color || "primary",
      typoVariant: typoVariant || "cta-tertiary"
    },
    "quick-action-activated": {
      iconSize: 10,
      color: color || "primary",
      typoVariant: typoVariant || "cta-tertiary"
    },
    "text-link": {
      iconSize: 14,
      color: color || "accentB",
      typoVariant: typoVariant || "text-link"
    },
    "text-link-2": {
      iconSize: 12,
      color: color || "primary",
      typoVariant: typoVariant || "caption"
    },
    custom: {
      iconSize: 20,
      color: color || "brand-black",
      typoVariant: typoVariant || "body"
    }
  };
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/button-has-type
    React__default.createElement("button", {
      type: type,
      onClick: click,
      className: classes,
      disabled: disabled,
      ref: ref,
      onBlur: onBlur,
      onFocus: onFocus,
      "aria-controls": ariaControls,
      "aria-selected": ariaSelected,
      role: role,
      id: id,
      "data-testid": testId,
      tabIndex: tabIndex,
      onKeyDown: onKeyDown,
      onKeyUp: onKeyUp
    }, iconLeft && /*#__PURE__*/React__default.createElement(Icon, {
      name: iconLeft,
      color: btnDetails[mode].color,
      size: btnDetails[mode].iconSize,
      disabled: disabled,
      addClass: "icon-left"
    }), /*#__PURE__*/React__default.createElement(Typography, {
      variant: btnDetails[mode].typoVariant,
      color: btnDetails[mode].color
    }, children), iconRight && /*#__PURE__*/React__default.createElement(Icon, {
      name: iconRight,
      color: btnDetails[mode].color,
      size: btnDetails[mode].iconSize,
      disabled: disabled,
      addClass: "icon-right"
    }))
  );
});
Button.defaultProps = {
  type: "button",
  mode: "primary",
  disabled: false,
  color: "",
  iconLeft: "",
  iconRight: ""
};
Button.propTypes = {
  mode: PropTypes.oneOf(["primary", "osi", "secondary", "tertiary", "quick-action-deactivated", "quick-action-activated", "text-link", "text-link-2", "custom"]),
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  children: PropTypes.node,
  color: PropTypes.string,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  click: PropTypes.func,
  addClass: PropTypes.string,
  typoVariant: PropTypes.oneOf(["headline-1", "headline-2", "headline-3", "headline-4", "headline-5", "headline-6", "price-unit", "price-unit-strikethrough", "price-sale", "cta", "cta-tertiary", "subtitle", "field-label", "body", "body-medium", "eyebrow", "text-link", "input-text", "caption", "helper", "breadcrumb", "srt", "licensing", "subtext"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  ariaControls: PropTypes.string,
  ariaSelected: PropTypes.string,
  tabIndex: PropTypes.string,
  role: PropTypes.string,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  id: PropTypes.string,
  testId: PropTypes.string
};

var TabItem = function TabItem(_ref) {
  var label = _ref.label,
      selected = _ref.selected,
      id = _ref.id,
      sharedSVG = _ref.sharedSVG,
      onClick = _ref.onClick,
      onKeyDown = _ref.onKeyDown,
      onKeyUp = _ref.onKeyUp,
      index = _ref.index;
  var classes = classnames("tab-item", {
    "tab-item-selected": selected
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes,
    "data-index": "".concat(index)
  }, /*#__PURE__*/React__default.createElement(Button, {
    role: "tab",
    ariaSelected: "".concat(selected),
    ariaControls: "".concat(id, "-tab"),
    addClass: "tab-item-btn",
    id: id,
    mode: "quick-action-deactivated",
    color: selected ? "primary" : "gray5",
    tabIndex: selected ? "0" : "-1",
    click: onClick,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp
  }, label), /*#__PURE__*/React__default.createElement(InlineSVG, {
    path: sharedSVG,
    title: "Tab Brush Stroke svg",
    description: "Decorative tab background image",
    role: "img",
    focus: false,
    className: "tab-item-brush-stroke"
  }));
};

TabItem.defaultProps = {
  selected: false,
  sharedSVG: "".concat(TabBrushStroke)
};
TabItem.propTypes = {
  sharedSVG: PropTypes.string,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  index: PropTypes.number
};

var keys = {
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  delete: 46,
  enter: 13,
  space: 32
};

var Tabs = function Tabs(_ref) {
  var children = _ref.children,
      ariaLabel = _ref.ariaLabel,
      backgroundSVG = _ref.backgroundSVG;
  var sectionRef = React__default.useRef(null);
  var tablistRef = React__default.useRef(null);

  var _React$useState = React__default.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      selectedTab = _React$useState2[0],
      setSelectedTab = _React$useState2[1]; // first tab is selected by default, as per comps
  // focus on selectd tab


  React__default.useEffect(function () {
    if (sectionRef.current) {
      var tab = sectionRef.current.querySelectorAll('[role="tab"]')[selectedTab];

      if (tab) {
        tab.focus();
      }
    }
  }, [selectedTab]);

  var switchTabOnArrowPress = function switchTabOnArrowPress(event) {
    // Add or subtract depending on key pressed
    var direction = {
      37: -1,
      38: -1,
      39: 1,
      40: 1
    };
    var directionValue = direction[event.keyCode];
    var targetIndex = event.target.parentNode.getAttribute('data-index');

    if (directionValue && targetIndex) {
      var indexToFocus = +targetIndex + +directionValue;
      var tabArray = sectionRef.current.querySelectorAll('[role="tab"]');

      if (indexToFocus < 0) {
        tabArray[tabArray.length - 1].focus();
      } else if (indexToFocus >= tabArray.length) {
        tabArray[0].focus();
      } else {
        tabArray[indexToFocus].focus();
      }
    }
  };

  var determineOrientation = function determineOrientation(event) {
    var key = event.keyCode;
    var vertical = tablistRef.current.getAttribute('aria-orientation') === 'vertical';
    var proceed = false;

    if (vertical) {
      if (key === keys.up || key === keys.down) {
        event.preventDefault();
        proceed = true;
      }
    } else {
      if (key === keys.left || key === keys.right) {
        proceed = true;
      }
    }

    if (proceed) {
      switchTabOnArrowPress(event);
    }
  }; // Handle keydown on tabs


  var keydownEventListener = function keydownEventListener(event) {
    var key = event.keyCode;

    switch (key) {
      case keys.end:
        event.preventDefault(); // Activate last tab

        if (sectionRef.current) {
          var tabs = sectionRef.current.querySelectorAll('[role="tab"]');
          tabs[tabs.length - 1].focus();
        }

        break;

      case keys.home:
        event.preventDefault(); // Activate first tab

        if (sectionRef.current) {
          sectionRef.current.querySelectorAll('[role="tab"]')[0].focus();
        }

        break;

      case keys.up:
      case keys.down:
        determineOrientation(event);
        break;
    }
  }; // Handle keyup on tabs


  var keyupEventListener = function keyupEventListener(event) {
    var key = event.keyCode;

    switch (key) {
      case keys.left:
      case keys.right:
        determineOrientation(event);
        break;
    }
  };

  return /*#__PURE__*/React__default.createElement("section", {
    className: "section-tabs",
    ref: sectionRef
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "tablist",
    role: "tablist",
    "aria-label": ariaLabel,
    ref: tablistRef
  }, React__default.Children.map(children, function (child, index) {
    return /*#__PURE__*/React__default.cloneElement(child, {
      selected: selectedTab === index,
      sharedSVG: backgroundSVG,
      index: index,
      onClick: function onClick() {
        return setSelectedTab(index);
      },
      onKeyDown: keydownEventListener,
      onKeyUp: keyupEventListener
    });
  })), React__default.Children.map(children, function (child, index) {
    return /*#__PURE__*/React__default.createElement("div", {
      tabIndex: "0",
      role: "tabpanel",
      id: "".concat(child.props.id, "-tab"),
      key: child.props.id,
      "aria-labelledby": child.props.id,
      hidden: index === selectedTab ? undefined : "hidden",
      className: "tabpanel"
    }, child.props.children);
  }));
};

Tabs.Item = TabItem;
Tabs.defaultProps = {};
Tabs.propTypes = {
  children: PropTypes.node,
  ariaLabel: PropTypes.string.isRequired,
  backgroundSVG: PropTypes.string
};

var AccentIcon = function AccentIcon(_ref) {
  var accent = _ref.accent,
      accentColor = _ref.accentColor,
      icon = _ref.icon,
      iconColor = _ref.iconColor,
      testId = _ref.testId;
  var preProcessor = accentColor ? function (code) {
    return code.replace(/fill=".*?"/g, "fill=\"".concat(accentColor, "\"")).replace(/stroke=".*?"/g, "stroke=\"".concat(accentColor, "\""));
  } : null;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "accent-icon"
  }, /*#__PURE__*/React__default.createElement(InlineSVG, {
    className: "accent-icon-accent-svg",
    focus: false,
    path: accent,
    preProcessor: preProcessor,
    role: "img"
  }), icon && /*#__PURE__*/React__default.createElement("div", {
    className: "icon-wrapper"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    color: iconColor,
    name: icon,
    testId: testId
  })));
};

AccentIcon.defaultProps = {
  accent: AccentCircle,
  iconColor: "brand-white"
};
AccentIcon.propTypes = {
  accent: PropTypes.string,
  accentColor: PropTypes.string,
  icon: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  testId: PropTypes.string
};

var AccordionContext = /*#__PURE__*/React__default.createContext(null);

var AccordionSectionPanel = function AccordionSectionPanel(_ref) {
  var children = _ref.children,
      panelId = _ref.panelId,
      titleID = _ref.titleID;
  return /*#__PURE__*/React__default.createElement("div", {
    id: panelId,
    role: "region",
    "aria-labelledby": titleID,
    className: "accordion-section-content"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "accordion-section-content-wrapper"
  }, children));
};

AccordionSectionPanel.defaultProps = {};
AccordionSectionPanel.propTypes = {
  panelId: PropTypes.string.isRequired,
  titleID: PropTypes.string.isRequired,
  children: PropTypes.node
};

var AccordionSection = function AccordionSection(_ref) {
  var link = _ref.link,
      children = _ref.children,
      panelId = _ref.panelId,
      titleID = _ref.titleID,
      title = _ref.title,
      titleVariant = _ref.titleVariant,
      titleColor = _ref.titleColor;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "accordion-section"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "accordion-section-title"
  }, link ? /*#__PURE__*/React__default.createElement("a", {
    href: link,
    className: "accordion-trigger accordion-category-link"
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: titleVariant,
    color: titleColor
  }, title), /*#__PURE__*/React__default.createElement(Icon, {
    size: 16,
    name: "arrows-caretright-bold"
  })) : /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    "aria-expanded": "false",
    className: "accordion-trigger",
    "aria-controls": panelId,
    id: titleID
  }, /*#__PURE__*/React__default.createElement(AccordionContext.Consumer, null, function (expandedAccordion) {
    return /*#__PURE__*/React__default.createElement("span", {
      className: "accordion-title"
    }, /*#__PURE__*/React__default.createElement(Typography, {
      variant: titleVariant,
      color: titleColor
    }, title), /*#__PURE__*/React__default.createElement(Icon, {
      size: 16,
      name: expandedAccordion && titleID === expandedAccordion.id ? 'remove-bold' : 'add-bold'
    }));
  }))), !link // Render Panel when Section is not a link
  &&
  /*#__PURE__*/
  React__default.createElement(AccordionSectionPanel, {
    panelId: panelId,
    titleID: titleID
  }, children));
};

AccordionSection.defaultProps = {
  titleVariant: 'headline-6'
};
AccordionSection.propTypes = {
  panelId: PropTypes.string.isRequired,
  titleID: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  titleVariant: PropTypes.string,
  titleColor: PropTypes.string,
  children: PropTypes.node
};

var Accordion = function Accordion(_ref) {
  var children = _ref.children;
  var myRef = React.useRef(null); // https://reactjs.org/docs/hooks-reference.html#useref

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      expandedAccordion = _useState2[0],
      setExpandedAccordion = _useState2[1]; // https://reactjs.org/docs/hooks-reference.html#usestate


  React.useEffect(function () {
    var accordion = myRef.current;

    if (!accordion) {
      return;
    }

    var triggers = Array.prototype.slice.call(accordion.querySelectorAll('.accordion-trigger'));
    accordion.addEventListener('keydown', function (event) {
      var target = event.target;
      var key = event.which.toString(); // 33 = Page Up, 34 = Page Down

      var ctrlModifier = event.ctrlKey && key.match(/33|34/); // Is this coming from an accordion header?

      if (target.classList.contains('accordion-trigger')) {
        // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
        // 38 = Up, 40 = Down
        if (key.match(/38|40/) || ctrlModifier) {
          var index = triggers.indexOf(target);
          var direction = key.match(/34|40/) ? 1 : -1;
          var length = triggers.length;
          var newIndex = (index + length + direction) % length;
          triggers[newIndex].focus();
          event.preventDefault();
        } else if (key.match(/35|36/)) {
          // 35 = End, 36 = Home keyboard operations
          switch (key) {
            // Go to first accordion
            case '36':
              triggers[0].focus();
              break;
            // Go to last accordion

            case '35':
              triggers[triggers.length - 1].focus();
              break;
          }

          event.preventDefault();
        }
      }
    });
    accordion.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
      trigger.addEventListener('focus', function () {
        accordion.classList.add('focus');
      });
      trigger.addEventListener('blur', function () {
        accordion.classList.remove('focus');
      });
    });
  }, []);

  var handleClick = function handleClick(event) {
    var target = event.target; // if target is toggle-able

    if (!target.classList.contains('accordion-category-link') && target.classList.contains('accordion-trigger')) {
      event.preventDefault(); // close the open accordion if not the target

      if (expandedAccordion && expandedAccordion !== target) {
        expandedAccordion.setAttribute('aria-expanded', 'false');
        var El = myRef.current.querySelector("#".concat(expandedAccordion.getAttribute('aria-controls')));
        El.style.maxHeight = '0px';
        El.classList.remove('accordion-expanded');
      } // Toggle the targeted accordion


      if (target.getAttribute('aria-expanded') == 'true') {
        // eslint-disable-line eqeqeq
        target.setAttribute('aria-expanded', 'false');

        var _El = myRef.current.querySelector("#".concat(target.getAttribute('aria-controls')));

        _El.style.maxHeight = '0px';

        _El.classList.remove('accordion-expanded');

        setExpandedAccordion(null);
      } else {
        target.setAttribute('aria-expanded', 'true');

        var _El2 = myRef.current.querySelector("#".concat(target.getAttribute('aria-controls')));

        _El2.style.maxHeight = "".concat(_El2.scrollHeight, "px");

        _El2.classList.add('accordion-expanded');

        setExpandedAccordion(target);
      }
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    ref: myRef,
    className: "accordion",
    role: "presentation",
    onClick: handleClick
  }, /*#__PURE__*/React__default.createElement(AccordionContext.Provider, {
    value: expandedAccordion
  }, children));
};

Accordion.defaultProps = {};
Accordion.propTypes = {
  children: function children(props, propName, componentName) {
    var error;
    var prop = props[propName];
    var requiredChildType = ['AccordionSection', 'MainNavSection'];
    React__default.Children.forEach(prop, function (child) {
      // type.name seems to work for both Class and Functional components
      if (!requiredChildType.includes(child.type.name)) {
        error = new Error("`".concat(componentName, "` only accepts children of type `").concat(requiredChildType, "`. Child of type ").concat(child.type.name, " was found."));
      }
    });
    return error;
  }
}; // Enables JSX dot notation - https://reactjs.org/docs/jsx-in-depth.html#using-dot-notation-for-jsx-type

Accordion.Section = AccordionSection;

var IconButton = /*#__PURE__*/React__default.forwardRef(function (_ref, ref) {
  var icon = _ref.icon,
      id = _ref.id,
      variant = _ref.variant,
      disabled = _ref.disabled,
      size = _ref.size,
      addClass = _ref.addClass,
      role = _ref.role,
      click = _ref.click,
      ariaPressed = _ref.ariaPressed,
      srtAriaLive = _ref.srtAriaLive,
      ariaHaspopup = _ref.ariaHaspopup,
      ariaExpanded = _ref.ariaExpanded,
      ariaControls = _ref.ariaControls,
      children = _ref.children,
      testId = _ref.testId;
  var classes = classnames('btn-icon', "btn-icon-".concat(variant), addClass);
  return /*#__PURE__*/React__default.createElement("button", {
    id: id,
    className: classes,
    type: "button",
    role: role,
    "data-testid": testId,
    disabled: disabled,
    onClick: click,
    "aria-pressed": ariaPressed,
    "aria-haspopup": ariaHaspopup,
    "aria-expanded": ariaExpanded,
    "aria-controls": ariaControls,
    ref: ref
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "screen-reader-text",
    "aria-live": srtAriaLive
  }, children), /*#__PURE__*/React__default.createElement(Icon, {
    name: icon,
    size: size
  }));
});
IconButton.defaultProps = {
  variant: 'simple',
  size: 16,
  disabled: false
};
IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  id: PropTypes.string,
  srtAriaLive: PropTypes.string,
  variant: PropTypes.oneOf(['simple', 'circular', 'circular-shadow', 'tiny']),
  size: PropTypes.number,
  addClass: PropTypes.string,
  role: PropTypes.string,
  click: PropTypes.func,
  disabled: PropTypes.bool,
  ariaPressed: PropTypes.bool,
  ariaHaspopup: PropTypes.bool,
  ariaExpanded: PropTypes.bool,
  ariaControls: PropTypes.string,
  children: PropTypes.node,
  testId: PropTypes.string
};

/**
 * Utilize `Address` to display an address and an optional link to edit if it is preferred store
 */

var Address = function Address(_ref) {
  var title = _ref.title,
      address1 = _ref.address1,
      address2 = _ref.address2,
      address3 = _ref.address3,
      city = _ref.city,
      state = _ref.state,
      zip = _ref.zip,
      isShortAddress = _ref.isShortAddress,
      isPreferredStore = _ref.isPreferredStore,
      onClick = _ref.onClick,
      addClass = _ref.addClass,
      ariaControls = _ref.ariaControls;
  var titleClasses = classnames('address-line', isPreferredStore ? ' address-title-bold' : '');
  var cityStateZip = [city && (state || zip) ? "".concat(city, ",") : city, state, zip].filter(function (val) {
    return val;
  }).join(' ');
  return /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body",
    htmlTagOverride: "address",
    addClass: addClass
  }, /*#__PURE__*/React__default.createElement("span", {
    className: titleClasses,
    "data-testid": "address-title"
  }, title, isPreferredStore && /*#__PURE__*/React__default.createElement(IconButton, {
    ariaControls: ariaControls,
    icon: "edit-bold",
    variant: "simple",
    addClass: "edit-preferred-store",
    click: onClick
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "srt"
  }, "Change preferred store"))), address2 && /*#__PURE__*/React__default.createElement("span", {
    className: "address-line"
  }, address2), /*#__PURE__*/React__default.createElement("span", {
    className: "address-line"
  }, address1), address3 && /*#__PURE__*/React__default.createElement("span", {
    className: "address-line"
  }, address3), !isShortAddress && /*#__PURE__*/React__default.createElement("span", {
    className: "address-line"
  }, cityStateZip));
};

Address.propTypes = {
  title: PropTypes.node,
  address1: PropTypes.string,
  address2: PropTypes.string,
  address3: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip: PropTypes.string,
  isShortAddress: PropTypes.bool,
  isPreferredStore: PropTypes.bool,
  onClick: PropTypes.func,
  addClass: PropTypes.string,
  ariaControls: PropTypes.string
};

var BreadcrumbItem = function BreadcrumbItem(_ref) {
  var to = _ref.to,
      title = _ref.title,
      target = _ref.target,
      rel = _ref.rel;
  var typography = /*#__PURE__*/React__default.createElement(Typography, {
    variant: "breadcrumb"
  }, title);
  return /*#__PURE__*/React__default.createElement(List.Item, null, to ? /*#__PURE__*/React__default.createElement("a", {
    href: to,
    className: "breadcrumb-link",
    target: target,
    rel: rel
  }, typography) : typography);
};

BreadcrumbItem.defaultProps = {};
BreadcrumbItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string
};

var Breadcrumbs = function Breadcrumbs(_ref) {
  var breadcrumbs = _ref.breadcrumbs,
      ariaLabel = _ref.ariaLabel;
  return /*#__PURE__*/React__default.createElement("nav", {
    "aria-label": ariaLabel
  }, /*#__PURE__*/React__default.createElement(List, {
    addClass: "breadcrumbs",
    horizontal: true
  }, breadcrumbs && breadcrumbs.map(function (breadcrumb) {
    return /*#__PURE__*/React__default.createElement(BreadcrumbItem, {
      to: breadcrumb.to,
      title: breadcrumb.title,
      key: breadcrumb.title
    });
  })));
};

Breadcrumbs.defaultProps = {};
Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    to: PropTypes.string
  })).isRequired,
  ariaLabel: PropTypes.string
};

var _this$1 = undefined;

var GliderJS = function GliderJS() {
  var _window = typeof window !== 'undefined' ? window : _this$1;

  var Glider = _window.Glider = function (element, settings) {
    var _ = this;

    if (element._glider) return element._glider;
    _.ele = element;

    _.ele.classList.add('glider'); // expose glider object to its DOM element


    _.ele._glider = _; // merge user setting with defaults

    _.opt = Object.assign({}, {
      slidesToScroll: 1,
      slidesToShow: 1,
      resizeLock: true,
      duration: 0.5,
      // easeInQuad
      easing: function easing(x, t, b, c, d) {
        return c * (t /= d) * t + b;
      }
    }, settings); // set defaults

    _.animate_id = _.page = _.slide = 0;
    _.arrows = {}; // preserve original options to
    // extend breakpoint settings

    _._opt = _.opt;

    if (_.opt.skipTrack) {
      // first and only child is the track
      _.track = _.ele.children[0];
    } else {
      // create track and wrap slides
      _.track = document.createElement('div');

      _.ele.appendChild(_.track);

      while (_.ele.children.length !== 1) {
        _.track.appendChild(_.ele.children[0]);
      }
    }

    _.track.classList.add('glider-track'); // start glider


    _.init(); // set events


    _.resize = _.init.bind(_, true);

    _.event(_.ele, 'add', {
      scroll: _.updateControls.bind(_)
    });

    _.event(_window, 'add', {
      resize: _.resize
    });
  };

  var gliderPrototype = Glider.prototype;

  gliderPrototype.init = function (refresh, paging) {
    var _ = this;

    var width = 0;
    var height = 0;
    _.slides = _.track.children;
    [].forEach.call(_.slides, function (_) {
      _.classList.add('glider-slide');
    });
    _.containerWidth = _.ele.clientWidth;

    var breakpointChanged = _.settingsBreakpoint();

    if (!paging) paging = breakpointChanged;

    if (_.opt.slidesToShow === 'auto') {
      var slideCount = _.containerWidth / _.opt.itemWidth;
      _.opt.slidesToShow = _.opt.exactWidth ? slideCount : Math.floor(slideCount);
    }

    if (_.opt.slidesToScroll === 'auto') {
      _.opt.slidesToScroll = Math.floor(_.opt.slidesToShow);
    }

    _.itemWidth = _.opt.exactWidth ? _.opt.itemWidth : _.containerWidth / _.opt.slidesToShow; // set slide dimensions

    [].forEach.call(_.slides, function (__) {
      __.style.height = 'auto';
      __.style.width = _.itemWidth + 'px';
      width += _.itemWidth;
      height = Math.max(__.offsetHeight, height);
    });
    _.track.style.width = width + 'px';
    _.trackWidth = width;
    _.opt.resizeLock && _.scrollTo(_.slide * _.itemWidth, 0);

    if (breakpointChanged || paging) {
      _.bindArrows();

      _.buildDots();

      _.bindDrag();
    }

    _.updateControls();

    _.emit(refresh ? 'refresh' : 'loaded');
  };

  gliderPrototype.bindDrag = function () {
    var _ = this;

    _.mouse = _.mouse || _.handleMouse.bind(_);

    var mouseup = function mouseup() {
      _.mouseDown = undefined;

      _.ele.classList.remove('drag');
    };

    var events = {
      mouseup: mouseup,
      mouseleave: mouseup,
      mousedown: function mousedown(e) {
        _.mouseDown = e.clientX;

        _.ele.classList.add('drag');
      },
      mousemove: _.mouse
    };

    _.ele.classList.toggle('draggable', _.opt.draggable === true);

    _.event(_.ele, 'remove', events);

    if (_.opt.draggable) _.event(_.ele, 'add', events);
  };

  gliderPrototype.buildDots = function () {
    var _ = this;

    if (!_.opt.dots) {
      if (_.dots) _.dots.innerHTML = '';
      return;
    }

    if (typeof _.opt.dots === 'string') {
      _.dots = document.querySelector(_.opt.dots);
    } else _.dots = _.opt.dots;

    if (!_.dots) return;
    _.dots.innerHTML = '';

    _.dots.classList.add('glider-dots');

    for (var i = 0; i < Math.ceil(_.slides.length / _.opt.slidesToShow); ++i) {
      var dot = document.createElement('button');
      dot.dataset.index = i;
      dot.setAttribute('aria-label', 'Page ' + (i + 1));
      dot.setAttribute('role', 'tab'); // ADDED BY RED TEAM (For Accessibility)

      dot.className = 'glider-dot ' + (i ? '' : 'active');

      _.event(dot, 'add', {
        click: _.scrollItem.bind(_, i, true)
      });

      _.dots.appendChild(dot);
    }
  };

  gliderPrototype.bindArrows = function () {
    var _ = this;

    if (!_.opt.arrows) {
      Object.keys(_.arrows).forEach(function (direction) {
        var element = _.arrows[direction];

        _.event(element, 'remove', {
          click: element._func
        });
      });
      return;
    }

    ['prev', 'next'].forEach(function (direction) {
      var arrow = _.opt.arrows[direction];

      if (arrow) {
        if (typeof arrow === 'string') arrow = document.querySelector(arrow);
        arrow._func = arrow._func || _.scrollItem.bind(_, direction);

        _.event(arrow, 'remove', {
          click: arrow._func
        });

        _.event(arrow, 'add', {
          click: arrow._func
        });

        _.arrows[direction] = arrow;
      }
    });
  };

  gliderPrototype.updateControls = function (event) {
    var _ = this;

    if (event && !_.opt.scrollPropagate) {
      event.stopPropagation();
    }

    var disableArrows = _.containerWidth >= _.trackWidth;

    if (!_.opt.rewind) {
      if (_.arrows.prev) {
        _.arrows.prev.classList.toggle('disabled', _.ele.scrollLeft <= 0 || disableArrows);
      }

      if (_.arrows.next) {
        _.arrows.next.classList.toggle('disabled', Math.ceil(_.ele.scrollLeft + _.containerWidth) >= Math.floor(_.trackWidth) || disableArrows);
      }
    }

    _.slide = Math.round(_.ele.scrollLeft / _.itemWidth);
    _.page = Math.round(_.ele.scrollLeft / _.containerWidth);
    var middle = _.slide + Math.floor(Math.floor(_.opt.slidesToShow) / 2);
    var extraMiddle = Math.floor(_.opt.slidesToShow) % 2 ? 0 : middle + 1;

    if (Math.floor(_.opt.slidesToShow) === 1) {
      extraMiddle = 0;
    } // the last page may be less than one half of a normal page width so
    // the page is rounded down. when at the end, force the page to turn


    if (_.ele.scrollLeft + _.containerWidth >= Math.floor(_.trackWidth)) {
      _.page = _.dots ? _.dots.children.length - 1 : 0;
    }

    [].forEach.call(_.slides, function (slide, index) {
      var slideClasses = slide.classList;
      var wasVisible = slideClasses.contains('visible');
      var start = _.ele.scrollLeft;
      var end = _.ele.scrollLeft + _.containerWidth;
      var itemStart = _.itemWidth * index;
      var itemEnd = itemStart + _.itemWidth;
      [].forEach.call(slideClasses, function (className) {
        /^left|right/.test(className) && slideClasses.remove(className);
      });
      slideClasses.toggle('active', _.slide === index);

      if (middle === index || extraMiddle && extraMiddle === index) {
        slideClasses.add('center');
      } else {
        slideClasses.remove('center');
        slideClasses.add([index < middle ? 'left' : 'right', Math.abs(index - (index < middle ? middle : extraMiddle || middle))].join('-'));
      }

      var isVisible = Math.ceil(itemStart) >= start && Math.floor(itemEnd) <= end;
      slideClasses.toggle('visible', isVisible);

      if (isVisible !== wasVisible) {
        _.emit('slide-' + (isVisible ? 'visible' : 'hidden'), {
          slide: index
        });
      }
    });

    if (_.dots) {
      [].forEach.call(_.dots.children, function (dot, index) {
        dot.classList.toggle('active', _.page === index);
      });
    }

    if (event && _.opt.scrollLock) {
      clearTimeout(_.scrollLock);
      _.scrollLock = setTimeout(function () {
        clearTimeout(_.scrollLock); // dont attempt to scroll less than a pixel fraction - causes looping

        if (Math.abs(_.ele.scrollLeft / _.itemWidth - _.slide) > 0.02) {
          if (!_.mouseDown) {
            _.scrollItem(_.round(_.ele.scrollLeft / _.itemWidth));
          }
        }
      }, _.opt.scrollLockDelay || 250);
    }
  };

  gliderPrototype.scrollItem = function (slide, dot, e) {
    if (e) e.preventDefault();

    var _ = this;

    var originalSlide = slide;
    ++_.animate_id;

    if (dot === true) {
      slide = slide * _.containerWidth;
      slide = Math.round(slide / _.itemWidth) * _.itemWidth;
    } else {
      if (typeof slide === 'string') {
        var backwards = slide === 'prev'; // use precise location if fractional slides are on

        if (_.opt.slidesToScroll % 1 || _.opt.slidesToShow % 1) {
          slide = _.round(_.ele.scrollLeft / _.itemWidth);
        } else {
          slide = _.slide;
        }

        if (backwards) slide -= _.opt.slidesToScroll;else slide += _.opt.slidesToScroll;

        if (_.opt.rewind) {
          var scrollLeft = _.ele.scrollLeft;
          slide = backwards && !scrollLeft ? _.slides.length : !backwards && scrollLeft + _.containerWidth >= Math.floor(_.trackWidth) ? 0 : slide;
        }
      }

      slide = Math.max(Math.min(slide, _.slides.length), 0);
      _.slide = slide;
      slide = _.itemWidth * slide;
    }

    _.scrollTo(slide, _.opt.duration * Math.abs(_.ele.scrollLeft - slide), function () {
      _.updateControls();

      _.emit('animated', {
        value: originalSlide,
        type: typeof originalSlide === 'string' ? 'arrow' : dot ? 'dot' : 'slide'
      });
    });

    return false;
  };

  gliderPrototype.settingsBreakpoint = function () {
    var _ = this;

    var resp = _._opt.responsive;

    if (resp) {
      // Sort the breakpoints in mobile first order
      resp.sort(function (a, b) {
        return b.breakpoint - a.breakpoint;
      });

      for (var i = 0; i < resp.length; ++i) {
        var size = resp[i];

        if (_window.innerWidth >= size.breakpoint) {
          if (_.breakpoint !== size.breakpoint) {
            _.opt = Object.assign({}, _._opt, size.settings);
            _.breakpoint = size.breakpoint;
            return true;
          }

          return false;
        }
      }
    } // set back to defaults in case they were overriden


    var breakpointChanged = _.breakpoint !== 0;
    _.opt = Object.assign({}, _._opt);
    _.breakpoint = 0;
    return breakpointChanged;
  };

  gliderPrototype.scrollTo = function (scrollTarget, scrollDuration, callback) {
    var _ = this;

    var start = new Date().getTime();
    var animateIndex = _.animate_id;

    var animate = function animate() {
      var now = new Date().getTime() - start;
      _.ele.scrollLeft = _.ele.scrollLeft + (scrollTarget - _.ele.scrollLeft) * _.opt.easing(0, now, 0, 1, scrollDuration);

      if (now < scrollDuration && animateIndex === _.animate_id) {
        _window.requestAnimationFrame(animate);
      } else {
        _.ele.scrollLeft = scrollTarget;
        callback && callback.call(_);
      }
    };

    _window.requestAnimationFrame(animate);
  };

  gliderPrototype.removeItem = function (index) {
    var _ = this;

    if (_.slides.length) {
      _.track.removeChild(_.slides[index]);

      _.refresh(true);

      _.emit('remove');
    }
  };

  gliderPrototype.addItem = function (ele) {
    var _ = this;

    _.track.appendChild(ele);

    _.refresh(true);

    _.emit('add');
  };

  gliderPrototype.handleMouse = function (e) {
    var _ = this;

    if (_.mouseDown) {
      _.ele.scrollLeft += (_.mouseDown - e.clientX) * (_.opt.dragVelocity || 3.3);
      _.mouseDown = e.clientX;
    }
  }; // used to round to the nearest 0.XX fraction


  gliderPrototype.round = function (double) {
    var _ = this;

    var step = _.opt.slidesToScroll % 1 || 1;
    var inv = 1.0 / step;
    return Math.round(double * inv) / inv;
  };

  gliderPrototype.refresh = function (paging) {
    var _ = this;

    _.init(true, paging);
  };

  gliderPrototype.setOption = function (opt, global) {
    var _ = this;

    if (_.breakpoint && !global) {
      _._opt.responsive.forEach(function (v) {
        if (v.breakpoint === _.breakpoint) {
          v.settings = Object.assign({}, v.settings, opt);
        }
      });
    } else {
      _._opt = Object.assign({}, _._opt, opt);
    }

    _.breakpoint = 0;

    _.settingsBreakpoint();
  };

  gliderPrototype.destroy = function () {
    var _ = this;

    var replace = _.ele.cloneNode(true);

    var clear = function clear(ele) {
      ele.removeAttribute('style');
      [].forEach.call(ele.classList, function (className) {
        /^glider/.test(className) && ele.classList.remove(className);
      });
    }; // remove track


    replace.children[0].outerHTML = replace.children[0].innerHTML;
    clear(replace);
    [].forEach.call(replace.getElementsByTagName('*'), clear);

    _.ele.parentNode.replaceChild(replace, _.ele);

    _.event(_window, 'remove', {
      resize: _.resize
    });

    _.emit('destroy');
  };

  gliderPrototype.emit = function (name, arg) {
    var _ = this;

    var e = new _window.CustomEvent('glider-' + name, {
      bubbles: !_.opt.eventPropagate,
      detail: arg
    });

    _.ele.dispatchEvent(e);
  };

  gliderPrototype.event = function (ele, type, args) {
    var eventHandler = ele[type + 'EventListener'].bind(ele);
    Object.keys(args).forEach(function (k) {
      eventHandler(k, args[k]);
    });
  };

  return Glider;
};

/**
 * A configurable carousel that utilizes Glider.js (https://nickpiscitelli.github.io/Glider.js/)
 */

var Carousel = function Carousel(_ref) {
  var children = _ref.children,
      addClass = _ref.addClass,
      slidesToShow = _ref.slidesToShow,
      dots = _ref.dots,
      arrows = _ref.arrows,
      scrollLockDelay = _ref.scrollLockDelay,
      duration = _ref.duration,
      itemWidth = _ref.itemWidth,
      enableRewindLooping = _ref.enableRewindLooping,
      disableDragging = _ref.disableDragging,
      enableScrollLock = _ref.enableScrollLock,
      onNewItemVisible = _ref.onNewItemVisible,
      squared = _ref.squared;
  var carouselRef = React.useRef(null);
  var gliderRef = React.useRef(null);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1]; // Flagged true after GliderJS inits


  var gliderQuerySelector = '.glider';
  var classes = classnames('carousel', {
    'carousel-square': squared
  }, // 1:1 Aspect ratio
  addClass); // Options for GliderJS (https://nickpiscitelli.github.io/Glider.js/)

  var createOptionsObject = function createOptionsObject() {
    return {
      // configurable options
      rewind: enableRewindLooping,
      draggable: !disableDragging,
      scrollLock: enableScrollLock,
      slidesToShow: itemWidth ? 'auto' : slidesToShow,
      itemWidth: itemWidth,
      // 'undefined' is glider.js's default value for exactWidth
      exactWidth: itemWidth ? true : undefined,
      scrollLockDelay: scrollLockDelay,
      duration: duration
    };
  }; // Called whenever a slide is visible


  var itemVisible = function itemVisible(event) {
    if (onNewItemVisible) {
      var itemIndex = event.detail.slide;
      onNewItemVisible(itemIndex);
    }
  }; // Called whenever a slide is hidden


  var itemHidden = function itemHidden(e) {
    var slideIndex = e.detail.slide;
    var hiddenSlide = carouselRef.current.querySelectorAll('.glider-slide')[slideIndex]; // Assumes there is only 1 video per slide

    if (hiddenSlide.querySelector('video')) {
      var video = hiddenSlide.querySelector('video');
      video.pause();
    }
  }; // On mount, init GliderJS and add event listeners (when window is not undefined)


  React.useEffect(function () {
    if (canUseDOM() && !gliderRef.current) {
      GliderJS(); // Runs GliderJS code found in src/components/Carousel/GliderJS/glider.js

      var carousel = carouselRef.current;
      gliderRef.current = new Glider(carousel.querySelector(gliderQuerySelector), _objectSpread2(_objectSpread2({}, createOptionsObject()), {}, {
        /** Selectors */
        dots: dots,
        arrows: arrows,

        /** Do not change */
        skipTrack: true,
        resizeLock: true
      }));
      carousel.querySelector(gliderQuerySelector).addEventListener('glider-slide-hidden', itemHidden);
      carousel.querySelector(gliderQuerySelector).addEventListener('glider-slide-visible', itemVisible);
      setLoaded(true);
    }

    return function () {
      var carousel = carouselRef.current;
      carousel.querySelector(gliderQuerySelector).removeEventListener('glider-slide-hidden', itemHidden);
      carousel.querySelector(gliderQuerySelector).removeEventListener('glider-slide-visible', itemVisible);
      gliderRef.current.destroy();
    };
  }, [window]);
  return /*#__PURE__*/React__default.createElement("div", {
    ref: carouselRef,
    className: classes
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "glider carousel__track-container"
  }, /*#__PURE__*/React__default.createElement(List, {
    addClass: "carousel__track glider-track"
  }, React__default.Children.map(children, function (child) {
    return /*#__PURE__*/React__default.createElement(List.Item, null, loaded && child);
  }))));
};

Carousel.defaultProps = {
  slidesToShow: 1,
  scrollLockDelay: 100,
  duration: 0.5
};
Carousel.propTypes = {
  /** Carousel items */
  children: PropTypes.node,

  /** Class to append to <Carousel />  */
  addClass: PropTypes.string,

  /** Callback function when a new item is visible */
  onNewItemVisible: PropTypes.func,

  /** The number of items to show at once.
    * Set the 'itemWidth; prop instead if you prefer to show items based off their width. */
  slidesToShow: PropTypes.number,

  /** If true, the Carousel ignores dragging with the mouse */
  disableDragging: PropTypes.bool,

  /** When scrollLock is set, this is the delay in milliseconds to wait before the scroll happens */
  scrollLockDelay: PropTypes.number,

  /** If true, Carousel will scroll to the beginning/end when it's respective endpoint is reached */
  enableRewindLooping: PropTypes.bool,

  /** If true, Carousel will scroll to the nearest slide after any scroll interactions */
  enableScrollLock: PropTypes.bool,

  /** If true, Carousel will be have a 1:1 aspect ratio */
  squared: PropTypes.bool,

  /** An aggravator used to control animation speed. Higher is slower. */
  duration: PropTypes.number,

  /** Setting this prop will cause the 'slidesToShow' prop to be ignored. */
  itemWidth: PropTypes.number || PropTypes.func,

  /** An HTML selector containing the dot container */
  dots: PropTypes.string,

  /** An HTML selector for the arrow buttons */
  arrows: PropTypes.exact({
    prev: PropTypes.string,
    next: PropTypes.string
  })
};

var _this$2 = undefined;

var Collapse = function Collapse(_ref) {
  var isOpen = _ref.isOpen,
      children = _ref.children,
      previewContent = _ref.previewContent,
      trigger = _ref.trigger,
      isTriggerFocused = _ref.isTriggerFocused,
      variant = _ref.variant,
      addClass = _ref.addClass;
  var collapseRef = React.useRef();

  var _useState = React.useState(!isOpen),
      _useState2 = _slicedToArray(_useState, 2),
      collapseState = _useState2[0],
      setCollapseState = _useState2[1];

  var setCollapseHeight = function setCollapseHeight() {
    var collapseHeight = variant === 'fade-preview' ? 250 : 0;

    if (collapseRef.current) {
      collapseRef.current.style.maxHeight = collapseState ? "".concat(collapseHeight, "px") : "".concat(collapseRef.current.scrollHeight, "px");
    }
  };

  var debounce = function debounce(fn, ms) {
    var timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        timer = null;
        fn.apply(_this$2);
      }, ms);
    };
  };

  var debouncedHandleResize = debounce(setCollapseHeight, 250); // 250ms wait time to fire resize

  React.useEffect(function () {
    // for componentDidUpdate on collapseState change
    setCollapseHeight();

    if (canUseDOM()) {
      window.addEventListener('resize', debouncedHandleResize);
    }

    return function () {
      if (canUseDOM()) {
        window.removeEventListener('resize', debouncedHandleResize);
      }
    };
  }, [collapseState]);
  React.useEffect(function () {
    // Control collapse state using the isOpen prop
    setCollapseState(!isOpen); // Matching timing function from css to control the overflow visible property

    if (isOpen) {
      setTimeout(function () {
        collapseRef.current.classList.remove('expanding');
      }, 240);
    }
  }, [isOpen]);
  var classes = classnames('collapse-container', variant, !isOpen && 'collapsed', isTriggerFocused && 'focus', addClass);
  var contentClasses = classnames('collapse-content', isOpen && 'expanding');
  var collapsePreviewSection = previewContent && /*#__PURE__*/React__default.createElement("div", {
    className: "collapse-preview"
  }, previewContent);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, trigger, collapsePreviewSection, /*#__PURE__*/React__default.createElement("div", {
    className: contentClasses,
    ref: collapseRef
  }, children));
};

Collapse.defaultProps = {
  variant: 'default',
  isOpen: false,
  isTriggerFocused: false
};
Collapse.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  previewContent: PropTypes.node,
  trigger: PropTypes.node,
  isTriggerFocused: PropTypes.bool,
  variant: PropTypes.oneOf(['fade-preview', 'default']),
  addClass: PropTypes.string
};

var Picture = function Picture(_ref) {
  var cardImage = _ref.cardImage;
  return /*#__PURE__*/React__default.createElement(Image, {
    src: cardImage && cardImage.size.desktop,
    alt: cardImage && cardImage.alt,
    pictureClass: "card-asset"
  }, /*#__PURE__*/React__default.createElement(ImageSource, {
    media: "(max-width:1024px)",
    srcSet: cardImage && cardImage.size.tablet
  }), /*#__PURE__*/React__default.createElement(ImageSource, {
    media: "(max-width:767px)",
    srcSet: cardImage && cardImage.size.mobile
  }));
};

Picture.defaultProps = {};
Picture.propTypes = {
  cardImage: PropTypes.shape({
    alt: PropTypes.string,
    size: PropTypes.shape({
      mobile: PropTypes.string,
      tablet: PropTypes.string,
      desktop: PropTypes.string
    })
  })
};

var Video = function Video() {// Placeholder until we receive comps to support
};

var ContentCard = function ContentCard(_ref2) {
  var grid = _ref2.grid,
      type = _ref2.type,
      theme = _ref2.theme,
      cardData = _ref2.cardData,
      addClass = _ref2.addClass;
  var title = cardData.title,
      copy = cardData.copy,
      href = cardData.href,
      image = cardData.image;
  var classes = classnames('content-card', addClass, theme, {
    'media-card': type === 'media',
    'video-card': type === 'video'
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes,
    "data-grid": grid,
    "data-type": type,
    "data-theme": theme
  }, /*#__PURE__*/React__default.createElement("a", {
    className: "card-container",
    href: href && href.url,
    target: href && href.target,
    rel: href && href.rel
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "card-icon",
    "aria-hidden": "true"
  }), type === 'media' && /*#__PURE__*/React__default.createElement(Picture, {
    cardImage: image
  }), type === 'video' && /*#__PURE__*/React__default.createElement(Video, null), /*#__PURE__*/React__default.createElement("div", {
    className: "card-content"
  }, title && /*#__PURE__*/React__default.createElement("h2", {
    className: "card-title"
  }, title.title1 && /*#__PURE__*/React__default.createElement(Typography, {
    variant: "eyebrow"
  }, title.title1), title.title2 && /*#__PURE__*/React__default.createElement(Typography, {
    variant: "eyebrow"
  }, title.title2), title.title3 && /*#__PURE__*/React__default.createElement(Typography, {
    variant: "eyebrow"
  }, title.title3)), copy && /*#__PURE__*/React__default.createElement("p", {
    className: "card-copy"
  }, copy.copy1 && /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body"
  }, copy.copy1), copy.copy2 && /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body"
  }, copy.copy2), copy.copy3 && /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body"
  }, copy.copy3)))));
};

ContentCard.defaultProps = {
  type: 'media',
  theme: 'vertical'
};
ContentCard.propTypes = {
  grid: PropTypes.string,
  type: PropTypes.oneOf(['media', 'video']),
  theme: PropTypes.oneOf(['vertical', 'horizontal']),
  addClass: PropTypes.string,
  cardData: PropTypes.shape({
    title: PropTypes.shape({
      title1: PropTypes.string,
      title2: PropTypes.string,
      title3: PropTypes.string
    }),
    copy: PropTypes.shape({
      copy1: PropTypes.string,
      copy2: PropTypes.string,
      copy3: PropTypes.string
    }),
    href: PropTypes.shape({
      url: PropTypes.string,
      target: PropTypes.string,
      rel: PropTypes.string
    }),
    image: PropTypes.shape({
      alt: PropTypes.string,
      size: PropTypes.shape({
        mobile: PropTypes.string,
        tablet: PropTypes.string,
        desktop: PropTypes.string
      })
    })
  })
};

var ContentPanel = function ContentPanel(_ref) {
  var addClass = _ref.addClass,
      children = _ref.children,
      dialogHeight = _ref.dialogHeight,
      id = _ref.id;
  var myRef = React__default.useRef();

  var _React$useState = React__default.useState(),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      toTop = _React$useState2[0],
      setToTop = _React$useState2[1];

  var classes = classnames('content-panel', addClass);
  React__default.useEffect(function () {
    var panel = myRef.current;
    setToTop(panel.getBoundingClientRect().top);
  }, []);
  var styles = dialogHeight && {
    maxHeight: "calc(100vh - ".concat(toTop, "px)"),
    height: '-webkit-fill-available'
  };
  return /*#__PURE__*/React__default.createElement("div", {
    ref: myRef,
    className: classes,
    style: styles,
    id: id
  }, children);
};

ContentPanel.defaultProps = {};
ContentPanel.propTypes = {
  children: PropTypes.node,
  dialogHeight: PropTypes.bool,
  id: PropTypes.string.isRequired,
  addClass: PropTypes.string
};

var ContentPanels = function ContentPanels(_ref) {
  var addClass = _ref.addClass,
      appendEl = _ref.appendEl,
      children = _ref.children,
      disableTrapFocus = _ref.disableTrapFocus,
      panelVisible = _ref.panelVisible,
      prependEl = _ref.prependEl,
      responsiveHeight = _ref.responsiveHeight,
      showPanel = _ref.showPanel,
      testId = _ref.testId;
  var myRef = React__default.useRef(null);
  var classes = classnames('content-panels', addClass);

  var handleScroll = function handleScroll(contentPanelsContainer) {
    debounce$2(scrollElement(contentPanelsContainer, contentPanelsContainer.getBoundingClientRect().width * showPanel, 'scrollLeft', 500), 100);
  };

  var setPanelsHeight = function setPanelsHeight(container, el) {
    container.style.removeProperty('height');
    setTimeout( // wait for dialog to appear to obtain accurate height
    container.setAttribute('style', "height: ".concat(el.offsetHeight + 16, "px")), 300);
  };

  var getPanel = function getPanel(container) {
    var contentPanels = container.querySelectorAll('.content-panel');
    contentPanels.forEach(function (el, index) {
      var _contentPanels;

      var queryTriggerSelector = (_contentPanels = contentPanels[index - 1]) === null || _contentPanels === void 0 ? void 0 : _contentPanels.querySelector("[aria-controls=\"".concat(el.getAttribute('id'), "\"]"));

      if (index === showPanel) {
        el.removeAttribute('tabindex');

        if (responsiveHeight) {
          setPanelsHeight(container, el);
        }

        if (index > 0 && queryTriggerSelector) {
          queryTriggerSelector.setAttribute('aria-expanded', true);
        }
      } else {
        el.setAttribute('tabindex', -1);

        if (index > 0 && queryTriggerSelector) {
          queryTriggerSelector.setAttribute('aria-expanded', false);
        }
      }
    });
    return contentPanels.length > showPanel ? contentPanels[showPanel] : null;
  };

  React__default.useEffect(function () {
    var handleResize = function handleResize() {
      var contentPanelsContainer = myRef.current;
      handleScroll(contentPanelsContainer);
    };

    if (canUseDOM()) {
      window.addEventListener('resize', handleResize);
    }

    return function () {
      if (canUseDOM()) {
        window.removeEventListener('resize', handleResize);
      }
    };
  });
  React__default.useEffect(function () {
    var contentPanelsContainer = myRef.current;
    handleScroll(contentPanelsContainer);
    var panel = getPanel(contentPanelsContainer);

    if (panel && !disableTrapFocus) {
      trapFocus(panel, prependEl, appendEl);
    }

    if (panelVisible) {
      panelVisible(showPanel, panel);
    }
  }, [showPanel]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes,
    ref: myRef,
    "data-testid": testId
  }, children);
};

ContentPanels.Panel = ContentPanel;
ContentPanels.defaultProps = {
  showPanel: 0
};
ContentPanels.propTypes = {
  addClass: PropTypes.string,
  appendEl: PropTypes.string,
  // appendEl="button.dialog-close"
  children: function children(props, propName, componentName) {
    var error;
    var prop = props[propName];
    var requiredChildType = ['ContentPanel', 'QuestionPages'];
    React__default.Children.forEach(prop, function (child) {
      // type.name seems to work for both Class and Functional components
      if (!requiredChildType.includes(child.type.name)) {
        error = new Error("`".concat(componentName, "` only accepts children of type `").concat(requiredChildType, "`. Child of type ").concat(child.type.name, " was found."));
      }
    });
    return error;
  },
  disableTrapFocus: PropTypes.bool,
  prependEl: PropTypes.string,
  panelVisible: PropTypes.func,
  // callback function to show which panel is visible
  responsiveHeight: PropTypes.bool,
  showPanel: PropTypes.number,
  testId: PropTypes.string
};

var CulturalIndicator = function CulturalIndicator(_ref) {
  var pictureClass = _ref.pictureClass,
      ariaHidden = _ref.ariaHidden,
      src = _ref.src,
      dataSrc = _ref.dataSrc,
      alt = _ref.alt,
      addClass = _ref.addClass;
  var classes = classnames('cultural-indicator', addClass);
  return /*#__PURE__*/React__default.createElement(Image, {
    pictureClass: pictureClass,
    ariaHidden: ariaHidden,
    src: src,
    dataSrc: dataSrc,
    alt: alt,
    className: classes
  });
};

CulturalIndicator.defaultProps = {};
CulturalIndicator.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  dataSrc: PropTypes.string,
  addClass: PropTypes.string,
  pictureClass: PropTypes.string,
  ariaHidden: PropTypes.string
};

var DescriptionListItem = function DescriptionListItem(_ref) {
  var icon = _ref.icon,
      titleText = _ref.titleText,
      descriptionText = _ref.descriptionText;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("dt", {
    className: "description-list-title ".concat(icon ? 'has-icon' : 'no-icon')
  }, icon && /*#__PURE__*/React__default.createElement(Icon, {
    size: 24,
    name: icon,
    addClass: "description-list-icon",
    color: "gray5"
  }), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body-medium"
  }, titleText)), /*#__PURE__*/React__default.createElement("dd", {
    className: "description-list-description"
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body",
    htmlTagOverride: "p"
  }, descriptionText)));
};

DescriptionListItem.propTypes = {
  icon: PropTypes.string,
  titleText: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired
};

var DescriptionList = function DescriptionList(_ref) {
  var descriptionListData = _ref.descriptionListData,
      addClass = _ref.addClass;
  var classes = classnames('description-list', "".concat(descriptionListData.some(function (key) {
    return !!key.icon;
  }) ? 'has-icons' : ''), addClass);

  var renderDescriptionList = function renderDescriptionList(data) {
    return /*#__PURE__*/React__default.createElement("dl", {
      className: classes
    }, data.map(function (item) {
      return /*#__PURE__*/React__default.createElement(DescriptionListItem, {
        key: item.titleText,
        icon: item.icon,
        titleText: item.titleText,
        descriptionText: item.descriptionText
      });
    }));
  };

  return renderDescriptionList(descriptionListData);
};

DescriptionList.defaultProps = {};
DescriptionList.propTypes = {
  addClass: PropTypes.string,
  descriptionListData: PropTypes.arrayOf(PropTypes.object)
};

var Dialog = function Dialog(_ref) {
  var accentIcon = _ref.accentIcon,
      accentIconColor = _ref.accentIconColor,
      addDialogClass = _ref.addDialogClass,
      appendEl = _ref.appendEl,
      children = _ref.children,
      disableTrapFocus = _ref.disableTrapFocus,
      exposedTrigger = _ref.exposedTrigger,
      hasGrayBackground = _ref.hasGrayBackground,
      hideOverlay = _ref.hideOverlay,
      id = _ref.id,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      prependEl = _ref.prependEl,
      testId = _ref.testId,
      title = _ref.title,
      titleDisabled = _ref.titleDisabled,
      type = _ref.type;
  // Unicode value of the `TAB` and `ESC` key
  var KEYCODE_ESC = 27;
  var dialog = React.useRef(null);
  var overlay = React.useRef(null);
  var close = React.useRef(null);
  var removeKeyDown; // classnames for dialog container

  var dialogClasses = classnames("dialog-container", hideOverlay && "hide-overlay", addDialogClass); // classnames for dialog wrapper

  var dialogWrapperClasses = classnames("dialog-wrapper", hasGrayBackground && "dialog-wrapper-gray", exposedTrigger && "exposed-trigger");

  var triggerOnCloseCallback = function triggerOnCloseCallback() {
    if (onClose) {
      onClose();
    }
  }; // closeMethod (str) = how the close is being triggered
  // element = what user just clicked on to close the dialog and call this function


  var closeDialog = function closeDialog(closeMethod, element) {
    if (closeMethod === "escape-key") {
      triggerOnCloseCallback();
    }

    if (closeMethod === "close-button" || closeMethod === "overlay") {
      var exclude = element.target.classList;

      if (exclude.contains("dialog-overlay") || exclude.contains("dialog-close")) {
        triggerOnCloseCallback();
      }
    }

    if (removeKeyDown) {
      removeKeyDown();
      removeKeyDown = null;
    }
  }; // Update page when the 'isOpen' prop changes.
  // 'isOpen' is controlled in the parent component,
  // so true here means "please open the dialog."


  React.useEffect(function () {
    if (isOpen && !disableTrapFocus) {
      // need a little time for the dialog to appear to safely focus
      setTimeout(function () {
        removeKeyDown = trapFocus(dialog.current, prependEl, appendEl);
        bodyScroll(false);
      }, 100);
    } else {
      closeDialog("initial-trigger");
      bodyScroll(true);
    }
  }, [isOpen]);

  var _onKeyDown = function onKeyDown(e) {
    return e.keyCode === KEYCODE_ESC && closeDialog("escape-key");
  };

  var isMobile = reactResponsive.useMediaQuery({
    query: "(max-width: 767px)"
  });

  var DialogComponent = function DialogComponent() {
    return /*#__PURE__*/React__default.createElement("div", {
      className: dialogClasses,
      id: id,
      "data-testid": testId,
      "data-open": isOpen,
      "data-animate": type,
      "aria-hidden": !isOpen,
      ref: dialog
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "dialog-overlay",
      tabIndex: "-1",
      onClick: function onClick(e) {
        return closeDialog("overlay", e);
      },
      role: "presentation",
      ref: overlay
    }, /*#__PURE__*/React__default.createElement("div", {
      // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
      className: dialogWrapperClasses,
      "data-type": type,
      "aria-modal": "true",
      "aria-labelledby": "".concat(id, "-title"),
      role: "dialog",
      onKeyDown: function onKeyDown(e) {
        return _onKeyDown(e);
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "dialog-scroll"
    }, (type === "drawer-bottom" || type === "feature-modal") && /*#__PURE__*/React__default.createElement(InlineSVG, {
      path: type === "drawer-bottom" || isMobile ? "".concat(MobileModalCurveTop) : "".concat(DesktopModalCurveTop),
      title: "Dialog Top Curve",
      description: isMobile ? "Drawer Curve" : "Top of Modal Curve",
      role: "img",
      focus: false,
      className: "dialog-top-curve"
    }), type === "feature-modal" && /*#__PURE__*/React__default.createElement(InlineSVG, {
      path: isMobile ? "".concat(MobileModalCurveTop) : "".concat(DesktopModalCurveTop),
      title: "Dialog Bottom Curve",
      description: isMobile ? "Drawer Curve" : "Bottom of Modal Curve",
      role: "img",
      focus: false,
      className: "dialog-top-curve"
    }), (type === "feature-modal" || type === "drawer-bottom") && accentIcon && /*#__PURE__*/React__default.createElement("div", {
      className: type === "feature-modal" ? "dialog-accent-icon" : "dialog-title-icon"
    }, /*#__PURE__*/React__default.createElement(AccentIcon, {
      accent: AccentCircle,
      icon: accentIcon,
      iconColor: accentIconColor
    })), !titleDisabled && /*#__PURE__*/React__default.createElement(Typography, {
      id: "".concat(id, "-title"),
      variant: type === "toast" ? "subtext" : "headline-5",
      addClass: "dialog-title"
    }, title), /*#__PURE__*/React__default.createElement("div", {
      id: "".concat(id, "-content"),
      className: "dialog-content"
    }, children), type === "feature-modal" && !isMobile && /*#__PURE__*/React__default.createElement(InlineSVG, {
      path: "".concat(DesktopModalCurveBottom),
      title: "Dialog Bottom Curve",
      description: "Top of Modal Curve",
      role: "img",
      focus: false,
      className: "dialog-bottom-curve"
    })), type !== "drawer-left" && type !== "drawer-right" && /*#__PURE__*/React__default.createElement(IconButton, {
      click: function click(e) {
        return closeDialog("close-button", e);
      },
      icon: "menuclose-bold",
      addClass: "dialog-close",
      variantTypo: "srt",
      ref: close,
      variant: type === "toast" ? "simple" : "tiny",
      testId: "closeDialogButton"
    }, "Close ".concat(title)))));
  };

  if (canUseDOM()) {
    // use createPortal to place the dialog at the end of the body tag
    return /*#__PURE__*/reactDom.createPortal( /*#__PURE__*/React__default.createElement(DialogComponent, null), document.body);
  }

  return /*#__PURE__*/React__default.createElement(DialogComponent, null);
};

Dialog.defaultProps = {
  id: "dialog-".concat(Math.floor(Math.random() * 10000)),
  type: "modal",
  title: "Dialog Window"
};
Dialog.propTypes = {
  accentIcon: PropTypes.string,
  accentIconColor: PropTypes.string,
  addDialogClass: PropTypes.string,
  appendEl: PropTypes.string,
  // appendEl="button.dialog-close"
  children: PropTypes.node,
  disableTrapFocus: PropTypes.bool,
  exposedTrigger: PropTypes.bool,
  hasGrayBackground: PropTypes.bool,
  hideOverlay: PropTypes.bool,
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  prependEl: PropTypes.string,
  testId: PropTypes.string,
  type: PropTypes.oneOf(["modal", "feature-modal", "toast", "drawer-left", "drawer-right", "drawer-bottom", "drawer-top"]),
  title: PropTypes.string,
  titleDisabled: PropTypes.bool
};

var DialogManager = function DialogManager(WrappedModal, Context) {
  return function (_ref) {
    var children = _ref.children;

    var _React$useState = React__default.useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        isOpen = _React$useState2[0],
        setIsOpen = _React$useState2[1];

    var _React$useState3 = React__default.useState(null),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        openedBy = _React$useState4[0],
        setOpenedBy = _React$useState4[1]; // Refocuses on the trigger that opened the Dialog


    var open = function open(e) {
      setIsOpen(true);

      if (e && e.currentTarget) {
        setOpenedBy(e.currentTarget);
      }
    };

    var close = function close() {
      setIsOpen(false);
    };

    React__default.useEffect(function () {
      if (!isOpen && openedBy) {
        openedBy.focus();
        setOpenedBy(null);
      }
    }, [isOpen]);
    return /*#__PURE__*/React__default.createElement(Context.Provider, {
      value: {
        isOpen: isOpen,
        openedBy: openedBy,
        open: open,
        close: close
      }
    }, children, /*#__PURE__*/React__default.createElement(WrappedModal, null));
  };
};

var Label = function Label(_ref) {
  var fieldType = _ref.fieldType,
      forId = _ref.forId,
      display = _ref.display,
      hideLabel = _ref.hideLabel,
      isDisabled = _ref.isDisabled,
      color = _ref.color,
      required = _ref.required,
      addClass = _ref.addClass,
      suffixHelperText = _ref.suffixHelperText,
      children = _ref.children;
  var classes = classnames('input-label', fieldType, display, hideLabel && 'hide-label', addClass, {
    isDisabled: isDisabled
  });
  var srtVariant = hideLabel && "srt";
  return /*#__PURE__*/React__default.createElement("label", {
    className: classes,
    htmlFor: forId
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: srtVariant || "field-label",
    color: color,
    addClass: addClass
  }, children), suffixHelperText && /*#__PURE__*/React__default.createElement(Typography, {
    variant: "helper",
    addClass: "optional"
  }, suffixHelperText), !required && /*#__PURE__*/React__default.createElement(Typography, {
    variant: srtVariant || "helper",
    addClass: "optional"
  }, "(Optional)"));
};

Label.defaultProps = {
  fieldType: 'text',
  display: 'inline',
  isDisabled: false,
  color: ''
};
Label.propTypes = {
  fieldType: PropTypes.oneOf(['text', 'radio', 'checkbox', 'textarea', 'select']),
  forId: PropTypes.string,
  display: PropTypes.oneOf(['inline', 'inline-block', 'block']),
  hideLabel: PropTypes.bool,
  isDisabled: PropTypes.bool,
  color: PropTypes.string,
  suffixHelperText: PropTypes.string,
  // helper text that is appended to label
  required: PropTypes.bool,
  addClass: PropTypes.string,
  children: PropTypes.node
};

var Input = function Input(_ref) {
  var ariaControls = _ref.ariaControls,
      autoComplete = _ref.autoComplete,
      click = _ref.click,
      domId = _ref.domId,
      error = _ref.error,
      isChecked = _ref.isChecked,
      isDisabled = _ref.isDisabled,
      maxLength = _ref.maxLength,
      name = _ref.name,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      required = _ref.required,
      type = _ref.type,
      value = _ref.value,
      min = _ref.min,
      max = _ref.max,
      step = _ref.step;
  var classes = classnames('input-field', {
    error: error
  });
  return /*#__PURE__*/React__default.createElement("input", {
    "aria-controls": ariaControls,
    autoComplete: autoComplete || undefined,
    type: type,
    name: name,
    id: domId,
    className: classes,
    maxLength: maxLength,
    placeholder: placeholder,
    defaultValue: value,
    checked: isChecked,
    disabled: isDisabled,
    "aria-required": required,
    "aria-invalid": error,
    onChange: onChange,
    onBlur: onBlur,
    onClick: click,
    onFocus: onFocus,
    min: min,
    max: max,
    step: step
  });
};

Input.defaultProps = {
  domId: '',
  name: '',
  onChange: null,
  onBlur: null,
  placeholder: '',
  type: 'text',
  value: ''
};
Input.propTypes = {
  ariaControls: PropTypes.string,
  autoComplete: PropTypes.oneOf(['on', 'off']),
  click: PropTypes.func,
  domId: PropTypes.string,
  error: PropTypes.bool,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string
};

var Indicator = function Indicator(_ref) {
  var children = _ref.children,
      type = _ref.type,
      error = _ref.error;
  var classes = classnames('indicator', error, "indicator-".concat(type));
  return /*#__PURE__*/React__default.createElement("span", {
    className: classes,
    "aria-hidden": "true"
  }, children);
};

Indicator.defaultProps = {
  children: '',
  type: undefined
};
Indicator.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['radio', 'checkbox', 'toggle', 'hidden']),
  error: PropTypes.bool
};

var HelperText = function HelperText(_ref) {
  var addClass = _ref.addClass,
      error = _ref.error,
      children = _ref.children;
  var classes = classnames('helper-text', addClass, {
    error: error
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes,
    role: error ? 'alert' : undefined
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "helper"
  }, children));
};

HelperText.defaultProps = {};
HelperText.propTypes = {
  addClass: PropTypes.string,
  error: PropTypes.bool,
  children: PropTypes.node
};

var Checkbox = function Checkbox(_ref) {
  var domId = _ref.domId,
      helperText = _ref.helperText,
      isFieldSet = _ref.isFieldSet,
      isDisabled = _ref.isDisabled,
      storybookErrorPreview = _ref.storybookErrorPreview,
      children = _ref.children,
      click = _ref.click,
      addClass = _ref.addClass,
      props = _objectWithoutProperties(_ref, ["domId", "helperText", "isFieldSet", "isDisabled", "storybookErrorPreview", "children", "click", "addClass"]);

  // useField passes name, placeholder, value, onChange and onBlur
  var _useField = formik.useField(_objectSpread2(_objectSpread2({}, props), {}, {
    type: 'checkbox'
  })),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  var isError = !!(meta.touched && meta.error && typeof meta.error === 'string');
  var fieldHelperText = isError ? meta.error : helperText;
  var classes = classnames('input-field-container', 'input-field-checkbox', addClass, {
    'no-helpertext': (fieldHelperText === '' || fieldHelperText === undefined) && !isFieldSet
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default.createElement(Input, _extends({
    type: "checkbox",
    domId: domId,
    error: isError,
    isDisabled: isDisabled,
    click: click // Spreading props, as required by Formik in useField: https://jaredpalmer.com/formik/docs/api/useField#example
    // eslint-disable-next-line react/jsx-props-no-spreading

  }, field, props, {
    isChecked: field.checked
  })), /*#__PURE__*/React__default.createElement(Indicator, {
    type: "checkbox",
    error: isError
  }), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Label, {
    fieldType: "checkbox",
    forId: domId,
    disabled: isDisabled,
    display: "inline-block",
    required: true
  }, children), fieldHelperText && !isFieldSet && /*#__PURE__*/React__default.createElement(HelperText, {
    error: isError || storybookErrorPreview
  }, fieldHelperText)));
};

Checkbox.defaultProps = {
  isFieldSet: false,
  isDisabled: false,
  click: null
};
Checkbox.propTypes = {
  domId: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  isFieldSet: PropTypes.bool,
  isDisabled: PropTypes.bool,
  storybookErrorPreview: PropTypes.bool,
  children: PropTypes.node,
  click: PropTypes.func,
  addClass: PropTypes.string
};

var Select = function Select(_ref) {
  var defaultOption = _ref.defaultOption,
      domId = _ref.domId,
      error = _ref.error,
      isDisabled = _ref.isDisabled,
      name = _ref.name,
      options = _ref.options,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      value = _ref.value,
      variant = _ref.variant;
  var classes = classnames('input-field', {
    error: error
  });
  var myRef = React.useRef(null);

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      charCount = _useState2[0],
      setCharCount = _useState2[1]; // Character count for selected option


  var resizeComponent = function resizeComponent() {
    if (myRef.current) {
      if (myRef.current.options.selectedIndex === 0) {
        setCharCount(defaultOption ? defaultOption.length : options[0].label.length);
      } else {
        var offset = defaultOption ? 1 : 0;
        setCharCount(options ? options[myRef.current.options.selectedIndex - offset].label.length : 0);
      }
    }
  };

  var handleChange = function handleChange(e) {
    resizeComponent();

    if (onChange) {
      onChange(e);
    }
  };

  React.useEffect(function () {
    resizeComponent();
  }, [options]); // Here we are calculating the length of a selected option,
  // multiplying it by about a character's pixel width, 7,
  // and adding some additional spacing based on the variant provided.

  var style = variant === 'text' ? {
    width: "".concat(charCount / 2 + (1 - 0.05 * charCount), "rem")
  } : {};
  return /*#__PURE__*/React__default.createElement("select", {
    name: name,
    className: classes,
    disabled: isDisabled,
    id: domId,
    "aria-required": "true",
    "aria-invalid": error,
    onChange: handleChange,
    onBlur: onBlur,
    value: value || defaultOption,
    style: style,
    ref: myRef
  }, defaultOption && /*#__PURE__*/React__default.createElement("option", {
    key: "default",
    value: defaultOption,
    default: true,
    disabled: true
  }, defaultOption), options && options.map(function (option) {
    return /*#__PURE__*/React__default.createElement("option", {
      key: option.value,
      value: option.value,
      disabled: option.disabled
    }, option.label);
  }));
};

Select.defaultProps = {
  error: false,
  isDisabled: false,
  onChange: null,
  onBlur: null
};
Select.propTypes = {
  name: PropTypes.string,
  error: PropTypes.bool,
  isDisabled: PropTypes.bool,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  domId: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool
  })),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'text', 'font'])
};

var Dropdown = function Dropdown(_ref) {
  var addClass = _ref.addClass,
      children = _ref.children,
      color = _ref.color,
      defaultOption = _ref.defaultOption,
      domId = _ref.domId,
      helperText = _ref.helperText,
      hideLabel = _ref.hideLabel,
      iconTestId = _ref.iconTestId,
      label = _ref.label,
      noFormik = _ref.noFormik,
      options = _ref.options,
      required = _ref.required,
      storybookErrorPreview = _ref.storybookErrorPreview,
      variant = _ref.variant,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["addClass", "children", "color", "defaultOption", "domId", "helperText", "hideLabel", "iconTestId", "label", "noFormik", "options", "required", "storybookErrorPreview", "variant", "onChange"]);

  // useField passes name, placeholder, value, onChange and onBlur
  var _useField = formik.useField(_objectSpread2(_objectSpread2({}, props), {}, {
    type: 'select'
  })),
      _useField2 = _slicedToArray(_useField, 3),
      field = _useField2[0],
      meta = _useField2[1],
      helpers = _useField2[2];

  var _useState = React.useState(meta.initialValue || field.value),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var isError = !!(meta.touched && meta.error && typeof meta.error === 'string');
  var fieldHelperText = isError ? meta.error : helperText;
  var classes = classnames('input-field-container', 'input-field-select', 'has-icon icon-right', addClass, "variant-".concat(variant), {
    'no-helpertext': !fieldHelperText
  }, {
    'font-select': variant === 'font'
  }); // Helper For Font Variant

  var selectedFont = function selectedFont(fontOptions) {
    // Iterate through fontOptions array
    var obj = fontOptions.find(function (o) {
      return o.value === field.value;
    });
    var selectedSvg = obj ? obj.svg : fontOptions[0].svg;
    return selectedSvg;
  };

  React.useEffect(function () {
    meta.value = value;
  }, [value]);

  var onChangeWrapper = function onChangeWrapper(e) {
    helpers.setValue(e.target.value);
    setValue(e.target.value);

    if (onChange) {
      onChange(e);
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, variant === 'font' && options && /*#__PURE__*/React__default.createElement("div", {
    className: "font-dropdown"
  }, /*#__PURE__*/React__default.createElement(InlineSVG, {
    path: selectedFont(options),
    title: "Font",
    description: "Font select option",
    focus: false,
    className: "font-dropdown",
    "aria-hidden": "true",
    focusable: "false"
  })), /*#__PURE__*/React__default.createElement(Select, _extends({
    domId: domId,
    options: options,
    defaultOption: defaultOption,
    error: isError || storybookErrorPreview,
    variant: variant // Spreading props, as required by Formik in useField: https://jaredpalmer.com/formik/docs/api/useField#example
    // eslint-disable-next-line react/jsx-props-no-spreading

  }, field, props, {
    value: value,
    onChange: onChangeWrapper
  })), /*#__PURE__*/React__default.createElement(Label, {
    display: "block",
    fieldType: "text",
    color: color,
    forId: domId,
    required: required,
    hideLabel: hideLabel
  }, label), /*#__PURE__*/React__default.createElement(Icon, {
    name: "arrows-norgiedown-bold",
    size: 8,
    testId: iconTestId
  }), fieldHelperText && /*#__PURE__*/React__default.createElement(HelperText, {
    error: isError || storybookErrorPreview
  }, fieldHelperText));
};

Dropdown.defaultProps = {
  variant: 'default',
  color: 'gray4'
};
Dropdown.propTypes = {
  addClass: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  defaultOption: PropTypes.string,
  domId: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  hideLabel: PropTypes.bool,
  iconTestId: PropTypes.string,
  label: PropTypes.string,
  noFormik: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
  required: PropTypes.bool,
  storybookErrorPreview: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'text', 'font']),
  onChange: PropTypes.func
};

var Fieldset = function Fieldset(_ref) {
  var legend = _ref.legend,
      addClass = _ref.addClass,
      domId = _ref.domId,
      helperText = _ref.helperText,
      storybookErrorPreview = _ref.storybookErrorPreview,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["legend", "addClass", "domId", "helperText", "storybookErrorPreview", "children"]);

  // useField passes name, placeholder, value, onChange and onBlur
  var _useField = formik.useField(_objectSpread2({}, props)),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  var isError = !!(meta.touched && meta.error && typeof meta.error === 'string');
  var fieldHelperText = isError ? meta.error : helperText;
  var classes = classnames('input-fieldset', 'fieldset-container', addClass, {
    'no-helpertext': !fieldHelperText
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default.createElement("fieldset", _extends({
    id: domId // Spreading props, as required by Formik in useField: https://jaredpalmer.com/formik/docs/api/useField#example
    // eslint-disable-next-line react/jsx-props-no-spreading

  }, field, props), /*#__PURE__*/React__default.createElement("legend", {
    className: "screen-reader-text"
  }, legend), children), fieldHelperText && /*#__PURE__*/React__default.createElement(HelperText, {
    error: isError || storybookErrorPreview
  }, fieldHelperText));
};

Fieldset.defaultProps = {};
Fieldset.propTypes = {
  legend: PropTypes.string.isRequired,
  domId: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  classes: PropTypes.string,
  storybookErrorPreview: PropTypes.bool,
  addClass: PropTypes.string,
  children: PropTypes.node
};

var RadioButton = function RadioButton(_ref) {
  var ariaControls = _ref.ariaControls,
      domId = _ref.domId,
      label = _ref.label,
      isCard = _ref.isCard,
      helperText = _ref.helperText,
      addClass = _ref.addClass,
      isDisabled = _ref.isDisabled,
      children = _ref.children,
      variant = _ref.variant,
      hiddenLabel = _ref.hiddenLabel,
      props = _objectWithoutProperties(_ref, ["ariaControls", "domId", "label", "isCard", "helperText", "addClass", "isDisabled", "children", "variant", "hiddenLabel"]);

  // useField passes name, placeholder, value, onChange and onBlur
  var _useField = formik.useField(_objectSpread2(_objectSpread2({}, props), {}, {
    type: 'radio'
  })),
      _useField2 = _slicedToArray(_useField, 1),
      field = _useField2[0]; // For FieldSet Render Props


  var name = props.name;
  var classes = classnames('input-field-container', 'input-field-radio', {
    'input-field-radio-blank': variant === 'blank-card'
  }, {
    'input-field-radio-card': isCard
  }, {
    'input-field-disabled': isDisabled
  }, addClass);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line react/jsx-props-no-spreading
    React__default.createElement("div", {
      className: classes
    }, /*#__PURE__*/React__default.createElement(Input, _extends({
      ariaControls: ariaControls,
      type: "radio",
      domId: domId,
      name: name || field.name,
      isChecked: field.checked,
      className: classnames('radio-button'),
      isDisabled: isDisabled // Spreading props, as required by Formik in useField: https://jaredpalmer.com/formik/docs/api/useField#example
      // eslint-disable-next-line react/jsx-props-no-spreading

    }, field, props)), /*#__PURE__*/React__default.createElement(Indicator, {
      type: variant === 'blank-card' ? 'hidden' : 'radio'
    }), children, /*#__PURE__*/React__default.createElement("div", {
      className: "radio-button-labels ".concat(hiddenLabel && 'screen-reader-text')
    }, /*#__PURE__*/React__default.createElement(Label, {
      fieldType: "radio",
      isDisabled: isDisabled,
      forId: domId,
      display: "inline-block",
      addClass: hiddenLabel && "screen-reader-text",
      required: true
    }, label), isCard && helperText ? /*#__PURE__*/React__default.createElement(HelperText, null, helperText) : ''))
  );
};

RadioButton.defaultProps = {
  isCard: false,
  isDisabled: false
};
RadioButton.propTypes = {
  ariaControls: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  hiddenLabel: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
  domId: PropTypes.string.isRequired,
  addClass: PropTypes.string,
  helperText: PropTypes.string,
  isCard: PropTypes.bool,
  isDisabled: PropTypes.bool,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['blank-card'])
};

var _this$3 = undefined;

var Range = function Range(_ref) {
  var domId = _ref.domId,
      name = _ref.name,
      range = _ref.range,
      tickCount = _ref.tickCount,
      step = _ref.step,
      label = _ref.label,
      showValueInLabel = _ref.showValueInLabel,
      isDisabled = _ref.isDisabled,
      addClass = _ref.addClass,
      onChange = _ref.onChange,
      fontValue = _ref.fontValue,
      props = _objectWithoutProperties(_ref, ["domId", "name", "range", "tickCount", "step", "label", "showValueInLabel", "isDisabled", "addClass", "onChange", "fontValue"]);

  var classes = classnames('input-range-container', addClass);
  var min = Array.isArray(range) ? '0' : range.min;
  var max = Array.isArray(range) ? "".concat(range.length - 1) : range.max; // formik field

  var _useField = formik.useField({
    name: name
  }),
      _useField2 = _slicedToArray(_useField, 3),
      field = _useField2[0],
      meta = _useField2[1],
      helpers = _useField2[2];

  var _useState = React.useState(meta.initialValue || fontValue || field.value || meta.value || min),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1]; // label suffix


  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      suffix = _useState4[0],
      setSuffix = _useState4[1];

  React.useEffect(function () {
    meta.value = value;
    setSuffix(showValueInLabel && Array.isArray(range) ? range[parseInt(value, 10)] : null);
  }, [value]);

  var onChangeWrapper = function onChangeWrapper(e) {
    helpers.setValue(e.target.value);
    setValue(e.target.value);

    if (onChange) {
      onChange(e);
    }
  }; // TODO: We should make this a util function


  var debounce = function debounce(fn, ms) {
    var timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        timer = null;
        fn.apply(_this$3);
      }, ms);
    };
  };

  var debouncedHandleOnChange = function debouncedHandleOnChange(e) {
    return debounce(onChangeWrapper(e), 250);
  }; // 250ms wait time to fire resize


  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default.createElement(Label, {
    forId: domId,
    required: true,
    suffixHelperText: suffix
  }, label), /*#__PURE__*/React__default.createElement("div", {
    className: "input-range-slider-background"
  }), tickCount > 0 && /*#__PURE__*/React__default.createElement("div", {
    className: "input-range-tick-container"
  }, _toConsumableArray(Array(tickCount)).map(function (v, i) {
    return (
      /*#__PURE__*/
      // eslint-disable-next-line react/no-array-index-key
      React__default.createElement("div", {
        className: "input-range-tick",
        key: "tick-".concat(v, "-").concat(i)
      })
    );
  })), /*#__PURE__*/React__default.createElement(Input, _extends({
    type: "range",
    domId: domId,
    name: name,
    min: min,
    max: max,
    step: step,
    isDisabled: isDisabled // Spreading props, as required by Formik in useField: https://jaredpalmer.com/formik/docs/api/useField#example
    // eslint-disable-next-line react/jsx-props-no-spreading

  }, field, {
    value: value,
    onChange: debouncedHandleOnChange // eslint-disable-next-line react/jsx-props-no-spreading

  }, props)));
};

Range.defaultProps = {
  range: {
    min: '0',
    max: '100'
  },
  step: '1',
  tickCount: 2
};
Range.propTypes = {
  isDisabled: PropTypes.bool,
  showValueInLabel: PropTypes.bool,
  range: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.exact({
    min: PropTypes.string,
    max: PropTypes.string
  })]),
  step: PropTypes.string,
  tickCount: PropTypes.number,
  domId: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  addClass: PropTypes.string,
  onChange: PropTypes.func,
  fontValue: PropTypes.string
};

var SegmentedControl = function SegmentedControl(_ref) {
  var segments = _ref.segments,
      defaultSelected = _ref.defaultSelected,
      legend = _ref.legend,
      domId = _ref.domId,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ["segments", "defaultSelected", "legend", "domId", "onChange"]);

  var _useState = React.useState(defaultSelected),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1]; // useField passes name, placeholder, value, onChange and onBlur
  // For FieldSet Render Props


  var name = props.name;

  var onChangeHandler = function onChangeHandler(e) {
    if (onChange) {
      onChange(e);
    }
  }; // Map segments array to segment components


  var Items = segments.map(function (segment, index) {
    return /*#__PURE__*/React__default.createElement("li", {
      className: "segmented-control-item",
      key: segment.value
    }, /*#__PURE__*/React__default.createElement(Input, {
      addClass: "segmented-control-input",
      type: "radio",
      value: segment.value,
      name: name,
      domId: segment.value,
      defaultChecked: segment.value === defaultSelected,
      onChange: function onChange(e) {
        setSelected(index);
        onChangeHandler(e);
      }
    }), /*#__PURE__*/React__default.createElement("label", {
      className: "segmented-control-label",
      htmlFor: segment.value
    }, /*#__PURE__*/React__default.createElement(Typography, {
      variant: "srt"
    }, segment.label), /*#__PURE__*/React__default.createElement(Icon, {
      name: segment.icon
    })));
  }); // Render SegmentControl

  return /*#__PURE__*/React__default.createElement("div", {
    "test-id": "segmented-control-test-id",
    className: "segmented-control-holder selected-".concat(selected)
  }, /*#__PURE__*/React__default.createElement(Fieldset, {
    legend: legend,
    domId: domId,
    name: name
  }, /*#__PURE__*/React__default.createElement("ul", {
    className: "segmented-control"
  }, Items)));
};

SegmentedControl.defaultProps = {
  defaultSelected: 0
};
SegmentedControl.propTypes = {
  defaultSelected: PropTypes.number,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  domId: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  segments: function segments(props, propName, componentName) {
    var arrayLength = props[propName].length;

    if (arrayLength < 2 || arrayLength > 4) {
      return new Error("Invalid length of prop `".concat(propName, "` supplied to") + " `".concat(componentName, "`. Validation failed."));
    }
  }
};

var TextField = function TextField(_ref) {
  var addClass = _ref.addClass,
      autoComplete = _ref.autoComplete,
      children = _ref.children,
      domId = _ref.domId,
      helperText = _ref.helperText,
      hideLabel = _ref.hideLabel,
      icon = _ref.icon,
      iconPos = _ref.iconPos,
      iconOnClick = _ref.iconOnClick,
      iconSR = _ref.iconSR,
      label = _ref.label,
      maxLength = _ref.maxLength,
      required = _ref.required,
      storybookErrorPreview = _ref.storybookErrorPreview,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["addClass", "autoComplete", "children", "domId", "helperText", "hideLabel", "icon", "iconPos", "iconOnClick", "iconSR", "label", "maxLength", "required", "storybookErrorPreview", "type"]);

  // useField passes name, placeholder, value, onChange and onBlur
  var _useField = formik.useField(_objectSpread2(_objectSpread2({}, props), {}, {
    type: 'text'
  })),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  var isError = !!(meta.touched && meta.error && typeof meta.error === 'string');
  var fieldHelperText = isError ? meta.error : helperText;
  var classes = classnames('input-field-container', 'input-field-text', {
    'no-helpertext': !fieldHelperText
  }, hideLabel && 'hidden-label', iconPos && "has-icon icon-".concat(iconPos), addClass);

  var InputIcon = function InputIcon() {
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, iconOnClick ? /*#__PURE__*/React__default.createElement(IconButton, {
      icon: icon,
      size: 24,
      click: iconOnClick
    }, iconSR) : /*#__PURE__*/React__default.createElement(Icon, {
      name: icon,
      size: 24,
      error: isError || storybookErrorPreview
    }));
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: classes,
    "data-testid": "test-id-input"
  }, /*#__PURE__*/React__default.createElement(Input, _extends({
    autoComplete: autoComplete,
    domId: domId,
    error: isError || storybookErrorPreview,
    maxLength: maxLength,
    required: required,
    type: type // Spreading props, as required by Formik in useField: https://jaredpalmer.com/formik/docs/api/useField#example
    // eslint-disable-next-line react/jsx-props-no-spreading

  }, field, props)), children, /*#__PURE__*/React__default.createElement(Label, {
    color: "gray4",
    display: "block",
    fieldType: "text",
    forId: domId,
    hideLabel: hideLabel,
    required: required
  }, label), iconPos && /*#__PURE__*/React__default.createElement(InputIcon, null), fieldHelperText && /*#__PURE__*/React__default.createElement(HelperText, {
    error: isError || storybookErrorPreview
  }, fieldHelperText));
};

TextField.defaultProps = {
  iconOnClick: null
};
TextField.propTypes = {
  addClass: PropTypes.string,
  autoComplete: PropTypes.oneOf(['on', 'off']),
  children: PropTypes.node,
  domId: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  hideLabel: PropTypes.bool,
  icon: PropTypes.string,
  iconOnClick: PropTypes.func,
  iconPos: PropTypes.oneOf(['left', 'right']),
  iconSR: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  storybookErrorPreview: PropTypes.bool,
  type: PropTypes.string
};

var ToggleSwitch = function ToggleSwitch(_ref) {
  var label = _ref.label,
      labelPosition = _ref.labelPosition,
      domId = _ref.domId,
      addClass = _ref.addClass,
      helperText = _ref.helperText,
      isChecked = _ref.isChecked,
      storybookErrorPreview = _ref.storybookErrorPreview,
      children = _ref.children,
      required = _ref.required,
      props = _objectWithoutProperties(_ref, ["label", "labelPosition", "domId", "addClass", "helperText", "isChecked", "storybookErrorPreview", "children", "required"]);

  // useField passes name, placeholder, value, onChange and onBlur
  var _useField = formik.useField(_objectSpread2(_objectSpread2({}, props), {}, {
    type: 'checkbox'
  })),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  var isError = !!(meta.touched && meta.error && typeof meta.error === 'string');
  var fieldHelperText = isError ? meta.error : helperText;
  var classes = classnames('toggle-switch', {
    'no-helpertext': !fieldHelperText
  }, {
    'toggle-switch--right': labelPosition === 'right'
  }, addClass);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default.createElement(Label, {
    fieldType: "checkbox",
    forId: domId,
    required: true
  }, label), /*#__PURE__*/React__default.createElement(Input, _extends({
    type: "checkbox",
    domId: domId,
    isChecked: isChecked || field.checked,
    error: isError // Spreading props, as required by Formik in useField: https://jaredpalmer.com/formik/docs/api/useField#example
    // eslint-disable-next-line react/jsx-props-no-spreading

  }, field, props)), /*#__PURE__*/React__default.createElement(Indicator, {
    type: "toggle"
  }), fieldHelperText && /*#__PURE__*/React__default.createElement(HelperText, {
    error: isError || storybookErrorPreview
  }, fieldHelperText));
};

ToggleSwitch.defaultProps = {
  labelPosition: 'left'
};
ToggleSwitch.propTypes = {
  label: PropTypes.string,
  addClass: PropTypes.string,
  helperText: PropTypes.string,
  isChecked: PropTypes.bool,
  domId: PropTypes.string.isRequired,
  storybookErrorPreview: PropTypes.bool,
  labelPosition: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node,
  required: PropTypes.bool
};

var Tooltip = function Tooltip(_ref) {
  var addClass = _ref.addClass,
      children = _ref.children,
      orientation = _ref.orientation,
      caretAlignment = _ref.caretAlignment,
      textAlignment = _ref.textAlignment,
      icon = _ref.icon,
      iconColor = _ref.iconColor,
      title = _ref.title,
      content = _ref.content;
  var tooltipClasses = classnames('tooltip-overlay', addClass, orientation, caretAlignment, textAlignment, icon);
  var tooltipTriggerClasses = classnames('tooltip tooltip-trigger', caretAlignment);
  var trigger = React.useRef(null);
  var tooltip = React.useRef(null);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = React.useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isHidden = _useState4[0],
      setHidden = _useState4[1];

  var tooltipComponents = ['top', 'bottom', 'left', 'right', 'center-align', 'left-align', 'right-align', 'text-align-left', 'text-align-center', 'text-align-right'];

  if (tooltipComponents.indexOf(orientation) === -1) {
    return null;
  }

  if (tooltipComponents.indexOf(caretAlignment) === -1) {
    return null;
  }

  if (tooltipComponents.indexOf(textAlignment) === -1) {
    return null;
  }

  function TooltipOpen(e) {
    // Handle open with Keyboard
    if (isOpen === false && e.type === 'keydown') {
      setOpen(true);
      setHidden(false);
    }
  }

  function TooltipClose() {
    // Handle close with Keyboard
    if (isOpen === true) {
      setOpen(false);
      setHidden(true);
    }
  }

  function ToggleTooltip() {
    if (isOpen === false) {
      setOpen(true);
      setHidden(false);
    } else {
      setOpen(false);
      setHidden(true);
    }
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: "tooltip-wrapper"
  }, /*#__PURE__*/React__default.createElement("button", {
    className: tooltipTriggerClasses,
    onClick: function onClick(e) {
      return ToggleTooltip();
    },
    onFocus: function onFocus(e) {
      return TooltipOpen(e);
    },
    onBlur: function onBlur(e) {
      return TooltipClose();
    },
    type: "button",
    ref: trigger,
    tabIndex: "0"
  }, icon && /*#__PURE__*/React__default.createElement(Icon, {
    size: 24,
    name: icon,
    color: iconColor
  }), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body-medium"
  }, children), /*#__PURE__*/React__default.createElement("div", {
    className: "tooltip-content"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: tooltipClasses,
    "data-open": isOpen,
    "data-animate": "modal",
    "data-type": "modal",
    "aria-hidden": isHidden,
    role: "tooltip",
    ref: tooltip,
    tabIndex: "-1"
  }, title && /*#__PURE__*/React__default.createElement(Typography, {
    addClass: "tooltip-title",
    variant: "body-medium"
  }, title), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "helper"
  }, content), /*#__PURE__*/React__default.createElement("i", {
    className: "caret"
  })))));
};

Tooltip.defaultProps = {
  orientation: 'bottom',
  caretAlignment: 'center-align',
  textAlignment: 'text-align-left',
  icon: '',
  title: '',
  content: ''
};
Tooltip.propTypes = {
  children: PropTypes.node,
  addClass: PropTypes.string,
  orientation: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
  caretAlignment: PropTypes.oneOf(['center-align', 'left-align', 'right-align']),
  textAlignment: PropTypes.oneOf(['text-align-left', 'text-align-center', 'text-align-right']),
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string
};

//   AllMyBest,
//   BuhBye,
//   CatchYouLater,
//   CheersToYou,
//   GratefulForYou,
//   HeySunshine,
//   HugsToYou,
//   KeepInTouch,
//   KindRegards,
//   LaterGator,
//   SimplyYours,
//   StayStrong,
//   TakeItEasy,
//   TilNextTime,
//   WarmestWishes,
//   YoursAlways,
// } from '../../../assets/svg';
// And now we can use these

var BasicForm = function BasicForm() {
  var DropdownOptions = [{
    label: "Option 1",
    value: "option1",
    disabled: false
  }, {
    label: "Option 2",
    value: "option2",
    disabled: false
  }, {
    label: "Option 3",
    value: "option3",
    disabled: false
  }]; // const fontOptions = [
  //   {
  //     value: 'allMyBest',
  //     label: 'All My Best',
  //     svg: AllMyBest,
  //   },
  //   {
  //     value: 'buhBye',
  //     label: 'Buh Bye',
  //     svg: BuhBye,
  //   },
  //   {
  //     value: 'catchYouLater',
  //     label: 'Catch You Later',
  //     svg: CatchYouLater,
  //   },
  //   {
  //     value: 'cheersToYou',
  //     label: 'Cheers To You',
  //     svg: CheersToYou,
  //   },
  //   {
  //     value: 'gratefulForYou',
  //     label: 'Grateful For You',
  //     svg: GratefulForYou,
  //   },
  //   {
  //     value: 'heySunshine',
  //     label: 'Hey Sunshine',
  //     svg: HeySunshine,
  //   },
  //   {
  //     value: 'hugsToYou',
  //     label: 'Hugs To You',
  //     svg: HugsToYou,
  //   },
  //   {
  //     value: 'keepInTouch',
  //     label: 'Keep In Touch',
  //     svg: KeepInTouch,
  //   },
  //   {
  //     value: 'kindRegards',
  //     label: 'Kind Regards',
  //     svg: KindRegards,
  //   },
  //   {
  //     value: 'laterGator',
  //     label: 'Later Gator',
  //     svg: LaterGator,
  //   },
  //   {
  //     value: 'simplyYours',
  //     label: 'Simply Yours',
  //     svg: SimplyYours,
  //   },
  //   {
  //     value: 'stayStrong',
  //     label: 'Stay Strong',
  //     svg: StayStrong,
  //   },
  //   {
  //     value: 'takeItEasy',
  //     label: 'Take It Easy',
  //     svg: TakeItEasy,
  //   },
  //   {
  //     value: 'tilNextTime',
  //     label: 'Til Next Time',
  //     svg: TilNextTime,
  //   },
  //   {
  //     value: 'warmestWishes',
  //     label: 'Warmest Wishes',
  //     svg: WarmestWishes,
  //   },
  //   {
  //     value: 'yoursAlways',
  //     label: 'Yours Always',
  //     svg: YoursAlways,
  //   }
  // ];

  var checked = false;
  var imageArray = [/*#__PURE__*/React__default.createElement("div", {
    style: {
      marginRight: "16px"
    },
    key: "1"
  }, /*#__PURE__*/React__default.createElement(Image, {
    className: "radio-button-image",
    alt: "pic-1",
    src: "https://media4.s-nbcnews.com/j/streams/2014/May/140505/2D274905781707-hallmark-two-moms-day-md2926.fit-760w.jpg"
  })), /*#__PURE__*/React__default.createElement("div", {
    style: {
      marginRight: "16px"
    },
    key: "2"
  }, /*#__PURE__*/React__default.createElement(Image, {
    className: "radio-button-image",
    alt: "pic-2",
    src: "https://media4.s-nbcnews.com/j/streams/2014/May/140505/2D274905781707-hallmark-two-moms-day-md2926.fit-760w.jpg"
  })), /*#__PURE__*/React__default.createElement("div", {
    key: "3"
  }, /*#__PURE__*/React__default.createElement(Image, {
    className: "radio-button-image",
    alt: "pic-3",
    src: "https://media4.s-nbcnews.com/j/streams/2014/May/140505/2D274905781707-hallmark-two-moms-day-md2926.fit-760w.jpg"
  }))]; // Custom onChange functionality examples
  // const [fontId, setFontId] = useState('allMyBest');

  var _useState = React.useState("5"),
      _useState2 = _slicedToArray(_useState, 2),
      rangeId = _useState2[0],
      setRangeId = _useState2[1];

  var _useState3 = React.useState("5"),
      _useState4 = _slicedToArray(_useState3, 2),
      scId = _useState4[0],
      setSCId = _useState4[1]; // const onFontChanged = (value) => {
  //   setFontId(value);
  //   console.log("Font triggered", value);
  // };


  var onRangeChanged = function onRangeChanged(value) {
    setRangeId(value);
    console.log("Range triggered", value);
  };

  var onSCChanged = function onSCChanged(value) {
    setSCId(value);
    console.log("SC triggered", value);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: "form-wrapper"
  }, /*#__PURE__*/React__default.createElement(formik.Formik, {
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      crownRewards: "",
      acceptedTerms: false,
      select: "",
      signUp: "radioBtn2",
      checkboxGroup: [],
      rangeInput: "5",
      toggle: true,
      segmentedcontrol: "calendar"
    },
    validationSchema: Yup.object({
      firstName: Yup.string().min(2, "Please enter your first name.").max(40, "Must be 40 characters or less").required("Please enter your first name."),
      lastName: Yup.string().min(2, "Please enter your last name.").max(40).required("Please enter your last name."),
      email: Yup.string().max(50).email("Please enter a valid email address.").required("Please enter a valid email address."),
      password: Yup.string().min(6, "Please use 6-15 characters.").max(15).required("Please use 6-15 characters."),
      crownRewards: Yup.string() // Best way to achieve a numerical with maxlength:
      // Instead of .number, use .string with regex
      // and maxLength on Field
      .required("Please enter your 12-digit Crown Rewards number.").matches(/^[0-9]+$/, "Please use only digits.").min(12, "Please enter your 12-digit Crown Rewards number.").max(12),
      acceptedTerms: Yup.boolean().required("You must accept the terms and conditions.").oneOf([true], "You must accept the terms and conditions."),
      select: Yup.string().oneOf(["option1", "option2", "option3"]).required("Please select an option."),
      signUp: Yup.string().required("Please select a signup option."),
      toggle: Yup.string().required("Please select an option."),
      checkboxGroup: Yup.array()
    }),
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting;
      setTimeout(function () {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }
  }, /*#__PURE__*/React__default.createElement(formik.Form, null, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "headline-6"
  }, "Text fields"), /*#__PURE__*/React__default.createElement(TextField, {
    label: "First Name",
    name: "firstName",
    domId: "basic-form-first-name",
    type: "text",
    placeholder: "Test",
    helperText: "Example Helper Text",
    required: true // Needed for accessibility

  }), /*#__PURE__*/React__default.createElement(TextField, {
    label: "Last Name",
    name: "lastName",
    domId: "basic-form-last-name",
    placeholder: "Test",
    helperText: "Example Helper Text",
    required: true
  }), /*#__PURE__*/React__default.createElement(TextField, {
    label: "Email Address",
    name: "email",
    domId: "basic-form-email",
    type: "email",
    placeholder: "test@hallmark.com",
    required: true
  }, /*#__PURE__*/React__default.createElement(Tooltip, {
    content: "Must be a valid email",
    orientation: "bottom",
    alignment: "right-align",
    icon: "info-bold"
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "srt"
  }, "More info"))), /*#__PURE__*/React__default.createElement(TextField, {
    type: "password",
    label: "Password",
    name: "password",
    domId: "basic-form-password",
    placeholder: "6 characters minimum",
    maxLength: 12,
    required: true
  }), /*#__PURE__*/React__default.createElement(TextField, {
    label: "Crown Rewards",
    name: "crownRewards",
    domId: "basic-form-crown-rewards",
    maxLength: 12,
    required: true
  }), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "headline-6"
  }, "Dropdown"), /*#__PURE__*/React__default.createElement(Dropdown, {
    label: "Select Dropdown",
    name: "select",
    domId: "basic-form-select",
    defaultOption: "Choose an Option",
    options: DropdownOptions,
    required: true
  }), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "headline-6"
  }, "Checkbox"), /*#__PURE__*/React__default.createElement(Checkbox, {
    label: "Accepted Terms",
    name: "acceptedTerms",
    domId: "basic-form-checkbox",
    required: true
  }, "I accept the terms and conditions"), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "headline-6"
  }, "Toggle Switch"), /*#__PURE__*/React__default.createElement(ToggleSwitch, {
    checked: checked,
    label: "Label",
    name: "toggle",
    type: "checkbox",
    domId: "toggleSwitch",
    helperText: "Select an option",
    required: true
  }), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "headline-6"
  }, "Radio Button Group"), /*#__PURE__*/React__default.createElement(Fieldset, {
    legend: "RadioButton",
    domId: "radioGroup",
    name: "signUp",
    required: true
  }, /*#__PURE__*/React__default.createElement(RadioButton, {
    label: "Sign me up for Crown Rewards",
    value: "radioBtn1",
    domId: "radioBtn1",
    name: "signUp"
  }), /*#__PURE__*/React__default.createElement(RadioButton, {
    label: "I'm already a Crown Rewards member",
    value: "radioBtn2",
    domId: "radioBtn2",
    name: "signUp"
  }), /*#__PURE__*/React__default.createElement(RadioButton, {
    label: "No thanks, not right now",
    value: "radioBtn3",
    domId: "radioBtn3",
    name: "signUp"
  })), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "headline-6"
  }, "Radio Button Blank Card"), /*#__PURE__*/React__default.createElement(Fieldset, {
    legend: "Card RadioButton",
    domId: "myRadioButton",
    name: "myRadioButton"
  }, /*#__PURE__*/React__default.createElement(RadioButton, {
    label: "image1",
    name: "myRadioGroup",
    domId: "myDomId",
    value: "Option 1",
    isCard: true,
    checked: true
  }, imageArray), /*#__PURE__*/React__default.createElement(RadioButton, {
    label: "image2",
    name: "myRadioGroup",
    domId: "myDomId2",
    value: "Option 2",
    isCard: true
  }, imageArray), /*#__PURE__*/React__default.createElement(RadioButton, {
    label: "image3",
    name: "myRadioGroup",
    domId: "myDomId3",
    value: "Option 3",
    isCard: true
  }, imageArray)), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "headline-6"
  }, "Checkbox Group"), /*#__PURE__*/React__default.createElement(Fieldset, {
    legend: "Checkbox Group",
    domId: "checkboxGroup",
    name: "checkboxGroup",
    required: true
  }, /*#__PURE__*/React__default.createElement(Checkbox, {
    value: "option 1",
    domId: "option1checkbox",
    name: "checkboxGroup",
    isFieldSet: true
  }, "Option 1"), /*#__PURE__*/React__default.createElement(Checkbox, {
    value: "option 2",
    domId: "option2checkbox",
    name: "checkboxGroup",
    isFieldSet: true
  }, "Option 2")), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "headline-6"
  }, "Range"), /*#__PURE__*/React__default.createElement(Range, {
    range: {
      min: "0",
      max: "10"
    },
    name: "rangeInput",
    domId: "example-range-id",
    label: "Size",
    value: rangeId,
    onChange: function onChange(event) {
      return onRangeChanged(event.target.value);
    }
  }), /*#__PURE__*/React__default.createElement(SegmentedControl, {
    name: "segmentedcontrol",
    segments: [{
      label: "Apple",
      value: "apple",
      icon: "brands-apple-bold"
    }, {
      label: "Google",
      value: "google",
      icon: "brands-google-bold"
    }, {
      label: "Calendar",
      value: "calendar",
      icon: "calendar-calendar-bold"
    }, {
      label: "Card",
      value: "card",
      icon: "card-front-bold"
    }],
    defaultSelected: 2,
    domId: "segmentedControl",
    legend: "Segmented Control",
    value: scId,
    onChange: function onChange(event) {
      return onSCChanged(event.target.value);
    }
  }), /*#__PURE__*/React__default.createElement(Button, {
    type: "submit"
  }, "Submit"))));
};

var Grid = function Grid(_ref) {
  var addClass = _ref.addClass,
      grid = _ref.grid,
      gap = _ref.gap,
      rowGap = _ref.rowGap,
      landscape = _ref.landscape,
      portrait = _ref.portrait,
      mobile = _ref.mobile,
      children = _ref.children,
      testId = _ref.testId;
  var classes = classnames("grid-container", addClass);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes,
    grid: grid,
    gap: gap,
    "row-gap": rowGap,
    landscape: landscape,
    portrait: portrait,
    mobile: mobile,
    "data-testid": testId
  }, children);
};

Grid.defaultProps = {
  grid: 4,
  gap: 16,
  rowGap: 0,
  landscape: 3,
  portrait: 2,
  mobile: 1,
  testId: "grid"
};
Grid.propTypes = {
  grid: PropTypes.number,
  gap: PropTypes.number,
  rowGap: PropTypes.number,
  landscape: PropTypes.number,
  portrait: PropTypes.number,
  mobile: PropTypes.number,
  addClass: PropTypes.string,
  children: PropTypes.node,
  testId: PropTypes.string
};

var InfoBadge = function InfoBadge(_ref) {
  var preset = _ref.preset,
      color = _ref.color,
      icon = _ref.icon,
      addClass = _ref.addClass,
      info = _ref.info;
  var classes = classnames("info-badge", addClass);
  var presets = {
    success: {
      color: 'util-success',
      icon: 'check-default-bold'
    },
    error: {
      color: 'util-error',
      icon: 'triangle-bold'
    }
  };
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default.createElement(Icon, {
    name: icon || presets[preset] && presets[preset].icon,
    size: 15,
    color: color || presets[preset] && presets[preset].color,
    addClass: "info-badge-icon"
  }), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "caption",
    color: color || presets[preset] && presets[preset].color
  }, info));
};

InfoBadge.propTypes = {
  preset: PropTypes.oneOf(['success', 'error']),
  color: PropTypes.string,
  icon: PropTypes.string,
  addClass: PropTypes.string,
  info: PropTypes.string
};

var Licensing = function Licensing(_ref) {
  var logos = _ref.logos,
      text = _ref.text;

  function renderLogos(logosList) {
    return logosList.map(function (_ref2) {
      var url = _ref2.url,
          alt = _ref2.alt;
      return /*#__PURE__*/React__default.createElement(Image, {
        src: url,
        alt: alt,
        key: url
      });
    });
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: "licensing"
  }, logos && logos.length && /*#__PURE__*/React__default.createElement("div", {
    className: "licensing-logos"
  }, renderLogos(logos)), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "licensing"
  }, text));
};

Licensing.propTypes = {
  logos: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string
  })),
  text: PropTypes.string
};

var LikeButtons = function LikeButtons(_ref) {
  var domId = _ref.domId,
      addClass = _ref.addClass,
      likeCount = _ref.likeCount,
      likeText = _ref.likeText,
      dislikeText = _ref.dislikeText,
      isDisabled = _ref.isDisabled;
  var classes = classnames('like-wrapper', addClass);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLike = _useState2[0],
      setLike = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isDislike = _useState4[0],
      setDislike = _useState4[1];

  var handleLike = function handleLike() {
    setLike(true);
    setDislike(false);
  };

  var handleDislike = function handleDislike() {
    setLike(false);
    setDislike(true);
  }; // TODO: Update endpoints for like/dislike counts


  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default.createElement(IconButton, {
    id: "like-".concat(domId),
    role: "button",
    disabled: isDisabled,
    icon: "like-like-bold",
    click: function click() {
      return handleLike();
    },
    ariaPressed: isLike
  }, likeText), /*#__PURE__*/React__default.createElement("div", {
    id: "likeCount-".concat(domId)
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "srt"
  }, "like count for ".concat(domId)), /*#__PURE__*/React__default.createElement(Typography, {
    addClass: classnames({
      active: isLike
    }),
    variant: "helper"
  }, likeCount.likes)), /*#__PURE__*/React__default.createElement(IconButton, {
    id: "dislike-".concat(domId),
    role: "button",
    disabled: isDisabled,
    icon: "like-dislike-bold",
    click: function click() {
      return handleDislike();
    },
    ariaPressed: isDislike
  }, dislikeText), /*#__PURE__*/React__default.createElement("div", {
    id: "dislikeCount-".concat(domId)
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "srt"
  }, "dislike count for ".concat(domId)), /*#__PURE__*/React__default.createElement(Typography, {
    addClass: classnames({
      active: isDislike
    }),
    variant: "helper"
  }, likeCount.dislikes)));
};

LikeButtons.defaultProps = {
  likeCount: {
    likes: 0,
    dislikes: 0
  }
};
LikeButtons.propTypes = {
  domId: PropTypes.string.isRequired,
  likeCount: PropTypes.shape({
    likes: PropTypes.number,
    dislikes: PropTypes.number
  }),
  likeText: PropTypes.string.isRequired,
  dislikeText: PropTypes.string.isRequired,
  addClass: PropTypes.string,
  isDisabled: PropTypes.bool
};

var AudioPlayerSource = function AudioPlayerSource(_ref) {
  var src = _ref.src,
      type = _ref.type;
  return /*#__PURE__*/React__default.createElement("source", {
    src: src,
    type: type
  });
};

AudioPlayerSource.defaultProps = {
  type: 'audio/mpeg'
};
AudioPlayerSource.propTypes = {
  src: PropTypes.string,
  type: PropTypes.oneOf(['audio/mpeg', 'audio/ogg', 'audio/wav'])
};

var AudioPlayer = function AudioPlayer(_ref) {
  var addClass = _ref.addClass,
      children = _ref.children;
  var audioRef = React__default.useRef(null);

  var _React$useState = React__default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      playing = _React$useState2[0],
      setPlaying = _React$useState2[1];

  var _React$useState3 = React__default.useState(0),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      circleProgress = _React$useState4[0],
      setCircleProgress = _React$useState4[1];

  var _React$useState5 = React__default.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      progressAnimation = _React$useState6[0],
      setProgressAnimation = _React$useState6[1];

  var classes = classnames('audio-player', addClass); // Audio Actions

  var togglePlayback = function togglePlayback() {
    setPlaying(!playing);
  };

  var playAudio = function playAudio() {
    audioRef.current.play();
  };

  var pauseAudio = function pauseAudio() {
    audioRef.current.pause();
  }; // Audio Event Handlers


  var handleEndedAudio = React__default.useCallback(function () {
    setPlaying(false);
    setCircleProgress(0);
  }, []);
  React__default.useEffect(function () {
    audioRef.current.addEventListener('ended', handleEndedAudio);
    return function () {
      audioRef.current.removeEventListener('ended', handleEndedAudio);
    };
  }, [handleEndedAudio]); // Animations

  var performAnimation = function performAnimation() {
    if (audioRef.current && audioRef.current.duration) {
      setProgressAnimation(requestAnimationFrame(performAnimation));
      var percent = audioRef.current.currentTime / audioRef.current.duration;
      setCircleProgress(percent);
    }
  };

  var startAnimation = function startAnimation() {
    requestAnimationFrame(performAnimation);
  };

  var stopAnimation = function stopAnimation() {
    cancelAnimationFrame(progressAnimation);
  }; // 'playing' React hook


  React__default.useEffect(function () {
    if (playing) {
      playAudio();
      startAnimation();
    } else {
      pauseAudio();
      stopAnimation();
    }
  }, [playing]); // AudioPlayer Progress Circle

  var radius = 20;
  var stroke = 2;
  var circumference = radius * 2 * Math.PI;
  var strokeDashoffset = circumference - circleProgress * circumference;
  var ProgressCircle = /*#__PURE__*/React__default.createElement("svg", {
    alt: "",
    role: "img",
    focusable: "false",
    "aria-hidden": "true",
    height: radius * 2,
    width: radius * 2
  }, /*#__PURE__*/React__default.createElement("title", null, "Audio Progress Circle"), /*#__PURE__*/React__default.createElement("circle", {
    strokeWidth: stroke,
    strokeDasharray: "".concat(circumference, " ").concat(circumference),
    style: {
      strokeDashoffset: strokeDashoffset
    },
    r: radius,
    cx: radius,
    cy: radius
  })); // Typography and Icon Button Screen reader text

  var buttonActionText = "".concat(playing ? 'Pause' : 'Play', " Audio");
  var screenReaderText = "".concat(playing ? 'Pause Audio' : "".concat(Math.floor(circleProgress * 100), "% played, press play to continue"));
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes
  }, /*#__PURE__*/React__default.createElement("audio", {
    ref: audioRef
  }, children), /*#__PURE__*/React__default.createElement("div", {
    className: "audio-player__button-container"
  }, ProgressCircle, /*#__PURE__*/React__default.createElement(IconButton, {
    icon: playing ? 'pausesmall-bold' : 'playsmall-bold',
    variant: "tiny",
    click: togglePlayback,
    srtAriaLive: "polite"
  }, screenReaderText)), /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body-medium"
  }, buttonActionText));
};

AudioPlayer.Source = AudioPlayerSource;
AudioPlayer.defaultProps = {};
AudioPlayer.propTypes = {
  children: function children(props, propName, componentName) {
    var error;
    var prop = props[propName];
    var requiredChildType = 'AudioPlayerSource';
    React__default.Children.forEach(prop, function (child) {
      // type.name seems to work for both Class and Functional components
      if (child.type.name !== requiredChildType) {
        error = new Error("`".concat(componentName, "` only accepts children of type `").concat(requiredChildType, "`. Child of type ").concat(child.type.name, " was found."));
      }
    });
    return error;
  },
  addClass: PropTypes.string
};

var MediaGallery = function MediaGallery(_ref) {
  var children = _ref.children,
      id = _ref.id;

  var _React$useState = React__default.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      currentItemIndex = _React$useState2[0],
      setCurrentItemIndex = _React$useState2[1];

  var arrowIDs = {
    next: "".concat(id, "-next"),
    prev: "".concat(id, "-prev")
  };

  var handleNewItemShown = function handleNewItemShown(index) {
    setCurrentItemIndex(index);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: "media-gallery",
    id: id
  }, /*#__PURE__*/React__default.createElement(Carousel, {
    enableRewindLooping: true,
    disableDragging: true,
    onNewItemVisible: handleNewItemShown,
    arrows: {
      next: "#".concat(arrowIDs.next),
      prev: "#".concat(arrowIDs.prev)
    }
  }, children), /*#__PURE__*/React__default.createElement("div", {
    className: "media-gallery__nav"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "slide-counter"
  }, /*#__PURE__*/React__default.createElement(Typography, {
    variant: "breadcrumb"
  }, "".concat(currentItemIndex + 1, " / ").concat(React__default.Children.count(children)))), /*#__PURE__*/React__default.createElement("div", {
    className: "carousel__controls-container"
  }, /*#__PURE__*/React__default.createElement(List, {
    addClass: "carousel__controls",
    horizontal: true
  }, /*#__PURE__*/React__default.createElement(List.Item, null, /*#__PURE__*/React__default.createElement(IconButton, {
    variant: "circular",
    icon: "arrows-tailleft-bold",
    addClass: "carousel__controls-prev",
    id: arrowIDs.prev
  }, "Previous")), /*#__PURE__*/React__default.createElement(List.Item, null, /*#__PURE__*/React__default.createElement(IconButton, {
    variant: "circular",
    icon: "arrows-tailright-bold",
    addClass: "carousel__controls-next",
    id: arrowIDs.next
  }, "Next"))))));
};

MediaGallery.propTypes = {
  /** MediaGallery items */
  children: PropTypes.node,

  /** Required for arrow buttons to work properly */
  id: PropTypes.string.isRequired
};

var ProgressBar = function ProgressBar(_ref) {
  var progress = _ref.progress,
      progressComplete = _ref.progressComplete;
  var percentRange = progress > progressComplete ? 100 : progress / progressComplete * 100;

  var PercentageBar = function PercentageBar() {
    return (
      /*#__PURE__*/
      // render current the filled range of progress bar along its width
      React__default.createElement("div", {
        role: "progressbar",
        "aria-label": "progress bar",
        "aria-valuenow": progress,
        "aria-valuemin": "0",
        "aria-valuemax": progressComplete,
        className: "percentage-bar",
        style: {
          width: "".concat(percentRange, "%")
        }
      })
    );
  };

  var PercentageBarContainer = function PercentageBarContainer() {
    return (
      /*#__PURE__*/
      // render available progress bar’s limit
      React__default.createElement("div", {
        className: "percentage-bar-container"
      }, /*#__PURE__*/React__default.createElement(PercentageBar, null))
    );
  };

  return (
    /*#__PURE__*/
    // pass the percentageRange state to other components
    React__default.createElement("div", {
      className: "progress-bar"
    }, /*#__PURE__*/React__default.createElement(PercentageBarContainer, null))
  );
};

ProgressBar.defaultProps = {};
ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  progressComplete: PropTypes.number.isRequired
};

var Script = function Script(_ref) {
  var url = _ref.url,
      text = _ref.text,
      type = _ref.type,
      isAsync = _ref.isAsync,
      isDeferred = _ref.isDeferred,
      domId = _ref.domId;
  React.useEffect(function () {
    var script = document !== undefined ? document.createElement('script') : null;

    if (script) {
      var _document;

      url && (script.src = url); // eslint-disable-line

      text && (script.text = text); // eslint-disable-line

      domId && (script.id = domId); // eslint-disable-line

      script.type = type;
      script.async = isAsync;
      script.defer = isDeferred;
      ((_document = document) === null || _document === void 0 ? void 0 : _document.body) && document.body.appendChild(script); // eslint-disable-line
      // Remove script on unmount

      return function () {
        var _document2;

        ((_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.body) && document.body.removeChild(script); // eslint-disable-line
      };
    }
  }, [text]);
  return null;
};

Script.defaultProps = {
  isAsync: true,
  isDeferred: true
};
Script.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  isAsync: PropTypes.bool,
  isDeferred: PropTypes.bool,
  domId: PropTypes.string
};

var Section = function Section(_ref) {
  var addClass = _ref.addClass,
      children = _ref.children,
      id = _ref.id,
      backgroundColor = _ref.backgroundColor,
      styles = _ref.styles;
  var sectionClasses = addClass && addClass.split(' ').map(function (i) {
    return "section-".concat(i);
  });

  var backgroundColorClass = _defineProperty({}, "background-color-".concat(backgroundColor), backgroundColor);

  var classes = classnames('section', sectionClasses, backgroundColorClass);
  return /*#__PURE__*/React__default.createElement("section", {
    id: id,
    className: classes,
    style: styles
  }, children);
};

Section.defaultProps = {};
Section.propTypes = {
  id: PropTypes.string,
  addClass: PropTypes.string,
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  styles: PropTypes.objectOf(PropTypes.string)
};

var SimpleContent = function SimpleContent(_ref) {
  var title = _ref.title,
      icon = _ref.icon,
      subhead = _ref.subhead,
      content = _ref.content;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "simplecontent-wrapper"
  }, title && /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body-medium",
    htmlTagOverride: "h3"
  }, title), /*#__PURE__*/React__default.createElement("div", {
    className: "simplecontent-body"
  }, icon && /*#__PURE__*/React__default.createElement("div", {
    className: "simplecontent-icon"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    size: 16,
    name: icon
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "simplecontent-content"
  }, subhead && /*#__PURE__*/React__default.createElement(Typography, {
    variant: "body"
  }, subhead), content)));
};

SimpleContent.defaultProps = {};
SimpleContent.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  subhead: PropTypes.node,
  content: PropTypes.arrayOf(PropTypes.node)
};

var SubBranding = function SubBranding(_ref) {
  var pictureClass = _ref.pictureClass,
      ariaHidden = _ref.ariaHidden,
      src = _ref.src,
      dataSrc = _ref.dataSrc,
      alt = _ref.alt,
      addClass = _ref.addClass;
  var classes = classnames('sub-branding', addClass);
  return /*#__PURE__*/React__default.createElement(Image, {
    pictureClass: pictureClass,
    ariaHidden: ariaHidden,
    src: src,
    dataSrc: dataSrc,
    alt: alt,
    className: classes
  });
};

SubBranding.defaultProps = {};
SubBranding.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  dataSrc: PropTypes.string,
  addClass: PropTypes.string,
  pictureClass: PropTypes.string,
  ariaHidden: PropTypes.string
};

var selectVariant = function selectVariant(variant, url, target, rel, click, name) {
  switch (variant) {
    case 'button':
      return /*#__PURE__*/React__default.createElement(Button, {
        mode: "quick-action-deactivated",
        click: click
      }, name);

    case 'textlink':
      return /*#__PURE__*/React__default.createElement(TextLink, {
        title: name,
        to: url,
        defaultClassOverride: "btn btn-quick-action-deactivated",
        typoVariant: "cta-tertiary",
        target: target,
        rel: rel
      });

    default:
      return /*#__PURE__*/React__default.createElement(Button, {
        mode: "quick-action-deactivated",
        click: click
      }, name);
  }
};

var TagList = function TagList(_ref) {
  var items = _ref.items,
      variant = _ref.variant;
  return /*#__PURE__*/React__default.createElement(List, {
    addClass: "taglist",
    horizontal: true
  }, items.map(function (_ref2) {
    var name = _ref2.name,
        url = _ref2.url,
        target = _ref2.target,
        rel = _ref2.rel,
        click = _ref2.click;
    return /*#__PURE__*/React__default.createElement(List.Item, {
      key: name
    }, selectVariant(variant, url, target, rel, click, name));
  }));
};

TagList.defaultProps = {
  items: [],
  variant: 'textlink'
};
TagList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    target: PropTypes.string,
    rel: PropTypes.string,
    mode: PropTypes.string,
    click: PropTypes.func
  })),
  variant: PropTypes.oneOf(['button', 'textlink'])
};

var Toast = function Toast(_ref) {
  var addClass = _ref.addClass,
      title = _ref.title,
      onClose = _ref.onClose,
      isOpen = _ref.isOpen,
      isError = _ref.isError,
      children = _ref.children;
  var toastClasses = classnames('dialog-toast', addClass, {
    error: isError,
    success: !isError
  });
  return /*#__PURE__*/React__default.createElement(Dialog, {
    id: "dialog-toast",
    testId: "dialog-toast",
    addDialogClass: toastClasses,
    type: "toast",
    title: title,
    onClose: onClose,
    isOpen: isOpen
  }, /*#__PURE__*/React__default.createElement(Typography, {
    id: "example-toast",
    variant: "body"
  }, children));
};

Toast.propTypes = {
  addClass: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  isError: PropTypes.bool,
  children: PropTypes.node
};

var UtilityLink = function UtilityLink(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      to = _ref.to,
      iconSize = _ref.iconSize,
      typoVariant = _ref.typoVariant,
      addClass = _ref.addClass,
      onClick = _ref.onClick,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      target = _ref.target,
      rel = _ref.rel,
      ariaControls = _ref.ariaControls,
      isButton = _ref.isButton;
  var classnames$1 = classnames('utility-link', addClass);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classnames$1
  }, isButton ? /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    onClick: onClick,
    onBlur: onBlur,
    onFocus: onFocus,
    "aria-controls": ariaControls
  }, /*#__PURE__*/React__default.createElement(Icon, {
    name: icon,
    size: iconSize
  }), /*#__PURE__*/React__default.createElement(Typography, {
    variant: typoVariant
  }, title)) : /*#__PURE__*/React__default.createElement("a", {
    href: to,
    onClick: onClick,
    onBlur: onBlur,
    onFocus: onFocus,
    target: target,
    rel: rel,
    "aria-controls": ariaControls
  }, /*#__PURE__*/React__default.createElement(Icon, {
    name: icon,
    size: iconSize
  }), /*#__PURE__*/React__default.createElement(Typography, {
    variant: typoVariant
  }, title)));
};

UtilityLink.defaultProps = {
  iconSize: 24,
  typoVariant: 'body-medium'
};
UtilityLink.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
  iconSize: PropTypes.number,
  typoVariant: PropTypes.string,
  addClass: PropTypes.string,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  target: PropTypes.string,
  rel: PropTypes.string,
  ariaControls: PropTypes.string,
  isButton: PropTypes.bool
};

var Wrapper = function Wrapper(_ref) {
  var addClass = _ref.addClass,
      children = _ref.children,
      backgroundColor = _ref.backgroundColor,
      styles = _ref.styles;
  var wrapperClasses = addClass && addClass.split(" ").map(function (i) {
    return "wrapper-".concat(i);
  });

  var backgroundColorClass = _defineProperty({}, "background-color-".concat(backgroundColor), backgroundColor);

  var classes = classnames("wrapper", wrapperClasses, backgroundColorClass);
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes,
    style: styles
  }, children);
};

Wrapper.defaultProps = {};
Wrapper.propTypes = {
  addClass: PropTypes.string,
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  styles: PropTypes.objectOf(PropTypes.string)
};

exports.AccentCircle = AccentCircle;
exports.AccentIcon = AccentIcon;
exports.Accordion = Accordion;
exports.Address = Address;
exports.AudioPlayer = AudioPlayer;
exports.Badge = Badge;
exports.BasicForm = BasicForm;
exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.Carousel = Carousel;
exports.Checkbox = Checkbox;
exports.Collapse = Collapse;
exports.ContentCard = ContentCard;
exports.ContentPanels = ContentPanels;
exports.CulturalIndicator = CulturalIndicator;
exports.DescriptionList = DescriptionList;
exports.DesktopModalCurveBottom = DesktopModalCurveBottom;
exports.DesktopModalCurveTop = DesktopModalCurveTop;
exports.Dialog = Dialog;
exports.DialogManager = DialogManager;
exports.Dropdown = Dropdown;
exports.Fieldset = Fieldset;
exports.Footer = Footer;
exports.Grid = Grid;
exports.HelperText = HelperText;
exports.Hero = Hero;
exports.Icon = Icon;
exports.IconButton = IconButton;
exports.Image = Image;
exports.Indicator = Indicator;
exports.InfoBadge = InfoBadge;
exports.InfoGraph = infographic;
exports.InlineSVG = InlineSVG;
exports.Input = Input;
exports.Label = Label;
exports.Licensing = Licensing;
exports.LikeButtons = LikeButtons;
exports.List = List;
exports.Logo = Logo;
exports.LogoHoriz = LogoHoriz;
exports.LogoHorizBlack = LogoHorizBlack;
exports.LogoHorizBlue = LogoHorizBlue;
exports.LogoHorizOrange = LogoHorizOrange;
exports.LogoHorizTagline = LogoHorizTagline;
exports.LogoHorizTaglineBlack = LogoHorizTaglineBlack;
exports.LogoHorizTaglineBlue = LogoHorizTaglineBlue;
exports.LogoHorizTaglineOrange = LogoHorizTaglineOrange;
exports.LogoHorizTaglineWhite = LogoHorizTaglineWhite;
exports.LogoHorizWhite = LogoHorizWhite;
exports.LogoMark = LogoMark;
exports.LogoMarkBlack = LogoMarkBlack;
exports.LogoMarkBlue = LogoMarkBlue;
exports.LogoMarkOrange = LogoMarkOrange;
exports.LogoMarkWhite = LogoMarkWhite;
exports.LogoRegular = LogoRegular;
exports.LogoRegularBlack = LogoRegularBlack;
exports.LogoRegularBlue = LogoRegularBlue;
exports.LogoRegularOrange = LogoRegularOrange;
exports.LogoRegularWhite = LogoRegularWhite;
exports.LogoTagline = LogoTagline;
exports.LogoTaglineBlack = LogoTaglineBlack;
exports.LogoTaglineBlue = LogoTaglineBlue;
exports.LogoTaglineOrange = LogoTaglineOrange;
exports.LogoTaglineWhite = LogoTaglineWhite;
exports.MediaGallery = MediaGallery;
exports.MobileModalCurveTop = MobileModalCurveTop;
exports.Nav = Nav;
exports.ProgressBar = ProgressBar;
exports.RadioButton = RadioButton;
exports.Range = Range;
exports.Script = Script;
exports.Section = Section;
exports.SegmentedControl = SegmentedControl;
exports.Select = Select;
exports.Shell = Shell;
exports.SimpleContent = SimpleContent;
exports.SubBranding = SubBranding;
exports.TabBrushStroke = TabBrushStroke;
exports.Tabs = Tabs;
exports.TagList = TagList;
exports.TextField = TextField;
exports.TextLink = TextLink;
exports.Toast = Toast;
exports.ToggleSwitch = ToggleSwitch;
exports.Tooltip = Tooltip;
exports.Typography = Typography;
exports.UtilityLink = UtilityLink;
exports.VideoPlayer = VideoPlayer;
exports.Wave = Wave;
exports.WaveSVG = WaveSVG;
exports.Wrapper = Wrapper;
