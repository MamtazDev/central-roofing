(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./components/elements/Preloader.js

function Preloader() {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            id: "preloader",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "ta-preloader-block",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "ta-spinner-eff",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "ta-bar ta-bar-top"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "ta-bar ta-bar-right"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "ta-bar ta-bar-bottom"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "ta-bar ta-bar-left"
                        })
                    ]
                })
            })
        })
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__(8278);
// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__(1598);
// EXTERNAL MODULE: ./public/assets/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(8984);
// EXTERNAL MODULE: ./public/assets/css/animate.min.css
var animate_min = __webpack_require__(2759);
// EXTERNAL MODULE: ./public/assets/css/magnific-popup.css
var magnific_popup = __webpack_require__(3852);
// EXTERNAL MODULE: ./public/assets/css/fontawesome-all.min.css
var fontawesome_all_min = __webpack_require__(7214);
// EXTERNAL MODULE: ./public/assets/css/odometer.css
var odometer = __webpack_require__(605);
// EXTERNAL MODULE: ./public/assets/css/tg-cursor.css
var tg_cursor = __webpack_require__(4091);
// EXTERNAL MODULE: ./public/assets/css/default.css
var css_default = __webpack_require__(9658);
// EXTERNAL MODULE: ./public/assets/css/jarallax.css
var jarallax = __webpack_require__(2248);
// EXTERNAL MODULE: ./public/assets/css/style.css
var style = __webpack_require__(8825);
// EXTERNAL MODULE: ./public/assets/css/responsive.css
var responsive = __webpack_require__(9403);
;// CONCATENATED MODULE: ./pages/_app.js















function MyApp({ Component , pageProps  }) {
    const [loading, setLoading] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 1000);
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: !loading ? /*#__PURE__*/ jsx_runtime.jsx(Component, {
            ...pageProps
        }) : /*#__PURE__*/ jsx_runtime.jsx(Preloader, {})
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 1598:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ }),

/***/ 2759:
/***/ (() => {



/***/ }),

/***/ 8984:
/***/ (() => {



/***/ }),

/***/ 9658:
/***/ (() => {



/***/ }),

/***/ 7214:
/***/ (() => {



/***/ }),

/***/ 2248:
/***/ (() => {



/***/ }),

/***/ 3852:
/***/ (() => {



/***/ }),

/***/ 605:
/***/ (() => {



/***/ }),

/***/ 9403:
/***/ (() => {



/***/ }),

/***/ 8825:
/***/ (() => {



/***/ }),

/***/ 4091:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(1593)));
module.exports = __webpack_exports__;

})();