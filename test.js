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

// *
// **
// ***
// ****
// *****
// ******
// *******

let result = ''
const lines = 5

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

// ------------------------------------ФУНКЦІЇ

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

// ---------------------------------RETURN

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

// -------------Задача----------------

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
//   if (typeof times !== 'number' || times <= 0) {
//     return num
//   }

//   let str = ''

//   for (let i = 1; i <= times; i++) {
//     if (i === times) {
//       str += `${num * i}`
//       // Тут без черточек в конце
//     } else {
//       str += `${num * i}---`
//       // Это тоже самое, что и
//       // str = str + num * i + "---"
//     }
//   }
//   console.log(str)
//   return str
// }

// getMathResult(9, 9)

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
