function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ClientTemporalGraph';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
        }
      },
      directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _select_graph_select_graph_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./select-graph/select-graph.component */
    "./src/app/select-graph/select-graph.component.ts");
    /* harmony import */


    var _snapshot_snapshot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./snapshot/snapshot.component */
    "./src/app/snapshot/snapshot.component.ts");
    /* harmony import */


    var _difference_difference_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./difference/difference.component */
    "./src/app/difference/difference.component.ts");
    /* harmony import */


    var _grouping_grouping_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./grouping/grouping.component */
    "./src/app/grouping/grouping.component.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _time_stamp_time_stamp_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./time-stamp/time-stamp.component */
    "./src/app/time-stamp/time-stamp.component.ts");
    /* harmony import */


    var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular-material-components/datetime-picker */
    "./node_modules/@angular-material-components/datetime-picker/__ivy_ngcc__/fesm2015/angular-material-components-datetime-picker.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular-material-components/moment-adapter */
    "./node_modules/@angular-material-components/moment-adapter/__ivy_ngcc__/fesm2015/angular-material-components-moment-adapter.js");
    /* harmony import */


    var src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! src/gen/generatedAngular */
    "./src/gen/generatedAngular/index.ts");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./rest.service */
    "./src/app/rest.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _enum_keys_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./enum-keys-pipe */
    "./src/app/enum-keys-pipe.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_20__["DefaultService"], _rest_service__WEBPACK_IMPORTED_MODULE_21__["RestService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatTimepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatDatetimePickerModule"], _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_19__["NgxMatMomentModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__["FlexLayoutModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__["MatDividerModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__["MatButtonToggleModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _select_graph_select_graph_component__WEBPACK_IMPORTED_MODULE_7__["SelectGraphComponent"], _snapshot_snapshot_component__WEBPACK_IMPORTED_MODULE_8__["SnapshotComponent"], _difference_difference_component__WEBPACK_IMPORTED_MODULE_9__["DifferenceComponent"], _grouping_grouping_component__WEBPACK_IMPORTED_MODULE_10__["GroupingComponent"], _time_stamp_time_stamp_component__WEBPACK_IMPORTED_MODULE_13__["TimeStampComponent"], _enum_keys_pipe__WEBPACK_IMPORTED_MODULE_29__["EnumKeysPipe"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatTimepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatDatetimePickerModule"], _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_19__["NgxMatMomentModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__["FlexLayoutModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__["MatDividerModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__["MatButtonToggleModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _select_graph_select_graph_component__WEBPACK_IMPORTED_MODULE_7__["SelectGraphComponent"], _snapshot_snapshot_component__WEBPACK_IMPORTED_MODULE_8__["SnapshotComponent"], _difference_difference_component__WEBPACK_IMPORTED_MODULE_9__["DifferenceComponent"], _grouping_grouping_component__WEBPACK_IMPORTED_MODULE_10__["GroupingComponent"], _time_stamp_time_stamp_component__WEBPACK_IMPORTED_MODULE_13__["TimeStampComponent"], _enum_keys_pipe__WEBPACK_IMPORTED_MODULE_29__["EnumKeysPipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatTimepickerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_14__["NgxMatDatetimePickerModule"], _angular_material_components_moment_adapter__WEBPACK_IMPORTED_MODULE_19__["NgxMatMomentModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__["FlexLayoutModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_27__["MatCardModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__["MatDividerModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_31__["MatButtonToggleModule"]],
          providers: [src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_20__["DefaultService"], _rest_service__WEBPACK_IMPORTED_MODULE_21__["RestService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/difference/difference.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/difference/difference.component.ts ***!
    \****************************************************/

  /*! exports provided: DifferenceComponent */

  /***/
  function srcAppDifferenceDifferenceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DifferenceComponent", function () {
      return DifferenceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var cytoscape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! cytoscape */
    "./node_modules/cytoscape/dist/cytoscape.cjs.js");
    /* harmony import */


    var cytoscape__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cytoscape__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/gen/generatedAngular */
    "./src/gen/generatedAngular/index.ts");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../rest.service */
    "./src/app/rest.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _select_graph_select_graph_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../select-graph/select-graph.component */
    "./src/app/select-graph/select-graph.component.ts");
    /* harmony import */


    var _time_stamp_time_stamp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../time-stamp/time-stamp.component */
    "./src/app/time-stamp/time-stamp.component.ts");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var DifferenceComponent = /*#__PURE__*/function () {
      function DifferenceComponent(restService) {
        _classCallCheck(this, DifferenceComponent);

        this.restService = restService;
        this.fromTimeStamp = null;
        this.toTimeStamp = null;
        this.timeDim = "valid";
        this.aggrPrefixes = ['min ', 'max ', 'sum '];
        /**
         * Map of all possible values for the vertexLabelKey to a color in RGB format.
         * @type {{}}
         */

        this.colorMap = {};
        /**
         * True, if the graph layout should be force based
         * @type {boolean}
         */

        this.useForceLayout = true;
        /**
         * True, if the default label should be used
         * @type {boolean}
         */

        this.useDefaultLabel = true;
        /**
         * Maximum value for the count attribute of vertices
         * @type {number}
         */

        this.maxVertexCount = 0;
        /**
         * Maximum value for the count attribute of edges
         * @type {number}
         */

        this.maxEdgeCount = 0;
      }

      _createClass(DifferenceComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          this.cy = cytoscape__WEBPACK_IMPORTED_MODULE_2__({
            container: document.getElementById('differenceCanvas'),
            style: cytoscape__WEBPACK_IMPORTED_MODULE_2__["stylesheet"]().selector('node').css({
              // define label content and font
              'content': function content(node) {
                return node.data().label;
              },
              // if the count shall effect the vertex size, set font size accordingly
              'font-size': '10px',
              'text-valign': 'center',
              'color': 'black',
              'background-color': function backgroundColor(node) {
                var diff = node.data('properties')._diff;

                if (diff === "-1") {
                  return '#D55';
                } else if (diff === "1") {
                  return '#5D5';
                } else {
                  return '#55D';
                }
              },
              'width': '60px',
              'height': '60px',
              'text-wrap': 'wrap'
            }).selector('edge').css({
              'curve-style': 'haystack',
              // layout of edge and edge label
              'content': function content(edge) {
                return edge.data('label');
              },
              // if the count shall effect the vertex size, set font size accordingly
              'font-size': '30',
              'line-color': function lineColor(edge) {
                var diff = edge.data('properties')._diff;

                if (diff === "-1") {
                  return '#D22';
                } else if (diff === "1") {
                  return '#2D2';
                } else {
                  return '#000';
                }
              },
              // width of edges can be determined by property count
              // count specifies that the edge represents 1 or more other edges
              'width': 5,
              'target-arrow-shape': 'triangle',
              'target-arrow-color': '#000'
            }) // properties of edges and vertices in special states, e.g. invisible or faded
            .selector('.faded').css({
              'opacity': 0.25,
              'text-opacity': 0
            }).selector('.invisible').css({
              'opacity': 0,
              'text-opacity': 0
            }),
            ready: function ready() {
              if (_this.cy) {
                _this.cy.elements().unselectify();
                /* if a vertex is selected, fade all edges and vertices
                that are not in direct neighborhood of the vertex */


                _this.cy.on('tap', 'node', function (e) {
                  var node = e.cyTarget;
                  var neighborhood = node.neighborhood().add(node);

                  _this.cy.elements().addClass('faded');

                  neighborhood.removeClass('faded');
                }); // remove fading by clicking somewhere else


                _this.cy.on('tap', function (e) {
                  if (e.cyTarget === _this.cy) {
                    _this.cy.elements().removeClass('faded');
                  }
                });
              }
            }
          });
          console.log(this.cy);
        }
      }, {
        key: "getLabel",
        value: function getLabel(element, key, useDefaultLabel) {
          var label = '';

          if (!useDefaultLabel && key !== 'label') {
            label += element.data('properties')[key];
          } else {
            label += element.data('label');
          }

          return label;
        }
        /**
         * Generate a random color for each label
         * @param labels array of labels
         */

      }, {
        key: "generateRandomColors",
        value: function generateRandomColors(labels) {
          var _this2 = this;

          this.colorMap = {};
          labels.forEach(function (label) {
            var r = 0;
            var g = 0;
            var b = 0;

            while (r + g + b < 382) {
              r = Math.floor(Math.random() * 255);
              g = Math.floor(Math.random() * 255);
              b = Math.floor(Math.random() * 255);
            }

            _this2.colorMap[label] = [r, g, b];
          });
        }
      }, {
        key: "onExecute",
        value: function onExecute() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var graph, labels, i, node, _i, edge, latNyc, longNyc, elementDefinitions, forceLayout;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.restService.difference(this.dbName, this.fromTimeStamp, this.toTimeStamp, this.timeDim === "valid" ? src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["TimeDimension"].VALIDTIME : src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["TimeDimension"].TRANSACTIONTIME);

                  case 2:
                    graph = _context.sent;
                    this.cy.elements().remove(); // set conaining all distinct labels (property key specified by vertexLabelKey)

                    labels = new Set(); // compute maximum count of all vertices, used for scaling the vertex sizes

                    for (i = 0; i < graph.nodes.length; i++) {
                      node = graph.nodes[i];
                      labels.add(node.data.label);
                    }

                    for (_i = 0; _i < graph.edges.length; _i++) {
                      edge = graph.edges[_i];
                      labels.add(edge.data.label);
                    } // generate random colors for the vertex labels


                    this.generateRandomColors(labels);
                    latNyc = 40.730610;
                    longNyc = -73.935242;
                    elementDefinitions = graph.nodes.map(function (node) {
                      var elementDef = node;
                      var lat = 0;
                      var _long = 0;
                      node.data.properties.forEach(function (property) {
                        if (property.key === "lat") {
                          lat = parseFloat(property.value) - latNyc;
                        } else if (property.key === "long") {
                          _long = parseFloat(property.value) - longNyc;
                        }
                      });
                      elementDef.position = {
                        x: lat * 50000,
                        y: _long * 50000
                      };
                      return elementDef;
                    });
                    this.cy.add(elementDefinitions);
                    this.cy.add(graph.edges);
                    forceLayout = {
                      name: 'cose',
                      // called on `layoutready`
                      ready: function ready() {},
                      // called on `layoutstop`
                      stop: function stop() {},
                      // whether to animate while running the layout
                      animate: false,
                      // number of iterations between consecutive screen positions update (0 ->
                      // only updated on the end)
                      refresh: 4,
                      // whether to fit the network view after when done
                      fit: true,
                      // padding on fit
                      padding: 30,
                      // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
                      boundingBox: undefined,
                      // whether to randomize node positions on the beginning
                      randomize: true,
                      // whether to use the JS console to print debug messages
                      debug: false,
                      // node repulsion (non overlapping) multiplier
                      nodeRepulsion: 8000000,
                      // node repulsion (overlapping) multiplier
                      nodeOverlap: 10,
                      // ideal edge (non nested) length
                      idealEdgeLength: 1,
                      // divisor to compute edge forces
                      edgeElasticity: 100,
                      // nesting factor (multiplier) to compute ideal edge length for nested edges
                      nestingFactor: 5,
                      // gravity force (constant)
                      gravity: 250,
                      // maximum number of iterations to perform
                      numIter: 100,
                      // initial temperature (maximum node displacement)
                      initialTemp: 200,
                      // cooling factor (how the temperature is reduced between consecutive iterations
                      coolingFactor: 0.95,
                      // lower temperature threshold (below this point the layout will end)
                      minTemp: 1.0
                    }; //let lay: cytoscape.Layouts = this.cy.layout(forceLayout);
                    //lay.run();

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onFromChanged",
        value: function onFromChanged(timeStamp) {
          this.fromTimeStamp = timeStamp;
          console.log(timeStamp);
        }
      }, {
        key: "onToChanged",
        value: function onToChanged(timeStamp) {
          this.toTimeStamp = timeStamp;
          console.log(timeStamp);
        }
      }, {
        key: "onDbNameChanged",
        value: function onDbNameChanged(dbName) {
          this.dbName = dbName;
          console.log(dbName);
        }
      }]);

      return DifferenceComponent;
    }();

    DifferenceComponent.ɵfac = function DifferenceComponent_Factory(t) {
      return new (t || DifferenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]));
    };

    DifferenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DifferenceComponent,
      selectors: [["app-difference"]],
      decls: 13,
      vars: 1,
      consts: [["fxLayout", "column", "fxFlexFill", "", 1, "content2"], ["fxFlex", "350px", 1, "selections"], [2, "display", "block", 3, "dbName"], ["label", "From", 2, "display", "block", 3, "timeStamp"], ["label", "To", 2, "display", "block", 3, "timeStamp"], [3, "ngModel", "ngModelChange"], ["value", "valid"], ["value", "transaction"], ["mat-button", "", 3, "click"], ["fxFlex", "500px", "id", "differenceCanvas", 1, "canvas"]],
      template: function DifferenceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-select-graph", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dbName", function DifferenceComponent_Template_app_select_graph_dbName_2_listener($event) {
            return ctx.onDbNameChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-time-stamp", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("timeStamp", function DifferenceComponent_Template_app_time_stamp_timeStamp_3_listener($event) {
            return ctx.onFromChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-time-stamp", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("timeStamp", function DifferenceComponent_Template_app_time_stamp_timeStamp_4_listener($event) {
            return ctx.onToChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-radio-group", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DifferenceComponent_Template_mat_radio_group_ngModelChange_5_listener($event) {
            return ctx.timeDim = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-radio-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Valid Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-radio-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Transaction Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DifferenceComponent_Template_button_click_10_listener() {
            return ctx.onExecute();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Execute");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.timeDim);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _select_graph_select_graph_component__WEBPACK_IMPORTED_MODULE_6__["SelectGraphComponent"], _time_stamp_time_stamp_component__WEBPACK_IMPORTED_MODULE_7__["TimeStampComponent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpZmZlcmVuY2UvZGlmZmVyZW5jZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DifferenceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-difference',
          templateUrl: './difference.component.html',
          styleUrls: ['./difference.component.scss']
        }]
      }], function () {
        return [{
          type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/enum-keys-pipe.ts":
  /*!***********************************!*\
    !*** ./src/app/enum-keys-pipe.ts ***!
    \***********************************/

  /*! exports provided: EnumKeysPipe */

  /***/
  function srcAppEnumKeysPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnumKeysPipe", function () {
      return EnumKeysPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EnumKeysPipe = /*#__PURE__*/function () {
      function EnumKeysPipe() {
        _classCallCheck(this, EnumKeysPipe);
      }

      _createClass(EnumKeysPipe, [{
        key: "transform",
        value: function transform(data) {
          return Object.keys(data);
        }
      }]);

      return EnumKeysPipe;
    }();

    EnumKeysPipe.ɵfac = function EnumKeysPipe_Factory(t) {
      return new (t || EnumKeysPipe)();
    };

    EnumKeysPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "enumKeysPipe",
      type: EnumKeysPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnumKeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'enumKeysPipe'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/grouping/grouping.component.ts":
  /*!************************************************!*\
    !*** ./src/app/grouping/grouping.component.ts ***!
    \************************************************/

  /*! exports provided: GroupingComponent */

  /***/
  function srcAppGroupingGroupingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupingComponent", function () {
      return GroupingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var cytoscape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! cytoscape */
    "./node_modules/cytoscape/dist/cytoscape.cjs.js");
    /* harmony import */


    var cytoscape__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cytoscape__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/gen/generatedAngular */
    "./src/gen/generatedAngular/index.ts");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../rest.service */
    "./src/app/rest.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _select_graph_select_graph_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../select-graph/select-graph.component */
    "./src/app/select-graph/select-graph.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _enum_keys_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../enum-keys-pipe */
    "./src/app/enum-keys-pipe.ts");

    function GroupingComponent_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupingComponent_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4.removeGroupingKey();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function GroupingComponent_mat_card_9_mat_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var groupingType_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", groupingType_r15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", groupingType_r15, " ");
      }
    }

    function GroupingComponent_mat_card_9_mat_form_field_15_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var label_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", label_r17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", label_r17, " ");
      }
    }

    function GroupingComponent_mat_card_9_mat_form_field_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupingComponent_mat_card_9_mat_form_field_15_Template_mat_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

          var index_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r18.groupingKeys[index_r7].label = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GroupingComponent_mat_card_9_mat_form_field_15_mat_option_4_Template, 2, 2, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var index_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r9.groupingKeys[index_r7].label);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.labels);
      }
    }

    function GroupingComponent_mat_card_9_mat_form_field_16_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", key_r23.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", key_r23.name, " ");
      }
    }

    function GroupingComponent_mat_card_9_mat_form_field_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Property");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupingComponent_mat_card_9_mat_form_field_16_Template_mat_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var index_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r24.groupingKeys[index_r7].property = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GroupingComponent_mat_card_9_mat_form_field_16_mat_option_4_Template, 2, 2, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var index_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r10.groupingKeys[index_r7].property);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r10.selectedLabelProperties(ctx_r10.groupingKeys[index_r7].label));
      }
    }

    function GroupingComponent_mat_card_9_mat_button_toggle_group_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-button-toggle-group", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupingComponent_mat_card_9_mat_button_toggle_group_17_Template_mat_button_toggle_group_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

          var index_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r28.groupingKeys[index_r7].timeDim = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-button-toggle", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Valid Time");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-button-toggle", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Transaction Time");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var index_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r11.groupingKeys[index_r7].timeDim);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r11.timeDimensionEnum.VALIDTIME);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r11.timeDimensionEnum.TRANSACTIONTIME);
      }
    }

    function GroupingComponent_mat_card_9_mat_form_field_18_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chronoField_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", chronoField_r33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", chronoField_r33, " ");
      }
    }

    function GroupingComponent_mat_card_9_mat_form_field_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "ChronoField");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupingComponent_mat_card_9_mat_form_field_18_Template_mat_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

          var index_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r34.groupingKeys[index_r7].chronoField = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GroupingComponent_mat_card_9_mat_form_field_18_mat_option_4_Template, 2, 2, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "enumKeysPipe");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var index_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r12.groupingKeys[index_r7].chronoField);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, ctx_r12.chronoFieldEnum));
      }
    }

    function GroupingComponent_mat_card_9_mat_form_field_19_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var chronoUnit_r39 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", chronoUnit_r39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", chronoUnit_r39, " ");
      }
    }

    function GroupingComponent_mat_card_9_mat_form_field_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "ChronoUnit");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupingComponent_mat_card_9_mat_form_field_19_Template_mat_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r41);

          var index_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r40.groupingKeys[index_r7].chronoUnit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GroupingComponent_mat_card_9_mat_form_field_19_mat_option_4_Template, 2, 2, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "enumKeysPipe");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var index_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r13.groupingKeys[index_r7].chronoUnit);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, ctx_r13.chronoUnitEnum));
      }
    }

    function GroupingComponent_mat_card_9_mat_button_toggle_group_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-button-toggle-group", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupingComponent_mat_card_9_mat_button_toggle_group_20_Template_mat_button_toggle_group_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45);

          var index_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r44.groupingKeys[index_r7].timeField = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-button-toggle", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "FROM");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-button-toggle", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "TO");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var index_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r14.groupingKeys[index_r7].timeField);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r14.timeFieldEnum.FROM);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r14.timeFieldEnum.TO);
      }
    }

    function GroupingComponent_mat_card_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Grouping Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-select", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupingComponent_mat_card_9_Template_mat_select_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49);

          var index_r7 = ctx.index;

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r48.groupingKeys[index_r7].groupingType = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, GroupingComponent_mat_card_9_mat_option_6_Template, 2, 2, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "enumKeysPipe");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-button-toggle-group", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupingComponent_mat_card_9_Template_mat_button_toggle_group_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49);

          var index_r7 = ctx.index;

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r50.groupingKeys[index_r7].forVertex = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-button-toggle", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Vertices");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-button-toggle", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Edges");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-slide-toggle", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupingComponent_mat_card_9_Template_mat_slide_toggle_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r49);

          var index_r7 = ctx.index;

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r51.groupingKeys[index_r7].labelSpecific = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "LabelSpecific ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, GroupingComponent_mat_card_9_mat_form_field_15_Template, 5, 2, "mat-form-field", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, GroupingComponent_mat_card_9_mat_form_field_16_Template, 5, 2, "mat-form-field", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, GroupingComponent_mat_card_9_mat_button_toggle_group_17_Template, 5, 3, "mat-button-toggle-group", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, GroupingComponent_mat_card_9_mat_form_field_18_Template, 6, 4, "mat-form-field", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, GroupingComponent_mat_card_9_mat_form_field_19_Template, 6, 4, "mat-form-field", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, GroupingComponent_mat_card_9_mat_button_toggle_group_20_Template, 5, 3, "mat-button-toggle-group", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var index_r7 = ctx.index;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.groupingKeys[index_r7].groupingType);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 12, ctx_r1.groupingTypeEnum));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.groupingKeys[index_r7].forVertex);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.groupingKeys[index_r7].labelSpecific);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.groupingKeys[index_r7].labelSpecific);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.groupingKeys[index_r7].groupingType === ctx_r1.groupingTypeEnum.PROPERTY && ctx_r1.groupingKeys[index_r7].label);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isGroupingTimeDimRequired(ctx_r1.groupingKeys[index_r7].groupingType));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.groupingKeys[index_r7].groupingType === ctx_r1.groupingTypeEnum.TIMESTAMPFIELD);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.groupingKeys[index_r7].groupingType === ctx_r1.groupingTypeEnum.DURATION);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isGroupingTimeFieldRequired(ctx_r1.groupingKeys[index_r7].groupingType));
      }
    }

    function GroupingComponent_button_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupingComponent_button_15_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r52.removeAggregationFunction();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function GroupingComponent_mat_card_16_mat_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var aggrFun_r60 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", aggrFun_r60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", aggrFun_r60, " ");
      }
    }

    function GroupingComponent_mat_card_16_mat_form_field_12_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var prop_r62 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", prop_r62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", prop_r62, " ");
      }
    }

    function GroupingComponent_mat_card_16_mat_form_field_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Property");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupingComponent_mat_card_16_mat_form_field_12_Template_mat_select_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64);

          var index_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r63.aggregationFunctions[index_r55].property = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GroupingComponent_mat_card_16_mat_form_field_12_mat_option_4_Template, 2, 2, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var index_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r57.aggregationFunctions[index_r55].property);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r57.propertiesWithNumericalValues());
      }
    }

    function GroupingComponent_mat_card_16_mat_button_toggle_group_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-button-toggle-group", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupingComponent_mat_card_16_mat_button_toggle_group_13_Template_mat_button_toggle_group_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68);

          var index_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r67.aggregationFunctions[index_r55].timeDim = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-button-toggle", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Valid Time");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-button-toggle", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Transaction Time");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var index_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

        var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r58.aggregationFunctions[index_r55].timeDim);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r58.timeDimensionEnum.VALIDTIME);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r58.timeDimensionEnum.TRANSACTIONTIME);
      }
    }

    function GroupingComponent_mat_card_16_mat_button_toggle_group_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-button-toggle-group", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupingComponent_mat_card_16_mat_button_toggle_group_14_Template_mat_button_toggle_group_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72);

          var index_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r71.aggregationFunctions[index_r55].timeField = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-button-toggle", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "FROM");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-button-toggle", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "TO");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var index_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

        var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r59.aggregationFunctions[index_r55].timeField);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r59.timeFieldEnum.FROM);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r59.timeFieldEnum.TO);
      }
    }

    function GroupingComponent_mat_card_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "AggregationType");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupingComponent_mat_card_16_Template_mat_select_ngModelChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76);

          var index_r55 = ctx.index;

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r75.aggregationFunctions[index_r55].aggregationType = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GroupingComponent_mat_card_16_mat_option_5_Template, 2, 2, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "enumKeysPipe");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-button-toggle-group", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GroupingComponent_mat_card_16_Template_mat_button_toggle_group_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76);

          var index_r55 = ctx.index;

          var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r77.aggregationFunctions[index_r55].forEdges = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-button-toggle", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Vertices");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-button-toggle", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Edges");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, GroupingComponent_mat_card_16_mat_form_field_12_Template, 5, 2, "mat-form-field", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, GroupingComponent_mat_card_16_mat_button_toggle_group_13_Template, 5, 3, "mat-button-toggle-group", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, GroupingComponent_mat_card_16_mat_button_toggle_group_14_Template, 5, 3, "mat-button-toggle-group", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var index_r55 = ctx.index;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.aggregationFunctions[index_r55].aggregationType);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, ctx_r3.aggregationFunctionEnum));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.aggregationFunctions[index_r55].forEdges);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isAggrPropertyFieldRequired(ctx_r3.aggregationFunctions[index_r55].aggregationType));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isAggrTimeDimRequired(ctx_r3.aggregationFunctions[index_r55].aggregationType));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.isAggrTimeFieldRequired(ctx_r3.aggregationFunctions[index_r55].aggregationType));
      }
    }

    var GroupingComponent = /*#__PURE__*/function () {
      function GroupingComponent(restService) {
        _classCallCheck(this, GroupingComponent);

        this.restService = restService; //Grouping Keys

        this.groupingKeys = []; //Aggregation Functions

        this.aggregationFunctions = [];
        this.timeStamp = null;
        this.chronoFieldEnum = src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["ChronoField"];
        this.chronoUnitEnum = src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["ChronoUnit"];
        this.aggregationFunctionEnum = src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["AggregationType"];
        this.timeFieldEnum = src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["TimeField"];
        this.timeDimensionEnum = src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["TimeDimension"];
        this.groupingTypeEnum = src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["GroupingType"];
        this.labels = [];
        this.colorMap = {};
        /**
         * True, if the graph layout should be force based
         * @type {boolean}
         */

        this.useForceLayout = true;
        /**
         * True, if the default label should be used
         * @type {boolean}
         */

        this.useDefaultLabel = true;
        /**
         * Maximum value for the count attribute of vertices
         * @type {number}
         */

        this.maxVertexCount = 0;
        /**
         * Maximum value for the count attribute of edges
         * @type {number}
         */

        this.maxEdgeCount = 0;
      }

      _createClass(GroupingComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this3 = this;

          this.cy = cytoscape__WEBPACK_IMPORTED_MODULE_2__({
            container: document.getElementById('groupingCanvas'),
            style: cytoscape__WEBPACK_IMPORTED_MODULE_2__["stylesheet"]().selector('node').css({
              // define label content and font
              'content': function content(node) {
                return node.data().label;
              },
              // if the count shall effect the vertex size, set font size accordingly
              'font-size': '10px',
              'text-valign': 'center',
              'color': 'black',
              'background-color': function backgroundColor(node) {
                var label = node.data().label;
                var color = _this3.colorMap[label];
                var result = '#';
                result += ('0' + color[0].toString(16)).substr(-2);
                result += ('0' + color[1].toString(16)).substr(-2);
                result += ('0' + color[2].toString(16)).substr(-2);
                return result;
              },
              'width': '60px',
              'height': '60px',
              'text-wrap': 'wrap'
            }).selector('edge').css({
              'curve-style': 'haystack',
              // layout of edge and edge label
              'content': function content(edge) {//No writing on edges
              },
              // if the count shall effect the vertex size, set font size accordingly
              'font-size': '10',
              'line-color': '#999',
              // width of edges can be determined by property count
              // count specifies that the edge represents 1 or more other edges
              'width': 2,
              'target-arrow-shape': 'triangle',
              'target-arrow-color': '#000'
            }) // properties of edges and vertices in special states, e.g. invisible or faded
            .selector('.faded').css({
              'opacity': 0.25,
              'text-opacity': 0
            }).selector('.invisible').css({
              'opacity': 0,
              'text-opacity': 0
            }),
            ready: function ready() {
              if (_this3.cy) {
                _this3.cy.elements().unselectify();
                /* if a vertex is selected, fade all edges and vertices
                that are not in direct neighborhood of the vertex */


                _this3.cy.on('tap', 'node', function (e) {
                  var node = e.cyTarget;
                  var neighborhood = node.neighborhood().add(node);

                  _this3.cy.elements().addClass('faded');

                  neighborhood.removeClass('faded');
                }); // remove fading by clicking somewhere else


                _this3.cy.on('tap', function (e) {
                  if (e.cyTarget === _this3.cy) {
                    _this3.cy.elements().removeClass('faded');
                  }
                });
              }
            }
          });
          console.log(this.cy);
        }
      }, {
        key: "addGroupingKey",
        value: function addGroupingKey() {
          this.groupingKeys.push({
            groupingType: src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["GroupingType"].NOTHING,
            labelSpecific: false,
            forVertex: true
          });
        }
      }, {
        key: "removeGroupingKey",
        value: function removeGroupingKey() {
          this.groupingKeys.pop();
        }
      }, {
        key: "addAggregationFunction",
        value: function addAggregationFunction() {
          this.aggregationFunctions.push({});
        }
      }, {
        key: "removeAggregationFunction",
        value: function removeAggregationFunction() {
          this.aggregationFunctions.pop();
        }
        /**
         * User presses Execute Button
         * Triggers Backend calls.
         */

      }, {
        key: "onExecute",
        value: function onExecute() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var graph, labels, i, node, _i2, edge, forceLayout, lay;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.restService.grouping(this.dbName, this.groupingKeys, this.aggregationFunctions);

                  case 2:
                    graph = _context2.sent;
                    console.log(graph);
                    this.cy.elements().remove(); // set conaining all distinct labels (property key specified by vertexLabelKey)

                    labels = new Set(); // compute maximum count of all vertices, used for scaling the vertex sizes

                    for (i = 0; i < graph.nodes.length; i++) {
                      node = graph.nodes[i];
                      labels.add(node.data.label);
                    }

                    for (_i2 = 0; _i2 < graph.edges.length; _i2++) {
                      edge = graph.edges[_i2];
                      labels.add(edge.data.label);
                    } // generate random colors for the vertex labels


                    this.generateRandomColors(labels);
                    this.cy.add(graph.nodes);
                    this.cy.add(graph.edges);
                    forceLayout = {
                      name: 'cose',
                      // called on `layoutready`
                      ready: function ready() {},
                      // called on `layoutstop`
                      stop: function stop() {},
                      // whether to animate while running the layout
                      animate: false,
                      // number of iterations between consecutive screen positions update (0 ->
                      // only updated on the end)
                      refresh: 4,
                      // whether to fit the network view after when done
                      fit: true,
                      // padding on fit
                      padding: 30,
                      // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
                      boundingBox: undefined,
                      // whether to randomize node positions on the beginning
                      randomize: true,
                      // whether to use the JS console to print debug messages
                      debug: false,
                      // node repulsion (non overlapping) multiplier
                      nodeRepulsion: 8000000,
                      // node repulsion (overlapping) multiplier
                      nodeOverlap: 10,
                      // ideal edge (non nested) length
                      idealEdgeLength: 1,
                      // divisor to compute edge forces
                      edgeElasticity: 100,
                      // nesting factor (multiplier) to compute ideal edge length for nested edges
                      nestingFactor: 5,
                      // gravity force (constant)
                      gravity: 250,
                      // maximum number of iterations to perform
                      numIter: 100,
                      // initial temperature (maximum node displacement)
                      initialTemp: 200,
                      // cooling factor (how the temperature is reduced between consecutive iterations
                      coolingFactor: 0.95,
                      // lower temperature threshold (below this point the layout will end)
                      minTemp: 1.0
                    };
                    lay = this.cy.layout(forceLayout);
                    lay.run();

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
        /**
        * Generate a random color for each label
        * @param labels array of labels
        */

      }, {
        key: "generateRandomColors",
        value: function generateRandomColors(labels) {
          var _this4 = this;

          this.colorMap = {};
          labels.forEach(function (label) {
            var r = 0;
            var g = 0;
            var b = 0;

            while (r + g + b < 382) {
              r = Math.floor(Math.random() * 255);
              g = Math.floor(Math.random() * 255);
              b = Math.floor(Math.random() * 255);
            }

            _this4.colorMap[label] = [r, g, b];
          });
        }
        /**
         * Change model when the user changes the db name in the according component
         *
         * @param dbName
         */

      }, {
        key: "onDbNameChanged",
        value: function onDbNameChanged(dbName) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.dbName = dbName;
                    _context3.next = 3;
                    return this.restService.getKeysAndLabels(dbName);

                  case 3:
                    this.keysAndLabels = _context3.sent;
                    this.setKeysAndLabels();
                    console.log(dbName);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "setKeysAndLabels",
        value: function setKeysAndLabels() {
          this.labels = this.keysAndLabels.edgeLabels.concat(this.keysAndLabels.vertexLabels);
        }
      }, {
        key: "selectedLabelProperties",
        value: function selectedLabelProperties(label) {
          return this.filterKeysForLabel(label);
        }
      }, {
        key: "trackByIndex",
        value: function trackByIndex(index, obj) {
          return index;
        }
      }, {
        key: "trackByIndexAggregate",
        value: function trackByIndexAggregate(index, obj) {
          return index;
        }
      }, {
        key: "filterKeysForLabel",
        value: function filterKeysForLabel(searchedLabel) {
          if (!searchedLabel) {
            return [];
          } //Check which Properties are used with the given node label


          var applicableVertexKeys = this.keysAndLabels.vertexKeys.filter(function (vertexKey) {
            var correctLabel = vertexKey.labels.filter(function (label) {
              return searchedLabel === label;
            });
            return correctLabel.length > 0;
          }); //Check which Properties are used with the given edge label

          var applicableEdgeKeys = this.keysAndLabels.edgeKeys.filter(function (edgeKey) {
            var correctLabel = edgeKey.labels.filter(function (label) {
              return searchedLabel === label;
            });
            return correctLabel.length > 0;
          });
          return applicableEdgeKeys.concat(applicableVertexKeys);
        }
      }, {
        key: "propertiesWithNumericalValues",
        value: function propertiesWithNumericalValues() {
          var applicableVertexKeys = this.keysAndLabels.vertexKeys.filter(function (vertexKey) {
            return vertexKey.numerical;
          }).map(function (vertexKey) {
            return vertexKey.name;
          }); //Check which Properties are used with the given edge label

          var applicableEdgeKeys = this.keysAndLabels.edgeKeys.filter(function (edgeKey) {
            return edgeKey.numerical;
          }).map(function (edgeKey) {
            return edgeKey.name;
          });
          return applicableEdgeKeys.concat(applicableVertexKeys);
        }
      }, {
        key: "isAggrTimeDimRequired",
        value: function isAggrTimeDimRequired(aggrType) {
          switch (aggrType) {
            case src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["AggregationType"].MAXTIME:
            case src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["AggregationType"].MINDURATION:
            case src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["AggregationType"].MINTIME:
            case src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["AggregationType"].AVERAGEDURATION:
            case src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["AggregationType"].MAXDURATION:
              return true;

            default:
              return false;
          }
        }
      }, {
        key: "isAggrTimeFieldRequired",
        value: function isAggrTimeFieldRequired(aggrType) {
          switch (aggrType) {
            case src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["AggregationType"].MINTIME:
            case src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["AggregationType"].MAXTIME:
              return true;

            default:
              return false;
          }
        }
      }, {
        key: "isAggrPropertyFieldRequired",
        value: function isAggrPropertyFieldRequired(aggrType) {
          switch (aggrType) {
            case src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["AggregationType"].MIN:
            case src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["AggregationType"].MAX:
            case src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["AggregationType"].SUM:
              return true;

            default:
              return false;
          }
        }
      }, {
        key: "isGroupingTimeDimRequired",
        value: function isGroupingTimeDimRequired(groupingType) {
          switch (groupingType) {
            case src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["GroupingType"].DURATION:
            case src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["GroupingType"].TIMEINTERVAL:
            case src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["GroupingType"].TIMESTAMP:
            case src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["GroupingType"].TIMESTAMPFIELD:
              return true;

            default:
              return false;
          }
        }
      }, {
        key: "isGroupingTimeFieldRequired",
        value: function isGroupingTimeFieldRequired(groupingType) {
          switch (groupingType) {
            case src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["GroupingType"].TIMESTAMP:
            case src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_3__["GroupingType"].TIMESTAMPFIELD:
              return true;

            default:
              return false;
          }
        }
      }]);

      return GroupingComponent;
    }();

    GroupingComponent.ɵfac = function GroupingComponent_Factory(t) {
      return new (t || GroupingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]));
    };

    GroupingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GroupingComponent,
      selectors: [["app-grouping"]],
      decls: 20,
      vars: 6,
      consts: [["fxFlexFill", "", "fxLayout", "column", 1, "content"], ["ngFlex", "500px", 1, "selections"], [3, "dbName"], ["mat-stroked-button", "", 3, "click"], ["mat-stroked-button", "", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["mat-button", "", 3, "click"], ["fxFlexFill", "", "id", "groupingCanvas", 1, "canvas"], ["matLine", ""], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["aria-label", "Font Style", 3, "ngModel", "ngModelChange"], [3, "value"], ["matLine", "", 4, "ngIf"], [3, "ngModel", "ngModelChange", 4, "ngIf"]],
      template: function GroupingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-select-graph", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dbName", function GroupingComponent_Template_app_select_graph_dbName_2_listener($event) {
            return ctx.onDbNameChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Grouping Keys");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupingComponent_Template_button_click_6_listener() {
            return ctx.addGroupingKey();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, GroupingComponent_button_8_Template, 2, 0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GroupingComponent_mat_card_9_Template, 21, 14, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Aggregation Functions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupingComponent_Template_button_click_13_listener() {
            return ctx.addAggregationFunction();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, GroupingComponent_button_15_Template, 2, 0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, GroupingComponent_mat_card_16_Template, 15, 10, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GroupingComponent_Template_button_click_17_listener() {
            return ctx.onExecute();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Execute");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.groupingKeys.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.groupingKeys)("ngForTrackBy", ctx.trackByIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.aggregationFunctions.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.aggregationFunctions)("ngForTrackBy", ctx.trackByIndexAggregate);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _select_graph_select_graph_component__WEBPACK_IMPORTED_MODULE_6__["SelectGraphComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatLine"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggle"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggle"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]],
      pipes: [_enum_keys_pipe__WEBPACK_IMPORTED_MODULE_16__["EnumKeysPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwaW5nL2dyb3VwaW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GroupingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-grouping',
          templateUrl: './grouping.component.html',
          styleUrls: ['./grouping.component.scss']
        }]
      }], function () {
        return [{
          type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _snapshot_snapshot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../snapshot/snapshot.component */
    "./src/app/snapshot/snapshot.component.ts");
    /* harmony import */


    var _difference_difference_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../difference/difference.component */
    "./src/app/difference/difference.component.ts");
    /* harmony import */


    var _grouping_grouping_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../grouping/grouping.component */
    "./src/app/grouping/grouping.component.ts");

    function HomeComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-snapshot");
      }
    }

    function HomeComponent_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-difference");
      }
    }

    function HomeComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-grouping");
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 7,
      vars: 0,
      consts: [["dynamicHeight", ""], ["label", "Snapshot"], ["matTabContent", ""], ["label", "Difference"], ["label", "Grouping"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_template_2_Template, 1, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_ng_template_4_Template, 1, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_ng_template_6_Template, 1, 0, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabContent"], _snapshot_snapshot_component__WEBPACK_IMPORTED_MODULE_2__["SnapshotComponent"], _difference_difference_component__WEBPACK_IMPORTED_MODULE_3__["DifferenceComponent"], _grouping_grouping_component__WEBPACK_IMPORTED_MODULE_4__["GroupingComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rest.service.ts":
  /*!*********************************!*\
    !*** ./src/app/rest.service.ts ***!
    \*********************************/

  /*! exports provided: RestService */

  /***/
  function srcAppRestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestService", function () {
      return RestService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/gen/generatedAngular */
    "./src/gen/generatedAngular/index.ts");

    var RestService = /*#__PURE__*/function () {
      function RestService(defaultService) {
        _classCallCheck(this, RestService);

        this.defaultService = defaultService;
      }

      _createClass(RestService, [{
        key: "snapshot",
        value: function snapshot(dbName, timeStamp, timeDimension) {
          var snapshotJson = {
            timeDim: timeDimension,
            timeStamp: {
              predicate: timeStamp.predicate,
              startDate: timeStamp.startDate,
              endDate: timeStamp.endDate ? timeStamp.endDate : null
            },
            dbName: dbName
          };
          var result = this.defaultService.snapshot(snapshotJson);
          return result.toPromise();
        }
      }, {
        key: "difference",
        value: function difference(dbName, from, to, timeDimension) {
          var differenceJson = {
            timeDim: timeDimension,
            from: {
              predicate: from.predicate,
              startDate: from.startDate,
              endDate: from.endDate ? from.endDate : null
            },
            to: {
              predicate: to.predicate,
              startDate: to.startDate,
              endDate: to.endDate ? to.endDate : null
            },
            dbName: dbName
          };
          return this.defaultService.difference(differenceJson).toPromise();
        }
      }, {
        key: "grouping",
        value: function grouping(dbName, groupingKeys, aggregationFunctions) {
          var vertexKeys = groupingKeys.filter(function (key) {
            return key.forVertex;
          });
          var edgeKeys = groupingKeys.filter(function (key) {
            return !key.forVertex;
          });
          var vertexAggrFuncs = aggregationFunctions.filter(function (aggrFunc) {
            return aggrFunc.forEdges;
          });
          var edgeAggrFuncs = aggregationFunctions.filter(function (aggrFunc) {
            return aggrFunc.forEdges;
          });
          var groupingJson = {
            dbName: dbName,
            vertexKeys: vertexKeys,
            edgeKeys: edgeKeys,
            vertexAggrFuncs: vertexAggrFuncs,
            edgeAggrFuncs: edgeAggrFuncs
          };
          return this.defaultService.grouping(groupingJson).toPromise();
        }
        /**
          public async getPropertiesForLabel(dbName:string,label:string):Promise<Array<string>>{
            let keys:KeysAndLabels = await this.defaultService.getKeys(dbName).toPromise();
            return this.filterKeysForLabel(keys,label).map((key)=>{
              return key.name;
            });
          }
        
          private filterKeysForLabel(keys:KeysAndLabels,searchedLabel:string){
            //Check which Properties are used with the given node label
            let applicableVertexKeys:KeysAndLabelsVertexKeys[] = keys.vertexKeys.filter((vertexKey)=>{
              let correctLabel = vertexKey.labels.filter((label)=>{
                return searchedLabel===label;
              });
              return correctLabel.length>0;
            });
            //Check which Properties are used with the given edge label
            let applicableEdgeKeys:KeysAndLabelsVertexKeys[] = keys.edgeKeys.filter((edgeKey)=>{
              let correctLabel = edgeKey.labels.filter((label)=>{
                return searchedLabel===label;
              });
              return correctLabel.length>0;
            });
            return applicableEdgeKeys.concat(applicableVertexKeys);
          }**/

      }, {
        key: "getKeysAndLabels",
        value: function getKeysAndLabels(dbName) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var keysAndLabels;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.defaultService.getKeys(dbName).toPromise();

                  case 2:
                    keysAndLabels = _context4.sent;
                    return _context4.abrupt("return", keysAndLabels);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getGraphs",
        value: function getGraphs() {
          return this.defaultService.getGraphs().toPromise();
        }
      }, {
        key: "getGraph",
        value: function getGraph(dbName) {
          return this.defaultService.getGraph(dbName).toPromise();
        }
      }]);

      return RestService;
    }();

    RestService.ɵfac = function RestService_Factory(t) {
      return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_2__["DefaultService"]));
    };

    RestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: RestService,
      factory: RestService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_2__["DefaultService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/select-graph/select-graph.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/select-graph/select-graph.component.ts ***!
    \********************************************************/

  /*! exports provided: SelectGraphComponent */

  /***/
  function srcAppSelectGraphSelectGraphComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectGraphComponent", function () {
      return SelectGraphComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../rest.service */
    "./src/app/rest.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SelectGraphComponent_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var graph_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", graph_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", graph_r1, " ");
      }
    }

    var SelectGraphComponent = /*#__PURE__*/function () {
      function SelectGraphComponent(restService) {
        var _this5 = this;

        _classCallCheck(this, SelectGraphComponent);

        this.restService = restService;
        this.dbEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.graphs = [];
        restService.getGraphs().then(function (availableGraphs) {
          _this5.graphs = availableGraphs;
        });
      }

      _createClass(SelectGraphComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "publishChanges",
        value: function publishChanges() {
          this.dbEvent.emit(this.selectedGraph);
        }
      }]);

      return SelectGraphComponent;
    }();

    SelectGraphComponent.ɵfac = function SelectGraphComponent_Factory(t) {
      return new (t || SelectGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"]));
    };

    SelectGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectGraphComponent,
      selectors: [["app-select-graph"]],
      outputs: {
        dbEvent: "dbName"
      },
      decls: 5,
      vars: 2,
      consts: [["matLine", ""], [3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function SelectGraphComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select Graph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectGraphComponent_Template_mat_select_ngModelChange_3_listener($event) {
            return ctx.selectedGraph = $event;
          })("selectionChange", function SelectGraphComponent_Template_mat_select_selectionChange_3_listener() {
            return ctx.publishChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectGraphComponent_mat_option_4_Template, 2, 2, "mat-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedGraph);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.graphs);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatLine"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC1ncmFwaC9zZWxlY3QtZ3JhcGguY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-select-graph',
          templateUrl: './select-graph.component.html',
          styleUrls: ['./select-graph.component.scss']
        }]
      }], function () {
        return [{
          type: _rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"]
        }];
      }, {
        dbEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["dbName"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/snapshot/snapshot.component.ts":
  /*!************************************************!*\
    !*** ./src/app/snapshot/snapshot.component.ts ***!
    \************************************************/

  /*! exports provided: SnapshotComponent */

  /***/
  function srcAppSnapshotSnapshotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnapshotComponent", function () {
      return SnapshotComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/gen/generatedAngular */
    "./src/gen/generatedAngular/index.ts");
    /* harmony import */


    var cytoscape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! cytoscape */
    "./node_modules/cytoscape/dist/cytoscape.cjs.js");
    /* harmony import */


    var cytoscape__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cytoscape__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../rest.service */
    "./src/app/rest.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _select_graph_select_graph_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../select-graph/select-graph.component */
    "./src/app/select-graph/select-graph.component.ts");
    /* harmony import */


    var _time_stamp_time_stamp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../time-stamp/time-stamp.component */
    "./src/app/time-stamp/time-stamp.component.ts");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var SnapshotComponent = /*#__PURE__*/function () {
      function SnapshotComponent(restService) {
        _classCallCheck(this, SnapshotComponent);

        this.restService = restService;
        this.timeStamp = null;
        this.timeDim = "valid";
        this.aggrPrefixes = ['min ', 'max ', 'sum '];
        /**
         * Map of all possible values for the vertexLabelKey to a color in RGB format.
         * @type {{}}
         */

        this.colorMap = {};
        /**
         * True, if the graph layout should be force based
         * @type {boolean}
         */

        this.useForceLayout = true;
        /**
         * True, if the default label should be used
         * @type {boolean}
         */

        this.useDefaultLabel = true;
        /**
         * Maximum value for the count attribute of vertices
         * @type {number}
         */

        this.maxVertexCount = 0;
        /**
         * Maximum value for the count attribute of edges
         * @type {number}
         */

        this.maxEdgeCount = 0;
      }

      _createClass(SnapshotComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this6 = this;

          this.cy = cytoscape__WEBPACK_IMPORTED_MODULE_3__({
            container: document.getElementById('snapshotCanvas'),
            style: cytoscape__WEBPACK_IMPORTED_MODULE_3__["stylesheet"]().selector('node').css({
              // define label content and font
              'content': function content(node) {
                return node.data().label;
              },
              // if the count shall effect the vertex size, set font size accordingly
              'font-size': '10px',
              'text-valign': 'center',
              'color': 'black',
              'background-color': function backgroundColor(node) {
                var label = node.data().label;
                var color = _this6.colorMap[label];
                var result = '#';
                result += ('0' + color[0].toString(16)).substr(-2);
                result += ('0' + color[1].toString(16)).substr(-2);
                result += ('0' + color[2].toString(16)).substr(-2);
                return result;
              },
              'width': '60px',
              'height': '60px',
              'text-wrap': 'wrap'
            }).selector('edge').css({
              'curve-style': 'haystack',
              // layout of edge and edge label
              'content': function content(edge) {//No writing on edges
              },
              // if the count shall effect the vertex size, set font size accordingly
              'font-size': '10',
              'line-color': '#999',
              // width of edges can be determined by property count
              // count specifies that the edge represents 1 or more other edges
              'width': 2,
              'target-arrow-shape': 'triangle',
              'target-arrow-color': '#000'
            }) // properties of edges and vertices in special states, e.g. invisible or faded
            .selector('.faded').css({
              'opacity': 0.25,
              'text-opacity': 0
            }).selector('.invisible').css({
              'opacity': 0,
              'text-opacity': 0
            }),
            ready: function ready() {
              if (_this6.cy) {
                _this6.cy.elements().unselectify();
                /* if a vertex is selected, fade all edges and vertices
                that are not in direct neighborhood of the vertex */


                _this6.cy.on('tap', 'node', function (e) {
                  var node = e.cyTarget;
                  var neighborhood = node.neighborhood().add(node);

                  _this6.cy.elements().addClass('faded');

                  neighborhood.removeClass('faded');
                }); // remove fading by clicking somewhere else


                _this6.cy.on('tap', function (e) {
                  if (e.cyTarget === _this6.cy) {
                    _this6.cy.elements().removeClass('faded');
                  }
                });
              }
            }
          });
          console.log(this.cy);
        }
      }, {
        key: "getLabel",
        value: function getLabel(element, key, useDefaultLabel) {
          var label = '';

          if (!useDefaultLabel && key !== 'label') {
            label += element.data('properties')[key];
          } else {
            label += element.data('label');
          }

          return label;
        }
        /**
         * Generate a random color for each label
         * @param labels array of labels
         */

      }, {
        key: "generateRandomColors",
        value: function generateRandomColors(labels) {
          var _this7 = this;

          this.colorMap = {};
          labels.forEach(function (label) {
            var r = 0;
            var g = 0;
            var b = 0;

            while (r + g + b < 382) {
              r = Math.floor(Math.random() * 255);
              g = Math.floor(Math.random() * 255);
              b = Math.floor(Math.random() * 255);
            }

            _this7.colorMap[label] = [r, g, b];
          });
        }
      }, {
        key: "onExecute",
        value: function onExecute() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var graph, labels, i, node, _i3, edge, latNyc, longNyc, elementDefinitions, forceLayout;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.restService.snapshot(this.dbName, this.timeStamp, this.timeDim === "valid" ? src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_2__["TimeDimension"].VALIDTIME : src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_2__["TimeDimension"].TRANSACTIONTIME);

                  case 2:
                    graph = _context5.sent;
                    this.cy.elements().remove(); // set conaining all distinct labels (property key specified by vertexLabelKey)

                    labels = new Set(); // compute maximum count of all vertices, used for scaling the vertex sizes

                    for (i = 0; i < graph.nodes.length; i++) {
                      node = graph.nodes[i];
                      labels.add(node.data.label);
                    }

                    for (_i3 = 0; _i3 < graph.edges.length; _i3++) {
                      edge = graph.edges[_i3];
                      labels.add(edge.data.label);
                    } // generate random colors for the vertex labels


                    this.generateRandomColors(labels);
                    latNyc = 40.730610;
                    longNyc = -73.935242;
                    elementDefinitions = graph.nodes.map(function (node) {
                      var elementDef = node;
                      var lat = 0;
                      var _long2 = 0;
                      node.data.properties.forEach(function (property) {
                        if (property.key === "lat") {
                          lat = parseFloat(property.value) - latNyc;
                        } else if (property.key === "long") {
                          _long2 = parseFloat(property.value) - longNyc;
                        }
                      });
                      elementDef.position = {
                        x: lat * 50000,
                        y: _long2 * 50000
                      };
                      return elementDef;
                    });
                    this.cy.add(elementDefinitions);
                    this.cy.add(graph.edges);
                    forceLayout = {
                      name: 'cose',
                      // called on `layoutready`
                      ready: function ready() {},
                      // called on `layoutstop`
                      stop: function stop() {},
                      // whether to animate while running the layout
                      animate: false,
                      // number of iterations between consecutive screen positions update (0 ->
                      // only updated on the end)
                      refresh: 4,
                      // whether to fit the network view after when done
                      fit: true,
                      // padding on fit
                      padding: 30,
                      // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
                      boundingBox: undefined,
                      // whether to randomize node positions on the beginning
                      randomize: true,
                      // whether to use the JS console to print debug messages
                      debug: false,
                      // node repulsion (non overlapping) multiplier
                      nodeRepulsion: 8000000,
                      // node repulsion (overlapping) multiplier
                      nodeOverlap: 10,
                      // ideal edge (non nested) length
                      idealEdgeLength: 1,
                      // divisor to compute edge forces
                      edgeElasticity: 100,
                      // nesting factor (multiplier) to compute ideal edge length for nested edges
                      nestingFactor: 5,
                      // gravity force (constant)
                      gravity: 250,
                      // maximum number of iterations to perform
                      numIter: 100,
                      // initial temperature (maximum node displacement)
                      initialTemp: 200,
                      // cooling factor (how the temperature is reduced between consecutive iterations
                      coolingFactor: 0.95,
                      // lower temperature threshold (below this point the layout will end)
                      minTemp: 1.0
                    }; //let lay:cytoscape.Layouts = this.cy.layout(forceLayout);
                    //lay.run();

                  case 14:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "onTimeStampChanged",
        value: function onTimeStampChanged(timeStamp) {
          this.timeStamp = timeStamp;
          console.log(timeStamp);
        }
      }, {
        key: "onDbNameChanged",
        value: function onDbNameChanged(dbName) {
          this.dbName = dbName;
          console.log(dbName);
        }
      }]);

      return SnapshotComponent;
    }();

    SnapshotComponent.ɵfac = function SnapshotComponent_Factory(t) {
      return new (t || SnapshotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]));
    };

    SnapshotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SnapshotComponent,
      selectors: [["app-snapshot"]],
      decls: 12,
      vars: 1,
      consts: [["fxLayout", "column", "fxFlexFill", "", 1, "content"], ["fxFlex", "350px", 1, "selections"], [2, "display", "block", 3, "dbName"], ["label", "Timestamp", 2, "display", "block", 3, "timeStamp"], [3, "ngModel", "ngModelChange"], ["value", "valid"], ["value", "transaction"], ["mat-button", "", 3, "click"], ["fxFlex", "500px", "id", "snapshotCanvas", 1, "canvas"]],
      template: function SnapshotComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-select-graph", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dbName", function SnapshotComponent_Template_app_select_graph_dbName_2_listener($event) {
            return ctx.onDbNameChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-time-stamp", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("timeStamp", function SnapshotComponent_Template_app_time_stamp_timeStamp_3_listener($event) {
            return ctx.onTimeStampChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-radio-group", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SnapshotComponent_Template_mat_radio_group_ngModelChange_4_listener($event) {
            return ctx.timeDim = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-radio-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Valid Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-radio-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Transaction Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SnapshotComponent_Template_button_click_9_listener() {
            return ctx.onExecute();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Execute");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.timeDim);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _select_graph_select_graph_component__WEBPACK_IMPORTED_MODULE_6__["SelectGraphComponent"], _time_stamp_time_stamp_component__WEBPACK_IMPORTED_MODULE_7__["TimeStampComponent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NuYXBzaG90L3NuYXBzaG90LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SnapshotComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-snapshot',
          templateUrl: './snapshot.component.html',
          styleUrls: ['./snapshot.component.scss']
        }]
      }], function () {
        return [{
          type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/time-stamp/time-stamp.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/time-stamp/time-stamp.component.ts ***!
    \****************************************************/

  /*! exports provided: TimeStampComponent */

  /***/
  function srcAppTimeStampTimeStampComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeStampComponent", function () {
      return TimeStampComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/gen/generatedAngular */
    "./src/gen/generatedAngular/index.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular-material-components/datetime-picker */
    "./node_modules/@angular-material-components/datetime-picker/__ivy_ngcc__/fesm2015/angular-material-components-datetime-picker.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");

    var _c0 = ["startPicker"];
    var _c1 = ["endPicker"];

    function TimeStampComponent_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var predicate_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", predicate_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", predicate_r3.value, " ");
      }
    }

    var TimeStampComponent = /*#__PURE__*/function () {
      function TimeStampComponent() {
        _classCallCheck(this, TimeStampComponent);

        this.timeStampEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.predicates = [];
        var keys = Object.keys(src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_1__["TemporalPredicate"]);

        for (var _i4 = 0, _keys = keys; _i4 < _keys.length; _i4++) {
          var key = _keys[_i4];

          if (key == src_gen_generatedAngular__WEBPACK_IMPORTED_MODULE_1__["TemporalPredicate"].ASOF) {
            this.predicates.push({
              value: key,
              endRequired: false
            });
          } else {
            this.predicates.push({
              value: key,
              endRequired: true
            });
          }
        }
      }

      _createClass(TimeStampComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this8 = this;

          this.startPicker._selectedChanged.subscribe(function () {
            _this8.publishChanges();
          });

          this.endPicker._selectedChanged.subscribe(function () {
            _this8.publishChanges();
          });
        }
      }, {
        key: "publishChanges",
        value: function publishChanges() {
          var _a, _b;

          this.timeStampEvent.emit({
            predicate: this.selectedPredicate.value,
            startDate: (_a = this.startPicker._selected) === null || _a === void 0 ? void 0 : _a.toDate(),
            endDate: (_b = this.endPicker._selected) === null || _b === void 0 ? void 0 : _b.toDate()
          });
        }
      }]);

      return TimeStampComponent;
    }();

    TimeStampComponent.ɵfac = function TimeStampComponent_Factory(t) {
      return new (t || TimeStampComponent)();
    };

    TimeStampComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimeStampComponent,
      selectors: [["app-time-stamp"]],
      viewQuery: function TimeStampComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.startPicker = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.endPicker = _t.first);
        }
      },
      inputs: {
        label: "label"
      },
      outputs: {
        timeStampEvent: "timeStamp"
      },
      decls: 15,
      vars: 9,
      consts: [["matLine", ""], [3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Select a date", 3, "ngxMatDatetimePicker", "disabled", "change"], ["matSuffix", "", 3, "for"], ["startPicker", ""], ["matInput", "", "placeholder", "Select an Enddate", 3, "ngxMatDatetimePicker", "disabled", "change"], ["endPicker", ""], [3, "value"]],
      template: function TimeStampComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimeStampComponent_Template_mat_select_ngModelChange_3_listener($event) {
            return ctx.selectedPredicate = $event;
          })("selectionChange", function TimeStampComponent_Template_mat_select_selectionChange_3_listener() {
            return ctx.publishChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TimeStampComponent_mat_option_4_Template, 2, 2, "mat-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TimeStampComponent_Template_input_change_6_listener() {
            return ctx.publishChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-datepicker-toggle", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngx-mat-datetime-picker", null, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TimeStampComponent_Template_input_change_11_listener() {
            return ctx.publishChanges();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-datepicker-toggle", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ngx-mat-datetime-picker", null, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedPredicate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.predicates);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxMatDatetimePicker", _r1)("disabled", !ctx.selectedPredicate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxMatDatetimePicker", _r2)("disabled", !(ctx.selectedPredicate == null ? null : ctx.selectedPredicate.endRequired));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r2);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatLine"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_8__["NgxMatDatetimeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatSuffix"], _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_8__["NgxMatDatetimePicker"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWUtc3RhbXAvdGltZS1zdGFtcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeStampComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-time-stamp',
          templateUrl: './time-stamp.component.html',
          styleUrls: ['./time-stamp.component.scss']
        }]
      }], function () {
        return [];
      }, {
        startPicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['startPicker']
        }],
        endPicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['endPicker']
        }],
        timeStampEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["timeStamp"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["label"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/gen/generatedAngular/api.module.ts":
  /*!************************************************!*\
    !*** ./src/gen/generatedAngular/api.module.ts ***!
    \************************************************/

  /*! exports provided: ApiModule */

  /***/
  function srcGenGeneratedAngularApiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiModule", function () {
      return ApiModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./configuration */
    "./src/gen/generatedAngular/configuration.ts");
    /* harmony import */


    var _api_default_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./api/default.service */
    "./src/gen/generatedAngular/api/default.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiModule = /*#__PURE__*/function () {
      function ApiModule(parentModule, http) {
        _classCallCheck(this, ApiModule);

        if (parentModule) {
          throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }

        if (!http) {
          throw new Error('You need to import the HttpClientModule in your AppModule! \n' + 'See also https://github.com/angular/angular/issues/20575');
        }
      }

      _createClass(ApiModule, null, [{
        key: "forRoot",
        value: function forRoot(configurationFactory) {
          return {
            ngModule: ApiModule,
            providers: [{
              provide: _configuration__WEBPACK_IMPORTED_MODULE_1__["Configuration"],
              useFactory: configurationFactory
            }]
          };
        }
      }]);

      return ApiModule;
    }();

    ApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ApiModule
    });
    ApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ApiModule_Factory(t) {
        return new (t || ApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ApiModule, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], 8));
      },
      providers: [_api_default_service__WEBPACK_IMPORTED_MODULE_2__["DefaultService"]],
      imports: [[]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [],
          declarations: [],
          exports: [],
          providers: [_api_default_service__WEBPACK_IMPORTED_MODULE_2__["DefaultService"]]
        }]
      }], function () {
        return [{
          type: ApiModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/gen/generatedAngular/api/api.ts":
  /*!*********************************************!*\
    !*** ./src/gen/generatedAngular/api/api.ts ***!
    \*********************************************/

  /*! exports provided: DefaultService, APIS */

  /***/
  function srcGenGeneratedAngularApiApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APIS", function () {
      return APIS;
    });
    /* harmony import */


    var _default_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./default.service */
    "./src/gen/generatedAngular/api/default.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultService", function () {
      return _default_service__WEBPACK_IMPORTED_MODULE_0__["DefaultService"];
    });

    var APIS = [_default_service__WEBPACK_IMPORTED_MODULE_0__["DefaultService"]];
    /***/
  },

  /***/
  "./src/gen/generatedAngular/api/default.service.ts":
  /*!*********************************************************!*\
    !*** ./src/gen/generatedAngular/api/default.service.ts ***!
    \*********************************************************/

  /*! exports provided: DefaultService */

  /***/
  function srcGenGeneratedAngularApiDefaultServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultService", function () {
      return DefaultService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../variables */
    "./src/gen/generatedAngular/variables.ts");
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../configuration */
    "./src/gen/generatedAngular/configuration.ts");
    /**
     * Temporal Graph API
     * API for Temporal Graph
     *
     * OpenAPI spec version: 1.0.0
     * Contact: ji67mary@studserv.uni-leipzig.de
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */

    /* tslint:disable:no-unused-variable member-ordering */


    var DefaultService = /*#__PURE__*/function () {
      function DefaultService(httpClient, basePath, configuration) {
        _classCallCheck(this, DefaultService);

        this.httpClient = httpClient;
        this.basePath = 'http://localhost:2347';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"]();

        if (basePath) {
          this.basePath = basePath;
        }

        if (configuration) {
          this.configuration = configuration;
          this.basePath = basePath || configuration.basePath || this.basePath;
        }
      }
      /**
       * @param consumes string[] mime-types
       * @return true: consumes contains 'multipart/form-data', false: otherwise
       */


      _createClass(DefaultService, [{
        key: "canConsumeForm",
        value: function canConsumeForm(consumes) {
          var form = 'multipart/form-data';

          var _iterator = _createForOfIteratorHelper(consumes),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var consume = _step.value;

              if (form === consume) {
                return true;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return false;
        }
      }, {
        key: "difference",
        value: function difference(differenceRequest) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.post("".concat(this.basePath, "/difference"), differenceRequest, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "getGraph",
        value: function getGraph(databaseName) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (databaseName === null || databaseName === undefined) {
            throw new Error('Required parameter databaseName was null or undefined when calling getGraph.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json'];
          return this.httpClient.post("".concat(this.basePath, "/graph/").concat(encodeURIComponent(String(databaseName))), null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "getGraphs",
        value: function getGraphs() {
          var observe = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';
          var reportProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = [];
          return this.httpClient.get("".concat(this.basePath, "/graph"), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "getKeys",
        value: function getKeys(databaseName) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (databaseName === null || databaseName === undefined) {
            throw new Error('Required parameter databaseName was null or undefined when calling getKeys.');
          }

          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json'];
          return this.httpClient.post("".concat(this.basePath, "/keys/").concat(encodeURIComponent(String(databaseName))), null, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "grouping",
        value: function grouping(groupingRequest) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.post("".concat(this.basePath, "/grouping"), groupingRequest, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }, {
        key: "snapshot",
        value: function snapshot(snapshotRequest) {
          var observe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'body';
          var reportProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var headers = this.defaultHeaders; // to determine the Accept header

          var httpHeaderAccepts = ['application/json'];
          var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);

          if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
          } // to determine the Content-Type header


          var consumes = ['application/json'];
          var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);

          if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
          }

          return this.httpClient.post("".concat(this.basePath, "/snapshot"), snapshotRequest, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
          });
        }
      }]);

      return DefaultService;
    }();

    DefaultService.ɵfac = function DefaultService_Factory(t) {
      return new (t || DefaultService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], 8));
    };

    DefaultService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DefaultService,
      factory: DefaultService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"]]
          }]
        }, {
          type: _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/gen/generatedAngular/configuration.ts":
  /*!***************************************************!*\
    !*** ./src/gen/generatedAngular/configuration.ts ***!
    \***************************************************/

  /*! exports provided: Configuration */

  /***/
  function srcGenGeneratedAngularConfigurationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Configuration", function () {
      return Configuration;
    });

    var Configuration = /*#__PURE__*/function () {
      function Configuration() {
        var configurationParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Configuration);

        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
      }
      /**
       * Select the correct content-type to use for a request.
       * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
       * If no content type is found return the first found type if the contentTypes is not empty
       * @param contentTypes - the array of content types that are available for selection
       * @returns the selected content-type or <code>undefined</code> if no selection could be made.
       */


      _createClass(Configuration, [{
        key: "selectHeaderContentType",
        value: function selectHeaderContentType(contentTypes) {
          var _this9 = this;

          if (contentTypes.length == 0) {
            return undefined;
          }

          var type = contentTypes.find(function (x) {
            return _this9.isJsonMime(x);
          });

          if (type === undefined) {
            return contentTypes[0];
          }

          return type;
        }
        /**
         * Select the correct accept content-type to use for a request.
         * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
         * If no content type is found return the first found type if the contentTypes is not empty
         * @param accepts - the array of content types that are available for selection.
         * @returns the selected content-type or <code>undefined</code> if no selection could be made.
         */

      }, {
        key: "selectHeaderAccept",
        value: function selectHeaderAccept(accepts) {
          var _this10 = this;

          if (accepts.length == 0) {
            return undefined;
          }

          var type = accepts.find(function (x) {
            return _this10.isJsonMime(x);
          });

          if (type === undefined) {
            return accepts[0];
          }

          return type;
        }
        /**
         * Check if the given MIME is a JSON MIME.
         * JSON MIME examples:
         *   application/json
         *   application/json; charset=UTF8
         *   APPLICATION/JSON
         *   application/vnd.company+json
         * @param mime - MIME (Multipurpose Internet Mail Extensions)
         * @return True if the given MIME is JSON, false otherwise.
         */

      }, {
        key: "isJsonMime",
        value: function isJsonMime(mime) {
          var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
          return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        }
      }]);

      return Configuration;
    }();
    /***/

  },

  /***/
  "./src/gen/generatedAngular/index.ts":
  /*!*******************************************!*\
    !*** ./src/gen/generatedAngular/index.ts ***!
    \*******************************************/

  /*! exports provided: DefaultService, APIS, AggregationType, ChronoField, ChronoUnit, GroupingType, TemporalPredicate, TimeDimension, TimeField, BASE_PATH, COLLECTION_FORMATS, Configuration, ApiModule */

  /***/
  function srcGenGeneratedAngularIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./api/api */
    "./src/gen/generatedAngular/api/api.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DefaultService", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["DefaultService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "APIS", function () {
      return _api_api__WEBPACK_IMPORTED_MODULE_0__["APIS"];
    });
    /* harmony import */


    var _model_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./model/models */
    "./src/gen/generatedAngular/model/models.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AggregationType", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["AggregationType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ChronoField", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["ChronoField"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ChronoUnit", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["ChronoUnit"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GroupingType", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["GroupingType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TemporalPredicate", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["TemporalPredicate"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TimeDimension", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["TimeDimension"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TimeField", function () {
      return _model_models__WEBPACK_IMPORTED_MODULE_1__["TimeField"];
    });
    /* harmony import */


    var _variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./variables */
    "./src/gen/generatedAngular/variables.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BASE_PATH", function () {
      return _variables__WEBPACK_IMPORTED_MODULE_2__["BASE_PATH"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function () {
      return _variables__WEBPACK_IMPORTED_MODULE_2__["COLLECTION_FORMATS"];
    });
    /* harmony import */


    var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./configuration */
    "./src/gen/generatedAngular/configuration.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Configuration", function () {
      return _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"];
    });
    /* harmony import */


    var _api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./api.module */
    "./src/gen/generatedAngular/api.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ApiModule", function () {
      return _api_module__WEBPACK_IMPORTED_MODULE_4__["ApiModule"];
    });
    /***/

  },

  /***/
  "./src/gen/generatedAngular/model/aggregationType.ts":
  /*!***********************************************************!*\
    !*** ./src/gen/generatedAngular/model/aggregationType.ts ***!
    \***********************************************************/

  /*! exports provided: AggregationType */

  /***/
  function srcGenGeneratedAngularModelAggregationTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AggregationType", function () {
      return AggregationType;
    });
    /**
     * Temporal Graph API
     * API for Temporal Graph
     *
     * OpenAPI spec version: 1.0.0
     * Contact: ji67mary@studserv.uni-leipzig.de
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var AggregationType = {
      AVERAGEDURATION: 'AVERAGEDURATION',
      MAXDURATION: 'MAXDURATION',
      MAXTIME: 'MAXTIME',
      MINDURATION: 'MINDURATION',
      MINTIME: 'MINTIME',
      COUNT: 'COUNT',
      MAX: 'MAX',
      MIN: 'MIN',
      SUM: 'SUM',
      NONE: 'NONE'
    };
    /***/
  },

  /***/
  "./src/gen/generatedAngular/model/chronoField.ts":
  /*!*******************************************************!*\
    !*** ./src/gen/generatedAngular/model/chronoField.ts ***!
    \*******************************************************/

  /*! exports provided: ChronoField */

  /***/
  function srcGenGeneratedAngularModelChronoFieldTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChronoField", function () {
      return ChronoField;
    });
    /**
     * Temporal Graph API
     * API for Temporal Graph
     *
     * OpenAPI spec version: 1.0.0
     * Contact: ji67mary@studserv.uni-leipzig.de
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var ChronoField = {
      NANOOFSECOND: 'NANOOFSECOND',
      NANOOFDAY: 'NANOOFDAY',
      MICROOFSECOND: 'MICROOFSECOND',
      MICROOFDAY: 'MICROOFDAY',
      MILLIOFSECOND: 'MILLIOFSECOND',
      MILLIOFDAY: 'MILLIOFDAY',
      SECONDOFMINUTE: 'SECONDOFMINUTE',
      SECONDOFDAY: 'SECONDOFDAY',
      MINUTEOFHOUR: 'MINUTEOFHOUR',
      MINUTEOFDAY: 'MINUTEOFDAY',
      HOUROFAMPM: 'HOUROFAMPM',
      HOUROFDAY: 'HOUROFDAY',
      CLOCKHOUROFDAY: 'CLOCKHOUROFDAY',
      AMPMOFDAY: 'AMPMOFDAY',
      DAYOFWEEK: 'DAYOFWEEK',
      ALIGNEDDAYOFWEEKINMONTH: 'ALIGNEDDAYOFWEEKINMONTH',
      ALIGNEDDAYOFWEEKINYEAR: 'ALIGNEDDAYOFWEEKINYEAR',
      DAYOFMONTH: 'DAYOFMONTH',
      DAYOFYEAR: 'DAYOFYEAR',
      EPOCHDAY: 'EPOCHDAY',
      ALIGNEDWEEKOFMONTH: 'ALIGNEDWEEKOFMONTH',
      ALIGNEDWEEKOFYEAR: 'ALIGNEDWEEKOFYEAR',
      MONTHOFYEAR: 'MONTHOFYEAR',
      PROLEPTICMONTH: 'PROLEPTICMONTH',
      YEAROFERA: 'YEAROFERA',
      YEAR: 'YEAR',
      ERA: 'ERA',
      INTANTSECONDS: 'INTANTSECONDS',
      OFFSETSECONDS: 'OFFSETSECONDS'
    };
    /***/
  },

  /***/
  "./src/gen/generatedAngular/model/chronoUnit.ts":
  /*!******************************************************!*\
    !*** ./src/gen/generatedAngular/model/chronoUnit.ts ***!
    \******************************************************/

  /*! exports provided: ChronoUnit */

  /***/
  function srcGenGeneratedAngularModelChronoUnitTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChronoUnit", function () {
      return ChronoUnit;
    });
    /**
     * Temporal Graph API
     * API for Temporal Graph
     *
     * OpenAPI spec version: 1.0.0
     * Contact: ji67mary@studserv.uni-leipzig.de
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var ChronoUnit = {
      CENTURIES: 'CENTURIES',
      DAYS: 'DAYS',
      DECADES: 'DECADES',
      ERAS: 'ERAS',
      FOREVER: 'FOREVER',
      HALFDAYS: 'HALF_DAYS',
      HOURS: 'HOURS',
      MICROS: 'MICROS',
      MILLENIA: 'MILLENIA',
      MILLIS: 'MILLIS',
      MINUTES: 'MINUTES',
      MONTHS: 'MONTHS',
      NANOS: 'NANOS',
      SECONDS: 'SECONDS',
      WEEKS: 'WEEKS',
      YEARS: 'YEARS'
    };
    /***/
  },

  /***/
  "./src/gen/generatedAngular/model/groupingType.ts":
  /*!********************************************************!*\
    !*** ./src/gen/generatedAngular/model/groupingType.ts ***!
    \********************************************************/

  /*! exports provided: GroupingType */

  /***/
  function srcGenGeneratedAngularModelGroupingTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupingType", function () {
      return GroupingType;
    });
    /**
     * Temporal Graph API
     * API for Temporal Graph
     *
     * OpenAPI spec version: 1.0.0
     * Contact: ji67mary@studserv.uni-leipzig.de
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var GroupingType = {
      NOTHING: 'NOTHING',
      LABEL: 'LABEL',
      PROPERTY: 'PROPERTY',
      DURATION: 'DURATION',
      TIMEINTERVAL: 'TIMEINTERVAL',
      TIMESTAMP: 'TIMESTAMP',
      TIMESTAMPFIELD: 'TIMESTAMPFIELD'
    };
    /***/
  },

  /***/
  "./src/gen/generatedAngular/model/models.ts":
  /*!**************************************************!*\
    !*** ./src/gen/generatedAngular/model/models.ts ***!
    \**************************************************/

  /*! exports provided: AggregationType, ChronoField, ChronoUnit, GroupingType, TemporalPredicate, TimeDimension, TimeField */

  /***/
  function srcGenGeneratedAngularModelModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _aggregationType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./aggregationType */
    "./src/gen/generatedAngular/model/aggregationType.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AggregationType", function () {
      return _aggregationType__WEBPACK_IMPORTED_MODULE_0__["AggregationType"];
    });
    /* harmony import */


    var _chronoField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./chronoField */
    "./src/gen/generatedAngular/model/chronoField.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ChronoField", function () {
      return _chronoField__WEBPACK_IMPORTED_MODULE_1__["ChronoField"];
    });
    /* harmony import */


    var _chronoUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chronoUnit */
    "./src/gen/generatedAngular/model/chronoUnit.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ChronoUnit", function () {
      return _chronoUnit__WEBPACK_IMPORTED_MODULE_2__["ChronoUnit"];
    });
    /* harmony import */


    var _groupingType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./groupingType */
    "./src/gen/generatedAngular/model/groupingType.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GroupingType", function () {
      return _groupingType__WEBPACK_IMPORTED_MODULE_3__["GroupingType"];
    });
    /* harmony import */


    var _temporalPredicate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./temporalPredicate */
    "./src/gen/generatedAngular/model/temporalPredicate.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TemporalPredicate", function () {
      return _temporalPredicate__WEBPACK_IMPORTED_MODULE_4__["TemporalPredicate"];
    });
    /* harmony import */


    var _timeDimension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./timeDimension */
    "./src/gen/generatedAngular/model/timeDimension.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TimeDimension", function () {
      return _timeDimension__WEBPACK_IMPORTED_MODULE_5__["TimeDimension"];
    });
    /* harmony import */


    var _timeField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./timeField */
    "./src/gen/generatedAngular/model/timeField.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TimeField", function () {
      return _timeField__WEBPACK_IMPORTED_MODULE_6__["TimeField"];
    });
    /***/

  },

  /***/
  "./src/gen/generatedAngular/model/temporalPredicate.ts":
  /*!*************************************************************!*\
    !*** ./src/gen/generatedAngular/model/temporalPredicate.ts ***!
    \*************************************************************/

  /*! exports provided: TemporalPredicate */

  /***/
  function srcGenGeneratedAngularModelTemporalPredicateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemporalPredicate", function () {
      return TemporalPredicate;
    });
    /**
     * Temporal Graph API
     * API for Temporal Graph
     *
     * OpenAPI spec version: 1.0.0
     * Contact: ji67mary@studserv.uni-leipzig.de
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var TemporalPredicate = {
      ALL: 'ALL',
      ASOF: 'ASOF',
      BETWEEN: 'BETWEEN',
      CONTAINEDIN: 'CONTAINEDIN',
      CREATEDIN: 'CREATEDIN',
      DELETEDIN: 'DELETEDIN',
      FROMTO: 'FROMTO',
      OVERLAPS: 'OVERLAPS',
      PRECEDES: 'PRECEDES',
      SUCCEEDS: 'SUCCEEDS',
      VALIDDURING: 'VALIDDURING'
    };
    /***/
  },

  /***/
  "./src/gen/generatedAngular/model/timeDimension.ts":
  /*!*********************************************************!*\
    !*** ./src/gen/generatedAngular/model/timeDimension.ts ***!
    \*********************************************************/

  /*! exports provided: TimeDimension */

  /***/
  function srcGenGeneratedAngularModelTimeDimensionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeDimension", function () {
      return TimeDimension;
    });
    /**
     * Temporal Graph API
     * API for Temporal Graph
     *
     * OpenAPI spec version: 1.0.0
     * Contact: ji67mary@studserv.uni-leipzig.de
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var TimeDimension = {
      TRANSACTIONTIME: 'TRANSACTIONTIME',
      VALIDTIME: 'VALIDTIME'
    };
    /***/
  },

  /***/
  "./src/gen/generatedAngular/model/timeField.ts":
  /*!*****************************************************!*\
    !*** ./src/gen/generatedAngular/model/timeField.ts ***!
    \*****************************************************/

  /*! exports provided: TimeField */

  /***/
  function srcGenGeneratedAngularModelTimeFieldTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeField", function () {
      return TimeField;
    });
    /**
     * Temporal Graph API
     * API for Temporal Graph
     *
     * OpenAPI spec version: 1.0.0
     * Contact: ji67mary@studserv.uni-leipzig.de
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */


    var TimeField = {
      FROM: 'FROM',
      TO: 'TO'
    };
    /***/
  },

  /***/
  "./src/gen/generatedAngular/variables.ts":
  /*!***********************************************!*\
    !*** ./src/gen/generatedAngular/variables.ts ***!
    \***********************************************/

  /*! exports provided: BASE_PATH, COLLECTION_FORMATS */

  /***/
  function srcGenGeneratedAngularVariablesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BASE_PATH", function () {
      return BASE_PATH;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function () {
      return COLLECTION_FORMATS;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
    var COLLECTION_FORMATS = {
      'csv': ',',
      'tsv': '   ',
      'ssv': ' ',
      'pipes': '|'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\jonas\Documents\gradoop_demo\src\main\temporal\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map