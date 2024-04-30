import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';



const SplashScreen = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.replace('AnimationScreen')
        }, 3000)
    })

    return (
        <View style={Styles.container}>
            <Text>SplashScreen</Text>
        </View>
    );
};
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    Image: {
        width: 250,
        height: 100,
    },
});
export default SplashScreen;
