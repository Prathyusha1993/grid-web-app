//import {serviceConstants} from './constants';

export const loginInfo = () => {
    //return fetch(`http://${serviceConstants.HOSTNAME}/assocpath-webapi/api/authenticate`, {
        return fetch('http://34.200.212.150/assocpath-webapi/api/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
             'Token' : 'd6f620f8-639f-4a12-a0f3-01ea3d0f8f69',
        },
        body : JSON.stringify({
            'Email' : 'kiran@ushealthtek.com',
            'Password' : 'Cocoa1234'
        })
        
    })
    .then(response => {
        console.log(response);
    })
   
}


/**
 * Calls authentication API with username and password entered by the user in the login Form,
 * and returns the authentication token.
 * 
 */
export const fetchAuthToken = () => {
    return fetch('http://34.200.212.150/assocpath-webapi/api/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            'Email' : 'kiran@ushealthtek.com',
            'Password' : 'Cocoa1234'
        })
        
    })
    .then(response => response.json())
    .then(response => {
        return response.data.AuthToken;
    })
   
}

