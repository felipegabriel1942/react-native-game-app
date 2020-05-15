import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const GameListItem = props => {
    const { game, navigateToGameDetail } = props;
    const { name } = game;
    const backgroundImage = game.background_image;

    return(
        <TouchableOpacity onPress={() => {
            navigateToGameDetail({ game })
        }}>
            <View style={styles.card}>
                <Image
                    style={styles.avatar} 
                    source={{uri: backgroundImage}}/>
                <Text
                    style={styles.texto}>{ name }</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 60,
        borderWidth: 1,
        borderColor: '#726af7',
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        paddingTop: 10
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50,
    },
    texto: {
        fontSize: 16,
        paddingLeft: 15,
        marginTop: 5,
        flex: 7,
        color: '#726af7',
        fontWeight: '100'
    }
});

export default GameListItem;