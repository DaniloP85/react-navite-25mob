import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SignInProps} from '../../routes';

export default function SignIn() {
  const navigation = useNavigation<SignInProps>();

  const goToDash = () => {
    navigation.push('Dashboard');
  };

  return (
    <View>
      <Text>SignIn</Text>
      <TouchableOpacity onPress={goToDash}>
        <Text>Vamos para Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}
