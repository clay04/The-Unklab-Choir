import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Gap, Header} from '../../components';
import {lanyardpurple, lanyardred, shirt, tumbler} from '../../assets';

const Merchandise = ({navigation}) => {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#530303', '#000000', '#000000']}
          style={styles.gradient}>
          <Header label="Merchandise" backButton={true} onPress={() => navigation.goBack()}/>
          <Gap height={20}/>
        </LinearGradient>
      </View>
    );
  };

export default Merchandise

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    gradient: {
      flex: 1,
    },
});