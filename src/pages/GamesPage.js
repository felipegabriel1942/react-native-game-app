import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

import axios from 'axios';
import GamesList from '../components/GamesList';


export default class GamesPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            games: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.setState({loading: true});

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
                games: results,
                loading: false
            });
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    renderLoading() {
       return <ActivityIndicator size='large' color='#6ca2f7'/>;
    }

    renderGames() {
        return <GamesList 
                    games={ this.state.games }
                    onPressItem={ pageParams => this.props.navigation.navigate('GamesDetail', pageParams)}/>
    }


    render() {
        return(
            <View style={ styles.container }>
                { this.state.loading ? this.renderLoading() : this.renderGames() }
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