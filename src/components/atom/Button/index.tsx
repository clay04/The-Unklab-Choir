import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {BackButton} from '../../../assets/icon';

const Button = ({
  label,
  backgroundColor = '#02CF8E',
  textColor = '#020202',
  borderRadius = 8,
  onPress,
  type,
  icon,
}) => {
  if (type === 'icon-only') {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {icon === 'icon-back' && <BackButton />}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={styles.container(backgroundColor, borderRadius)}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (backgroundColor, borderRadius) => ({
    backgroundColor: backgroundColor,
    paddingVertical: 12,
    borderRadius: borderRadius,
    width: 300,
  }),

  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: textColor,
  }),
});
