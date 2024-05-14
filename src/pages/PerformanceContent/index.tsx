import { StyleSheet, Text, View, Image, ImageBackground, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { FotTUC, Pause } from '../../assets'
import { Bar, Gap, Header } from '../../components'

const PerformanceContents = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#530303', '#000', '#000']} style={styles.gradient}>
        <View style={styles.video}>
            <ImageBackground source={FotTUC} style={styles.video}></ImageBackground>
            <TouchableOpacity style={{position: 'absolute'}}><Pause /></TouchableOpacity>
        </View>
        <Header backButton={true} onPress={() => navigation.goBack()}/>
        <Gap height={200} />
        <View style={{alignItems: 'center'}}>
            <View style={styles.containerWrapp}>
                <Text style={styles.labelTitle}>With You</Text>
            </View>
            <Gap height={50} />
            <Bar />
            <Gap height={40} />
            <View>
                
            </View>
            <ScrollView>
                <View style={styles.deskripsi}>
                    <Text>5 Aug, 2022</Text>
                    <Text>With you</Text>
                </View>
            </ScrollView>
        </View>
      </LinearGradient>
    </View>
  )
}

export default PerformanceContents

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
    },
    video: {
        width: "100%",
        height: 300,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerWrapp: {
        paddingHorizontal: 10,
    },
    labelTitle: {
        fontFamily: 'Poppins-SemiBold',
        color: '#fff',
        fontSize: 22,
    },
    deskripsi: {
        backgroundColor: 'rgba(150, 150, 150, 0.25)',
        width: 380,
        borderRadius: 25,
        padding: 10,
    }
})