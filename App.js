import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { createAppContainer } from 'react-navigation';

import AppNavigation from './screen/AppNavigation';


export default class App extends React.Component {
    
    render () {
      
      return <AppContainer />;
    } 
}

const AppContainer = createAppContainer(AppNavigation);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
});

