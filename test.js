// Логічні Оперетори

// const hamburger = 5
// const fries = 5

// if (hamburger && fries) {
//   console.log('Я ситий')
// }

// ----------------

// const hamburger = 3
// const fries = 1
// const kola = 1
// if (hamburger === 3 && kola === 1 && fries) {
//   console.log('Всі ситі')
// } else {
//   console.log('Mи йдемо геть')
// }

// ---------------------------

// const hamburger = 1
// const fries = 0
// const kola = 0
// if (hamburger && (kola || fries)) {
//   console.log('Всі ситі')
// } else {
//   console.log('Mи йдемо геть')
// }

// --------Цикли--------------

// let num = 5
// while (num < 11) {
//   console.log(num)
//   num++
// }

// ----------------------

// let num = 20
// do {
//   console.log(num)
//   num--
// } while (num > 9)

// ----------------------------

// for (let i = 1; i < 8; i++) {
//   console.log(i)
// }

// ------------------

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     break
//   }
//   console.log(i)
// }

// ----------------------------------

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     continue
//   }
//   console.log(i)
// }

// ------Цикли в Циклах-------------

// for (let i = 0; i < 3; i++) {
//   console.log(i)
//   for (let j = 3; j < 5; j++) {
//     console.log(j)
//   }
// }

//------------------------------------

// *
// **
// ***
// ****
// *****
// ******
// *******

// let result = ''
// const lenght = 7

// for (let i = 1; i < lenght; i++) {
//   for (let j = 0; j < i; j++) {
//     result += '*'
//   }
//   result += '\n'
// }

// console.log(result)

// ------------------------------

// first: for (let i = 1; i < 3; i++) {
//   console.log(`First Level: ${i}`)
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second Level: ${j}`)
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) continue first
//       console.log(`Third Level: ${k}`)
//     }
//   }
// }

// ------------------------------------------

// first: for (let i = 1; i < 3; i++) {
//   console.log(`First Level: ${i}`)
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second Level: ${j}`)
//     for (let k = 0; k < 3; k++) {
//       if (k === 2) break first
//       console.log(`Third Level: ${k}`)
//     }
//   }
// }

// ------------------------------------

// for (let i = 20; i > 10; i--) {
//   if (i === 13) {
//     break
//   }
//   console.log(i)
// }

// ----------------------------------

// for (let i = 2; i < 11; i += 2) {
//   console.log(i)
// }

// --------------------------

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue
//   } else {
//     console.log(i)
//   }
// }

// let mass = []
// let num = 3
// while (num < 16) {
//   mass = num
//   console.log(mass)
//   num += 2
// }






// ----------------Метод Функції--------------

// const bookShef = {
//   book: ['Кобзар', 'Біблія', 'Буквар'],

//   //  ----------------add--------------
//   addBook(name) {
//     this.book.push(name)
//   },

//   // --------dell----
//   removeBook(bookName) {
//     const bookIndex = this.book.indexOf(bookName)
//     this.book.splice(bookIndex, 1)
//   },
// }
// // bookShef.addBook('Абетка')
// bookShef.removeBook('Кобзар')
// console.log(bookShef.book)

// ---------------------------
// Функції

// function sum(x, y, z) {
//   return x * y * z
// }

// let res = sum()
// console.log(res)

// // ------------Функція перебора
// function count(countFrom = 0, countTo = 10, step = 1) {
//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i)
//     console.log(countTo * i)
//   }
// }

// count(11, 58, 6)

// -----------------------

// var step
// for (step = 0; step < 5; step++) {
//   // Запускается 5 раз, с шагом от 0 до 4.
//   console.log('Идём 1 шаг на восток')
// }
// let i = 1
// do {
//   i += 1
//   console.log(i)
// } while (i < 5)
// ----------------------
// var n = 0
// var x = 0
// while (n < 9) {
//   n++
//   x += n
// }
// console.log(x, n)
// -------------------
// var x = 0
// var z = 0
// labelCancelLoops: while (true) {
//   console.log('Внешний цикл: ' + x)
//   x += 1
//   z = 1
//   while (true) {
//     console.log('Внутренний цикл: ' + z)
//     z += 1
//     if (z === 10 && x === 10) {
//       break labelCancelLoops
//     } else if (z === 10) {
//       break
//     }
//   }
// }

