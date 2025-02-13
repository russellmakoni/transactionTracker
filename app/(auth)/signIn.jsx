
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';


const SignIn = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'test' && password === 'password') {
            // Navigate to the transaction list screen
           router.push('/(tabs)/transactionList');
        } else {
            alert('Invalid credentials');
        }
    };


 
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};
const styles = StyleSheet.create({
  container: { flex: 1,
     justifyContent: 'center',
      padding: 16 },
    input: { height: 40, 
        borderColor: '#ccc', 
        borderWidth: 1,
         marginBottom: 12, 
         paddingLeft: 8 }
});


export default SignIn