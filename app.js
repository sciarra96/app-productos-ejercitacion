


class Product {
  constructor(name, price, year){
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI{
  addProduct(product){
    const list = document.getElementById("product-list");
    const elementHTML = document.createElement("div");
    elementHTML.innerHTML = `
      <div class="card text-center mb-4">
        <div class="card-body">
          <strong>Producto: </strong> ${product.name}
          <strong>Precio: </strong> ${product.price}
          <strong>year: </strong> ${product.year}
          <a href="#" class=" btn btn-danger" name="delete" >Borrar</a>
        </div>
      </div>
    `;
    list.appendChild(elementHTML);
    
  }
  resetForm(){
    document.getElementById("product-form").reset();
  }

  deleteProduct(element){
    if (element.name === "delete"){
      element.parentElement.parentElement.parentElement.remove();
    } 
  }
  showMessage(){

  }
}

//DOM event
document.getElementById("product-form").addEventListener("submit", function(e){
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const year = document.getElementById("year").value;

  console.log(new Product(name, price, year));
  const product = new Product(name, price, year);

  const ui = new UI;
  ui.addProduct(product);
  ui.resetForm();
  e.preventDefault();

});

document.getElementById("product-list").addEventListener("click", function(e){
    const ui = new UI;
    ui.deleteProduct(e.target);
});