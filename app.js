const input = document.querySelector("#input");

fetch("https://fakestoreapi.com/products?limit=20")
  .then((res) => res.json())
  .then((json) => domUI(json));

function domUI(data) {
  console.log(data);

  const dom = document.querySelector("#dom");
  data.forEach((element) => {
    const card = document.createElement("div");

    const img = document.createElement("img");
    const cat = document.createElement("h1");
    const tit = document.createElement("h3");
    const pri = document.createElement("h4");

    img.src = element.image;
    cat.textContent = element.category;
    tit.textContent = element.title;
    pri.textContent = element.price;

    card.append(img, cat, tit, pri);

    card.classList.add("card");

    dom.appendChild(card);
  });
}
