"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Alert = function (_a) {
    var type = _a.type, text = _a.text;
    return (<div className="fixed bottom-5 right-5 flex justify-center items-center z-50">
        <div className={"p-2 ".concat(type === 'danger' ? 'bg-red-800' : 'bg-blue-800', " items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex rounded-md p-5")} role="alert">
          <p className={"flex rounded-full ".concat(type === 'danger' ? 'bg-red-500' : 'bg-blue-500', " uppercase px-2 py-1 text-xs font-semibold mr-3")}>
            {type === 'danger' ? 'Failed' : 'Success'}
          </p>
          <p className="mr-2 text-left">{text}</p>
        </div>
      </div>);
};
exports.default = Alert;
