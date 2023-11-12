interface User {
    id: number,
    name:string
}
 const users: User[] = [
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

export function getUserById( id:number, callback: (err?: string, user?:User)=>void ){
    const user = users.find( function(user){
        return user.id === id;
    });

    if(!user){
        return callback(`USER NOT FOUND ${id}`);
    }
    
    return callback(undefined, user);
}
