export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([])

  const getContacts = (forceUpdate?: boolean) => {
    if (contacts.value.length && !forceUpdate) return

    return contactsService.getContacts()
      .then(res => {
        contacts.value = res
      })
  }

  function addContact (contact: TNewContactPayload) {
    return contactsService.createContact(contact).then(() => {
      getContacts()
    })
  }

  function updateContact (contact: TUpdatePayload) {
    return contactsService.updateContact(contact).then(() => {
      const index = contacts.value.findIndex((item) => item.id === contact.id)
      contacts.value[index] = contact
    })
  }

  function deleteContact (contact: IContact) {
    return contactsService.deleteContact(contact).then(() => {
      const index = contacts.value.findIndex((item) => item.id === contact.id)
      contacts.value.splice(index, 1)
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
