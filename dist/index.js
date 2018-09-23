(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/maybe/dist/index.js":
/*!******************************************!*\
  !*** ./node_modules/maybe/dist/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap\r\n/******/ \t// The module cache\r\n/******/ \tvar installedModules = {};\r\n/******/\r\n/******/ \t// The require function\r\n/******/ \tfunction __webpack_require__(moduleId) {\r\n/******/\r\n/******/ \t\t// Check if module is in cache\r\n/******/ \t\tif(installedModules[moduleId]) {\r\n/******/ \t\t\treturn installedModules[moduleId].exports;\r\n/******/ \t\t}\r\n/******/ \t\t// Create a new module (and put it into the cache)\r\n/******/ \t\tvar module = installedModules[moduleId] = {\r\n/******/ \t\t\ti: moduleId,\r\n/******/ \t\t\tl: false,\r\n/******/ \t\t\texports: {}\r\n/******/ \t\t};\r\n/******/\r\n/******/ \t\t// Execute the module function\r\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\r\n/******/\r\n/******/ \t\t// Flag the module as loaded\r\n/******/ \t\tmodule.l = true;\r\n/******/\r\n/******/ \t\t// Return the exports of the module\r\n/******/ \t\treturn module.exports;\r\n/******/ \t}\r\n/******/\r\n/******/\r\n/******/ \t// expose the modules object (__webpack_modules__)\r\n/******/ \t__webpack_require__.m = modules;\r\n/******/\r\n/******/ \t// expose the module cache\r\n/******/ \t__webpack_require__.c = installedModules;\r\n/******/\r\n/******/ \t// define getter function for harmony exports\r\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\r\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\r\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\r\n/******/ \t\t}\r\n/******/ \t};\r\n/******/\r\n/******/ \t// define __esModule on exports\r\n/******/ \t__webpack_require__.r = function(exports) {\r\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\r\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\r\n/******/ \t\t}\r\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\r\n/******/ \t};\r\n/******/\r\n/******/ \t// create a fake namespace object\r\n/******/ \t// mode & 1: value is a module id, require it\r\n/******/ \t// mode & 2: merge all properties of value into the ns\r\n/******/ \t// mode & 4: return value when already ns object\r\n/******/ \t// mode & 8|1: behave like require\r\n/******/ \t__webpack_require__.t = function(value, mode) {\r\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\r\n/******/ \t\tif(mode & 8) return value;\r\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\r\n/******/ \t\tvar ns = Object.create(null);\r\n/******/ \t\t__webpack_require__.r(ns);\r\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\r\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\r\n/******/ \t\treturn ns;\r\n/******/ \t};\r\n/******/\r\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\r\n/******/ \t__webpack_require__.n = function(module) {\r\n/******/ \t\tvar getter = module && module.__esModule ?\r\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\r\n/******/ \t\t\tfunction getModuleExports() { return module; };\r\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\r\n/******/ \t\treturn getter;\r\n/******/ \t};\r\n/******/\r\n/******/ \t// Object.prototype.hasOwnProperty.call\r\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\r\n/******/\r\n/******/ \t// __webpack_public_path__\r\n/******/ \t__webpack_require__.p = \"\";\r\n/******/\r\n/******/\r\n/******/ \t// Load entry module and return exports\r\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/index.ts\");\r\n/******/ })\r\n/************************************************************************/\r\n/******/ ({\r\n\r\n/***/ \"./src/index.ts\":\r\n/*!**********************!*\\\r\n  !*** ./src/index.ts ***!\r\n  \\**********************/\r\n/*! no static exports found */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n\"use strict\";\r\neval(\"\\r\\nfunction __export(m) {\\r\\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\\r\\n}\\r\\nObject.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\n__export(__webpack_require__(/*! ./maybe */ \\\"./src/maybe.ts\\\"));\\r\\n\\n\\n//# sourceURL=webpack:///./src/index.ts?\");\r\n\r\n/***/ }),\r\n\r\n/***/ \"./src/maybe.ts\":\r\n/*!**********************!*\\\r\n  !*** ./src/maybe.ts ***!\r\n  \\**********************/\r\n/*! no static exports found */\r\n/***/ (function(module, exports, __webpack_require__) {\r\n\r\n\"use strict\";\r\neval(\"\\r\\nvar __extends = (this && this.__extends) || (function () {\\r\\n    var extendStatics = Object.setPrototypeOf ||\\r\\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\\r\\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\\r\\n    return function (d, b) {\\r\\n        extendStatics(d, b);\\r\\n        function __() { this.constructor = d; }\\r\\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\\r\\n    };\\r\\n})();\\r\\nObject.defineProperty(exports, \\\"__esModule\\\", { value: true });\\r\\nvar Maybe = /** @class */ (function () {\\r\\n    function Maybe() {\\r\\n    }\\r\\n    Maybe.just = function (x) {\\r\\n        return new Just(x);\\r\\n    };\\r\\n    Maybe.nothing = function () {\\r\\n        return new Nothing();\\r\\n    };\\r\\n    return Maybe;\\r\\n}());\\r\\nexports.Maybe = Maybe;\\r\\nvar Just = /** @class */ (function (_super) {\\r\\n    __extends(Just, _super);\\r\\n    function Just(value) {\\r\\n        var _this = _super.call(this) || this;\\r\\n        _this.value = value;\\r\\n        return _this;\\r\\n    }\\r\\n    Just.prototype.bind = function (f) {\\r\\n        return f(this.value);\\r\\n    };\\r\\n    Just.prototype.lift = function (f) {\\r\\n        return Maybe.just(f(this.value));\\r\\n    };\\r\\n    Just.prototype.caseOf = function (cases) {\\r\\n        return cases.just(this.value);\\r\\n    };\\r\\n    Just.prototype.isJust = function () {\\r\\n        return true;\\r\\n    };\\r\\n    Just.prototype.useDefault = function (_) {\\r\\n        return this;\\r\\n    };\\r\\n    return Just;\\r\\n}(Maybe));\\r\\nexports.Just = Just;\\r\\nvar Nothing = /** @class */ (function (_super) {\\r\\n    __extends(Nothing, _super);\\r\\n    function Nothing() {\\r\\n        return _super !== null && _super.apply(this, arguments) || this;\\r\\n    }\\r\\n    Nothing.prototype.bind = function (_) {\\r\\n        return Maybe.nothing();\\r\\n    };\\r\\n    Nothing.prototype.lift = function (_) {\\r\\n        return Maybe.nothing();\\r\\n    };\\r\\n    Nothing.prototype.caseOf = function (cases) {\\r\\n        return cases.nothing();\\r\\n    };\\r\\n    Nothing.prototype.isJust = function () {\\r\\n        return false;\\r\\n    };\\r\\n    Nothing.prototype.useDefault = function (t) {\\r\\n        return Maybe.just(t);\\r\\n    };\\r\\n    return Nothing;\\r\\n}(Maybe));\\r\\nexports.Nothing = Nothing;\\r\\n\\n\\n//# sourceURL=webpack:///./src/maybe.ts?\");\r\n\r\n/***/ })\r\n\r\n/******/ })));\n\n//# sourceURL=webpack:///./node_modules/maybe/dist/index.js?");

/***/ }),

