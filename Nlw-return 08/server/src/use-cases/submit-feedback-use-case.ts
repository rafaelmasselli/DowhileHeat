import { FeedbacksRepository } from '../repositories/Feedbacks.repository'
import { Mailadapter } from '../adapters/mail-adapter'

interface SubmitFeedbackUseCaseRequest {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailadapter: Mailadapter
  ) {}

  async execute(Request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = Request

    if (!type) {
      throw new Error('Type is required.')
    }

    if (!comment) {
      throw new Error('Comment is required')
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.')
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    })

    await this.mailadapter.sendMail({
      subject: 'Novo feedback',
      body: [
        `<div style="font-family: sans-serif; font-size 16px; color: #111;">`,
        `<p> Tipo do feedback: ${type}</p>`,
        `<p> Comentário: ${comment}</p>`,
        screenshot ? `<img src=${screenshot} alt=${type}>` : ``,
        `</div>`
      ].join('\n')
    })
  }
}
