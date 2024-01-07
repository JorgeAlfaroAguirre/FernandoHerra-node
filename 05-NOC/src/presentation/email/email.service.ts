import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';
import { LogRepository } from '../../domain/repository/log.repository';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

interface SendMailOptions{
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachements?: Attachment[];
}

interface Attachment{
    filename: string;
    path: string;
}

export class EmailService{
    
    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE as string,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        },

    });

    constructor(){}

    async sendEmail(options: SendMailOptions): Promise<boolean>{

        const {to, subject, htmlBody, attachements = []} = options;

        try {

            const sentInformation = await this.transporter.sendMail({
                to: to,
                subject: subject,
                html: htmlBody,
                attachments: attachements
            });

            // console.log(sentInformation);

            return true;
        } catch (error) {

            return false;
        }

    };

    async sendEmailWithFileSystemLogs( to: string  | string[] ){
        const subject = 'Server Logs'
        const htmlBody = `
        <h3>Service Logs - NOC</h3>
        `;
        const attachements: Attachment[] =  [
            { filename: 'logs-all.log', path: './logs/logs-all.log' },
            { filename: 'logs-high.log', path: './logs/logs-high.log' },
            { filename: 'logs-medium.log', path: './logs/logs-medium.log' }
        ]
        
        return this.sendEmail({
            to, subject, attachements, htmlBody
        })
        
    };

}