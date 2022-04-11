(function () {
  const box = document.querySelector(".box");

  let name;
  for (let i = 0; i < Object.keys(localStorage).length; i++) {
    if (
      Object.keys(localStorage)[i] == "Forest" ||
      Object.keys(localStorage)[i] == "Fantasy" ||
      Object.keys(localStorage)[i] == "Sea" ||
      Object.keys(localStorage)[i] == "Beetles"
    ) {
      name = Object.keys(localStorage)[i];
    }
  }
  window.name = name;

  const back = document.querySelector(".body_game");
  back.style.background = `url(/background/${name}.png)`;

  const exit = document.querySelector(".button_exit");

  const num = localStorage.getItem(name);
  const timer = document.querySelector(".timer");
  window.num = num;
  if (num == 4) {
    timer.textContent = "10";
  } else if (num == 8) {
    timer.textContent = "20";
  } else if (num == 12) {
    timer.textContent = "30";
  } else if (num == 16) {
    timer.textContent = "40";
  }
  let firstTime = timer.textContent;
  window.firstTime = firstTime;

  let firstArray = [];
  let secondArray = [];
  for (let i = 0; i < num / 2; i++) {
    firstArray.push(i);
    secondArray.push(i);
  }

  function randomArray() {
    firstArray.sort(() => Math.random() - 0.5);
    secondArray.sort(() => Math.random() - 0.5);
    let array = [];
    for (const i in firstArray) {
      array.push(firstArray[i]);
      array.push(secondArray[i]);
    }
    return array;
  }

  function appendCardOnPage(arrayNumber) {
    const canvas = document.createElement("div");
    canvas.className = "canvas";

    for (const index of arrayNumber) {
      const card = document.createElement("button");
      card.className = "card";
      card.id = index;
      card.style.background = "url(/background/69.png) 0 0 repeat";
      canvas.append(card);
    }
    return canvas;
  }

  const arrayNumber = randomArray();
  box.append(appendCardOnPage(arrayNumber));

  let arraySelectCards = [];
  window.arraySelectCards = arraySelectCards;

  let arrayTrueCards = [];
  window.arrayTrueCards = arrayTrueCards;

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (card.id == 1) {
        card.style.background = `url(/cards/${name}/${card.id}.png) 0 0 repeat`;
      } else if (card.id == 2) {
        card.style.background = `url(/cards/${name}/${card.id}.png) 0 0 repeat`;
      } else if (card.id == 3) {
        card.style.background = `url(/cards/${name}/${card.id}.png) 0 0 repeat`;
      } else if (card.id == 4) {
        card.style.background = `url(/cards/${name}/${card.id}.png) 0 0 repeat`;
      } else if (card.id == 5) {
        card.style.background = `url(/cards/${name}/${card.id}.png) 0 0 repeat`;
      } else if (card.id == 6) {
        card.style.background = `url(/cards/${name}/${card.id}.png) 0 0 repeat`;
      } else if (card.id == 7) {
        card.style.background = `url(/cards/${name}/${card.id}.png) 0 0 repeat`;
      } else if (card.id == 8) {
        card.style.background = `url(/cards/${name}/${card.id}.png) 0 0 repeat`;
      } else if (card.id == 9) {
        card.style.background = `url(/cards/${name}/${card.id}.png) 0 0 repeat`;
      } else if (card.id == 0) {
        card.style.background = `url(/cards/${name}/${card.id}.png) 0 0 repeat`;
      }

      card.setAttribute("disabled", "disabled");

      arraySelectCards.push(card);
      twoCards(cards);
      won(cards);
    });
  });

  function twoCards(cards) {
    if (arraySelectCards.length == 2) {
      for (const i of cards) {
        i.setAttribute("disabled", "disabled");
      }
      if (arraySelectCards[0].id == arraySelectCards[1].id) {
        for (const i of cards) {
          if (arrayTrueCards.indexOf(i) == -1) {
            i.removeAttribute("disabled");
          } else {
            i.setAttribute("disabled", "disabled");
          }
        }
        arraySelectCards[0].setAttribute("disabled", "disabled");
        arraySelectCards[1].setAttribute("disabled", "disabled");
        arrayTrueCards.push(arraySelectCards[0]);
        arrayTrueCards.push(arraySelectCards[1]);
        arraySelectCards = [];
      } else {
        setTimeout(() => {
          for (const i of cards) {
            if (arrayTrueCards.indexOf(i) == -1) {
              i.removeAttribute("disabled");
            }
          }
          arraySelectCards[0].style.background =
            "url(/background/69.png) 0 0 repeat";
          arraySelectCards[1].style.background =
            "url(/background/69.png) 0 0 repeat";
          arraySelectCards[0].removeAttribute("disabled");
          arraySelectCards[1].removeAttribute("disabled");
          arraySelectCards = [];
        }, 1000);
      }
    }
  }

  function won(cards) {
    if (arrayTrueCards.length == cards.length) {
      setTimeout(() => {
        alert("You won!");
        const time = parseInt(firstTime) - timer.textContent;
        if (time > localStorage.getItem(`Score${name}${num}`)) {
          localStorage.setItem(`Score${name}${num}`, time);
        }
        if (confirm("Вы желаете переиграть?")) {
          window.location.reload();
        } else {
          localStorage.removeItem(name);
          window.location.href = "/menu.html";
        }
      }, 200);
    }
  }

  exit.addEventListener("click", () => {
    if (confirm("Вы точно хотите вернуться?")) {
      window.location.href = "/menu.html";
      localStorage.removeItem(name);
    }
  });

  let time;
  clearInterval(time);
  time = setInterval(function () {
    timer.textContent = parseInt(timer.textContent) - 1;
    if (timer.textContent == 0) {
      if (confirm("Время вышло. Вы желаете переиграть?")) {
        window.location.reload();
      } else {
        localStorage.removeItem(name);
        window.location.href = "/menu.html";
      }
    }
  }, 1000);
})();
