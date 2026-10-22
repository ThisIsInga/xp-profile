import './App.css'
import Window from './components/Window/Window.tsx';
import Profile from './components/Profile/Profile.tsx';

function App() {

  return (
    <>
      <Window title="profile" children={<Profile />} />
    </>
  )
}

export default App
