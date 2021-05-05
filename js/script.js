"use strict";

const arr = [2, 13, 26, 8, 10];

arr.sort(compareNum); //правильная сортировка чисел
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

arr.pop(); //удаление элемента в конце массива
arr.push(11); // добавление элемента в конец массива

for (let i = 0; i < arr.length; i++) {          //перебор элементов массива
    console.log(arr[i]);
}

for (let value of arr) {           // ещё перебор элементов массива, можно использзовать break, continue
    console.log(value);
}

 arr.forEach(function(item, i, arr) {                        //более подробный перебор с настройками
     console.log(`${i}: ${item} внутри массива ${arr}`);
 });

 const str = prompt('', '');
 const products = str.split(', '); // разделение строки в массив по ключу из ()
 products.join('; ');  //склеивание эл. массива в строку через ('; ')
 products.sort(); //сортировка по алфавиту
 console.log(products);
