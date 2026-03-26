import React from 'react';
import AvailableOnly from './AvailableOnly';
const AvailablePlayer = ({ playerPromise, coin, setCoin }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <AvailableOnly playerPromise={playerPromise} coin={coin} setCoin={setCoin} />
        </div>
    )
};
export default AvailablePlayer;