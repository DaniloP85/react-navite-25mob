import React from 'react';
import {
    Text,
    TextInput as RNTextInput,
    View,
    StyleSheet,
    Dimensions,
    TextInputProps,
} from 'react-native';

interface CustomTextInputProps extends TextInputProps {
    error?: string;
}

export default function TextInput({error, ...props}: CustomTextInputProps) {
    return (
        <View style={styles.container}>
            <RNTextInput style={styles.TextInput} {...props} />
            {error && <Text style={styles.errorText}>Error</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    TextInput: {
        backgroundColor: '#FFFFFF80',
        padding: 10,
        width: Dimensions.get('screen').width - 80,
        borderRadius: 8,
    },
    errorText: {
        color: '#fff',
    },
});