// ------------------
// let obj = { model: 'AUDI A8', year: '2019', color: 'brown' }

// for (key in obj) {
//   console.log(`${key} = ${obj[key]}`)
// }
// -------------------------------------

// const number = 10

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue
//   }

//   console.log('Непарне i: ', i) // 1, 3, 5, 7, 9
// }

// const number = 10

// for (let i = 0; i < number; i++) {
//   if (i % 2 === 0) {
//   } else {
//     continue
//   }

//   console.log('Непарне i: ', i) // 1, 3, 5, 7, 9
// }

// function a(massege, price) {
//   let words = massege.split(' ')
//   let chek = words.length * price
//   console.log(chek)
// }
// a('rty mkj lki', 1)

// function getTimeFromMinutes(minut) {
//   if (typeof minut !== 'number' || !Number.isInteger(minut) || minut < 0) {
//     return 'Ошибка, проверьте данные'
//   } else if (minut === 0 || minut > 600) {
//     return 'Ошибка, проверьте данные'
//   }
//   let a = ' '
//   a = minut / 60
//   hodunu = Math.trunc(a)
//   hvulunu = minut - hodunu * 60

//   if (hodunu === 0 || hodunu >= 5) {
//     return `Это ${hodunu} часов и ${hvulunu} минут`
//   } else if (hodunu == 1) {
//     return `Это ${hodunu} час и ${hvulunu} минут`
//   } else {
//     return `Это ${hodunu} часa и ${hvulunu} минут`
//   }
// }

// console.log(typeof getTimeFromMinutes(130))

// function getTimeFromMinutes(minutesTotal) {
//   if (
//     typeof minutesTotal !== 'number' ||
//     minutesTotal < 0 ||
//     !Number.isInteger(minutesTotal)
//   ) {
//     return 'Ошибка, проверьте данные'
//   }
//   const hours = Math.floor(minutesTotal / 60)
//   const minutes = minutesTotal % 60
//   let hoursStr = ''
//   switch (hours) {
//     case 0:
//       hoursStr = 'часов'
//       break
//     case 1:
//       hoursStr = 'час'
//       break
//     case 2:
//     case 3:
//     case 4:
//       hoursStr = 'часа'
//       break
//     default:
//       hoursStr = 'часов'
//   }

//   return `Это ${hours} ${hoursStr} и ${minutes} минут`
// }

// Место для второй задачи

// function findMaxNumber(a, b, c, d) {
//   if (
//     typeof a !== 'number' ||
//     typeof b !== 'number' ||
//     typeof c !== 'number' ||
//     typeof d !== 'number'
//   ) {
//     return 0
//   } else {
//     return Math.max(a, b, c, d)
//   }
// }

// findMaxNumber(5, 265.5, 684)

// -----------------------------------------------------------
// (**) Задача с собеседований на числа Фибоначчи
// Это одна из классических задач в программировании на самых разных языках. Скорее всего вы слышали про числа Фибоначчи, где первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел. И на собеседованиях часто дают задачи, связанные с этими числами. Есть разные вариации и тут мы попробуем решить одну из них.
// Сразу скажу, что есть варианты решения через прием, называемый рекурсия. Он дальше по курсу. Но этот вариант нужно решить без её применения. Такие условия часто ставят на собеседованиях. Когда вы пройдете урок по рекурсии, вы можете вернуться в это задание и попробовать решить по другому. Так же подсказку (но не решение этой задачи) можно найти тут. Но постарайтесь не открывать 🙂
// Задача:
// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.
// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.
// Пример:
// fib(4) => ''0 1 1 2"
// fib(7) => ''0 1 1 2 3 5 8"
// fib('7') => ''"
// fib(1) => "0"
// fib(0) => ''"
// Задача непростая для новичков, так что с первого раза может не получится.

// function fib(n) {
//   if (typeof n !== 'number' || !Number.isInteger(n) || n <= 0) {
//     return ''
//   }
//   let a = 0
//   b = 1
//   c = ''
//   k = ''
//   for (let i = 1; i <= n; i++) {
//     c = a + b
//     k += `${a}  `

