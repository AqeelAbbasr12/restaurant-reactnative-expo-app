import { StyleSheet, Pressable, Text } from 'react-native';

export default function Button({ label, onPress, buttonStyle, textStyle }) {
  return (
      <Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{label}</Text>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F29434',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
