import React, { Component } from 'react';
import "../LoginPage/LoginPage.css"

class SignIN extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           emailId : null,
            password: null
         }
        }
         render(){
            return(
                <div>
                    <input className="loginPage__text"type="text"placeholder="Username"/><br/>
                    <input  className="loginPage__text"type="password"placeholder="password"/>
                    <button  className="login__button">SignIn</button>

                                       
                </div>
           
        );  
   } 
}
 
 
export default SignIN;