//     a = b
//     b = c
//   }
//   return k
// }

// console.log(fib())

// -------------------------

// function fib(num) {
//   if (typeof num !== "number" || num <= 0 || !Number.isInteger(num)) {
//     return "";
//   }

//   let result = "";
//   let first = 0;
//   let second = 1;

//   for (let i = 0; i < num; i++) {
//     if (i + 1 === num) {
//       result += `${first}`;
//       // Без пробела в конце
//     } else {
//       result += `${first} `;
//     }

//     let third = first + second;
//     first = second;
//     second = third;
//   }

//   return result;
// }

// console.log(fib("ssaf"));











// ------------------

// const arrayOfNumbers = []

// for (let i = 5; i < 11; i++) {
//   arrayOfNumbers[i - 5] = i
// }
// console.log(arrayOfNumbers)

// return arrayOfNumbers

// ----------------
// function secondTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, 'Shopping', 20, 'Homework']

//   // Пишем решение вот тут
//   for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === 'number') {
//       data[i] = data[i] * 2
//     } else if (typeof data[i] === 'string') {
//       data[i] = `${data[i]} - done`
//     }
//   }
//   console.log(data)

//   // Не трогаем
//   return data
// }

// ----------------------------------- Розвернути масив REVERSE

// function thirdTask() {
//   const data = [5, 10, 'Shopping', 20, 'Homework']
//   const result = []

//   for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
//   }

//   console.log(result)
//   return result
// }

// thirdTask()

// ---------------------------------------Піраміда

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// let result = "";
// const lines = 5;

// for (let i = 0; i <= lines; i++) {
//   for (let j = 1; j < lines - i; j++) {
//     result += ''
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     result += '*'
//   }
//   result += '\n'
// }
// console.log(result)

// for (let i = 0; i <= lines; i++) {
//   result += ''
//   for (let k = 0; k < lines - i; k++) {
//     result += ' '
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     result += '*'
//   }

//   result += '\n'
// }
// console.log(result)

// ------------------------------------ФУНКЦІЇ---------------------

// let num = 20

// function showFirstMassege(text) {
//   console.log(text)
//   num = 10
//   console.log(num)
// }

// showFirstMassege('Hello World')
// console.log(num)

// function calc(a, b) {
//   return a + b
// }

// console.log(calc(5, 8))
// console.log(calc(1, 45))
// console.log(calc(58, 42))
// console.log(calc(56, 9))

// function ret() {
//   let num = 50
//   return num
// }

// const anotherNum = ret()
// console.log(anotherNum)

// ---------------Ще Функії--------------
//  -------------КУРСИ ВАЛЮТ------------

// const usdCurr = 28
// // const eurCurr = 32

// function convert(amount, curr) {
//   console.log(curr * amount)
// }

// convert(500, usdCurr)
// convert(250, eurCurr)

// ---------------------------------RETURN------------------------

// const usdCurr = 28
// const discount = 0.9

// function convert(amount, curr) {
//   console.log(curr * amount)
//   return curr * amount
// }

// function promotion(result) {
//   console.log(result * discount)
// }

// // promotion(convert(500, usdCurr))
// const res = convert(500, usdCurr)

// promotion(res)

// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i)
//     if (i === 3) return
//   }
//   console.log('done')
// }

// test()

// ------------------------------------------Задача----------------------

// Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.
// P.S. возвращать - это использовать ключевое слово return.
// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

// function sayHello(name) {
//   return `Привет, ${name}!`
// }

// sayHello('Антон')

// ---------------------------

// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

// function returnNeighboringNumbers(num) {
//   return [num - 1, num, num + 1]
// }

// returnNeighboringNumbers(5)

// -------------------------------------------

// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.
// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)
// Примеры:
// Вызов функции getMathResult(5, 3) даст ответ 5---10---15
// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
// Вызов функции getMathResult(10, '5') даст ответ 10
// Вызов функции getMathResult(10, 0) даст ответ 10
// Вызов функции getMathResult(20, -5) даст ответ 20
// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.
// Да, задача сложнее, но она просто объединяет все то, что мы уже учили.

