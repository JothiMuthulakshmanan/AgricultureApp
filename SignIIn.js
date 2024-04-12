import { StyleSheet, View, ImageBackground ,Image,TextInput,Button,Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import Title from './Title';
import firebase from './Config';

function SignIIn(){

  const navigation = useNavigation();
 
   const [email,setEmail]=useState('');
   const [pass,setPass]=useState('');
  
   loginUser = async() =>{
    try{
      await firebase.auth().signInWithEmailAndPassword(email,pass);
    }
    catch(error){
alert(error.message);
    }
   }




return (
    <View style={styles.container}>
          <View style={styles.nameview}>
               <Title name="Welcome Back"/>
          </View>
          <View style={styles.inputview}>
            <View style={styles.card}>
              <View>
           <Text style={styles.textsty}>Email</Text>
          <TextInput style={styles.inputbox} textContentType={'emailAddress'} placeholder='example@gmail.com' onChangeText={(email)=>setEmail(email)}></TextInput>
          <Text style={styles.textsty}>password</Text>
          <TextInput style={styles.inputbox} textContentType={'password'} secureTextEntry={true} placeholder='min. 8 characters' onChangeText={(pass)=>setPass(pass)}></TextInput>
          
          
            <View style={{marginTop:30}}><TouchableOpacity onPress={()=>loginUser(email,pass)} style={styles.butview}>
              <Text style={{color:'white'}}>login</Text>
              </TouchableOpacity></View>
             <View>
              <TouchableOpacity onPress={()=>navigation.navigate('Sign')}>
              <Text style={{color:'blue',marginTop:30}}> Do not have an account? Register Now</Text>
              </TouchableOpacity></View>
              </View>
          </View>
          <View style={styles.Imagecontainer}>
            <Image source={require('./Asset 1@4x 1.png')} style={{width: 130,height:125,position:'absolute'}}></Image>
            </View>
          </View>
   </View>
)
}

const styles = StyleSheet.create({
    container: {
      

      flexDirection:'column',
      flex:1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    textsty:{
      fontWeight:'bold',
      color:'black',
      marginTop:20,
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
    Imagecontainer:{
      flex:1,
      justifyContent: 'flex-end', // Aligns children to the bottom of the container
    alignItems: 'flex-start', 
    },
    card:{
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
     borderRadius:20,
     height:350,
     width:"100%"

     
    },
    inputbox: {
        
       borderBottomWidth:1,
           borderColor:'gray',
            height:35,
            borderRadius:10,
           justifyContent:'center',

      
      },

      butview: {
        

        height:40,
            width:250,
            borderRadius:10,
            backgroundColor:'#008000',
            justifyContent:'center',
            alignItems:'center',
      },
    });
export default SignIIn;