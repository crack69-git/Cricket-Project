import React from 'react';
import SelectedPlayers from './SelectedPlayers';
const selectdiv = ({ selectedPlayers }) => {
    return (
        <div>
            <SelectedPlayers selectedPlayers={selectedPlayers} />
            <div className='mt-4'>
                <button class="btn btn-active bg-green-300 text-black font-bold border-none outline-2 outline-green-300">Add more players</button>
            </div>
        </div>
    );
};

export default selectdiv;