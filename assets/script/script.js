import { arrayHeroesToString } from "./data.js";

document.addEventListener("DOMContentLoaded", function (event) {
  const heroes = JSON.parse(arrayHeroesToString);

  let heroesContent = "";

  for (let hero of heroes) {
    heroesContent += `
    <div class='hero__wrapper'>
      <div class='hero__info'>
      <div class='name'>${hero.name}</div>
      <div class='universe'><strong>Вселенная:</strong> ${hero.universe}</div>
      <div class='alterego'><strong>Альтер эго:</strong> ${hero.alterego}</div>
      <div class='occupation'><strong>Род деятельности:</strong> ${hero.occupation}</div>
      <div class='friends'><strong>Друзья:</strong> ${hero.friends}</div>
      <div class='superpowers'><strong>Суперсила:</strong> ${hero.superpowers}</div>
      <div class='info'><strong>Описание:</strong> ${hero.info}</div>
      </div>
      <div class='hero__image'>
      <img class='image' src="${hero.url}"></div>  
      <div class="rating__wrapper"> 
      <div class="rating__title">Добавь рейтинг</div>
      <form class="rating" id="${hero.name}">
        <label for="rating__${hero.name}"></label>
        <input type="radio" name="rating" id="rating__${hero.name}" class="rating__item" value="1"/>
        <label for="rating__${hero.name}"></label>
        <input type="radio" name="rating" id="rating__${hero.name}" class="rating__item" value="2"/>
        <label for="rating__${hero.name}"></label>
        <input type="radio" name="rating" id="rating__${hero.name}" class="rating__item" value="3"/>
        <label for="rating__${hero.name}"></label>
        <input type="radio" name="rating" id="rating__${hero.name}" class="rating__item" value="4"/>
        <label for="rating__${hero.name}"></label>
        <input type="radio" name="rating" id="rating__${hero.name}" class="rating__item" value="5"/>
      </form>
      </div>
      </div> 

    </div>`;
  }
  document.querySelector(".wrapper").innerHTML = heroesContent;

  for (let hero of heroes) {
    let ratings = document.getElementById(`${hero.name}`);
    let inputs = ratings.querySelectorAll("input");

    ratings.onclick = function () {
      for (const input of inputs) {
        if (input.checked) {
          localStorage.setItem(`рейтинг ${hero.name}`, input.value);
          console.log(input.value);
        }
      }
    };
  }
});
