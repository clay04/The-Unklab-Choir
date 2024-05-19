import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Header, MembersWrapp } from '../../../components';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../config/Firebase'; // Pastikan jalur yang benar ke konfigurasi Firebase kamu

const Sopranos = ({ navigation }) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const q = query(collection(db, 'membertuc'), where('divisi', 'in', ['1st Sopran', '2nd Sopran']));
        const querySnapshot = await getDocs(q);
        const membersList = [];
        querySnapshot.forEach(doc => {
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
      <LinearGradient colors={['#530303', '#000000', '#000000']} style={styles.gradient}>
        <Header label="Sopranos" backButton={true} onPress={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ alignItems: 'center' }}>
            {members.map(member => (
              <MembersWrapp
                key={member.id}
                label1={member.nama}
                label2={member.nama}
                onPress={() => navigation.navigate('ProfileMembers', { memberId: member.id })}
                onPress1={() => navigation.navigate('ProfileMembers', { memberId: member.id })}
              />
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Sopranos;

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
