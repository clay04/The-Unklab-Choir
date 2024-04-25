import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { TUC } from '../../assets';



const Splash = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#530303', '#000000', '#000000']}
        style={styles.gradient}
      >
        <View style={styles.logo}>
            <TUC/>
        </View>
        <View>
            <Text>#TSGWJ</Text>
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
  }
});
