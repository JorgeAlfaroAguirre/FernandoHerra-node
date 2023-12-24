export interface CreateTableUseCase{
    excecute: ( options: CreateTableOptions ) => string;
}

export interface CreateTableOptions{
    base: number;
    limit?: number;
    showTable?: boolean;
    name?: string;
    destination?:string;
}

export class CreateTable{

    constructor(
        
    ){}

    execute({base,  limit = 10}: CreateTableOptions){
        
        let outputMessage = '';

        for (let i = 1; i <= limit; i++) {
            outputMessage += `${base} * ${i} = ${base * i} \n`;
        }

        return outputMessage
    }
}