import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';


const Index = () => {
  return (
    
    <NavigationContainer>
      <SafeAreaView style={styles.container} edges={['left','right']} ><StatusBar style="light" />

<ImageBackground source={require("../assets/images/mansucces.jpg")} resizeMode="cover" style={styles.imageBackground} >
   <Text style={styles.headertext}> Welcome to Transaction Tracker
</Text> 
<Text>Thank you for choosing Transaction Tracker to manage your transactions. This onboarding process will guide you through setting up your account and getting started with the application.
   </Text>

      <Link href="signIn" style={styles.button}>
         <Text style={styles.buttonText}>Log In</Text>
      </Link>
      <Link href="signUp" style={styles.button}>
         <Text style={styles.buttonText}>Sign Up</Text>
      </Link>
   


</ImageBackground>
      </SafeAreaView>
    </NavigationContainer>


      
     
    

  )
}


const styles = StyleSheet.create({
    container: { flex: 1,},
    imageBackground:{flex:1,
        justifyContent:'center',
    },
    headertext: {color: 'white',
        fontSize: 48,
        fontFamily:'',
        justifyContent:'centre',
    },
    buttonContainer: {
        
        justifyContent: 'space-around',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#1e90ff',
       
        borderRadius: 5,
        alignItems: 'center',
    
    
    marginHorizontal: 10,
    marginBottom:10,
    padding: 15,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        justifyContent:'center',
        alignContent:'center'
    },
});

export default Index
