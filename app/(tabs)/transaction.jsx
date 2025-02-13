
import { router } from 'expo-router';
import React, { useState } from 'react';
  import { View, TextInput, Button, StyleSheet ,ImageBackground} from 'react-native';
  import axios from 'axios';

const Transaction = () => {
  
      const [date, setDate] = useState('');
      const [amount, setAmount] = useState('');
      const [description, setDescription] = useState('');
  
      const handleSubmit = () => {
          const transaction = { date, amount, description };
  
          // Send data to backend
          axios.post('http://localhost:8082/v1/transactions', transaction)
              .then(() => {
                  // Navigate back to transaction list after successful submission
                 router.push('transactionList');
              })
              .catch((error) => console.error(error));
  };
  return (
     <ImageBackground source={require("../../assets/images/imge.jpg")} resizeMode="cover" style={styles.imageBackground}>
    <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Date"
            value={date}
            onChangeText={setDate}
        />
        <TextInput
            style={styles.input}
            placeholder="Amount"
            value={amount}
            onChangeText={setAmount}
        />
        <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
        />
        <Button title="Submit" onPress={handleSubmit} />
    </View>
    </ImageBackground>
);
};
const styles = StyleSheet.create({
  imageBackground:{flex:1,
        alignItems:'centre',  
        
      },
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 12, paddingLeft: 8 ,color:'#ccc',
    
  }
});


export default Transaction