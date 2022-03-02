import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme';

interface Props {
  abc: string;
}

const Movies: React.FC<Props> = ({abc}) => {
  return (
    <View style={styles.container}>
      <Text>{abc}</Text>
    </View>
  );
};

export default Movies;
