interface ICat {
    id: number,
    name:string
}

const cats: ICat[] = [
    {
        id:1,
        name: 'Warren'
    },
    {
        id:2,
        name: 'Sofia'
    },
    {
        id:3,
        name: 'Pepita'
    },
];

export const getUserByIdArrow = ( id: number, callback: (err?: string, user?:ICat)=>void )=>{
    
    const cat = cats.find((cat)=>cat.id === id);

    (cat)? callback(undefined, cat):callback(`No use with id ${id}`);
}