// function getMathResult(num, times) {
//   if (typeof times !== "number" || times <= 0) {
//     return num;
//   }

//   let str = "";

//   for (let i = 1; i <= times; i++) {
//     if (i === times) {
//       str += `${num * i}`;
//       // Тут без черточек в конце
//     } else {
//       str += `${num * i}---`;
//       // Это тоже самое, что и
//       // str = str + num * i + "---"
//     }
//   }
// }
// console.log(str);
// return str;

// function getMathResult(num, times) {
//   if (typeof (times) !== 'number' || times <= 0) {
//     return num;
//   }
//   let str = '';
//   for (let i = 1; i <= times; i++) {
//     if (i === times) {
//       str += `${num * i}`;
//     } else {
//       str += `${num * i}---`;
//     }
//   }
//   console.log(str)
//   return str;
// }
// getMathResult(5, 3)


// --------------------------ЗАДАЧА--------------


// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба(тоже базовая математика, иногда используется в создании анимаций).Эта функция принимает в себя целое число со значением длины ребра куба.Ответ выведите в формате строки, который изображен в примерах.
// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"
// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться.Это из - за того, что этот оператор из более нового стандарта, чем тут доступен.
//   Примеры:
// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'
// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'
// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'
// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'


// function calculateVolumeAndArea(length) {
//   if (typeof (length) !== 'number' || length <= 0 || length % 1 !== 0) {
//     return "При вычислении произошла ошибка";
//   }
//   const s = length * length * 6;
//   const v = length * length * length;
//   return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
// }
// calculateVolumeAndArea(5);
// console.log(res);

// // ----------------------------------------

// function calculateVolumeAndArea() {

//   if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//     return "При вычислении произошла ошибка";
//   }
//   let volume = 0,
//     area = 0;

//   volume = length * length * length;
//   // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//   // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//   area = 6 * (length * length);

//   return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }
// console.log(calculateVolumeAndArea(10))

// -------------------------------------------------------------------

// function getCoupeNumber(ticket) {
//   if (typeof (ticket) !== 'number' || !Number.isInteger(ticket) || ticket < 0) {
//     return "Ошибка. Проверьте правильность введенного номера места";
//   } else if (ticket == 0 || ticket > 36) {
//     return "Таких мест в вагоне не существует";
//   }
//   return Math.ceil(ticket / 4);
// }

// console.log(getCoupeNumber(12));

// ---------------------------TIME-----------------------------------------

// function getCoupeNumber(minut) {
//   if (typeof (minut) !== 'number' || !Number.isInteger(minut) || minut < 0) {
//     return "Ошибка, проверьте данные";
//   } else if (minut == 0 || minut > 600) {
//     return "Ошибка, проверьте данные";
//   }
//   let a = minut / 60;
//   hodunu = Math.trunc(a);
//   hvulunu = minut % 60;

//   if (hodunu == 0 || hodunu >= 5) {
//     return `Это ${hodunu} часов и ${hvulunu} минут`;

//   } else if (hodunu == 1) {
//     return `Это ${hodunu} час и ${hvulunu} минут`;

//   } else {
//     return `Это ${hodunu} часa и ${hvulunu} минут`;
//   }
// }
// console.log(getCoupeNumber(38));

// ------------------------Обєкти--------------------

// const object = {
//   name: 'Misha',
//   surname: 'Brenzovich',
//   car: {
//     first: 'Lada',
//     second: 'Opel',
//     third: 'BMW'
//   },
//   makeTest: function () {
//     console.log('Bravo');
//   }
// };

// for (let key in object) {
//   console.log(key);
// }

// object.makeTest();

// const { first, second } = object.car;

// console.log(first);

// console.log(Object.keys(object));



// --------------------------------------------------------МАСИВИ-------------------------

// const mass = [1, 20, 3, 41, 5, 6, 7, 8];

// mass.sort(sortNum);

// function sortNum(a, b) {
//   return a - b;
// }
// console.log(mass)
// mass.forEach(function (item, i, mass) {
//   console.log(`${i}: ${item} всередині масиву ${mass}`)
// })
// mass.pop();
// mass.push(10);
// console.log(mass);
// console.log(mass.length);

