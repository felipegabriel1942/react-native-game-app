import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import GameListItem from '../pages/GameListItem';


const GamesList = props => {

    const { games } = props;

    return(
        <FlatList 
            data={ games }
            renderItem={({ item }) => (
                <GameListItem game={item}/>
            )}
            keyExtractor={item => item.id.toString()}/>
    );

};

export default GamesList;