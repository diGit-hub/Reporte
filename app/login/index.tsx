import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import {styles} from './style';
import { useFonts } from 'expo-font';

export default function Login(){
    const [fontsLoaded] = useFonts({
        'DM-Sans-Regular': require('../../assets/fonts/DMSans-Regular.ttf'), // Use caminho relativo
    });

    if (!fontsLoaded) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    };
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
        >
            <View style={styles.container}>
                <View style={styles.boxTop}>
                    <Text style={styles.logo}>Reporte</Text>
                    <Text>Seja bem-vindo!</Text>
                </View>
                <View style={styles.boxMid}>
                    <Text style={styles.label}>Login</Text>
                    <TextInput style={styles.input} placeholder="Email ou nome de usuário" />
                    <Text style={styles.label}>Senha</Text>
                    <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />
                    <TouchableOpacity></TouchableOpacity>
                </View>
                <View style={styles.boxBottom}>
                    <TouchableOpacity style={styles.entrar}>
                        <Text>Entrar</Text>
                    </TouchableOpacity>
                    <Text style={styles.signup}>Criar conta</Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}