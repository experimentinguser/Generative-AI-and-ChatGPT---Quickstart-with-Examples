"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"./node_modules/openai/dist/index.js\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.REACT_APP_OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"Open API key missing => https://platform.openai.com/account/api-keys\"\n            }\n        });\n    }\n    const input = req.body.input || \"\";\n    if (input.trim().length === 0) {\n        res.status(400).json({\n            error: {\n                message: \"Please enter an input\"\n            }\n        });\n    }\n    try {\n        const completion = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: \"Say this is a test\",\n            temperature: 0,\n            max_tokens: 7\n        });\n        console.log(completion);\n        res.status(200).json({\n            result: \"\"\n        });\n    } catch (e) {\n        res.status(500).json({\n            error: {\n                message: \"An error occured during the request\"\n            }\n        });\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNpRDtBQUVqRCxNQUFNRSxnQkFBZ0IsSUFBSUYsaURBQWFBLENBQUM7SUFDdENHLFFBQVFDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0Msd0JBQXdCO0FBQzlDO0FBRUEsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsNkJBQWUsMENBQWdCTSxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNyQyxJQUFHLENBQUNQLGNBQWNDLE1BQU0sRUFBRTtRQUN0Qk0sSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNqQkMsT0FBTztnQkFDSEMsU0FBUztZQUNiO1FBQ0o7SUFDSixDQUFDO0lBQ0QsTUFBTUMsUUFBUU4sSUFBSU8sSUFBSSxDQUFDRCxLQUFLLElBQUk7SUFDaEMsSUFBSUEsTUFBTUUsSUFBSSxHQUFHQyxNQUFNLEtBQUssR0FBRztRQUMzQlIsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNqQkMsT0FBTztnQkFDSEMsU0FBUztZQUNiO1FBQ0o7SUFDSixDQUFDO0lBRUQsSUFBSTtRQUNBLE1BQU1LLGFBQWEsTUFBTVgsT0FBT1ksZ0JBQWdCLENBQUM7WUFDN0NDLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxhQUFhO1lBQ2JDLFlBQVk7UUFDZDtRQUNBQyxRQUFRQyxHQUFHLENBQUNQO1FBQ1pULElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRWUsUUFBUTtRQUFFO0lBQ3ZDLEVBQUUsT0FBT0MsR0FBRztRQUNSbEIsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNqQkMsT0FBTztnQkFDSEMsU0FBUztZQUNiO1FBQ0o7SUFDSjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL2dlbmVyYXRlLmpzPzYyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCJcblxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfT1BFTkFJX0FQSV9LRVksXG59KTtcblxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gICAgaWYoIWNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJPcGVuIEFQSSBrZXkgbWlzc2luZyA9PiBodHRwczovL3BsYXRmb3JtLm9wZW5haS5jb20vYWNjb3VudC9hcGkta2V5c1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGNvbnN0IGlucHV0ID0gcmVxLmJvZHkuaW5wdXQgfHwgXCJcIlxuICAgIGlmIChpbnB1dC50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcbiAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgYW4gaW5wdXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KSBcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xuICAgICAgICAgICAgbW9kZWw6IFwidGV4dC1kYXZpbmNpLTAwM1wiLFxuICAgICAgICAgICAgcHJvbXB0OiBcIlNheSB0aGlzIGlzIGEgdGVzdFwiLFxuICAgICAgICAgICAgdGVtcGVyYXR1cmU6IDAsXG4gICAgICAgICAgICBtYXhfdG9rZW5zOiA3LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXBsZXRpb24pXG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQ6IFwiXCJ9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VyZWQgZHVyaW5nIHRoZSByZXF1ZXN0XCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIFxuICAgIH1cbn0iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX09QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsImlucHV0IiwiYm9keSIsInRyaW0iLCJsZW5ndGgiLCJjb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwicHJvbXB0IiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/generate.js\n"));

/***/ })

});