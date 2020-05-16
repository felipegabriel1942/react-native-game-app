import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import CardLine from '../components/CardLine';
import getNamesFromArray from '../util/getNamesFromArray';

export default class GamesDetailPage extends React.Component {

    render(){
        const { game } = this.props.navigation.state.params;
        const platforms = getNamesFromArray(game.platforms, 'platform');
        const genres = getNamesFromArray(game.genres, 'genres');
        
        return (
            <ScrollView>
                <View 
                    style={styles.card} 
                    elevation={2}>
                    <Image 
                        source={{ uri: game.background_image }}
                        style={styles.image}/>
                    <View style={styles.infoCard}>
                        <CardLine label='Plataformas: ' content={ platforms }/>
                        <CardLine label='Genêro(s): ' content={ genres }/>
                        <CardLine label='Lançamento: ' content={ game.released }/>
                        <CardLine label='Nota(Metacritic): ' content={ game.metacritic }/>
                        <CardLine label='Tempo de jogo: ' content={ game.playtime + ' horas' }/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        marginTop: 15,
        flexDirection: 'row',
        marginLeft: 15,
        borderRadius: 3
    },
    card: {
        marginTop: 15,
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 5,
        marginHorizontal: 5,

    },
    infoCard: {
        paddingHorizontal: 15
    }
});
