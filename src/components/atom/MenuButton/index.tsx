import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AuditionIcon, AwardsIcon, BookingIcon, HistoryIcon, JadwalIcon, MembersIcon, MerchandiseIcon, NotIcon, PerformanceIcon } from '../../../assets'

const MenuButton = ({label, onPress, type}) => {
    if (type === 'song') {
        return (
            <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
                <View style={styles.containerWrapper}><NotIcon /></View>
                <Text style={styles.label}>{label}</Text>
             </TouchableOpacity>
        )
    } if (type === 'performance') {
        return (
            <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
                <View style={styles.containerWrapper}><PerformanceIcon /></View>
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
        )
    } if (type === 'awards') {
        return (
            <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
                <View style={styles.containerWrapper}><AwardsIcon /></View>
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
        )
    } if (type === 'booking') {
        return (
            <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
                <View style={styles.containerWrapper}><BookingIcon /></View>
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
        )
    } if (type === 'merchandise') {
        return (
            <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
                <View style={styles.containerWrapper}><MerchandiseIcon /></View>
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
        )
    } if (type === 'history') {
        return (
            <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
                <View style={styles.containerWrapper}><HistoryIcon /></View>
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
        )
    } if (type === 'audition') {
        return (
            <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
                <View style={styles.containerWrapper}><AuditionIcon /></View>
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
        )
    } if (type === 'members') {
        return (
            <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
                <View style={styles.containerWrapper}><MembersIcon /></View>
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
        )
    } if (type === 'jadwal') {
        return (
            <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
                <View style={styles.containerWrapper}><JadwalIcon /></View>
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
        )
    }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.7}>
        <View style={styles.containerWrapper}></View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export default  MenuButton;

const styles = StyleSheet.create({
    container: {
        width: 90,
        height: 90,
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 37,
        marginHorizontal: 17.5,
    },
    containerWrapper: {
        backgroundColor: '#530303',
        width: 65,
        height: 65,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: '#000000'
    }
})