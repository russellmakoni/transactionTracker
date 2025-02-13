import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';


import React from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';


const Index = () => {
  return (
    
    
      <SafeAreaView style={styles.container} edges={['left','right']} ><StatusBar Barstyle="light" />

<ImageBackground source={require("../assets/images/mansucces.jpg")} resizeMode="cover" style={styles.imageBackground} >
   <ScrollView style={styles.top}>
   <Text style={styles.headertext}> Welcome to Transaction Tracker
</Text> 
<Text style={styles.introtext}>Thank you for choosing Transaction Tracker to manage your transactions. </Text>
   </ScrollView>
   <View style={styles.footer}>
   <Link href="signIn" style={styles.button}>
         <Text style={styles.buttonText}>Log In</Text>
      </Link>
      
    
   </View>

      


</ImageBackground>
      </SafeAreaView>
  


      
     
    

  )
}


const styles = StyleSheet.create({
    container: { flex: 1,},
    imageBackground:{flex:1,
      alignItems:'centre',  
      
    },
    headertext: {color: 'white',
        fontSize: 24,
      
        justifyContent:'centre', 
        textAlignVertical:'centre',
        marginBottom:20,
      
    },
    top:{flex:1,
      marginHorizontal: 10,
      marginTop:60,
     
      
    },
    introtext:{color: 'white',},
    buttonContainer: {
        
        justifyContent: 'space-around',
        marginTop: 20,
    },
    footer:{marginBottom:20,},
    button: {
        backgroundColor: '#1e90ff',
       
        borderRadius: 5,
        alignItems: 'bottom',
        justifyContent: 'center',
    
    
    marginHorizontal: 10,
    marginBottom:10,
    padding: 15,
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        textAlign:'center',

    }
});

export default Index
