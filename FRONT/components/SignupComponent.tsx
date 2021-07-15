import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import { color } from 'react-native-reanimated';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';


export default function SignupComponent({ path }: { path: string }) {
  return (
    <View>
        <TextInput placeholder="email" placeholderColor="#c4c3cb" autoCompleteType="email" style={styles.loginFormTextInput} ></TextInput>
        <View style={styles.separator} lightColor="#000000" darkColor="rgba(255,255,255,0.1)" />
        <TextInput secureTextEntry={true} placeholder="password" placeholderColor="#c4c3cb" autoCompleteType="password" style={styles.loginFormTextInput} ></TextInput>
        <TextInput secureTextEntry={true} placeholder="confirm password" placeholderColor="#c4c3cb" autoCompleteType="password" style={styles.loginFormTextInput} ></TextInput>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Button title="send" />
    </View>
  );
}

const styles = StyleSheet.create({
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
    width: 300,
  },
  separator: {
    marginVertical: 5,
    height: 1,
    width: '20%',
  },
});