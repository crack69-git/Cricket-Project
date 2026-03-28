import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import AvailablePlayer from './components/AvailablePlayer/AvailablePlayer.jsx'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers.jsx'
import { Suspense, useState, useMemo } from 'react'
import Player from './components/Players/Player.jsx'
import Herosection from './components/HeroSection/Herosection.jsx'
import Subscription from './components/subscription/Subscription.jsx'
import Footer from './components/footer/Footer.jsx'
const fetchPromise = async () => {
  const res = await fetch('/player.json');
  const data = await res.json();
  return data;
}


function App() {
  const [coin, setCoin] = useState(50000);
  const playerPromise = useMemo(() => fetchPromise(), []);
  return (
    <div className="bg-white text-black min-h-screen">
      <header>
        <Navbar coin={coin} />
        <Herosection />
      </header>

      <main className='max-w-11/12 mx-auto mt-4'>
        <Suspense fallback={<span className="loading loading-spinner text-black border-black"></span>}>
          <Player playerPromise={playerPromise} coin={coin} setCoin={setCoin} />
        </Suspense>
        <Subscription />
      </main>
      <Footer />
    </div>
  )
}
export default App
