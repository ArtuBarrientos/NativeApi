import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    HomeScreen,
    DetailsScreen,
  },
  HomeScreen.navigationOptions = () =>({
    title:'Lista De Pokemoncitos'
  }),

  
);



export default createAppContainer(AppNavigator);