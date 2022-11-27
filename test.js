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

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// let result = ''
// const lines = 10

// for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < lines - i; j++) {
//     result += '1'
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     result += '*'
//   }
//   result += '\n'
// }
// console.log(result)

// for (let i = 0; i <= lines; i++) {
//   result += '1'
//   for (let k = 0; k < lines - i; k++) {
//     result += '2'
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     result += '3'
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
// const eurCurr = 32

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



// ---------------МАСИВИ-------------------------

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

// ------------------------------LINEAR SEARCH------------
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

// ------------------------КОПІЮВААНЯ МАСИВУ----------------------

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

// // ----------------------
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


// ---------------Задача----------------


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

// let a;
// let b
// function availableCurr(arr, missingCurr) {
//   if (arr.length === 0) {
//     a = 'Нет доступных валют';
//   } else {
//     a = [...baseCurrencies, ...additionalCurrencies];

//     arr.forEach(member => {

//     }
//     );

//     return a;
//   }
// }
// availableCurr(['USD', 'EUR'], 'CNY');
// console.log(a)

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'PLN', 'CNY'];

function availableCurr(arr, missingCurr) {
  let str = '';
  arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

  arr.forEach(function (curr, i) {
    if (curr !== missingCurr) {
      str += `${curr}\n`;
    }
  });
  // Или
  // for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === missingCurr) {
  //         continue;
  //     }
  //     str += `${arr[i]}\n`;
  // }
  return str;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'))
