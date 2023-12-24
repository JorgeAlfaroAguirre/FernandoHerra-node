import fs from 'fs';
import { yarg } from './config/plugins/yarg.plugin';

// console.log(yarg);

const   {b:base, l:limit = 10, s:show} = yarg;

const tablesHeader = (inputNumber: number) => `
===========================================================
                  Tabla del ${inputNumber} 
==========================================================\n
`;

const tabla = (header: Function, inputNumber: number, limitNumber:number, showTable: boolean) => {

    const tableHeader = header(inputNumber); 

    let outputMessage: string = '';

    for (let i = 1; i <= limitNumber; i++) {
        outputMessage += `${inputNumber} * ${i} = ${inputNumber * i} \n`;
    }

    outputMessage = tableHeader + outputMessage;

    const outputPath = `outputs`;
    
    fs.mkdirSync(outputPath, {recursive: true})

    fs.writeFileSync(`${outputPath}/tabla-${inputNumber}.txt`, outputMessage)

    if(showTable){  
        console.log(outputMessage);
    }
};

tabla(tablesHeader, base, limit, show);
