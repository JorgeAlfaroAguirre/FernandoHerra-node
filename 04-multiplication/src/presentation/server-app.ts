import { CreateTable } from "../domain/use-cases/create-file.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOtpions{
    base: number;
    limit: number;
    showTable: boolean;
    name: string;
    destination: string;
}

export class ServerApp{

    static run( {base, limit, showTable, name, destination}: RunOtpions ){
        console.log('Server running...');

        const table = new CreateTable().execute({base, limit});
        const wasCreated = new SaveFile().execute({
            fileContent: table,
            fileName: name,
            fileDestination: destination
        });

       if( showTable ) console.log(table);
       ( wasCreated )? console.log('File created!'):console.error('File not created!');
       
    }

}