import * as express from 'express'
import  *  as http from 'http'
import "reflect-metadata";
import * as logger from 'morgan'
import * as cors from 'cors'
import databaseConnection from './database/database.connection'
import setPassportMiddleware from './utils/passport'
import SocketService from './utils/socket'



class App{
    public app: any;
    public port: number;
    public server: any;
    public io: any;

    constructor(routes: any[], port: number) {
        this.app = express()
        this.server = http.createServer(this.app)
        this.connectSocket()
        this.port = port
        this.app.use(cors())
        this.initializeDatabase()
        this.initializeMiddlewares()
        this.initializeRoutes(routes)
    }

    private initializeMiddlewares(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(logger('dev'))
        setPassportMiddleware(this.app)
    }

    private initializeRoutes(routes) {
        routes.forEach(route => {
                this.app.use('/', route.router)
        });
    }

    private async initializeDatabase(){
            await databaseConnection.getConnection((err, connection) => {
                if(err) 
                 console.log('error in connection', err)
            })
            console.log('Connection established')
    }

    private connectSocket(){
     new SocketService(this.server)

    }

    public listen(){
        this.server.listen(this.port, (): void => {
            console.log('Server started at', this.port)
        })
    }

}

export default App;
