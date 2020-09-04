const ul = document.querySelector("ul");
const searchBar = document.querySelector(".searchBar");
const maxPrice = document.querySelector(".maxPrice");

const products = getAvailableProducts();

const renderProducts = (products) => {
  ul.innerHTML = "";
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `<h2>${product.name}</h2><span>price: ${product.price}</span><br><span>Rating: ${product.rating}</span>`;
    ul.appendChild(li);
  });
};

const filterProducts = () => {
  const nameFilter = (product) =>
    product.name.toLowerCase().includes(searchBar.value.toLowerCase());

  const f = (value) => (value ? value : Infinity);
  const priceFilter = (product) => product.price <= f(maxPrice.value);

  renderProducts(
    products.filter((product) => nameFilter(product) && priceFilter(product))
  );
};

renderProducts(products);

searchBar.addEventListener("keyup", filterProducts);
maxPrice.addEventListener("keyup", filterProducts);
