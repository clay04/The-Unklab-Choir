import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FotTUC} from '../../../assets';

const Albums = ({source, onPress, label}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View>
          <Image source={source} style={styles.foto} />
          <Text style={styles.label}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Albums;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.25)',
    width: 101,
    height: 150,
    borderRadius: 5,
    alignItems: 'center',
    padding: 1,
    marginRight: 15,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 5,
  },
});
