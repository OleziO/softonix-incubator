/*
  Опишіть тип TPerson на основі IUser та IAdmin та використовуйте це в масиві persons і функції logPerson,
  щоб виправити всі помилки TS.
*/

interface IUser {
  name: string
  age: number
  occupation: string
}

interface IAdmin {
  name: string
  age: number
  role: string
}

type TPerson = IUser | IAdmin

function logPerson (user: TPerson) {
  console.log(` - ${user.name}, ${user.age}`)
}

// ---------------- Alternative code ----------------
// interface IBaseUser {
//   name: string
//   age: number
// }

// interface IUser extends IBaseUser {
//   occupation: string
// }

// interface IAdmin extends IBaseUser{
//   role: string
// }

// type TPerson = IUser | IAdmin

// function logPerson (user: TPerson) {
//   console.log(` - ${user.name}, ${user.age}`)
// }
// ---------------------------------------------------

const persons: TPerson[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep'
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator'
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut'
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver'
  }
]

export {
  persons,
  logPerson
}
