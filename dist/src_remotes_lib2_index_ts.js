"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_example_app2"] = self["webpackChunk_example_app2"] || []).push([["src_remotes_lib2_index_ts"],{

/***/ "./src/remotes/lib2/constants/index.ts":
/*!*********************************************!*\
  !*** ./src/remotes/lib2/constants/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserRoles\": () => (/* reexport safe */ _roles__WEBPACK_IMPORTED_MODULE_0__.UserRoles),\n/* harmony export */   \"routes\": () => (/* reexport safe */ _routes__WEBPACK_IMPORTED_MODULE_1__.routes),\n/* harmony export */   \"sphere\": () => (/* reexport safe */ _sphere__WEBPACK_IMPORTED_MODULE_2__.sphere),\n/* harmony export */   \"statusCodes\": () => (/* reexport safe */ _statusCodes__WEBPACK_IMPORTED_MODULE_3__.statusCodes)\n/* harmony export */ });\n/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles */ \"./src/remotes/lib2/constants/roles.ts\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/remotes/lib2/constants/routes.ts\");\n/* harmony import */ var _sphere__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sphere */ \"./src/remotes/lib2/constants/sphere.ts\");\n/* harmony import */ var _statusCodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statusCodes */ \"./src/remotes/lib2/constants/statusCodes.ts\");\n\n\n\n\n\n//# sourceURL=webpack://@example/app2/./src/remotes/lib2/constants/index.ts?");

/***/ }),

/***/ "./src/remotes/lib2/constants/roles.ts":
/*!*********************************************!*\
  !*** ./src/remotes/lib2/constants/roles.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserRoles\": () => (/* binding */ UserRoles)\n/* harmony export */ });\nlet UserRoles;\n\n(function (UserRoles) {\n  UserRoles[\"admin\"] = \"admin\";\n  UserRoles[\"employee\"] = \"employee\";\n  UserRoles[\"editor\"] = \"editor\";\n  UserRoles[\"user\"] = \"user\";\n  UserRoles[\"superAdmin\"] = \"superAdmin\";\n})(UserRoles || (UserRoles = {}));\n\n//# sourceURL=webpack://@example/app2/./src/remotes/lib2/constants/roles.ts?");

/***/ }),

/***/ "./src/remotes/lib2/constants/routes.ts":
/*!**********************************************!*\
  !*** ./src/remotes/lib2/constants/routes.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\nconst routes = {\n  main: '/',\n  auth: '/auth',\n  registration: '/registration',\n  restorePassword: '/restore-password',\n  organizationRegistration: '/organization-registration',\n  createPassword: '/create-password',\n  organizationProfile: '/organization-profile',\n  organizationProfileEmployees: 'employees',\n  organizationProfileEmployeesForm: 'employees-form',\n  organizationProfileAdvertisingInformation: 'advertising-information',\n  organizationProfileDataPage: 'organization-data',\n  organizationProfilePaymentDetails: 'payment-details',\n  userProfileInfo: '/user-profile/info',\n  userProfilePassword: '/user-profile/password',\n  loyaltyModule: '/loyalty-promo/*',\n  sbpayModule: '/sbpay-payment/*',\n  invitation: '/invitation',\n  tradingPoints: '/trading-points',\n  tradingPointsDiscountsForm: '/trading-points-discounts-form',\n  tradingPointsDiscountPaymentForm: '/trading-points-discount-payment-form',\n  demo: '/demo-qr'\n};\n\n//# sourceURL=webpack://@example/app2/./src/remotes/lib2/constants/routes.ts?");

/***/ }),

