const gallery = [
  { url: "https://picsum.photos/id/237/200/150", caption: "Котик 1" },
  { url: "https://picsum.photos/id/238/200/150", caption: "Котик 2" },
  { url: "https://picsum.photos/id/239/200/150", caption: "Котик 3" },
  { url: "https://picsum.photos/id/240/200/150", caption: "Котик 4" },
];
console.log(gallery);

const title2 = document.createElement("h2");
title2.classList.add("title");
title2.textContent = "Галерея";
console.log(title2);

const gall = document.querySelector("#gallery1");
console.log(gall);
const newGallery = gallery.map((elem) => {
  return `<div class="gallery-item">
  <img src="${elem.url}" width="200px" height="100px" alt="${elem.caption}">
  <p>${elem.caption}</p>
  </div>`;
});
gall.prepend(title2);
// console.log(newGallery);

gall.insertAdjacentHTML("beforeend", newGallery.join(""));
const ollImg = document.createElement("p");
ollImg.classList.add("text");
ollImg.textContent = `Всього зображень: ${gallery.length}`;
gall.append(ollImg);
