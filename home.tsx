import {Text, View,Button, StatusBar } from 'react-native';
import InputSearch from './components/input-search';
import styles from './style';
import CategoryList from './components/category-list';
export default function Home({navigation}:any) {
    return (
      <View style={styles.container} >
        {/* <StatusBar barStyle="dark-content" /> */}
        {/* <Text>Home page !!!</Text> */}
        <InputSearch/>
        {/* <CategoryList /> */}
        {/* <Button title='to about' onPress={()=>navigation.navigate("about")} /> */}
       
      </View>
    );
  }