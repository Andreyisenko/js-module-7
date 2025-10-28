const coursess = [
  { title: "JavaScript", rating: 4.5, students: 120 },
  { title: "React", rating: 4.8, students: 85 },
  { title: "Node.js", rating: 4.2, students: 60 },
  { title: "Python", rating: 4.9, students: 140 },
  { title: "HTML & CSS", rating: 4.0, students: 200 },
];
const cours1 = document.querySelector("#courses4");
// console.log(cours1);
const title3 = document.createElement("h2");
title3.textContent = "Рейтинг курсів";
title3.classList.add("title");
// console.log(title);
cours1.prepend(title3);
const allCurses = coursess
  .map((elem) => {
    return `<div class="course">
  <h3>${elem.title}</h3>
  <p>Рeйтинг: ${elem.rating} ⭐</p>
  <p>Кількість  студентів: ${elem.students}</p>
  ${
    elem.rating >= 4.5
      ? `<p class="status"> Популярний курс: ${elem.rating} ✅</p>`
      : `<p class="vorse"> Може бути краще: ${elem.rating} 😅</p>`
  }

        </div>`;
  })
  .join("");
// console.log(allCurses);
cours1.insertAdjacentHTML("beforeend", allCurses);
const wrape = document.querySelector(".course");
// console.log(wrap);

const allCurse = document.createElement("p");
allCurse.textContent = `Всього курсів: ${coursess.length}`;
cours1.append(allCurse);
