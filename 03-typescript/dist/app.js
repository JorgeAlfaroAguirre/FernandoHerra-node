"use strict";
// import { findCatById } from "./services/cat.service";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmployeeFactorial = exports.checkAmountPeriod = exports.checkAmount = exports.checkDate = exports.checkAdress = exports.check = exports.URL_GET_CONTRACT = exports.FACTORIAL_API_KEY = exports.URL_CREATE_TASK = exports.URL_FACTORIAL = exports.FIELD_FACTORIAL_TO_CIMPLX = exports.REG_DATE_FORMAT = exports.REG_SSN = exports.REG_TEXT = exports.REG_EMAIL = void 0;
// const cat1 = findCatById(2);
// // console.log(cat1.name);
// // console.log(cat1?.name);
// console.log(cat1?.name ?? 'Cat not found.');
// console.log(findCatByName('Sofia'));
// console.log(FilterCatsBySex('male'));
// console.log(FilterCatsBySex('female'));
//This way you execute nodemon in runtime:  npx nodemon app
// const AmountPeriodFactorialToCimplx: Record<string, string> = {
//     "Yearly": "Year",
//     "Monthly": "Month",
//     "Weekly": "Week",
//     "Daily": "Day",
//     "Hourly": "Hour",
// };
// const input = "Daily";
// const result = AmountPeriodFactorialToCimplx[input] || input;
// console.log(result);
exports.REG_EMAIL = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
exports.REG_TEXT = /^[a-zA-Z]+$/;
exports.REG_SSN = /^(?!000|666|9\d\d)\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/;
exports.REG_DATE_FORMAT = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/;
exports.FIELD_FACTORIAL_TO_CIMPLX = {
    "Yearly": "Year",
    "Monthly": "Month",
    "Weekly": "Week",
    "Daily": "Day",
    "Hourly": "Hour",
};
exports.URL_FACTORIAL = 'https://api.demo.factorial.dev/';
exports.URL_CREATE_TASK = `${exports.URL_FACTORIAL}api/v1/core/tasks`;
exports.FACTORIAL_API_KEY = "c5371c794477bb51882b91a71f8b4e93e0bd05af3228189adeae26d2c6db221a";
exports.URL_GET_CONTRACT = 'api/v1/payroll/reference_contracts?employee_ids[]=';
const check = (field, regExp) => (field && field.trim().length > 0 && regExp.test(field)) ? field : null;
exports.check = check;
const checkAdress = (field) => field !== undefined && field.trim().length > 0 ? field : null;
exports.checkAdress = checkAdress;
const checkDate = (field) => {
    if (field === "")
        return null;
    return (field && exports.REG_DATE_FORMAT.test(field)) ? field : null;
};
exports.checkDate = checkDate;
const checkAmount = (field) => (field !== undefined && !isNaN(field)) ? field : null;
exports.checkAmount = checkAmount;
const checkAmountPeriod = (field) => field === undefined ? null : (exports.FIELD_FACTORIAL_TO_CIMPLX[field] || null);
exports.checkAmountPeriod = checkAmountPeriod;
const validateEmployeeFactorial = (employee) => {
    let fields = "";
    if (!(0, exports.check)(employee.email, exports.REG_EMAIL))
        fields = fields.concat("email, ");
    if (!(0, exports.check)(employee.first_name, exports.REG_TEXT))
        fields = fields.concat("first_name, ");
    if (!(0, exports.check)(employee.last_name, exports.REG_TEXT))
        fields = fields.concat("last_name, ");
    if (employee.employee_id < 0)
        fields = fields.concat("employee_id, ");
    if (!(0, exports.check)(employee.country, exports.REG_TEXT))
        fields = fields.concat("country, ");
    if (!(0, exports.check)(employee.social_security_number, exports.REG_SSN))
        fields = fields.concat("social_security_number, ");
    const message = `Employee profile cannot be created due to ${fields}field is missing`;
    if (fields.length > 0)
        return message;
    return "";
};
exports.validateEmployeeFactorial = validateEmployeeFactorial;
const employee = {
    email: "test@email.com",
    first_name: "TestName",
    last_name: "TestLastname",
    employee_id: 1,
    username: "username",
    country: "USA",
    social_security_number: "123-45-6789",
};
console.log((0, exports.validateEmployeeFactorial)(employee));
