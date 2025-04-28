"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var fiber_1 = require("@react-three/fiber");
var maath_1 = require("maath");
var HeroCamera = function (_a) {
    var isMobile = _a.isMobile, children = _a.children;
    var group = (0, react_1.useRef)(null);
    (0, fiber_1.useFrame)(function (state, delta) {
        maath_1.easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
        if (!isMobile && (group === null || group === void 0 ? void 0 : group.current)) {
            maath_1.easing.dampE(group.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
        }
    });
    return <group ref={group}>{children}</group>;
};
exports.default = HeroCamera;
