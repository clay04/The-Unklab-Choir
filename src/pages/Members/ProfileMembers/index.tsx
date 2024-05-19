import { Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Gap, Header } from '../../../components';
import { FotTUC } from '../../../assets';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../config/Firebase';

const ProfileMembers = ({ navigation, route }) => {
  const { memberId } = route.params;
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const docRef = doc(db, 'membertuc', memberId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setMember(docSnap.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching member: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [memberId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  if (!member) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Member not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#530303', '#000000', '#000000']} style={styles.gradient}>
        <Header label="Members Profile" backButton={true} onPress={() => navigation.goBack()} />
        <Gap height={50} />
        <View style={{ alignItems: 'center' }}>
          <Image source={FotTUC} style={styles.profilePicture} />
          <Gap height={25} />
          <View style={styles.containerWrapp}>
            <Text style={styles.name}>{member.nama}</Text>
            <View style={styles.labelWrapp}>
              <Text style={styles.label}>Faculty           :  </Text>
              <Text style={styles.label1}>{member.fakultas}</Text>
            </View>
            <View style={styles.labelWrapp}>
              <Text style={styles.label}>Jurusan         :  </Text>
              <Text style={styles.label1}>{member.jurusan}</Text>
            </View>
            <View style={styles.labelWrapp}>
              <Text style={styles.label}>Birthday         :  </Text>
              <Text style={styles.label1}>{member.birthday}</Text>
            </View>
            <View style={styles.labelWrapp}>
              <Text style={styles.label}>Hobby             :  </Text>
              <Text style={styles.label1}>{member.hobby}</Text>
            </View>
            <View style={styles.labelWrapp}>
              <Text style={styles.label}>Hometown   :  </Text>
              <Text style={styles.label1}>{member.hometown}</Text>
            </View>
            <View style={styles.labelWrapp}>
              <Text style={styles.label}>Instagram    :  </Text>
              <Text style={styles.label1}>{member.instagram}</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ProfileMembers;

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
    height: 320,
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
  labelWrapp: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
  },
  label1: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    width: 200,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#ffffff',
  },
});
