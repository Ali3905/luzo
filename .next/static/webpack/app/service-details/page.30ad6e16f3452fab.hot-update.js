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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Baby_ChevronDown_ChevronUp_Plus_Search_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Baby,ChevronDown,ChevronUp,Plus,Search!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/search.js\");\n/* harmony import */ var _barrel_optimize_names_Baby_ChevronDown_ChevronUp_Plus_Search_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Baby,ChevronDown,ChevronUp,Plus,Search!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-up.js\");\n/* harmony import */ var _barrel_optimize_names_Baby_ChevronDown_ChevronUp_Plus_Search_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Baby,ChevronDown,ChevronUp,Plus,Search!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-down.js\");\n/* harmony import */ var _barrel_optimize_names_Baby_ChevronDown_ChevronUp_Plus_Search_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Baby,ChevronDown,ChevronUp,Plus,Search!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/baby.js\");\n/* harmony import */ var _barrel_optimize_names_Baby_ChevronDown_ChevronUp_Plus_Search_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Baby,ChevronDown,ChevronUp,Plus,Search!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/plus.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst MainContent = (param)=>{\n    let { selectedService, serviceData } = param;\n    var _selectedService_services;\n    _s();\n    const [openIndex, setOpenIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleOpen = ()=>{\n        setIsOpen(true);\n    };\n    const handleClose = ()=>{\n        setIsOpen(false);\n    };\n    const toggleDropdown = (index)=>{\n        setOpenIndex(openIndex === index ? null : index); // Toggle dropdown\n    };\n    // const serviceInfo = serviceData[selectedService] || {};\n    // const services = [\n    //   {\n    //     serviceName:'Nail Application',\n    //     name: \"Get Polish\",\n    //     icon: <Baby />,\n    //     price: \"From 1000 + GST\",\n    //     buttonText: \"ADD\"\n    //   },\n    //   {\n    //     serviceName:'Nail Application',\n    //     name: \"Spa Treatment\",\n    //     icon: <Baby />,  \n    //     price: \"From 1500 + GST\",\n    //     buttonText: \"ADD\"\n    //   },\n    //   {\n    //     serviceName:'Nail Application',\n    //     name: \"Haircut\",\n    //     icon: <Baby />,  // Replace with relevant icons for each service\n    //     price: \"From 500 + GST\",\n    //     buttonText: \"ADD\"\n    //   }\n    //   // Add more services as needed\n    // ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-3/4\",\n        children: selectedService && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-4 bg-white\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border mx-2 flex items-center rounded-md p-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Baby_ChevronDown_ChevronUp_Plus_Search_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            size: 15,\n                            className: \"mr-2\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Search for service...\",\n                            className: \"focus:outline-none\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex mt-1 mx-2 sm:justify-start justify-between gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border rounded-md px-10\",\n                            children: \" Men\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"border rounded-md px-10\",\n                            children: \" Women\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: selectedService === null || selectedService === void 0 ? void 0 : (_selectedService_services = selectedService.services) === null || _selectedService_services === void 0 ? void 0 : _selectedService_services.map((service, index)=>{\n                        var _service_customizations, _service_customizations1;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" border-gray-500 border-b-4 border-b-gray-200\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between items-center p-2 cursor-pointer\",\n                                    onClick: ()=>toggleDropdown(index),\n                                    children: [\n                                        service.name,\n                                        openIndex === index ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Baby_ChevronDown_ChevronUp_Plus_Search_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 42\n                                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Baby_ChevronDown_ChevronUp_Plus_Search_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 58\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"overflow-hidden transition-all duration-300 \".concat(openIndex === index ? \"max-h-40\" : \"max-h-0\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-2 flex items-center justify-between text-gray-600\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    service.gender === \"Women\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Baby_ChevronDown_ChevronUp_Plus_Search_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                                        fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 53\n                                                    }, undefined) : service.gender === \"Men\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                                        width: \"24\",\n                                                        height: \"24\",\n                                                        viewBox: \"0 0 24 24\",\n                                                        fill: \"none\",\n                                                        stroke: \"currentColor\",\n                                                        \"stroke-width\": \"2\",\n                                                        \"stroke-linecap\": \"round\",\n                                                        \"stroke-linejoin\": \"round\",\n                                                        class: \"lucide lucide-person-standing\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                                                cx: \"12\",\n                                                                cy: \"5\",\n                                                                r: \"1\"\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                                                lineNumber: 81,\n                                                                columnNumber: 310\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                d: \"m9 20 3-6 3 6\"\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                                                lineNumber: 81,\n                                                                columnNumber: 341\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                d: \"m6 8 6 2 6-2\"\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                                                lineNumber: 81,\n                                                                columnNumber: 367\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                d: \"M12 10v4\"\n                                                            }, void 0, false, {\n                                                                fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                                                lineNumber: 81,\n                                                                columnNumber: 392\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 91\n                                                    }, undefined) : \"\",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"font-semibold \",\n                                                        children: service.name\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                                        lineNumber: 82,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-[10px]\",\n                                                        children: service.one_line_description\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"text-[10px]\",\n                                                        children: service.display_rate\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                                        lineNumber: 84,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-blue-200 font-semibold border shadow-md rounded-md px-2 flex gap-1\",\n                                                onClick: (service === null || service === void 0 ? void 0 : (_service_customizations = service.customizations) === null || _service_customizations === void 0 ? void 0 : _service_customizations.length) > 0 ? handleOpen : \"\",\n                                                children: [\n                                                    \"ADD \",\n                                                    (service === null || service === void 0 ? void 0 : (_service_customizations1 = service.customizations) === null || _service_customizations1 === void 0 ? void 0 : _service_customizations1.length) > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Baby_ChevronDown_ChevronUp_Plus_Search_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                                        fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                                        lineNumber: 86,\n                                                        columnNumber: 218\n                                                    }, undefined) : \"\",\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n            lineNumber: 52,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\MainContent.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainContent, \"PWJynwr5d0r2X73QMXk9Rd2usmc=\");\n_c = MainContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainContent);\nvar _c;\n$RefreshReg$(_c, \"MainContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2VydmljZS1kZXRhaWxzL01haW5Db250ZW50LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUMwRTtBQUN6QztBQUVqQyxNQUFNTSxjQUFjO1FBQUMsRUFBRUMsZUFBZSxFQUFFQyxXQUFXLEVBQUU7UUE4RHhDRDs7SUE3RFgsTUFBTSxDQUFDRSxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNUSxhQUFhO1FBQ2pCRCxVQUFVO0lBQ1o7SUFFQSxNQUFNRSxjQUFjO1FBQ2xCRixVQUFVO0lBQ1o7SUFFQSxNQUFNRyxpQkFBaUIsQ0FBQ0M7UUFDdEJOLGFBQWFELGNBQWNPLFFBQVEsT0FBT0EsUUFBUSxrQkFBa0I7SUFDdEU7SUFFQSwwREFBMEQ7SUFFMUQscUJBQXFCO0lBQ3JCLE1BQU07SUFDTixzQ0FBc0M7SUFDdEMsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLE9BQU87SUFDUCxNQUFNO0lBQ04sc0NBQXNDO0lBQ3RDLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixPQUFPO0lBQ1AsTUFBTTtJQUNOLHNDQUFzQztJQUN0Qyx1QkFBdUI7SUFDdkIsdUVBQXVFO0lBQ3ZFLCtCQUErQjtJQUMvQix3QkFBd0I7SUFDeEIsTUFBTTtJQUNOLG1DQUFtQztJQUNuQyxLQUFLO0lBRUwscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBRVpYLGlDQUNDLDhEQUFDVTtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDZCxrSEFBTUE7NEJBQUNlLE1BQU07NEJBQUlELFdBQVU7Ozs7OztzQ0FDNUIsOERBQUNFOzRCQUNDQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaSixXQUFVOzs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0s7NEJBQU9MLFdBQVU7c0NBQTBCOzs7Ozs7c0NBQzVDLDhEQUFDSzs0QkFBT0wsV0FBVTtzQ0FBMEI7Ozs7Ozs7Ozs7Ozs4QkFHOUMsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNaWCw0QkFBQUEsdUNBQUFBLDRCQUFBQSxnQkFBaUJpQixRQUFRLGNBQXpCakIsZ0RBQUFBLDBCQUEyQmtCLEdBQUcsQ0FBQyxDQUFDQyxTQUFTVjs0QkFtQm1FVSx5QkFBMERBOzZDQWxCckssOERBQUNUOzRCQUFnQkMsV0FBVTs7OENBQ3pCLDhEQUFDRDtvQ0FDQ0MsV0FBVTtvQ0FDVlMsU0FBUyxJQUFNWixlQUFlQzs7d0NBRTdCVSxRQUFRRSxJQUFJO3dDQUNabkIsY0FBY08sc0JBQVEsOERBQUNkLGtIQUFTQTs7OztzRUFBTSw4REFBQ0Qsa0hBQVdBOzs7Ozs7Ozs7Ozs4Q0FFckQsOERBQUNnQjtvQ0FDQ0MsV0FBVywrQ0FBNEYsT0FBN0NULGNBQWNPLFFBQVEsYUFBYTs4Q0FFN0YsNEVBQUNDO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ0Q7O29EQUNFUyxRQUFRRyxNQUFNLEtBQUssd0JBQVUsOERBQUM3QixrSEFBSUE7Ozs7b0VBQU0wQixRQUFRRyxNQUFNLEtBQUssc0JBQVEsOERBQUNDO3dEQUFJQyxPQUFNO3dEQUE2QkMsT0FBTTt3REFBS0MsUUFBTzt3REFBS0MsU0FBUTt3REFBWUMsTUFBSzt3REFBT0MsUUFBTzt3REFBZUMsZ0JBQWE7d0RBQUlDLGtCQUFlO3dEQUFRQyxtQkFBZ0I7d0RBQVFDLE9BQU07OzBFQUFnQyw4REFBQ0M7Z0VBQU9DLElBQUc7Z0VBQUtDLElBQUc7Z0VBQUlDLEdBQUU7Ozs7OzswRUFBTSw4REFBQ0M7Z0VBQUtDLEdBQUU7Ozs7OzswRUFBa0IsOERBQUNEO2dFQUFLQyxHQUFFOzs7Ozs7MEVBQWlCLDhEQUFDRDtnRUFBS0MsR0FBRTs7Ozs7Ozs7Ozs7b0VBQXNCO2tFQUMvWSw4REFBQ0M7d0RBQUU3QixXQUFVO2tFQUFrQlEsUUFBUUUsSUFBSTs7Ozs7O2tFQUMzQyw4REFBQ21CO3dEQUFFN0IsV0FBVTtrRUFBZVEsUUFBUXNCLG9CQUFvQjs7Ozs7O2tFQUN4RCw4REFBQ0Q7d0RBQUU3QixXQUFVO2tFQUFlUSxRQUFRdUIsWUFBWTs7Ozs7Ozs7Ozs7OzBEQUVsRCw4REFBQzFCO2dEQUFPTCxXQUFVO2dEQUEwRVMsU0FBU0QsQ0FBQUEsb0JBQUFBLCtCQUFBQSwwQkFBQUEsUUFBU3dCLGNBQWMsY0FBdkJ4Qiw4Q0FBQUEsd0JBQXlCeUIsTUFBTSxJQUFHLElBQUd0QyxhQUFZOztvREFBSTtvREFBS2EsQ0FBQUEsb0JBQUFBLCtCQUFBQSwyQkFBQUEsUUFBU3dCLGNBQWMsY0FBdkJ4QiwrQ0FBQUEseUJBQXlCeUIsTUFBTSxJQUFHLGtCQUFJLDhEQUFDaEQsa0hBQUlBOzs7O29FQUFNO29EQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQWxCL01hOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0N4QjtHQXJHTVY7S0FBQUE7QUF1R04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zZXJ2aWNlLWRldGFpbHMvTWFpbkNvbnRlbnQuanN4PzgyYzciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyBCYWJ5LCBDaGV2cm9uRG93biwgQ2hldnJvblVwLCBQbHVzLCBTZWFyY2ggfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBNYWluQ29udGVudCA9ICh7IHNlbGVjdGVkU2VydmljZSwgc2VydmljZURhdGEgfSkgPT4ge1xuICBjb25zdCBbb3BlbkluZGV4LCBzZXRPcGVuSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcbiAgICBzZXRJc09wZW4odHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVEcm9wZG93biA9IChpbmRleCkgPT4ge1xuICAgIHNldE9wZW5JbmRleChvcGVuSW5kZXggPT09IGluZGV4ID8gbnVsbCA6IGluZGV4KTsgLy8gVG9nZ2xlIGRyb3Bkb3duXG4gIH07XG5cbiAgLy8gY29uc3Qgc2VydmljZUluZm8gPSBzZXJ2aWNlRGF0YVtzZWxlY3RlZFNlcnZpY2VdIHx8IHt9O1xuXG4gIC8vIGNvbnN0IHNlcnZpY2VzID0gW1xuICAvLyAgIHtcbiAgLy8gICAgIHNlcnZpY2VOYW1lOidOYWlsIEFwcGxpY2F0aW9uJyxcbiAgLy8gICAgIG5hbWU6IFwiR2V0IFBvbGlzaFwiLFxuICAvLyAgICAgaWNvbjogPEJhYnkgLz4sXG4gIC8vICAgICBwcmljZTogXCJGcm9tIDEwMDAgKyBHU1RcIixcbiAgLy8gICAgIGJ1dHRvblRleHQ6IFwiQUREXCJcbiAgLy8gICB9LFxuICAvLyAgIHtcbiAgLy8gICAgIHNlcnZpY2VOYW1lOidOYWlsIEFwcGxpY2F0aW9uJyxcbiAgLy8gICAgIG5hbWU6IFwiU3BhIFRyZWF0bWVudFwiLFxuICAvLyAgICAgaWNvbjogPEJhYnkgLz4sICBcbiAgLy8gICAgIHByaWNlOiBcIkZyb20gMTUwMCArIEdTVFwiLFxuICAvLyAgICAgYnV0dG9uVGV4dDogXCJBRERcIlxuICAvLyAgIH0sXG4gIC8vICAge1xuICAvLyAgICAgc2VydmljZU5hbWU6J05haWwgQXBwbGljYXRpb24nLFxuICAvLyAgICAgbmFtZTogXCJIYWlyY3V0XCIsXG4gIC8vICAgICBpY29uOiA8QmFieSAvPiwgIC8vIFJlcGxhY2Ugd2l0aCByZWxldmFudCBpY29ucyBmb3IgZWFjaCBzZXJ2aWNlXG4gIC8vICAgICBwcmljZTogXCJGcm9tIDUwMCArIEdTVFwiLFxuICAvLyAgICAgYnV0dG9uVGV4dDogXCJBRERcIlxuICAvLyAgIH1cbiAgLy8gICAvLyBBZGQgbW9yZSBzZXJ2aWNlcyBhcyBuZWVkZWRcbiAgLy8gXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zLzRcIj5cbiAgICAgIHsvKiA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj57c2VsZWN0ZWRTZXJ2aWNlIH08L2gyPiAgICovfVxuICAgICAge3NlbGVjdGVkU2VydmljZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBiZy13aGl0ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIG14LTIgZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1tZCBwLTJcIj5cbiAgICAgICAgICAgIDxTZWFyY2ggc2l6ZT17MTV9IGNsYXNzTmFtZT1cIm1yLTJcIiAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHNlcnZpY2UuLi5cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXQtMSBteC0yIHNtOmp1c3RpZnktc3RhcnQganVzdGlmeS1iZXR3ZWVuIGdhcC0yXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLW1kIHB4LTEwXCI+IE1lbjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZC1tZCBweC0xMFwiPiBXb21lbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIHtzZWxlY3RlZFNlcnZpY2U/LnNlcnZpY2VzPy5tYXAoKHNlcnZpY2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiIGJvcmRlci1ncmF5LTUwMCBib3JkZXItYi00IGJvcmRlci1iLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHAtMiBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVEcm9wZG93bihpbmRleCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3NlcnZpY2UubmFtZX1cbiAgICAgICAgICAgICAgICAgIHtvcGVuSW5kZXggPT09IGluZGV4ID8gPENoZXZyb25VcCAvPiA6IDxDaGV2cm9uRG93biAvPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BvdmVyZmxvdy1oaWRkZW4gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7b3BlbkluZGV4ID09PSBpbmRleCA/ICdtYXgtaC00MCcgOiAnbWF4LWgtMCd9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlLmdlbmRlciA9PT0gXCJXb21lblwiID8gPEJhYnkgLz4gOiBzZXJ2aWNlLmdlbmRlciA9PT0gXCJNZW5cIiA/IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBjbGFzcz1cImx1Y2lkZSBsdWNpZGUtcGVyc29uLXN0YW5kaW5nXCI+PGNpcmNsZSBjeD1cIjEyXCIgY3k9XCI1XCIgcj1cIjFcIiAvPjxwYXRoIGQ9XCJtOSAyMCAzLTYgMyA2XCIgLz48cGF0aCBkPVwibTYgOCA2IDIgNi0yXCIgLz48cGF0aCBkPVwiTTEyIDEwdjRcIiAvPjwvc3ZnPiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBcIj57c2VydmljZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XVwiPntzZXJ2aWNlLm9uZV9saW5lX2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XVwiPntzZXJ2aWNlLmRpc3BsYXlfcmF0ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtYmx1ZS0yMDAgZm9udC1zZW1pYm9sZCBib3JkZXIgc2hhZG93LW1kIHJvdW5kZWQtbWQgcHgtMiBmbGV4IGdhcC0xXCIgb25DbGljaz17c2VydmljZT8uY3VzdG9taXphdGlvbnM/Lmxlbmd0aCA+IDAgP2hhbmRsZU9wZW46IFwiXCJ9PkFERCB7c2VydmljZT8uY3VzdG9taXphdGlvbnM/Lmxlbmd0aCA+IDAgPyA8UGx1cyAvPiA6IFwiXCJ9IDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPiAgXG4gICAgICAgICAgICAgIDxzdHJvbmc+RGVzY3JpcHRpb246PC9zdHJvbmc+IHtzZXJ2aWNlSW5mby5kZXNjcmlwdGlvbn0gIFxuICAgICAgICAgICAgPC9wPiAgXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+ICBcbiAgICAgICAgICAgICAgPHN0cm9uZz5QcmljZTo8L3N0cm9uZz4ge3NlcnZpY2VJbmZvLnByaWNlfSAgXG4gICAgICAgICAgICA8L3A+ICBcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj4gIFxuICAgICAgICAgICAgICA8c3Ryb25nPkR1cmF0aW9uOjwvc3Ryb25nPiB7c2VydmljZUluZm8uZHVyYXRpb259ICBcbiAgICAgICAgICAgIDwvcD4gICAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRlbnQ7Il0sIm5hbWVzIjpbIkJhYnkiLCJDaGV2cm9uRG93biIsIkNoZXZyb25VcCIsIlBsdXMiLCJTZWFyY2giLCJ1c2VTdGF0ZSIsIk1haW5Db250ZW50Iiwic2VsZWN0ZWRTZXJ2aWNlIiwic2VydmljZURhdGEiLCJvcGVuSW5kZXgiLCJzZXRPcGVuSW5kZXgiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJoYW5kbGVPcGVuIiwiaGFuZGxlQ2xvc2UiLCJ0b2dnbGVEcm9wZG93biIsImluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwic2l6ZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwic2VydmljZXMiLCJtYXAiLCJzZXJ2aWNlIiwib25DbGljayIsIm5hbWUiLCJnZW5kZXIiLCJzdmciLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJzdHJva2UiLCJzdHJva2Utd2lkdGgiLCJzdHJva2UtbGluZWNhcCIsInN0cm9rZS1saW5lam9pbiIsImNsYXNzIiwiY2lyY2xlIiwiY3giLCJjeSIsInIiLCJwYXRoIiwiZCIsInAiLCJvbmVfbGluZV9kZXNjcmlwdGlvbiIsImRpc3BsYXlfcmF0ZSIsImN1c3RvbWl6YXRpb25zIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/service-details/MainContent.jsx\n"));

/***/ })

});