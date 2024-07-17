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
    backgroundColor: '#FFD700', 
    borderRadius: 15, 
    minHeight: 62, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 175, 
    paddingVertical: 4, 
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default CustomButton;