import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import SearchField from './SearchContactField';
import './ContactListHeader.scss';

const ContactListHeader = ({ handleChange, value }) => (
  <div className="contact-list-header">
    <Container>
      <Row>
        <Col sm={6} xs={12}>
          <h1>Contact List</h1>
        </Col>
        <Col sm={6} xs={12}>
          <SearchField handleChange={handleChange} value={value} />
        </Col>
      </Row>
    </Container>
  </div>
);

export default ContactListHeader;
