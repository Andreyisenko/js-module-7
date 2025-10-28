const products = [
  { name: "Ноутбук", price: 32000, discount: 10 },
  { name: "Смартфон", price: 18000, discount: 15 },
  { name: "Навушники", price: 2500, discount: 5 },
  { name: "Монітор", price: 9000, discount: 20 },
  { name: "Клавіатура", price: 1500, discount: 0 },
];

const title1 = document.createElement("h2");
title1.textContent = "Каталог товарів";
title1.classList.add("title");
const container = document.querySelector("#shop");
let allSumdisc = 0;
container.append(title1);
const card = products.map(({ name, price, discount }) => {
  const salaryDiscount = (price * discount) / 100;
  let sumDiscount = (price - salaryDiscount).toFixed(2);
  allSumdisc += salaryDiscount;
  return `<div class="prod-card">
  <h3 class="title3"> Назва товару: ${name}</h3>
  <p>Початкова ціна: ${price}</p>  
  <p>Знижка у відсотках: ${discount}%</p>
  ${
    discount > 0
      ? `<p>Ціна після знижки: ${sumDiscount} 💸</p>`
      : `<p>Ціна після знижки: ${sumDiscount} Без знижки 💤</p>`
  }  
    
    </div>`;
});

container.insertAdjacentHTML("beforeend", card.join(""));
const allDisc = document.createElement("p");
allDisc.textContent = `Загальна сума всіх знижок: ${allSumdisc.toFixed(2)} грн`;
container.append(allDisc);
