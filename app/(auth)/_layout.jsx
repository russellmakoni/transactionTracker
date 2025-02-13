import { View, Text } from 'react-native'
import React from 'react'
import { StackRouter } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { NavigationContainer } from '@react-navigation/native'


const Authlayout = () => {
  
  
  
  <Stack>
                <Stack.Screen name="auth/signIn" />
                <Stack.Screen name="auth/signUp" />
                <Stack.Screen name="tabs/home" />
                <Stack.Screen name="tabs/transactionList" />
            </Stack>
            
}
