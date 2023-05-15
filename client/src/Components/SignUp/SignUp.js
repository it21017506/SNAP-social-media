import React, { Component } from 'react';
import "./SignUp.css";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailId : null,
            name: null,
            userName: null,
            password: null
         }
        }
        render(){

        return(
            <div>
                 <input className="loginPage__text"type="text" placeholder="Mobile or phone"/><br/>
                 <input className="loginPage__text"type="text" placeholder="Fullname"/><br/>
                 <input className="loginPage__text"type="text" placeholder="Username"/><br/>
                 <input  className="loginPage__text"type="password"placeholder="password"/>
                  <button  className="login__button" >SignUp</button>
     
                   

            </div>
        );
    }
}
 
export default SignUp;