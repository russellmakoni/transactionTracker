import { View, Text,FlatList, StyleSheet,ImageBackground, } from 'react-native'
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
      // Fetch transactions from the backend
      axios.get('http://localhost:8082/v1/transactions')
          .then(response => setTransactions(response.data))
          .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
      <View style={styles.transactionItem}>
          <Text>{item.date}</Text>
          <Text>{item.amount}</Text>
          <Text>{item.description}</Text>
      </View>
  );

  return (
    <ImageBackground source={require("../../assets/images/imge.jpg")} resizeMode="cover" style={styles.imageBackground} >
      <View style={styles.container}>
      
          <FlatList
              data={transactions}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
            />
           
        </View>
        </ImageBackground> 
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    imageBackground:{flex:1,
        alignItems:'centre',  
        
      },
    transactionItem: { padding: 16, 
        marginBottom: 8, 
        backgroundColor: 'transparent',
        // borderRadius: 10, 
        shadowColor:'#000',
        shadowOffset:{width:0,height:2}, 
        shadowOpacity:0.25,
        elevation:5,
        shadowRadius:3.84,
        color:'white',
        borderColor:'#1e90ff'
    }
});




export default TransactionList