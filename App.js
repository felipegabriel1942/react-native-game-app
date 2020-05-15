import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import GamesPage from './src/pages/GamesPage';
import GamesDetailPage from './src/pages/GamesDetailPage'

const AppNavigator = createStackNavigator({
  'Main': {
    screen: GamesPage
  },
  'GamesDetail': {
    screen: GamesDetailPage,
    navigationOptions: ({ navigation }) => {
      const gameName = navigation.state.params.game.name;
      return ({
        title: gameName,
        headerTitleStyle: {
          color: 'white'
        }
      }) 
    }
  }
},{
    defaultNavigationOptions: {
      title: 'App Games',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#726af7'
      }
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
