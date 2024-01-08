import { envs } from './config/plugins/envs.plugin';
import {  MongoDatabase } from './data/mongo';
import { Server } from './presentation/server';
import 'dotenv/config'

(async()=>{
    main();
})();

async function main(){

    await MongoDatabase.connect({
        mongoURL: envs.MONGO_URL,
        dbName:envs.MONGO_DB_NAME
    });


    //Crear un registro
/*     const newLog = await LogModel.create({
        message: 'Test message desde Mongo',
        origin: 'App.ts',
        level: 'high',
    });
    await newLog.save();
    console.log(newLog); */

/*     const logs = await LogModel.find();
    console.log(logs[0].level);

 */
    Server.start();
    // console.log(process.env.PORT);
    // console.log(envs.PORT);
    // console.log(envs);
}