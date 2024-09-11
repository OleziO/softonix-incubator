// Реалізуйте функцію дизайн паттерну memoize яка кешує виконання виклику з одинаковими аргументами
// та при повторному виклику лише повертає вже закешований результат.

function sum (a, b) { return a + b } // for test

export const memoize = (fn) => {
  const cacheResults = {}
  const createHash = (...args) => JSON.stringify(args.sort()) // some hash generator fn

  return (...args) => {
    const key = createHash(args)

    if (!(key in cacheResults)) {
      cacheResults[key] = fn(...args)
    }

    return cacheResults[key]
  }
}

// приклад виконання вашого коду
const sumMemoized = memoize(sum)

sumMemoized(1, 3) // результат 4
sumMemoized(3, 3) // результат 6
sumMemoized(1, 3) // результат 4, відбулось повторне виконання, результат повернуто з кешу без виклику додавання
