import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Gap, Header } from '../../components'
import { Dot, FotTUC, Left, Line, PlayIcon, Right } from '../../assets'

const SongsPlay = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#530303', '#000000', '#000000']} style={styles.gradient}>
        <Header backButton={true}/>
        <View style={styles.containerWrapper}>
            <Image source={FotTUC} style={styles.contenFoto} />
            <Gap height={24} />
            <Text style={styles.songTitle}>With You</Text>
            <Text style={styles.songCreate}>Composed by Julius Teodoro</Text>
        </View>
        <Gap height={50} />
        <View style={styles.containerWrapper1}>
            <View style={styles.Line}/>
            <Dot style={styles.dot}/>
            <View style={styles.time}>
                <Text style={styles.time}>00.00</Text>
                <Text style={styles.time}>00.00</Text>
            </View>
        </View>
        <Gap height={40} />
        <View style={styles.containerWrapper2}>
            <TouchableOpacity><Left /></TouchableOpacity>
            <TouchableOpacity><PlayIcon /></TouchableOpacity>
            <TouchableOpacity><Right /></TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  )
}

export default SongsPlay

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
    },
    containerWrapper: {
        alignItems: 'center',
    },
    contenFoto: {
        width: 320,
        height: 320,
        borderRadius: 10,
    },
    songTitle: {
        fontSize: 28,
        fontFamily: 'Poppins-Bold',
        color: '#ffffff'
    },
    songCreate: {
        fontSize: 15,
        fontFamily: 'Poppins-Light',
        color: '#c7c7c7'
    },
    containerWrapper1: {
        width: 400,
        marginHorizontal: 5,
    },
    Line: {
        width: 400,
        borderBottomWidth: 1,
        borderBottomColor: '#c9c6c6',
        position: 'absolute',
        marginTop: 3,
    },
    dot: {
        color: '#ffffff',
    },
    time: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 9,
        color: '#ffffff',
        fontFamily: 'Poppins-Regular',
    },
    containerWrapper2: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});