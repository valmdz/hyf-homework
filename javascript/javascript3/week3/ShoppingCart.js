const divProducts = document.querySelector(".products");
const divDetails = document.querySelector(".details");

const currencies = { USD: 0.16, EUR: 0.27, SEK: 2.82, MXN: 3.48 };

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency = (currency) => this.price * currencies[currency];
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    return this.products.push(product);
  }

  removeProduct(product) {
    return (this.products = this.products.filter(
      (productElement) => productElement.name !== product.name
    ));
  }

  searchProduct(productName) {
    const search = this.products.filter((productElement) =>
      productElement.name.toLowerCase().includes(productName.toLowerCase())
    );
    console.log("Searched", search);
  }

  getTotal() {
    return this.products.reduce((a, { price }) => a + price, 0);
  }

  async renderProducts() {
    const tHead = document.querySelector("thead");
    const tBody = document.querySelector("tbody");

    const arrayHead = ["Product", "Price"];
    arrayHead.forEach((txt) => {
      const th = document.createElement("th");
      th.innerHTML = txt;
      th.scope = "col";
      tHead.appendChild(th);
    });

    this.products.forEach((product) => {
      const tr = document.createElement("tr");
      const th = document.createElement("th");
      const td = document.createElement("td");

      th.innerHTML = `${product.name}`;
      th.scope = "row";
      td.innerHTML = `${product.price}`;

      tBody.appendChild(tr);
      tr.appendChild(th);
      tr.appendChild(td);
    });

    const pPrice = document.createElement("p");
    pPrice.innerHTML = `Total : ${this.getTotal()}`;
    divDetails.appendChild(pPrice);

    const footer = document.querySelector("footer");
    const pUser = document.createElement("p");
    pUser.innerHTML = `Customer : ${await this.getUser()}`;
    footer.appendChild(pUser);
  }

  async getUser() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const users = await response.json();
    return users.name;
  }
}

const shoppingCart = new ShoppingCart();

//Add products product
const flatscreen = new Product("Flat-screen", 5000);
shoppingCart.addProduct(flatscreen);

const sofa = new Product("Sofa", 1200);
shoppingCart.addProduct(sofa);

const table = new Product("Table", 3000);
shoppingCart.addProduct(table);

const chairs = new Product("Chairs", 3500);
shoppingCart.addProduct(chairs);

const flatpan = new Product("Flat-pan", 3500);
shoppingCart.addProduct(flatpan);

//Search for a product and log it out
shoppingCart.searchProduct("flat");

//Remove a product
shoppingCart.removeProduct(flatscreen);

//Sum the total of the products being rendered
shoppingCart.getTotal();

//Render the products
shoppingCart.renderProducts();

//Convert the currency from a product
const plant = new Product("plant", 50);
console.log(plant.convertToCurrency("USD")); // 7.5
