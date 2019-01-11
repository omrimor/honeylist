import React from 'react';
import { Container } from 'reactstrap';
import { isEmpty } from 'lodash';

import { withLoaderState } from 'utils';
import ContactCard from '../ContactCard';
import Loader from 'components/Loader';
import EmptyState from 'components/EmptyState';
import './ContactList.scss';

const ContactList = ({ contacts }) => {
  return (
    <Container>
      <ul className="contact-list">{contacts.map((contact, idx) => <ContactCard key={idx} {...contact} />)}</ul>
    </Container>
  );
};
const Enhanced = withLoaderState({
  loaderComponent: () => <Loader />,
  loaderPredicate: ({ contacts }) => isEmpty(contacts),
  emptyComponent: () => <EmptyState>no results found</EmptyState>,
  emptyPredicate: ({ value, contacts }) => (value.length > 0 && isEmpty(contacts)),
})(ContactList);

export default Enhanced;
