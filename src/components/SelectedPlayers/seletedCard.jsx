import React from 'react';
import { Trash2 } from 'lucide-react';
const SeletedCard = ({ player }) => {
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
                <Trash2 className='text-red-500' />
            </div>
        </div>
    );
};

export default SeletedCard;