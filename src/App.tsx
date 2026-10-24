import './App.css'
import Window from './components/Window/Window.tsx';
import Profile from './components/Profile/Profile.tsx';

function App() {

  return (
    <>
      <section className='main_bg'>
        <div className='main_center'>
          <Window title="profile">
            <Profile />
          </Window>
        </div>
      </section>
    </>
  )
}

export default App
