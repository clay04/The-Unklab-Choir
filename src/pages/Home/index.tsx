import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FotTUC, Right1, TUC, TUCLoveStory, UnceasingPraise } from '../../assets'
import { Discover, FlyerSlider, Gap, MenuButton } from '../../components'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
            <Image source={FotTUC} style={styles.logo}/>
            <Text style={styles.labelHeader}>The Unklab Choir</Text>
        </View>
        <Gap height={40} />
        <View style={{alignItems: 'center'}}>
            <View style={styles.flayer}>
                <FlyerSlider />
            </View>
            <Gap height={30} />
            <View style={{width: 335, marginLeft: -35}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={styles.labelContent}>Quick Menu</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Menu')} style={styles.viewAll}><Text style={styles.viewAllText}>View All</Text><Right1 /></TouchableOpacity>
                </View>
                <Gap height={10} />
                <View style={{flexDirection: 'row'}}>
                    <MenuButton label='Songs' type='songHome' onPress={() => navigation.navigate('Songs')} />
                    <MenuButton label='Performance'type='performanceHome' onPress={() => navigation.navigate('Performance')}/>
                    <MenuButton label='Audition' type='auditionHome'/>
                    <MenuButton label='Booking'type='bookingHome' onPress={() => navigation.navigate('Booking')}/>
                </View>
            </View>
            <Gap height={40}/>
            <View>
                <Text style={styles.labelContent}>Discover</Text>
                <Gap height={10} />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={{flexDirection: 'row',}}>
                        <Discover label="Pelayanan The Unklab Choir di Tobelo dengan Tema Unceasing Praise" source={UnceasingPraise}/>
                        <Discover label="Pelayanan The Unklab Choir di Jakarta dengan Tema Love Story" source={TUCLoveStory}/>
                    </View>
                    
                </ScrollView>
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    header: {
        alignItems: "center",
        flexDirection: 'row',
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 70,
    },
    labelHeader: {
        fontSize: 22,
        color: '#000',
        marginLeft: 15,
        fontFamily: 'Poppins-Bold',
    },
    flayer: {
        width: 350,
        height: 170,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        borderRadius: 15,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.9,
        shadowRadius: 16.00,
        elevation: 10,
    },
    labelContent: {
        color: '#000000',
        fontSize: 24,
        fontFamily: 'Poppins-Medium'
    },
    viewAll: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewAllText: {
        color: '#000',
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        marginRight: 5,
    }
})