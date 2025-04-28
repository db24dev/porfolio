"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var fiber_1 = require("@react-three/fiber");
var drei_1 = require("@react-three/drei");
var Developer_tsx_1 = require("../components/Developer.tsx");
var CanvasLoader_tsx_1 = require("../components/CanvasLoader.tsx");
var index_ts_1 = require("../constants/index.ts");
var WorkExperience = function () {
    var _a = (0, react_1.useState)('idle'), animationName = _a[0], setAnimationName = _a[1];
    return (<section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas">
            <fiber_1.Canvas>
              <ambientLight intensity={7}/>
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1}/>
              <directionalLight position={[10, 10, 10]} intensity={1}/>
              <drei_1.OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}/>

              <react_1.Suspense fallback={<CanvasLoader_tsx_1.default />}>
                <Developer_tsx_1.default position-y={-3} scale={3} animationName={animationName}/>
              </react_1.Suspense>
            </fiber_1.Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {index_ts_1.workExperiences.map(function (item, index) { return (<div key={index} onClick={function () { return setAnimationName(item.animation.toLowerCase()); }} onPointerOver={function () { return setAnimationName(item.animation.toLowerCase()); }} onPointerOut={function () { return setAnimationName('idle'); }} className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt=""/>
                    </div>

                    <div className="work-content_bar"/>
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>); })}
            </div>
          </div>
        </div>
      </div>
    </section>);
};
exports.default = WorkExperience;
