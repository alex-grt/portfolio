import './Info.css';
import photo from '../../images/photo.jpg';
import { FC } from 'react';
import { contacts, stack } from '../../utils/data';
import StackItem from '../StackItem/StackItem';
import Contact from '../Contact/Contact';

const Info: FC = () => {
  return (
    <section className="info">
      <div className="info__cover">
        <div className="info__person">
          <img className="info__photo" src={photo} alt="фотография профиля" />
          <div className="info__text">
            <h1 className="info__name">Александр Карякин</h1>
            <p className="info__description">frontend-разработчик</p>
          </div>
        </div>
        <ul className="info__stack">
          {stack.map((item, index) => (
            <StackItem key={index} name={item} size="normal" />
          ))}
        </ul>
      </div>
      <ul className="info__contacts">
        {contacts.map(item => (
          <Contact key={item.index} contact={item} />
        ))}
      </ul>
    </section>
  );
}

export default Info;
