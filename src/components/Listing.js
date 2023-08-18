"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Item_1 = __importDefault(require("./Item"));
const Listing = ({ items = [] }) => {
    return (react_1.default.createElement("div", { className: "item-list" }, items.map((i) => (react_1.default.createElement(Item_1.default, { item: i, key: i.listing_id })))));
};
exports.default = Listing;
