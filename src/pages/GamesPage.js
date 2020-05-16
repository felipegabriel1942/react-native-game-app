import React from 'react';
import { StyleSheet, View } from 'react-native';

import axios from 'axios';
import GamesList from '../components/GamesList';


export default class GamesPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            games: []
        }
    }

    componentDidMount() {
        axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/games",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
            "x-rapidapi-key":"d2e61c8a31mshda656531652f2d3p19792fjsn48d905659149",
            "useQueryString":true
            }
        })
        .then((response)=>{
            const { results } = response.data;
            this.setState({
                games: results
            });
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    renderGames() {
        return <GamesList 
                    games={ this.state.games }
                    onPressItem={ pageParams => this.props.navigation.navigate('GamesDetail', pageParams)}/>
    }


    render() {
        return(
            <View style={ styles.container }>
                { this.renderGames() }
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 15,
    }
});