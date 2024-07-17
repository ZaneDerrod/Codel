import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFD700', // Example secondary color
    borderRadius: 15, // Equivalent to rounded-xl
    minHeight: 62, // Equivalent to min-h-[62px]
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    paddingHorizontal: 16, // Add horizontal padding
    paddingVertical: 8, // Add vertical padding
  },
  buttonText: {
    color: '#FFFFFF', // Text color
    fontWeight: 'bold',
  },
});

export default CustomButton;