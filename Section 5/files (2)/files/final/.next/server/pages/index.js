/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"index_main__3wZvj\",\n\t\"icon\": \"index_icon__CgRrC\",\n\t\"result\": \"index_result__66e57\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzPzQ4MzYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcImluZGV4X21haW5fXzN3WnZqXCIsXG5cdFwiaWNvblwiOiBcImluZGV4X2ljb25fX0NnUnJDXCIsXG5cdFwicmVzdWx0XCI6IFwiaW5kZXhfcmVzdWx0X182NmU1N1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Loading = ({ isVisible  })=>isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"mt-4 text-center\",\n        children: \"Loading ...\"\n    }, void 0, false, {\n        fileName: \"/Users/sandy/Desktop/OPENAPI/2-image-generation/final/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 16\n    }, undefined);\nconst Result = ({ image , isVisible  })=>{\n    return Boolean(isVisible && image) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"d-flex justify-content-center my-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: \"h-350 w-350 rounded\",\n            src: image,\n            width: \"350\",\n            height: \"350\"\n        }, void 0, false, {\n            fileName: \"/Users/sandy/Desktop/OPENAPI/2-image-generation/final/pages/index.js\",\n            lineNumber: 12,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/sandy/Desktop/OPENAPI/2-image-generation/final/pages/index.js\",\n        lineNumber: 11,\n        columnNumber: 7\n    }, undefined);\n};\nfunction Home() {\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const [isPending, loading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    async function generate() {\n        const response = await fetch(\"/api/generate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                input\n            })\n        });\n        const data = await response.json();\n        if (response.status !== 200) {\n            throw data.error || new Error(`Request failed with status ${response.status}`);\n        }\n        return {\n            result: data.image_url\n        };\n    }\n    async function onSubmit(event) {\n        event.preventDefault();\n        loading(true);\n        try {\n            generate(input).then(setImage).then(()=>{\n                ref.current.value = null;\n                loading(false);\n                setInput(\"\");\n            });\n        } catch (error) {\n            console.error(error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"OpenAI-Image generator\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandy/Desktop/OPENAPI/2-image-generation/final/pages/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandy/Desktop/OPENAPI/2-image-generation/final/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\",\n                        rel: \"stylesheet\",\n                        integrity: \"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandy/Desktop/OPENAPI/2-image-generation/final/pages/index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://cdn.tailwindcss.com\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandy/Desktop/OPENAPI/2-image-generation/final/pages/index.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandy/Desktop/OPENAPI/2-image-generation/final/pages/index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"\\uD83D\\uDDBC️ - Image generator\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandy/Desktop/OPENAPI/2-image-generation/final/pages/index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ref: ref,\n                                type: \"text\",\n                                placeholder: \"Enter text\",\n                                onChange: (e)=>setInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/sandy/Desktop/OPENAPI/2-image-generation/final/pages/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Generate image\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandy/Desktop/OPENAPI/2-image-generation/final/pages/index.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandy/Desktop/OPENAPI/2-image-generation/final/pages/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandy/Desktop/OPENAPI/2-image-generation/final/pages/index.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loading, {\n                isVisible: isPending,\n                input: input\n            }, void 0, false, {\n                fileName: \"/Users/sandy/Desktop/OPENAPI/2-image-generation/final/pages/index.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Result, {\n                isVisible: !isPending,\n                image: image?.result\n            }, void 0, false, {\n                fileName: \"/Users/sandy/Desktop/OPENAPI/2-image-generation/final/pages/index.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sandy/Desktop/OPENAPI/2-image-generation/final/pages/index.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1k7QUFDRDtBQUV4QyxNQUFNSSxVQUFVLENBQUMsRUFBRUMsVUFBUyxFQUFFLEdBQzVCQSwyQkFBYSw4REFBQ0M7UUFBR0MsV0FBVTtrQkFBbUI7Ozs7OztBQUVoRCxNQUFNQyxTQUFTLENBQUMsRUFBRUMsTUFBSyxFQUFFSixVQUFTLEVBQUUsR0FBSztJQUN2QyxPQUNFSyxRQUFRTCxhQUFhSSx3QkFDbkIsOERBQUNFO1FBQUlKLFdBQVU7a0JBQ2IsNEVBQUNLO1lBQ0NMLFdBQVU7WUFDVk0sS0FBS0o7WUFDTEssT0FBTTtZQUNOQyxRQUFPOzs7Ozs7Ozs7OztBQUtqQjtBQUNlLFNBQVNDLE9BQU87SUFDN0IsTUFBTUMsTUFBTWhCLDZDQUFNQTtJQUNsQixNQUFNLENBQUNpQixXQUFXQyxRQUFRLEdBQUdqQiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzNDLE1BQU0sQ0FBQ2tCLE9BQU9DLFNBQVMsR0FBR25CLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sT0FBT2EsU0FBUyxHQUFHcEIsK0NBQVFBLENBQUMsSUFBSTtJQUV2QyxlQUFlcUIsV0FBVztRQUN4QixNQUFNQyxXQUFXLE1BQU1DLE1BQU0saUJBQWlCO1lBQzVDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRVY7WUFBTTtRQUMvQjtRQUVBLE1BQU1XLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtRQUNoQyxJQUFJUixTQUFTUyxNQUFNLEtBQUssS0FBSztZQUMzQixNQUNFRixLQUFLRyxLQUFLLElBQUksSUFBSUMsTUFBTSxDQUFDLDJCQUEyQixFQUFFWCxTQUFTUyxNQUFNLENBQUMsQ0FBQyxFQUN2RTtRQUNKLENBQUM7UUFDRCxPQUFPO1lBQUVHLFFBQVFMLEtBQUtNLFNBQVM7UUFBQztJQUNsQztJQUVBLGVBQWVDLFNBQVNDLEtBQUssRUFBRTtRQUM3QkEsTUFBTUMsY0FBYztRQUNwQnJCLFFBQVEsSUFBSTtRQUNaLElBQUk7WUFFRkksU0FBU0gsT0FDTnFCLElBQUksQ0FBQ25CLFVBQ0xtQixJQUFJLENBQUMsSUFBTTtnQkFDVnhCLElBQUl5QixPQUFPLENBQUNDLEtBQUssR0FBRyxJQUFJO2dCQUN4QnhCLFFBQVEsS0FBSztnQkFDYkUsU0FBUztZQUNYO1FBQ0osRUFBRSxPQUFPYSxPQUFPO1lBQ2RVLFFBQVFWLEtBQUssQ0FBQ0E7UUFDaEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDdkI7OzBCQUNDLDhEQUFDWCxrREFBSUE7O2tDQUNILDhEQUFDNkM7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7OztrQ0FDdEIsOERBQUNGO3dCQUNDRSxNQUFLO3dCQUNMRCxLQUFJO3dCQUNKRSxXQUFVO3dCQUNWQyxhQUFZOzs7Ozs7a0NBRWQsOERBQUNDO3dCQUFPdEMsS0FBSTs7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDdUM7Z0JBQUs3QyxXQUFXSiwrREFBVzs7a0NBQzFCLDhEQUFDa0Q7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7d0JBQUtoQixVQUFVQTs7MENBQ2QsOERBQUNsQjtnQ0FDQ0gsS0FBS0E7Z0NBQ0xzQyxNQUFLO2dDQUNMQyxhQUFZO2dDQUNaQyxVQUFVLENBQUNDLElBQU1yQyxTQUFTcUMsRUFBRUMsTUFBTSxDQUFDaEIsS0FBSzs7Ozs7OzBDQUUxQyw4REFBQ3ZCO2dDQUFNbUMsTUFBSztnQ0FBU1osT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUcvQiw4REFBQ3ZDO2dCQUFRQyxXQUFXYTtnQkFBV0UsT0FBT0E7Ozs7OzswQkFDdEMsOERBQUNaO2dCQUFPSCxXQUFXLENBQUNhO2dCQUFXVCxPQUFPQSxPQUFPMkI7Ozs7Ozs7Ozs7OztBQUduRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLXF1aWNrc3RhcnQtbm9kZS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IExvYWRpbmcgPSAoeyBpc1Zpc2libGUgfSkgPT5cbiAgaXNWaXNpYmxlICYmIDxoMiBjbGFzc05hbWU9XCJtdC00IHRleHQtY2VudGVyXCI+TG9hZGluZyAuLi48L2gyPjtcblxuY29uc3QgUmVzdWx0ID0gKHsgaW1hZ2UsIGlzVmlzaWJsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgQm9vbGVhbihpc1Zpc2libGUgJiYgaW1hZ2UpICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXktMTBcIiA+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTM1MCB3LTM1MCByb3VuZGVkXCJcbiAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgIHdpZHRoPVwiMzUwXCJcbiAgICAgICAgICBoZWlnaHQ9XCIzNTBcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBbaXNQZW5kaW5nLCBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlucHV0IH0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgIHRocm93IChcbiAgICAgICAgZGF0YS5lcnJvciB8fCBuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4geyByZXN1bHQ6IGRhdGEuaW1hZ2VfdXJsIH07XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICBcbiAgICAgIGdlbmVyYXRlKGlucHV0KVxuICAgICAgICAudGhlbihzZXRJbWFnZSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlZi5jdXJyZW50LnZhbHVlID0gbnVsbDtcbiAgICAgICAgICBsb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICBzZXRJbnB1dChcIlwiKTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+T3BlbkFJLUltYWdlIGdlbmVyYXRvcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4xLjMvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC0xQm1FNGtXQnE3OGlZaEZsZHZLdWhmVEFVNmF1VTh0VDk0V3JIZnRqRGJyQ0VYU1Uxb0JvcXlsMlF2WjZqSVczXCJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4udGFpbHdpbmRjc3MuY29tXCI+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDM+8J+WvO+4jyAtIEltYWdlIGdlbmVyYXRvcjwvaDM+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGV4dFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHZW5lcmF0ZSBpbWFnZVwiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxMb2FkaW5nIGlzVmlzaWJsZT17aXNQZW5kaW5nfSBpbnB1dD17aW5wdXR9IC8+XG4gICAgICA8UmVzdWx0IGlzVmlzaWJsZT17IWlzUGVuZGluZ30gaW1hZ2U9e2ltYWdlPy5yZXN1bHR9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVJlZiIsInVzZVN0YXRlIiwic3R5bGVzIiwiTG9hZGluZyIsImlzVmlzaWJsZSIsImgyIiwiY2xhc3NOYW1lIiwiUmVzdWx0IiwiaW1hZ2UiLCJCb29sZWFuIiwiZGl2IiwiaW1nIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJIb21lIiwicmVmIiwiaXNQZW5kaW5nIiwibG9hZGluZyIsImlucHV0Iiwic2V0SW5wdXQiLCJzZXRJbWFnZSIsImdlbmVyYXRlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJFcnJvciIsInJlc3VsdCIsImltYWdlX3VybCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRoZW4iLCJjdXJyZW50IiwidmFsdWUiLCJjb25zb2xlIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImludGVncml0eSIsImNyb3Nzb3JpZ2luIiwic2NyaXB0IiwibWFpbiIsImgzIiwiZm9ybSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();