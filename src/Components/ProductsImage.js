import axios from "axios"

export default function ProductImage() {
    return new Promise(resolve => {
        axios.get("http://192.168.2.34:3000/dataImages")
          .then(function (response) {
              resolve(response.data[0].Data)
              console.log(response.data[0].Data)
          })
          .catch(function (error) {
            resolve(false);
          });
    })
}