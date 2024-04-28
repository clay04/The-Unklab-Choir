import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../atom';

const Header = ({label, backButton, onPress}) => {
  return (
    <View style={[styles.container, {backgroundColor: 'transparent'}]}>
      {backButton && (
        <Button type="icon-only" icon="icon-back" onPress={onPress} />
      )}
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#ffffff',
    marginLeft: 26,
  },
});
