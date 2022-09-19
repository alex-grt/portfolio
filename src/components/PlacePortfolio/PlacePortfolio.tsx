import './PlacePortfolio.css';
import arrow from '../../images/arrow.png';
import { FC } from 'react';
import { portfolioData } from '../../utils/data';
import ProjectCard from '../ProjectCard/ProjectCard';

const PlacePortfolio: FC = () => {
  return (
    <section className="place-portfolio">
      <ProjectCard data={portfolioData} />
      <div className="place-portfolio__inscription">
        <img className="place-portfolio__arrow" src={arrow} alt="стрелка" />
        <p className="place-portfolio__text">Вы находитесь здесь</p>
      </div>
    </section>
  );
}

export default PlacePortfolio;
