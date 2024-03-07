/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */
 const myArray = [1703, 'Evgeny', true];
 
 console.log(`The length of the array 'myArray' is - ${myArray.length}`)

 myArray.push(null);
 myArray.push(undefined);

 console.log(`Now, the length of the array 'myArray' is - ${myArray.length}`)
