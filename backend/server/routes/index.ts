import UserRoutes from './user'
import ChatRoutes from './chat'

const userRoutes = new UserRoutes()
// const chatRoutes = new ChatRoutes()



const routes: any[] = [userRoutes]

export default routes;
