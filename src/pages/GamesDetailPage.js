import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

import CardLine from '../components/CardLine';

import getNamesFromArray from '../util/getNamesFromArray';
import getImagesFromArray from '../util/getImagesFromArray';

export default class GamesDetailPage extends React.Component {

    render(){
        const { game } = this.props.navigation.state.params;
        const platforms = getNamesFromArray(game.platforms, 'platform');
        const genres = getNamesFromArray(game.genres, 'genres');
        const images = getImagesFromArray(game.short_screenshots);
        
        return (
            <ScrollView>
                <View 
                    style={styles.card} 
                    elevation={2}>
                    <SliderBox 
                        images={images}
                        style={styles.image} />
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
        marginTop: 10,
        paddingHorizontal: 15
    }
});
