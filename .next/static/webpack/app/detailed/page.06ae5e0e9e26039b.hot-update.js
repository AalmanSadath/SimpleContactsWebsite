"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/detailed/page",{

/***/ "(app-client)/./app/detailed/page.tsx":
/*!*******************************!*\
  !*** ./app/detailed/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst endpoint = \"https://jsonplaceholder.typicode.com/users\";\nconst Details = ()=>{\n    _s();\n    const query = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            var data = await fetch(endpoint).then((res)=>res.json());\n            setUsers(data);\n        })();\n    }, []);\n    const id = query.get(\"search\");\n    const user = users.filter(function(idNum) {\n        return idNum.id == id;\n    });\n    const userArr = user[0] || 0;\n    console.log(user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"whole\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                \"data-role\": \"Header\",\n                className: \"home-header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"contacts\",\n                    children: \"Contacts\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"table\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"name\",\n                                                children: [\n                                                    \"Name: \",\n                                                    userArr.name\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 27\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, userArr.name, true, {\n                                    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"name\",\n                                                children: [\n                                                    \"Phone: \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"tel:\".concat(user.phone),\n                                                        children: userArr.phone\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 56\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 27\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, userArr.phone, true, {\n                                    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"name\",\n                                                children: [\n                                                    \"Email: \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"mailto:\".concat(user.email),\n                                                        children: userArr.email\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 56\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 27\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, userArr.email, true, {\n                                    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"name\",\n                                                children: [\n                                                    \"Website: \",\n                                                    userArr.website\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 27\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, userArr.website, true, {\n                                    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                lineNumber: 37,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n        lineNumber: 33,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Details, \"VyDqJkCCwZiZlpLvPIOYd4LI4nU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = Details;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);\nvar _c;\n$RefreshReg$(_c, \"Details\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2RldGFpbGVkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRTJDO0FBQ087QUFHbEQsTUFBTUcsV0FBVztBQUVqQixNQUFNQyxVQUFVOztJQUNkLE1BQU1DLFFBQVFILGdFQUFlQTtJQUM3QixNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUNyQ0QsZ0RBQVNBLENBQUM7UUFDTDtZQUNHLElBQUlRLE9BQU8sTUFBTUMsTUFBTU4sVUFDbEJPLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSTtZQUV6QkwsU0FBU0M7UUFDYjtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1LLEtBQUtSLE1BQU1TLEdBQUcsQ0FBQztJQUNyQixNQUFNQyxPQUFPVCxNQUFNVSxNQUFNLENBQ3ZCLFNBQVVDLEtBQUs7UUFDYixPQUNFQSxNQUFNSixFQUFFLElBQUlBO0lBRWhCO0lBRUYsTUFBTUssVUFBUUgsSUFBSSxDQUFDLEVBQUUsSUFBSTtJQUN6QkksUUFBUUMsR0FBRyxDQUFDTDtJQUVaLHFCQUNJLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDZiw4REFBQ0M7Z0JBQU9DLGFBQVU7Z0JBQVNGLFdBQVU7MEJBQ2pDLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFBVzs7Ozs7Ozs7Ozs7MEJBRWxDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0c7O3NDQUNHLDhEQUFDQztzQ0FDRyw0RUFBQ0M7Ozs7Ozs7Ozs7c0NBR0wsOERBQUNDOzs4Q0FDTyw4REFBQ0Q7O3NEQUNLLDhEQUFDRTtzREFDRyw0RUFBQ1I7Z0RBQUlDLFdBQVU7O29EQUFPO29EQUFPSixRQUFRWSxJQUFJOzs7Ozs7Ozs7Ozs7c0RBRzdDLDhEQUFDRDs7Ozs7O21DQUxFWCxRQUFRWSxJQUFJOzs7Ozs4Q0FRckIsOERBQUNIOztzREFDSyw4REFBQ0U7c0RBQ0csNEVBQUNSO2dEQUFJQyxXQUFVOztvREFBTztrRUFBTyw4REFBQ1M7d0RBQUVDLE1BQU0sT0FBa0IsT0FBWGpCLEtBQUtrQixLQUFLO2tFQUFNZixRQUFRZSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztzREFHOUUsOERBQUNKOzs7Ozs7bUNBTEVYLFFBQVFlLEtBQUs7Ozs7OzhDQVF0Qiw4REFBQ047O3NEQUNLLDhEQUFDRTtzREFDRyw0RUFBQ1I7Z0RBQUlDLFdBQVU7O29EQUFPO2tFQUFPLDhEQUFDUzt3REFBRUMsTUFBTSxVQUFxQixPQUFYakIsS0FBS21CLEtBQUs7a0VBQUtoQixRQUFRZ0IsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBR2hGLDhEQUFDTDs7Ozs7O21DQUxFWCxRQUFRZ0IsS0FBSzs7Ozs7OENBUXRCLDhEQUFDUDs7c0RBQ0ssOERBQUNFO3NEQUNHLDRFQUFDUjtnREFBSUMsV0FBVTs7b0RBQU87b0RBQVVKLFFBQVFpQixPQUFPOzs7Ozs7Ozs7Ozs7c0RBR25ELDhEQUFDTjs7Ozs7O21DQUxFWCxRQUFRaUIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWN4QztHQXpFTS9COztRQUNVRiw0REFBZUE7OztLQUR6QkU7QUEyRU4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2RldGFpbGVkL3BhZ2UudHN4PzMwZTYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuXHJcbmNvbnN0IGVuZHBvaW50ID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycydcclxuXHJcbmNvbnN0IERldGFpbHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcXVlcnkgPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICB2YXIgZGF0YSA9IGF3YWl0IGZldGNoKGVuZHBvaW50KVxyXG4gICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG5cclxuICAgICAgICAgIHNldFVzZXJzKGRhdGEpXHJcbiAgICAgIH0pKClcclxuICB9LCBbXSlcclxuICBcclxuICBjb25zdCBpZCA9IHF1ZXJ5LmdldCgnc2VhcmNoJylcclxuICBjb25zdCB1c2VyID0gdXNlcnMuZmlsdGVyKFxyXG4gICAgZnVuY3Rpb24gKGlkTnVtKXtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIGlkTnVtLmlkID09IGlkXHJcbiAgICAgIClcclxuICAgIH1cclxuICApXHJcbiAgY29uc3QgdXNlckFycj11c2VyWzBdIHx8IDBcclxuICBjb25zb2xlLmxvZyh1c2VyKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd2hvbGUnPlxyXG4gICAgICA8aGVhZGVyIGRhdGEtcm9sZT1cIkhlYWRlclwiIGNsYXNzTmFtZT1cImhvbWUtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RzXCI+Q29udGFjdHM8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgPGRpdiBjbGFzc05hbWU9J3RhYmxlJz5cclxuICAgIDx0YWJsZT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e3VzZXJBcnIubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hbWUnPk5hbWU6IHt1c2VyQXJyLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXt1c2VyQXJyLnBob25lfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmFtZSc+UGhvbmU6IDxhIGhyZWY9e2B0ZWw6JHt1c2VyLnBob25lfWB9ID57dXNlckFyci5waG9uZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXt1c2VyQXJyLmVtYWlsfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmFtZSc+RW1haWw6IDxhIGhyZWY9e2BtYWlsdG86JHt1c2VyLmVtYWlsfWB9Pnt1c2VyQXJyLmVtYWlsfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e3VzZXJBcnIud2Vic2l0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hbWUnPldlYnNpdGU6IHt1c2VyQXJyLndlYnNpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2VhcmNoUGFyYW1zIiwiZW5kcG9pbnQiLCJEZXRhaWxzIiwicXVlcnkiLCJ1c2VycyIsInNldFVzZXJzIiwiZGF0YSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJpZCIsImdldCIsInVzZXIiLCJmaWx0ZXIiLCJpZE51bSIsInVzZXJBcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiZGF0YS1yb2xlIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGJvZHkiLCJ0ZCIsIm5hbWUiLCJhIiwiaHJlZiIsInBob25lIiwiZW1haWwiLCJ3ZWJzaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/detailed/page.tsx\n"));

/***/ })

});