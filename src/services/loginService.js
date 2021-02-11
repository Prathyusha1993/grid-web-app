/**
 * Calls authentication API with username and password entered by the user in the login Form,
 * and returns the authentication token.
 * 
 */
export const authenticateAndFetchUserDetails = (email, Password) => {
    return fetch('http://34.200.212.150/assocpath-webapi/api/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({
            'Email' : email,
            'Password' : Password
        })
        
    })
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            return Promise.reject('invalid credentials')
        }
    })
    .then(response => {
        return response.data;
    });
}

