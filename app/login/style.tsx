import React from "react";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxTop: {
        backgroundColor: 'white',
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
    boxMid: {
        backgroundColor: 'white',
        width: '100%',
        height: '30%',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    boxBottom: { 
        width: '100%',
        height: '45%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    logo: {
        fontFamily: 'DM-Sans-Regular',
        fontSize: 30,
        margin: 30,
    },
    label:{
        paddingHorizontal: 10,
        fontSize: 20,
        alignItems: "flex-start",
    },
    loadingContainer: {

    },
    input:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        width: '100%',
        marginBottom: 15,
        marginTop: 5,
    },
    signup:{
        color: 'blue',
        margin: 10,
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 15,
    },
    entrar:{
        borderRadius: 25,
        padding: 10,
        borderWidth: 2,
        paddingHorizontal: 50,
        marginTop: 10,
    }
})