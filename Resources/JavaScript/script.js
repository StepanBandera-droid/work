const dropDown = document.querySelector(".dropdown");
const dropDownList = document.querySelector(".dropdown-list");

// Создаём кнопку , открывающую выпадающий список.
const openButton = document.createElement("div");
openButton.textContent = "Выбрать элемент";
openButton.classList.add("open-button");
dropDown.prepend(openButton);

//TODO add id to ever item

let buttons;

async function fetchArray(){
try{
    const response = await fetch('Resources/JSON/meta.json')
    buttons = await response.json()

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
} catch {
console.error("Ошибка при загрузке данных:", "error")
    }
}

fetchArray();

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