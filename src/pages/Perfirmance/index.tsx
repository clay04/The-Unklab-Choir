import { StyleSheet, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Performance = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#530303', '#000', '#000']} style={styles.gradient}>
        
      </LinearGradient>
    </View>
  )
}

export default Performance

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  }
})