import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { UnceasingPraise } from '../../../assets'
import { Gap } from '../../atom'

const Discover = ({label, onPress, source}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} activeOpacity={0.9} onPress={onPress}>
        <Image source={source} style={styles.photo}/>
        <Gap height={5} />
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
      <Gap height={15} />
    </View>
    
  )
}

export default Discover

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 220,
        backgroundColor: 'rgba(0, 0, 0, 0.10)',
        borderRadius: 15,
        padding: 7,
        marginRight: 15,
    },
    photo: {
        width: 336,
        height: 150,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.9,
        shadowRadius: 16.00,
        elevation: 15,
    },
    label: {
        color: '#000',
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
    }
})