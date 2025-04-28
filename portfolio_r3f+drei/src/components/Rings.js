"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@gsap/react");
var drei_1 = require("@react-three/drei");
var gsap_1 = require("gsap");
var react_2 = require("react");
var Rings = function (_a) {
    var position = _a.position;
    var refList = (0, react_2.useRef)([]);
    var getRef = (0, react_2.useCallback)(function (mesh) {
        if (mesh && !refList.current.includes(mesh)) {
            refList.current.push(mesh);
        }
    }, []);
    var texture = (0, drei_1.useTexture)('textures/rings.png');
    (0, react_1.useGSAP)(function () {
        if (refList.current.length === 0)
            return;
        refList.current.forEach(function (r) {
            r.position.set(position[0], position[1], position[2]);
        });
        gsap_1.default
            .timeline({
            repeat: -1,
            repeatDelay: 0.5,
        })
            .to(refList.current.map(function (r) { return r.rotation; }), {
            y: "+=".concat(Math.PI * 2),
            x: "-=".concat(Math.PI * 2),
            duration: 2.5,
            stagger: {
                each: 0.15,
            },
        });
    }, {
        dependencies: position,
    });
    return (<drei_1.Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, function (_, index) { return (<mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]}></torusGeometry>
            <meshMatcapMaterial matcap={texture} toneMapped={false}/>
          </mesh>); })}
      </group>
    </drei_1.Center>);
};
exports.default = Rings;
