const contactsUrl = 'https://candidate-test.herokuapp.com/contacts';

const getContacts = async () => {
  try {
    const response = await fetch(contactsUrl);
    return await response.json();
  } catch (e) {
    console.error('API [getContacts] Error: ', e);
  }
};

export { getContacts };