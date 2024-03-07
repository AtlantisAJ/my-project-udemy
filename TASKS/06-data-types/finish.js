/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */
// const strict = 'строка';
// const number = 1703;
// const boolean = true;
// const n = null;
// const und = undefined;
// const object = {};
// const array = [];

// console.log(typeof(strict))
// console.log(typeof(number))
// console.log(typeof(boolean))
// console.log(typeof(n))
// console.log(typeof(und))
// console.log(typeof(object))
// console.log(typeof(array))

///
const all = ['строка', 1703, true, null, undefined, {}, []]
all.map(el => console.log(typeof(el)))