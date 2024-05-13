import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';
import { Mail, Password } from '../../../assets';

const TextInput = ({placeholder, type}) => {
    if (type === 'password') {
        return (
            <View style={styles.input}>
                <View style={styles.icon}><Password /></View>
                <Input placeholder={placeholder} placeholderTextColor={"#000000"} style={styles.inputIn} secureTextEntry={true}/>
            </View>
        )
    }
  return (
    <View style={styles.input}>
        <View style={styles.icon}><Mail /></View>
        <Input placeholder={placeholder} placeholderTextColor={"#000000"} style={styles.inputIn}/>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },

  input: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderRadius: 15,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  inputIn: {
    width: 400,
    color: '#020202'
  },
  icon: {
    marginRight: 10,
  }
});
