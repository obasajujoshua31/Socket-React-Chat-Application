import * as comp from '../pages'

const routes = [
    {
        path: '/',
        component: comp.Home
   },
  {
    path: '/login',
    component: comp.Login
  },
   {
    path: '/register',
    component: comp.Signup
  },
  {
    path: '/chat',
    component: comp.Chat
  }
]


export default routes
