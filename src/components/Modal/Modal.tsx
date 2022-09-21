import './Modal.css';
import { FC, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { IScreenshot } from '../../utils/types';

interface IModalProps {
  screenshots: IScreenshot[];
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<IModalProps> = ({ screenshots, isOpen, onClose }) => {
  const [counter, setCounter] = useState<number>(0);
  const modalRoot = document.querySelector('#modals') as HTMLElement;

  useEffect(() => {
    const handleEscPress = (evt: KeyboardEvent) => {
      evt.key === 'Escape' && closeModal();
    }

    document.addEventListener('keydown', handleEscPress);

    return () => document.removeEventListener('keydown', handleEscPress);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function closeModal() {
    onClose();
    setTimeout(() => setCounter(0), 200);
  }

  function increaseCounter() {
    if (counter + 1 < screenshots.length) {
      setCounter(counter + 1);
    };
  };

  function decreaseCounter() {
    if (counter > 0) {
      setCounter(counter - 1);
    };
  };

  return ReactDOM.createPortal(
    <div className={`modal-area ${isOpen ? 'modal-area_opened' : ''}`}>
      <div className="modal-overlay" onClick={closeModal} />
      <div className="modal">
        <button
          className="modal__close"
          type="button"
          aria-label="закрыть"
          onClick={closeModal}
        />
        <button
          className={`modal__selector ${
            counter === 0 ? 'modal__selector_disabled' : ''
          }`}
          type="button"
          aria-label="предыдущий"
          disabled={counter === 0 ? true : false}
          onClick={decreaseCounter}
        >
          <div className="modal__arrow modal__arrow_purpose_previous" />
        </button>
        <div className="modal__field">
          <div className="modal__cover">
            <img
              className="modal__image"
              src={screenshots[counter]?.screenshot}
              alt={screenshots[counter]?.name}
            />
          </div>
          <h2 className="modal__image-name">{screenshots[counter]?.name}</h2>
          <ul className="modal__indicator">
            {screenshots.map(item => (
              <li
                className={`modal__dot ${
                  counter + 1 === item.index ? 'modal__dot_active' : ''
                }`}
                key={item.index}
                onClick={() => setCounter(item.index - 1)}
              />
            ))}
          </ul>
        </div>
        <button
          className={`modal__selector ${
            counter + 1 === screenshots.length ? 'modal__selector_disabled' : ''
          }`}
          type="button"
          aria-label="следующий"
          disabled={counter + 1 === screenshots.length ? true : false}
          onClick={increaseCounter}
        >
          <div className="modal__arrow modal__arrow_purpose_next" />
        </button>
      </div>
    </div>
    , modalRoot
  );
}

export default Modal;
