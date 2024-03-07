/** ЗАДАЧА 50 - Шаблонные строки
 *
 * 1. Создайте функцию "templateLiteral" с одним параметром "num"
 *
 * 2. Функция должна возвращать многострочную строку.
 *
 * 3. Ниже приведены примеры вызовов функции.
 */
// 1 Вариант решения
// function templateLiteral(num) {
//     const twoCondition = num >= 10 ? 'больше или равно' : 'меньше';
//     const sqrtNum = Math.sqrt(num);
//     return 'Число ' + num + '.' + '\n' + 'Это число ' + twoCondition + ' 10.' + '\n' + 'Квадратный корень этого числа - ' + sqrtNum
// }

// 2 Вариант решения
function templateLiteral(num) {
    const twoCondition = num >= 10 ? 'больше или равно' : 'меньше';
    const sqrtNum = Math.sqrt(num);
    return `Число ${num}.
    Это число ${twoCondition} 10.
    Квадратный корень этого числа - ${sqrtNum}.`
}


// ТЕСТ 1
const myNumber = 9
console.log(templateLiteral(myNumber))
/* 
Число 9.
Это число меньше 10.
Квадратный корень этого числа - 3.
*/

// ТЕСТ 2
const myAnotherNumber = 25
console.log(templateLiteral(myAnotherNumber))
/* 
Число 25.
Это число больше или равно 10.
Квадратный корень этого числа - 5.
*/
