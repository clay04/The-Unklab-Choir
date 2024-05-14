import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FotTUC } from '../../../assets'
import { Gap } from '../../atom'

const PerformanceComponents = ({source, label, label1, onPress}) => {
  return (
    <View>
        <TouchableOpacity style={styles.container} activeOpacity={0.9} onPress={onPress}>
            <Image source={source} style={styles.photo}/>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.label1}>{label1}</Text>
        </TouchableOpacity>
        <Gap height={20} />
    </View>
  )
}

export default PerformanceComponents

const styles = StyleSheet.create({
    container: {
        width: 175,
        height: 200,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        borderRadius: 10,
        padding: 5,
    },
    photo: {
      width: 165,
      height: 120,
      borderRadius: 10,
    },
    label: {
      fontSize: 16,
      color: '#fff',
      fontFamily: 'Poppins-Medium'
    },
    label1: {
      fontSize: 10,
      color: '#C7D7D7',
      fontFamily: 'Poppins-Regular'
    },
})