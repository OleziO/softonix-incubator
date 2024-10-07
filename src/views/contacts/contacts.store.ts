export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([])

  const forceUpdate = true

  const getContacts = (forceUpdae?: boolean) => {
    if (contacts.value.length && !forceUpdae) return

    return contactsService.getContacts()
      .then(res => {
        contacts.value = res
      })
  }

  function addContact (contact: TNewContactPayload) {
    return contactsService.createContact(contact).then(() => {
      getContacts(forceUpdate) // refactor
    })
  }

  function updateContact (contact: TUpdatePayload) {
    return contactsService.updateContact(contact).then(() => {
      getContacts(forceUpdate) // refactor
    })
  }

  function deleteContact (contact: IContact) {
    return contactsService.deleteContact(contact).then(() => {
      getContacts(forceUpdate) // refactor
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
