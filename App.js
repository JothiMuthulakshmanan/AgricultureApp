import React ,{useState,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Sign from './Sign';
import SignIIn from './SignIIn';
import Home from './Home';
import firebase from './Config';
import DisplaySign from './DisplaySign';
import ChatScreen from './ChatScreen';
import Community from './Community';

const Stack = createNativeStackNavigator();
export default function App() {

  const [initializing,setInitializing]=useState(true);
  const [user,setUser]=useState();
  
  
  useEffect(() => {
    const subscriber=firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber;
  },[firebase]
  );

  function onAuthStateChanged(user){
    setUser(user);
    if(initializing) setInitializing(false);
 }
  
  if(initializing) return null;
  return (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Display">
        
        
        {user ? ( <Stack.Screen
        name="chatscreen"
        component={ChatScreen}
        options={{title: 'chatscreen'}}
        />) :(
          <>
          <Stack.Screen
        name="Cultivate360"
        component={Community}
        options={{title: 'cultivate360'}}
        />

<Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'SignIn'}}
        />
          <Stack.Screen
          name="SignIIn"
          component={SignIIn}
          options={{title:'SignIIn'}}
        />

        <Stack.Screen
          name="Sign"
          component={Sign}
          options={{title: 'Sign'}}
        />
</>

        )}
        
      </Stack.Navigator>
      </NavigationContainer>
  );}
   



