// import { find } from 'lodash';
const contactsUrl = 'https://candidate-test.herokuapp.com/contacts';

const getContacts = async () => {
  try {
    const response = await fetch(contactsUrl);
    return await response.json();
  } catch (e) {
    console.log('API [getContacts] Error: ', e);
  }
};

export { getContacts };