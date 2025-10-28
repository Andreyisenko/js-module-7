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
const title4 = document.createElement("h2");
title4.textContent = "Оцінки студентів";
title4.classList.add("title");
const wrapers = document.querySelector("#students-list");
wrapers.append(title4);

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
    <h3>Name: ${name}</h3>
    <p>Група:  ${group}</p>
    <p> Середній бал: ${middlegrad} </p>
    <p> Cтатус: ${status}</p>

    </div>`;
});
console.log(stuD);
wrapers.insertAdjacentHTML("beforeend", stuD.join(""));
const allStud = document.createElement("p");
allStud.textContent = `Загальна кількість студентів ${students.length}`;
wrapers.append(allStud);
