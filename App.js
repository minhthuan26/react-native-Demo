import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Category from './src/category';

export default class App extends React.Component {
  constructor(props) {
    idNum = 0;
    super(props);
    this.state = {
      categories: [
        { id: ++idNum, name: 'Item 1'},
        { id: ++idNum, name: 'Item 2'},
        { id: ++idNum, name: 'Item 3'},
        { id: ++idNum, name: 'Item 4'},
        { id: ++idNum, name: 'Item 5'},
        { id: ++idNum, name: 'Item 6'}
      ]
    };
  }

  render () {
    const { categories } = this.state;
    return (
      <View style={styles.container}>
        <FlatList 
          data={categories}
          renderItem={({item}) => <Category category={item} /> }
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
        />
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
    alignItems: 'stretch',
  },
});
