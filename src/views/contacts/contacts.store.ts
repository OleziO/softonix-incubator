export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([])

  const getContacts = () => {
    if (contacts.value.length) return Promise.resolve()

    return contactsService.getContacts()
      .then(res => {
        contacts.value = res

        // TODO: Uncomment to test
        // contacts.value.push(...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res, ...res)
        // contacts.value.push(...contacts.value)
        // contacts.value.push(...contacts.value)
        // contacts.value.push(...contacts.value)
        // contacts.value.push(...contacts.value)
      })
  }

  function addContact (contact: IContact) {
    contacts.value.push(contact)
  }

  function updateContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value[currentIndex] = { ...contact }
  }

  function deleteContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value.splice(currentIndex, 1)
  }

  return {
    contacts,
    getContacts,
    addContact,
    deleteContact,
    updateContact
  }
})
