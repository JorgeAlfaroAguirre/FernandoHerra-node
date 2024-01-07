import { envs } from './config/plugins/envs.plugin';
import { Server } from './presentation/server';
import 'dotenv/config'

(async()=>{
    main();
})();

function main(){
    Server.start();
    console.log(process.env.PORT);
    console.log(envs.PORT);
    console.log(envs);
}