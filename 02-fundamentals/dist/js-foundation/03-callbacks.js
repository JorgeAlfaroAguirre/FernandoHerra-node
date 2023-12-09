"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCatById = void 0;
const Cats = [
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
function getCatById(id, callback) {
    const cat = Cats.find(function (cat) {
        return cat.id === id;
    });
    if (!cat) {
        // return callback(`Cat with ID ${id} not found.`);
        setTimeout(() => {
            callback(`Cat with ID ${id} not found.`);
        }, 2500);
        return;
    }
    return callback(undefined, cat);
}
exports.getCatById = getCatById;
