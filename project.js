// const numberOfFilms = +prompt('Кіко кіна ти вже відів', '')

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// }

// const a = prompt('Один з останніх фільмів', ''),
//   b = +prompt('Оцініть фільм', ''),
//   c = prompt('Один з останніх фільмів', ''),
//   d = +prompt('Оцініть фільм', '')

// personalMovieDB.movies[a] = b
// personalMovieDB.movies[c] = d

// console.log(personalMovieDB)

// або || = true
// і && = folse

// console.log(NaN || 2 || undefined)

// console.log(NaN && 2 && undefined)

// console.log(1 || 2 || 3)

// console.log(!1 || (2 && !3))

// console.log(25 || (null && !3))

// console.log(NaN || (null && !3) || undefined || 5)

// console.log(NaN || (null && !3 && undefined) || 5)

// console.log((5 === 5 && 3 > 1) || 5)

// Цикли

// let num = 50

// while (num < 55) {
//   console.log(num)

//   num++
// }

// let num = 50

// do {
//   console.log(num)
//   num++
// } while (num < 55)

// for (let i = 1; i < 8; i++) {
//   console.log(i)
// }

// for (let i = 1; i < 8; i++) {
//     console.log(num)
//     num++
//   }

// for (let i = 1; i < 8; i++) {
//   if (i === 6) {
//     break
//   }
//   console.log(i)
// }

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break
//     continue
//   }
//   console.log(i)
// }

// Цикли в циклах

// for (let i = 0; i < 3; i++) {
//   console.log(i)
//   for (let j = 0; j < 3; j++) {
//     console.log(j)
//   }
// }

// function add(a, b, c) {
//   a + b + c
// }
// add(5, 5, 5)

// function add(a, b, c) {
//   return a * b + c
// }

// console.log()

// add(5, 5, 5)

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   let message = `You ordered droids worth ${
//     orderedQuantity * pricePerDroid + deliveryFee
//   } credits. Delivery (${deliveryFee} credits) is included in total price.`

//   return message
// }

// console.log(makeOrderMessage(5, 6, 6))

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let totalPrice = pricePerDroid * orderedQuantity
  let message

  if (totalPrice > customerCredits) {
    message = 'Insufficient funds!'
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`
  }
  return message
}

console.log(makeTransaction(12, 2, 1))
