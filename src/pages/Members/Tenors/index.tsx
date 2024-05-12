import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Header, MembersWrapp } from '../../../components'

const Tenors = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#530303', '#000000', '#000000']} style={styles.gradient}>
        <Header label="Tenors" backButton={true} onPress={() => navigation.goBack()}/>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{alignItems: 'center'}}>
                <MembersWrapp label1="Lovenia Monalisa Debora Tulong" label2="Lovenia Monalisa Debora Tulong" onPress={() => navigation.navigate('ProfileMembers')} onPress1={() => navigation.navigate('ProfileMembers')}/>
                <MembersWrapp label1="Lovenia Monalisa Debora Tulong" label2="Lovenia Monalisa Debora Tulong" onPress={() => navigation.navigate('ProfileMembers')} onPress1={() => navigation.navigate('ProfileMembers')}/>
                <MembersWrapp label1="Lovenia Monalisa Debora Tulong" label2="Lovenia Monalisa Debora Tulong" onPress={() => navigation.navigate('ProfileMembers')} onPress1={() => navigation.navigate('ProfileMembers')}/>
                <MembersWrapp label1="Lovenia Monalisa Debora Tulong" label2="Lovenia Monalisa Debora Tulong" onPress={() => navigation.navigate('ProfileMembers')} onPress1={() => navigation.navigate('ProfileMembers')}/>
                <MembersWrapp label1="Lovenia Monalisa Debora Tulong" label2="Lovenia Monalisa Debora Tulong" onPress={() => navigation.navigate('ProfileMembers')} onPress1={() => navigation.navigate('ProfileMembers')}/>
            </View>
        </ScrollView>
      </LinearGradient>
    </View>
  )
}

export default Tenors

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
    }
})