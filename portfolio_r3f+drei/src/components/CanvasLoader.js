"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var drei_1 = require("@react-three/drei");
var CanvasLoader = function () {
    var progress = (0, drei_1.useProgress)().progress;
    return (<drei_1.Html as="div" center style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }}>
      <span className="canvas-loader"></span>
      <p style={{
            fontSize: 14,
            color: '#F1F1F1',
            fontWeight: 800,
            marginTop: 40,
        }}>
        {progress !== 0 ? "".concat(progress.toFixed(2), "%") : 'Loading...'}
      </p>
    </drei_1.Html>);
};
exports.default = CanvasLoader;
