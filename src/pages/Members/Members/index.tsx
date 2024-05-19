import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Header, MembersWrapp } from '../../../components';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../config/Firebase';

const Members = ({ navigation }) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'membertuc'));
        const membersList = [];
        querySnapshot.forEach(doc => {
          console.log("Fetched document: ", doc.id, doc.data()); 
          membersList.push({ id: doc.id, ...doc.data() });
        });
        setMembers(membersList);
      } catch (error) {
        console.error('Error fetching members: ', error);
        alert('Error fetching members. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#530303', '#000000', '#000000']}
        style={styles.gradient}>
        <Header
          label="All Members"
          backButton={true}
          onPress={() => navigation.goBack()}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: 'center' }}>
            {members.map(member => (
              <MembersWrapp
                key={member.id}
                label1={member.nama}
                onPress={() =>
                  navigation.navigate('ProfileMembers', { memberId: member.id })
                }
              />
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Members;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#fff',
  },
});
