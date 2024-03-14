/*
*
**
***
****
*****
******
*/

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++){
//     for (let j = 0; j < i; j++){
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result)

// first: for (let i = 0; i < 3; i++){
//     console.log(`First level ${i}`);
//     for (let j = 0; j < 3; j++){
//         console.log(`Second level ${j}`);
//         for (let k = 0; k < 3; k++){
//             if (k === 2) continue first;
//             console.log(`Third level ${k}`);
//         }
//     }
// }


//==================================
// // Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [...arr];

//     // Пишем решение вот тут
    
    
//     // Не трогаем
//     return result;
// }

// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof data[i] === 'number') {
//             data[i] = data[i] * 2;
//             continue;
//         }
//         data[i] = `${data[i]} - done`
        
//     }
//     // Пишем решение вот тут
    
    
//     // Не трогаем
//     return data;
// }

// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         result[i] = data[data.length - i - 1];
//     }    
    
//     // Не трогаем
//     return result;
// }

//====================================

// // Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++){
//         result[i] = arr[i]
//     }
    
//     // Не трогаем
//     return result;
// }

// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         if (typeof data[i] === 'string') {
//             data[i] = data[i] + ' - done'
//         } else {
//             data[i] = data[i] * 2
//         }
//     }
    
//     // Не трогаем
//     return data;
// }

// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = data.length - 1; i >= 0; i--){
//         result.push(data[i])
//     }
//     // Не трогаем
//     return result;
// }


//===========================
// const lines = 6;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 1; i <= lines; i++) {
//     for (let j = 1; j <= lines - i; j++) {
//         result += ' ';
//     }
    
//     for (let j = 1; j <= i * 2 - 1; j++) {
//         result += '*';
//     }
    
//     result += '\n';
// }
// console.log(result);


//================

// let rows = 6; // количество строк
// for (let i = 0; i < rows; i++) {
//     let space = ""; // переменная для пробелов
//     let stars = ""; // переменная для звездочек
//     for (let j = 0; j < rows - i; j++) {
//         space += " "; // добавляем пробелы в каждой строке
//     }
//     for (let k = 0; k < 2 * i + 1; k++) {
//         stars += "*"; // добавляем звездочки в каждой строке
//     }
//     console.log(space + stars); // выводим строку в консоль
// }

//==================
// // Место для первой задачи
// function sayHello(name) {
//     return `Привет, ${name}!`;
// }

// // Место для второй задачи
// function returnNeighboringNumbers(number) {
//     return [number - 1, number, number + 1];
// }

// // Место для третьей задачи
// function getMathResult(base, repeatCount) {
//     if (typeof repeatCount !== 'number' || repeatCount <= 0) {
//         return base;
//     }
//     let result;
    
//     for (let i = 1; i <= repeatCount; i++) {
//         if (i === 1) {
//             result = base;
//         } else {
//             result += `---${base * i}`;
//         }
//     }
    
//     return result;
// }



// // Место для первой задачи
// function sayHello(name) {
//     return `Привет ${name}`
// }

// // Место для второй задачи
// function returnNeighboringNumbers(number) {
//     return [number - 1, number, number + 1]
// }

// // Место для третьей задачи
// function getMathResult(num1, num2) {
//     if (typeof num2 === 'string' || num2 <= 0) {
//         return num1
//     }
//     let sum = num1;
//     let result = `${sum}`
    
//     for (let i = num2; i >= 0; i--){
//         sum = sum + num1
//         result = result + ' --- ' + sum 
//     }
//     return result
// }
// console.log(getMathResult(5,3))

//================================
// Место для первой задачи
// function calculateVolumeAndArea(length) {
//     if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0,
//         area = 0;
    
//     volume = length * length * length;
//     // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//     // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// // Место для второй задачи
// function getCoupeNumber(seatNumber) {
//     if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     for (let i = 4; i <= 36; i = i + 4) {
//         if (seatNumber <= i) {
//             return Math.ceil(i / 4);
//         }
//     }
// }


