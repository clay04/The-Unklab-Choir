import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, MenuButton } from '../../components'
import { NotIcon } from '../../assets'

const Menu = ({navigation}) => {
  return (
    <View>
      <Header label="Menu" backButton={true} textColor={'#000'}/>
      <View style={styles.containerWrapper}>
        <MenuButton label='Songs' type='song' onPress={() => navigation.navigate('Songs')}/>
        <MenuButton label='Performance'type='performance' onPress={() => navigation.navigate('Performance')}/>
        <MenuButton label='Awards' type='awards' onPress={() => navigation.navigate('Awards')}/>
        <MenuButton label='Booking'type='booking' onPress={() => navigation.navigate('Booking')}/>
        <MenuButton label='Merchandise' type='merchandise' onPress={() => navigation.navigate('Merchandise')}/>
        <MenuButton label='History' type='history' onPress={() => navigation.navigate('History')}/>
        <MenuButton label='Audition' type='audition' onPress={() => navigation.navigate('Audition')}/>
        <MenuButton label='Members' type='members'onPress={() => navigation.navigate('MembersMenu')}/>
        <MenuButton label='Jadwal' type='jadwal' onPress={() => navigation.navigate('Schedule')}/>
      </View>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    containerWrapper: {
        flexDirection: "row",
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})