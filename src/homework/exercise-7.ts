/* Реалізуйте дженерік версію методу масивів Array.unshift.
Для перевірки наведіть курсор на unshiftCheck */

type TUnshift<T extends unknown[], U> = [U, ...T];

const unshiftCheck: TUnshift<[1, 2], 0> = [0, 1, 2] // [0, 1, 2]
// const unshiftCheck2: TUnshift<[1, 2], 0> = [1, 0, 2] // type error

console.log(unshiftCheck)
