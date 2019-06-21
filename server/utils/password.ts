import * as bcrypt from 'bcryptjs'

class Password {

    private rounds : string = bcrypt.genSaltSync()

     hashPassword = (password: string) => {
        return bcrypt.hashSync(password, this.rounds )
    }

    comparePassword = (password: string, dbPassword: string) => {
        return bcrypt.compareSync(password, dbPassword)
    }

}

export default  new Password()
