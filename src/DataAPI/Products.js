import axios from "axios"

// No trailing slash (/)
const requestUrl = "http://localhost:3000";

// Get a specific product from the database by its UPC
export function GetProductByUPC(upc) {
    return new Promise(resolve => {
        axios.get(`${requestUrl}/productByUpc`, {
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
        axios.get(`${requestUrl}/productWithImagesByUpc/${upc}`)
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
        axios.get(`${requestUrl}/allProducts`)
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
      axios.get(`${requestUrl}/allProductsWithImages`)
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
      axios.get(`${requestUrl}/deptProducts`, {
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
      axios.get(`${requestUrl}/deptProductsWithImages`, {
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