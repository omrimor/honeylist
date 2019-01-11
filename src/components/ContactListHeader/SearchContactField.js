import React from 'react';
import { Input } from 'reactstrap';

const Search = ({ handleChange, value }) => (
  <div className="contact-list-search">
    <i className="fa fa-search" />
    <Input
      onChange={handleChange}
      value={value}
      type="text"
      name="contactSearch"
      id="contactSearch"
      placeholder="search"
    />
  </div>
);

export default Search;
