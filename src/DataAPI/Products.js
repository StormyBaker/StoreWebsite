import axios from "axios"
import { ENDPOINT } from "../Constants/Constants";

// Get a specific product from the database by its UPC
export function GetProductByUPC(upc) {
    return new Promise(resolve => {
        axios.get(`${ENDPOINT}/productByUpc`, {
          upc: upc
        })
          .then(function (response) {
              resolve(response.data)
          })
          .catch(function (error) {
            resolve(false);
          });
    })
}

// Get a specific product and its associated images from the database by its UPC
export function GetProductWithImagesByUPC(upc) {
    return new Promise(resolve => {
        axios.get(`${ENDPOINT}/productWithImagesByUpc/${upc}`)
          .then(function (response) {
              resolve(response.data)
          })
          .catch(function (error) {
            resolve(false);
          });
    })
}

// Get all products from the database
export function GetAllProducts() {
    return new Promise(resolve => {
        axios.get(`${ENDPOINT}/allProducts`)
          .then(function (response) {
              resolve(response.data)
          })
          .catch(function (error) {
            resolve(false);
          });
    })
}

// Get all products from the database with their associated images
export function GetAllProductsWithImages() {
    return new Promise(resolve => {
      axios.get(`${ENDPOINT}/allProductsWithImages`)
          .then(function (response) {
              resolve(response.data)
          })
          .catch(function (error) {
            resolve(false);
          });
    })
}
// Get all products by department from the database
export function GetProductsByDepartment(departmentId) {
    return new Promise(resolve => {
      axios.get(`${ENDPOINT}/deptProducts`, {
        id: departmentId
      })
          .then(function (response) {
              resolve(response.data)
          })
          .catch(function (error) {
            resolve(false);
          });
    })
}

// Get all products by department from the database with their associated images
export function GetProductsWithImageByDepartment(departmentId) {
    return new Promise(resolve => {
      axios.get(`${ENDPOINT}/deptProductsWithImages`, {
        id: departmentId
      })
          .then(function (response) {
              resolve(response.data)
          })
          .catch(function (error) {
            resolve(false);
          });
    })
}

export function GetProductReport() {
  return new Promise(resolve => {
    axios.get(`${ENDPOINT}/getProductDemandReport`)
        .then(function (response) {
            resolve(response.data)
        })
        .catch(function (error) {
          resolve(false);
        });
  })
}

export function AddProduct(upc, deptId, name, desc, price, quan, size, size_units) {
  return new Promise(resolve => {
    axios.get(`${ENDPOINT}/addProduct?upc=${upc}&deptId=${deptId}&name=${name}&desc=${desc}&price=${price}&quan=${quan}&size=${size}&size_units=${size_units}`)
        .then(function (response) {
            resolve(response.data)
        })
        .catch(function (error) {
          resolve(false);
        });
  })
}

export function AddProductImage(upc, data, desc) {
  return new Promise(resolve => {
    axios.get(`${ENDPOINT}/addProductImage?upc=${upc}&data=${data}&desc=${desc}`)
        .then(function (response) {
            resolve(response.data)
        })
        .catch(function (error) {
          resolve(false);
        });
  })
}
