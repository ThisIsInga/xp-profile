import './App.css';
import { useState } from 'react';
import Window from './components/Window/Window.tsx';
import Profile from './components/Profile/Profile.tsx';

export type Lang = 'ru' | 'en';

function App() {
  const [lang, setLang] = useState<Lang>('ru');

  return (
    <>
      <section className='main_bg'>
        <div className='main_center'>

          <button
            className='lang-switch'
            onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
          >
            {lang === 'ru' ? 'EN' : 'RU'}
          </button>

          <Window title={lang === 'ru' ? 'Профиль' : 'Profile'}>
            <Profile lang={lang} />
          </Window>
        </div>
      </section>
    </>
  )
}

export default App