/***/ "./src/remotes/lib2/constants/sphere.ts":
/*!**********************************************!*\
  !*** ./src/remotes/lib2/constants/sphere.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sphere\": () => (/* binding */ sphere)\n/* harmony export */ });\nconst sphere = [{\n  id: 'management',\n  label: 'Менеджмент',\n  value: 'management'\n}, {\n  id: 'sales',\n  label: 'Продажи',\n  value: 'sales'\n}, {\n  id: 'marketingAndAdvertising',\n  label: 'Маркетинг и реклама',\n  value: 'marketingAndAdvertising'\n}, {\n  id: 'financeAndAccounting',\n  label: 'Финансы и бухгалтерия',\n  value: 'financeAndAccounting'\n}, {\n  id: 'it',\n  label: 'Информационные технологии',\n  value: 'it'\n}, {\n  id: 'other',\n  label: 'Другая',\n  value: 'other'\n}, {\n  id: 'initial',\n  label: 'Не указана',\n  value: ''\n}];\n\n//# sourceURL=webpack://@example/app2/./src/remotes/lib2/constants/sphere.ts?");

/***/ }),

/***/ "./src/remotes/lib2/constants/statusCodes.ts":
/*!***************************************************!*\
  !*** ./src/remotes/lib2/constants/statusCodes.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"statusCodes\": () => (/* binding */ statusCodes)\n/* harmony export */ });\nconst statusCodes = {\n  wrongData: 409,\n  maxAttempts: 429,\n  unauthorized: 401\n};\n\n//# sourceURL=webpack://@example/app2/./src/remotes/lib2/constants/statusCodes.ts?");

/***/ }),

/***/ "./src/remotes/lib2/hooks/index.ts":
/*!*****************************************!*\
  !*** ./src/remotes/lib2/hooks/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useBreakPoint\": () => (/* reexport safe */ _useBreakPoint__WEBPACK_IMPORTED_MODULE_0__.useBreakPoint)\n/* harmony export */ });\n/* harmony import */ var _useBreakPoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useBreakPoint */ \"./src/remotes/lib2/hooks/useBreakPoint.tsx\");\n\n\n//# sourceURL=webpack://@example/app2/./src/remotes/lib2/hooks/index.ts?");

/***/ }),

/***/ "./src/remotes/lib2/hooks/useBreakPoint.tsx":
/*!**************************************************!*\
  !*** ./src/remotes/lib2/hooks/useBreakPoint.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useBreakPoint\": () => (/* binding */ useBreakPoint)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?d8d4\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useBreakPoint = (breakPoint = 0) => {\n  const [isMobile, setIsMobile] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(breakPoint >= window.innerWidth);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const handler = () => setIsMobile(breakPoint >= window.innerWidth);\n\n    window.addEventListener('resize', handler);\n    return () => window.removeEventListener('resize', handler);\n  }, [breakPoint]);\n  return isMobile;\n};\n\n//# sourceURL=webpack://@example/app2/./src/remotes/lib2/hooks/useBreakPoint.tsx?");

/***/ }),

/***/ "./src/remotes/lib2/index.ts":
/*!***********************************!*\
  !*** ./src/remotes/lib2/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserRoles\": () => (/* reexport safe */ _constants_index__WEBPACK_IMPORTED_MODULE_0__.UserRoles),\n/* harmony export */   \"routes\": () => (/* reexport safe */ _constants_index__WEBPACK_IMPORTED_MODULE_0__.routes),\n/* harmony export */   \"sphere\": () => (/* reexport safe */ _constants_index__WEBPACK_IMPORTED_MODULE_0__.sphere),\n/* harmony export */   \"statusCodes\": () => (/* reexport safe */ _constants_index__WEBPACK_IMPORTED_MODULE_0__.statusCodes),\n/* harmony export */   \"useBreakPoint\": () => (/* reexport safe */ _hooks_index__WEBPACK_IMPORTED_MODULE_1__.useBreakPoint)\n/* harmony export */ });\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/index */ \"./src/remotes/lib2/constants/index.ts\");\n/* harmony import */ var _hooks_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/index */ \"./src/remotes/lib2/hooks/index.ts\");\n\n\n\n//# sourceURL=webpack://@example/app2/./src/remotes/lib2/index.ts?");

/***/ })

}]);