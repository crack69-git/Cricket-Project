import React from 'react';
import { Trash2 } from 'lucide-react';
const SeletedCard = ({ player, setSelectedPlayers, selectedPlayers, Coin, SetCoin }) => {

    const handleDelete = () => {
        console.log("player", selectedPlayers);
        const filteredPlayers = selectedPlayers.filter(p => p.id !== player.id);
        console.log("filtered text", filteredPlayers);
        setSelectedPlayers(filteredPlayers);
        const playerPrice = parseInt(player.price);
        Coin += playerPrice;
        SetCoin(Coin);
        console.log("coin", Coin);
    }
    return (
        <div className='flex justify-between items-center mt-6 border border-gray-300 p-4 rounded-lg'>
            <div className='flex gap-2 items-center'>
                <img src={player.image} alt={player.name} className='w-16 h-16 rounded-lg object-cover' />
                <div>
                    <h3 className='text-2xl font-bold'>Name: {player.name}</h3>
                    <h3 className='opacity-80'>style: {player.style}</h3>
                </div>
            </div>
            <div className='border p-2 rounded-lg border-gray-300'>
                <Trash2 className='text-red-500' onClick={handleDelete} />
            </div>
        </div>
    );
};

export default SeletedCard;