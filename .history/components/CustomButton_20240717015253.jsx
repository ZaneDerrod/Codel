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
    minHeight: 40, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 16, 
    paddingVertical: 8, 
    width: '10%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default CustomButton;