import * as React from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginComponent from '../components/LoginComponent';

export default function LoginScreen( {navigation} ) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <LoginComponent path="/components/LoginComponent.tsx" />  
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={{width: 250}}>
      <Button title="Log in"/>
      <View style={styles.separator2} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignupScreen')} type="clear" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  separator2: {
    marginVertical: 5,
    height: 1,
    width: '0%',
  },
});
