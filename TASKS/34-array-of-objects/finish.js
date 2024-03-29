/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
const myCars = [
    {
        carBrand: 'BMW',
        price: 50000,
        isAvailableForSale: false
    },
    {
        carBrand: 'AUDI',
        price: 40000,
        isAvailableForSale: false
    },
    {
        carBrand: 'Geely',
        price: 25000,
        isAvailableForSale: true
    }
];

myCars.push({
    carBrand: 'Li',
    price: 50000,
    isAvailableForSale: true
});

console.log(myCars)