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

