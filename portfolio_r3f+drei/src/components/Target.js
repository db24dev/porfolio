"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var drei_1 = require("@react-three/drei");
var react_1 = require("react");
var react_2 = require("@gsap/react");
var gsap_1 = require("gsap");
var Target = function (props) {
    var targetRef = (0, react_1.useRef)();
    var scene = (0, drei_1.useGLTF)('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf').scene;
    (0, react_2.useGSAP)(function () {
        gsap_1.default.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        });
    });
    return (<mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene}/>
    </mesh>);
};
exports.default = Target;
