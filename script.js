//создание функции для кнопки
document.querySelector(".button").addEventListener("click", () => {
  //создание массива из которого будут генерироваться цвета
  let hex_numbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  //создание переменных в которые будет записан результат генерации
  let hexcode1 = "";
  let hexcode2 = "";
  let random_index = 0;
  //создание цикла, который перебирает 6 элементов массива
  for (let i = 0; i < 6; i++) {
    //получаем 6 случайных элементов
    random_index = Math.floor(Math.random() * hex_numbers.length);
    //записываем резульат в переменную
    hexcode1 += hex_numbers[random_index];
    random_index = Math.floor(Math.random() * hex_numbers.length);
    hexcode2 += hex_numbers[random_index];
  }
  //добавляем результат в CSS
  document.body.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;
  //и в HTML
  document.querySelector("#hexcode1").textContent = hexcode1;
  document.querySelector("#hexcode2").textContent = hexcode2;
});
