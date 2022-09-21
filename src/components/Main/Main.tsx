import './Main.css';
import { FC, useState } from 'react';
import { projectsData } from '../../utils/data';
import { IScreenshot } from '../../utils/types';
import Info from '../Info/Info';
import PlacePortfolio from '../PlacePortfolio/PlacePortfolio';
import ProjectCard from '../ProjectCard/ProjectCard';
import Modal from '../Modal/Modal';

const Main: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [screenshots, setScreenshots] = useState<IScreenshot[]>([]);

  function openModal() {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  };

  return (
    <main className="main">
      <div className="main__cover">
        <Info />
        <PlacePortfolio />
      </div>
      <section className="projects" aria-label="проекты">
        <ul className="projects__list">
          {projectsData.map(item => (
            <ProjectCard
              key={item.index}
              data={item}
              onOpen={openModal}
              setScreenshots={setScreenshots}
            />
          ))}
        </ul>
      </section>
      <Modal
        screenshots={screenshots}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </main>
  );
}

export default Main;
