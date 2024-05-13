import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FotTUC, TUC } from '../../assets'
import { Gap, MenuButton } from '../../components'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
            <Image source={FotTUC} style={styles.logo}/>
            <Text style={styles.labelHeader}>The Unklab Choir</Text>
        </View>
        <Gap height={25} />
        <View style={{alignItems: 'center'}}>
            <View style={styles.flayer}>

            </View>
            <Gap height={30} />
            <View style={{width: 335, marginLeft: -35}}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')} style={{alignItems: 'flex-end'}}><Text style={{color: '#000'}}>View All</Text></TouchableOpacity>
                <Gap height={10} />
                <View style={{flexDirection: 'row'}}>
                    <MenuButton label='Songs' type='songHome' onPress={() => navigation.navigate('Songs')} />
                    <MenuButton label='Performance'type='performanceHome' onPress={() => navigation.navigate('Performance')}/>
                    <MenuButton label='Audition' type='auditionHome'/>
                    <MenuButton label='Booking'type='bookingHome' onPress={() => navigation.navigate('Booking')}/>
                </View>
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    header: {
        alignItems: "center",
        flexDirection: 'row',
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 70,
    },
    labelHeader: {
        fontSize: 22,
        color: '#000',
        marginLeft: 15,
        fontFamily: 'Poppins-Bold',
    },
    flayer: {
        width: 350,
        height: 150,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        borderRadius: 15,
    }
})