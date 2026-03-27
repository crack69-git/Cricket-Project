import React from 'react';

import SeletedCard from './seletedCard';
const SelectedPlayers = ({ selectedPlayers }) => {
    console.log(selectedPlayers);
    return (
        selectedPlayers.map((player, index) => <SeletedCard key={index} player={player} />)
    );
};

export default SelectedPlayers;