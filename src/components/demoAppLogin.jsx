import React, { useState, Component} from 'react';
import { loginInfo } from '../services/loginService';

class DemoAppLogin extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            isAuthenticated: false,
            token: ''
        }
    }

    componentDidMount(){
        //fetch
        loginInfo()
        .then((data) => {
            //console.log(data.data)
             this.setState({token : data.data.AuthToken,
                isAuthenticated: true
            });
             
        },
        (error)=>{
            console.log(error);
            this.setState({
                isAuthenticated: false,
                token: 'No data from server'
            })
        })
    }

    render(){
        return(
            <p>the request returned - {this.state.token}</p>
        );
    }
    
}

export default DemoAppLogin;