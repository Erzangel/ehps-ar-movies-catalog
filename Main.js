import {Button, View, Text} from 'react-native';
import { NavigationProp } from "@react-navigation/core/lib/typescript/src/types";

const Main = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Unity Screen</Text>
      <Button
        title="Go to Unity"
        onPress={() => navigation.navigate('Unity')}
      />
    </View>
  );
};

export default Main;