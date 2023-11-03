document.addEventListener("DOMContentLoaded", function () {
  const searchType = document.getElementById("searchType");
  const searchValue = document.getElementById("searchValue");
  const result = document.getElementById("result");

  let data = null;

  // Загрузка данных из JSON
  fetch("https://t-shirts-api-black.vercel.app/api/colors")
    .then((response) => response.json())
    .then((json) => {
      data = json;
    });

  // Функция поиска по цвету
  function searchColor() {
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = ""; // Очищаем результат при каждом поиске

    const type = document.getElementById("searchType").value; // Получаем выбранный тип поиска
    const query = document
      .getElementById("searchValue")
      .value.trim()
      .toLowerCase(); // Преобразование в нижний регистр

    if (!data) {
      return; // Дождемся загрузки данных
    }

    if (query === "") {
      return; // Ничего не делаем при пустом запросе
    }

    for (const color of data.colors) {
      if (
        (type === "color" && color.name.toLowerCase().includes(query)) ||
        (type === "number" && color.number.toLowerCase().includes(query))
      ) {
        const resultElement = document.createElement("div");
        resultElement.className = "search-container";
        resultElement.innerHTML = `<span class="result-container"> Color:   <span class="namelight">${color.name} </span>    
         Number: <span class="numberlight">${color.number}</span><br></span> `;
        resultContainer.appendChild(resultElement);
      }
    }

    if (resultContainer.innerHTML === "") {
      resultContainer.textContent = "Color not found";
    }
  }

  // Обработчики ввода для поля поиска
  searchValue.addEventListener("input", searchColor);
  searchValue.addEventListener("input", function () {
    if (searchValue.value.trim() === "") {
      result.textContent = ""; // Очищаем результат при пустом вводе
    }
  });
});

//скрытия окна таблицы размеров и бекдропа

//////////////////////////////////////////////////////////////////////////////////////
const showButton = document.getElementById("showSizeTable");
const sizeTable = document.getElementById("sizeTable");
const closeButton = document.getElementById("closeSizeTable");
const backdrop = document.getElementById("backdrop");

showButton.addEventListener("click", function () {
  sizeTable.style.display = "block";
  backdrop.style.display = "block";
  document.body.classList.add("modal-open");
});

closeButton.addEventListener("click", function () {
  sizeTable.style.display = "none";
  backdrop.style.display = "none";
  document.body.classList.remove("modal-open");
});

backdrop.addEventListener("click", function () {
  sizeTable.style.display = "none";
  backdrop.style.display = "none";
  document.body.classList.remove("modal-open");
});

//////////////////////////////////////////////////////////////////////////////////////
const showButton2 = document.getElementById("showSizeTable2");
const sizeTable2 = document.getElementById("sizeTable2");
const closeButton2 = document.getElementById("closeSizeTable2");
const backdrop2 = document.getElementById("backdrop2");

showButton2.addEventListener("click", function () {
  sizeTable2.style.display = "block";
  backdrop2.style.display = "block";
  document.body.classList.add("modal-open");
});

closeButton2.addEventListener("click", function () {
  sizeTable2.style.display = "none";
  backdrop2.style.display = "none";
  document.body.classList.remove("modal-open");
});

backdrop2.addEventListener("click", function () {
  sizeTable2.style.display = "none";
  backdrop2.style.display = "none";
  document.body.classList.remove("modal-open");
});

//////////////////////////////////////////////////////////////////////////////////////
const showButton3 = document.getElementById("showSizeTable3");
const sizeTable3 = document.getElementById("sizeTable3");
const closeButton3 = document.getElementById("closeSizeTable3");
const backdrop3 = document.getElementById("backdrop3");

showButton3.addEventListener("click", function () {
  sizeTable3.style.display = "block";
  backdrop3.style.display = "block";
  document.body.classList.add("modal-open");
});

closeButton3.addEventListener("click", function () {
  sizeTable3.style.display = "none";
  backdrop3.style.display = "none";
  document.body.classList.remove("modal-open");
});

backdrop3.addEventListener("click", function () {
  sizeTable3.style.display = "none";
  backdrop3.style.display = "none";
  document.body.classList.remove("modal-open");
});
//////////////////////////////////////////////////////////////////////////////////////
const showButton4 = document.getElementById("showSizeTable4");
const sizeTable4 = document.getElementById("sizeTable4");
const closeButton4 = document.getElementById("closeSizeTable4");
const backdrop4 = document.getElementById("backdrop4");

showButton4.addEventListener("click", function () {
  sizeTable4.style.display = "block";
  backdrop4.style.display = "block";
  document.body.classList.add("modal-open");
});

closeButton4.addEventListener("click", function () {
  sizeTable4.style.display = "none";
  backdrop4.style.display = "none";
  document.body.classList.remove("modal-open");
});

backdrop4.addEventListener("click", function () {
  sizeTable4.style.display = "none";
  backdrop4.style.display = "none";
  document.body.classList.remove("modal-open");
});

//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////
const rotatingDiv = document.querySelector(".rotating-div");
//DOMContentLoaded для запуска кода после загрузки страницы
document.addEventListener("DOMContentLoaded", function () {
  //класс "animate-rotation" для элемента rotatingDiv
  rotatingDiv.classList.add("animate-rotation");
});
//////////////////////////////////////////////////////////////////////////////////////
