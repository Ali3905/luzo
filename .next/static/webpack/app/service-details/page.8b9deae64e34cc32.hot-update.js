"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/service-details/page",{

/***/ "(app-pages-browser)/./src/app/service-details/MainContent.jsx":
/*!*************************************************!*\
  !*** ./src/app/service-details/MainContent.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Baby_ChevronDown_ChevronUp_Search_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Baby,ChevronDown,ChevronUp,Search!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/search.js\");\n/* harmony import */ var _barrel_optimize_names_Baby_ChevronDown_ChevronUp_Search_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Baby,ChevronDown,ChevronUp,Search!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-up.js\");\n/* harmony import */ var _barrel_optimize_names_Baby_ChevronDown_ChevronUp_Search_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Baby,ChevronDown,ChevronUp,Search!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var _barrel_optimize_names_Baby_ChevronDown_ChevronUp_Search_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Baby,ChevronDown,ChevronUp,Search!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/baby.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst MainContent = (param)=>{\n    let { selectedService, serviceData } = param;\n    _s();\n    const [openIndex, setOpenIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const toggleDropdown = (index) => {\n    //   setOpenIndex(openIndex === index ? null : index); // Toggle dropdown\n    // };\n    const serviceInfo = serviceData[selectedService] || {};\n    // const services = [\n    //   {\n    //     serviceName:'Nail Application',\n    //     name: \"Get Polish\",\n    //     icon: <Baby />,\n    //     price: \"From 1000 + GST\",\n    //     buttonText: \"ADD\"\n    //   },\n    //   {\n    //     serviceName:'Nail Application',\n    //     name: \"Spa Treatment\",\n    //     icon: <Baby />,  \n    //     price: \"From 1500 + GST\",\n    //     buttonText: \"ADD\"\n    //   },\n    //   {\n    //     serviceName:'Nail Application',\n    //     name: \"Haircut\",\n    //     icon: <Baby />,  // Replace with relevant icons for each service\n    //     price: \"From 500 + GST\",\n    //     buttonText: \"ADD\"\n    //   }\n    //   // Add more services as needed\n    // ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-3/4\",\n        children: selectedService && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-4 bg-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border mx-2 flex items-center rounded-md p-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Baby_ChevronDown_ChevronUp_Search_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            size: 15,\n                            className: \"mr-2\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Search for service...\",\n                            className: \"focus:outline-none\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex mt-1 mx-2 sm:justify-start justify-between gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border rounded-md px-10\",\n                            children: \" Men\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border rounded-md px-10\",\n                            children: \" Women\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 16\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" border-gray-500 border-b-4 border-b-gray-200\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between items-center p-2 cursor-pointer\",\n                                onClick: ()=>setOpenIndex((prev)=>!prev),\n                                children: [\n                                    selectedService.name,\n                                    openIndex ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Baby_ChevronDown_ChevronUp_Search_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                        fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 36\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Baby_ChevronDown_ChevronUp_Search_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                        fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 52\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"overflow-hidden transition-all duration-300 \".concat(openIndex ? \"max-h-40\" : \"max-h-0\"),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-2 flex items-center justify-between text-gray-600\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Baby_ChevronDown_ChevronUp_Search_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 27\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"font-semibold \",\n                                                    children: selectedService.name\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 27\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"font-semibold \",\n                                                    children: selectedService.name\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                                    lineNumber: 74,\n                                                    columnNumber: 29\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-[10px]\",\n                                                    children: selectedService.display_rate\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 27\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 26\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"text-blue-200 font-semibold border shadow-md rounded-md px-2\",\n                                            children: \"ADD\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 26\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 23\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 19\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n            lineNumber: 43,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n        lineNumber: 40,\n        columnNumber: 7\n    }, undefined);\n};\n_s(MainContent, \"LZWl456SNkML51eSP8vG7rN0/N8=\");\n_c = MainContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainContent);\nvar _c;\n$RefreshReg$(_c, \"MainContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2VydmljZS1kZXRhaWxzL01haW5Db250ZW50LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ29FO0FBQ25DO0FBRWpDLE1BQU1LLGNBQWM7UUFBQyxFQUFFQyxlQUFlLEVBQUVDLFdBQVcsRUFBRTs7SUFDbkQsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBRTNDLHNDQUFzQztJQUN0Qyx5RUFBeUU7SUFDekUsS0FBSztJQUVILE1BQU1NLGNBQWNILFdBQVcsQ0FBQ0QsZ0JBQWdCLElBQUksQ0FBQztJQUVyRCxxQkFBcUI7SUFDckIsTUFBTTtJQUNOLHNDQUFzQztJQUN0QywwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsT0FBTztJQUNQLE1BQU07SUFDTixzQ0FBc0M7SUFDdEMsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLE9BQU87SUFDUCxNQUFNO0lBQ04sc0NBQXNDO0lBQ3RDLHVCQUF1QjtJQUN2Qix1RUFBdUU7SUFDdkUsK0JBQStCO0lBQy9CLHdCQUF3QjtJQUN4QixNQUFNO0lBQ04sbUNBQW1DO0lBQ25DLEtBQUs7SUFFTCxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTtrQkFFWk4saUNBQ0MsOERBQUNLO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNULDZHQUFNQTs0QkFBQ1UsTUFBTTs0QkFBSUQsV0FBVTs7Ozs7O3NDQUM1Qiw4REFBQ0U7NEJBQ0NDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pKLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFHZCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNaLDhEQUFDSzs0QkFBT0wsV0FBVTtzQ0FBMEI7Ozs7OztzQ0FDNUMsOERBQUNLOzRCQUFPTCxXQUFVO3NDQUEwQjs7Ozs7Ozs7Ozs7OzhCQUcvQyw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBRVQsNEVBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQ0NDLFdBQVU7Z0NBQ1ZNLFNBQVMsSUFBTVQsYUFBYVUsQ0FBQUEsT0FBUSxDQUFDQTs7b0NBRXBDYixnQkFBZ0JjLElBQUk7b0NBQ3BCWiwwQkFBWSw4REFBQ04sNkdBQVNBOzs7O2tFQUFNLDhEQUFDRCw2R0FBV0E7Ozs7Ozs7Ozs7OzBDQUUzQyw4REFBQ1U7Z0NBQ0NDLFdBQVcsK0NBQWtGLE9BQW5DSixZQUFZLGFBQWE7MENBRW5GLDRFQUFDRztvQ0FBSUMsV0FBVTs7c0RBQ1osOERBQUNEOzs4REFDQSw4REFBQ1gsNkdBQUlBOzs7Ozs4REFDTCw4REFBQ3FCO29EQUFFVCxXQUFVOzhEQUFrQk4sZ0JBQWdCYyxJQUFJOzs7Ozs7OERBQ2pELDhEQUFDQztvREFBRVQsV0FBVTs4REFBa0JOLGdCQUFnQmMsSUFBSTs7Ozs7OzhEQUNyRCw4REFBQ0M7b0RBQUVULFdBQVU7OERBQWVOLGdCQUFnQmdCLFlBQVk7Ozs7Ozs7Ozs7OztzREFFekQsOERBQUNMOzRDQUFPTCxXQUFVO3NEQUErRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0J4RztHQTVGSVA7S0FBQUE7QUE4RkosK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zZXJ2aWNlLWRldGFpbHMvTWFpbkNvbnRlbnQuanN4PzgyYzciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyBCYWJ5LCBDaGV2cm9uRG93biwgQ2hldnJvblVwLCBTZWFyY2ggfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBNYWluQ29udGVudCA9ICh7IHNlbGVjdGVkU2VydmljZSwgc2VydmljZURhdGEgfSkgPT4geyAgXG4gIGNvbnN0IFtvcGVuSW5kZXgsIHNldE9wZW5JbmRleF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgLy8gY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoaW5kZXgpID0+IHtcbiAgLy8gICBzZXRPcGVuSW5kZXgob3BlbkluZGV4ID09PSBpbmRleCA/IG51bGwgOiBpbmRleCk7IC8vIFRvZ2dsZSBkcm9wZG93blxuICAvLyB9O1xuXG4gICAgY29uc3Qgc2VydmljZUluZm8gPSBzZXJ2aWNlRGF0YVtzZWxlY3RlZFNlcnZpY2VdIHx8IHt9OyAgXG5cbiAgICAvLyBjb25zdCBzZXJ2aWNlcyA9IFtcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgc2VydmljZU5hbWU6J05haWwgQXBwbGljYXRpb24nLFxuICAgIC8vICAgICBuYW1lOiBcIkdldCBQb2xpc2hcIixcbiAgICAvLyAgICAgaWNvbjogPEJhYnkgLz4sXG4gICAgLy8gICAgIHByaWNlOiBcIkZyb20gMTAwMCArIEdTVFwiLFxuICAgIC8vICAgICBidXR0b25UZXh0OiBcIkFERFwiXG4gICAgLy8gICB9LFxuICAgIC8vICAge1xuICAgIC8vICAgICBzZXJ2aWNlTmFtZTonTmFpbCBBcHBsaWNhdGlvbicsXG4gICAgLy8gICAgIG5hbWU6IFwiU3BhIFRyZWF0bWVudFwiLFxuICAgIC8vICAgICBpY29uOiA8QmFieSAvPiwgIFxuICAgIC8vICAgICBwcmljZTogXCJGcm9tIDE1MDAgKyBHU1RcIixcbiAgICAvLyAgICAgYnV0dG9uVGV4dDogXCJBRERcIlxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgc2VydmljZU5hbWU6J05haWwgQXBwbGljYXRpb24nLFxuICAgIC8vICAgICBuYW1lOiBcIkhhaXJjdXRcIixcbiAgICAvLyAgICAgaWNvbjogPEJhYnkgLz4sICAvLyBSZXBsYWNlIHdpdGggcmVsZXZhbnQgaWNvbnMgZm9yIGVhY2ggc2VydmljZVxuICAgIC8vICAgICBwcmljZTogXCJGcm9tIDUwMCArIEdTVFwiLFxuICAgIC8vICAgICBidXR0b25UZXh0OiBcIkFERFwiXG4gICAgLy8gICB9XG4gICAgLy8gICAvLyBBZGQgbW9yZSBzZXJ2aWNlcyBhcyBuZWVkZWRcbiAgICAvLyBdO1xuICBcbiAgICByZXR1cm4gKCAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMy80XCI+ICBcbiAgICAgICAgey8qIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPntzZWxlY3RlZFNlcnZpY2UgfTwvaDI+ICAgKi99XG4gICAgICAgIHtzZWxlY3RlZFNlcnZpY2UgJiYgKCAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGJnLXdoaXRlXCI+ICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIG14LTIgZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1tZCBwLTJcIj5cbiAgICAgICAgICAgICAgPFNlYXJjaCBzaXplPXsxNX0gY2xhc3NOYW1lPVwibXItMlwiLz5cbiAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHNlcnZpY2UuLi5cIiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtMSBteC0yIHNtOmp1c3RpZnktc3RhcnQganVzdGlmeS1iZXR3ZWVuIGdhcC0yXCI+XG4gICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLW1kIHB4LTEwXCI+IE1lbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1tZCBweC0xMFwiPiBXb21lbjwvYnV0dG9uPiAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIHsvKiB7c2VydmljZXMubWFwKChzZXJ2aWNlLCBpbmRleCkgPT4gKCAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJvcmRlci1ncmF5LTUwMCBib3JkZXItYi00IGJvcmRlci1iLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtMiBjdXJzb3ItcG9pbnRlclwiIFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5JbmRleChwcmV2ID0+ICFwcmV2KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZFNlcnZpY2UubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICB7b3BlbkluZGV4ID8gPENoZXZyb25VcCAvPiA6IDxDaGV2cm9uRG93biAvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgb3ZlcmZsb3ctaGlkZGVuIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke29wZW5JbmRleCA/ICdtYXgtaC00MCcgOiAnbWF4LWgtMCd9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhYnkvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIFwiPntzZWxlY3RlZFNlcnZpY2UubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBcIj57c2VsZWN0ZWRTZXJ2aWNlLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XVwiPntzZWxlY3RlZFNlcnZpY2UuZGlzcGxheV9yYXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtYmx1ZS0yMDAgZm9udC1zZW1pYm9sZCBib3JkZXIgc2hhZG93LW1kIHJvdW5kZWQtbWQgcHgtMlwiPkFERDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qICkpfSAqL31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPiAgXG4gICAgICAgICAgICAgIDxzdHJvbmc+RGVzY3JpcHRpb246PC9zdHJvbmc+IHtzZXJ2aWNlSW5mby5kZXNjcmlwdGlvbn0gIFxuICAgICAgICAgICAgPC9wPiAgXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+ICBcbiAgICAgICAgICAgICAgPHN0cm9uZz5QcmljZTo8L3N0cm9uZz4ge3NlcnZpY2VJbmZvLnByaWNlfSAgXG4gICAgICAgICAgICA8L3A+ICBcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj4gIFxuICAgICAgICAgICAgICA8c3Ryb25nPkR1cmF0aW9uOjwvc3Ryb25nPiB7c2VydmljZUluZm8uZHVyYXRpb259ICBcbiAgICAgICAgICAgIDwvcD4gICAqL31cbiAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICApfSAgXG4gICAgICA8L2Rpdj4gIFxuICAgICk7ICBcbiAgfTsgIFxuICBcbiAgZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnQ7Il0sIm5hbWVzIjpbIkJhYnkiLCJDaGV2cm9uRG93biIsIkNoZXZyb25VcCIsIlNlYXJjaCIsInVzZVN0YXRlIiwiTWFpbkNvbnRlbnQiLCJzZWxlY3RlZFNlcnZpY2UiLCJzZXJ2aWNlRGF0YSIsIm9wZW5JbmRleCIsInNldE9wZW5JbmRleCIsInNlcnZpY2VJbmZvIiwiZGl2IiwiY2xhc3NOYW1lIiwic2l6ZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsInByZXYiLCJuYW1lIiwicCIsImRpc3BsYXlfcmF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/service-details/MainContent.jsx\n"));

/***/ })

});