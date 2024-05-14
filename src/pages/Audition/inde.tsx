import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Gap, Header} from '../../components';
import {Time, Location, Schedule, audition} from '../../assets';

const Audition = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#530303', '#000000', '#000000']}
        style={styles.gradient}>
        <Header label="Audition" backButton={true} onPress={() => navigation.goBack()}/>
        <Gap height={22} />
        <View style={styles.containerWrapp}>
          <Image source={audition} style={styles.image} />
            <View style={styles.detailsContainer}>
              <Gap height={30}/>

              <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between', width: 230}}>
              <Schedule/>
              <Text style={styles.details}>May 14, 2024</Text>
              </View>

              <Gap height={54}/>

              <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between', width: 230}}>
              <Time/>
              <Text style={styles.details}>03.00 PM</Text>
              </View>

              <Gap height={53}/>

              <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between', width: 230}}>
              <Location/>
              <Text style={styles.details}>GK 1 - Lobby</Text>
              </View>
            
            </View>
        </View>
        </LinearGradient>
      </View>
  );
};



export default Audition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 290,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  detailsContainer: {
    alignItems: 'center',
  },
  details: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
    marginBottom: 5,
    textAlign: 'left',
    width: 150,
  },
  containerWrapp: {
    alignItems: 'center',
  }
});