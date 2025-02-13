import { Tabs } from 'expo-router';
import React from 'react';

import { FontAwesome } from '@expo/vector-icons'




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
        tabBarActiveTintColor:'#1e90ff',
      }
    }
    >


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
