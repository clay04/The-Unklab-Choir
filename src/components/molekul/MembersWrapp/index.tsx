import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FotTUC} from '../../../assets'

const MembersWrapp = ({label1, label2, onPress, onPress1}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onPress}>
        <Image source={FotTUC} style={styles.profile}/>
        <Text style={styles.label}>{label1}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MembersWrapp

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 5,
        width: 370,
        backgroundColor: '#1C1C1C',
        height: 100,
        marginVertical: 10,
        borderRadius: 20,
        flexDirection: 'row',
    },
    container1: {
        alignItems: 'center',
        padding: 5,
        width: 370,
        backgroundColor: '#1C1C1C',
        height: 100,
        marginVertical: 10,
        borderRadius: 20,
        flexDirection: 'row-reverse'
    },
    profile: {
        width: 70,
        height: 70,
        borderRadius: 70,
    },
    label: {
        fontFamily: 'Poppins-Medium',
        fontSize: 17,
        color: '#ffffff',
        marginLeft: 10,
        width: 300,
        textAlign: 'left'
    },
    label1: {
        fontFamily: 'Poppins-Medium',
        fontSize: 17,
        color: '#ffffff',
        marginRight: 10,
        width: 300,
        textAlign: 'right'
    },
})