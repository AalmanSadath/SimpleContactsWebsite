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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst endpoint = \"https://jsonplaceholder.typicode.com/users\";\nconst Details = ()=>{\n    _s();\n    const query = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (async ()=>{\n            var data = await fetch(endpoint).then((res)=>res.json());\n            setUsers(data);\n        })();\n    }, []);\n    const id = query.get(\"search\");\n    const user = users.filter(function(idNum) {\n        return idNum.id == id;\n    });\n    const userArr = user[0] || 0;\n    console.log(user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"whole\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                \"data-role\": \"Header\",\n                className: \"home-header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"contacts\",\n                    children: \"Contacts\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"table\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"name\",\n                                                children: [\n                                                    \"Name: \",\n                                                    userArr.name\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 27\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, userArr.name, true, {\n                                    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"name\",\n                                                children: [\n                                                    \"Phone: \",\n                                                    userArr.phone\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 27\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, userArr.phone, true, {\n                                    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"name\",\n                                                children: [\n                                                    \"Email: \",\n                                                    userArr.email\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 27\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, userArr.email, true, {\n                                    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"name\",\n                                                children: [\n                                                    \"Website: \",\n                                                    userArr.website\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 27\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, userArr.website, true, {\n                                    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n                lineNumber: 37,\n                columnNumber: 3\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Aalman\\\\Documents\\\\Visual Studio Code\\\\contacts\\\\app\\\\detailed\\\\page.tsx\",\n        lineNumber: 33,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Details, \"VyDqJkCCwZiZlpLvPIOYd4LI4nU=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = Details;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Details);\nvar _c;\n$RefreshReg$(_c, \"Details\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2RldGFpbGVkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRTJDO0FBQ087QUFHbEQsTUFBTUcsV0FBVztBQUVqQixNQUFNQyxVQUFVOztJQUNkLE1BQU1DLFFBQVFILGdFQUFlQTtJQUM3QixNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUNyQ0QsZ0RBQVNBLENBQUM7UUFDTDtZQUNHLElBQUlRLE9BQU8sTUFBTUMsTUFBTU4sVUFDbEJPLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSTtZQUV6QkwsU0FBU0M7UUFDYjtJQUNKLEdBQUcsRUFBRTtJQUVMLE1BQU1LLEtBQUtSLE1BQU1TLEdBQUcsQ0FBQztJQUNyQixNQUFNQyxPQUFPVCxNQUFNVSxNQUFNLENBQ3ZCLFNBQVVDLEtBQUs7UUFDYixPQUNFQSxNQUFNSixFQUFFLElBQUlBO0lBRWhCO0lBRUYsTUFBTUssVUFBUUgsSUFBSSxDQUFDLEVBQUUsSUFBSTtJQUN6QkksUUFBUUMsR0FBRyxDQUFDTDtJQUVaLHFCQUNJLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDZiw4REFBQ0M7Z0JBQU9DLGFBQVU7Z0JBQVNGLFdBQVU7MEJBQ2pDLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFBVzs7Ozs7Ozs7Ozs7MEJBRWxDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0c7O3NDQUNHLDhEQUFDQztzQ0FDRyw0RUFBQ0M7Ozs7Ozs7Ozs7c0NBR0wsOERBQUNDOzs4Q0FDTyw4REFBQ0Q7O3NEQUNLLDhEQUFDRTtzREFDRyw0RUFBQ1I7Z0RBQUlDLFdBQVU7O29EQUFPO29EQUFPSixRQUFRWSxJQUFJOzs7Ozs7Ozs7Ozs7c0RBRzdDLDhEQUFDRDs7Ozs7O21DQUxFWCxRQUFRWSxJQUFJOzs7Ozs4Q0FRckIsOERBQUNIOztzREFDSyw4REFBQ0U7c0RBQ0csNEVBQUNSO2dEQUFJQyxXQUFVOztvREFBTztvREFBUUosUUFBUWEsS0FBSzs7Ozs7Ozs7Ozs7O3NEQUcvQyw4REFBQ0Y7Ozs7OzttQ0FMRVgsUUFBUWEsS0FBSzs7Ozs7OENBUXRCLDhEQUFDSjs7c0RBQ0ssOERBQUNFO3NEQUNHLDRFQUFDUjtnREFBSUMsV0FBVTs7b0RBQU87b0RBQVFKLFFBQVFjLEtBQUs7Ozs7Ozs7Ozs7OztzREFHL0MsOERBQUNIOzs7Ozs7bUNBTEVYLFFBQVFjLEtBQUs7Ozs7OzhDQVF0Qiw4REFBQ0w7O3NEQUNLLDhEQUFDRTtzREFDRyw0RUFBQ1I7Z0RBQUlDLFdBQVU7O29EQUFPO29EQUFVSixRQUFRZSxPQUFPOzs7Ozs7Ozs7Ozs7c0RBR25ELDhEQUFDSjs7Ozs7O21DQUxFWCxRQUFRZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY3hDO0dBekVNN0I7O1FBQ1VGLDREQUFlQTs7O0tBRHpCRTtBQTJFTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGV0YWlsZWQvcGFnZS50c3g/MzBlNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5cclxuY29uc3QgZW5kcG9pbnQgPSAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJ1xyXG5cclxuY29uc3QgRGV0YWlscyA9ICgpID0+IHtcclxuICBjb25zdCBxdWVyeSA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIHZhciBkYXRhID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQpXHJcbiAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcblxyXG4gICAgICAgICAgc2V0VXNlcnMoZGF0YSlcclxuICAgICAgfSkoKVxyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIGNvbnN0IGlkID0gcXVlcnkuZ2V0KCdzZWFyY2gnKVxyXG4gIGNvbnN0IHVzZXIgPSB1c2Vycy5maWx0ZXIoXHJcbiAgICBmdW5jdGlvbiAoaWROdW0pe1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgaWROdW0uaWQgPT0gaWRcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIClcclxuICBjb25zdCB1c2VyQXJyPXVzZXJbMF0gfHwgMFxyXG4gIGNvbnNvbGUubG9nKHVzZXIpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3aG9sZSc+XHJcbiAgICAgIDxoZWFkZXIgZGF0YS1yb2xlPVwiSGVhZGVyXCIgY2xhc3NOYW1lPVwiaG9tZS1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdHNcIj5Db250YWN0czwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICA8ZGl2IGNsYXNzTmFtZT0ndGFibGUnPlxyXG4gICAgPHRhYmxlPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17dXNlckFyci5uYW1lfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmFtZSc+TmFtZToge3VzZXJBcnIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0ciBrZXk9e3VzZXJBcnIucGhvbmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYW1lJz5QaG9uZToge3VzZXJBcnIucGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHIga2V5PXt1c2VyQXJyLmVtYWlsfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmFtZSc+RW1haWw6IHt1c2VyQXJyLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyIGtleT17dXNlckFyci53ZWJzaXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmFtZSc+V2Vic2l0ZToge3VzZXJBcnIud2Vic2l0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbHMiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZWFyY2hQYXJhbXMiLCJlbmRwb2ludCIsIkRldGFpbHMiLCJxdWVyeSIsInVzZXJzIiwic2V0VXNlcnMiLCJkYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImlkIiwiZ2V0IiwidXNlciIsImZpbHRlciIsImlkTnVtIiwidXNlckFyciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJkYXRhLXJvbGUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0Ym9keSIsInRkIiwibmFtZSIsInBob25lIiwiZW1haWwiLCJ3ZWJzaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/detailed/page.tsx\n"));

/***/ })

});