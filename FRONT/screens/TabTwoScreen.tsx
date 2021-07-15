import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import ImagePixelComponent from '../components/ImagePixelComponent';
import { Text, View } from '../components/Themed';

import UploadComponent from '../components/UploadComponent';
import CameraComponent from '../components/CameraComponent';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Images</Text>
      <ImagePixelComponent path="/components/ImagePixelComponent.tsx" />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <UploadComponent path="/components/UploadComponent.tsx" /> 
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <CameraComponent path="/components/CameraComponent.tsx" />
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
});
