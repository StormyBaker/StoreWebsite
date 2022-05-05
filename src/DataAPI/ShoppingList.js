import axios from "axios"
import { ENDPOINT } from "../Constants/Constants";

export function AddToList(id, upc, quantity) {
    return new Promise(resolve => {
        axios.get(`${ENDPOINT}/addToList?id=${id}&upc=${upc}&quantity=${quantity}`)
          .then(function (response) {
              resolve(response.data)
          })
          .catch(function (error) {
            resolve(false);
          });
    })
}

export function GetShoppingList(id) {
    return new Promise(resolve => {
        axios.get(`${ENDPOINT}/getShoppingList?id=${id}`)
          .then(function (response) {
              resolve(response.data)
          })
          .catch(function (error) {
            resolve(false);
          });
    })
}

export function RemoveProductFromList(id, upc) {
  return new Promise(resolve => {
      axios.get(`${ENDPOINT}/removeFromList?id=${id}&upc=${upc}`)
        .then(function (response) {
            resolve(response.data)
            console.log(response.data)
        })
        .catch(function (error) {
          resolve(false);
        });
  })
}