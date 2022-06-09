import { Router } from 'express'
import { AuthenticateUserController } from './controllers/Authenticate.controller'
import { CreateMessageController } from './controllers/CreateMessage.controller'
import { Get3LastMessagesController } from './controllers/GetLast3Message.controller'
import { ProfileUserController } from './controllers/ProfileUser.controller'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'

const router = Router()

router.post('/authenticate', new AuthenticateUserController().handle)
router.post('/messages', ensureAuthenticated ,new CreateMessageController().handle)
router.get("/messages/last3", new Get3LastMessagesController().handle)
router.get("/profile", ensureAuthenticated, new ProfileUserController().handle)

export { router }
