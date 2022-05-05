import axios from "axios"

// No trailing slash (/)
const requestUrl = "http://localhost:3000";

// VERY INSECURE ACCOUNT SYSTEM, DO NOT EVER PUT A SYSTEM LIKE THIS INTO PRODUCTION
// Takes a email and password and requests user data from the server
export function LoginUser(email, password) {
    return new Promise(resolve => {
      axios.get(`${requestUrl}/loginUser?email=${email}&password=${password}`)
          .then(function (response) {
              resolve(response.data)
          })
          .catch(function (error) {
            resolve(false);
          });
    })
}