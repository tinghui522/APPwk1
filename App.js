import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.text3}>12:31</Text>
        <Text style={styles.text4}>3月9日 星期一</Text>
        
      <View style={styles.area}>
        <Text style={styles.text5}>((     ||     ))</Text>
        <Text style={styles.text2}>1:31  _____________________________  5:22</Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}>陳定潓</Text>
        <Text style={styles.text}>-- 110719020 --</Text>
        <Text style={styles.text1}>-  ____________________ +</Text>  
      </View>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "#ACD6FF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  area:{
    flex: 3,
    backgroundColor: "#ECF5FF",
    alignItems: 'center',
    marginTop:250,
    width:340,
    borderRadius:10,
    marginBottom:250,
  },
  text:{
    top:75,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:20,
    color:'#9999CC',
    fontFamily:'Arial',
    fontWeight:'bold',
  },
  text1:{
    top:78,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:25,
    color:'#D0D0D0',
    fontWeight:'bold',
  },
  text2:{
    top:80,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:15,
    color:'#D0D0D0',
    fontWeight:'bold'
  },
  text3:{
    top:180,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:70,
    color:'#8080C0',
    fontWeight:'bold'
  },
  text4:{
    top:175,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:20,
    color:'#8080C0',
    fontWeight:'bold'
  },
  text5:{
    top:40,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:50,
    color:'#A6A6D2',
    fontWeight:'bold'
  },
});
