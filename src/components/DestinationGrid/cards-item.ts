import Card1 from '@/assets/img/destination-grid/Card1.png'
import Card2 from '@/assets/img/destination-grid/Card2.png'
import Card3 from '@/assets/img/destination-grid/Card3.png'
import Card4 from '@/assets/img/destination-grid/Card4.png'
import Card5 from '@/assets/img/destination-grid/Card5.png'
import Card6 from '@/assets/img/destination-grid/Card6.png'

interface ICardsItems {
  title: string
  text: string
  theme: 'light' | 'dark'
  rate: number
  class: string
  src: string
}

export const cardsItems: ICardsItems[] = [
  {
    title: 'Vientam',
    text: 'Worefall',
    theme: 'light',
    rate: 3.5,
    class: 'col-start-1 col-end-2 row-start-1 row-end-2',
    src: Card1
  },
  {
    title: 'Vientam',
    text: 'Worefall',
    theme: 'light',
    rate: 3.5,
    class: 'col-start-1 col-end-2 row-start-2 row-end-3',
    src: Card2
  },
  {
    title: 'Vientam',
    text: 'Worefall',
    theme: 'dark',
    rate: 3.5,
    class: 'col-start-2 col-end-4 row-start-1 row-end-3',
    src: Card3
  },
  {
    title: 'Vientam',
    text: 'Worefall',
    theme: 'dark',
    rate: 3.5,
    class: 'col-start-4 col-end-6 row-start-1 row-end-1',
    src: Card4
  },
  {
    title: 'Vientam',
    text: 'Worefall',
    theme: 'dark',
    rate: 3.5,
    class: 'col-start-4 col-end-5 row-start-2 row-end-3',
    src: Card5
  },
  {
    title: 'Vientam',
    text: 'Worefall',
    theme: 'dark',
    rate: 3.5,
    class: 'col-start-5 col-end-6 row-start-2 row-end-3',
    src: Card6
  }
]
