import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { TUC } from '../../assets';



const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
          navigation.replace('LogIn');
        }, 3000);
    });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#530303', '#000000', '#000000']}
        style={styles.gradient}
      >
        <View style={styles.logo}>
            <TUC />
        </View>
        <View style={styles.foot}>
            <Text style={styles.footText}>#TSGWJ</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  foot: {
    alignItems: 'center',
  },
  footText: {
    fontFamily: 'Poppins-Medium',
    color: '#ffffff',
    fontSize: 16,
  }
});