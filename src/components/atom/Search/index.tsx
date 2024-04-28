import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SearchIcon } from '../../../assets'

const Search = () => {
  return (
    <View style={styles.container}>
        <SearchIcon />
        <TextInput placeholder='Search'/>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 25,
        paddingHorizontal: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
    },
})