// for (let i = 0; i < mass.length; i++) {
//   console.log(mass[i]);
// }

// for (let value of mass) {
//   console.log(value);
// }

// ------------------------------------------------LINEAR SEARCH------------

// const testMass = [1, 20, 3, 41, 5, 6, 7, 8];

// function LinearSearch(t, A)      // t - искомый элемент,
// {                               // A - массив, в котором ищем.
//   var n = A.length, i = 0;

//   A[n] = t;

//   while (A[i] !== t) i++;

//   if (i < n) return i;          // На выходе индекс искомого элемента.
//   else return -1;               // Если искомого элемента нет в массиве, то -1.
// }
// console.log(LinearSearch(8, testMass));


// --------------------------------------

// const testMass = [1, 2, 3, 4, 5, 6, 7, 8];

// function BinarySearch(t, A)         // t - искомый элемент,
// {                                  // A - упорядоченный массив, в котором ищем.
//   var i = 0, j = A.length - 1, k;

//   while (i <= j) {
//     k = Math.floor((i + j) / 2);
//     if (t === A[k]) return k;
//     else if (t < A[k]) j = k - 1;
//     else i = k + 1;
//   }
//   // На выходе индекс искомого элемента.
//   return -1;                     // Если искомого элемента нет в массиве, то -1.
// }
// console.log(BinarySearch(3, testMass));

// --------------------------------------------Копіювання обєкту-------------

// const object = {
//   name: 'Misha',
//   surname: 'Brenzovich',
//   car: {
//     first: 'Lada',
//     second: 'Opel',
//     third: 'BMW'
//   }
// };
// const copyObject = {};
// function copy(objCopy) {
//   for (let key in objCopy) {
//     copyObject[key] = objCopy[key];
//     // return copyObject;
//   }
// }
// copy(object);
// copyObject.name = 'dima';
// // const copyObject = object;
// // copyObject.name = 'dima';
// console.log(object);
// console.log(copyObject);
// const add = {
//   supercar: 'Lambo',
//   sportcar: 'GTR'
// };
// // console.log(Object.assign(copyObject, add));
// const clone = Object.assign({}, add);
// clone.newObj = 155;
// console.log(clone);
// console.log(add);

// -------------------------------------------------КОПІЮВААНЯ МАСИВУ----------------------

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const copyArr = arr.slice();
// copyArr[1] = 'dsvsevsvs';
// console.log(arr);
// console.log(copyArr);
// // ----------

// const video = ['youTube', 'viteo', 'tiktok'];
// const blog = ['bloger', 'wordPress', 'liveJornal'];
// const internet = [...video, ...blog, 'telegram', 'facebook'];

// console.log(internet);

// ----------------------
// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// const num = [6, 5, 9];

// log(...num);

// const obj = {
//   one: 1,
//   two: 2
// };

// const newObj = { ...obj };
// newObj.three = 3;
// console.log(obj, newObj);


// --------------------------------------------------------Задача----------------


// const personalPlanPeter = {
//   name: "Peter",
//   age: "29",
//   skills: {
//     languages: ['ru', 'eng'],
//     programmingLangs: {
//       js: '20%',
//       php: '10%'
//     },
//     exp: '1 month'
//   },

//   showAgeAndLangs: function (plan) {
//     const { age } = plan;
//     const { languages } = plan.skills;
//     let str = `Мне ${age} и я владею языками: `;

//     languages.forEach(function (lang) {
//       str += `${lang.toUpperCase()} `;
//     });
//     return str;
//   }
// };

// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// );

// function showProgrammingLangs(plan) {
//   let str = '';
//   const { programmingLangs } = plan.skills;
//   for (let key in programmingLangs) {
//     str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//   }
//   return str;
// }
// console.log(showProgrammingLangs(personalPlanPeter));

// function showExperience(plan) {
//   const { exp } = plan.skills;
//   return exp;
// }
// console.log(showExperience(personalPlanPeter));

// function showExperience(plan) {
//   let a = plan.skills.exp;
//   return `${a}`;
// }
// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//   let a = { ...plan.skills.programmingLangs };
//   for (let key in a) {
//     console.log(`Язик ${key} изучен на ${a}`, a);
//   }
//   // const { js, php } = plan.skills.programmingLangs;
//   // return `Язык js изучен на ${js} Язык php изучен на ${php}`;
// }
// console.log(showProgrammingLangs(personalPlanPeter));

