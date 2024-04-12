import { StyleSheet,Text,View,Button,ImageBackground,Image } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

function DisplaySign(){
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SignIIn');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);


return(
    <View style={styles.container}>

          <View style={{margin:60}}>
            
          </View>

          <View style={styles.inputview}>
            <View style={styles.card}>
              <View Style={styles.nameholder}>
            <Image source={require('./logo1 1.png')} style={{width: 130,height:125,marginBottom:20}}></Image></View>
               <Text style={styles.name}>Farming is the Profession</Text>
               <Text style={styles.name}>of Hope</Text>
              
            </View>
                    <View style={styles.Imagecontainer}>
                       <Image source={require('./Asset 1@4x 1.png')} style={{width: 130,height:125,position:'absolute'}}></Image>
                    </View>
            
          </View>

          </View>
);
}

const styles=StyleSheet.create(
    {
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

        justifyContent:'center',
        alignItems:'center',
        
         },
         name:{
            fontWeight:'bold',
            fontSize:30,
            color:'black',
    
              },
          inputview:{
           flex:2,
     flexDirection:'column',
     justifyContent:'flex-center',
     width:"100%",
    
          },
          card:{

           flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
     borderRadius:20,
     height:350,
     width:"100%"
     
          },
          nameholder:{

            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
             backgroundColor:'pink',
             
          },
          butview: {
            height:40,
            width:100,
            borderRadius:100,
            justifyContent:'center',
            marginTop:20,
          },
    }
)


export default DisplaySign;