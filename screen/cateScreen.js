import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Category from '../src/category';

export default class cateScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerTitleAlign: 'center',

        headerStyle: {
            backgroundColor: '#f4511e'
        },
        
        headerTintColor: 'white',

        headerTitleStyle: {
            fontWeight: 'bold',
            
        }
    };
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
        const { navigation } = this.props;
        const { categories } = this.state;
        return (
            <ScrollView>
                <FlatList 
                data={categories}
                renderItem={({item}) => <Category 
                    category={item} 
                    onPress={() => navigation.navigate('cateItemScreen')}
                    />}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={styles.container}
                />
            </ScrollView>
        );
    }
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16
    },
});
