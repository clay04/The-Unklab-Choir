import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button, Gap, Header} from '../../components';
import {lanyardpurple, lanyardred, shirt, tumbler} from '../../assets';

const Merchandise = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#530303', '#000000', '#000000']}
        style={styles.gradient}>
        <Header label="Merchandise" backButton={true} onPress={() => navigation.navigate('Menu')}/>
        <Gap height={20}/>
        <View style={styles.containerWrapp}>
            <View style={styles.contentWrapp}>
                <Image source={shirt} style={styles.foto} />
                <Text style={styles.label}>The Unklab Choir T-Shirt Red</Text>
                <Text style={styles.label}>Rp.</Text>
                <Gap height={7} />
                <Button
                    label="CHECKOUT"
                    backgroundColor="#72E576"
                    textColor="#000000"
                    onPress={() => navigation.navigate('Payment')}/>
            </View>
            <View style={styles.contentWrapp}>
                <Image source={lanyardred} style={styles.foto} />
                <Text style={styles.label}>The Unklab Choir Lanyard Red</Text>
                <Text style={styles.label}>Rp.</Text>
                <Gap height={7} />
                <Button
                    label="CHECKOUT"
                    backgroundColor="#72E576"
                    textColor="#000000"            onPress={() => navigation.navigate('Payment')}/>
            </View>
            <View style={styles.contentWrapp}>
                <Image source={lanyardpurple} style={styles.foto} />
                <Text style={styles.label}>The Unklab Choir Lanyard Purple</Text>
                <Text style={styles.label}>Rp.</Text>
                <Gap height={7} />
                <Button
                    label="CHECKOUT"
                    backgroundColor="#72E576"
                    textColor="#000000"
                    onPress={() => navigation.navigate('Payment')}/>
            </View>
            <View style={styles.contentWrapp}>
                <Image source={tumbler} style={styles.foto} />
                <Text style={styles.label}>The Unklab Choir Tumbler Red</Text>
                <Text style={styles.label}>Rp.</Text>
                <Gap height={7} />
                <Button
                    label="CHECKOUT"
                    backgroundColor="#72E576"
                    textColor="#000000"
                    onPress={() => navigation.navigate('Payment')}/>
            </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Merchandise;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  contentWrapp: {
    marginHorizontal: 30,
    marginBottom: 20,
    width: 130,
  },
  containerWrapp: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foto: {
    borderRadius: 5,
    marginBottom: 5,
  },
  label: {
    width: 130,
    fontFamily: 'Poppins-Medium',
    color: '#ffffff',
    fontSize: 14,
  },
});