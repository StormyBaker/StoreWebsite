import axios from "axios"
import { ENDPOINT } from "../Constants/Constants";

// Get all departments from the database
export function GetDepartments() {
    return new Promise(resolve => {
      axios.get(`${ENDPOINT}/departments`)
          .then(function (response) {
              resolve(response.data)
          })
          .catch(function (error) {
            resolve(false);
          });
    })
}