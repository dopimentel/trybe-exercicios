function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
function createDaysOfTheMonth () {
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let days = document.getElementById('days');
    for (let decemberDay of decemberDaysList) {
        if (decemberDay === 24 || decemberDay === 31) {
            let elementLi = document.createElement("li");
            elementLi.innerHTML = decemberDay;
            elementLi.className = "day";
            elementLi.classList.add("day-holiday");
            days.appendChild(elementLi);
        } else if (decemberDay === 4 || decemberDay === 11 || decemberDay === 18) {
            let elementLi = document.createElement("li");
            elementLi.innerHTML = decemberDay;
            elementLi.className = "day";
            elementLi.classList.add("day-friday");
            days.appendChild(elementLi);
        } else if (decemberDay === 25) {
            let elementLi = document.createElement("li");
            elementLi.innerHTML = decemberDay;
            elementLi.className = "day";
            elementLi.classList.add("day-holiday");
            elementLi.classList.add("day-friday");
            days.appendChild(elementLi);
        } else {
            let elementLi = document.createElement("li");
            elementLi.innerHTML = decemberDay;
            elementLi.className = "day";
            days.appendChild(elementLi);
            }

    };
};
createDaysOfTheMonth();
