"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cat_service_1 = require("./services/cat.service");
const cat1 = (0, cat_service_1.findCatById)(2);
// console.log(cat1.name);
// console.log(cat1?.name);
console.log(cat1?.name ?? 'Cat not found.');
// console.log(findCatByName('Sofia'));
// console.log(FilterCatsBySex('male'));
// console.log(FilterCatsBySex('female'));
//This way you execute nodemon in runtime:  npx nodemon app
