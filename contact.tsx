import { Text, View,Button, Switch,TextInput } from 'react-native';
import InputText from './components/input-text';
import { useState } from 'react';
import { Picker } from "@react-native-picker/picker";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
export default function Contact({navigation}:any) {
  const [text,setText]=useState(false);
  const [date,setDate]=useState(new Date());
  const sexe=[{name:"Masculin",value:"M"},{name:"Féminin",value:"F"}];
  function handleSwitchState(state:any){
    setText(state);
    
  }
  return (
    <View >
      <Text>Contact page</Text>
    
       <InputText label="nom" />
    <InputText label="prénom" />
    <InputText label="password"  secureTextEntry={true}/>
      <InputText label="telephone" returnKeyLabel="fait"  keyboardType="number-pad"/>
      <InputText label="email"  keyboardType="email-address"/>

      <InputText label="message" multiline={true} /> 
      <View>
         <Text>receive new letter</Text>
        <Switch value={text} thumbColor="#ff7f50" trackColor={{ false: "red", true: "blue" }} onValueChange={handleSwitchState}/>

    
      </View>
      <View>

      <Text>Sexe :</Text>

      <Picker mode="dropdown">

        {sexe.map((item,i)=><Picker.Item key={i} label={item.name} value={item.value} />)}
       
      
      </Picker>
       

      </View>
      <View>

      <Text>Birthday :</Text>
      <Text onPress={()=>DateTimePickerAndroid.open({
        mode:'date',
        value:date,
        display:'calendar',
        onChange:(event,date:any)=>setDate(date)
      })}>

      </Text>

     
       

      </View>
      <View>

      <Text>Time :</Text>
      <Text onPress={()=>DateTimePickerAndroid.open({
        mode:'time',
        value:date,
        onChange:(event,date:any)=>setDate(date)
      })}></Text>

      
       

      </View>
      <Button title='envoyer' onPress={()=>navigation.navigate("home")} />

     
    </View>
  );
}