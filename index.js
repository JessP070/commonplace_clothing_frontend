const endPoint = "http://localhost:3000/api/v1/products"

document.addEventListener('DOMContentLoaded', () => {
    getProds()

    const createProductForm = document.querySelector("#create-product-form")

    createProductForm.addEventListener("submit",(e) => createFormHandler(e))

})

function getProds(){
    fetch(endPoint)
    .then(response => response.json())
    .then(prods => {
        prods.data.forEach(product => {
          
            const productMarkup = `
              <div data-id=${product.id}>
                <img src=${product.attributes.image_url} height="200" width="250">
                <h3>${product.attributes.name}</h3>
                <p>${product.attributes.cart.total}</p>
                <button data-id=${product.id}>edit</button>
              </div>
              <br><br>`;
    
              document.querySelector('#product-container').innerHTML += productMarkup
          })
        })        
}

function createFormHandler(e) {

e.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const descriptionInput = document.querySelector('#input-description').value
    const imageInput = document.querySelector('#image-name').value
    const cartId = parseInt(document.querySelector('#cart').value)
    postFetch(nameInput, descriptionInput, imageInput, cartId)
}


function postFetch(name, description, image_url, cart_id) {
    console.log(name, description, image_url, cart_id);

}

