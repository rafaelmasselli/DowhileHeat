import { SubmitFeedbackUseCase } from './submit-feedback-use-case'

const createFeedbackSpy = jest.fn()

const sendMailSpy = jest.fn()

const SubmitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit feedback', async () => {
    await expect(
      SubmitFeedback.execute({
        type: 'BUG',
        comment: 'exemple comment',
        screenshot: 'data:image:png;base64'
      })
    ).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  })
  it('should not be able to submit feedback without type', async () => {
    await expect(
      SubmitFeedback.execute({
        type: '',
        comment: 'exemple comment',
        screenshot: 'data:image:png;base64'
      })
    ).rejects.toThrow()
  })

  it('should not be able to submit feedback without comment', async () => {
    await expect(
      SubmitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image:png;base64'
      })
    ).rejects.toThrow()
  })

  it('should not be able to submit feedback with an invalid screenshot', async () => {
    await expect(
      SubmitFeedback.execute({
        type: 'BUG',
        comment: 'exemple comment',
        screenshot: 'Test.png'
      })
    ).rejects.toThrow()
  })
})
