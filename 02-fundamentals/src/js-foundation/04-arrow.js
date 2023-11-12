const users = [
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

const getUserByIdArrow = ( id, callback )=>{
    
    const user = users.find((user)=>user.id === id);

    (user)? callback(null, user):callback(`No use with id ${id}`);
}



module.exports = {
    getUserByIdArrow
}