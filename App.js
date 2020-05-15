import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import GamesPage from './src/pages/GamesPage';

const AppNavigator = createStackNavigator({
  'Main': {
    screen: GamesPage
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
