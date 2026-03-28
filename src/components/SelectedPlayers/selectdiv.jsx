import React from 'react';
import SelectedPlayers from './SelectedPlayers';
const selectdiv = ({ selectedPlayers, setSelectedPlayers, Coin, SetCoin }) => {
    const handleRedirect = () => {
        window.location.href = '../Players/Player.jsx';
    }
    return (
        <div>
            <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} Coin={Coin} SetCoin={SetCoin} />
            <div className='mt-4'>
                <button onClick={handleRedirect} className="btn btn-active bg-green-300 text-black font-bold border-none outline-2 outline-green-300">Add more players</button>
            </div>
        </div>
    );
};

export default selectdiv;