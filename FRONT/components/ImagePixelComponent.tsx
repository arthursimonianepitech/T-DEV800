import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { getPixelRGBA } from 'react-native-get-pixel';

// import PixelColor from 'react-native-pixel-color';

export default function ImagePixelComponent() {




  // return (
  //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //     <Button title="Pixel" onPress={testFunction}/>
  //   </View>
  // );

  const x = 1
  const y = 1


//   const testFunction = () => {
//     PixelColor.getHex('image.png', { x, y }).then((color) => {
//       // #000000
//       console.log(color)
//     }).catch((err) => {
//       // Oops, something went wrong. Check that the filename is correct and
//       // inspect err to get more details.
//     });

//     console.log("World")
// };

const testFunction = () => {
  getPixelRGBA('image.png', x, y)
.then(color => console.log(color)) // [243, 123, 0]
.catch(err => {});
console.log("Hello")
};

return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Button title="Pixel" onPress={testFunction}/>
</View>
);



}
