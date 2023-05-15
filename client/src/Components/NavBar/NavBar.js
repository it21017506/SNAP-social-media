import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@mui/material/Grid';
import insta_log from "../../images/logoinsta.png"
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import react from "../../images/love.svg";

//import pp from "../../images/pp1.png"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                
                <div className="navbar__barContent">
                <img className="navbar_logo" src={insta_log} width="105px" />
                <input text="text" className="navbar__searchBar" placeholder="Search" />

                <img className="navbar__img" src={home} width="25px"/>
                            <img className="navbar__img" src={message} width="25px" />
                            <img className="navbar__img" src={find} width="25px" />
                            <img className="navbar__img" src={react} width="25px" />


                    <Grid container>
                        <Grid item xs={2}>gdg </Grid>
                        <Grid item xs={3}>
                           dh
                        </Grid>
                        <Grid item xs={3}>
                        fdh
                        </Grid>
                        <Grid item xs={3} >
                            
                            
                            rsy
                            
                        </Grid>
                        <Grid item xs={1}>rhd</Grid>
                    </Grid>
                    
                </div>
            </div>
         );
    }
}
 
export default NavBar;