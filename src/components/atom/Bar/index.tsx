import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Dislike, Download1, Like, Share } from '../../../assets'

const Bar = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.buttonBar, {width: 100}]}>
            <TouchableOpacity><Like /></TouchableOpacity>
            <Text>|</Text>
            <TouchableOpacity><Dislike /></TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={[styles.buttonBar, {width: 100}]}><Text>Share</Text><Share /></TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={[styles.buttonBar, {width: 120}]}><Text>Download</Text><Download1 /></TouchableOpacity>
        </View>
    </View>
  )
}

export default Bar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 25,
        marginHorizontal: 10,
    }
})