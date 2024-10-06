import React from 'react';
import { View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Ícones compatíveis com React Native

const Footer: React.FC = () => {
    return (
        <View style={styles.footer}>
            <MaterialIcons name="bar-chart" style={styles.icon} />
            <MaterialIcons name="list" style={styles.icon} />
            <MaterialIcons name="settings" style={styles.icon} />
        </View>
    );
};

const styles = {
    footer: {
        position: 'absolute', 
        bottom: 20, // Em pixels ou porcentagem
        left: '10%', 
        right: '10%',
        backgroundColor: 'hsl(200, 87%, 82%)',
        padding: 10,
        flexDirection: 'row', // Alinha os ícones em linha
        justifyContent: 'space-around', // Distribui espaço entre os ícones
        alignItems: 'center',
        borderRadius: 50, // Define a borda arredondada
    },
    icon: {
        marginHorizontal: 20, // Espaçamento horizontal entre os ícones
        fontSize: 30, // Tamanho do ícone
    },
};

export default Footer;
