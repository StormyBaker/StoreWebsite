import axios from "axios"

// No trailing slash (/)
const requestUrl = "http://192.168.2.34:3000";

export function AddToList(id, itemid, quantity) {
    return new Promise(resolve => {
        axios.get(`${requestUrl}/addToList?id=${id}&itemid=${itemid}&quantity=${quantity}`)
          .then(function (response) {
              resolve(response.data)
          })
          .catch(function (error) {
            resolve(false);
          });
    })
}

export function GetProductList(id) {
    return new Promise(resolve => {
        axios.get(`${requestUrl}/getList?id=${id}`)
          .then(function (response) {
              resolve(response.data)
          })
          .catch(function (error) {
            resolve(false);
          });
    })
}

export function RemoveProductFromList(id) {
  return new Promise(resolve => {
      axios.get(`${requestUrl}/removeFromList?id=${id}`)
        .then(function (response) {
            resolve(response.data)
        })
        .catch(function (error) {
          resolve(false);
        });
  })
}

export function SetNewQuantity(id, quantity) {
  return new Promise(resolve => {
      axios.get(`${requestUrl}/setQuantity?id=${id}`)
        .then(function (response) {
            resolve(response.data)
        })
        .catch(function (error) {
          resolve(false);
        });
  })
}