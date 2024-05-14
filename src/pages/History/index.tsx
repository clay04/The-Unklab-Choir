import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FotTUC, Right1, TUC, TUCLoveStory, UnceasingPraise, fotTUC1 } from '../../assets'
import { Discover, FlyerSlider, Gap, Header, MenuButton } from '../../components'
import LinearGradient from 'react-native-linear-gradient'

const History = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#530303', '#fff', '#fff']} style={styles.gradient}>
        <Header label="History" backButton={true} onPress={() => navigation.goBack()}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.labelHeader}>The</Text>
            <Text style={styles.labelHeader}>Unklab Choir</Text>
          </View>
            <Text style={styles.labelHeaderDate}>September 18, 1965</Text>
        </View>
        <Gap height={20} />
        <View style={{alignItems: 'center'}}>
            <View style={styles.flayer}>
                <Image source={fotTUC1} style={styles.flayer}/>
            </View>
            <Gap height={30} />
            <View style={{width: 335, marginLeft: -35}}>
            </View>
            <Gap height={40}/>
            <View>
                <Gap height={10} />
              <View style={styles.containerWrapp}>
                <View style={{width: 190}}>
                  <Text style={styles.labelContent}>History of The Unklab Choir</Text>
                  <Text style={styles.labelText}>The Unklab Choir was created by 1965.</Text>
                </View>
                <Image source={fotTUC1} style={styles.photo}/>
              </View>
              <Gap height={50} />
              <View style={styles.containerWrapp}>
                <View style={{width: 190}}>
                  <Text style={styles.labelContent}>Founder of The Unklab Choir</Text>
                  <Text style={styles.labelText}>The Unklab Choir was created by 1965.</Text>
                </View>
                <Image source={fotTUC1} style={styles.photo}/>
              </View>
              <Gap height={50} />
              <View>
                <Text style={styles.labelText}>The Unklab Choir was created by 1965.</Text>
              </View>
            </View>
        </View>
      </ScrollView>
      </LinearGradient>
    </View>
  )
}

export default History

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
      flex: 1,
      paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        Width: 320,
        justifyContent: "space-between",
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 70,
    },
    labelHeader: {
        fontSize: 22,
        color: '#fff',
        marginLeft: 15,
        fontFamily: 'Poppins-Bold',
    },
    flayer: {
        width: 350,
        height: 170,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        borderRadius: 15,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.9,
        shadowRadius: 16.00,
        elevation: 10,
    },
    labelContent: {
        color: '#000000',
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold'
    },
    labelText: {
        color: '#000',
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        marginRight: 5,
    },
    labelHeaderDate: {
      textAlign: "right",
      fontSize: 13,
      color: '#7D7C7C',
      fontFamily: 'Poppins-SemiBold',
    },
    containerWrapp: {
      flexDirection: 'row',
      width: 350,
      justifyContent: 'space-between'
    },
    photo: {
      width: 150,
      height: 135,
      borderRadius: 15,
    }
})