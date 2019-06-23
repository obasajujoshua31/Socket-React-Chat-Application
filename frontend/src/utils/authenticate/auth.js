import jwtDecode from 'jwt-decode'

 const authenticate = {
     auth() {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                jwtDecode(token)
                return true
            } catch (error) {
                return false
            }
        }
        return false
    },
  
    logout(){
        localStorage.clear()
    }
}

export default authenticate
