"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIdArrow = void 0;
const cats = [
    {
        id: 1,
        name: 'Warren'
    },
    {
        id: 2,
        name: 'Sofia'
    },
    {
        id: 3,
        name: 'Pepita'
    },
];
const getUserByIdArrow = (id, callback) => {
    const cat = cats.find((cat) => cat.id === id);
    (cat) ? callback(undefined, cat) : callback(`No use with id ${id}`);
};
exports.getUserByIdArrow = getUserByIdArrow;
