import * as comp from '../pages'

const routes = {
  default :  [
    {
        path: '/',
        exact: true,
        component: comp.Home
   },
  {
    path: '/login',
    component: comp.LoginContainer
  },
   {
    path: '/register',
    component: comp.SignupContainer
  },
   {
    path: '/social-auth',
    component: comp.SocialComponent
  }
],

protected: [
  {
    exact: true,
    path: '/chat',
    component: comp.Chat
  }
],
notFound: [{
  path: '*',
  component: comp.NotFound
}]
}


export default routes
