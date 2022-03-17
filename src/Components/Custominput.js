import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Custominput = ({value, setValue, placeholder}) => {
  return (
    <View style={styles.custom}>
      <TextInput
        placeholder={placeholder}
        value={value}
        placeholderTextColor='white'
        onChangeText={setValue}
        style={styles.input}
        ></TextInput>
    </View>
  );
};
const styles = StyleSheet.create({
  custom: {
    backgroundColor:'white',
    width: '75%',
    borderColor: '#d1d1d1',
    backgroundColor:'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginHorizontal: 15,
    
    
  },
  input: {
  color:'white'
  },
});

export default Custominput;
