


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
    
  }
  deleteProduct(){

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
  e.preventDefault();
});