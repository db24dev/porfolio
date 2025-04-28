"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = require("@emailjs/browser");
var react_1 = require("react");
var useAlert_ts_1 = require("../hooks/useAlert.ts");
var Alert_tsx_1 = require("../components/Alert.tsx");
var Contact = function () {
    var formRef = (0, react_1.useRef)(null);
    var _a = (0, useAlert_ts_1.default)(), alert = _a.alert, showAlert = _a.showAlert, hideAlert = _a.hideAlert;
    var _b = (0, react_1.useState)(false), loading = _b[0], setLoading = _b[1];
    var _c = (0, react_1.useState)({ name: '', email: '', message: '' }), form = _c[0], setForm = _c[1];
    var handleChange = function (_a) {
        var _b;
        var _c = _a.target, name = _c.name, value = _c.value;
        setForm(__assign(__assign({}, form), (_b = {}, _b[name] = value, _b)));
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        setLoading(true);
        //template_6a08cs6
        browser_1.default
            .send("service_e4bph1q", "template_6a08cs6", {
            from_name: form.name,
            to_name: 'Dario Berretta',
            from_email: form.email,
            to_email: 'darioberretta24@gmail.com',
            message: form.message,
        }, "4IHpWmMz94MyNkFfI")
            .then(function () {
            setLoading(false);
            showAlert({
                text: 'Thank you for your message 😃',
                type: 'success',
            });
            setTimeout(function () {
                hideAlert();
                setForm({
                    name: '',
                    email: '',
                    message: '',
                });
            }, 3000);
        }, function (error) {
            setLoading(false);
            console.error(error);
            showAlert({
                text: "I didn't receive your message 😢",
                type: 'danger',
            });
        });
    };
    return (<section className="c-space my-20" id="contact">
      {alert.show && <Alert_tsx_1.default {...alert}/>}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen"/>

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder="ex., John Doe"/>
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="field-input" placeholder="ex., johndoe@gmail.com"/>
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="field-input" placeholder="Share your thoughts or inquiries..."/>
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
            </button>
          </form>
        </div>
      </div>
    </section>);
};
exports.default = Contact;
