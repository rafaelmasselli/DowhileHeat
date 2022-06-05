import { Mailadapter, sendMailData } from './../mail-adapter'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'ea129c7580a78f',
    pass: '86bcf8a203e136'
  }
})

export class NodemailerMailAdapter implements Mailadapter {
  async sendMail({ subject, body }: sendMailData) {
    await transport.sendMail({
      from: 'Equipe feedget <oi@feedget.com>',
      to: 'Rafael masselli <rafaelmasselli0@gmail.com>',
      subject,
      html: body
    })
  }
}
