import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FotTUC } from '../../../assets'


const Songss = ({label1, label2, onPress, source}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
    <Image source={source} style={styles.image} />
      <View style={styles.containerLabels}>
        <Text style={styles.label1}>{label1}</Text>
        <Text style={styles.label2}>{label2}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Songss

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 70,
        flexDirection: "row",
        backgroundColor: 'rgba(00, 00, 00, 0.07)',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginBottom: 7,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    containerLabels: {
        marginLeft: 16,
    },
    label1: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: '#ffffff',
    },
    label2: {
        fontFamily: 'Poppins-Light',
        fontSize: 10,
        color: '#f3f3f3',
    },
})