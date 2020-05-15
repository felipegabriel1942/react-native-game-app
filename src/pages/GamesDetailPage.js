import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import CardLine from '../components/CardLine';
import getNamesFromArray from '../util/getNamesFromArray';

export default class PeopleDetailPage extends React.Component {

    render(){
        const { game } = this.props.navigation.state.params;

        //const platforms = getNamesFromArray(game.platforms, 'platform', 'name');
        //const genres = getNamesFromArray(game.genres, 'name');
        console.log(genres);
        
        return (
            <ScrollView 
                style={styles.container}>
                <Image 
                    source={{ uri: game.background_image }}
                    style={styles.image}/>
                <View>
                    <CardLine
                        label='Plataformas: ' content={ platforms }/>
                </View>
                
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    }, 
    image: {
        aspectRatio: 1
    }
});
