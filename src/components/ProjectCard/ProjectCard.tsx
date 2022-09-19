import './ProjectCard.css';
import { FC, MouseEvent, useRef } from 'react';
import { IProjectData } from '../../utils/types';
import StackItem from '../StackItem/StackItem';

interface IProjectCardProps {
  data: IProjectData;
}

const ProjectCard: FC<IProjectCardProps> = ({ data }) => {
  const cardRef = useRef<HTMLDivElement & HTMLLIElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  function moveThumb(evt: MouseEvent) {
    evt.preventDefault();
    if (!thumbRef.current) return;

    const shiftX = evt.clientX - thumbRef.current.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(evt: any) {
      if (!cardRef.current) return;
      if (!coverRef.current) return;
      if (!thumbRef.current) return;

      let newLeft =
        evt.clientX - shiftX - coverRef.current.getBoundingClientRect().left;
      const rightEdge =
        cardRef.current.offsetWidth - thumbRef.current.offsetWidth;

      if (newLeft < 0) {
        newLeft = 0;
      };

      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      };

      thumbRef.current.style.left = newLeft + 'px';
      coverRef.current.style.width = newLeft + 'px';
    };

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    };
  };

  function doubleClick() {
    if (!cardRef.current) return;
    if (!coverRef.current) return;
    if (!thumbRef.current) return;

    const rightEdge = cardRef.current.offsetWidth - thumbRef.current.offsetWidth;

    thumbRef.current.style.left = rightEdge / 2 + 'px';
    coverRef.current.style.width = rightEdge / 2 + 'px';
  }

  return (
    <>
      {data.name === 'Портфолио' ? (
        <div className="project-card" ref={cardRef}>
          <a
            href={data.linkCode}
            className="project-card__link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-card__image"
              src={data.imageCode}
              alt="изображение кода"
            />
          </a>
          <div className="project-card__cover" ref={coverRef}>
            <a
              href={data.link}
              className="project-card__link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-card__image"
                src={data.image}
                alt="изображение страницы сайта"
              />
            </a>
          </div>
          <div
            className="project-card__thumb"
            ref={thumbRef}
            onMouseDown={moveThumb}
            onDoubleClick={doubleClick}
          />
          <h2 className="project-card__name">{data.name}</h2>
          <ul className="project-card__stack">
            {data.stack.map((item, index) => (
              <StackItem key={index} name={item} size="small" />
            ))}
          </ul>
        </div>
      ) : (
        <li className="project-card" ref={cardRef}>
          <a
            href={data.linkCode}
            className="project-card__link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="project-card__image"
              src={data.imageCode}
              alt="изображение кода"
            />
          </a>
          <div className="project-card__cover" ref={coverRef}>
            <a
              href={data.link}
              className="project-card__link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-card__image"
                src={data.image}
                alt="изображение страницы сайта"
              />
            </a>
          </div>
          <div
            className="project-card__thumb"
            ref={thumbRef}
            onMouseDown={moveThumb}
            onDoubleClick={doubleClick}
          />
          <h2 className="project-card__name">{data.name}</h2>
          <ul className="project-card__stack">
            {data.stack.map((item, index) => (
              <StackItem key={index} name={item} size="small" />
            ))}
          </ul>
        </li>
      )}
    </>
  );
}

export default ProjectCard;
