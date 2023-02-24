import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SignInProps} from '../../routes';
import TextInput from '../../components/TextInput';

export default function SignIn() {
    const navigation = useNavigation<SignInProps>();

    const goToDash = () => {
        navigation.replace('Dashboard');
    };

    return (
        <>
            <StatusBar backgroundColor={'#ed145b'} />
            <View style={styles.container}>
                <Text style={styles.title}>Fiap</Text>
                <TextInput
                    placeholder="Digite seu e-mail"
                    keyboardType="email-address"
                />
                <TextInput placeholder="digite sua senha" secureTextEntry />
                <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ed145b',
    },
    title: {
        color: '#FFF',
        fontSize: 42,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    button: {
        backgroundColor: '#FFF',
        padding: 10,
        width: Dimensions.get('screen').width - 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#ed145b',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
