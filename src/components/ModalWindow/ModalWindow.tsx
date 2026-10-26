import "xp.css/dist/XP.css";
import type { Lang } from '../../App';

interface ModalWindowProps {
  setLang: (lang: Lang) => void;
  onClose?: () => void;
  width?: string;
}

function ModalWindow({ setLang, width = '20rem', onClose}: ModalWindowProps) {
  return (
    <div className="window" style={{ width }}>
      <div className="title-bar">
        <div className="title-bar-text">Language</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={onClose}></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close" onClick={onClose}></button>
        </div>
      </div>
      <div className="window-body" style={{ textAlign: 'center' }}>
        <button onClick={() => setLang('ru')}>RU</button>
        <button onClick={() => setLang('en')}>ENG</button>
      </div>
    </div>
  );
}

export default ModalWindow;