(function () {
  let array = [];
  const conteiner = document.querySelector(".conteiner");

  function appendCardOnPage() {
    for (let i = 0; i < 8; i++) {
      const card = document.createElement("button");
      card.className = "card";
      conteiner.append(card);
    }
  }
  appendCardOnPage();
})();
