"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailTemplate = void 0;
const emailTemplate = (name, orderID) => {
    return `
    <div>
        <h1>Hi, ${name}</h1>
        <p>Thank you for your order.</p>
        <p>Order ID: ${orderID}
    </div>`;
};
exports.emailTemplate = emailTemplate;
