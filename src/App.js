"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const Listing_1 = __importDefault(require("./components/Listing"));
const data_json_1 = __importDefault(require("./data.json"));
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(Listing_1.default, { items: data_json_1.default })));
}
exports.default = App;
