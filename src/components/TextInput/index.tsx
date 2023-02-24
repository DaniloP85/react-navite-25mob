import React from 'react';
import {Text, TextInput as RNTextInput, View} from 'react-native';

export default function TextInput() {
    return (
        <View>
            <RNTextInput />
            <View>
                <Text>Test</Text>
            </View>
        </View>
    );
}
