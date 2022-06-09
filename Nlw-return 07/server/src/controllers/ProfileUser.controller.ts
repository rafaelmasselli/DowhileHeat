import { Request, Response } from 'express'
import { GetLast3MessageService } from '../services/GetLast3Messages.service'
import { ProfileUserService } from '../services/ProfileUser.service'

class ProfileUserController {
  async handle(request: Request, response: Response) {
    const { user_id } = request

    const Service = new ProfileUserService()

    const result = await Service.execute(user_id)

    return response.json(result)
  }
}

export { ProfileUserController }
