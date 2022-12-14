import './ProjectCard.css';
import { FC, useRef } from 'react';
import { IProjectData, IScreenshot } from '../../utils/types';
import StackItem from '../StackItem/StackItem';

interface IProjectCardProps {
  data: IProjectData;
  onOpen?: () => void;
  setScreenshots?: (data: IScreenshot[]) => void;
}

const ProjectCard: FC<IProjectCardProps> = ({
  data,
  onOpen,
  setScreenshots
}) => {
  const cardRef = useRef<HTMLDivElement & HTMLLIElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  function moveThumb(evt: any) {
    evt.preventDefault();
    if (!thumbRef.current) return;

    const shiftX = evt.clientX - thumbRef.current.getBoundingClientRect().left;

    thumbRef.current.setPointerCapture(evt.pointerId);
    thumbRef.current.addEventListener('pointermove', onMouseMove);
    thumbRef.current.addEventListener('pointerup', onMouseUp);

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
      if (!thumbRef.current) return;

      thumbRef.current.removeEventListener('pointerup', onMouseUp);
      thumbRef.current.removeEventListener('pointermove', onMouseMove);
    };
  };

  function doubleClick() {
    if (!cardRef.current) return;
    if (!coverRef.current) return;
    if (!thumbRef.current) return;

    const rightEdge = cardRef.current.offsetWidth - thumbRef.current.offsetWidth;

    thumbRef.current.style.left = rightEdge / 2 + 'px';
    coverRef.current.style.width = rightEdge / 2 + 'px';
  };

  function openModal() {
    if (data.screenshots) {
      onOpen!();
      setScreenshots!(data.screenshots);
    };
  };

  return (
    <>
      {data.name === '??????????????????' ? (
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
              alt="?????????????????????? ????????"
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
                alt="?????????????????????? ???????????????? ??????????"
              />
            </a>
          </div>
          <div
            className="project-card__thumb"
            ref={thumbRef}
            onPointerDown={moveThumb}
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
              alt="?????????????????????? ????????"
            />
          </a>
          <div
            className="project-card__cover"
            ref={coverRef}
            onClick={openModal}
          >
            <a
              href={data.link}
              className="project-card__link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="project-card__image"
                src={data.image}
                alt="?????????????????????? ???????????????? ??????????"
              />
            </a>
          </div>
          <div
            className="project-card__thumb"
            ref={thumbRef}
            onPointerDown={moveThumb}
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