/***/ "./src/algorithms.ts":
/*!***************************!*\
  !*** ./src/algorithms.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst maybe_1 = __webpack_require__(/*! maybe */ \"./node_modules/maybe/dist/index.js\");\r\nfunction count(xs, predicate) {\r\n    let result = 0;\r\n    for (let x of xs) {\r\n        if (predicate(x)) {\r\n            result++;\r\n        }\r\n    }\r\n    return result;\r\n}\r\nexports.count = count;\r\nfunction range(from, to) {\r\n    if (from >= to) {\r\n        return new Array(0);\r\n    }\r\n    else {\r\n        const result = new Array(to - from);\r\n        for (let i = 0; i !== result.length; ++i) {\r\n            result[i] = from + i;\r\n        }\r\n        return result;\r\n    }\r\n}\r\nexports.range = range;\r\nfunction* generateRange(from, to) {\r\n    for (let i = from; i < to; ++i) {\r\n        yield i;\r\n    }\r\n}\r\nexports.generateRange = generateRange;\r\nfunction allEqual(xs, equality) {\r\n    const eq = equality || defaultEquality;\r\n    for (let i = 1; i < xs.length; ++i) {\r\n        if (!eq(xs[0], xs[i])) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\nexports.allEqual = allEqual;\r\nfunction filter(xs, predicate) {\r\n    const result = [];\r\n    for (let x of xs) {\r\n        if (predicate(x)) {\r\n            result.push(x);\r\n        }\r\n    }\r\n    return result;\r\n}\r\nexports.filter = filter;\r\nfunction all(xs, predicate) {\r\n    for (let x of xs) {\r\n        if (!predicate(x)) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\nexports.all = all;\r\nfunction any(xs, predicate) {\r\n    for (let x of xs) {\r\n        if (predicate(x)) {\r\n            return true;\r\n        }\r\n    }\r\n    return false;\r\n}\r\nexports.any = any;\r\nfunction find(xs, predicate) {\r\n    for (let x of xs) {\r\n        if (predicate(x)) {\r\n            return maybe_1.Maybe.just(x);\r\n        }\r\n    }\r\n    return maybe_1.Maybe.nothing();\r\n}\r\nexports.find = find;\r\nfunction minimumBy(xs, f) {\r\n    let bestScore = Number.POSITIVE_INFINITY;\r\n    let best = maybe_1.Maybe.nothing();\r\n    for (let x of xs) {\r\n        const score = f(x);\r\n        if (score < bestScore) {\r\n            bestScore = score;\r\n            best = maybe_1.Maybe.just(x);\r\n        }\r\n    }\r\n    return best;\r\n}\r\nexports.minimumBy = minimumBy;\r\nfunction maximumBy(xs, f) {\r\n    let bestScore = Number.NEGATIVE_INFINITY;\r\n    let best = maybe_1.Maybe.nothing();\r\n    for (let x of xs) {\r\n        const score = f(x);\r\n        if (score > bestScore) {\r\n            bestScore = score;\r\n            best = maybe_1.Maybe.just(x);\r\n        }\r\n    }\r\n    return best;\r\n}\r\nexports.maximumBy = maximumBy;\r\nfunction createArray(length, initializer) {\r\n    const result = new Array(length);\r\n    for (let i = 0; i !== length; ++i) {\r\n        result[i] = initializer(i);\r\n    }\r\n    return result;\r\n}\r\nexports.createArray = createArray;\r\nfunction repeat(n, x) {\r\n    return createArray(n, _ => x);\r\n}\r\nexports.repeat = repeat;\r\nfunction indices(xs) {\r\n    return range(0, xs.length);\r\n}\r\nexports.indices = indices;\r\nfunction isPermutation(xs, ys, equality) {\r\n    const eq = equality || defaultEquality;\r\n    if (xs.length !== ys.length) {\r\n        return false;\r\n    }\r\n    else {\r\n        const used = repeat(xs.length, false);\r\n        for (const x of xs) {\r\n            let found = false;\r\n            let i = 0;\r\n            while (!found && i < ys.length) {\r\n                if (!used[i] && eq(x, ys[i])) {\r\n                    used[i] = true;\r\n                    found = true;\r\n                }\r\n                ++i;\r\n            }\r\n            if (!found) {\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}\r\nexports.isPermutation = isPermutation;\r\nfunction defaultEquality(x, y) {\r\n    return x === y;\r\n}\r\nfunction sum(ns) {\r\n    let total = 0;\r\n    for (let n of ns) {\r\n        total += n;\r\n    }\r\n    return total;\r\n}\r\nexports.sum = sum;\r\nfunction map(xs, f) {\r\n    return createArray(xs.length, i => f(xs[i]));\r\n}\r\nexports.map = map;\r\nfunction contains(xs, y) {\r\n    return any(xs, x => x === y);\r\n}\r\nexports.contains = contains;\r\nfunction firstIndexOf(xs, predicate) {\r\n    for (let i = 0; i !== xs.length; ++i) {\r\n        const x = xs[i];\r\n        if (predicate(x)) {\r\n            return maybe_1.Maybe.just(i);\r\n        }\r\n    }\r\n    return maybe_1.Maybe.nothing();\r\n}\r\nexports.firstIndexOf = firstIndexOf;\r\nfunction lastIndexOf(xs, predicate) {\r\n    for (let i = xs.length - 1; i >= 0; --i) {\r\n        const x = xs[i];\r\n        if (predicate(x)) {\r\n            return maybe_1.Maybe.just(i);\r\n        }\r\n    }\r\n    return maybe_1.Maybe.nothing();\r\n}\r\nexports.lastIndexOf = lastIndexOf;\r\n\n\n//# sourceURL=webpack:///./src/algorithms.ts?");

