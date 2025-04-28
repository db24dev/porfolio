"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_globe_gl_1 = require("react-globe.gl");
var Button_tsx_1 = require("../components/Button.tsx");
var About = function () {
    var _a = (0, react_1.useState)(false), hasCopied = _a[0], setHasCopied = _a[1];
    var handleCopy = function () {
        navigator.clipboard.writeText(' adrian@jsmastery.pro');
        setHasCopied(true);
        setTimeout(function () {
            setHasCopied(false);
        }, 2000);
    };
    return (<section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>

            <div>
              <p className="grid-headtext">Hi, I’m Dario</p>
              <p className="grid-subtext">
              I specialize in a variety of languages, frameworks, and tools. With over 4 years of freelance working experience, honing my skills in both frontend and backend software development, creating dynamic
                & responsive websites as well as building robust & scalable enterprise applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>

            <div>
              <p className="grid-headtext">Tech Stack (M.E.R.N)</p>
              <p className="grid-subtext">
              Html5, CSS3, Tailwind, JavaScript ES6, React, TypeScript, Next, Vue, Three.JS, ReactThreeFiber+Drei, Node, Express, RESTful APIs, MongoDB, MySQL, PostgreSQL, Mangoose,      
              AWS(S3, EC2, Lambda), Docker, CI/CD, Git & GitHub, Jenkins, Render, Vercel.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <react_globe_gl_1.default height={326} width={326} backgroundColor="rgba(0, 0, 0, 0)" 
    //backgroundImageOpacity={0.5}
    showAtmosphere showGraticules globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg" bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}/>
            </div>
            <div>
              <p className="grid-headtext">Very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Los Angeles, California and open to remote work World Wide.</p>
              <Button_tsx_1.default name="Download Resume(CV)" isBeam containerClass="w-full mt-10" href="assets/DB 2025 Resume.pdf"/>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"/>

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building real life applicable solutions through code. Programming isn&apos;t just my
                profession—it&apos;s my obsession. I truly enjoy exploring new technologies, and enhancing my skills everyday. 
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">darioberretta24@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
};
exports.default = About;
