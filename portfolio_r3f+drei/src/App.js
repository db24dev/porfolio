"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var About_tsx_1 = require("./sections/About.tsx");
var Clients_tsx_1 = require("./sections/Clients.tsx");
var Contact_tsx_1 = require("./sections/Contact.tsx");
var Experience_tsx_1 = require("./sections/Experience.tsx");
var Footer_tsx_1 = require("./sections/Footer.tsx");
var Hero_tsx_1 = require("./sections/Hero.tsx");
var Navbar_tsx_1 = require("./sections/Navbar.tsx");
var Projects_tsx_1 = require("./sections/Projects.tsx");
var App = function () {
    return (<main className='max-w-7xl mx-auto'>
      <Navbar_tsx_1.default />
      <Hero_tsx_1.default />
      <About_tsx_1.default />
      <Projects_tsx_1.default />
      <Clients_tsx_1.default />
      <Contact_tsx_1.default />
      <Footer_tsx_1.default />
      <Experience_tsx_1.default />
    </main>);
};
exports.default = App;
