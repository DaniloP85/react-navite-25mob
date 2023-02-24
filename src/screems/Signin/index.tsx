import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {StackProps} from '../../routes';

import TextInput from '../../components/TextInput';

export default function SignIn() {
    const navigation = useNavigation<StackProps>();

    const initialValues = {email: '', pass: ''};

    const SignInSchema = Yup.object().shape({
        email: Yup.string()
            .email('Formato de e-mail inválido')
            .required('Campo obrigatório'),
        pass: Yup.string()
            .min(2, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Required'),
    });

    const goToDash = (
        params: typeof initialValues,
        setSubmitting: (param: boolean) => void,
    ) => {
        Keyboard.dismiss();
        setTimeout(() => {
            setSubmitting(false);
            console.log(params);
        }, 5000);
        //navigation.replace('Dashboard');
    };

    return (
        <Formik
            initialValues={{email: '', pass: ''}}
            onSubmit={(values, {setSubmitting}) =>
                goToDash(values, setSubmitting)
            }
            validationSchema={SignInSchema}>
            {({values, handleChange, handleSubmit, isSubmitting, errors}) => (
                <View style={styles.container}>
                    <Text style={styles.title}>FIAP</Text>
                    <TextInput
                        value={values.email}
                        error={errors.email}
                        onChangeText={handleChange('email')}
                        placeholder="Digite seu e-mail"
                        keyboardType="email-address"
                    />
                    <TextInput
                        value={values.pass}
                        error={errors.pass}
                        onChangeText={handleChange('pass')}
                        placeholder="Digite sua senha"
                        secureTextEntry
                    />
                    <TouchableOpacity
                        onPress={handleSubmit}
                        activeOpacity={0.7}
                        disabled={isSubmitting}
                        style={styles.button}>
                        <Text style={styles.buttonText}>
                            {isSubmitting ? 'Carregando...' : 'Entrar'}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
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
        backgroundColor: '#FFFFFF',
        padding: 10,
        width: Dimensions.get('screen').width - 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#be0e49',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
