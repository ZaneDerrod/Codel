import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Custom Button</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#21B6A8', 
    borderRadius: 15, 
    minHeight: 60, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 150, 
    paddingVertical: 8, 
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default CustomButton;