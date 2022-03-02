import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import Favorites from '../screens/Favorites';
import CustomTabBar from '../components/CustomTabBar';
import {useWindowDimensions} from 'react-native';
const Tab = createBottomTabNavigator();
const RootNavigator = () => {
  const dimensions = useWindowDimensions();
  const tabWidth = dimensions.width / 3;

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} tabWidth={tabWidth} />}>
        <Tab.Screen name="Movies" component={Movies} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
