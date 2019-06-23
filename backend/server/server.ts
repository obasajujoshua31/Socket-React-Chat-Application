import App from './app'
import routes from './routes'
import * as http from 'http'


const app = new App(routes, 2001)

app.listen()
