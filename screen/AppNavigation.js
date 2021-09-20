import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import cateScreen from './cateScreen';
import cateItemScreen from './cateItemScreen';

const AppNavigation = createStackNavigator({
    cateScreen: {
        screen: cateScreen
    },
    
    cateItemScreen: {
        screen: cateItemScreen
    }
});

export default AppNavigation;