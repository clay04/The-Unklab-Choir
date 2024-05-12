import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Albums, Gap, Header, Search, Songss} from '../../components';
import {FotTUC} from '../../assets';

const Songs = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#530303', '#000000', '#000000']}
        style={styles.gradient}>
        <Header label="Songs" backButton={true} onPress={() => navigation.goBack()}/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.containerWrapper}>
              <Search />
              <Gap height={21} />
              <Text style={styles.textQuicks}>Quick Picks</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View>
                  <Songss
                    label1="With You"
                    label2="Composed by Julius Teodoro"
                    source={FotTUC}
                    onPress={() => navigation.navigate('SongsPlay')}
                  />
                  <Songss
                    label1="With You"
                    label2="Composed by Julius Teodoro"
                    source={FotTUC}
                  />
                  <Songss
                    label1="With You"
                    label2="Composed by Julius Teodoro"
                    source={FotTUC}
                  />
                  <Songss
                    label1="With You"
                    label2="Composed by Julius Teodoro"
                    source={FotTUC}
                  />
                </View>
                <View>
                  <Songss
                    label1="With You"
                    label2="Composed by Julius Teodoro"
                    source={FotTUC}
                    onPress={() => navigation.navigate('SongsPlay')}
                  />
                  <Songss
                    label1="With You"
                    label2="Composed by Julius Teodoro"
                    source={FotTUC}
                  />
                  <Songss
                    label1="With You"
                    label2="Composed by Julius Teodoro"
                    source={FotTUC}
                  />
                  <Songss
                    label1="With You"
                    label2="Composed by Julius Teodoro"
                    source={FotTUC}
                  />
                </View>
              </ScrollView>
              <Gap height={30} />
              <Text style={styles.textQuicks}>Albums</Text>
              <View style={styles.albums}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={styles.albums}>
                  <Albums source={FotTUC} onPress={() => navigation.navigate('AlbumsPage')} label='Unceasing Praise'/>
                  <Albums source={FotTUC} onPress={() => navigation.navigate('AlbumsPage')} label='Unceasing Praise'/>
                  <Albums source={FotTUC} onPress={() => navigation.navigate('AlbumsPage')} label='Unceasing Praise'/>
                  <Albums source={FotTUC} onPress={() => navigation.navigate('AlbumsPage')} label='Unceasing Praise'/>
                  <Albums source={FotTUC} onPress={() => navigation.navigate('AlbumsPage')} label='Unceasing Praise'/>
                </ScrollView>
              </View>
              <Gap height={30} />
              <Text style={styles.textQuicks}>Spiritual</Text>
              <View>
                <Songss
                  label1="With You"
                  label2="Composed by Julius Teodoro"
                  source={FotTUC}
                />
                <Songss
                  label1="With You"
                  label2="Composed by Julius Teodoro"
                  source={FotTUC}
                />
                <Songss
                  label1="With You"
                  label2="Composed by Julius Teodoro"
                  source={FotTUC}
                />
                <Songss
                  label1="With You"
                  label2="Composed by Julius Teodoro"
                  source={FotTUC}
                />
                <Songss
                  label1="With You"
                  label2="Composed by Julius Teodoro"
                  source={FotTUC}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Songs;

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
  containerWrapper: {
    paddingHorizontal: 13,
  },
  albums: {
    flexDirection: 'row',
  },
});