import axios from "axios"
import { ENDPOINT } from "../Constants/Constants";

export function GetCustomers() {
    return new Promise(resolve => {
        axios.get(`${ENDPOINT}/getCustomers`)
          .then(function (response) {
              resolve(response.data)
          })
          .catch(function (error) {
            resolve(false);
          });
    })
}