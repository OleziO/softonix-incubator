/*
Опишіть клас таким чином, щоб він міг працювати з динамічними типами данних. Для цього використайте generics

  - Метод get повинен повертати масив з описаним типом на основі переданого generic.
    Тобто якщо в клас передано generic string, то метод має повертати string[]

  - Метод add повинен приймати 2 аргументи:
    el: елемент який потрібно додати до elements
    type: куди саме додати елемент. Може бути або append, або prepend. Дефолтне значення - append

  - Метод contains приймає аргумент predicate, який є функцією та перевіряє чи існує елемент в масиві elements.
    Приклад виконання дивіться нижче

  - Метод delete приймає аргумент predicate, який є функцією та видаляє елемент з масива elements.
    Приклад виконання дивіться нижче
*/

enum EAddTypes {
  append = 'append',
  prepend = 'prepend'
}

interface IUser {
  id: number
  name: string
}

type TAddType = keyof typeof EAddTypes
type TPredicate <T> = (item: T) => boolean

class Collection <T> {
  private elements: T[] = []

  constructor (elements: T[] = []) {
    this.elements = elements
  }

  get (): T[] {
    return this.elements
  }

  add (el: T, type: TAddType = EAddTypes.append): void {
    const method = type === EAddTypes.prepend ? 'unshift' : 'push'
    this.elements[method](el)
  }

  contains (predicate: TPredicate<T>): boolean {
    return this.elements.some(predicate)
  }

  delete (predicate: TPredicate<T>): void {
    this.elements = this.elements.filter(el => !predicate(el))
  }
}

const stringCollection = new Collection<string>()
stringCollection.add('Hello, World!')
stringCollection.contains(el => el === 'Hello, TS')

const strings = stringCollection.get()

const userCollection = new Collection<IUser>()
userCollection.add({ id: 1, name: 'Viktor' })
userCollection.delete(el => el.id === 1)
const users = userCollection.get()

console.log('strings', strings)
console.log('users', users)

export {
  strings,
  users
}
