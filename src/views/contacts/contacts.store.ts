export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([])

  const forceUpdate = true

  const getContacts = (forceUpdate?: boolean) => {
    if (contacts.value.length && !forceUpdate) return

    return contactsService.getContacts()
      .then(res => {
        contacts.value = res
      })
  }

  function addContact (contact: TNewContactPayload) {
    return contactsService.createContact(contact).then(() => {
      getContacts(forceUpdate)
    })
  }

  function updateContact (contact: TUpdatePayload) {
    return contactsService.updateContact(contact).then(() => {
      getContacts(forceUpdate)
    })
  }

  function deleteContact (contact: IContact) {
    return contactsService.deleteContact(contact).then(() => {
      getContacts(forceUpdate)
    })
  }

  return {
    contacts,
    getContacts,
    addContact,
    deleteContact,
    updateContact
  }
})
