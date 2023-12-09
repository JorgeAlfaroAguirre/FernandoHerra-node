// import { findCatById } from "./services/cat.service";


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

export const REG_EMAIL: RegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
export const REG_TEXT: RegExp = /^[a-zA-Z]+$/;
export const REG_SSN: RegExp = /^(?!000|666|9\d\d)\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/;
export const REG_DATE_FORMAT: RegExp = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/;
export const FIELD_FACTORIAL_TO_CIMPLX: Record<string, string> = {
    "Yearly": "Year",
    "Monthly": "Month",
    "Weekly": "Week",
    "Daily": "Day",
    "Hourly": "Hour",
};
export const URL_FACTORIAL = 'https://api.demo.factorial.dev/';
export const URL_CREATE_TASK = `${URL_FACTORIAL}api/v1/core/tasks`;
export const  FACTORIAL_API_KEY = "c5371c794477bb51882b91a71f8b4e93e0bd05af3228189adeae26d2c6db221a";

export const URL_GET_CONTRACT = 'api/v1/payroll/reference_contracts?employee_ids[]=';

export const check = (field: string | undefined, regExp: RegExp): string | null => (field && field.trim().length > 0 && regExp.test(field)) ? field : null;
export const checkAdress = (field: string | undefined): string | null => field !== undefined && field.trim().length > 0 ? field : null;
export const checkDate = (field: string | undefined): string | null => {
    if (field === "") return null;
    return (field && REG_DATE_FORMAT.test(field)) ? field : null;
};

export const checkAmount = (field: number | undefined): number | null => (field !== undefined && !isNaN(field)) ? field : null;

export const checkAmountPeriod = (field: string | undefined): string | null =>
    field === undefined ? null : (FIELD_FACTORIAL_TO_CIMPLX[field] || null);

export const validateEmployeeFactorial = (employee:any)=> {
  let fields = "";
  if (!check(employee.email, REG_EMAIL)) fields = fields.concat("email, ");
  if (!check(employee.first_name, REG_TEXT)) fields = fields.concat("first_name, ");
  if (!check(employee.last_name, REG_TEXT)) fields = fields.concat("last_name, ");
  if (employee.employee_id < 0) fields = fields.concat("employee_id, ");
  if (!check(employee.country, REG_TEXT)) fields = fields.concat("country, ");
  if (!check(employee.social_security_number, REG_SSN)) fields = fields.concat("social_security_number, ");
  const message = `Employee profile cannot be created due to ${fields}field is missing`;
  if (fields.length > 0) return message;
  return "";
}

export interface FactorialEmployee {
  username: string;
  first_name: string;
  last_name: string;
  employee_id: number;
  country: string;
  social_security_number: string;
  email: string;
}

const employee:FactorialEmployee = {
  email: "test@email.com",
  first_name: "TestName",
  last_name: "TestLastname",
  employee_id: 1,
  username: "username",
  country: "USA",
  social_security_number: "123-45-6789",
}

console.log(validateEmployeeFactorial(employee));