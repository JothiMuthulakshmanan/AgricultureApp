import { useState } from 'react';
import { StyleSheet,  View, Button,Image, TextInput,Text,TouchableOpacity} from 'react-native';
import firebase from './Config';


function Credentials(){

   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [pass,setPass]=useState('');
   const [repass,setRepass]=useState('');

   const handleSubmitemail = () => {
    // Regular expression to match email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
  };

   const handleSubmitpass = () => {
    if (pass.length !== 8) {
      alert( 'Password must be 8 characters long');
      return;
    }
    
  };

  const checkpass = () => {
    if (pass!== repass) {
      alert('Passwords do not match');
      return;
    }
  };
  
   registerUser =async(name,email,pass,repass) =>{
    await firebase.auth().createUserWithEmailAndPassword(email,pass)
    .then(()=>{
      firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url:'https://reactnative-13983.firebaseapp.com',
      })
      .then(
        () =>{
          alert('verification email sent')
        }
      ).catch((error)=>{
        alert(error.message)
      })
    }

    )
   }

   const handleregister =() =>{
         handleSubmitemail();
         handleSubmitpass();
         checkpass();
         registerUser();
   }


    return(
        <View>
          <Text style={styles.textsty}>Name</Text>
            <TextInput style={styles.inputbox} textContentType={'text'} placeholder='for ex. Antony' onChangeText={(name)=>setName(name)}></TextInput>
            <Text style={styles.textsty}>Email</Text>
          <TextInput style={styles.inputbox} textContentType={'emailAddress'} placeholder='example@gmail.com' onChangeText={(email)=>setEmail(email)}></TextInput>
          <Text style={styles.textsty}>password</Text>
          <TextInput style={styles.inputbox} textContentType={'password'} placeholder='min 8 character' secureTextEntry={true} onChangeText={(pass)=>setPass(pass)}></TextInput>
         <Text style={styles.textsty}>Re-enter password</Text>
          <TextInput style={styles.inputbox} textContentType={'password'} placeholder='Repeat Password' secureTextEntry={true} onChangeText={(repass)=>setRepass(repass)}></TextInput>
          <View style={styles.butview1}><TouchableOpacity onPress={handleregister} style={styles.butview}>
              <Text style={{color:'white',}}>Register</Text>
              </TouchableOpacity></View>
             
              
        </View>
    );
}
const styles=StyleSheet.create(
    {
      
        inputbox: {
            borderBottomWidth:1,
           borderColor:'gray',
            height:35,
            borderRadius:10,
           justifyContent:'center',
          },

          textsty:{
            fontWeight:'bold',
            color:'black',
            marginTop:20,
          },
          butview1:{
            marginTop:30,
          },
          butview: {
            height:40,
            width:250,
            borderRadius:10,
            backgroundColor:'#008000',
            justifyContent:'center',
            alignItems:'center',
          },

    }
)
export default Credentials;