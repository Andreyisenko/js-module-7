const students = [
  {
    name: "Анна",
    group: "JS-21",
    grades: [10, 9, 8, 10, 9],
  },
  {
    name: "Іван",
    group: "JS-21",
    grades: [7, 6, 9, 8, 7, 6],
  },
  {
    name: "Оля",
    group: "JS-22",
    grades: [9, 10, 10, 9, 10],
  },
  {
    name: "Микита",
    group: "JS-22",
    grades: [5, 6, 5, 7, 6],
  },
];
const title1 = document.createElement("h2");
title1.textContent = "Оцінки студентів";
title1.classList.add("title");
const wraper = document.querySelector("#students-list");
wraper.append(title1);

const stuD = students.map(({ name, group, grades }) => {
  const grad = grades.reduce((acc, elem) => acc + elem, 0);
  const middlegrad = (grad / grades.length).toFixed(1);
  console.log(middlegrad);
  let status;
  if (middlegrad >= 9) {
    status = "Відмінник 🏆";
  } else if (middlegrad >= 7) {
    status = "Хорошист 🙂";
  } else {
    status = "Потрібно підтягнутися 📘";
  }
  return `<div class="student-card">
    <h3>Імя: ${name}</h3>
    <p>Група:  ${group}</p>
    <p> Середній бал: ${middlegrad} </p>
    <p> Cтатус: ${status}</p>

    </div>`;
});
console.log(stuD);
wraper.insertAdjacentHTML("beforeend", stuD.join(""));
const allStud = document.createElement("p");
allStud.textContent = `Загальна кількість студентів ${students.length}`;
wraper.append(allStud);
