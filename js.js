// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги
// будут созданы браузером.

window.addEventListener("DOMContentLoaded", () => {
    console.log("Все теги прогрузились");
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы
// страницы будут загружены.

window.addEventListener("load", () => {
    console.log("Cтраница загрузилась");
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.addEventListener("click", (e) => {
    const classEl = e.target.classList.contains("super_element")
        ? "присутствует"
        : "отсутствует";
    console.log(
        `Класс "super_element" ${classEl} в элементе "${e.target.tagName.toLowerCase()}".`
    );
});

// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение:
// "Вы навели на textarea."

const textarea = document.querySelector("textarea");
textarea.addEventListener("mouseover", () => {
    console.log("Вы навели на textarea.");
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль
// необходимо выводить текст, который записан внутри элемента кнопки, по которой
// был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно.
// Необходимо использовать делегирование.

const ul = document.querySelector("ul");

// Клик по списку(ul)
ul.onclick = function (event) {
    const target = event.target;
    if (target.tagName.toLowerCase() === "li") {
        console.log(event.target.textContent);
    }
};

// Клик по кнопке
// ul.addEventListener("click", (event) => {
//   const target = event.target;
// Проверяем, что клик был по элементу button внутри элемента li
//   if (target.closest("button")) {
//     console.log(target.textContent);
//   }
// });

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом
// выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо
// написать здесь же, под этим комментарием, своими словами.

// Ну наверное потому что события «всплывают» от внутреннего элемента
// вверх через родителя.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const liColor = document.querySelectorAll("li:nth-child(2n)");
liColor.forEach((element) => {
    element.style.backgroundColor = "red";
});