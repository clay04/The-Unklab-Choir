import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Gap, Header, Songss} from '../../components';
import {FotTUC} from '../../assets';

const AlbumsPages = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#530303', '#000000', '#000000']}
        style={styles.gradient}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Header
              backButton={true}
              title="albums"
              source={FotTUC}
              labelAlbums1="The Unklab Choir"
              labelAlbums2="Created, Dec 5, 2022"
              lableAlbums3="Unceasing Praise"
              onPress={() => navigation.goBack()}
            />
            <Gap height={20} />
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
      </LinearGradient>
    </View>
  );
};

export default AlbumsPages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});