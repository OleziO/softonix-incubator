interface IContact {
  id: number
  name: string
  description: string
  image?: string
  loading?: boolean
}

type TNewContactPayload = Omit<IContact, 'id' | 'loading' | 'image'>
type TUpdatePayload = Omit<IContact, 'loading' | 'image'>
type TDeletePayload = Omit<IContact, 'loading'>
