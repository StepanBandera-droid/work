window.onload = function () {
  const openButton = document.querySelector(".open-button");
  const dropDownList = document.querySelector(".dropdown-list");

  async function initDropdownList() {
    const optionsData = await fetchOptionsData();

    createDropdownOptions(optionsData);
  }

  function createDropdownOptions(optionsData) {
    optionsData.forEach((optionData) => {
      const dropDownButton = document.createElement("div");

      dropDownButton.textContent = optionData.label;
      dropDownButton.setAttribute("data-id", optionData.id);
      dropDownButton.classList.add("dropdown-button");

      dropDownList.appendChild(dropDownButton);
    });
  }

  async function fetchOptionsData() {
    try {
      const exampleResponse = await fetch("Resources/JSON/meta.json");

      return exampleResponse.json();
    } catch {
      console.error("Ошибка при загрузке данных:", "error");
    }
  }

  function selectOption(event) {
    event.stopPropagation();

    dropDownList.style.display = "none";
    openButton.textContent = event.target.textContent;
  }

  function openDropdown(event) {
    event.stopPropagation();

    dropDownList.style.display = "block";
  }

  function closeDropdown() {
    dropDownList.style.display = "none";
  }

  initDropdownList();

  dropDownList.addEventListener("click", selectOption);
  openButton.addEventListener("click", openDropdown);
  window.addEventListener("click", closeDropdown);
};
