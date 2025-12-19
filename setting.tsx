import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const SETTINGS_OPTIONS = [
  { id: '1', title: 'Edit Profile' },
  { id: '2', title: 'Notifications' },
  { id: '3', title: 'Privacy' },
  { id: '4', title: 'Nearby Visibility' },
  { id: '5', title: 'Help & Support' },
  { id: '6', title: 'Logout' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
  },
  profileStatus: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  settingItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  settingText: {
    fontSize: 16,
  },
});


export default function SettingsScreen() {
  const [profile, setProfile] = useState<{ name: string; status: string } | null>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const storedProfile = await AsyncStorage.getItem('userProfile');
      if (storedProfile) {
        setProfile(JSON.parse(storedProfile));
      }
    } catch (error) {
      console.log('Error loading profile', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>PeerReach</Text>
      <Text style={styles.header}>Settings</Text>
      {/* Profile Section */}
      <View style={styles.profileCard}>
        <Text style={styles.profileName}>
          {profile?.name || 'Your Name'}
        </Text>
        <Text style={styles.profileStatus}>
          {profile?.status || 'Your status'}
        </Text>
      </View>

      {/* Settings Options */}
      <FlatList
        data={SETTINGS_OPTIONS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
