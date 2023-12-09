interface ICat {
    id: number,
    name:string
}
 const Cats: ICat[] = [
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

export function getCatById( id:number, callback: (err?: string, user?:ICat)=>void ){
    const cat = Cats.find( function(cat){
        return cat.id === id;
    });

    if(!cat){

        // return callback(`Cat with ID ${id} not found.`);
        
        setTimeout(()=>{
            callback(`Cat with ID ${id} not found.`)
        }, 2500);

        return;  

    }
    
    return callback(undefined, cat);
}
