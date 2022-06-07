export interface sendMailData {
  subject: string
  body: string
}

export interface Mailadapter {
  sendMail: (data: sendMailData) => void
}
