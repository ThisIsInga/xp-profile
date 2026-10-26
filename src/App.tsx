import { useState } from 'react';
import './App.css';
import Window from './components/Window/Window.tsx';
import Profile from './components/Profile/Profile.tsx';
import ModalWindow from './components/ModalWindow/ModalWindow.tsx';

export type Lang = 'ru' | 'en';

function App() {
  const [lang, setLang] = useState<Lang>('ru');
  const [isLangChosen, setIsLangChosen] = useState(false);

  const handlePickLang = (next: Lang) => {
    setLang(next);
    setIsLangChosen(true);
  };

  return (
    <section className="main_bg">
      <div className="main_center">
        <Window title={lang === 'ru' ? 'Профиль' : 'Profile'}>
          <Profile lang={lang} />
        </Window>
      </div>

      {!isLangChosen && (
        <div className="modal-overlay">
          <ModalWindow 
          setLang={handlePickLang} 
          onClose={() => setIsLangChosen(true)}/>
        </div>
      )}
    </section>
  );
}

export default App;