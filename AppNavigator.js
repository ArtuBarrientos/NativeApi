import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import Animations from './Animations';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


const AppNavigator = createStackNavigator(
  {
    HomeScreen,
    DetailsScreen,
    Animations,
  },
  HomeScreen.navigationOptions = () =>({
    title:'Lista'
  }),


  
);



export default createAppContainer(AppNavigator);