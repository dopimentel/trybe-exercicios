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



function createButton(param1, param2) { // recebe duas strings, param1 e param2 que são o nome da função e ID respectivamente.
    let button = document.createElement("input");
    button.type = 'button';
    button.value = param1;
    button.id = param2;
    let buttonsContainer = document.querySelector(".buttons-container");
    buttonsContainer.appendChild(button);
};
createButton('Feriados', 'btn-holiday');





let buttonHoliday = document.getElementById('btn-holiday');
buttonHoliday.addEventListener('click', changeColorHoliday);
function changeColorHoliday() {
    let holidayList = document.getElementsByClassName('holiday')
    for ( let holiday of holidayList) {
        if (holiday.style.backgroundColor !== 'white') {
            holiday.style.backgroundColor = "white";
        } else {
            holiday.style.backgroundColor = "rgb(238, 238, 238)";
        }       
    }
}



createButton("Sexta-feita", "btn-friday");




let buttonFriday = document.getElementById('btn-friday');
buttonFriday.addEventListener('click', changeTxt);
let days = [];
function changeTxt() {
    let fridayList = document.getElementsByClassName('friday');
    if (typeof parseInt(fridayList[0].innerText) === "number" && fridayList[0].innerText !== 'SEXTOU') {
        for (let friday of fridayList) {
            days.push(parseInt(friday.innerText));
            friday.innerText = 'SEXTOU';
        }        
    } else {
        for (let friday of fridayList) {
            friday.innerText = days.shift();
        }
    }


}

let monthDays = document.getElementsByClassName('day');
for (let day of monthDays) {
day.addEventListener('mouseover', effectZoom);
day.addEventListener("mouseout", normal);
day.addEventListener('click', daySelector);

};
function effectZoom(event) {
  event.target.style.transform = "scale(2)";
}
function normal(event) {
  event.target.style.transform = "scale(1)";
}



let tarefa;
elementSpan = document.createElement('span');
myTasks = document.querySelector(".my-tasks");

function createTask (tarefa){
elementSpan.innerText = tarefa;
myTasks.appendChild(elementSpan);
}
createTask('cozinhar');


let cor;
function createLabel(cor) {
elementDiv = document.createElement("div");
elementDiv.className = 'task';
elementDiv.style.backgroundColor = cor;
myTasks.appendChild(elementDiv);
};

createLabel('green');

let task = document.getElementsByClassName('task')[0];
task.addEventListener('click', taskSelector);
function taskSelector(event) {
    if (event.target.className === 'task') {
        event.target.classList.add('selected');
        // selected.classList.remove('selected');
    } else {
        event.target.className = 'task';
    }
    console.log(event.target.className)
};

function daySelector(event){
    let selected = document.querySelector(".selected");

    if (event.target.style.backgroundColor !== selected.style.backgroundColor) {
        event.target.style.backgroundColor = selected.style.backgroundColor;

    } else {
        event.target.style.backgroundColor = "rgb(238, 238, 238)";
    }


}





