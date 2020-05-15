import React from 'react';
import { View, ScrollView, StyleSheet, Image, Text } from 'react-native';

export default class PeopleDetailPage extends React.Component {

    getPlatformsNames(game) {
        const listSize = game.platforms.length;
        let platforms = '';
        
        game.platforms.forEach((platform, index) => {
            platforms += platform.platform.name + (index == (listSize - 1) ? '.' : ', '); 

        });


        return platforms;
    }


    render(){
        const { game } = this.props.navigation.state.params;

        const platforms = this.getPlatformsNames(game);
        
        return (
            <ScrollView 
                style={styles.container}>
                <Image 
                    source={{ uri: game.background_image }}
                    style={styles.image}/>
                <View>
                    <Text>
                        Plataformas
                    </Text>
                    <Text>{platforms}</Text>
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
