// const courses = [
//   { title: "JavaScript", price: 1500, level: "beginner" },
//   { title: "React", price: 2500, level: "intermediate" },
//   { title: "Node.js", price: 3000, level: "advanced" },
// ];
// const cours = document.querySelector("#courses");
// cours.classList.add("courses");
// const title = document.createElement("h2");
// title.classList.add("title");
// title.textContent = "Список курсів";
// // console.log(title);
// const allcurses = document.createElement("p");
// allcurses.textContent = `Всього курсів ${courses.length}`;
// // console.log(allcurses);

// const divv = courses.map((elem) => {
//   const arr = `<div class="course-card">
//  <h3>${elem.title}</h3> <p>Рівень: ${elem.level}</p> <p>Ціна: ${elem.price} грн</p>
//     <hr>
//     </div>
//     `;
//   return arr;
// });
// // console.log(typeof divv.join(""));
// // console.log(...divv);
// cours.innerHTML = divv.join("");
// cours.prepend(title);
// cours.append(allcurses);
// const sort = courses.sort((a, b) => b.price - a.price);
// console.log(sort);
