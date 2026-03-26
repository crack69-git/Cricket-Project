import React, { useState } from 'react';
import AvailablePlayer from '../AvailablePlayer/AvailablePlayer';
import SelectedPlayer from '../SelectedPlayers/SelectedPlayers';
const Player = ({ playerPromise, coin, setCoin }) => {
    const [isAvailable, setIsAvailable] = useState(true);
    const handleToggle = () => {
        setIsAvailable(!isAvailable);
    }
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-semibold'>{isAvailable ? "Available Players" : `Selected Players 2/6`}</h2>
                <div className='flex '>
                    <button onClick={handleToggle} className={isAvailable ? "btn btn-active text-black bg-[#E7FE29] rounded-r-none rounded-l-full" : "btn btn-active bg-white text-black rounded-r-none rounded-l-full"}>Available</button>
                    <button onClick={handleToggle} className={!isAvailable ? "btn btn-active bg-[#E7FE29] text-black rounded-l-none rounded-r-full" : "btn btn-active bg-white text-black rounded-l-none rounded-r-full"}>Selected(0)</button>
                </div>
            </div>
            {isAvailable ? <AvailablePlayer playerPromise={playerPromise} coin={coin} setCoin={setCoin} /> : <SelectedPlayer />}
        </div>
    );
};

export default Player;