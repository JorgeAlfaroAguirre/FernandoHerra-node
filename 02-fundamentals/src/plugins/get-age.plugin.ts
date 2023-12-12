
export const getAge = (birthdate: string)=>{

    console.log(new Date().getFullYear());
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
}
