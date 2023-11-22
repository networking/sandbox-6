"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["signin"],{

/***/ "./assets/signin.js":
/*!**************************!*\
  !*** ./assets/signin.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client.js */ "./assets/client.js");
/* harmony import */ var _simplewebauthn_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @simplewebauthn/browser */ "./node_modules/@simplewebauthn/browser/dist/bundle/index.js");





if (window.PublicKeyCredential && PublicKeyCredential.isConditionalMediationAvailable) {
  try {
    // Is conditional UI available in this browser?
    var cma = await PublicKeyCredential.isConditionalMediationAvailable();
    if (cma) {
      // If conditional UI is available, invoke the authenticate() function.
      var user = await (0,_client_js__WEBPACK_IMPORTED_MODULE_3__.authenticate)();
      if (user) {
        location.href = "/admin/dashboard";
      } else {
        throw new Error("User not found.");
      }
    }
  } catch (e) {
    console.log(e);

    // A NotAllowedError indicates that the user canceled the operation.
    if (e.name !== "NotAllowedError") {
      alert(e.message);
    }
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_a-constructor_js-node_modules_core-js_modules_es_array-91ccda","vendors-node_modules_core-js_modules_es_array_push_js-node_modules_core-js_modules_es_array_r-38fc4e","assets_client_js"], () => (__webpack_exec__("./assets/signin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcUI7QUFFdUY7QUFHNUcsSUFDSUcsTUFBTSxDQUFDQyxtQkFBbUIsSUFDMUJBLG1CQUFtQixDQUFDQywrQkFBK0IsRUFDckQ7RUFDRSxJQUFJO0lBQ0E7SUFDQSxJQUFNQyxHQUFHLEdBQUcsTUFBTUYsbUJBQW1CLENBQUNDLCtCQUErQixDQUFDLENBQUM7SUFHdkUsSUFBSUMsR0FBRyxFQUFFO01BRUw7TUFDQSxJQUFNQyxJQUFJLEdBQUcsTUFBTVAsd0RBQVksQ0FBQyxDQUFDO01BRWpDLElBQUlPLElBQUksRUFBRTtRQUNOQyxRQUFRLENBQUNDLElBQUksR0FBRyxrQkFBa0I7TUFDdEMsQ0FBQyxNQUFNO1FBQ0gsTUFBTSxJQUFJQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7TUFDdEM7SUFDSjtFQUNKLENBQUMsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7SUFFUkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUMsQ0FBQzs7SUFFZDtJQUNBLElBQUlBLENBQUMsQ0FBQ0csSUFBSSxLQUFLLGlCQUFpQixFQUFFO01BQzlCQyxLQUFLLENBQUNKLENBQUMsQ0FBQ0ssT0FBTyxDQUFDO0lBQ3BCO0VBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9zaWduaW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBhdXRoZW50aWNhdGVcbn0gZnJvbSBcIi4vY2xpZW50LmpzXCI7XG5cbmltcG9ydCB7IGJyb3dzZXJTdXBwb3J0c1dlYkF1dGhuQXV0b2ZpbGwsIHBsYXRmb3JtQXV0aGVudGljYXRvcklzQXZhaWxhYmxlIH0gZnJvbSAnQHNpbXBsZXdlYmF1dGhuL2Jyb3dzZXInO1xuXG5cbmlmIChcbiAgICB3aW5kb3cuUHVibGljS2V5Q3JlZGVudGlhbCAmJlxuICAgIFB1YmxpY0tleUNyZWRlbnRpYWwuaXNDb25kaXRpb25hbE1lZGlhdGlvbkF2YWlsYWJsZVxuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSXMgY29uZGl0aW9uYWwgVUkgYXZhaWxhYmxlIGluIHRoaXMgYnJvd3Nlcj9cbiAgICAgICAgY29uc3QgY21hID0gYXdhaXQgUHVibGljS2V5Q3JlZGVudGlhbC5pc0NvbmRpdGlvbmFsTWVkaWF0aW9uQXZhaWxhYmxlKCk7XG5cblxuICAgICAgICBpZiAoY21hKSB7XG5cbiAgICAgICAgICAgIC8vIElmIGNvbmRpdGlvbmFsIFVJIGlzIGF2YWlsYWJsZSwgaW52b2tlIHRoZSBhdXRoZW50aWNhdGUoKSBmdW5jdGlvbi5cbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdGUoKTtcblxuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvYWRtaW4vZGFzaGJvYXJkXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXIgbm90IGZvdW5kLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhlKVxuXG4gICAgICAgIC8vIEEgTm90QWxsb3dlZEVycm9yIGluZGljYXRlcyB0aGF0IHRoZSB1c2VyIGNhbmNlbGVkIHRoZSBvcGVyYXRpb24uXG4gICAgICAgIGlmIChlLm5hbWUgIT09IFwiTm90QWxsb3dlZEVycm9yXCIpIHtcbiAgICAgICAgICAgIGFsZXJ0KGUubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbImF1dGhlbnRpY2F0ZSIsImJyb3dzZXJTdXBwb3J0c1dlYkF1dGhuQXV0b2ZpbGwiLCJwbGF0Zm9ybUF1dGhlbnRpY2F0b3JJc0F2YWlsYWJsZSIsIndpbmRvdyIsIlB1YmxpY0tleUNyZWRlbnRpYWwiLCJpc0NvbmRpdGlvbmFsTWVkaWF0aW9uQXZhaWxhYmxlIiwiY21hIiwidXNlciIsImxvY2F0aW9uIiwiaHJlZiIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiYWxlcnQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==