// function calculateVolumeAndArea(lengthEdgeCube) {
//     if (lengthEdgeCube <= 0 || typeof lengthEdgeCube !== 'number' ||  !Number.isInteger(lengthEdgeCube)) {
//         return 'При вычислении произошла ошибка'
//     }

//     let V = Math.pow(lengthEdgeCube, 3) // The volume of the cube
//     let S = 6 * Math.pow(lengthEdgeCube, 2) // The area of the cube
//     return `Объем куба: ${V}, площадь всей поверхности: ${S}`
// }
// // Место для второй задачи
// function getCoupeNumber(number) {
//     if (typeof number !== 'number' || number < 0 || !Number.isInteger(number)) {
//         return 'Ошибка. Проверьте правильность введенного номера места'
//     } else if (number > 36 || number === 0) {
//         return 'Таких мест в вагоне не существует.'
//     }

//     return Math.ceil(number / 4)
// }
// //======================
// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "Ошибка, проверьте данные";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0: 
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// getTimeFromMinutes(180)

// function findMaxNumber(a, b ,c, d) {
//     // Самое простое - это использовать Math.max :)
//     // А оптимизировать такую проверку мы научимся совсем скоро
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b ,c, d);
//     }
// }

// findMaxNumber(1, 5, 6.6, 10.5);
// findMaxNumber(1, 5, '6', '10');

// Место для первой задачи
// function getTimeFromMinutes(minutes) {
//     if (typeof minutes !== 'number' || !Number.isInteger(minutes) || minutes < 0) {
//         return 'Ошибка, проверьте данные'
//     }
//     const clock = Math.floor(minutes / 60); // количество целых часов
//     const minut = minutes - (clock * 60); // количество оставшихся минут
//     const lastDigit = clock.toString().charAt(clock.toString().length - 1)
//     let textOclock = ''; // текст час/часа/часов в зависимости от последнего символа часа
//     if (lastDigit === '1') {
//         textOclock = 'час'
//     } else if (lastDigit === '2' || lastDigit === '3' || lastDigit === '4') {
//         textOclock = 'часа'
//     } else {
//         textOclock = 'часов'
//     }
//     return `Это ${clock} ${textOclock} и ${minut} минут`
// }   

// console.log(getTimeFromMinutes(321))
// Место для второй задачи
// function findMaxNumber(num1, num2, num3, num4) {
//     const numbers = [num1, num2, num3, num4];
//     for (let i = 0; i < numbers.length; i++) {
//         if (typeof numbers[i] !== 'number' || numbers.length < 4) {
//             return 0;
//         }
//     }
//     return Math.max.apply(null, numbers);
// }

//=======================
// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// fib(5)

// === Числа Фибоначи моё решение
// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return ''
//     }
//     let x = 0;
//     let z = 1;
//     let y;
//     let result = '0';
//     if (num === 1) {
//         return result;
//     }
//     for (let i = 1; i <= num; i++){
//         if (result.length === ((num *2) - 1)) {
//             return result
//         }
//         result += ' ' + z.toString()
//         y = x + z;
//         x = z;
//         z = y;
//     }
//     return result
// }
// console.log(fib(7))
 
// function first() {

//     setTimeout(() => console.log(1), 500)
// }

// function second() {
//     console.log(2)
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`я учу: ${lang}`);
//     callback();
// }

// learnJS('JavaScript', function() {
//     console.log('Я прощшёл этот урок')
// })

// const  options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log(Object.keys(options))
//     }
// }
// // let counter = 0;
// // for (let key in options) {
// //     if (typeof(options[key]) === 'object'){
// //         for (let i in options[key]) {
// //             counter ++
// //             console.log(console.log(`Property: ${i}, value: ${options[key][i]}`))
// //         }
// //     } else {
// //         counter ++
// //         console.log(`Property: ${key}, value: ${options[key]}`)
// //     }
    
// // }

// //options.makeTest()

// const { bg, border } = options.colors
// console.log(bg, border)

const arr = [1, 2, 3, 6, 8];

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for (let value of arr){
//     console.log(value)
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} inside array ${arr} `)
// })

const str = prompt("","");
const products = str.split(', ');
console.log(products)

//console.log(arr);