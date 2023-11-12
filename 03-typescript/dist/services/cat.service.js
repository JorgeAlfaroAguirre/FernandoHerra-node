"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCatById = void 0;
const cats_1 = require("../data/cats");
const findCatById = (id) => {
    return cats_1.cats.find((cat) => cat.id === id);
};
exports.findCatById = findCatById;
const findCatByName = (name) => {
    return cats_1.cats.find((cat) => cat.name === name);
};
const FilterCatsBySex = (sex) => {
    const filterCats = cats_1.cats.filter((cat) => cat.sex === sex);
    if (filterCats.length === 1) {
        return filterCats[0];
    }
    else {
        return filterCats;
    }
};
