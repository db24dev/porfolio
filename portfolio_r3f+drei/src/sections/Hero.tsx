import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import Cube from '../components/Cube.tsx';
import Rings from '../components/Rings.tsx';
import ReactLogo from '../components/ReactLogo.tsx';
import Button from '../components/Button.tsx';
import Target from '../components/Target.tsx';
import CanvasLoader from '../components/CanvasLoader.tsx';
import HeroCamera from '../components/HeroCamera.tsx';
import { calculateSizes } from '../constants/index.ts';
import HackerRoom from '../components/HackerRoom.tsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am <span className='bg-gradient-to-l from-cyan-300 to-blue-900 bg-clip-text text-transparent'>DARIO</span><span className="waving-hand">👋</span> | Full Stack Javascript Developer
        </p>
        <p className="hero_tag text-gray_gradient">Building Amazing Websites & Apps</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

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

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;