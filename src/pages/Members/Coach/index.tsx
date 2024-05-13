import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Gap, Header, MembersWrapp } from '../../../components'
import { FotTUC } from '../../../assets'

const Coach = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#530303', '#000000', '#000000']} style={styles.gradient}>
        <Header label="Coach" backButton={true} onPress={() => navigation.goBack()}/>
        <Gap height={50} />
        <View style={{alignItems: 'center'}}>
            <Image source={FotTUC} style={styles.profilePicture}/>
            <Gap height={25} />
            <View style={styles.containerWrapp}>
                <Text style={styles.name}>Melvin</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.label}>Faculty           :  </Text>
                    <Text style={styles.label1}>Computer Science</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.label}>Jurusan         :  </Text>
                    <Text style={styles.label1}>Informastion System</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.label}>Birthday         :  </Text>
                    <Text style={styles.label1}>25 October 2002</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.label}>Hobby             :  </Text>
                    <Text style={styles.label1}>Gak tau</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.label}>Hometown   :  </Text>
                    <Text style={styles.label1}>Bekasi</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.label}>Instagram    :  </Text>
                    <Text style={styles.label1}>@melvin</Text>
                </View>
            </View>
        </View>
      </LinearGradient>
    </View>
  )
}

export default Coach

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
    },
    profilePicture: {
        width: 120,
        height: 120,
        borderRadius: 120,
    },
    containerWrapp: {
        width: 350,
        height: 310,
        borderRadius: 25,
        backgroundColor: '#ffffff',
        padding: 10,
    },
    name: {
        color: '#000000',
        fontSize: 26,
        fontFamily: 'Poppins-Bold',
        width: 330,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000'
    },
    label1: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: '#000000'
    },
})