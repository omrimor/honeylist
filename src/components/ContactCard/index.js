import React from 'react';
import { Card } from 'reactstrap';
import './ContactCard.scss';

const ContactCard = ({ profile_image: img, company_name: company, name, job, icon, phone, email }) => (
  <li className="cards__item">
    <Card className="contact-card">
      <div className="contact-card__hero">
        <img className="contact-card__hero__icon" src={icon} alt={name} />
        <div className="contact-card__hero__poster">
          <img src={img} alt={name} />
        </div>
      </div>
      <div className="contact-card__info">
        <p className="contact-card__info__name">{name}</p>
        <p className="contact-card__info__sub-text">{`${job} | ${company}`}</p>
        <div className="contact-card__info--hidden">
          <p className="contact-card__info__sub-text">{`Phone number: ${phone}`}</p>
          <p className="contact-card__info__sub-text">{email}</p>
        </div>
      </div>
    </Card>
  </li>
);

export default ContactCard;
