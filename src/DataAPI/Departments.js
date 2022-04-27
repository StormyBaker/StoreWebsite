import axios from "axios"

// No trailing slash (/)
const requestUrl = "http://localhost:3000";

// Get all departments from the database
export function GetDepartments() {
    return new Promise(resolve => {
      axios.get(`${requestUrl}/departments`)
          .then(function (response) {
              resolve(response.data)
          })
          .catch(function (error) {
            resolve(false);
          });
    })
}