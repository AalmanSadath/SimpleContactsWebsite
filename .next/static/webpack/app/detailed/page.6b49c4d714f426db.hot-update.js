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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   metadata: function() { return /* binding */ metadata; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-client)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-client)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default,metadata auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst mail = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faEnvelope\n}, void 0, false, {\n    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n    lineNumber: 12,\n    columnNumber: 14\n}, undefined);\nconst phone = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPhone,\n    style: {\n        color: \"#ffffff\"\n    }\n}, void 0, false, {\n    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n    lineNumber: 13,\n    columnNumber: 15\n}, undefined);\nconst website = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faGlobe\n}, void 0, false, {\n    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n    lineNumber: 14,\n    columnNumber: 17\n}, undefined);\nconst person = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faUser,\n    style: {\n        color: \"#ffffff\"\n    }\n}, void 0, false, {\n    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n    lineNumber: 15,\n    columnNumber: 16\n}, undefined);\nconst endpoint = \"https://jsonplaceholder.typicode.com/users\";\nconst Details = ()=>{\n    _s();\n    const query = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            var data = await fetch(endpoint).then((res)=>res.json());\n            setUsers(data);\n        })();\n    }, []);\n    const id = query.get(\"search\");\n    const user = users.filter(function(idNum) {\n        return idNum.id == id;\n    });\n    const userObj = user[0] || 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"whole\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                \"data-role\": \"Header\",\n                className: \"home-header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"contacts\",\n                    children: \"Contacts\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"table\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"name\",\n                                                children: [\n                                                    person,\n                                                    \" \",\n                                                    userObj.name\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 27\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, userObj.name, true, {\n                                    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"name\",\n                                                children: [\n                                                    phone,\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"tel:\".concat(userObj.phone),\n                                                        children: userObj.phone\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 57\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 27\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, userObj.phone, true, {\n                                    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"name\",\n                                                children: [\n                                                    mail,\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"mailto:\".concat(userObj.email),\n                                                        children: userObj.email\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 56\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 27\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, userObj.email, true, {\n                                    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"name\",\n                                                children: [\n                                                    website,\n                                                    \" \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"https://\".concat(userObj.website),\n                                                        target: \"_blank\",\n                                                        children: userObj.website\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 59\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 27\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, userObj.website, true, {\n                                    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                lineNumber: 47,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n        lineNumber: 43,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Details, \"VyDqJkCCwZiZlpLvPIOYd4LI4nU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = Details;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);\nconst metadata = {\n    title: \"Contacts\",\n    description: \"...\"\n};\nvar _c;\n$RefreshReg$(_c, \"Details\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2RldGFpbGVkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHMkM7QUFDTztBQUNjO0FBQ0Y7QUFDSDtBQUNBO0FBQ0Q7QUFFMUQsTUFBTVEscUJBQU8sOERBQUNMLDJFQUFlQTtJQUFDTSxNQUFNTCx5RUFBVUE7Ozs7OztBQUM5QyxNQUFNTSxzQkFBUSw4REFBQ1AsMkVBQWVBO0lBQUNNLE1BQU1KLHNFQUFPQTtJQUFFTSxPQUFPO1FBQUNDLE9BQU87SUFBVTs7Ozs7O0FBQ3ZFLE1BQU1DLHdCQUFVLDhEQUFDViwyRUFBZUE7SUFBQ00sTUFBTUgsc0VBQU9BOzs7Ozs7QUFDOUMsTUFBTVEsdUJBQVMsOERBQUNYLDJFQUFlQTtJQUFDTSxNQUFNRixxRUFBTUE7SUFBRUksT0FBTztRQUFDQyxPQUFPO0lBQVU7Ozs7OztBQUd2RSxNQUFNRyxXQUFXO0FBRWpCLE1BQU1DLFVBQVU7O0lBQ2QsTUFBTUMsUUFBUWYsZ0VBQWVBO0lBQzdCLE1BQU0sQ0FBQ2dCLE9BQU9DLFNBQVMsR0FBR2xCLCtDQUFRQSxDQUFDLEVBQUU7SUFDckNELGdEQUFTQSxDQUFDO1FBQ0w7WUFDRyxJQUFJb0IsT0FBTyxNQUFNQyxNQUFNTixVQUNsQk8sSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxJQUFJO1lBRXpCTCxTQUFTQztRQUNiO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTUssS0FBS1IsTUFBTVMsR0FBRyxDQUFDO0lBQ3JCLE1BQU1DLE9BQU9ULE1BQU1VLE1BQU0sQ0FDdkIsU0FBVUMsS0FBSztRQUNiLE9BQ0UsTUFBZUosRUFBRSxJQUFJQTtJQUV6QjtJQUVGLE1BQU1LLFVBQVFILElBQUksQ0FBQyxFQUFFLElBQUk7SUFFekIscUJBQ0ksOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNmLDhEQUFDQztnQkFBT0MsYUFBVTtnQkFBU0YsV0FBVTswQkFDakMsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUFXOzs7Ozs7Ozs7OzswQkFFbEMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRzs7c0NBQ0csOERBQUNDO3NDQUNHLDRFQUFDQzs7Ozs7Ozs7OztzQ0FHTCw4REFBQ0M7OzhDQUNPLDhEQUFDRDs7c0RBQ0ssOERBQUNFO3NEQUNHLDRFQUFDUjtnREFBSUMsV0FBVTs7b0RBQVFsQjtvREFBTztvREFBR2dCLFFBQWdCVSxJQUFJOzs7Ozs7Ozs7Ozs7c0RBR3pELDhEQUFDRDs7Ozs7O21DQUxFLFFBQWlCQyxJQUFJOzs7Ozs4Q0FROUIsOERBQUNIOztzREFDSyw4REFBQ0U7c0RBQ0csNEVBQUNSO2dEQUFJQyxXQUFVOztvREFBUXRCO29EQUFNO2tFQUFDLDhEQUFDK0I7d0RBQUVDLE1BQU0sT0FBOEIsT0FBdkIsUUFBaUJoQyxLQUFLO2tFQUFNLFFBQWlCQSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztzREFHcEcsOERBQUM2Qjs7Ozs7O21DQUxFLFFBQWlCN0IsS0FBSzs7Ozs7OENBUS9CLDhEQUFDMkI7O3NEQUNLLDhEQUFDRTtzREFDRyw0RUFBQ1I7Z0RBQUlDLFdBQVU7O29EQUFReEI7b0RBQUs7a0VBQUMsOERBQUNpQzt3REFBRUMsTUFBTSxVQUFpQyxPQUF2QixRQUFpQkMsS0FBSztrRUFBSyxRQUFpQkEsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBR3JHLDhEQUFDSjs7Ozs7O21DQUxFLFFBQWlCSSxLQUFLOzs7Ozs4Q0FRL0IsOERBQUNOOztzREFDSyw4REFBQ0U7c0RBQ0csNEVBQUNSO2dEQUFJQyxXQUFVOztvREFBUW5CO29EQUFRO2tFQUFDLDhEQUFDNEI7d0RBQUVDLE1BQU0sV0FBb0MsT0FBekIsUUFBaUI3QixPQUFPO3dEQUFJK0IsUUFBTztrRUFBVSxRQUFpQi9CLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUc3SCw4REFBQzBCOzs7Ozs7bUNBTEUsUUFBaUIxQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY2pEO0dBeEVNRzs7UUFDVWQsNERBQWVBOzs7S0FEekJjO0FBMEVOLCtEQUFlQSxPQUFPQSxFQUFBO0FBRWYsTUFBTTZCLFdBQXFCO0lBQ2hDQyxPQUFPO0lBQ1BDLGFBQWE7QUFDZixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kZXRhaWxlZC9wYWdlLnRzeD8zMGU2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcbmltcG9ydCB7IGZhRW52ZWxvcGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhUGhvbmUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhR2xvYmUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXHJcbmltcG9ydCB7IGZhVXNlciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcclxuXHJcbmNvbnN0IG1haWwgPSA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRW52ZWxvcGV9IC8+XHJcbmNvbnN0IHBob25lID0gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVBob25lfSBzdHlsZT17e2NvbG9yOiBcIiNmZmZmZmZcIix9fSAvPlxyXG5jb25zdCB3ZWJzaXRlID0gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdsb2JlfSAgLz5cclxuY29uc3QgcGVyc29uID0gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IHN0eWxlPXt7Y29sb3I6IFwiI2ZmZmZmZlwiLH19IC8+XHJcblxyXG5cclxuY29uc3QgZW5kcG9pbnQgPSAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJ1xyXG5cclxuY29uc3QgRGV0YWlscyA9ICgpID0+IHtcclxuICBjb25zdCBxdWVyeSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIHZhciBkYXRhID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQpXHJcbiAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblxyXG4gICAgICAgICAgc2V0VXNlcnMoZGF0YSlcclxuICAgICAgfSkoKVxyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIGNvbnN0IGlkID0gcXVlcnkuZ2V0KCdzZWFyY2gnKVxyXG4gIGNvbnN0IHVzZXIgPSB1c2Vycy5maWx0ZXIoXHJcbiAgICBmdW5jdGlvbiAoaWROdW0pe1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgKGlkTnVtIGFzIGFueSkuaWQgPT0gaWRcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIClcclxuICBjb25zdCB1c2VyT2JqPXVzZXJbMF0gfHwgMFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nd2hvbGUnPlxyXG4gICAgICA8aGVhZGVyIGRhdGEtcm9sZT1cIkhlYWRlclwiIGNsYXNzTmFtZT1cImhvbWUtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RzXCI+Q29udGFjdHM8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgPGRpdiBjbGFzc05hbWU9J3RhYmxlJz5cclxuICAgIDx0YWJsZT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9eyh1c2VyT2JqIGFzIGFueSkubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hbWUnPntwZXJzb259IHsodXNlck9iaiBhcyBhbnkpLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXsodXNlck9iaiBhcyBhbnkpLnBob25lfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmFtZSc+e3Bob25lfSA8YSBocmVmPXtgdGVsOiR7KHVzZXJPYmogYXMgYW55KS5waG9uZX1gfSA+eyh1c2VyT2JqIGFzIGFueSkucGhvbmV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17KHVzZXJPYmogYXMgYW55KS5lbWFpbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hbWUnPnttYWlsfSA8YSBocmVmPXtgbWFpbHRvOiR7KHVzZXJPYmogYXMgYW55KS5lbWFpbH1gfT57KHVzZXJPYmogYXMgYW55KS5lbWFpbH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXsodXNlck9iaiBhcyBhbnkpLndlYnNpdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYW1lJz57d2Vic2l0ZX0gPGEgaHJlZj17YGh0dHBzOi8vJHsodXNlck9iaiBhcyBhbnkpLndlYnNpdGV9YH0gdGFyZ2V0PSdfYmxhbmsnPnsodXNlck9iaiBhcyBhbnkpLndlYnNpdGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGFkYXRhOiBNZXRhZGF0YSA9IHtcclxuICB0aXRsZTogJ0NvbnRhY3RzJyxcclxuICBkZXNjcmlwdGlvbjogJy4uLicsXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNlYXJjaFBhcmFtcyIsIkZvbnRBd2Vzb21lSWNvbiIsImZhRW52ZWxvcGUiLCJmYVBob25lIiwiZmFHbG9iZSIsImZhVXNlciIsIm1haWwiLCJpY29uIiwicGhvbmUiLCJzdHlsZSIsImNvbG9yIiwid2Vic2l0ZSIsInBlcnNvbiIsImVuZHBvaW50IiwiRGV0YWlscyIsInF1ZXJ5IiwidXNlcnMiLCJzZXRVc2VycyIsImRhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiaWQiLCJnZXQiLCJ1c2VyIiwiZmlsdGVyIiwiaWROdW0iLCJ1c2VyT2JqIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiZGF0YS1yb2xlIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGJvZHkiLCJ0ZCIsIm5hbWUiLCJhIiwiaHJlZiIsImVtYWlsIiwidGFyZ2V0IiwibWV0YWRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/detailed/page.tsx\n"));

/***/ })

});