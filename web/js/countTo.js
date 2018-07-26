(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define('CountTo', [], factory);
  else if (typeof exports === 'object') exports['CountTo'] = factory();
  else root['CountTo'] = factory();
})(this, function() {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // identity function for calling harmony imports with the correct context
    /******/
    /******/ /******/ __webpack_require__.i = function(value) {
      return value;
    }; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          /******/ configurable: false,
          /******/ enumerable: true,
          /******/ get: getter,
          /******/
        });
        /******/
      }
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = '/dist/'; // Load entry module and return exports
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 2));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function(module, exports, __webpack_require__) {
        var Component = __webpack_require__(4)(
          /* script */
          __webpack_require__(1),
          /* template */
          __webpack_require__(5),
          /* scopeId */
          null,
          /* cssModules */
          null
        );

        module.exports = Component.exports;

        /***/
      },
      /* 1 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _requestAnimationFrame = __webpack_require__(3);

        exports.default = {
          props: {
            startVal: {
              type: Number,
              required: false,
              default: 0,
            },
            endVal: {
              type: Number,
              required: false,
              default: 2017,
            },
            duration: {
              type: Number,
              required: false,
              default: 3000,
            },
            autoplay: {
              type: Boolean,
              required: false,
              default: true,
            },
            decimals: {
              type: Number,
              required: false,
              default: 0,
              validator: function validator(value) {
                return value >= 0;
              },
            },
            decimal: {
              type: String,
              required: false,
              default: '.',
            },
            separator: {
              type: String,
              required: false,
              default: ',',
            },
            prefix: {
              type: String,
              required: false,
              default: '',
            },
            suffix: {
              type: String,
              required: false,
              default: '',
            },
            useEasing: {
              type: Boolean,
              required: false,
              default: true,
            },
            easingFn: {
              type: Function,
              default: function _default(t, b, c, d) {
                return (
                  (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b
                );
              },
            },
          },
          data: function data() {
            return {
              localStartVal: this.startVal,
              displayValue: this.formatNumber(this.startVal),
              printVal: null,
              paused: false,
              localDuration: this.duration,
              startTime: null,
              timestamp: null,
              remaining: null,
              rAF: null,
            };
          },

          computed: {
            countDown: function countDown() {
              return this.startVal > this.endVal;
            },
          },
          watch: {
            startVal: function startVal() {
              if (this.autoplay) {
                this.start();
              }
            },
            endVal: function endVal() {
              if (this.autoplay) {
                this.start();
              }
            },
          },
          mounted: function mounted() {
            if (this.autoplay) {
              this.start();
            }
            this.$emit('mountedCallback');
          },

          methods: {
            start: function start() {
              this.localStartVal = this.startVal;
              this.startTime = null;
              this.localDuration = this.duration;
              this.paused = false;
              this.rAF = (0, _requestAnimationFrame.requestAnimationFrame)(
                this.count
              );
            },
            pauseResume: function pauseResume() {
              if (this.paused) {
                this.resume();
                this.paused = false;
              } else {
                this.pause();
                this.paused = true;
              }
            },
            pause: function pause() {
              (0, _requestAnimationFrame.cancelAnimationFrame)(this.rAF);
            },
            resume: function resume() {
              this.startTime = null;
              this.localDuration = +this.remaining;
              this.localStartVal = +this.printVal;
              (0, _requestAnimationFrame.requestAnimationFrame)(this.count);
            },
            reset: function reset() {
              this.startTime = null;
              (0, _requestAnimationFrame.cancelAnimationFrame)(this.rAF);
              this.displayValue = this.formatNumber(this.startVal);
            },
            count: function count(timestamp) {
              if (!this.startTime) this.startTime = timestamp;
              this.timestamp = timestamp;
              var progress = timestamp - this.startTime;
              this.remaining = this.localDuration - progress;

              if (this.useEasing) {
                if (this.countDown) {
                  this.printVal =
                    this.localStartVal -
                    this.easingFn(
                      progress,
                      0,
                      this.localStartVal - this.endVal,
                      this.localDuration
                    );
                } else {
                  this.printVal = this.easingFn(
                    progress,
                    this.localStartVal,
                    this.endVal - this.localStartVal,
                    this.localDuration
                  );
                }
              } else {
                if (this.countDown) {
                  this.printVal =
                    this.localStartVal -
                    (this.localStartVal - this.endVal) *
                      (progress / this.localDuration);
                } else {
                  this.printVal =
                    this.localStartVal +
                    (this.localStartVal - this.startVal) *
                      (progress / this.localDuration);
                }
              }
              if (this.countDown) {
                this.printVal =
                  this.printVal < this.endVal ? this.endVal : this.printVal;
              } else {
                this.printVal =
                  this.printVal > this.endVal ? this.endVal : this.printVal;
              }

              this.displayValue = this.formatNumber(this.printVal);
              if (progress < this.localDuration) {
                this.rAF = (0, _requestAnimationFrame.requestAnimationFrame)(
                  this.count
                );
              } else {
                this.$emit('callback');
              }
            },
            isNumber: function isNumber(val) {
              return !isNaN(parseFloat(val));
            },
            formatNumber: function formatNumber(num) {
              num = parseFloat(num);
              num = num.toFixed(this.decimals);
              num += '';
              var x = num.split('.');
              var x1 = x[0];
              var x2 = x.length > 1 ? this.decimal + x[1] : '';
              var rgx = /(\d+)(\d{3})/;
              if (this.separator && !this.isNumber(this.separator)) {
                while (rgx.test(x1)) {
                  x1 = x1.replace(rgx, '$1' + this.separator + '$2');
                }
              }
              return this.prefix + x1 + x2 + this.suffix;
            },
          },
          destroyed: function destroyed() {
            (0, _requestAnimationFrame.cancelAnimationFrame)(this.rAF);
          },
        }; //
        //
        //
        //
        //

        /***/
      },
      /* 2 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });

        var _vueCountTo = __webpack_require__(0);

        var _vueCountTo2 = _interopRequireDefault(_vueCountTo);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = _vueCountTo2.default;

        if (typeof window !== 'undefined' && window.Vue) {
          window.Vue.component('count-to', _vueCountTo2.default);
        }

        /***/
      },
      /* 3 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict';

        Object.defineProperty(exports, '__esModule', {
          value: true,
        });
        var lastTime = 0;
        var prefixes = 'webkit moz ms o'.split(' '); // 各浏览器前缀

        var requestAnimationFrame = void 0;
        var cancelAnimationFrame = void 0;

        var isServer = typeof window === 'undefined';
        if (isServer) {
          exports.requestAnimationFrame = requestAnimationFrame = function requestAnimationFrame() {
            return;
          };
          exports.cancelAnimationFrame = cancelAnimationFrame = function cancelAnimationFrame() {
            return;
          };
        } else {
          exports.requestAnimationFrame = requestAnimationFrame =
            window.requestAnimationFrame;
          exports.cancelAnimationFrame = cancelAnimationFrame =
            window.cancelAnimationFrame;
          var prefix = void 0;
          // 通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
          for (var i = 0; i < prefixes.length; i++) {
            if (requestAnimationFrame && cancelAnimationFrame) {
              break;
            }
            prefix = prefixes[i];
            exports.requestAnimationFrame = requestAnimationFrame =
              requestAnimationFrame || window[prefix + 'RequestAnimationFrame'];
            exports.cancelAnimationFrame = cancelAnimationFrame =
              cancelAnimationFrame ||
              window[prefix + 'CancelAnimationFrame'] ||
              window[prefix + 'CancelRequestAnimationFrame'];
          }

          // 如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
          if (!requestAnimationFrame || !cancelAnimationFrame) {
            exports.requestAnimationFrame = requestAnimationFrame = function requestAnimationFrame(
              callback
            ) {
              var currTime = new Date().getTime();
              // 为了使setTimteout的尽可能的接近每秒60帧的效果
              var timeToCall = Math.max(0, 16 - (currTime - lastTime));
              var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
              }, timeToCall);
              lastTime = currTime + timeToCall;
              return id;
            };

            exports.cancelAnimationFrame = cancelAnimationFrame = function cancelAnimationFrame(
              id
            ) {
              window.clearTimeout(id);
            };
          }
        }

        exports.requestAnimationFrame = requestAnimationFrame;
        exports.cancelAnimationFrame = cancelAnimationFrame;

        /***/
      },
      /* 4 */
      /***/ function(module, exports) {
        // this module is a runtime utility for cleaner component module output and will
        // be included in the final webpack user bundle

        module.exports = function normalizeComponent(
          rawScriptExports,
          compiledTemplate,
          scopeId,
          cssModules
        ) {
          var esModule;
          var scriptExports = (rawScriptExports = rawScriptExports || {});

          // ES6 modules interop
          var type = typeof rawScriptExports.default;
          if (type === 'object' || type === 'function') {
            esModule = rawScriptExports;
            scriptExports = rawScriptExports.default;
          }

          // Vue.extend constructor export interop
          var options =
            typeof scriptExports === 'function'
              ? scriptExports.options
              : scriptExports;

          // render functions
          if (compiledTemplate) {
            options.render = compiledTemplate.render;
            options.staticRenderFns = compiledTemplate.staticRenderFns;
          }

          // scopedId
          if (scopeId) {
            options._scopeId = scopeId;
          }

          // inject cssModules
          if (cssModules) {
            var computed = Object.create(options.computed || null);
            Object.keys(cssModules).forEach(function(key) {
              var module = cssModules[key];
              computed[key] = function() {
                return module;
              };
            });
            options.computed = computed;
          }

          return {
            esModule: esModule,
            exports: scriptExports,
            options: options,
          };
        };

        /***/
      },
      /* 5 */
      /***/ function(module, exports) {
        module.exports = {
          render: function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c('span', [
              _vm._v('\n  ' + _vm._s(_vm.displayValue) + '\n'),
            ]);
          },
          staticRenderFns: [],
        };

        /***/
      },
      /******/
    ]
  );
});

// WEBPACK FOOTER //
// vue-count-to.min.js