/***/ }),

/***/ "./src/direction.ts":
/*!**************************!*\
  !*** ./src/direction.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Direction {\r\n    constructor(dx, dy) {\r\n        this.dx = dx;\r\n        this.dy = dy;\r\n    }\r\n    rotateCW() {\r\n        return new Direction(this.dy, -this.dx);\r\n    }\r\n    rotateCCW() {\r\n        return new Direction(-this.dy, this.dx);\r\n    }\r\n    get angleInDegrees() {\r\n        return Math.atan2(this.dy, this.dx) * 180 / Math.PI;\r\n    }\r\n}\r\nexports.Direction = Direction;\r\n\n\n//# sourceURL=webpack:///./src/direction.ts?");

/***/ }),

/***/ "./src/grid.ts":
/*!*********************!*\
  !*** ./src/grid.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst position_1 = __webpack_require__(/*! ./position */ \"./src/position.ts\");\r\nconst algorithms_1 = __webpack_require__(/*! ./algorithms */ \"./src/algorithms.ts\");\r\nconst direction_1 = __webpack_require__(/*! ./direction */ \"./src/direction.ts\");\r\nclass Grid {\r\n    row(rowIndex) {\r\n        if (rowIndex >= this.height) {\r\n            throw new Error(`rowIndex out of range`);\r\n        }\r\n        else {\r\n            return algorithms_1.range(0, this.width).map(columnIndex => this.at(new position_1.Position(columnIndex, rowIndex)));\r\n        }\r\n    }\r\n    column(columnIndex) {\r\n        if (columnIndex >= this.width) {\r\n            throw new Error(`columnIndex out of range`);\r\n        }\r\n        else {\r\n            return algorithms_1.range(0, this.height).map(rowIndex => this.at(new position_1.Position(columnIndex, rowIndex)));\r\n        }\r\n    }\r\n    *generatePositions() {\r\n        for (let y = 0; y !== this.height; ++y) {\r\n            for (let x = 0; x !== this.width; ++x) {\r\n                const position = new position_1.Position(x, y);\r\n                yield position;\r\n            }\r\n        }\r\n    }\r\n    get positions() {\r\n        return this.generatePositions();\r\n    }\r\n    isInside(position) {\r\n        return 0 <= position.x && position.x < this.width && 0 <= position.y && position.y < this.height;\r\n    }\r\n    toColumnArray() {\r\n        return algorithms_1.range(0, this.width).map(x => this.column(x));\r\n    }\r\n    toRowArray() {\r\n        return algorithms_1.range(0, this.height).map(y => this.row(y));\r\n    }\r\n    findPositions(predicate) {\r\n        return algorithms_1.filter(this.positions, (p) => predicate(this.at(p)));\r\n    }\r\n    map(f) {\r\n        return new ConcreteGrid(this.width, this.height, p => f(this.at(p)));\r\n    }\r\n    vmap(f) {\r\n        return new VirtualGrid(this.width, this.height, p => f(this.at(p)));\r\n    }\r\n    equal(grid, comparer) {\r\n        if (this.width !== grid.width || this.height !== grid.height) {\r\n            return false;\r\n        }\r\n        else {\r\n            return algorithms_1.all(this.positions, p => comparer(this.at(p), grid.at(p)));\r\n        }\r\n    }\r\n    around4(position) {\r\n        return algorithms_1.filter(position.around4, p => this.isInside(p));\r\n    }\r\n    around8(position) {\r\n        return algorithms_1.filter(position.around8, p => this.isInside(p));\r\n    }\r\n    iterator(position, direction) {\r\n        return new GridIterator(this, position, direction);\r\n    }\r\n    rowIterator(rowIndex) {\r\n        return this.iterator(new position_1.Position(0, rowIndex), new direction_1.Direction(1, 0));\r\n    }\r\n    columnIterator(columnIndex) {\r\n        return this.iterator(new position_1.Position(columnIndex, 0), new direction_1.Direction(0, 1));\r\n    }\r\n}\r\nexports.Grid = Grid;\r\nclass ConcreteGrid extends Grid {\r\n    constructor(width, height, initializer) {\r\n        super();\r\n        this.width = width;\r\n        this.height = height;\r\n        this.items = new Array(height);\r\n        for (let y = 0; y !== height; ++y) {\r\n            this.items[y] = new Array(width);\r\n            for (let x = 0; x !== width; ++x) {\r\n                const position = new position_1.Position(x, y);\r\n                this.items[y][x] = initializer(position);\r\n            }\r\n        }\r\n    }\r\n    at(position) {\r\n        if (!this.isInside(position)) {\r\n            throw new Error(`Invalid position ${position.toString()}`);\r\n        }\r\n        else {\r\n            return this.items[position.y][position.x];\r\n        }\r\n    }\r\n}\r\nclass VirtualGrid extends Grid {\r\n    constructor(width, height, fetch) {\r\n        super();\r\n        this.width = width;\r\n        this.height = height;\r\n        this.fetch = fetch;\r\n    }\r\n    at(position) {\r\n        if (!this.isInside(position)) {\r\n            throw new Error(`Invalid position ${position.toString()}`);\r\n        }\r\n        else {\r\n            return this.fetch(position);\r\n        }\r\n    }\r\n}\r\nclass GridIterator {\r\n    constructor(grid, _position, direction) {\r\n        this.grid = grid;\r\n        this._position = _position;\r\n        this.direction = direction;\r\n    }\r\n    get endReached() {\r\n        return this.grid.isInside(this._position);\r\n    }\r\n    get pointee() {\r\n        return this.grid.at(this._position);\r\n    }\r\n    next() {\r\n        this._position = this._position.add(this.direction);\r\n    }\r\n    get position() {\r\n        return this._position;\r\n    }\r\n}\r\nfunction createGrid(width, height, initializer) {\r\n    return new ConcreteGrid(width, height, initializer);\r\n}\r\nexports.createGrid = createGrid;\r\n\n\n//# sourceURL=webpack:///./src/grid.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./algorithms */ \"./src/algorithms.ts\"));\r\n__export(__webpack_require__(/*! ./direction */ \"./src/direction.ts\"));\r\n__export(__webpack_require__(/*! ./position */ \"./src/position.ts\"));\r\n__export(__webpack_require__(/*! ./grid */ \"./src/grid.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/position.ts":
