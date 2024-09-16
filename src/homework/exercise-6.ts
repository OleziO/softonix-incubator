/* Реалізуйте дженерік версію методу масивів Array.push.
Для перевірки наведіть курсор на pushCheck */

type TPush<T extends unknown[], U> = [...T, U];

const pushCheck: TPush<[1, 2], '3'> = [1, 2, '3'] // [1, 2, '3']
// const pushCheck2: TPush<[1, 2], '3'> = [2, 1, '3'] // type error

console.log('pushCheck', pushCheck)
