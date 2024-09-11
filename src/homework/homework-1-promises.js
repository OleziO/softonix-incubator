// Задача на проміс.
// Виконайте послідовне виконання промісу `arrayHandler` стільки разів, скільки елементів знаходиться
// в масиві array. Кожен наступний проміс повинен виконатись лише тоді коли попередній успішно завершився.
// Функція `arrayHandler` приймає аргументом значення з поточної ітерації масиву `array`

export const arrayHandler = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num)
    }, num * 1000)
  })
}

const array = [1, 2, 3, 4, 5]
const promisesArray = array.map(item => arrayHandler(item))

export const chainPromisesArray = (promisesArray) => {
  promisesArray.reduce((prevPromise, currPromise) => {
    return prevPromise.then(() => {
      return currPromise
        .then(result => {
          console.log(`Promise resolved: ${result}`)
          return result
        })
    }
    )
  }, Promise.resolve())
    .catch(error => {
      console.error(`Promise rejected: ${error}`)
      throw error
    })
}

chainPromisesArray(promisesArray)
