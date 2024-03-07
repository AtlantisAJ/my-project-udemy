/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]

// Моё решени
// const sumPositiveNegative = (arr) => {
//     let positive = 0;
//     let negative = 0;
//     arr.map((el) => {
//         if (el >= 0) {
//             positive += el;
//         } else {
//             negative += el
//         };
//     })
//     return {
//         positive,
//         negative
//     }
// }

// Решение учителя
function sumPositiveNegative(arr) {
    return arr.reduce((acc, num) => {
        if (num > 0) {
            return {
                // ...acc, - альтернатива
                // positive: acc.positive + num,
                positive: acc.positive + num,
                negative: acc.negative
            }
        } else {
            return {
                negative: acc.negative + num,
                positive: acc.positive
            }
        }
    }, { positive: 0, negative:0 })
}



const result = sumPositiveNegative(nums)

console.log(result)
// { positive: 74, negative: -54 }
