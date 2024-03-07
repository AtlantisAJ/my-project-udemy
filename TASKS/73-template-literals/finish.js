/** ЗАДАЧА 73 - Шаблонные строки
 *
 * Создайте функцию "carInfo", которая возвращает информацию о машине:
 *  - Автомобиль считается дешевым, если его цена <= 20000
 *  - Автомобиль считается дорогим, если его цена > 20000
 *
 * Выводы в консоли должны совпадать с теми, которые в конце задачи
 */

const cars = [
  { brand: 'Honda', price: 13000 },
  { brand: 'Rolls-Royce', price: 120000 },
];

// function carInfo(cars){
//   if (cars.price <= 20000) {
//     return console.log(`Цена автомобиля ${cars.brand} - ${cars.price} и это дешёвая машина`);
//   } else {
//     return console.log(`Цена автомобиля ${cars.brand} - ${cars.price} и это дорогая машина`)
//   }
// }
function carInfo({ brand, price }) {
  return `Цена автомобиля ${brand} - ${price}$ и это ${price <= 20000 ? 'дешёвая' : 'дорогая'} машина`;
}

cars.forEach((car) => console.log(carInfo(car)));
// Цена автомобиля Honda - 13000$ и это дешёвая машина
// Цена автомобиля Rolls-Royce - 120000$ и это дорогая машина
