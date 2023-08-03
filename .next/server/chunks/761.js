"use strict";
exports.id = 761;
exports.ids = [761];
exports.modules = {

/***/ 4761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CountUp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function CountUp({ end , duration  }) {
    const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const countRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const increment = end / duration;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                startCount();
                observer.disconnect();
            }
        }, {
            threshold: 0
        });
        if (countRef.current) {
            observer.observe(countRef.current);
        }
        return ()=>{
            observer.disconnect();
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const interval = setInterval(()=>{
            setCount((prevCount)=>{
                const newCount = prevCount + increment;
                if (newCount >= end) {
                    clearInterval(interval);
                    return end;
                } else {
                    return newCount;
                }
            });
        }, 1000 / duration);
        return ()=>{
            clearInterval(interval);
        };
    }, [
        end,
        increment
    ]);
    const startCount = ()=>{
        setCount(0);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        ref: countRef,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "count odometer",
            children: Math.round(count)
        })
    });
}
;


/***/ })

};
;