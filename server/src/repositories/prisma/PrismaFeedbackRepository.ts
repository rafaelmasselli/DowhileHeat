import { prisma } from '../../prisma'
import {
  FeedBackCreateData,
  FeedbacksRepository
} from '../Feedbacks.repository'

export class PrismaFeedbackRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedBackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
  }
}
