"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var index_ts_1 = require("../constants/index.ts");
var NavItems = function () {
    return (<ul className="nav-ul">
            {index_ts_1.navLinks.map(function (_a) {
            var id = _a.id, href = _a.href, name = _a.name;
            return (<li key={id} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={function () { }}>
                        {name}
                    </a>
                </li>);
        })}
        </ul>);
};
var Navbar = function () {
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    var toggleMenu = function () { return setIsOpen(function (prevIsOpen) { return !prevIsOpen; }); };
    return (<header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
        <div className="max-w-7xl">
            <div className="flex justify-between items-center py-5 mx-auto c-space">
                <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                    Dario Berretta
                </a>

                <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="Toggle menu">
            
                    <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6"/>
                </button>
                <nav className="sm:flex hidden">
                    <NavItems />
                </nav>
            </div>
        </div>

        <div className={"nav-sidebar ".concat(isOpen ? 'max-h-screen' : 'max-h-0')}>
            <nav className="p-5">
                <NavItems />
            </nav>
        </div>
    </header>);
};
exports.default = Navbar;
