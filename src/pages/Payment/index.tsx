import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Gap, Header} from '../../components';
import { Bank } from '../../assets';

const Payment = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#530303', '#000000', '#000000']}
        style={styles.gradient}>
        <Header label="Payment" backButton={true} />
            <Gap height = {56}/>
            <View style={{paddingHorizontal: 30,}}>
                <Text style={styles.text}>Transfer | M-Banking</Text>
                
                <Gap height = {16}/>
                
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                <Bank/>
                <Text style={{marginLeft: 15}}>BCA/3578XXXXXXX</Text>
                <View/>
                </View>

                <Gap height = {15}/>

                <View style={{flexDirection: 'row', alignItems:'center'}}>
                <Bank/>
                <Text style={{marginLeft: 15}}>Mandiri/15000XXXX</Text>
                <View/>
                </View>

                <Gap height = {384}/>

                <Button
                label="Pay Now"
                backgroundColor="#72E576"
                textColor="#000000"
                onPress={() => navigation.navigate('Payment')}
                />
            </View>
        <View/>    
      </LinearGradient>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    paddingHorizontal: 10,
    flex: 1,
  },
  text: {
    color: '#ffff',
  }
});