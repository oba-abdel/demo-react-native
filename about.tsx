import { Text, View,Button } from 'react-native';
export default function About({navigation}:any) {
  return (
    <View >
      <Text>About page !</Text>
      {/* <Button title='to contact' onPress={()=>navigation.navigate("contact")} /> */}
    </View>
  );
}