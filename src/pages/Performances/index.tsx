import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {List, Gap, Header, Search} from '../../components';
import {performance, logoblack} from '../../assets';

const Performances = ({navigation}) => {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#530303', '#000000', '#000000']}
          style={styles.gradient}>
          <Header label="Performance" backButton={true} onPress={() => navigation.navigate('Menu')}/>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height={8}/>
              <View style={styles.containerWrapper}>
              <View style={{paddingHorizontal: 22,}}>
                <Search />
                </View>
                <Gap height={18}/>
                <View style={styles.List}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.list}>
                    <View style={{flexDirection: 'row', marginHorizontal: 25,}}>
                      <List label="All"onPress={() => navigation.navigate('Content')}/>
                      <List label="Classic"/>
                      <List label="Pop"/>
                      <List label="Gospel"/>
                      <List label="Jazz"/>
                      <List label="Traditional"/>
                    </View>
                  </ScrollView>
                </View>
                <Gap height={20} />
          </View>        
          <Gap height={20}/>
          <ScrollView>
          <View style={styles.containerWrapp}>
              <View style={styles.contentWrapp}>
                  <Image source={logoblack} style={styles.foto} />
                  <Text style={styles.label}>With You</Text>
                  <Text style={styles.lower}>Composed by Julius Teodoro</Text>
                  <Gap height={7} />
              </View>
              <View style={styles.contentWrapp}>
                  <Image source={logoblack} style={styles.foto} />
                  <Text style={styles.label}>With You</Text>
                  <Text style={styles.lower}>Composed by Julius Teodoro</Text>
                  <Gap height={7} />
              </View>
              <View style={styles.contentWrapp}>
                  <Image source={performance} style={styles.foto} />
                  <Text style={styles.label}>With You</Text>
                  <Text style={styles.lower}>Composed by Julius Teodoro</Text>
                  <Gap height={7} />
              </View>
              <View style={styles.contentWrapp}>
                  <Image source={performance} style={styles.foto} />
                  <Text style={styles.label}>With You</Text>
                  <Text style={styles.lower}>Composed by Julius Teodoro</Text>
                  <Gap height={7} />
              </View>
              <View style={styles.contentWrapp}>
                  <Image source={logoblack} style={styles.foto} />
                  <Text style={styles.label}>With You</Text>
                  <Text style={styles.lowerl}>Composed by Julius Teodoro</Text>
                  <Gap height={7} />
              </View>
              <View style={styles.contentWrapp}>
                  <Image source={logoblack} style={styles.foto} />
                  <Text style={styles.label}>With You</Text>
                  <Text style={styles.lower}>Composed by Julius Teodoro</Text>
                  <Gap height={7} />
              </View>
              <View style={styles.contentWrapp}>
                  <Image source={performance} style={styles.foto} />
                  <Text style={styles.label}>With You</Text>
                  <Text style={styles.lowerl}>Composed by Julius Teodoro</Text>
                  <Gap height={7} />
              </View>
              <View style={styles.contentWrapp}>
                  <Image source={performance} style={styles.foto} />
                  <Text style={styles.label}>With You</Text>
                  <Text style={styles.lower}>Composed by Julius Teodoro</Text>
                  <Gap height={7} />
              </View>
              <View style={styles.contentWrapp}>
                  <Image source={logoblack} style={styles.foto} />
                  <Text style={styles.label}>With You</Text>
                  <Text style={styles.lowerl}>Composed by Julius Teodoro</Text>
                  <Gap height={7} />
              </View>
              <View style={styles.contentWrapp}>
                  <Image source={logoblack} style={styles.foto} />
                  <Text style={styles.label}>With You</Text>
                  <Text style={styles.lower}>Composed by Julius Teodoro</Text>
                  <Gap height={7} />
              </View>
            </View>
            </ScrollView>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  };
  
  export default Performances;
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    gradient: {
      flex: 1,
    },
    textQuicks: {
      fontSize: 22,
      fontFamily: 'Poppins-SemiBold',
      color: '#ffffff',
      marginBottom: 10,
    },
    albums: {
      flexDirection: 'row',
    },
    contentWrapp: {
      marginHorizontal: 20,
      marginBottom: 10,
      width: 165,
      height: 175,
  
    },
    containerWrapp: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
    },
    foto: {
      borderRadius: 5,
      marginBottom: 5,
      width: 140,
      height: 100,
    },
    label: {
      width: 68,
      fontFamily: 'Poppins-SemiBold',
      color: '#ffffff',
      fontSize: 14,
    },
    lower: {
      width: 146,
      fontFamily: 'Poppins-Regular',
      color: '#ffffff',
      fontSize: 10,
    },
    list: {
      flexDirection: 'row',
    }
  });
  