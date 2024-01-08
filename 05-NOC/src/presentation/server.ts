import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infraestructure/datasources/file.system.datasources";
import { MongoLogDatasource } from "../infraestructure/datasources/mongo-log.datasource";
import { LogRepositoryImpl } from "../infraestructure/repository/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const logRepository = new LogRepositoryImpl( 
    new FileSystemDatasource()
    // new MongoLogDatasource(),/*  */
)
const emailService = new EmailService();

export class Server{

    public static start(){

        console.log('Server started...');
        
/*         new SendEmailLogs(
            emailService,
            logRepository
        ).execute(['jorgealfaroaguirre@gmail.com']) */

        // const emailService = new EmailService(
        //     FileSystemRepository
        // );
        // emailService.csendEmailWithFileSystemLogs(
        //     ['jorgealfaroaguirre@gmail.com']
        // )

        // emailService.sendEmail({
        //     to: 'jorgealfaroaguirre@gmail.com',
        //     subject: 'systemLogs',
        //     htmlBody: `
        //         <h3>System Logs - NOC</h3>
        //     `
        // })


        CronService.createJob(
            '*/5 * * * * *',
            ()=>{

                const url = 'http://google.com';
                new CheckService(
                    logRepository,
                  () => console.log( `${ url } is ok` ),
                  ( error ) => console.log( error ),
                ).execute( url );;
                
                // new CheckService().execute('http://google.com')
                // new CheckService().execute('http://localhost:3000/')
            }
        );
    }

}