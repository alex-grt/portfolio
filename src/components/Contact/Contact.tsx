import './Contact.css';
import { FC } from 'react';
import { IContact } from '../../utils/types';

interface IContactProps {
  contact: IContact;
}

const Contact: FC<IContactProps> = ({ contact }) => {
  return (
    <a href={contact.link} className="contact-link" target="_blank" rel="noreferrer">
      <li className='contact'>
        <p className='contact__title'>{contact.title}</p>
      </li>
    </a>
  );
}

export default Contact;
