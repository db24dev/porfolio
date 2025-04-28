"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leva_1 = require("leva");
var react_1 = require("react");
var fiber_1 = require("@react-three/fiber");
var react_responsive_1 = require("react-responsive");
var drei_1 = require("@react-three/drei");
var Button_tsx_1 = require("../components/Button.tsx");
var CanvasLoader_tsx_1 = require("../components/CanvasLoader.tsx");
var HeroCamera_tsx_1 = require("../components/HeroCamera.tsx");
var index_ts_1 = require("../constants/index.ts");
var HackerRoom_tsx_1 = require("../components/HackerRoom.tsx");
var Hero = function () {
    // Use media queries to determine screen size
    var isSmall = (0, react_responsive_1.useMediaQuery)({ maxWidth: 440 });
    var isMobile = (0, react_responsive_1.useMediaQuery)({ maxWidth: 768 });
    var isTablet = (0, react_responsive_1.useMediaQuery)({ minWidth: 768, maxWidth: 1024 });
    var sizes = (0, index_ts_1.calculateSizes)(isSmall, isMobile, isTablet);
    return (<section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am <span className='bg-gradient-to-l from-cyan-300 to-blue-900 bg-clip-text text-transparent'>DARIO</span><span className="waving-hand">👋</span> | Full Stack Javascript Developer
        </p>
        <p className="hero_tag text-gray_gradient">Building Amazing Websites & Apps</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <fiber_1.Canvas className="w-full h-full">
          <react_1.Suspense fallback={<CanvasLoader_tsx_1.default />}>
            {/* To hide controller */}
            <leva_1.Leva hidden/>
            <drei_1.PerspectiveCamera makeDefault position={[0, 0, 30]}/>

            <HeroCamera_tsx_1.default isMobile={isMobile}>
              <HackerRoom_tsx_1.default scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]}/>
            </HeroCamera_tsx_1.default>

            {/* <group>
          <Target position={sizes.targetPosition} />
          <ReactLogo position={sizes.reactLogoPosition} />
          <Rings position={sizes.cubePosition.map((x,index)=>{
            if(index==1){
              return -x+2
            }
            return -x
          })} />
          <Cube position={sizes.cubePosition} />
        </group> */}

            <ambientLight intensity={1}/>
            <directionalLight position={[10, 10, 10]} intensity={0.5}/>
          </react_1.Suspense>
        </fiber_1.Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button_tsx_1.default name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
        </a>
      </div>
    </section>);
};
exports.default = Hero;
