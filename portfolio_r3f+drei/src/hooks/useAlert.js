"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useAlert = function () {
    var _a = (0, react_1.useState)({ show: false, text: '', type: 'danger' }), alert = _a[0], setAlert = _a[1];
    var showAlert = function (_a) {
        var text = _a.text, _b = _a.type, type = _b === void 0 ? 'danger' : _b;
        return setAlert({ show: true, text: text, type: type });
    };
    var hideAlert = function () { return setAlert({ show: false, text: '', type: 'danger' }); };
    return { alert: alert, showAlert: showAlert, hideAlert: hideAlert };
};
exports.default = useAlert;
