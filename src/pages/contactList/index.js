import React from 'react';
import { includes } from 'lodash';
import { getContacts } from 'api';
import ContactList from 'components/ContactList';
import ContactListHeader from 'components/ContactListHeader';

class contactListContainer extends React.Component {
  state = {
    contacts: [],
    filteredContacts: [],
    searchValue: '',
  };
  async componentDidMount() {
    const contacts = await getContacts();
    this.setState({ contacts });
  }

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
    this.filterResults(e.target.value);
  };

  filterResults = value => {
    const filterContacts = contact => includes(contact.name.toLowerCase(), value);
    this.setState(({ contacts }) => ({filteredContacts: contacts.filter(filterContacts)}));
  };

  render() {
    const { contacts, searchValue, filteredContacts } = this.state;
    const isFiltering = searchValue.length > 0;
    const contactList = isFiltering ? filteredContacts : contacts;

    return (
      <React.Fragment>
        <ContactListHeader handleChange={this.handleChange} value={searchValue} />
        <ContactList contacts={contactList} value={searchValue} />
      </React.Fragment>
    );
  }
}

export default contactListContainer;
