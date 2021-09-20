import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';


export default class cateItemScreen extends React.Component {
    static navigationOptions = {
        title: 'List',
        headerTitleAlign: 'center',

        headerStyle: {
          backgroundColor: '#f4511e'
        },
      
        headerTintColor: 'white',

        headerTitleStyle: {
            fontWeight: 'bold',
            
        }
    };
    render() {
        return (
          <View style={styles.container}>
            <Text>Item</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
});
