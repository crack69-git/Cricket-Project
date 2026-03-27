import React, { use } from 'react';
import Card from './Card';
const AvailableOnly = ({ playerPromise, coin, setCoin, selectedPlayers, setSelectedPlayers }) => {
    const playerData = use(playerPromise);

    return (
        playerData.map(player => <Card key={player.id} player={player} coin={coin} setCoin={setCoin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />)
    );
};
export default AvailableOnly;