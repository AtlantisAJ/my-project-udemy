/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
}

// const mult = (obj) => {
//   let mult = 1;
//   for (let key in obj) {
//     mult = mult * obj[key]
//   }
//   return mult
// }
const mult = (nums) => {
  const { x, y, z } = nums;
  return x * y * z
}

const result = mult(objectWithNumbers)
console.log(result)
// 300
