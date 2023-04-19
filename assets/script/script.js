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
      <div class="rating">
      <div class="rating__items" id="${hero.name}">
        <input type="radio" name="rating" id="rating__5${hero.name}" class="rating__item" value="5"/>
        <label for="rating__5${hero.name}" class="rating__label"></label>
        <input type="radio" name="rating"  id="rating__4${hero.name}" class="rating__item" value="4"/>
        <label for="rating__4${hero.name}"  class="rating__label"></label>
        <input type="radio" name="rating" id="rating__3${hero.name}" class="rating__item" value="3"/>
        <label for="rating__3${hero.name}" class="rating__label"></label>
        <input type="radio" name="rating" id="rating__2${hero.name}" class="rating__item" value="2"/>
        <label for="rating__2${hero.name}" class="rating__label"></label>
        <input type="radio" name="rating" id="rating__1${hero.name}" class="rating__item" value="1"/>
        <label for="rating__1${hero.name}" class="rating__label"></label>
      </div>
    </div>
      
      </div>
      </div> 

    </div>`;
  }

  document.querySelector(".wrapper").innerHTML = heroesContent;

  for (let hero of heroes) {
    let ratings = document.getElementById(`${hero.name}`);
    let inputs = ratings.querySelectorAll("input");
    /* let rating = localStorage.getItem(`рейтинг ${hero.name}`);
    let ratingInput = document.getElementById(`rating__${rating}${hero.name}`);
    ratingInput.classList.add("checked"); */

    ratings.onclick = function () {
      // ratingInput.classList.remove("checked");
      for (let input of inputs) {
        if (input.checked) {
          /* let ratingInput = document.getElementById(
            `rating__${input.value}${hero.name}`
          );
          ratingInput.classList.add("checked"); */
          localStorage.setItem(`рейтинг ${hero.name}`, input.value);
        }
      }
    };
  }
});
