import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-email-adapter'
import { PrismaFeedbackRepository } from './repositories/prisma/PrismaFeedbackRepository'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case'
import express from 'express'
export const routes = express.Router()

routes.post('/feedback', async (req, res) => {
  const { type, comment, screenshot } = req.body
  const prismaFeedbackRepository = new PrismaFeedbackRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodemailerMailAdapter
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send()
})
