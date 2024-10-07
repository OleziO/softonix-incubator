class ContactsService {
  #contactUrl = 'rest/v1/contacts'

  getContacts () {
    return useHttp.get<IContact[]>(this.#contactUrl)
  }

  createContact (payload: TNewContactPayload) {
    return useHttp.post(this.#contactUrl, payload)
  }

  updateContact (payload: TUpdatePayload) {
    return useHttp.patch(`${this.#contactUrl}?id=eq.${payload.id}`, payload)
  }

  deleteContact (payload: IContact) {
    return useHttp.delete<IContact>(`${this.#contactUrl}?id=eq.${payload.id}`)
  }
}

export const contactsService = new ContactsService()
