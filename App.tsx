import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { ImageViewer, Button } from "@/components";
import { launchImageLibraryAsync } from "expo-image-picker/src/ImagePicker";
import assets from "@/public";
import { useState } from "react";

export default function App() {
  const [avatar, setAvatar] = useState(null);
  const pickImageAsync = async () => {
    let result = await launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setAvatar(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={assets.background} selectedImage={avatar} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme='primary' label='Choose a photo' onPress={pickImageAsync} />
        <Button label='Use this photo' />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
