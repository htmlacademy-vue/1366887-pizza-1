<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <a href="#" class="logo">
          <img
            src="@/assets/img/logo.svg"
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </a>
      </div>
      <div class="header__cart">
        <a href="#">0 ₽</a>
      </div>
      <div class="header__user">
        <a href="#" class="header__login"><span>Войти</span></a>
      </div>
    </header>

    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>
          <div class="content__dough">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>

              <div class="sheet__content dough">
                <label
                  v-for="doughItem in dough"
                  :key="doughItem.id"
                  class="dough__input"
                  :class="`dough__input--${doughItem.value}`"
                >
                  <input
                    type="radio"
                    name="dough"
                    :value="doughItem.value"
                    class="visually-hidden"
                    :checked="doughItem.id === 1"
                  />
                  <b>{{ doughItem.name }}</b>
                  <span>{{ doughItem.description }}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="content__diameter">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>

              <div class="sheet__content diameter">
                <label
                  v-for="sizeItem in sizes"
                  :key="sizeItem.id"
                  class="diameter__input"
                  :class="`diameter__input--${sizeItem.value}`"
                >
                  <input
                    type="radio"
                    name="diameter"
                    :value="sizeItem.value"
                    class="visually-hidden"
                    :checked="sizeItem.id === 2"
                  />
                  <span>{{ sizeItem.name }}</span>
                </label>
              </div>
            </div>
          </div>
          <div class="content__ingredients">
            <div class="sheet">
              <h2 class="title title--small sheet__title">
                Выберите ингредиенты
              </h2>

              <div class="sheet__content ingredients">
                <div class="ingredients__sauce">
                  <p>Основной соус:</p>

                  <label
                    v-for="sauce in sauces"
                    :key="sauce.id"
                    class="radio ingredients__input"
                  >
                    <input
                      type="radio"
                      name="sauce"
                      :value="sauce.value"
                      :checked="sauce.id === 1"
                    />
                    <span>{{ sauce.name }}</span>
                  </label>
                </div>

                <div class="ingredients__filling">
                  <p>Начинка:</p>

                  <ul class="ingredients__list">
                    <li
                      v-for="ingredientItem in ingredients"
                      :key="ingredientItem.id"
                      class="ingredients__item"
                    >
                      <span
                        class="filling"
                        :class="`filling--${ingredientItem.value}`"
                        >{{ ingredientItem.name }}</span
                      >

                      <div class="counter counter--orange ingredients__counter">
                        <button
                          type="button"
                          class="counter__button counter__button--minus"
                          disabled
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>

            <div class="content__constructor">
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>

            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <button type="button" class="button" disabled>Готовьте!</button>
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import pizza from "../static/pizza.json";
import {
  normalizeDough,
  normalizeIngredient,
  normalizeSauce,
  normalizeSize,
} from "../common/helpers/normalizePizza";
export default {
  name: "Index",
  data() {
    return {
      pizza,
    };
  },
  computed: {
    dough() {
      return this.pizza.dough.map((item) => normalizeDough(item));
    },
    sizes() {
      return this.pizza.sizes.map((item) => normalizeSize(item));
    },
    sauces() {
      return this.pizza.sauces.map((item) => normalizeSauce(item));
    },
    ingredients() {
      return this.pizza.ingredients.map((item) => normalizeIngredient(item));
    },
  },
};
</script>

<style scoped></style>
