import React from 'react';

import SeletedCard from './seletedCard';
const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, Coin, SetCoin }) => {
    return (
        selectedPlayers.map((player, index) => <SeletedCard key={index} player={player} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} Coin={Coin} SetCoin={SetCoin} />)
    );
};

export default SelectedPlayers;