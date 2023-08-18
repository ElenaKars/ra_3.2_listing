"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Item = ({ item }) => {
    var _a;
    if (item.state === 'removed')
        return null;
    const title = item.title && item.title.length > 50
        ? item.title.substring(0, 50) + '...'
        : item.title || '';
    let price;
    switch (item.currency_code) {
        case 'USD':
            price = `$${item.price}`;
            break;
        case 'EUR':
            price = `€${item.price}`;
            break;
        default:
            price = `${item.price} ${item.currency_code}`;
    }
    let quantity = item.quantity !== undefined
        ? item.quantity <= 10
            ? 'low'
            : item.quantity <= 20
                ? 'medium'
                : 'high'
        : '';
    const imageUrl = ((_a = item.MainImage) === null || _a === void 0 ? void 0 : _a.url_570xN) || '';
    return (react_1.default.createElement("div", { className: "item" },
        react_1.default.createElement("div", { className: "item-image" },
            react_1.default.createElement("a", { href: item.url },
                react_1.default.createElement("img", { src: imageUrl, alt: "" }))),
        react_1.default.createElement("div", { className: "item-details" },
            react_1.default.createElement("p", { className: "item-title" }, title),
            react_1.default.createElement("p", { className: "item-price" }, price),
            react_1.default.createElement("p", { className: `item-quantity level-${quantity}` },
                item.quantity,
                " left"))));
};
exports.default = Item;
