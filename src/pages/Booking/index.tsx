import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Gap, Header, TextInput} from '../../components';

const Booking = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#530303', '#000000', '#000000']}
        style={styles.gradient}>
        <Header label="Booking" backButton={true} onPress={() => navigation.goBack()}/>
        <Gap height={22} />
        <View style={{paddingHorizontal: 25,}}>
            <TextInput
            label="Event Type"
            Gap height={6}
            placeholder="Event Type"/>
            <Gap height={22} />

            <TextInput 
            label="Event Name"
            Gap height = {6} 
            placeholder="Event Name" />
            <Gap height={31} />
            
            <TextInput type="date" label1="Date" label2="Time"/>
            
            <Gap height={79} />
            <Button
            label="See TUC's Schedule"
            backgroundColor="#72E576"
            textColor="#000000"
            onPress={() => navigation.navigate('Jadwal')}
            />
            <Gap height={50} />
            <Button
            label="Continue to payment"
            backgroundColor="#72E576"
            textColor="#000000"
            onPress={() => navigation.navigate('Payment')}
            />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Booking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gradient: {
    flex: 1,
    paddingHorizontal: 10,
  },

  containerWrapper: {
    backgroundColor: 'rgba(255,255,255,0.22)',
    flex: 1,
    paddingHorizontal: 24,
  },
});