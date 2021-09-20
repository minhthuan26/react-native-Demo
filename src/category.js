import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import CategoryImage from '../assets/categories.png'

export default function Category(props){
    const { category, onPress } = props;
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
                <Image style={styles.categoryImgStyle} source={CategoryImage}></Image>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        elevation: 10,
        marginTop: 30
    },

    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: 'bold'
    },

    categoryImgStyle: {
        width: 64,
        height: 64,
    }
});