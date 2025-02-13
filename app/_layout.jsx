import { View, Text } from 'react-native'
import React from 'react'

import { Stack } from 'expo-router';

const RootLayout = () =>  {
        return (
            <Stack>
                <Stack.Screen name="auth/signIn" />
                <Stack.Screen name="auth/signUp" />
                <Stack.Screen name="tabs/home" />
                <Stack.Screen name="tabs/transactionList" />
            </Stack>
        );
      }
