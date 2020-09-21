const ul = document.querySelector("ul");
const searchBar = document.querySelector(".searchBar");
const maxPrice = document.querySelector(".maxPrice");
const availableProducts = getAvailableProducts();
const countriesSelect = document.querySelector(".countriesSelect");

const renderAvailableCountries = (select, countries) => {
  [
    ["", "Please choose a country"],
    ...countries.map((country) => [country, country]),
  ].forEach(([value, country]) => {
    const option = document.createElement("option");
    option.innerHTML = country;
    option.value = value;
    select.appendChild(option);
  });
};

const renderProducts = (products) => {
  ul.innerHTML = "";
  products.forEach((product) => {
    const shipsToHTML = product.shipsTo
      .map((country) => `<li>${country}</li>`)
      .join("");

    const li = document.createElement("li");
    li.innerHTML = `<h2>${product.name}</h2><div>Price: ${product.price}</div><div>Rating: ${product.rating}</div><ul>${shipsToHTML}</ul>`;
    ul.appendChild(li);
  });
};

const filterProducts = () => {
  const nameCheck = (product) =>
    product.name.toLowerCase().includes(searchBar.value.toLowerCase());

  const f = (value) => (value ? value : Infinity);
  const priceCheck = (product) => product.price <= f(maxPrice.value);

  const shipsToCheck = (product) =>
    countriesSelect.value === "" ||
    product.shipsTo.includes(countriesSelect.value);

  renderProducts(
    availableProducts.filter(
      (product) =>
        nameCheck(product) && priceCheck(product) && shipsToCheck(product)
    )
  );
};

const main = () => {
  renderAvailableCountries(countriesSelect, availableCountries);
  renderProducts(availableProducts);

  searchBar.addEventListener("keyup", filterProducts);
  maxPrice.addEventListener("keyup", filterProducts);
  countriesSelect.addEventListener("change", filterProducts);
};

main();
