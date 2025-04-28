"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button = function (_a) {
    var name = _a.name, _b = _a.isBeam, isBeam = _b === void 0 ? false : _b, containerClass = _a.containerClass, href = _a.href;
    return (<a className={"btn ".concat(containerClass)} href={href} target="_blank">
        {isBeam && (<span className="relative flex h-3 w-3">
            <span className="btn-ping"></span>
            <span className="btn-ping_dot"></span>
          </span>)}
        {name}
      </a>);
};
exports.default = Button;
