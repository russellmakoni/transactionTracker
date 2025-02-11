import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';


const Index = () => {
  return (
    <SafeAreaView style={styles.container} edges={['left','right']} ><StatusBar style="light" />
<ImageBackground source={require("../assets/images/mansucces.jpg")} resizeMode="cover" style={styles.imageBackground} >
   <Text style={styles.headertext}> Welcome </Text> 
   <Text></Text>
</ImageBackground>

    </SafeAreaView>
   
      
    

  )
}
const styles = StyleSheet.create({
    container: { flex: 1,},
    imageBackground:{flex:1,
        justifyContent:'center',
    },
    headertext: {color: 'white',
        fontSize: 48,
        
        justifyContent:'centre',
    },
});
export default Index