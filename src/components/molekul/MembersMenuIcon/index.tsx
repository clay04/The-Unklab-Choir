import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MembersIcon } from '../../../assets'
import { Gap } from '../../atom'

const MembersMenuIcon = ({label, onPress}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View><MembersIcon /></View>
        </TouchableOpacity>
        <Gap height={5} />
        <Text style={styles.label}>{label}</Text>
    </View>
  )
}

export default MembersMenuIcon

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
        marginVertical: 20,
    },
    button: {
        backgroundColor: '#530303',
        width: 65,
        height: 65,
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        color: '#020202',
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center'
    }
})