// --------------------------------

// Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

//   showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива.Если массив пустой, то выводится сообщение 'Семья пуста'

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//   if (arr.length === 0) {
//     let str = '';
//     str = `Семья пуста`;
//   }
//   else {
//     str = `Семья состоит из: `;
//   }

//   arr.forEach(a => str += `${a} `)
//   return str;
// }
// console.log(showFamily(family));




// function showFamily(arr) {
//   let str = '';

//   arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//   arr.forEach(member => {
//     str += `${member} `;
//   });

//   return str;
// }

// showFamily(family);





// const arraySparse = [1, 3, , 7];
// let numCallbackRuns = 0;

// arraySparse.forEach((element) => {
//   console.log(element);
//   numCallbackRuns++;
// });

// console.log("numCallbackRuns: ", numCallbackRuns);


// const massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// massiv.forEach((a) => { console.log(a + 12); });

// ------------------------------

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//   arr.forEach((element) => { console.log(element.toLowerCase()); });

// }
// standardizeStrings(favoriteCities)
// ---------------------------------------------------------

// Задача с собеседований.Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
//   Пример:
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'
// Функцию можно применить к любой строке.Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
// Это очень интересная задача, которую можно решить несколькими способами.Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает.Как небольшая подсказка, есть метод, который может вам помочь.И часть дополнительных вариантов решения мы тоже изучим в течении курса.
// Может показать сложной с первого взгляда, но это совсем не так 🙂


// let someString = 544;

// function reverse(str) {
//   if (typeof (str) !== 'string') {
//     return "Ошибка!";
//   }
//   // Самый оптимальный вариант решения
//   return str.split('').reverse().join('');
// }
// reverse(someString);
// console.log(someString);


// 4) Представьте такую реальную ситуацию.У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах.Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу(сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате.Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'.Функция возвращает строку в нужном виде.
//   Пример:
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// Доступные валюты:
// UAH
// RUB
// Заметьте:
// - CNY(юань) исчез из списка валют, значит такая валюта закончилась
//   - После валюты: стоит перенос строки \n, и после каждой валюты тоже.Это важно для тестов
//     - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//   let str = '';
//   arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

//   arr.forEach(function (curr, i) {
//     if (curr !== missingCurr) {
//       str += `${curr}\n`;
//     }
//   });

//   // Или
//   // for (let i = 0; i < arr.length; i++) {
//   //     if (arr[i] === missingCurr) {
//   //         continue;
//   //     }
//   //     str += `${arr[i]}\n`;
//   // }

//   return str;
// }

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB'))

// --------------------------ПРОТОТИПИ------------------------------------

// const soldier = {
//   heltch: 400,
//   armor: 100,
//   sayHello: function () {
//     console.log("Hello")
//   }
// };
// const jonh = {
//   heltch: 100
// };

// jonh.__proto__ = soldier; // НЕ ВИКОРИСТОВУВАТИ

// Object.setPrototypeOf(jonh, soldier);      // Наслідування прототипу

// const jonh = Object.create(soldier);          //СТВОРЕННЯ ПРОТОТИПУ

// console.log(jonh.armor);
// jonh.sayHello();


// ------------------------------------------------------------------ЗАДАЧА------------------------------------------------

// Задача:
// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData.Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку.Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'.И все 🙂
// Но эта задача содержит несколько подзадач внутри:
// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
// - определение того, хватает ли бюджета на оплату такого объема;
// - все числа идут без единиц измерения для упрощения, просто цифры и все;
// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.


// const shoppingMallData = {
//   shops: [
//     {
//       width: 10,
//       length: 5
//     },
//     {
//       width: 15,
//       length: 7
//     },
//     {
//       width: 20,
//       length: 5
//     },
//     {
//       width: 8,
//       length: 10
//     }
//   ],
//   height: 5,
//   moneyPer1m3: 10,
//   budget: 50000

// };

// function isBudgetEnough(data) {
//   let volume = 0;
//   let sShop = 0;

