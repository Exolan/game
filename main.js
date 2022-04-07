(function () {
  const box = document.querySelector(".box");

  function randomArray() {
    let firstArray = [1, 2, 3, 4, 5, 6];
    let secondArray = [1, 2, 3, 4, 5, 6];
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
      if (card.id == "1") {
        card.style.background = "url(/cards/1.png)";
      } else if (card.id == "2") {
        card.style.background = "url(/cards/2.png)";
      } else if (card.id == "3") {
        card.style.background = "url(/cards/3.png)";
      } else if (card.id == "4") {
        card.style.background = "url(/cards/4.png)";
      } else if (card.id == "5") {
        card.style.background = "url(/cards/5.png)";
      } else if (card.id == "6") {
        card.style.background = "url(/cards/6.png)";
      }
      card.setAttribute("disabled", "disabled");

      arraySelectCards.push(card);
      console.log(arraySelectCards);
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
        if (confirm("Вы желаете переиграть?")) {
          window.location.reload();
        }
      });
    }
  }
})();
