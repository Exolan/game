(function () {
  const div_select = document.querySelector(".div_select");
  const window_select = document.querySelector(".div_level");
  const select_text = document.querySelector(".select_text");
  const button_start = document.querySelector(".menu_start");
  const button_next = document.querySelector(".menu_level");
  let schetchik = 1;
  const select_value = document.querySelector(".select_value");
  const rules_header = document.querySelector(".rules_header");
  const rules_text = document.querySelector(".rules_text");
  const info_header = document.querySelector(".info_header");
  const info_text = document.querySelector(".info_text");
  const header_menu_text = document.querySelector(".header_menu_text");

  const score = document.createElement("div");
  const score_text = document.createElement("p");
  const score_result = document.createElement("p");
  score.className = "score";
  score_text.className = "score_text";
  score_result.className = "score_result";

  select_text.textContent = "Forest";
  info_text.textContent =
    "Что за блаженство опять остаться с самим собой, углубиться в себя и наслаждаться тишиной лесов! Кнут Гамсун.";
  window_select.style.background = "url(/menu/select/1.png) 0 0 repeat";

  function checkLocal() {
    for (let i = 0; i < Object.keys(localStorage).length; i++) {
      if (
        Object.keys(localStorage)[i] == "Forest" ||
        Object.keys(localStorage)[i] == "Fantasy" ||
        Object.keys(localStorage)[i] == "Sea" ||
        Object.keys(localStorage)[i] == "Beetles"
      ) {
        localStorage.removeItem(Object.keys(localStorage)[i]);
      }
    }
  }
  checkLocal();

  function doScore() {
    setInterval(() => {
      score_text.textContent = "Лучшее время:";
      score.append(score_text);
      score_result.textContent =
        localStorage.getItem(
          `Score${select_text.textContent}${select_value.value}`
        ) || "";
      localStorage.setItem(
        `Score${select_text.textContent}${select_value.value}`,
        score_result.textContent
      );
      score.append(score_result);
      div_select.append(score);
    });
  }
  doScore();
  button_start.addEventListener("click", () => {
    doScore();
    localStorage.setItem(select_text.textContent, Number(select_value.value));
    window.location.href = "/index.html";
  });

  button_next.addEventListener("click", () => {
    schetchik += 1;
    if (schetchik > 4) {
      schetchik = 1;
    }
    window_select.style.background = `url(/menu/select/${schetchik}.png) 0 0 repeat`;
    switch (schetchik) {
      case 1:
        select_text.textContent = "Forest";
        info_header.textContent = "Forest";
        window_select.style.background = "url(/menu/select/1.png) 0 0 repeat";
        rules_header.style.color = "green";
        rules_text.style.color = "#67e667";
        select_text.style.color = "green";
        info_header.style.color = "green";
        info_text.style.color = "#67e667";
        header_menu_text.style.color = "green";
        info_text.textContent =
          "Что за блаженство опять остаться с самим собой, углубиться в себя и наслаждаться тишиной лесов! Кнут Гамсун.";
        doScore();
        break;
      case 2:
        select_text.textContent = "Sea";
        info_header.textContent = "Sea";
        window_select.style.background = "url(/menu/select/2.png) 0 0 repeat";
        rules_header.style.color = "blue";
        rules_text.style.color = "#1fd6ff";
        select_text.style.color = "blue";
        info_header.style.color = "blue";
        info_text.style.color = "#1fd6ff";
        header_menu_text.style.color = "blue";
        info_text.textContent =
          "Когда долго смотришь на море, начинаешь скучать по людям, а когда долго смотришь на людей – по морю. Харуки Мураками.";
        doScore();
        break;
      case 3:
        select_text.textContent = "Fantasy";
        info_header.textContent = "Fantasy";
        window_select.style.background = "url(/menu/select/3.png) 0 0 repeat";
        rules_header.style.color = "purple";
        rules_text.style.color = "#ff00ff";
        select_text.style.color = "purple";
        info_header.style.color = "purple";
        info_text.style.color = "#ff00ff";
        header_menu_text.style.color = "purple";
        info_text.textContent =
          "Иногда фантастическая книга захватывает настолько, что кажется, будто из неё торчит когтистая лапа или свисает чешуйчатый хвост. Надея Ясминска";
        doScore();
        break;
      case 4:
        select_text.textContent = "Beetles";
        info_header.textContent = "Beetles";
        window_select.style.background = "url(/menu/select/4.png) 0 0 repeat";
        rules_header.style.color = "yellow";
        rules_text.style.color = "#FFF473";
        select_text.style.color = "yellow";
        info_header.style.color = "yellow";
        info_text.style.color = "#FFF473";
        header_menu_text.style.color = "yellow";
        info_text.textContent =
          "Мы так похожи на насекомых! Кто-то лезет в глаза, подобно мошке, кто-то, как слепень, пьет кровь, кто-то жужжит под ухом как комар. И я, как оса. Не трогай, не ужалю!";
        doScore();
        break;
    }
  });
})();
