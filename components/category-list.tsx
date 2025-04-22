import {Text, FlatList,View } from 'react-native';
import styles from '../style';
export default function CategoryList(){
    const data = new Array(12)
.fill(null)
.map((v, i) => ({ id: i, value: `Category- ${i+1}` }));
    return (

        <View style={styles.containerList}>
            <FlatList  data={data} renderItem={({item}:any)=><Text style={styles.item}>{item.value}</Text>} horizontal={true} initialNumToRender={4} keyExtractor={({item}:any)=>item?.id as string}/>

            
        
       
  
        </View>
      
    );
  }