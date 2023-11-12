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

export const getUserByIdArrow = ( id: number, callback: (err?: string, user?:User)=>void )=>{
    
    const user = users.find((user)=>user.id === id);

    (user)? callback(undefined, user):callback(`No use with id ${id}`);
}
