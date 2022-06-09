import { Request, Response } from 'express'
import { GetLast3MessageService } from '../services/GetLast3Messages.service'

class Get3LastMessagesController {
  async handle(request: Request, response: Response) {
    const Service = new GetLast3MessageService()

    const result = await Service.execute()

    return response.json(result)
  }
}

export { Get3LastMessagesController }
