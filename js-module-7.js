const wrap = document.querySelector("#courses");
// console.log(wrap);
const list = document.createElement("ul");
list.classList.add("list");
wrap.append(list);

const item = document.createElement("li");
item.classList.add("item");
item.textContent = "name";

const item1 = document.createElement("li");
item1.classList.add("item");
item1.textContent = "firstname";

const item2 = document.createElement("li");
item2.classList.add("item");
item2.textContent = "age";
list.append(item, item1, item2);
// console.log(list);
item.classList.toggle("item1");
