const endPoint = "http://localhost:3000/api/v1/products"

document.addEventListener('DOMContentLoaded', () => {
    getProds()
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