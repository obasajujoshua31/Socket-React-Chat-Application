import React from 'react'
import {useAlert} from 'react-alert'
import Context from '../../store/provider/Provider'
import Header from './Header'
import {getUserProfile} from '../../store/actions/users'


   const HeaderWrapper = () =>  {
       const alert = useAlert()

           return (
               <Context.Consumer>
                   {value => (<Header
                   store={value}
                   getUserProfile={getUserProfile}
                   alert={alert}
                   />)}
               </Context.Consumer>
           )
   }

   export default HeaderWrapper;
