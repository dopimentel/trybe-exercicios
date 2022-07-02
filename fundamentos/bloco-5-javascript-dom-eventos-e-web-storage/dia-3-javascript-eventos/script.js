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
            elementLi.classList.add("holiday");
            days.appendChild(elementLi);
        } else if (decemberDay === 4 || decemberDay === 11 || decemberDay === 18) {
            let elementLi = document.createElement("li");
            elementLi.innerHTML = decemberDay;
            elementLi.className = "day";
            elementLi.classList.add("friday");
            days.appendChild(elementLi);
        } else if (decemberDay === 25) {
            let elementLi = document.createElement("li");
            elementLi.innerHTML = decemberDay;
            elementLi.className = "day";
            elementLi.classList.add("holiday");
            elementLi.classList.add("friday");
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


let btnHoliday = document.createElement("input");
function createBtnHoliday() {
    btnHoliday.type = 'button';
    btnHoliday.value = 'Feriados';
    btnHoliday.id = "btn-holiday";
    let buttonsContainer = document.querySelector(".buttons-container");
    // console.log(buttonsContainer);
    buttonsContainer.appendChild(btnHoliday);
};
createBtnHoliday ();

console.log(btnHoliday.value);

btnHoliday.addEventListener('click', changeColorHoliday);
function changeColorHoliday(event) {
    let holidayList = document.getElementsByClassName('holiday')
    for ( let holiday of holidayList) {
        if (holiday.style.backgroundColor !== 'white') {
            holiday.style.backgroundColor = "white";
        } else {
            holiday.style.backgroundColor = 'unset';
        }       
    }
}
