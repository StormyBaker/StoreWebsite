import axios from "axios"
import { ENDPOINT } from "../Constants/Constants";

// VERY INSECURE ACCOUNT SYSTEM, DO NOT EVER PUT A SYSTEM LIKE THIS INTO PRODUCTION
// Takes a email and password and requests user data from the server
export function LoginUser(email, password) {
    return new Promise(resolve => {
      axios.get(`${ENDPOINT}/loginUser?email=${email}&password=${password}`)
          .then(function (response) {
              resolve(response.data)
          })
          .catch(function (error) {
            resolve(false);
          });
    })
}