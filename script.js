const dropDown = document.querySelector(".dropdown");
const dropDownList = document.querySelector(".dropdown-list");

// Создаём кнопку , открывающую выпадающий список.
const openButton = document.createElement("div");
openButton.textContent = "Выбрать элемент";
openButton.classList.add("open-button");
dropDown.prepend(openButton);

//TODO saved this project in GitHub
//TODO Transform data to JSON file. JSON to meta.json and get data from it in this script.
//TODO add id to ever item

const buttons = ["Click 1","Click 2","Click 3"];

//const Array = JSON.stringify(buttons);
//const ArrayParsed = JSON.parse(Array);

function createDropdownElement(){
// Создаём выпадающие кнопки (элементы) списка.
buttons.forEach(button=>{
    const dropDownButton = document.createElement("div");
    dropDownButton.textContent = button;
    dropDownList.appendChild(dropDownButton);
    dropDownButton.classList.add("dropdown-button");
})
}
createDropdownElement();

// Вешаем слушатель событий на контейнер с кнопками.
function addListenerToList (){
dropDownList.addEventListener("click", function(event){
    dropDownList.style.display = "none";
    openButton.textContent = event.target.textContent;
    event.stopPropagation();
})
}
addListenerToList();

// Вешаем слушатель событий на открывающую кнопку.
function addListenerToOpenbutton (){
openButton.addEventListener("click",function(event){
    dropDownList.style.display = "block";
    event.stopPropagation();
})
}
addListenerToOpenbutton();

// Вешаем слушатель событий на окно браузера.
window.addEventListener("click",function(event){
    if(!event.target.matches(".open-button"))
       dropDownList.style.display = "none";
})