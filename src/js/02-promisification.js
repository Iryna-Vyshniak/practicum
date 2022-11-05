/* 
РЕЗУЛЬТАТ ПРОМИСА НЕЛЬЗЯ ПОЛУЧИТЬ НИГДЕ, КРОМЕ КАК ВНУТРИ ФУНКЦИЙ then() и catch()
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

// const makeOrder = dish => {
//   const DELAY = 1000;
// создаем промис и возвращаем его результат
//   return new Promise((resolve, reject) => { // внутри пишем callback. через какое время он потом резолвнится или рекжекнится
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve(`✅ Вот ваш заказ: ${dish}`);
//       }

//       reject('❌ Упс, у нас закончились продукты');
//     }, DELAY);
//   });
// };

// makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

/*
 * Промисификация «синхронных» функций, которые выполняются мгновенно, без задержек, без таймаутов и т.д.
 * - Promise.resolve()
 * - Promise.reject()
 */

// const makeOrder = dish => {
//   return Promise.resolve(`✅ Вот ваш заказ: ${dish}`); // если 100% функция выполнится успешно
// };

// makeOrder('пирожок').then(onMakeOrderSuccess);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

/*
 * Покемоны с https://pokeapi.co/
 
function fetch(url) {
    return new Promise(...);
}
 */


const fetchPokemonById = id => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json()) // тот же промис - обещает, что если все хорошо, то тут будет какой - то покемон
};

fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError); // fetchPokemonById(1) - это наш return fetch
fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);
fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError);

function onFetchSuccess(pokemon) {
    console.log('onFetchSuccess -> onFetchSuccess');
    console.log(pokemon);
}

function onFetchError(error) {
    console.log('onFetchError -> onFetchError');
    console.log('Это в блоке catch');
    console.log(error);
}


// makePromise
// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve('✅ Куку это resolve');
//       }

//       reject('❌ все пропало это reject');
//     }, 2000);
//   });
// };

// makePromise()
//   .then(result => console.log(result))
//   .catch(error => console.log(error));