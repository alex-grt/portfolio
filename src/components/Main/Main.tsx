import './Main.css';
import { FC } from 'react';
import { projectsData } from '../../utils/data';
import Info from '../Info/Info';
import PlacePortfolio from '../PlacePortfolio/PlacePortfolio';
import ProjectCard from '../ProjectCard/ProjectCard';

const Main: FC = () => {
  return (
    <main className="main">
      <div className="main__cover">
        <Info />
        <PlacePortfolio />
      </div>
      <section className="projects" aria-label="проекты">
        <ul className="projects__list">
          {projectsData.map(item => (
            <ProjectCard key={item.index} data={item} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
