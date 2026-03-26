import React, { useState } from 'react';
import flagImg from '../../assets/report.png'
import PlayerImg from '../../assets/user1.png'
const Card = ({ player, coin, setCoin }) => {
    const [state, setState] = useState(true);
    const handleChoosePlayer = () => {
        const totalCoin = coin - player.price;
        if (totalCoin < player.price) {
            alert('You do not have enough coins to choose this player.');
            setState(true);
            return;
        }
        else {
            setCoin(totalCoin);
        }
        alert(`You have chosen ${player.name} as your player.`);
        setState(false);
        console.log(state);
    }
    return (
        <div className="card bg-white w-full shadow-sm p-4">
            <figure>
                <img className='rounded-lg w-full h-75 object-cover'
                    src={player.image}
                    alt="Shoes" />
            </figure>
            <div className="mt-4 p-4">
                <div className='flex items-center gap-2'>
                    <img className='w-5' src={PlayerImg} alt="Player" />
                    <h2 className='font-semibold'>{player.name}</h2>
                </div>
                <div className='flex justify-between border-b-2 border-gray-300 pb-4'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-3 h-3' src={flagImg} alt="Flag" />
                        <p>{player.country}</p>
                    </div>
                    <div>
                        <div class="badge bg-white text-xs text-black">{player.role}</div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <p className='font-bold'>Rating</p>
                        <p>{player.rating}</p>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='font-bold'>Left-Hand-Bat</p>
                        <p className='opacity-80'>{player.style}</p>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <p className='font-bold'>Price$<span>{player.price}</span></p>
                        <div className="btn bg-white text-black" onClick={handleChoosePlayer}>Choose Player</div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Card;