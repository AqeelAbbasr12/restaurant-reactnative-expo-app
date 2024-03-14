import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ source, style, imageStyle }) {
  return (
      <Image source={source} style={[styles.image, style, imageStyle]} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    alignContent: 'center',
    resizeMode: 'cover',
  },
});
