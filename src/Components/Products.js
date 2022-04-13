import axios from "axios"

export default function Product() {
    return new Promise(resolve => {
        axios.get("http://192.168.2.34:3000/dataImages")
          .then(function (response) {
              resolve(response.data)
              console.log(response.data)
          })
          .catch(function (error) {
            resolve(false);
          });
    })
}