import { cats } from "../data/cats";

export const findCatById = ( id:number ) =>{
    return cats.find( ( cat )=> cat.id === id );
}

const findCatByName = ( name:string ) =>{
    return cats.find( ( cat )=> cat.name === name );
}

const FilterCatsBySex = ( sex:string ) =>{
    const filterCats = cats.filter( ( cat )=> cat.sex === sex );
    if(filterCats.length === 1){
        return filterCats[0]
    }else{
        return filterCats;
    }
}