export function addToCartRequest(id) {
    return {
        type: '@cart/ADD_REQUEST',
        id
    }
}

export function addToCartSuccess(product) {

    console.log(product);

    return {
        type: '@cart/ADD_SUCCESS',
        product
    }
}