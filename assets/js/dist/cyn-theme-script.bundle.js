(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __pow = Math.pow;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __objRest = (source2, exclude) => {
    var target = {};
    for (var prop in source2)
      if (__hasOwnProp.call(source2, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source2[prop];
    if (source2 != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source2)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source2, prop))
          target[prop] = source2[prop];
      }
    return target;
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // node_modules/rangetouch/dist/rangetouch.js
  var require_rangetouch = __commonJS({
    "node_modules/rangetouch/dist/rangetouch.js"(exports, module) {
      !(function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("RangeTouch", t) : (e = e || self).RangeTouch = t();
      })(exports, (function() {
        "use strict";
        function e(e2, t2) {
          for (var n2 = 0; n2 < t2.length; n2++) {
            var r2 = t2[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
          }
        }
        function t(e2, t2, n2) {
          return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
        }
        function n(e2, t2) {
          var n2 = Object.keys(e2);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(e2);
            t2 && (r2 = r2.filter((function(t3) {
              return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
            }))), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function r(e2) {
          for (var r2 = 1; r2 < arguments.length; r2++) {
            var i2 = null != arguments[r2] ? arguments[r2] : {};
            r2 % 2 ? n(Object(i2), true).forEach((function(n2) {
              t(e2, n2, i2[n2]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(i2)) : n(Object(i2)).forEach((function(t2) {
              Object.defineProperty(e2, t2, Object.getOwnPropertyDescriptor(i2, t2));
            }));
          }
          return e2;
        }
        var i = { addCSS: true, thumbWidth: 15, watch: true };
        function u(e2, t2) {
          return (function() {
            return Array.from(document.querySelectorAll(t2)).includes(this);
          }).call(e2, t2);
        }
        var o = function(e2) {
          return null != e2 ? e2.constructor : null;
        }, c = function(e2, t2) {
          return !!(e2 && t2 && e2 instanceof t2);
        }, l = function(e2) {
          return null == e2;
        }, a = function(e2) {
          return o(e2) === Object;
        }, s = function(e2) {
          return o(e2) === String;
        }, f = function(e2) {
          return Array.isArray(e2);
        }, h = function(e2) {
          return c(e2, NodeList);
        }, d = s, y = f, b = h, m = function(e2) {
          return c(e2, Element);
        }, g = function(e2) {
          return c(e2, Event);
        }, p = function(e2) {
          return l(e2) || (s(e2) || f(e2) || h(e2)) && !e2.length || a(e2) && !Object.keys(e2).length;
        };
        function v(e2, t2) {
          if (1 > t2) {
            var n2 = (function(e3) {
              var t3 = "".concat(e3).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
              return t3 ? Math.max(0, (t3[1] ? t3[1].length : 0) - (t3[2] ? +t3[2] : 0)) : 0;
            })(t2);
            return parseFloat(e2.toFixed(n2));
          }
          return Math.round(e2 / t2) * t2;
        }
        return (function() {
          function t2(e2, n3) {
            (function(e3, t3) {
              if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
            })(this, t2), m(e2) ? this.element = e2 : d(e2) && (this.element = document.querySelector(e2)), m(this.element) && p(this.element.rangeTouch) && (this.config = r({}, i, {}, n3), this.init());
          }
          return n2 = t2, c2 = [{ key: "setup", value: function(e2) {
            var n3 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, o3 = null;
            if (p(e2) || d(e2) ? o3 = Array.from(document.querySelectorAll(d(e2) ? e2 : 'input[type="range"]')) : m(e2) ? o3 = [e2] : b(e2) ? o3 = Array.from(e2) : y(e2) && (o3 = e2.filter(m)), p(o3)) return null;
            var c3 = r({}, i, {}, n3);
            if (d(e2) && c3.watch) {
              var l2 = new MutationObserver((function(n4) {
                Array.from(n4).forEach((function(n5) {
                  Array.from(n5.addedNodes).forEach((function(n6) {
                    m(n6) && u(n6, e2) && new t2(n6, c3);
                  }));
                }));
              }));
              l2.observe(document.body, { childList: true, subtree: true });
            }
            return o3.map((function(e3) {
              return new t2(e3, n3);
            }));
          } }, { key: "enabled", get: function() {
            return "ontouchstart" in document.documentElement;
          } }], (o2 = [{ key: "init", value: function() {
            t2.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(true), this.element.rangeTouch = this);
          } }, { key: "destroy", value: function() {
            t2.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(false), this.element.rangeTouch = null);
          } }, { key: "listeners", value: function(e2) {
            var t3 = this, n3 = e2 ? "addEventListener" : "removeEventListener";
            ["touchstart", "touchmove", "touchend"].forEach((function(e3) {
              t3.element[n3](e3, (function(e4) {
                return t3.set(e4);
              }), false);
            }));
          } }, { key: "get", value: function(e2) {
            if (!t2.enabled || !g(e2)) return null;
            var n3, r2 = e2.target, i2 = e2.changedTouches[0], u2 = parseFloat(r2.getAttribute("min")) || 0, o3 = parseFloat(r2.getAttribute("max")) || 100, c3 = parseFloat(r2.getAttribute("step")) || 1, l2 = r2.getBoundingClientRect(), a2 = 100 / l2.width * (this.config.thumbWidth / 2) / 100;
            return 0 > (n3 = 100 / l2.width * (i2.clientX - l2.left)) ? n3 = 0 : 100 < n3 && (n3 = 100), 50 > n3 ? n3 -= (100 - 2 * n3) * a2 : 50 < n3 && (n3 += 2 * (n3 - 50) * a2), u2 + v(n3 / 100 * (o3 - u2), c3);
          } }, { key: "set", value: function(e2) {
            t2.enabled && g(e2) && !e2.target.disabled && (e2.preventDefault(), e2.target.value = this.get(e2), (function(e3, t3) {
              if (e3 && t3) {
                var n3 = new Event(t3, { bubbles: true });
                e3.dispatchEvent(n3);
              }
            })(e2.target, "touchend" === e2.type ? "change" : "input"));
          } }]) && e(n2.prototype, o2), c2 && e(n2, c2), t2;
          var n2, o2, c2;
        })();
      }));
    }
  });

  // node_modules/loadjs/dist/loadjs.umd.js
  var require_loadjs_umd = __commonJS({
    "node_modules/loadjs/dist/loadjs.umd.js"(exports, module) {
      (function(root, factory) {
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else if (typeof exports === "object") {
          module.exports = factory();
        } else {
          root.loadjs = factory();
        }
      })(exports, function() {
        var devnull = function() {
        }, bundleIdCache = {}, bundleResultCache = {}, bundleCallbackQueue = {};
        function subscribe(bundleIds, callbackFn) {
          bundleIds = bundleIds.push ? bundleIds : [bundleIds];
          var depsNotFound = [], i = bundleIds.length, numWaiting = i, fn, bundleId, r, q;
          fn = function(bundleId2, pathsNotFound) {
            if (pathsNotFound.length) depsNotFound.push(bundleId2);
            numWaiting--;
            if (!numWaiting) callbackFn(depsNotFound);
          };
          while (i--) {
            bundleId = bundleIds[i];
            r = bundleResultCache[bundleId];
            if (r) {
              fn(bundleId, r);
              continue;
            }
            q = bundleCallbackQueue[bundleId] = bundleCallbackQueue[bundleId] || [];
            q.push(fn);
          }
        }
        function publish(bundleId, pathsNotFound) {
          if (!bundleId) return;
          var q = bundleCallbackQueue[bundleId];
          bundleResultCache[bundleId] = pathsNotFound;
          if (!q) return;
          while (q.length) {
            q[0](bundleId, pathsNotFound);
            q.splice(0, 1);
          }
        }
        function executeCallbacks(args, depsNotFound) {
          if (args.call) args = { success: args };
          if (depsNotFound.length) (args.error || devnull)(depsNotFound);
          else (args.success || devnull)(args);
        }
        function loadFile(path, callbackFn, args, numTries) {
          var doc = document, async = args.async, maxTries = (args.numRetries || 0) + 1, beforeCallbackFn = args.before || devnull, pathname = path.replace(/[\?|#].*$/, ""), pathStripped = path.replace(/^(css|img|module|nomodule)!/, ""), isLegacyIECss, hasModuleSupport, e;
          numTries = numTries || 0;
          if (/(^css!|\.css$)/.test(pathname)) {
            e = doc.createElement("link");
            e.rel = "stylesheet";
            e.href = pathStripped;
            isLegacyIECss = "hideFocus" in e;
            if (isLegacyIECss && e.relList) {
              isLegacyIECss = 0;
              e.rel = "preload";
              e.as = "style";
            }
          } else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(pathname)) {
            e = doc.createElement("img");
            e.src = pathStripped;
          } else {
            e = doc.createElement("script");
            e.src = pathStripped;
            e.async = async === void 0 ? true : async;
            hasModuleSupport = "noModule" in e;
            if (/^module!/.test(pathname)) {
              if (!hasModuleSupport) return callbackFn(path, "l");
              e.type = "module";
            } else if (/^nomodule!/.test(pathname) && hasModuleSupport) return callbackFn(path, "l");
          }
          e.onload = e.onerror = e.onbeforeload = function(ev) {
            var result = ev.type[0];
            if (isLegacyIECss) {
              try {
                if (!e.sheet.cssText.length) result = "e";
              } catch (x) {
                if (x.code != 18) result = "e";
              }
            }
            if (result == "e") {
              numTries += 1;
              if (numTries < maxTries) {
                return loadFile(path, callbackFn, args, numTries);
              }
            } else if (e.rel == "preload" && e.as == "style") {
              return e.rel = "stylesheet";
            }
            callbackFn(path, result, ev.defaultPrevented);
          };
          if (beforeCallbackFn(path, e) !== false) doc.head.appendChild(e);
        }
        function loadFiles(paths, callbackFn, args) {
          paths = paths.push ? paths : [paths];
          var numWaiting = paths.length, x = numWaiting, pathsNotFound = [], fn, i;
          fn = function(path, result, defaultPrevented) {
            if (result == "e") pathsNotFound.push(path);
            if (result == "b") {
              if (defaultPrevented) pathsNotFound.push(path);
              else return;
            }
            numWaiting--;
            if (!numWaiting) callbackFn(pathsNotFound);
          };
          for (i = 0; i < x; i++) loadFile(paths[i], fn, args);
        }
        function loadjs2(paths, arg1, arg2) {
          var bundleId, args;
          if (arg1 && arg1.trim) bundleId = arg1;
          args = (bundleId ? arg2 : arg1) || {};
          if (bundleId) {
            if (bundleId in bundleIdCache) {
              throw "LoadJS";
            } else {
              bundleIdCache[bundleId] = true;
            }
          }
          function loadFn(resolve, reject) {
            loadFiles(paths, function(pathsNotFound) {
              executeCallbacks(args, pathsNotFound);
              if (resolve) {
                executeCallbacks({ success: resolve, error: reject }, pathsNotFound);
              }
              publish(bundleId, pathsNotFound);
            }, args);
          }
          if (args.returnPromise) return new Promise(loadFn);
          else loadFn();
        }
        loadjs2.ready = function ready3(deps, args) {
          subscribe(deps, function(depsNotFound) {
            executeCallbacks(args, depsNotFound);
          });
          return loadjs2;
        };
        loadjs2.done = function done(bundleId) {
          publish(bundleId, []);
        };
        loadjs2.reset = function reset() {
          bundleIdCache = {};
          bundleResultCache = {};
          bundleCallbackQueue = {};
        };
        loadjs2.isDefined = function isDefined(bundleId) {
          return bundleId in bundleIdCache;
        };
        return loadjs2;
      });
    }
  });

  // node_modules/htmx.org/dist/htmx.esm.js
  var htmx_esm_exports = {};
  __export(htmx_esm_exports, {
    default: () => htmx_esm_default
  });
  var htmx2, htmx_esm_default;
  var init_htmx_esm = __esm({
    "node_modules/htmx.org/dist/htmx.esm.js"() {
      htmx2 = (function() {
        "use strict";
        const htmx = {
          // Tsc madness here, assigning the functions directly results in an invalid TypeScript output, but reassigning is fine
          /* Event processing */
          /** @type {typeof onLoadHelper} */
          onLoad: null,
          /** @type {typeof processNode} */
          process: null,
          /** @type {typeof addEventListenerImpl} */
          on: null,
          /** @type {typeof removeEventListenerImpl} */
          off: null,
          /** @type {typeof triggerEvent} */
          trigger: null,
          /** @type {typeof ajaxHelper} */
          ajax: null,
          /* DOM querying helpers */
          /** @type {typeof find} */
          find: null,
          /** @type {typeof findAll} */
          findAll: null,
          /** @type {typeof closest} */
          closest: null,
          /**
           * Returns the input values that would resolve for a given element via the htmx value resolution mechanism
           *
           * @see https://htmx.org/api/#values
           *
           * @param {Element} elt the element to resolve values on
           * @param {HttpVerb} type the request type (e.g. **get** or **post**) non-GET's will include the enclosing form of the element. Defaults to **post**
           * @returns {Object}
           */
          values: function(elt, type) {
            const inputValues = getInputValues(elt, type || "post");
            return inputValues.values;
          },
          /* DOM manipulation helpers */
          /** @type {typeof removeElement} */
          remove: null,
          /** @type {typeof addClassToElement} */
          addClass: null,
          /** @type {typeof removeClassFromElement} */
          removeClass: null,
          /** @type {typeof toggleClassOnElement} */
          toggleClass: null,
          /** @type {typeof takeClassForElement} */
          takeClass: null,
          /** @type {typeof swap} */
          swap: null,
          /* Extension entrypoints */
          /** @type {typeof defineExtension} */
          defineExtension: null,
          /** @type {typeof removeExtension} */
          removeExtension: null,
          /* Debugging */
          /** @type {typeof logAll} */
          logAll: null,
          /** @type {typeof logNone} */
          logNone: null,
          /* Debugging */
          /**
           * The logger htmx uses to log with
           *
           * @see https://htmx.org/api/#logger
           */
          logger: null,
          /**
           * A property holding the configuration htmx uses at runtime.
           *
           * Note that using a [meta tag](https://htmx.org/docs/#config) is the preferred mechanism for setting these properties.
           *
           * @see https://htmx.org/api/#config
           */
          config: {
            /**
             * Whether to use history.
             * @type boolean
             * @default true
             */
            historyEnabled: true,
            /**
             * The number of pages to keep in **sessionStorage** for history support.
             * @type number
             * @default 10
             */
            historyCacheSize: 10,
            /**
             * @type boolean
             * @default false
             */
            refreshOnHistoryMiss: false,
            /**
             * The default swap style to use if **[hx-swap](https://htmx.org/attributes/hx-swap)** is omitted.
             * @type HtmxSwapStyle
             * @default 'innerHTML'
             */
            defaultSwapStyle: "innerHTML",
            /**
             * The default delay between receiving a response from the server and doing the swap.
             * @type number
             * @default 0
             */
            defaultSwapDelay: 0,
            /**
             * The default delay between completing the content swap and settling attributes.
             * @type number
             * @default 20
             */
            defaultSettleDelay: 20,
            /**
             * If true, htmx will inject a small amount of CSS into the page to make indicators invisible unless the **htmx-indicator** class is present.
             * @type boolean
             * @default true
             */
            includeIndicatorStyles: true,
            /**
             * The class to place on indicators when a request is in flight.
             * @type string
             * @default 'htmx-indicator'
             */
            indicatorClass: "htmx-indicator",
            /**
             * The class to place on triggering elements when a request is in flight.
             * @type string
             * @default 'htmx-request'
             */
            requestClass: "htmx-request",
            /**
             * The class to temporarily place on elements that htmx has added to the DOM.
             * @type string
             * @default 'htmx-added'
             */
            addedClass: "htmx-added",
            /**
             * The class to place on target elements when htmx is in the settling phase.
             * @type string
             * @default 'htmx-settling'
             */
            settlingClass: "htmx-settling",
            /**
             * The class to place on target elements when htmx is in the swapping phase.
             * @type string
             * @default 'htmx-swapping'
             */
            swappingClass: "htmx-swapping",
            /**
             * Allows the use of eval-like functionality in htmx, to enable **hx-vars**, trigger conditions & script tag evaluation. Can be set to **false** for CSP compatibility.
             * @type boolean
             * @default true
             */
            allowEval: true,
            /**
             * If set to false, disables the interpretation of script tags.
             * @type boolean
             * @default true
             */
            allowScriptTags: true,
            /**
             * If set, the nonce will be added to inline scripts.
             * @type string
             * @default ''
             */
            inlineScriptNonce: "",
            /**
             * If set, the nonce will be added to inline styles.
             * @type string
             * @default ''
             */
            inlineStyleNonce: "",
            /**
             * The attributes to settle during the settling phase.
             * @type string[]
             * @default ['class', 'style', 'width', 'height']
             */
            attributesToSettle: ["class", "style", "width", "height"],
            /**
             * Allow cross-site Access-Control requests using credentials such as cookies, authorization headers or TLS client certificates.
             * @type boolean
             * @default false
             */
            withCredentials: false,
            /**
             * @type number
             * @default 0
             */
            timeout: 0,
            /**
             * The default implementation of **getWebSocketReconnectDelay** for reconnecting after unexpected connection loss by the event code **Abnormal Closure**, **Service Restart** or **Try Again Later**.
             * @type {'full-jitter' | ((retryCount:number) => number)}
             * @default "full-jitter"
             */
            wsReconnectDelay: "full-jitter",
            /**
             * The type of binary data being received over the WebSocket connection
             * @type BinaryType
             * @default 'blob'
             */
            wsBinaryType: "blob",
            /**
             * @type string
             * @default '[hx-disable], [data-hx-disable]'
             */
            disableSelector: "[hx-disable], [data-hx-disable]",
            /**
             * @type {'auto' | 'instant' | 'smooth'}
             * @default 'instant'
             */
            scrollBehavior: "instant",
            /**
             * If the focused element should be scrolled into view.
             * @type boolean
             * @default false
             */
            defaultFocusScroll: false,
            /**
             * If set to true htmx will include a cache-busting parameter in GET requests to avoid caching partial responses by the browser
             * @type boolean
             * @default false
             */
            getCacheBusterParam: false,
            /**
             * If set to true, htmx will use the View Transition API when swapping in new content.
             * @type boolean
             * @default false
             */
            globalViewTransitions: false,
            /**
             * htmx will format requests with these methods by encoding their parameters in the URL, not the request body
             * @type {(HttpVerb)[]}
             * @default ['get', 'delete']
             */
            methodsThatUseUrlParams: ["get", "delete"],
            /**
             * If set to true, disables htmx-based requests to non-origin hosts.
             * @type boolean
             * @default false
             */
            selfRequestsOnly: true,
            /**
             * If set to true htmx will not update the title of the document when a title tag is found in new content
             * @type boolean
             * @default false
             */
            ignoreTitle: false,
            /**
             * Whether the target of a boosted element is scrolled into the viewport.
             * @type boolean
             * @default true
             */
            scrollIntoViewOnBoost: true,
            /**
             * The cache to store evaluated trigger specifications into.
             * You may define a simple object to use a never-clearing cache, or implement your own system using a [proxy object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
             * @type {Object|null}
             * @default null
             */
            triggerSpecsCache: null,
            /** @type boolean */
            disableInheritance: false,
            /** @type HtmxResponseHandlingConfig[] */
            responseHandling: [
              { code: "204", swap: false },
              { code: "[23]..", swap: true },
              { code: "[45]..", swap: false, error: true }
            ],
            /**
             * Whether to process OOB swaps on elements that are nested within the main response element.
             * @type boolean
             * @default true
             */
            allowNestedOobSwaps: true,
            /**
             * Whether to treat history cache miss full page reload requests as a "HX-Request" by returning this response header
             * This should always be disabled when using HX-Request header to optionally return partial responses
             * @type boolean
             * @default true
             */
            historyRestoreAsHxRequest: true,
            /**
             * Whether to report input validation errors to the end user and update focus to the first input that fails validation.
             * This should always be enabled as this matches default browser form submit behaviour
             * @type boolean
             * @default false
             */
            reportValidityOfForms: false
          },
          /** @type {typeof parseInterval} */
          parseInterval: null,
          /**
           * proxy of window.location used for page reload functions
           * @type location
           */
          location,
          /** @type {typeof internalEval} */
          _: null,
          version: "2.0.8"
        };
        htmx.onLoad = onLoadHelper;
        htmx.process = processNode;
        htmx.on = addEventListenerImpl;
        htmx.off = removeEventListenerImpl;
        htmx.trigger = triggerEvent;
        htmx.ajax = ajaxHelper;
        htmx.find = find;
        htmx.findAll = findAll;
        htmx.closest = closest;
        htmx.remove = removeElement;
        htmx.addClass = addClassToElement;
        htmx.removeClass = removeClassFromElement;
        htmx.toggleClass = toggleClassOnElement;
        htmx.takeClass = takeClassForElement;
        htmx.swap = swap;
        htmx.defineExtension = defineExtension;
        htmx.removeExtension = removeExtension;
        htmx.logAll = logAll;
        htmx.logNone = logNone;
        htmx.parseInterval = parseInterval;
        htmx._ = internalEval;
        const internalAPI = {
          addTriggerHandler,
          bodyContains,
          canAccessLocalStorage,
          findThisElement,
          filterValues,
          swap,
          hasAttribute,
          getAttributeValue,
          getClosestAttributeValue,
          getClosestMatch,
          getExpressionVars,
          getHeaders,
          getInputValues,
          getInternalData,
          getSwapSpecification,
          getTriggerSpecs,
          getTarget,
          makeFragment,
          mergeObjects,
          makeSettleInfo,
          oobSwap,
          querySelectorExt,
          settleImmediately,
          shouldCancel,
          triggerEvent,
          triggerErrorEvent,
          withExtensions
        };
        const VERBS = ["get", "post", "put", "delete", "patch"];
        const VERB_SELECTOR = VERBS.map(function(verb) {
          return "[hx-" + verb + "], [data-hx-" + verb + "]";
        }).join(", ");
        function parseInterval(str2) {
          if (str2 == void 0) {
            return void 0;
          }
          let interval = NaN;
          if (str2.slice(-2) == "ms") {
            interval = parseFloat(str2.slice(0, -2));
          } else if (str2.slice(-1) == "s") {
            interval = parseFloat(str2.slice(0, -1)) * 1e3;
          } else if (str2.slice(-1) == "m") {
            interval = parseFloat(str2.slice(0, -1)) * 1e3 * 60;
          } else {
            interval = parseFloat(str2);
          }
          return isNaN(interval) ? void 0 : interval;
        }
        function getRawAttribute(elt, name) {
          return elt instanceof Element && elt.getAttribute(name);
        }
        function hasAttribute(elt, qualifiedName) {
          return !!elt.hasAttribute && (elt.hasAttribute(qualifiedName) || elt.hasAttribute("data-" + qualifiedName));
        }
        function getAttributeValue(elt, qualifiedName) {
          return getRawAttribute(elt, qualifiedName) || getRawAttribute(elt, "data-" + qualifiedName);
        }
        function parentElt(elt) {
          const parent = elt.parentElement;
          if (!parent && elt.parentNode instanceof ShadowRoot) return elt.parentNode;
          return parent;
        }
        function getDocument() {
          return document;
        }
        function getRootNode(elt, global) {
          return elt.getRootNode ? elt.getRootNode({ composed: global }) : getDocument();
        }
        function getClosestMatch(elt, condition) {
          while (elt && !condition(elt)) {
            elt = parentElt(elt);
          }
          return elt || null;
        }
        function getAttributeValueWithDisinheritance(initialElement, ancestor, attributeName) {
          const attributeValue = getAttributeValue(ancestor, attributeName);
          const disinherit = getAttributeValue(ancestor, "hx-disinherit");
          var inherit = getAttributeValue(ancestor, "hx-inherit");
          if (initialElement !== ancestor) {
            if (htmx.config.disableInheritance) {
              if (inherit && (inherit === "*" || inherit.split(" ").indexOf(attributeName) >= 0)) {
                return attributeValue;
              } else {
                return null;
              }
            }
            if (disinherit && (disinherit === "*" || disinherit.split(" ").indexOf(attributeName) >= 0)) {
              return "unset";
            }
          }
          return attributeValue;
        }
        function getClosestAttributeValue(elt, attributeName) {
          let closestAttr = null;
          getClosestMatch(elt, function(e) {
            return !!(closestAttr = getAttributeValueWithDisinheritance(elt, asElement(e), attributeName));
          });
          if (closestAttr !== "unset") {
            return closestAttr;
          }
        }
        function matches(elt, selector) {
          return elt instanceof Element && elt.matches(selector);
        }
        function getStartTag(str2) {
          const tagMatcher = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
          const match = tagMatcher.exec(str2);
          if (match) {
            return match[1].toLowerCase();
          } else {
            return "";
          }
        }
        function parseHTML(resp) {
          if ("parseHTMLUnsafe" in Document) {
            return Document.parseHTMLUnsafe(resp);
          }
          const parser = new DOMParser();
          return parser.parseFromString(resp, "text/html");
        }
        function takeChildrenFor(fragment, elt) {
          while (elt.childNodes.length > 0) {
            fragment.append(elt.childNodes[0]);
          }
        }
        function duplicateScript(script) {
          const newScript = getDocument().createElement("script");
          forEach(script.attributes, function(attr) {
            newScript.setAttribute(attr.name, attr.value);
          });
          newScript.textContent = script.textContent;
          newScript.async = false;
          if (htmx.config.inlineScriptNonce) {
            newScript.nonce = htmx.config.inlineScriptNonce;
          }
          return newScript;
        }
        function isJavaScriptScriptNode(script) {
          return script.matches("script") && (script.type === "text/javascript" || script.type === "module" || script.type === "");
        }
        function normalizeScriptTags(fragment) {
          Array.from(fragment.querySelectorAll("script")).forEach(
            /** @param {HTMLScriptElement} script */
            (script) => {
              if (isJavaScriptScriptNode(script)) {
                const newScript = duplicateScript(script);
                const parent = script.parentNode;
                try {
                  parent.insertBefore(newScript, script);
                } catch (e) {
                  logError(e);
                } finally {
                  script.remove();
                }
              }
            }
          );
        }
        function makeFragment(response) {
          const responseWithNoHead = response.replace(/<head(\s[^>]*)?>[\s\S]*?<\/head>/i, "");
          const startTag = getStartTag(responseWithNoHead);
          let fragment;
          if (startTag === "html") {
            fragment = /** @type DocumentFragmentWithTitle */
            new DocumentFragment();
            const doc = parseHTML(response);
            takeChildrenFor(fragment, doc.body);
            fragment.title = doc.title;
          } else if (startTag === "body") {
            fragment = /** @type DocumentFragmentWithTitle */
            new DocumentFragment();
            const doc = parseHTML(responseWithNoHead);
            takeChildrenFor(fragment, doc.body);
            fragment.title = doc.title;
          } else {
            const doc = parseHTML('<body><template class="internal-htmx-wrapper">' + responseWithNoHead + "</template></body>");
            fragment = /** @type DocumentFragmentWithTitle */
            doc.querySelector("template").content;
            fragment.title = doc.title;
            var titleElement = fragment.querySelector("title");
            if (titleElement && titleElement.parentNode === fragment) {
              titleElement.remove();
              fragment.title = titleElement.innerText;
            }
          }
          if (fragment) {
            if (htmx.config.allowScriptTags) {
              normalizeScriptTags(fragment);
            } else {
              fragment.querySelectorAll("script").forEach((script) => script.remove());
            }
          }
          return fragment;
        }
        function maybeCall(func) {
          if (func) {
            func();
          }
        }
        function isType(o, type) {
          return Object.prototype.toString.call(o) === "[object " + type + "]";
        }
        function isFunction(o) {
          return typeof o === "function";
        }
        function isRawObject(o) {
          return isType(o, "Object");
        }
        function getInternalData(elt) {
          const dataProp = "htmx-internal-data";
          let data = elt[dataProp];
          if (!data) {
            data = elt[dataProp] = {};
          }
          return data;
        }
        function toArray(arr) {
          const returnArr = [];
          if (arr) {
            for (let i = 0; i < arr.length; i++) {
              returnArr.push(arr[i]);
            }
          }
          return returnArr;
        }
        function forEach(arr, func) {
          if (arr) {
            for (let i = 0; i < arr.length; i++) {
              func(arr[i]);
            }
          }
        }
        function isScrolledIntoView(el) {
          const rect = el.getBoundingClientRect();
          const elemTop = rect.top;
          const elemBottom = rect.bottom;
          return elemTop < window.innerHeight && elemBottom >= 0;
        }
        function bodyContains(elt) {
          return elt.getRootNode({ composed: true }) === document;
        }
        function splitOnWhitespace(trigger) {
          return trigger.trim().split(/\s+/);
        }
        function mergeObjects(obj1, obj2) {
          for (const key in obj2) {
            if (obj2.hasOwnProperty(key)) {
              obj1[key] = obj2[key];
            }
          }
          return obj1;
        }
        function parseJSON(jString) {
          try {
            return JSON.parse(jString);
          } catch (error) {
            logError(error);
            return null;
          }
        }
        function canAccessLocalStorage() {
          const test = "htmx:sessionStorageTest";
          try {
            sessionStorage.setItem(test, test);
            sessionStorage.removeItem(test);
            return true;
          } catch (e) {
            return false;
          }
        }
        function normalizePath(path) {
          const url = new URL(path, "http://x");
          if (url) {
            path = url.pathname + url.search;
          }
          if (path != "/") {
            path = path.replace(/\/+$/, "");
          }
          return path;
        }
        function internalEval(str) {
          return maybeEval(getDocument().body, function() {
            return eval(str);
          });
        }
        function onLoadHelper(callback) {
          const value = htmx.on(
            "htmx:load",
            /** @param {CustomEvent} evt */
            function(evt) {
              callback(evt.detail.elt);
            }
          );
          return value;
        }
        function logAll() {
          htmx.logger = function(elt, event2, data) {
            if (console) {
              console.log(event2, elt, data);
            }
          };
        }
        function logNone() {
          htmx.logger = null;
        }
        function find(eltOrSelector, selector) {
          if (typeof eltOrSelector !== "string") {
            return eltOrSelector.querySelector(selector);
          } else {
            return find(getDocument(), eltOrSelector);
          }
        }
        function findAll(eltOrSelector, selector) {
          if (typeof eltOrSelector !== "string") {
            return eltOrSelector.querySelectorAll(selector);
          } else {
            return findAll(getDocument(), eltOrSelector);
          }
        }
        function getWindow() {
          return window;
        }
        function removeElement(elt, delay) {
          elt = resolveTarget(elt);
          if (delay) {
            getWindow().setTimeout(function() {
              removeElement(elt);
              elt = null;
            }, delay);
          } else {
            parentElt(elt).removeChild(elt);
          }
        }
        function asElement(elt) {
          return elt instanceof Element ? elt : null;
        }
        function asHtmlElement(elt) {
          return elt instanceof HTMLElement ? elt : null;
        }
        function asString(value) {
          return typeof value === "string" ? value : null;
        }
        function asParentNode(elt) {
          return elt instanceof Element || elt instanceof Document || elt instanceof DocumentFragment ? elt : null;
        }
        function addClassToElement(elt, clazz, delay) {
          elt = asElement(resolveTarget(elt));
          if (!elt) {
            return;
          }
          if (delay) {
            getWindow().setTimeout(function() {
              addClassToElement(elt, clazz);
              elt = null;
            }, delay);
          } else {
            elt.classList && elt.classList.add(clazz);
          }
        }
        function removeClassFromElement(node, clazz, delay) {
          let elt = asElement(resolveTarget(node));
          if (!elt) {
            return;
          }
          if (delay) {
            getWindow().setTimeout(function() {
              removeClassFromElement(elt, clazz);
              elt = null;
            }, delay);
          } else {
            if (elt.classList) {
              elt.classList.remove(clazz);
              if (elt.classList.length === 0) {
                elt.removeAttribute("class");
              }
            }
          }
        }
        function toggleClassOnElement(elt, clazz) {
          elt = resolveTarget(elt);
          elt.classList.toggle(clazz);
        }
        function takeClassForElement(elt, clazz) {
          elt = resolveTarget(elt);
          forEach(elt.parentElement.children, function(child) {
            removeClassFromElement(child, clazz);
          });
          addClassToElement(asElement(elt), clazz);
        }
        function closest(elt, selector) {
          elt = asElement(resolveTarget(elt));
          if (elt) {
            return elt.closest(selector);
          }
          return null;
        }
        function startsWith(str2, prefix) {
          return str2.substring(0, prefix.length) === prefix;
        }
        function endsWith(str2, suffix) {
          return str2.substring(str2.length - suffix.length) === suffix;
        }
        function normalizeSelector(selector) {
          const trimmedSelector = selector.trim();
          if (startsWith(trimmedSelector, "<") && endsWith(trimmedSelector, "/>")) {
            return trimmedSelector.substring(1, trimmedSelector.length - 2);
          } else {
            return trimmedSelector;
          }
        }
        function querySelectorAllExt(elt, selector, global) {
          if (selector.indexOf("global ") === 0) {
            return querySelectorAllExt(elt, selector.slice(7), true);
          }
          elt = resolveTarget(elt);
          const parts = [];
          {
            let chevronsCount = 0;
            let offset = 0;
            for (let i = 0; i < selector.length; i++) {
              const char = selector[i];
              if (char === "," && chevronsCount === 0) {
                parts.push(selector.substring(offset, i));
                offset = i + 1;
                continue;
              }
              if (char === "<") {
                chevronsCount++;
              } else if (char === "/" && i < selector.length - 1 && selector[i + 1] === ">") {
                chevronsCount--;
              }
            }
            if (offset < selector.length) {
              parts.push(selector.substring(offset));
            }
          }
          const result = [];
          const unprocessedParts = [];
          while (parts.length > 0) {
            const selector2 = normalizeSelector(parts.shift());
            let item;
            if (selector2.indexOf("closest ") === 0) {
              item = closest(asElement(elt), normalizeSelector(selector2.slice(8)));
            } else if (selector2.indexOf("find ") === 0) {
              item = find(asParentNode(elt), normalizeSelector(selector2.slice(5)));
            } else if (selector2 === "next" || selector2 === "nextElementSibling") {
              item = asElement(elt).nextElementSibling;
            } else if (selector2.indexOf("next ") === 0) {
              item = scanForwardQuery(elt, normalizeSelector(selector2.slice(5)), !!global);
            } else if (selector2 === "previous" || selector2 === "previousElementSibling") {
              item = asElement(elt).previousElementSibling;
            } else if (selector2.indexOf("previous ") === 0) {
              item = scanBackwardsQuery(elt, normalizeSelector(selector2.slice(9)), !!global);
            } else if (selector2 === "document") {
              item = document;
            } else if (selector2 === "window") {
              item = window;
            } else if (selector2 === "body") {
              item = document.body;
            } else if (selector2 === "root") {
              item = getRootNode(elt, !!global);
            } else if (selector2 === "host") {
              item = /** @type ShadowRoot */
              elt.getRootNode().host;
            } else {
              unprocessedParts.push(selector2);
            }
            if (item) {
              result.push(item);
            }
          }
          if (unprocessedParts.length > 0) {
            const standardSelector = unprocessedParts.join(",");
            const rootNode = asParentNode(getRootNode(elt, !!global));
            result.push(...toArray(rootNode.querySelectorAll(standardSelector)));
          }
          return result;
        }
        var scanForwardQuery = function(start, match, global) {
          const results = asParentNode(getRootNode(start, global)).querySelectorAll(match);
          for (let i = 0; i < results.length; i++) {
            const elt = results[i];
            if (elt.compareDocumentPosition(start) === Node.DOCUMENT_POSITION_PRECEDING) {
              return elt;
            }
          }
        };
        var scanBackwardsQuery = function(start, match, global) {
          const results = asParentNode(getRootNode(start, global)).querySelectorAll(match);
          for (let i = results.length - 1; i >= 0; i--) {
            const elt = results[i];
            if (elt.compareDocumentPosition(start) === Node.DOCUMENT_POSITION_FOLLOWING) {
              return elt;
            }
          }
        };
        function querySelectorExt(eltOrSelector, selector) {
          if (typeof eltOrSelector !== "string") {
            return querySelectorAllExt(eltOrSelector, selector)[0];
          } else {
            return querySelectorAllExt(getDocument().body, eltOrSelector)[0];
          }
        }
        function resolveTarget(eltOrSelector, context) {
          if (typeof eltOrSelector === "string") {
            return find(asParentNode(context) || document, eltOrSelector);
          } else {
            return eltOrSelector;
          }
        }
        function processEventArgs(arg1, arg2, arg3, arg4) {
          if (isFunction(arg2)) {
            return {
              target: getDocument().body,
              event: asString(arg1),
              listener: arg2,
              options: arg3
            };
          } else {
            return {
              target: resolveTarget(arg1),
              event: asString(arg2),
              listener: arg3,
              options: arg4
            };
          }
        }
        function addEventListenerImpl(arg1, arg2, arg3, arg4) {
          ready(function() {
            const eventArgs = processEventArgs(arg1, arg2, arg3, arg4);
            eventArgs.target.addEventListener(eventArgs.event, eventArgs.listener, eventArgs.options);
          });
          const b = isFunction(arg2);
          return b ? arg2 : arg3;
        }
        function removeEventListenerImpl(arg1, arg2, arg3) {
          ready(function() {
            const eventArgs = processEventArgs(arg1, arg2, arg3);
            eventArgs.target.removeEventListener(eventArgs.event, eventArgs.listener);
          });
          return isFunction(arg2) ? arg2 : arg3;
        }
        const DUMMY_ELT = getDocument().createElement("output");
        function findAttributeTargets(elt, attrName) {
          const attrTarget = getClosestAttributeValue(elt, attrName);
          if (attrTarget) {
            if (attrTarget === "this") {
              return [findThisElement(elt, attrName)];
            } else {
              const result = querySelectorAllExt(elt, attrTarget);
              const shouldInherit = /(^|,)(\s*)inherit(\s*)($|,)/.test(attrTarget);
              if (shouldInherit) {
                const eltToInheritFrom = asElement(getClosestMatch(elt, function(parent) {
                  return parent !== elt && hasAttribute(asElement(parent), attrName);
                }));
                if (eltToInheritFrom) {
                  result.push(...findAttributeTargets(eltToInheritFrom, attrName));
                }
              }
              if (result.length === 0) {
                logError('The selector "' + attrTarget + '" on ' + attrName + " returned no matches!");
                return [DUMMY_ELT];
              } else {
                return result;
              }
            }
          }
        }
        function findThisElement(elt, attribute) {
          return asElement(getClosestMatch(elt, function(elt2) {
            return getAttributeValue(asElement(elt2), attribute) != null;
          }));
        }
        function getTarget(elt) {
          const targetStr = getClosestAttributeValue(elt, "hx-target");
          if (targetStr) {
            if (targetStr === "this") {
              return findThisElement(elt, "hx-target");
            } else {
              return querySelectorExt(elt, targetStr);
            }
          } else {
            const data = getInternalData(elt);
            if (data.boosted) {
              return getDocument().body;
            } else {
              return elt;
            }
          }
        }
        function shouldSettleAttribute(name) {
          return htmx.config.attributesToSettle.includes(name);
        }
        function cloneAttributes(mergeTo, mergeFrom) {
          forEach(Array.from(mergeTo.attributes), function(attr) {
            if (!mergeFrom.hasAttribute(attr.name) && shouldSettleAttribute(attr.name)) {
              mergeTo.removeAttribute(attr.name);
            }
          });
          forEach(mergeFrom.attributes, function(attr) {
            if (shouldSettleAttribute(attr.name)) {
              mergeTo.setAttribute(attr.name, attr.value);
            }
          });
        }
        function isInlineSwap(swapStyle, target) {
          const extensions2 = getExtensions(target);
          for (let i = 0; i < extensions2.length; i++) {
            const extension = extensions2[i];
            try {
              if (extension.isInlineSwap(swapStyle)) {
                return true;
              }
            } catch (e) {
              logError(e);
            }
          }
          return swapStyle === "outerHTML";
        }
        function oobSwap(oobValue, oobElement, settleInfo, rootNode) {
          rootNode = rootNode || getDocument();
          let selector = "#" + CSS.escape(getRawAttribute(oobElement, "id"));
          let swapStyle = "outerHTML";
          if (oobValue === "true") {
          } else if (oobValue.indexOf(":") > 0) {
            swapStyle = oobValue.substring(0, oobValue.indexOf(":"));
            selector = oobValue.substring(oobValue.indexOf(":") + 1);
          } else {
            swapStyle = oobValue;
          }
          oobElement.removeAttribute("hx-swap-oob");
          oobElement.removeAttribute("data-hx-swap-oob");
          const targets = querySelectorAllExt(rootNode, selector, false);
          if (targets.length) {
            forEach(
              targets,
              function(target) {
                let fragment;
                const oobElementClone = oobElement.cloneNode(true);
                fragment = getDocument().createDocumentFragment();
                fragment.appendChild(oobElementClone);
                if (!isInlineSwap(swapStyle, target)) {
                  fragment = asParentNode(oobElementClone);
                }
                const beforeSwapDetails = { shouldSwap: true, target, fragment };
                if (!triggerEvent(target, "htmx:oobBeforeSwap", beforeSwapDetails)) return;
                target = beforeSwapDetails.target;
                if (beforeSwapDetails.shouldSwap) {
                  handlePreservedElements(fragment);
                  swapWithStyle(swapStyle, target, target, fragment, settleInfo);
                  restorePreservedElements();
                }
                forEach(settleInfo.elts, function(elt) {
                  triggerEvent(elt, "htmx:oobAfterSwap", beforeSwapDetails);
                });
              }
            );
            oobElement.parentNode.removeChild(oobElement);
          } else {
            oobElement.parentNode.removeChild(oobElement);
            triggerErrorEvent(getDocument().body, "htmx:oobErrorNoTarget", { content: oobElement });
          }
          return oobValue;
        }
        function restorePreservedElements() {
          const pantry = find("#--htmx-preserve-pantry--");
          if (pantry) {
            for (const preservedElt of [...pantry.children]) {
              const existingElement = find("#" + preservedElt.id);
              existingElement.parentNode.moveBefore(preservedElt, existingElement);
              existingElement.remove();
            }
            pantry.remove();
          }
        }
        function handlePreservedElements(fragment) {
          forEach(findAll(fragment, "[hx-preserve], [data-hx-preserve]"), function(preservedElt) {
            const id = getAttributeValue(preservedElt, "id");
            const existingElement = getDocument().getElementById(id);
            if (existingElement != null) {
              if (preservedElt.moveBefore) {
                let pantry = find("#--htmx-preserve-pantry--");
                if (pantry == null) {
                  getDocument().body.insertAdjacentHTML("afterend", "<div id='--htmx-preserve-pantry--'></div>");
                  pantry = find("#--htmx-preserve-pantry--");
                }
                pantry.moveBefore(existingElement, null);
              } else {
                preservedElt.parentNode.replaceChild(existingElement, preservedElt);
              }
            }
          });
        }
        function handleAttributes(parentNode, fragment, settleInfo) {
          forEach(fragment.querySelectorAll("[id]"), function(newNode) {
            const id = getRawAttribute(newNode, "id");
            if (id && id.length > 0) {
              const normalizedId = id.replace("'", "\\'");
              const normalizedTag = newNode.tagName.replace(":", "\\:");
              const parentElt2 = asParentNode(parentNode);
              const oldNode = parentElt2 && parentElt2.querySelector(normalizedTag + "[id='" + normalizedId + "']");
              if (oldNode && oldNode !== parentElt2) {
                const newAttributes = newNode.cloneNode();
                cloneAttributes(newNode, oldNode);
                settleInfo.tasks.push(function() {
                  cloneAttributes(newNode, newAttributes);
                });
              }
            }
          });
        }
        function makeAjaxLoadTask(child) {
          return function() {
            removeClassFromElement(child, htmx.config.addedClass);
            processNode(asElement(child));
            processFocus(asParentNode(child));
            triggerEvent(child, "htmx:load");
          };
        }
        function processFocus(child) {
          const autofocus = "[autofocus]";
          const autoFocusedElt = asHtmlElement(matches(child, autofocus) ? child : child.querySelector(autofocus));
          if (autoFocusedElt != null) {
            autoFocusedElt.focus();
          }
        }
        function insertNodesBefore(parentNode, insertBefore, fragment, settleInfo) {
          handleAttributes(parentNode, fragment, settleInfo);
          while (fragment.childNodes.length > 0) {
            const child = fragment.firstChild;
            addClassToElement(asElement(child), htmx.config.addedClass);
            parentNode.insertBefore(child, insertBefore);
            if (child.nodeType !== Node.TEXT_NODE && child.nodeType !== Node.COMMENT_NODE) {
              settleInfo.tasks.push(makeAjaxLoadTask(child));
            }
          }
        }
        function stringHash(string, hash) {
          let char = 0;
          while (char < string.length) {
            hash = (hash << 5) - hash + string.charCodeAt(char++) | 0;
          }
          return hash;
        }
        function attributeHash(elt) {
          let hash = 0;
          for (let i = 0; i < elt.attributes.length; i++) {
            const attribute = elt.attributes[i];
            if (attribute.value) {
              hash = stringHash(attribute.name, hash);
              hash = stringHash(attribute.value, hash);
            }
          }
          return hash;
        }
        function deInitOnHandlers(elt) {
          const internalData = getInternalData(elt);
          if (internalData.onHandlers) {
            for (let i = 0; i < internalData.onHandlers.length; i++) {
              const handlerInfo = internalData.onHandlers[i];
              removeEventListenerImpl(elt, handlerInfo.event, handlerInfo.listener);
            }
            delete internalData.onHandlers;
          }
        }
        function deInitNode(element) {
          const internalData = getInternalData(element);
          if (internalData.timeout) {
            clearTimeout(internalData.timeout);
          }
          if (internalData.listenerInfos) {
            forEach(internalData.listenerInfos, function(info) {
              if (info.on) {
                removeEventListenerImpl(info.on, info.trigger, info.listener);
              }
            });
          }
          deInitOnHandlers(element);
          forEach(Object.keys(internalData), function(key) {
            if (key !== "firstInitCompleted") delete internalData[key];
          });
        }
        function cleanUpElement(element) {
          triggerEvent(element, "htmx:beforeCleanupElement");
          deInitNode(element);
          forEach(element.children, function(child) {
            cleanUpElement(child);
          });
        }
        function swapOuterHTML(target, fragment, settleInfo) {
          if (target.tagName === "BODY") {
            return swapInnerHTML(target, fragment, settleInfo);
          }
          let newElt;
          const eltBeforeNewContent = target.previousSibling;
          const parentNode = parentElt(target);
          if (!parentNode) {
            return;
          }
          insertNodesBefore(parentNode, target, fragment, settleInfo);
          if (eltBeforeNewContent == null) {
            newElt = parentNode.firstChild;
          } else {
            newElt = eltBeforeNewContent.nextSibling;
          }
          settleInfo.elts = settleInfo.elts.filter(function(e) {
            return e !== target;
          });
          while (newElt && newElt !== target) {
            if (newElt instanceof Element) {
              settleInfo.elts.push(newElt);
            }
            newElt = newElt.nextSibling;
          }
          cleanUpElement(target);
          target.remove();
        }
        function swapAfterBegin(target, fragment, settleInfo) {
          return insertNodesBefore(target, target.firstChild, fragment, settleInfo);
        }
        function swapBeforeBegin(target, fragment, settleInfo) {
          return insertNodesBefore(parentElt(target), target, fragment, settleInfo);
        }
        function swapBeforeEnd(target, fragment, settleInfo) {
          return insertNodesBefore(target, null, fragment, settleInfo);
        }
        function swapAfterEnd(target, fragment, settleInfo) {
          return insertNodesBefore(parentElt(target), target.nextSibling, fragment, settleInfo);
        }
        function swapDelete(target) {
          cleanUpElement(target);
          const parent = parentElt(target);
          if (parent) {
            return parent.removeChild(target);
          }
        }
        function swapInnerHTML(target, fragment, settleInfo) {
          const firstChild = target.firstChild;
          insertNodesBefore(target, firstChild, fragment, settleInfo);
          if (firstChild) {
            while (firstChild.nextSibling) {
              cleanUpElement(firstChild.nextSibling);
              target.removeChild(firstChild.nextSibling);
            }
            cleanUpElement(firstChild);
            target.removeChild(firstChild);
          }
        }
        function swapWithStyle(swapStyle, elt, target, fragment, settleInfo) {
          switch (swapStyle) {
            case "none":
              return;
            case "outerHTML":
              swapOuterHTML(target, fragment, settleInfo);
              return;
            case "afterbegin":
              swapAfterBegin(target, fragment, settleInfo);
              return;
            case "beforebegin":
              swapBeforeBegin(target, fragment, settleInfo);
              return;
            case "beforeend":
              swapBeforeEnd(target, fragment, settleInfo);
              return;
            case "afterend":
              swapAfterEnd(target, fragment, settleInfo);
              return;
            case "delete":
              swapDelete(target);
              return;
            default:
              var extensions2 = getExtensions(elt);
              for (let i = 0; i < extensions2.length; i++) {
                const ext = extensions2[i];
                try {
                  const newElements = ext.handleSwap(swapStyle, target, fragment, settleInfo);
                  if (newElements) {
                    if (Array.isArray(newElements)) {
                      for (let j = 0; j < newElements.length; j++) {
                        const child = newElements[j];
                        if (child.nodeType !== Node.TEXT_NODE && child.nodeType !== Node.COMMENT_NODE) {
                          settleInfo.tasks.push(makeAjaxLoadTask(child));
                        }
                      }
                    }
                    return;
                  }
                } catch (e) {
                  logError(e);
                }
              }
              if (swapStyle === "innerHTML") {
                swapInnerHTML(target, fragment, settleInfo);
              } else {
                swapWithStyle(htmx.config.defaultSwapStyle, elt, target, fragment, settleInfo);
              }
          }
        }
        function findAndSwapOobElements(fragment, settleInfo, rootNode) {
          var oobElts = findAll(fragment, "[hx-swap-oob], [data-hx-swap-oob]");
          forEach(oobElts, function(oobElement) {
            if (htmx.config.allowNestedOobSwaps || oobElement.parentElement === null) {
              const oobValue = getAttributeValue(oobElement, "hx-swap-oob");
              if (oobValue != null) {
                oobSwap(oobValue, oobElement, settleInfo, rootNode);
              }
            } else {
              oobElement.removeAttribute("hx-swap-oob");
              oobElement.removeAttribute("data-hx-swap-oob");
            }
          });
          return oobElts.length > 0;
        }
        function swap(target, content, swapSpec, swapOptions) {
          if (!swapOptions) {
            swapOptions = {};
          }
          let settleResolve = null;
          let settleReject = null;
          let doSwap = function() {
            maybeCall(swapOptions.beforeSwapCallback);
            target = resolveTarget(target);
            const rootNode = swapOptions.contextElement ? getRootNode(swapOptions.contextElement, false) : getDocument();
            const activeElt = document.activeElement;
            let selectionInfo = {};
            selectionInfo = {
              elt: activeElt,
              // @ts-ignore
              start: activeElt ? activeElt.selectionStart : null,
              // @ts-ignore
              end: activeElt ? activeElt.selectionEnd : null
            };
            const settleInfo = makeSettleInfo(target);
            if (swapSpec.swapStyle === "textContent") {
              target.textContent = content;
            } else {
              let fragment = makeFragment(content);
              settleInfo.title = swapOptions.title || fragment.title;
              if (swapOptions.historyRequest) {
                fragment = fragment.querySelector("[hx-history-elt],[data-hx-history-elt]") || fragment;
              }
              if (swapOptions.selectOOB) {
                const oobSelectValues = swapOptions.selectOOB.split(",");
                for (let i = 0; i < oobSelectValues.length; i++) {
                  const oobSelectValue = oobSelectValues[i].split(":", 2);
                  let id = oobSelectValue[0].trim();
                  if (id.indexOf("#") === 0) {
                    id = id.substring(1);
                  }
                  const oobValue = oobSelectValue[1] || "true";
                  const oobElement = fragment.querySelector("#" + id);
                  if (oobElement) {
                    oobSwap(oobValue, oobElement, settleInfo, rootNode);
                  }
                }
              }
              findAndSwapOobElements(fragment, settleInfo, rootNode);
              forEach(
                findAll(fragment, "template"),
                /** @param {HTMLTemplateElement} template */
                function(template) {
                  if (template.content && findAndSwapOobElements(template.content, settleInfo, rootNode)) {
                    template.remove();
                  }
                }
              );
              if (swapOptions.select) {
                const newFragment = getDocument().createDocumentFragment();
                forEach(fragment.querySelectorAll(swapOptions.select), function(node) {
                  newFragment.appendChild(node);
                });
                fragment = newFragment;
              }
              handlePreservedElements(fragment);
              swapWithStyle(swapSpec.swapStyle, swapOptions.contextElement, target, fragment, settleInfo);
              restorePreservedElements();
            }
            if (selectionInfo.elt && !bodyContains(selectionInfo.elt) && getRawAttribute(selectionInfo.elt, "id")) {
              const newActiveElt = document.getElementById(getRawAttribute(selectionInfo.elt, "id"));
              const focusOptions = { preventScroll: swapSpec.focusScroll !== void 0 ? !swapSpec.focusScroll : !htmx.config.defaultFocusScroll };
              if (newActiveElt) {
                if (selectionInfo.start && newActiveElt.setSelectionRange) {
                  try {
                    newActiveElt.setSelectionRange(selectionInfo.start, selectionInfo.end);
                  } catch (e) {
                  }
                }
                newActiveElt.focus(focusOptions);
              }
            }
            target.classList.remove(htmx.config.swappingClass);
            forEach(settleInfo.elts, function(elt2) {
              if (elt2.classList) {
                elt2.classList.add(htmx.config.settlingClass);
              }
              triggerEvent(elt2, "htmx:afterSwap", swapOptions.eventInfo);
            });
            maybeCall(swapOptions.afterSwapCallback);
            if (!swapSpec.ignoreTitle) {
              handleTitle(settleInfo.title);
            }
            const doSettle = function() {
              forEach(settleInfo.tasks, function(task) {
                task.call();
              });
              forEach(settleInfo.elts, function(elt2) {
                if (elt2.classList) {
                  elt2.classList.remove(htmx.config.settlingClass);
                }
                triggerEvent(elt2, "htmx:afterSettle", swapOptions.eventInfo);
              });
              if (swapOptions.anchor) {
                const anchorTarget = asElement(resolveTarget("#" + swapOptions.anchor));
                if (anchorTarget) {
                  anchorTarget.scrollIntoView({ block: "start", behavior: "auto" });
                }
              }
              updateScrollState(settleInfo.elts, swapSpec);
              maybeCall(swapOptions.afterSettleCallback);
              maybeCall(settleResolve);
            };
            if (swapSpec.settleDelay > 0) {
              getWindow().setTimeout(doSettle, swapSpec.settleDelay);
            } else {
              doSettle();
            }
          };
          let shouldTransition = htmx.config.globalViewTransitions;
          if (swapSpec.hasOwnProperty("transition")) {
            shouldTransition = swapSpec.transition;
          }
          const elt = swapOptions.contextElement || getDocument();
          if (shouldTransition && triggerEvent(elt, "htmx:beforeTransition", swapOptions.eventInfo) && typeof Promise !== "undefined" && // @ts-ignore experimental feature atm
          document.startViewTransition) {
            const settlePromise = new Promise(function(_resolve, _reject) {
              settleResolve = _resolve;
              settleReject = _reject;
            });
            const innerDoSwap = doSwap;
            doSwap = function() {
              document.startViewTransition(function() {
                innerDoSwap();
                return settlePromise;
              });
            };
          }
          try {
            if ((swapSpec == null ? void 0 : swapSpec.swapDelay) && swapSpec.swapDelay > 0) {
              getWindow().setTimeout(doSwap, swapSpec.swapDelay);
            } else {
              doSwap();
            }
          } catch (e) {
            triggerErrorEvent(elt, "htmx:swapError", swapOptions.eventInfo);
            maybeCall(settleReject);
            throw e;
          }
        }
        function handleTriggerHeader(xhr, header, elt) {
          const triggerBody = xhr.getResponseHeader(header);
          if (triggerBody.indexOf("{") === 0) {
            const triggers = parseJSON(triggerBody);
            for (const eventName in triggers) {
              if (triggers.hasOwnProperty(eventName)) {
                let detail = triggers[eventName];
                if (isRawObject(detail)) {
                  elt = detail.target !== void 0 ? detail.target : elt;
                } else {
                  detail = { value: detail };
                }
                triggerEvent(elt, eventName, detail);
              }
            }
          } else {
            const eventNames = triggerBody.split(",");
            for (let i = 0; i < eventNames.length; i++) {
              triggerEvent(elt, eventNames[i].trim(), []);
            }
          }
        }
        const WHITESPACE = /\s/;
        const WHITESPACE_OR_COMMA = /[\s,]/;
        const SYMBOL_START = /[_$a-zA-Z]/;
        const SYMBOL_CONT = /[_$a-zA-Z0-9]/;
        const STRINGISH_START = ['"', "'", "/"];
        const NOT_WHITESPACE = /[^\s]/;
        const COMBINED_SELECTOR_START = /[{(]/;
        const COMBINED_SELECTOR_END = /[})]/;
        function tokenizeString(str2) {
          const tokens = [];
          let position = 0;
          while (position < str2.length) {
            if (SYMBOL_START.exec(str2.charAt(position))) {
              var startPosition = position;
              while (SYMBOL_CONT.exec(str2.charAt(position + 1))) {
                position++;
              }
              tokens.push(str2.substring(startPosition, position + 1));
            } else if (STRINGISH_START.indexOf(str2.charAt(position)) !== -1) {
              const startChar = str2.charAt(position);
              var startPosition = position;
              position++;
              while (position < str2.length && str2.charAt(position) !== startChar) {
                if (str2.charAt(position) === "\\") {
                  position++;
                }
                position++;
              }
              tokens.push(str2.substring(startPosition, position + 1));
            } else {
              const symbol = str2.charAt(position);
              tokens.push(symbol);
            }
            position++;
          }
          return tokens;
        }
        function isPossibleRelativeReference(token, last, paramName) {
          return SYMBOL_START.exec(token.charAt(0)) && token !== "true" && token !== "false" && token !== "this" && token !== paramName && last !== ".";
        }
        function maybeGenerateConditional(elt, tokens, paramName) {
          if (tokens[0] === "[") {
            tokens.shift();
            let bracketCount = 1;
            let conditionalSource = " return (function(" + paramName + "){ return (";
            let last = null;
            while (tokens.length > 0) {
              const token = tokens[0];
              if (token === "]") {
                bracketCount--;
                if (bracketCount === 0) {
                  if (last === null) {
                    conditionalSource = conditionalSource + "true";
                  }
                  tokens.shift();
                  conditionalSource += ")})";
                  try {
                    const conditionFunction = maybeEval(
                      elt,
                      function() {
                        return Function(conditionalSource)();
                      },
                      function() {
                        return true;
                      }
                    );
                    conditionFunction.source = conditionalSource;
                    return conditionFunction;
                  } catch (e) {
                    triggerErrorEvent(getDocument().body, "htmx:syntax:error", { error: e, source: conditionalSource });
                    return null;
                  }
                }
              } else if (token === "[") {
                bracketCount++;
              }
              if (isPossibleRelativeReference(token, last, paramName)) {
                conditionalSource += "((" + paramName + "." + token + ") ? (" + paramName + "." + token + ") : (window." + token + "))";
              } else {
                conditionalSource = conditionalSource + token;
              }
              last = tokens.shift();
            }
          }
        }
        function consumeUntil(tokens, match) {
          let result = "";
          while (tokens.length > 0 && !match.test(tokens[0])) {
            result += tokens.shift();
          }
          return result;
        }
        function consumeCSSSelector(tokens) {
          let result;
          if (tokens.length > 0 && COMBINED_SELECTOR_START.test(tokens[0])) {
            tokens.shift();
            result = consumeUntil(tokens, COMBINED_SELECTOR_END).trim();
            tokens.shift();
          } else {
            result = consumeUntil(tokens, WHITESPACE_OR_COMMA);
          }
          return result;
        }
        const INPUT_SELECTOR = "input, textarea, select";
        function parseAndCacheTrigger(elt, explicitTrigger, cache) {
          const triggerSpecs = [];
          const tokens = tokenizeString(explicitTrigger);
          do {
            consumeUntil(tokens, NOT_WHITESPACE);
            const initialLength = tokens.length;
            const trigger = consumeUntil(tokens, /[,\[\s]/);
            if (trigger !== "") {
              if (trigger === "every") {
                const every = { trigger: "every" };
                consumeUntil(tokens, NOT_WHITESPACE);
                every.pollInterval = parseInterval(consumeUntil(tokens, /[,\[\s]/));
                consumeUntil(tokens, NOT_WHITESPACE);
                var eventFilter = maybeGenerateConditional(elt, tokens, "event");
                if (eventFilter) {
                  every.eventFilter = eventFilter;
                }
                triggerSpecs.push(every);
              } else {
                const triggerSpec = { trigger };
                var eventFilter = maybeGenerateConditional(elt, tokens, "event");
                if (eventFilter) {
                  triggerSpec.eventFilter = eventFilter;
                }
                consumeUntil(tokens, NOT_WHITESPACE);
                while (tokens.length > 0 && tokens[0] !== ",") {
                  const token = tokens.shift();
                  if (token === "changed") {
                    triggerSpec.changed = true;
                  } else if (token === "once") {
                    triggerSpec.once = true;
                  } else if (token === "consume") {
                    triggerSpec.consume = true;
                  } else if (token === "delay" && tokens[0] === ":") {
                    tokens.shift();
                    triggerSpec.delay = parseInterval(consumeUntil(tokens, WHITESPACE_OR_COMMA));
                  } else if (token === "from" && tokens[0] === ":") {
                    tokens.shift();
                    if (COMBINED_SELECTOR_START.test(tokens[0])) {
                      var from_arg = consumeCSSSelector(tokens);
                    } else {
                      var from_arg = consumeUntil(tokens, WHITESPACE_OR_COMMA);
                      if (from_arg === "closest" || from_arg === "find" || from_arg === "next" || from_arg === "previous") {
                        tokens.shift();
                        const selector = consumeCSSSelector(tokens);
                        if (selector.length > 0) {
                          from_arg += " " + selector;
                        }
                      }
                    }
                    triggerSpec.from = from_arg;
                  } else if (token === "target" && tokens[0] === ":") {
                    tokens.shift();
                    triggerSpec.target = consumeCSSSelector(tokens);
                  } else if (token === "throttle" && tokens[0] === ":") {
                    tokens.shift();
                    triggerSpec.throttle = parseInterval(consumeUntil(tokens, WHITESPACE_OR_COMMA));
                  } else if (token === "queue" && tokens[0] === ":") {
                    tokens.shift();
                    triggerSpec.queue = consumeUntil(tokens, WHITESPACE_OR_COMMA);
                  } else if (token === "root" && tokens[0] === ":") {
                    tokens.shift();
                    triggerSpec[token] = consumeCSSSelector(tokens);
                  } else if (token === "threshold" && tokens[0] === ":") {
                    tokens.shift();
                    triggerSpec[token] = consumeUntil(tokens, WHITESPACE_OR_COMMA);
                  } else {
                    triggerErrorEvent(elt, "htmx:syntax:error", { token: tokens.shift() });
                  }
                  consumeUntil(tokens, NOT_WHITESPACE);
                }
                triggerSpecs.push(triggerSpec);
              }
            }
            if (tokens.length === initialLength) {
              triggerErrorEvent(elt, "htmx:syntax:error", { token: tokens.shift() });
            }
            consumeUntil(tokens, NOT_WHITESPACE);
          } while (tokens[0] === "," && tokens.shift());
          if (cache) {
            cache[explicitTrigger] = triggerSpecs;
          }
          return triggerSpecs;
        }
        function getTriggerSpecs(elt) {
          const explicitTrigger = getAttributeValue(elt, "hx-trigger");
          let triggerSpecs = [];
          if (explicitTrigger) {
            const cache = htmx.config.triggerSpecsCache;
            triggerSpecs = cache && cache[explicitTrigger] || parseAndCacheTrigger(elt, explicitTrigger, cache);
          }
          if (triggerSpecs.length > 0) {
            return triggerSpecs;
          } else if (matches(elt, "form")) {
            return [{ trigger: "submit" }];
          } else if (matches(elt, 'input[type="button"], input[type="submit"]')) {
            return [{ trigger: "click" }];
          } else if (matches(elt, INPUT_SELECTOR)) {
            return [{ trigger: "change" }];
          } else {
            return [{ trigger: "click" }];
          }
        }
        function cancelPolling(elt) {
          getInternalData(elt).cancelled = true;
        }
        function processPolling(elt, handler, spec) {
          const nodeData = getInternalData(elt);
          nodeData.timeout = getWindow().setTimeout(function() {
            if (bodyContains(elt) && nodeData.cancelled !== true) {
              if (!maybeFilterEvent(spec, elt, makeEvent("hx:poll:trigger", {
                triggerSpec: spec,
                target: elt
              }))) {
                handler(elt);
              }
              processPolling(elt, handler, spec);
            }
          }, spec.pollInterval);
        }
        function isLocalLink(elt) {
          return location.hostname === elt.hostname && getRawAttribute(elt, "href") && getRawAttribute(elt, "href").indexOf("#") !== 0;
        }
        function eltIsDisabled(elt) {
          return closest(elt, htmx.config.disableSelector);
        }
        function boostElement(elt, nodeData, triggerSpecs) {
          if (elt instanceof HTMLAnchorElement && isLocalLink(elt) && (elt.target === "" || elt.target === "_self") || elt.tagName === "FORM" && String(getRawAttribute(elt, "method")).toLowerCase() !== "dialog") {
            nodeData.boosted = true;
            let verb, path;
            if (elt.tagName === "A") {
              verb = /** @type HttpVerb */
              "get";
              path = getRawAttribute(elt, "href");
            } else {
              const rawAttribute = getRawAttribute(elt, "method");
              verb = /** @type HttpVerb */
              rawAttribute ? rawAttribute.toLowerCase() : "get";
              path = getRawAttribute(elt, "action");
              if (path == null || path === "") {
                path = location.href;
              }
              if (verb === "get" && path.includes("?")) {
                path = path.replace(/\?[^#]+/, "");
              }
            }
            triggerSpecs.forEach(function(triggerSpec) {
              addEventListener(elt, function(node, evt) {
                const elt2 = asElement(node);
                if (eltIsDisabled(elt2)) {
                  cleanUpElement(elt2);
                  return;
                }
                issueAjaxRequest(verb, path, elt2, evt);
              }, nodeData, triggerSpec, true);
            });
          }
        }
        function shouldCancel(evt, elt) {
          if (evt.type === "submit" && elt.tagName === "FORM") {
            return true;
          } else if (evt.type === "click") {
            const btn = (
              /** @type {HTMLButtonElement|HTMLInputElement|null} */
              elt.closest('input[type="submit"], button')
            );
            if (btn && btn.form && btn.type === "submit") {
              return true;
            }
            const link = elt.closest("a");
            const samePageAnchor = /^#.+/;
            if (link && link.href && !samePageAnchor.test(link.getAttribute("href"))) {
              return true;
            }
          }
          return false;
        }
        function ignoreBoostedAnchorCtrlClick(elt, evt) {
          return getInternalData(elt).boosted && elt instanceof HTMLAnchorElement && evt.type === "click" && // @ts-ignore this will resolve to undefined for events that don't define those properties, which is fine
          (evt.ctrlKey || evt.metaKey);
        }
        function maybeFilterEvent(triggerSpec, elt, evt) {
          const eventFilter = triggerSpec.eventFilter;
          if (eventFilter) {
            try {
              return eventFilter.call(elt, evt) !== true;
            } catch (e) {
              const source2 = eventFilter.source;
              triggerErrorEvent(getDocument().body, "htmx:eventFilter:error", { error: e, source: source2 });
              return true;
            }
          }
          return false;
        }
        function addEventListener(elt, handler, nodeData, triggerSpec, explicitCancel) {
          const elementData = getInternalData(elt);
          let eltsToListenOn;
          if (triggerSpec.from) {
            eltsToListenOn = querySelectorAllExt(elt, triggerSpec.from);
          } else {
            eltsToListenOn = [elt];
          }
          if (triggerSpec.changed) {
            if (!("lastValue" in elementData)) {
              elementData.lastValue = /* @__PURE__ */ new WeakMap();
            }
            eltsToListenOn.forEach(function(eltToListenOn) {
              if (!elementData.lastValue.has(triggerSpec)) {
                elementData.lastValue.set(triggerSpec, /* @__PURE__ */ new WeakMap());
              }
              elementData.lastValue.get(triggerSpec).set(eltToListenOn, eltToListenOn.value);
            });
          }
          forEach(eltsToListenOn, function(eltToListenOn) {
            const eventListener = function(evt) {
              if (!bodyContains(elt)) {
                eltToListenOn.removeEventListener(triggerSpec.trigger, eventListener);
                return;
              }
              if (ignoreBoostedAnchorCtrlClick(elt, evt)) {
                return;
              }
              if (explicitCancel || shouldCancel(evt, eltToListenOn)) {
                evt.preventDefault();
              }
              if (maybeFilterEvent(triggerSpec, elt, evt)) {
                return;
              }
              const eventData = getInternalData(evt);
              eventData.triggerSpec = triggerSpec;
              if (eventData.handledFor == null) {
                eventData.handledFor = [];
              }
              if (eventData.handledFor.indexOf(elt) < 0) {
                eventData.handledFor.push(elt);
                if (triggerSpec.consume) {
                  evt.stopPropagation();
                }
                if (triggerSpec.target && evt.target) {
                  if (!matches(asElement(evt.target), triggerSpec.target)) {
                    return;
                  }
                }
                if (triggerSpec.once) {
                  if (elementData.triggeredOnce) {
                    return;
                  } else {
                    elementData.triggeredOnce = true;
                  }
                }
                if (triggerSpec.changed) {
                  const node = evt.target;
                  const value = node.value;
                  const lastValue = elementData.lastValue.get(triggerSpec);
                  if (lastValue.has(node) && lastValue.get(node) === value) {
                    return;
                  }
                  lastValue.set(node, value);
                }
                if (elementData.delayed) {
                  clearTimeout(elementData.delayed);
                }
                if (elementData.throttle) {
                  return;
                }
                if (triggerSpec.throttle > 0) {
                  if (!elementData.throttle) {
                    triggerEvent(elt, "htmx:trigger");
                    handler(elt, evt);
                    elementData.throttle = getWindow().setTimeout(function() {
                      elementData.throttle = null;
                    }, triggerSpec.throttle);
                  }
                } else if (triggerSpec.delay > 0) {
                  elementData.delayed = getWindow().setTimeout(function() {
                    triggerEvent(elt, "htmx:trigger");
                    handler(elt, evt);
                  }, triggerSpec.delay);
                } else {
                  triggerEvent(elt, "htmx:trigger");
                  handler(elt, evt);
                }
              }
            };
            if (nodeData.listenerInfos == null) {
              nodeData.listenerInfos = [];
            }
            nodeData.listenerInfos.push({
              trigger: triggerSpec.trigger,
              listener: eventListener,
              on: eltToListenOn
            });
            eltToListenOn.addEventListener(triggerSpec.trigger, eventListener);
          });
        }
        let windowIsScrolling = false;
        let scrollHandler = null;
        function initScrollHandler() {
          if (!scrollHandler) {
            scrollHandler = function() {
              windowIsScrolling = true;
            };
            window.addEventListener("scroll", scrollHandler);
            window.addEventListener("resize", scrollHandler);
            setInterval(function() {
              if (windowIsScrolling) {
                windowIsScrolling = false;
                forEach(getDocument().querySelectorAll("[hx-trigger*='revealed'],[data-hx-trigger*='revealed']"), function(elt) {
                  maybeReveal(elt);
                });
              }
            }, 200);
          }
        }
        function maybeReveal(elt) {
          if (!hasAttribute(elt, "data-hx-revealed") && isScrolledIntoView(elt)) {
            elt.setAttribute("data-hx-revealed", "true");
            const nodeData = getInternalData(elt);
            if (nodeData.initHash) {
              triggerEvent(elt, "revealed");
            } else {
              elt.addEventListener("htmx:afterProcessNode", function() {
                triggerEvent(elt, "revealed");
              }, { once: true });
            }
          }
        }
        function loadImmediately(elt, handler, nodeData, delay) {
          const load = function() {
            if (!nodeData.loaded) {
              nodeData.loaded = true;
              triggerEvent(elt, "htmx:trigger");
              handler(elt);
            }
          };
          if (delay > 0) {
            getWindow().setTimeout(load, delay);
          } else {
            load();
          }
        }
        function processVerbs(elt, nodeData, triggerSpecs) {
          let explicitAction = false;
          forEach(VERBS, function(verb) {
            if (hasAttribute(elt, "hx-" + verb)) {
              const path = getAttributeValue(elt, "hx-" + verb);
              explicitAction = true;
              nodeData.path = path;
              nodeData.verb = verb;
              triggerSpecs.forEach(function(triggerSpec) {
                addTriggerHandler(elt, triggerSpec, nodeData, function(node, evt) {
                  const elt2 = asElement(node);
                  if (eltIsDisabled(elt2)) {
                    cleanUpElement(elt2);
                    return;
                  }
                  issueAjaxRequest(verb, path, elt2, evt);
                });
              });
            }
          });
          return explicitAction;
        }
        function addTriggerHandler(elt, triggerSpec, nodeData, handler) {
          if (triggerSpec.trigger === "revealed") {
            initScrollHandler();
            addEventListener(elt, handler, nodeData, triggerSpec);
            maybeReveal(asElement(elt));
          } else if (triggerSpec.trigger === "intersect") {
            const observerOptions = {};
            if (triggerSpec.root) {
              observerOptions.root = querySelectorExt(elt, triggerSpec.root);
            }
            if (triggerSpec.threshold) {
              observerOptions.threshold = parseFloat(triggerSpec.threshold);
            }
            const observer = new IntersectionObserver(function(entries) {
              for (let i = 0; i < entries.length; i++) {
                const entry = entries[i];
                if (entry.isIntersecting) {
                  triggerEvent(elt, "intersect");
                  break;
                }
              }
            }, observerOptions);
            observer.observe(asElement(elt));
            addEventListener(asElement(elt), handler, nodeData, triggerSpec);
          } else if (!nodeData.firstInitCompleted && triggerSpec.trigger === "load") {
            if (!maybeFilterEvent(triggerSpec, elt, makeEvent("load", { elt }))) {
              loadImmediately(asElement(elt), handler, nodeData, triggerSpec.delay);
            }
          } else if (triggerSpec.pollInterval > 0) {
            nodeData.polling = true;
            processPolling(asElement(elt), handler, triggerSpec);
          } else {
            addEventListener(elt, handler, nodeData, triggerSpec);
          }
        }
        function shouldProcessHxOn(node) {
          const elt = asElement(node);
          if (!elt) {
            return false;
          }
          const attributes = elt.attributes;
          for (let j = 0; j < attributes.length; j++) {
            const attrName = attributes[j].name;
            if (startsWith(attrName, "hx-on:") || startsWith(attrName, "data-hx-on:") || startsWith(attrName, "hx-on-") || startsWith(attrName, "data-hx-on-")) {
              return true;
            }
          }
          return false;
        }
        const HX_ON_QUERY = new XPathEvaluator().createExpression('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]');
        function processHXOnRoot(elt, elements) {
          if (shouldProcessHxOn(elt)) {
            elements.push(asElement(elt));
          }
          const iter = HX_ON_QUERY.evaluate(elt);
          let node = null;
          while (node = iter.iterateNext()) elements.push(asElement(node));
        }
        function findHxOnWildcardElements(elt) {
          const elements = [];
          if (elt instanceof DocumentFragment) {
            for (const child of elt.childNodes) {
              processHXOnRoot(child, elements);
            }
          } else {
            processHXOnRoot(elt, elements);
          }
          return elements;
        }
        function findElementsToProcess(elt) {
          if (elt.querySelectorAll) {
            const boostedSelector = ", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]";
            const extensionSelectors = [];
            for (const e in extensions) {
              const extension = extensions[e];
              if (extension.getSelectors) {
                var selectors = extension.getSelectors();
                if (selectors) {
                  extensionSelectors.push(selectors);
                }
              }
            }
            const results = elt.querySelectorAll(VERB_SELECTOR + boostedSelector + ", form, [type='submit'], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger]" + extensionSelectors.flat().map((s) => ", " + s).join(""));
            return results;
          } else {
            return [];
          }
        }
        function maybeSetLastButtonClicked(evt) {
          const elt = getTargetButton(evt.target);
          const internalData = getRelatedFormData(evt);
          if (internalData) {
            internalData.lastButtonClicked = elt;
          }
        }
        function maybeUnsetLastButtonClicked(evt) {
          const internalData = getRelatedFormData(evt);
          if (internalData) {
            internalData.lastButtonClicked = null;
          }
        }
        function getTargetButton(target) {
          return (
            /** @type {HTMLButtonElement|HTMLInputElement|null} */
            closest(asElement(target), "button, input[type='submit']")
          );
        }
        function getRelatedForm(elt) {
          return elt.form || closest(elt, "form");
        }
        function getRelatedFormData(evt) {
          const elt = getTargetButton(evt.target);
          if (!elt) {
            return;
          }
          const form = getRelatedForm(elt);
          if (!form) {
            return;
          }
          return getInternalData(form);
        }
        function initButtonTracking(elt) {
          elt.addEventListener("click", maybeSetLastButtonClicked);
          elt.addEventListener("focusin", maybeSetLastButtonClicked);
          elt.addEventListener("focusout", maybeUnsetLastButtonClicked);
        }
        function addHxOnEventHandler(elt, eventName, code) {
          const nodeData = getInternalData(elt);
          if (!Array.isArray(nodeData.onHandlers)) {
            nodeData.onHandlers = [];
          }
          let func;
          const listener = function(e) {
            maybeEval(elt, function() {
              if (eltIsDisabled(elt)) {
                return;
              }
              if (!func) {
                func = new Function("event", code);
              }
              func.call(elt, e);
            });
          };
          elt.addEventListener(eventName, listener);
          nodeData.onHandlers.push({ event: eventName, listener });
        }
        function processHxOnWildcard(elt) {
          deInitOnHandlers(elt);
          for (let i = 0; i < elt.attributes.length; i++) {
            const name = elt.attributes[i].name;
            const value = elt.attributes[i].value;
            if (startsWith(name, "hx-on") || startsWith(name, "data-hx-on")) {
              const afterOnPosition = name.indexOf("-on") + 3;
              const nextChar = name.slice(afterOnPosition, afterOnPosition + 1);
              if (nextChar === "-" || nextChar === ":") {
                let eventName = name.slice(afterOnPosition + 1);
                if (startsWith(eventName, ":")) {
                  eventName = "htmx" + eventName;
                } else if (startsWith(eventName, "-")) {
                  eventName = "htmx:" + eventName.slice(1);
                } else if (startsWith(eventName, "htmx-")) {
                  eventName = "htmx:" + eventName.slice(5);
                }
                addHxOnEventHandler(elt, eventName, value);
              }
            }
          }
        }
        function initNode(elt) {
          triggerEvent(elt, "htmx:beforeProcessNode");
          const nodeData = getInternalData(elt);
          const triggerSpecs = getTriggerSpecs(elt);
          const hasExplicitHttpAction = processVerbs(elt, nodeData, triggerSpecs);
          if (!hasExplicitHttpAction) {
            if (getClosestAttributeValue(elt, "hx-boost") === "true") {
              boostElement(elt, nodeData, triggerSpecs);
            } else if (hasAttribute(elt, "hx-trigger")) {
              triggerSpecs.forEach(function(triggerSpec) {
                addTriggerHandler(elt, triggerSpec, nodeData, function() {
                });
              });
            }
          }
          if (elt.tagName === "FORM" || getRawAttribute(elt, "type") === "submit" && hasAttribute(elt, "form")) {
            initButtonTracking(elt);
          }
          nodeData.firstInitCompleted = true;
          triggerEvent(elt, "htmx:afterProcessNode");
        }
        function maybeDeInitAndHash(elt) {
          if (!(elt instanceof Element)) {
            return false;
          }
          const nodeData = getInternalData(elt);
          const hash = attributeHash(elt);
          if (nodeData.initHash !== hash) {
            deInitNode(elt);
            nodeData.initHash = hash;
            return true;
          }
          return false;
        }
        function processNode(elt) {
          elt = resolveTarget(elt);
          if (eltIsDisabled(elt)) {
            cleanUpElement(elt);
            return;
          }
          const elementsToInit = [];
          if (maybeDeInitAndHash(elt)) {
            elementsToInit.push(elt);
          }
          forEach(findElementsToProcess(elt), function(child) {
            if (eltIsDisabled(child)) {
              cleanUpElement(child);
              return;
            }
            if (maybeDeInitAndHash(child)) {
              elementsToInit.push(child);
            }
          });
          forEach(findHxOnWildcardElements(elt), processHxOnWildcard);
          forEach(elementsToInit, initNode);
        }
        function kebabEventName(str2) {
          return str2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
        }
        function makeEvent(eventName, detail) {
          return new CustomEvent(eventName, { bubbles: true, cancelable: true, composed: true, detail });
        }
        function triggerErrorEvent(elt, eventName, detail) {
          triggerEvent(elt, eventName, mergeObjects({ error: eventName }, detail));
        }
        function ignoreEventForLogging(eventName) {
          return eventName === "htmx:afterProcessNode";
        }
        function withExtensions(elt, toDo, extensionsToIgnore) {
          forEach(getExtensions(elt, [], extensionsToIgnore), function(extension) {
            try {
              toDo(extension);
            } catch (e) {
              logError(e);
            }
          });
        }
        function logError(msg) {
          console.error(msg);
        }
        function triggerEvent(elt, eventName, detail) {
          elt = resolveTarget(elt);
          if (detail == null) {
            detail = {};
          }
          detail.elt = elt;
          const event2 = makeEvent(eventName, detail);
          if (htmx.logger && !ignoreEventForLogging(eventName)) {
            htmx.logger(elt, eventName, detail);
          }
          if (detail.error) {
            logError(detail.error);
            triggerEvent(elt, "htmx:error", { errorInfo: detail });
          }
          let eventResult = elt.dispatchEvent(event2);
          const kebabName = kebabEventName(eventName);
          if (eventResult && kebabName !== eventName) {
            const kebabedEvent = makeEvent(kebabName, event2.detail);
            eventResult = eventResult && elt.dispatchEvent(kebabedEvent);
          }
          withExtensions(asElement(elt), function(extension) {
            eventResult = eventResult && (extension.onEvent(eventName, event2) !== false && !event2.defaultPrevented);
          });
          return eventResult;
        }
        let currentPathForHistory;
        function setCurrentPathForHistory(path) {
          currentPathForHistory = path;
          if (canAccessLocalStorage()) {
            sessionStorage.setItem("htmx-current-path-for-history", path);
          }
        }
        setCurrentPathForHistory(location.pathname + location.search);
        function getHistoryElement() {
          const historyElt = getDocument().querySelector("[hx-history-elt],[data-hx-history-elt]");
          return historyElt || getDocument().body;
        }
        function saveToHistoryCache(url, rootElt) {
          if (!canAccessLocalStorage()) {
            return;
          }
          const innerHTML = cleanInnerHtmlForHistory(rootElt);
          const title = getDocument().title;
          const scroll = window.scrollY;
          if (htmx.config.historyCacheSize <= 0) {
            sessionStorage.removeItem("htmx-history-cache");
            return;
          }
          url = normalizePath(url);
          const historyCache = parseJSON(sessionStorage.getItem("htmx-history-cache")) || [];
          for (let i = 0; i < historyCache.length; i++) {
            if (historyCache[i].url === url) {
              historyCache.splice(i, 1);
              break;
            }
          }
          const newHistoryItem = { url, content: innerHTML, title, scroll };
          triggerEvent(getDocument().body, "htmx:historyItemCreated", { item: newHistoryItem, cache: historyCache });
          historyCache.push(newHistoryItem);
          while (historyCache.length > htmx.config.historyCacheSize) {
            historyCache.shift();
          }
          while (historyCache.length > 0) {
            try {
              sessionStorage.setItem("htmx-history-cache", JSON.stringify(historyCache));
              break;
            } catch (e) {
              triggerErrorEvent(getDocument().body, "htmx:historyCacheError", { cause: e, cache: historyCache });
              historyCache.shift();
            }
          }
        }
        function getCachedHistory(url) {
          if (!canAccessLocalStorage()) {
            return null;
          }
          url = normalizePath(url);
          const historyCache = parseJSON(sessionStorage.getItem("htmx-history-cache")) || [];
          for (let i = 0; i < historyCache.length; i++) {
            if (historyCache[i].url === url) {
              return historyCache[i];
            }
          }
          return null;
        }
        function cleanInnerHtmlForHistory(elt) {
          const className = htmx.config.requestClass;
          const clone = (
            /** @type Element */
            elt.cloneNode(true)
          );
          forEach(findAll(clone, "." + className), function(child) {
            removeClassFromElement(child, className);
          });
          forEach(findAll(clone, "[data-disabled-by-htmx]"), function(child) {
            child.removeAttribute("disabled");
          });
          return clone.innerHTML;
        }
        function saveCurrentPageToHistory() {
          const elt = getHistoryElement();
          let path = currentPathForHistory;
          if (canAccessLocalStorage()) {
            path = sessionStorage.getItem("htmx-current-path-for-history");
          }
          path = path || location.pathname + location.search;
          const disableHistoryCache = getDocument().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
          if (!disableHistoryCache) {
            triggerEvent(getDocument().body, "htmx:beforeHistorySave", { path, historyElt: elt });
            saveToHistoryCache(path, elt);
          }
          if (htmx.config.historyEnabled) history.replaceState({ htmx: true }, getDocument().title, location.href);
        }
        function pushUrlIntoHistory(path) {
          if (htmx.config.getCacheBusterParam) {
            path = path.replace(/org\.htmx\.cache-buster=[^&]*&?/, "");
            if (endsWith(path, "&") || endsWith(path, "?")) {
              path = path.slice(0, -1);
            }
          }
          if (htmx.config.historyEnabled) {
            history.pushState({ htmx: true }, "", path);
          }
          setCurrentPathForHistory(path);
        }
        function replaceUrlInHistory(path) {
          if (htmx.config.historyEnabled) history.replaceState({ htmx: true }, "", path);
          setCurrentPathForHistory(path);
        }
        function settleImmediately(tasks) {
          forEach(tasks, function(task) {
            task.call(void 0);
          });
        }
        function loadHistoryFromServer(path) {
          const request = new XMLHttpRequest();
          const swapSpec = { swapStyle: "innerHTML", swapDelay: 0, settleDelay: 0 };
          const details = { path, xhr: request, historyElt: getHistoryElement(), swapSpec };
          request.open("GET", path, true);
          if (htmx.config.historyRestoreAsHxRequest) {
            request.setRequestHeader("HX-Request", "true");
          }
          request.setRequestHeader("HX-History-Restore-Request", "true");
          request.setRequestHeader("HX-Current-URL", location.href);
          request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
              details.response = this.response;
              triggerEvent(getDocument().body, "htmx:historyCacheMissLoad", details);
              swap(details.historyElt, details.response, swapSpec, {
                contextElement: details.historyElt,
                historyRequest: true
              });
              setCurrentPathForHistory(details.path);
              triggerEvent(getDocument().body, "htmx:historyRestore", { path, cacheMiss: true, serverResponse: details.response });
            } else {
              triggerErrorEvent(getDocument().body, "htmx:historyCacheMissLoadError", details);
            }
          };
          if (triggerEvent(getDocument().body, "htmx:historyCacheMiss", details)) {
            request.send();
          }
        }
        function restoreHistory(path) {
          saveCurrentPageToHistory();
          path = path || location.pathname + location.search;
          const cached = getCachedHistory(path);
          if (cached) {
            const swapSpec = { swapStyle: "innerHTML", swapDelay: 0, settleDelay: 0, scroll: cached.scroll };
            const details = { path, item: cached, historyElt: getHistoryElement(), swapSpec };
            if (triggerEvent(getDocument().body, "htmx:historyCacheHit", details)) {
              swap(details.historyElt, cached.content, swapSpec, {
                contextElement: details.historyElt,
                title: cached.title
              });
              setCurrentPathForHistory(details.path);
              triggerEvent(getDocument().body, "htmx:historyRestore", details);
            }
          } else {
            if (htmx.config.refreshOnHistoryMiss) {
              htmx.location.reload(true);
            } else {
              loadHistoryFromServer(path);
            }
          }
        }
        function addRequestIndicatorClasses(elt) {
          let indicators = (
            /** @type Element[] */
            findAttributeTargets(elt, "hx-indicator")
          );
          if (indicators == null) {
            indicators = [elt];
          }
          forEach(indicators, function(ic) {
            const internalData = getInternalData(ic);
            internalData.requestCount = (internalData.requestCount || 0) + 1;
            ic.classList.add.call(ic.classList, htmx.config.requestClass);
          });
          return indicators;
        }
        function disableElements(elt) {
          let disabledElts = (
            /** @type Element[] */
            findAttributeTargets(elt, "hx-disabled-elt")
          );
          if (disabledElts == null) {
            disabledElts = [];
          }
          forEach(disabledElts, function(disabledElement) {
            const internalData = getInternalData(disabledElement);
            internalData.requestCount = (internalData.requestCount || 0) + 1;
            disabledElement.setAttribute("disabled", "");
            disabledElement.setAttribute("data-disabled-by-htmx", "");
          });
          return disabledElts;
        }
        function removeRequestIndicators(indicators, disabled) {
          forEach(indicators.concat(disabled), function(ele) {
            const internalData = getInternalData(ele);
            internalData.requestCount = (internalData.requestCount || 1) - 1;
          });
          forEach(indicators, function(ic) {
            const internalData = getInternalData(ic);
            if (internalData.requestCount === 0) {
              ic.classList.remove.call(ic.classList, htmx.config.requestClass);
            }
          });
          forEach(disabled, function(disabledElement) {
            const internalData = getInternalData(disabledElement);
            if (internalData.requestCount === 0) {
              disabledElement.removeAttribute("disabled");
              disabledElement.removeAttribute("data-disabled-by-htmx");
            }
          });
        }
        function haveSeenNode(processed, elt) {
          for (let i = 0; i < processed.length; i++) {
            const node = processed[i];
            if (node.isSameNode(elt)) {
              return true;
            }
          }
          return false;
        }
        function shouldInclude(element) {
          const elt = (
            /** @type {HTMLInputElement} */
            element
          );
          if (elt.name === "" || elt.name == null || elt.disabled || closest(elt, "fieldset[disabled]")) {
            return false;
          }
          if (elt.type === "button" || elt.type === "submit" || elt.tagName === "image" || elt.tagName === "reset" || elt.tagName === "file") {
            return false;
          }
          if (elt.type === "checkbox" || elt.type === "radio") {
            return elt.checked;
          }
          return true;
        }
        function addValueToFormData(name, value, formData) {
          if (name != null && value != null) {
            if (Array.isArray(value)) {
              value.forEach(function(v) {
                formData.append(name, v);
              });
            } else {
              formData.append(name, value);
            }
          }
        }
        function removeValueFromFormData(name, value, formData) {
          if (name != null && value != null) {
            let values = formData.getAll(name);
            if (Array.isArray(value)) {
              values = values.filter((v) => value.indexOf(v) < 0);
            } else {
              values = values.filter((v) => v !== value);
            }
            formData.delete(name);
            forEach(values, (v) => formData.append(name, v));
          }
        }
        function getValueFromInput(elt) {
          if (elt instanceof HTMLSelectElement && elt.multiple) {
            return toArray(elt.querySelectorAll("option:checked")).map(function(e) {
              return (
                /** @type HTMLOptionElement */
                e.value
              );
            });
          }
          if (elt instanceof HTMLInputElement && elt.files) {
            return toArray(elt.files);
          }
          return elt.value;
        }
        function processInputValue(processed, formData, errors, elt, validate) {
          if (elt == null || haveSeenNode(processed, elt)) {
            return;
          } else {
            processed.push(elt);
          }
          if (shouldInclude(elt)) {
            const name = getRawAttribute(elt, "name");
            addValueToFormData(name, getValueFromInput(elt), formData);
            if (validate) {
              validateElement(elt, errors);
            }
          }
          if (elt instanceof HTMLFormElement) {
            forEach(elt.elements, function(input) {
              if (processed.indexOf(input) >= 0) {
                removeValueFromFormData(input.name, getValueFromInput(input), formData);
              } else {
                processed.push(input);
              }
              if (validate) {
                validateElement(input, errors);
              }
            });
            new FormData(elt).forEach(function(value, name) {
              if (value instanceof File && value.name === "") {
                return;
              }
              addValueToFormData(name, value, formData);
            });
          }
        }
        function validateElement(elt, errors) {
          const element = (
            /** @type {HTMLElement & ElementInternals} */
            elt
          );
          if (element.willValidate) {
            triggerEvent(element, "htmx:validation:validate");
            if (!element.checkValidity()) {
              if (triggerEvent(element, "htmx:validation:failed", {
                message: element.validationMessage,
                validity: element.validity
              }) && !errors.length && htmx.config.reportValidityOfForms) {
                element.reportValidity();
              }
              errors.push({ elt: element, message: element.validationMessage, validity: element.validity });
            }
          }
        }
        function overrideFormData(receiver, donor) {
          for (const key of donor.keys()) {
            receiver.delete(key);
          }
          donor.forEach(function(value, key) {
            receiver.append(key, value);
          });
          return receiver;
        }
        function getInputValues(elt, verb) {
          const processed = [];
          const formData = new FormData();
          const priorityFormData = new FormData();
          const errors = [];
          const internalData = getInternalData(elt);
          if (internalData.lastButtonClicked && !bodyContains(internalData.lastButtonClicked)) {
            internalData.lastButtonClicked = null;
          }
          let validate = elt instanceof HTMLFormElement && elt.noValidate !== true || getAttributeValue(elt, "hx-validate") === "true";
          if (internalData.lastButtonClicked) {
            validate = validate && internalData.lastButtonClicked.formNoValidate !== true;
          }
          if (verb !== "get") {
            processInputValue(processed, priorityFormData, errors, getRelatedForm(elt), validate);
          }
          processInputValue(processed, formData, errors, elt, validate);
          if (internalData.lastButtonClicked || elt.tagName === "BUTTON" || elt.tagName === "INPUT" && getRawAttribute(elt, "type") === "submit") {
            const button = internalData.lastButtonClicked || /** @type HTMLInputElement|HTMLButtonElement */
            elt;
            const name = getRawAttribute(button, "name");
            addValueToFormData(name, button.value, priorityFormData);
          }
          const includes = findAttributeTargets(elt, "hx-include");
          forEach(includes, function(node) {
            processInputValue(processed, formData, errors, asElement(node), validate);
            if (!matches(node, "form")) {
              forEach(asParentNode(node).querySelectorAll(INPUT_SELECTOR), function(descendant) {
                processInputValue(processed, formData, errors, descendant, validate);
              });
            }
          });
          overrideFormData(formData, priorityFormData);
          return { errors, formData, values: formDataProxy(formData) };
        }
        function appendParam(returnStr, name, realValue) {
          if (returnStr !== "") {
            returnStr += "&";
          }
          if (String(realValue) === "[object Object]") {
            realValue = JSON.stringify(realValue);
          }
          const s = encodeURIComponent(realValue);
          returnStr += encodeURIComponent(name) + "=" + s;
          return returnStr;
        }
        function urlEncode(values) {
          values = formDataFromObject(values);
          let returnStr = "";
          values.forEach(function(value, key) {
            returnStr = appendParam(returnStr, key, value);
          });
          return returnStr;
        }
        function getHeaders(elt, target, prompt2) {
          const headers = {
            "HX-Request": "true",
            "HX-Trigger": getRawAttribute(elt, "id"),
            "HX-Trigger-Name": getRawAttribute(elt, "name"),
            "HX-Target": getAttributeValue(target, "id"),
            "HX-Current-URL": location.href
          };
          getValuesForElement(elt, "hx-headers", false, headers);
          if (prompt2 !== void 0) {
            headers["HX-Prompt"] = prompt2;
          }
          if (getInternalData(elt).boosted) {
            headers["HX-Boosted"] = "true";
          }
          return headers;
        }
        function filterValues(inputValues, elt) {
          const paramsValue = getClosestAttributeValue(elt, "hx-params");
          if (paramsValue) {
            if (paramsValue === "none") {
              return new FormData();
            } else if (paramsValue === "*") {
              return inputValues;
            } else if (paramsValue.indexOf("not ") === 0) {
              forEach(paramsValue.slice(4).split(","), function(name) {
                name = name.trim();
                inputValues.delete(name);
              });
              return inputValues;
            } else {
              const newValues = new FormData();
              forEach(paramsValue.split(","), function(name) {
                name = name.trim();
                if (inputValues.has(name)) {
                  inputValues.getAll(name).forEach(function(value) {
                    newValues.append(name, value);
                  });
                }
              });
              return newValues;
            }
          } else {
            return inputValues;
          }
        }
        function isAnchorLink(elt) {
          return !!getRawAttribute(elt, "href") && getRawAttribute(elt, "href").indexOf("#") >= 0;
        }
        function getSwapSpecification(elt, swapInfoOverride) {
          const swapInfo = swapInfoOverride || getClosestAttributeValue(elt, "hx-swap");
          const swapSpec = {
            swapStyle: getInternalData(elt).boosted ? "innerHTML" : htmx.config.defaultSwapStyle,
            swapDelay: htmx.config.defaultSwapDelay,
            settleDelay: htmx.config.defaultSettleDelay
          };
          if (htmx.config.scrollIntoViewOnBoost && getInternalData(elt).boosted && !isAnchorLink(elt)) {
            swapSpec.show = "top";
          }
          if (swapInfo) {
            const split = splitOnWhitespace(swapInfo);
            if (split.length > 0) {
              for (let i = 0; i < split.length; i++) {
                const value = split[i];
                if (value.indexOf("swap:") === 0) {
                  swapSpec.swapDelay = parseInterval(value.slice(5));
                } else if (value.indexOf("settle:") === 0) {
                  swapSpec.settleDelay = parseInterval(value.slice(7));
                } else if (value.indexOf("transition:") === 0) {
                  swapSpec.transition = value.slice(11) === "true";
                } else if (value.indexOf("ignoreTitle:") === 0) {
                  swapSpec.ignoreTitle = value.slice(12) === "true";
                } else if (value.indexOf("scroll:") === 0) {
                  const scrollSpec = value.slice(7);
                  var splitSpec = scrollSpec.split(":");
                  const scrollVal = splitSpec.pop();
                  var selectorVal = splitSpec.length > 0 ? splitSpec.join(":") : null;
                  swapSpec.scroll = scrollVal;
                  swapSpec.scrollTarget = selectorVal;
                } else if (value.indexOf("show:") === 0) {
                  const showSpec = value.slice(5);
                  var splitSpec = showSpec.split(":");
                  const showVal = splitSpec.pop();
                  var selectorVal = splitSpec.length > 0 ? splitSpec.join(":") : null;
                  swapSpec.show = showVal;
                  swapSpec.showTarget = selectorVal;
                } else if (value.indexOf("focus-scroll:") === 0) {
                  const focusScrollVal = value.slice("focus-scroll:".length);
                  swapSpec.focusScroll = focusScrollVal == "true";
                } else if (i == 0) {
                  swapSpec.swapStyle = value;
                } else {
                  logError("Unknown modifier in hx-swap: " + value);
                }
              }
            }
          }
          return swapSpec;
        }
        function usesFormData(elt) {
          return getClosestAttributeValue(elt, "hx-encoding") === "multipart/form-data" || matches(elt, "form") && getRawAttribute(elt, "enctype") === "multipart/form-data";
        }
        function encodeParamsForBody(xhr, elt, filteredParameters) {
          let encodedParameters = null;
          withExtensions(elt, function(extension) {
            if (encodedParameters == null) {
              encodedParameters = extension.encodeParameters(xhr, filteredParameters, elt);
            }
          });
          if (encodedParameters != null) {
            return encodedParameters;
          } else {
            if (usesFormData(elt)) {
              return overrideFormData(new FormData(), formDataFromObject(filteredParameters));
            } else {
              return urlEncode(filteredParameters);
            }
          }
        }
        function makeSettleInfo(target) {
          return { tasks: [], elts: [target] };
        }
        function updateScrollState(content, swapSpec) {
          const first = content[0];
          const last = content[content.length - 1];
          if (swapSpec.scroll) {
            var target = null;
            if (swapSpec.scrollTarget) {
              target = asElement(querySelectorExt(first, swapSpec.scrollTarget));
            }
            if (swapSpec.scroll === "top" && (first || target)) {
              target = target || first;
              target.scrollTop = 0;
            }
            if (swapSpec.scroll === "bottom" && (last || target)) {
              target = target || last;
              target.scrollTop = target.scrollHeight;
            }
            if (typeof swapSpec.scroll === "number") {
              getWindow().setTimeout(function() {
                window.scrollTo(
                  0,
                  /** @type number */
                  swapSpec.scroll
                );
              }, 0);
            }
          }
          if (swapSpec.show) {
            var target = null;
            if (swapSpec.showTarget) {
              let targetStr = swapSpec.showTarget;
              if (swapSpec.showTarget === "window") {
                targetStr = "body";
              }
              target = asElement(querySelectorExt(first, targetStr));
            }
            if (swapSpec.show === "top" && (first || target)) {
              target = target || first;
              target.scrollIntoView({ block: "start", behavior: htmx.config.scrollBehavior });
            }
            if (swapSpec.show === "bottom" && (last || target)) {
              target = target || last;
              target.scrollIntoView({ block: "end", behavior: htmx.config.scrollBehavior });
            }
          }
        }
        function getValuesForElement(elt, attr, evalAsDefault, values, event2) {
          if (values == null) {
            values = {};
          }
          if (elt == null) {
            return values;
          }
          const attributeValue = getAttributeValue(elt, attr);
          if (attributeValue) {
            let str2 = attributeValue.trim();
            let evaluateValue = evalAsDefault;
            if (str2 === "unset") {
              return null;
            }
            if (str2.indexOf("javascript:") === 0) {
              str2 = str2.slice(11);
              evaluateValue = true;
            } else if (str2.indexOf("js:") === 0) {
              str2 = str2.slice(3);
              evaluateValue = true;
            }
            if (str2.indexOf("{") !== 0) {
              str2 = "{" + str2 + "}";
            }
            let varsValues;
            if (evaluateValue) {
              varsValues = maybeEval(elt, function() {
                if (event2) {
                  return Function("event", "return (" + str2 + ")").call(elt, event2);
                } else {
                  return Function("return (" + str2 + ")").call(elt);
                }
              }, {});
            } else {
              varsValues = parseJSON(str2);
            }
            for (const key in varsValues) {
              if (varsValues.hasOwnProperty(key)) {
                if (values[key] == null) {
                  values[key] = varsValues[key];
                }
              }
            }
          }
          return getValuesForElement(asElement(parentElt(elt)), attr, evalAsDefault, values, event2);
        }
        function maybeEval(elt, toEval, defaultVal) {
          if (htmx.config.allowEval) {
            return toEval();
          } else {
            triggerErrorEvent(elt, "htmx:evalDisallowedError");
            return defaultVal;
          }
        }
        function getHXVarsForElement(elt, event2, expressionVars) {
          return getValuesForElement(elt, "hx-vars", true, expressionVars, event2);
        }
        function getHXValsForElement(elt, event2, expressionVars) {
          return getValuesForElement(elt, "hx-vals", false, expressionVars, event2);
        }
        function getExpressionVars(elt, event2) {
          return mergeObjects(getHXVarsForElement(elt, event2), getHXValsForElement(elt, event2));
        }
        function safelySetHeaderValue(xhr, header, headerValue) {
          if (headerValue !== null) {
            try {
              xhr.setRequestHeader(header, headerValue);
            } catch (e) {
              xhr.setRequestHeader(header, encodeURIComponent(headerValue));
              xhr.setRequestHeader(header + "-URI-AutoEncoded", "true");
            }
          }
        }
        function getPathFromResponse(xhr) {
          if (xhr.responseURL) {
            try {
              const url = new URL(xhr.responseURL);
              return url.pathname + url.search;
            } catch (e) {
              triggerErrorEvent(getDocument().body, "htmx:badResponseUrl", { url: xhr.responseURL });
            }
          }
        }
        function hasHeader(xhr, regexp) {
          return regexp.test(xhr.getAllResponseHeaders());
        }
        function ajaxHelper(verb, path, context) {
          verb = /** @type HttpVerb */
          verb.toLowerCase();
          if (context) {
            if (context instanceof Element || typeof context === "string") {
              return issueAjaxRequest(verb, path, null, null, {
                targetOverride: resolveTarget(context) || DUMMY_ELT,
                returnPromise: true
              });
            } else {
              let resolvedTarget = resolveTarget(context.target);
              if (context.target && !resolvedTarget || context.source && !resolvedTarget && !resolveTarget(context.source)) {
                resolvedTarget = DUMMY_ELT;
              }
              return issueAjaxRequest(
                verb,
                path,
                resolveTarget(context.source),
                context.event,
                {
                  handler: context.handler,
                  headers: context.headers,
                  values: context.values,
                  targetOverride: resolvedTarget,
                  swapOverride: context.swap,
                  select: context.select,
                  returnPromise: true,
                  push: context.push,
                  replace: context.replace,
                  selectOOB: context.selectOOB
                }
              );
            }
          } else {
            return issueAjaxRequest(verb, path, null, null, {
              returnPromise: true
            });
          }
        }
        function hierarchyForElt(elt) {
          const arr = [];
          while (elt) {
            arr.push(elt);
            elt = elt.parentElement;
          }
          return arr;
        }
        function verifyPath(elt, path, requestConfig) {
          const url = new URL(path, location.protocol !== "about:" ? location.href : window.origin);
          const origin = location.protocol !== "about:" ? location.origin : window.origin;
          const sameHost = origin === url.origin;
          if (htmx.config.selfRequestsOnly) {
            if (!sameHost) {
              return false;
            }
          }
          return triggerEvent(elt, "htmx:validateUrl", mergeObjects({ url, sameHost }, requestConfig));
        }
        function formDataFromObject(obj) {
          if (obj instanceof FormData) return obj;
          const formData = new FormData();
          for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
              if (obj[key] && typeof obj[key].forEach === "function") {
                obj[key].forEach(function(v) {
                  formData.append(key, v);
                });
              } else if (typeof obj[key] === "object" && !(obj[key] instanceof Blob)) {
                formData.append(key, JSON.stringify(obj[key]));
              } else {
                formData.append(key, obj[key]);
              }
            }
          }
          return formData;
        }
        function formDataArrayProxy(formData, name, array) {
          return new Proxy(array, {
            get: function(target, key) {
              if (typeof key === "number") return target[key];
              if (key === "length") return target.length;
              if (key === "push") {
                return function(value) {
                  target.push(value);
                  formData.append(name, value);
                };
              }
              if (typeof target[key] === "function") {
                return function() {
                  target[key].apply(target, arguments);
                  formData.delete(name);
                  target.forEach(function(v) {
                    formData.append(name, v);
                  });
                };
              }
              if (target[key] && target[key].length === 1) {
                return target[key][0];
              } else {
                return target[key];
              }
            },
            set: function(target, index, value) {
              target[index] = value;
              formData.delete(name);
              target.forEach(function(v) {
                formData.append(name, v);
              });
              return true;
            }
          });
        }
        function formDataProxy(formData) {
          return new Proxy(formData, {
            get: function(target, name) {
              if (typeof name === "symbol") {
                const result = Reflect.get(target, name);
                if (typeof result === "function") {
                  return function() {
                    return result.apply(formData, arguments);
                  };
                } else {
                  return result;
                }
              }
              if (name === "toJSON") {
                return () => Object.fromEntries(formData);
              }
              if (name in target) {
                if (typeof target[name] === "function") {
                  return function() {
                    return formData[name].apply(formData, arguments);
                  };
                }
              }
              const array = formData.getAll(name);
              if (array.length === 0) {
                return void 0;
              } else if (array.length === 1) {
                return array[0];
              } else {
                return formDataArrayProxy(target, name, array);
              }
            },
            set: function(target, name, value) {
              if (typeof name !== "string") {
                return false;
              }
              target.delete(name);
              if (value && typeof value.forEach === "function") {
                value.forEach(function(v) {
                  target.append(name, v);
                });
              } else if (typeof value === "object" && !(value instanceof Blob)) {
                target.append(name, JSON.stringify(value));
              } else {
                target.append(name, value);
              }
              return true;
            },
            deleteProperty: function(target, name) {
              if (typeof name === "string") {
                target.delete(name);
              }
              return true;
            },
            // Support Object.assign call from proxy
            ownKeys: function(target) {
              return Reflect.ownKeys(Object.fromEntries(target));
            },
            getOwnPropertyDescriptor: function(target, prop) {
              return Reflect.getOwnPropertyDescriptor(Object.fromEntries(target), prop);
            }
          });
        }
        function issueAjaxRequest(verb, path, elt, event2, etc, confirmed) {
          let resolve = null;
          let reject = null;
          etc = etc != null ? etc : {};
          if (etc.returnPromise && typeof Promise !== "undefined") {
            var promise = new Promise(function(_resolve, _reject) {
              resolve = _resolve;
              reject = _reject;
            });
          }
          if (elt == null) {
            elt = getDocument().body;
          }
          const responseHandler = etc.handler || handleAjaxResponse;
          const select = etc.select || null;
          if (!bodyContains(elt)) {
            maybeCall(resolve);
            return promise;
          }
          const target = etc.targetOverride || asElement(getTarget(elt));
          if (target == null || target == DUMMY_ELT) {
            triggerErrorEvent(elt, "htmx:targetError", { target: getClosestAttributeValue(elt, "hx-target") });
            maybeCall(reject);
            return promise;
          }
          let eltData = getInternalData(elt);
          const submitter = eltData.lastButtonClicked;
          if (submitter) {
            const buttonPath = getRawAttribute(submitter, "formaction");
            if (buttonPath != null) {
              path = buttonPath;
            }
            const buttonVerb = getRawAttribute(submitter, "formmethod");
            if (buttonVerb != null) {
              if (VERBS.includes(buttonVerb.toLowerCase())) {
                verb = /** @type HttpVerb */
                buttonVerb;
              } else {
                maybeCall(resolve);
                return promise;
              }
            }
          }
          const confirmQuestion = getClosestAttributeValue(elt, "hx-confirm");
          if (confirmed === void 0) {
            const issueRequest = function(skipConfirmation) {
              return issueAjaxRequest(verb, path, elt, event2, etc, !!skipConfirmation);
            };
            const confirmDetails = { target, elt, path, verb, triggeringEvent: event2, etc, issueRequest, question: confirmQuestion };
            if (triggerEvent(elt, "htmx:confirm", confirmDetails) === false) {
              maybeCall(resolve);
              return promise;
            }
          }
          let syncElt = elt;
          let syncStrategy = getClosestAttributeValue(elt, "hx-sync");
          let queueStrategy = null;
          let abortable = false;
          if (syncStrategy) {
            const syncStrings = syncStrategy.split(":");
            const selector = syncStrings[0].trim();
            if (selector === "this") {
              syncElt = findThisElement(elt, "hx-sync");
            } else {
              syncElt = asElement(querySelectorExt(elt, selector));
            }
            syncStrategy = (syncStrings[1] || "drop").trim();
            eltData = getInternalData(syncElt);
            if (syncStrategy === "drop" && eltData.xhr && eltData.abortable !== true) {
              maybeCall(resolve);
              return promise;
            } else if (syncStrategy === "abort") {
              if (eltData.xhr) {
                maybeCall(resolve);
                return promise;
              } else {
                abortable = true;
              }
            } else if (syncStrategy === "replace") {
              triggerEvent(syncElt, "htmx:abort");
            } else if (syncStrategy.indexOf("queue") === 0) {
              const queueStrArray = syncStrategy.split(" ");
              queueStrategy = (queueStrArray[1] || "last").trim();
            }
          }
          if (eltData.xhr) {
            if (eltData.abortable) {
              triggerEvent(syncElt, "htmx:abort");
            } else {
              if (queueStrategy == null) {
                if (event2) {
                  const eventData = getInternalData(event2);
                  if (eventData && eventData.triggerSpec && eventData.triggerSpec.queue) {
                    queueStrategy = eventData.triggerSpec.queue;
                  }
                }
                if (queueStrategy == null) {
                  queueStrategy = "last";
                }
              }
              if (eltData.queuedRequests == null) {
                eltData.queuedRequests = [];
              }
              if (queueStrategy === "first" && eltData.queuedRequests.length === 0) {
                eltData.queuedRequests.push(function() {
                  issueAjaxRequest(verb, path, elt, event2, etc);
                });
              } else if (queueStrategy === "all") {
                eltData.queuedRequests.push(function() {
                  issueAjaxRequest(verb, path, elt, event2, etc);
                });
              } else if (queueStrategy === "last") {
                eltData.queuedRequests = [];
                eltData.queuedRequests.push(function() {
                  issueAjaxRequest(verb, path, elt, event2, etc);
                });
              }
              maybeCall(resolve);
              return promise;
            }
          }
          const xhr = new XMLHttpRequest();
          eltData.xhr = xhr;
          eltData.abortable = abortable;
          const endRequestLock = function() {
            eltData.xhr = null;
            eltData.abortable = false;
            if (eltData.queuedRequests != null && eltData.queuedRequests.length > 0) {
              const queuedRequest = eltData.queuedRequests.shift();
              queuedRequest();
            }
          };
          const promptQuestion = getClosestAttributeValue(elt, "hx-prompt");
          if (promptQuestion) {
            var promptResponse = prompt(promptQuestion);
            if (promptResponse === null || !triggerEvent(elt, "htmx:prompt", { prompt: promptResponse, target })) {
              maybeCall(resolve);
              endRequestLock();
              return promise;
            }
          }
          if (confirmQuestion && !confirmed) {
            if (!confirm(confirmQuestion)) {
              maybeCall(resolve);
              endRequestLock();
              return promise;
            }
          }
          let headers = getHeaders(elt, target, promptResponse);
          if (verb !== "get" && !usesFormData(elt)) {
            headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
          if (etc.headers) {
            headers = mergeObjects(headers, etc.headers);
          }
          const results = getInputValues(elt, verb);
          let errors = results.errors;
          const rawFormData = results.formData;
          if (etc.values) {
            overrideFormData(rawFormData, formDataFromObject(etc.values));
          }
          const expressionVars = formDataFromObject(getExpressionVars(elt, event2));
          const allFormData = overrideFormData(rawFormData, expressionVars);
          let filteredFormData = filterValues(allFormData, elt);
          if (htmx.config.getCacheBusterParam && verb === "get") {
            filteredFormData.set("org.htmx.cache-buster", getRawAttribute(target, "id") || "true");
          }
          if (path == null || path === "") {
            path = location.href;
          }
          const requestAttrValues = getValuesForElement(elt, "hx-request");
          const eltIsBoosted = getInternalData(elt).boosted;
          let useUrlParams = htmx.config.methodsThatUseUrlParams.indexOf(verb) >= 0;
          const requestConfig = {
            boosted: eltIsBoosted,
            useUrlParams,
            formData: filteredFormData,
            parameters: formDataProxy(filteredFormData),
            unfilteredFormData: allFormData,
            unfilteredParameters: formDataProxy(allFormData),
            headers,
            elt,
            target,
            verb,
            errors,
            withCredentials: etc.credentials || requestAttrValues.credentials || htmx.config.withCredentials,
            timeout: etc.timeout || requestAttrValues.timeout || htmx.config.timeout,
            path,
            triggeringEvent: event2
          };
          if (!triggerEvent(elt, "htmx:configRequest", requestConfig)) {
            maybeCall(resolve);
            endRequestLock();
            return promise;
          }
          path = requestConfig.path;
          verb = requestConfig.verb;
          headers = requestConfig.headers;
          filteredFormData = formDataFromObject(requestConfig.parameters);
          errors = requestConfig.errors;
          useUrlParams = requestConfig.useUrlParams;
          if (errors && errors.length > 0) {
            triggerEvent(elt, "htmx:validation:halted", requestConfig);
            maybeCall(resolve);
            endRequestLock();
            return promise;
          }
          const splitPath = path.split("#");
          const pathNoAnchor = splitPath[0];
          const anchor = splitPath[1];
          let finalPath = path;
          if (useUrlParams) {
            finalPath = pathNoAnchor;
            const hasValues = !filteredFormData.keys().next().done;
            if (hasValues) {
              if (finalPath.indexOf("?") < 0) {
                finalPath += "?";
              } else {
                finalPath += "&";
              }
              finalPath += urlEncode(filteredFormData);
              if (anchor) {
                finalPath += "#" + anchor;
              }
            }
          }
          if (!verifyPath(elt, finalPath, requestConfig)) {
            triggerErrorEvent(elt, "htmx:invalidPath", requestConfig);
            maybeCall(reject);
            endRequestLock();
            return promise;
          }
          xhr.open(verb.toUpperCase(), finalPath, true);
          xhr.overrideMimeType("text/html");
          xhr.withCredentials = requestConfig.withCredentials;
          xhr.timeout = requestConfig.timeout;
          if (requestAttrValues.noHeaders) {
          } else {
            for (const header in headers) {
              if (headers.hasOwnProperty(header)) {
                const headerValue = headers[header];
                safelySetHeaderValue(xhr, header, headerValue);
              }
            }
          }
          const responseInfo = {
            xhr,
            target,
            requestConfig,
            etc,
            boosted: eltIsBoosted,
            select,
            pathInfo: {
              requestPath: path,
              finalRequestPath: finalPath,
              responsePath: null,
              anchor
            }
          };
          xhr.onload = function() {
            try {
              const hierarchy = hierarchyForElt(elt);
              responseInfo.pathInfo.responsePath = getPathFromResponse(xhr);
              responseHandler(elt, responseInfo);
              if (responseInfo.keepIndicators !== true) {
                removeRequestIndicators(indicators, disableElts);
              }
              triggerEvent(elt, "htmx:afterRequest", responseInfo);
              triggerEvent(elt, "htmx:afterOnLoad", responseInfo);
              if (!bodyContains(elt)) {
                let secondaryTriggerElt = null;
                while (hierarchy.length > 0 && secondaryTriggerElt == null) {
                  const parentEltInHierarchy = hierarchy.shift();
                  if (bodyContains(parentEltInHierarchy)) {
                    secondaryTriggerElt = parentEltInHierarchy;
                  }
                }
                if (secondaryTriggerElt) {
                  triggerEvent(secondaryTriggerElt, "htmx:afterRequest", responseInfo);
                  triggerEvent(secondaryTriggerElt, "htmx:afterOnLoad", responseInfo);
                }
              }
              maybeCall(resolve);
            } catch (e) {
              triggerErrorEvent(elt, "htmx:onLoadError", mergeObjects({ error: e }, responseInfo));
              throw e;
            } finally {
              endRequestLock();
            }
          };
          xhr.onerror = function() {
            removeRequestIndicators(indicators, disableElts);
            triggerErrorEvent(elt, "htmx:afterRequest", responseInfo);
            triggerErrorEvent(elt, "htmx:sendError", responseInfo);
            maybeCall(reject);
            endRequestLock();
          };
          xhr.onabort = function() {
            removeRequestIndicators(indicators, disableElts);
            triggerErrorEvent(elt, "htmx:afterRequest", responseInfo);
            triggerErrorEvent(elt, "htmx:sendAbort", responseInfo);
            maybeCall(reject);
            endRequestLock();
          };
          xhr.ontimeout = function() {
            removeRequestIndicators(indicators, disableElts);
            triggerErrorEvent(elt, "htmx:afterRequest", responseInfo);
            triggerErrorEvent(elt, "htmx:timeout", responseInfo);
            maybeCall(reject);
            endRequestLock();
          };
          if (!triggerEvent(elt, "htmx:beforeRequest", responseInfo)) {
            maybeCall(resolve);
            endRequestLock();
            return promise;
          }
          var indicators = addRequestIndicatorClasses(elt);
          var disableElts = disableElements(elt);
          forEach(["loadstart", "loadend", "progress", "abort"], function(eventName) {
            forEach([xhr, xhr.upload], function(target2) {
              target2.addEventListener(eventName, function(event3) {
                triggerEvent(elt, "htmx:xhr:" + eventName, {
                  lengthComputable: event3.lengthComputable,
                  loaded: event3.loaded,
                  total: event3.total
                });
              });
            });
          });
          triggerEvent(elt, "htmx:beforeSend", responseInfo);
          const params = useUrlParams ? null : encodeParamsForBody(xhr, elt, filteredFormData);
          xhr.send(params);
          return promise;
        }
        function determineHistoryUpdates(elt, responseInfo) {
          const xhr = responseInfo.xhr;
          let pathFromHeaders = null;
          let typeFromHeaders = null;
          if (hasHeader(xhr, /HX-Push:/i)) {
            pathFromHeaders = xhr.getResponseHeader("HX-Push");
            typeFromHeaders = "push";
          } else if (hasHeader(xhr, /HX-Push-Url:/i)) {
            pathFromHeaders = xhr.getResponseHeader("HX-Push-Url");
            typeFromHeaders = "push";
          } else if (hasHeader(xhr, /HX-Replace-Url:/i)) {
            pathFromHeaders = xhr.getResponseHeader("HX-Replace-Url");
            typeFromHeaders = "replace";
          }
          if (pathFromHeaders) {
            if (pathFromHeaders === "false") {
              return {};
            } else {
              return {
                type: typeFromHeaders,
                path: pathFromHeaders
              };
            }
          }
          const requestPath = responseInfo.pathInfo.finalRequestPath;
          const responsePath = responseInfo.pathInfo.responsePath;
          const pushUrl = responseInfo.etc.push || getClosestAttributeValue(elt, "hx-push-url");
          const replaceUrl = responseInfo.etc.replace || getClosestAttributeValue(elt, "hx-replace-url");
          const elementIsBoosted = getInternalData(elt).boosted;
          let saveType = null;
          let path = null;
          if (pushUrl) {
            saveType = "push";
            path = pushUrl;
          } else if (replaceUrl) {
            saveType = "replace";
            path = replaceUrl;
          } else if (elementIsBoosted) {
            saveType = "push";
            path = responsePath || requestPath;
          }
          if (path) {
            if (path === "false") {
              return {};
            }
            if (path === "true") {
              path = responsePath || requestPath;
            }
            if (responseInfo.pathInfo.anchor && path.indexOf("#") === -1) {
              path = path + "#" + responseInfo.pathInfo.anchor;
            }
            return {
              type: saveType,
              path
            };
          } else {
            return {};
          }
        }
        function codeMatches(responseHandlingConfig, status) {
          var regExp = new RegExp(responseHandlingConfig.code);
          return regExp.test(status.toString(10));
        }
        function resolveResponseHandling(xhr) {
          for (var i = 0; i < htmx.config.responseHandling.length; i++) {
            var responseHandlingElement = htmx.config.responseHandling[i];
            if (codeMatches(responseHandlingElement, xhr.status)) {
              return responseHandlingElement;
            }
          }
          return {
            swap: false
          };
        }
        function handleTitle(title) {
          if (title) {
            const titleElt = find("title");
            if (titleElt) {
              titleElt.textContent = title;
            } else {
              window.document.title = title;
            }
          }
        }
        function resolveRetarget(elt, target) {
          if (target === "this") {
            return elt;
          }
          const resolvedTarget = asElement(querySelectorExt(elt, target));
          if (resolvedTarget == null) {
            triggerErrorEvent(elt, "htmx:targetError", { target });
            throw new Error("Invalid re-target ".concat(target));
          }
          return resolvedTarget;
        }
        function handleAjaxResponse(elt, responseInfo) {
          const xhr = responseInfo.xhr;
          let target = responseInfo.target;
          const etc = responseInfo.etc;
          const responseInfoSelect = responseInfo.select;
          if (!triggerEvent(elt, "htmx:beforeOnLoad", responseInfo)) return;
          if (hasHeader(xhr, /HX-Trigger:/i)) {
            handleTriggerHeader(xhr, "HX-Trigger", elt);
          }
          if (hasHeader(xhr, /HX-Location:/i)) {
            let redirectPath = xhr.getResponseHeader("HX-Location");
            var redirectSwapSpec = {};
            if (redirectPath.indexOf("{") === 0) {
              redirectSwapSpec = parseJSON(redirectPath);
              redirectPath = redirectSwapSpec.path;
              delete redirectSwapSpec.path;
            }
            redirectSwapSpec.push = redirectSwapSpec.push || "true";
            ajaxHelper("get", redirectPath, redirectSwapSpec);
            return;
          }
          const shouldRefresh = hasHeader(xhr, /HX-Refresh:/i) && xhr.getResponseHeader("HX-Refresh") === "true";
          if (hasHeader(xhr, /HX-Redirect:/i)) {
            responseInfo.keepIndicators = true;
            htmx.location.href = xhr.getResponseHeader("HX-Redirect");
            shouldRefresh && htmx.location.reload();
            return;
          }
          if (shouldRefresh) {
            responseInfo.keepIndicators = true;
            htmx.location.reload();
            return;
          }
          const historyUpdate = determineHistoryUpdates(elt, responseInfo);
          const responseHandling = resolveResponseHandling(xhr);
          const shouldSwap = responseHandling.swap;
          let isError = !!responseHandling.error;
          let ignoreTitle = htmx.config.ignoreTitle || responseHandling.ignoreTitle;
          let selectOverride = responseHandling.select;
          if (responseHandling.target) {
            responseInfo.target = resolveRetarget(elt, responseHandling.target);
          }
          var swapOverride = etc.swapOverride;
          if (swapOverride == null && responseHandling.swapOverride) {
            swapOverride = responseHandling.swapOverride;
          }
          if (hasHeader(xhr, /HX-Retarget:/i)) {
            responseInfo.target = resolveRetarget(elt, xhr.getResponseHeader("HX-Retarget"));
          }
          if (hasHeader(xhr, /HX-Reswap:/i)) {
            swapOverride = xhr.getResponseHeader("HX-Reswap");
          }
          var serverResponse = xhr.response;
          var beforeSwapDetails = mergeObjects({
            shouldSwap,
            serverResponse,
            isError,
            ignoreTitle,
            selectOverride,
            swapOverride
          }, responseInfo);
          if (responseHandling.event && !triggerEvent(target, responseHandling.event, beforeSwapDetails)) return;
          if (!triggerEvent(target, "htmx:beforeSwap", beforeSwapDetails)) return;
          target = beforeSwapDetails.target;
          serverResponse = beforeSwapDetails.serverResponse;
          isError = beforeSwapDetails.isError;
          ignoreTitle = beforeSwapDetails.ignoreTitle;
          selectOverride = beforeSwapDetails.selectOverride;
          swapOverride = beforeSwapDetails.swapOverride;
          responseInfo.target = target;
          responseInfo.failed = isError;
          responseInfo.successful = !isError;
          if (beforeSwapDetails.shouldSwap) {
            if (xhr.status === 286) {
              cancelPolling(elt);
            }
            withExtensions(elt, function(extension) {
              serverResponse = extension.transformResponse(serverResponse, xhr, elt);
            });
            if (historyUpdate.type) {
              saveCurrentPageToHistory();
            }
            var swapSpec = getSwapSpecification(elt, swapOverride);
            if (!swapSpec.hasOwnProperty("ignoreTitle")) {
              swapSpec.ignoreTitle = ignoreTitle;
            }
            target.classList.add(htmx.config.swappingClass);
            if (responseInfoSelect) {
              selectOverride = responseInfoSelect;
            }
            if (hasHeader(xhr, /HX-Reselect:/i)) {
              selectOverride = xhr.getResponseHeader("HX-Reselect");
            }
            const selectOOB = etc.selectOOB || getClosestAttributeValue(elt, "hx-select-oob");
            const select = getClosestAttributeValue(elt, "hx-select");
            swap(target, serverResponse, swapSpec, {
              select: selectOverride === "unset" ? null : selectOverride || select,
              selectOOB,
              eventInfo: responseInfo,
              anchor: responseInfo.pathInfo.anchor,
              contextElement: elt,
              afterSwapCallback: function() {
                if (hasHeader(xhr, /HX-Trigger-After-Swap:/i)) {
                  let finalElt = elt;
                  if (!bodyContains(elt)) {
                    finalElt = getDocument().body;
                  }
                  handleTriggerHeader(xhr, "HX-Trigger-After-Swap", finalElt);
                }
              },
              afterSettleCallback: function() {
                if (hasHeader(xhr, /HX-Trigger-After-Settle:/i)) {
                  let finalElt = elt;
                  if (!bodyContains(elt)) {
                    finalElt = getDocument().body;
                  }
                  handleTriggerHeader(xhr, "HX-Trigger-After-Settle", finalElt);
                }
              },
              beforeSwapCallback: function() {
                if (historyUpdate.type) {
                  triggerEvent(getDocument().body, "htmx:beforeHistoryUpdate", mergeObjects({ history: historyUpdate }, responseInfo));
                  if (historyUpdate.type === "push") {
                    pushUrlIntoHistory(historyUpdate.path);
                    triggerEvent(getDocument().body, "htmx:pushedIntoHistory", { path: historyUpdate.path });
                  } else {
                    replaceUrlInHistory(historyUpdate.path);
                    triggerEvent(getDocument().body, "htmx:replacedInHistory", { path: historyUpdate.path });
                  }
                }
              }
            });
          }
          if (isError) {
            triggerErrorEvent(elt, "htmx:responseError", mergeObjects({ error: "Response Status Error Code " + xhr.status + " from " + responseInfo.pathInfo.requestPath }, responseInfo));
          }
        }
        const extensions = {};
        function extensionBase() {
          return {
            init: function(api) {
              return null;
            },
            getSelectors: function() {
              return null;
            },
            onEvent: function(name, evt) {
              return true;
            },
            transformResponse: function(text, xhr, elt) {
              return text;
            },
            isInlineSwap: function(swapStyle) {
              return false;
            },
            handleSwap: function(swapStyle, target, fragment, settleInfo) {
              return false;
            },
            encodeParameters: function(xhr, parameters, elt) {
              return null;
            }
          };
        }
        function defineExtension(name, extension) {
          if (extension.init) {
            extension.init(internalAPI);
          }
          extensions[name] = mergeObjects(extensionBase(), extension);
        }
        function removeExtension(name) {
          delete extensions[name];
        }
        function getExtensions(elt, extensionsToReturn, extensionsToIgnore) {
          if (extensionsToReturn == void 0) {
            extensionsToReturn = [];
          }
          if (elt == void 0) {
            return extensionsToReturn;
          }
          if (extensionsToIgnore == void 0) {
            extensionsToIgnore = [];
          }
          const extensionsForElement = getAttributeValue(elt, "hx-ext");
          if (extensionsForElement) {
            forEach(extensionsForElement.split(","), function(extensionName) {
              extensionName = extensionName.replace(/ /g, "");
              if (extensionName.slice(0, 7) == "ignore:") {
                extensionsToIgnore.push(extensionName.slice(7));
                return;
              }
              if (extensionsToIgnore.indexOf(extensionName) < 0) {
                const extension = extensions[extensionName];
                if (extension && extensionsToReturn.indexOf(extension) < 0) {
                  extensionsToReturn.push(extension);
                }
              }
            });
          }
          return getExtensions(asElement(parentElt(elt)), extensionsToReturn, extensionsToIgnore);
        }
        var isReady = false;
        getDocument().addEventListener("DOMContentLoaded", function() {
          isReady = true;
        });
        function ready(fn) {
          if (isReady || getDocument().readyState === "complete") {
            fn();
          } else {
            getDocument().addEventListener("DOMContentLoaded", fn);
          }
        }
        function insertIndicatorStyles() {
          if (htmx.config.includeIndicatorStyles !== false) {
            const nonceAttribute = htmx.config.inlineStyleNonce ? ' nonce="'.concat(htmx.config.inlineStyleNonce, '"') : "";
            const indicator = htmx.config.indicatorClass;
            const request = htmx.config.requestClass;
            getDocument().head.insertAdjacentHTML(
              "beforeend",
              "<style".concat(nonceAttribute, ">") + ".".concat(indicator, "{opacity:0;visibility: hidden} ") + ".".concat(request, " .").concat(indicator, ", .").concat(request, ".").concat(indicator, "{opacity:1;visibility: visible;transition: opacity 200ms ease-in}") + "</style>"
            );
          }
        }
        function getMetaConfig() {
          const element = getDocument().querySelector('meta[name="htmx-config"]');
          if (element) {
            return parseJSON(element.content);
          } else {
            return null;
          }
        }
        function mergeMetaConfig() {
          const metaConfig = getMetaConfig();
          if (metaConfig) {
            htmx.config = mergeObjects(htmx.config, metaConfig);
          }
        }
        ready(function() {
          mergeMetaConfig();
          insertIndicatorStyles();
          let body = getDocument().body;
          processNode(body);
          const restoredElts = getDocument().querySelectorAll(
            "[hx-trigger='restored'],[data-hx-trigger='restored']"
          );
          body.addEventListener("htmx:abort", function(evt) {
            const target = (
              /** @type {CustomEvent} */
              evt.detail.elt || evt.target
            );
            const internalData = getInternalData(target);
            if (internalData && internalData.xhr) {
              internalData.xhr.abort();
            }
          });
          const originalPopstate = window.onpopstate ? window.onpopstate.bind(window) : null;
          window.onpopstate = function(event2) {
            if (event2.state && event2.state.htmx) {
              restoreHistory();
              forEach(restoredElts, function(elt) {
                triggerEvent(elt, "htmx:restored", {
                  document: getDocument(),
                  triggerEvent
                });
              });
            } else {
              if (originalPopstate) {
                originalPopstate(event2);
              }
            }
          };
          getWindow().setTimeout(function() {
            triggerEvent(body, "htmx:load", {});
            body = null;
          }, 0);
        });
        return htmx;
      })();
      htmx_esm_default = htmx2;
    }
  });

  // assets/js/functions/common.js
  var ENVIRONMENT = "development";
  function isDev() {
    return ENVIRONMENT === "development";
  }
  function devLog(...variable) {
    if (isDev() === false) return;
    console.log(...variable);
  }

  // assets/js/functions/modals.js
  function Modals() {
    devLog("Modal function is running");
    const popupBackdrop = document.querySelector("[modal-backdrop]");
    const modals = document.querySelectorAll("[modal]");
    if (!popupBackdrop) {
      devLog("Modal backdrop not found. Skipping backdrop click handler.");
    } else {
      popupBackdrop.addEventListener("click", (e) => {
        e.stopPropagation();
        modals.forEach((modal) => {
          modal.dataset.active = "false";
          document.body.style.overflow = "auto";
          modal.dispatchEvent(
            new CustomEvent("modal-state-change", {
              detail: {
                handler: popupBackdrop
              }
            })
          );
        });
        popupBackdrop.dataset.active = "false";
      });
    }
    const handleModalState = (modalName, state) => {
      const modals2 = document.querySelectorAll(
        '[modal][data-modal-name="'.concat(modalName, '"]')
      );
      if (!modals2) {
        devLog('Modal "'.concat(modalName, '" not found.'));
        return;
      }
      modals2.forEach((modal) => {
        modal.dataset.active = state;
        if (state === "true") {
          document.body.style.overflow = "hidden";
          if (popupBackdrop) {
            popupBackdrop.dataset.active = "true";
          }
        } else {
          document.body.style.overflow = "auto";
          if (popupBackdrop) {
            popupBackdrop.dataset.active = "false";
          }
        }
      });
      devLog('Modal "'.concat(modalName, '" state set to "').concat(state, '".'));
    };
    const addEventListeners = (selector, action, actionName) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        const modalName = element.dataset.modalName;
        const modal = document.querySelector(
          '[modal][data-modal-name="'.concat(modalName, '"]')
        );
        element.addEventListener("click", () => {
          action(modalName);
          modal.dispatchEvent(
            new CustomEvent("modal-state-change", {
              detail: {
                handler: element
              }
            })
          );
        });
        devLog('"'.concat(actionName, '" triggered for modal "').concat(modalName, '".'));
      });
    };
    addEventListeners(
      "[modal-opener]",
      (modalName) => handleModalState(modalName, "true"),
      "Open"
    );
    addEventListeners(
      "[modal-closer]",
      (modalName) => handleModalState(modalName, "false"),
      "Close"
    );
    addEventListeners(
      "[modal-toggler]",
      (modalName) => {
        const modal = document.querySelector(
          '[modal][data-modal-name="'.concat(modalName, '"]')
        );
        if (!modal) {
          devLog('Toggle failed: Modal "'.concat(modalName, '" not found.'));
          return;
        }
        const newState = modal.dataset.active === "true" ? "false" : "true";
        devLog('Toggling modal "'.concat(modalName, '" to "').concat(newState, '".'));
        handleModalState(modalName, newState);
      },
      "Toggle"
    );
  }

  // assets/js/functions/setVariables.js
  function setVariable(element, jsProp, cssName, unit = "px") {
    element.style.setProperty(cssName, jsProp + unit);
  }
  function setVariables() {
    const htmlEl = document.querySelector("html");
    const headerEl = document.querySelector("header");
    if (!htmlEl) return;
    headerEl && setVariable(htmlEl, headerEl.offsetHeight, "--header-height");
  }

  // assets/js/functions/shareBtn.js
  function shareBtn() {
    const shareBtn2 = document.getElementById("shareBtn");
    if (!shareBtn2) return;
    shareBtn2.addEventListener("click", () => {
      navigator.share({
        title: document.title,
        url: window.location.href
      });
    });
  }

  // node_modules/swiper/shared/ssr-window.esm.mjs
  function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
  }
  function extend(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    const noExtend = ["__proto__", "constructor", "prototype"];
    Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
      if (typeof target[key] === "undefined") target[key] = src[key];
      else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
        extend(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function getDocument2() {
    const doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function CustomEvent2() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow2() {
    const win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
  }

  // node_modules/swiper/shared/utils.mjs
  function classesToTokens(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return classes2.trim().split(" ").filter((c) => !!c.trim());
  }
  function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e) {
      }
      try {
        delete object[key];
      } catch (e) {
      }
    });
  }
  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle2(el) {
    const window2 = getWindow2();
    let style;
    if (window2.getComputedStyle) {
      style = window2.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = "x";
    }
    const window2 = getWindow2();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle2(el);
    if (window2.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(",").length > 6) {
        curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
      }
      transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
      if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m41;
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
      else curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
      if (window2.WebKitCSSMatrix) curTransform = transformMatrix.m42;
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
      else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject2(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
  }
  function isNode(node) {
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend2() {
    const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
    const noExtend = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < arguments.length; i += 1) {
      const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
      if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
        const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll(_ref) {
    let {
      swiper,
      targetPosition,
      side
    } = _ref;
    const window2 = getWindow2();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window2.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target) => {
      return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = () => {
      time = (/* @__PURE__ */ new Date()).getTime();
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper.wrapperEl.scrollTo({
        [side]: currentPosition
      });
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.scrollSnapType = "";
        setTimeout(() => {
          swiper.wrapperEl.style.overflow = "";
          swiper.wrapperEl.scrollTo({
            [side]: currentPosition
          });
        });
        window2.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }
      swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
    };
    animate();
  }
  function getSlideTransformEl(slideEl) {
    return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
  }
  function elementChildren(element, selector) {
    if (selector === void 0) {
      selector = "";
    }
    const window2 = getWindow2();
    const children = [...element.children];
    if (window2.HTMLSlotElement && element instanceof HTMLSlotElement) {
      children.push(...element.assignedElements());
    }
    if (!selector) {
      return children;
    }
    return children.filter((el) => el.matches(selector));
  }
  function elementIsChildOfSlot(el, slot) {
    const elementsQueue = [slot];
    while (elementsQueue.length > 0) {
      const elementToCheck = elementsQueue.shift();
      if (el === elementToCheck) {
        return true;
      }
      elementsQueue.push(...elementToCheck.children, ...elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : [], ...elementToCheck.assignedElements ? elementToCheck.assignedElements() : []);
    }
  }
  function elementIsChildOf(el, parent) {
    const window2 = getWindow2();
    let isChild = parent.contains(el);
    if (!isChild && window2.HTMLSlotElement && parent instanceof HTMLSlotElement) {
      const children = [...parent.assignedElements()];
      isChild = children.includes(el);
      if (!isChild) {
        isChild = elementIsChildOfSlot(el, parent);
      }
    }
    return isChild;
  }
  function showWarning(text) {
    try {
      console.warn(text);
      return;
    } catch (err) {
    }
  }
  function createElement(tag, classes2) {
    if (classes2 === void 0) {
      classes2 = [];
    }
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
    return el;
  }
  function elementOffset(el) {
    const window2 = getWindow2();
    const document2 = getDocument2();
    const box = el.getBoundingClientRect();
    const body = document2.body;
    const clientTop = el.clientTop || body.clientTop || 0;
    const clientLeft = el.clientLeft || body.clientLeft || 0;
    const scrollTop = el === window2 ? window2.scrollY : el.scrollTop;
    const scrollLeft = el === window2 ? window2.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }
  function elementPrevAll(el, selector) {
    const prevEls = [];
    while (el.previousElementSibling) {
      const prev = el.previousElementSibling;
      if (selector) {
        if (prev.matches(selector)) prevEls.push(prev);
      } else prevEls.push(prev);
      el = prev;
    }
    return prevEls;
  }
  function elementNextAll(el, selector) {
    const nextEls = [];
    while (el.nextElementSibling) {
      const next = el.nextElementSibling;
      if (selector) {
        if (next.matches(selector)) nextEls.push(next);
      } else nextEls.push(next);
      el = next;
    }
    return nextEls;
  }
  function elementStyle(el, prop) {
    const window2 = getWindow2();
    return window2.getComputedStyle(el, null).getPropertyValue(prop);
  }
  function elementIndex(el) {
    let child = el;
    let i;
    if (child) {
      i = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i += 1;
      }
      return i;
    }
    return void 0;
  }
  function elementParents(el, selector) {
    const parents = [];
    let parent = el.parentElement;
    while (parent) {
      if (selector) {
        if (parent.matches(selector)) parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentElement;
    }
    return parents;
  }
  function elementTransitionEnd(el, callback) {
    function fireCallBack(e) {
      if (e.target !== el) return;
      callback.call(el, e);
      el.removeEventListener("transitionend", fireCallBack);
    }
    if (callback) {
      el.addEventListener("transitionend", fireCallBack);
    }
  }
  function elementOuterSize(el, size, includeMargins) {
    const window2 = getWindow2();
    if (includeMargins) {
      return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
    }
    return el.offsetWidth;
  }
  function makeElementsArray(el) {
    return (Array.isArray(el) ? el : [el]).filter((e) => !!e);
  }
  function getRotateFix(swiper) {
    return (v) => {
      if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) {
        return v + 1e-3;
      }
      return v;
    };
  }

  // node_modules/swiper/shared/swiper-core.mjs
  var support;
  function calcSupport() {
    const window2 = getWindow2();
    const document2 = getDocument2();
    return {
      smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
      touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }
  var deviceCached;
  function calcDevice(_temp) {
    let {
      userAgent
    } = _temp === void 0 ? {} : _temp;
    const support3 = getSupport();
    const window2 = getWindow2();
    const platform = window2.navigator.platform;
    const ua = userAgent || window2.navigator.userAgent;
    const device = {
      ios: false,
      android: false
    };
    const screenWidth = window2.screen.width;
    const screenHeight = window2.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    if (!ipad && macos && support3.touch && iPadScreens.indexOf("".concat(screenWidth, "x").concat(screenHeight)) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad) ipad = [0, 1, "13_0_0"];
      macos = false;
    }
    if (android && !windows) {
      device.os = "android";
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    }
    return device;
  }
  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }
  var browser;
  function calcBrowser() {
    const window2 = getWindow2();
    const device = getDevice();
    let needPerspectiveFix = false;
    function isSafari3() {
      const ua = window2.navigator.userAgent.toLowerCase();
      return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    if (isSafari3()) {
      const ua = String(window2.navigator.userAgent);
      if (ua.includes("Version/")) {
        const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
        needPerspectiveFix = major < 16 || major === 16 && minor < 2;
      }
    }
    const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent);
    const isSafariBrowser = isSafari3();
    const need3dFix = isSafariBrowser || isWebView && device.ios;
    return {
      isSafari: needPerspectiveFix || isSafariBrowser,
      needPerspectiveFix,
      need3dFix,
      isWebView
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }
  function Resize(_ref) {
    let {
      swiper,
      on: on2,
      emit
    } = _ref;
    const window2 = getWindow2();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit("beforeResize");
      emit("resize");
    };
    const createObserver = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      observer = new ResizeObserver((entries) => {
        animationFrame = window2.requestAnimationFrame(() => {
          const {
            width,
            height
          } = swiper;
          let newWidth = width;
          let newHeight = height;
          entries.forEach((_ref2) => {
            let {
              contentBoxSize,
              contentRect,
              target
            } = _ref2;
            if (target && target !== swiper.el) return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper.el);
    };
    const removeObserver = () => {
      if (animationFrame) {
        window2.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper.el) {
        observer.unobserve(swiper.el);
        observer = null;
      }
    };
    const orientationChangeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit("orientationchange");
    };
    on2("init", () => {
      if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
        createObserver();
        return;
      }
      window2.addEventListener("resize", resizeHandler);
      window2.addEventListener("orientationchange", orientationChangeHandler);
    });
    on2("destroy", () => {
      removeObserver();
      window2.removeEventListener("resize", resizeHandler);
      window2.removeEventListener("orientationchange", orientationChangeHandler);
    });
  }
  function Observer(_ref) {
    let {
      swiper,
      extendParams,
      on: on2,
      emit
    } = _ref;
    const observers = [];
    const window2 = getWindow2();
    const attach = function(target, options) {
      if (options === void 0) {
        options = {};
      }
      const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
      const observer = new ObserverFunc((mutations) => {
        if (swiper.__preventObserver__) return;
        if (mutations.length === 1) {
          emit("observerUpdate", mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate2() {
          emit("observerUpdate", mutations[0]);
        };
        if (window2.requestAnimationFrame) {
          window2.requestAnimationFrame(observerUpdate);
        } else {
          window2.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
        childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
        characterData: typeof options.characterData === "undefined" ? true : options.characterData
      });
      observers.push(observer);
    };
    const init = () => {
      if (!swiper.params.observer) return;
      if (swiper.params.observeParents) {
        const containerParents = elementParents(swiper.hostEl);
        for (let i = 0; i < containerParents.length; i += 1) {
          attach(containerParents[i]);
        }
      }
      attach(swiper.hostEl, {
        childList: swiper.params.observeSlideChildren
      });
      attach(swiper.wrapperEl, {
        attributes: false
      });
    };
    const destroy2 = () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on2("init", init);
    on2("destroy", destroy2);
  }
  var eventsEmitter = {
    on(events2, handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (typeof handler !== "function") return self2;
      const method = priority ? "unshift" : "push";
      events2.split(" ").forEach((event2) => {
        if (!self2.eventsListeners[event2]) self2.eventsListeners[event2] = [];
        self2.eventsListeners[event2][method](handler);
      });
      return self2;
    },
    once(events2, handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (typeof handler !== "function") return self2;
      function onceHandler() {
        self2.off(events2, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        handler.apply(self2, args);
      }
      onceHandler.__emitterProxy = handler;
      return self2.on(events2, onceHandler, priority);
    },
    onAny(handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (typeof handler !== "function") return self2;
      const method = priority ? "unshift" : "push";
      if (self2.eventsAnyListeners.indexOf(handler) < 0) {
        self2.eventsAnyListeners[method](handler);
      }
      return self2;
    },
    offAny(handler) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (!self2.eventsAnyListeners) return self2;
      const index = self2.eventsAnyListeners.indexOf(handler);
      if (index >= 0) {
        self2.eventsAnyListeners.splice(index, 1);
      }
      return self2;
    },
    off(events2, handler) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (!self2.eventsListeners) return self2;
      events2.split(" ").forEach((event2) => {
        if (typeof handler === "undefined") {
          self2.eventsListeners[event2] = [];
        } else if (self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler, index) => {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self2.eventsListeners[event2].splice(index, 1);
            }
          });
        }
      });
      return self2;
    },
    emit() {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed) return self2;
      if (!self2.eventsListeners) return self2;
      let events2;
      let data;
      let context;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events2 = args[0];
        data = args.slice(1, args.length);
        context = self2;
      } else {
        events2 = args[0].events;
        data = args[0].data;
        context = args[0].context || self2;
      }
      data.unshift(context);
      const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
      eventsArray.forEach((event2) => {
        if (self2.eventsAnyListeners && self2.eventsAnyListeners.length) {
          self2.eventsAnyListeners.forEach((eventHandler) => {
            eventHandler.apply(context, [event2, ...data]);
          });
        }
        if (self2.eventsListeners && self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler) => {
            eventHandler.apply(context, data);
          });
        }
      });
      return self2;
    }
  };
  function updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = el.clientWidth;
    }
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = el.clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    }
    width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
    height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
      width,
      height,
      size: swiper.isHorizontal() ? width : height
    });
  }
  function updateSlides() {
    const swiper = this;
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const {
      wrapperEl,
      slidesEl,
      size: swiperSize,
      rtlTranslate: rtl,
      wrongRTL
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = elementChildren(slidesEl, ".".concat(swiper.params.slideClass, ", swiper-slide"));
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    swiper.virtualSize = -spaceBetween;
    slides.forEach((slideEl) => {
      if (rtl) {
        slideEl.style.marginLeft = "";
      } else {
        slideEl.style.marginRight = "";
      }
      slideEl.style.marginBottom = "";
      slideEl.style.marginTop = "";
    });
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
      swiper.grid.initSlides(slides);
    } else if (swiper.grid) {
      swiper.grid.unsetSlides();
    }
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
      return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for (let i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      let slide2;
      if (slides[i]) slide2 = slides[i];
      if (gridEnabled) {
        swiper.grid.updateSlide(i, slide2, slides);
      }
      if (slides[i] && elementStyle(slide2, "display") === "none") continue;
      if (params.slidesPerView === "auto") {
        if (shouldResetSlideSize) {
          slides[i].style[swiper.getDirectionLabel("width")] = "";
        }
        const slideStyles = getComputedStyle(slide2);
        const currentTransform = slide2.style.transform;
        const currentWebKitTransform = slide2.style.webkitTransform;
        if (currentTransform) {
          slide2.style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
        } else {
          const width = getDirectionPropertyValue(slideStyles, "width");
          const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
          const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
          const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
          const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
          const boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            const {
              clientWidth,
              offsetWidth
            } = slide2;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide2.style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths) slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths) slideSize = Math.floor(slideSize);
        if (slides[i]) {
          slides[i].style[swiper.getDirectionLabel("width")] = "".concat(slideSize, "px");
        }
      }
      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
      wrapperEl.style.width = "".concat(swiper.virtualSize + spaceBetween, "px");
    }
    if (params.setWrapperSize) {
      wrapperEl.style[swiper.getDirectionLabel("width")] = "".concat(swiper.virtualSize + spaceBetween, "px");
    }
    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid);
    }
    if (!params.centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (isVirtual && params.loop) {
      const size = slidesSizesGrid[0] + spaceBetween;
      if (params.slidesPerGroup > 1) {
        const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
        const groupSize = size * params.slidesPerGroup;
        for (let i = 0; i < groups; i += 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
      }
      for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
        if (params.slidesPerGroup === 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + size);
        }
        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
        swiper.virtualSize += size;
      }
    }
    if (snapGrid.length === 0) snapGrid = [0];
    if (spaceBetween !== 0) {
      const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
      slides.filter((_, slideIndex) => {
        if (!params.cssMode || params.loop) return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).forEach((slideEl) => {
        slideEl.style[key] = "".concat(spaceBetween, "px");
      });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
      snapGrid = snapGrid.map((snap) => {
        if (snap <= 0) return -offsetBefore;
        if (snap > maxSnap) return maxSnap + offsetAfter;
        return snap;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
      if (allSlidesSize + offsetSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
        snapGrid.forEach((snap, snapIndex) => {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach((snap, snapIndex) => {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "".concat(-snapGrid[0], "px"));
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "".concat(swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2, "px"));
      const addToSnapGrid = -swiper.snapGrid[0];
      const addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
      swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) swiper.checkOverflow();
      swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    swiper.emit("slidesUpdated");
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
      const backFaceHiddenClass = "".concat(params.containerModifierClass, "backface-hidden");
      const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper.el.classList.remove(backFaceHiddenClass);
      }
    }
  }
  function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    const getSlideByIndex = (index) => {
      if (isVirtual) {
        return swiper.slides[swiper.getSlideIndexByData(index)];
      }
      return swiper.slides[index];
    };
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        (swiper.visibleSlides || []).forEach((slide2) => {
          activeSlides.push(slide2);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          const index = swiper.activeIndex + i;
          if (index > swiper.slides.length && !isVirtual) break;
          activeSlides.push(getSlideByIndex(index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }
    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== "undefined") {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = "".concat(newHeight, "px");
  }
  function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
    }
  }
  var toggleSlideClasses$1 = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesProgress(translate2) {
    if (translate2 === void 0) {
      translate2 = this && this.translate || 0;
    }
    const swiper = this;
    const params = swiper.params;
    const {
      slides,
      rtlTranslate: rtl,
      snapGrid
    } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
    let offsetCenter = -translate2;
    if (rtl) offsetCenter = translate2;
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slide2 = slides[i];
      let slideOffset = slide2.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const slideBefore = -(offsetCenter - slideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
      const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(slide2);
        swiper.visibleSlidesIndexes.push(i);
      }
      toggleSlideClasses$1(slide2, isVisible, params.slideVisibleClass);
      toggleSlideClasses$1(slide2, isFullyVisible, params.slideFullyVisibleClass);
      slide2.progress = rtl ? -slideProgress : slideProgress;
      slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
  }
  function updateProgress(translate2) {
    const swiper = this;
    if (typeof translate2 === "undefined") {
      const multiplier = swiper.rtlTranslate ? -1 : 1;
      translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let {
      progress,
      isBeginning,
      isEnd,
      progressLoop
    } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate2 - swiper.minTranslate()) / translatesDiff;
      const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
      const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
      isBeginning = isBeginningRounded || progress <= 0;
      isEnd = isEndRounded || progress >= 1;
      if (isBeginningRounded) progress = 0;
      if (isEndRounded) progress = 1;
    }
    if (params.loop) {
      const firstSlideIndex = swiper.getSlideIndexByData(0);
      const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
      const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
      const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
      const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
      const translateAbs = Math.abs(translate2);
      if (translateAbs >= firstSlideTranslate) {
        progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
      } else {
        progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
      }
      if (progressLoop > 1) progressLoop -= 1;
    }
    Object.assign(swiper, {
      progress,
      progressLoop,
      isBeginning,
      isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate2);
    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit("fromEdge");
    }
    swiper.emit("progress", progress);
  }
  var toggleSlideClasses = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesClasses() {
    const swiper = this;
    const {
      slides,
      params,
      slidesEl,
      activeIndex
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = (selector) => {
      return elementChildren(slidesEl, ".".concat(params.slideClass).concat(selector, ", swiper-slide").concat(selector))[0];
    };
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
      if (params.loop) {
        let slideIndex = activeIndex - swiper.virtual.slidesBefore;
        if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
        if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
        activeSlide = getFilteredSlide('[data-swiper-slide-index="'.concat(slideIndex, '"]'));
      } else {
        activeSlide = getFilteredSlide('[data-swiper-slide-index="'.concat(activeIndex, '"]'));
      }
    } else {
      if (gridEnabled) {
        activeSlide = slides.find((slideEl) => slideEl.column === activeIndex);
        nextSlide = slides.find((slideEl) => slideEl.column === activeIndex + 1);
        prevSlide = slides.find((slideEl) => slideEl.column === activeIndex - 1);
      } else {
        activeSlide = slides[activeIndex];
      }
    }
    if (activeSlide) {
      if (!gridEnabled) {
        nextSlide = elementNextAll(activeSlide, ".".concat(params.slideClass, ", swiper-slide"))[0];
        if (params.loop && !nextSlide) {
          nextSlide = slides[0];
        }
        prevSlide = elementPrevAll(activeSlide, ".".concat(params.slideClass, ", swiper-slide"))[0];
        if (params.loop && !prevSlide === 0) {
          prevSlide = slides[slides.length - 1];
        }
      }
    }
    slides.forEach((slideEl) => {
      toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
      toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
      toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
    });
    swiper.emitSlidesClasses();
  }
  var processLazyPreloader = (swiper, imageEl) => {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    const slideSelector = () => swiper.isElement ? "swiper-slide" : ".".concat(swiper.params.slideClass);
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
      let lazyEl = slideEl.querySelector(".".concat(swiper.params.lazyPreloaderClass));
      if (!lazyEl && swiper.isElement) {
        if (slideEl.shadowRoot) {
          lazyEl = slideEl.shadowRoot.querySelector(".".concat(swiper.params.lazyPreloaderClass));
        } else {
          requestAnimationFrame(() => {
            if (slideEl.shadowRoot) {
              lazyEl = slideEl.shadowRoot.querySelector(".".concat(swiper.params.lazyPreloaderClass));
              if (lazyEl) lazyEl.remove();
            }
          });
        }
      }
      if (lazyEl) lazyEl.remove();
    }
  };
  var unlazy = (swiper, index) => {
    if (!swiper.slides[index]) return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl) imageEl.removeAttribute("loading");
  };
  var preload = (swiper) => {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0) return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
      const activeColumn = activeIndex;
      const preloadColumns = [activeColumn - amount];
      preloadColumns.push(...Array.from({
        length: amount
      }).map((_, i) => {
        return activeColumn + slidesPerView + i;
      }));
      swiper.slides.forEach((slideEl, i) => {
        if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
      });
      return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) {
      for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
        const realIndex = (i % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
      }
    } else {
      for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
        if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
          unlazy(swiper, i);
        }
      }
    }
  };
  function getActiveIndexByTranslate(swiper) {
    const {
      slidesGrid,
      params
    } = swiper;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    let activeIndex;
    for (let i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== "undefined") {
        if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate2 >= slidesGrid[i] && translate2 < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate2 >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
    }
    return activeIndex;
  }
  function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const {
      snapGrid,
      params,
      activeIndex: previousIndex,
      realIndex: previousRealIndex,
      snapIndex: previousSnapIndex
    } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex) => {
      let realIndex2 = aIndex - swiper.virtual.slidesBefore;
      if (realIndex2 < 0) {
        realIndex2 = swiper.virtual.slides.length + realIndex2;
      }
      if (realIndex2 >= swiper.virtual.slides.length) {
        realIndex2 -= swiper.virtual.slides.length;
      }
      return realIndex2;
    };
    if (typeof activeIndex === "undefined") {
      activeIndex = getActiveIndexByTranslate(swiper);
    }
    if (snapGrid.indexOf(translate2) >= 0) {
      snapIndex = snapGrid.indexOf(translate2);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper.params.loop) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }
      return;
    }
    if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
      return;
    }
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    let realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) {
      realIndex = getVirtualRealIndex(activeIndex);
    } else if (gridEnabled) {
      const firstSlideInColumn = swiper.slides.find((slideEl) => slideEl.column === activeIndex);
      let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
      if (Number.isNaN(activeSlideIndex)) {
        activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
      }
      realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper.slides[activeIndex]) {
      const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
      if (slideIndex) {
        realIndex = parseInt(slideIndex, 10);
      } else {
        realIndex = activeIndex;
      }
    } else {
      realIndex = activeIndex;
    }
    Object.assign(swiper, {
      previousSnapIndex,
      snapIndex,
      previousRealIndex,
      realIndex,
      previousIndex,
      activeIndex
    });
    if (swiper.initialized) {
      preload(swiper);
    }
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      if (previousRealIndex !== realIndex) {
        swiper.emit("realIndexChange");
      }
      swiper.emit("slideChange");
    }
  }
  function updateClickedSlide(el, path) {
    const swiper = this;
    const params = swiper.params;
    let slide2 = el.closest(".".concat(params.slideClass, ", swiper-slide"));
    if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
      [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
        if (!slide2 && pathEl.matches && pathEl.matches(".".concat(params.slideClass, ", swiper-slide"))) {
          slide2 = pathEl;
        }
      });
    }
    let slideFound = false;
    let slideIndex;
    if (slide2) {
      for (let i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide2) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }
    if (slide2 && slideFound) {
      swiper.clickedSlide = slide2;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = void 0;
      swiper.clickedIndex = void 0;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }
  var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
  };
  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? "x" : "y";
    }
    const swiper = this;
    const {
      params,
      rtlTranslate: rtl,
      translate: translate2,
      wrapperEl
    } = swiper;
    if (params.virtualTranslate) {
      return rtl ? -translate2 : translate2;
    }
    if (params.cssMode) {
      return translate2;
    }
    let currentTranslate = getTranslate(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }
  function setTranslate(translate2, byController) {
    const swiper = this;
    const {
      rtlTranslate: rtl,
      params,
      wrapperEl,
      progress
    } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) {
      x = rtl ? -translate2 : translate2;
    } else {
      y = translate2;
    }
    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      if (swiper.isHorizontal()) {
        x -= swiper.cssOverflowAdjustment();
      } else {
        y -= swiper.cssOverflowAdjustment();
      }
      wrapperEl.style.transform = "translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)");
    }
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate2);
    }
    swiper.emit("setTranslate", swiper.translate, byController);
  }
  function minTranslate() {
    return -this.snapGrid[0];
  }
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
    if (translate2 === void 0) {
      translate2 = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    const swiper = this;
    const {
      params,
      wrapperEl
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate2 = swiper.minTranslate();
    const maxTranslate2 = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate2 > minTranslate2) newTranslate = minTranslate2;
    else if (translateBounds && translate2 < maxTranslate2) newTranslate = maxTranslate2;
    else newTranslate = translate2;
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: -newTranslate,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: -newTranslate,
          behavior: "smooth"
        });
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionEnd");
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionStart");
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            swiper.animating = false;
            if (runCallbacks) {
              swiper.emit("transitionEnd");
            }
          };
        }
        swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }
  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
  };
  function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style.transitionDuration = "".concat(duration, "ms");
      swiper.wrapperEl.style.transitionDelay = duration === 0 ? "0ms" : "";
    }
    swiper.emit("setTransition", duration, byController);
  }
  function transitionEmit(_ref) {
    let {
      swiper,
      runCallbacks,
      direction,
      step
    } = _ref;
    const {
      activeIndex,
      previousIndex
    } = swiper;
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex) dir = "next";
      else if (activeIndex < previousIndex) dir = "prev";
      else dir = "reset";
    }
    swiper.emit("transition".concat(step));
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit("slideResetTransition".concat(step));
        return;
      }
      swiper.emit("slideChangeTransition".concat(step));
      if (dir === "next") {
        swiper.emit("slideNextTransition".concat(step));
      } else {
        swiper.emit("slidePrevTransition".concat(step));
      }
    }
  }
  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "Start"
    });
  }
  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "End"
    });
  }
  var transition = {
    setTransition,
    transitionStart,
    transitionEnd
  };
  function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) {
      index = 0;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      index = parseInt(index, 10);
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const {
      params,
      snapGrid,
      slidesGrid,
      previousIndex,
      activeIndex,
      rtlTranslate: rtl,
      wrapperEl,
      enabled
    } = swiper;
    if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate2 = -snapGrid[snapIndex];
    if (params.normalizeSlideIndex) {
      for (let i = 0; i < slidesGrid.length; i += 1) {
        const normalizedTranslate = -Math.floor(translate2 * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== "undefined") {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i;
        }
      }
    }
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper.emit("beforeSlideChangeStart");
    }
    swiper.updateProgress(translate2);
    let direction;
    if (slideIndex > activeIndex) direction = "next";
    else if (slideIndex < activeIndex) direction = "prev";
    else direction = "reset";
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    const isInitialVirtual = isVirtual && initial;
    if (!isInitialVirtual && (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate)) {
      swiper.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper.setTranslate(translate2);
      }
      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      const t = rtl ? translate2 : -translate2;
      if (speed === 0) {
        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = "none";
          swiper._immediateVirtual = true;
        }
        if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
          swiper._cssModeVirtualInitialSet = true;
          requestAnimationFrame(() => {
            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
          });
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
        }
        if (isVirtual) {
          requestAnimationFrame(() => {
            swiper.wrapperEl.style.scrollSnapType = "";
            swiper._immediateVirtual = false;
          });
        }
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: t,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: t,
          behavior: "smooth"
        });
      }
      return true;
    }
    const browser2 = getBrowser();
    const isSafari3 = browser2.isSafari;
    if (isVirtual && !initial && isSafari3 && swiper.isElement) {
      swiper.virtual.update(false, false, slideIndex);
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate2);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
  }
  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      const indexAsNumber = parseInt(index, 10);
      index = indexAsNumber;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    let newIndex = index;
    if (swiper.params.loop) {
      if (swiper.virtual && swiper.params.virtual.enabled) {
        newIndex = newIndex + swiper.virtual.slidesBefore;
      } else {
        let targetSlideIndex;
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          targetSlideIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
        } else {
          targetSlideIndex = swiper.getSlideIndexByData(newIndex);
        }
        const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
        const {
          centeredSlides
        } = swiper.params;
        let slidesPerView = swiper.params.slidesPerView;
        if (slidesPerView === "auto") {
          slidesPerView = swiper.slidesPerViewDynamic();
        } else {
          slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
          if (centeredSlides && slidesPerView % 2 === 0) {
            slidesPerView = slidesPerView + 1;
          }
        }
        let needLoopFix = cols - targetSlideIndex < slidesPerView;
        if (centeredSlides) {
          needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
        }
        if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) {
          needLoopFix = false;
        }
        if (needLoopFix) {
          const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
          swiper.loopFix({
            direction,
            slideTo: true,
            activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
            slideRealIndex: direction === "next" ? swiper.realIndex : void 0
          });
        }
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          newIndex = swiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex).column;
        } else {
          newIndex = swiper.getSlideIndexByData(newIndex);
        }
      }
    }
    requestAnimationFrame(() => {
      swiper.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper;
  }
  function slideNext(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      enabled,
      params,
      animating
    } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    }
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper.loopFix({
        direction: "next"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
      if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
        requestAnimationFrame(() => {
          swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        });
        return true;
      }
    }
    if (params.rewind && swiper.isEnd) {
      return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }
  function slidePrev(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params,
      snapGrid,
      slidesGrid,
      rtlTranslate,
      enabled,
      animating
    } = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding) return false;
      swiper.loopFix({
        direction: "prev"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
      if (val < 0) return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate2);
    const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
    const isFreeMode = params.freeMode && params.freeMode.enabled;
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && (params.cssMode || isFreeMode)) {
      let prevSnapIndex;
      snapGrid.forEach((snap, snapIndex) => {
        if (normalizedTranslate >= snap) {
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== "undefined") {
        prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
      if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper.isBeginning) {
      const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(prevIndex, speed, runCallbacks, internal);
      });
      return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }
  function slideReset(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate2 >= swiper.snapGrid[snapIndex]) {
      const currentSnap = swiper.snapGrid[snapIndex];
      const nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      const prevSnap = swiper.snapGrid[snapIndex - 1];
      const currentSnap = swiper.snapGrid[snapIndex];
      if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }
  function slideToClickedSlide() {
    const swiper = this;
    if (swiper.destroyed) return;
    const {
      params,
      slidesEl
    } = swiper;
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    const slideSelector = swiper.isElement ? "swiper-slide" : ".".concat(params.slideClass);
    if (params.loop) {
      if (swiper.animating) return;
      realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, "".concat(slideSelector, '[data-swiper-slide-index="').concat(realIndex, '"]'))[0]);
          nextTick(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, "".concat(slideSelector, '[data-swiper-slide-index="').concat(realIndex, '"]'))[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
  };
  function loopCreate(slideRealIndex) {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    const initSlides = () => {
      const slides = elementChildren(slidesEl, ".".concat(params.slideClass, ", swiper-slide"));
      slides.forEach((el, index) => {
        el.setAttribute("data-swiper-slide-index", index);
      });
    };
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
    const addBlankSlides = (amountOfSlides) => {
      for (let i = 0; i < amountOfSlides; i += 1) {
        const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
        swiper.slidesEl.append(slideEl);
      }
    };
    if (shouldFillGroup) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else if (shouldFillGrid) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else {
      initSlides();
    }
    swiper.loopFix({
      slideRealIndex,
      direction: params.centeredSlides ? void 0 : "next"
    });
  }
  function loopFix(_temp) {
    let {
      slideRealIndex,
      slideTo: slideTo2 = true,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController,
      byMousewheel
    } = _temp === void 0 ? {} : _temp;
    const swiper = this;
    if (!swiper.params.loop) return;
    swiper.emit("beforeLoopFix");
    const {
      slides,
      allowSlidePrev,
      allowSlideNext,
      slidesEl,
      params
    } = swiper;
    const {
      centeredSlides
    } = params;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
      if (slideTo2) {
        if (!params.centeredSlides && swiper.snapIndex === 0) {
          swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
        } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
          swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
        } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
          swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
      }
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit("loopFix");
      return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === "auto") {
      slidesPerView = swiper.slidesPerViewDynamic();
    } else {
      slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
      if (centeredSlides && slidesPerView % 2 === 0) {
        slidesPerView = slidesPerView + 1;
      }
    }
    const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
    let loopedSlides = slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) {
      loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
    }
    loopedSlides += params.loopAdditionalSlides;
    swiper.loopedSlides = loopedSlides;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides) {
      showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
    } else if (gridEnabled && params.grid.fill === "row") {
      showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    }
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    let activeIndex = swiper.activeIndex;
    if (typeof activeSlideIndex === "undefined") {
      activeSlideIndex = swiper.getSlideIndex(slides.find((el) => el.classList.contains(params.slideActiveClass)));
    } else {
      activeIndex = activeSlideIndex;
    }
    const isNext = direction === "next" || !direction;
    const isPrev = direction === "prev" || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
    const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
    if (activeColIndexWithShift < loopedSlides) {
      slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
      for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
        const index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          const colIndexToPrepend = cols - index - 1;
          for (let i2 = slides.length - 1; i2 >= 0; i2 -= 1) {
            if (slides[i2].column === colIndexToPrepend) prependSlidesIndexes.push(i2);
          }
        } else {
          prependSlidesIndexes.push(cols - index - 1);
        }
      }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
      slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
      for (let i = 0; i < slidesAppended; i += 1) {
        const index = i - Math.floor(i / cols) * cols;
        if (gridEnabled) {
          slides.forEach((slide2, slideIndex) => {
            if (slide2.column === index) appendSlidesIndexes.push(slideIndex);
          });
        } else {
          appendSlidesIndexes.push(index);
        }
      }
    }
    swiper.__preventObserver__ = true;
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
    if (isPrev) {
      prependSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    if (isNext) {
      appendSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    swiper.recalcSlides();
    if (params.slidesPerView === "auto") {
      swiper.updateSlides();
    } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
      swiper.slides.forEach((slide2, slideIndex) => {
        swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
      });
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (slideTo2) {
      if (prependSlidesIndexes.length > 0 && isPrev) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          if (setTranslate2) {
            const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
            swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else if (appendSlidesIndexes.length > 0 && isNext) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
        }
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
      const loopParams = {
        slideRealIndex,
        direction,
        setTranslate: setTranslate2,
        activeSlideIndex,
        byController: true
      };
      if (Array.isArray(swiper.controller.control)) {
        swiper.controller.control.forEach((c) => {
          if (!c.destroyed && c.params.loop) c.loopFix(__spreadProps(__spreadValues({}, loopParams), {
            slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo2 : false
          }));
        });
      } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
        swiper.controller.control.loopFix(__spreadProps(__spreadValues({}, loopParams), {
          slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        }));
      }
    }
    swiper.emit("loopFix");
  }
  function loopDestroy() {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach((slideEl) => {
      const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
      newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach((slideEl) => {
      slideEl.removeAttribute("data-swiper-slide-index");
    });
    newSlidesOrder.forEach((slideEl) => {
      slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
  }
  var loop = {
    loopCreate,
    loopFix,
    loopDestroy
  };
  function setGrabCursor(moving) {
    const swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  function unsetGrabCursor() {
    const swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  var grabCursor = {
    setGrabCursor,
    unsetGrabCursor
  };
  function closestElement(selector, base) {
    if (base === void 0) {
      base = this;
    }
    function __closestFrom(el) {
      if (!el || el === getDocument2() || el === getWindow2()) return null;
      if (el.assignedSlot) el = el.assignedSlot;
      const found = el.closest(selector);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function preventEdgeSwipe(swiper, event2, startX) {
    const window2 = getWindow2();
    const {
      params
    } = swiper;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === "prevent") {
        event2.preventDefault();
        return true;
      }
      return false;
    }
    return true;
  }
  function onTouchStart(event2) {
    const swiper = this;
    const document2 = getDocument2();
    let e = event2;
    if (e.originalEvent) e = e.originalEvent;
    const data = swiper.touchEventsData;
    if (e.type === "pointerdown") {
      if (data.pointerId !== null && data.pointerId !== e.pointerId) {
        return;
      }
      data.pointerId = e.pointerId;
    } else if (e.type === "touchstart" && e.targetTouches.length === 1) {
      data.touchId = e.targetTouches[0].identifier;
    }
    if (e.type === "touchstart") {
      preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
      return;
    }
    const {
      params,
      touches,
      enabled
    } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === "mouse") return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }
    let targetEl = e.target;
    if (params.touchEventsTarget === "wrapper") {
      if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
    }
    if ("which" in e && e.which === 3) return;
    if ("button" in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return;
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    const eventPath = e.composedPath ? e.composedPath() : e.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
      targetEl = eventPath[0];
    }
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : ".".concat(params.noSwipingClass);
    const isTargetShadow = !!(e.target && e.target.shadowRoot);
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!targetEl.closest(params.swipeHandler)) return;
    }
    touches.currentX = e.pageX;
    touches.currentY = e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    if (!preventEdgeSwipe(swiper, e, startX)) {
      return;
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: void 0,
      startMoving: void 0
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = void 0;
    if (params.threshold > 0) data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
      preventDefault = false;
      if (targetEl.nodeName === "SELECT") {
        data.isTouched = false;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl && (e.pointerType === "mouse" || e.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) {
      document2.activeElement.blur();
    }
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
      e.preventDefault();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
      swiper.freeMode.onTouchStart();
    }
    swiper.emit("touchStart", e);
  }
  function onTouchMove(event2) {
    const document2 = getDocument2();
    const swiper = this;
    const data = swiper.touchEventsData;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      enabled
    } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && event2.pointerType === "mouse") return;
    let e = event2;
    if (e.originalEvent) e = e.originalEvent;
    if (e.type === "pointermove") {
      if (data.touchId !== null) return;
      const id = e.pointerId;
      if (id !== data.pointerId) return;
    }
    let targetTouch;
    if (e.type === "touchmove") {
      targetTouch = [...e.changedTouches].find((t) => t.identifier === data.touchId);
      if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    } else {
      targetTouch = e;
    }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit("touchMoveOpposite", e);
      }
      return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      if (!e.target.matches(data.focusableElements)) {
        swiper.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== e.target && e.pointerType !== "mouse") {
      document2.activeElement.blur();
    }
    if (document2.activeElement) {
      if (e.target === document2.activeElement && e.target.matches(data.focusableElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit("touchMove", e);
    }
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(__pow(diffX, 2) + __pow(diffY, 2)) < swiper.params.threshold) return;
    if (typeof data.isScrolling === "undefined") {
      let touchAngle;
      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit("touchMoveOpposite", e);
    }
    if (typeof data.startMoving === "undefined") {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
      diff = Math.abs(diff) * (rtl ? 1 : -1);
      touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
      touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
    const isLoop = swiper.params.loop && !params.cssMode;
    const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
    if (!data.isMoved) {
      if (isLoop && allowLoopFix) {
        swiper.loopFix({
          direction: swiper.swipeDirection
        });
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true,
          detail: {
            bySwiperTouchMove: true
          }
        });
        swiper.wrapperEl.dispatchEvent(evt);
      }
      data.allowMomentumBounce = false;
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit("sliderFirstMove", e);
    }
    let loopFixed;
    (/* @__PURE__ */ new Date()).getTime();
    if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
        startTranslate: data.currentTranslate
      });
      data.loopSwapReset = true;
      data.startTranslate = data.currentTranslate;
      return;
    }
    swiper.emit("sliderMove", e);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
        swiper.loopFix({
          direction: "prev",
          setTranslate: true,
          activeSlideIndex: 0
        });
      }
      if (data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.minTranslate() - 1 + __pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
        }
      }
    } else if (diff < 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
        swiper.loopFix({
          direction: "next",
          setTranslate: true,
          activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
      }
      if (data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.maxTranslate() + 1 - __pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
        }
      }
    }
    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    }
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode) return;
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    }
    swiper.updateProgress(data.currentTranslate);
    swiper.setTranslate(data.currentTranslate);
  }
  function onTouchEnd(event2) {
    const swiper = this;
    const data = swiper.touchEventsData;
    let e = event2;
    if (e.originalEvent) e = e.originalEvent;
    let targetTouch;
    const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
    if (!isTouchEvent) {
      if (data.touchId !== null) return;
      if (e.pointerId !== data.pointerId) return;
      targetTouch = e;
    } else {
      targetTouch = [...e.changedTouches].find((t) => t.identifier === data.touchId);
      if (!targetTouch || targetTouch.identifier !== data.touchId) return;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e.type)) {
      const proceed = ["pointercancel", "contextmenu"].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
      if (!proceed) {
        return;
      }
    }
    data.pointerId = null;
    data.touchId = null;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      slidesGrid,
      enabled
    } = swiper;
    if (!enabled) return;
    if (!params.simulateTouch && e.pointerType === "mouse") return;
    if (data.allowTouchCallbacks) {
      swiper.emit("touchEnd", e);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (swiper.allowClick) {
      const pathTree = e.path || e.composedPath && e.composedPath();
      swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
      swiper.emit("tap click", e);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit("doubleTap doubleClick", e);
      }
    }
    data.lastClickTime = now();
    nextTick(() => {
      if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos
      });
      return;
    }
    const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      const increment2 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i + increment2] !== "undefined") {
        if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment2]) {
          stopIndex = i;
          groupSize = slidesGrid[i + increment2] - slidesGrid[i];
        }
      } else if (swipeToLast || currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
      if (swiper.isBeginning) {
        rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      } else if (swiper.isEnd) {
        rewindFirstIndex = 0;
      }
    }
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
        else swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
          swiper.slideTo(rewindLastIndex);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === "next") {
          swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
        }
        if (swiper.swipeDirection === "prev") {
          swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }
  function onResize() {
    const swiper = this;
    const {
      params,
      el
    } = swiper;
    if (el && el.offsetWidth === 0) return;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    const {
      allowSlideNext,
      allowSlidePrev,
      snapGrid
    } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      if (swiper.params.loop && !isVirtual) {
        swiper.slideToLoop(swiper.realIndex, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      clearTimeout(swiper.autoplay.resizeTimeout);
      swiper.autoplay.resizeTimeout = setTimeout(() => {
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
          swiper.autoplay.resume();
        }
      }, 500);
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }
  function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) e.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }
  function onScroll() {
    const swiper = this;
    const {
      wrapperEl,
      rtlTranslate,
      enabled
    } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit("setTranslate", swiper.translate, false);
  }
  function onLoad(e) {
    const swiper = this;
    processLazyPreloader(swiper, e.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
      return;
    }
    swiper.update();
  }
  function onDocumentTouchStart() {
    const swiper = this;
    if (swiper.documentTouchHandlerProceeded) return;
    swiper.documentTouchHandlerProceeded = true;
    if (swiper.params.touchReleaseOnEdges) {
      swiper.el.style.touchAction = "auto";
    }
  }
  var events = (swiper, method) => {
    const document2 = getDocument2();
    const {
      params,
      el,
      wrapperEl,
      device
    } = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    if (!el || typeof el === "string") return;
    document2[domMethod]("touchstart", swiper.onDocumentTouchStart, {
      passive: false,
      capture
    });
    el[domMethod]("touchstart", swiper.onTouchStart, {
      passive: false
    });
    el[domMethod]("pointerdown", swiper.onTouchStart, {
      passive: false
    });
    document2[domMethod]("touchmove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("pointermove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("touchend", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerup", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointercancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("touchcancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerout", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerleave", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("contextmenu", swiper.onTouchEnd, {
      passive: true
    });
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]("scroll", swiper.onScroll);
    }
    if (params.updateOnWindowResize) {
      swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    } else {
      swiper[swiperMethod]("observerUpdate", onResize, true);
    }
    el[domMethod]("load", swiper.onLoad, {
      capture: true
    });
  };
  function attachEvents() {
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    events(swiper, "on");
  }
  function detachEvents() {
    const swiper = this;
    events(swiper, "off");
  }
  var events$1 = {
    attachEvents,
    detachEvents
  };
  var isGridEnabled = (swiper, params) => {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    const swiper = this;
    const {
      realIndex,
      initialized,
      params,
      el
    } = swiper;
    const breakpoints2 = params.breakpoints;
    if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0) return;
    const document2 = getDocument2();
    const breakpointsBase = params.breakpointsBase === "window" || !params.breakpointsBase ? params.breakpointsBase : "container";
    const breakpointContainer = ["window", "container"].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document2.querySelector(params.breakpointsBase);
    const breakpoint = swiper.getBreakpoint(breakpoints2, breakpointsBase, breakpointContainer);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasGrabCursor = swiper.params.grabCursor;
    const isGrabCursor = breakpointParams.grabCursor;
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove("".concat(params.containerModifierClass, "grid"), "".concat(params.containerModifierClass, "grid-column"));
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add("".concat(params.containerModifierClass, "grid"));
      if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
        el.classList.add("".concat(params.containerModifierClass, "grid-column"));
      }
      swiper.emitContainerClasses();
    }
    if (wasGrabCursor && !isGrabCursor) {
      swiper.unsetGrabCursor();
    } else if (!wasGrabCursor && isGrabCursor) {
      swiper.setGrabCursor();
    }
    ["navigation", "pagination", "scrollbar"].forEach((prop) => {
      if (typeof breakpointParams[prop] === "undefined") return;
      const wasModuleEnabled = params[prop] && params[prop].enabled;
      const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper[prop].enable();
      }
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend2(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    const hasLoop = swiper.params.loop;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (initialized) {
      if (needsReLoop) {
        swiper.loopDestroy();
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (!wasLoop && hasLoop) {
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (wasLoop && !hasLoop) {
        swiper.loopDestroy();
      }
    }
    swiper.emit("breakpoint", breakpointParams);
  }
  function getBreakpoint(breakpoints2, base, containerEl) {
    if (base === void 0) {
      base = "window";
    }
    if (!breakpoints2 || base === "container" && !containerEl) return void 0;
    let breakpoint = false;
    const window2 = getWindow2();
    const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints2).map((point) => {
      if (typeof point === "string" && point.indexOf("@") === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = currentHeight * minRatio;
        return {
          value,
          point
        };
      }
      return {
        value: point,
        point
      };
    });
    points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
    for (let i = 0; i < points.length; i += 1) {
      const {
        point,
        value
      } = points[i];
      if (base === "window") {
        if (window2.matchMedia("(min-width: ".concat(value, "px)")).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }
  var breakpoints = {
    setBreakpoint,
    getBreakpoint
  };
  function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item) => {
      if (typeof item === "object") {
        Object.keys(item).forEach((classNames) => {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    const swiper = this;
    const {
      classNames,
      params,
      rtl,
      el,
      device
    } = swiper;
    const suffixes = prepareClasses(["initialized", params.direction, {
      "free-mode": swiper.params.freeMode && params.freeMode.enabled
    }, {
      "autoheight": params.autoHeight
    }, {
      "rtl": rtl
    }, {
      "grid": params.grid && params.grid.rows > 1
    }, {
      "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
    }, {
      "android": device.android
    }, {
      "ios": device.ios
    }, {
      "css-mode": params.cssMode
    }, {
      "centered": params.cssMode && params.centeredSlides
    }, {
      "watch-progress": params.watchSlidesProgress
    }], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
  }
  function removeClasses() {
    const swiper = this;
    const {
      el,
      classNames
    } = swiper;
    if (!el || typeof el === "string") return;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
  }
  var classes = {
    addClasses,
    removeClasses
  };
  function checkOverflow() {
    const swiper = this;
    const {
      isLocked: wasLocked,
      params
    } = swiper;
    const {
      slidesOffsetBefore
    } = params;
    if (slidesOffsetBefore) {
      const lastSlideIndex = swiper.slides.length - 1;
      const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }
  }
  var checkOverflow$1 = {
    checkOverflow
  };
  var defaults = {
    init: true,
    direction: "horizontal",
    oneWayMovement: false,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: "swiper",
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: void 0,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
  };
  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
      if (obj === void 0) {
        obj = {};
      }
      const moduleParamName = Object.keys(obj)[0];
      const moduleParams = obj[moduleParamName];
      if (typeof moduleParams !== "object" || moduleParams === null) {
        extend2(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }
      if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
        params[moduleParamName].auto = true;
      }
      if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
        params[moduleParamName].auto = true;
      }
      if (!(moduleParamName in params && "enabled" in moduleParams)) {
        extend2(allModulesParams, obj);
        return;
      }
      if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName]) params[moduleParamName] = {
        enabled: false
      };
      extend2(allModulesParams, obj);
    };
  }
  var prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes
  };
  var extendedDefaults = {};
  var Swiper = class _Swiper {
    constructor() {
      let el;
      let params;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params) params = {};
      params = extend2({}, params);
      if (el && !params.el) params.el = el;
      const document2 = getDocument2();
      if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
        const swipers = [];
        document2.querySelectorAll(params.el).forEach((containerEl) => {
          const newParams = extend2({}, params, {
            el: containerEl
          });
          swipers.push(new _Swiper(newParams));
        });
        return swipers;
      }
      const swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = [...swiper.__modules__];
      if (params.modules && Array.isArray(params.modules)) {
        swiper.modules.push(...params.modules);
      }
      const allModulesParams = {};
      swiper.modules.forEach((mod) => {
        mod({
          params,
          swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper)
        });
      });
      const swiperParams = extend2({}, defaults, allModulesParams);
      swiper.params = extend2({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend2({}, swiper.params);
      swiper.passedParams = extend2({}, params);
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach((eventName) => {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }
      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical() {
          return swiper.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / __pow(2, 23)) * __pow(2, 23);
        },
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          // Form elements to match
          focusableElements: swiper.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: void 0,
          // Velocities
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.emit("_swiper");
      if (swiper.params.init) {
        swiper.init();
      }
      return swiper;
    }
    getDirectionLabel(property) {
      if (this.isHorizontal()) {
        return property;
      }
      return {
        "width": "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        "marginRight": "marginBottom"
      }[property];
    }
    getSlideIndex(slideEl) {
      const {
        slidesEl,
        params
      } = this;
      const slides = elementChildren(slidesEl, ".".concat(params.slideClass, ", swiper-slide"));
      const firstSlideIndex = elementIndex(slides[0]);
      return elementIndex(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
      return this.getSlideIndex(this.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index));
    }
    recalcSlides() {
      const swiper = this;
      const {
        slidesEl,
        params
      } = swiper;
      swiper.slides = elementChildren(slidesEl, ".".concat(params.slideClass, ", swiper-slide"));
    }
    enable() {
      const swiper = this;
      if (swiper.enabled) return;
      swiper.enabled = true;
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      swiper.emit("enable");
    }
    disable() {
      const swiper = this;
      if (!swiper.enabled) return;
      swiper.enabled = false;
      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }
      swiper.emit("disable");
    }
    setProgress(progress, speed) {
      const swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      const min = swiper.minTranslate();
      const max = swiper.maxTranslate();
      const current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const cls = swiper.el.className.split(" ").filter((className) => {
        return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
      });
      swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
      const swiper = this;
      if (swiper.destroyed) return "";
      return slideEl.className.split(" ").filter((className) => {
        return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
      }).join(" ");
    }
    emitSlidesClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      const updates = [];
      swiper.slides.forEach((slideEl) => {
        const classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames
        });
        swiper.emit("_slideClass", slideEl, classNames);
      });
      swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view, exact) {
      if (view === void 0) {
        view = "current";
      }
      if (exact === void 0) {
        exact = false;
      }
      const swiper = this;
      const {
        params,
        slides,
        slidesGrid,
        slidesSizesGrid,
        size: swiperSize,
        activeIndex
      } = swiper;
      let spv = 1;
      if (typeof params.slidesPerView === "number") return params.slidesPerView;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
        let breakLoop;
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += Math.ceil(slides[i].swiperSlideSize);
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
      } else {
        if (view === "current") {
          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        }
      }
      return spv;
    }
    update() {
      const swiper = this;
      if (!swiper || swiper.destroyed) return;
      const {
        snapGrid,
        params
      } = swiper;
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        }
      });
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate2() {
        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      let translated;
      if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
        setTranslate2();
        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
          const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
          translated = swiper.slideTo(slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate2();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }
      const swiper = this;
      const currentDirection = swiper.params.direction;
      if (!newDirection) {
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
        return swiper;
      }
      swiper.el.classList.remove("".concat(swiper.params.containerModifierClass).concat(currentDirection));
      swiper.el.classList.add("".concat(swiper.params.containerModifierClass).concat(newDirection));
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.forEach((slideEl) => {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper.emit("changeDirection");
      if (needUpdate) swiper.update();
      return swiper;
    }
    changeLanguageDirection(direction) {
      const swiper = this;
      if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
      swiper.rtl = direction === "rtl";
      swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
      if (swiper.rtl) {
        swiper.el.classList.add("".concat(swiper.params.containerModifierClass, "rtl"));
        swiper.el.dir = "rtl";
      } else {
        swiper.el.classList.remove("".concat(swiper.params.containerModifierClass, "rtl"));
        swiper.el.dir = "ltr";
      }
      swiper.update();
    }
    mount(element) {
      const swiper = this;
      if (swiper.mounted) return true;
      let el = element || swiper.params.el;
      if (typeof el === "string") {
        el = document.querySelector(el);
      }
      if (!el) {
        return false;
      }
      el.swiper = swiper;
      if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
        swiper.isElement = true;
      }
      const getWrapperSelector = () => {
        return ".".concat((swiper.params.wrapperClass || "").trim().split(" ").join("."));
      };
      const getWrapper = () => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = el.shadowRoot.querySelector(getWrapperSelector());
          return res;
        }
        return elementChildren(el, getWrapperSelector())[0];
      };
      let wrapperEl = getWrapper();
      if (!wrapperEl && swiper.params.createElements) {
        wrapperEl = createElement("div", swiper.params.wrapperClass);
        el.append(wrapperEl);
        elementChildren(el, ".".concat(swiper.params.slideClass)).forEach((slideEl) => {
          wrapperEl.append(slideEl);
        });
      }
      Object.assign(swiper, {
        el,
        wrapperEl,
        slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
        hostEl: swiper.isElement ? el.parentNode.host : el,
        mounted: true,
        // RTL
        rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
        rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
        wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
      });
      return true;
    }
    init(el) {
      const swiper = this;
      if (swiper.initialized) return swiper;
      const mounted = swiper.mount(el);
      if (mounted === false) return swiper;
      swiper.emit("beforeInit");
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.addClasses();
      swiper.updateSize();
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }
      if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
        swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
      }
      if (swiper.params.loop) {
        swiper.loopCreate();
      }
      swiper.attachEvents();
      const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
      if (swiper.isElement) {
        lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
      }
      lazyElements.forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        } else {
          imageEl.addEventListener("load", (e) => {
            processLazyPreloader(swiper, e.target);
          });
        }
      });
      preload(swiper);
      swiper.initialized = true;
      preload(swiper);
      swiper.emit("init");
      swiper.emit("afterInit");
      return swiper;
    }
    destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }
      if (cleanStyles === void 0) {
        cleanStyles = true;
      }
      const swiper = this;
      const {
        params,
        el,
        wrapperEl,
        slides
      } = swiper;
      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }
      swiper.emit("beforeDestroy");
      swiper.initialized = false;
      swiper.detachEvents();
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (cleanStyles) {
        swiper.removeClasses();
        if (el && typeof el !== "string") {
          el.removeAttribute("style");
        }
        if (wrapperEl) {
          wrapperEl.removeAttribute("style");
        }
        if (slides && slides.length) {
          slides.forEach((slideEl) => {
            slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            slideEl.removeAttribute("style");
            slideEl.removeAttribute("data-swiper-slide-index");
          });
        }
      }
      swiper.emit("destroy");
      Object.keys(swiper.eventsListeners).forEach((eventName) => {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        if (swiper.el && typeof swiper.el !== "string") {
          swiper.el.swiper = null;
        }
        deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    }
    static extendDefaults(newDefaults) {
      extend2(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults;
    }
    static installModule(mod) {
      if (!_Swiper.prototype.__modules__) _Swiper.prototype.__modules__ = [];
      const modules2 = _Swiper.prototype.__modules__;
      if (typeof mod === "function" && modules2.indexOf(mod) < 0) {
        modules2.push(mod);
      }
    }
    static use(module) {
      if (Array.isArray(module)) {
        module.forEach((m) => _Swiper.installModule(m));
        return _Swiper;
      }
      _Swiper.installModule(module);
      return _Swiper;
    }
  };
  Object.keys(prototypes).forEach((prototypeGroup) => {
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer]);

  // node_modules/swiper/modules/virtual.mjs
  function Virtual(_ref) {
    let {
      swiper,
      extendParams,
      on: on2,
      emit
    } = _ref;
    extendParams({
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: true,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    });
    let cssModeTimeout;
    const document2 = getDocument2();
    swiper.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: []
    };
    const tempDOM = document2.createElement("div");
    function renderSlide(slide2, index) {
      const params = swiper.params.virtual;
      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }
      let slideEl;
      if (params.renderSlide) {
        slideEl = params.renderSlide.call(swiper, slide2, index);
        if (typeof slideEl === "string") {
          tempDOM.innerHTML = slideEl;
          slideEl = tempDOM.children[0];
        }
      } else if (swiper.isElement) {
        slideEl = createElement("swiper-slide");
      } else {
        slideEl = createElement("div", swiper.params.slideClass);
      }
      slideEl.setAttribute("data-swiper-slide-index", index);
      if (!params.renderSlide) {
        slideEl.innerHTML = slide2;
      }
      if (params.cache) {
        swiper.virtual.cache[index] = slideEl;
      }
      return slideEl;
    }
    function update2(force, beforeInit, forceActiveIndex) {
      const {
        slidesPerView,
        slidesPerGroup,
        centeredSlides,
        loop: isLoop,
        initialSlide
      } = swiper.params;
      if (beforeInit && !isLoop && initialSlide > 0) {
        return;
      }
      const {
        addSlidesBefore,
        addSlidesAfter
      } = swiper.params.virtual;
      const {
        from: previousFrom,
        to: previousTo,
        slides,
        slidesGrid: previousSlidesGrid,
        offset: previousOffset
      } = swiper.virtual;
      if (!swiper.params.cssMode) {
        swiper.updateActiveIndex();
      }
      const activeIndex = typeof forceActiveIndex === "undefined" ? swiper.activeIndex || 0 : forceActiveIndex;
      let offsetProp;
      if (swiper.rtlTranslate) offsetProp = "right";
      else offsetProp = swiper.isHorizontal() ? "left" : "top";
      let slidesAfter;
      let slidesBefore;
      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
        slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
      }
      let from = activeIndex - slidesBefore;
      let to = activeIndex + slidesAfter;
      if (!isLoop) {
        from = Math.max(from, 0);
        to = Math.min(to, slides.length - 1);
      }
      let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
      if (isLoop && activeIndex >= slidesBefore) {
        from -= slidesBefore;
        if (!centeredSlides) offset += swiper.slidesGrid[0];
      } else if (isLoop && activeIndex < slidesBefore) {
        from = -slidesBefore;
        if (centeredSlides) offset += swiper.slidesGrid[0];
      }
      Object.assign(swiper.virtual, {
        from,
        to,
        offset,
        slidesGrid: swiper.slidesGrid,
        slidesBefore,
        slidesAfter
      });
      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        emit("virtualUpdate");
      }
      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.forEach((slideEl) => {
            slideEl.style[offsetProp] = "".concat(offset - Math.abs(swiper.cssOverflowAdjustment()), "px");
          });
        }
        swiper.updateProgress();
        emit("virtualUpdate");
        return;
      }
      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset,
          from,
          to,
          slides: (function getSlides() {
            const slidesToRender = [];
            for (let i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }
            return slidesToRender;
          })()
        });
        if (swiper.params.virtual.renderExternalUpdate) {
          onRendered();
        } else {
          emit("virtualUpdate");
        }
        return;
      }
      const prependIndexes = [];
      const appendIndexes = [];
      const getSlideIndex = (index) => {
        let slideIndex = index;
        if (index < 0) {
          slideIndex = slides.length + index;
        } else if (slideIndex >= slides.length) {
          slideIndex = slideIndex - slides.length;
        }
        return slideIndex;
      };
      if (force) {
        swiper.slides.filter((el) => el.matches(".".concat(swiper.params.slideClass, ", swiper-slide"))).forEach((slideEl) => {
          slideEl.remove();
        });
      } else {
        for (let i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            const slideIndex = getSlideIndex(i);
            swiper.slides.filter((el) => el.matches(".".concat(swiper.params.slideClass, '[data-swiper-slide-index="').concat(slideIndex, '"], swiper-slide[data-swiper-slide-index="').concat(slideIndex, '"]'))).forEach((slideEl) => {
              slideEl.remove();
            });
          }
        }
      }
      const loopFrom = isLoop ? -slides.length : 0;
      const loopTo = isLoop ? slides.length * 2 : slides.length;
      for (let i = loopFrom; i < loopTo; i += 1) {
        if (i >= from && i <= to) {
          const slideIndex = getSlideIndex(i);
          if (typeof previousTo === "undefined" || force) {
            appendIndexes.push(slideIndex);
          } else {
            if (i > previousTo) appendIndexes.push(slideIndex);
            if (i < previousFrom) prependIndexes.push(slideIndex);
          }
        }
      }
      appendIndexes.forEach((index) => {
        swiper.slidesEl.append(renderSlide(slides[index], index));
      });
      if (isLoop) {
        for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
          const index = prependIndexes[i];
          swiper.slidesEl.prepend(renderSlide(slides[index], index));
        }
      } else {
        prependIndexes.sort((a, b) => b - a);
        prependIndexes.forEach((index) => {
          swiper.slidesEl.prepend(renderSlide(slides[index], index));
        });
      }
      elementChildren(swiper.slidesEl, ".swiper-slide, swiper-slide").forEach((slideEl) => {
        slideEl.style[offsetProp] = "".concat(offset - Math.abs(swiper.cssOverflowAdjustment()), "px");
      });
      onRendered();
    }
    function appendSlide2(slides) {
      if (typeof slides === "object" && "length" in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.push(slides[i]);
        }
      } else {
        swiper.virtual.slides.push(slides);
      }
      update2(true);
    }
    function prependSlide2(slides) {
      const activeIndex = swiper.activeIndex;
      let newActiveIndex = activeIndex + 1;
      let numberOfNewSlides = 1;
      if (Array.isArray(slides)) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
        }
        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }
      if (swiper.params.virtual.cache) {
        const cache = swiper.virtual.cache;
        const newCache = {};
        Object.keys(cache).forEach((cachedIndex) => {
          const cachedEl = cache[cachedIndex];
          const cachedElIndex = cachedEl.getAttribute("data-swiper-slide-index");
          if (cachedElIndex) {
            cachedEl.setAttribute("data-swiper-slide-index", parseInt(cachedElIndex, 10) + numberOfNewSlides);
          }
          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
        });
        swiper.virtual.cache = newCache;
      }
      update2(true);
      swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide2(slidesIndexes) {
      if (typeof slidesIndexes === "undefined" || slidesIndexes === null) return;
      let activeIndex = swiper.activeIndex;
      if (Array.isArray(slidesIndexes)) {
        for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
            Object.keys(swiper.virtual.cache).forEach((key) => {
              if (key > slidesIndexes) {
                swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
                swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
                delete swiper.virtual.cache[key];
              }
            });
          }
          swiper.virtual.slides.splice(slidesIndexes[i], 1);
          if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
          Object.keys(swiper.virtual.cache).forEach((key) => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute("data-swiper-slide-index", key - 1);
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes, 1);
        if (slidesIndexes < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
      update2(true);
      swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides2() {
      swiper.virtual.slides = [];
      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }
      update2(true);
      swiper.slideTo(0, 0);
    }
    on2("beforeInit", () => {
      if (!swiper.params.virtual.enabled) return;
      let domSlidesAssigned;
      if (typeof swiper.passedParams.virtual.slides === "undefined") {
        const slides = [...swiper.slidesEl.children].filter((el) => el.matches(".".concat(swiper.params.slideClass, ", swiper-slide")));
        if (slides && slides.length) {
          swiper.virtual.slides = [...slides];
          domSlidesAssigned = true;
          slides.forEach((slideEl, slideIndex) => {
            slideEl.setAttribute("data-swiper-slide-index", slideIndex);
            swiper.virtual.cache[slideIndex] = slideEl;
            slideEl.remove();
          });
        }
      }
      if (!domSlidesAssigned) {
        swiper.virtual.slides = swiper.params.virtual.slides;
      }
      swiper.classNames.push("".concat(swiper.params.containerModifierClass, "virtual"));
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
      update2(false, true);
    });
    on2("setTranslate", () => {
      if (!swiper.params.virtual.enabled) return;
      if (swiper.params.cssMode && !swiper._immediateVirtual) {
        clearTimeout(cssModeTimeout);
        cssModeTimeout = setTimeout(() => {
          update2();
        }, 100);
      } else {
        update2();
      }
    });
    on2("init update resize", () => {
      if (!swiper.params.virtual.enabled) return;
      if (swiper.params.cssMode) {
        setCSSProperty(swiper.wrapperEl, "--swiper-virtual-size", "".concat(swiper.virtualSize, "px"));
      }
    });
    Object.assign(swiper.virtual, {
      appendSlide: appendSlide2,
      prependSlide: prependSlide2,
      removeSlide: removeSlide2,
      removeAllSlides: removeAllSlides2,
      update: update2
    });
  }

  // node_modules/swiper/modules/keyboard.mjs
  function Keyboard(_ref) {
    let {
      swiper,
      extendParams,
      on: on2,
      emit
    } = _ref;
    const document2 = getDocument2();
    const window2 = getWindow2();
    swiper.keyboard = {
      enabled: false
    };
    extendParams({
      keyboard: {
        enabled: false,
        onlyInViewport: true,
        pageUpDown: true
      }
    });
    function handle(event2) {
      if (!swiper.enabled) return;
      const {
        rtlTranslate: rtl
      } = swiper;
      let e = event2;
      if (e.originalEvent) e = e.originalEvent;
      const kc = e.keyCode || e.charCode;
      const pageUpDown = swiper.params.keyboard.pageUpDown;
      const isPageUp = pageUpDown && kc === 33;
      const isPageDown = pageUpDown && kc === 34;
      const isArrowLeft = kc === 37;
      const isArrowRight = kc === 39;
      const isArrowUp = kc === 38;
      const isArrowDown = kc === 40;
      if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
        return false;
      }
      if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
        return false;
      }
      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return void 0;
      }
      if (document2.activeElement && document2.activeElement.nodeName && (document2.activeElement.nodeName.toLowerCase() === "input" || document2.activeElement.nodeName.toLowerCase() === "textarea")) {
        return void 0;
      }
      if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
        let inView = false;
        if (elementParents(swiper.el, ".".concat(swiper.params.slideClass, ", swiper-slide")).length > 0 && elementParents(swiper.el, ".".concat(swiper.params.slideActiveClass)).length === 0) {
          return void 0;
        }
        const el = swiper.el;
        const swiperWidth = el.clientWidth;
        const swiperHeight = el.clientHeight;
        const windowWidth = window2.innerWidth;
        const windowHeight = window2.innerHeight;
        const swiperOffset = elementOffset(el);
        if (rtl) swiperOffset.left -= el.scrollLeft;
        const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
        for (let i = 0; i < swiperCoord.length; i += 1) {
          const point = swiperCoord[i];
          if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
            if (point[0] === 0 && point[1] === 0) continue;
            inView = true;
          }
        }
        if (!inView) return void 0;
      }
      if (swiper.isHorizontal()) {
        if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
          if (e.preventDefault) e.preventDefault();
          else e.returnValue = false;
        }
        if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
        if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
      } else {
        if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
          if (e.preventDefault) e.preventDefault();
          else e.returnValue = false;
        }
        if (isPageDown || isArrowDown) swiper.slideNext();
        if (isPageUp || isArrowUp) swiper.slidePrev();
      }
      emit("keyPress", kc);
      return void 0;
    }
    function enable() {
      if (swiper.keyboard.enabled) return;
      document2.addEventListener("keydown", handle);
      swiper.keyboard.enabled = true;
    }
    function disable() {
      if (!swiper.keyboard.enabled) return;
      document2.removeEventListener("keydown", handle);
      swiper.keyboard.enabled = false;
    }
    on2("init", () => {
      if (swiper.params.keyboard.enabled) {
        enable();
      }
    });
    on2("destroy", () => {
      if (swiper.keyboard.enabled) {
        disable();
      }
    });
    Object.assign(swiper.keyboard, {
      enable,
      disable
    });
  }

  // node_modules/swiper/modules/mousewheel.mjs
  function Mousewheel(_ref) {
    let {
      swiper,
      extendParams,
      on: on2,
      emit
    } = _ref;
    const window2 = getWindow2();
    extendParams({
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null,
        noMousewheelClass: "swiper-no-mousewheel"
      }
    });
    swiper.mousewheel = {
      enabled: false
    };
    let timeout;
    let lastScrollTime = now();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e) {
      const PIXEL_STEP = 10;
      const LINE_HEIGHT = 40;
      const PAGE_HEIGHT = 800;
      let sX = 0;
      let sY = 0;
      let pX = 0;
      let pY = 0;
      if ("detail" in e) {
        sY = e.detail;
      }
      if ("wheelDelta" in e) {
        sY = -e.wheelDelta / 120;
      }
      if ("wheelDeltaY" in e) {
        sY = -e.wheelDeltaY / 120;
      }
      if ("wheelDeltaX" in e) {
        sX = -e.wheelDeltaX / 120;
      }
      if ("axis" in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }
      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;
      if ("deltaY" in e) {
        pY = e.deltaY;
      }
      if ("deltaX" in e) {
        pX = e.deltaX;
      }
      if (e.shiftKey && !pX) {
        pX = pY;
        pY = 0;
      }
      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) {
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      }
      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }
      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }
      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY
      };
    }
    function handleMouseEnter() {
      if (!swiper.enabled) return;
      swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
      if (!swiper.enabled) return;
      swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
      if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
        return false;
      }
      if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
        return false;
      }
      if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
        return true;
      }
      if (newEvent.direction < 0) {
        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
          swiper.slideNext();
          emit("scroll", newEvent.raw);
        }
      } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
        swiper.slidePrev();
        emit("scroll", newEvent.raw);
      }
      lastScrollTime = new window2.Date().getTime();
      return false;
    }
    function releaseScroll(newEvent) {
      const params = swiper.params.mousewheel;
      if (newEvent.direction < 0) {
        if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
          return true;
        }
      } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
        return true;
      }
      return false;
    }
    function handle(event2) {
      let e = event2;
      let disableParentSwiper = true;
      if (!swiper.enabled) return;
      if (event2.target.closest(".".concat(swiper.params.mousewheel.noMousewheelClass))) return;
      const params = swiper.params.mousewheel;
      if (swiper.params.cssMode) {
        e.preventDefault();
      }
      let targetEl = swiper.el;
      if (swiper.params.mousewheel.eventsTarget !== "container") {
        targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
      }
      const targetElContainsTarget = targetEl && targetEl.contains(e.target);
      if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
      if (e.originalEvent) e = e.originalEvent;
      let delta = 0;
      const rtlFactor = swiper.rtlTranslate ? -1 : 1;
      const data = normalize(e);
      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
          else return true;
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
        else return true;
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }
      if (delta === 0) return true;
      if (params.invert) delta = -delta;
      let positions = swiper.getTranslate() + delta * params.sensitivity;
      if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
      if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
      disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
      if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
      if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
          raw: event2
        };
        if (recentWheelEvents.length >= 2) {
          recentWheelEvents.shift();
        }
        const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
        recentWheelEvents.push(newEvent);
        if (prevEvent) {
          if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
            animateSlider(newEvent);
          }
        } else {
          animateSlider(newEvent);
        }
        if (releaseScroll(newEvent)) {
          return true;
        }
      } else {
        const newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta)
        };
        const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
        if (!ignoreWheelEvents) {
          lastEventBeforeSnap = void 0;
          let position = swiper.getTranslate() + delta * params.sensitivity;
          const wasBeginning = swiper.isBeginning;
          const wasEnd = swiper.isEnd;
          if (position >= swiper.minTranslate()) position = swiper.minTranslate();
          if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
          swiper.setTransition(0);
          swiper.setTranslate(position);
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
          if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
            swiper.updateSlidesClasses();
          }
          if (swiper.params.loop) {
            swiper.loopFix({
              direction: newEvent.direction < 0 ? "next" : "prev",
              byMousewheel: true
            });
          }
          if (swiper.params.freeMode.sticky) {
            clearTimeout(timeout);
            timeout = void 0;
            if (recentWheelEvents.length >= 15) {
              recentWheelEvents.shift();
            }
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : void 0;
            const firstEvent = recentWheelEvents[0];
            recentWheelEvents.push(newEvent);
            if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
              recentWheelEvents.splice(0);
            } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
              const snapToThreshold = delta > 0 ? 0.8 : 0.2;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              timeout = nextTick(() => {
                if (swiper.destroyed || !swiper.params) return;
                swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
              }, 0);
            }
            if (!timeout) {
              timeout = nextTick(() => {
                if (swiper.destroyed || !swiper.params) return;
                const snapToThreshold = 0.5;
                lastEventBeforeSnap = newEvent;
                recentWheelEvents.splice(0);
                swiper.slideToClosest(swiper.params.speed, true, void 0, snapToThreshold);
              }, 500);
            }
          }
          if (!ignoreWheelEvents) emit("scroll", e);
          if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
          if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
            return true;
          }
        }
      }
      if (e.preventDefault) e.preventDefault();
      else e.returnValue = false;
      return false;
    }
    function events2(method) {
      let targetEl = swiper.el;
      if (swiper.params.mousewheel.eventsTarget !== "container") {
        targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
      }
      targetEl[method]("mouseenter", handleMouseEnter);
      targetEl[method]("mouseleave", handleMouseLeave);
      targetEl[method]("wheel", handle);
    }
    function enable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.removeEventListener("wheel", handle);
        return true;
      }
      if (swiper.mousewheel.enabled) return false;
      events2("addEventListener");
      swiper.mousewheel.enabled = true;
      return true;
    }
    function disable() {
      if (swiper.params.cssMode) {
        swiper.wrapperEl.addEventListener(event, handle);
        return true;
      }
      if (!swiper.mousewheel.enabled) return false;
      events2("removeEventListener");
      swiper.mousewheel.enabled = false;
      return true;
    }
    on2("init", () => {
      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
        disable();
      }
      if (swiper.params.mousewheel.enabled) enable();
    });
    on2("destroy", () => {
      if (swiper.params.cssMode) {
        enable();
      }
      if (swiper.mousewheel.enabled) disable();
    });
    Object.assign(swiper.mousewheel, {
      enable,
      disable
    });
  }

  // node_modules/swiper/shared/create-element-if-not-defined.mjs
  function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach((key) => {
        if (!params[key] && params.auto === true) {
          let element = elementChildren(swiper.el, ".".concat(checkProps[key]))[0];
          if (!element) {
            element = createElement("div", checkProps[key]);
            element.className = checkProps[key];
            swiper.el.append(element);
          }
          params[key] = element;
          originalParams[key] = element;
        }
      });
    }
    return params;
  }

  // node_modules/swiper/modules/navigation.mjs
  function Navigation(_ref) {
    let {
      swiper,
      extendParams,
      on: on2,
      emit
    } = _ref;
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    });
    swiper.navigation = {
      nextEl: null,
      prevEl: null
    };
    function getEl(el) {
      let res;
      if (el && typeof el === "string" && swiper.isElement) {
        res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
        if (res) return res;
      }
      if (el) {
        if (typeof el === "string") res = [...document.querySelectorAll(el)];
        if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
          res = swiper.el.querySelector(el);
        } else if (res && res.length === 1) {
          res = res[0];
        }
      }
      if (el && !res) return el;
      return res;
    }
    function toggleEl(el, disabled) {
      const params = swiper.params.navigation;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (subEl) {
          subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
          if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
          if (swiper.params.watchOverflow && swiper.enabled) {
            subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
          }
        }
      });
    }
    function update2() {
      const {
        nextEl,
        prevEl
      } = swiper.navigation;
      if (swiper.params.loop) {
        toggleEl(prevEl, false);
        toggleEl(nextEl, false);
        return;
      }
      toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
      toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slidePrev();
      emit("navigationPrev");
    }
    function onNextClick(e) {
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
      swiper.slideNext();
      emit("navigationNext");
    }
    function init() {
      const params = swiper.params.navigation;
      swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      });
      if (!(params.nextEl || params.prevEl)) return;
      let nextEl = getEl(params.nextEl);
      let prevEl = getEl(params.prevEl);
      Object.assign(swiper.navigation, {
        nextEl,
        prevEl
      });
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const initButton = (el, dir) => {
        if (el) {
          el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
        }
        if (!swiper.enabled && el) {
          el.classList.add(...params.lockClass.split(" "));
        }
      };
      nextEl.forEach((el) => initButton(el, "next"));
      prevEl.forEach((el) => initButton(el, "prev"));
    }
    function destroy2() {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const destroyButton = (el, dir) => {
        el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
        el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
      };
      nextEl.forEach((el) => destroyButton(el, "next"));
      prevEl.forEach((el) => destroyButton(el, "prev"));
    }
    on2("init", () => {
      if (swiper.params.navigation.enabled === false) {
        disable();
      } else {
        init();
        update2();
      }
    });
    on2("toEdge fromEdge lock unlock", () => {
      update2();
    });
    on2("destroy", () => {
      destroy2();
    });
    on2("enable disable", () => {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (swiper.enabled) {
        update2();
        return;
      }
      [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.add(swiper.params.navigation.lockClass));
    });
    on2("click", (_s, e) => {
      let {
        nextEl,
        prevEl
      } = swiper.navigation;
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      const targetEl = e.target;
      let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
      if (swiper.isElement && !targetIsButton) {
        const path = e.path || e.composedPath && e.composedPath();
        if (path) {
          targetIsButton = path.find((pathEl) => nextEl.includes(pathEl) || prevEl.includes(pathEl));
        }
      }
      if (swiper.params.navigation.hideOnClick && !targetIsButton) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
        let isHidden;
        if (nextEl.length) {
          isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        } else if (prevEl.length) {
          isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
        }
        if (isHidden === true) {
          emit("navigationShow");
        } else {
          emit("navigationHide");
        }
        [...nextEl, ...prevEl].filter((el) => !!el).forEach((el) => el.classList.toggle(swiper.params.navigation.hiddenClass));
      }
    });
    const enable = () => {
      swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
      init();
      update2();
    };
    const disable = () => {
      swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
      destroy2();
    };
    Object.assign(swiper.navigation, {
      enable,
      disable,
      update: update2,
      init,
      destroy: destroy2
    });
  }

  // node_modules/swiper/shared/classes-to-selector.mjs
  function classesToSelector(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return ".".concat(classes2.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, "."));
  }

  // node_modules/swiper/modules/pagination.mjs
  function Pagination(_ref) {
    let {
      swiper,
      extendParams,
      on: on2,
      emit
    } = _ref;
    const pfx = "swiper-pagination";
    extendParams({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: "bullets",
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: (number) => number,
        formatFractionTotal: (number) => number,
        bulletClass: "".concat(pfx, "-bullet"),
        bulletActiveClass: "".concat(pfx, "-bullet-active"),
        modifierClass: "".concat(pfx, "-"),
        currentClass: "".concat(pfx, "-current"),
        totalClass: "".concat(pfx, "-total"),
        hiddenClass: "".concat(pfx, "-hidden"),
        progressbarFillClass: "".concat(pfx, "-progressbar-fill"),
        progressbarOppositeClass: "".concat(pfx, "-progressbar-opposite"),
        clickableClass: "".concat(pfx, "-clickable"),
        lockClass: "".concat(pfx, "-lock"),
        horizontalClass: "".concat(pfx, "-horizontal"),
        verticalClass: "".concat(pfx, "-vertical"),
        paginationDisabledClass: "".concat(pfx, "-disabled")
      }
    });
    swiper.pagination = {
      el: null,
      bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
      return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
    }
    function setSideBullets(bulletEl, position) {
      const {
        bulletActiveClass
      } = swiper.params.pagination;
      if (!bulletEl) return;
      bulletEl = bulletEl["".concat(position === "prev" ? "previous" : "next", "ElementSibling")];
      if (bulletEl) {
        bulletEl.classList.add("".concat(bulletActiveClass, "-").concat(position));
        bulletEl = bulletEl["".concat(position === "prev" ? "previous" : "next", "ElementSibling")];
        if (bulletEl) {
          bulletEl.classList.add("".concat(bulletActiveClass, "-").concat(position, "-").concat(position));
        }
      }
    }
    function getMoveDirection(prevIndex, nextIndex, length) {
      prevIndex = prevIndex % length;
      nextIndex = nextIndex % length;
      if (nextIndex === prevIndex + 1) {
        return "next";
      } else if (nextIndex === prevIndex - 1) {
        return "previous";
      }
      return;
    }
    function onBulletClick(e) {
      const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
      if (!bulletEl) {
        return;
      }
      e.preventDefault();
      const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
      if (swiper.params.loop) {
        if (swiper.realIndex === index) return;
        const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
        if (moveDirection === "next") {
          swiper.slideNext();
        } else if (moveDirection === "previous") {
          swiper.slidePrev();
        } else {
          swiper.slideToLoop(index);
        }
      } else {
        swiper.slideTo(index);
      }
    }
    function update2() {
      const rtl = swiper.rtl;
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      let el = swiper.pagination.el;
      el = makeElementsArray(el);
      let current;
      let previousIndex;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.loop) {
        previousIndex = swiper.previousRealIndex || 0;
        current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
      } else if (typeof swiper.snapIndex !== "undefined") {
        current = swiper.snapIndex;
        previousIndex = swiper.previousSnapIndex;
      } else {
        previousIndex = swiper.previousIndex || 0;
        current = swiper.activeIndex || 0;
      }
      if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        const bullets = swiper.pagination.bullets;
        let firstIndex;
        let lastIndex;
        let midIndex;
        if (params.dynamicBullets) {
          bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
          el.forEach((subEl) => {
            subEl.style[swiper.isHorizontal() ? "width" : "height"] = "".concat(bulletSize * (params.dynamicMainBullets + 4), "px");
          });
          if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
            dynamicBulletIndex += current - (previousIndex || 0);
            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
              dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (dynamicBulletIndex < 0) {
              dynamicBulletIndex = 0;
            }
          }
          firstIndex = Math.max(current - dynamicBulletIndex, 0);
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }
        bullets.forEach((bulletEl) => {
          const classesToRemove = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => "".concat(params.bulletActiveClass).concat(suffix))].map((s) => typeof s === "string" && s.includes(" ") ? s.split(" ") : s).flat();
          bulletEl.classList.remove(...classesToRemove);
        });
        if (el.length > 1) {
          bullets.forEach((bullet) => {
            const bulletIndex = elementIndex(bullet);
            if (bulletIndex === current) {
              bullet.classList.add(...params.bulletActiveClass.split(" "));
            } else if (swiper.isElement) {
              bullet.setAttribute("part", "bullet");
            }
            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                bullet.classList.add(..."".concat(params.bulletActiveClass, "-main").split(" "));
              }
              if (bulletIndex === firstIndex) {
                setSideBullets(bullet, "prev");
              }
              if (bulletIndex === lastIndex) {
                setSideBullets(bullet, "next");
              }
            }
          });
        } else {
          const bullet = bullets[current];
          if (bullet) {
            bullet.classList.add(...params.bulletActiveClass.split(" "));
          }
          if (swiper.isElement) {
            bullets.forEach((bulletEl, bulletIndex) => {
              bulletEl.setAttribute("part", bulletIndex === current ? "bullet-active" : "bullet");
            });
          }
          if (params.dynamicBullets) {
            const firstDisplayedBullet = bullets[firstIndex];
            const lastDisplayedBullet = bullets[lastIndex];
            for (let i = firstIndex; i <= lastIndex; i += 1) {
              if (bullets[i]) {
                bullets[i].classList.add(..."".concat(params.bulletActiveClass, "-main").split(" "));
              }
            }
            setSideBullets(firstDisplayedBullet, "prev");
            setSideBullets(lastDisplayedBullet, "next");
          }
        }
        if (params.dynamicBullets) {
          const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
          const offsetProp = rtl ? "right" : "left";
          bullets.forEach((bullet) => {
            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = "".concat(bulletsOffset, "px");
          });
        }
      }
      el.forEach((subEl, subElIndex) => {
        if (params.type === "fraction") {
          subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach((fractionEl) => {
            fractionEl.textContent = params.formatFractionCurrent(current + 1);
          });
          subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach((totalEl) => {
            totalEl.textContent = params.formatFractionTotal(total);
          });
        }
        if (params.type === "progressbar") {
          let progressbarDirection;
          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
          } else {
            progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
          }
          const scale = (current + 1) / total;
          let scaleX = 1;
          let scaleY = 1;
          if (progressbarDirection === "horizontal") {
            scaleX = scale;
          } else {
            scaleY = scale;
          }
          subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach((progressEl) => {
            progressEl.style.transform = "translate3d(0,0,0) scaleX(".concat(scaleX, ") scaleY(").concat(scaleY, ")");
            progressEl.style.transitionDuration = "".concat(swiper.params.speed, "ms");
          });
        }
        if (params.type === "custom" && params.renderCustom) {
          subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
          if (subElIndex === 0) emit("paginationRender", subEl);
        } else {
          if (subElIndex === 0) emit("paginationRender", subEl);
          emit("paginationUpdate", subEl);
        }
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
        }
      });
    }
    function render() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
      let el = swiper.pagination.el;
      el = makeElementsArray(el);
      let paginationHTML = "";
      if (params.type === "bullets") {
        let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
          numberOfBullets = slidesLength;
        }
        for (let i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += "<".concat(params.bulletElement, " ").concat(swiper.isElement ? 'part="bullet"' : "", ' class="').concat(params.bulletClass, '"></').concat(params.bulletElement, ">");
          }
        }
      }
      if (params.type === "fraction") {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = '<span class="'.concat(params.currentClass, '"></span>') + " / " + '<span class="'.concat(params.totalClass, '"></span>');
        }
      }
      if (params.type === "progressbar") {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = '<span class="'.concat(params.progressbarFillClass, '"></span>');
        }
      }
      swiper.pagination.bullets = [];
      el.forEach((subEl) => {
        if (params.type !== "custom") {
          subEl.innerHTML = paginationHTML || "";
        }
        if (params.type === "bullets") {
          swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
        }
      });
      if (params.type !== "custom") {
        emit("paginationRender", el[0]);
      }
    }
    function init() {
      swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
        el: "swiper-pagination"
      });
      const params = swiper.params.pagination;
      if (!params.el) return;
      let el;
      if (typeof params.el === "string" && swiper.isElement) {
        el = swiper.el.querySelector(params.el);
      }
      if (!el && typeof params.el === "string") {
        el = [...document.querySelectorAll(params.el)];
      }
      if (!el) {
        el = params.el;
      }
      if (!el || el.length === 0) return;
      if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
        el = [...swiper.el.querySelectorAll(params.el)];
        if (el.length > 1) {
          el = el.find((subEl) => {
            if (elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
            return true;
          });
        }
      }
      if (Array.isArray(el) && el.length === 1) el = el[0];
      Object.assign(swiper.pagination, {
        el
      });
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        if (params.type === "bullets" && params.clickable) {
          subEl.classList.add(...(params.clickableClass || "").split(" "));
        }
        subEl.classList.add(params.modifierClass + params.type);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.type === "bullets" && params.dynamicBullets) {
          subEl.classList.add("".concat(params.modifierClass).concat(params.type, "-dynamic"));
          dynamicBulletIndex = 0;
          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }
        if (params.type === "progressbar" && params.progressbarOpposite) {
          subEl.classList.add(params.progressbarOppositeClass);
        }
        if (params.clickable) {
          subEl.addEventListener("click", onBulletClick);
        }
        if (!swiper.enabled) {
          subEl.classList.add(params.lockClass);
        }
      });
    }
    function destroy2() {
      const params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      let el = swiper.pagination.el;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => {
          subEl.classList.remove(params.hiddenClass);
          subEl.classList.remove(params.modifierClass + params.type);
          subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
          if (params.clickable) {
            subEl.classList.remove(...(params.clickableClass || "").split(" "));
            subEl.removeEventListener("click", onBulletClick);
          }
        });
      }
      if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl) => subEl.classList.remove(...params.bulletActiveClass.split(" ")));
    }
    on2("changeDirection", () => {
      if (!swiper.pagination || !swiper.pagination.el) return;
      const params = swiper.params.pagination;
      let {
        el
      } = swiper.pagination;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on2("init", () => {
      if (swiper.params.pagination.enabled === false) {
        disable();
      } else {
        init();
        render();
        update2();
      }
    });
    on2("activeIndexChange", () => {
      if (typeof swiper.snapIndex === "undefined") {
        update2();
      }
    });
    on2("snapIndexChange", () => {
      update2();
    });
    on2("snapGridLengthChange", () => {
      render();
      update2();
    });
    on2("destroy", () => {
      destroy2();
    });
    on2("enable disable", () => {
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass));
      }
    });
    on2("lock unlock", () => {
      update2();
    });
    on2("click", (_s, e) => {
      const targetEl = e.target;
      const el = makeElementsArray(swiper.pagination.el);
      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
        const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
        if (isHidden === true) {
          emit("paginationShow");
        } else {
          emit("paginationHide");
        }
        el.forEach((subEl) => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
      }
    });
    const enable = () => {
      swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
      }
      init();
      render();
      update2();
    };
    const disable = () => {
      swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
      let {
        el
      } = swiper.pagination;
      if (el) {
        el = makeElementsArray(el);
        el.forEach((subEl) => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
      }
      destroy2();
    };
    Object.assign(swiper.pagination, {
      enable,
      disable,
      render,
      update: update2,
      init,
      destroy: destroy2
    });
  }

  // node_modules/swiper/modules/scrollbar.mjs
  function Scrollbar(_ref) {
    let {
      swiper,
      extendParams,
      on: on2,
      emit
    } = _ref;
    const document2 = getDocument2();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical"
      }
    });
    swiper.scrollbar = {
      el: null,
      dragEl: null
    };
    function setTranslate2() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      const {
        scrollbar,
        rtlTranslate: rtl
      } = swiper;
      const {
        dragEl,
        el
      } = scrollbar;
      const params = swiper.params.scrollbar;
      const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
      let newSize = dragSize;
      let newPos = (trackSize - dragSize) * progress;
      if (rtl) {
        newPos = -newPos;
        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }
      if (swiper.isHorizontal()) {
        dragEl.style.transform = "translate3d(".concat(newPos, "px, 0, 0)");
        dragEl.style.width = "".concat(newSize, "px");
      } else {
        dragEl.style.transform = "translate3d(0px, ".concat(newPos, "px, 0)");
        dragEl.style.height = "".concat(newSize, "px");
      }
      if (params.hide) {
        clearTimeout(timeout);
        el.style.opacity = 1;
        timeout = setTimeout(() => {
          el.style.opacity = 0;
          el.style.transitionDuration = "400ms";
        }, 1e3);
      }
    }
    function setTransition2(duration) {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      swiper.scrollbar.dragEl.style.transitionDuration = "".concat(duration, "ms");
    }
    function updateSize2() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      const {
        scrollbar
      } = swiper;
      const {
        dragEl,
        el
      } = scrollbar;
      dragEl.style.width = "";
      dragEl.style.height = "";
      trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
      divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
      if (swiper.params.scrollbar.dragSize === "auto") {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }
      if (swiper.isHorizontal()) {
        dragEl.style.width = "".concat(dragSize, "px");
      } else {
        dragEl.style.height = "".concat(dragSize, "px");
      }
      if (divider >= 1) {
        el.style.display = "none";
      } else {
        el.style.display = "";
      }
      if (swiper.params.scrollbar.hide) {
        el.style.opacity = 0;
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        scrollbar.el.classList[swiper.isLocked ? "add" : "remove"](swiper.params.scrollbar.lockClass);
      }
    }
    function getPointerPosition(e) {
      return swiper.isHorizontal() ? e.clientX : e.clientY;
    }
    function setDragPosition(e) {
      const {
        scrollbar,
        rtlTranslate: rtl
      } = swiper;
      const {
        el
      } = scrollbar;
      let positionRatio;
      positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? "left" : "top"] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);
      if (rtl) {
        positionRatio = 1 - positionRatio;
      }
      const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
      const params = swiper.params.scrollbar;
      const {
        scrollbar,
        wrapperEl
      } = swiper;
      const {
        el,
        dragEl
      } = scrollbar;
      isTouched = true;
      dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? "left" : "top"] : null;
      e.preventDefault();
      e.stopPropagation();
      wrapperEl.style.transitionDuration = "100ms";
      dragEl.style.transitionDuration = "100ms";
      setDragPosition(e);
      clearTimeout(dragTimeout);
      el.style.transitionDuration = "0ms";
      if (params.hide) {
        el.style.opacity = 1;
      }
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style["scroll-snap-type"] = "none";
      }
      emit("scrollbarDragStart", e);
    }
    function onDragMove(e) {
      const {
        scrollbar,
        wrapperEl
      } = swiper;
      const {
        el,
        dragEl
      } = scrollbar;
      if (!isTouched) return;
      if (e.preventDefault && e.cancelable) e.preventDefault();
      else e.returnValue = false;
      setDragPosition(e);
      wrapperEl.style.transitionDuration = "0ms";
      el.style.transitionDuration = "0ms";
      dragEl.style.transitionDuration = "0ms";
      emit("scrollbarDragMove", e);
    }
    function onDragEnd(e) {
      const params = swiper.params.scrollbar;
      const {
        scrollbar,
        wrapperEl
      } = swiper;
      const {
        el
      } = scrollbar;
      if (!isTouched) return;
      isTouched = false;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style["scroll-snap-type"] = "";
        wrapperEl.style.transitionDuration = "";
      }
      if (params.hide) {
        clearTimeout(dragTimeout);
        dragTimeout = nextTick(() => {
          el.style.opacity = 0;
          el.style.transitionDuration = "400ms";
        }, 1e3);
      }
      emit("scrollbarDragEnd", e);
      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    }
    function events2(method) {
      const {
        scrollbar,
        params
      } = swiper;
      const el = scrollbar.el;
      if (!el) return;
      const target = el;
      const activeListener = params.passiveListeners ? {
        passive: false,
        capture: false
      } : false;
      const passiveListener = params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      if (!target) return;
      const eventMethod = method === "on" ? "addEventListener" : "removeEventListener";
      target[eventMethod]("pointerdown", onDragStart, activeListener);
      document2[eventMethod]("pointermove", onDragMove, activeListener);
      document2[eventMethod]("pointerup", onDragEnd, passiveListener);
    }
    function enableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      events2("on");
    }
    function disableDraggable() {
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      events2("off");
    }
    function init() {
      const {
        scrollbar,
        el: swiperEl
      } = swiper;
      swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
        el: "swiper-scrollbar"
      });
      const params = swiper.params.scrollbar;
      if (!params.el) return;
      let el;
      if (typeof params.el === "string" && swiper.isElement) {
        el = swiper.el.querySelector(params.el);
      }
      if (!el && typeof params.el === "string") {
        el = document2.querySelectorAll(params.el);
        if (!el.length) return;
      } else if (!el) {
        el = params.el;
      }
      if (swiper.params.uniqueNavElements && typeof params.el === "string" && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
        el = swiperEl.querySelector(params.el);
      }
      if (el.length > 0) el = el[0];
      el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      let dragEl;
      if (el) {
        dragEl = el.querySelector(classesToSelector(swiper.params.scrollbar.dragClass));
        if (!dragEl) {
          dragEl = createElement("div", swiper.params.scrollbar.dragClass);
          el.append(dragEl);
        }
      }
      Object.assign(scrollbar, {
        el,
        dragEl
      });
      if (params.draggable) {
        enableDraggable();
      }
      if (el) {
        el.classList[swiper.enabled ? "remove" : "add"](...classesToTokens(swiper.params.scrollbar.lockClass));
      }
    }
    function destroy2() {
      const params = swiper.params.scrollbar;
      const el = swiper.scrollbar.el;
      if (el) {
        el.classList.remove(...classesToTokens(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
      }
      disableDraggable();
    }
    on2("changeDirection", () => {
      if (!swiper.scrollbar || !swiper.scrollbar.el) return;
      const params = swiper.params.scrollbar;
      let {
        el
      } = swiper.scrollbar;
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.classList.remove(params.horizontalClass, params.verticalClass);
        subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      });
    });
    on2("init", () => {
      if (swiper.params.scrollbar.enabled === false) {
        disable();
      } else {
        init();
        updateSize2();
        setTranslate2();
      }
    });
    on2("update resize observerUpdate lock unlock changeDirection", () => {
      updateSize2();
    });
    on2("setTranslate", () => {
      setTranslate2();
    });
    on2("setTransition", (_s, duration) => {
      setTransition2(duration);
    });
    on2("enable disable", () => {
      const {
        el
      } = swiper.scrollbar;
      if (el) {
        el.classList[swiper.enabled ? "remove" : "add"](...classesToTokens(swiper.params.scrollbar.lockClass));
      }
    });
    on2("destroy", () => {
      destroy2();
    });
    const enable = () => {
      swiper.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      if (swiper.scrollbar.el) {
        swiper.scrollbar.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      }
      init();
      updateSize2();
      setTranslate2();
    };
    const disable = () => {
      swiper.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      if (swiper.scrollbar.el) {
        swiper.scrollbar.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
      }
      destroy2();
    };
    Object.assign(swiper.scrollbar, {
      enable,
      disable,
      updateSize: updateSize2,
      setTranslate: setTranslate2,
      init,
      destroy: destroy2
    });
  }

  // node_modules/swiper/modules/parallax.mjs
  function Parallax(_ref) {
    let {
      swiper,
      extendParams,
      on: on2
    } = _ref;
    extendParams({
      parallax: {
        enabled: false
      }
    });
    const elementsSelector = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]";
    const setTransform2 = (el, progress) => {
      const {
        rtl
      } = swiper;
      const rtlFactor = rtl ? -1 : 1;
      const p = el.getAttribute("data-swiper-parallax") || "0";
      let x = el.getAttribute("data-swiper-parallax-x");
      let y = el.getAttribute("data-swiper-parallax-y");
      const scale = el.getAttribute("data-swiper-parallax-scale");
      const opacity = el.getAttribute("data-swiper-parallax-opacity");
      const rotate = el.getAttribute("data-swiper-parallax-rotate");
      if (x || y) {
        x = x || "0";
        y = y || "0";
      } else if (swiper.isHorizontal()) {
        x = p;
        y = "0";
      } else {
        y = p;
        x = "0";
      }
      if (x.indexOf("%") >= 0) {
        x = "".concat(parseInt(x, 10) * progress * rtlFactor, "%");
      } else {
        x = "".concat(x * progress * rtlFactor, "px");
      }
      if (y.indexOf("%") >= 0) {
        y = "".concat(parseInt(y, 10) * progress, "%");
      } else {
        y = "".concat(y * progress, "px");
      }
      if (typeof opacity !== "undefined" && opacity !== null) {
        const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
        el.style.opacity = currentOpacity;
      }
      let transform = "translate3d(".concat(x, ", ").concat(y, ", 0px)");
      if (typeof scale !== "undefined" && scale !== null) {
        const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
        transform += " scale(".concat(currentScale, ")");
      }
      if (rotate && typeof rotate !== "undefined" && rotate !== null) {
        const currentRotate = rotate * progress * -1;
        transform += " rotate(".concat(currentRotate, "deg)");
      }
      el.style.transform = transform;
    };
    const setTranslate2 = () => {
      const {
        el,
        slides,
        progress,
        snapGrid,
        isElement: isElement2
      } = swiper;
      const elements = elementChildren(el, elementsSelector);
      if (swiper.isElement) {
        elements.push(...elementChildren(swiper.hostEl, elementsSelector));
      }
      elements.forEach((subEl) => {
        setTransform2(subEl, progress);
      });
      slides.forEach((slideEl, slideIndex) => {
        let slideProgress = slideEl.progress;
        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== "auto") {
          slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
        }
        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        slideEl.querySelectorAll("".concat(elementsSelector, ", [data-swiper-parallax-rotate]")).forEach((subEl) => {
          setTransform2(subEl, slideProgress);
        });
      });
    };
    const setTransition2 = function(duration) {
      if (duration === void 0) {
        duration = swiper.params.speed;
      }
      const {
        el,
        hostEl
      } = swiper;
      const elements = [...el.querySelectorAll(elementsSelector)];
      if (swiper.isElement) {
        elements.push(...hostEl.querySelectorAll(elementsSelector));
      }
      elements.forEach((parallaxEl) => {
        let parallaxDuration = parseInt(parallaxEl.getAttribute("data-swiper-parallax-duration"), 10) || duration;
        if (duration === 0) parallaxDuration = 0;
        parallaxEl.style.transitionDuration = "".concat(parallaxDuration, "ms");
      });
    };
    on2("beforeInit", () => {
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    });
    on2("init", () => {
      if (!swiper.params.parallax.enabled) return;
      setTranslate2();
    });
    on2("setTranslate", () => {
      if (!swiper.params.parallax.enabled) return;
      setTranslate2();
    });
    on2("setTransition", (_swiper, duration) => {
      if (!swiper.params.parallax.enabled) return;
      setTransition2(duration);
    });
  }

  // node_modules/swiper/modules/zoom.mjs
  function Zoom(_ref) {
    let {
      swiper,
      extendParams,
      on: on2,
      emit
    } = _ref;
    const window2 = getWindow2();
    extendParams({
      zoom: {
        enabled: false,
        limitToOriginalSize: false,
        maxRatio: 3,
        minRatio: 1,
        panOnMouseMove: false,
        toggle: true,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    });
    swiper.zoom = {
      enabled: false
    };
    let currentScale = 1;
    let isScaling = false;
    let isPanningWithMouse = false;
    let mousePanStart = {
      x: 0,
      y: 0
    };
    const mousePanSensitivity = -3;
    let fakeGestureTouched;
    let fakeGestureMoved;
    const evCache = [];
    const gesture = {
      originX: 0,
      originY: 0,
      slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      imageEl: void 0,
      imageWrapEl: void 0,
      maxRatio: 3
    };
    const image = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {}
    };
    const velocity = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0
    };
    let scale = 1;
    Object.defineProperty(swiper.zoom, "scale", {
      get() {
        return scale;
      },
      set(value) {
        if (scale !== value) {
          const imageEl = gesture.imageEl;
          const slideEl = gesture.slideEl;
          emit("zoomChange", value, imageEl, slideEl);
        }
        scale = value;
      }
    });
    function getDistanceBetweenTouches() {
      if (evCache.length < 2) return 1;
      const x1 = evCache[0].pageX;
      const y1 = evCache[0].pageY;
      const x2 = evCache[1].pageX;
      const y2 = evCache[1].pageY;
      const distance = Math.sqrt(__pow(x2 - x1, 2) + __pow(y2 - y1, 2));
      return distance;
    }
    function getMaxRatio() {
      const params = swiper.params.zoom;
      const maxRatio = gesture.imageWrapEl.getAttribute("data-swiper-zoom") || params.maxRatio;
      if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
        const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
        return Math.min(imageMaxRatio, maxRatio);
      }
      return maxRatio;
    }
    function getScaleOrigin() {
      if (evCache.length < 2) return {
        x: null,
        y: null
      };
      const box = gesture.imageEl.getBoundingClientRect();
      return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window2.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window2.scrollY) / currentScale];
    }
    function getSlideSelector() {
      return swiper.isElement ? "swiper-slide" : ".".concat(swiper.params.slideClass);
    }
    function eventWithinSlide(e) {
      const slideSelector = getSlideSelector();
      if (e.target.matches(slideSelector)) return true;
      if (swiper.slides.filter((slideEl) => slideEl.contains(e.target)).length > 0) return true;
      return false;
    }
    function eventWithinZoomContainer(e) {
      const selector = ".".concat(swiper.params.zoom.containerClass);
      if (e.target.matches(selector)) return true;
      if ([...swiper.hostEl.querySelectorAll(selector)].filter((containerEl) => containerEl.contains(e.target)).length > 0) return true;
      return false;
    }
    function onGestureStart(e) {
      if (e.pointerType === "mouse") {
        evCache.splice(0, evCache.length);
      }
      if (!eventWithinSlide(e)) return;
      const params = swiper.params.zoom;
      fakeGestureTouched = false;
      fakeGestureMoved = false;
      evCache.push(e);
      if (evCache.length < 2) {
        return;
      }
      fakeGestureTouched = true;
      gesture.scaleStart = getDistanceBetweenTouches();
      if (!gesture.slideEl) {
        gesture.slideEl = e.target.closest(".".concat(swiper.params.slideClass, ", swiper-slide"));
        if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
        let imageEl = gesture.slideEl.querySelector(".".concat(params.containerClass));
        if (imageEl) {
          imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(gesture.imageEl, ".".concat(params.containerClass))[0];
        } else {
          gesture.imageWrapEl = void 0;
        }
        if (!gesture.imageWrapEl) {
          gesture.imageEl = void 0;
          return;
        }
        gesture.maxRatio = getMaxRatio();
      }
      if (gesture.imageEl) {
        const [originX, originY] = getScaleOrigin();
        gesture.originX = originX;
        gesture.originY = originY;
        gesture.imageEl.style.transitionDuration = "0ms";
      }
      isScaling = true;
    }
    function onGestureChange(e) {
      if (!eventWithinSlide(e)) return;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      const pointerIndex = evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
      if (pointerIndex >= 0) evCache[pointerIndex] = e;
      if (evCache.length < 2) {
        return;
      }
      fakeGestureMoved = true;
      gesture.scaleMove = getDistanceBetweenTouches();
      if (!gesture.imageEl) {
        return;
      }
      zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = gesture.maxRatio - 1 + __pow(zoom.scale - gesture.maxRatio + 1, 0.5);
      }
      if (zoom.scale < params.minRatio) {
        zoom.scale = params.minRatio + 1 - __pow(params.minRatio - zoom.scale + 1, 0.5);
      }
      gesture.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(zoom.scale, ")");
    }
    function onGestureEnd(e) {
      if (!eventWithinSlide(e)) return;
      if (e.pointerType === "mouse" && e.type === "pointerout") return;
      const params = swiper.params.zoom;
      const zoom = swiper.zoom;
      const pointerIndex = evCache.findIndex((cachedEv) => cachedEv.pointerId === e.pointerId);
      if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
      if (!fakeGestureTouched || !fakeGestureMoved) {
        return;
      }
      fakeGestureTouched = false;
      fakeGestureMoved = false;
      if (!gesture.imageEl) return;
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.imageEl.style.transitionDuration = "".concat(swiper.params.speed, "ms");
      gesture.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(zoom.scale, ")");
      currentScale = zoom.scale;
      isScaling = false;
      if (zoom.scale > 1 && gesture.slideEl) {
        gesture.slideEl.classList.add("".concat(params.zoomedSlideClass));
      } else if (zoom.scale <= 1 && gesture.slideEl) {
        gesture.slideEl.classList.remove("".concat(params.zoomedSlideClass));
      }
      if (zoom.scale === 1) {
        gesture.originX = 0;
        gesture.originY = 0;
        gesture.slideEl = void 0;
      }
    }
    let allowTouchMoveTimeout;
    function allowTouchMove() {
      swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
    }
    function preventTouchMove() {
      clearTimeout(allowTouchMoveTimeout);
      swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
      allowTouchMoveTimeout = setTimeout(() => {
        if (swiper.destroyed) return;
        allowTouchMove();
      });
    }
    function onTouchStart2(e) {
      const device = swiper.device;
      if (!gesture.imageEl) return;
      if (image.isTouched) return;
      if (device.android && e.cancelable) e.preventDefault();
      image.isTouched = true;
      const event2 = evCache.length > 0 ? evCache[0] : e;
      image.touchesStart.x = event2.pageX;
      image.touchesStart.y = event2.pageY;
    }
    function onTouchMove2(e) {
      const isMouseEvent = e.pointerType === "mouse";
      const isMousePan = isMouseEvent && swiper.params.zoom.panOnMouseMove;
      if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) {
        return;
      }
      const zoom = swiper.zoom;
      if (!gesture.imageEl) {
        return;
      }
      if (!image.isTouched || !gesture.slideEl) {
        if (isMousePan) onMouseMove(e);
        return;
      }
      if (isMousePan) {
        onMouseMove(e);
        return;
      }
      if (!image.isMoved) {
        image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
        image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
        image.startX = getTranslate(gesture.imageWrapEl, "x") || 0;
        image.startY = getTranslate(gesture.imageWrapEl, "y") || 0;
        gesture.slideWidth = gesture.slideEl.offsetWidth;
        gesture.slideHeight = gesture.slideEl.offsetHeight;
        gesture.imageWrapEl.style.transitionDuration = "0ms";
      }
      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
      image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
      const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
      if (touchesDiff > 5) {
        swiper.allowClick = false;
      }
      if (!image.isMoved && !isScaling) {
        if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
          image.isTouched = false;
          allowTouchMove();
          return;
        }
        if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
          image.isTouched = false;
          allowTouchMove();
          return;
        }
      }
      if (e.cancelable) {
        e.preventDefault();
      }
      e.stopPropagation();
      preventTouchMove();
      image.isMoved = true;
      const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
      const {
        originX,
        originY
      } = gesture;
      image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
      image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
      if (image.currentX < image.minX) {
        image.currentX = image.minX + 1 - __pow(image.minX - image.currentX + 1, 0.8);
      }
      if (image.currentX > image.maxX) {
        image.currentX = image.maxX - 1 + __pow(image.currentX - image.maxX + 1, 0.8);
      }
      if (image.currentY < image.minY) {
        image.currentY = image.minY + 1 - __pow(image.minY - image.currentY + 1, 0.8);
      }
      if (image.currentY > image.maxY) {
        image.currentY = image.maxY - 1 + __pow(image.currentY - image.maxY + 1, 0.8);
      }
      if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
      if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
      if (!velocity.prevTime) velocity.prevTime = Date.now();
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();
      gesture.imageWrapEl.style.transform = "translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)");
    }
    function onTouchEnd2() {
      const zoom = swiper.zoom;
      evCache.length = 0;
      if (!gesture.imageEl) return;
      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }
      image.isTouched = false;
      image.isMoved = false;
      let momentumDurationX = 300;
      let momentumDurationY = 300;
      const momentumDistanceX = velocity.x * momentumDurationX;
      const newPositionX = image.currentX + momentumDistanceX;
      const momentumDistanceY = velocity.y * momentumDurationY;
      const newPositionY = image.currentY + momentumDistanceY;
      if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
      if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
      const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
      image.currentX = newPositionX;
      image.currentY = newPositionY;
      const scaledWidth = image.width * zoom.scale;
      const scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
      gesture.imageWrapEl.style.transitionDuration = "".concat(momentumDuration, "ms");
      gesture.imageWrapEl.style.transform = "translate3d(".concat(image.currentX, "px, ").concat(image.currentY, "px,0)");
    }
    function onTransitionEnd() {
      const zoom = swiper.zoom;
      if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
        if (gesture.imageEl) {
          gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
        }
        if (gesture.imageWrapEl) {
          gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
        }
        gesture.slideEl.classList.remove("".concat(swiper.params.zoom.zoomedSlideClass));
        zoom.scale = 1;
        currentScale = 1;
        gesture.slideEl = void 0;
        gesture.imageEl = void 0;
        gesture.imageWrapEl = void 0;
        gesture.originX = 0;
        gesture.originY = 0;
      }
    }
    function onMouseMove(e) {
      if (currentScale <= 1 || !gesture.imageWrapEl) return;
      if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
      const currentTransform = window2.getComputedStyle(gesture.imageWrapEl).transform;
      const matrix = new window2.DOMMatrix(currentTransform);
      if (!isPanningWithMouse) {
        isPanningWithMouse = true;
        mousePanStart.x = e.clientX;
        mousePanStart.y = e.clientY;
        image.startX = matrix.e;
        image.startY = matrix.f;
        image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
        image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
        gesture.slideWidth = gesture.slideEl.offsetWidth;
        gesture.slideHeight = gesture.slideEl.offsetHeight;
        return;
      }
      const deltaX = (e.clientX - mousePanStart.x) * mousePanSensitivity;
      const deltaY = (e.clientY - mousePanStart.y) * mousePanSensitivity;
      const scaledWidth = image.width * currentScale;
      const scaledHeight = image.height * currentScale;
      const slideWidth = gesture.slideWidth;
      const slideHeight = gesture.slideHeight;
      const minX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      const maxX = -minX;
      const minY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      const maxY = -minY;
      const newX = Math.max(Math.min(image.startX + deltaX, maxX), minX);
      const newY = Math.max(Math.min(image.startY + deltaY, maxY), minY);
      gesture.imageWrapEl.style.transitionDuration = "0ms";
      gesture.imageWrapEl.style.transform = "translate3d(".concat(newX, "px, ").concat(newY, "px, 0)");
      mousePanStart.x = e.clientX;
      mousePanStart.y = e.clientY;
      image.startX = newX;
      image.startY = newY;
    }
    function zoomIn(e) {
      const zoom = swiper.zoom;
      const params = swiper.params.zoom;
      if (!gesture.slideEl) {
        if (e && e.target) {
          gesture.slideEl = e.target.closest(".".concat(swiper.params.slideClass, ", swiper-slide"));
        }
        if (!gesture.slideEl) {
          if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
            gesture.slideEl = elementChildren(swiper.slidesEl, ".".concat(swiper.params.slideActiveClass))[0];
          } else {
            gesture.slideEl = swiper.slides[swiper.activeIndex];
          }
        }
        let imageEl = gesture.slideEl.querySelector(".".concat(params.containerClass));
        if (imageEl) {
          imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(gesture.imageEl, ".".concat(params.containerClass))[0];
        } else {
          gesture.imageWrapEl = void 0;
        }
      }
      if (!gesture.imageEl || !gesture.imageWrapEl) return;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.touchAction = "none";
      }
      gesture.slideEl.classList.add("".concat(params.zoomedSlideClass));
      let touchX;
      let touchY;
      let offsetX;
      let offsetY;
      let diffX;
      let diffY;
      let translateX;
      let translateY;
      let imageWidth;
      let imageHeight;
      let scaledWidth;
      let scaledHeight;
      let translateMinX;
      let translateMinY;
      let translateMaxX;
      let translateMaxY;
      let slideWidth;
      let slideHeight;
      if (typeof image.touchesStart.x === "undefined" && e) {
        touchX = e.pageX;
        touchY = e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }
      const forceZoomRatio = typeof e === "number" ? e : null;
      if (currentScale === 1 && forceZoomRatio) {
        touchX = void 0;
        touchY = void 0;
        image.touchesStart.x = void 0;
        image.touchesStart.y = void 0;
      }
      const maxRatio = getMaxRatio();
      zoom.scale = forceZoomRatio || maxRatio;
      currentScale = forceZoomRatio || maxRatio;
      if (e && !(currentScale === 1 && forceZoomRatio)) {
        slideWidth = gesture.slideEl.offsetWidth;
        slideHeight = gesture.slideEl.offsetHeight;
        offsetX = elementOffset(gesture.slideEl).left + window2.scrollX;
        offsetY = elementOffset(gesture.slideEl).top + window2.scrollY;
        diffX = offsetX + slideWidth / 2 - touchX;
        diffY = offsetY + slideHeight / 2 - touchY;
        imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
        imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;
        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;
        if (translateX < translateMinX) {
          translateX = translateMinX;
        }
        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }
        if (translateY < translateMinY) {
          translateY = translateMinY;
        }
        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }
      if (forceZoomRatio && zoom.scale === 1) {
        gesture.originX = 0;
        gesture.originY = 0;
      }
      gesture.imageWrapEl.style.transitionDuration = "300ms";
      gesture.imageWrapEl.style.transform = "translate3d(".concat(translateX, "px, ").concat(translateY, "px,0)");
      gesture.imageEl.style.transitionDuration = "300ms";
      gesture.imageEl.style.transform = "translate3d(0,0,0) scale(".concat(zoom.scale, ")");
    }
    function zoomOut() {
      const zoom = swiper.zoom;
      const params = swiper.params.zoom;
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = elementChildren(swiper.slidesEl, ".".concat(swiper.params.slideActiveClass))[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
        let imageEl = gesture.slideEl.querySelector(".".concat(params.containerClass));
        if (imageEl) {
          imageEl = imageEl.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0];
        }
        gesture.imageEl = imageEl;
        if (imageEl) {
          gesture.imageWrapEl = elementParents(gesture.imageEl, ".".concat(params.containerClass))[0];
        } else {
          gesture.imageWrapEl = void 0;
        }
      }
      if (!gesture.imageEl || !gesture.imageWrapEl) return;
      if (swiper.params.cssMode) {
        swiper.wrapperEl.style.overflow = "";
        swiper.wrapperEl.style.touchAction = "";
      }
      zoom.scale = 1;
      currentScale = 1;
      image.touchesStart.x = void 0;
      image.touchesStart.y = void 0;
      gesture.imageWrapEl.style.transitionDuration = "300ms";
      gesture.imageWrapEl.style.transform = "translate3d(0,0,0)";
      gesture.imageEl.style.transitionDuration = "300ms";
      gesture.imageEl.style.transform = "translate3d(0,0,0) scale(1)";
      gesture.slideEl.classList.remove("".concat(params.zoomedSlideClass));
      gesture.slideEl = void 0;
      gesture.originX = 0;
      gesture.originY = 0;
      if (swiper.params.zoom.panOnMouseMove) {
        mousePanStart = {
          x: 0,
          y: 0
        };
        if (isPanningWithMouse) {
          isPanningWithMouse = false;
          image.startX = 0;
          image.startY = 0;
        }
      }
    }
    function zoomToggle(e) {
      const zoom = swiper.zoom;
      if (zoom.scale && zoom.scale !== 1) {
        zoomOut();
      } else {
        zoomIn(e);
      }
    }
    function getListeners() {
      const passiveListener = swiper.params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      const activeListenerWithCapture = swiper.params.passiveListeners ? {
        passive: false,
        capture: true
      } : true;
      return {
        passiveListener,
        activeListenerWithCapture
      };
    }
    function enable() {
      const zoom = swiper.zoom;
      if (zoom.enabled) return;
      zoom.enabled = true;
      const {
        passiveListener,
        activeListenerWithCapture
      } = getListeners();
      swiper.wrapperEl.addEventListener("pointerdown", onGestureStart, passiveListener);
      swiper.wrapperEl.addEventListener("pointermove", onGestureChange, activeListenerWithCapture);
      ["pointerup", "pointercancel", "pointerout"].forEach((eventName) => {
        swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
      });
      swiper.wrapperEl.addEventListener("pointermove", onTouchMove2, activeListenerWithCapture);
    }
    function disable() {
      const zoom = swiper.zoom;
      if (!zoom.enabled) return;
      zoom.enabled = false;
      const {
        passiveListener,
        activeListenerWithCapture
      } = getListeners();
      swiper.wrapperEl.removeEventListener("pointerdown", onGestureStart, passiveListener);
      swiper.wrapperEl.removeEventListener("pointermove", onGestureChange, activeListenerWithCapture);
      ["pointerup", "pointercancel", "pointerout"].forEach((eventName) => {
        swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
      });
      swiper.wrapperEl.removeEventListener("pointermove", onTouchMove2, activeListenerWithCapture);
    }
    on2("init", () => {
      if (swiper.params.zoom.enabled) {
        enable();
      }
    });
    on2("destroy", () => {
      disable();
    });
    on2("touchStart", (_s, e) => {
      if (!swiper.zoom.enabled) return;
      onTouchStart2(e);
    });
    on2("touchEnd", (_s, e) => {
      if (!swiper.zoom.enabled) return;
      onTouchEnd2();
    });
    on2("doubleTap", (_s, e) => {
      if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        zoomToggle(e);
      }
    });
    on2("transitionEnd", () => {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        onTransitionEnd();
      }
    });
    on2("slideChange", () => {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
        onTransitionEnd();
      }
    });
    Object.assign(swiper.zoom, {
      enable,
      disable,
      in: zoomIn,
      out: zoomOut,
      toggle: zoomToggle
    });
  }

  // node_modules/swiper/modules/controller.mjs
  function Controller(_ref) {
    let {
      swiper,
      extendParams,
      on: on2
    } = _ref;
    extendParams({
      controller: {
        control: void 0,
        inverse: false,
        by: "slide"
        // or 'container'
      }
    });
    swiper.controller = {
      control: void 0
    };
    function LinearSpline(x, y) {
      const binarySearch = /* @__PURE__ */ (function search() {
        let maxIndex;
        let minIndex;
        let guess;
        return (array, val) => {
          minIndex = -1;
          maxIndex = array.length;
          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;
            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }
          return maxIndex;
        };
      })();
      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1;
      let i1;
      let i3;
      this.interpolate = function interpolate(x2) {
        if (!x2) return 0;
        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1;
        return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
      };
      return this;
    }
    function getInterpolateFunction(c) {
      swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
    function setTranslate2(_t, byController) {
      const controlled = swiper.controller.control;
      let multiplier;
      let controlledTranslate;
      const Swiper2 = swiper.constructor;
      function setControlledTranslate(c) {
        if (c.destroyed) return;
        const translate2 = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
        if (swiper.params.controller.by === "slide") {
          getInterpolateFunction(c);
          controlledTranslate = -swiper.controller.spline.interpolate(-translate2);
        }
        if (!controlledTranslate || swiper.params.controller.by === "container") {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
            multiplier = 1;
          }
          controlledTranslate = (translate2 - swiper.minTranslate()) * multiplier + c.minTranslate();
        }
        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }
        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }
      if (Array.isArray(controlled)) {
        for (let i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper2) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper2 && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    }
    function setTransition2(duration, byController) {
      const Swiper2 = swiper.constructor;
      const controlled = swiper.controller.control;
      let i;
      function setControlledTransition(c) {
        if (c.destroyed) return;
        c.setTransition(duration, swiper);
        if (duration !== 0) {
          c.transitionStart();
          if (c.params.autoHeight) {
            nextTick(() => {
              c.updateAutoHeight();
            });
          }
          elementTransitionEnd(c.wrapperEl, () => {
            if (!controlled) return;
            c.transitionEnd();
          });
        }
      }
      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper2) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper2 && byController !== controlled) {
        setControlledTransition(controlled);
      }
    }
    function removeSpline() {
      if (!swiper.controller.control) return;
      if (swiper.controller.spline) {
        swiper.controller.spline = void 0;
        delete swiper.controller.spline;
      }
    }
    on2("beforeInit", () => {
      if (typeof window !== "undefined" && // eslint-disable-line
      (typeof swiper.params.controller.control === "string" || swiper.params.controller.control instanceof HTMLElement)) {
        const controlElements = typeof swiper.params.controller.control === "string" ? [...document.querySelectorAll(swiper.params.controller.control)] : [swiper.params.controller.control];
        controlElements.forEach((controlElement) => {
          if (!swiper.controller.control) swiper.controller.control = [];
          if (controlElement && controlElement.swiper) {
            swiper.controller.control.push(controlElement.swiper);
          } else if (controlElement) {
            const eventName = "".concat(swiper.params.eventsPrefix, "init");
            const onControllerSwiper = (e) => {
              swiper.controller.control.push(e.detail[0]);
              swiper.update();
              controlElement.removeEventListener(eventName, onControllerSwiper);
            };
            controlElement.addEventListener(eventName, onControllerSwiper);
          }
        });
        return;
      }
      swiper.controller.control = swiper.params.controller.control;
    });
    on2("update", () => {
      removeSpline();
    });
    on2("resize", () => {
      removeSpline();
    });
    on2("observerUpdate", () => {
      removeSpline();
    });
    on2("setTranslate", (_s, translate2, byController) => {
      if (!swiper.controller.control || swiper.controller.control.destroyed) return;
      swiper.controller.setTranslate(translate2, byController);
    });
    on2("setTransition", (_s, duration, byController) => {
      if (!swiper.controller.control || swiper.controller.control.destroyed) return;
      swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
      setTranslate: setTranslate2,
      setTransition: setTransition2
    });
  }

  // node_modules/swiper/modules/a11y.mjs
  function A11y(_ref) {
    let {
      swiper,
      extendParams,
      on: on2
    } = _ref;
    extendParams({
      a11y: {
        enabled: true,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        containerRole: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group",
        id: null,
        scrollOnFocus: true
      }
    });
    swiper.a11y = {
      clicked: false
    };
    let liveRegion = null;
    let preventFocusHandler;
    let focusTargetSlideEl;
    let visibilityChangedTimestamp = (/* @__PURE__ */ new Date()).getTime();
    function notify(message) {
      const notification = liveRegion;
      if (notification.length === 0) return;
      notification.innerHTML = "";
      notification.innerHTML = message;
    }
    function getRandomNumber(size) {
      if (size === void 0) {
        size = 16;
      }
      const randomChar = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("tabIndex", "0");
      });
    }
    function makeElNotFocusable(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("tabIndex", "-1");
      });
    }
    function addElRole(el, role) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("role", role);
      });
    }
    function addElRoleDescription(el, description) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-roledescription", description);
      });
    }
    function addElControls(el, controls2) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-controls", controls2);
      });
    }
    function addElLabel(el, label) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-label", label);
      });
    }
    function addElId(el, id) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("id", id);
      });
    }
    function addElLive(el, live) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-live", live);
      });
    }
    function disableEl(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-disabled", true);
      });
    }
    function enableEl(el) {
      el = makeElementsArray(el);
      el.forEach((subEl) => {
        subEl.setAttribute("aria-disabled", false);
      });
    }
    function onEnterOrSpaceKey(e) {
      if (e.keyCode !== 13 && e.keyCode !== 32) return;
      const params = swiper.params.a11y;
      const targetEl = e.target;
      if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
        if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
      }
      if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
        const prevEls = makeElementsArray(swiper.navigation.prevEl);
        const nextEls = makeElementsArray(swiper.navigation.nextEl);
        if (nextEls.includes(targetEl)) {
          if (!(swiper.isEnd && !swiper.params.loop)) {
            swiper.slideNext();
          }
          if (swiper.isEnd) {
            notify(params.lastSlideMessage);
          } else {
            notify(params.nextSlideMessage);
          }
        }
        if (prevEls.includes(targetEl)) {
          if (!(swiper.isBeginning && !swiper.params.loop)) {
            swiper.slidePrev();
          }
          if (swiper.isBeginning) {
            notify(params.firstSlideMessage);
          } else {
            notify(params.prevSlideMessage);
          }
        }
      }
      if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {
        targetEl.click();
      }
    }
    function updateNavigation() {
      if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
      const {
        nextEl,
        prevEl
      } = swiper.navigation;
      if (prevEl) {
        if (swiper.isBeginning) {
          disableEl(prevEl);
          makeElNotFocusable(prevEl);
        } else {
          enableEl(prevEl);
          makeElFocusable(prevEl);
        }
      }
      if (nextEl) {
        if (swiper.isEnd) {
          disableEl(nextEl);
          makeElNotFocusable(nextEl);
        } else {
          enableEl(nextEl);
          makeElFocusable(nextEl);
        }
      }
    }
    function hasPagination() {
      return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
    }
    function hasClickablePagination() {
      return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
      const params = swiper.params.a11y;
      if (!hasPagination()) return;
      swiper.pagination.bullets.forEach((bulletEl) => {
        if (swiper.params.pagination.clickable) {
          makeElFocusable(bulletEl);
          if (!swiper.params.pagination.renderBullet) {
            addElRole(bulletEl, "button");
            addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
          }
        }
        if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {
          bulletEl.setAttribute("aria-current", "true");
        } else {
          bulletEl.removeAttribute("aria-current");
        }
      });
    }
    const initNavEl = (el, wrapperId, message) => {
      makeElFocusable(el);
      if (el.tagName !== "BUTTON") {
        addElRole(el, "button");
        el.addEventListener("keydown", onEnterOrSpaceKey);
      }
      addElLabel(el, message);
      addElControls(el, wrapperId);
    };
    const handlePointerDown = (e) => {
      if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) {
        preventFocusHandler = true;
      }
      swiper.a11y.clicked = true;
    };
    const handlePointerUp = () => {
      preventFocusHandler = false;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!swiper.destroyed) {
            swiper.a11y.clicked = false;
          }
        });
      });
    };
    const onVisibilityChange = (e) => {
      visibilityChangedTimestamp = (/* @__PURE__ */ new Date()).getTime();
    };
    const handleFocus = (e) => {
      if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;
      if ((/* @__PURE__ */ new Date()).getTime() - visibilityChangedTimestamp < 100) return;
      const slideEl = e.target.closest(".".concat(swiper.params.slideClass, ", swiper-slide"));
      if (!slideEl || !swiper.slides.includes(slideEl)) return;
      focusTargetSlideEl = slideEl;
      const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
      const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
      if (isActive || isVisible) return;
      if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
      if (swiper.isHorizontal()) {
        swiper.el.scrollLeft = 0;
      } else {
        swiper.el.scrollTop = 0;
      }
      requestAnimationFrame(() => {
        if (preventFocusHandler) return;
        if (swiper.params.loop) {
          swiper.slideToLoop(parseInt(slideEl.getAttribute("data-swiper-slide-index")), 0);
        } else {
          swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
        }
        preventFocusHandler = false;
      });
    };
    const initSlides = () => {
      const params = swiper.params.a11y;
      if (params.itemRoleDescriptionMessage) {
        addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
      }
      if (params.slideRole) {
        addElRole(swiper.slides, params.slideRole);
      }
      const slidesLength = swiper.slides.length;
      if (params.slideLabelMessage) {
        swiper.slides.forEach((slideEl, index) => {
          const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10) : index;
          const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
          addElLabel(slideEl, ariaLabelMessage);
        });
      }
    };
    const init = () => {
      const params = swiper.params.a11y;
      swiper.el.append(liveRegion);
      const containerEl = swiper.el;
      if (params.containerRoleDescriptionMessage) {
        addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
      }
      if (params.containerMessage) {
        addElLabel(containerEl, params.containerMessage);
      }
      if (params.containerRole) {
        addElRole(containerEl, params.containerRole);
      }
      const wrapperEl = swiper.wrapperEl;
      const wrapperId = params.id || wrapperEl.getAttribute("id") || "swiper-wrapper-".concat(getRandomNumber(16));
      const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? "off" : "polite";
      addElId(wrapperEl, wrapperId);
      addElLive(wrapperEl, live);
      initSlides();
      let {
        nextEl,
        prevEl
      } = swiper.navigation ? swiper.navigation : {};
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (nextEl) {
        nextEl.forEach((el) => initNavEl(el, wrapperId, params.nextSlideMessage));
      }
      if (prevEl) {
        prevEl.forEach((el) => initNavEl(el, wrapperId, params.prevSlideMessage));
      }
      if (hasClickablePagination()) {
        const paginationEl = makeElementsArray(swiper.pagination.el);
        paginationEl.forEach((el) => {
          el.addEventListener("keydown", onEnterOrSpaceKey);
        });
      }
      const document2 = getDocument2();
      document2.addEventListener("visibilitychange", onVisibilityChange);
      swiper.el.addEventListener("focus", handleFocus, true);
      swiper.el.addEventListener("focus", handleFocus, true);
      swiper.el.addEventListener("pointerdown", handlePointerDown, true);
      swiper.el.addEventListener("pointerup", handlePointerUp, true);
    };
    function destroy2() {
      if (liveRegion) liveRegion.remove();
      let {
        nextEl,
        prevEl
      } = swiper.navigation ? swiper.navigation : {};
      nextEl = makeElementsArray(nextEl);
      prevEl = makeElementsArray(prevEl);
      if (nextEl) {
        nextEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
      }
      if (prevEl) {
        prevEl.forEach((el) => el.removeEventListener("keydown", onEnterOrSpaceKey));
      }
      if (hasClickablePagination()) {
        const paginationEl = makeElementsArray(swiper.pagination.el);
        paginationEl.forEach((el) => {
          el.removeEventListener("keydown", onEnterOrSpaceKey);
        });
      }
      const document2 = getDocument2();
      document2.removeEventListener("visibilitychange", onVisibilityChange);
      if (swiper.el && typeof swiper.el !== "string") {
        swiper.el.removeEventListener("focus", handleFocus, true);
        swiper.el.removeEventListener("pointerdown", handlePointerDown, true);
        swiper.el.removeEventListener("pointerup", handlePointerUp, true);
      }
    }
    on2("beforeInit", () => {
      liveRegion = createElement("span", swiper.params.a11y.notificationClass);
      liveRegion.setAttribute("aria-live", "assertive");
      liveRegion.setAttribute("aria-atomic", "true");
    });
    on2("afterInit", () => {
      if (!swiper.params.a11y.enabled) return;
      init();
    });
    on2("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      if (!swiper.params.a11y.enabled) return;
      initSlides();
    });
    on2("fromEdge toEdge afterInit lock unlock", () => {
      if (!swiper.params.a11y.enabled) return;
      updateNavigation();
    });
    on2("paginationUpdate", () => {
      if (!swiper.params.a11y.enabled) return;
      updatePagination();
    });
    on2("destroy", () => {
      if (!swiper.params.a11y.enabled) return;
      destroy2();
    });
  }

  // node_modules/swiper/modules/history.mjs
  function History(_ref) {
    let {
      swiper,
      extendParams,
      on: on2
    } = _ref;
    extendParams({
      history: {
        enabled: false,
        root: "",
        replaceState: false,
        key: "slides",
        keepQuery: false
      }
    });
    let initialized = false;
    let paths = {};
    const slugify = (text) => {
      return text.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    };
    const getPathValues = (urlOverride) => {
      const window2 = getWindow2();
      let location2;
      if (urlOverride) {
        location2 = new URL(urlOverride);
      } else {
        location2 = window2.location;
      }
      const pathArray = location2.pathname.slice(1).split("/").filter((part) => part !== "");
      const total = pathArray.length;
      const key = pathArray[total - 2];
      const value = pathArray[total - 1];
      return {
        key,
        value
      };
    };
    const setHistory = (key, index) => {
      const window2 = getWindow2();
      if (!initialized || !swiper.params.history.enabled) return;
      let location2;
      if (swiper.params.url) {
        location2 = new URL(swiper.params.url);
      } else {
        location2 = window2.location;
      }
      const slide2 = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector('[data-swiper-slide-index="'.concat(index, '"]')) : swiper.slides[index];
      let value = slugify(slide2.getAttribute("data-history"));
      if (swiper.params.history.root.length > 0) {
        let root = swiper.params.history.root;
        if (root[root.length - 1] === "/") root = root.slice(0, root.length - 1);
        value = "".concat(root, "/").concat(key ? "".concat(key, "/") : "").concat(value);
      } else if (!location2.pathname.includes(key)) {
        value = "".concat(key ? "".concat(key, "/") : "").concat(value);
      }
      if (swiper.params.history.keepQuery) {
        value += location2.search;
      }
      const currentState = window2.history.state;
      if (currentState && currentState.value === value) {
        return;
      }
      if (swiper.params.history.replaceState) {
        window2.history.replaceState({
          value
        }, null, value);
      } else {
        window2.history.pushState({
          value
        }, null, value);
      }
    };
    const scrollToSlide = (speed, value, runCallbacks) => {
      if (value) {
        for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
          const slide2 = swiper.slides[i];
          const slideHistory = slugify(slide2.getAttribute("data-history"));
          if (slideHistory === value) {
            const index = swiper.getSlideIndex(slide2);
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    };
    const setHistoryPopState = () => {
      paths = getPathValues(swiper.params.url);
      scrollToSlide(swiper.params.speed, paths.value, false);
    };
    const init = () => {
      const window2 = getWindow2();
      if (!swiper.params.history) return;
      if (!window2.history || !window2.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }
      initialized = true;
      paths = getPathValues(swiper.params.url);
      if (!paths.key && !paths.value) {
        if (!swiper.params.history.replaceState) {
          window2.addEventListener("popstate", setHistoryPopState);
        }
        return;
      }
      scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
      if (!swiper.params.history.replaceState) {
        window2.addEventListener("popstate", setHistoryPopState);
      }
    };
    const destroy2 = () => {
      const window2 = getWindow2();
      if (!swiper.params.history.replaceState) {
        window2.removeEventListener("popstate", setHistoryPopState);
      }
    };
    on2("init", () => {
      if (swiper.params.history.enabled) {
        init();
      }
    });
    on2("destroy", () => {
      if (swiper.params.history.enabled) {
        destroy2();
      }
    });
    on2("transitionEnd _freeModeNoMomentumRelease", () => {
      if (initialized) {
        setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    });
    on2("slideChange", () => {
      if (initialized && swiper.params.cssMode) {
        setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    });
  }

  // node_modules/swiper/modules/hash-navigation.mjs
  function HashNavigation(_ref) {
    let {
      swiper,
      extendParams,
      emit,
      on: on2
    } = _ref;
    let initialized = false;
    const document2 = getDocument2();
    const window2 = getWindow2();
    extendParams({
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false,
        getSlideIndex(_s, hash) {
          if (swiper.virtual && swiper.params.virtual.enabled) {
            const slideWithHash = swiper.slides.find((slideEl) => slideEl.getAttribute("data-hash") === hash);
            if (!slideWithHash) return 0;
            const index = parseInt(slideWithHash.getAttribute("data-swiper-slide-index"), 10);
            return index;
          }
          return swiper.getSlideIndex(elementChildren(swiper.slidesEl, ".".concat(swiper.params.slideClass, '[data-hash="').concat(hash, '"], swiper-slide[data-hash="').concat(hash, '"]'))[0]);
        }
      }
    });
    const onHashChange = () => {
      emit("hashChange");
      const newHash = document2.location.hash.replace("#", "");
      const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector('[data-swiper-slide-index="'.concat(swiper.activeIndex, '"]')) : swiper.slides[swiper.activeIndex];
      const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") : "";
      if (newHash !== activeSlideHash) {
        const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
        if (typeof newIndex === "undefined" || Number.isNaN(newIndex)) return;
        swiper.slideTo(newIndex);
      }
    };
    const setHash = () => {
      if (!initialized || !swiper.params.hashNavigation.enabled) return;
      const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector('[data-swiper-slide-index="'.concat(swiper.activeIndex, '"]')) : swiper.slides[swiper.activeIndex];
      const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute("data-hash") || activeSlideEl.getAttribute("data-history") : "";
      if (swiper.params.hashNavigation.replaceState && window2.history && window2.history.replaceState) {
        window2.history.replaceState(null, null, "#".concat(activeSlideHash) || "");
        emit("hashSet");
      } else {
        document2.location.hash = activeSlideHash || "";
        emit("hashSet");
      }
    };
    const init = () => {
      if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
      initialized = true;
      const hash = document2.location.hash.replace("#", "");
      if (hash) {
        const speed = 0;
        const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
        swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
      }
      if (swiper.params.hashNavigation.watchState) {
        window2.addEventListener("hashchange", onHashChange);
      }
    };
    const destroy2 = () => {
      if (swiper.params.hashNavigation.watchState) {
        window2.removeEventListener("hashchange", onHashChange);
      }
    };
    on2("init", () => {
      if (swiper.params.hashNavigation.enabled) {
        init();
      }
    });
    on2("destroy", () => {
      if (swiper.params.hashNavigation.enabled) {
        destroy2();
      }
    });
    on2("transitionEnd _freeModeNoMomentumRelease", () => {
      if (initialized) {
        setHash();
      }
    });
    on2("slideChange", () => {
      if (initialized && swiper.params.cssMode) {
        setHash();
      }
    });
  }

  // node_modules/swiper/modules/autoplay.mjs
  function Autoplay(_ref) {
    let {
      swiper,
      extendParams,
      on: on2,
      emit,
      params
    } = _ref;
    swiper.autoplay = {
      running: false,
      paused: false,
      timeLeft: 0
    };
    extendParams({
      autoplay: {
        enabled: false,
        delay: 3e3,
        waitForTransition: true,
        disableOnInteraction: false,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: false
      }
    });
    let timeout;
    let raf;
    let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
    let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
    let autoplayTimeLeft;
    let autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
    let wasPaused;
    let isTouched;
    let pausedByTouch;
    let touchStartTimeout;
    let slideChanged;
    let pausedByInteraction;
    let pausedByPointerEnter;
    function onTransitionEnd(e) {
      if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
      if (e.target !== swiper.wrapperEl) return;
      swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
      if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {
        return;
      }
      resume();
    }
    const calcTimeLeft = () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.autoplay.paused) {
        wasPaused = true;
      } else if (wasPaused) {
        autoplayDelayCurrent = autoplayTimeLeft;
        wasPaused = false;
      }
      const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (/* @__PURE__ */ new Date()).getTime();
      swiper.autoplay.timeLeft = timeLeft;
      emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
      raf = requestAnimationFrame(() => {
        calcTimeLeft();
      });
    };
    const getSlideDelay = () => {
      let activeSlideEl;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        activeSlideEl = swiper.slides.find((slideEl) => slideEl.classList.contains("swiper-slide-active"));
      } else {
        activeSlideEl = swiper.slides[swiper.activeIndex];
      }
      if (!activeSlideEl) return void 0;
      const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
      return currentSlideDelay;
    };
    const run = (delayForce) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      cancelAnimationFrame(raf);
      calcTimeLeft();
      let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
      autoplayDelayTotal = swiper.params.autoplay.delay;
      autoplayDelayCurrent = swiper.params.autoplay.delay;
      const currentSlideDelay = getSlideDelay();
      if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
        delay = currentSlideDelay;
        autoplayDelayTotal = currentSlideDelay;
        autoplayDelayCurrent = currentSlideDelay;
      }
      autoplayTimeLeft = delay;
      const speed = swiper.params.speed;
      const proceed = () => {
        if (!swiper || swiper.destroyed) return;
        if (swiper.params.autoplay.reverseDirection) {
          if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
            swiper.slidePrev(speed, true, true);
            emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(swiper.slides.length - 1, speed, true, true);
            emit("autoplay");
          }
        } else {
          if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
            swiper.slideNext(speed, true, true);
            emit("autoplay");
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(0, speed, true, true);
            emit("autoplay");
          }
        }
        if (swiper.params.cssMode) {
          autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
          requestAnimationFrame(() => {
            run();
          });
        }
      };
      if (delay > 0) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          proceed();
        }, delay);
      } else {
        requestAnimationFrame(() => {
          proceed();
        });
      }
      return delay;
    };
    const start = () => {
      autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
      swiper.autoplay.running = true;
      run();
      emit("autoplayStart");
    };
    const stop = () => {
      swiper.autoplay.running = false;
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
      emit("autoplayStop");
    };
    const pause = (internal, reset) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      clearTimeout(timeout);
      if (!internal) {
        pausedByInteraction = true;
      }
      const proceed = () => {
        emit("autoplayPause");
        if (swiper.params.autoplay.waitForTransition) {
          swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd);
        } else {
          resume();
        }
      };
      swiper.autoplay.paused = true;
      if (reset) {
        if (slideChanged) {
          autoplayTimeLeft = swiper.params.autoplay.delay;
        }
        slideChanged = false;
        proceed();
        return;
      }
      const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
      autoplayTimeLeft = delay - ((/* @__PURE__ */ new Date()).getTime() - autoplayStartTime);
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
      if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
      proceed();
    };
    const resume = () => {
      if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
      autoplayStartTime = (/* @__PURE__ */ new Date()).getTime();
      if (pausedByInteraction) {
        pausedByInteraction = false;
        run(autoplayTimeLeft);
      } else {
        run();
      }
      swiper.autoplay.paused = false;
      emit("autoplayResume");
    };
    const onVisibilityChange = () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      const document2 = getDocument2();
      if (document2.visibilityState === "hidden") {
        pausedByInteraction = true;
        pause(true);
      }
      if (document2.visibilityState === "visible") {
        resume();
      }
    };
    const onPointerEnter = (e) => {
      if (e.pointerType !== "mouse") return;
      pausedByInteraction = true;
      pausedByPointerEnter = true;
      if (swiper.animating || swiper.autoplay.paused) return;
      pause(true);
    };
    const onPointerLeave = (e) => {
      if (e.pointerType !== "mouse") return;
      pausedByPointerEnter = false;
      if (swiper.autoplay.paused) {
        resume();
      }
    };
    const attachMouseEvents = () => {
      if (swiper.params.autoplay.pauseOnMouseEnter) {
        swiper.el.addEventListener("pointerenter", onPointerEnter);
        swiper.el.addEventListener("pointerleave", onPointerLeave);
      }
    };
    const detachMouseEvents = () => {
      if (swiper.el && typeof swiper.el !== "string") {
        swiper.el.removeEventListener("pointerenter", onPointerEnter);
        swiper.el.removeEventListener("pointerleave", onPointerLeave);
      }
    };
    const attachDocumentEvents = () => {
      const document2 = getDocument2();
      document2.addEventListener("visibilitychange", onVisibilityChange);
    };
    const detachDocumentEvents = () => {
      const document2 = getDocument2();
      document2.removeEventListener("visibilitychange", onVisibilityChange);
    };
    on2("init", () => {
      if (swiper.params.autoplay.enabled) {
        attachMouseEvents();
        attachDocumentEvents();
        start();
      }
    });
    on2("destroy", () => {
      detachMouseEvents();
      detachDocumentEvents();
      if (swiper.autoplay.running) {
        stop();
      }
    });
    on2("_freeModeStaticRelease", () => {
      if (pausedByTouch || pausedByInteraction) {
        resume();
      }
    });
    on2("_freeModeNoMomentumRelease", () => {
      if (!swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on2("beforeTransitionStart", (_s, speed, internal) => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        pause(true, true);
      } else {
        stop();
      }
    });
    on2("sliderFirstMove", () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
        return;
      }
      isTouched = true;
      pausedByTouch = false;
      pausedByInteraction = false;
      touchStartTimeout = setTimeout(() => {
        pausedByInteraction = true;
        pausedByTouch = true;
        pause(true);
      }, 200);
    });
    on2("touchEnd", () => {
      if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
      clearTimeout(touchStartTimeout);
      clearTimeout(timeout);
      if (swiper.params.autoplay.disableOnInteraction) {
        pausedByTouch = false;
        isTouched = false;
        return;
      }
      if (pausedByTouch && swiper.params.cssMode) resume();
      pausedByTouch = false;
      isTouched = false;
    });
    on2("slideChange", () => {
      if (swiper.destroyed || !swiper.autoplay.running) return;
      slideChanged = true;
    });
    Object.assign(swiper.autoplay, {
      start,
      stop,
      pause,
      resume
    });
  }

  // node_modules/swiper/modules/thumbs.mjs
  function Thumb(_ref) {
    let {
      swiper,
      extendParams,
      on: on2
    } = _ref;
    extendParams({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: true,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs"
      }
    });
    let initialized = false;
    let swiperCreated = false;
    swiper.thumbs = {
      swiper: null
    };
    function onThumbClick() {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      const clickedIndex = thumbsSwiper.clickedIndex;
      const clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
      if (typeof clickedIndex === "undefined" || clickedIndex === null) return;
      let slideToIndex;
      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
      } else {
        slideToIndex = clickedIndex;
      }
      if (swiper.params.loop) {
        swiper.slideToLoop(slideToIndex);
      } else {
        swiper.slideTo(slideToIndex);
      }
    }
    function init() {
      const {
        thumbs: thumbsParams
      } = swiper.params;
      if (initialized) return false;
      initialized = true;
      const SwiperClass = swiper.constructor;
      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        Object.assign(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        Object.assign(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        swiper.thumbs.swiper.update();
      } else if (isObject2(thumbsParams.swiper)) {
        const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
        Object.assign(thumbsSwiperParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
        swiperCreated = true;
      }
      swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on("tap", onThumbClick);
      return true;
    }
    function update2(initial) {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      const slidesPerView = thumbsSwiper.params.slidesPerView === "auto" ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
      let thumbsToActivate = 1;
      const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }
      if (!swiper.params.thumbs.multipleActiveThumbs) {
        thumbsToActivate = 1;
      }
      thumbsToActivate = Math.floor(thumbsToActivate);
      thumbsSwiper.slides.forEach((slideEl) => slideEl.classList.remove(thumbActiveClass));
      if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
        for (let i = 0; i < thumbsToActivate; i += 1) {
          elementChildren(thumbsSwiper.slidesEl, '[data-swiper-slide-index="'.concat(swiper.realIndex + i, '"]')).forEach((slideEl) => {
            slideEl.classList.add(thumbActiveClass);
          });
        }
      } else {
        for (let i = 0; i < thumbsToActivate; i += 1) {
          if (thumbsSwiper.slides[swiper.realIndex + i]) {
            thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
          }
        }
      }
      const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
      const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
      if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
        const currentThumbsIndex = thumbsSwiper.activeIndex;
        let newThumbsIndex;
        let direction;
        if (thumbsSwiper.params.loop) {
          const newThumbsSlide = thumbsSwiper.slides.find((slideEl) => slideEl.getAttribute("data-swiper-slide-index") === "".concat(swiper.realIndex));
          newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
          direction = swiper.activeIndex > swiper.previousIndex ? "next" : "prev";
        } else {
          newThumbsIndex = swiper.realIndex;
          direction = newThumbsIndex > swiper.previousIndex ? "next" : "prev";
        }
        if (useOffset) {
          newThumbsIndex += direction === "next" ? autoScrollOffset : -1 * autoScrollOffset;
        }
        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : void 0);
        }
      }
    }
    on2("beforeInit", () => {
      const {
        thumbs
      } = swiper.params;
      if (!thumbs || !thumbs.swiper) return;
      if (typeof thumbs.swiper === "string" || thumbs.swiper instanceof HTMLElement) {
        const document2 = getDocument2();
        const getThumbsElementAndInit = () => {
          const thumbsElement = typeof thumbs.swiper === "string" ? document2.querySelector(thumbs.swiper) : thumbs.swiper;
          if (thumbsElement && thumbsElement.swiper) {
            thumbs.swiper = thumbsElement.swiper;
            init();
            update2(true);
          } else if (thumbsElement) {
            const eventName = "".concat(swiper.params.eventsPrefix, "init");
            const onThumbsSwiper = (e) => {
              thumbs.swiper = e.detail[0];
              thumbsElement.removeEventListener(eventName, onThumbsSwiper);
              init();
              update2(true);
              thumbs.swiper.update();
              swiper.update();
            };
            thumbsElement.addEventListener(eventName, onThumbsSwiper);
          }
          return thumbsElement;
        };
        const watchForThumbsToAppear = () => {
          if (swiper.destroyed) return;
          const thumbsElement = getThumbsElementAndInit();
          if (!thumbsElement) {
            requestAnimationFrame(watchForThumbsToAppear);
          }
        };
        requestAnimationFrame(watchForThumbsToAppear);
      } else {
        init();
        update2(true);
      }
    });
    on2("slideChange update resize observerUpdate", () => {
      update2();
    });
    on2("setTransition", (_s, duration) => {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      thumbsSwiper.setTransition(duration);
    });
    on2("beforeDestroy", () => {
      const thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper || thumbsSwiper.destroyed) return;
      if (swiperCreated) {
        thumbsSwiper.destroy();
      }
    });
    Object.assign(swiper.thumbs, {
      init,
      update: update2
    });
  }

  // node_modules/swiper/modules/free-mode.mjs
  function freeMode(_ref) {
    let {
      swiper,
      extendParams,
      emit,
      once: once2
    } = _ref;
    extendParams({
      freeMode: {
        enabled: false,
        momentum: true,
        momentumRatio: 1,
        momentumBounce: true,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: false,
        minimumVelocity: 0.02
      }
    });
    function onTouchStart2() {
      if (swiper.params.cssMode) return;
      const translate2 = swiper.getTranslate();
      swiper.setTranslate(translate2);
      swiper.setTransition(0);
      swiper.touchEventsData.velocities.length = 0;
      swiper.freeMode.onTouchEnd({
        currentPos: swiper.rtl ? swiper.translate : -swiper.translate
      });
    }
    function onTouchMove2() {
      if (swiper.params.cssMode) return;
      const {
        touchEventsData: data,
        touches
      } = swiper;
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? "startX" : "startY"],
          time: data.touchStartTime
        });
      }
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? "currentX" : "currentY"],
        time: now()
      });
    }
    function onTouchEnd2(_ref2) {
      let {
        currentPos
      } = _ref2;
      if (swiper.params.cssMode) return;
      const {
        params,
        wrapperEl,
        rtlTranslate: rtl,
        snapGrid,
        touchEventsData: data
      } = swiper;
      const touchEndTime = now();
      const timeDiff = touchEndTime - data.touchStartTime;
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }
        return;
      }
      if (params.freeMode.momentum) {
        if (data.velocities.length > 1) {
          const lastMoveEvent = data.velocities.pop();
          const velocityEvent = data.velocities.pop();
          const distance = lastMoveEvent.position - velocityEvent.position;
          const time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;
          if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
            swiper.velocity = 0;
          }
          if (time > 150 || now() - lastMoveEvent.time > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }
        swiper.velocity *= params.freeMode.momentumVelocityRatio;
        data.velocities.length = 0;
        let momentumDuration = 1e3 * params.freeMode.momentumRatio;
        const momentumDistance = swiper.velocity * momentumDuration;
        let newPosition = swiper.translate + momentumDistance;
        if (rtl) newPosition = -newPosition;
        let doBounce = false;
        let afterBouncePosition;
        const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
        let needsLoopFix;
        if (newPosition < swiper.maxTranslate()) {
          if (params.freeMode.momentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }
            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeMode.momentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }
            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }
          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (params.freeMode.sticky) {
          let nextSlide;
          for (let j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }
          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === "next") {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }
          newPosition = -newPosition;
        }
        if (needsLoopFix) {
          once2("transitionEnd", () => {
            swiper.loopFix();
          });
        }
        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }
          if (params.freeMode.sticky) {
            const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
            const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
            if (moveDistance < currentSlideSize) {
              momentumDuration = params.speed;
            } else if (moveDistance < 2 * currentSlideSize) {
              momentumDuration = params.speed * 1.5;
            } else {
              momentumDuration = params.speed * 2.5;
            }
          }
        } else if (params.freeMode.sticky) {
          swiper.slideToClosest();
          return;
        }
        if (params.freeMode.momentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          elementTransitionEnd(wrapperEl, () => {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
            emit("momentumBounce");
            swiper.setTransition(params.speed);
            setTimeout(() => {
              swiper.setTranslate(afterBouncePosition);
              elementTransitionEnd(wrapperEl, () => {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }, 0);
          });
        } else if (swiper.velocity) {
          emit("_freeModeNoMomentumRelease");
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          if (!swiper.animating) {
            swiper.animating = true;
            elementTransitionEnd(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      } else if (params.freeMode) {
        emit("_freeModeNoMomentumRelease");
      }
      if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
        emit("_freeModeStaticRelease");
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
    }
    Object.assign(swiper, {
      freeMode: {
        onTouchStart: onTouchStart2,
        onTouchMove: onTouchMove2,
        onTouchEnd: onTouchEnd2
      }
    });
  }

  // node_modules/swiper/modules/grid.mjs
  function Grid(_ref) {
    let {
      swiper,
      extendParams,
      on: on2
    } = _ref;
    extendParams({
      grid: {
        rows: 1,
        fill: "column"
      }
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    let wasMultiRow;
    const getSpaceBetween = () => {
      let spaceBetween = swiper.params.spaceBetween;
      if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
      } else if (typeof spaceBetween === "string") {
        spaceBetween = parseFloat(spaceBetween);
      }
      return spaceBetween;
    };
    const initSlides = (slides) => {
      const {
        slidesPerView
      } = swiper.params;
      const {
        rows,
        fill
      } = swiper.params.grid;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
      numFullColumns = Math.floor(slidesLength / rows);
      if (Math.floor(slidesLength / rows) === slidesLength / rows) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
      }
      if (slidesPerView !== "auto" && fill === "row") {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
      }
      slidesPerRow = slidesNumberEvenToRows / rows;
    };
    const unsetSlides = () => {
      if (swiper.slides) {
        swiper.slides.forEach((slide2) => {
          if (slide2.swiperSlideGridSet) {
            slide2.style.height = "";
            slide2.style[swiper.getDirectionLabel("margin-top")] = "";
          }
        });
      }
    };
    const updateSlide = (i, slide2, slides) => {
      const {
        slidesPerGroup
      } = swiper.params;
      const spaceBetween = getSpaceBetween();
      const {
        rows,
        fill
      } = swiper.params.grid;
      const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
      let newSlideOrderIndex;
      let column;
      let row;
      if (fill === "row" && slidesPerGroup > 1) {
        const groupIndex = Math.floor(i / (slidesPerGroup * rows));
        const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
        const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
        slide2.style.order = newSlideOrderIndex;
      } else if (fill === "column") {
        column = Math.floor(i / rows);
        row = i - column * rows;
        if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
          row += 1;
          if (row >= rows) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }
      slide2.row = row;
      slide2.column = column;
      slide2.style.height = "calc((100% - ".concat((rows - 1) * spaceBetween, "px) / ").concat(rows, ")");
      slide2.style[swiper.getDirectionLabel("margin-top")] = row !== 0 ? spaceBetween && "".concat(spaceBetween, "px") : "";
      slide2.swiperSlideGridSet = true;
    };
    const updateWrapperSize = (slideSize, snapGrid) => {
      const {
        centeredSlides,
        roundLengths
      } = swiper.params;
      const spaceBetween = getSpaceBetween();
      const {
        rows
      } = swiper.params.grid;
      swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
      if (!swiper.params.cssMode) {
        swiper.wrapperEl.style[swiper.getDirectionLabel("width")] = "".concat(swiper.virtualSize + spaceBetween, "px");
      }
      if (centeredSlides) {
        const newSlidesGrid = [];
        for (let i = 0; i < snapGrid.length; i += 1) {
          let slidesGridItem = snapGrid[i];
          if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
          if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid.splice(0, snapGrid.length);
        snapGrid.push(...newSlidesGrid);
      }
    };
    const onInit = () => {
      wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
    };
    const onUpdate = () => {
      const {
        params,
        el
      } = swiper;
      const isMultiRow = params.grid && params.grid.rows > 1;
      if (wasMultiRow && !isMultiRow) {
        el.classList.remove("".concat(params.containerModifierClass, "grid"), "".concat(params.containerModifierClass, "grid-column"));
        numFullColumns = 1;
        swiper.emitContainerClasses();
      } else if (!wasMultiRow && isMultiRow) {
        el.classList.add("".concat(params.containerModifierClass, "grid"));
        if (params.grid.fill === "column") {
          el.classList.add("".concat(params.containerModifierClass, "grid-column"));
        }
        swiper.emitContainerClasses();
      }
      wasMultiRow = isMultiRow;
    };
    on2("init", onInit);
    on2("update", onUpdate);
    swiper.grid = {
      initSlides,
      unsetSlides,
      updateSlide,
      updateWrapperSize
    };
  }

  // node_modules/swiper/modules/manipulation.mjs
  function appendSlide(slides) {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (params.loop) {
      swiper.loopDestroy();
    }
    const appendElement = (slideEl) => {
      if (typeof slideEl === "string") {
        const tempDOM = document.createElement("div");
        tempDOM.innerHTML = slideEl;
        slidesEl.append(tempDOM.children[0]);
        tempDOM.innerHTML = "";
      } else {
        slidesEl.append(slideEl);
      }
    };
    if (typeof slides === "object" && "length" in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) appendElement(slides[i]);
      }
    } else {
      appendElement(slides);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
  }
  function prependSlide(slides) {
    const swiper = this;
    const {
      params,
      activeIndex,
      slidesEl
    } = swiper;
    if (params.loop) {
      swiper.loopDestroy();
    }
    let newActiveIndex = activeIndex + 1;
    const prependElement = (slideEl) => {
      if (typeof slideEl === "string") {
        const tempDOM = document.createElement("div");
        tempDOM.innerHTML = slideEl;
        slidesEl.prepend(tempDOM.children[0]);
        tempDOM.innerHTML = "";
      } else {
        slidesEl.prepend(slideEl);
      }
    };
    if (typeof slides === "object" && "length" in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) prependElement(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
    } else {
      prependElement(slides);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
    swiper.slideTo(newActiveIndex, 0, false);
  }
  function addSlide(index, slides) {
    const swiper = this;
    const {
      params,
      activeIndex,
      slidesEl
    } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.recalcSlides();
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }
    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for (let i = baseLength - 1; i >= index; i -= 1) {
      const currentSlide = swiper.slides[i];
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === "object" && "length" in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) slidesEl.append(slides[i]);
      }
      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      slidesEl.append(slides);
    }
    for (let i = 0; i < slidesBuffer.length; i += 1) {
      slidesEl.append(slidesBuffer[i]);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }
  function removeSlide(slidesIndexes) {
    const swiper = this;
    const {
      params,
      activeIndex
    } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === "object" && "length" in slidesIndexes) {
      for (let i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      }
      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      newActiveIndex = Math.max(newActiveIndex, 0);
    }
    swiper.recalcSlides();
    if (params.loop) {
      swiper.loopCreate();
    }
    if (!params.observer || swiper.isElement) {
      swiper.update();
    }
    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }
  function removeAllSlides() {
    const swiper = this;
    const slidesIndexes = [];
    for (let i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }
    swiper.removeSlide(slidesIndexes);
  }
  function Manipulation(_ref) {
    let {
      swiper
    } = _ref;
    Object.assign(swiper, {
      appendSlide: appendSlide.bind(swiper),
      prependSlide: prependSlide.bind(swiper),
      addSlide: addSlide.bind(swiper),
      removeSlide: removeSlide.bind(swiper),
      removeAllSlides: removeAllSlides.bind(swiper)
    });
  }

  // node_modules/swiper/shared/effect-init.mjs
  function effectInit(params) {
    const {
      effect,
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      overwriteParams,
      perspective,
      recreateShadows,
      getEffectParams
    } = params;
    on2("beforeInit", () => {
      if (swiper.params.effect !== effect) return;
      swiper.classNames.push("".concat(swiper.params.containerModifierClass).concat(effect));
      if (perspective && perspective()) {
        swiper.classNames.push("".concat(swiper.params.containerModifierClass, "3d"));
      }
      const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
      Object.assign(swiper.params, overwriteParamsResult);
      Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on2("setTranslate", () => {
      if (swiper.params.effect !== effect) return;
      setTranslate2();
    });
    on2("setTransition", (_s, duration) => {
      if (swiper.params.effect !== effect) return;
      setTransition2(duration);
    });
    on2("transitionEnd", () => {
      if (swiper.params.effect !== effect) return;
      if (recreateShadows) {
        if (!getEffectParams || !getEffectParams().slideShadows) return;
        swiper.slides.forEach((slideEl) => {
          slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => shadowEl.remove());
        });
        recreateShadows();
      }
    });
    let requireUpdateOnVirtual;
    on2("virtualUpdate", () => {
      if (swiper.params.effect !== effect) return;
      if (!swiper.slides.length) {
        requireUpdateOnVirtual = true;
      }
      requestAnimationFrame(() => {
        if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
          setTranslate2();
          requireUpdateOnVirtual = false;
        }
      });
    });
  }

  // node_modules/swiper/shared/effect-target.mjs
  function effectTarget(effectParams, slideEl) {
    const transformEl = getSlideTransformEl(slideEl);
    if (transformEl !== slideEl) {
      transformEl.style.backfaceVisibility = "hidden";
      transformEl.style["-webkit-backface-visibility"] = "hidden";
    }
    return transformEl;
  }

  // node_modules/swiper/shared/effect-virtual-transition-end.mjs
  function effectVirtualTransitionEnd(_ref) {
    let {
      swiper,
      duration,
      transformElements,
      allSlides
    } = _ref;
    const {
      activeIndex
    } = swiper;
    const getSlide = (el) => {
      if (!el.parentElement) {
        const slide2 = swiper.slides.find((slideEl) => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);
        return slide2;
      }
      return el.parentElement;
    };
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      let transitionEndTarget;
      if (allSlides) {
        transitionEndTarget = transformElements;
      } else {
        transitionEndTarget = transformElements.filter((transformEl) => {
          const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
          return swiper.getSlideIndex(el) === activeIndex;
        });
      }
      transitionEndTarget.forEach((el) => {
        elementTransitionEnd(el, () => {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;
          eventTriggered = true;
          swiper.animating = false;
          const evt = new window.CustomEvent("transitionend", {
            bubbles: true,
            cancelable: true
          });
          swiper.wrapperEl.dispatchEvent(evt);
        });
      });
    }
  }

  // node_modules/swiper/modules/effect-fade.mjs
  function EffectFade(_ref) {
    let {
      swiper,
      extendParams,
      on: on2
    } = _ref;
    extendParams({
      fadeEffect: {
        crossFade: false
      }
    });
    const setTranslate2 = () => {
      const {
        slides
      } = swiper;
      const params = swiper.params.fadeEffect;
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = swiper.slides[i];
        const offset = slideEl.swiperSlideOffset;
        let tx = -offset;
        if (!swiper.params.virtualTranslate) tx -= swiper.translate;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.opacity = slideOpacity;
        targetEl.style.transform = "translate3d(".concat(tx, "px, ").concat(ty, "px, 0px)");
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = "".concat(duration, "ms");
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements,
        allSlides: true
      });
    };
    effectInit({
      effect: "fade",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  // node_modules/swiper/modules/effect-cube.mjs
  function EffectCube(_ref) {
    let {
      swiper,
      extendParams,
      on: on2
    } = _ref;
    extendParams({
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }
    });
    const createSlideShadows = (slideEl, progress, isHorizontal) => {
      let shadowBefore = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
      let shadowAfter = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
      if (!shadowBefore) {
        shadowBefore = createElement("div", "swiper-slide-shadow-cube swiper-slide-shadow-".concat(isHorizontal ? "left" : "top").split(" "));
        slideEl.append(shadowBefore);
      }
      if (!shadowAfter) {
        shadowAfter = createElement("div", "swiper-slide-shadow-cube swiper-slide-shadow-".concat(isHorizontal ? "right" : "bottom").split(" "));
        slideEl.append(shadowAfter);
      }
      if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
      if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = () => {
      const isHorizontal = swiper.isHorizontal();
      swiper.slides.forEach((slideEl) => {
        const progress = Math.max(Math.min(slideEl.progress, 1), -1);
        createSlideShadows(slideEl, progress, isHorizontal);
      });
    };
    const setTranslate2 = () => {
      const {
        el,
        wrapperEl,
        slides,
        width: swiperWidth,
        height: swiperHeight,
        rtlTranslate: rtl,
        size: swiperSize,
        browser: browser2
      } = swiper;
      const r = getRotateFix(swiper);
      const params = swiper.params.cubeEffect;
      const isHorizontal = swiper.isHorizontal();
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      let wrapperRotate = 0;
      let cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          cubeShadowEl = swiper.wrapperEl.querySelector(".swiper-cube-shadow");
          if (!cubeShadowEl) {
            cubeShadowEl = createElement("div", "swiper-cube-shadow");
            swiper.wrapperEl.append(cubeShadowEl);
          }
          cubeShadowEl.style.height = "".concat(swiperWidth, "px");
        } else {
          cubeShadowEl = el.querySelector(".swiper-cube-shadow");
          if (!cubeShadowEl) {
            cubeShadowEl = createElement("div", "swiper-cube-shadow");
            el.append(cubeShadowEl);
          }
        }
      }
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = slides[i];
        let slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt(slideEl.getAttribute("data-swiper-slide-index"), 10);
        }
        let slideAngle = slideIndex * 90;
        let round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        const progress = Math.max(Math.min(slideEl.progress, 1), -1);
        let tx = 0;
        let ty = 0;
        let tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + round * 4 * swiperSize;
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = 3 * swiperSize + swiperSize * 4 * round;
        }
        if (rtl) {
          tx = -tx;
        }
        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }
        const transform = "rotateX(".concat(r(isHorizontal ? 0 : -slideAngle), "deg) rotateY(").concat(r(isHorizontal ? slideAngle : 0), "deg) translate3d(").concat(tx, "px, ").concat(ty, "px, ").concat(tz, "px)");
        if (progress <= 1 && progress > -1) {
          wrapperRotate = slideIndex * 90 + progress * 90;
          if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
        }
        slideEl.style.transform = transform;
        if (params.slideShadows) {
          createSlideShadows(slideEl, progress, isHorizontal);
        }
      }
      wrapperEl.style.transformOrigin = "50% 50% -".concat(swiperSize / 2, "px");
      wrapperEl.style["-webkit-transform-origin"] = "50% 50% -".concat(swiperSize / 2, "px");
      if (params.shadow) {
        if (isHorizontal) {
          cubeShadowEl.style.transform = "translate3d(0px, ".concat(swiperWidth / 2 + params.shadowOffset, "px, ").concat(-swiperWidth / 2, "px) rotateX(89.99deg) rotateZ(0deg) scale(").concat(params.shadowScale, ")");
        } else {
          const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
          const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
          const scale1 = params.shadowScale;
          const scale2 = params.shadowScale / multiplier;
          const offset = params.shadowOffset;
          cubeShadowEl.style.transform = "scale3d(".concat(scale1, ", 1, ").concat(scale2, ") translate3d(0px, ").concat(swiperHeight / 2 + offset, "px, ").concat(-swiperHeight / 2 / scale2, "px) rotateX(-89.99deg)");
        }
      }
      const zFactor = (browser2.isSafari || browser2.isWebView) && browser2.needPerspectiveFix ? -swiperSize / 2 : 0;
      wrapperEl.style.transform = "translate3d(0px,0,".concat(zFactor, "px) rotateX(").concat(r(swiper.isHorizontal() ? 0 : wrapperRotate), "deg) rotateY(").concat(r(swiper.isHorizontal() ? -wrapperRotate : 0), "deg)");
      wrapperEl.style.setProperty("--swiper-cube-translate-z", "".concat(zFactor, "px"));
    };
    const setTransition2 = (duration) => {
      const {
        el,
        slides
      } = swiper;
      slides.forEach((slideEl) => {
        slideEl.style.transitionDuration = "".concat(duration, "ms");
        slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((subEl) => {
          subEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        const shadowEl = el.querySelector(".swiper-cube-shadow");
        if (shadowEl) shadowEl.style.transitionDuration = "".concat(duration, "ms");
      }
    };
    effectInit({
      effect: "cube",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      recreateShadows,
      getEffectParams: () => swiper.params.cubeEffect,
      perspective: () => true,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      })
    });
  }

  // node_modules/swiper/shared/create-shadow.mjs
  function createShadow(suffix, slideEl, side) {
    const shadowClass = "swiper-slide-shadow".concat(side ? "-".concat(side) : "").concat(suffix ? " swiper-slide-shadow-".concat(suffix) : "");
    const shadowContainer = getSlideTransformEl(slideEl);
    let shadowEl = shadowContainer.querySelector(".".concat(shadowClass.split(" ").join(".")));
    if (!shadowEl) {
      shadowEl = createElement("div", shadowClass.split(" "));
      shadowContainer.append(shadowEl);
    }
    return shadowEl;
  }

  // node_modules/swiper/modules/effect-flip.mjs
  function EffectFlip(_ref) {
    let {
      swiper,
      extendParams,
      on: on2
    } = _ref;
    extendParams({
      flipEffect: {
        slideShadows: true,
        limitRotation: true
      }
    });
    const createSlideShadows = (slideEl, progress) => {
      let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
      let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
      if (!shadowBefore) {
        shadowBefore = createShadow("flip", slideEl, swiper.isHorizontal() ? "left" : "top");
      }
      if (!shadowAfter) {
        shadowAfter = createShadow("flip", slideEl, swiper.isHorizontal() ? "right" : "bottom");
      }
      if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
      if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = () => {
      swiper.params.flipEffect;
      swiper.slides.forEach((slideEl) => {
        let progress = slideEl.progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min(slideEl.progress, 1), -1);
        }
        createSlideShadows(slideEl, progress);
      });
    };
    const setTranslate2 = () => {
      const {
        slides,
        rtlTranslate: rtl
      } = swiper;
      const params = swiper.params.flipEffect;
      const rotateFix = getRotateFix(swiper);
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = slides[i];
        let progress = slideEl.progress;
        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min(slideEl.progress, 1), -1);
        }
        const offset = slideEl.swiperSlideOffset;
        const rotate = -180 * progress;
        let rotateY = rotate;
        let rotateX = 0;
        let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }
        slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
        if (params.slideShadows) {
          createSlideShadows(slideEl, progress);
        }
        const transform = "translate3d(".concat(tx, "px, ").concat(ty, "px, 0px) rotateX(").concat(rotateFix(rotateX), "deg) rotateY(").concat(rotateFix(rotateY), "deg)");
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = "".concat(duration, "ms");
        el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements
      });
    };
    effectInit({
      effect: "flip",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      recreateShadows,
      getEffectParams: () => swiper.params.flipEffect,
      perspective: () => true,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  // node_modules/swiper/modules/effect-coverflow.mjs
  function EffectCoverflow(_ref) {
    let {
      swiper,
      extendParams,
      on: on2
    } = _ref;
    extendParams({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: true
      }
    });
    const setTranslate2 = () => {
      const {
        width: swiperWidth,
        height: swiperHeight,
        slides,
        slidesSizesGrid
      } = swiper;
      const params = swiper.params.coverflowEffect;
      const isHorizontal = swiper.isHorizontal();
      const transform = swiper.translate;
      const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
      const rotate = isHorizontal ? params.rotate : -params.rotate;
      const translate2 = params.depth;
      const r = getRotateFix(swiper);
      for (let i = 0, length = slides.length; i < length; i += 1) {
        const slideEl = slides[i];
        const slideSize = slidesSizesGrid[i];
        const slideOffset = slideEl.swiperSlideOffset;
        const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
        const offsetMultiplier = typeof params.modifier === "function" ? params.modifier(centerOffset) : centerOffset * params.modifier;
        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        let translateZ = -translate2 * Math.abs(offsetMultiplier);
        let stretch = params.stretch;
        if (typeof stretch === "string" && stretch.indexOf("%") !== -1) {
          stretch = parseFloat(params.stretch) / 100 * slideSize;
        }
        let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
        let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
        let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
        if (Math.abs(translateX) < 1e-3) translateX = 0;
        if (Math.abs(translateY) < 1e-3) translateY = 0;
        if (Math.abs(translateZ) < 1e-3) translateZ = 0;
        if (Math.abs(rotateY) < 1e-3) rotateY = 0;
        if (Math.abs(rotateX) < 1e-3) rotateX = 0;
        if (Math.abs(scale) < 1e-3) scale = 0;
        const slideTransform = "translate3d(".concat(translateX, "px,").concat(translateY, "px,").concat(translateZ, "px)  rotateX(").concat(r(rotateX), "deg) rotateY(").concat(r(rotateY), "deg) scale(").concat(scale, ")");
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = slideTransform;
        slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          let shadowBeforeEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-left") : slideEl.querySelector(".swiper-slide-shadow-top");
          let shadowAfterEl = isHorizontal ? slideEl.querySelector(".swiper-slide-shadow-right") : slideEl.querySelector(".swiper-slide-shadow-bottom");
          if (!shadowBeforeEl) {
            shadowBeforeEl = createShadow("coverflow", slideEl, isHorizontal ? "left" : "top");
          }
          if (!shadowAfterEl) {
            shadowAfterEl = createShadow("coverflow", slideEl, isHorizontal ? "right" : "bottom");
          }
          if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
          if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
        }
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = "".concat(duration, "ms");
        el.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
    };
    effectInit({
      effect: "coverflow",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      perspective: () => true,
      overwriteParams: () => ({
        watchSlidesProgress: true
      })
    });
  }

  // node_modules/swiper/modules/effect-creative.mjs
  function EffectCreative(_ref) {
    let {
      swiper,
      extendParams,
      on: on2
    } = _ref;
    extendParams({
      creativeEffect: {
        limitProgress: 1,
        shadowPerProgress: false,
        progressMultiplier: 1,
        perspective: true,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        }
      }
    });
    const getTranslateValue = (value) => {
      if (typeof value === "string") return value;
      return "".concat(value, "px");
    };
    const setTranslate2 = () => {
      const {
        slides,
        wrapperEl,
        slidesSizesGrid
      } = swiper;
      const params = swiper.params.creativeEffect;
      const {
        progressMultiplier: multiplier
      } = params;
      const isCenteredSlides = swiper.params.centeredSlides;
      const rotateFix = getRotateFix(swiper);
      if (isCenteredSlides) {
        const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
        wrapperEl.style.transform = "translateX(calc(50% - ".concat(margin, "px))");
      }
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = slides[i];
        const slideProgress = slideEl.progress;
        const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
        let originalProgress = progress;
        if (!isCenteredSlides) {
          originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
        }
        const offset = slideEl.swiperSlideOffset;
        const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
        const r = [0, 0, 0];
        let custom = false;
        if (!swiper.isHorizontal()) {
          t[1] = t[0];
          t[0] = 0;
        }
        let data = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        if (progress < 0) {
          data = params.next;
          custom = true;
        } else if (progress > 0) {
          data = params.prev;
          custom = true;
        }
        t.forEach((value, index) => {
          t[index] = "calc(".concat(value, "px + (").concat(getTranslateValue(data.translate[index]), " * ").concat(Math.abs(progress * multiplier), "))");
        });
        r.forEach((value, index) => {
          let val = data.rotate[index] * Math.abs(progress * multiplier);
          r[index] = val;
        });
        slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
        const translateString = t.join(", ");
        const rotateString = "rotateX(".concat(rotateFix(r[0]), "deg) rotateY(").concat(rotateFix(r[1]), "deg) rotateZ(").concat(rotateFix(r[2]), "deg)");
        const scaleString = originalProgress < 0 ? "scale(".concat(1 + (1 - data.scale) * originalProgress * multiplier, ")") : "scale(".concat(1 - (1 - data.scale) * originalProgress * multiplier, ")");
        const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
        const transform = "translate3d(".concat(translateString, ") ").concat(rotateString, " ").concat(scaleString);
        if (custom && data.shadow || !custom) {
          let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
          if (!shadowEl && data.shadow) {
            shadowEl = createShadow("creative", slideEl);
          }
          if (shadowEl) {
            const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
            shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
          }
        }
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
        targetEl.style.opacity = opacityString;
        if (data.origin) {
          targetEl.style.transformOrigin = data.origin;
        }
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = "".concat(duration, "ms");
        el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements,
        allSlides: true
      });
    };
    effectInit({
      effect: "creative",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      perspective: () => swiper.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: true,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  // node_modules/swiper/modules/effect-cards.mjs
  function EffectCards(_ref) {
    let {
      swiper,
      extendParams,
      on: on2
    } = _ref;
    extendParams({
      cardsEffect: {
        slideShadows: true,
        rotate: true,
        perSlideRotate: 2,
        perSlideOffset: 8
      }
    });
    const setTranslate2 = () => {
      const {
        slides,
        activeIndex,
        rtlTranslate: rtl
      } = swiper;
      const params = swiper.params.cardsEffect;
      const {
        startTranslate,
        isTouched
      } = swiper.touchEventsData;
      const currentTranslate = rtl ? -swiper.translate : swiper.translate;
      for (let i = 0; i < slides.length; i += 1) {
        const slideEl = slides[i];
        const slideProgress = slideEl.progress;
        const progress = Math.min(Math.max(slideProgress, -4), 4);
        let offset = slideEl.swiperSlideOffset;
        if (swiper.params.centeredSlides && !swiper.params.cssMode) {
          swiper.wrapperEl.style.transform = "translateX(".concat(swiper.minTranslate(), "px)");
        }
        if (swiper.params.centeredSlides && swiper.params.cssMode) {
          offset -= slides[0].swiperSlideOffset;
        }
        let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
        let tY = 0;
        const tZ = -100 * Math.abs(progress);
        let scale = 1;
        let rotate = -params.perSlideRotate * progress;
        let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
        const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
        const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
        const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
        if (isSwipeToNext || isSwipeToPrev) {
          const subProgress = __pow(1 - Math.abs((Math.abs(progress) - 0.5) / 0.5), 0.5);
          rotate += -28 * progress * subProgress;
          scale += -0.5 * subProgress;
          tXAdd += 96 * subProgress;
          tY = "".concat(-25 * subProgress * Math.abs(progress), "%");
        }
        if (progress < 0) {
          tX = "calc(".concat(tX, "px ").concat(rtl ? "-" : "+", " (").concat(tXAdd * Math.abs(progress), "%))");
        } else if (progress > 0) {
          tX = "calc(".concat(tX, "px ").concat(rtl ? "-" : "+", " (-").concat(tXAdd * Math.abs(progress), "%))");
        } else {
          tX = "".concat(tX, "px");
        }
        if (!swiper.isHorizontal()) {
          const prevY = tY;
          tY = tX;
          tX = prevY;
        }
        const scaleString = progress < 0 ? "".concat(1 + (1 - scale) * progress) : "".concat(1 - (1 - scale) * progress);
        const transform = "\n        translate3d(".concat(tX, ", ").concat(tY, ", ").concat(tZ, "px)\n        rotateZ(").concat(params.rotate ? rtl ? -rotate : rotate : 0, "deg)\n        scale(").concat(scaleString, ")\n      ");
        if (params.slideShadows) {
          let shadowEl = slideEl.querySelector(".swiper-slide-shadow");
          if (!shadowEl) {
            shadowEl = createShadow("cards", slideEl);
          }
          if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
        }
        slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.transform = transform;
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = "".concat(duration, "ms");
        el.querySelectorAll(".swiper-slide-shadow").forEach((shadowEl) => {
          shadowEl.style.transitionDuration = "".concat(duration, "ms");
        });
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements
      });
    };
    effectInit({
      effect: "cards",
      swiper,
      on: on2,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      perspective: () => true,
      overwriteParams: () => ({
        _loopSwapReset: false,
        watchSlidesProgress: true,
        loopAdditionalSlides: 3,
        centeredSlides: true,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  // node_modules/swiper/swiper-bundle.mjs
  var modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
  Swiper.use(modules);

  // node_modules/swiper/shared/update-swiper.mjs
  var paramsList = [
    "eventsPrefix",
    "injectStyles",
    "injectStylesUrls",
    "modules",
    "init",
    "_direction",
    "oneWayMovement",
    "swiperElementNodeName",
    "touchEventsTarget",
    "initialSlide",
    "_speed",
    "cssMode",
    "updateOnWindowResize",
    "resizeObserver",
    "nested",
    "focusableElements",
    "_enabled",
    "_width",
    "_height",
    "preventInteractionOnTransition",
    "userAgent",
    "url",
    "_edgeSwipeDetection",
    "_edgeSwipeThreshold",
    "_freeMode",
    "_autoHeight",
    "setWrapperSize",
    "virtualTranslate",
    "_effect",
    "breakpoints",
    "breakpointsBase",
    "_spaceBetween",
    "_slidesPerView",
    "maxBackfaceHiddenSlides",
    "_grid",
    "_slidesPerGroup",
    "_slidesPerGroupSkip",
    "_slidesPerGroupAuto",
    "_centeredSlides",
    "_centeredSlidesBounds",
    "_slidesOffsetBefore",
    "_slidesOffsetAfter",
    "normalizeSlideIndex",
    "_centerInsufficientSlides",
    "_watchOverflow",
    "roundLengths",
    "touchRatio",
    "touchAngle",
    "simulateTouch",
    "_shortSwipes",
    "_longSwipes",
    "longSwipesRatio",
    "longSwipesMs",
    "_followFinger",
    "allowTouchMove",
    "_threshold",
    "touchMoveStopPropagation",
    "touchStartPreventDefault",
    "touchStartForcePreventDefault",
    "touchReleaseOnEdges",
    "uniqueNavElements",
    "_resistance",
    "_resistanceRatio",
    "_watchSlidesProgress",
    "_grabCursor",
    "preventClicks",
    "preventClicksPropagation",
    "_slideToClickedSlide",
    "_loop",
    "loopAdditionalSlides",
    "loopAddBlankSlides",
    "loopPreventsSliding",
    "_rewind",
    "_allowSlidePrev",
    "_allowSlideNext",
    "_swipeHandler",
    "_noSwiping",
    "noSwipingClass",
    "noSwipingSelector",
    "passiveListeners",
    "containerModifierClass",
    "slideClass",
    "slideActiveClass",
    "slideVisibleClass",
    "slideFullyVisibleClass",
    "slideNextClass",
    "slidePrevClass",
    "slideBlankClass",
    "wrapperClass",
    "lazyPreloaderClass",
    "lazyPreloadPrevNext",
    "runCallbacksOnInit",
    "observer",
    "observeParents",
    "observeSlideChildren",
    // modules
    "a11y",
    "_autoplay",
    "_controller",
    "coverflowEffect",
    "cubeEffect",
    "fadeEffect",
    "flipEffect",
    "creativeEffect",
    "cardsEffect",
    "hashNavigation",
    "history",
    "keyboard",
    "mousewheel",
    "_navigation",
    "_pagination",
    "parallax",
    "_scrollbar",
    "_thumbs",
    "virtual",
    "zoom",
    "control"
  ];
  function isObject3(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object" && !o.__swiper__;
  }
  function extend3(target, src) {
    const noExtend = ["__proto__", "constructor", "prototype"];
    Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
      if (typeof target[key] === "undefined") target[key] = src[key];
      else if (isObject3(src[key]) && isObject3(target[key]) && Object.keys(src[key]).length > 0) {
        if (src[key].__swiper__) target[key] = src[key];
        else extend3(target[key], src[key]);
      } else {
        target[key] = src[key];
      }
    });
  }
  function needsNavigation(params) {
    if (params === void 0) {
      params = {};
    }
    return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
  }
  function needsPagination(params) {
    if (params === void 0) {
      params = {};
    }
    return params.pagination && typeof params.pagination.el === "undefined";
  }
  function needsScrollbar(params) {
    if (params === void 0) {
      params = {};
    }
    return params.scrollbar && typeof params.scrollbar.el === "undefined";
  }
  function attrToProp(attrName) {
    if (attrName === void 0) {
      attrName = "";
    }
    return attrName.replace(/-[a-z]/g, (l) => l.toUpperCase().replace("-", ""));
  }
  function updateSwiper(_ref) {
    let {
      swiper,
      slides,
      passedParams,
      changedParams,
      nextEl,
      prevEl,
      scrollbarEl,
      paginationEl
    } = _ref;
    const updateParams = changedParams.filter((key) => key !== "children" && key !== "direction" && key !== "wrapperClass");
    const {
      params: currentParams,
      pagination,
      navigation,
      scrollbar,
      virtual,
      thumbs
    } = swiper;
    let needThumbsInit;
    let needControllerInit;
    let needPaginationInit;
    let needScrollbarInit;
    let needNavigationInit;
    let loopNeedDestroy;
    let loopNeedEnable;
    let loopNeedReloop;
    if (changedParams.includes("thumbs") && passedParams.thumbs && passedParams.thumbs.swiper && !passedParams.thumbs.swiper.destroyed && currentParams.thumbs && (!currentParams.thumbs.swiper || currentParams.thumbs.swiper.destroyed)) {
      needThumbsInit = true;
    }
    if (changedParams.includes("controller") && passedParams.controller && passedParams.controller.control && currentParams.controller && !currentParams.controller.control) {
      needControllerInit = true;
    }
    if (changedParams.includes("pagination") && passedParams.pagination && (passedParams.pagination.el || paginationEl) && (currentParams.pagination || currentParams.pagination === false) && pagination && !pagination.el) {
      needPaginationInit = true;
    }
    if (changedParams.includes("scrollbar") && passedParams.scrollbar && (passedParams.scrollbar.el || scrollbarEl) && (currentParams.scrollbar || currentParams.scrollbar === false) && scrollbar && !scrollbar.el) {
      needScrollbarInit = true;
    }
    if (changedParams.includes("navigation") && passedParams.navigation && (passedParams.navigation.prevEl || prevEl) && (passedParams.navigation.nextEl || nextEl) && (currentParams.navigation || currentParams.navigation === false) && navigation && !navigation.prevEl && !navigation.nextEl) {
      needNavigationInit = true;
    }
    const destroyModule = (mod) => {
      if (!swiper[mod]) return;
      swiper[mod].destroy();
      if (mod === "navigation") {
        if (swiper.isElement) {
          swiper[mod].prevEl.remove();
          swiper[mod].nextEl.remove();
        }
        currentParams[mod].prevEl = void 0;
        currentParams[mod].nextEl = void 0;
        swiper[mod].prevEl = void 0;
        swiper[mod].nextEl = void 0;
      } else {
        if (swiper.isElement) {
          swiper[mod].el.remove();
        }
        currentParams[mod].el = void 0;
        swiper[mod].el = void 0;
      }
    };
    if (changedParams.includes("loop") && swiper.isElement) {
      if (currentParams.loop && !passedParams.loop) {
        loopNeedDestroy = true;
      } else if (!currentParams.loop && passedParams.loop) {
        loopNeedEnable = true;
      } else {
        loopNeedReloop = true;
      }
    }
    updateParams.forEach((key) => {
      if (isObject3(currentParams[key]) && isObject3(passedParams[key])) {
        Object.assign(currentParams[key], passedParams[key]);
        if ((key === "navigation" || key === "pagination" || key === "scrollbar") && "enabled" in passedParams[key] && !passedParams[key].enabled) {
          destroyModule(key);
        }
      } else {
        const newValue = passedParams[key];
        if ((newValue === true || newValue === false) && (key === "navigation" || key === "pagination" || key === "scrollbar")) {
          if (newValue === false) {
            destroyModule(key);
          }
        } else {
          currentParams[key] = passedParams[key];
        }
      }
    });
    if (updateParams.includes("controller") && !needControllerInit && swiper.controller && swiper.controller.control && currentParams.controller && currentParams.controller.control) {
      swiper.controller.control = currentParams.controller.control;
    }
    if (changedParams.includes("children") && slides && virtual && currentParams.virtual.enabled) {
      virtual.slides = slides;
      virtual.update(true);
    } else if (changedParams.includes("virtual") && virtual && currentParams.virtual.enabled) {
      if (slides) virtual.slides = slides;
      virtual.update(true);
    }
    if (changedParams.includes("children") && slides && currentParams.loop) {
      loopNeedReloop = true;
    }
    if (needThumbsInit) {
      const initialized = thumbs.init();
      if (initialized) thumbs.update(true);
    }
    if (needControllerInit) {
      swiper.controller.control = currentParams.controller.control;
    }
    if (needPaginationInit) {
      if (swiper.isElement && (!paginationEl || typeof paginationEl === "string")) {
        paginationEl = document.createElement("div");
        paginationEl.classList.add("swiper-pagination");
        paginationEl.part.add("pagination");
        swiper.el.appendChild(paginationEl);
      }
      if (paginationEl) currentParams.pagination.el = paginationEl;
      pagination.init();
      pagination.render();
      pagination.update();
    }
    if (needScrollbarInit) {
      if (swiper.isElement && (!scrollbarEl || typeof scrollbarEl === "string")) {
        scrollbarEl = document.createElement("div");
        scrollbarEl.classList.add("swiper-scrollbar");
        scrollbarEl.part.add("scrollbar");
        swiper.el.appendChild(scrollbarEl);
      }
      if (scrollbarEl) currentParams.scrollbar.el = scrollbarEl;
      scrollbar.init();
      scrollbar.updateSize();
      scrollbar.setTranslate();
    }
    if (needNavigationInit) {
      if (swiper.isElement) {
        if (!nextEl || typeof nextEl === "string") {
          nextEl = document.createElement("div");
          nextEl.classList.add("swiper-button-next");
          nextEl.innerHTML = swiper.hostEl.constructor.nextButtonSvg;
          nextEl.part.add("button-next");
          swiper.el.appendChild(nextEl);
        }
        if (!prevEl || typeof prevEl === "string") {
          prevEl = document.createElement("div");
          prevEl.classList.add("swiper-button-prev");
          prevEl.innerHTML = swiper.hostEl.constructor.prevButtonSvg;
          prevEl.part.add("button-prev");
          swiper.el.appendChild(prevEl);
        }
      }
      if (nextEl) currentParams.navigation.nextEl = nextEl;
      if (prevEl) currentParams.navigation.prevEl = prevEl;
      navigation.init();
      navigation.update();
    }
    if (changedParams.includes("allowSlideNext")) {
      swiper.allowSlideNext = passedParams.allowSlideNext;
    }
    if (changedParams.includes("allowSlidePrev")) {
      swiper.allowSlidePrev = passedParams.allowSlidePrev;
    }
    if (changedParams.includes("direction")) {
      swiper.changeDirection(passedParams.direction, false);
    }
    if (loopNeedDestroy || loopNeedReloop) {
      swiper.loopDestroy();
    }
    if (loopNeedEnable || loopNeedReloop) {
      swiper.loopCreate();
    }
    swiper.update();
  }

  // node_modules/swiper/shared/get-element-params.mjs
  var formatValue = (val) => {
    if (parseFloat(val) === Number(val)) return Number(val);
    if (val === "true") return true;
    if (val === "") return true;
    if (val === "false") return false;
    if (val === "null") return null;
    if (val === "undefined") return void 0;
    if (typeof val === "string" && val.includes("{") && val.includes("}") && val.includes('"')) {
      let v;
      try {
        v = JSON.parse(val);
      } catch (err) {
        v = val;
      }
      return v;
    }
    return val;
  };
  var modulesParamsList = ["a11y", "autoplay", "controller", "cards-effect", "coverflow-effect", "creative-effect", "cube-effect", "fade-effect", "flip-effect", "free-mode", "grid", "hash-navigation", "history", "keyboard", "mousewheel", "navigation", "pagination", "parallax", "scrollbar", "thumbs", "virtual", "zoom"];
  function getParams(element, propName, propValue) {
    const params = {};
    const passedParams = {};
    extend3(params, defaults);
    const localParamsList = [...paramsList, "on"];
    const allowedParams = localParamsList.map((key) => key.replace(/_/, ""));
    localParamsList.forEach((paramName) => {
      paramName = paramName.replace("_", "");
      if (typeof element[paramName] !== "undefined") {
        passedParams[paramName] = element[paramName];
      }
    });
    const attrsList = [...element.attributes];
    if (typeof propName === "string" && typeof propValue !== "undefined") {
      attrsList.push({
        name: propName,
        value: isObject3(propValue) ? __spreadValues({}, propValue) : propValue
      });
    }
    attrsList.forEach((attr) => {
      const moduleParam = modulesParamsList.find((mParam) => attr.name.startsWith("".concat(mParam, "-")));
      if (moduleParam) {
        const parentObjName = attrToProp(moduleParam);
        const subObjName = attrToProp(attr.name.split("".concat(moduleParam, "-"))[1]);
        if (typeof passedParams[parentObjName] === "undefined") passedParams[parentObjName] = {};
        if (passedParams[parentObjName] === true) {
          passedParams[parentObjName] = {
            enabled: true
          };
        }
        passedParams[parentObjName][subObjName] = formatValue(attr.value);
      } else {
        const name = attrToProp(attr.name);
        if (!allowedParams.includes(name)) return;
        const value = formatValue(attr.value);
        if (passedParams[name] && modulesParamsList.includes(attr.name) && !isObject3(value)) {
          if (passedParams[name].constructor !== Object) {
            passedParams[name] = {};
          }
          passedParams[name].enabled = !!value;
        } else {
          passedParams[name] = value;
        }
      }
    });
    extend3(params, passedParams);
    if (params.navigation) {
      params.navigation = __spreadValues({
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
      }, params.navigation !== true ? params.navigation : {});
    } else if (params.navigation === false) {
      delete params.navigation;
    }
    if (params.scrollbar) {
      params.scrollbar = __spreadValues({
        el: ".swiper-scrollbar"
      }, params.scrollbar !== true ? params.scrollbar : {});
    } else if (params.scrollbar === false) {
      delete params.scrollbar;
    }
    if (params.pagination) {
      params.pagination = __spreadValues({
        el: ".swiper-pagination"
      }, params.pagination !== true ? params.pagination : {});
    } else if (params.pagination === false) {
      delete params.pagination;
    }
    return {
      params,
      passedParams
    };
  }

  // node_modules/swiper/swiper-element-bundle.mjs
  var SwiperCSS = ":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}";
  var SwiperSlideCSS = "::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}";
  var DummyHTMLElement = class {
  };
  var ClassToExtend = typeof window === "undefined" || typeof HTMLElement === "undefined" ? DummyHTMLElement : HTMLElement;
  var arrowSvg = '<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>\n    ';
  var addStyle = (shadowRoot, styles) => {
    if (typeof CSSStyleSheet !== "undefined" && shadowRoot.adoptedStyleSheets) {
      const styleSheet = new CSSStyleSheet();
      styleSheet.replaceSync(styles);
      shadowRoot.adoptedStyleSheets = [styleSheet];
    } else {
      const style = document.createElement("style");
      style.rel = "stylesheet";
      style.textContent = styles;
      shadowRoot.appendChild(style);
    }
  };
  var SwiperContainer = class extends ClassToExtend {
    constructor() {
      super();
      this.attachShadow({
        mode: "open"
      });
    }
    static get nextButtonSvg() {
      return arrowSvg;
    }
    static get prevButtonSvg() {
      return arrowSvg.replace("/></svg>", ' transform-origin="center" transform="rotate(180)"/></svg>');
    }
    cssStyles() {
      return [
        SwiperCSS,
        // eslint-disable-line
        ...this.injectStyles && Array.isArray(this.injectStyles) ? this.injectStyles : []
      ].join("\n");
    }
    cssLinks() {
      return this.injectStylesUrls || [];
    }
    calcSlideSlots() {
      const currentSideSlots = this.slideSlots || 0;
      const slideSlotChildren = [...this.querySelectorAll("[slot^=slide-]")].map((child) => {
        return parseInt(child.getAttribute("slot").split("slide-")[1], 10);
      });
      this.slideSlots = slideSlotChildren.length ? Math.max(...slideSlotChildren) + 1 : 0;
      if (!this.rendered) return;
      if (this.slideSlots > currentSideSlots) {
        for (let i = currentSideSlots; i < this.slideSlots; i += 1) {
          const slideEl = document.createElement("swiper-slide");
          slideEl.setAttribute("part", "slide slide-".concat(i + 1));
          const slotEl = document.createElement("slot");
          slotEl.setAttribute("name", "slide-".concat(i + 1));
          slideEl.appendChild(slotEl);
          this.shadowRoot.querySelector(".swiper-wrapper").appendChild(slideEl);
        }
      } else if (this.slideSlots < currentSideSlots) {
        const slides = this.swiper.slides;
        for (let i = slides.length - 1; i >= 0; i -= 1) {
          if (i > this.slideSlots) {
            slides[i].remove();
          }
        }
      }
    }
    render() {
      if (this.rendered) return;
      this.calcSlideSlots();
      let localStyles = this.cssStyles();
      if (this.slideSlots > 0) {
        localStyles = localStyles.replace(/::slotted\(([a-z-0-9.]*)\)/g, "$1");
      }
      if (localStyles.length) {
        addStyle(this.shadowRoot, localStyles);
      }
      this.cssLinks().forEach((url) => {
        const linkExists = this.shadowRoot.querySelector('link[href="'.concat(url, '"]'));
        if (linkExists) return;
        const linkEl = document.createElement("link");
        linkEl.rel = "stylesheet";
        linkEl.href = url;
        this.shadowRoot.appendChild(linkEl);
      });
      const el = document.createElement("div");
      el.classList.add("swiper");
      el.part = "container";
      el.innerHTML = '\n      <slot name="container-start"></slot>\n      <div class="swiper-wrapper" part="wrapper">\n        <slot></slot>\n        '.concat(Array.from({
        length: this.slideSlots
      }).map((_, index) => '\n        <swiper-slide part="slide slide-'.concat(index, '">\n          <slot name="slide-').concat(index, '"></slot>\n        </swiper-slide>\n        ')).join(""), '\n      </div>\n      <slot name="container-end"></slot>\n      ').concat(needsNavigation(this.passedParams) ? '\n        <div part="button-prev" class="swiper-button-prev">'.concat(this.constructor.prevButtonSvg, '</div>\n        <div part="button-next" class="swiper-button-next">').concat(this.constructor.nextButtonSvg, "</div>\n      ") : "", "\n      ").concat(needsPagination(this.passedParams) ? '\n        <div part="pagination" class="swiper-pagination"></div>\n      ' : "", "\n      ").concat(needsScrollbar(this.passedParams) ? '\n        <div part="scrollbar" class="swiper-scrollbar"></div>\n      ' : "", "\n    ");
      this.shadowRoot.appendChild(el);
      this.rendered = true;
    }
    initialize() {
      var _this = this;
      if (this.initialized) return;
      this.initialized = true;
      const {
        params: swiperParams,
        passedParams
      } = getParams(this);
      this.swiperParams = swiperParams;
      this.passedParams = passedParams;
      delete this.swiperParams.init;
      this.render();
      this.swiper = new Swiper(this.shadowRoot.querySelector(".swiper"), __spreadProps(__spreadValues(__spreadValues({}, swiperParams.virtual ? {} : {
        observer: true
      }), swiperParams), {
        touchEventsTarget: "container",
        onAny: function(name) {
          if (name === "observerUpdate") {
            _this.calcSlideSlots();
          }
          const eventName = swiperParams.eventsPrefix ? "".concat(swiperParams.eventsPrefix).concat(name.toLowerCase()) : name.toLowerCase();
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          const event2 = new CustomEvent(eventName, {
            detail: args,
            bubbles: name !== "hashChange",
            cancelable: true
          });
          _this.dispatchEvent(event2);
        }
      }));
    }
    connectedCallback() {
      if (this.initialized && this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM) {
        return;
      }
      if (this.init === false || this.getAttribute("init") === "false") {
        return;
      }
      this.initialize();
    }
    disconnectedCallback() {
      if (this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM) {
        return;
      }
      if (this.swiper && this.swiper.destroy) {
        this.swiper.destroy();
      }
      this.initialized = false;
    }
    updateSwiperOnPropChange(propName, propValue) {
      const {
        params: swiperParams,
        passedParams
      } = getParams(this, propName, propValue);
      this.passedParams = passedParams;
      this.swiperParams = swiperParams;
      if (this.swiper && this.swiper.params[propName] === propValue) {
        return;
      }
      updateSwiper(__spreadValues(__spreadValues(__spreadValues({
        swiper: this.swiper,
        passedParams: this.passedParams,
        changedParams: [attrToProp(propName)]
      }, propName === "navigation" && passedParams[propName] ? {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
      } : {}), propName === "pagination" && passedParams[propName] ? {
        paginationEl: ".swiper-pagination"
      } : {}), propName === "scrollbar" && passedParams[propName] ? {
        scrollbarEl: ".swiper-scrollbar"
      } : {}));
    }
    attributeChangedCallback(attr, prevValue, newValue) {
      if (!this.initialized) return;
      if (prevValue === "true" && newValue === null) {
        newValue = false;
      }
      this.updateSwiperOnPropChange(attr, newValue);
    }
    static get observedAttributes() {
      const attrs = paramsList.filter((param) => param.includes("_")).map((param) => param.replace(/[A-Z]/g, (v) => "-".concat(v)).replace("_", "").toLowerCase());
      return attrs;
    }
  };
  paramsList.forEach((paramName) => {
    if (paramName === "init") return;
    paramName = paramName.replace("_", "");
    Object.defineProperty(SwiperContainer.prototype, paramName, {
      configurable: true,
      get() {
        return (this.passedParams || {})[paramName];
      },
      set(value) {
        if (!this.passedParams) this.passedParams = {};
        this.passedParams[paramName] = value;
        if (!this.initialized) return;
        this.updateSwiperOnPropChange(paramName, value);
      }
    });
  });
  var SwiperSlide = class extends ClassToExtend {
    constructor() {
      super();
      this.attachShadow({
        mode: "open"
      });
    }
    render() {
      const lazy = this.lazy || this.getAttribute("lazy") === "" || this.getAttribute("lazy") === "true";
      addStyle(this.shadowRoot, SwiperSlideCSS);
      this.shadowRoot.appendChild(document.createElement("slot"));
      if (lazy) {
        const lazyDiv = document.createElement("div");
        lazyDiv.classList.add("swiper-lazy-preloader");
        lazyDiv.part.add("preloader");
        this.shadowRoot.appendChild(lazyDiv);
      }
    }
    initialize() {
      this.render();
    }
    connectedCallback() {
      if (this.swiperLoopMoveDOM) {
        return;
      }
      this.initialize();
    }
  };
  var register = () => {
    if (typeof window === "undefined") return;
    if (!window.customElements.get("swiper-container")) window.customElements.define("swiper-container", SwiperContainer);
    if (!window.customElements.get("swiper-slide")) window.customElements.define("swiper-slide", SwiperSlide);
  };
  if (typeof window !== "undefined") {
    window.SwiperElementRegisterParams = (params) => {
      paramsList.push(...params);
    };
  }

  // assets/js/modules/videoCover.js
  function videoCover() {
    const videoCovers = document.querySelectorAll(".video-cover");
    const videoElements = document.querySelectorAll(".video");
    if (!videoCovers || videoCovers.length === 0) {
      return;
    }
    videoCovers.forEach((videoCover2) => {
      videoCover2.addEventListener("click", function(event2) {
        event2.preventDefault();
        const currentCover = this;
        const videoElement = currentCover.parentElement.querySelector(".video");
        if (videoElement && videoElement.tagName === "VIDEO") {
          videoElements.forEach((video) => {
            if (video !== videoElement) {
              video.pause();
            }
          });
          videoElement.play().catch((error) => {
            console.error("Error playing video:", error);
          });
          currentCover.classList.replace("opacity-100", "opacity-0");
          currentCover.classList.replace("pointer-events-auto", "pointer-events-none");
        } else {
          console.warn("No corresponding video element found for this cover");
        }
      });
    });
  }

  // node_modules/plyr/src/js/controls.js
  var import_rangetouch = __toESM(require_rangetouch(), 1);

  // node_modules/plyr/src/js/utils/is.js
  var getConstructor = (input) => input !== null && typeof input !== "undefined" ? input.constructor : null;
  var instanceOf = (input, constructor) => Boolean(input && constructor && input instanceof constructor);
  var isNullOrUndefined = (input) => input === null || typeof input === "undefined";
  var isObject4 = (input) => getConstructor(input) === Object;
  var isNumber = (input) => getConstructor(input) === Number && !Number.isNaN(input);
  var isString = (input) => getConstructor(input) === String;
  var isBoolean = (input) => getConstructor(input) === Boolean;
  var isFunction2 = (input) => typeof input === "function";
  var isArray = (input) => Array.isArray(input);
  var isWeakMap = (input) => instanceOf(input, WeakMap);
  var isNodeList = (input) => instanceOf(input, NodeList);
  var isTextNode = (input) => getConstructor(input) === Text;
  var isEvent = (input) => instanceOf(input, Event);
  var isKeyboardEvent = (input) => instanceOf(input, KeyboardEvent);
  var isCue = (input) => instanceOf(input, window.TextTrackCue) || instanceOf(input, window.VTTCue);
  var isTrack = (input) => instanceOf(input, TextTrack) || !isNullOrUndefined(input) && isString(input.kind);
  var isPromise = (input) => instanceOf(input, Promise) && isFunction2(input.then);
  function isElement(input) {
    return input !== null && typeof input === "object" && input.nodeType === 1 && typeof input.style === "object" && typeof input.ownerDocument === "object";
  }
  function isEmpty(input) {
    return isNullOrUndefined(input) || (isString(input) || isArray(input) || isNodeList(input)) && !input.length || isObject4(input) && !Object.keys(input).length;
  }
  function isUrl(input) {
    if (instanceOf(input, window.URL)) {
      return true;
    }
    if (!isString(input)) {
      return false;
    }
    let string = input;
    if (!input.startsWith("http://") || !input.startsWith("https://")) {
      string = "http://".concat(input);
    }
    try {
      return !isEmpty(new URL(string).hostname);
    } catch (e) {
      return false;
    }
  }
  var is_default = {
    nullOrUndefined: isNullOrUndefined,
    object: isObject4,
    number: isNumber,
    string: isString,
    boolean: isBoolean,
    function: isFunction2,
    array: isArray,
    weakMap: isWeakMap,
    nodeList: isNodeList,
    element: isElement,
    textNode: isTextNode,
    event: isEvent,
    keyboardEvent: isKeyboardEvent,
    cue: isCue,
    track: isTrack,
    promise: isPromise,
    url: isUrl,
    empty: isEmpty
  };

  // node_modules/plyr/src/js/utils/animation.js
  var transitionEndEvent = (() => {
    const element = document.createElement("span");
    const events2 = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };
    const type = Object.keys(events2).find((event2) => element.style[event2] !== void 0);
    return is_default.string(type) ? events2[type] : false;
  })();
  function repaint(element, delay) {
    setTimeout(() => {
      try {
        element.hidden = true;
        element.offsetHeight;
        element.hidden = false;
      } catch (e) {
      }
    }, delay);
  }

  // node_modules/plyr/src/js/utils/objects.js
  function cloneDeep(object) {
    return JSON.parse(JSON.stringify(object));
  }
  function getDeep(object, path) {
    return path.split(".").reduce((obj, key) => obj && obj[key], object);
  }
  function extend4(target = {}, ...sources) {
    if (!sources.length) {
      return target;
    }
    const source2 = sources.shift();
    if (!is_default.object(source2)) {
      return target;
    }
    Object.keys(source2).forEach((key) => {
      if (is_default.object(source2[key])) {
        if (!Object.keys(target).includes(key)) {
          Object.assign(target, { [key]: {} });
        }
        extend4(target[key], source2[key]);
      } else {
        Object.assign(target, { [key]: source2[key] });
      }
    });
    return extend4(target, ...sources);
  }

  // node_modules/plyr/src/js/utils/elements.js
  function wrap(elements, wrapper) {
    const targets = elements.length ? elements : [elements];
    Array.from(targets).reverse().forEach((element, index) => {
      const child = index > 0 ? wrapper.cloneNode(true) : wrapper;
      const parent = element.parentNode;
      const sibling = element.nextSibling;
      child.appendChild(element);
      if (sibling) {
        parent.insertBefore(child, sibling);
      } else {
        parent.appendChild(child);
      }
    });
  }
  function setAttributes(element, attributes) {
    if (!is_default.element(element) || is_default.empty(attributes)) return;
    Object.entries(attributes).filter(([, value]) => !is_default.nullOrUndefined(value)).forEach(([key, value]) => element.setAttribute(key, value));
  }
  function createElement2(type, attributes, text) {
    const element = document.createElement(type);
    if (is_default.object(attributes)) {
      setAttributes(element, attributes);
    }
    if (is_default.string(text)) {
      element.textContent = text;
    }
    return element;
  }
  function insertAfter(element, target) {
    if (!is_default.element(element) || !is_default.element(target)) return;
    target.parentNode.insertBefore(element, target.nextSibling);
  }
  function insertElement(type, parent, attributes, text) {
    if (!is_default.element(parent)) return;
    parent.appendChild(createElement2(type, attributes, text));
  }
  function removeElement2(element) {
    if (is_default.nodeList(element) || is_default.array(element)) {
      Array.from(element).forEach(removeElement2);
      return;
    }
    if (!is_default.element(element) || !is_default.element(element.parentNode)) {
      return;
    }
    element.parentNode.removeChild(element);
  }
  function emptyElement(element) {
    if (!is_default.element(element)) return;
    let { length } = element.childNodes;
    while (length > 0) {
      element.removeChild(element.lastChild);
      length -= 1;
    }
  }
  function replaceElement(newChild, oldChild) {
    if (!is_default.element(oldChild) || !is_default.element(oldChild.parentNode) || !is_default.element(newChild)) return null;
    oldChild.parentNode.replaceChild(newChild, oldChild);
    return newChild;
  }
  function getAttributesFromSelector(sel, existingAttributes) {
    if (!is_default.string(sel) || is_default.empty(sel)) return {};
    const attributes = {};
    const existing = extend4({}, existingAttributes);
    sel.split(",").forEach((s) => {
      const selector = s.trim();
      const className = selector.replace(".", "");
      const stripped = selector.replace(/[[\]]/g, "");
      const parts = stripped.split("=");
      const [key] = parts;
      const value = parts.length > 1 ? parts[1].replace(/["']/g, "") : "";
      const start = selector.charAt(0);
      switch (start) {
        case ".":
          if (is_default.string(existing.class)) {
            attributes.class = "".concat(existing.class, " ").concat(className);
          } else {
            attributes.class = className;
          }
          break;
        case "#":
          attributes.id = selector.replace("#", "");
          break;
        case "[":
          attributes[key] = value;
          break;
        default:
          break;
      }
    });
    return extend4(existing, attributes);
  }
  function toggleHidden(element, hidden) {
    if (!is_default.element(element)) return;
    let hide = hidden;
    if (!is_default.boolean(hide)) {
      hide = !element.hidden;
    }
    element.hidden = hide;
  }
  function toggleClass(element, className, force) {
    if (is_default.nodeList(element)) {
      return Array.from(element).map((e) => toggleClass(e, className, force));
    }
    if (is_default.element(element)) {
      let method = "toggle";
      if (typeof force !== "undefined") {
        method = force ? "add" : "remove";
      }
      element.classList[method](className);
      return element.classList.contains(className);
    }
    return false;
  }
  function hasClass(element, className) {
    return is_default.element(element) && element.classList.contains(className);
  }
  function matches2(element, selector) {
    const { prototype } = Element;
    function match() {
      return Array.from(document.querySelectorAll(selector)).includes(this);
    }
    const method = prototype.matches || prototype.webkitMatchesSelector || prototype.mozMatchesSelector || prototype.msMatchesSelector || match;
    return method.call(element, selector);
  }
  function closest2(element, selector) {
    const { prototype } = Element;
    function closestElement2() {
      let el = this;
      do {
        if (matches2.matches(el, selector)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    }
    const method = prototype.closest || closestElement2;
    return method.call(element, selector);
  }
  function getElements(selector) {
    return this.elements.container.querySelectorAll(selector);
  }
  function getElement(selector) {
    return this.elements.container.querySelector(selector);
  }
  function setFocus(element = null, focusVisible = false) {
    if (!is_default.element(element)) return;
    element.focus({ preventScroll: true, focusVisible });
  }

  // node_modules/plyr/src/js/support.js
  var defaultCodecs = {
    "audio/ogg": "vorbis",
    "audio/wav": "1",
    "video/webm": "vp8, vorbis",
    "video/mp4": "avc1.42E01E, mp4a.40.2",
    "video/ogg": "theora"
  };
  var support2 = {
    // Basic support
    audio: "canPlayType" in document.createElement("audio"),
    video: "canPlayType" in document.createElement("video"),
    // Check for support
    // Basic functionality vs full UI
    check(type, provider) {
      const api = support2[type] || provider !== "html5";
      const ui2 = api && support2.rangeInput;
      return {
        api,
        ui: ui2
      };
    },
    // Picture-in-picture support
    pip: (() => {
      return document.pictureInPictureEnabled && !createElement2("video").disablePictureInPicture;
    })(),
    // Airplay support
    // Safari only currently
    airplay: is_default.function(window.WebKitPlaybackTargetAvailabilityEvent),
    // Inline playback support
    // https://webkit.org/blog/6784/new-video-policies-for-ios/
    playsinline: "playsInline" in document.createElement("video"),
    // Check for mime type support against a player instance
    // Credits: http://diveintohtml5.info/everything.html
    // Related: http://www.leanbackplayer.com/test/h5mt.html
    mime(input) {
      if (is_default.empty(input)) {
        return false;
      }
      const [mediaType] = input.split("/");
      let type = input;
      if (!this.isHTML5 || mediaType !== this.type) {
        return false;
      }
      if (Object.keys(defaultCodecs).includes(type)) {
        type += '; codecs="'.concat(defaultCodecs[input], '"');
      }
      try {
        return Boolean(type && this.media.canPlayType(type).replace(/no/, ""));
      } catch (e) {
        return false;
      }
    },
    // Check for textTracks support
    textTracks: "textTracks" in document.createElement("video"),
    // <input type="range"> Sliders
    rangeInput: (() => {
      const range = document.createElement("input");
      range.type = "range";
      return range.type === "range";
    })(),
    // Touch
    // NOTE: Remember a device can be mouse + touch enabled so we check on first touch event
    touch: "ontouchstart" in document.documentElement,
    // Detect transitions support
    transitions: transitionEndEvent !== false,
    // Reduced motion iOS & MacOS setting
    // https://webkit.org/blog/7551/responsive-design-for-motion/
    reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
  };
  var support_default = support2;

  // node_modules/plyr/src/js/utils/events.js
  var supportsPassiveListeners = (() => {
    let supported = false;
    try {
      const options = Object.defineProperty({}, "passive", {
        get() {
          supported = true;
          return null;
        }
      });
      window.addEventListener("test", null, options);
      window.removeEventListener("test", null, options);
    } catch (e) {
    }
    return supported;
  })();
  function toggleListener(element, event2, callback, toggle = false, passive = true, capture = false) {
    if (!element || !("addEventListener" in element) || is_default.empty(event2) || !is_default.function(callback)) {
      return;
    }
    const events2 = event2.split(" ");
    let options = capture;
    if (supportsPassiveListeners) {
      options = {
        // Whether the listener can be passive (i.e. default never prevented)
        passive,
        // Whether the listener is a capturing listener or not
        capture
      };
    }
    events2.forEach((type) => {
      if (this && this.eventListeners && toggle) {
        this.eventListeners.push({ element, type, callback, options });
      }
      element[toggle ? "addEventListener" : "removeEventListener"](type, callback, options);
    });
  }
  function on(element, events2 = "", callback, passive = true, capture = false) {
    toggleListener.call(this, element, events2, callback, true, passive, capture);
  }
  function off(element, events2 = "", callback, passive = true, capture = false) {
    toggleListener.call(this, element, events2, callback, false, passive, capture);
  }
  function once(element, events2 = "", callback, passive = true, capture = false) {
    const onceCallback = (...args) => {
      off(element, events2, onceCallback, passive, capture);
      callback.apply(this, args);
    };
    toggleListener.call(this, element, events2, onceCallback, true, passive, capture);
  }
  function triggerEvent2(element, type = "", bubbles = false, detail = {}) {
    if (!is_default.element(element) || is_default.empty(type)) {
      return;
    }
    const event2 = new CustomEvent(type, {
      bubbles,
      detail: __spreadProps(__spreadValues({}, detail), { plyr: this })
    });
    element.dispatchEvent(event2);
  }
  function unbindListeners() {
    if (this && this.eventListeners) {
      this.eventListeners.forEach((item) => {
        const { element, type, callback, options } = item;
        element.removeEventListener(type, callback, options);
      });
      this.eventListeners = [];
    }
  }
  function ready2() {
    return new Promise(
      (resolve) => this.ready ? setTimeout(resolve, 0) : on.call(this, this.elements.container, "ready", resolve)
    ).then(() => {
    });
  }

  // node_modules/plyr/src/js/utils/promise.js
  function silencePromise(value) {
    if (is_default.promise(value)) {
      value.then(null, () => {
      });
    }
  }

  // node_modules/plyr/src/js/utils/arrays.js
  function dedupe(array) {
    if (!is_default.array(array)) {
      return array;
    }
    return array.filter((item, index) => array.indexOf(item) === index);
  }
  function closest3(array, value) {
    if (!is_default.array(array) || !array.length) {
      return null;
    }
    return array.reduce((prev, curr) => Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
  }

  // node_modules/plyr/src/js/utils/style.js
  function supportsCSS(declaration) {
    if (!window || !window.CSS) {
      return false;
    }
    return window.CSS.supports(declaration);
  }
  var standardRatios = [
    [1, 1],
    [4, 3],
    [3, 4],
    [5, 4],
    [4, 5],
    [3, 2],
    [2, 3],
    [16, 10],
    [10, 16],
    [16, 9],
    [9, 16],
    [21, 9],
    [9, 21],
    [32, 9],
    [9, 32]
  ].reduce((out, [x, y]) => __spreadProps(__spreadValues({}, out), { [x / y]: [x, y] }), {});
  function validateAspectRatio(input) {
    if (!is_default.array(input) && (!is_default.string(input) || !input.includes(":"))) {
      return false;
    }
    const ratio = is_default.array(input) ? input : input.split(":");
    return ratio.map(Number).every(is_default.number);
  }
  function reduceAspectRatio(ratio) {
    if (!is_default.array(ratio) || !ratio.every(is_default.number)) {
      return null;
    }
    const [width, height] = ratio;
    const getDivider = (w, h) => h === 0 ? w : getDivider(h, w % h);
    const divider = getDivider(width, height);
    return [width / divider, height / divider];
  }
  function getAspectRatio(input) {
    const parse = (ratio2) => validateAspectRatio(ratio2) ? ratio2.split(":").map(Number) : null;
    let ratio = parse(input);
    if (ratio === null) {
      ratio = parse(this.config.ratio);
    }
    if (ratio === null && !is_default.empty(this.embed) && is_default.array(this.embed.ratio)) {
      ({ ratio } = this.embed);
    }
    if (ratio === null && this.isHTML5) {
      const { videoWidth, videoHeight } = this.media;
      ratio = [videoWidth, videoHeight];
    }
    return reduceAspectRatio(ratio);
  }
  function setAspectRatio(input) {
    if (!this.isVideo) {
      return {};
    }
    const { wrapper } = this.elements;
    const ratio = getAspectRatio.call(this, input);
    if (!is_default.array(ratio)) {
      return {};
    }
    const [x, y] = reduceAspectRatio(ratio);
    const useNative = supportsCSS("aspect-ratio: ".concat(x, "/").concat(y));
    const padding = 100 / x * y;
    if (useNative) {
      wrapper.style.aspectRatio = "".concat(x, "/").concat(y);
    } else {
      wrapper.style.paddingBottom = "".concat(padding, "%");
    }
    if (this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
      const height = 100 / this.media.offsetWidth * Number.parseInt(window.getComputedStyle(this.media).paddingBottom, 10);
      const offset = (height - padding) / (height / 50);
      if (this.fullscreen.active) {
        wrapper.style.paddingBottom = null;
      } else {
        this.media.style.transform = "translateY(-".concat(offset, "%)");
      }
    } else if (this.isHTML5) {
      wrapper.classList.add(this.config.classNames.videoFixedRatio);
    }
    return { padding, ratio };
  }
  function roundAspectRatio(x, y, tolerance = 0.05) {
    const ratio = x / y;
    const closestRatio = closest3(Object.keys(standardRatios), ratio);
    if (Math.abs(closestRatio - ratio) <= tolerance) {
      return standardRatios[closestRatio];
    }
    return [x, y];
  }
  function getViewportSize() {
    const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    return [width, height];
  }

  // node_modules/plyr/src/js/html5.js
  var html5 = {
    getSources() {
      if (!this.isHTML5) {
        return [];
      }
      const sources = Array.from(this.media.querySelectorAll("source"));
      return sources.filter((source2) => {
        const type = source2.getAttribute("type");
        if (is_default.empty(type)) {
          return true;
        }
        return support_default.mime.call(this, type);
      });
    },
    // Get quality levels
    getQualityOptions() {
      if (this.config.quality.forced) {
        return this.config.quality.options;
      }
      return html5.getSources.call(this).map((source2) => Number(source2.getAttribute("size"))).filter(Boolean);
    },
    setup() {
      if (!this.isHTML5) {
        return;
      }
      const player = this;
      player.options.speed = player.config.speed.options;
      if (!is_default.empty(this.config.ratio)) {
        setAspectRatio.call(player);
      }
      Object.defineProperty(player.media, "quality", {
        get() {
          const sources = html5.getSources.call(player);
          const source2 = sources.find((s) => s.getAttribute("src") === player.source);
          return source2 && Number(source2.getAttribute("size"));
        },
        set(input) {
          if (player.quality === input) {
            return;
          }
          if (player.config.quality.forced && is_default.function(player.config.quality.onChange)) {
            player.config.quality.onChange(input);
          } else {
            const sources = html5.getSources.call(player);
            const source2 = sources.find((s) => Number(s.getAttribute("size")) === input);
            if (!source2) {
              return;
            }
            const { currentTime, paused, preload: preload2, readyState, playbackRate } = player.media;
            player.media.src = source2.getAttribute("src");
            if (preload2 !== "none" || readyState) {
              player.once("loadedmetadata", () => {
                player.speed = playbackRate;
                player.currentTime = currentTime;
                if (!paused) {
                  silencePromise(player.play());
                }
              });
              player.media.load();
            }
          }
          triggerEvent2.call(player, player.media, "qualitychange", false, {
            quality: input
          });
        }
      });
    },
    // Cancel current network requests
    // See https://github.com/sampotts/plyr/issues/174
    cancelRequests() {
      if (!this.isHTML5) {
        return;
      }
      removeElement2(html5.getSources.call(this));
      this.media.setAttribute("src", this.config.blankVideo);
      this.media.load();
      this.debug.log("Cancelled network requests");
    }
  };
  var html5_default = html5;

  // node_modules/plyr/src/js/utils/browser.js
  var isIE = Boolean(window.document.documentMode);
  var isEdge = /Edge/.test(navigator.userAgent);
  var isWebKit = "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent);
  var isIPhone = /iPhone|iPod/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
  var isIPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  var isIos = /iPad|iPhone|iPod/i.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
  var browser_default = {
    isIE,
    isEdge,
    isWebKit,
    isIPhone,
    isIPadOS,
    isIos
  };

  // node_modules/plyr/src/js/utils/strings.js
  function generateId(prefix) {
    return "".concat(prefix, "-").concat(Math.floor(Math.random() * 1e4));
  }
  function format(input, ...args) {
    if (is_default.empty(input)) return input;
    return input.toString().replace(/\{(\d+)\}/g, (_, i) => args[i].toString());
  }
  function getPercentage(current, max) {
    if (current === 0 || max === 0 || Number.isNaN(current) || Number.isNaN(max)) {
      return 0;
    }
    return (current / max * 100).toFixed(2);
  }
  function replaceAll(input = "", find2 = "", replace = "") {
    return input.replace(new RegExp(find2.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), replace.toString());
  }
  function toTitleCase(input = "") {
    return input.toString().replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
  }
  function toPascalCase(input = "") {
    let string = input.toString();
    string = replaceAll(string, "-", " ");
    string = replaceAll(string, "_", " ");
    string = toTitleCase(string);
    return replaceAll(string, " ", "");
  }
  function toCamelCase(input = "") {
    let string = input.toString();
    string = toPascalCase(string);
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
  function stripHTML(source2) {
    const fragment = document.createDocumentFragment();
    const element = document.createElement("div");
    fragment.appendChild(element);
    element.innerHTML = source2;
    return fragment.firstChild.textContent;
  }
  function getHTML(element) {
    const wrapper = document.createElement("div");
    wrapper.appendChild(element);
    return wrapper.innerHTML;
  }

  // node_modules/plyr/src/js/utils/i18n.js
  var resources = {
    pip: "PIP",
    airplay: "AirPlay",
    html5: "HTML5",
    vimeo: "Vimeo",
    youtube: "YouTube"
  };
  var i18n = {
    get(key = "", config = {}) {
      if (is_default.empty(key) || is_default.empty(config)) {
        return "";
      }
      let string = getDeep(config.i18n, key);
      if (is_default.empty(string)) {
        if (Object.keys(resources).includes(key)) {
          return resources[key];
        }
        return "";
      }
      const replace = {
        "{seektime}": config.seekTime,
        "{title}": config.title
      };
      Object.entries(replace).forEach(([k, v]) => {
        string = replaceAll(string, k, v);
      });
      return string;
    }
  };
  var i18n_default = i18n;

  // node_modules/plyr/src/js/storage.js
  var Storage = class _Storage {
    constructor(player) {
      __publicField(this, "get", (key) => {
        if (!_Storage.supported || !this.enabled) {
          return null;
        }
        const store = window.localStorage.getItem(this.key);
        if (is_default.empty(store)) return null;
        const json = JSON.parse(store);
        return is_default.string(key) && key.length ? json[key] : json;
      });
      __publicField(this, "set", (object) => {
        if (!_Storage.supported || !this.enabled) {
          return;
        }
        if (!is_default.object(object)) {
          return;
        }
        let storage = this.get();
        if (is_default.empty(storage)) {
          storage = {};
        }
        extend4(storage, object);
        try {
          window.localStorage.setItem(this.key, JSON.stringify(storage));
        } catch (e) {
        }
      });
      this.enabled = player.config.storage.enabled;
      this.key = player.config.storage.key;
    }
    // Check for actual support (see if we can use it)
    static get supported() {
      try {
        if (!("localStorage" in window)) return false;
        const test = "___test";
        window.localStorage.setItem(test, test);
        window.localStorage.removeItem(test);
        return true;
      } catch (e) {
        return false;
      }
    }
  };
  var storage_default = Storage;

  // node_modules/plyr/src/js/utils/fetch.js
  function fetch(url, responseType = "text", withCredentials = false) {
    return new Promise((resolve, reject) => {
      try {
        const request = new XMLHttpRequest();
        if (!("withCredentials" in request)) return;
        if (withCredentials) {
          request.withCredentials = true;
        }
        request.addEventListener("load", () => {
          if (responseType === "text") {
            try {
              resolve(JSON.parse(request.responseText));
            } catch (e) {
              resolve(request.responseText);
            }
          } else {
            resolve(request.response);
          }
        });
        request.addEventListener("error", () => {
          throw new Error(request.status);
        });
        request.open("GET", url, true);
        request.responseType = responseType;
        request.send();
      } catch (error) {
        reject(error);
      }
    });
  }

  // node_modules/plyr/src/js/utils/load-sprite.js
  function loadSprite(url, id) {
    if (!is_default.string(url)) {
      return;
    }
    const prefix = "cache";
    const hasId = is_default.string(id);
    let isCached = false;
    const exists = () => document.getElementById(id) !== null;
    const update2 = (container, data) => {
      container.innerHTML = data;
      if (hasId && exists()) {
        return;
      }
      document.body.insertAdjacentElement("afterbegin", container);
    };
    if (!hasId || !exists()) {
      const useStorage = storage_default.supported;
      const container = document.createElement("div");
      container.setAttribute("hidden", "");
      if (hasId) {
        container.setAttribute("id", id);
      }
      if (useStorage) {
        const cached = window.localStorage.getItem("".concat(prefix, "-").concat(id));
        isCached = cached !== null;
        if (isCached) {
          const data = JSON.parse(cached);
          update2(container, data.content);
        }
      }
      fetch(url).then((result) => {
        if (is_default.empty(result)) {
          return;
        }
        if (useStorage) {
          try {
            window.localStorage.setItem(
              "".concat(prefix, "-").concat(id),
              JSON.stringify({
                content: result
              })
            );
          } catch (e) {
          }
        }
        update2(container, result);
      }).catch(() => {
      });
    }
  }

  // node_modules/plyr/src/js/utils/time.js
  var getHours = (value) => Math.trunc(value / 60 / 60 % 60, 10);
  var getMinutes = (value) => Math.trunc(value / 60 % 60, 10);
  var getSeconds = (value) => Math.trunc(value % 60, 10);
  function formatTime(time = 0, displayHours = false, inverted = false) {
    if (!is_default.number(time)) {
      return formatTime(void 0, displayHours, inverted);
    }
    const format2 = (value) => "0".concat(value).slice(-2);
    let hours = getHours(time);
    const mins = getMinutes(time);
    const secs = getSeconds(time);
    if (displayHours || hours > 0) {
      hours = "".concat(hours, ":");
    } else {
      hours = "";
    }
    return "".concat(inverted && time > 0 ? "-" : "").concat(hours).concat(format2(mins), ":").concat(format2(secs));
  }

  // node_modules/plyr/src/js/controls.js
  var controls = {
    // Get icon URL
    getIconUrl() {
      const url = new URL(this.config.iconUrl, window.location);
      const host = window.location.host ? window.location.host : window.top.location.host;
      const cors = url.host !== host || browser_default.isIE && !window.svg4everybody;
      return {
        url: this.config.iconUrl,
        cors
      };
    },
    // Find the UI controls
    findElements() {
      try {
        this.elements.controls = getElement.call(this, this.config.selectors.controls.wrapper);
        this.elements.buttons = {
          play: getElements.call(this, this.config.selectors.buttons.play),
          pause: getElement.call(this, this.config.selectors.buttons.pause),
          restart: getElement.call(this, this.config.selectors.buttons.restart),
          rewind: getElement.call(this, this.config.selectors.buttons.rewind),
          fastForward: getElement.call(this, this.config.selectors.buttons.fastForward),
          mute: getElement.call(this, this.config.selectors.buttons.mute),
          pip: getElement.call(this, this.config.selectors.buttons.pip),
          airplay: getElement.call(this, this.config.selectors.buttons.airplay),
          settings: getElement.call(this, this.config.selectors.buttons.settings),
          captions: getElement.call(this, this.config.selectors.buttons.captions),
          fullscreen: getElement.call(this, this.config.selectors.buttons.fullscreen)
        };
        this.elements.progress = getElement.call(this, this.config.selectors.progress);
        this.elements.inputs = {
          seek: getElement.call(this, this.config.selectors.inputs.seek),
          volume: getElement.call(this, this.config.selectors.inputs.volume)
        };
        this.elements.display = {
          buffer: getElement.call(this, this.config.selectors.display.buffer),
          currentTime: getElement.call(this, this.config.selectors.display.currentTime),
          duration: getElement.call(this, this.config.selectors.display.duration)
        };
        if (is_default.element(this.elements.progress)) {
          this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip));
        }
        return true;
      } catch (error) {
        this.debug.warn("It looks like there is a problem with your custom controls HTML", error);
        this.toggleNativeControls(true);
        return false;
      }
    },
    // Create <svg> icon
    createIcon(type, attributes) {
      const namespace = "http://www.w3.org/2000/svg";
      const iconUrl = controls.getIconUrl.call(this);
      const iconPath = "".concat(!iconUrl.cors ? iconUrl.url : "", "#").concat(this.config.iconPrefix);
      const icon = document.createElementNS(namespace, "svg");
      setAttributes(
        icon,
        extend4(attributes, {
          "aria-hidden": "true",
          "focusable": "false"
        })
      );
      const use = document.createElementNS(namespace, "use");
      const path = "".concat(iconPath, "-").concat(type);
      if ("href" in use) {
        use.setAttributeNS("http://www.w3.org/1999/xlink", "href", path);
      }
      use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", path);
      icon.appendChild(use);
      return icon;
    },
    // Create hidden text label
    createLabel(key, attr = {}) {
      const text = i18n_default.get(key, this.config);
      const attributes = __spreadProps(__spreadValues({}, attr), { class: [attr.class, this.config.classNames.hidden].filter(Boolean).join(" ") });
      return createElement2("span", attributes, text);
    },
    // Create a badge
    createBadge(text) {
      if (is_default.empty(text)) {
        return null;
      }
      const badge = createElement2("span", {
        class: this.config.classNames.menu.value
      });
      badge.appendChild(
        createElement2(
          "span",
          {
            class: this.config.classNames.menu.badge
          },
          text
        )
      );
      return badge;
    },
    // Create a <button>
    createButton(buttonType, attr) {
      const attributes = extend4({}, attr);
      let type = toCamelCase(buttonType);
      const props = {
        element: "button",
        toggle: false,
        label: null,
        icon: null,
        labelPressed: null,
        iconPressed: null
      };
      ["element", "icon", "label"].forEach((key) => {
        if (Object.keys(attributes).includes(key)) {
          props[key] = attributes[key];
          delete attributes[key];
        }
      });
      if (props.element === "button" && !Object.keys(attributes).includes("type")) {
        attributes.type = "button";
      }
      if (Object.keys(attributes).includes("class")) {
        if (!attributes.class.split(" ").includes(this.config.classNames.control)) {
          extend4(attributes, {
            class: "".concat(attributes.class, " ").concat(this.config.classNames.control)
          });
        }
      } else {
        attributes.class = this.config.classNames.control;
      }
      switch (buttonType) {
        case "play":
          props.toggle = true;
          props.label = "play";
          props.labelPressed = "pause";
          props.icon = "play";
          props.iconPressed = "pause";
          break;
        case "mute":
          props.toggle = true;
          props.label = "mute";
          props.labelPressed = "unmute";
          props.icon = "volume";
          props.iconPressed = "muted";
          break;
        case "captions":
          props.toggle = true;
          props.label = "enableCaptions";
          props.labelPressed = "disableCaptions";
          props.icon = "captions-off";
          props.iconPressed = "captions-on";
          break;
        case "fullscreen":
          props.toggle = true;
          props.label = "enterFullscreen";
          props.labelPressed = "exitFullscreen";
          props.icon = "enter-fullscreen";
          props.iconPressed = "exit-fullscreen";
          break;
        case "play-large":
          attributes.class += " ".concat(this.config.classNames.control, "--overlaid");
          type = "play";
          props.label = "play";
          props.icon = "play";
          break;
        default:
          if (is_default.empty(props.label)) {
            props.label = type;
          }
          if (is_default.empty(props.icon)) {
            props.icon = buttonType;
          }
      }
      const button = createElement2(props.element);
      if (props.toggle) {
        button.appendChild(
          controls.createIcon.call(this, props.iconPressed, {
            class: "icon--pressed"
          })
        );
        button.appendChild(
          controls.createIcon.call(this, props.icon, {
            class: "icon--not-pressed"
          })
        );
        button.appendChild(
          controls.createLabel.call(this, props.labelPressed, {
            class: "label--pressed"
          })
        );
        button.appendChild(
          controls.createLabel.call(this, props.label, {
            class: "label--not-pressed"
          })
        );
      } else {
        button.appendChild(controls.createIcon.call(this, props.icon));
        button.appendChild(controls.createLabel.call(this, props.label));
      }
      extend4(attributes, getAttributesFromSelector(this.config.selectors.buttons[type], attributes));
      setAttributes(button, attributes);
      if (type === "play") {
        if (!is_default.array(this.elements.buttons[type])) {
          this.elements.buttons[type] = [];
        }
        this.elements.buttons[type].push(button);
      } else {
        this.elements.buttons[type] = button;
      }
      return button;
    },
    // Create an <input type='range'>
    createRange(type, attributes) {
      const input = createElement2(
        "input",
        extend4(
          getAttributesFromSelector(this.config.selectors.inputs[type]),
          {
            "type": "range",
            "min": 0,
            "max": 100,
            "step": 0.01,
            "value": 0,
            "autocomplete": "off",
            // A11y fixes for https://github.com/sampotts/plyr/issues/905
            "role": "slider",
            "aria-label": i18n_default.get(type, this.config),
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": 0
          },
          attributes
        )
      );
      this.elements.inputs[type] = input;
      controls.updateRangeFill.call(this, input);
      import_rangetouch.default.setup(input);
      return input;
    },
    // Create a <progress>
    createProgress(type, attributes) {
      const progress = createElement2(
        "progress",
        extend4(
          getAttributesFromSelector(this.config.selectors.display[type]),
          {
            "min": 0,
            "max": 100,
            "value": 0,
            "role": "progressbar",
            "aria-hidden": true
          },
          attributes
        )
      );
      if (type !== "volume") {
        progress.appendChild(createElement2("span", null, "0"));
        const suffixKey = {
          played: "played",
          buffer: "buffered"
        }[type];
        const suffix = suffixKey ? i18n_default.get(suffixKey, this.config) : "";
        progress.textContent = "% ".concat(suffix.toLowerCase());
      }
      this.elements.display[type] = progress;
      return progress;
    },
    // Create time display
    createTime(type, attrs) {
      const attributes = getAttributesFromSelector(this.config.selectors.display[type], attrs);
      const container = createElement2(
        "div",
        extend4(attributes, {
          "class": "".concat(attributes.class ? attributes.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
          "aria-label": i18n_default.get(type, this.config),
          "role": "timer"
        }),
        "00:00"
      );
      this.elements.display[type] = container;
      return container;
    },
    // Bind keyboard shortcuts for a menu item
    // We have to bind to keyup otherwise Firefox triggers a click when a keydown event handler shifts focus
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1220143
    bindMenuItemShortcuts(menuItem, type) {
      on.call(
        this,
        menuItem,
        "keydown keyup",
        (event2) => {
          if (![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(event2.key)) {
            return;
          }
          event2.preventDefault();
          event2.stopPropagation();
          if (event2.type === "keydown") {
            return;
          }
          const isRadioButton = matches2(menuItem, '[role="menuitemradio"]');
          if (!isRadioButton && [" ", "ArrowRight"].includes(event2.key)) {
            controls.showMenuPanel.call(this, type, true);
          } else {
            let target;
            if (event2.key !== " ") {
              if (event2.key === "ArrowDown" || isRadioButton && event2.key === "ArrowRight") {
                target = menuItem.nextElementSibling;
                if (!is_default.element(target)) {
                  target = menuItem.parentNode.firstElementChild;
                }
              } else {
                target = menuItem.previousElementSibling;
                if (!is_default.element(target)) {
                  target = menuItem.parentNode.lastElementChild;
                }
              }
              setFocus.call(this, target, true);
            }
          }
        },
        false
      );
      on.call(this, menuItem, "keyup", (event2) => {
        if (event2.key !== "Return") return;
        controls.focusFirstMenuItem.call(this, null, true);
      });
    },
    // Create a settings menu item
    createMenuItem({ value, list, type, title, badge = null, checked = false }) {
      const attributes = getAttributesFromSelector(this.config.selectors.inputs[type]);
      const menuItem = createElement2(
        "button",
        extend4(attributes, {
          "type": "button",
          "role": "menuitemradio",
          "class": "".concat(this.config.classNames.control, " ").concat(attributes.class ? attributes.class : "").trim(),
          "aria-checked": checked,
          value
        })
      );
      const flex = createElement2("span");
      flex.innerHTML = title;
      if (is_default.element(badge)) {
        flex.appendChild(badge);
      }
      menuItem.appendChild(flex);
      Object.defineProperty(menuItem, "checked", {
        enumerable: true,
        get() {
          return menuItem.getAttribute("aria-checked") === "true";
        },
        set(check) {
          if (check) {
            Array.from(menuItem.parentNode.children).filter((node) => matches2(node, '[role="menuitemradio"]')).forEach((node) => node.setAttribute("aria-checked", "false"));
          }
          menuItem.setAttribute("aria-checked", check ? "true" : "false");
        }
      });
      this.listeners.bind(
        menuItem,
        "click keyup",
        (event2) => {
          if (is_default.keyboardEvent(event2) && event2.key !== " ") {
            return;
          }
          event2.preventDefault();
          event2.stopPropagation();
          menuItem.checked = true;
          switch (type) {
            case "language":
              this.currentTrack = Number(value);
              break;
            case "quality":
              this.quality = value;
              break;
            case "speed":
              this.speed = Number.parseFloat(value);
              break;
            default:
              break;
          }
          controls.showMenuPanel.call(this, "home", is_default.keyboardEvent(event2));
        },
        type,
        false
      );
      controls.bindMenuItemShortcuts.call(this, menuItem, type);
      list.appendChild(menuItem);
    },
    // Format a time for display
    formatTime(time = 0, inverted = false) {
      if (!is_default.number(time)) {
        return time;
      }
      const forceHours = getHours(this.duration) > 0;
      return formatTime(time, forceHours, inverted);
    },
    // Update the displayed time
    updateTimeDisplay(target = null, time = 0, inverted = false) {
      if (!is_default.element(target) || !is_default.number(time)) {
        return;
      }
      target.textContent = controls.formatTime(time, inverted);
    },
    // Update volume UI and storage
    updateVolume() {
      if (!this.supported.ui) {
        return;
      }
      if (is_default.element(this.elements.inputs.volume)) {
        controls.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume);
      }
      if (is_default.element(this.elements.buttons.mute)) {
        this.elements.buttons.mute.pressed = this.muted || this.volume === 0;
      }
    },
    // Update seek value and lower fill
    setRange(target, value = 0) {
      if (!is_default.element(target)) {
        return;
      }
      target.value = value;
      controls.updateRangeFill.call(this, target);
    },
    // Update <progress> elements
    updateProgress(event2) {
      if (!this.supported.ui || !is_default.event(event2)) {
        return;
      }
      let value = 0;
      const setProgress = (target, input) => {
        const val = is_default.number(input) ? input : 0;
        const progress = is_default.element(target) ? target : this.elements.display.buffer;
        if (is_default.element(progress)) {
          progress.value = val;
          const label = progress.getElementsByTagName("span")[0];
          if (is_default.element(label)) {
            label.childNodes[0].nodeValue = val;
          }
        }
      };
      if (event2) {
        switch (event2.type) {
          // Video playing
          case "timeupdate":
          case "seeking":
          case "seeked":
            value = getPercentage(this.currentTime, this.duration);
            if (event2.type === "timeupdate") {
              controls.setRange.call(this, this.elements.inputs.seek, value);
            }
            break;
          // Check buffer status
          case "playing":
          case "progress":
            setProgress(this.elements.display.buffer, this.buffered * 100);
            break;
          default:
            break;
        }
      }
    },
    // Webkit polyfill for lower fill range
    updateRangeFill(target) {
      const range = is_default.event(target) ? target.target : target;
      if (!is_default.element(range) || range.getAttribute("type") !== "range") {
        return;
      }
      if (matches2(range, this.config.selectors.inputs.seek)) {
        range.setAttribute("aria-valuenow", this.currentTime);
        const currentTime = controls.formatTime(this.currentTime);
        const duration = controls.formatTime(this.duration);
        const format2 = i18n_default.get("seekLabel", this.config);
        range.setAttribute(
          "aria-valuetext",
          format2.replace("{currentTime}", currentTime).replace("{duration}", duration)
        );
      } else if (matches2(range, this.config.selectors.inputs.volume)) {
        const percent = range.value * 100;
        range.setAttribute("aria-valuenow", percent);
        range.setAttribute("aria-valuetext", "".concat(percent.toFixed(1), "%"));
      } else {
        range.setAttribute("aria-valuenow", range.value);
      }
      if (!browser_default.isWebKit && !browser_default.isIPadOS) {
        return;
      }
      range.style.setProperty("--value", "".concat(range.value / range.max * 100, "%"));
    },
    // Update hover tooltip for seeking
    updateSeekTooltip(event2) {
      var _a, _b;
      if (!this.config.tooltips.seek || !is_default.element(this.elements.inputs.seek) || !is_default.element(this.elements.display.seekTooltip) || this.duration === 0) {
        return;
      }
      const tipElement = this.elements.display.seekTooltip;
      const visible = "".concat(this.config.classNames.tooltip, "--visible");
      const toggle = (show) => toggleClass(tipElement, visible, show);
      if (this.touch) {
        toggle(false);
        return;
      }
      let percent = 0;
      const clientRect = this.elements.progress.getBoundingClientRect();
      if (is_default.event(event2)) {
        const scrollLeft = event2.pageX - event2.clientX;
        percent = 100 / clientRect.width * (event2.pageX - clientRect.left - scrollLeft);
      } else if (hasClass(tipElement, visible)) {
        percent = Number.parseFloat(tipElement.style.left, 10);
      } else {
        return;
      }
      if (percent < 0) {
        percent = 0;
      } else if (percent > 100) {
        percent = 100;
      }
      const time = this.duration / 100 * percent;
      tipElement.textContent = controls.formatTime(time);
      const point = (_b = (_a = this.config.markers) == null ? void 0 : _a.points) == null ? void 0 : _b.find(({ time: t }) => t === Math.round(time));
      if (point) {
        tipElement.insertAdjacentHTML("afterbegin", "".concat(point.label, "<br>"));
      }
      tipElement.style.left = "".concat(percent, "%");
      if (is_default.event(event2) && ["mouseenter", "mouseleave"].includes(event2.type)) {
        toggle(event2.type === "mouseenter");
      }
    },
    // Handle time change event
    timeUpdate(event2) {
      const invert = !is_default.element(this.elements.display.duration) && this.config.invertTime;
      controls.updateTimeDisplay.call(
        this,
        this.elements.display.currentTime,
        invert ? this.duration - this.currentTime : this.currentTime,
        invert
      );
      if (event2 && event2.type === "timeupdate" && this.media.seeking) {
        return;
      }
      controls.updateProgress.call(this, event2);
    },
    // Show the duration on metadataloaded or durationchange events
    durationUpdate() {
      if (!this.supported.ui || !this.config.invertTime && this.currentTime) {
        return;
      }
      if (this.duration >= __pow(2, 32)) {
        toggleHidden(this.elements.display.currentTime, true);
        toggleHidden(this.elements.progress, true);
        return;
      }
      if (is_default.element(this.elements.inputs.seek)) {
        this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
      }
      const hasDuration = is_default.element(this.elements.display.duration);
      if (!hasDuration && this.config.displayDuration && this.paused) {
        controls.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration);
      }
      if (hasDuration) {
        controls.updateTimeDisplay.call(this, this.elements.display.duration, this.duration);
      }
      if (this.config.markers.enabled) {
        controls.setMarkers.call(this);
      }
      controls.updateSeekTooltip.call(this);
    },
    // Hide/show a tab
    toggleMenuButton(setting, toggle) {
      toggleHidden(this.elements.settings.buttons[setting], !toggle);
    },
    // Update the selected setting
    updateSetting(setting, container, input) {
      const pane = this.elements.settings.panels[setting];
      let value = null;
      let list = container;
      if (setting === "captions") {
        value = this.currentTrack;
      } else {
        value = !is_default.empty(input) ? input : this[setting];
        if (is_default.empty(value)) {
          value = this.config[setting].default;
        }
        if (!is_default.empty(this.options[setting]) && !this.options[setting].includes(value)) {
          this.debug.warn("Unsupported value of '".concat(value, "' for ").concat(setting));
          return;
        }
        if (!this.config[setting].options.includes(value)) {
          this.debug.warn("Disabled value of '".concat(value, "' for ").concat(setting));
          return;
        }
      }
      if (!is_default.element(list)) {
        list = pane && pane.querySelector('[role="menu"]');
      }
      if (!is_default.element(list)) {
        return;
      }
      const label = this.elements.settings.buttons[setting].querySelector(".".concat(this.config.classNames.menu.value));
      label.innerHTML = controls.getLabel.call(this, setting, value);
      const target = list && list.querySelector('[value="'.concat(value, '"]'));
      if (is_default.element(target)) {
        target.checked = true;
      }
    },
    // Translate a value into a nice label
    getLabel(setting, value) {
      switch (setting) {
        case "speed":
          return value === 1 ? i18n_default.get("normal", this.config) : "".concat(value, "&times;");
        case "quality":
          if (is_default.number(value)) {
            const label = i18n_default.get("qualityLabel.".concat(value), this.config);
            if (!label.length) {
              return "".concat(value, "p");
            }
            return label;
          }
          return toTitleCase(value);
        case "captions":
          return captions_default.getLabel.call(this);
        default:
          return null;
      }
    },
    // Set the quality menu
    setQualityMenu(options) {
      if (!is_default.element(this.elements.settings.panels.quality)) {
        return;
      }
      const type = "quality";
      const list = this.elements.settings.panels.quality.querySelector('[role="menu"]');
      if (is_default.array(options)) {
        this.options.quality = dedupe(options).filter((quality) => this.config.quality.options.includes(quality));
      }
      const toggle = !is_default.empty(this.options.quality) && this.options.quality.length > 1;
      controls.toggleMenuButton.call(this, type, toggle);
      emptyElement(list);
      controls.checkMenu.call(this);
      if (!toggle) {
        return;
      }
      const getBadge = (quality) => {
        const label = i18n_default.get("qualityBadge.".concat(quality), this.config);
        if (!label.length) {
          return null;
        }
        return controls.createBadge.call(this, label);
      };
      this.options.quality.sort((a, b) => {
        const sorting = this.config.quality.options;
        return sorting.indexOf(a) > sorting.indexOf(b) ? 1 : -1;
      }).forEach((quality) => {
        controls.createMenuItem.call(this, {
          value: quality,
          list,
          type,
          title: controls.getLabel.call(this, "quality", quality),
          badge: getBadge(quality)
        });
      });
      controls.updateSetting.call(this, type, list);
    },
    // Set the looping options
    /* setLoopMenu() {
            // Menu required
            if (!is.element(this.elements.settings.panels.loop)) {
                return;
            }
    
            const options = ['start', 'end', 'all', 'reset'];
            const list = this.elements.settings.panels.loop.querySelector('[role="menu"]');
    
            // Show the pane and tab
            toggleHidden(this.elements.settings.buttons.loop, false);
            toggleHidden(this.elements.settings.panels.loop, false);
    
            // Toggle the pane and tab
            const toggle = !is.empty(this.loop.options);
            controls.toggleMenuButton.call(this, 'loop', toggle);
    
            // Empty the menu
            emptyElement(list);
    
            options.forEach(option => {
                const item = createElement('li');
    
                const button = createElement(
                    'button',
                    extend(getAttributesFromSelector(this.config.selectors.buttons.loop), {
                        type: 'button',
                        class: this.config.classNames.control,
                        'data-plyr-loop-action': option,
                    }),
                    i18n.get(option, this.config)
                );
    
                if (['start', 'end'].includes(option)) {
                    const badge = controls.createBadge.call(this, '00:00');
                    button.appendChild(badge);
                }
    
                item.appendChild(button);
                list.appendChild(item);
            });
        }, */
    // Get current selected caption language
    // TODO: rework this to user the getter in the API?
    // Set a list of available captions languages
    setCaptionsMenu() {
      if (!is_default.element(this.elements.settings.panels.captions)) {
        return;
      }
      const type = "captions";
      const list = this.elements.settings.panels.captions.querySelector('[role="menu"]');
      const tracks = captions_default.getTracks.call(this);
      const toggle = Boolean(tracks.length);
      controls.toggleMenuButton.call(this, type, toggle);
      emptyElement(list);
      controls.checkMenu.call(this);
      if (!toggle) {
        return;
      }
      const options = tracks.map((track, value) => ({
        value,
        checked: this.captions.toggled && this.currentTrack === value,
        title: captions_default.getLabel.call(this, track),
        badge: track.language && controls.createBadge.call(this, track.language.toUpperCase()),
        list,
        type: "language"
      }));
      options.unshift({
        value: -1,
        checked: !this.captions.toggled,
        title: i18n_default.get("disabled", this.config),
        list,
        type: "language"
      });
      options.forEach(controls.createMenuItem.bind(this));
      controls.updateSetting.call(this, type, list);
    },
    // Set a list of available captions languages
    setSpeedMenu() {
      if (!is_default.element(this.elements.settings.panels.speed)) {
        return;
      }
      const type = "speed";
      const list = this.elements.settings.panels.speed.querySelector('[role="menu"]');
      this.options.speed = this.options.speed.filter((o) => o >= this.minimumSpeed && o <= this.maximumSpeed);
      const toggle = !is_default.empty(this.options.speed) && this.options.speed.length > 1;
      controls.toggleMenuButton.call(this, type, toggle);
      emptyElement(list);
      controls.checkMenu.call(this);
      if (!toggle) {
        return;
      }
      this.options.speed.forEach((speed) => {
        controls.createMenuItem.call(this, {
          value: speed,
          list,
          type,
          title: controls.getLabel.call(this, "speed", speed)
        });
      });
      controls.updateSetting.call(this, type, list);
    },
    // Check if we need to hide/show the settings menu
    checkMenu() {
      const { buttons } = this.elements.settings;
      const visible = !is_default.empty(buttons) && Object.values(buttons).some((button) => !button.hidden);
      toggleHidden(this.elements.settings.menu, !visible);
    },
    // Focus the first menu item in a given (or visible) menu
    focusFirstMenuItem(pane, focusVisible = false) {
      if (this.elements.settings.popup.hidden) {
        return;
      }
      let target = pane;
      if (!is_default.element(target)) {
        target = Object.values(this.elements.settings.panels).find((p) => !p.hidden);
      }
      const firstItem = target.querySelector('[role^="menuitem"]');
      setFocus.call(this, firstItem, focusVisible);
    },
    // Show/hide menu
    toggleMenu(input) {
      const { popup } = this.elements.settings;
      const button = this.elements.buttons.settings;
      if (!is_default.element(popup) || !is_default.element(button)) {
        return;
      }
      const { hidden } = popup;
      let show = hidden;
      if (is_default.boolean(input)) {
        show = input;
      } else if (is_default.keyboardEvent(input) && input.key === "Escape") {
        show = false;
      } else if (is_default.event(input)) {
        const target = is_default.function(input.composedPath) ? input.composedPath()[0] : input.target;
        const isMenuItem = popup.contains(target);
        if (isMenuItem || !isMenuItem && input.target !== button && show) {
          return;
        }
      }
      button.setAttribute("aria-expanded", show);
      toggleHidden(popup, !show);
      toggleClass(this.elements.container, this.config.classNames.menu.open, show);
      if (show && is_default.keyboardEvent(input)) {
        controls.focusFirstMenuItem.call(this, null, true);
      } else if (!show && !hidden) {
        setFocus.call(this, button, is_default.keyboardEvent(input));
      }
    },
    // Get the natural size of a menu panel
    getMenuSize(tab) {
      const clone = tab.cloneNode(true);
      clone.style.position = "absolute";
      clone.style.opacity = 0;
      clone.removeAttribute("hidden");
      tab.parentNode.appendChild(clone);
      const width = clone.scrollWidth;
      const height = clone.scrollHeight;
      removeElement2(clone);
      return {
        width,
        height
      };
    },
    // Show a panel in the menu
    showMenuPanel(type = "", focusVisible = false) {
      const target = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(type));
      if (!is_default.element(target)) {
        return;
      }
      const container = target.parentNode;
      const current = Array.from(container.children).find((node) => !node.hidden);
      if (support_default.transitions && !support_default.reducedMotion) {
        container.style.width = "".concat(current.scrollWidth, "px");
        container.style.height = "".concat(current.scrollHeight, "px");
        const size = controls.getMenuSize.call(this, target);
        const restore = (event2) => {
          if (event2.target !== container || !["width", "height"].includes(event2.propertyName)) {
            return;
          }
          container.style.width = "";
          container.style.height = "";
          off.call(this, container, transitionEndEvent, restore);
        };
        on.call(this, container, transitionEndEvent, restore);
        container.style.width = "".concat(size.width, "px");
        container.style.height = "".concat(size.height, "px");
      }
      toggleHidden(current, true);
      toggleHidden(target, false);
      controls.focusFirstMenuItem.call(this, target, focusVisible);
    },
    // Set the download URL
    setDownloadUrl() {
      const button = this.elements.buttons.download;
      if (!is_default.element(button)) {
        return;
      }
      button.setAttribute("href", this.download);
    },
    // Build the default HTML
    create(data) {
      const {
        bindMenuItemShortcuts,
        createButton,
        createProgress,
        createRange,
        createTime,
        setQualityMenu,
        setSpeedMenu,
        showMenuPanel
      } = controls;
      this.elements.controls = null;
      if (is_default.array(this.config.controls) && this.config.controls.includes("play-large")) {
        this.elements.container.appendChild(createButton.call(this, "play-large"));
      }
      const container = createElement2("div", getAttributesFromSelector(this.config.selectors.controls.wrapper));
      this.elements.controls = container;
      const defaultAttributes = { class: "plyr__controls__item" };
      dedupe(is_default.array(this.config.controls) ? this.config.controls : []).forEach((control) => {
        if (control === "restart") {
          container.appendChild(createButton.call(this, "restart", defaultAttributes));
        }
        if (control === "rewind") {
          container.appendChild(createButton.call(this, "rewind", defaultAttributes));
        }
        if (control === "play") {
          container.appendChild(createButton.call(this, "play", defaultAttributes));
        }
        if (control === "fast-forward") {
          container.appendChild(createButton.call(this, "fast-forward", defaultAttributes));
        }
        if (control === "progress") {
          const progressContainer = createElement2("div", {
            class: "".concat(defaultAttributes.class, " plyr__progress__container")
          });
          const progress = createElement2("div", getAttributesFromSelector(this.config.selectors.progress));
          progress.appendChild(
            createRange.call(this, "seek", {
              id: "plyr-seek-".concat(data.id)
            })
          );
          progress.appendChild(createProgress.call(this, "buffer"));
          if (this.config.tooltips.seek) {
            const tooltip = createElement2(
              "span",
              {
                class: this.config.classNames.tooltip
              },
              "00:00"
            );
            progress.appendChild(tooltip);
            this.elements.display.seekTooltip = tooltip;
          }
          this.elements.progress = progress;
          progressContainer.appendChild(this.elements.progress);
          container.appendChild(progressContainer);
        }
        if (control === "current-time") {
          container.appendChild(createTime.call(this, "currentTime", defaultAttributes));
        }
        if (control === "duration") {
          container.appendChild(createTime.call(this, "duration", defaultAttributes));
        }
        if (control === "mute" || control === "volume") {
          let { volume } = this.elements;
          if (!is_default.element(volume) || !container.contains(volume)) {
            volume = createElement2(
              "div",
              extend4({}, defaultAttributes, {
                class: "".concat(defaultAttributes.class, " plyr__volume").trim()
              })
            );
            this.elements.volume = volume;
            container.appendChild(volume);
          }
          if (control === "mute") {
            volume.appendChild(createButton.call(this, "mute"));
          }
          if (control === "volume" && !browser_default.isIos && !browser_default.isIPadOS) {
            const attributes = {
              max: 1,
              step: 0.05,
              value: this.config.volume
            };
            volume.appendChild(
              createRange.call(
                this,
                "volume",
                extend4(attributes, {
                  id: "plyr-volume-".concat(data.id)
                })
              )
            );
          }
        }
        if (control === "captions") {
          container.appendChild(createButton.call(this, "captions", defaultAttributes));
        }
        if (control === "settings" && !is_default.empty(this.config.settings)) {
          const wrapper = createElement2(
            "div",
            extend4({}, defaultAttributes, {
              class: "".concat(defaultAttributes.class, " plyr__menu").trim(),
              hidden: ""
            })
          );
          wrapper.appendChild(
            createButton.call(this, "settings", {
              "aria-haspopup": true,
              "aria-controls": "plyr-settings-".concat(data.id),
              "aria-expanded": false
            })
          );
          const popup = createElement2("div", {
            class: "plyr__menu__container",
            id: "plyr-settings-".concat(data.id),
            hidden: ""
          });
          const inner = createElement2("div");
          const home = createElement2("div", {
            id: "plyr-settings-".concat(data.id, "-home")
          });
          const menu = createElement2("div", {
            role: "menu"
          });
          home.appendChild(menu);
          inner.appendChild(home);
          this.elements.settings.panels.home = home;
          this.config.settings.forEach((type) => {
            const menuItem = createElement2(
              "button",
              extend4(getAttributesFromSelector(this.config.selectors.buttons.settings), {
                "type": "button",
                "class": "".concat(this.config.classNames.control, " ").concat(this.config.classNames.control, "--forward"),
                "role": "menuitem",
                "aria-haspopup": true,
                "hidden": ""
              })
            );
            bindMenuItemShortcuts.call(this, menuItem, type);
            on.call(this, menuItem, "click", () => {
              showMenuPanel.call(this, type, false);
            });
            const flex = createElement2("span", null, i18n_default.get(type, this.config));
            const value = createElement2("span", {
              class: this.config.classNames.menu.value
            });
            value.innerHTML = data[type];
            flex.appendChild(value);
            menuItem.appendChild(flex);
            menu.appendChild(menuItem);
            const pane = createElement2("div", {
              id: "plyr-settings-".concat(data.id, "-").concat(type),
              hidden: ""
            });
            const backButton = createElement2("button", {
              type: "button",
              class: "".concat(this.config.classNames.control, " ").concat(this.config.classNames.control, "--back")
            });
            backButton.appendChild(
              createElement2(
                "span",
                {
                  "aria-hidden": true
                },
                i18n_default.get(type, this.config)
              )
            );
            backButton.appendChild(
              createElement2(
                "span",
                {
                  class: this.config.classNames.hidden
                },
                i18n_default.get("menuBack", this.config)
              )
            );
            on.call(
              this,
              pane,
              "keydown",
              (event2) => {
                if (event2.key !== "ArrowLeft") return;
                event2.preventDefault();
                event2.stopPropagation();
                showMenuPanel.call(this, "home", true);
              },
              false
            );
            on.call(this, backButton, "click", () => {
              showMenuPanel.call(this, "home", false);
            });
            pane.appendChild(backButton);
            pane.appendChild(
              createElement2("div", {
                role: "menu"
              })
            );
            inner.appendChild(pane);
            this.elements.settings.buttons[type] = menuItem;
            this.elements.settings.panels[type] = pane;
          });
          popup.appendChild(inner);
          wrapper.appendChild(popup);
          container.appendChild(wrapper);
          this.elements.settings.popup = popup;
          this.elements.settings.menu = wrapper;
        }
        if (control === "pip" && support_default.pip) {
          container.appendChild(createButton.call(this, "pip", defaultAttributes));
        }
        if (control === "airplay" && support_default.airplay) {
          container.appendChild(createButton.call(this, "airplay", defaultAttributes));
        }
        if (control === "download") {
          const attributes = extend4({}, defaultAttributes, {
            element: "a",
            href: this.download,
            target: "_blank"
          });
          if (this.isHTML5) {
            attributes.download = "";
          }
          const { download } = this.config.urls;
          if (!is_default.url(download) && this.isEmbed) {
            extend4(attributes, {
              icon: "logo-".concat(this.provider),
              label: this.provider
            });
          }
          container.appendChild(createButton.call(this, "download", attributes));
        }
        if (control === "fullscreen") {
          container.appendChild(createButton.call(this, "fullscreen", defaultAttributes));
        }
      });
      if (this.isHTML5) {
        setQualityMenu.call(this, html5_default.getQualityOptions.call(this));
      }
      setSpeedMenu.call(this);
      return container;
    },
    // Insert controls
    inject() {
      if (this.config.loadSprite) {
        const icon = controls.getIconUrl.call(this);
        if (icon.cors) {
          loadSprite(icon.url, "sprite-plyr");
        }
      }
      this.id = Math.floor(Math.random() * 1e4);
      let container = null;
      this.elements.controls = null;
      const props = {
        id: this.id,
        seektime: this.config.seekTime,
        title: this.config.title
      };
      let update2 = true;
      if (is_default.function(this.config.controls)) {
        this.config.controls = this.config.controls.call(this, props);
      }
      if (!this.config.controls) {
        this.config.controls = [];
      }
      if (is_default.element(this.config.controls) || is_default.string(this.config.controls)) {
        container = this.config.controls;
      } else {
        container = controls.create.call(this, {
          id: this.id,
          seektime: this.config.seekTime,
          speed: this.speed,
          quality: this.quality,
          captions: captions_default.getLabel.call(this)
          // TODO: Looping
          // loop: 'None',
        });
        update2 = false;
      }
      const replace = (input) => {
        let result = input;
        Object.entries(props).forEach(([key, value]) => {
          result = replaceAll(result, "{".concat(key, "}"), value);
        });
        return result;
      };
      if (update2) {
        if (is_default.string(this.config.controls)) {
          container = replace(container);
        }
      }
      let target;
      if (is_default.string(this.config.selectors.controls.container)) {
        target = document.querySelector(this.config.selectors.controls.container);
      }
      if (!is_default.element(target)) {
        target = this.elements.container;
      }
      const insertMethod = is_default.element(container) ? "insertAdjacentElement" : "insertAdjacentHTML";
      target[insertMethod]("afterbegin", container);
      if (!is_default.element(this.elements.controls)) {
        controls.findElements.call(this);
      }
      if (!is_default.empty(this.elements.buttons)) {
        const addProperty = (button) => {
          const className = this.config.classNames.controlPressed;
          button.setAttribute("aria-pressed", "false");
          Object.defineProperty(button, "pressed", {
            configurable: true,
            enumerable: true,
            get() {
              return hasClass(button, className);
            },
            set(pressed = false) {
              toggleClass(button, className, pressed);
              button.setAttribute("aria-pressed", pressed ? "true" : "false");
            }
          });
        };
        Object.values(this.elements.buttons).filter(Boolean).forEach((button) => {
          if (is_default.array(button) || is_default.nodeList(button)) {
            Array.from(button).filter(Boolean).forEach(addProperty);
          } else {
            addProperty(button);
          }
        });
      }
      if (browser_default.isEdge) {
        repaint(target);
      }
      if (this.config.tooltips.controls) {
        const { classNames, selectors } = this.config;
        const selector = "".concat(selectors.controls.wrapper, " ").concat(selectors.labels, " .").concat(classNames.hidden);
        const labels = getElements.call(this, selector);
        Array.from(labels).forEach((label) => {
          toggleClass(label, this.config.classNames.hidden, false);
          toggleClass(label, this.config.classNames.tooltip, true);
        });
      }
    },
    // Set media metadata
    setMediaMetadata() {
      try {
        if ("mediaSession" in navigator) {
          navigator.mediaSession.metadata = new window.MediaMetadata({
            title: this.config.mediaMetadata.title,
            artist: this.config.mediaMetadata.artist,
            album: this.config.mediaMetadata.album,
            artwork: this.config.mediaMetadata.artwork
          });
        }
      } catch (e) {
      }
    },
    // Add markers
    setMarkers() {
      var _a, _b;
      if (!this.duration || this.elements.markers) return;
      const points = (_b = (_a = this.config.markers) == null ? void 0 : _a.points) == null ? void 0 : _b.filter(({ time }) => time > 0 && time < this.duration);
      if (!(points == null ? void 0 : points.length)) return;
      const containerFragment = document.createDocumentFragment();
      const pointsFragment = document.createDocumentFragment();
      let tipElement = null;
      const tipVisible = "".concat(this.config.classNames.tooltip, "--visible");
      const toggleTip = (show) => toggleClass(tipElement, tipVisible, show);
      points.forEach((point) => {
        const markerElement = createElement2(
          "span",
          {
            class: this.config.classNames.marker
          },
          ""
        );
        const left = "".concat(point.time / this.duration * 100, "%");
        if (tipElement) {
          markerElement.addEventListener("mouseenter", () => {
            if (point.label) return;
            tipElement.style.left = left;
            tipElement.innerHTML = point.label;
            toggleTip(true);
          });
          markerElement.addEventListener("mouseleave", () => {
            toggleTip(false);
          });
        }
        markerElement.addEventListener("click", () => {
          this.currentTime = point.time;
        });
        markerElement.style.left = left;
        pointsFragment.appendChild(markerElement);
      });
      containerFragment.appendChild(pointsFragment);
      if (!this.config.tooltips.seek) {
        tipElement = createElement2(
          "span",
          {
            class: this.config.classNames.tooltip
          },
          ""
        );
        containerFragment.appendChild(tipElement);
      }
      this.elements.markers = {
        points: pointsFragment,
        tip: tipElement
      };
      this.elements.progress.appendChild(containerFragment);
    }
  };
  var controls_default = controls;

  // node_modules/plyr/src/js/utils/urls.js
  function parseUrl(input, safe = true) {
    let url = input;
    if (safe) {
      const parser = document.createElement("a");
      parser.href = url;
      url = parser.href;
    }
    try {
      return new URL(url);
    } catch (e) {
      return null;
    }
  }
  function buildUrlParams(input) {
    const params = new URLSearchParams();
    if (is_default.object(input)) {
      Object.entries(input).forEach(([key, value]) => {
        params.set(key, value);
      });
    }
    return params;
  }

  // node_modules/plyr/src/js/captions.js
  var captions = {
    // Setup captions
    setup() {
      if (!this.supported.ui) {
        return;
      }
      if (!this.isVideo || this.isYouTube || this.isHTML5 && !support_default.textTracks) {
        if (is_default.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions")) {
          controls_default.setCaptionsMenu.call(this);
        }
        return;
      }
      if (!is_default.element(this.elements.captions)) {
        this.elements.captions = createElement2("div", getAttributesFromSelector(this.config.selectors.captions));
        this.elements.captions.setAttribute("dir", "auto");
        insertAfter(this.elements.captions, this.elements.wrapper);
      }
      if (browser_default.isIE && window.URL) {
        const elements = this.media.querySelectorAll("track");
        Array.from(elements).forEach((track) => {
          const src = track.getAttribute("src");
          const url = parseUrl(src);
          if (url !== null && url.hostname !== window.location.href.hostname && ["http:", "https:"].includes(url.protocol)) {
            fetch(src, "blob").then((blob) => {
              track.setAttribute("src", window.URL.createObjectURL(blob));
            }).catch(() => {
              removeElement2(track);
            });
          }
        });
      }
      const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage || "en"];
      const languages = dedupe(browserLanguages.map((language2) => language2.split("-")[0]));
      let language = (this.storage.get("language") || this.captions.language || this.config.captions.language || "auto").toLowerCase();
      if (language === "auto") {
        [language] = languages;
      }
      let active = this.storage.get("captions") || this.captions.active;
      if (!is_default.boolean(active)) {
        ({ active } = this.config.captions);
      }
      Object.assign(this.captions, {
        toggled: false,
        active,
        language,
        languages
      });
      if (this.isHTML5) {
        const trackEvents = this.config.captions.update ? "addtrack removetrack" : "removetrack";
        on.call(this, this.media.textTracks, trackEvents, captions.update.bind(this));
      }
      setTimeout(captions.update.bind(this), 0);
    },
    // Update available language options in settings based on tracks
    update() {
      const tracks = captions.getTracks.call(this, true);
      const { active, language, meta, currentTrackNode } = this.captions;
      const languageExists = Boolean(tracks.find((track) => track.language === language));
      if (this.isHTML5 && this.isVideo) {
        tracks.filter((track) => !meta.get(track)).forEach((track) => {
          this.debug.log("Track added", track);
          meta.set(track, {
            default: track.mode === "showing"
          });
          if (track.mode === "showing") {
            track.mode = "hidden";
          }
          on.call(this, track, "cuechange", () => captions.updateCues.call(this));
        });
      }
      if (languageExists && this.language !== language || !tracks.includes(currentTrackNode)) {
        captions.setLanguage.call(this, language);
        captions.toggle.call(this, active && languageExists);
      }
      if (this.elements) {
        toggleClass(this.elements.container, this.config.classNames.captions.enabled, !is_default.empty(tracks));
      }
      if (is_default.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions")) {
        controls_default.setCaptionsMenu.call(this);
      }
    },
    // Toggle captions display
    // Used internally for the toggleCaptions method, with the passive option forced to false
    toggle(input, passive = true) {
      if (!this.supported.ui) {
        return;
      }
      const { toggled } = this.captions;
      const activeClass = this.config.classNames.captions.active;
      const active = is_default.nullOrUndefined(input) ? !toggled : input;
      if (active !== toggled) {
        if (!passive) {
          this.captions.active = active;
          this.storage.set({ captions: active });
        }
        if (!this.language && active && !passive) {
          const tracks = captions.getTracks.call(this);
          const track = captions.findTrack.call(this, [this.captions.language, ...this.captions.languages], true);
          this.captions.language = track.language;
          captions.set.call(this, tracks.indexOf(track));
          return;
        }
        if (this.elements.buttons.captions) {
          this.elements.buttons.captions.pressed = active;
        }
        toggleClass(this.elements.container, activeClass, active);
        this.captions.toggled = active;
        controls_default.updateSetting.call(this, "captions");
        triggerEvent2.call(this, this.media, active ? "captionsenabled" : "captionsdisabled");
      }
      setTimeout(() => {
        if (active && this.captions.toggled) {
          this.captions.currentTrackNode.mode = "hidden";
        }
      });
    },
    // Set captions by track index
    // Used internally for the currentTrack setter with the passive option forced to false
    set(index, passive = true) {
      const tracks = captions.getTracks.call(this);
      if (index === -1) {
        captions.toggle.call(this, false, passive);
        return;
      }
      if (!is_default.number(index)) {
        this.debug.warn("Invalid caption argument", index);
        return;
      }
      if (!(index in tracks)) {
        this.debug.warn("Track not found", index);
        return;
      }
      if (this.captions.currentTrack !== index) {
        this.captions.currentTrack = index;
        const track = tracks[index];
        const { language } = track || {};
        this.captions.currentTrackNode = track;
        controls_default.updateSetting.call(this, "captions");
        if (!passive) {
          this.captions.language = language;
          this.storage.set({ language });
        }
        if (this.isVimeo) {
          this.embed.enableTextTrack(language);
        }
        triggerEvent2.call(this, this.media, "languagechange");
      }
      captions.toggle.call(this, true, passive);
      if (this.isHTML5 && this.isVideo) {
        captions.updateCues.call(this);
      }
    },
    // Set captions by language
    // Used internally for the language setter with the passive option forced to false
    setLanguage(input, passive = true) {
      if (!is_default.string(input)) {
        this.debug.warn("Invalid language argument", input);
        return;
      }
      const language = input.toLowerCase();
      this.captions.language = language;
      const tracks = captions.getTracks.call(this);
      const track = captions.findTrack.call(this, [language]);
      captions.set.call(this, tracks.indexOf(track), passive);
    },
    // Get current valid caption tracks
    // If update is false it will also ignore tracks without metadata
    // This is used to "freeze" the language options when captions.update is false
    getTracks(update2 = false) {
      const tracks = Array.from((this.media || {}).textTracks || []);
      return tracks.filter((track) => !this.isHTML5 || update2 || this.captions.meta.has(track)).filter((track) => ["captions", "subtitles"].includes(track.kind));
    },
    // Match tracks based on languages and get the first
    findTrack(languages, force = false) {
      const tracks = captions.getTracks.call(this);
      const sortIsDefault = (track2) => Number((this.captions.meta.get(track2) || {}).default);
      const sorted = Array.from(tracks).sort((a, b) => sortIsDefault(b) - sortIsDefault(a));
      let track;
      languages.every((language) => {
        track = sorted.find((t) => t.language === language);
        return !track;
      });
      return track || (force ? sorted[0] : void 0);
    },
    // Get the current track
    getCurrentTrack() {
      return captions.getTracks.call(this)[this.currentTrack];
    },
    // Get UI label for track
    getLabel(track) {
      let currentTrack = track;
      if (!is_default.track(currentTrack) && support_default.textTracks && this.captions.toggled) {
        currentTrack = captions.getCurrentTrack.call(this);
      }
      if (is_default.track(currentTrack)) {
        if (!is_default.empty(currentTrack.label)) {
          return currentTrack.label;
        }
        if (!is_default.empty(currentTrack.language)) {
          return track.language.toUpperCase();
        }
        return i18n_default.get("enabled", this.config);
      }
      return i18n_default.get("disabled", this.config);
    },
    // Update captions using current track's active cues
    // Also optional array argument in case there isn't any track (ex: vimeo)
    updateCues(input) {
      if (!this.supported.ui) {
        return;
      }
      if (!is_default.element(this.elements.captions)) {
        this.debug.warn("No captions element to render to");
        return;
      }
      if (!is_default.nullOrUndefined(input) && !Array.isArray(input)) {
        this.debug.warn("updateCues: Invalid input", input);
        return;
      }
      let cues = input;
      if (!cues) {
        const track = captions.getCurrentTrack.call(this);
        cues = Array.from((track || {}).activeCues || []).map((cue) => cue.getCueAsHTML()).map(getHTML);
      }
      const content = cues.map((cueText) => cueText.trim()).join("\n");
      const changed = content !== this.elements.captions.innerHTML;
      if (changed) {
        emptyElement(this.elements.captions);
        const caption = createElement2("span", getAttributesFromSelector(this.config.selectors.caption));
        caption.innerHTML = content;
        this.elements.captions.appendChild(caption);
        triggerEvent2.call(this, this.media, "cuechange");
      }
    }
  };
  var captions_default = captions;

  // node_modules/plyr/src/js/config/defaults.js
  var defaults2 = {
    // Disable
    enabled: true,
    // Custom media title
    title: "",
    // Logging to console
    debug: false,
    // Auto play (if supported)
    autoplay: false,
    // Only allow one media playing at once (vimeo only)
    autopause: true,
    // Allow inline playback on iOS
    playsinline: true,
    // Default time to skip when rewind/fast forward
    seekTime: 10,
    // Default volume
    volume: 1,
    muted: false,
    // Pass a custom duration
    duration: null,
    // Display the media duration on load in the current time position
    // If you have opted to display both duration and currentTime, this is ignored
    displayDuration: true,
    // Invert the current time to be a countdown
    invertTime: true,
    // Clicking the currentTime inverts it's value to show time left rather than elapsed
    toggleInvert: true,
    // Force an aspect ratio
    // The format must be `'w:h'` (e.g. `'16:9'`)
    ratio: null,
    // Click video container to play/pause
    clickToPlay: true,
    // Auto hide the controls
    hideControls: true,
    // Reset to start when playback ended
    resetOnEnd: false,
    // Disable the standard context menu
    disableContextMenu: true,
    // Sprite (for icons)
    loadSprite: true,
    iconPrefix: "plyr",
    iconUrl: "https://cdn.plyr.io/3.8.3/plyr.svg",
    // Blank video (used to prevent errors on source change)
    blankVideo: "https://cdn.plyr.io/static/blank.mp4",
    // Quality default
    quality: {
      default: 576,
      // The options to display in the UI, if available for the source media
      options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
      forced: false,
      onChange: null
    },
    // Set loops
    loop: {
      active: false
      // start: null,
      // end: null,
    },
    // Speed default and options to display
    speed: {
      selected: 1,
      // The options to display in the UI, if available for the source media (e.g. Vimeo and YouTube only support 0.5x-4x)
      options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4]
    },
    // Keyboard shortcut settings
    keyboard: {
      focused: true,
      global: false
    },
    // Display tooltips
    tooltips: {
      controls: false,
      seek: true
    },
    // Captions settings
    captions: {
      active: false,
      language: "auto",
      // Listen to new tracks added after Plyr is initialized.
      // This is needed for streaming captions, but may result in unselectable options
      update: false
    },
    // Fullscreen settings
    fullscreen: {
      enabled: true,
      // Allow fullscreen?
      fallback: true,
      // Fallback using full viewport/window
      iosNative: false
      // Use the native fullscreen in iOS (disables custom controls)
      // Selector for the fullscreen container so contextual / non-player content can remain visible in fullscreen mode
      // Non-ancestors of the player element will be ignored
      // container: null, // defaults to the player element
    },
    // Local storage
    storage: {
      enabled: true,
      key: "plyr"
    },
    // Default controls
    controls: [
      "play-large",
      // 'restart',
      // 'rewind',
      "play",
      // 'fast-forward',
      "progress",
      "current-time",
      // 'duration',
      "mute",
      "volume",
      "captions",
      "settings",
      "pip",
      "airplay",
      // 'download',
      "fullscreen"
    ],
    settings: ["captions", "quality", "speed"],
    // Localisation
    i18n: {
      restart: "Restart",
      rewind: "Rewind {seektime}s",
      play: "Play",
      pause: "Pause",
      fastForward: "Forward {seektime}s",
      seek: "Seek",
      seekLabel: "{currentTime} of {duration}",
      played: "Played",
      buffered: "Buffered",
      currentTime: "Current time",
      duration: "Duration",
      volume: "Volume",
      mute: "Mute",
      unmute: "Unmute",
      enableCaptions: "Enable captions",
      disableCaptions: "Disable captions",
      download: "Download",
      enterFullscreen: "Enter fullscreen",
      exitFullscreen: "Exit fullscreen",
      frameTitle: "Player for {title}",
      captions: "Captions",
      settings: "Settings",
      pip: "PIP",
      menuBack: "Go back to previous menu",
      speed: "Speed",
      normal: "Normal",
      quality: "Quality",
      loop: "Loop",
      start: "Start",
      end: "End",
      all: "All",
      reset: "Reset",
      disabled: "Disabled",
      enabled: "Enabled",
      advertisement: "Ad",
      qualityBadge: {
        2160: "4K",
        1440: "HD",
        1080: "HD",
        720: "HD",
        576: "SD",
        480: "SD"
      }
    },
    // URLs
    urls: {
      download: null,
      vimeo: {
        sdk: "https://player.vimeo.com/api/player.js",
        iframe: "https://player.vimeo.com/video/{0}?{1}",
        api: "https://vimeo.com/api/oembed.json?url={0}"
      },
      youtube: {
        sdk: "https://www.youtube.com/iframe_api",
        api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
      },
      googleIMA: {
        sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
      }
    },
    // Custom control listeners
    listeners: {
      seek: null,
      play: null,
      pause: null,
      restart: null,
      rewind: null,
      fastForward: null,
      mute: null,
      volume: null,
      captions: null,
      download: null,
      fullscreen: null,
      pip: null,
      airplay: null,
      speed: null,
      quality: null,
      loop: null,
      language: null
    },
    // Events to watch and bubble
    events: [
      // Events to watch on HTML5 media elements and bubble
      // https://developer.mozilla.org/en/docs/Web/Guide/Events/Media_events
      "ended",
      "progress",
      "stalled",
      "playing",
      "waiting",
      "canplay",
      "canplaythrough",
      "loadstart",
      "loadeddata",
      "loadedmetadata",
      "timeupdate",
      "volumechange",
      "play",
      "pause",
      "error",
      "seeking",
      "seeked",
      "emptied",
      "ratechange",
      "cuechange",
      // Custom events
      "download",
      "enterfullscreen",
      "exitfullscreen",
      "captionsenabled",
      "captionsdisabled",
      "languagechange",
      "controlshidden",
      "controlsshown",
      "ready",
      // YouTube
      "statechange",
      // Quality
      "qualitychange",
      // Ads
      "adsloaded",
      "adscontentpause",
      "adscontentresume",
      "adstarted",
      "adsmidpoint",
      "adscomplete",
      "adsallcomplete",
      "adsimpression",
      "adsclick"
    ],
    // Selectors
    // Change these to match your template if using custom HTML
    selectors: {
      editable: "input, textarea, select, [contenteditable]",
      container: ".plyr",
      controls: {
        container: null,
        wrapper: ".plyr__controls"
      },
      labels: "[data-plyr]",
      buttons: {
        play: '[data-plyr="play"]',
        pause: '[data-plyr="pause"]',
        restart: '[data-plyr="restart"]',
        rewind: '[data-plyr="rewind"]',
        fastForward: '[data-plyr="fast-forward"]',
        mute: '[data-plyr="mute"]',
        captions: '[data-plyr="captions"]',
        download: '[data-plyr="download"]',
        fullscreen: '[data-plyr="fullscreen"]',
        pip: '[data-plyr="pip"]',
        airplay: '[data-plyr="airplay"]',
        settings: '[data-plyr="settings"]',
        loop: '[data-plyr="loop"]'
      },
      inputs: {
        seek: '[data-plyr="seek"]',
        volume: '[data-plyr="volume"]',
        speed: '[data-plyr="speed"]',
        language: '[data-plyr="language"]',
        quality: '[data-plyr="quality"]'
      },
      display: {
        currentTime: ".plyr__time--current",
        duration: ".plyr__time--duration",
        buffer: ".plyr__progress__buffer",
        loop: ".plyr__progress__loop",
        // Used later
        volume: ".plyr__volume--display"
      },
      progress: ".plyr__progress",
      captions: ".plyr__captions",
      caption: ".plyr__caption"
    },
    // Class hooks added to the player in different states
    classNames: {
      type: "plyr--{0}",
      provider: "plyr--{0}",
      video: "plyr__video-wrapper",
      embed: "plyr__video-embed",
      videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
      embedContainer: "plyr__video-embed__container",
      poster: "plyr__poster",
      posterEnabled: "plyr__poster-enabled",
      ads: "plyr__ads",
      control: "plyr__control",
      controlPressed: "plyr__control--pressed",
      playing: "plyr--playing",
      paused: "plyr--paused",
      stopped: "plyr--stopped",
      loading: "plyr--loading",
      hover: "plyr--hover",
      tooltip: "plyr__tooltip",
      cues: "plyr__cues",
      marker: "plyr__progress__marker",
      hidden: "plyr__sr-only",
      hideControls: "plyr--hide-controls",
      isTouch: "plyr--is-touch",
      uiSupported: "plyr--full-ui",
      noTransition: "plyr--no-transition",
      display: {
        time: "plyr__time"
      },
      menu: {
        value: "plyr__menu__value",
        badge: "plyr__badge",
        open: "plyr--menu-open"
      },
      captions: {
        enabled: "plyr--captions-enabled",
        active: "plyr--captions-active"
      },
      fullscreen: {
        enabled: "plyr--fullscreen-enabled",
        fallback: "plyr--fullscreen-fallback"
      },
      pip: {
        supported: "plyr--pip-supported",
        active: "plyr--pip-active"
      },
      airplay: {
        supported: "plyr--airplay-supported",
        active: "plyr--airplay-active"
      },
      previewThumbnails: {
        // Tooltip thumbs
        thumbContainer: "plyr__preview-thumb",
        thumbContainerShown: "plyr__preview-thumb--is-shown",
        imageContainer: "plyr__preview-thumb__image-container",
        timeContainer: "plyr__preview-thumb__time-container",
        // Scrubbing
        scrubbingContainer: "plyr__preview-scrubbing",
        scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
      }
    },
    // Embed attributes
    attributes: {
      embed: {
        provider: "data-plyr-provider",
        id: "data-plyr-embed-id",
        hash: "data-plyr-embed-hash"
      }
    },
    // Advertisements plugin
    // Register for an account here: http://vi.ai/publisher-video-monetization/?aid=plyrio
    ads: {
      enabled: false,
      publisherId: "",
      tagUrl: ""
    },
    // Preview Thumbnails plugin
    previewThumbnails: {
      enabled: false,
      src: "",
      withCredentials: false
    },
    // Vimeo plugin
    vimeo: {
      byline: false,
      portrait: false,
      title: false,
      speed: true,
      transparent: false,
      // Custom settings from Plyr
      customControls: true,
      referrerPolicy: null,
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy
      // Whether the owner of the video has a Pro or Business account
      // (which allows us to properly hide controls without CSS hacks, etc)
      premium: false
    },
    // YouTube plugin
    youtube: {
      rel: 0,
      // No related vids
      showinfo: 0,
      // Hide info
      iv_load_policy: 3,
      // Hide annotations
      modestbranding: 1,
      // Hide logos as much as possible (they still show one in the corner when paused)
      // Custom settings from Plyr
      customControls: true,
      noCookie: false
      // Whether to use an alternative version of YouTube without cookies
    },
    // Media Metadata
    mediaMetadata: {
      title: "",
      artist: "",
      album: "",
      artwork: []
    },
    // Markers
    markers: {
      enabled: false,
      points: []
    }
  };
  var defaults_default = defaults2;

  // node_modules/plyr/src/js/config/states.js
  var pip = {
    active: "picture-in-picture",
    inactive: "inline"
  };

  // node_modules/plyr/src/js/config/types.js
  var providers = {
    html5: "html5",
    youtube: "youtube",
    vimeo: "vimeo"
  };
  var types = {
    audio: "audio",
    video: "video"
  };
  function getProviderByUrl(url) {
    if (/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(url)) {
      return providers.youtube;
    }
    if (/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(url)) {
      return providers.vimeo;
    }
    return null;
  }

  // node_modules/plyr/src/js/console.js
  function noop() {
  }
  var Console = class {
    constructor(enabled = false) {
      this.enabled = window.console && enabled;
      if (this.enabled) {
        this.log("Debugging enabled");
      }
    }
    get log() {
      return this.enabled ? Function.prototype.bind.call(console.log, console) : noop;
    }
    get warn() {
      return this.enabled ? Function.prototype.bind.call(console.warn, console) : noop;
    }
    get error() {
      return this.enabled ? Function.prototype.bind.call(console.error, console) : noop;
    }
  };

  // node_modules/plyr/src/js/fullscreen.js
  var Fullscreen = class _Fullscreen {
    constructor(player) {
      __publicField(this, "onChange", () => {
        if (!this.supported) return;
        const button = this.player.elements.buttons.fullscreen;
        if (is_default.element(button)) {
          button.pressed = this.active;
        }
        const target = this.target === this.player.media ? this.target : this.player.elements.container;
        triggerEvent2.call(this.player, target, this.active ? "enterfullscreen" : "exitfullscreen", true);
      });
      __publicField(this, "toggleFallback", (toggle = false) => {
        var _a, _b;
        if (toggle) {
          this.scrollPosition = {
            x: (_a = window.scrollX) != null ? _a : 0,
            y: (_b = window.scrollY) != null ? _b : 0
          };
        } else {
          window.scrollTo(this.scrollPosition.x, this.scrollPosition.y);
        }
        document.body.style.overflow = toggle ? "hidden" : "";
        toggleClass(this.target, this.player.config.classNames.fullscreen.fallback, toggle);
        if (browser_default.isIos) {
          let viewport = document.head.querySelector('meta[name="viewport"]');
          const property = "viewport-fit=cover";
          if (!viewport) {
            viewport = document.createElement("meta");
            viewport.setAttribute("name", "viewport");
          }
          const hasProperty = is_default.string(viewport.content) && viewport.content.includes(property);
          if (toggle) {
            this.cleanupViewport = !hasProperty;
            if (!hasProperty) viewport.content += ",".concat(property);
          } else if (this.cleanupViewport) {
            viewport.content = viewport.content.split(",").filter((part) => part.trim() !== property).join(",");
          }
        }
        this.onChange();
      });
      // Trap focus inside container
      __publicField(this, "trapFocus", (event2) => {
        if (browser_default.isIos || browser_default.isIPadOS || !this.active || event2.key !== "Tab") return;
        const focused = document.activeElement;
        const focusable = getElements.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]");
        const [first] = focusable;
        const last = focusable[focusable.length - 1];
        if (focused === last && !event2.shiftKey) {
          first.focus();
          event2.preventDefault();
        } else if (focused === first && event2.shiftKey) {
          last.focus();
          event2.preventDefault();
        }
      });
      // Update UI
      __publicField(this, "update", () => {
        if (this.supported) {
          let mode;
          if (this.forceFallback) mode = "Fallback (forced)";
          else if (_Fullscreen.nativeSupported) mode = "Native";
          else mode = "Fallback";
          this.player.debug.log("".concat(mode, " fullscreen enabled"));
        } else {
          this.player.debug.log("Fullscreen not supported and fallback disabled");
        }
        toggleClass(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.supported);
      });
      // Make an element fullscreen
      __publicField(this, "enter", () => {
        if (!this.supported) return;
        if (browser_default.isIos && this.player.config.fullscreen.iosNative) {
          if (this.player.isVimeo) {
            this.player.embed.requestFullscreen();
          } else {
            this.target.webkitEnterFullscreen();
          }
        } else if (!_Fullscreen.nativeSupported || this.forceFallback) {
          this.toggleFallback(true);
        } else if (!this.prefix) {
          this.target.requestFullscreen({ navigationUI: "hide" });
        } else if (!is_default.empty(this.prefix)) {
          this.target["".concat(this.prefix, "Request").concat(this.property)]();
        }
      });
      // Bail from fullscreen
      __publicField(this, "exit", () => {
        if (!this.supported) return;
        if (browser_default.isIos && this.player.config.fullscreen.iosNative) {
          if (this.player.isVimeo) {
            this.player.embed.exitFullscreen();
          } else {
            this.target.webkitEnterFullscreen();
          }
          silencePromise(this.player.play());
        } else if (!_Fullscreen.nativeSupported || this.forceFallback) {
          this.toggleFallback(false);
        } else if (!this.prefix) {
          (document.cancelFullScreen || document.exitFullscreen).call(document);
        } else if (!is_default.empty(this.prefix)) {
          const action = this.prefix === "moz" ? "Cancel" : "Exit";
          document["".concat(this.prefix).concat(action).concat(this.property)]();
        }
      });
      // Toggle state
      __publicField(this, "toggle", () => {
        if (!this.active) this.enter();
        else this.exit();
      });
      this.player = player;
      this.prefix = _Fullscreen.prefix;
      this.property = _Fullscreen.property;
      this.scrollPosition = { x: 0, y: 0 };
      this.forceFallback = player.config.fullscreen.fallback === "force";
      this.player.elements.fullscreen = player.config.fullscreen.container && closest2(this.player.elements.container, player.config.fullscreen.container);
      on.call(
        this.player,
        document,
        this.prefix === "ms" ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"),
        () => {
          this.onChange();
        }
      );
      on.call(this.player, this.player.elements.container, "dblclick", (event2) => {
        if (is_default.element(this.player.elements.controls) && this.player.elements.controls.contains(event2.target)) {
          return;
        }
        this.player.listeners.proxy(event2, this.toggle, "fullscreen");
      });
      on.call(this, this.player.elements.container, "keydown", (event2) => this.trapFocus(event2));
      this.update();
    }
    // Determine if native supported
    static get nativeSupported() {
      return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
    }
    // If we're actually using native
    get useNative() {
      return _Fullscreen.nativeSupported && !this.forceFallback;
    }
    // Get the prefix for handlers
    static get prefix() {
      if (is_default.function(document.exitFullscreen)) return "";
      let value = "";
      const prefixes = ["webkit", "moz", "ms"];
      prefixes.some((pre) => {
        if (is_default.function(document["".concat(pre, "ExitFullscreen")]) || is_default.function(document["".concat(pre, "CancelFullScreen")])) {
          value = pre;
          return true;
        }
        return false;
      });
      return value;
    }
    static get property() {
      return this.prefix === "moz" ? "FullScreen" : "Fullscreen";
    }
    // Determine if fullscreen is supported
    get supported() {
      return [
        // Fullscreen is enabled in config
        this.player.config.fullscreen.enabled,
        // Must be a video
        this.player.isVideo,
        // Either native is supported or fallback enabled
        _Fullscreen.nativeSupported || this.player.config.fullscreen.fallback,
        // YouTube has no way to trigger fullscreen, so on devices with no native support, playsinline
        // must be enabled and iosNative fullscreen must be disabled to offer the fullscreen fallback
        !this.player.isYouTube || _Fullscreen.nativeSupported || !browser_default.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative
      ].every(Boolean);
    }
    // Get active state
    get active() {
      if (!this.supported) return false;
      if (!_Fullscreen.nativeSupported || this.forceFallback) {
        return hasClass(this.target, this.player.config.classNames.fullscreen.fallback);
      }
      const element = !this.prefix ? this.target.getRootNode().fullscreenElement : this.target.getRootNode()["".concat(this.prefix).concat(this.property, "Element")];
      return element && element.shadowRoot ? element === this.target.getRootNode().host : element === this.target;
    }
    // Get target element
    get target() {
      var _a;
      return browser_default.isIos && this.player.config.fullscreen.iosNative ? this.player.media : (_a = this.player.elements.fullscreen) != null ? _a : this.player.elements.container;
    }
  };
  var fullscreen_default = Fullscreen;

  // node_modules/plyr/src/js/utils/load-image.js
  function loadImage(src, minWidth = 1) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      const handler = () => {
        delete image.onload;
        delete image.onerror;
        (image.naturalWidth >= minWidth ? resolve : reject)(image);
      };
      Object.assign(image, { onload: handler, onerror: handler, src });
    });
  }

  // node_modules/plyr/src/js/ui.js
  var ui = {
    addStyleHook() {
      toggleClass(this.elements.container, this.config.selectors.container.replace(".", ""), true);
      toggleClass(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
    },
    // Toggle native HTML5 media controls
    toggleNativeControls(toggle = false) {
      if (toggle && this.isHTML5) {
        this.media.setAttribute("controls", "");
      } else {
        this.media.removeAttribute("controls");
      }
    },
    // Setup the UI
    build() {
      this.listeners.media();
      if (!this.supported.ui) {
        this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type));
        ui.toggleNativeControls.call(this, true);
        return;
      }
      if (!is_default.element(this.elements.controls)) {
        controls_default.inject.call(this);
        this.listeners.controls();
      }
      ui.toggleNativeControls.call(this);
      if (this.isHTML5) {
        captions_default.setup.call(this);
      }
      this.volume = null;
      this.muted = null;
      this.loop = null;
      this.quality = null;
      this.speed = null;
      controls_default.updateVolume.call(this);
      controls_default.timeUpdate.call(this);
      controls_default.durationUpdate.call(this);
      ui.checkPlaying.call(this);
      toggleClass(
        this.elements.container,
        this.config.classNames.pip.supported,
        support_default.pip && this.isHTML5 && this.isVideo
      );
      toggleClass(this.elements.container, this.config.classNames.airplay.supported, support_default.airplay && this.isHTML5);
      toggleClass(this.elements.container, this.config.classNames.isTouch, this.touch);
      this.ready = true;
      setTimeout(() => {
        triggerEvent2.call(this, this.media, "ready");
      }, 0);
      ui.setTitle.call(this);
      if (this.poster) {
        ui.setPoster.call(this, this.poster, false).catch(() => {
        });
      }
      if (this.config.duration) {
        controls_default.durationUpdate.call(this);
      }
      if (this.config.mediaMetadata) {
        controls_default.setMediaMetadata.call(this);
      }
    },
    // Setup aria attribute for play and iframe title
    setTitle() {
      let label = i18n_default.get("play", this.config);
      if (is_default.string(this.config.title) && !is_default.empty(this.config.title)) {
        label += ", ".concat(this.config.title);
      }
      Array.from(this.elements.buttons.play || []).forEach((button) => {
        button.setAttribute("aria-label", label);
      });
      if (this.isEmbed) {
        const iframe = getElement.call(this, "iframe");
        if (!is_default.element(iframe)) {
          return;
        }
        const title = !is_default.empty(this.config.title) ? this.config.title : "video";
        const format2 = i18n_default.get("frameTitle", this.config);
        iframe.setAttribute("title", format2.replace("{title}", title));
      }
    },
    // Toggle poster
    togglePoster(enable) {
      toggleClass(this.elements.container, this.config.classNames.posterEnabled, enable);
    },
    // Set the poster image (async)
    // Used internally for the poster setter, with the passive option forced to false
    setPoster(poster, passive = true) {
      if (passive && this.poster) {
        return Promise.reject(new Error("Poster already set"));
      }
      this.media.setAttribute("data-poster", poster);
      this.elements.poster.removeAttribute("hidden");
      return ready2.call(this).then(() => loadImage(poster)).catch((error) => {
        if (poster === this.poster) {
          ui.togglePoster.call(this, false);
        }
        throw error;
      }).then(() => {
        if (poster !== this.poster) {
          throw new Error("setPoster cancelled by later call to setPoster");
        }
      }).then(() => {
        Object.assign(this.elements.poster.style, {
          backgroundImage: "url('".concat(poster, "')"),
          // Reset backgroundSize as well (since it can be set to "cover" for padded thumbnails for youtube)
          backgroundSize: ""
        });
        ui.togglePoster.call(this, true);
        return poster;
      });
    },
    // Check playing state
    checkPlaying(event2) {
      toggleClass(this.elements.container, this.config.classNames.playing, this.playing);
      toggleClass(this.elements.container, this.config.classNames.paused, this.paused);
      toggleClass(this.elements.container, this.config.classNames.stopped, this.stopped);
      Array.from(this.elements.buttons.play || []).forEach((target) => {
        Object.assign(target, { pressed: this.playing });
        target.setAttribute("aria-label", i18n_default.get(this.playing ? "pause" : "play", this.config));
      });
      if (is_default.event(event2) && event2.type === "timeupdate") {
        return;
      }
      ui.toggleControls.call(this);
    },
    // Check if media is loading
    checkLoading(event2) {
      this.loading = ["stalled", "waiting"].includes(event2.type);
      clearTimeout(this.timers.loading);
      this.timers.loading = setTimeout(
        () => {
          toggleClass(this.elements.container, this.config.classNames.loading, this.loading);
          ui.toggleControls.call(this);
        },
        this.loading ? 250 : 0
      );
    },
    // Toggle controls based on state and `force` argument
    toggleControls(force) {
      const { controls: controlsElement } = this.elements;
      if (controlsElement && this.config.hideControls) {
        const recentTouchSeek = this.touch && this.lastSeekTime + 2e3 > Date.now();
        this.toggleControls(
          Boolean(
            force || this.loading || this.paused || controlsElement.pressed || controlsElement.hover || recentTouchSeek
          )
        );
      }
    },
    // Migrate any custom properties from the media to the parent
    migrateStyles() {
      Object.values(__spreadValues({}, this.media.style)).filter((key) => !is_default.empty(key) && is_default.string(key) && key.startsWith("--plyr")).forEach((key) => {
        this.elements.container.style.setProperty(key, this.media.style.getPropertyValue(key));
        this.media.style.removeProperty(key);
      });
      if (is_default.empty(this.media.style)) {
        this.media.removeAttribute("style");
      }
    }
  };
  var ui_default = ui;

  // node_modules/plyr/src/js/listeners.js
  var Listeners = class {
    constructor(player) {
      // Device is touch enabled
      __publicField(this, "firstTouch", () => {
        const { player } = this;
        const { elements } = player;
        player.touch = true;
        toggleClass(elements.container, player.config.classNames.isTouch, true);
      });
      // Global window & document listeners
      __publicField(this, "global", (toggle = true) => {
        const { player } = this;
        if (player.config.keyboard.global) {
          toggleListener.call(player, window, "keydown keyup", this.handleKey, toggle, false);
        }
        toggleListener.call(player, document.body, "click", this.toggleMenu, toggle);
        once.call(player, document.body, "touchstart", this.firstTouch);
      });
      // Container listeners
      __publicField(this, "container", () => {
        const { player } = this;
        const { config, elements, timers } = player;
        if (!config.keyboard.global && config.keyboard.focused) {
          on.call(player, elements.container, "keydown keyup", this.handleKey, false);
        }
        on.call(
          player,
          elements.container,
          "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
          (event2) => {
            const { controls: controlsElement } = elements;
            if (controlsElement && event2.type === "enterfullscreen") {
              controlsElement.pressed = false;
              controlsElement.hover = false;
            }
            const show = ["touchstart", "touchmove", "mousemove"].includes(event2.type);
            let delay = 0;
            if (show) {
              ui_default.toggleControls.call(player, true);
              delay = player.touch ? 3e3 : 2e3;
            }
            clearTimeout(timers.controls);
            timers.controls = setTimeout(() => ui_default.toggleControls.call(player, false), delay);
          }
        );
        const setGutter = () => {
          if (!player.isVimeo || player.config.vimeo.premium) {
            return;
          }
          const target = elements.wrapper;
          const { active } = player.fullscreen;
          const [videoWidth, videoHeight] = getAspectRatio.call(player);
          const useNativeAspectRatio = supportsCSS("aspect-ratio: ".concat(videoWidth, " / ").concat(videoHeight));
          if (!active) {
            if (useNativeAspectRatio) {
              target.style.width = null;
              target.style.height = null;
            } else {
              target.style.maxWidth = null;
              target.style.margin = null;
            }
            return;
          }
          const [viewportWidth, viewportHeight] = getViewportSize();
          const overflow = viewportWidth / viewportHeight > videoWidth / videoHeight;
          if (useNativeAspectRatio) {
            target.style.width = overflow ? "auto" : "100%";
            target.style.height = overflow ? "100%" : "auto";
          } else {
            target.style.maxWidth = overflow ? "".concat(viewportHeight / videoHeight * videoWidth, "px") : null;
            target.style.margin = overflow ? "0 auto" : null;
          }
        };
        const resized = () => {
          clearTimeout(timers.resized);
          timers.resized = setTimeout(setGutter, 50);
        };
        on.call(player, elements.container, "enterfullscreen exitfullscreen", (event2) => {
          const { target } = player.fullscreen;
          if (target !== elements.container) {
            return;
          }
          if (!player.isEmbed && is_default.empty(player.config.ratio)) {
            return;
          }
          setGutter();
          const method = event2.type === "enterfullscreen" ? on : off;
          method.call(player, window, "resize", resized);
        });
      });
      // Listen for media events
      __publicField(this, "media", () => {
        const { player } = this;
        const { elements } = player;
        on.call(player, player.media, "timeupdate seeking seeked", (event2) => controls_default.timeUpdate.call(player, event2));
        on.call(player, player.media, "durationchange loadeddata loadedmetadata", (event2) => controls_default.durationUpdate.call(player, event2));
        on.call(player, player.media, "ended", () => {
          if (player.isHTML5 && player.isVideo && player.config.resetOnEnd) {
            player.restart();
            player.pause();
          }
        });
        on.call(player, player.media, "progress playing seeking seeked", (event2) => controls_default.updateProgress.call(player, event2));
        on.call(player, player.media, "volumechange", (event2) => controls_default.updateVolume.call(player, event2));
        on.call(player, player.media, "playing play pause ended emptied timeupdate", (event2) => ui_default.checkPlaying.call(player, event2));
        on.call(player, player.media, "waiting canplay seeked playing", (event2) => ui_default.checkLoading.call(player, event2));
        if (player.supported.ui && player.config.clickToPlay && !player.isAudio) {
          const wrapper = getElement.call(player, ".".concat(player.config.classNames.video));
          if (!is_default.element(wrapper)) {
            return;
          }
          on.call(player, elements.container, "click", (event2) => {
            const targets = [elements.container, wrapper];
            if (!targets.includes(event2.target) && !wrapper.contains(event2.target)) {
              return;
            }
            if (player.touch && player.config.hideControls) {
              return;
            }
            if (player.ended) {
              this.proxy(event2, player.restart, "restart");
              this.proxy(
                event2,
                () => {
                  silencePromise(player.play());
                },
                "play"
              );
            } else {
              this.proxy(
                event2,
                () => {
                  silencePromise(player.togglePlay());
                },
                "play"
              );
            }
          });
        }
        if (player.supported.ui && player.config.disableContextMenu) {
          on.call(
            player,
            elements.wrapper,
            "contextmenu",
            (event2) => {
              event2.preventDefault();
            },
            false
          );
        }
        on.call(player, player.media, "volumechange", () => {
          player.storage.set({
            volume: player.volume,
            muted: player.muted
          });
        });
        on.call(player, player.media, "ratechange", () => {
          controls_default.updateSetting.call(player, "speed");
          player.storage.set({ speed: player.speed });
        });
        on.call(player, player.media, "qualitychange", (event2) => {
          controls_default.updateSetting.call(player, "quality", null, event2.detail.quality);
        });
        on.call(player, player.media, "ready qualitychange", () => {
          controls_default.setDownloadUrl.call(player);
        });
        const proxyEvents = player.config.events.concat(["keyup", "keydown"]).join(" ");
        on.call(player, player.media, proxyEvents, (event2) => {
          let { detail = {} } = event2;
          if (event2.type === "error") {
            detail = player.media.error;
          }
          triggerEvent2.call(player, elements.container, event2.type, true, detail);
        });
      });
      // Run default and custom handlers
      __publicField(this, "proxy", (event2, defaultHandler, customHandlerKey) => {
        const { player } = this;
        const customHandler = player.config.listeners[customHandlerKey];
        const hasCustomHandler = is_default.function(customHandler);
        let returned = true;
        if (hasCustomHandler) {
          returned = customHandler.call(player, event2);
        }
        if (returned !== false && is_default.function(defaultHandler)) {
          defaultHandler.call(player, event2);
        }
      });
      // Trigger custom and default handlers
      __publicField(this, "bind", (element, type, defaultHandler, customHandlerKey, passive = true) => {
        const { player } = this;
        const customHandler = player.config.listeners[customHandlerKey];
        const hasCustomHandler = is_default.function(customHandler);
        on.call(
          player,
          element,
          type,
          (event2) => this.proxy(event2, defaultHandler, customHandlerKey),
          passive && !hasCustomHandler
        );
      });
      // Listen for control events
      __publicField(this, "controls", () => {
        const { player } = this;
        const { elements } = player;
        const inputEvent = browser_default.isIE ? "change" : "input";
        if (elements.buttons.play) {
          Array.from(elements.buttons.play).forEach((button) => {
            this.bind(
              button,
              "click",
              () => {
                silencePromise(player.togglePlay());
              },
              "play"
            );
          });
        }
        this.bind(elements.buttons.restart, "click", player.restart, "restart");
        this.bind(
          elements.buttons.rewind,
          "click",
          () => {
            player.lastSeekTime = Date.now();
            player.rewind();
          },
          "rewind"
        );
        this.bind(
          elements.buttons.fastForward,
          "click",
          () => {
            player.lastSeekTime = Date.now();
            player.forward();
          },
          "fastForward"
        );
        this.bind(
          elements.buttons.mute,
          "click",
          () => {
            player.muted = !player.muted;
          },
          "mute"
        );
        this.bind(elements.buttons.captions, "click", () => player.toggleCaptions());
        this.bind(
          elements.buttons.download,
          "click",
          () => {
            triggerEvent2.call(player, player.media, "download");
          },
          "download"
        );
        this.bind(
          elements.buttons.fullscreen,
          "click",
          () => {
            player.fullscreen.toggle();
          },
          "fullscreen"
        );
        this.bind(
          elements.buttons.pip,
          "click",
          () => {
            player.pip = "toggle";
          },
          "pip"
        );
        this.bind(elements.buttons.airplay, "click", player.airplay, "airplay");
        this.bind(
          elements.buttons.settings,
          "click",
          (event2) => {
            event2.stopPropagation();
            event2.preventDefault();
            controls_default.toggleMenu.call(player, event2);
          },
          null,
          false
        );
        this.bind(
          elements.buttons.settings,
          "keyup",
          (event2) => {
            if (![" ", "Enter"].includes(event2.key)) {
              return;
            }
            if (event2.key === "Enter") {
              controls_default.focusFirstMenuItem.call(player, null, true);
              return;
            }
            event2.preventDefault();
            event2.stopPropagation();
            controls_default.toggleMenu.call(player, event2);
          },
          null,
          false
          // Can't be passive as we're preventing default
        );
        this.bind(elements.settings.menu, "keydown", (event2) => {
          if (event2.key === "Escape") {
            controls_default.toggleMenu.call(player, event2);
          }
        });
        this.bind(elements.inputs.seek, "mousedown mousemove", (event2) => {
          const rect = elements.progress.getBoundingClientRect();
          const scrollLeft = event2.pageX - event2.clientX;
          const percent = 100 / rect.width * (event2.pageX - rect.left - scrollLeft);
          event2.currentTarget.setAttribute("seek-value", percent);
        });
        this.bind(elements.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (event2) => {
          const seek = event2.currentTarget;
          const attribute = "play-on-seeked";
          if (is_default.keyboardEvent(event2) && !["ArrowLeft", "ArrowRight"].includes(event2.key)) {
            return;
          }
          player.lastSeekTime = Date.now();
          const play = seek.hasAttribute(attribute);
          const done = ["mouseup", "touchend", "keyup"].includes(event2.type);
          if (play && done) {
            seek.removeAttribute(attribute);
            silencePromise(player.play());
          } else if (!done && player.playing) {
            seek.setAttribute(attribute, "");
            player.pause();
          }
        });
        if (browser_default.isIos) {
          const inputs = getElements.call(player, 'input[type="range"]');
          Array.from(inputs).forEach((input) => this.bind(input, inputEvent, (event2) => repaint(event2.target)));
        }
        this.bind(
          elements.inputs.seek,
          inputEvent,
          (event2) => {
            const seek = event2.currentTarget;
            let seekTo = seek.getAttribute("seek-value");
            if (is_default.empty(seekTo)) {
              seekTo = seek.value;
            }
            seek.removeAttribute("seek-value");
            player.currentTime = seekTo / seek.max * player.duration;
          },
          "seek"
        );
        this.bind(elements.progress, "mouseenter mouseleave mousemove", (event2) => controls_default.updateSeekTooltip.call(player, event2));
        this.bind(elements.progress, "mousemove touchmove", (event2) => {
          const { previewThumbnails } = player;
          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.startMove(event2);
          }
        });
        this.bind(elements.progress, "mouseleave touchend click", () => {
          const { previewThumbnails } = player;
          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.endMove(false, true);
          }
        });
        this.bind(elements.progress, "mousedown touchstart", (event2) => {
          const { previewThumbnails } = player;
          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.startScrubbing(event2);
          }
        });
        this.bind(elements.progress, "mouseup touchend", (event2) => {
          const { previewThumbnails } = player;
          if (previewThumbnails && previewThumbnails.loaded) {
            previewThumbnails.endScrubbing(event2);
          }
        });
        if (browser_default.isWebKit) {
          Array.from(getElements.call(player, 'input[type="range"]')).forEach((element) => {
            this.bind(element, "input", (event2) => controls_default.updateRangeFill.call(player, event2.target));
          });
        }
        if (player.config.toggleInvert && !is_default.element(elements.display.duration)) {
          this.bind(elements.display.currentTime, "click", () => {
            if (player.currentTime === 0) {
              return;
            }
            player.config.invertTime = !player.config.invertTime;
            controls_default.timeUpdate.call(player);
          });
        }
        this.bind(
          elements.inputs.volume,
          inputEvent,
          (event2) => {
            player.volume = event2.target.value;
          },
          "volume"
        );
        this.bind(elements.controls, "mouseenter mouseleave", (event2) => {
          elements.controls.hover = !player.touch && event2.type === "mouseenter";
        });
        if (elements.fullscreen) {
          Array.from(elements.fullscreen.children).filter((c) => !c.contains(elements.container)).forEach((child) => {
            this.bind(child, "mouseenter mouseleave", (event2) => {
              if (elements.controls) {
                elements.controls.hover = !player.touch && event2.type === "mouseenter";
              }
            });
          });
        }
        this.bind(elements.controls, "mousedown mouseup touchstart touchend touchcancel", (event2) => {
          elements.controls.pressed = ["mousedown", "touchstart"].includes(event2.type);
        });
        this.bind(elements.controls, "focusin", () => {
          const { config, timers } = player;
          toggleClass(elements.controls, config.classNames.noTransition, true);
          ui_default.toggleControls.call(player, true);
          setTimeout(() => {
            toggleClass(elements.controls, config.classNames.noTransition, false);
          }, 0);
          const delay = this.touch ? 3e3 : 4e3;
          clearTimeout(timers.controls);
          timers.controls = setTimeout(() => ui_default.toggleControls.call(player, false), delay);
        });
        this.bind(
          elements.inputs.volume,
          "wheel",
          (event2) => {
            const inverted = event2.webkitDirectionInvertedFromDevice;
            const [x, y] = [event2.deltaX, -event2.deltaY].map((value) => inverted ? -value : value);
            const direction = Math.sign(Math.abs(x) > Math.abs(y) ? x : y);
            player.increaseVolume(direction / 50);
            const { volume } = player.media;
            if (direction === 1 && volume < 1 || direction === -1 && volume > 0) {
              event2.preventDefault();
            }
          },
          "volume",
          false
        );
      });
      this.player = player;
      this.lastKey = null;
      this.focusTimer = null;
      this.lastKeyDown = null;
      this.handleKey = this.handleKey.bind(this);
      this.toggleMenu = this.toggleMenu.bind(this);
      this.firstTouch = this.firstTouch.bind(this);
    }
    // Handle key presses
    handleKey(event2) {
      const { player } = this;
      const { elements } = player;
      const { key, type, altKey, ctrlKey, metaKey, shiftKey } = event2;
      const pressed = type === "keydown";
      const repeat = pressed && key === this.lastKey;
      if (altKey || ctrlKey || metaKey || shiftKey) {
        return;
      }
      if (!key) {
        return;
      }
      const seekByIncrement = (increment) => {
        player.currentTime = player.duration / 10 * increment;
      };
      if (pressed) {
        const focused = document.activeElement;
        if (is_default.element(focused)) {
          const { editable } = player.config.selectors;
          const { seek } = elements.inputs;
          if (focused !== seek && matches2(focused, editable)) {
            return;
          }
          if (event2.key === " " && matches2(focused, 'button, [role^="menuitem"]')) {
            return;
          }
        }
        const preventDefault = [
          " ",
          "ArrowLeft",
          "ArrowUp",
          "ArrowRight",
          "ArrowDown",
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "c",
          "f",
          "k",
          "l",
          "m"
        ];
        if (preventDefault.includes(key)) {
          event2.preventDefault();
          event2.stopPropagation();
        }
        switch (key) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            if (!repeat) {
              seekByIncrement(Number.parseInt(key, 10));
            }
            break;
          case " ":
          case "k":
            if (!repeat) {
              silencePromise(player.togglePlay());
            }
            break;
          case "ArrowUp":
            player.increaseVolume(0.1);
            break;
          case "ArrowDown":
            player.decreaseVolume(0.1);
            break;
          case "m":
            if (!repeat) {
              player.muted = !player.muted;
            }
            break;
          case "ArrowRight":
            player.forward();
            break;
          case "ArrowLeft":
            player.rewind();
            break;
          case "f":
            player.fullscreen.toggle();
            break;
          case "c":
            if (!repeat) {
              player.toggleCaptions();
            }
            break;
          case "l":
            player.loop = !player.loop;
            break;
          default:
            break;
        }
        if (key === "Escape" && !player.fullscreen.usingNative && player.fullscreen.active) {
          player.fullscreen.toggle();
        }
        this.lastKey = key;
      } else {
        this.lastKey = null;
      }
    }
    // Toggle menu
    toggleMenu(event2) {
      controls_default.toggleMenu.call(this.player, event2);
    }
  };
  var listeners_default = Listeners;

  // node_modules/plyr/src/js/utils/load-script.js
  var import_loadjs = __toESM(require_loadjs_umd(), 1);
  function loadScript(url) {
    return new Promise((resolve, reject) => {
      (0, import_loadjs.default)(url, {
        success: resolve,
        error: reject
      });
    });
  }

  // node_modules/plyr/src/js/plugins/vimeo.js
  function parseId(url) {
    if (is_default.empty(url)) {
      return null;
    }
    if (is_default.number(Number(url))) {
      return url;
    }
    const regex = /^.*(vimeo.com\/|video\/)(\d+).*/;
    const match = url.match(regex);
    return match ? match[2] : url;
  }
  function parseHash(url) {
    const regex = /^.*(vimeo.com\/|video\/)(\d+)(\?.*h=|\/)+([\d,a-f]+)/;
    const found = url.match(regex);
    return found && found.length === 5 ? found[4] : null;
  }
  function assurePlaybackState(play) {
    if (play && !this.embed.hasPlayed) {
      this.embed.hasPlayed = true;
    }
    if (this.media.paused === play) {
      this.media.paused = !play;
      triggerEvent2.call(this, this.media, play ? "play" : "pause");
    }
  }
  var vimeo = {
    setup() {
      const player = this;
      toggleClass(player.elements.wrapper, player.config.classNames.embed, true);
      player.options.speed = player.config.speed.options;
      setAspectRatio.call(player);
      if (!is_default.object(window.Vimeo)) {
        loadScript(player.config.urls.vimeo.sdk).then(() => {
          vimeo.ready.call(player);
        }).catch((error) => {
          player.debug.warn("Vimeo SDK (player.js) failed to load", error);
        });
      } else {
        vimeo.ready.call(player);
      }
    },
    // API Ready
    ready() {
      const player = this;
      const config = player.config.vimeo;
      const _a = config, { premium, referrerPolicy } = _a, frameParams = __objRest(_a, ["premium", "referrerPolicy"]);
      let source2 = player.media.getAttribute("src");
      let hash = "";
      if (is_default.empty(source2)) {
        source2 = player.media.getAttribute(player.config.attributes.embed.id);
        hash = player.media.getAttribute(player.config.attributes.embed.hash);
      } else {
        hash = parseHash(source2);
      }
      const hashParam = hash ? { h: hash } : {};
      if (premium) {
        Object.assign(frameParams, {
          controls: false,
          sidedock: false
        });
      }
      const params = buildUrlParams(__spreadValues(__spreadValues({
        loop: player.config.loop.active,
        autoplay: player.autoplay,
        muted: player.muted,
        gesture: "media",
        playsinline: player.config.playsinline
      }, hashParam), frameParams));
      const id = parseId(source2);
      const iframe = createElement2("iframe");
      const src = format(player.config.urls.vimeo.iframe, id, params);
      iframe.setAttribute("src", src);
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute(
        "allow",
        ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; ")
      );
      if (!is_default.empty(referrerPolicy)) {
        iframe.setAttribute("referrerPolicy", referrerPolicy);
      }
      if (premium || !config.customControls) {
        iframe.setAttribute("data-poster", player.poster);
        player.media = replaceElement(iframe, player.media);
      } else {
        const wrapper = createElement2("div", {
          "class": player.config.classNames.embedContainer,
          "data-poster": player.poster
        });
        wrapper.appendChild(iframe);
        player.media = replaceElement(wrapper, player.media);
      }
      if (!config.customControls) {
        fetch(format(player.config.urls.vimeo.api, src)).then((response) => {
          if (is_default.empty(response) || !response.thumbnail_url) {
            return;
          }
          ui_default.setPoster.call(player, response.thumbnail_url).catch(() => {
          });
        });
      }
      player.embed = new window.Vimeo.Player(iframe, {
        autopause: player.config.autopause,
        muted: player.muted
      });
      player.media.paused = true;
      player.media.currentTime = 0;
      if (player.supported.ui) {
        player.embed.disableTextTrack();
      }
      player.media.play = () => {
        assurePlaybackState.call(player, true);
        return player.embed.play();
      };
      player.media.pause = () => {
        assurePlaybackState.call(player, false);
        return player.embed.pause();
      };
      player.media.stop = () => {
        player.pause();
        player.currentTime = 0;
      };
      let { currentTime } = player.media;
      Object.defineProperty(player.media, "currentTime", {
        get() {
          return currentTime;
        },
        set(time) {
          const { embed, media: media2, paused, volume: volume2 } = player;
          const restorePause = paused && !embed.hasPlayed;
          media2.seeking = true;
          triggerEvent2.call(player, media2, "seeking");
          Promise.resolve(restorePause && embed.setVolume(0)).then(() => embed.setCurrentTime(time)).then(() => restorePause && embed.pause()).then(() => restorePause && embed.setVolume(volume2)).catch(() => {
          });
        }
      });
      let speed = player.config.speed.selected;
      Object.defineProperty(player.media, "playbackRate", {
        get() {
          return speed;
        },
        set(input) {
          player.embed.setPlaybackRate(input).then(() => {
            speed = input;
            triggerEvent2.call(player, player.media, "ratechange");
          }).catch(() => {
            player.options.speed = [1];
          });
        }
      });
      let { volume } = player.config;
      Object.defineProperty(player.media, "volume", {
        get() {
          return volume;
        },
        set(input) {
          player.embed.setVolume(input).then(() => {
            volume = input;
            triggerEvent2.call(player, player.media, "volumechange");
          });
        }
      });
      let { muted } = player.config;
      Object.defineProperty(player.media, "muted", {
        get() {
          return muted;
        },
        set(input) {
          const toggle = is_default.boolean(input) ? input : false;
          player.embed.setMuted(toggle ? true : player.config.muted).then(() => {
            muted = toggle;
            triggerEvent2.call(player, player.media, "volumechange");
          });
        }
      });
      let { loop: loop2 } = player.config;
      Object.defineProperty(player.media, "loop", {
        get() {
          return loop2;
        },
        set(input) {
          const toggle = is_default.boolean(input) ? input : player.config.loop.active;
          player.embed.setLoop(toggle).then(() => {
            loop2 = toggle;
          });
        }
      });
      let currentSrc;
      player.embed.getVideoUrl().then((value) => {
        currentSrc = value;
        controls_default.setDownloadUrl.call(player);
      }).catch((error) => {
        this.debug.warn(error);
      });
      Object.defineProperty(player.media, "currentSrc", {
        get() {
          return currentSrc;
        }
      });
      Object.defineProperty(player.media, "ended", {
        get() {
          return player.currentTime === player.duration;
        }
      });
      Promise.all([player.embed.getVideoWidth(), player.embed.getVideoHeight()]).then((dimensions) => {
        const [width, height] = dimensions;
        player.embed.ratio = roundAspectRatio(width, height);
        setAspectRatio.call(this);
      });
      player.embed.setAutopause(player.config.autopause).then((state) => {
        player.config.autopause = state;
      });
      player.embed.getVideoTitle().then((title) => {
        player.config.title = title;
        ui_default.setTitle.call(this);
      });
      player.embed.getCurrentTime().then((value) => {
        currentTime = value;
        triggerEvent2.call(player, player.media, "timeupdate");
      });
      player.embed.getDuration().then((value) => {
        player.media.duration = value;
        triggerEvent2.call(player, player.media, "durationchange");
      });
      player.embed.getTextTracks().then((tracks) => {
        player.media.textTracks = tracks;
        captions_default.setup.call(player);
      });
      player.embed.on("cuechange", ({ cues = [] }) => {
        const strippedCues = cues.map((cue) => stripHTML(cue.text));
        captions_default.updateCues.call(player, strippedCues);
      });
      player.embed.on("loaded", () => {
        player.embed.getPaused().then((paused) => {
          assurePlaybackState.call(player, !paused);
          if (!paused) {
            triggerEvent2.call(player, player.media, "playing");
          }
        });
        if (is_default.element(player.embed.element) && player.supported.ui) {
          const frame = player.embed.element;
          frame.setAttribute("tabindex", -1);
        }
      });
      player.embed.on("bufferstart", () => {
        triggerEvent2.call(player, player.media, "waiting");
      });
      player.embed.on("bufferend", () => {
        triggerEvent2.call(player, player.media, "playing");
      });
      player.embed.on("play", () => {
        assurePlaybackState.call(player, true);
        triggerEvent2.call(player, player.media, "playing");
      });
      player.embed.on("pause", () => {
        assurePlaybackState.call(player, false);
      });
      player.embed.on("timeupdate", (data) => {
        player.media.seeking = false;
        currentTime = data.seconds;
        triggerEvent2.call(player, player.media, "timeupdate");
      });
      player.embed.on("progress", (data) => {
        player.media.buffered = data.percent;
        triggerEvent2.call(player, player.media, "progress");
        if (Number.parseInt(data.percent, 10) === 1) {
          triggerEvent2.call(player, player.media, "canplaythrough");
        }
        player.embed.getDuration().then((value) => {
          if (value !== player.media.duration) {
            player.media.duration = value;
            triggerEvent2.call(player, player.media, "durationchange");
          }
        });
      });
      player.embed.on("seeked", () => {
        player.media.seeking = false;
        triggerEvent2.call(player, player.media, "seeked");
      });
      player.embed.on("ended", () => {
        player.media.paused = true;
        triggerEvent2.call(player, player.media, "ended");
      });
      player.embed.on("error", (detail) => {
        player.media.error = detail;
        triggerEvent2.call(player, player.media, "error");
      });
      if (config.customControls) {
        setTimeout(() => ui_default.build.call(player), 0);
      }
    }
  };
  var vimeo_default = vimeo;

  // node_modules/plyr/src/js/plugins/youtube.js
  function parseId2(url) {
    if (is_default.empty(url)) {
      return null;
    }
    const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regex);
    return match && match[2] ? match[2] : url;
  }
  function assurePlaybackState2(play) {
    if (play && !this.embed.hasPlayed) {
      this.embed.hasPlayed = true;
    }
    if (this.media.paused === play) {
      this.media.paused = !play;
      triggerEvent2.call(this, this.media, play ? "play" : "pause");
    }
  }
  function getHost(config) {
    if (config.noCookie) {
      return "https://www.youtube-nocookie.com";
    }
    if (window.location.protocol === "http:") {
      return "http://www.youtube.com";
    }
    return void 0;
  }
  var youtube = {
    setup() {
      toggleClass(this.elements.wrapper, this.config.classNames.embed, true);
      if (is_default.object(window.YT) && is_default.function(window.YT.Player)) {
        youtube.ready.call(this);
      } else {
        const callback = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          if (is_default.function(callback)) {
            callback();
          }
          youtube.ready.call(this);
        };
        loadScript(this.config.urls.youtube.sdk).catch((error) => {
          this.debug.warn("YouTube API failed to load", error);
        });
      }
    },
    // Get the media title
    getTitle(videoId) {
      const url = format(this.config.urls.youtube.api, videoId);
      fetch(url).then((data) => {
        if (is_default.object(data)) {
          const { title, height, width } = data;
          this.config.title = title;
          ui_default.setTitle.call(this);
          this.embed.ratio = roundAspectRatio(width, height);
        }
        setAspectRatio.call(this);
      }).catch(() => {
        setAspectRatio.call(this);
      });
    },
    // API ready
    ready() {
      const player = this;
      const config = player.config.youtube;
      const currentId = player.media && player.media.getAttribute("id");
      if (!is_default.empty(currentId) && currentId.startsWith("youtube-")) {
        return;
      }
      let source2 = player.media.getAttribute("src");
      if (is_default.empty(source2)) {
        source2 = player.media.getAttribute(this.config.attributes.embed.id);
      }
      const videoId = parseId2(source2);
      const id = generateId(player.provider);
      const container = createElement2("div", { id, "data-poster": config.customControls ? player.poster : void 0 });
      player.media = replaceElement(container, player.media);
      if (config.customControls) {
        const posterSrc = (s) => "https://i.ytimg.com/vi/".concat(videoId, "/").concat(s, "default.jpg");
        loadImage(posterSrc("maxres"), 121).catch(() => loadImage(posterSrc("sd"), 121)).catch(() => loadImage(posterSrc("hq"))).then((image) => ui_default.setPoster.call(player, image.src)).then((src) => {
          if (!src.includes("maxres")) {
            player.elements.poster.style.backgroundSize = "cover";
          }
        }).catch(() => {
        });
      }
      player.embed = new window.YT.Player(player.media, {
        videoId,
        host: getHost(config),
        playerVars: extend4(
          {},
          {
            // Autoplay
            autoplay: player.config.autoplay ? 1 : 0,
            // iframe interface language
            hl: player.config.hl,
            // Only show controls if not fully supported or opted out
            controls: player.supported.ui && config.customControls ? 0 : 1,
            // Disable keyboard as we handle it
            disablekb: 1,
            // Allow iOS inline playback
            playsinline: player.config.playsinline && !player.config.fullscreen.iosNative ? 1 : 0,
            // Captions are flaky on YouTube
            cc_load_policy: player.captions.active ? 1 : 0,
            cc_lang_pref: player.config.captions.language,
            // Tracking for stats
            widget_referrer: window ? window.location.href : null
          },
          config
        ),
        events: {
          onError(event2) {
            if (!player.media.error) {
              const code = event2.data;
              const message = {
                2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                101: "The owner of the requested video does not allow it to be played in embedded players.",
                150: "The owner of the requested video does not allow it to be played in embedded players."
              }[code] || "An unknown error occurred";
              player.media.error = { code, message };
              triggerEvent2.call(player, player.media, "error");
            }
          },
          onPlaybackRateChange(event2) {
            const instance = event2.target;
            player.media.playbackRate = instance.getPlaybackRate();
            triggerEvent2.call(player, player.media, "ratechange");
          },
          onReady(event2) {
            if (is_default.function(player.media.play)) {
              return;
            }
            const instance = event2.target;
            youtube.getTitle.call(player, videoId);
            player.media.play = () => {
              assurePlaybackState2.call(player, true);
              instance.playVideo();
            };
            player.media.pause = () => {
              assurePlaybackState2.call(player, false);
              instance.pauseVideo();
            };
            player.media.stop = () => {
              instance.stopVideo();
            };
            player.media.duration = instance.getDuration();
            player.media.paused = true;
            player.media.currentTime = 0;
            Object.defineProperty(player.media, "currentTime", {
              get() {
                return Number(instance.getCurrentTime());
              },
              set(time) {
                if (player.paused && !player.embed.hasPlayed) {
                  player.embed.mute();
                }
                player.media.seeking = true;
                triggerEvent2.call(player, player.media, "seeking");
                instance.seekTo(time);
              }
            });
            Object.defineProperty(player.media, "playbackRate", {
              get() {
                return instance.getPlaybackRate();
              },
              set(input) {
                instance.setPlaybackRate(input);
              }
            });
            let { volume } = player.config;
            Object.defineProperty(player.media, "volume", {
              get() {
                return volume;
              },
              set(input) {
                volume = input;
                instance.setVolume(volume * 100);
                triggerEvent2.call(player, player.media, "volumechange");
              }
            });
            let { muted } = player.config;
            Object.defineProperty(player.media, "muted", {
              get() {
                return muted;
              },
              set(input) {
                const toggle = is_default.boolean(input) ? input : muted;
                muted = toggle;
                instance[toggle ? "mute" : "unMute"]();
                instance.setVolume(volume * 100);
                triggerEvent2.call(player, player.media, "volumechange");
              }
            });
            Object.defineProperty(player.media, "currentSrc", {
              get() {
                return instance.getVideoUrl();
              }
            });
            Object.defineProperty(player.media, "ended", {
              get() {
                return player.currentTime === player.duration;
              }
            });
            const speeds = instance.getAvailablePlaybackRates();
            player.options.speed = speeds.filter((s) => player.config.speed.options.includes(s));
            if (player.supported.ui && config.customControls) {
              player.media.setAttribute("tabindex", -1);
            }
            triggerEvent2.call(player, player.media, "timeupdate");
            triggerEvent2.call(player, player.media, "durationchange");
            clearInterval(player.timers.buffering);
            player.timers.buffering = setInterval(() => {
              player.media.buffered = instance.getVideoLoadedFraction();
              if (player.media.lastBuffered === null || player.media.lastBuffered < player.media.buffered) {
                triggerEvent2.call(player, player.media, "progress");
              }
              player.media.lastBuffered = player.media.buffered;
              if (player.media.buffered === 1) {
                clearInterval(player.timers.buffering);
                triggerEvent2.call(player, player.media, "canplaythrough");
              }
            }, 200);
            if (config.customControls) {
              setTimeout(() => ui_default.build.call(player), 50);
            }
          },
          onStateChange(event2) {
            const instance = event2.target;
            clearInterval(player.timers.playing);
            const seeked = player.media.seeking && [1, 2].includes(event2.data);
            if (seeked) {
              player.media.seeking = false;
              triggerEvent2.call(player, player.media, "seeked");
            }
            switch (event2.data) {
              case -1:
                triggerEvent2.call(player, player.media, "timeupdate");
                player.media.buffered = instance.getVideoLoadedFraction();
                triggerEvent2.call(player, player.media, "progress");
                break;
              case 0:
                assurePlaybackState2.call(player, false);
                if (player.media.loop) {
                  instance.stopVideo();
                  instance.playVideo();
                } else {
                  triggerEvent2.call(player, player.media, "ended");
                }
                break;
              case 1:
                if (config.customControls && !player.config.autoplay && player.media.paused && !player.embed.hasPlayed) {
                  player.media.pause();
                } else {
                  assurePlaybackState2.call(player, true);
                  triggerEvent2.call(player, player.media, "playing");
                  player.timers.playing = setInterval(() => {
                    triggerEvent2.call(player, player.media, "timeupdate");
                  }, 50);
                  if (player.media.duration !== instance.getDuration()) {
                    player.media.duration = instance.getDuration();
                    triggerEvent2.call(player, player.media, "durationchange");
                  }
                }
                break;
              case 2:
                if (!player.muted) {
                  player.embed.unMute();
                }
                assurePlaybackState2.call(player, false);
                break;
              case 3:
                triggerEvent2.call(player, player.media, "waiting");
                break;
              default:
                break;
            }
            triggerEvent2.call(player, player.elements.container, "statechange", false, {
              code: event2.data
            });
          }
        }
      });
    }
  };
  var youtube_default = youtube;

  // node_modules/plyr/src/js/media.js
  var media = {
    // Setup media
    setup() {
      if (!this.media) {
        this.debug.warn("No media element found!");
        return;
      }
      toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", this.type), true);
      toggleClass(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), true);
      if (this.isEmbed) {
        toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", "video"), true);
      }
      if (this.isVideo) {
        this.elements.wrapper = createElement2("div", {
          class: this.config.classNames.video
        });
        wrap(this.media, this.elements.wrapper);
        this.elements.poster = createElement2("div", {
          class: this.config.classNames.poster
        });
        this.elements.wrapper.appendChild(this.elements.poster);
      }
      if (this.isHTML5) {
        html5_default.setup.call(this);
      } else if (this.isYouTube) {
        youtube_default.setup.call(this);
      } else if (this.isVimeo) {
        vimeo_default.setup.call(this);
      }
    }
  };
  var media_default = media;

  // node_modules/plyr/src/js/plugins/ads.js
  function destroy(instance) {
    if (instance.manager) {
      instance.manager.destroy();
    }
    if (instance.elements.displayContainer) {
      instance.elements.displayContainer.destroy();
    }
    instance.elements.container.remove();
  }
  var Ads = class {
    /**
     * Ads constructor.
     * @param {object} player
     * @return {Ads}
     */
    constructor(player) {
      /**
       * Load the IMA SDK
       */
      __publicField(this, "load", () => {
        if (!this.enabled) {
          return;
        }
        if (!is_default.object(window.google) || !is_default.object(window.google.ima)) {
          loadScript(this.player.config.urls.googleIMA.sdk).then(() => {
            this.ready();
          }).catch(() => {
            this.trigger("error", new Error("Google IMA SDK failed to load"));
          });
        } else {
          this.ready();
        }
      });
      /**
       * Get the ads instance ready
       */
      __publicField(this, "ready", () => {
        if (!this.enabled) {
          destroy(this);
        }
        this.startSafetyTimer(12e3, "ready()");
        this.managerPromise.then(() => {
          this.clearSafetyTimer("onAdsManagerLoaded()");
        });
        this.listeners();
        this.setupIMA();
      });
      /**
       * In order for the SDK to display ads for our video, we need to tell it where to put them,
       * so here we define our ad container. This div is set up to render on top of the video player.
       * Using the code below, we tell the SDK to render ads within that div. We also provide a
       * handle to the content video player - the SDK will poll the current time of our player to
       * properly place mid-rolls. After we create the ad display container, we initialize it. On
       * mobile devices, this initialization is done as the result of a user action.
       */
      __publicField(this, "setupIMA", () => {
        this.elements.container = createElement2("div", {
          class: this.player.config.classNames.ads
        });
        this.player.elements.container.appendChild(this.elements.container);
        google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED);
        google.ima.settings.setLocale(this.player.config.ads.language);
        google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline);
        this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media);
        this.loader = new google.ima.AdsLoader(this.elements.displayContainer);
        this.loader.addEventListener(
          google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
          (event2) => this.onAdsManagerLoaded(event2),
          false
        );
        this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (error) => this.onAdError(error), false);
        this.requestAds();
      });
      /**
       * Request advertisements
       */
      __publicField(this, "requestAds", () => {
        const { container } = this.player.elements;
        try {
          const request = new google.ima.AdsRequest();
          request.adTagUrl = this.tagUrl;
          request.linearAdSlotWidth = container.offsetWidth;
          request.linearAdSlotHeight = container.offsetHeight;
          request.nonLinearAdSlotWidth = container.offsetWidth;
          request.nonLinearAdSlotHeight = container.offsetHeight;
          request.forceNonLinearFullSlot = false;
          request.setAdWillPlayMuted(!this.player.muted);
          this.loader.requestAds(request);
        } catch (error) {
          this.onAdError(error);
        }
      });
      /**
       * Update the ad countdown
       * @param {boolean} start
       */
      __publicField(this, "pollCountdown", (start = false) => {
        if (!start) {
          clearInterval(this.countdownTimer);
          this.elements.container.removeAttribute("data-badge-text");
          return;
        }
        const update2 = () => {
          const time = formatTime(Math.max(this.manager.getRemainingTime(), 0));
          const label = "".concat(i18n_default.get("advertisement", this.player.config), " - ").concat(time);
          this.elements.container.setAttribute("data-badge-text", label);
        };
        this.countdownTimer = setInterval(update2, 100);
      });
      /**
       * This method is called whenever the ads are ready inside the AdDisplayContainer
       * @param {Event} event - adsManagerLoadedEvent
       */
      __publicField(this, "onAdsManagerLoaded", (event2) => {
        if (!this.enabled) {
          return;
        }
        const settings = new google.ima.AdsRenderingSettings();
        settings.restoreCustomPlaybackStateOnAdBreakComplete = true;
        settings.enablePreloading = true;
        this.manager = event2.getAdsManager(this.player, settings);
        this.cuePoints = this.manager.getCuePoints();
        this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (error) => this.onAdError(error));
        Object.keys(google.ima.AdEvent.Type).forEach((type) => {
          this.manager.addEventListener(google.ima.AdEvent.Type[type], (e) => this.onAdEvent(e));
        });
        this.trigger("loaded");
      });
      __publicField(this, "addCuePoints", () => {
        if (!is_default.empty(this.cuePoints)) {
          this.cuePoints.forEach((cuePoint) => {
            if (cuePoint !== 0 && cuePoint !== -1 && cuePoint < this.player.duration) {
              const seekElement = this.player.elements.progress;
              if (is_default.element(seekElement)) {
                const cuePercentage = 100 / this.player.duration * cuePoint;
                const cue = createElement2("span", {
                  class: this.player.config.classNames.cues
                });
                cue.style.left = "".concat(cuePercentage.toString(), "%");
                seekElement.appendChild(cue);
              }
            }
          });
        }
      });
      /**
       * This is where all the event handling takes place. Retrieve the ad from the event. Some
       * events (e.g. ALL_ADS_COMPLETED) don't have the ad object associated
       * https://developers.google.com/interactive-media-ads/docs/sdks/html5/v3/apis#ima.AdEvent.Type
       * @param {Event} event
       */
      __publicField(this, "onAdEvent", (event2) => {
        const { container } = this.player.elements;
        const ad = event2.getAd();
        const adData = event2.getAdData();
        const dispatchEvent = (type) => {
          triggerEvent2.call(this.player, this.player.media, "ads".concat(type.replace(/_/g, "").toLowerCase()));
        };
        dispatchEvent(event2.type);
        switch (event2.type) {
          case google.ima.AdEvent.Type.LOADED:
            this.trigger("loaded");
            this.pollCountdown(true);
            if (!ad.isLinear()) {
              ad.width = container.offsetWidth;
              ad.height = container.offsetHeight;
            }
            break;
          case google.ima.AdEvent.Type.STARTED:
            this.manager.setVolume(this.player.volume);
            break;
          case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            if (this.player.ended) {
              this.loadAds();
            } else {
              this.loader.contentComplete();
            }
            break;
          case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
            this.pauseContent();
            break;
          case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
            this.pollCountdown();
            this.resumeContent();
            break;
          case google.ima.AdEvent.Type.LOG:
            if (adData.adError) {
              this.player.debug.warn("Non-fatal ad error: ".concat(adData.adError.getMessage()));
            }
            break;
          default:
            break;
        }
      });
      /**
       * Any ad error handling comes through here
       * @param {Event} event
       */
      __publicField(this, "onAdError", (event2) => {
        this.cancel();
        this.player.debug.warn("Ads error", event2);
      });
      /**
       * Setup hooks for Plyr and window events. This ensures
       * the mid- and post-roll launch at the correct time. And
       * resize the advertisement when the player resizes
       */
      __publicField(this, "listeners", () => {
        const { container } = this.player.elements;
        let time;
        this.player.on("canplay", () => {
          this.addCuePoints();
        });
        this.player.on("ended", () => {
          this.loader.contentComplete();
        });
        this.player.on("timeupdate", () => {
          time = this.player.currentTime;
        });
        this.player.on("seeked", () => {
          const seekedTime = this.player.currentTime;
          if (is_default.empty(this.cuePoints)) {
            return;
          }
          this.cuePoints.forEach((cuePoint, index) => {
            if (time < cuePoint && cuePoint < seekedTime) {
              this.manager.discardAdBreak();
              this.cuePoints.splice(index, 1);
            }
          });
        });
        window.addEventListener("resize", () => {
          if (this.manager) {
            this.manager.resize(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL);
          }
        });
      });
      /**
       * Initialize the adsManager and start playing advertisements
       */
      __publicField(this, "play", () => {
        const { container } = this.player.elements;
        if (!this.managerPromise) {
          this.resumeContent();
        }
        this.managerPromise.then(() => {
          this.manager.setVolume(this.player.volume);
          this.elements.displayContainer.initialize();
          try {
            if (!this.initialized) {
              this.manager.init(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL);
              this.manager.start();
            }
            this.initialized = true;
          } catch (adError) {
            this.onAdError(adError);
          }
        }).catch(() => {
        });
      });
      /**
       * Resume our video
       */
      __publicField(this, "resumeContent", () => {
        this.elements.container.style.zIndex = "";
        this.playing = false;
        silencePromise(this.player.media.play());
      });
      /**
       * Pause our video
       */
      __publicField(this, "pauseContent", () => {
        this.elements.container.style.zIndex = 3;
        this.playing = true;
        this.player.media.pause();
      });
      /**
       * Destroy the adsManager so we can grab new ads after this. If we don't then we're not
       * allowed to call new ads based on google policies, as they interpret this as an accidental
       * video requests. https://developers.google.com/interactive-
       * media-ads/docs/sdks/android/faq#8
       */
      __publicField(this, "cancel", () => {
        if (this.initialized) {
          this.resumeContent();
        }
        this.trigger("error");
        this.loadAds();
      });
      /**
       * Re-create our adsManager
       */
      __publicField(this, "loadAds", () => {
        this.managerPromise.then(() => {
          if (this.manager) {
            this.manager.destroy();
          }
          this.managerPromise = new Promise((resolve) => {
            this.on("loaded", resolve);
            this.player.debug.log(this.manager);
          });
          this.initialized = false;
          this.requestAds();
        }).catch(() => {
        });
      });
      /**
       * Handles callbacks after an ad event was invoked
       * @param {string} event - Event type
       * @param args
       */
      __publicField(this, "trigger", (event2, ...args) => {
        const handlers = this.events[event2];
        if (is_default.array(handlers)) {
          handlers.forEach((handler) => {
            if (is_default.function(handler)) {
              handler.apply(this, args);
            }
          });
        }
      });
      /**
       * Add event listeners
       * @param {string} event - Event type
       * @param {Function} callback - Callback for when event occurs
       * @return {Ads}
       */
      __publicField(this, "on", (event2, callback) => {
        if (!is_default.array(this.events[event2])) {
          this.events[event2] = [];
        }
        this.events[event2].push(callback);
        return this;
      });
      /**
       * Setup a safety timer for when the ad network doesn't respond for whatever reason.
       * The advertisement has 12 seconds to get its things together. We stop this timer when the
       * advertisement is playing, or when a user action is required to start, then we clear the
       * timer on ad ready
       * @param {number} time
       * @param {string} from
       */
      __publicField(this, "startSafetyTimer", (time, from) => {
        this.player.debug.log("Safety timer invoked from: ".concat(from));
        this.safetyTimer = setTimeout(() => {
          this.cancel();
          this.clearSafetyTimer("startSafetyTimer()");
        }, time);
      });
      /**
       * Clear our safety timer(s)
       * @param {string} from
       */
      __publicField(this, "clearSafetyTimer", (from) => {
        if (!is_default.nullOrUndefined(this.safetyTimer)) {
          this.player.debug.log("Safety timer cleared from: ".concat(from));
          clearTimeout(this.safetyTimer);
          this.safetyTimer = null;
        }
      });
      this.player = player;
      this.config = player.config.ads;
      this.playing = false;
      this.initialized = false;
      this.elements = {
        container: null,
        displayContainer: null
      };
      this.manager = null;
      this.loader = null;
      this.cuePoints = null;
      this.events = {};
      this.safetyTimer = null;
      this.countdownTimer = null;
      this.managerPromise = new Promise((resolve, reject) => {
        this.on("loaded", resolve);
        this.on("error", reject);
      });
      this.load();
    }
    get enabled() {
      const { config } = this;
      return this.player.isHTML5 && this.player.isVideo && config.enabled && (!is_default.empty(config.publisherId) || is_default.url(config.tagUrl));
    }
    // Build the tag URL
    get tagUrl() {
      const { config } = this;
      if (is_default.url(config.tagUrl)) {
        return config.tagUrl;
      }
      const params = {
        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
        AV_CHANNELID: "5a0458dc28a06145e4519d21",
        AV_URL: window.location.hostname,
        cb: Date.now(),
        AV_WIDTH: 640,
        AV_HEIGHT: 480,
        AV_CDIM2: config.publisherId
      };
      const base = "https://go.aniview.com/api/adserver6/vast/";
      return "".concat(base, "?").concat(buildUrlParams(params));
    }
  };
  var ads_default = Ads;

  // node_modules/plyr/src/js/utils/numbers.js
  function clamp(input = 0, min = 0, max = 255) {
    return Math.min(Math.max(input, min), max);
  }

  // node_modules/plyr/src/js/plugins/preview-thumbnails.js
  function parseVtt(vttDataString) {
    const processedList = [];
    const frames = vttDataString.split(/\r\n\r\n|\n\n|\r\r/);
    frames.forEach((frame) => {
      const result = {};
      const lines = frame.split(/\r\n|\n|\r/);
      lines.forEach((line) => {
        if (!is_default.number(result.startTime)) {
          const matchTimes = line.match(
            /(\d{2})?:?(\d{2}):(\d{2}).(\d{2,3})( ?--> ?)(\d{2})?:?(\d{2}):(\d{2}).(\d{2,3})/
          );
          if (matchTimes) {
            result.startTime = Number(matchTimes[1] || 0) * 60 * 60 + Number(matchTimes[2]) * 60 + Number(matchTimes[3]) + Number("0.".concat(matchTimes[4]));
            result.endTime = Number(matchTimes[6] || 0) * 60 * 60 + Number(matchTimes[7]) * 60 + Number(matchTimes[8]) + Number("0.".concat(matchTimes[9]));
          }
        } else if (!is_default.empty(line.trim()) && is_default.empty(result.text)) {
          const lineSplit = line.trim().split("#xywh=");
          [result.text] = lineSplit;
          if (lineSplit[1]) {
            [result.x, result.y, result.w, result.h] = lineSplit[1].split(",");
          }
        }
      });
      if (result.text) {
        processedList.push(result);
      }
    });
    return processedList;
  }
  function fitRatio(ratio, outer) {
    const targetRatio = outer.width / outer.height;
    const result = {};
    if (ratio > targetRatio) {
      result.width = outer.width;
      result.height = 1 / ratio * outer.width;
    } else {
      result.height = outer.height;
      result.width = ratio * outer.height;
    }
    return result;
  }
  var PreviewThumbnails = class {
    /**
     * PreviewThumbnails constructor.
     * @param {Plyr} player
     * @return {PreviewThumbnails}
     */
    constructor(player) {
      __publicField(this, "load", () => {
        if (this.player.elements.display.seekTooltip) {
          this.player.elements.display.seekTooltip.hidden = this.enabled;
        }
        if (!this.enabled) return;
        this.getThumbnails().then(() => {
          if (!this.enabled) {
            return;
          }
          this.render();
          this.determineContainerAutoSizing();
          this.listeners();
          this.loaded = true;
        });
      });
      // Download VTT files and parse them
      __publicField(this, "getThumbnails", () => {
        return new Promise((resolve) => {
          const { src } = this.player.config.previewThumbnails;
          if (is_default.empty(src)) {
            throw new Error("Missing previewThumbnails.src config attribute");
          }
          const sortAndResolve = () => {
            this.thumbnails.sort((x, y) => x.height - y.height);
            this.player.debug.log("Preview thumbnails", this.thumbnails);
            resolve();
          };
          if (is_default.function(src)) {
            src((thumbnails) => {
              this.thumbnails = thumbnails;
              sortAndResolve();
            });
          } else {
            const urls = is_default.string(src) ? [src] : src;
            const promises = urls.map((u) => this.getThumbnail(u));
            Promise.all(promises).then(sortAndResolve);
          }
        });
      });
      // Process individual VTT file
      __publicField(this, "getThumbnail", (url) => {
        return new Promise((resolve) => {
          fetch(url, void 0, this.player.config.previewThumbnails.withCredentials).then((response) => {
            const thumbnail = {
              frames: parseVtt(response),
              height: null,
              urlPrefix: ""
            };
            if (!thumbnail.frames[0].text.startsWith("/") && !thumbnail.frames[0].text.startsWith("http://") && !thumbnail.frames[0].text.startsWith("https://")) {
              thumbnail.urlPrefix = url.substring(0, url.lastIndexOf("/") + 1);
            }
            const tempImage = new Image();
            tempImage.onload = () => {
              thumbnail.height = tempImage.naturalHeight;
              thumbnail.width = tempImage.naturalWidth;
              this.thumbnails.push(thumbnail);
              resolve();
            };
            tempImage.src = thumbnail.urlPrefix + thumbnail.frames[0].text;
          });
        });
      });
      __publicField(this, "startMove", (event2) => {
        var _a, _b;
        if (!this.loaded) return;
        if (!is_default.event(event2) || !["touchmove", "mousemove"].includes(event2.type)) return;
        if (!this.player.media.duration) return;
        if (event2.type === "touchmove") {
          this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
        } else {
          const clientRect = this.player.elements.progress.getBoundingClientRect();
          const percentage = 100 / clientRect.width * (event2.pageX - clientRect.left);
          this.seekTime = this.player.media.duration * (percentage / 100);
          if (this.seekTime < 0) {
            this.seekTime = 0;
          }
          if (this.seekTime > this.player.media.duration - 1) {
            this.seekTime = this.player.media.duration - 1;
          }
          this.mousePosX = event2.pageX;
          this.elements.thumb.time.textContent = formatTime(this.seekTime);
          const point = (_b = (_a = this.player.config.markers) == null ? void 0 : _a.points) == null ? void 0 : _b.find(({ time: t }) => t === Math.round(this.seekTime));
          if (point) {
            this.elements.thumb.time.insertAdjacentHTML("afterbegin", "".concat(point.label, "<br>"));
          }
        }
        this.showImageAtCurrentTime();
      });
      __publicField(this, "endMove", () => {
        this.toggleThumbContainer(false, true);
      });
      __publicField(this, "startScrubbing", (event2) => {
        if (is_default.nullOrUndefined(event2.button) || event2.button === false || event2.button === 0) {
          this.mouseDown = true;
          if (this.player.media.duration) {
            this.toggleScrubbingContainer(true);
            this.toggleThumbContainer(false, true);
            this.showImageAtCurrentTime();
          }
        }
      });
      __publicField(this, "endScrubbing", () => {
        this.mouseDown = false;
        if (Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime)) {
          this.toggleScrubbingContainer(false);
        } else {
          once.call(this.player, this.player.media, "timeupdate", () => {
            if (!this.mouseDown) {
              this.toggleScrubbingContainer(false);
            }
          });
        }
      });
      /**
       * Setup hooks for Plyr and window events
       */
      __publicField(this, "listeners", () => {
        this.player.on("play", () => {
          this.toggleThumbContainer(false, true);
        });
        this.player.on("seeked", () => {
          this.toggleThumbContainer(false);
        });
        this.player.on("timeupdate", () => {
          this.lastTime = this.player.media.currentTime;
        });
      });
      /**
       * Create HTML elements for image containers
       */
      __publicField(this, "render", () => {
        this.elements.thumb.container = createElement2("div", {
          class: this.player.config.classNames.previewThumbnails.thumbContainer
        });
        this.elements.thumb.imageContainer = createElement2("div", {
          class: this.player.config.classNames.previewThumbnails.imageContainer
        });
        this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
        const timeContainer = createElement2("div", {
          class: this.player.config.classNames.previewThumbnails.timeContainer
        });
        this.elements.thumb.time = createElement2("span", {}, "00:00");
        timeContainer.appendChild(this.elements.thumb.time);
        this.elements.thumb.imageContainer.appendChild(timeContainer);
        if (is_default.element(this.player.elements.progress)) {
          this.player.elements.progress.appendChild(this.elements.thumb.container);
        }
        this.elements.scrubbing.container = createElement2("div", {
          class: this.player.config.classNames.previewThumbnails.scrubbingContainer
        });
        this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
      });
      __publicField(this, "destroy", () => {
        if (this.elements.thumb.container) {
          this.elements.thumb.container.remove();
        }
        if (this.elements.scrubbing.container) {
          this.elements.scrubbing.container.remove();
        }
      });
      __publicField(this, "showImageAtCurrentTime", () => {
        if (this.mouseDown) {
          this.setScrubbingContainerSize();
        } else {
          this.setThumbContainerSizeAndPos();
        }
        const thumbNum = this.thumbnails[0].frames.findIndex(
          (frame) => this.seekTime >= frame.startTime && this.seekTime <= frame.endTime
        );
        const hasThumb = thumbNum >= 0;
        let qualityIndex = 0;
        if (!this.mouseDown) {
          this.toggleThumbContainer(hasThumb);
        }
        if (!hasThumb) {
          return;
        }
        this.thumbnails.forEach((thumbnail, index) => {
          if (this.loadedImages.includes(thumbnail.frames[thumbNum].text)) {
            qualityIndex = index;
          }
        });
        if (thumbNum !== this.showingThumb) {
          this.showingThumb = thumbNum;
          this.loadImage(qualityIndex);
        }
      });
      // Show the image that's currently specified in this.showingThumb
      __publicField(this, "loadImage", (qualityIndex = 0) => {
        const thumbNum = this.showingThumb;
        const thumbnail = this.thumbnails[qualityIndex];
        const { urlPrefix } = thumbnail;
        const frame = thumbnail.frames[thumbNum];
        const thumbFilename = thumbnail.frames[thumbNum].text;
        const thumbUrl = urlPrefix + thumbFilename;
        if (!this.currentImageElement || this.currentImageElement.dataset.filename !== thumbFilename) {
          if (this.loadingImage && this.usingSprites) {
            this.loadingImage.onload = null;
          }
          const previewImage = new Image();
          previewImage.src = thumbUrl;
          previewImage.dataset.index = thumbNum;
          previewImage.dataset.filename = thumbFilename;
          this.showingThumbFilename = thumbFilename;
          this.player.debug.log("Loading image: ".concat(thumbUrl));
          previewImage.onload = () => this.showImage(previewImage, frame, qualityIndex, thumbNum, thumbFilename, true);
          this.loadingImage = previewImage;
          this.removeOldImages(previewImage);
        } else {
          this.showImage(this.currentImageElement, frame, qualityIndex, thumbNum, thumbFilename, false);
          this.currentImageElement.dataset.index = thumbNum;
          this.removeOldImages(this.currentImageElement);
        }
      });
      __publicField(this, "showImage", (previewImage, frame, qualityIndex, thumbNum, thumbFilename, newImage = true) => {
        this.player.debug.log(
          "Showing thumb: ".concat(thumbFilename, ". num: ").concat(thumbNum, ". qual: ").concat(qualityIndex, ". newimg: ").concat(newImage)
        );
        this.setImageSizeAndOffset(previewImage, frame);
        if (newImage) {
          this.currentImageContainer.appendChild(previewImage);
          this.currentImageElement = previewImage;
          if (!this.loadedImages.includes(thumbFilename)) {
            this.loadedImages.push(thumbFilename);
          }
        }
        this.preloadNearby(thumbNum, true).then(this.preloadNearby(thumbNum, false)).then(this.getHigherQuality(qualityIndex, previewImage, frame, thumbFilename));
      });
      // Remove all preview images that aren't the designated current image
      __publicField(this, "removeOldImages", (currentImage) => {
        Array.from(this.currentImageContainer.children).forEach((image) => {
          if (image.tagName.toLowerCase() !== "img") {
            return;
          }
          const removeDelay = this.usingSprites ? 500 : 1e3;
          if (image.dataset.index !== currentImage.dataset.index && !image.dataset.deleting) {
            image.dataset.deleting = true;
            const { currentImageContainer } = this;
            setTimeout(() => {
              currentImageContainer.removeChild(image);
              this.player.debug.log("Removing thumb: ".concat(image.dataset.filename));
            }, removeDelay);
          }
        });
      });
      // Preload images before and after the current one. Only if the user is still hovering/seeking the same frame
      // This will only preload the lowest quality
      __publicField(this, "preloadNearby", (thumbNum, forward = true) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const oldThumbFilename = this.thumbnails[0].frames[thumbNum].text;
            if (this.showingThumbFilename === oldThumbFilename) {
              let thumbnailsClone;
              if (forward) {
                thumbnailsClone = this.thumbnails[0].frames.slice(thumbNum);
              } else {
                thumbnailsClone = this.thumbnails[0].frames.slice(0, thumbNum).reverse();
              }
              let foundOne = false;
              thumbnailsClone.forEach((frame) => {
                const newThumbFilename = frame.text;
                if (newThumbFilename !== oldThumbFilename) {
                  if (!this.loadedImages.includes(newThumbFilename)) {
                    foundOne = true;
                    this.player.debug.log("Preloading thumb filename: ".concat(newThumbFilename));
                    const { urlPrefix } = this.thumbnails[0];
                    const thumbURL = urlPrefix + newThumbFilename;
                    const previewImage = new Image();
                    previewImage.src = thumbURL;
                    previewImage.onload = () => {
                      this.player.debug.log("Preloaded thumb filename: ".concat(newThumbFilename));
                      if (!this.loadedImages.includes(newThumbFilename)) this.loadedImages.push(newThumbFilename);
                      resolve();
                    };
                  }
                }
              });
              if (!foundOne) {
                resolve();
              }
            }
          }, 300);
        });
      });
      // If user has been hovering current image for half a second, look for a higher quality one
      __publicField(this, "getHigherQuality", (currentQualityIndex, previewImage, frame, thumbFilename) => {
        if (currentQualityIndex < this.thumbnails.length - 1) {
          let previewImageHeight = previewImage.naturalHeight;
          if (this.usingSprites) {
            previewImageHeight = frame.h;
          }
          if (previewImageHeight < this.thumbContainerHeight) {
            setTimeout(() => {
              if (this.showingThumbFilename === thumbFilename) {
                this.player.debug.log("Showing higher quality thumb for: ".concat(thumbFilename));
                this.loadImage(currentQualityIndex + 1);
              }
            }, 300);
          }
        }
      });
      __publicField(this, "toggleThumbContainer", (toggle = false, clearShowing = false) => {
        const className = this.player.config.classNames.previewThumbnails.thumbContainerShown;
        this.elements.thumb.container.classList.toggle(className, toggle);
        if (!toggle && clearShowing) {
          this.showingThumb = null;
          this.showingThumbFilename = null;
        }
      });
      __publicField(this, "toggleScrubbingContainer", (toggle = false) => {
        const className = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
        this.elements.scrubbing.container.classList.toggle(className, toggle);
        if (!toggle) {
          this.showingThumb = null;
          this.showingThumbFilename = null;
        }
      });
      __publicField(this, "determineContainerAutoSizing", () => {
        if (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) {
          this.sizeSpecifiedInCSS = true;
        }
      });
      // Set the size to be about a quarter of the size of video. Unless option dynamicSize === false, in which case it needs to be set in CSS
      __publicField(this, "setThumbContainerSizeAndPos", () => {
        const { imageContainer } = this.elements.thumb;
        if (!this.sizeSpecifiedInCSS) {
          const thumbWidth = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
          imageContainer.style.height = "".concat(this.thumbContainerHeight, "px");
          imageContainer.style.width = "".concat(thumbWidth, "px");
        } else if (imageContainer.clientHeight > 20 && imageContainer.clientWidth < 20) {
          const thumbWidth = Math.floor(imageContainer.clientHeight * this.thumbAspectRatio);
          imageContainer.style.width = "".concat(thumbWidth, "px");
        } else if (imageContainer.clientHeight < 20 && imageContainer.clientWidth > 20) {
          const thumbHeight = Math.floor(imageContainer.clientWidth / this.thumbAspectRatio);
          imageContainer.style.height = "".concat(thumbHeight, "px");
        }
        this.setThumbContainerPos();
      });
      __publicField(this, "setThumbContainerPos", () => {
        const scrubberRect = this.player.elements.progress.getBoundingClientRect();
        const containerRect = this.player.elements.container.getBoundingClientRect();
        const { container } = this.elements.thumb;
        const min = containerRect.left - scrubberRect.left + 10;
        const max = containerRect.right - scrubberRect.left - container.clientWidth - 10;
        const position = this.mousePosX - scrubberRect.left - container.clientWidth / 2;
        const clamped = clamp(position, min, max);
        container.style.left = "".concat(clamped, "px");
        container.style.setProperty("--preview-arrow-offset", "".concat(position - clamped, "px"));
      });
      // Can't use 100% width, in case the video is a different aspect ratio to the video container
      __publicField(this, "setScrubbingContainerSize", () => {
        const { width, height } = fitRatio(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        });
        this.elements.scrubbing.container.style.width = "".concat(width, "px");
        this.elements.scrubbing.container.style.height = "".concat(height, "px");
      });
      // Sprites need to be offset to the correct location
      __publicField(this, "setImageSizeAndOffset", (previewImage, frame) => {
        if (!this.usingSprites) return;
        const multiplier = this.thumbContainerHeight / frame.h;
        previewImage.style.height = "".concat(previewImage.naturalHeight * multiplier, "px");
        previewImage.style.width = "".concat(previewImage.naturalWidth * multiplier, "px");
        previewImage.style.left = "-".concat(frame.x * multiplier, "px");
        previewImage.style.top = "-".concat(frame.y * multiplier, "px");
      });
      this.player = player;
      this.thumbnails = [];
      this.loaded = false;
      this.lastMouseMoveTime = Date.now();
      this.mouseDown = false;
      this.loadedImages = [];
      this.elements = {
        thumb: {},
        scrubbing: {}
      };
      this.load();
    }
    get enabled() {
      return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
    }
    get currentImageContainer() {
      return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
    }
    get usingSprites() {
      return Object.keys(this.thumbnails[0].frames[0]).includes("w");
    }
    get thumbAspectRatio() {
      if (this.usingSprites) {
        return this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h;
      }
      return this.thumbnails[0].width / this.thumbnails[0].height;
    }
    get thumbContainerHeight() {
      if (this.mouseDown) {
        const { height } = fitRatio(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        });
        return height;
      }
      if (this.sizeSpecifiedInCSS) {
        return this.elements.thumb.imageContainer.clientHeight;
      }
      return Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
    }
    get currentImageElement() {
      return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
    }
    set currentImageElement(element) {
      if (this.mouseDown) {
        this.currentScrubbingImageElement = element;
      } else {
        this.currentThumbnailImageElement = element;
      }
    }
  };
  var preview_thumbnails_default = PreviewThumbnails;

  // node_modules/plyr/src/js/source.js
  var source = {
    // Add elements to HTML5 media (source, tracks, etc)
    insertElements(type, attributes) {
      if (is_default.string(attributes)) {
        insertElement(type, this.media, {
          src: attributes
        });
      } else if (is_default.array(attributes)) {
        attributes.forEach((attribute) => {
          insertElement(type, this.media, attribute);
        });
      }
    },
    // Update source
    // Sources are not checked for support so be careful
    change(input) {
      if (!getDeep(input, "sources.length")) {
        this.debug.warn("Invalid source format");
        return;
      }
      html5_default.cancelRequests.call(this);
      this.destroy(() => {
        this.options.quality = [];
        removeElement2(this.media);
        this.media = null;
        if (is_default.element(this.elements.container)) {
          this.elements.container.removeAttribute("class");
        }
        const { sources, type } = input;
        const [{ provider = providers.html5, src }] = sources;
        const tagName = provider === "html5" ? type : "div";
        const attributes = provider === "html5" ? {} : { src };
        Object.assign(this, {
          provider,
          type,
          // Check for support
          supported: support_default.check(type, provider, this.config.playsinline),
          // Create new element
          media: createElement2(tagName, attributes)
        });
        this.elements.container.appendChild(this.media);
        if (is_default.boolean(input.autoplay)) {
          this.config.autoplay = input.autoplay;
        }
        if (this.isHTML5) {
          if (this.config.crossorigin) {
            this.media.setAttribute("crossorigin", "");
          }
          if (this.config.autoplay) {
            this.media.setAttribute("autoplay", "");
          }
          if (!is_default.empty(input.poster)) {
            this.poster = input.poster;
          }
          if (this.config.loop.active) {
            this.media.setAttribute("loop", "");
          }
          if (this.config.muted) {
            this.media.setAttribute("muted", "");
          }
          if (this.config.playsinline) {
            this.media.setAttribute("playsinline", "");
          }
        }
        ui_default.addStyleHook.call(this);
        if (this.isHTML5) {
          source.insertElements.call(this, "source", sources);
        }
        this.config.title = input.title;
        media_default.setup.call(this);
        if (this.isHTML5) {
          if (Object.keys(input).includes("tracks")) {
            source.insertElements.call(this, "track", input.tracks);
          }
        }
        if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
          ui_default.build.call(this);
        }
        if (this.isHTML5) {
          this.media.load();
        }
        if (!is_default.empty(input.previewThumbnails)) {
          Object.assign(this.config.previewThumbnails, input.previewThumbnails);
          if (this.previewThumbnails && this.previewThumbnails.loaded) {
            this.previewThumbnails.destroy();
            this.previewThumbnails = null;
          }
          if (this.config.previewThumbnails.enabled) {
            this.previewThumbnails = new preview_thumbnails_default(this);
          }
        }
        this.fullscreen.update();
      }, true);
    }
  };
  var source_default = source;

  // node_modules/plyr/src/js/plyr.js
  var Plyr = class _Plyr {
    constructor(target, options) {
      /**
       * Play the media, or play the advertisement (if they are not blocked)
       */
      __publicField(this, "play", () => {
        if (!is_default.function(this.media.play)) {
          return null;
        }
        if (this.ads && this.ads.enabled) {
          this.ads.managerPromise.then(() => this.ads.play()).catch(() => silencePromise(this.media.play()));
        }
        return this.media.play();
      });
      /**
       * Pause the media
       */
      __publicField(this, "pause", () => {
        if (!this.playing || !is_default.function(this.media.pause)) {
          return null;
        }
        return this.media.pause();
      });
      /**
       * Toggle playback based on current status
       * @param {boolean} input
       */
      __publicField(this, "togglePlay", (input) => {
        const toggle = is_default.boolean(input) ? input : !this.playing;
        if (toggle) {
          return this.play();
        }
        return this.pause();
      });
      /**
       * Stop playback
       */
      __publicField(this, "stop", () => {
        if (this.isHTML5) {
          this.pause();
          this.restart();
        } else if (is_default.function(this.media.stop)) {
          this.media.stop();
        }
      });
      /**
       * Restart playback
       */
      __publicField(this, "restart", () => {
        this.currentTime = 0;
      });
      /**
       * Rewind
       * @param {number} seekTime - how far to rewind in seconds. Defaults to the config.seekTime
       */
      __publicField(this, "rewind", (seekTime) => {
        this.currentTime -= is_default.number(seekTime) ? seekTime : this.config.seekTime;
      });
      /**
       * Fast forward
       * @param {number} seekTime - how far to fast forward in seconds. Defaults to the config.seekTime
       */
      __publicField(this, "forward", (seekTime) => {
        this.currentTime += is_default.number(seekTime) ? seekTime : this.config.seekTime;
      });
      /**
       * Increase volume
       * @param {boolean} step - How much to decrease by (between 0 and 1)
       */
      __publicField(this, "increaseVolume", (step) => {
        const volume = this.media.muted ? 0 : this.volume;
        this.volume = volume + (is_default.number(step) ? step : 0);
      });
      /**
       * Decrease volume
       * @param {boolean} step - How much to decrease by (between 0 and 1)
       */
      __publicField(this, "decreaseVolume", (step) => {
        this.increaseVolume(-step);
      });
      /**
       * Trigger the airplay dialog
       * TODO: update player with state, support, enabled
       */
      __publicField(this, "airplay", () => {
        if (support_default.airplay) {
          this.media.webkitShowPlaybackTargetPicker();
        }
      });
      /**
       * Toggle the player controls
       * @param {boolean} [toggle] - Whether to show the controls
       */
      __publicField(this, "toggleControls", (toggle) => {
        if (this.supported.ui && !this.isAudio) {
          const isHidden = hasClass(this.elements.container, this.config.classNames.hideControls);
          const force = typeof toggle === "undefined" ? void 0 : !toggle;
          const hiding = toggleClass(this.elements.container, this.config.classNames.hideControls, force);
          if (hiding && is_default.array(this.config.controls) && this.config.controls.includes("settings") && !is_default.empty(this.config.settings)) {
            controls_default.toggleMenu.call(this, false);
          }
          if (hiding !== isHidden) {
            const eventName = hiding ? "controlshidden" : "controlsshown";
            triggerEvent2.call(this, this.media, eventName);
          }
          return !hiding;
        }
        return false;
      });
      /**
       * Add event listeners
       * @param {string} event - Event type
       * @param {Function} callback - Callback for when event occurs
       */
      __publicField(this, "on", (event2, callback) => {
        on.call(this, this.elements.container, event2, callback);
      });
      /**
       * Add event listeners once
       * @param {string} event - Event type
       * @param {Function} callback - Callback for when event occurs
       */
      __publicField(this, "once", (event2, callback) => {
        once.call(this, this.elements.container, event2, callback);
      });
      /**
       * Remove event listeners
       * @param {string} event - Event type
       * @param {Function} callback - Callback for when event occurs
       */
      __publicField(this, "off", (event2, callback) => {
        off(this.elements.container, event2, callback);
      });
      /**
       * Destroy an instance
       * Event listeners are removed when elements are removed
       * http://stackoverflow.com/questions/12528049/if-a-dom-element-is-removed-are-its-listeners-also-removed-from-memory
       * @param {Function} callback - Callback for when destroy is complete
       * @param {boolean} soft - Whether it's a soft destroy (for source changes etc)
       */
      __publicField(this, "destroy", (callback, soft = false) => {
        if (!this.ready) {
          return;
        }
        const done = () => {
          document.body.style.overflow = "";
          this.embed = null;
          if (soft) {
            if (Object.keys(this.elements).length) {
              removeElement2(this.elements.buttons.play);
              removeElement2(this.elements.captions);
              removeElement2(this.elements.controls);
              removeElement2(this.elements.wrapper);
              this.elements.buttons.play = null;
              this.elements.captions = null;
              this.elements.controls = null;
              this.elements.wrapper = null;
            }
            if (is_default.function(callback)) {
              callback();
            }
          } else {
            unbindListeners.call(this);
            html5_default.cancelRequests.call(this);
            replaceElement(this.elements.original, this.elements.container);
            triggerEvent2.call(this, this.elements.original, "destroyed", true);
            if (is_default.function(callback)) {
              callback.call(this.elements.original);
            }
            this.ready = false;
            setTimeout(() => {
              this.elements = null;
              this.media = null;
            }, 200);
          }
        };
        this.stop();
        clearTimeout(this.timers.loading);
        clearTimeout(this.timers.controls);
        clearTimeout(this.timers.resized);
        if (this.isHTML5) {
          ui_default.toggleNativeControls.call(this, true);
          done();
        } else if (this.isYouTube) {
          clearInterval(this.timers.buffering);
          clearInterval(this.timers.playing);
          if (this.embed !== null && is_default.function(this.embed.destroy)) {
            this.embed.destroy();
          }
          done();
        } else if (this.isVimeo) {
          if (this.embed !== null) {
            this.embed.unload().then(done);
          }
          setTimeout(done, 200);
        }
      });
      /**
       * Check for support for a mime type (HTML5 only)
       * @param {string} type - Mime type
       */
      __publicField(this, "supports", (type) => support_default.mime.call(this, type));
      this.timers = {};
      this.ready = false;
      this.loading = false;
      this.failed = false;
      this.touch = support_default.touch;
      this.media = target;
      if (is_default.string(this.media)) {
        this.media = document.querySelectorAll(this.media);
      }
      if (window.jQuery && this.media instanceof jQuery || is_default.nodeList(this.media) || is_default.array(this.media)) {
        this.media = this.media[0];
      }
      this.config = extend4(
        {},
        defaults_default,
        _Plyr.defaults,
        options || {},
        (() => {
          try {
            return JSON.parse(this.media.getAttribute("data-plyr-config"));
          } catch (e) {
            return {};
          }
        })()
      );
      this.elements = {
        container: null,
        fullscreen: null,
        captions: null,
        buttons: {},
        display: {},
        progress: {},
        inputs: {},
        settings: {
          popup: null,
          menu: null,
          panels: {},
          buttons: {}
        }
      };
      this.captions = {
        active: null,
        currentTrack: -1,
        meta: /* @__PURE__ */ new WeakMap()
      };
      this.fullscreen = {
        active: false
      };
      this.options = {
        speed: [],
        quality: []
      };
      this.debug = new Console(this.config.debug);
      this.debug.log("Config", this.config);
      this.debug.log("Support", support_default);
      if (is_default.nullOrUndefined(this.media) || !is_default.element(this.media)) {
        this.debug.error("Setup failed: no suitable element passed");
        return;
      }
      if (this.media.plyr) {
        this.debug.warn("Target already setup");
        return;
      }
      if (!this.config.enabled) {
        this.debug.error("Setup failed: disabled by config");
        return;
      }
      if (!support_default.check().api) {
        this.debug.error("Setup failed: no support");
        return;
      }
      const clone = this.media.cloneNode(true);
      clone.autoplay = false;
      this.elements.original = clone;
      const type = this.media.tagName.toLowerCase();
      let iframe = null;
      let url = null;
      switch (type) {
        case "div":
          iframe = this.media.querySelector("iframe");
          if (is_default.element(iframe)) {
            url = parseUrl(iframe.getAttribute("src"));
            this.provider = getProviderByUrl(url.toString());
            this.elements.container = this.media;
            this.media = iframe;
            this.elements.container.className = "";
            if (url.search.length) {
              const truthy = ["1", "true"];
              if (truthy.includes(url.searchParams.get("autoplay"))) {
                this.config.autoplay = true;
              }
              if (truthy.includes(url.searchParams.get("loop"))) {
                this.config.loop.active = true;
              }
              if (this.isYouTube) {
                this.config.playsinline = truthy.includes(url.searchParams.get("playsinline"));
                this.config.youtube.hl = url.searchParams.get("hl");
              } else {
                this.config.playsinline = true;
              }
            }
          } else {
            this.provider = this.media.getAttribute(this.config.attributes.embed.provider);
            this.media.removeAttribute(this.config.attributes.embed.provider);
          }
          if (is_default.empty(this.provider) || !Object.values(providers).includes(this.provider)) {
            this.debug.error("Setup failed: Invalid provider");
            return;
          }
          this.type = types.video;
          break;
        case "video":
        case "audio":
          this.type = type;
          this.provider = providers.html5;
          if (this.media.hasAttribute("crossorigin")) {
            this.config.crossorigin = true;
          }
          if (this.media.hasAttribute("autoplay")) {
            this.config.autoplay = true;
          }
          if (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) {
            this.config.playsinline = true;
          }
          if (this.media.hasAttribute("muted")) {
            this.config.muted = true;
          }
          if (this.media.hasAttribute("loop")) {
            this.config.loop.active = true;
          }
          break;
        default:
          this.debug.error("Setup failed: unsupported type");
          return;
      }
      this.supported = support_default.check(this.type, this.provider);
      if (!this.supported.api) {
        this.debug.error("Setup failed: no support");
        return;
      }
      this.eventListeners = [];
      this.listeners = new listeners_default(this);
      this.storage = new storage_default(this);
      this.media.plyr = this;
      if (!is_default.element(this.elements.container)) {
        this.elements.container = createElement2("div");
        wrap(this.media, this.elements.container);
      }
      ui_default.migrateStyles.call(this);
      ui_default.addStyleHook.call(this);
      media_default.setup.call(this);
      if (this.config.debug) {
        on.call(this, this.elements.container, this.config.events.join(" "), (event2) => {
          this.debug.log("event: ".concat(event2.type));
        });
      }
      this.fullscreen = new fullscreen_default(this);
      if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
        ui_default.build.call(this);
      }
      this.listeners.container();
      this.listeners.global();
      if (this.config.ads.enabled) {
        this.ads = new ads_default(this);
      }
      if (this.isHTML5 && this.config.autoplay) {
        this.once("canplay", () => silencePromise(this.play()));
      }
      this.lastSeekTime = 0;
      if (this.config.previewThumbnails.enabled) {
        this.previewThumbnails = new preview_thumbnails_default(this);
      }
    }
    // ---------------------------------------
    // API
    // ---------------------------------------
    /**
     * Types and provider helpers
     */
    get isHTML5() {
      return this.provider === providers.html5;
    }
    get isEmbed() {
      return this.isYouTube || this.isVimeo;
    }
    get isYouTube() {
      return this.provider === providers.youtube;
    }
    get isVimeo() {
      return this.provider === providers.vimeo;
    }
    get isVideo() {
      return this.type === types.video;
    }
    get isAudio() {
      return this.type === types.audio;
    }
    /**
     * Get playing state
     */
    get playing() {
      return Boolean(this.ready && !this.paused && !this.ended);
    }
    /**
     * Get paused state
     */
    get paused() {
      return Boolean(this.media.paused);
    }
    /**
     * Get stopped state
     */
    get stopped() {
      return Boolean(this.paused && this.currentTime === 0);
    }
    /**
     * Get ended state
     */
    get ended() {
      return Boolean(this.media.ended);
    }
    /**
     * Seek to a time
     * @param {number} input - where to seek to in seconds. Defaults to 0 (the start)
     */
    set currentTime(input) {
      if (!this.duration) {
        return;
      }
      const inputIsValid = is_default.number(input) && input > 0;
      this.media.currentTime = inputIsValid ? Math.min(input, this.duration) : 0;
      this.debug.log("Seeking to ".concat(this.currentTime, " seconds"));
    }
    /**
     * Get current time
     */
    get currentTime() {
      return Number(this.media.currentTime);
    }
    /**
     * Get buffered
     */
    get buffered() {
      const { buffered } = this.media;
      if (is_default.number(buffered)) {
        return buffered;
      }
      if (buffered && buffered.length && this.duration > 0) {
        return buffered.end(0) / this.duration;
      }
      return 0;
    }
    /**
     * Get seeking status
     */
    get seeking() {
      return Boolean(this.media.seeking);
    }
    /**
     * Get the duration of the current media
     */
    get duration() {
      const fauxDuration = Number.parseFloat(this.config.duration);
      const realDuration = (this.media || {}).duration;
      const duration = !is_default.number(realDuration) || realDuration === Infinity ? 0 : realDuration;
      return fauxDuration || duration;
    }
    /**
     * Set the player volume
     * @param {number} value - must be between 0 and 1. Defaults to the value from local storage and config.volume if not set in storage
     */
    set volume(value) {
      let volume = value;
      const max = 1;
      const min = 0;
      if (is_default.string(volume)) {
        volume = Number(volume);
      }
      if (!is_default.number(volume)) {
        volume = this.storage.get("volume");
      }
      if (!is_default.number(volume)) {
        ({ volume } = this.config);
      }
      if (volume > max) {
        volume = max;
      }
      if (volume < min) {
        volume = min;
      }
      this.config.volume = volume;
      this.media.volume = volume;
      if (!is_default.empty(value) && this.muted && volume > 0) {
        this.muted = false;
      }
    }
    /**
     * Get the current player volume
     */
    get volume() {
      return Number(this.media.volume);
    }
    /**
     * Set muted state
     * @param {boolean} mute
     */
    set muted(mute) {
      let toggle = mute;
      if (!is_default.boolean(toggle)) {
        toggle = this.storage.get("muted");
      }
      if (!is_default.boolean(toggle)) {
        toggle = this.config.muted;
      }
      this.config.muted = toggle;
      this.media.muted = toggle;
    }
    /**
     * Get current muted state
     */
    get muted() {
      return Boolean(this.media.muted);
    }
    /**
     * Check if the media has audio
     */
    get hasAudio() {
      if (!this.isHTML5) {
        return true;
      }
      if (this.isAudio) {
        return true;
      }
      return Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
    }
    /**
     * Set playback speed
     * @param {number} input - the speed of playback (0.5-2.0)
     */
    set speed(input) {
      let speed = null;
      if (is_default.number(input)) {
        speed = input;
      }
      if (!is_default.number(speed)) {
        speed = this.storage.get("speed");
      }
      if (!is_default.number(speed)) {
        speed = this.config.speed.selected;
      }
      const { minimumSpeed: min, maximumSpeed: max } = this;
      speed = clamp(speed, min, max);
      this.config.speed.selected = speed;
      setTimeout(() => {
        if (this.media) {
          this.media.playbackRate = speed;
        }
      }, 0);
    }
    /**
     * Get current playback speed
     */
    get speed() {
      return Number(this.media.playbackRate);
    }
    /**
     * Get the minimum allowed speed
     */
    get minimumSpeed() {
      if (this.isYouTube) {
        return Math.min(...this.options.speed);
      }
      if (this.isVimeo) {
        return 0.5;
      }
      return 0.0625;
    }
    /**
     * Get the maximum allowed speed
     */
    get maximumSpeed() {
      if (this.isYouTube) {
        return Math.max(...this.options.speed);
      }
      if (this.isVimeo) {
        return 2;
      }
      return 16;
    }
    /**
     * Set playback quality
     * Currently HTML5 & YouTube only
     * @param {number} input - Quality level
     */
    set quality(input) {
      const config = this.config.quality;
      const options = this.options.quality;
      if (!options.length) {
        return;
      }
      let quality = [
        !is_default.empty(input) && Number(input),
        this.storage.get("quality"),
        config.selected,
        config.default
      ].find(is_default.number);
      let updateStorage = true;
      if (!options.includes(quality)) {
        const value = closest3(options, quality);
        this.debug.warn("Unsupported quality option: ".concat(quality, ", using ").concat(value, " instead"));
        quality = value;
        updateStorage = false;
      }
      config.selected = quality;
      this.media.quality = quality;
      if (updateStorage) {
        this.storage.set({ quality });
      }
    }
    /**
     * Get current quality level
     */
    get quality() {
      return this.media.quality;
    }
    /**
     * Toggle loop
     * TODO: Finish fancy new logic. Set the indicator on load as user may pass loop as config
     * @param {boolean} input - Whether to loop or not
     */
    set loop(input) {
      const toggle = is_default.boolean(input) ? input : this.config.loop.active;
      this.config.loop.active = toggle;
      this.media.loop = toggle;
    }
    /**
     * Get current loop state
     */
    get loop() {
      return Boolean(this.media.loop);
    }
    /**
     * Set new media source
     * @param {object} input - The new source object (see docs)
     */
    set source(input) {
      source_default.change.call(this, input);
    }
    /**
     * Get current source
     */
    get source() {
      return this.media.currentSrc;
    }
    /**
     * Get a download URL (either source or custom)
     */
    get download() {
      const { download } = this.config.urls;
      return is_default.url(download) ? download : this.source;
    }
    /**
     * Set the download URL
     */
    set download(input) {
      if (!is_default.url(input)) {
        return;
      }
      this.config.urls.download = input;
      controls_default.setDownloadUrl.call(this);
    }
    /**
     * Set the poster image for a video
     * @param {string} input - the URL for the new poster image
     */
    set poster(input) {
      if (!this.isVideo) {
        this.debug.warn("Poster can only be set for video");
        return;
      }
      ui_default.setPoster.call(this, input, false).catch(() => {
      });
    }
    /**
     * Get the current poster image
     */
    get poster() {
      if (!this.isVideo) {
        return null;
      }
      return this.media.getAttribute("poster") || this.media.getAttribute("data-poster");
    }
    /**
     * Get the current aspect ratio in use
     */
    get ratio() {
      if (!this.isVideo) {
        return null;
      }
      const ratio = reduceAspectRatio(getAspectRatio.call(this));
      return is_default.array(ratio) ? ratio.join(":") : ratio;
    }
    /**
     * Set video aspect ratio
     */
    set ratio(input) {
      if (!this.isVideo) {
        this.debug.warn("Aspect ratio can only be set for video");
        return;
      }
      if (!is_default.string(input) || !validateAspectRatio(input)) {
        this.debug.error("Invalid aspect ratio specified (".concat(input, ")"));
        return;
      }
      this.config.ratio = reduceAspectRatio(input);
      setAspectRatio.call(this);
    }
    /**
     * Set the autoplay state
     * @param {boolean} input - Whether to autoplay or not
     */
    set autoplay(input) {
      this.config.autoplay = is_default.boolean(input) ? input : this.config.autoplay;
    }
    /**
     * Get the current autoplay state
     */
    get autoplay() {
      return Boolean(this.config.autoplay);
    }
    /**
     * Toggle captions
     * @param {boolean} input - Whether to enable captions
     */
    toggleCaptions(input) {
      captions_default.toggle.call(this, input, false);
    }
    /**
     * Set the caption track by index
     * @param {number} input - Caption index
     */
    set currentTrack(input) {
      captions_default.set.call(this, input, false);
      captions_default.setup.call(this);
    }
    /**
     * Get the current caption track index (-1 if disabled)
     */
    get currentTrack() {
      const { toggled, currentTrack } = this.captions;
      return toggled ? currentTrack : -1;
    }
    /**
     * Set the wanted language for captions
     * Since tracks can be added later it won't update the actual caption track until there is a matching track
     * @param {string} input - Two character ISO language code (e.g. EN, FR, PT, etc)
     */
    set language(input) {
      captions_default.setLanguage.call(this, input, false);
    }
    /**
     * Get the current track's language
     */
    get language() {
      return (captions_default.getCurrentTrack.call(this) || {}).language;
    }
    /**
     * Toggle picture-in-picture playback on WebKit/MacOS
     * TODO: update player with state, support, enabled
     * TODO: detect outside changes
     */
    set pip(input) {
      if (!support_default.pip) {
        return;
      }
      const toggle = is_default.boolean(input) ? input : !this.pip;
      if (is_default.function(this.media.webkitSetPresentationMode)) {
        this.media.webkitSetPresentationMode(toggle ? pip.active : pip.inactive);
      }
      if (is_default.function(this.media.requestPictureInPicture)) {
        if (!this.pip && toggle) {
          this.media.requestPictureInPicture();
        } else if (this.pip && !toggle) {
          document.exitPictureInPicture();
        }
      }
    }
    /**
     * Get the current picture-in-picture state
     */
    get pip() {
      if (!support_default.pip) {
        return null;
      }
      if (!is_default.empty(this.media.webkitPresentationMode)) {
        return this.media.webkitPresentationMode === pip.active;
      }
      return this.media === document.pictureInPictureElement;
    }
    /**
     * Sets the preview thumbnails for the current source
     */
    setPreviewThumbnails(thumbnailSource) {
      if (this.previewThumbnails && this.previewThumbnails.loaded) {
        this.previewThumbnails.destroy();
        this.previewThumbnails = null;
      }
      Object.assign(this.config.previewThumbnails, thumbnailSource);
      if (this.config.previewThumbnails.enabled) {
        this.previewThumbnails = new preview_thumbnails_default(this);
      }
    }
    /**
     * Check for support
     * @param {string} type - Player type (audio/video)
     * @param {string} provider - Provider (html5/youtube/vimeo)
     */
    static supported(type, provider) {
      return support_default.check(type, provider);
    }
    /**
     * Load an SVG sprite into the page
     * @param {string} url - URL for the SVG sprite
     * @param {string} [id] - Unique ID
     */
    static loadSprite(url, id) {
      return loadSprite(url, id);
    }
    /**
     * Setup multiple instances
     * @param {*} selector
     * @param {object} options
     */
    static setup(selector, options = {}) {
      let targets = null;
      if (is_default.string(selector)) {
        targets = Array.from(document.querySelectorAll(selector));
      } else if (is_default.nodeList(selector)) {
        targets = Array.from(selector);
      } else if (is_default.array(selector)) {
        targets = selector.filter(is_default.element);
      }
      if (is_default.empty(targets)) {
        return null;
      }
      return targets.map((t) => new _Plyr(t, options));
    }
  };
  Plyr.defaults = cloneDeep(defaults_default);
  var plyr_default = Plyr;

  // assets/js/modules/plyr.js
  function ThemePlyr() {
    const plyrs = document.querySelectorAll(".video-plyr");
    plyrs.forEach((plyr) => {
      const player = new plyr_default(plyr);
    });
  }

  // node_modules/photoswipe/dist/photoswipe-lightbox.esm.js
  function createElement3(className, tagName, appendToEl) {
    const el = document.createElement(tagName);
    if (className) {
      el.className = className;
    }
    if (appendToEl) {
      appendToEl.appendChild(el);
    }
    return el;
  }
  function toTransformString(x, y, scale) {
    let propValue = "translate3d(".concat(x, "px,").concat(y || 0, "px,0)");
    if (scale !== void 0) {
      propValue += " scale3d(".concat(scale, ",").concat(scale, ",1)");
    }
    return propValue;
  }
  function setWidthHeight(el, w, h) {
    el.style.width = typeof w === "number" ? "".concat(w, "px") : w;
    el.style.height = typeof h === "number" ? "".concat(h, "px") : h;
  }
  var LOAD_STATE = {
    IDLE: "idle",
    LOADING: "loading",
    LOADED: "loaded",
    ERROR: "error"
  };
  function specialKeyUsed(e) {
    return "button" in e && e.button === 1 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey;
  }
  function getElementsFromOption(option, legacySelector, parent = document) {
    let elements = [];
    if (option instanceof Element) {
      elements = [option];
    } else if (option instanceof NodeList || Array.isArray(option)) {
      elements = Array.from(option);
    } else {
      const selector = typeof option === "string" ? option : legacySelector;
      if (selector) {
        elements = Array.from(parent.querySelectorAll(selector));
      }
    }
    return elements;
  }
  function isPswpClass(fn) {
    return typeof fn === "function" && fn.prototype && fn.prototype.goTo;
  }
  function isSafari() {
    return !!(navigator.vendor && navigator.vendor.match(/apple/i));
  }
  var PhotoSwipeEvent = class {
    /**
     * @param {T} type
     * @param {PhotoSwipeEventsMap[T]} [details]
     */
    constructor(type, details) {
      this.type = type;
      this.defaultPrevented = false;
      if (details) {
        Object.assign(this, details);
      }
    }
    preventDefault() {
      this.defaultPrevented = true;
    }
  };
  var Eventable = class {
    constructor() {
      this._listeners = {};
      this._filters = {};
      this.pswp = void 0;
      this.options = void 0;
    }
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {PhotoSwipeFiltersMap[T]} fn
     * @param {number} priority
     */
    addFilter(name, fn, priority = 100) {
      var _this$_filters$name, _this$_filters$name2, _this$pswp;
      if (!this._filters[name]) {
        this._filters[name] = [];
      }
      (_this$_filters$name = this._filters[name]) === null || _this$_filters$name === void 0 || _this$_filters$name.push({
        fn,
        priority
      });
      (_this$_filters$name2 = this._filters[name]) === null || _this$_filters$name2 === void 0 || _this$_filters$name2.sort((f1, f2) => f1.priority - f2.priority);
      (_this$pswp = this.pswp) === null || _this$pswp === void 0 || _this$pswp.addFilter(name, fn, priority);
    }
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {PhotoSwipeFiltersMap[T]} fn
     */
    removeFilter(name, fn) {
      if (this._filters[name]) {
        this._filters[name] = this._filters[name].filter((filter) => filter.fn !== fn);
      }
      if (this.pswp) {
        this.pswp.removeFilter(name, fn);
      }
    }
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
     * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
     */
    applyFilters(name, ...args) {
      var _this$_filters$name3;
      (_this$_filters$name3 = this._filters[name]) === null || _this$_filters$name3 === void 0 || _this$_filters$name3.forEach((filter) => {
        args[0] = filter.fn.apply(this, args);
      });
      return args[0];
    }
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {EventCallback<T>} fn
     */
    on(name, fn) {
      var _this$_listeners$name, _this$pswp2;
      if (!this._listeners[name]) {
        this._listeners[name] = [];
      }
      (_this$_listeners$name = this._listeners[name]) === null || _this$_listeners$name === void 0 || _this$_listeners$name.push(fn);
      (_this$pswp2 = this.pswp) === null || _this$pswp2 === void 0 || _this$pswp2.on(name, fn);
    }
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {EventCallback<T>} fn
     */
    off(name, fn) {
      var _this$pswp3;
      if (this._listeners[name]) {
        this._listeners[name] = this._listeners[name].filter((listener) => fn !== listener);
      }
      (_this$pswp3 = this.pswp) === null || _this$pswp3 === void 0 || _this$pswp3.off(name, fn);
    }
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {PhotoSwipeEventsMap[T]} [details]
     * @returns {AugmentedEvent<T>}
     */
    dispatch(name, details) {
      var _this$_listeners$name2;
      if (this.pswp) {
        return this.pswp.dispatch(name, details);
      }
      const event2 = (
        /** @type {AugmentedEvent<T>} */
        new PhotoSwipeEvent(name, details)
      );
      (_this$_listeners$name2 = this._listeners[name]) === null || _this$_listeners$name2 === void 0 || _this$_listeners$name2.forEach((listener) => {
        listener.call(this, event2);
      });
      return event2;
    }
  };
  var Placeholder = class {
    /**
     * @param {string | false} imageSrc
     * @param {HTMLElement} container
     */
    constructor(imageSrc, container) {
      this.element = createElement3("pswp__img pswp__img--placeholder", imageSrc ? "img" : "div", container);
      if (imageSrc) {
        const imgEl = (
          /** @type {HTMLImageElement} */
          this.element
        );
        imgEl.decoding = "async";
        imgEl.alt = "";
        imgEl.src = imageSrc;
        imgEl.setAttribute("role", "presentation");
      }
      this.element.setAttribute("aria-hidden", "true");
    }
    /**
     * @param {number} width
     * @param {number} height
     */
    setDisplayedSize(width, height) {
      if (!this.element) {
        return;
      }
      if (this.element.tagName === "IMG") {
        setWidthHeight(this.element, 250, "auto");
        this.element.style.transformOrigin = "0 0";
        this.element.style.transform = toTransformString(0, 0, width / 250);
      } else {
        setWidthHeight(this.element, width, height);
      }
    }
    destroy() {
      var _this$element;
      if ((_this$element = this.element) !== null && _this$element !== void 0 && _this$element.parentNode) {
        this.element.remove();
      }
      this.element = null;
    }
  };
  var Content = class {
    /**
     * @param {SlideData} itemData Slide data
     * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
     * @param {number} index
     */
    constructor(itemData, instance, index) {
      this.instance = instance;
      this.data = itemData;
      this.index = index;
      this.element = void 0;
      this.placeholder = void 0;
      this.slide = void 0;
      this.displayedImageWidth = 0;
      this.displayedImageHeight = 0;
      this.width = Number(this.data.w) || Number(this.data.width) || 0;
      this.height = Number(this.data.h) || Number(this.data.height) || 0;
      this.isAttached = false;
      this.hasSlide = false;
      this.isDecoding = false;
      this.state = LOAD_STATE.IDLE;
      if (this.data.type) {
        this.type = this.data.type;
      } else if (this.data.src) {
        this.type = "image";
      } else {
        this.type = "html";
      }
      this.instance.dispatch("contentInit", {
        content: this
      });
    }
    removePlaceholder() {
      if (this.placeholder && !this.keepPlaceholder()) {
        setTimeout(() => {
          if (this.placeholder) {
            this.placeholder.destroy();
            this.placeholder = void 0;
          }
        }, 1e3);
      }
    }
    /**
     * Preload content
     *
     * @param {boolean} isLazy
     * @param {boolean} [reload]
     */
    load(isLazy, reload) {
      if (this.slide && this.usePlaceholder()) {
        if (!this.placeholder) {
          const placeholderSrc = this.instance.applyFilters(
            "placeholderSrc",
            // use  image-based placeholder only for the first slide,
            // as rendering (even small stretched thumbnail) is an expensive operation
            this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : false,
            this
          );
          this.placeholder = new Placeholder(placeholderSrc, this.slide.container);
        } else {
          const placeholderEl = this.placeholder.element;
          if (placeholderEl && !placeholderEl.parentElement) {
            this.slide.container.prepend(placeholderEl);
          }
        }
      }
      if (this.element && !reload) {
        return;
      }
      if (this.instance.dispatch("contentLoad", {
        content: this,
        isLazy
      }).defaultPrevented) {
        return;
      }
      if (this.isImageContent()) {
        this.element = createElement3("pswp__img", "img");
        if (this.displayedImageWidth) {
          this.loadImage(isLazy);
        }
      } else {
        this.element = createElement3("pswp__content", "div");
        this.element.innerHTML = this.data.html || "";
      }
      if (reload && this.slide) {
        this.slide.updateContentSize(true);
      }
    }
    /**
     * Preload image
     *
     * @param {boolean} isLazy
     */
    loadImage(isLazy) {
      var _this$data$src, _this$data$alt;
      if (!this.isImageContent() || !this.element || this.instance.dispatch("contentLoadImage", {
        content: this,
        isLazy
      }).defaultPrevented) {
        return;
      }
      const imageElement = (
        /** @type HTMLImageElement */
        this.element
      );
      this.updateSrcsetSizes();
      if (this.data.srcset) {
        imageElement.srcset = this.data.srcset;
      }
      imageElement.src = (_this$data$src = this.data.src) !== null && _this$data$src !== void 0 ? _this$data$src : "";
      imageElement.alt = (_this$data$alt = this.data.alt) !== null && _this$data$alt !== void 0 ? _this$data$alt : "";
      this.state = LOAD_STATE.LOADING;
      if (imageElement.complete) {
        this.onLoaded();
      } else {
        imageElement.onload = () => {
          this.onLoaded();
        };
        imageElement.onerror = () => {
          this.onError();
        };
      }
    }
    /**
     * Assign slide to content
     *
     * @param {Slide} slide
     */
    setSlide(slide2) {
      this.slide = slide2;
      this.hasSlide = true;
      this.instance = slide2.pswp;
    }
    /**
     * Content load success handler
     */
    onLoaded() {
      this.state = LOAD_STATE.LOADED;
      if (this.slide && this.element) {
        this.instance.dispatch("loadComplete", {
          slide: this.slide,
          content: this
        });
        if (this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode) {
          this.append();
          this.slide.updateContentSize(true);
        }
        if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
          this.removePlaceholder();
        }
      }
    }
    /**
     * Content load error handler
     */
    onError() {
      this.state = LOAD_STATE.ERROR;
      if (this.slide) {
        this.displayError();
        this.instance.dispatch("loadComplete", {
          slide: this.slide,
          isError: true,
          content: this
        });
        this.instance.dispatch("loadError", {
          slide: this.slide,
          content: this
        });
      }
    }
    /**
     * @returns {Boolean} If the content is currently loading
     */
    isLoading() {
      return this.instance.applyFilters("isContentLoading", this.state === LOAD_STATE.LOADING, this);
    }
    /**
     * @returns {Boolean} If the content is in error state
     */
    isError() {
      return this.state === LOAD_STATE.ERROR;
    }
    /**
     * @returns {boolean} If the content is image
     */
    isImageContent() {
      return this.type === "image";
    }
    /**
     * Update content size
     *
     * @param {Number} width
     * @param {Number} height
     */
    setDisplayedSize(width, height) {
      if (!this.element) {
        return;
      }
      if (this.placeholder) {
        this.placeholder.setDisplayedSize(width, height);
      }
      if (this.instance.dispatch("contentResize", {
        content: this,
        width,
        height
      }).defaultPrevented) {
        return;
      }
      setWidthHeight(this.element, width, height);
      if (this.isImageContent() && !this.isError()) {
        const isInitialSizeUpdate = !this.displayedImageWidth && width;
        this.displayedImageWidth = width;
        this.displayedImageHeight = height;
        if (isInitialSizeUpdate) {
          this.loadImage(false);
        } else {
          this.updateSrcsetSizes();
        }
        if (this.slide) {
          this.instance.dispatch("imageSizeChange", {
            slide: this.slide,
            width,
            height,
            content: this
          });
        }
      }
    }
    /**
     * @returns {boolean} If the content can be zoomed
     */
    isZoomable() {
      return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== LOAD_STATE.ERROR, this);
    }
    /**
     * Update image srcset sizes attribute based on width and height
     */
    updateSrcsetSizes() {
      if (!this.isImageContent() || !this.element || !this.data.srcset) {
        return;
      }
      const image = (
        /** @type HTMLImageElement */
        this.element
      );
      const sizesWidth = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
      if (!image.dataset.largestUsedSize || sizesWidth > parseInt(image.dataset.largestUsedSize, 10)) {
        image.sizes = sizesWidth + "px";
        image.dataset.largestUsedSize = String(sizesWidth);
      }
    }
    /**
     * @returns {boolean} If content should use a placeholder (from msrc by default)
     */
    usePlaceholder() {
      return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this);
    }
    /**
     * Preload content with lazy-loading param
     */
    lazyLoad() {
      if (this.instance.dispatch("contentLazyLoad", {
        content: this
      }).defaultPrevented) {
        return;
      }
      this.load(true);
    }
    /**
     * @returns {boolean} If placeholder should be kept after content is loaded
     */
    keepPlaceholder() {
      return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this);
    }
    /**
     * Destroy the content
     */
    destroy() {
      this.hasSlide = false;
      this.slide = void 0;
      if (this.instance.dispatch("contentDestroy", {
        content: this
      }).defaultPrevented) {
        return;
      }
      this.remove();
      if (this.placeholder) {
        this.placeholder.destroy();
        this.placeholder = void 0;
      }
      if (this.isImageContent() && this.element) {
        this.element.onload = null;
        this.element.onerror = null;
        this.element = void 0;
      }
    }
    /**
     * Display error message
     */
    displayError() {
      if (this.slide) {
        var _this$instance$option, _this$instance$option2;
        let errorMsgEl = createElement3("pswp__error-msg", "div");
        errorMsgEl.innerText = (_this$instance$option = (_this$instance$option2 = this.instance.options) === null || _this$instance$option2 === void 0 ? void 0 : _this$instance$option2.errorMsg) !== null && _this$instance$option !== void 0 ? _this$instance$option : "";
        errorMsgEl = /** @type {HTMLDivElement} */
        this.instance.applyFilters("contentErrorElement", errorMsgEl, this);
        this.element = createElement3("pswp__content pswp__error-msg-container", "div");
        this.element.appendChild(errorMsgEl);
        this.slide.container.innerText = "";
        this.slide.container.appendChild(this.element);
        this.slide.updateContentSize(true);
        this.removePlaceholder();
      }
    }
    /**
     * Append the content
     */
    append() {
      if (this.isAttached || !this.element) {
        return;
      }
      this.isAttached = true;
      if (this.state === LOAD_STATE.ERROR) {
        this.displayError();
        return;
      }
      if (this.instance.dispatch("contentAppend", {
        content: this
      }).defaultPrevented) {
        return;
      }
      const supportsDecode = "decode" in this.element;
      if (this.isImageContent()) {
        if (supportsDecode && this.slide && (!this.slide.isActive || isSafari())) {
          this.isDecoding = true;
          this.element.decode().catch(() => {
          }).finally(() => {
            this.isDecoding = false;
            this.appendImage();
          });
        } else {
          this.appendImage();
        }
      } else if (this.slide && !this.element.parentNode) {
        this.slide.container.appendChild(this.element);
      }
    }
    /**
     * Activate the slide,
     * active slide is generally the current one,
     * meaning the user can see it.
     */
    activate() {
      if (this.instance.dispatch("contentActivate", {
        content: this
      }).defaultPrevented || !this.slide) {
        return;
      }
      if (this.isImageContent() && this.isDecoding && !isSafari()) {
        this.appendImage();
      } else if (this.isError()) {
        this.load(false, true);
      }
      if (this.slide.holderElement) {
        this.slide.holderElement.setAttribute("aria-hidden", "false");
      }
    }
    /**
     * Deactivate the content
     */
    deactivate() {
      this.instance.dispatch("contentDeactivate", {
        content: this
      });
      if (this.slide && this.slide.holderElement) {
        this.slide.holderElement.setAttribute("aria-hidden", "true");
      }
    }
    /**
     * Remove the content from DOM
     */
    remove() {
      this.isAttached = false;
      if (this.instance.dispatch("contentRemove", {
        content: this
      }).defaultPrevented) {
        return;
      }
      if (this.element && this.element.parentNode) {
        this.element.remove();
      }
      if (this.placeholder && this.placeholder.element) {
        this.placeholder.element.remove();
      }
    }
    /**
     * Append the image content to slide container
     */
    appendImage() {
      if (!this.isAttached) {
        return;
      }
      if (this.instance.dispatch("contentAppendImage", {
        content: this
      }).defaultPrevented) {
        return;
      }
      if (this.slide && this.element && !this.element.parentNode) {
        this.slide.container.appendChild(this.element);
      }
      if (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR) {
        this.removePlaceholder();
      }
    }
  };
  function getViewportSize2(options, pswp) {
    if (options.getViewportSizeFn) {
      const newViewportSize = options.getViewportSizeFn(options, pswp);
      if (newViewportSize) {
        return newViewportSize;
      }
    }
    return {
      x: document.documentElement.clientWidth,
      // TODO: height on mobile is very incosistent due to toolbar
      // find a way to improve this
      //
      // document.documentElement.clientHeight - doesn't seem to work well
      y: window.innerHeight
    };
  }
  function parsePaddingOption(prop, options, viewportSize, itemData, index) {
    let paddingValue = 0;
    if (options.paddingFn) {
      paddingValue = options.paddingFn(viewportSize, itemData, index)[prop];
    } else if (options.padding) {
      paddingValue = options.padding[prop];
    } else {
      const legacyPropName = "padding" + prop[0].toUpperCase() + prop.slice(1);
      if (options[legacyPropName]) {
        paddingValue = options[legacyPropName];
      }
    }
    return Number(paddingValue) || 0;
  }
  function getPanAreaSize(options, viewportSize, itemData, index) {
    return {
      x: viewportSize.x - parsePaddingOption("left", options, viewportSize, itemData, index) - parsePaddingOption("right", options, viewportSize, itemData, index),
      y: viewportSize.y - parsePaddingOption("top", options, viewportSize, itemData, index) - parsePaddingOption("bottom", options, viewportSize, itemData, index)
    };
  }
  var MAX_IMAGE_WIDTH = 4e3;
  var ZoomLevel = class {
    /**
     * @param {PhotoSwipeOptions} options PhotoSwipe options
     * @param {SlideData} itemData Slide data
     * @param {number} index Slide index
     * @param {PhotoSwipe} [pswp] PhotoSwipe instance, can be undefined if not initialized yet
     */
    constructor(options, itemData, index, pswp) {
      this.pswp = pswp;
      this.options = options;
      this.itemData = itemData;
      this.index = index;
      this.panAreaSize = null;
      this.elementSize = null;
      this.fit = 1;
      this.fill = 1;
      this.vFill = 1;
      this.initial = 1;
      this.secondary = 1;
      this.max = 1;
      this.min = 1;
    }
    /**
     * Calculate initial, secondary and maximum zoom level for the specified slide.
     *
     * It should be called when either image or viewport size changes.
     *
     * @param {number} maxWidth
     * @param {number} maxHeight
     * @param {Point} panAreaSize
     */
    update(maxWidth, maxHeight, panAreaSize) {
      const elementSize = {
        x: maxWidth,
        y: maxHeight
      };
      this.elementSize = elementSize;
      this.panAreaSize = panAreaSize;
      const hRatio = panAreaSize.x / elementSize.x;
      const vRatio = panAreaSize.y / elementSize.y;
      this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
      this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio);
      this.vFill = Math.min(1, vRatio);
      this.initial = this._getInitial();
      this.secondary = this._getSecondary();
      this.max = Math.max(this.initial, this.secondary, this._getMax());
      this.min = Math.min(this.fit, this.initial, this.secondary);
      if (this.pswp) {
        this.pswp.dispatch("zoomLevelsUpdate", {
          zoomLevels: this,
          slideData: this.itemData
        });
      }
    }
    /**
     * Parses user-defined zoom option.
     *
     * @private
     * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
     * @returns { number | undefined }
     */
    _parseZoomLevelOption(optionPrefix) {
      const optionName = (
        /** @type {'initialZoomLevel' | 'secondaryZoomLevel' | 'maxZoomLevel'} */
        optionPrefix + "ZoomLevel"
      );
      const optionValue = this.options[optionName];
      if (!optionValue) {
        return;
      }
      if (typeof optionValue === "function") {
        return optionValue(this);
      }
      if (optionValue === "fill") {
        return this.fill;
      }
      if (optionValue === "fit") {
        return this.fit;
      }
      return Number(optionValue);
    }
    /**
     * Get zoom level to which image will be zoomed after double-tap gesture,
     * or when user clicks on zoom icon,
     * or mouse-click on image itself.
     * If you return 1 image will be zoomed to its original size.
     *
     * @private
     * @return {number}
     */
    _getSecondary() {
      let currZoomLevel = this._parseZoomLevelOption("secondary");
      if (currZoomLevel) {
        return currZoomLevel;
      }
      currZoomLevel = Math.min(1, this.fit * 3);
      if (this.elementSize && currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH) {
        currZoomLevel = MAX_IMAGE_WIDTH / this.elementSize.x;
      }
      return currZoomLevel;
    }
    /**
     * Get initial image zoom level.
     *
     * @private
     * @return {number}
     */
    _getInitial() {
      return this._parseZoomLevelOption("initial") || this.fit;
    }
    /**
     * Maximum zoom level when user zooms
     * via zoom/pinch gesture,
     * via cmd/ctrl-wheel or via trackpad.
     *
     * @private
     * @return {number}
     */
    _getMax() {
      return this._parseZoomLevelOption("max") || Math.max(1, this.fit * 4);
    }
  };
  function lazyLoadData(itemData, instance, index) {
    const content = instance.createContentFromData(itemData, index);
    let zoomLevel;
    const {
      options
    } = instance;
    if (options) {
      zoomLevel = new ZoomLevel(options, itemData, -1);
      let viewportSize;
      if (instance.pswp) {
        viewportSize = instance.pswp.viewportSize;
      } else {
        viewportSize = getViewportSize2(options, instance);
      }
      const panAreaSize = getPanAreaSize(options, viewportSize, itemData, index);
      zoomLevel.update(content.width, content.height, panAreaSize);
    }
    content.lazyLoad();
    if (zoomLevel) {
      content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
    }
    return content;
  }
  function lazyLoadSlide(index, instance) {
    const itemData = instance.getItemData(index);
    if (instance.dispatch("lazyLoadSlide", {
      index,
      itemData
    }).defaultPrevented) {
      return;
    }
    return lazyLoadData(itemData, instance, index);
  }
  var PhotoSwipeBase = class extends Eventable {
    /**
     * Get total number of slides
     *
     * @returns {number}
     */
    getNumItems() {
      var _this$options;
      let numItems = 0;
      const dataSource = (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.dataSource;
      if (dataSource && "length" in dataSource) {
        numItems = dataSource.length;
      } else if (dataSource && "gallery" in dataSource) {
        if (!dataSource.items) {
          dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
        }
        if (dataSource.items) {
          numItems = dataSource.items.length;
        }
      }
      const event2 = this.dispatch("numItems", {
        dataSource,
        numItems
      });
      return this.applyFilters("numItems", event2.numItems, dataSource);
    }
    /**
     * @param {SlideData} slideData
     * @param {number} index
     * @returns {Content}
     */
    createContentFromData(slideData, index) {
      return new Content(slideData, this, index);
    }
    /**
     * Get item data by index.
     *
     * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
     * For example, it may contain properties like
     * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
     *
     * @param {number} index
     * @returns {SlideData}
     */
    getItemData(index) {
      var _this$options2;
      const dataSource = (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.dataSource;
      let dataSourceItem = {};
      if (Array.isArray(dataSource)) {
        dataSourceItem = dataSource[index];
      } else if (dataSource && "gallery" in dataSource) {
        if (!dataSource.items) {
          dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
        }
        dataSourceItem = dataSource.items[index];
      }
      let itemData = dataSourceItem;
      if (itemData instanceof Element) {
        itemData = this._domElementToItemData(itemData);
      }
      const event2 = this.dispatch("itemData", {
        itemData: itemData || {},
        index
      });
      return this.applyFilters("itemData", event2.itemData, index);
    }
    /**
     * Get array of gallery DOM elements,
     * based on childSelector and gallery element.
     *
     * @param {HTMLElement} galleryElement
     * @returns {HTMLElement[]}
     */
    _getGalleryDOMElements(galleryElement) {
      var _this$options3, _this$options4;
      if ((_this$options3 = this.options) !== null && _this$options3 !== void 0 && _this$options3.children || (_this$options4 = this.options) !== null && _this$options4 !== void 0 && _this$options4.childSelector) {
        return getElementsFromOption(this.options.children, this.options.childSelector, galleryElement) || [];
      }
      return [galleryElement];
    }
    /**
     * Converts DOM element to item data object.
     *
     * @param {HTMLElement} element DOM element
     * @returns {SlideData}
     */
    _domElementToItemData(element) {
      const itemData = {
        element
      };
      const linkEl = (
        /** @type {HTMLAnchorElement} */
        element.tagName === "A" ? element : element.querySelector("a")
      );
      if (linkEl) {
        itemData.src = linkEl.dataset.pswpSrc || linkEl.href;
        if (linkEl.dataset.pswpSrcset) {
          itemData.srcset = linkEl.dataset.pswpSrcset;
        }
        itemData.width = linkEl.dataset.pswpWidth ? parseInt(linkEl.dataset.pswpWidth, 10) : 0;
        itemData.height = linkEl.dataset.pswpHeight ? parseInt(linkEl.dataset.pswpHeight, 10) : 0;
        itemData.w = itemData.width;
        itemData.h = itemData.height;
        if (linkEl.dataset.pswpType) {
          itemData.type = linkEl.dataset.pswpType;
        }
        const thumbnailEl = element.querySelector("img");
        if (thumbnailEl) {
          var _thumbnailEl$getAttri;
          itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
          itemData.alt = (_thumbnailEl$getAttri = thumbnailEl.getAttribute("alt")) !== null && _thumbnailEl$getAttri !== void 0 ? _thumbnailEl$getAttri : "";
        }
        if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) {
          itemData.thumbCropped = true;
        }
      }
      return this.applyFilters("domItemData", itemData, element, linkEl);
    }
    /**
     * Lazy-load by slide data
     *
     * @param {SlideData} itemData Data about the slide
     * @param {number} index
     * @returns {Content} Image that is being decoded or false.
     */
    lazyLoadData(itemData, index) {
      return lazyLoadData(itemData, this, index);
    }
  };
  var PhotoSwipeLightbox = class extends PhotoSwipeBase {
    /**
     * @param {PhotoSwipeOptions} [options]
     */
    constructor(options) {
      super();
      this.options = options || {};
      this._uid = 0;
      this.shouldOpen = false;
      this._preloadedContent = void 0;
      this.onThumbnailsClick = this.onThumbnailsClick.bind(this);
    }
    /**
     * Initialize lightbox, should be called only once.
     * It's not included in the main constructor, so you may bind events before it.
     */
    init() {
      getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach((galleryElement) => {
        galleryElement.addEventListener("click", this.onThumbnailsClick, false);
      });
    }
    /**
     * @param {MouseEvent} e
     */
    onThumbnailsClick(e) {
      if (specialKeyUsed(e) || window.pswp) {
        return;
      }
      let initialPoint = {
        x: e.clientX,
        y: e.clientY
      };
      if (!initialPoint.x && !initialPoint.y) {
        initialPoint = null;
      }
      let clickedIndex = this.getClickedIndex(e);
      clickedIndex = this.applyFilters("clickedIndex", clickedIndex, e, this);
      const dataSource = {
        gallery: (
          /** @type {HTMLElement} */
          e.currentTarget
        )
      };
      if (clickedIndex >= 0) {
        e.preventDefault();
        this.loadAndOpen(clickedIndex, dataSource, initialPoint);
      }
    }
    /**
     * Get index of gallery item that was clicked.
     *
     * @param {MouseEvent} e click event
     * @returns {number}
     */
    getClickedIndex(e) {
      if (this.options.getClickedIndexFn) {
        return this.options.getClickedIndexFn.call(this, e);
      }
      const clickedTarget = (
        /** @type {HTMLElement} */
        e.target
      );
      const childElements = getElementsFromOption(
        this.options.children,
        this.options.childSelector,
        /** @type {HTMLElement} */
        e.currentTarget
      );
      const clickedChildIndex = childElements.findIndex((child) => child === clickedTarget || child.contains(clickedTarget));
      if (clickedChildIndex !== -1) {
        return clickedChildIndex;
      } else if (this.options.children || this.options.childSelector) {
        return -1;
      }
      return 0;
    }
    /**
     * Load and open PhotoSwipe
     *
     * @param {number} index
     * @param {DataSource} [dataSource]
     * @param {Point | null} [initialPoint]
     * @returns {boolean}
     */
    loadAndOpen(index, dataSource, initialPoint) {
      if (window.pswp || !this.options) {
        return false;
      }
      if (!dataSource && this.options.gallery && this.options.children) {
        const galleryElements = getElementsFromOption(this.options.gallery);
        if (galleryElements[0]) {
          dataSource = {
            gallery: galleryElements[0]
          };
        }
      }
      this.options.index = index;
      this.options.initialPointerPos = initialPoint;
      this.shouldOpen = true;
      this.preload(index, dataSource);
      return true;
    }
    /**
     * Load the main module and the slide content by index
     *
     * @param {number} index
     * @param {DataSource} [dataSource]
     */
    preload(index, dataSource) {
      const {
        options
      } = this;
      if (dataSource) {
        options.dataSource = dataSource;
      }
      const promiseArray = [];
      const pswpModuleType = typeof options.pswpModule;
      if (isPswpClass(options.pswpModule)) {
        promiseArray.push(Promise.resolve(
          /** @type {Type<PhotoSwipe>} */
          options.pswpModule
        ));
      } else if (pswpModuleType === "string") {
        throw new Error("pswpModule as string is no longer supported");
      } else if (pswpModuleType === "function") {
        promiseArray.push(
          /** @type {() => Promise<Type<PhotoSwipe>>} */
          options.pswpModule()
        );
      } else {
        throw new Error("pswpModule is not valid");
      }
      if (typeof options.openPromise === "function") {
        promiseArray.push(options.openPromise());
      }
      if (options.preloadFirstSlide !== false && index >= 0) {
        this._preloadedContent = lazyLoadSlide(index, this);
      }
      const uid = ++this._uid;
      Promise.all(promiseArray).then((iterableModules) => {
        if (this.shouldOpen) {
          const mainModule = iterableModules[0];
          this._openPhotoswipe(mainModule, uid);
        }
      });
    }
    /**
     * @private
     * @param {Type<PhotoSwipe> | { default: Type<PhotoSwipe> }} module
     * @param {number} uid
     */
    _openPhotoswipe(module, uid) {
      if (uid !== this._uid && this.shouldOpen) {
        return;
      }
      this.shouldOpen = false;
      if (window.pswp) {
        return;
      }
      const pswp = typeof module === "object" ? new module.default(this.options) : new module(this.options);
      this.pswp = pswp;
      window.pswp = pswp;
      Object.keys(this._listeners).forEach((name) => {
        var _this$_listeners$name;
        (_this$_listeners$name = this._listeners[name]) === null || _this$_listeners$name === void 0 || _this$_listeners$name.forEach((fn) => {
          pswp.on(
            name,
            /** @type {EventCallback<typeof name>} */
            fn
          );
        });
      });
      Object.keys(this._filters).forEach((name) => {
        var _this$_filters$name;
        (_this$_filters$name = this._filters[name]) === null || _this$_filters$name === void 0 || _this$_filters$name.forEach((filter) => {
          pswp.addFilter(name, filter.fn, filter.priority);
        });
      });
      if (this._preloadedContent) {
        pswp.contentLoader.addToCache(this._preloadedContent);
        this._preloadedContent = void 0;
      }
      pswp.on("destroy", () => {
        this.pswp = void 0;
        delete window.pswp;
      });
      pswp.init();
    }
    /**
     * Unbinds all events, closes PhotoSwipe if it's open.
     */
    destroy() {
      var _this$pswp;
      (_this$pswp = this.pswp) === null || _this$pswp === void 0 || _this$pswp.destroy();
      this.shouldOpen = false;
      this._listeners = {};
      getElementsFromOption(this.options.gallery, this.options.gallerySelector).forEach((galleryElement) => {
        galleryElement.removeEventListener("click", this.onThumbnailsClick, false);
      });
    }
  };

  // node_modules/photoswipe/dist/photoswipe.esm.js
  function createElement4(className, tagName, appendToEl) {
    const el = document.createElement(tagName);
    if (className) {
      el.className = className;
    }
    if (appendToEl) {
      appendToEl.appendChild(el);
    }
    return el;
  }
  function equalizePoints(p1, p2) {
    p1.x = p2.x;
    p1.y = p2.y;
    if (p2.id !== void 0) {
      p1.id = p2.id;
    }
    return p1;
  }
  function roundPoint(p) {
    p.x = Math.round(p.x);
    p.y = Math.round(p.y);
  }
  function getDistanceBetween(p1, p2) {
    const x = Math.abs(p1.x - p2.x);
    const y = Math.abs(p1.y - p2.y);
    return Math.sqrt(x * x + y * y);
  }
  function pointsEqual(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
  }
  function clamp2(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }
  function toTransformString2(x, y, scale) {
    let propValue = "translate3d(".concat(x, "px,").concat(y || 0, "px,0)");
    if (scale !== void 0) {
      propValue += " scale3d(".concat(scale, ",").concat(scale, ",1)");
    }
    return propValue;
  }
  function setTransform(el, x, y, scale) {
    el.style.transform = toTransformString2(x, y, scale);
  }
  var defaultCSSEasing = "cubic-bezier(.4,0,.22,1)";
  function setTransitionStyle(el, prop, duration, ease) {
    el.style.transition = prop ? "".concat(prop, " ").concat(duration, "ms ").concat(ease || defaultCSSEasing) : "none";
  }
  function setWidthHeight2(el, w, h) {
    el.style.width = typeof w === "number" ? "".concat(w, "px") : w;
    el.style.height = typeof h === "number" ? "".concat(h, "px") : h;
  }
  function removeTransitionStyle(el) {
    setTransitionStyle(el);
  }
  function decodeImage(img) {
    if ("decode" in img) {
      return img.decode().catch(() => {
      });
    }
    if (img.complete) {
      return Promise.resolve(img);
    }
    return new Promise((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = reject;
    });
  }
  var LOAD_STATE2 = {
    IDLE: "idle",
    LOADING: "loading",
    LOADED: "loaded",
    ERROR: "error"
  };
  function specialKeyUsed2(e) {
    return "button" in e && e.button === 1 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey;
  }
  function getElementsFromOption2(option, legacySelector, parent = document) {
    let elements = [];
    if (option instanceof Element) {
      elements = [option];
    } else if (option instanceof NodeList || Array.isArray(option)) {
      elements = Array.from(option);
    } else {
      const selector = typeof option === "string" ? option : legacySelector;
      if (selector) {
        elements = Array.from(parent.querySelectorAll(selector));
      }
    }
    return elements;
  }
  function isSafari2() {
    return !!(navigator.vendor && navigator.vendor.match(/apple/i));
  }
  var supportsPassive = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
      get: () => {
        supportsPassive = true;
      }
    }));
  } catch (e) {
  }
  var DOMEvents = class {
    constructor() {
      this._pool = [];
    }
    /**
     * Adds event listeners
     *
     * @param {PoolItem['target']} target
     * @param {PoolItem['type']} type Can be multiple, separated by space.
     * @param {PoolItem['listener']} listener
     * @param {PoolItem['passive']} [passive]
     */
    add(target, type, listener, passive) {
      this._toggleListener(target, type, listener, passive);
    }
    /**
     * Removes event listeners
     *
     * @param {PoolItem['target']} target
     * @param {PoolItem['type']} type
     * @param {PoolItem['listener']} listener
     * @param {PoolItem['passive']} [passive]
     */
    remove(target, type, listener, passive) {
      this._toggleListener(target, type, listener, passive, true);
    }
    /**
     * Removes all bound events
     */
    removeAll() {
      this._pool.forEach((poolItem) => {
        this._toggleListener(poolItem.target, poolItem.type, poolItem.listener, poolItem.passive, true, true);
      });
      this._pool = [];
    }
    /**
     * Adds or removes event
     *
     * @private
     * @param {PoolItem['target']} target
     * @param {PoolItem['type']} type
     * @param {PoolItem['listener']} listener
     * @param {PoolItem['passive']} [passive]
     * @param {boolean} [unbind] Whether the event should be added or removed
     * @param {boolean} [skipPool] Whether events pool should be skipped
     */
    _toggleListener(target, type, listener, passive, unbind, skipPool) {
      if (!target) {
        return;
      }
      const methodName = unbind ? "removeEventListener" : "addEventListener";
      const types2 = type.split(" ");
      types2.forEach((eType) => {
        if (eType) {
          if (!skipPool) {
            if (unbind) {
              this._pool = this._pool.filter((poolItem) => {
                return poolItem.type !== eType || poolItem.listener !== listener || poolItem.target !== target;
              });
            } else {
              this._pool.push({
                target,
                type: eType,
                listener,
                passive
              });
            }
          }
          const eventOptions = supportsPassive ? {
            passive: passive || false
          } : false;
          target[methodName](eType, listener, eventOptions);
        }
      });
    }
  };
  function getViewportSize3(options, pswp) {
    if (options.getViewportSizeFn) {
      const newViewportSize = options.getViewportSizeFn(options, pswp);
      if (newViewportSize) {
        return newViewportSize;
      }
    }
    return {
      x: document.documentElement.clientWidth,
      // TODO: height on mobile is very incosistent due to toolbar
      // find a way to improve this
      //
      // document.documentElement.clientHeight - doesn't seem to work well
      y: window.innerHeight
    };
  }
  function parsePaddingOption2(prop, options, viewportSize, itemData, index) {
    let paddingValue = 0;
    if (options.paddingFn) {
      paddingValue = options.paddingFn(viewportSize, itemData, index)[prop];
    } else if (options.padding) {
      paddingValue = options.padding[prop];
    } else {
      const legacyPropName = "padding" + prop[0].toUpperCase() + prop.slice(1);
      if (options[legacyPropName]) {
        paddingValue = options[legacyPropName];
      }
    }
    return Number(paddingValue) || 0;
  }
  function getPanAreaSize2(options, viewportSize, itemData, index) {
    return {
      x: viewportSize.x - parsePaddingOption2("left", options, viewportSize, itemData, index) - parsePaddingOption2("right", options, viewportSize, itemData, index),
      y: viewportSize.y - parsePaddingOption2("top", options, viewportSize, itemData, index) - parsePaddingOption2("bottom", options, viewportSize, itemData, index)
    };
  }
  var PanBounds = class {
    /**
     * @param {Slide} slide
     */
    constructor(slide2) {
      this.slide = slide2;
      this.currZoomLevel = 1;
      this.center = /** @type {Point} */
      {
        x: 0,
        y: 0
      };
      this.max = /** @type {Point} */
      {
        x: 0,
        y: 0
      };
      this.min = /** @type {Point} */
      {
        x: 0,
        y: 0
      };
    }
    /**
     * _getItemBounds
     *
     * @param {number} currZoomLevel
     */
    update(currZoomLevel) {
      this.currZoomLevel = currZoomLevel;
      if (!this.slide.width) {
        this.reset();
      } else {
        this._updateAxis("x");
        this._updateAxis("y");
        this.slide.pswp.dispatch("calcBounds", {
          slide: this.slide
        });
      }
    }
    /**
     * _calculateItemBoundsForAxis
     *
     * @param {Axis} axis
     */
    _updateAxis(axis) {
      const {
        pswp
      } = this.slide;
      const elSize = this.slide[axis === "x" ? "width" : "height"] * this.currZoomLevel;
      const paddingProp = axis === "x" ? "left" : "top";
      const padding = parsePaddingOption2(paddingProp, pswp.options, pswp.viewportSize, this.slide.data, this.slide.index);
      const panAreaSize = this.slide.panAreaSize[axis];
      this.center[axis] = Math.round((panAreaSize - elSize) / 2) + padding;
      this.max[axis] = elSize > panAreaSize ? Math.round(panAreaSize - elSize) + padding : this.center[axis];
      this.min[axis] = elSize > panAreaSize ? padding : this.center[axis];
    }
    // _getZeroBounds
    reset() {
      this.center.x = 0;
      this.center.y = 0;
      this.max.x = 0;
      this.max.y = 0;
      this.min.x = 0;
      this.min.y = 0;
    }
    /**
     * Correct pan position if it's beyond the bounds
     *
     * @param {Axis} axis x or y
     * @param {number} panOffset
     * @returns {number}
     */
    correctPan(axis, panOffset) {
      return clamp2(panOffset, this.max[axis], this.min[axis]);
    }
  };
  var MAX_IMAGE_WIDTH2 = 4e3;
  var ZoomLevel2 = class {
    /**
     * @param {PhotoSwipeOptions} options PhotoSwipe options
     * @param {SlideData} itemData Slide data
     * @param {number} index Slide index
     * @param {PhotoSwipe} [pswp] PhotoSwipe instance, can be undefined if not initialized yet
     */
    constructor(options, itemData, index, pswp) {
      this.pswp = pswp;
      this.options = options;
      this.itemData = itemData;
      this.index = index;
      this.panAreaSize = null;
      this.elementSize = null;
      this.fit = 1;
      this.fill = 1;
      this.vFill = 1;
      this.initial = 1;
      this.secondary = 1;
      this.max = 1;
      this.min = 1;
    }
    /**
     * Calculate initial, secondary and maximum zoom level for the specified slide.
     *
     * It should be called when either image or viewport size changes.
     *
     * @param {number} maxWidth
     * @param {number} maxHeight
     * @param {Point} panAreaSize
     */
    update(maxWidth, maxHeight, panAreaSize) {
      const elementSize = {
        x: maxWidth,
        y: maxHeight
      };
      this.elementSize = elementSize;
      this.panAreaSize = panAreaSize;
      const hRatio = panAreaSize.x / elementSize.x;
      const vRatio = panAreaSize.y / elementSize.y;
      this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
      this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio);
      this.vFill = Math.min(1, vRatio);
      this.initial = this._getInitial();
      this.secondary = this._getSecondary();
      this.max = Math.max(this.initial, this.secondary, this._getMax());
      this.min = Math.min(this.fit, this.initial, this.secondary);
      if (this.pswp) {
        this.pswp.dispatch("zoomLevelsUpdate", {
          zoomLevels: this,
          slideData: this.itemData
        });
      }
    }
    /**
     * Parses user-defined zoom option.
     *
     * @private
     * @param {'initial' | 'secondary' | 'max'} optionPrefix Zoom level option prefix (initial, secondary, max)
     * @returns { number | undefined }
     */
    _parseZoomLevelOption(optionPrefix) {
      const optionName = (
        /** @type {'initialZoomLevel' | 'secondaryZoomLevel' | 'maxZoomLevel'} */
        optionPrefix + "ZoomLevel"
      );
      const optionValue = this.options[optionName];
      if (!optionValue) {
        return;
      }
      if (typeof optionValue === "function") {
        return optionValue(this);
      }
      if (optionValue === "fill") {
        return this.fill;
      }
      if (optionValue === "fit") {
        return this.fit;
      }
      return Number(optionValue);
    }
    /**
     * Get zoom level to which image will be zoomed after double-tap gesture,
     * or when user clicks on zoom icon,
     * or mouse-click on image itself.
     * If you return 1 image will be zoomed to its original size.
     *
     * @private
     * @return {number}
     */
    _getSecondary() {
      let currZoomLevel = this._parseZoomLevelOption("secondary");
      if (currZoomLevel) {
        return currZoomLevel;
      }
      currZoomLevel = Math.min(1, this.fit * 3);
      if (this.elementSize && currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH2) {
        currZoomLevel = MAX_IMAGE_WIDTH2 / this.elementSize.x;
      }
      return currZoomLevel;
    }
    /**
     * Get initial image zoom level.
     *
     * @private
     * @return {number}
     */
    _getInitial() {
      return this._parseZoomLevelOption("initial") || this.fit;
    }
    /**
     * Maximum zoom level when user zooms
     * via zoom/pinch gesture,
     * via cmd/ctrl-wheel or via trackpad.
     *
     * @private
     * @return {number}
     */
    _getMax() {
      return this._parseZoomLevelOption("max") || Math.max(1, this.fit * 4);
    }
  };
  var Slide = class {
    /**
     * @param {SlideData} data
     * @param {number} index
     * @param {PhotoSwipe} pswp
     */
    constructor(data, index, pswp) {
      this.data = data;
      this.index = index;
      this.pswp = pswp;
      this.isActive = index === pswp.currIndex;
      this.currentResolution = 0;
      this.panAreaSize = {
        x: 0,
        y: 0
      };
      this.pan = {
        x: 0,
        y: 0
      };
      this.isFirstSlide = this.isActive && !pswp.opener.isOpen;
      this.zoomLevels = new ZoomLevel2(pswp.options, data, index, pswp);
      this.pswp.dispatch("gettingData", {
        slide: this,
        data: this.data,
        index
      });
      this.content = this.pswp.contentLoader.getContentBySlide(this);
      this.container = createElement4("pswp__zoom-wrap", "div");
      this.holderElement = null;
      this.currZoomLevel = 1;
      this.width = this.content.width;
      this.height = this.content.height;
      this.heavyAppended = false;
      this.bounds = new PanBounds(this);
      this.prevDisplayedWidth = -1;
      this.prevDisplayedHeight = -1;
      this.pswp.dispatch("slideInit", {
        slide: this
      });
    }
    /**
     * If this slide is active/current/visible
     *
     * @param {boolean} isActive
     */
    setIsActive(isActive) {
      if (isActive && !this.isActive) {
        this.activate();
      } else if (!isActive && this.isActive) {
        this.deactivate();
      }
    }
    /**
     * Appends slide content to DOM
     *
     * @param {HTMLElement} holderElement
     */
    append(holderElement) {
      this.holderElement = holderElement;
      this.container.style.transformOrigin = "0 0";
      if (!this.data) {
        return;
      }
      this.calculateSize();
      this.load();
      this.updateContentSize();
      this.appendHeavy();
      this.holderElement.appendChild(this.container);
      this.zoomAndPanToInitial();
      this.pswp.dispatch("firstZoomPan", {
        slide: this
      });
      this.applyCurrentZoomPan();
      this.pswp.dispatch("afterSetContent", {
        slide: this
      });
      if (this.isActive) {
        this.activate();
      }
    }
    load() {
      this.content.load(false);
      this.pswp.dispatch("slideLoad", {
        slide: this
      });
    }
    /**
     * Append "heavy" DOM elements
     *
     * This may depend on a type of slide,
     * but generally these are large images.
     */
    appendHeavy() {
      const {
        pswp
      } = this;
      const appendHeavyNearby = true;
      if (this.heavyAppended || !pswp.opener.isOpen || pswp.mainScroll.isShifted() || !this.isActive && !appendHeavyNearby) {
        return;
      }
      if (this.pswp.dispatch("appendHeavy", {
        slide: this
      }).defaultPrevented) {
        return;
      }
      this.heavyAppended = true;
      this.content.append();
      this.pswp.dispatch("appendHeavyContent", {
        slide: this
      });
    }
    /**
     * Triggered when this slide is active (selected).
     *
     * If it's part of opening/closing transition -
     * activate() will trigger after the transition is ended.
     */
    activate() {
      this.isActive = true;
      this.appendHeavy();
      this.content.activate();
      this.pswp.dispatch("slideActivate", {
        slide: this
      });
    }
    /**
     * Triggered when this slide becomes inactive.
     *
     * Slide can become inactive only after it was active.
     */
    deactivate() {
      this.isActive = false;
      this.content.deactivate();
      if (this.currZoomLevel !== this.zoomLevels.initial) {
        this.calculateSize();
      }
      this.currentResolution = 0;
      this.zoomAndPanToInitial();
      this.applyCurrentZoomPan();
      this.updateContentSize();
      this.pswp.dispatch("slideDeactivate", {
        slide: this
      });
    }
    /**
     * The slide should destroy itself, it will never be used again.
     * (unbind all events and destroy internal components)
     */
    destroy() {
      this.content.hasSlide = false;
      this.content.remove();
      this.container.remove();
      this.pswp.dispatch("slideDestroy", {
        slide: this
      });
    }
    resize() {
      if (this.currZoomLevel === this.zoomLevels.initial || !this.isActive) {
        this.calculateSize();
        this.currentResolution = 0;
        this.zoomAndPanToInitial();
        this.applyCurrentZoomPan();
        this.updateContentSize();
      } else {
        this.calculateSize();
        this.bounds.update(this.currZoomLevel);
        this.panTo(this.pan.x, this.pan.y);
      }
    }
    /**
     * Apply size to current slide content,
     * based on the current resolution and scale.
     *
     * @param {boolean} [force] if size should be updated even if dimensions weren't changed
     */
    updateContentSize(force) {
      const scaleMultiplier = this.currentResolution || this.zoomLevels.initial;
      if (!scaleMultiplier) {
        return;
      }
      const width = Math.round(this.width * scaleMultiplier) || this.pswp.viewportSize.x;
      const height = Math.round(this.height * scaleMultiplier) || this.pswp.viewportSize.y;
      if (!this.sizeChanged(width, height) && !force) {
        return;
      }
      this.content.setDisplayedSize(width, height);
    }
    /**
     * @param {number} width
     * @param {number} height
     */
    sizeChanged(width, height) {
      if (width !== this.prevDisplayedWidth || height !== this.prevDisplayedHeight) {
        this.prevDisplayedWidth = width;
        this.prevDisplayedHeight = height;
        return true;
      }
      return false;
    }
    /** @returns {HTMLImageElement | HTMLDivElement | null | undefined} */
    getPlaceholderElement() {
      var _this$content$placeho;
      return (_this$content$placeho = this.content.placeholder) === null || _this$content$placeho === void 0 ? void 0 : _this$content$placeho.element;
    }
    /**
     * Zoom current slide image to...
     *
     * @param {number} destZoomLevel Destination zoom level.
     * @param {Point} [centerPoint]
     * Transform origin center point, or false if viewport center should be used.
     * @param {number | false} [transitionDuration] Transition duration, may be set to 0.
     * @param {boolean} [ignoreBounds] Minimum and maximum zoom levels will be ignored.
     */
    zoomTo(destZoomLevel, centerPoint, transitionDuration, ignoreBounds) {
      const {
        pswp
      } = this;
      if (!this.isZoomable() || pswp.mainScroll.isShifted()) {
        return;
      }
      pswp.dispatch("beforeZoomTo", {
        destZoomLevel,
        centerPoint,
        transitionDuration
      });
      pswp.animations.stopAllPan();
      const prevZoomLevel = this.currZoomLevel;
      if (!ignoreBounds) {
        destZoomLevel = clamp2(destZoomLevel, this.zoomLevels.min, this.zoomLevels.max);
      }
      this.setZoomLevel(destZoomLevel);
      this.pan.x = this.calculateZoomToPanOffset("x", centerPoint, prevZoomLevel);
      this.pan.y = this.calculateZoomToPanOffset("y", centerPoint, prevZoomLevel);
      roundPoint(this.pan);
      const finishTransition = () => {
        this._setResolution(destZoomLevel);
        this.applyCurrentZoomPan();
      };
      if (!transitionDuration) {
        finishTransition();
      } else {
        pswp.animations.startTransition({
          isPan: true,
          name: "zoomTo",
          target: this.container,
          transform: this.getCurrentTransform(),
          onComplete: finishTransition,
          duration: transitionDuration,
          easing: pswp.options.easing
        });
      }
    }
    /**
     * @param {Point} [centerPoint]
     */
    toggleZoom(centerPoint) {
      this.zoomTo(this.currZoomLevel === this.zoomLevels.initial ? this.zoomLevels.secondary : this.zoomLevels.initial, centerPoint, this.pswp.options.zoomAnimationDuration);
    }
    /**
     * Updates zoom level property and recalculates new pan bounds,
     * unlike zoomTo it does not apply transform (use applyCurrentZoomPan)
     *
     * @param {number} currZoomLevel
     */
    setZoomLevel(currZoomLevel) {
      this.currZoomLevel = currZoomLevel;
      this.bounds.update(this.currZoomLevel);
    }
    /**
     * Get pan position after zoom at a given `point`.
     *
     * Always call setZoomLevel(newZoomLevel) beforehand to recalculate
     * pan bounds according to the new zoom level.
     *
     * @param {'x' | 'y'} axis
     * @param {Point} [point]
     * point based on which zoom is performed, usually refers to the current mouse position,
     * if false - viewport center will be used.
     * @param {number} [prevZoomLevel] Zoom level before new zoom was applied.
     * @returns {number}
     */
    calculateZoomToPanOffset(axis, point, prevZoomLevel) {
      const totalPanDistance = this.bounds.max[axis] - this.bounds.min[axis];
      if (totalPanDistance === 0) {
        return this.bounds.center[axis];
      }
      if (!point) {
        point = this.pswp.getViewportCenterPoint();
      }
      if (!prevZoomLevel) {
        prevZoomLevel = this.zoomLevels.initial;
      }
      const zoomFactor = this.currZoomLevel / prevZoomLevel;
      return this.bounds.correctPan(axis, (this.pan[axis] - point[axis]) * zoomFactor + point[axis]);
    }
    /**
     * Apply pan and keep it within bounds.
     *
     * @param {number} panX
     * @param {number} panY
     */
    panTo(panX, panY) {
      this.pan.x = this.bounds.correctPan("x", panX);
      this.pan.y = this.bounds.correctPan("y", panY);
      this.applyCurrentZoomPan();
    }
    /**
     * If the slide in the current state can be panned by the user
     * @returns {boolean}
     */
    isPannable() {
      return Boolean(this.width) && this.currZoomLevel > this.zoomLevels.fit;
    }
    /**
     * If the slide can be zoomed
     * @returns {boolean}
     */
    isZoomable() {
      return Boolean(this.width) && this.content.isZoomable();
    }
    /**
     * Apply transform and scale based on
     * the current pan position (this.pan) and zoom level (this.currZoomLevel)
     */
    applyCurrentZoomPan() {
      this._applyZoomTransform(this.pan.x, this.pan.y, this.currZoomLevel);
      if (this === this.pswp.currSlide) {
        this.pswp.dispatch("zoomPanUpdate", {
          slide: this
        });
      }
    }
    zoomAndPanToInitial() {
      this.currZoomLevel = this.zoomLevels.initial;
      this.bounds.update(this.currZoomLevel);
      equalizePoints(this.pan, this.bounds.center);
      this.pswp.dispatch("initialZoomPan", {
        slide: this
      });
    }
    /**
     * Set translate and scale based on current resolution
     *
     * @param {number} x
     * @param {number} y
     * @param {number} zoom
     * @private
     */
    _applyZoomTransform(x, y, zoom) {
      zoom /= this.currentResolution || this.zoomLevels.initial;
      setTransform(this.container, x, y, zoom);
    }
    calculateSize() {
      const {
        pswp
      } = this;
      equalizePoints(this.panAreaSize, getPanAreaSize2(pswp.options, pswp.viewportSize, this.data, this.index));
      this.zoomLevels.update(this.width, this.height, this.panAreaSize);
      pswp.dispatch("calcSlideSize", {
        slide: this
      });
    }
    /** @returns {string} */
    getCurrentTransform() {
      const scale = this.currZoomLevel / (this.currentResolution || this.zoomLevels.initial);
      return toTransformString2(this.pan.x, this.pan.y, scale);
    }
    /**
     * Set resolution and re-render the image.
     *
     * For example, if the real image size is 2000x1500,
     * and resolution is 0.5 - it will be rendered as 1000x750.
     *
     * Image with zoom level 2 and resolution 0.5 is
     * the same as image with zoom level 1 and resolution 1.
     *
     * Used to optimize animations and make
     * sure that browser renders image in the highest quality.
     * Also used by responsive images to load the correct one.
     *
     * @param {number} newResolution
     */
    _setResolution(newResolution) {
      if (newResolution === this.currentResolution) {
        return;
      }
      this.currentResolution = newResolution;
      this.updateContentSize();
      this.pswp.dispatch("resolutionChanged");
    }
  };
  var PAN_END_FRICTION = 0.35;
  var VERTICAL_DRAG_FRICTION = 0.6;
  var MIN_RATIO_TO_CLOSE = 0.4;
  var MIN_NEXT_SLIDE_SPEED = 0.5;
  function project(initialVelocity, decelerationRate) {
    return initialVelocity * decelerationRate / (1 - decelerationRate);
  }
  var DragHandler = class {
    /**
     * @param {Gestures} gestures
     */
    constructor(gestures) {
      this.gestures = gestures;
      this.pswp = gestures.pswp;
      this.startPan = {
        x: 0,
        y: 0
      };
    }
    start() {
      if (this.pswp.currSlide) {
        equalizePoints(this.startPan, this.pswp.currSlide.pan);
      }
      this.pswp.animations.stopAll();
    }
    change() {
      const {
        p1,
        prevP1,
        dragAxis
      } = this.gestures;
      const {
        currSlide
      } = this.pswp;
      if (dragAxis === "y" && this.pswp.options.closeOnVerticalDrag && currSlide && currSlide.currZoomLevel <= currSlide.zoomLevels.fit && !this.gestures.isMultitouch) {
        const panY = currSlide.pan.y + (p1.y - prevP1.y);
        if (!this.pswp.dispatch("verticalDrag", {
          panY
        }).defaultPrevented) {
          this._setPanWithFriction("y", panY, VERTICAL_DRAG_FRICTION);
          const bgOpacity = 1 - Math.abs(this._getVerticalDragRatio(currSlide.pan.y));
          this.pswp.applyBgOpacity(bgOpacity);
          currSlide.applyCurrentZoomPan();
        }
      } else {
        const mainScrollChanged = this._panOrMoveMainScroll("x");
        if (!mainScrollChanged) {
          this._panOrMoveMainScroll("y");
          if (currSlide) {
            roundPoint(currSlide.pan);
            currSlide.applyCurrentZoomPan();
          }
        }
      }
    }
    end() {
      const {
        velocity
      } = this.gestures;
      const {
        mainScroll,
        currSlide
      } = this.pswp;
      let indexDiff = 0;
      this.pswp.animations.stopAll();
      if (mainScroll.isShifted()) {
        const mainScrollShiftDiff = mainScroll.x - mainScroll.getCurrSlideX();
        const currentSlideVisibilityRatio = mainScrollShiftDiff / this.pswp.viewportSize.x;
        if (velocity.x < -MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio < 0 || velocity.x < 0.1 && currentSlideVisibilityRatio < -0.5) {
          indexDiff = 1;
          velocity.x = Math.min(velocity.x, 0);
        } else if (velocity.x > MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio > 0 || velocity.x > -0.1 && currentSlideVisibilityRatio > 0.5) {
          indexDiff = -1;
          velocity.x = Math.max(velocity.x, 0);
        }
        mainScroll.moveIndexBy(indexDiff, true, velocity.x);
      }
      if (currSlide && currSlide.currZoomLevel > currSlide.zoomLevels.max || this.gestures.isMultitouch) {
        this.gestures.zoomLevels.correctZoomPan(true);
      } else {
        this._finishPanGestureForAxis("x");
        this._finishPanGestureForAxis("y");
      }
    }
    /**
     * @private
     * @param {'x' | 'y'} axis
     */
    _finishPanGestureForAxis(axis) {
      const {
        velocity
      } = this.gestures;
      const {
        currSlide
      } = this.pswp;
      if (!currSlide) {
        return;
      }
      const {
        pan,
        bounds
      } = currSlide;
      const panPos = pan[axis];
      const restoreBgOpacity = this.pswp.bgOpacity < 1 && axis === "y";
      const decelerationRate = 0.995;
      const projectedPosition = panPos + project(velocity[axis], decelerationRate);
      if (restoreBgOpacity) {
        const vDragRatio = this._getVerticalDragRatio(panPos);
        const projectedVDragRatio = this._getVerticalDragRatio(projectedPosition);
        if (vDragRatio < 0 && projectedVDragRatio < -MIN_RATIO_TO_CLOSE || vDragRatio > 0 && projectedVDragRatio > MIN_RATIO_TO_CLOSE) {
          this.pswp.close();
          return;
        }
      }
      const correctedPanPosition = bounds.correctPan(axis, projectedPosition);
      if (panPos === correctedPanPosition) {
        return;
      }
      const dampingRatio = correctedPanPosition === projectedPosition ? 1 : 0.82;
      const initialBgOpacity = this.pswp.bgOpacity;
      const totalPanDist = correctedPanPosition - panPos;
      this.pswp.animations.startSpring({
        name: "panGesture" + axis,
        isPan: true,
        start: panPos,
        end: correctedPanPosition,
        velocity: velocity[axis],
        dampingRatio,
        onUpdate: (pos) => {
          if (restoreBgOpacity && this.pswp.bgOpacity < 1) {
            const animationProgressRatio = 1 - (correctedPanPosition - pos) / totalPanDist;
            this.pswp.applyBgOpacity(clamp2(initialBgOpacity + (1 - initialBgOpacity) * animationProgressRatio, 0, 1));
          }
          pan[axis] = Math.floor(pos);
          currSlide.applyCurrentZoomPan();
        }
      });
    }
    /**
     * Update position of the main scroll,
     * or/and update pan position of the current slide.
     *
     * Should return true if it changes (or can change) main scroll.
     *
     * @private
     * @param {'x' | 'y'} axis
     * @returns {boolean}
     */
    _panOrMoveMainScroll(axis) {
      const {
        p1,
        dragAxis,
        prevP1,
        isMultitouch
      } = this.gestures;
      const {
        currSlide,
        mainScroll
      } = this.pswp;
      const delta = p1[axis] - prevP1[axis];
      const newMainScrollX = mainScroll.x + delta;
      if (!delta || !currSlide) {
        return false;
      }
      if (axis === "x" && !currSlide.isPannable() && !isMultitouch) {
        mainScroll.moveTo(newMainScrollX, true);
        return true;
      }
      const {
        bounds
      } = currSlide;
      const newPan = currSlide.pan[axis] + delta;
      if (this.pswp.options.allowPanToNext && dragAxis === "x" && axis === "x" && !isMultitouch) {
        const currSlideMainScrollX = mainScroll.getCurrSlideX();
        const mainScrollShiftDiff = mainScroll.x - currSlideMainScrollX;
        const isLeftToRight = delta > 0;
        const isRightToLeft = !isLeftToRight;
        if (newPan > bounds.min[axis] && isLeftToRight) {
          const wasAtMinPanPosition = bounds.min[axis] <= this.startPan[axis];
          if (wasAtMinPanPosition) {
            mainScroll.moveTo(newMainScrollX, true);
            return true;
          } else {
            this._setPanWithFriction(axis, newPan);
          }
        } else if (newPan < bounds.max[axis] && isRightToLeft) {
          const wasAtMaxPanPosition = this.startPan[axis] <= bounds.max[axis];
          if (wasAtMaxPanPosition) {
            mainScroll.moveTo(newMainScrollX, true);
            return true;
          } else {
            this._setPanWithFriction(axis, newPan);
          }
        } else {
          if (mainScrollShiftDiff !== 0) {
            if (mainScrollShiftDiff > 0) {
              mainScroll.moveTo(Math.max(newMainScrollX, currSlideMainScrollX), true);
              return true;
            } else if (mainScrollShiftDiff < 0) {
              mainScroll.moveTo(Math.min(newMainScrollX, currSlideMainScrollX), true);
              return true;
            }
          } else {
            this._setPanWithFriction(axis, newPan);
          }
        }
      } else {
        if (axis === "y") {
          if (!mainScroll.isShifted() && bounds.min.y !== bounds.max.y) {
            this._setPanWithFriction(axis, newPan);
          }
        } else {
          this._setPanWithFriction(axis, newPan);
        }
      }
      return false;
    }
    // If we move above - the ratio is negative
    // If we move below the ratio is positive
    /**
     * Relation between pan Y position and third of viewport height.
     *
     * When we are at initial position (center bounds) - the ratio is 0,
     * if position is shifted upwards - the ratio is negative,
     * if position is shifted downwards - the ratio is positive.
     *
     * @private
     * @param {number} panY The current pan Y position.
     * @returns {number}
     */
    _getVerticalDragRatio(panY) {
      var _this$pswp$currSlide$, _this$pswp$currSlide;
      return (panY - ((_this$pswp$currSlide$ = (_this$pswp$currSlide = this.pswp.currSlide) === null || _this$pswp$currSlide === void 0 ? void 0 : _this$pswp$currSlide.bounds.center.y) !== null && _this$pswp$currSlide$ !== void 0 ? _this$pswp$currSlide$ : 0)) / (this.pswp.viewportSize.y / 3);
    }
    /**
     * Set pan position of the current slide.
     * Apply friction if the position is beyond the pan bounds,
     * or if custom friction is defined.
     *
     * @private
     * @param {'x' | 'y'} axis
     * @param {number} potentialPan
     * @param {number} [customFriction] (0.1 - 1)
     */
    _setPanWithFriction(axis, potentialPan, customFriction) {
      const {
        currSlide
      } = this.pswp;
      if (!currSlide) {
        return;
      }
      const {
        pan,
        bounds
      } = currSlide;
      const correctedPan = bounds.correctPan(axis, potentialPan);
      if (correctedPan !== potentialPan || customFriction) {
        const delta = Math.round(potentialPan - pan[axis]);
        pan[axis] += delta * (customFriction || PAN_END_FRICTION);
      } else {
        pan[axis] = potentialPan;
      }
    }
  };
  var UPPER_ZOOM_FRICTION = 0.05;
  var LOWER_ZOOM_FRICTION = 0.15;
  function getZoomPointsCenter(p, p1, p2) {
    p.x = (p1.x + p2.x) / 2;
    p.y = (p1.y + p2.y) / 2;
    return p;
  }
  var ZoomHandler = class {
    /**
     * @param {Gestures} gestures
     */
    constructor(gestures) {
      this.gestures = gestures;
      this._startPan = {
        x: 0,
        y: 0
      };
      this._startZoomPoint = {
        x: 0,
        y: 0
      };
      this._zoomPoint = {
        x: 0,
        y: 0
      };
      this._wasOverFitZoomLevel = false;
      this._startZoomLevel = 1;
    }
    start() {
      const {
        currSlide
      } = this.gestures.pswp;
      if (currSlide) {
        this._startZoomLevel = currSlide.currZoomLevel;
        equalizePoints(this._startPan, currSlide.pan);
      }
      this.gestures.pswp.animations.stopAllPan();
      this._wasOverFitZoomLevel = false;
    }
    change() {
      const {
        p1,
        startP1,
        p2,
        startP2,
        pswp
      } = this.gestures;
      const {
        currSlide
      } = pswp;
      if (!currSlide) {
        return;
      }
      const minZoomLevel = currSlide.zoomLevels.min;
      const maxZoomLevel = currSlide.zoomLevels.max;
      if (!currSlide.isZoomable() || pswp.mainScroll.isShifted()) {
        return;
      }
      getZoomPointsCenter(this._startZoomPoint, startP1, startP2);
      getZoomPointsCenter(this._zoomPoint, p1, p2);
      let currZoomLevel = 1 / getDistanceBetween(startP1, startP2) * getDistanceBetween(p1, p2) * this._startZoomLevel;
      if (currZoomLevel > currSlide.zoomLevels.initial + currSlide.zoomLevels.initial / 15) {
        this._wasOverFitZoomLevel = true;
      }
      if (currZoomLevel < minZoomLevel) {
        if (pswp.options.pinchToClose && !this._wasOverFitZoomLevel && this._startZoomLevel <= currSlide.zoomLevels.initial) {
          const bgOpacity = 1 - (minZoomLevel - currZoomLevel) / (minZoomLevel / 1.2);
          if (!pswp.dispatch("pinchClose", {
            bgOpacity
          }).defaultPrevented) {
            pswp.applyBgOpacity(bgOpacity);
          }
        } else {
          currZoomLevel = minZoomLevel - (minZoomLevel - currZoomLevel) * LOWER_ZOOM_FRICTION;
        }
      } else if (currZoomLevel > maxZoomLevel) {
        currZoomLevel = maxZoomLevel + (currZoomLevel - maxZoomLevel) * UPPER_ZOOM_FRICTION;
      }
      currSlide.pan.x = this._calculatePanForZoomLevel("x", currZoomLevel);
      currSlide.pan.y = this._calculatePanForZoomLevel("y", currZoomLevel);
      currSlide.setZoomLevel(currZoomLevel);
      currSlide.applyCurrentZoomPan();
    }
    end() {
      const {
        pswp
      } = this.gestures;
      const {
        currSlide
      } = pswp;
      if ((!currSlide || currSlide.currZoomLevel < currSlide.zoomLevels.initial) && !this._wasOverFitZoomLevel && pswp.options.pinchToClose) {
        pswp.close();
      } else {
        this.correctZoomPan();
      }
    }
    /**
     * @private
     * @param {'x' | 'y'} axis
     * @param {number} currZoomLevel
     * @returns {number}
     */
    _calculatePanForZoomLevel(axis, currZoomLevel) {
      const zoomFactor = currZoomLevel / this._startZoomLevel;
      return this._zoomPoint[axis] - (this._startZoomPoint[axis] - this._startPan[axis]) * zoomFactor;
    }
    /**
     * Correct currZoomLevel and pan if they are
     * beyond minimum or maximum values.
     * With animation.
     *
     * @param {boolean} [ignoreGesture]
     * Wether gesture coordinates should be ignored when calculating destination pan position.
     */
    correctZoomPan(ignoreGesture) {
      const {
        pswp
      } = this.gestures;
      const {
        currSlide
      } = pswp;
      if (!(currSlide !== null && currSlide !== void 0 && currSlide.isZoomable())) {
        return;
      }
      if (this._zoomPoint.x === 0) {
        ignoreGesture = true;
      }
      const prevZoomLevel = currSlide.currZoomLevel;
      let destinationZoomLevel;
      let currZoomLevelNeedsChange = true;
      if (prevZoomLevel < currSlide.zoomLevels.initial) {
        destinationZoomLevel = currSlide.zoomLevels.initial;
      } else if (prevZoomLevel > currSlide.zoomLevels.max) {
        destinationZoomLevel = currSlide.zoomLevels.max;
      } else {
        currZoomLevelNeedsChange = false;
        destinationZoomLevel = prevZoomLevel;
      }
      const initialBgOpacity = pswp.bgOpacity;
      const restoreBgOpacity = pswp.bgOpacity < 1;
      const initialPan = equalizePoints({
        x: 0,
        y: 0
      }, currSlide.pan);
      let destinationPan = equalizePoints({
        x: 0,
        y: 0
      }, initialPan);
      if (ignoreGesture) {
        this._zoomPoint.x = 0;
        this._zoomPoint.y = 0;
        this._startZoomPoint.x = 0;
        this._startZoomPoint.y = 0;
        this._startZoomLevel = prevZoomLevel;
        equalizePoints(this._startPan, initialPan);
      }
      if (currZoomLevelNeedsChange) {
        destinationPan = {
          x: this._calculatePanForZoomLevel("x", destinationZoomLevel),
          y: this._calculatePanForZoomLevel("y", destinationZoomLevel)
        };
      }
      currSlide.setZoomLevel(destinationZoomLevel);
      destinationPan = {
        x: currSlide.bounds.correctPan("x", destinationPan.x),
        y: currSlide.bounds.correctPan("y", destinationPan.y)
      };
      currSlide.setZoomLevel(prevZoomLevel);
      const panNeedsChange = !pointsEqual(destinationPan, initialPan);
      if (!panNeedsChange && !currZoomLevelNeedsChange && !restoreBgOpacity) {
        currSlide._setResolution(destinationZoomLevel);
        currSlide.applyCurrentZoomPan();
        return;
      }
      pswp.animations.stopAllPan();
      pswp.animations.startSpring({
        isPan: true,
        start: 0,
        end: 1e3,
        velocity: 0,
        dampingRatio: 1,
        naturalFrequency: 40,
        onUpdate: (now2) => {
          now2 /= 1e3;
          if (panNeedsChange || currZoomLevelNeedsChange) {
            if (panNeedsChange) {
              currSlide.pan.x = initialPan.x + (destinationPan.x - initialPan.x) * now2;
              currSlide.pan.y = initialPan.y + (destinationPan.y - initialPan.y) * now2;
            }
            if (currZoomLevelNeedsChange) {
              const newZoomLevel = prevZoomLevel + (destinationZoomLevel - prevZoomLevel) * now2;
              currSlide.setZoomLevel(newZoomLevel);
            }
            currSlide.applyCurrentZoomPan();
          }
          if (restoreBgOpacity && pswp.bgOpacity < 1) {
            pswp.applyBgOpacity(clamp2(initialBgOpacity + (1 - initialBgOpacity) * now2, 0, 1));
          }
        },
        onComplete: () => {
          currSlide._setResolution(destinationZoomLevel);
          currSlide.applyCurrentZoomPan();
        }
      });
    }
  };
  function didTapOnMainContent(event2) {
    return !!/** @type {HTMLElement} */
    event2.target.closest(".pswp__container");
  }
  var TapHandler = class {
    /**
     * @param {Gestures} gestures
     */
    constructor(gestures) {
      this.gestures = gestures;
    }
    /**
     * @param {Point} point
     * @param {PointerEvent} originalEvent
     */
    click(point, originalEvent) {
      const targetClassList = (
        /** @type {HTMLElement} */
        originalEvent.target.classList
      );
      const isImageClick = targetClassList.contains("pswp__img");
      const isBackgroundClick = targetClassList.contains("pswp__item") || targetClassList.contains("pswp__zoom-wrap");
      if (isImageClick) {
        this._doClickOrTapAction("imageClick", point, originalEvent);
      } else if (isBackgroundClick) {
        this._doClickOrTapAction("bgClick", point, originalEvent);
      }
    }
    /**
     * @param {Point} point
     * @param {PointerEvent} originalEvent
     */
    tap(point, originalEvent) {
      if (didTapOnMainContent(originalEvent)) {
        this._doClickOrTapAction("tap", point, originalEvent);
      }
    }
    /**
     * @param {Point} point
     * @param {PointerEvent} originalEvent
     */
    doubleTap(point, originalEvent) {
      if (didTapOnMainContent(originalEvent)) {
        this._doClickOrTapAction("doubleTap", point, originalEvent);
      }
    }
    /**
     * @private
     * @param {Actions} actionName
     * @param {Point} point
     * @param {PointerEvent} originalEvent
     */
    _doClickOrTapAction(actionName, point, originalEvent) {
      var _this$gestures$pswp$e;
      const {
        pswp
      } = this.gestures;
      const {
        currSlide
      } = pswp;
      const actionFullName = (
        /** @type {AddPostfix<Actions, 'Action'>} */
        actionName + "Action"
      );
      const optionValue = pswp.options[actionFullName];
      if (pswp.dispatch(actionFullName, {
        point,
        originalEvent
      }).defaultPrevented) {
        return;
      }
      if (typeof optionValue === "function") {
        optionValue.call(pswp, point, originalEvent);
        return;
      }
      switch (optionValue) {
        case "close":
        case "next":
          pswp[optionValue]();
          break;
        case "zoom":
          currSlide === null || currSlide === void 0 || currSlide.toggleZoom(point);
          break;
        case "zoom-or-close":
          if (currSlide !== null && currSlide !== void 0 && currSlide.isZoomable() && currSlide.zoomLevels.secondary !== currSlide.zoomLevels.initial) {
            currSlide.toggleZoom(point);
          } else if (pswp.options.clickToCloseNonZoomable) {
            pswp.close();
          }
          break;
        case "toggle-controls":
          (_this$gestures$pswp$e = this.gestures.pswp.element) === null || _this$gestures$pswp$e === void 0 || _this$gestures$pswp$e.classList.toggle("pswp--ui-visible");
          break;
      }
    }
  };
  var AXIS_SWIPE_HYSTERISIS = 10;
  var DOUBLE_TAP_DELAY = 300;
  var MIN_TAP_DISTANCE = 25;
  var Gestures = class {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp) {
      this.pswp = pswp;
      this.dragAxis = null;
      this.p1 = {
        x: 0,
        y: 0
      };
      this.p2 = {
        x: 0,
        y: 0
      };
      this.prevP1 = {
        x: 0,
        y: 0
      };
      this.prevP2 = {
        x: 0,
        y: 0
      };
      this.startP1 = {
        x: 0,
        y: 0
      };
      this.startP2 = {
        x: 0,
        y: 0
      };
      this.velocity = {
        x: 0,
        y: 0
      };
      this._lastStartP1 = {
        x: 0,
        y: 0
      };
      this._intervalP1 = {
        x: 0,
        y: 0
      };
      this._numActivePoints = 0;
      this._ongoingPointers = [];
      this._touchEventEnabled = "ontouchstart" in window;
      this._pointerEventEnabled = !!window.PointerEvent;
      this.supportsTouch = this._touchEventEnabled || this._pointerEventEnabled && navigator.maxTouchPoints > 1;
      this._numActivePoints = 0;
      this._intervalTime = 0;
      this._velocityCalculated = false;
      this.isMultitouch = false;
      this.isDragging = false;
      this.isZooming = false;
      this.raf = null;
      this._tapTimer = null;
      if (!this.supportsTouch) {
        pswp.options.allowPanToNext = false;
      }
      this.drag = new DragHandler(this);
      this.zoomLevels = new ZoomHandler(this);
      this.tapHandler = new TapHandler(this);
      pswp.on("bindEvents", () => {
        pswp.events.add(
          pswp.scrollWrap,
          "click",
          /** @type EventListener */
          this._onClick.bind(this)
        );
        if (this._pointerEventEnabled) {
          this._bindEvents("pointer", "down", "up", "cancel");
        } else if (this._touchEventEnabled) {
          this._bindEvents("touch", "start", "end", "cancel");
          if (pswp.scrollWrap) {
            pswp.scrollWrap.ontouchmove = () => {
            };
            pswp.scrollWrap.ontouchend = () => {
            };
          }
        } else {
          this._bindEvents("mouse", "down", "up");
        }
      });
    }
    /**
     * @private
     * @param {'mouse' | 'touch' | 'pointer'} pref
     * @param {'down' | 'start'} down
     * @param {'up' | 'end'} up
     * @param {'cancel'} [cancel]
     */
    _bindEvents(pref, down, up, cancel) {
      const {
        pswp
      } = this;
      const {
        events: events2
      } = pswp;
      const cancelEvent = cancel ? pref + cancel : "";
      events2.add(
        pswp.scrollWrap,
        pref + down,
        /** @type EventListener */
        this.onPointerDown.bind(this)
      );
      events2.add(
        window,
        pref + "move",
        /** @type EventListener */
        this.onPointerMove.bind(this)
      );
      events2.add(
        window,
        pref + up,
        /** @type EventListener */
        this.onPointerUp.bind(this)
      );
      if (cancelEvent) {
        events2.add(
          pswp.scrollWrap,
          cancelEvent,
          /** @type EventListener */
          this.onPointerUp.bind(this)
        );
      }
    }
    /**
     * @param {PointerEvent} e
     */
    onPointerDown(e) {
      const isMousePointer = e.type === "mousedown" || e.pointerType === "mouse";
      if (isMousePointer && e.button > 0) {
        return;
      }
      const {
        pswp
      } = this;
      if (!pswp.opener.isOpen) {
        e.preventDefault();
        return;
      }
      if (pswp.dispatch("pointerDown", {
        originalEvent: e
      }).defaultPrevented) {
        return;
      }
      if (isMousePointer) {
        pswp.mouseDetected();
        this._preventPointerEventBehaviour(e, "down");
      }
      pswp.animations.stopAll();
      this._updatePoints(e, "down");
      if (this._numActivePoints === 1) {
        this.dragAxis = null;
        equalizePoints(this.startP1, this.p1);
      }
      if (this._numActivePoints > 1) {
        this._clearTapTimer();
        this.isMultitouch = true;
      } else {
        this.isMultitouch = false;
      }
    }
    /**
     * @param {PointerEvent} e
     */
    onPointerMove(e) {
      this._preventPointerEventBehaviour(e, "move");
      if (!this._numActivePoints) {
        return;
      }
      this._updatePoints(e, "move");
      if (this.pswp.dispatch("pointerMove", {
        originalEvent: e
      }).defaultPrevented) {
        return;
      }
      if (this._numActivePoints === 1 && !this.isDragging) {
        if (!this.dragAxis) {
          this._calculateDragDirection();
        }
        if (this.dragAxis && !this.isDragging) {
          if (this.isZooming) {
            this.isZooming = false;
            this.zoomLevels.end();
          }
          this.isDragging = true;
          this._clearTapTimer();
          this._updateStartPoints();
          this._intervalTime = Date.now();
          this._velocityCalculated = false;
          equalizePoints(this._intervalP1, this.p1);
          this.velocity.x = 0;
          this.velocity.y = 0;
          this.drag.start();
          this._rafStopLoop();
          this._rafRenderLoop();
        }
      } else if (this._numActivePoints > 1 && !this.isZooming) {
        this._finishDrag();
        this.isZooming = true;
        this._updateStartPoints();
        this.zoomLevels.start();
        this._rafStopLoop();
        this._rafRenderLoop();
      }
    }
    /**
     * @private
     */
    _finishDrag() {
      if (this.isDragging) {
        this.isDragging = false;
        if (!this._velocityCalculated) {
          this._updateVelocity(true);
        }
        this.drag.end();
        this.dragAxis = null;
      }
    }
    /**
     * @param {PointerEvent} e
     */
    onPointerUp(e) {
      if (!this._numActivePoints) {
        return;
      }
      this._updatePoints(e, "up");
      if (this.pswp.dispatch("pointerUp", {
        originalEvent: e
      }).defaultPrevented) {
        return;
      }
      if (this._numActivePoints === 0) {
        this._rafStopLoop();
        if (this.isDragging) {
          this._finishDrag();
        } else if (!this.isZooming && !this.isMultitouch) {
          this._finishTap(e);
        }
      }
      if (this._numActivePoints < 2 && this.isZooming) {
        this.isZooming = false;
        this.zoomLevels.end();
        if (this._numActivePoints === 1) {
          this.dragAxis = null;
          this._updateStartPoints();
        }
      }
    }
    /**
     * @private
     */
    _rafRenderLoop() {
      if (this.isDragging || this.isZooming) {
        this._updateVelocity();
        if (this.isDragging) {
          if (!pointsEqual(this.p1, this.prevP1)) {
            this.drag.change();
          }
        } else {
          if (!pointsEqual(this.p1, this.prevP1) || !pointsEqual(this.p2, this.prevP2)) {
            this.zoomLevels.change();
          }
        }
        this._updatePrevPoints();
        this.raf = requestAnimationFrame(this._rafRenderLoop.bind(this));
      }
    }
    /**
     * Update velocity at 50ms interval
     *
     * @private
     * @param {boolean} [force]
     */
    _updateVelocity(force) {
      const time = Date.now();
      const duration = time - this._intervalTime;
      if (duration < 50 && !force) {
        return;
      }
      this.velocity.x = this._getVelocity("x", duration);
      this.velocity.y = this._getVelocity("y", duration);
      this._intervalTime = time;
      equalizePoints(this._intervalP1, this.p1);
      this._velocityCalculated = true;
    }
    /**
     * @private
     * @param {PointerEvent} e
     */
    _finishTap(e) {
      const {
        mainScroll
      } = this.pswp;
      if (mainScroll.isShifted()) {
        mainScroll.moveIndexBy(0, true);
        return;
      }
      if (e.type.indexOf("cancel") > 0) {
        return;
      }
      if (e.type === "mouseup" || e.pointerType === "mouse") {
        this.tapHandler.click(this.startP1, e);
        return;
      }
      const tapDelay = this.pswp.options.doubleTapAction ? DOUBLE_TAP_DELAY : 0;
      if (this._tapTimer) {
        this._clearTapTimer();
        if (getDistanceBetween(this._lastStartP1, this.startP1) < MIN_TAP_DISTANCE) {
          this.tapHandler.doubleTap(this.startP1, e);
        }
      } else {
        equalizePoints(this._lastStartP1, this.startP1);
        this._tapTimer = setTimeout(() => {
          this.tapHandler.tap(this.startP1, e);
          this._clearTapTimer();
        }, tapDelay);
      }
    }
    /**
     * @private
     */
    _clearTapTimer() {
      if (this._tapTimer) {
        clearTimeout(this._tapTimer);
        this._tapTimer = null;
      }
    }
    /**
     * Get velocity for axis
     *
     * @private
     * @param {'x' | 'y'} axis
     * @param {number} duration
     * @returns {number}
     */
    _getVelocity(axis, duration) {
      const displacement = this.p1[axis] - this._intervalP1[axis];
      if (Math.abs(displacement) > 1 && duration > 5) {
        return displacement / duration;
      }
      return 0;
    }
    /**
     * @private
     */
    _rafStopLoop() {
      if (this.raf) {
        cancelAnimationFrame(this.raf);
        this.raf = null;
      }
    }
    /**
     * @private
     * @param {PointerEvent} e
     * @param {'up' | 'down' | 'move'} pointerType Normalized pointer type
     */
    _preventPointerEventBehaviour(e, pointerType) {
      const preventPointerEvent = this.pswp.applyFilters("preventPointerEvent", true, e, pointerType);
      if (preventPointerEvent) {
        e.preventDefault();
      }
    }
    /**
     * Parses and normalizes points from the touch, mouse or pointer event.
     * Updates p1 and p2.
     *
     * @private
     * @param {PointerEvent | TouchEvent} e
     * @param {'up' | 'down' | 'move'} pointerType Normalized pointer type
     */
    _updatePoints(e, pointerType) {
      if (this._pointerEventEnabled) {
        const pointerEvent = (
          /** @type {PointerEvent} */
          e
        );
        const pointerIndex = this._ongoingPointers.findIndex((ongoingPointer) => {
          return ongoingPointer.id === pointerEvent.pointerId;
        });
        if (pointerType === "up" && pointerIndex > -1) {
          this._ongoingPointers.splice(pointerIndex, 1);
        } else if (pointerType === "down" && pointerIndex === -1) {
          this._ongoingPointers.push(this._convertEventPosToPoint(pointerEvent, {
            x: 0,
            y: 0
          }));
        } else if (pointerIndex > -1) {
          this._convertEventPosToPoint(pointerEvent, this._ongoingPointers[pointerIndex]);
        }
        this._numActivePoints = this._ongoingPointers.length;
        if (this._numActivePoints > 0) {
          equalizePoints(this.p1, this._ongoingPointers[0]);
        }
        if (this._numActivePoints > 1) {
          equalizePoints(this.p2, this._ongoingPointers[1]);
        }
      } else {
        const touchEvent = (
          /** @type {TouchEvent} */
          e
        );
        this._numActivePoints = 0;
        if (touchEvent.type.indexOf("touch") > -1) {
          if (touchEvent.touches && touchEvent.touches.length > 0) {
            this._convertEventPosToPoint(touchEvent.touches[0], this.p1);
            this._numActivePoints++;
            if (touchEvent.touches.length > 1) {
              this._convertEventPosToPoint(touchEvent.touches[1], this.p2);
              this._numActivePoints++;
            }
          }
        } else {
          this._convertEventPosToPoint(
            /** @type {PointerEvent} */
            e,
            this.p1
          );
          if (pointerType === "up") {
            this._numActivePoints = 0;
          } else {
            this._numActivePoints++;
          }
        }
      }
    }
    /** update points that were used during previous rAF tick
     * @private
     */
    _updatePrevPoints() {
      equalizePoints(this.prevP1, this.p1);
      equalizePoints(this.prevP2, this.p2);
    }
    /** update points at the start of gesture
     * @private
     */
    _updateStartPoints() {
      equalizePoints(this.startP1, this.p1);
      equalizePoints(this.startP2, this.p2);
      this._updatePrevPoints();
    }
    /** @private */
    _calculateDragDirection() {
      if (this.pswp.mainScroll.isShifted()) {
        this.dragAxis = "x";
      } else {
        const diff = Math.abs(this.p1.x - this.startP1.x) - Math.abs(this.p1.y - this.startP1.y);
        if (diff !== 0) {
          const axisToCheck = diff > 0 ? "x" : "y";
          if (Math.abs(this.p1[axisToCheck] - this.startP1[axisToCheck]) >= AXIS_SWIPE_HYSTERISIS) {
            this.dragAxis = axisToCheck;
          }
        }
      }
    }
    /**
     * Converts touch, pointer or mouse event
     * to PhotoSwipe point.
     *
     * @private
     * @param {Touch | PointerEvent} e
     * @param {Point} p
     * @returns {Point}
     */
    _convertEventPosToPoint(e, p) {
      p.x = e.pageX - this.pswp.offset.x;
      p.y = e.pageY - this.pswp.offset.y;
      if ("pointerId" in e) {
        p.id = e.pointerId;
      } else if (e.identifier !== void 0) {
        p.id = e.identifier;
      }
      return p;
    }
    /**
     * @private
     * @param {PointerEvent} e
     */
    _onClick(e) {
      if (this.pswp.mainScroll.isShifted()) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  };
  var MAIN_SCROLL_END_FRICTION = 0.35;
  var MainScroll = class {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp) {
      this.pswp = pswp;
      this.x = 0;
      this.slideWidth = 0;
      this._currPositionIndex = 0;
      this._prevPositionIndex = 0;
      this._containerShiftIndex = -1;
      this.itemHolders = [];
    }
    /**
     * Position the scroller and slide containers
     * according to viewport size.
     *
     * @param {boolean} [resizeSlides] Whether slides content should resized
     */
    resize(resizeSlides) {
      const {
        pswp
      } = this;
      const newSlideWidth = Math.round(pswp.viewportSize.x + pswp.viewportSize.x * pswp.options.spacing);
      const slideWidthChanged = newSlideWidth !== this.slideWidth;
      if (slideWidthChanged) {
        this.slideWidth = newSlideWidth;
        this.moveTo(this.getCurrSlideX());
      }
      this.itemHolders.forEach((itemHolder, index) => {
        if (slideWidthChanged) {
          setTransform(itemHolder.el, (index + this._containerShiftIndex) * this.slideWidth);
        }
        if (resizeSlides && itemHolder.slide) {
          itemHolder.slide.resize();
        }
      });
    }
    /**
     * Reset X position of the main scroller to zero
     */
    resetPosition() {
      this._currPositionIndex = 0;
      this._prevPositionIndex = 0;
      this.slideWidth = 0;
      this._containerShiftIndex = -1;
    }
    /**
     * Create and append array of three items
     * that hold data about slides in DOM
     */
    appendHolders() {
      this.itemHolders = [];
      for (let i = 0; i < 3; i++) {
        const el = createElement4("pswp__item", "div", this.pswp.container);
        el.setAttribute("role", "group");
        el.setAttribute("aria-roledescription", "slide");
        el.setAttribute("aria-hidden", "true");
        el.style.display = i === 1 ? "block" : "none";
        this.itemHolders.push({
          el
          //index: -1
        });
      }
    }
    /**
     * Whether the main scroll can be horizontally swiped to the next or previous slide.
     * @returns {boolean}
     */
    canBeSwiped() {
      return this.pswp.getNumItems() > 1;
    }
    /**
     * Move main scroll by X amount of slides.
     * For example:
     *   `-1` will move to the previous slide,
     *    `0` will reset the scroll position of the current slide,
     *    `3` will move three slides forward
     *
     * If loop option is enabled - index will be automatically looped too,
     * (for example `-1` will move to the last slide of the gallery).
     *
     * @param {number} diff
     * @param {boolean} [animate]
     * @param {number} [velocityX]
     * @returns {boolean} whether index was changed or not
     */
    moveIndexBy(diff, animate, velocityX) {
      const {
        pswp
      } = this;
      let newIndex = pswp.potentialIndex + diff;
      const numSlides = pswp.getNumItems();
      if (pswp.canLoop()) {
        newIndex = pswp.getLoopedIndex(newIndex);
        const distance = (diff + numSlides) % numSlides;
        if (distance <= numSlides / 2) {
          diff = distance;
        } else {
          diff = distance - numSlides;
        }
      } else {
        if (newIndex < 0) {
          newIndex = 0;
        } else if (newIndex >= numSlides) {
          newIndex = numSlides - 1;
        }
        diff = newIndex - pswp.potentialIndex;
      }
      pswp.potentialIndex = newIndex;
      this._currPositionIndex -= diff;
      pswp.animations.stopMainScroll();
      const destinationX = this.getCurrSlideX();
      if (!animate) {
        this.moveTo(destinationX);
        this.updateCurrItem();
      } else {
        pswp.animations.startSpring({
          isMainScroll: true,
          start: this.x,
          end: destinationX,
          velocity: velocityX || 0,
          naturalFrequency: 30,
          dampingRatio: 1,
          //0.7,
          onUpdate: (x) => {
            this.moveTo(x);
          },
          onComplete: () => {
            this.updateCurrItem();
            pswp.appendHeavy();
          }
        });
        let currDiff = pswp.potentialIndex - pswp.currIndex;
        if (pswp.canLoop()) {
          const currDistance = (currDiff + numSlides) % numSlides;
          if (currDistance <= numSlides / 2) {
            currDiff = currDistance;
          } else {
            currDiff = currDistance - numSlides;
          }
        }
        if (Math.abs(currDiff) > 1) {
          this.updateCurrItem();
        }
      }
      return Boolean(diff);
    }
    /**
     * X position of the main scroll for the current slide
     * (ignores position during dragging)
     * @returns {number}
     */
    getCurrSlideX() {
      return this.slideWidth * this._currPositionIndex;
    }
    /**
     * Whether scroll position is shifted.
     * For example, it will return true if the scroll is being dragged or animated.
     * @returns {boolean}
     */
    isShifted() {
      return this.x !== this.getCurrSlideX();
    }
    /**
     * Update slides X positions and set their content
     */
    updateCurrItem() {
      var _this$itemHolders$;
      const {
        pswp
      } = this;
      const positionDifference = this._prevPositionIndex - this._currPositionIndex;
      if (!positionDifference) {
        return;
      }
      this._prevPositionIndex = this._currPositionIndex;
      pswp.currIndex = pswp.potentialIndex;
      let diffAbs = Math.abs(positionDifference);
      let tempHolder;
      if (diffAbs >= 3) {
        this._containerShiftIndex += positionDifference + (positionDifference > 0 ? -3 : 3);
        diffAbs = 3;
        this.itemHolders.forEach((itemHolder) => {
          var _itemHolder$slide;
          (_itemHolder$slide = itemHolder.slide) === null || _itemHolder$slide === void 0 || _itemHolder$slide.destroy();
          itemHolder.slide = void 0;
        });
      }
      for (let i = 0; i < diffAbs; i++) {
        if (positionDifference > 0) {
          tempHolder = this.itemHolders.shift();
          if (tempHolder) {
            this.itemHolders[2] = tempHolder;
            this._containerShiftIndex++;
            setTransform(tempHolder.el, (this._containerShiftIndex + 2) * this.slideWidth);
            pswp.setContent(tempHolder, pswp.currIndex - diffAbs + i + 2);
          }
        } else {
          tempHolder = this.itemHolders.pop();
          if (tempHolder) {
            this.itemHolders.unshift(tempHolder);
            this._containerShiftIndex--;
            setTransform(tempHolder.el, this._containerShiftIndex * this.slideWidth);
            pswp.setContent(tempHolder, pswp.currIndex + diffAbs - i - 2);
          }
        }
      }
      if (Math.abs(this._containerShiftIndex) > 50 && !this.isShifted()) {
        this.resetPosition();
        this.resize();
      }
      pswp.animations.stopAllPan();
      this.itemHolders.forEach((itemHolder, i) => {
        if (itemHolder.slide) {
          itemHolder.slide.setIsActive(i === 1);
        }
      });
      pswp.currSlide = (_this$itemHolders$ = this.itemHolders[1]) === null || _this$itemHolders$ === void 0 ? void 0 : _this$itemHolders$.slide;
      pswp.contentLoader.updateLazy(positionDifference);
      if (pswp.currSlide) {
        pswp.currSlide.applyCurrentZoomPan();
      }
      pswp.dispatch("change");
    }
    /**
     * Move the X position of the main scroll container
     *
     * @param {number} x
     * @param {boolean} [dragging]
     */
    moveTo(x, dragging) {
      if (!this.pswp.canLoop() && dragging) {
        let newSlideIndexOffset = (this.slideWidth * this._currPositionIndex - x) / this.slideWidth;
        newSlideIndexOffset += this.pswp.currIndex;
        const delta = Math.round(x - this.x);
        if (newSlideIndexOffset < 0 && delta > 0 || newSlideIndexOffset >= this.pswp.getNumItems() - 1 && delta < 0) {
          x = this.x + delta * MAIN_SCROLL_END_FRICTION;
        }
      }
      this.x = x;
      if (this.pswp.container) {
        setTransform(this.pswp.container, x);
      }
      this.pswp.dispatch("moveMainScroll", {
        x,
        dragging: dragging !== null && dragging !== void 0 ? dragging : false
      });
    }
  };
  var KeyboardKeyCodesMap = {
    Escape: 27,
    z: 90,
    ArrowLeft: 37,
    ArrowUp: 38,
    ArrowRight: 39,
    ArrowDown: 40,
    Tab: 9
  };
  var getKeyboardEventKey = (key, isKeySupported) => {
    return isKeySupported ? key : KeyboardKeyCodesMap[key];
  };
  var Keyboard2 = class {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp) {
      this.pswp = pswp;
      this._wasFocused = false;
      pswp.on("bindEvents", () => {
        if (pswp.options.trapFocus) {
          if (!pswp.options.initialPointerPos) {
            this._focusRoot();
          }
          pswp.events.add(
            document,
            "focusin",
            /** @type EventListener */
            this._onFocusIn.bind(this)
          );
        }
        pswp.events.add(
          document,
          "keydown",
          /** @type EventListener */
          this._onKeyDown.bind(this)
        );
      });
      const lastActiveElement = (
        /** @type {HTMLElement} */
        document.activeElement
      );
      pswp.on("destroy", () => {
        if (pswp.options.returnFocus && lastActiveElement && this._wasFocused) {
          lastActiveElement.focus();
        }
      });
    }
    /** @private */
    _focusRoot() {
      if (!this._wasFocused && this.pswp.element) {
        this.pswp.element.focus();
        this._wasFocused = true;
      }
    }
    /**
     * @private
     * @param {KeyboardEvent} e
     */
    _onKeyDown(e) {
      const {
        pswp
      } = this;
      if (pswp.dispatch("keydown", {
        originalEvent: e
      }).defaultPrevented) {
        return;
      }
      if (specialKeyUsed2(e)) {
        return;
      }
      let keydownAction;
      let axis;
      let isForward = false;
      const isKeySupported = "key" in e;
      switch (isKeySupported ? e.key : e.keyCode) {
        case getKeyboardEventKey("Escape", isKeySupported):
          if (pswp.options.escKey) {
            keydownAction = "close";
          }
          break;
        case getKeyboardEventKey("z", isKeySupported):
          keydownAction = "toggleZoom";
          break;
        case getKeyboardEventKey("ArrowLeft", isKeySupported):
          axis = "x";
          break;
        case getKeyboardEventKey("ArrowUp", isKeySupported):
          axis = "y";
          break;
        case getKeyboardEventKey("ArrowRight", isKeySupported):
          axis = "x";
          isForward = true;
          break;
        case getKeyboardEventKey("ArrowDown", isKeySupported):
          isForward = true;
          axis = "y";
          break;
        case getKeyboardEventKey("Tab", isKeySupported):
          this._focusRoot();
          break;
      }
      if (axis) {
        e.preventDefault();
        const {
          currSlide
        } = pswp;
        if (pswp.options.arrowKeys && axis === "x" && pswp.getNumItems() > 1) {
          keydownAction = isForward ? "next" : "prev";
        } else if (currSlide && currSlide.currZoomLevel > currSlide.zoomLevels.fit) {
          currSlide.pan[axis] += isForward ? -80 : 80;
          currSlide.panTo(currSlide.pan.x, currSlide.pan.y);
        }
      }
      if (keydownAction) {
        e.preventDefault();
        pswp[keydownAction]();
      }
    }
    /**
     * Trap focus inside photoswipe
     *
     * @private
     * @param {FocusEvent} e
     */
    _onFocusIn(e) {
      const {
        template
      } = this.pswp;
      if (template && document !== e.target && template !== e.target && !template.contains(
        /** @type {Node} */
        e.target
      )) {
        template.focus();
      }
    }
  };
  var DEFAULT_EASING = "cubic-bezier(.4,0,.22,1)";
  var CSSAnimation = class {
    /**
     * onComplete can be unpredictable, be careful about current state
     *
     * @param {CssAnimationProps} props
     */
    constructor(props) {
      var _props$prop;
      this.props = props;
      const {
        target,
        onComplete,
        transform,
        onFinish = () => {
        },
        duration = 333,
        easing = DEFAULT_EASING
      } = props;
      this.onFinish = onFinish;
      const prop = transform ? "transform" : "opacity";
      const propValue = (_props$prop = props[prop]) !== null && _props$prop !== void 0 ? _props$prop : "";
      this._target = target;
      this._onComplete = onComplete;
      this._finished = false;
      this._onTransitionEnd = this._onTransitionEnd.bind(this);
      this._helperTimeout = setTimeout(() => {
        setTransitionStyle(target, prop, duration, easing);
        this._helperTimeout = setTimeout(() => {
          target.addEventListener("transitionend", this._onTransitionEnd, false);
          target.addEventListener("transitioncancel", this._onTransitionEnd, false);
          this._helperTimeout = setTimeout(() => {
            this._finalizeAnimation();
          }, duration + 500);
          target.style[prop] = propValue;
        }, 30);
      }, 0);
    }
    /**
     * @private
     * @param {TransitionEvent} e
     */
    _onTransitionEnd(e) {
      if (e.target === this._target) {
        this._finalizeAnimation();
      }
    }
    /**
     * @private
     */
    _finalizeAnimation() {
      if (!this._finished) {
        this._finished = true;
        this.onFinish();
        if (this._onComplete) {
          this._onComplete();
        }
      }
    }
    // Destroy is called automatically onFinish
    destroy() {
      if (this._helperTimeout) {
        clearTimeout(this._helperTimeout);
      }
      removeTransitionStyle(this._target);
      this._target.removeEventListener("transitionend", this._onTransitionEnd, false);
      this._target.removeEventListener("transitioncancel", this._onTransitionEnd, false);
      if (!this._finished) {
        this._finalizeAnimation();
      }
    }
  };
  var DEFAULT_NATURAL_FREQUENCY = 12;
  var DEFAULT_DAMPING_RATIO = 0.75;
  var SpringEaser = class {
    /**
     * @param {number} initialVelocity Initial velocity, px per ms.
     *
     * @param {number} [dampingRatio]
     * Determines how bouncy animation will be.
     * From 0 to 1, 0 - always overshoot, 1 - do not overshoot.
     * "overshoot" refers to part of animation that
     * goes beyond the final value.
     *
     * @param {number} [naturalFrequency]
     * Determines how fast animation will slow down.
     * The higher value - the stiffer the transition will be,
     * and the faster it will slow down.
     * Recommended value from 10 to 50
     */
    constructor(initialVelocity, dampingRatio, naturalFrequency) {
      this.velocity = initialVelocity * 1e3;
      this._dampingRatio = dampingRatio || DEFAULT_DAMPING_RATIO;
      this._naturalFrequency = naturalFrequency || DEFAULT_NATURAL_FREQUENCY;
      this._dampedFrequency = this._naturalFrequency;
      if (this._dampingRatio < 1) {
        this._dampedFrequency *= Math.sqrt(1 - this._dampingRatio * this._dampingRatio);
      }
    }
    /**
     * @param {number} deltaPosition Difference between current and end position of the animation
     * @param {number} deltaTime Frame duration in milliseconds
     *
     * @returns {number} Displacement, relative to the end position.
     */
    easeFrame(deltaPosition, deltaTime) {
      let displacement = 0;
      let coeff;
      deltaTime /= 1e3;
      const naturalDumpingPow = __pow(Math.E, -this._dampingRatio * this._naturalFrequency * deltaTime);
      if (this._dampingRatio === 1) {
        coeff = this.velocity + this._naturalFrequency * deltaPosition;
        displacement = (deltaPosition + coeff * deltaTime) * naturalDumpingPow;
        this.velocity = displacement * -this._naturalFrequency + coeff * naturalDumpingPow;
      } else if (this._dampingRatio < 1) {
        coeff = 1 / this._dampedFrequency * (this._dampingRatio * this._naturalFrequency * deltaPosition + this.velocity);
        const dumpedFCos = Math.cos(this._dampedFrequency * deltaTime);
        const dumpedFSin = Math.sin(this._dampedFrequency * deltaTime);
        displacement = naturalDumpingPow * (deltaPosition * dumpedFCos + coeff * dumpedFSin);
        this.velocity = displacement * -this._naturalFrequency * this._dampingRatio + naturalDumpingPow * (-this._dampedFrequency * deltaPosition * dumpedFSin + this._dampedFrequency * coeff * dumpedFCos);
      }
      return displacement;
    }
  };
  var SpringAnimation = class {
    /**
     * @param {SpringAnimationProps} props
     */
    constructor(props) {
      this.props = props;
      this._raf = 0;
      const {
        start,
        end,
        velocity,
        onUpdate,
        onComplete,
        onFinish = () => {
        },
        dampingRatio,
        naturalFrequency
      } = props;
      this.onFinish = onFinish;
      const easer = new SpringEaser(velocity, dampingRatio, naturalFrequency);
      let prevTime = Date.now();
      let deltaPosition = start - end;
      const animationLoop = () => {
        if (this._raf) {
          deltaPosition = easer.easeFrame(deltaPosition, Date.now() - prevTime);
          if (Math.abs(deltaPosition) < 1 && Math.abs(easer.velocity) < 50) {
            onUpdate(end);
            if (onComplete) {
              onComplete();
            }
            this.onFinish();
          } else {
            prevTime = Date.now();
            onUpdate(deltaPosition + end);
            this._raf = requestAnimationFrame(animationLoop);
          }
        }
      };
      this._raf = requestAnimationFrame(animationLoop);
    }
    // Destroy is called automatically onFinish
    destroy() {
      if (this._raf >= 0) {
        cancelAnimationFrame(this._raf);
      }
      this._raf = 0;
    }
  };
  var Animations = class {
    constructor() {
      this.activeAnimations = [];
    }
    /**
     * @param {SpringAnimationProps} props
     */
    startSpring(props) {
      this._start(props, true);
    }
    /**
     * @param {CssAnimationProps} props
     */
    startTransition(props) {
      this._start(props);
    }
    /**
     * @private
     * @param {AnimationProps} props
     * @param {boolean} [isSpring]
     * @returns {Animation}
     */
    _start(props, isSpring) {
      const animation = isSpring ? new SpringAnimation(
        /** @type SpringAnimationProps */
        props
      ) : new CSSAnimation(
        /** @type CssAnimationProps */
        props
      );
      this.activeAnimations.push(animation);
      animation.onFinish = () => this.stop(animation);
      return animation;
    }
    /**
     * @param {Animation} animation
     */
    stop(animation) {
      animation.destroy();
      const index = this.activeAnimations.indexOf(animation);
      if (index > -1) {
        this.activeAnimations.splice(index, 1);
      }
    }
    stopAll() {
      this.activeAnimations.forEach((animation) => {
        animation.destroy();
      });
      this.activeAnimations = [];
    }
    /**
     * Stop all pan or zoom transitions
     */
    stopAllPan() {
      this.activeAnimations = this.activeAnimations.filter((animation) => {
        if (animation.props.isPan) {
          animation.destroy();
          return false;
        }
        return true;
      });
    }
    stopMainScroll() {
      this.activeAnimations = this.activeAnimations.filter((animation) => {
        if (animation.props.isMainScroll) {
          animation.destroy();
          return false;
        }
        return true;
      });
    }
    /**
     * Returns true if main scroll transition is running
     */
    // isMainScrollRunning() {
    //   return this.activeAnimations.some((animation) => {
    //     return animation.props.isMainScroll;
    //   });
    // }
    /**
     * Returns true if any pan or zoom transition is running
     */
    isPanRunning() {
      return this.activeAnimations.some((animation) => {
        return animation.props.isPan;
      });
    }
  };
  var ScrollWheel = class {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp) {
      this.pswp = pswp;
      pswp.events.add(
        pswp.element,
        "wheel",
        /** @type EventListener */
        this._onWheel.bind(this)
      );
    }
    /**
     * @private
     * @param {WheelEvent} e
     */
    _onWheel(e) {
      e.preventDefault();
      const {
        currSlide
      } = this.pswp;
      let {
        deltaX,
        deltaY
      } = e;
      if (!currSlide) {
        return;
      }
      if (this.pswp.dispatch("wheel", {
        originalEvent: e
      }).defaultPrevented) {
        return;
      }
      if (e.ctrlKey || this.pswp.options.wheelToZoom) {
        if (currSlide.isZoomable()) {
          let zoomFactor = -deltaY;
          if (e.deltaMode === 1) {
            zoomFactor *= 0.05;
          } else {
            zoomFactor *= e.deltaMode ? 1 : 2e-3;
          }
          zoomFactor = __pow(2, zoomFactor);
          const destZoomLevel = currSlide.currZoomLevel * zoomFactor;
          currSlide.zoomTo(destZoomLevel, {
            x: e.clientX,
            y: e.clientY
          });
        }
      } else {
        if (currSlide.isPannable()) {
          if (e.deltaMode === 1) {
            deltaX *= 18;
            deltaY *= 18;
          }
          currSlide.panTo(currSlide.pan.x - deltaX, currSlide.pan.y - deltaY);
        }
      }
    }
  };
  function addElementHTML(htmlData) {
    if (typeof htmlData === "string") {
      return htmlData;
    }
    if (!htmlData || !htmlData.isCustomSVG) {
      return "";
    }
    const svgData = htmlData;
    let out = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 %d %d" width="%d" height="%d">';
    out = out.split("%d").join(
      /** @type {string} */
      svgData.size || 32
    );
    if (svgData.outlineID) {
      out += '<use class="pswp__icn-shadow" xlink:href="#' + svgData.outlineID + '"/>';
    }
    out += svgData.inner;
    out += "</svg>";
    return out;
  }
  var UIElement = class {
    /**
     * @param {PhotoSwipe} pswp
     * @param {UIElementData} data
     */
    constructor(pswp, data) {
      var _container;
      const name = data.name || data.className;
      let elementHTML = data.html;
      if (pswp.options[name] === false) {
        return;
      }
      if (typeof pswp.options[name + "SVG"] === "string") {
        elementHTML = pswp.options[name + "SVG"];
      }
      pswp.dispatch("uiElementCreate", {
        data
      });
      let className = "";
      if (data.isButton) {
        className += "pswp__button ";
        className += data.className || "pswp__button--".concat(data.name);
      } else {
        className += data.className || "pswp__".concat(data.name);
      }
      let tagName = data.isButton ? data.tagName || "button" : data.tagName || "div";
      tagName = /** @type {keyof HTMLElementTagNameMap} */
      tagName.toLowerCase();
      const element = createElement4(className, tagName);
      if (data.isButton) {
        if (tagName === "button") {
          element.type = "button";
        }
        let {
          title
        } = data;
        const {
          ariaLabel
        } = data;
        if (typeof pswp.options[name + "Title"] === "string") {
          title = pswp.options[name + "Title"];
        }
        if (title) {
          element.title = title;
        }
        const ariaText = ariaLabel || title;
        if (ariaText) {
          element.setAttribute("aria-label", ariaText);
        }
      }
      element.innerHTML = addElementHTML(elementHTML);
      if (data.onInit) {
        data.onInit(element, pswp);
      }
      if (data.onClick) {
        element.onclick = (e) => {
          if (typeof data.onClick === "string") {
            pswp[data.onClick]();
          } else if (typeof data.onClick === "function") {
            data.onClick(e, element, pswp);
          }
        };
      }
      const appendTo = data.appendTo || "bar";
      let container = pswp.element;
      if (appendTo === "bar") {
        if (!pswp.topBar) {
          pswp.topBar = createElement4("pswp__top-bar pswp__hide-on-close", "div", pswp.scrollWrap);
        }
        container = pswp.topBar;
      } else {
        element.classList.add("pswp__hide-on-close");
        if (appendTo === "wrapper") {
          container = pswp.scrollWrap;
        }
      }
      (_container = container) === null || _container === void 0 || _container.appendChild(pswp.applyFilters("uiElement", element, data));
    }
  };
  function initArrowButton(element, pswp, isNextButton) {
    element.classList.add("pswp__button--arrow");
    element.setAttribute("aria-controls", "pswp__items");
    pswp.on("change", () => {
      if (!pswp.options.loop) {
        if (isNextButton) {
          element.disabled = !(pswp.currIndex < pswp.getNumItems() - 1);
        } else {
          element.disabled = !(pswp.currIndex > 0);
        }
      }
    });
  }
  var arrowPrev = {
    name: "arrowPrev",
    className: "pswp__button--arrow--prev",
    title: "Previous",
    order: 10,
    isButton: true,
    appendTo: "wrapper",
    html: {
      isCustomSVG: true,
      size: 60,
      inner: '<path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z" id="pswp__icn-arrow"/>',
      outlineID: "pswp__icn-arrow"
    },
    onClick: "prev",
    onInit: initArrowButton
  };
  var arrowNext = {
    name: "arrowNext",
    className: "pswp__button--arrow--next",
    title: "Next",
    order: 11,
    isButton: true,
    appendTo: "wrapper",
    html: {
      isCustomSVG: true,
      size: 60,
      inner: '<use xlink:href="#pswp__icn-arrow"/>',
      outlineID: "pswp__icn-arrow"
    },
    onClick: "next",
    onInit: (el, pswp) => {
      initArrowButton(el, pswp, true);
    }
  };
  var closeButton = {
    name: "close",
    title: "Close",
    order: 20,
    isButton: true,
    html: {
      isCustomSVG: true,
      inner: '<path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"/>',
      outlineID: "pswp__icn-close"
    },
    onClick: "close"
  };
  var zoomButton = {
    name: "zoom",
    title: "Zoom",
    order: 10,
    isButton: true,
    html: {
      isCustomSVG: true,
      // eslint-disable-next-line max-len
      inner: '<path d="M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z" id="pswp__icn-zoom"/><path fill="currentColor" class="pswp__zoom-icn-bar-h" d="M11 16v-2h6v2z"/><path fill="currentColor" class="pswp__zoom-icn-bar-v" d="M13 12h2v6h-2z"/>',
      outlineID: "pswp__icn-zoom"
    },
    onClick: "toggleZoom"
  };
  var loadingIndicator = {
    name: "preloader",
    appendTo: "bar",
    order: 7,
    html: {
      isCustomSVG: true,
      // eslint-disable-next-line max-len
      inner: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z" id="pswp__icn-loading"/>',
      outlineID: "pswp__icn-loading"
    },
    onInit: (indicatorElement, pswp) => {
      let isVisible;
      let delayTimeout = null;
      const toggleIndicatorClass = (className, add) => {
        indicatorElement.classList.toggle("pswp__preloader--" + className, add);
      };
      const setIndicatorVisibility = (visible) => {
        if (isVisible !== visible) {
          isVisible = visible;
          toggleIndicatorClass("active", visible);
        }
      };
      const updatePreloaderVisibility = () => {
        var _pswp$currSlide;
        if (!((_pswp$currSlide = pswp.currSlide) !== null && _pswp$currSlide !== void 0 && _pswp$currSlide.content.isLoading())) {
          setIndicatorVisibility(false);
          if (delayTimeout) {
            clearTimeout(delayTimeout);
            delayTimeout = null;
          }
          return;
        }
        if (!delayTimeout) {
          delayTimeout = setTimeout(() => {
            var _pswp$currSlide2;
            setIndicatorVisibility(Boolean((_pswp$currSlide2 = pswp.currSlide) === null || _pswp$currSlide2 === void 0 ? void 0 : _pswp$currSlide2.content.isLoading()));
            delayTimeout = null;
          }, pswp.options.preloaderDelay);
        }
      };
      pswp.on("change", updatePreloaderVisibility);
      pswp.on("loadComplete", (e) => {
        if (pswp.currSlide === e.slide) {
          updatePreloaderVisibility();
        }
      });
      if (pswp.ui) {
        pswp.ui.updatePreloaderVisibility = updatePreloaderVisibility;
      }
    }
  };
  var counterIndicator = {
    name: "counter",
    order: 5,
    onInit: (counterElement, pswp) => {
      pswp.on("change", () => {
        counterElement.innerText = pswp.currIndex + 1 + pswp.options.indexIndicatorSep + pswp.getNumItems();
      });
    }
  };
  function setZoomedIn(el, isZoomedIn) {
    el.classList.toggle("pswp--zoomed-in", isZoomedIn);
  }
  var UI = class {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp) {
      this.pswp = pswp;
      this.isRegistered = false;
      this.uiElementsData = [];
      this.items = [];
      this.updatePreloaderVisibility = () => {
      };
      this._lastUpdatedZoomLevel = void 0;
    }
    init() {
      const {
        pswp
      } = this;
      this.isRegistered = false;
      this.uiElementsData = [closeButton, arrowPrev, arrowNext, zoomButton, loadingIndicator, counterIndicator];
      pswp.dispatch("uiRegister");
      this.uiElementsData.sort((a, b) => {
        return (a.order || 0) - (b.order || 0);
      });
      this.items = [];
      this.isRegistered = true;
      this.uiElementsData.forEach((uiElementData) => {
        this.registerElement(uiElementData);
      });
      pswp.on("change", () => {
        var _pswp$element;
        (_pswp$element = pswp.element) === null || _pswp$element === void 0 || _pswp$element.classList.toggle("pswp--one-slide", pswp.getNumItems() === 1);
      });
      pswp.on("zoomPanUpdate", () => this._onZoomPanUpdate());
    }
    /**
     * @param {UIElementData} elementData
     */
    registerElement(elementData) {
      if (this.isRegistered) {
        this.items.push(new UIElement(this.pswp, elementData));
      } else {
        this.uiElementsData.push(elementData);
      }
    }
    /**
     * Fired each time zoom or pan position is changed.
     * Update classes that control visibility of zoom button and cursor icon.
     *
     * @private
     */
    _onZoomPanUpdate() {
      const {
        template,
        currSlide,
        options
      } = this.pswp;
      if (this.pswp.opener.isClosing || !template || !currSlide) {
        return;
      }
      let {
        currZoomLevel
      } = currSlide;
      if (!this.pswp.opener.isOpen) {
        currZoomLevel = currSlide.zoomLevels.initial;
      }
      if (currZoomLevel === this._lastUpdatedZoomLevel) {
        return;
      }
      this._lastUpdatedZoomLevel = currZoomLevel;
      const currZoomLevelDiff = currSlide.zoomLevels.initial - currSlide.zoomLevels.secondary;
      if (Math.abs(currZoomLevelDiff) < 0.01 || !currSlide.isZoomable()) {
        setZoomedIn(template, false);
        template.classList.remove("pswp--zoom-allowed");
        return;
      }
      template.classList.add("pswp--zoom-allowed");
      const potentialZoomLevel = currZoomLevel === currSlide.zoomLevels.initial ? currSlide.zoomLevels.secondary : currSlide.zoomLevels.initial;
      setZoomedIn(template, potentialZoomLevel <= currZoomLevel);
      if (options.imageClickAction === "zoom" || options.imageClickAction === "zoom-or-close") {
        template.classList.add("pswp--click-to-zoom");
      }
    }
  };
  function getBoundsByElement(el) {
    const thumbAreaRect = el.getBoundingClientRect();
    return {
      x: thumbAreaRect.left,
      y: thumbAreaRect.top,
      w: thumbAreaRect.width
    };
  }
  function getCroppedBoundsByElement(el, imageWidth, imageHeight) {
    const thumbAreaRect = el.getBoundingClientRect();
    const hRatio = thumbAreaRect.width / imageWidth;
    const vRatio = thumbAreaRect.height / imageHeight;
    const fillZoomLevel = hRatio > vRatio ? hRatio : vRatio;
    const offsetX = (thumbAreaRect.width - imageWidth * fillZoomLevel) / 2;
    const offsetY = (thumbAreaRect.height - imageHeight * fillZoomLevel) / 2;
    const bounds = {
      x: thumbAreaRect.left + offsetX,
      y: thumbAreaRect.top + offsetY,
      w: imageWidth * fillZoomLevel
    };
    bounds.innerRect = {
      w: thumbAreaRect.width,
      h: thumbAreaRect.height,
      x: offsetX,
      y: offsetY
    };
    return bounds;
  }
  function getThumbBounds(index, itemData, instance) {
    const event2 = instance.dispatch("thumbBounds", {
      index,
      itemData,
      instance
    });
    if (event2.thumbBounds) {
      return event2.thumbBounds;
    }
    const {
      element
    } = itemData;
    let thumbBounds;
    let thumbnail;
    if (element && instance.options.thumbSelector !== false) {
      const thumbSelector = instance.options.thumbSelector || "img";
      thumbnail = element.matches(thumbSelector) ? element : (
        /** @type {HTMLElement | null} */
        element.querySelector(thumbSelector)
      );
    }
    thumbnail = instance.applyFilters("thumbEl", thumbnail, itemData, index);
    if (thumbnail) {
      if (!itemData.thumbCropped) {
        thumbBounds = getBoundsByElement(thumbnail);
      } else {
        thumbBounds = getCroppedBoundsByElement(thumbnail, itemData.width || itemData.w || 0, itemData.height || itemData.h || 0);
      }
    }
    return instance.applyFilters("thumbBounds", thumbBounds, itemData, index);
  }
  var PhotoSwipeEvent2 = class {
    /**
     * @param {T} type
     * @param {PhotoSwipeEventsMap[T]} [details]
     */
    constructor(type, details) {
      this.type = type;
      this.defaultPrevented = false;
      if (details) {
        Object.assign(this, details);
      }
    }
    preventDefault() {
      this.defaultPrevented = true;
    }
  };
  var Eventable2 = class {
    constructor() {
      this._listeners = {};
      this._filters = {};
      this.pswp = void 0;
      this.options = void 0;
    }
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {PhotoSwipeFiltersMap[T]} fn
     * @param {number} priority
     */
    addFilter(name, fn, priority = 100) {
      var _this$_filters$name, _this$_filters$name2, _this$pswp;
      if (!this._filters[name]) {
        this._filters[name] = [];
      }
      (_this$_filters$name = this._filters[name]) === null || _this$_filters$name === void 0 || _this$_filters$name.push({
        fn,
        priority
      });
      (_this$_filters$name2 = this._filters[name]) === null || _this$_filters$name2 === void 0 || _this$_filters$name2.sort((f1, f2) => f1.priority - f2.priority);
      (_this$pswp = this.pswp) === null || _this$pswp === void 0 || _this$pswp.addFilter(name, fn, priority);
    }
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {PhotoSwipeFiltersMap[T]} fn
     */
    removeFilter(name, fn) {
      if (this._filters[name]) {
        this._filters[name] = this._filters[name].filter((filter) => filter.fn !== fn);
      }
      if (this.pswp) {
        this.pswp.removeFilter(name, fn);
      }
    }
    /**
     * @template {keyof PhotoSwipeFiltersMap} T
     * @param {T} name
     * @param {Parameters<PhotoSwipeFiltersMap[T]>} args
     * @returns {Parameters<PhotoSwipeFiltersMap[T]>[0]}
     */
    applyFilters(name, ...args) {
      var _this$_filters$name3;
      (_this$_filters$name3 = this._filters[name]) === null || _this$_filters$name3 === void 0 || _this$_filters$name3.forEach((filter) => {
        args[0] = filter.fn.apply(this, args);
      });
      return args[0];
    }
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {EventCallback<T>} fn
     */
    on(name, fn) {
      var _this$_listeners$name, _this$pswp2;
      if (!this._listeners[name]) {
        this._listeners[name] = [];
      }
      (_this$_listeners$name = this._listeners[name]) === null || _this$_listeners$name === void 0 || _this$_listeners$name.push(fn);
      (_this$pswp2 = this.pswp) === null || _this$pswp2 === void 0 || _this$pswp2.on(name, fn);
    }
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {EventCallback<T>} fn
     */
    off(name, fn) {
      var _this$pswp3;
      if (this._listeners[name]) {
        this._listeners[name] = this._listeners[name].filter((listener) => fn !== listener);
      }
      (_this$pswp3 = this.pswp) === null || _this$pswp3 === void 0 || _this$pswp3.off(name, fn);
    }
    /**
     * @template {keyof PhotoSwipeEventsMap} T
     * @param {T} name
     * @param {PhotoSwipeEventsMap[T]} [details]
     * @returns {AugmentedEvent<T>}
     */
    dispatch(name, details) {
      var _this$_listeners$name2;
      if (this.pswp) {
        return this.pswp.dispatch(name, details);
      }
      const event2 = (
        /** @type {AugmentedEvent<T>} */
        new PhotoSwipeEvent2(name, details)
      );
      (_this$_listeners$name2 = this._listeners[name]) === null || _this$_listeners$name2 === void 0 || _this$_listeners$name2.forEach((listener) => {
        listener.call(this, event2);
      });
      return event2;
    }
  };
  var Placeholder2 = class {
    /**
     * @param {string | false} imageSrc
     * @param {HTMLElement} container
     */
    constructor(imageSrc, container) {
      this.element = createElement4("pswp__img pswp__img--placeholder", imageSrc ? "img" : "div", container);
      if (imageSrc) {
        const imgEl = (
          /** @type {HTMLImageElement} */
          this.element
        );
        imgEl.decoding = "async";
        imgEl.alt = "";
        imgEl.src = imageSrc;
        imgEl.setAttribute("role", "presentation");
      }
      this.element.setAttribute("aria-hidden", "true");
    }
    /**
     * @param {number} width
     * @param {number} height
     */
    setDisplayedSize(width, height) {
      if (!this.element) {
        return;
      }
      if (this.element.tagName === "IMG") {
        setWidthHeight2(this.element, 250, "auto");
        this.element.style.transformOrigin = "0 0";
        this.element.style.transform = toTransformString2(0, 0, width / 250);
      } else {
        setWidthHeight2(this.element, width, height);
      }
    }
    destroy() {
      var _this$element;
      if ((_this$element = this.element) !== null && _this$element !== void 0 && _this$element.parentNode) {
        this.element.remove();
      }
      this.element = null;
    }
  };
  var Content2 = class {
    /**
     * @param {SlideData} itemData Slide data
     * @param {PhotoSwipeBase} instance PhotoSwipe or PhotoSwipeLightbox instance
     * @param {number} index
     */
    constructor(itemData, instance, index) {
      this.instance = instance;
      this.data = itemData;
      this.index = index;
      this.element = void 0;
      this.placeholder = void 0;
      this.slide = void 0;
      this.displayedImageWidth = 0;
      this.displayedImageHeight = 0;
      this.width = Number(this.data.w) || Number(this.data.width) || 0;
      this.height = Number(this.data.h) || Number(this.data.height) || 0;
      this.isAttached = false;
      this.hasSlide = false;
      this.isDecoding = false;
      this.state = LOAD_STATE2.IDLE;
      if (this.data.type) {
        this.type = this.data.type;
      } else if (this.data.src) {
        this.type = "image";
      } else {
        this.type = "html";
      }
      this.instance.dispatch("contentInit", {
        content: this
      });
    }
    removePlaceholder() {
      if (this.placeholder && !this.keepPlaceholder()) {
        setTimeout(() => {
          if (this.placeholder) {
            this.placeholder.destroy();
            this.placeholder = void 0;
          }
        }, 1e3);
      }
    }
    /**
     * Preload content
     *
     * @param {boolean} isLazy
     * @param {boolean} [reload]
     */
    load(isLazy, reload) {
      if (this.slide && this.usePlaceholder()) {
        if (!this.placeholder) {
          const placeholderSrc = this.instance.applyFilters(
            "placeholderSrc",
            // use  image-based placeholder only for the first slide,
            // as rendering (even small stretched thumbnail) is an expensive operation
            this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : false,
            this
          );
          this.placeholder = new Placeholder2(placeholderSrc, this.slide.container);
        } else {
          const placeholderEl = this.placeholder.element;
          if (placeholderEl && !placeholderEl.parentElement) {
            this.slide.container.prepend(placeholderEl);
          }
        }
      }
      if (this.element && !reload) {
        return;
      }
      if (this.instance.dispatch("contentLoad", {
        content: this,
        isLazy
      }).defaultPrevented) {
        return;
      }
      if (this.isImageContent()) {
        this.element = createElement4("pswp__img", "img");
        if (this.displayedImageWidth) {
          this.loadImage(isLazy);
        }
      } else {
        this.element = createElement4("pswp__content", "div");
        this.element.innerHTML = this.data.html || "";
      }
      if (reload && this.slide) {
        this.slide.updateContentSize(true);
      }
    }
    /**
     * Preload image
     *
     * @param {boolean} isLazy
     */
    loadImage(isLazy) {
      var _this$data$src, _this$data$alt;
      if (!this.isImageContent() || !this.element || this.instance.dispatch("contentLoadImage", {
        content: this,
        isLazy
      }).defaultPrevented) {
        return;
      }
      const imageElement = (
        /** @type HTMLImageElement */
        this.element
      );
      this.updateSrcsetSizes();
      if (this.data.srcset) {
        imageElement.srcset = this.data.srcset;
      }
      imageElement.src = (_this$data$src = this.data.src) !== null && _this$data$src !== void 0 ? _this$data$src : "";
      imageElement.alt = (_this$data$alt = this.data.alt) !== null && _this$data$alt !== void 0 ? _this$data$alt : "";
      this.state = LOAD_STATE2.LOADING;
      if (imageElement.complete) {
        this.onLoaded();
      } else {
        imageElement.onload = () => {
          this.onLoaded();
        };
        imageElement.onerror = () => {
          this.onError();
        };
      }
    }
    /**
     * Assign slide to content
     *
     * @param {Slide} slide
     */
    setSlide(slide2) {
      this.slide = slide2;
      this.hasSlide = true;
      this.instance = slide2.pswp;
    }
    /**
     * Content load success handler
     */
    onLoaded() {
      this.state = LOAD_STATE2.LOADED;
      if (this.slide && this.element) {
        this.instance.dispatch("loadComplete", {
          slide: this.slide,
          content: this
        });
        if (this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode) {
          this.append();
          this.slide.updateContentSize(true);
        }
        if (this.state === LOAD_STATE2.LOADED || this.state === LOAD_STATE2.ERROR) {
          this.removePlaceholder();
        }
      }
    }
    /**
     * Content load error handler
     */
    onError() {
      this.state = LOAD_STATE2.ERROR;
      if (this.slide) {
        this.displayError();
        this.instance.dispatch("loadComplete", {
          slide: this.slide,
          isError: true,
          content: this
        });
        this.instance.dispatch("loadError", {
          slide: this.slide,
          content: this
        });
      }
    }
    /**
     * @returns {Boolean} If the content is currently loading
     */
    isLoading() {
      return this.instance.applyFilters("isContentLoading", this.state === LOAD_STATE2.LOADING, this);
    }
    /**
     * @returns {Boolean} If the content is in error state
     */
    isError() {
      return this.state === LOAD_STATE2.ERROR;
    }
    /**
     * @returns {boolean} If the content is image
     */
    isImageContent() {
      return this.type === "image";
    }
    /**
     * Update content size
     *
     * @param {Number} width
     * @param {Number} height
     */
    setDisplayedSize(width, height) {
      if (!this.element) {
        return;
      }
      if (this.placeholder) {
        this.placeholder.setDisplayedSize(width, height);
      }
      if (this.instance.dispatch("contentResize", {
        content: this,
        width,
        height
      }).defaultPrevented) {
        return;
      }
      setWidthHeight2(this.element, width, height);
      if (this.isImageContent() && !this.isError()) {
        const isInitialSizeUpdate = !this.displayedImageWidth && width;
        this.displayedImageWidth = width;
        this.displayedImageHeight = height;
        if (isInitialSizeUpdate) {
          this.loadImage(false);
        } else {
          this.updateSrcsetSizes();
        }
        if (this.slide) {
          this.instance.dispatch("imageSizeChange", {
            slide: this.slide,
            width,
            height,
            content: this
          });
        }
      }
    }
    /**
     * @returns {boolean} If the content can be zoomed
     */
    isZoomable() {
      return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== LOAD_STATE2.ERROR, this);
    }
    /**
     * Update image srcset sizes attribute based on width and height
     */
    updateSrcsetSizes() {
      if (!this.isImageContent() || !this.element || !this.data.srcset) {
        return;
      }
      const image = (
        /** @type HTMLImageElement */
        this.element
      );
      const sizesWidth = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
      if (!image.dataset.largestUsedSize || sizesWidth > parseInt(image.dataset.largestUsedSize, 10)) {
        image.sizes = sizesWidth + "px";
        image.dataset.largestUsedSize = String(sizesWidth);
      }
    }
    /**
     * @returns {boolean} If content should use a placeholder (from msrc by default)
     */
    usePlaceholder() {
      return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this);
    }
    /**
     * Preload content with lazy-loading param
     */
    lazyLoad() {
      if (this.instance.dispatch("contentLazyLoad", {
        content: this
      }).defaultPrevented) {
        return;
      }
      this.load(true);
    }
    /**
     * @returns {boolean} If placeholder should be kept after content is loaded
     */
    keepPlaceholder() {
      return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this);
    }
    /**
     * Destroy the content
     */
    destroy() {
      this.hasSlide = false;
      this.slide = void 0;
      if (this.instance.dispatch("contentDestroy", {
        content: this
      }).defaultPrevented) {
        return;
      }
      this.remove();
      if (this.placeholder) {
        this.placeholder.destroy();
        this.placeholder = void 0;
      }
      if (this.isImageContent() && this.element) {
        this.element.onload = null;
        this.element.onerror = null;
        this.element = void 0;
      }
    }
    /**
     * Display error message
     */
    displayError() {
      if (this.slide) {
        var _this$instance$option, _this$instance$option2;
        let errorMsgEl = createElement4("pswp__error-msg", "div");
        errorMsgEl.innerText = (_this$instance$option = (_this$instance$option2 = this.instance.options) === null || _this$instance$option2 === void 0 ? void 0 : _this$instance$option2.errorMsg) !== null && _this$instance$option !== void 0 ? _this$instance$option : "";
        errorMsgEl = /** @type {HTMLDivElement} */
        this.instance.applyFilters("contentErrorElement", errorMsgEl, this);
        this.element = createElement4("pswp__content pswp__error-msg-container", "div");
        this.element.appendChild(errorMsgEl);
        this.slide.container.innerText = "";
        this.slide.container.appendChild(this.element);
        this.slide.updateContentSize(true);
        this.removePlaceholder();
      }
    }
    /**
     * Append the content
     */
    append() {
      if (this.isAttached || !this.element) {
        return;
      }
      this.isAttached = true;
      if (this.state === LOAD_STATE2.ERROR) {
        this.displayError();
        return;
      }
      if (this.instance.dispatch("contentAppend", {
        content: this
      }).defaultPrevented) {
        return;
      }
      const supportsDecode = "decode" in this.element;
      if (this.isImageContent()) {
        if (supportsDecode && this.slide && (!this.slide.isActive || isSafari2())) {
          this.isDecoding = true;
          this.element.decode().catch(() => {
          }).finally(() => {
            this.isDecoding = false;
            this.appendImage();
          });
        } else {
          this.appendImage();
        }
      } else if (this.slide && !this.element.parentNode) {
        this.slide.container.appendChild(this.element);
      }
    }
    /**
     * Activate the slide,
     * active slide is generally the current one,
     * meaning the user can see it.
     */
    activate() {
      if (this.instance.dispatch("contentActivate", {
        content: this
      }).defaultPrevented || !this.slide) {
        return;
      }
      if (this.isImageContent() && this.isDecoding && !isSafari2()) {
        this.appendImage();
      } else if (this.isError()) {
        this.load(false, true);
      }
      if (this.slide.holderElement) {
        this.slide.holderElement.setAttribute("aria-hidden", "false");
      }
    }
    /**
     * Deactivate the content
     */
    deactivate() {
      this.instance.dispatch("contentDeactivate", {
        content: this
      });
      if (this.slide && this.slide.holderElement) {
        this.slide.holderElement.setAttribute("aria-hidden", "true");
      }
    }
    /**
     * Remove the content from DOM
     */
    remove() {
      this.isAttached = false;
      if (this.instance.dispatch("contentRemove", {
        content: this
      }).defaultPrevented) {
        return;
      }
      if (this.element && this.element.parentNode) {
        this.element.remove();
      }
      if (this.placeholder && this.placeholder.element) {
        this.placeholder.element.remove();
      }
    }
    /**
     * Append the image content to slide container
     */
    appendImage() {
      if (!this.isAttached) {
        return;
      }
      if (this.instance.dispatch("contentAppendImage", {
        content: this
      }).defaultPrevented) {
        return;
      }
      if (this.slide && this.element && !this.element.parentNode) {
        this.slide.container.appendChild(this.element);
      }
      if (this.state === LOAD_STATE2.LOADED || this.state === LOAD_STATE2.ERROR) {
        this.removePlaceholder();
      }
    }
  };
  var MIN_SLIDES_TO_CACHE = 5;
  function lazyLoadData2(itemData, instance, index) {
    const content = instance.createContentFromData(itemData, index);
    let zoomLevel;
    const {
      options
    } = instance;
    if (options) {
      zoomLevel = new ZoomLevel2(options, itemData, -1);
      let viewportSize;
      if (instance.pswp) {
        viewportSize = instance.pswp.viewportSize;
      } else {
        viewportSize = getViewportSize3(options, instance);
      }
      const panAreaSize = getPanAreaSize2(options, viewportSize, itemData, index);
      zoomLevel.update(content.width, content.height, panAreaSize);
    }
    content.lazyLoad();
    if (zoomLevel) {
      content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
    }
    return content;
  }
  function lazyLoadSlide2(index, instance) {
    const itemData = instance.getItemData(index);
    if (instance.dispatch("lazyLoadSlide", {
      index,
      itemData
    }).defaultPrevented) {
      return;
    }
    return lazyLoadData2(itemData, instance, index);
  }
  var ContentLoader = class {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp) {
      this.pswp = pswp;
      this.limit = Math.max(pswp.options.preload[0] + pswp.options.preload[1] + 1, MIN_SLIDES_TO_CACHE);
      this._cachedItems = [];
    }
    /**
     * Lazy load nearby slides based on `preload` option.
     *
     * @param {number} [diff] Difference between slide indexes that was changed recently, or 0.
     */
    updateLazy(diff) {
      const {
        pswp
      } = this;
      if (pswp.dispatch("lazyLoad").defaultPrevented) {
        return;
      }
      const {
        preload: preload2
      } = pswp.options;
      const isForward = diff === void 0 ? true : diff >= 0;
      let i;
      for (i = 0; i <= preload2[1]; i++) {
        this.loadSlideByIndex(pswp.currIndex + (isForward ? i : -i));
      }
      for (i = 1; i <= preload2[0]; i++) {
        this.loadSlideByIndex(pswp.currIndex + (isForward ? -i : i));
      }
    }
    /**
     * @param {number} initialIndex
     */
    loadSlideByIndex(initialIndex) {
      const index = this.pswp.getLoopedIndex(initialIndex);
      let content = this.getContentByIndex(index);
      if (!content) {
        content = lazyLoadSlide2(index, this.pswp);
        if (content) {
          this.addToCache(content);
        }
      }
    }
    /**
     * @param {Slide} slide
     * @returns {Content}
     */
    getContentBySlide(slide2) {
      let content = this.getContentByIndex(slide2.index);
      if (!content) {
        content = this.pswp.createContentFromData(slide2.data, slide2.index);
        this.addToCache(content);
      }
      content.setSlide(slide2);
      return content;
    }
    /**
     * @param {Content} content
     */
    addToCache(content) {
      this.removeByIndex(content.index);
      this._cachedItems.push(content);
      if (this._cachedItems.length > this.limit) {
        const indexToRemove = this._cachedItems.findIndex((item) => {
          return !item.isAttached && !item.hasSlide;
        });
        if (indexToRemove !== -1) {
          const removedItem = this._cachedItems.splice(indexToRemove, 1)[0];
          removedItem.destroy();
        }
      }
    }
    /**
     * Removes an image from cache, does not destroy() it, just removes.
     *
     * @param {number} index
     */
    removeByIndex(index) {
      const indexToRemove = this._cachedItems.findIndex((item) => item.index === index);
      if (indexToRemove !== -1) {
        this._cachedItems.splice(indexToRemove, 1);
      }
    }
    /**
     * @param {number} index
     * @returns {Content | undefined}
     */
    getContentByIndex(index) {
      return this._cachedItems.find((content) => content.index === index);
    }
    destroy() {
      this._cachedItems.forEach((content) => content.destroy());
      this._cachedItems = [];
    }
  };
  var PhotoSwipeBase2 = class extends Eventable2 {
    /**
     * Get total number of slides
     *
     * @returns {number}
     */
    getNumItems() {
      var _this$options;
      let numItems = 0;
      const dataSource = (_this$options = this.options) === null || _this$options === void 0 ? void 0 : _this$options.dataSource;
      if (dataSource && "length" in dataSource) {
        numItems = dataSource.length;
      } else if (dataSource && "gallery" in dataSource) {
        if (!dataSource.items) {
          dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
        }
        if (dataSource.items) {
          numItems = dataSource.items.length;
        }
      }
      const event2 = this.dispatch("numItems", {
        dataSource,
        numItems
      });
      return this.applyFilters("numItems", event2.numItems, dataSource);
    }
    /**
     * @param {SlideData} slideData
     * @param {number} index
     * @returns {Content}
     */
    createContentFromData(slideData, index) {
      return new Content2(slideData, this, index);
    }
    /**
     * Get item data by index.
     *
     * "item data" should contain normalized information that PhotoSwipe needs to generate a slide.
     * For example, it may contain properties like
     * `src`, `srcset`, `w`, `h`, which will be used to generate a slide with image.
     *
     * @param {number} index
     * @returns {SlideData}
     */
    getItemData(index) {
      var _this$options2;
      const dataSource = (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : _this$options2.dataSource;
      let dataSourceItem = {};
      if (Array.isArray(dataSource)) {
        dataSourceItem = dataSource[index];
      } else if (dataSource && "gallery" in dataSource) {
        if (!dataSource.items) {
          dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
        }
        dataSourceItem = dataSource.items[index];
      }
      let itemData = dataSourceItem;
      if (itemData instanceof Element) {
        itemData = this._domElementToItemData(itemData);
      }
      const event2 = this.dispatch("itemData", {
        itemData: itemData || {},
        index
      });
      return this.applyFilters("itemData", event2.itemData, index);
    }
    /**
     * Get array of gallery DOM elements,
     * based on childSelector and gallery element.
     *
     * @param {HTMLElement} galleryElement
     * @returns {HTMLElement[]}
     */
    _getGalleryDOMElements(galleryElement) {
      var _this$options3, _this$options4;
      if ((_this$options3 = this.options) !== null && _this$options3 !== void 0 && _this$options3.children || (_this$options4 = this.options) !== null && _this$options4 !== void 0 && _this$options4.childSelector) {
        return getElementsFromOption2(this.options.children, this.options.childSelector, galleryElement) || [];
      }
      return [galleryElement];
    }
    /**
     * Converts DOM element to item data object.
     *
     * @param {HTMLElement} element DOM element
     * @returns {SlideData}
     */
    _domElementToItemData(element) {
      const itemData = {
        element
      };
      const linkEl = (
        /** @type {HTMLAnchorElement} */
        element.tagName === "A" ? element : element.querySelector("a")
      );
      if (linkEl) {
        itemData.src = linkEl.dataset.pswpSrc || linkEl.href;
        if (linkEl.dataset.pswpSrcset) {
          itemData.srcset = linkEl.dataset.pswpSrcset;
        }
        itemData.width = linkEl.dataset.pswpWidth ? parseInt(linkEl.dataset.pswpWidth, 10) : 0;
        itemData.height = linkEl.dataset.pswpHeight ? parseInt(linkEl.dataset.pswpHeight, 10) : 0;
        itemData.w = itemData.width;
        itemData.h = itemData.height;
        if (linkEl.dataset.pswpType) {
          itemData.type = linkEl.dataset.pswpType;
        }
        const thumbnailEl = element.querySelector("img");
        if (thumbnailEl) {
          var _thumbnailEl$getAttri;
          itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
          itemData.alt = (_thumbnailEl$getAttri = thumbnailEl.getAttribute("alt")) !== null && _thumbnailEl$getAttri !== void 0 ? _thumbnailEl$getAttri : "";
        }
        if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) {
          itemData.thumbCropped = true;
        }
      }
      return this.applyFilters("domItemData", itemData, element, linkEl);
    }
    /**
     * Lazy-load by slide data
     *
     * @param {SlideData} itemData Data about the slide
     * @param {number} index
     * @returns {Content} Image that is being decoded or false.
     */
    lazyLoadData(itemData, index) {
      return lazyLoadData2(itemData, this, index);
    }
  };
  var MIN_OPACITY = 3e-3;
  var Opener = class {
    /**
     * @param {PhotoSwipe} pswp
     */
    constructor(pswp) {
      this.pswp = pswp;
      this.isClosed = true;
      this.isOpen = false;
      this.isClosing = false;
      this.isOpening = false;
      this._duration = void 0;
      this._useAnimation = false;
      this._croppedZoom = false;
      this._animateRootOpacity = false;
      this._animateBgOpacity = false;
      this._placeholder = void 0;
      this._opacityElement = void 0;
      this._cropContainer1 = void 0;
      this._cropContainer2 = void 0;
      this._thumbBounds = void 0;
      this._prepareOpen = this._prepareOpen.bind(this);
      pswp.on("firstZoomPan", this._prepareOpen);
    }
    open() {
      this._prepareOpen();
      this._start();
    }
    close() {
      if (this.isClosed || this.isClosing || this.isOpening) {
        return;
      }
      const slide2 = this.pswp.currSlide;
      this.isOpen = false;
      this.isOpening = false;
      this.isClosing = true;
      this._duration = this.pswp.options.hideAnimationDuration;
      if (slide2 && slide2.currZoomLevel * slide2.width >= this.pswp.options.maxWidthToAnimate) {
        this._duration = 0;
      }
      this._applyStartProps();
      setTimeout(() => {
        this._start();
      }, this._croppedZoom ? 30 : 0);
    }
    /** @private */
    _prepareOpen() {
      this.pswp.off("firstZoomPan", this._prepareOpen);
      if (!this.isOpening) {
        const slide2 = this.pswp.currSlide;
        this.isOpening = true;
        this.isClosing = false;
        this._duration = this.pswp.options.showAnimationDuration;
        if (slide2 && slide2.zoomLevels.initial * slide2.width >= this.pswp.options.maxWidthToAnimate) {
          this._duration = 0;
        }
        this._applyStartProps();
      }
    }
    /** @private */
    _applyStartProps() {
      const {
        pswp
      } = this;
      const slide2 = this.pswp.currSlide;
      const {
        options
      } = pswp;
      if (options.showHideAnimationType === "fade") {
        options.showHideOpacity = true;
        this._thumbBounds = void 0;
      } else if (options.showHideAnimationType === "none") {
        options.showHideOpacity = false;
        this._duration = 0;
        this._thumbBounds = void 0;
      } else if (this.isOpening && pswp._initialThumbBounds) {
        this._thumbBounds = pswp._initialThumbBounds;
      } else {
        this._thumbBounds = this.pswp.getThumbBounds();
      }
      this._placeholder = slide2 === null || slide2 === void 0 ? void 0 : slide2.getPlaceholderElement();
      pswp.animations.stopAll();
      this._useAnimation = Boolean(this._duration && this._duration > 50);
      this._animateZoom = Boolean(this._thumbBounds) && (slide2 === null || slide2 === void 0 ? void 0 : slide2.content.usePlaceholder()) && (!this.isClosing || !pswp.mainScroll.isShifted());
      if (!this._animateZoom) {
        this._animateRootOpacity = true;
        if (this.isOpening && slide2) {
          slide2.zoomAndPanToInitial();
          slide2.applyCurrentZoomPan();
        }
      } else {
        var _options$showHideOpac;
        this._animateRootOpacity = (_options$showHideOpac = options.showHideOpacity) !== null && _options$showHideOpac !== void 0 ? _options$showHideOpac : false;
      }
      this._animateBgOpacity = !this._animateRootOpacity && this.pswp.options.bgOpacity > MIN_OPACITY;
      this._opacityElement = this._animateRootOpacity ? pswp.element : pswp.bg;
      if (!this._useAnimation) {
        this._duration = 0;
        this._animateZoom = false;
        this._animateBgOpacity = false;
        this._animateRootOpacity = true;
        if (this.isOpening) {
          if (pswp.element) {
            pswp.element.style.opacity = String(MIN_OPACITY);
          }
          pswp.applyBgOpacity(1);
        }
        return;
      }
      if (this._animateZoom && this._thumbBounds && this._thumbBounds.innerRect) {
        var _this$pswp$currSlide;
        this._croppedZoom = true;
        this._cropContainer1 = this.pswp.container;
        this._cropContainer2 = (_this$pswp$currSlide = this.pswp.currSlide) === null || _this$pswp$currSlide === void 0 ? void 0 : _this$pswp$currSlide.holderElement;
        if (pswp.container) {
          pswp.container.style.overflow = "hidden";
          pswp.container.style.width = pswp.viewportSize.x + "px";
        }
      } else {
        this._croppedZoom = false;
      }
      if (this.isOpening) {
        if (this._animateRootOpacity) {
          if (pswp.element) {
            pswp.element.style.opacity = String(MIN_OPACITY);
          }
          pswp.applyBgOpacity(1);
        } else {
          if (this._animateBgOpacity && pswp.bg) {
            pswp.bg.style.opacity = String(MIN_OPACITY);
          }
          if (pswp.element) {
            pswp.element.style.opacity = "1";
          }
        }
        if (this._animateZoom) {
          this._setClosedStateZoomPan();
          if (this._placeholder) {
            this._placeholder.style.willChange = "transform";
            this._placeholder.style.opacity = String(MIN_OPACITY);
          }
        }
      } else if (this.isClosing) {
        if (pswp.mainScroll.itemHolders[0]) {
          pswp.mainScroll.itemHolders[0].el.style.display = "none";
        }
        if (pswp.mainScroll.itemHolders[2]) {
          pswp.mainScroll.itemHolders[2].el.style.display = "none";
        }
        if (this._croppedZoom) {
          if (pswp.mainScroll.x !== 0) {
            pswp.mainScroll.resetPosition();
            pswp.mainScroll.resize();
          }
        }
      }
    }
    /** @private */
    _start() {
      if (this.isOpening && this._useAnimation && this._placeholder && this._placeholder.tagName === "IMG") {
        new Promise((resolve) => {
          let decoded = false;
          let isDelaying = true;
          decodeImage(
            /** @type {HTMLImageElement} */
            this._placeholder
          ).finally(() => {
            decoded = true;
            if (!isDelaying) {
              resolve(true);
            }
          });
          setTimeout(() => {
            isDelaying = false;
            if (decoded) {
              resolve(true);
            }
          }, 50);
          setTimeout(resolve, 250);
        }).finally(() => this._initiate());
      } else {
        this._initiate();
      }
    }
    /** @private */
    _initiate() {
      var _this$pswp$element, _this$pswp$element2;
      (_this$pswp$element = this.pswp.element) === null || _this$pswp$element === void 0 || _this$pswp$element.style.setProperty("--pswp-transition-duration", this._duration + "ms");
      this.pswp.dispatch(this.isOpening ? "openingAnimationStart" : "closingAnimationStart");
      this.pswp.dispatch(
        /** @type {'initialZoomIn' | 'initialZoomOut'} */
        "initialZoom" + (this.isOpening ? "In" : "Out")
      );
      (_this$pswp$element2 = this.pswp.element) === null || _this$pswp$element2 === void 0 || _this$pswp$element2.classList.toggle("pswp--ui-visible", this.isOpening);
      if (this.isOpening) {
        if (this._placeholder) {
          this._placeholder.style.opacity = "1";
        }
        this._animateToOpenState();
      } else if (this.isClosing) {
        this._animateToClosedState();
      }
      if (!this._useAnimation) {
        this._onAnimationComplete();
      }
    }
    /** @private */
    _onAnimationComplete() {
      const {
        pswp
      } = this;
      this.isOpen = this.isOpening;
      this.isClosed = this.isClosing;
      this.isOpening = false;
      this.isClosing = false;
      pswp.dispatch(this.isOpen ? "openingAnimationEnd" : "closingAnimationEnd");
      pswp.dispatch(
        /** @type {'initialZoomInEnd' | 'initialZoomOutEnd'} */
        "initialZoom" + (this.isOpen ? "InEnd" : "OutEnd")
      );
      if (this.isClosed) {
        pswp.destroy();
      } else if (this.isOpen) {
        var _pswp$currSlide;
        if (this._animateZoom && pswp.container) {
          pswp.container.style.overflow = "visible";
          pswp.container.style.width = "100%";
        }
        (_pswp$currSlide = pswp.currSlide) === null || _pswp$currSlide === void 0 || _pswp$currSlide.applyCurrentZoomPan();
      }
    }
    /** @private */
    _animateToOpenState() {
      const {
        pswp
      } = this;
      if (this._animateZoom) {
        if (this._croppedZoom && this._cropContainer1 && this._cropContainer2) {
          this._animateTo(this._cropContainer1, "transform", "translate3d(0,0,0)");
          this._animateTo(this._cropContainer2, "transform", "none");
        }
        if (pswp.currSlide) {
          pswp.currSlide.zoomAndPanToInitial();
          this._animateTo(pswp.currSlide.container, "transform", pswp.currSlide.getCurrentTransform());
        }
      }
      if (this._animateBgOpacity && pswp.bg) {
        this._animateTo(pswp.bg, "opacity", String(pswp.options.bgOpacity));
      }
      if (this._animateRootOpacity && pswp.element) {
        this._animateTo(pswp.element, "opacity", "1");
      }
    }
    /** @private */
    _animateToClosedState() {
      const {
        pswp
      } = this;
      if (this._animateZoom) {
        this._setClosedStateZoomPan(true);
      }
      if (this._animateBgOpacity && pswp.bgOpacity > 0.01 && pswp.bg) {
        this._animateTo(pswp.bg, "opacity", "0");
      }
      if (this._animateRootOpacity && pswp.element) {
        this._animateTo(pswp.element, "opacity", "0");
      }
    }
    /**
     * @private
     * @param {boolean} [animate]
     */
    _setClosedStateZoomPan(animate) {
      if (!this._thumbBounds) return;
      const {
        pswp
      } = this;
      const {
        innerRect
      } = this._thumbBounds;
      const {
        currSlide,
        viewportSize
      } = pswp;
      if (this._croppedZoom && innerRect && this._cropContainer1 && this._cropContainer2) {
        const containerOnePanX = -viewportSize.x + (this._thumbBounds.x - innerRect.x) + innerRect.w;
        const containerOnePanY = -viewportSize.y + (this._thumbBounds.y - innerRect.y) + innerRect.h;
        const containerTwoPanX = viewportSize.x - innerRect.w;
        const containerTwoPanY = viewportSize.y - innerRect.h;
        if (animate) {
          this._animateTo(this._cropContainer1, "transform", toTransformString2(containerOnePanX, containerOnePanY));
          this._animateTo(this._cropContainer2, "transform", toTransformString2(containerTwoPanX, containerTwoPanY));
        } else {
          setTransform(this._cropContainer1, containerOnePanX, containerOnePanY);
          setTransform(this._cropContainer2, containerTwoPanX, containerTwoPanY);
        }
      }
      if (currSlide) {
        equalizePoints(currSlide.pan, innerRect || this._thumbBounds);
        currSlide.currZoomLevel = this._thumbBounds.w / currSlide.width;
        if (animate) {
          this._animateTo(currSlide.container, "transform", currSlide.getCurrentTransform());
        } else {
          currSlide.applyCurrentZoomPan();
        }
      }
    }
    /**
     * @private
     * @param {HTMLElement} target
     * @param {'transform' | 'opacity'} prop
     * @param {string} propValue
     */
    _animateTo(target, prop, propValue) {
      if (!this._duration) {
        target.style[prop] = propValue;
        return;
      }
      const {
        animations
      } = this.pswp;
      const animProps = {
        duration: this._duration,
        easing: this.pswp.options.easing,
        onComplete: () => {
          if (!animations.activeAnimations.length) {
            this._onAnimationComplete();
          }
        },
        target
      };
      animProps[prop] = propValue;
      animations.startTransition(animProps);
    }
  };
  var defaultOptions = {
    allowPanToNext: true,
    spacing: 0.1,
    loop: true,
    pinchToClose: true,
    closeOnVerticalDrag: true,
    hideAnimationDuration: 333,
    showAnimationDuration: 333,
    zoomAnimationDuration: 333,
    escKey: true,
    arrowKeys: true,
    trapFocus: true,
    returnFocus: true,
    maxWidthToAnimate: 4e3,
    clickToCloseNonZoomable: true,
    imageClickAction: "zoom-or-close",
    bgClickAction: "close",
    tapAction: "toggle-controls",
    doubleTapAction: "zoom",
    indexIndicatorSep: " / ",
    preloaderDelay: 2e3,
    bgOpacity: 0.8,
    index: 0,
    errorMsg: "The image cannot be loaded",
    preload: [1, 2],
    easing: "cubic-bezier(.4,0,.22,1)"
  };
  var PhotoSwipe = class extends PhotoSwipeBase2 {
    /**
     * @param {PhotoSwipeOptions} [options]
     */
    constructor(options) {
      super();
      this.options = this._prepareOptions(options || {});
      this.offset = {
        x: 0,
        y: 0
      };
      this._prevViewportSize = {
        x: 0,
        y: 0
      };
      this.viewportSize = {
        x: 0,
        y: 0
      };
      this.bgOpacity = 1;
      this.currIndex = 0;
      this.potentialIndex = 0;
      this.isOpen = false;
      this.isDestroying = false;
      this.hasMouse = false;
      this._initialItemData = {};
      this._initialThumbBounds = void 0;
      this.topBar = void 0;
      this.element = void 0;
      this.template = void 0;
      this.container = void 0;
      this.scrollWrap = void 0;
      this.currSlide = void 0;
      this.events = new DOMEvents();
      this.animations = new Animations();
      this.mainScroll = new MainScroll(this);
      this.gestures = new Gestures(this);
      this.opener = new Opener(this);
      this.keyboard = new Keyboard2(this);
      this.contentLoader = new ContentLoader(this);
    }
    /** @returns {boolean} */
    init() {
      if (this.isOpen || this.isDestroying) {
        return false;
      }
      this.isOpen = true;
      this.dispatch("init");
      this.dispatch("beforeOpen");
      this._createMainStructure();
      let rootClasses = "pswp--open";
      if (this.gestures.supportsTouch) {
        rootClasses += " pswp--touch";
      }
      if (this.options.mainClass) {
        rootClasses += " " + this.options.mainClass;
      }
      if (this.element) {
        this.element.className += " " + rootClasses;
      }
      this.currIndex = this.options.index || 0;
      this.potentialIndex = this.currIndex;
      this.dispatch("firstUpdate");
      this.scrollWheel = new ScrollWheel(this);
      if (Number.isNaN(this.currIndex) || this.currIndex < 0 || this.currIndex >= this.getNumItems()) {
        this.currIndex = 0;
      }
      if (!this.gestures.supportsTouch) {
        this.mouseDetected();
      }
      this.updateSize();
      this.offset.y = window.pageYOffset;
      this._initialItemData = this.getItemData(this.currIndex);
      this.dispatch("gettingData", {
        index: this.currIndex,
        data: this._initialItemData,
        slide: void 0
      });
      this._initialThumbBounds = this.getThumbBounds();
      this.dispatch("initialLayout");
      this.on("openingAnimationEnd", () => {
        const {
          itemHolders
        } = this.mainScroll;
        if (itemHolders[0]) {
          itemHolders[0].el.style.display = "block";
          this.setContent(itemHolders[0], this.currIndex - 1);
        }
        if (itemHolders[2]) {
          itemHolders[2].el.style.display = "block";
          this.setContent(itemHolders[2], this.currIndex + 1);
        }
        this.appendHeavy();
        this.contentLoader.updateLazy();
        this.events.add(window, "resize", this._handlePageResize.bind(this));
        this.events.add(window, "scroll", this._updatePageScrollOffset.bind(this));
        this.dispatch("bindEvents");
      });
      if (this.mainScroll.itemHolders[1]) {
        this.setContent(this.mainScroll.itemHolders[1], this.currIndex);
      }
      this.dispatch("change");
      this.opener.open();
      this.dispatch("afterInit");
      return true;
    }
    /**
     * Get looped slide index
     * (for example, -1 will return the last slide)
     *
     * @param {number} index
     * @returns {number}
     */
    getLoopedIndex(index) {
      const numSlides = this.getNumItems();
      if (this.options.loop) {
        if (index > numSlides - 1) {
          index -= numSlides;
        }
        if (index < 0) {
          index += numSlides;
        }
      }
      return clamp2(index, 0, numSlides - 1);
    }
    appendHeavy() {
      this.mainScroll.itemHolders.forEach((itemHolder) => {
        var _itemHolder$slide;
        (_itemHolder$slide = itemHolder.slide) === null || _itemHolder$slide === void 0 || _itemHolder$slide.appendHeavy();
      });
    }
    /**
     * Change the slide
     * @param {number} index New index
     */
    goTo(index) {
      this.mainScroll.moveIndexBy(this.getLoopedIndex(index) - this.potentialIndex);
    }
    /**
     * Go to the next slide.
     */
    next() {
      this.goTo(this.potentialIndex + 1);
    }
    /**
     * Go to the previous slide.
     */
    prev() {
      this.goTo(this.potentialIndex - 1);
    }
    /**
     * @see slide/slide.js zoomTo
     *
     * @param {Parameters<Slide['zoomTo']>} args
     */
    zoomTo(...args) {
      var _this$currSlide;
      (_this$currSlide = this.currSlide) === null || _this$currSlide === void 0 || _this$currSlide.zoomTo(...args);
    }
    /**
     * @see slide/slide.js toggleZoom
     */
    toggleZoom() {
      var _this$currSlide2;
      (_this$currSlide2 = this.currSlide) === null || _this$currSlide2 === void 0 || _this$currSlide2.toggleZoom();
    }
    /**
     * Close the gallery.
     * After closing transition ends - destroy it
     */
    close() {
      if (!this.opener.isOpen || this.isDestroying) {
        return;
      }
      this.isDestroying = true;
      this.dispatch("close");
      this.events.removeAll();
      this.opener.close();
    }
    /**
     * Destroys the gallery:
     * - instantly closes the gallery
     * - unbinds events,
     * - cleans intervals and timeouts
     * - removes elements from DOM
     */
    destroy() {
      var _this$element;
      if (!this.isDestroying) {
        this.options.showHideAnimationType = "none";
        this.close();
        return;
      }
      this.dispatch("destroy");
      this._listeners = {};
      if (this.scrollWrap) {
        this.scrollWrap.ontouchmove = null;
        this.scrollWrap.ontouchend = null;
      }
      (_this$element = this.element) === null || _this$element === void 0 || _this$element.remove();
      this.mainScroll.itemHolders.forEach((itemHolder) => {
        var _itemHolder$slide2;
        (_itemHolder$slide2 = itemHolder.slide) === null || _itemHolder$slide2 === void 0 || _itemHolder$slide2.destroy();
      });
      this.contentLoader.destroy();
      this.events.removeAll();
    }
    /**
     * Refresh/reload content of a slide by its index
     *
     * @param {number} slideIndex
     */
    refreshSlideContent(slideIndex) {
      this.contentLoader.removeByIndex(slideIndex);
      this.mainScroll.itemHolders.forEach((itemHolder, i) => {
        var _this$currSlide$index, _this$currSlide3;
        let potentialHolderIndex = ((_this$currSlide$index = (_this$currSlide3 = this.currSlide) === null || _this$currSlide3 === void 0 ? void 0 : _this$currSlide3.index) !== null && _this$currSlide$index !== void 0 ? _this$currSlide$index : 0) - 1 + i;
        if (this.canLoop()) {
          potentialHolderIndex = this.getLoopedIndex(potentialHolderIndex);
        }
        if (potentialHolderIndex === slideIndex) {
          this.setContent(itemHolder, slideIndex, true);
          if (i === 1) {
            var _itemHolder$slide3;
            this.currSlide = itemHolder.slide;
            (_itemHolder$slide3 = itemHolder.slide) === null || _itemHolder$slide3 === void 0 || _itemHolder$slide3.setIsActive(true);
          }
        }
      });
      this.dispatch("change");
    }
    /**
     * Set slide content
     *
     * @param {ItemHolder} holder mainScroll.itemHolders array item
     * @param {number} index Slide index
     * @param {boolean} [force] If content should be set even if index wasn't changed
     */
    setContent(holder, index, force) {
      if (this.canLoop()) {
        index = this.getLoopedIndex(index);
      }
      if (holder.slide) {
        if (holder.slide.index === index && !force) {
          return;
        }
        holder.slide.destroy();
        holder.slide = void 0;
      }
      if (!this.canLoop() && (index < 0 || index >= this.getNumItems())) {
        return;
      }
      const itemData = this.getItemData(index);
      holder.slide = new Slide(itemData, index, this);
      if (index === this.currIndex) {
        this.currSlide = holder.slide;
      }
      holder.slide.append(holder.el);
    }
    /** @returns {Point} */
    getViewportCenterPoint() {
      return {
        x: this.viewportSize.x / 2,
        y: this.viewportSize.y / 2
      };
    }
    /**
     * Update size of all elements.
     * Executed on init and on page resize.
     *
     * @param {boolean} [force] Update size even if size of viewport was not changed.
     */
    updateSize(force) {
      if (this.isDestroying) {
        return;
      }
      const newViewportSize = getViewportSize3(this.options, this);
      if (!force && pointsEqual(newViewportSize, this._prevViewportSize)) {
        return;
      }
      equalizePoints(this._prevViewportSize, newViewportSize);
      this.dispatch("beforeResize");
      equalizePoints(this.viewportSize, this._prevViewportSize);
      this._updatePageScrollOffset();
      this.dispatch("viewportSize");
      this.mainScroll.resize(this.opener.isOpen);
      if (!this.hasMouse && window.matchMedia("(any-hover: hover)").matches) {
        this.mouseDetected();
      }
      this.dispatch("resize");
    }
    /**
     * @param {number} opacity
     */
    applyBgOpacity(opacity) {
      this.bgOpacity = Math.max(opacity, 0);
      if (this.bg) {
        this.bg.style.opacity = String(this.bgOpacity * this.options.bgOpacity);
      }
    }
    /**
     * Whether mouse is detected
     */
    mouseDetected() {
      if (!this.hasMouse) {
        var _this$element2;
        this.hasMouse = true;
        (_this$element2 = this.element) === null || _this$element2 === void 0 || _this$element2.classList.add("pswp--has_mouse");
      }
    }
    /**
     * Page resize event handler
     *
     * @private
     */
    _handlePageResize() {
      this.updateSize();
      if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
        setTimeout(() => {
          this.updateSize();
        }, 500);
      }
    }
    /**
     * Page scroll offset is used
     * to get correct coordinates
     * relative to PhotoSwipe viewport.
     *
     * @private
     */
    _updatePageScrollOffset() {
      this.setScrollOffset(0, window.pageYOffset);
    }
    /**
     * @param {number} x
     * @param {number} y
     */
    setScrollOffset(x, y) {
      this.offset.x = x;
      this.offset.y = y;
      this.dispatch("updateScrollOffset");
    }
    /**
     * Create main HTML structure of PhotoSwipe,
     * and add it to DOM
     *
     * @private
     */
    _createMainStructure() {
      this.element = createElement4("pswp", "div");
      this.element.setAttribute("tabindex", "-1");
      this.element.setAttribute("role", "dialog");
      this.template = this.element;
      this.bg = createElement4("pswp__bg", "div", this.element);
      this.scrollWrap = createElement4("pswp__scroll-wrap", "section", this.element);
      this.container = createElement4("pswp__container", "div", this.scrollWrap);
      this.scrollWrap.setAttribute("aria-roledescription", "carousel");
      this.container.setAttribute("aria-live", "off");
      this.container.setAttribute("id", "pswp__items");
      this.mainScroll.appendHolders();
      this.ui = new UI(this);
      this.ui.init();
      (this.options.appendToEl || document.body).appendChild(this.element);
    }
    /**
     * Get position and dimensions of small thumbnail
     *   {x:,y:,w:}
     *
     * Height is optional (calculated based on the large image)
     *
     * @returns {Bounds | undefined}
     */
    getThumbBounds() {
      return getThumbBounds(this.currIndex, this.currSlide ? this.currSlide.data : this._initialItemData, this);
    }
    /**
     * If the PhotoSwipe can have continuous loop
     * @returns Boolean
     */
    canLoop() {
      return this.options.loop && this.getNumItems() > 2;
    }
    /**
     * @private
     * @param {PhotoSwipeOptions} options
     * @returns {PreparedPhotoSwipeOptions}
     */
    _prepareOptions(options) {
      if (window.matchMedia("(prefers-reduced-motion), (update: slow)").matches) {
        options.showHideAnimationType = "none";
        options.zoomAnimationDuration = 0;
      }
      return __spreadValues(__spreadValues({}, defaultOptions), options);
    }
  };

  // assets/js/modules/photoswipe.js
  function photoswipe() {
    const gallery = document.getElementById("product-gallery");
    if (!gallery) return;
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#product-gallery",
      children: "a",
      pswpModule: PhotoSwipe,
      // تنظیمات پایه
      bgOpacity: 0.95,
      spacing: 0.1,
      // فعال سازی UI
      zoom: true,
      close: true,
      counter: true,
      arrowKeys: true,
      // تنظیمات زوم
      maxZoomLevel: 4,
      initialZoomLevel: "fit",
      secondaryZoomLevel: 2,
      // انیمیشن
      showHideAnimationType: "zoom",
      // Padding
      padding: { top: 50, bottom: 50, left: 20, right: 20 }
    });
    lightbox.on("uiRegister", function() {
      lightbox.pswp.ui.registerElement({
        name: "download-button",
        order: 8,
        isButton: true,
        tagName: "a",
        html: '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 32 32" width="32" height="32"><use class="pswp__icn-shadow" xlink:href="#pswp__icn-download"/><path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/></svg>',
        onInit: (el, pswp) => {
          el.setAttribute("download", "");
          el.setAttribute("target", "_blank");
          el.setAttribute("rel", "noopener");
          el.setAttribute("title", "Download");
          pswp.on("change", () => {
            if (pswp.currSlide && pswp.currSlide.data) {
              el.href = pswp.currSlide.data.src;
            }
          });
        }
      });
    });
    lightbox.init();
    const mainImage = document.getElementById("main-image-container");
    if (mainImage) {
      mainImage.addEventListener("click", function(e) {
        if (e.target.closest("#gallery-prev") || e.target.closest("#gallery-next")) {
          return;
        }
        const firstLink = document.querySelector(
          "#product-gallery a:not(.hidden)"
        );
        if (firstLink) {
          firstLink.click();
        }
      });
    }
  }

  // assets/js/modules/fancybox.js
  function fancybox() {
    const gallery = document.getElementById("product-gallery");
    if (!gallery) return;
    if (typeof window.Fancybox === "undefined") {
      console.warn("Fancybox is not loaded");
      return;
    }
    window.Fancybox.bind("[data-fancybox='gallery']", {
      // تنظیمات UI
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [],
          right: ["zoom", "slideshow", "thumbs", "close"]
        }
      },
      // تنظیمات Thumbs
      Thumbs: {
        type: "classic",
        autoStart: false
      },
      // تنظیمات تصویر - مهم!
      Images: {
        zoom: true,
        Panzoom: {
          maxScale: 3,
          // تنظیمات برای fit کردن تصویر در صفحه
          contain: "outside",
          // غیرفعال کردن زوم اولیه
          click: "toggleZoom"
        }
      },
      // انیمیشن
      animated: true,
      showClass: "f-fadeIn",
      hideClass: "f-fadeOut",
      // تنظیمات اسلاید
      infinite: true,
      dragToClose: true,
      // تنظیمات کیبورد
      keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "prev",
        ArrowDown: "next",
        ArrowRight: "next",
        ArrowLeft: "prev"
      },
      // تنظیمات ظاهری
      backdropClick: "close",
      // Carousel settings
      Carousel: {
        transition: "slide",
        friction: 0.9
      },
      // تنظیم اندازه اولیه
      defaultType: "image",
      defaultDisplay: "flex",
      // Preload
      preload: 1
    });
    const mainImage = document.getElementById("main-image-container");
    if (mainImage) {
      mainImage.addEventListener("click", function(e) {
        if (e.target.closest("#gallery-prev") || e.target.closest("#gallery-next")) {
          return;
        }
        const firstLink = document.querySelector('[data-fancybox="gallery"]');
        if (firstLink) {
          firstLink.click();
        }
      });
    }
  }

  // assets/js/modules/travelGalleryFancybox.js
  function travelGalleryFancybox() {
    const travelGallery = document.querySelector(".travel-gallery");
    if (!travelGallery) return;
    if (typeof window.Fancybox === "undefined") {
      console.warn("Fancybox is not loaded");
      return;
    }
    window.Fancybox.bind("[data-fancybox='travel-gallery']", {
      // تنظیمات UI
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [],
          right: ["slideshow", "thumbs", "close"]
        }
      },
      // تنظیمات Thumbs
      Thumbs: {
        type: "classic",
        autoStart: false
      },
      // تنظیمات تصویر
      Images: {
        zoom: true,
        Panzoom: {
          maxScale: 3,
          contain: "outside",
          click: "toggleZoom"
        }
      },
      // تنظیمات ویدیو
      Video: {
        tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload"{{#poster}} poster="{{poster}}"{{/poster}}><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
        format: "",
        autoplay: true,
        ratio: 16 / 9
      },
      // انیمیشن
      animated: true,
      showClass: "f-fadeIn",
      hideClass: "f-fadeOut",
      // تنظیمات اسلاید
      infinite: true,
      dragToClose: true,
      // تنظیمات کیبورد
      keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "prev",
        ArrowDown: "next",
        ArrowRight: "next",
        ArrowLeft: "prev"
      },
      // تنظیمات ظاهری
      backdropClick: "close",
      // Carousel settings
      Carousel: {
        transition: "slide",
        friction: 0.9
      },
      // Preload
      preload: 1,
      // تنظیمات layout
      defaultType: "image",
      defaultDisplay: "flex",
      placeFocusBack: true,
      // Pause video when closing or changing slide
      on: {
        init: (fancybox2) => {
          const mainSlider = document.querySelector("#travel-main-slider");
          if (mainSlider) {
            const slides = mainSlider.querySelectorAll("swiper-slide");
            slides.forEach((slide2) => {
              const video = slide2.querySelector("video");
              if (video && !video.paused) {
                video.pause();
                video.removeAttribute("controls");
                const overlay = slide2.querySelector(".video-play-overlay");
                const cover = slide2.querySelector(".video-cover");
                if (overlay) {
                  overlay.style.display = "flex";
                }
                if (cover) {
                  cover.style.display = "block";
                }
              }
            });
          }
        },
        reveal: (fancybox2, slide2) => {
          const allVideos = document.querySelectorAll(".fancybox__html5video");
          allVideos.forEach((video) => {
            video.pause();
          });
        },
        "Carousel.change": (fancybox2, carousel, prevIndex, nextIndex) => {
          const allVideos = document.querySelectorAll(".fancybox__html5video");
          allVideos.forEach((video) => {
            video.pause();
          });
        },
        closing: (fancybox2) => {
          const allVideos = document.querySelectorAll(".fancybox__html5video");
          allVideos.forEach((video) => {
            video.pause();
          });
        }
      }
    });
  }

  // assets/js/modules/galleryFancybox.js
  function galleryFancybox() {
    if (typeof window.Fancybox === "undefined") {
      console.warn("Fancybox is not loaded");
      return;
    }
    window.Fancybox.bind("[data-fancybox^='gallery-']", {
      // UI settings
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [],
          right: ["slideshow", "thumbs", "close"]
        }
      },
      // Thumbnails settings
      Thumbs: {
        type: "classic",
        autoStart: false
      },
      // Image settings
      Images: {
        zoom: true,
        Panzoom: {
          maxScale: 3,
          contain: "outside",
          click: "toggleZoom"
        }
      },
      // Animation
      animated: true,
      showClass: "f-fadeIn",
      hideClass: "f-fadeOut",
      // Slide settings
      infinite: true,
      dragToClose: true,
      // Keyboard shortcuts
      keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "prev",
        ArrowDown: "next",
        ArrowRight: "next",
        ArrowLeft: "prev"
      },
      // Appearance settings
      backdropClick: "close",
      // Carousel settings
      Carousel: {
        transition: "slide",
        friction: 0.9
      },
      // Preload
      preload: 1,
      // Layout settings
      defaultType: "image",
      defaultDisplay: "flex",
      placeFocusBack: true
    });
    window.Fancybox.bind("[data-fancybox^='leader-']", {
      // UI settings
      Toolbar: {
        display: {
          left: ["infobar"],
          middle: [],
          right: ["slideshow", "thumbs", "close"]
        }
      },
      // Thumbnails settings
      Thumbs: {
        type: "classic",
        autoStart: false
      },
      // Image settings
      Images: {
        zoom: true,
        Panzoom: {
          maxScale: 3,
          contain: "outside",
          click: "toggleZoom"
        }
      },
      // Animation
      animated: true,
      showClass: "f-fadeIn",
      hideClass: "f-fadeOut",
      // Slide settings
      infinite: true,
      dragToClose: true,
      // Keyboard shortcuts
      keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "prev",
        ArrowDown: "next",
        ArrowRight: "next",
        ArrowLeft: "prev"
      },
      // Appearance settings
      backdropClick: "close",
      // Carousel settings
      Carousel: {
        transition: "slide",
        friction: 0.9
      },
      // Preload
      preload: 1,
      // Layout settings
      defaultType: "image",
      defaultDisplay: "flex",
      placeFocusBack: true
    });
  }

  // assets/js/functions/tabs.js
  function Tabs() {
    const tabs = document.querySelectorAll("[data-tab]");
    const tabContents = document.querySelectorAll(".tab-content");
    if (!tabs.length || !tabContents.length) return;
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.tab;
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        tabContents.forEach((tc) => tc.classList.remove("active"));
        document.getElementById(target).classList.add("active");
      });
    });
  }

  // assets/js/functions/accordion.js
  function Accordion() {
    const accordionButtons = document.querySelectorAll(".accordion-button");
    if (!accordionButtons.length) return;
    accordionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-accordion-target");
        const content = document.querySelector(
          '[data-accordion-content="'.concat(targetId, '"]')
        );
        const icon = button.querySelector(".accordion-icon");
        const isExpanded = button.getAttribute("aria-expanded") === "true";
        if (!content) return;
        button.setAttribute("aria-expanded", !isExpanded);
        if (isExpanded) {
          content.style.gridTemplateRows = "0fr";
          icon.style.transform = "rotate(0deg)";
        } else {
          content.style.gridTemplateRows = "1fr";
          icon.style.transform = "rotate(180deg)";
        }
      });
    });
  }

  // assets/js/functions/bookingForm.js
  function BookingForm() {
    const bookingDataEl = document.getElementById("booking-data");
    if (!bookingDataEl) return;
    const bookingData = JSON.parse(bookingDataEl.textContent);
    const adultPrice = bookingData.adultPrice || 0;
    window.updateQuantity = function(type, change) {
      const input = document.getElementById(
        type === "adult" ? "adult-quantity" : "child-quantity"
      );
      if (!input) return;
      const currentValue = parseInt(input.value) || 0;
      const newValue = Math.max(0, Math.min(20, currentValue + change));
      input.value = newValue;
      updatePrice();
    };
    window.updatePrice = function() {
      const adultInput = document.getElementById("adult-quantity");
      const totalCostEl = document.getElementById("total-cost");
      if (!adultInput || !totalCostEl) return;
      const adultCount = parseInt(adultInput.value) || 1;
      const total = adultCount * adultPrice;
      let formattedTotal;
      try {
        formattedTotal = total.toLocaleString("fa-IR");
      } catch (e) {
        formattedTotal = total.toLocaleString("en-US");
      }
      totalCostEl.textContent = formattedTotal + " \u062A\u0648\u0645\u0627\u0646";
    };
    if (document.getElementById("adult-quantity")) {
      updatePrice();
    }
  }

  // assets/js/functions/travelGallery.js
  function TravelGallery() {
    const mainSlider = document.querySelector("#travel-main-slider");
    const thumbnails = document.querySelectorAll(
      ".thumbnail-item, .thumbnail-more"
    );
    if (!mainSlider || thumbnails.length === 0) {
      return;
    }
    const scrollActiveThumbnailIntoView = (activeIndex) => {
      const thumbnailsContainer = document.querySelector("#travel-thumbnails");
      if (!thumbnailsContainer) return;
      const isMobile = window.innerWidth < 1024;
      if (!isMobile) return;
      let activeThumbnail = null;
      thumbnails.forEach((thumb, index) => {
        if (activeIndex < 8 && index === activeIndex) {
          activeThumbnail = thumb;
        } else if (activeIndex >= 8 && index === 8) {
          activeThumbnail = thumb;
        }
      });
      if (activeThumbnail) {
        activeThumbnail.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    };
    const updateActiveThumbnail = (activeIndex) => {
      thumbnails.forEach((thumb, index) => {
        thumb.classList.remove("active");
        thumb.classList.remove("ring-2", "ring-cynOrange");
        if (activeIndex < 8 && index === activeIndex) {
          thumb.classList.add("active");
          thumb.classList.add("ring-2", "ring-cynOrange");
        } else if (activeIndex >= 8 && index === 8) {
          thumb.classList.add("active");
          thumb.classList.add("ring-2", "ring-cynOrange");
        }
      });
      scrollActiveThumbnailIntoView(activeIndex);
    };
    const pauseAllVideosExceptActive = () => {
      const slides = mainSlider.querySelectorAll("swiper-slide");
      const swiper = mainSlider.swiper;
      let activeIndex = 0;
      if (swiper) {
        activeIndex = swiper.activeIndex;
      } else {
        slides.forEach((slide2, index) => {
          if (slide2.classList.contains("swiper-slide-active") || slide2.hasAttribute("active")) {
            activeIndex = index;
          }
        });
      }
      slides.forEach((slide2, index) => {
        const video = slide2.querySelector("video");
        const overlay = slide2.querySelector(".video-play-overlay");
        const cover = slide2.querySelector(".video-cover");
        if (video) {
          if (index === activeIndex) {
          } else {
            video.pause();
            video.removeAttribute("controls");
            if (overlay) {
              overlay.style.display = "flex";
            }
            if (cover) {
              cover.style.display = "block";
            }
          }
        }
      });
    };
    const initSwiper = () => {
      const swiper = mainSlider.swiper;
      if (!swiper) {
        setTimeout(initSwiper, 100);
        return;
      }
      const handleSlideChange = () => {
        const activeIndex = swiper.activeIndex;
        updateActiveThumbnail(activeIndex);
        pauseAllVideosExceptActive();
      };
      swiper.on("slideChange", handleSlideChange);
      mainSlider.addEventListener("swiperslidechange", handleSlideChange);
      updateActiveThumbnail(swiper.activeIndex);
      pauseAllVideosExceptActive();
      thumbnails.forEach((thumb, index) => {
        thumb.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const slideIndex = index === 8 ? 8 : index;
          swiper.slideTo(slideIndex);
        });
      });
    };
    const initVideoPlayButtons = () => {
      const playOverlays = mainSlider.querySelectorAll(".video-play-overlay");
      playOverlays.forEach((overlay) => {
        overlay.addEventListener("click", function(e) {
          e.stopPropagation();
          e.preventDefault();
          const slide2 = this.closest("swiper-slide");
          const video = slide2.querySelector("video");
          const cover = slide2.querySelector(".video-cover");
          if (video) {
            video.play().catch((error) => {
              console.error("Error playing video:", error);
            });
            if (cover) {
              cover.style.display = "none";
            }
            this.style.display = "none";
            video.setAttribute("controls", "true");
          }
        });
      });
      const videos = mainSlider.querySelectorAll("video");
      videos.forEach((video) => {
        const slide2 = video.closest("swiper-slide");
        const overlay = slide2 == null ? void 0 : slide2.querySelector(".video-play-overlay");
        const cover = slide2 == null ? void 0 : slide2.querySelector(".video-cover");
        video.addEventListener("pause", () => {
          if (video.currentTime < video.duration - 0.5) {
            if (overlay) {
              overlay.style.display = "flex";
            }
            if (cover) {
              cover.style.display = "block";
            }
            video.removeAttribute("controls");
          }
        });
        video.addEventListener("ended", () => {
          if (overlay) {
            overlay.style.display = "flex";
          }
          if (cover) {
            cover.style.display = "block";
          }
          video.removeAttribute("controls");
          video.currentTime = 0;
        });
      });
    };
    const initFancyboxClickHandlers = () => {
      const fancyboxLinks = mainSlider.querySelectorAll(
        "a[data-fancybox='travel-gallery']"
      );
      fancyboxLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          const slide2 = link.closest("swiper-slide");
          if (slide2) {
            const video = slide2.querySelector("video");
            if (video && !video.paused) {
              video.pause();
              video.removeAttribute("controls");
              const overlay = slide2.querySelector(".video-play-overlay");
              const cover = slide2.querySelector(".video-cover");
              if (overlay) {
                overlay.style.display = "flex";
              }
              if (cover) {
                cover.style.display = "block";
              }
            }
          }
        });
      });
    };
    initSwiper();
    initVideoPlayButtons();
    initFancyboxClickHandlers();
    setTimeout(() => {
      const swiper = mainSlider.swiper;
      if (swiper) {
        updateActiveThumbnail(swiper.activeIndex);
        pauseAllVideosExceptActive();
      }
      initVideoPlayButtons();
      initFancyboxClickHandlers();
    }, 500);
  }

  // assets/js/functions/faq.js
  function FaqTabs() {
    const handlers = document.querySelectorAll(".faq-handler");
    const panels = document.querySelectorAll(".faq-panel");
    if (!panels || !handlers) return;
    function activateTab(element) {
      if (!element) return;
      element.classList.replace("bg-cynWhite", "bg-cynOrange");
      element.classList.replace("text-cynBlack", "text-cynWhite");
    }
    function deActivateTab(element) {
      if (!element) return;
      element.classList.replace("bg-cynOrange", "bg-cynWhite");
      element.classList.replace("text-cynWhite", "text-cynBlack");
    }
    function activatePanel(element) {
      if (!element) return;
      element.classList.replace("grid-rows-[0fr]", "grid-rows-[1fr]");
    }
    function deActivatePanel(element) {
      if (!element) return;
      element.classList.replace("grid-rows-[1fr]", "grid-rows-[0fr]");
    }
    activateTab(handlers[0]);
    activatePanel(panels[0]);
    handlers.forEach((handler) => {
      handler.addEventListener("click", () => {
        handlers.forEach((innerHandler) => deActivateTab(innerHandler));
        activateTab(handler);
        panels.forEach((panel) => {
          const isRelatedPanel = panel.getAttribute("controlled-by") === handler.id;
          if (isRelatedPanel) {
            activatePanel(panel);
          } else {
            deActivatePanel(panel);
          }
        });
      });
    });
  }
  function FaqCard() {
    const faqCards = document.querySelectorAll(".faq-card");
    if (!faqCards) return;
    function activateFaq(faq, expert) {
      expert.classList.replace("grid-rows-[0fr]", "grid-rows-[1fr]");
      const svg = faq.querySelector("svg");
      const faqToggle = faq.querySelector(".faq-toggle");
      faqToggle.classList.replace(
        "[&_span]:text-cynBlack/60",
        "[&_span]:text-cynBlack"
      );
      if (svg) {
        svg.classList.add("rotate-45");
        svg.classList.add("text-cynOrange");
      }
    }
    function deActivateFaq(faq, expert) {
      expert.classList.replace("grid-rows-[1fr]", "grid-rows-[0fr]");
      const svg = faq.querySelector("svg");
      const faqToggle = faq.querySelector(".faq-toggle");
      faqToggle.classList.replace(
        "[&_span]:text-cynBlack",
        "[&_span]:text-cynBlack/60"
      );
      if (svg) {
        svg.classList.remove("rotate-45");
        svg.classList.remove("text-cynOrange");
      }
    }
    faqCards.forEach((faq) => {
      const faqToggle = faq.querySelector(".faq-toggle");
      const expert = faq.querySelector(".faq-expert");
      if (!expert) return;
      faqToggle == null ? void 0 : faqToggle.addEventListener("click", () => {
        const faqIsActive = expert.classList.contains("grid-rows-[1fr]");
        if (faqIsActive) {
          deActivateFaq(faq, expert);
        } else {
          activateFaq(faq, expert);
        }
      });
    });
  }

  // assets/js/functions/subMenuMobile.js
  function SubMenuMobile() {
    jQuery(document).ready(function($) {
      var arrowIcon = '<i class="sub-menu-icon mt-1.5 flex justify-end" style="transition:transform 0.3s;vertical-align:middle;">\n      <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 rotate-90 transition-all duration-300">\n        <path d="M10 8L14 12.5L10 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n      </svg>\n    </i>';
      $("#mobile-menu .menu-item-has-children").each(function() {
        var $menuItem = $(this);
        var $subMenuToggle = $(arrowIcon);
        $menuItem.prepend($subMenuToggle);
        $subMenuToggle.on("click", function(e) {
          e.stopPropagation();
          var $subMenu = $menuItem.children("ul");
          if ($subMenu.is(":visible")) {
            $subMenu.slideUp();
            $subMenuToggle.find("svg").removeClass("rotate-[270deg]");
          } else {
            $subMenu.slideDown();
            $subMenuToggle.find("svg").addClass("rotate-[270deg]");
          }
        });
      });
    });
  }

  // assets/js/functions/subMenuDesktop.js
  function AddIcons() {
    var _a;
    (_a = document.querySelectorAll("#main-menu .menu-item-has-children")) == null ? void 0 : _a.forEach((menu) => {
      var _a2;
      const svg = (_a2 = document.querySelector("div#chevron-down")) == null ? void 0 : _a2.cloneNode(true);
      const link = menu.querySelector("a");
      svg.classList.remove("hidden");
      svg.classList.add("mr-1", "size-4", "stroke-2");
      link.appendChild(svg);
    });
  }

  // assets/js/functions/finder.js
  function Finder() {
    const finderForm = document.getElementById("finder-form");
    const errorContainer = document.getElementById("finder-error");
    if (!finderForm) return;
    finderForm.addEventListener("submit", function(e) {
      const destination = document.getElementById("destination");
      const passengers = document.getElementById("passengers");
      if (errorContainer) {
        errorContainer.classList.add("hidden");
        errorContainer.textContent = "";
      }
      if (!destination || !destination.value || destination.value === "") {
        e.preventDefault();
        showError("\u0644\u0637\u0641\u0627 \u06CC\u06A9 \u0645\u0642\u0635\u062F \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F");
        return false;
      }
      if (!passengers || !passengers.value || parseInt(passengers.value) <= 0) {
        e.preventDefault();
        showError("\u0644\u0637\u0641\u0627 \u062A\u0639\u062F\u0627\u062F \u0647\u0645\u0633\u0641\u0631 \u0631\u0627 \u0648\u0627\u0631\u062F \u06A9\u0646\u06CC\u062F");
        return false;
      }
    });
    function showError(message) {
      if (errorContainer) {
        errorContainer.textContent = message;
        errorContainer.classList.remove("hidden");
        errorContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }

  // assets/js/functions/search.js
  function SearchPage() {
    var _a;
    const searchForm = document.querySelector("form#search-form");
    if (!searchForm) return;
    (_a = searchForm.querySelectorAll("input")) == null ? void 0 : _a.forEach((el) => {
      el.addEventListener("change", () => {
        searchForm.submit();
      });
    });
  }

  // assets/js/functions/htmx.js
  init_htmx_esm();
  function Htmx() {
    window.htmx = (init_htmx_esm(), __toCommonJS(htmx_esm_exports));
  }

  // assets/js/functions/textForm.js
  function TextForm() {
    const scriptElement = document.getElementById("travelogue_form");
    if (!scriptElement) {
      return;
    }
    document.addEventListener("DOMContentLoaded", function() {
      const fileInput = document.getElementById("images");
      const fileLabel = document.getElementById("file-label");
      const previewContainer = document.getElementById("image-preview-container");
      if (!fileInput || !fileLabel || !previewContainer) {
        return;
      }
      let selectedFiles = [];
      const selectText = fileInput.dataset.selectText || "\u0627\u0646\u062A\u062E\u0627\u0628 \u0639\u06A9\u0633";
      const filesSelectedText = fileInput.dataset.filesSelectedText || "\u0641\u0627\u06CC\u0644 \u0627\u0646\u062A\u062E\u0627\u0628 \u0634\u062F\u0647";
      function updateFileInput() {
        const dataTransfer = new DataTransfer();
        selectedFiles.forEach((file) => {
          dataTransfer.items.add(file);
        });
        fileInput.files = dataTransfer.files;
        updateLabel();
      }
      function updateLabel() {
        if (selectedFiles.length === 0) {
          fileLabel.textContent = selectText;
        } else if (selectedFiles.length === 1) {
          fileLabel.textContent = selectedFiles[0].name;
        } else {
          fileLabel.textContent = selectedFiles.length + " " + filesSelectedText;
        }
      }
      function createPreviewElement(file, index) {
        const previewDiv = document.createElement("div");
        previewDiv.className = "relative bg-white rounded-lg border border-cynBlack/20 overflow-hidden";
        previewDiv.dataset.fileIndex = index;
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.className = "w-full h-32 object-cover";
        img.alt = file.name;
        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "absolute top-2 start-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1.5 transition-opacity";
        removeBtn.innerHTML = '<svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
        removeBtn.addEventListener("click", function(e) {
          e.stopPropagation();
          removeFile(index);
        });
        const fileName = document.createElement("p");
        fileName.className = "text-xs text-cynBlack/60 truncate px-2 py-1 bg-white/90";
        fileName.textContent = file.name;
        previewDiv.appendChild(img);
        previewDiv.appendChild(removeBtn);
        previewDiv.appendChild(fileName);
        return previewDiv;
      }
      function renderPreviews() {
        previewContainer.innerHTML = "";
        if (selectedFiles.length === 0) {
          previewContainer.classList.replace("grid", "hidden");
          return;
        }
        previewContainer.classList.replace("hidden", "grid");
        selectedFiles.forEach((file, index) => {
          const previewElement = createPreviewElement(file, index);
          previewContainer.appendChild(previewElement);
        });
      }
      function removeFile(index) {
        const previewElement = previewContainer.querySelector(
          '[data-file-index="'.concat(index, '"]')
        );
        if (previewElement) {
          const previewImg = previewElement.querySelector("img");
          if (previewImg && previewImg.src.startsWith("blob:")) {
            URL.revokeObjectURL(previewImg.src);
          }
        }
        selectedFiles.splice(index, 1);
        updateFileInput();
        renderPreviews();
      }
      fileInput.addEventListener("change", function(e) {
        const newFiles = Array.from(e.target.files);
        newFiles.forEach((newFile) => {
          const exists = selectedFiles.some(
            (existingFile) => existingFile.name === newFile.name && existingFile.size === newFile.size
          );
          if (!exists) {
            selectedFiles.push(newFile);
          }
        });
        updateFileInput();
        renderPreviews();
        fileInput.value = "";
      });
      const form = document.getElementById("travelogue_form");
      if (form) {
        let customFormData = null;
        form.addEventListener("htmx:configRequest", function(event2) {
          updateFileInput();
          customFormData = new FormData();
          const formElements = form.elements;
          for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i];
            if (element.name && element.tagName !== "BUTTON") {
              if (element.type === "file") {
                selectedFiles.forEach((file) => {
                  customFormData.append("images[]", file);
                });
              } else if (element.type === "checkbox" || element.type === "radio") {
                if (element.checked) {
                  customFormData.append(element.name, element.value);
                }
              } else {
                customFormData.append(element.name, element.value);
              }
            }
          }
        });
        form.addEventListener("htmx:beforeRequest", function(event2) {
          if (customFormData) {
            const xhr = event2.detail.xhr;
            if (xhr && xhr.send) {
              const originalSend = xhr.send.bind(xhr);
              xhr.send = function(data) {
                return originalSend(customFormData);
              };
            }
          }
        });
      }
      window.addEventListener("beforeunload", function() {
        selectedFiles.forEach((file) => {
          const previewImg = previewContainer.querySelector("img");
          if (previewImg && previewImg.src.startsWith("blob:")) {
            URL.revokeObjectURL(previewImg.src);
          }
        });
      });
    });
  }

  // assets/js/functions/checkoutLoginModal.js
  function CheckoutLoginModal() {
    function setupBackdropPrevention() {
      document.addEventListener(
        "click",
        function(e) {
          const backdrop = e.target.closest("[modal-backdrop]");
          if (backdrop) {
            const loginModal = document.querySelector(
              '[modal][data-modal-name="login-required-modal"]'
            );
            if (loginModal && loginModal.dataset.active === "true") {
              e.stopImmediatePropagation();
              e.stopPropagation();
              e.preventDefault();
              return false;
            }
          }
        },
        true
      );
    }
    function init() {
      setupBackdropPrevention();
      initLoginModal();
    }
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
    function initLoginModal() {
      const dataElement = document.getElementById("checkout-login-data");
      if (!dataElement) return;
      try {
        const data = JSON.parse(dataElement.textContent);
        if (data.showModal && !data.guestCheckoutEnabled && !data.isLoggedIn) {
          const modal = document.querySelector(
            '[modal][data-modal-name="login-required-modal"]'
          );
          if (modal) {
            setTimeout(function() {
              modal.dataset.active = "true";
              const backdrop = document.querySelector("[modal-backdrop]");
              if (backdrop) {
                backdrop.dataset.active = "true";
              }
              document.body.style.overflow = "hidden";
            }, 100);
          }
        }
      } catch (e) {
        console.error("Error checking login requirement:", e);
      }
    }
  }

  // assets/js/functions/productReviews.js
  function ProductReviews() {
    document.addEventListener("DOMContentLoaded", function() {
      const childrenLists = document.querySelectorAll(".commentlist .children");
      if (childrenLists.length > 0) {
        console.log("\u2713 Found " + childrenLists.length + " nested reply lists");
      } else {
        console.log("\u2717 No nested replies found. Make sure:");
        console.log(
          "1. WordPress threaded comments are enabled (Settings \u2192 Discussion)"
        );
        console.log("2. Comments have replies (parent-child relationship)");
      }
      const starRating = document.querySelector(".star-rating");
      if (starRating) {
        let updateStars = function(value) {
          stars.forEach((star, index) => {
            if (index < value) {
              star.classList.remove("text-gray-300");
              star.classList.add("text-cynOrange");
            } else {
              star.classList.remove("text-cynOrange");
              star.classList.add("text-gray-300");
            }
          });
        }, highlightStars = function(value) {
          stars.forEach((star, index) => {
            if (index < value) {
              star.classList.remove("text-gray-300");
              star.classList.add("text-cynOrange");
            } else {
              star.classList.remove("text-cynOrange");
              star.classList.add("text-gray-300");
            }
          });
        };
        const stars = starRating.querySelectorAll(".star");
        const ratingSelect = document.getElementById("rating");
        stars.forEach((star) => {
          star.addEventListener("click", function() {
            const value = parseInt(this.getAttribute("data-value"));
            ratingSelect.value = value;
            updateStars(value);
          });
          star.addEventListener("mouseenter", function() {
            const value = parseInt(this.getAttribute("data-value"));
            highlightStars(value);
          });
        });
        starRating.addEventListener("mouseleave", function() {
          const currentValue = parseInt(ratingSelect.value) || 0;
          updateStars(currentValue);
        });
      }
    });
  }

  // assets/js/functions/checkoutLayout.js
  function CheckoutLayout() {
    document.addEventListener("DOMContentLoaded", function() {
      const formCoupon = document.querySelector(
        ".woocommerce-form-coupon-toggle"
      );
      const checkoutForm = document.querySelector(
        "form.woocommerce-checkout div.woocommerce-checkout-review-order"
      );
      const paymentSection = document.querySelector(
        ".woocommerce-checkout-payment"
      );
      if (formCoupon && checkoutForm && paymentSection) {
        checkoutForm.insertBefore(formCoupon, paymentSection);
      }
    });
  }
  function CheckoutCoupon() {
    document.addEventListener("DOMContentLoaded", function() {
      const infoBox = document.querySelector(".woocommerce-info");
      const couponForm = document.querySelector(
        ".checkout_coupon.woocommerce-form-coupon"
      );
      if (infoBox && couponForm) {
        infoBox.appendChild(couponForm);
      }
    });
  }

  // assets/js/index.js
  Modals();
  setVariables();
  shareBtn();
  register();
  videoCover();
  ThemePlyr();
  photoswipe();
  fancybox();
  travelGalleryFancybox();
  galleryFancybox();
  Tabs();
  Accordion();
  BookingForm();
  TravelGallery();
  FaqTabs();
  FaqCard();
  SubMenuMobile();
  AddIcons();
  Finder();
  SearchPage();
  Htmx();
  TextForm();
  CheckoutLoginModal();
  ProductReviews();
  CheckoutCoupon();
  CheckoutLayout();
})();
/*! Bundled license information:

photoswipe/dist/photoswipe-lightbox.esm.js:
  (*!
    * PhotoSwipe Lightbox 5.4.4 - https://photoswipe.com
    * (c) 2024 Dmytro Semenov
    *)

photoswipe/dist/photoswipe.esm.js:
  (*!
    * PhotoSwipe 5.4.4 - https://photoswipe.com
    * (c) 2024 Dmytro Semenov
    *)
*/
