import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Gap, Header, MembersMenuIcon } from '../../../components'
import { fotTUC1 } from '../../../assets'

const MembersMenu = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient 
        colors={['#530303', '#ffffff', '#ffffff']}
        style={styles.gradient}>
            <Header label="Members" backButton={true} onPress={() => navigation.goBack()}/>
            <Gap height={40} />
            <ScrollView showsVerticalScrollIndicator={false} >
              <View style={styles.containerWrapp}>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center'}}>
                      <MembersMenuIcon label="All Members" onPress={() => navigation.navigate('Members')}/>
                      <MembersMenuIcon label="Officers" onPress={() => navigation.navigate('Officers')}/>
                      <MembersMenuIcon label="Conductor" onPress={() => navigation.navigate('Conductor')}/>
                      <MembersMenuIcon label="Coach" onPress={() => navigation.navigate('Coach')}/>
                      <MembersMenuIcon label="Sopranos" onPress={() => navigation.navigate('Sopranos')}/>
                      <MembersMenuIcon label="Altos" onPress={() => navigation.navigate('Altos')}/>
                      <MembersMenuIcon label="Tenors" onPress={() => navigation.navigate('Tenors')}/>
                      <MembersMenuIcon label="Basses" onPress={() => navigation.navigate('Basses')}/>
                  </View>
                  <Gap height={40} />
                  <Image source={fotTUC1} style={styles.image}/>
              </View>
            </ScrollView>
      </LinearGradient>
    </View>
  )
}

export default MembersMenu

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        padding: 10,
    },
    image: {
      width: 350,
      height: 164,
      borderRadius: 15,
    },
    containerWrapp: {
      alignItems: "center",
    }
})