import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Button, Gap, Header, PerformanceComponents, Search } from '../../components'
import { FotTUC } from '../../assets'

const Performance = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#530303', '#000', '#000']} style={styles.gradient}>
        <Header label="Performance" backButton={true}/>
        <View style={{paddingHorizontal: 15}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Search />
            <Gap height={15} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Button backgroundColor='#000000' label="All" textColor='#fff' width={50} borderRadius={25}/>
              <Button backgroundColor='#000000' label="Classic" textColor='#fff' width={90} borderRadius={25}/>
              <Button backgroundColor='#000000' label="Pop" textColor='#fff' width={50} borderRadius={25}/>
              <Button backgroundColor='#000000' label="Jazz" textColor='#fff' width={55} borderRadius={25}/>
              <Button backgroundColor='#000000' label="Gospel" textColor='#fff' width={75} borderRadius={25}/>
              <Button backgroundColor='#000000' label="Traditional" textColor='#fff' width={110} borderRadius={25}/>
            </ScrollView>
            <Gap height={25} />
            <View style={styles.containerWrapp}>
              <PerformanceComponents source={FotTUC} label="With You" label1="Composed by Julius Teodoro" onPress={() => navigation.navigate('PerformanceContent')}/>
              <PerformanceComponents source={FotTUC} label="With You" label1="Composed by Julius Teodoro" onPress={() => navigation.navigate('PerformanceContent')}/>
              <PerformanceComponents source={FotTUC} label="With You" label1="Composed by Julius Teodoro" onPress={() => navigation.navigate('PerformanceContent')}/>
              <PerformanceComponents source={FotTUC} label="With You" label1="Composed by Julius Teodoro" onPress={() => navigation.navigate('PerformanceContent')}/>
              <PerformanceComponents source={FotTUC} label="With You" label1="Composed by Julius Teodoro" onPress={() => navigation.navigate('PerformanceContent')}/>
              <PerformanceComponents source={FotTUC} label="With You" label1="Composed by Julius Teodoro" onPress={() => navigation.navigate('PerformanceContent')}/>
              <PerformanceComponents source={FotTUC} label="With You" label1="Composed by Julius Teodoro" onPress={() => navigation.navigate('PerformanceContent')}/>
              <PerformanceComponents source={FotTUC} label="With You" label1="Composed by Julius Teodoro" onPress={() => navigation.navigate('PerformanceContent')}/>
              <PerformanceComponents source={FotTUC} label="With You" label1="Composed by Julius Teodoro" onPress={() => navigation.navigate('PerformanceContent')}/>
              <PerformanceComponents source={FotTUC} label="With You" label1="Composed by Julius Teodoro" onPress={() => navigation.navigate('PerformanceContent')}/>
            </View>
          </ScrollView>
        </View>
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
  },
  containerWrapp: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})