/*!*************************!*\
  !*** ./src/position.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Position {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    add(direction) {\r\n        return new Position(this.x + direction.dx, this.y + direction.dy);\r\n    }\r\n    get around4() {\r\n        const result = new Array(4);\r\n        result[0] = new Position(this.x - 1, this.y);\r\n        result[1] = new Position(this.x + 1, this.y);\r\n        result[2] = new Position(this.x, this.y - 1);\r\n        result[3] = new Position(this.x, this.y + 1);\r\n        return result;\r\n    }\r\n    get around8() {\r\n        const result = new Array(8);\r\n        result[0] = new Position(this.x + 1, this.y);\r\n        result[1] = new Position(this.x + 1, this.y + 1);\r\n        result[2] = new Position(this.x, this.y + 1);\r\n        result[3] = new Position(this.x - 1, this.y + 1);\r\n        result[4] = new Position(this.x - 1, this.y);\r\n        result[5] = new Position(this.x - 1, this.y - 1);\r\n        result[6] = new Position(this.x, this.y - 1);\r\n        result[7] = new Position(this.x + 1, this.y - 1);\r\n        return result;\r\n    }\r\n    touches4(p) {\r\n        const dx = Math.abs(this.x - p.x);\r\n        const dy = Math.abs(this.y - p.y);\r\n        return (dx === 1 && dy === 0) || (dx === 0 && dy === 1);\r\n    }\r\n    touches8(p) {\r\n        const dx = Math.abs(this.x - p.x);\r\n        const dy = Math.abs(this.y - p.y);\r\n        return (dx === 0 || dx === 1) && (dy === 0 || dy === 1) && (dx !== 0 || dy !== 0);\r\n    }\r\n}\r\nexports.Position = Position;\r\n\n\n//# sourceURL=webpack:///./src/position.ts?");

/***/ })

/******/ })));