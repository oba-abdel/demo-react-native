import { StyleSheet } from 'react-native';

export default   StyleSheet.create({
    container: {
      flex: 1,
     
      flexDirection:'column',
      backgroundColor: '#fff',
      // alignItems: 'flex-start',
      // justifyContent: 'flex-start',
      paddingHorizontal:5,
    },
    containerList: {
      flex: 1,
   
 
      flexDirection:'row',
     
      backgroundColor: '#fff',
   height:100,
     
    },
    inputSearch:{
      height:75,
      // width:100,
    backgroundColor:'#fff',
   
    borderWidth:4,
    },
    item: {
      margin: 5,
      padding: 5,
      color: "slategrey",
      backgroundColor: "ghostwhite",
      textAlign: "center",
      height:50,
      width:80,
      },
  });