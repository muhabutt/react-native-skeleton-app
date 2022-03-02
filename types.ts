/** Navigation  **/
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type HomeStackNavigation = {
  homeScreen: undefined;
};

export type HomeBottomTabNavigation = {
  favorites: undefined;
  movies: undefined;
};

export type HomeScreenAndTabCompositeNavProps = CompositeNavigationProp<
  StackNavigationProp<HomeStackNavigation, 'homeScreen'>,
  BottomTabNavigationProp<HomeBottomTabNavigation, 'favorites'>
>;
/**
 * Redux types
 */
export type MoviesReduxState = {
  data: Array<number>;
};
export type MoviesDispatchType = (args: MoviesAction) => MoviesAction;
export type MoviesAction = {
  movies: MoviesReduxState;
  type: string;
};
