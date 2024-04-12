import { StyleSheet, Text, View, } from 'react-native';


function Title(props){
    return(
     <View>
         <Text style={styles.name}>{props.name}</Text>
     </View>
    );
}
const styles=StyleSheet.create({
    name:{
        fontSize:25,
        fontWeight:'bold',
        color:'black',
          },
}

)
export default Title;