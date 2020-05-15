import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import GameListItem from './GameListItem';

const GamesList = props => {

    const { games, onPressItem } = props;

    return(
        <FlatList 
            data={ games }
            renderItem={({ item }) => (
                <GameListItem 
                    game={item}
                    navigateToGameDetail={ onPressItem }/>
            )}
            keyExtractor={item => item.id.toString()}/>
    );

};

export default GamesList;