//   data.shops.forEach(shop => {
//     sShop += shop.width * shop.length;
//   });
//   volume = sShop * data.height;
//   if ((volume * data.moneyPer1m3) - data.budget >= 0) {
//     return 'Бюджета недостаточно';
//   } else {
//     return 'Бюджета достаточно';
//   }
// };

// console.log(isBudgetEnough(shoppingMallData));

// -------------------------------------------------------------

// Задача:

// // У вас есть список учеников, которые хотят поиграть в игру:
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// // Но команд может быть только 3 по 3 человека.Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
// // Внутри она сначала сортирует имена по алфавиту.Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку.Эти группы должны быть массивами.Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.
// //   Пример:
// sortStudentsByGroups(students)  =>
// [
//   ['Andrew', 'Ann', 'Bernard'],
//   ['Cris', 'Josh', 'Mark'],
//   ['Peter', 'Sam', 'Sandra'],
//   'Оставшиеся студенты: Takesi'
// ]
// // Если убрать одно студента из списка, то результат будет:

// [
//   ['Andrew', 'Ann', 'Bernard'],
//   ['Cris', 'Josh', 'Mark'],
//   ['Peter', 'Sam', 'Sandra'],
//   'Оставшиеся студенты: -'
// ]
// // А если добавить одного, то:

// [
//   ['Andrew', 'Ann', 'Bernard'],
//   ['Cris', 'Josh', 'Mark'],
//   ['Peter', 'Sam', 'Sandra'],
//   'Оставшиеся студенты: Takesi, Somebody'
// ];

// То есть, меняется содержимое строки.Все оставшиеся ученики попадают туда.
// Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили.Просто распишите логику действий строка за строкой.

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Ann', 'Mark', 'Josh', 'Sandra'];

// function sortStudentsByGroups(arr) {
//   arr.sort();
//   const a = [];
//   b = [];
//   c = [];
//   d = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i < 3) {
//       a.push(arr[i]);
//     } else if (i < 6) {
//       b.push(arr[i]);
//     } else if (i < 9) {
//       c.push(arr[i]);
//     } else {
//       d.push(arr[i])
//     }
//   }
//   return [a, b, c, `Оставшиеся студенты: ${d.length === 0 ? '-' : d.join(', ')}`];
// };
// console.log(sortStudentsByGroups(students));

// -----------------------------------ДИНАМІЧНА ТИПІЗАЦІЯ-------------------------------------
//  TO STRING
// 1)
// console.log(typeof (String(5)));
// 2)
// console.log(typeof (5 + ''));
// const num = 5;
// console.log("http://facebook/catalog" + num);
// 3)
// const fontSize = 26 + 'px';
// console.log(typeof (fontSize));

// // To Number

// 1)
// console.log(typeof (Number("6595")))
// 2)
// console.log(+'5' + 5);
// 3)
// console.log(typeof (parseInt("15px", 10)));

// TO BOOLEAN

// 0, '', null, undefined, NaN;

//  1)
// let switcher = null;
// if (switcher) {
//   console.log('Working...')
// }

// switcher = 1;
// if (switcher) {
//   console.log('Working...')
// }

// // 2)
// console.log(typeof (Boolean('4')));

// // 3)
// console.log(typeof (!!'5'));

// --------------------ЗАМИКАНИЕ ЛЕКСИЧЕСКОГО ОКРУЖЕНИЯ-------------------

// let number = 5; debugger;

// function logNumber() {
//   let number = 4; debugger;
//   console.log(number);
// }

// number = 6;

// logNumber(); debugger;


// Что будет содержаться в переменной result после завершения кода ?

// function foo(a, b) {
//   const [first] = a;
//   const { eng } = b;

//   return `${first} ${eng}`;
// }

// const result = foo(['Hello', 'Привет'], { ru: 'Мир', eng: 'World' });
// console.log(result)


// Что вам следует проверить
// Лекция 25 Функции, стрелочные ф - ции(ES6)
// Лекция 33 Массивы и псевдомассивы
// Лекция 28 Методы и свойства строк и чисел
// Лекция 22 Циклы
// Лекция 20 Условия



// -----------------------------------------------------------------------------------------------

