import React from 'react';
import { StyleSheet, Text,Image, View, Button, TextInput, ImageBackground } from 'react-native';
import Title from './Title';
import Credentials from './Credentials';

function Sign(){
    return (

        <View style={styles.container}>
          <View style={styles.nameview}>
            <Title name={"Create an account"}/>
         </View>
          <View style={styles.inputview}>
            <View style={styles.card}>
                <Credentials/>

            </View>
            <View style={styles.Imagecontainer}>
            <Image source={require('./Asset 1@4x 1.png')} style={{width: 130,height:125,position:'absolute'}}></Image>
            </View>
            
          </View>
          
          </View>
          
        
      );
}

const styles = StyleSheet.create({
    container: {
      flexDirection:'column',
      flex:1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    Imagecontainer:{
      flex:1,
      justifyContent: 'flex-end', // Aligns children to the bottom of the container
    alignItems: 'flex-start', 
    },
   
    nameview:{
    margin:60,
   },
    inputview:{
     flex:2,
     flexDirection:'column',
     justifyContent:'flex-start',
     width:"100%",
    },
    card:{
        flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
     borderRadius:20,
     
     height:350,
     width:"100%"
    },
    
    });

  export default Sign;