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

/***/ "(app-pages-browser)/./src/app/service-details/Sidebar.jsx":
/*!*********************************************!*\
  !*** ./src/app/service-details/Sidebar.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ServiceData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServiceData */ \"(app-pages-browser)/./src/app/service-details/ServiceData.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Sidebar = (param)=>{\n    let { onSelect } = param;\n    _s();\n    // const [services, setServices] = useState(serviceData.data.sub_categories)\n    const fetchServices = async ()=>{\n        try {\n            const res = await (0,axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n                method: \"post\",\n                baseURL: \"\".concat(\"https://ts1.luzo.app\", \"/api/v1\"),\n                url: \"/salon/subCategories\",\n                params: {\n                    main_category_id: 18,\n                    salon_id: 811\n                }\n            });\n            setServices(res.data.sub_categories);\n        } catch (error) {\n            console.log(error);\n            alert(\"Could not fetch services\");\n        }\n    };\n    // const services = [\n    //   { name: 'Hair Colour', count: 6 },\n    //   { name: 'Nail Bar', count: 2 },\n    //   { name: 'Face', count: 3 },\n    //   { name: 'Treatments', count: 2 },\n    //   { name: 'Balayage', count: 2 },\n    //   { name: 'Ombre', count: 2 },\n    //   { name: 'Massage & Spa', count: 2 },\n    //   { name: 'Manicure & Pedicure', count: 2 },\n    //   { name: 'Waxing, Bleaching & Threading', count: 2 },\n    // ];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchServices();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/4 bg-gray-100 border-r-4 border-r-gray-200\",\n        children: services.map((service)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-2 flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>onSelect(service),\n                    className: \"flex text-[12px] text-center flex-col items-center w-full rounded hover:bg-gray-200\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: \"/img/icon.webp\",\n                            alt: \"logo icon\",\n                            width: \"50\",\n                            height: \"50\",\n                            className: \"rounded-full\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\Sidebar.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" text-[12px] text-center sm:text-[18px]\",\n                            children: [\n                                service.name,\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"sm:text-[18px] text-center\",\n                                    children: [\n                                        \"(\",\n                                        service.services.length,\n                                        \")\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\Sidebar.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 85\n                                }, undefined),\n                                \"  \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\Sidebar.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\Sidebar.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined)\n            }, service.name, false, {\n                fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\Sidebar.jsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\Programming\\\\UnderWork\\\\luzo-next-latest-main\\\\src\\\\app\\\\service-details\\\\Sidebar.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2VydmljZS1kZXRhaWxzL1NpZGViYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNLO0FBQ2E7QUFDQTtBQUU1QyxNQUFNSyxVQUFVO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUMzQiw0RUFBNEU7SUFFNUUsTUFBTUMsZ0JBQWdCO1FBQ3BCLElBQUk7WUFDRixNQUFNQyxNQUFNLE1BQU1SLGlEQUFLQSxDQUFDO2dCQUN0QlMsUUFBUTtnQkFDUkMsU0FBUyxHQUFxQyxPQUFsQ0Msc0JBQWlDLEVBQUM7Z0JBQzlDRyxLQUFLO2dCQUNMQyxRQUFRO29CQUNOQyxrQkFBa0I7b0JBQ2xCQyxVQUFVO2dCQUNaO1lBQ0Y7WUFDQUMsWUFBWVYsSUFBSVcsSUFBSSxDQUFDQyxjQUFjO1FBQ3JDLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pHLE1BQU07UUFDUjtJQUNGO0lBQ0EscUJBQXFCO0lBQ3JCLHVDQUF1QztJQUN2QyxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLHNDQUFzQztJQUN0QyxvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLHlDQUF5QztJQUN6QywrQ0FBK0M7SUFDL0MseURBQXlEO0lBQ3pELEtBQUs7SUFFTHRCLGdEQUFTQSxDQUFDO1FBQ1JLO0lBQ0YsR0FBRyxFQUFFO0lBR0wscUJBQ0UsOERBQUNrQjtRQUFJQyxXQUFVO2tCQUNaQyxTQUFTQyxHQUFHLENBQUMsQ0FBQ0Msd0JBQ2IsOERBQUNKO2dCQUF1QkMsV0FBVTswQkFDaEMsNEVBQUNJO29CQUNDQyxTQUFTLElBQU16QixTQUFTdUI7b0JBQ3hCSCxXQUFVOztzQ0FFViw4REFBQ3pCLGtEQUFLQTs0QkFBQytCLEtBQUk7NEJBQWlCQyxLQUFJOzRCQUFZQyxPQUFNOzRCQUFLQyxRQUFPOzRCQUFLVCxXQUFVOzs7Ozs7c0NBRTdFLDhEQUFDRDs0QkFBSUMsV0FBVTs7Z0NBQTJDRyxRQUFRTyxJQUFJO2dDQUFDOzhDQUFDLDhEQUFDQztvQ0FBS1gsV0FBVTs7d0NBQTZCO3dDQUFFRyxRQUFRRixRQUFRLENBQUNXLE1BQU07d0NBQUM7Ozs7Ozs7Z0NBQVE7Ozs7Ozs7Ozs7Ozs7ZUFQakpULFFBQVFPLElBQUk7Ozs7Ozs7Ozs7QUFhOUI7R0FyRE0vQjtLQUFBQTtBQXVETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NlcnZpY2UtZGV0YWlscy9TaWRlYmFyLmpzeD80OWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc2VydmljZURhdGEgfSBmcm9tIFwiLi9TZXJ2aWNlRGF0YVwiO1xuXG5jb25zdCBTaWRlYmFyID0gKHsgb25TZWxlY3QgfSkgPT4ge1xuICAvLyBjb25zdCBbc2VydmljZXMsIHNldFNlcnZpY2VzXSA9IHVzZVN0YXRlKHNlcnZpY2VEYXRhLmRhdGEuc3ViX2NhdGVnb3JpZXMpXG5cbiAgY29uc3QgZmV0Y2hTZXJ2aWNlcyA9IGFzeW5jKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGJhc2VVUkw6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1RFU1RfSE9TVH0vYXBpL3YxYCxcbiAgICAgICAgdXJsOiBcIi9zYWxvbi9zdWJDYXRlZ29yaWVzXCIsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIG1haW5fY2F0ZWdvcnlfaWQ6IDE4LFxuICAgICAgICAgIHNhbG9uX2lkOiA4MTFcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHNldFNlcnZpY2VzKHJlcy5kYXRhLnN1Yl9jYXRlZ29yaWVzKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICBhbGVydChcIkNvdWxkIG5vdCBmZXRjaCBzZXJ2aWNlc1wiKVxuICAgIH1cbiAgfVxuICAvLyBjb25zdCBzZXJ2aWNlcyA9IFtcbiAgLy8gICB7IG5hbWU6ICdIYWlyIENvbG91cicsIGNvdW50OiA2IH0sXG4gIC8vICAgeyBuYW1lOiAnTmFpbCBCYXInLCBjb3VudDogMiB9LFxuICAvLyAgIHsgbmFtZTogJ0ZhY2UnLCBjb3VudDogMyB9LFxuICAvLyAgIHsgbmFtZTogJ1RyZWF0bWVudHMnLCBjb3VudDogMiB9LFxuICAvLyAgIHsgbmFtZTogJ0JhbGF5YWdlJywgY291bnQ6IDIgfSxcbiAgLy8gICB7IG5hbWU6ICdPbWJyZScsIGNvdW50OiAyIH0sXG4gIC8vICAgeyBuYW1lOiAnTWFzc2FnZSAmIFNwYScsIGNvdW50OiAyIH0sXG4gIC8vICAgeyBuYW1lOiAnTWFuaWN1cmUgJiBQZWRpY3VyZScsIGNvdW50OiAyIH0sXG4gIC8vICAgeyBuYW1lOiAnV2F4aW5nLCBCbGVhY2hpbmcgJiBUaHJlYWRpbmcnLCBjb3VudDogMiB9LFxuICAvLyBdO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGZldGNoU2VydmljZXMoKVxuICB9LCBbXSlcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNCBiZy1ncmF5LTEwMCBib3JkZXItci00IGJvcmRlci1yLWdyYXktMjAwXCI+XG4gICAgICB7c2VydmljZXMubWFwKChzZXJ2aWNlKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtzZXJ2aWNlLm5hbWV9IGNsYXNzTmFtZT1cIm1iLTIgZmxleFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0KHNlcnZpY2UpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LVsxMnB4XSB0ZXh0LWNlbnRlciBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdy1mdWxsIHJvdW5kZWQgaG92ZXI6YmctZ3JheS0yMDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2ljb24ud2VicFwiIGFsdD1cImxvZ28gaWNvblwiIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtWzEycHhdIHRleHQtY2VudGVyIHNtOnRleHQtWzE4cHhdXCI+e3NlcnZpY2UubmFtZX0gPHNwYW4gY2xhc3NOYW1lPVwic206dGV4dC1bMThweF0gdGV4dC1jZW50ZXJcIj4oe3NlcnZpY2Uuc2VydmljZXMubGVuZ3RofSk8L3NwYW4+ICA8L2Rpdj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7Il0sIm5hbWVzIjpbImF4aW9zIiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInNlcnZpY2VEYXRhIiwiU2lkZWJhciIsIm9uU2VsZWN0IiwiZmV0Y2hTZXJ2aWNlcyIsInJlcyIsIm1ldGhvZCIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVEVTVF9IT1NUIiwidXJsIiwicGFyYW1zIiwibWFpbl9jYXRlZ29yeV9pZCIsInNhbG9uX2lkIiwic2V0U2VydmljZXMiLCJkYXRhIiwic3ViX2NhdGVnb3JpZXMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsInNlcnZpY2VzIiwibWFwIiwic2VydmljZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm5hbWUiLCJzcGFuIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/service-details/Sidebar.jsx\n"));

/***/ })

});