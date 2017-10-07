import config from "config";

function fetchJson(url, options = undefined) {
    return fetch(url, options)
           .then ( response => response.json());
}

export function getProducts() {
    return fetchJson(config.apiEndPoint + "/api/products")
}

//For promise, javascript will knows that it will return a promise
//return type MUST be promise
// export async function getProductsAsync() {
//     return fetchJson(config.apiEndPoint + "/api/products")
// }


export function getBrands() {
    return fetchJson(config.apiEndPoint + "/api/brands?")
}


export function getProduct(id) {
    return fetchJson(config.apiEndPoint + "/api/products/" + id)
}


export function getBrand(id) {
    return fetchJson(config.apiEndPoint + "/api/brands/" + id)
}


export function deleteProduct(id) {
    return fetchJson(config.apiEndPoint + "/api/products/" + id, {
        method: 'DELETE'
    })
}

export function saveProduct(product) {

}