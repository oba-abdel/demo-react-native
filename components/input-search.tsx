import { TextInput, View } from 'react-native';
import styles from '../style';
export default function InputSearch() {
  return (
    <View style={styles.inputSearch}>
     <TextInput placeholder="search" />
    </View>
  );
}