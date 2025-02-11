import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {

  return (
    <Tabs
    screenOptions={
      {
       
      // tabBarStyle:{
      //   backgroundColor:"brown",
      //   borderTopWidth:12,
      //   borderTopColor:"black",
      //   height:45,
        
      // },
        tabBarShowLabel: true,
      //  tabBarInactiveBackgroundColor: "grey",
        //tabBarActiveBackgroundColor:"white",
        tabBarInactiveTintColor:"black",
        tabBarActiveTintColor:"blue",
      }
    }
    >
    <Tabs.Screen 
name='home'
 
options={{
    title: 'Home',
    
    headerShown:false,
   tabBarIcon:({focused,color,size})=>(
<FontAwesome name='home' color={color} size={24}/>
   ),
}}
/>
<Tabs.Screen 
name='transaction'
 
options={{
    title: 'Transaction',
    
    headerShown:false,
   tabBarIcon:({focused,color,size})=>(
<FontAwesome name='edit' color={color} size={24}/>
   ),
}}
/>
<Tabs.Screen 
name='transactionList'
 
options={{
    title: 'Transaction List',
    
    headerShown:false,
   tabBarIcon:({focused,color,size})=>(
<FontAwesome name='list-alt' color={color} size={24}/>
   ),
}}
/>
    </Tabs>
  );
}
