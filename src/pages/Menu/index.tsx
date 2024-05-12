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
        <MenuButton label='Performance'type='performance'/>
        <MenuButton label='Awards' type='awards'/>
        <MenuButton label='Booking'type='booking'/>
        <MenuButton label='Merchandise' type='merchandise'/>
        <MenuButton label='History' type='history'/>
        <MenuButton label='Audition' type='audition'/>
        <MenuButton label='Members' type='members'onPress={() => navigation.navigate('MembersMenu')}/>
        <MenuButton label='Jadwal' type='jadwal'/>
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