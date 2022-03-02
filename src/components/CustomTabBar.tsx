import * as React from 'react';
import {TouchableOpacity, View, Text, ViewStyle} from 'react-native';
import {Colors, styles} from '../theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  tabWidth: number;
  textStyle?: ViewStyle;
  activeTabStyle?: ViewStyle;
  inActiveTabStyle?: ViewStyle;
};

type IconComProps = {
  routeName: string;
  color: string;
};
const Icon: React.FC<IconComProps> = ({routeName, color}) => {
  switch (routeName) {
    case 'Movies':
      return (
        <MaterialIcons
          name="movie-filter"
          color={color}
          size={styles.bottomTabIconSize}
        />
      );
    case 'Favorites':
      return (
        <MaterialIcons
          name="favorite"
          color={color}
          size={styles.bottomTabIconSize}
        />
      );
    default:
      return null;
  }
};

const CustomTabBar: React.FC<any & Props> = props => {
  const {state, descriptors, navigation, textStyle} = props;

  return (
    <View style={styles.tabLabelContainer}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabLabelButton]}>
            <View style={styles.center}>
              <Icon
                routeName={label}
                color={isFocused ? Colors.RoyalBlue : Colors.Gray}
              />
              <Text
                style={
                  textStyle
                    ? [textStyle]
                    : [
                        styles.tabLabelText,
                        isFocused
                          ? {color: Colors.RoyalBlue}
                          : {color: Colors.Gray},
                      ]
                }>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
