import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default function About() {

    return (
        <View style={styles.container}>
            <Text>Hi, I'm Great.</Text>
            <Text>{Constants.deviceName}</Text>
            <Text>{Constants.systemVersion}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});