import { View, Text, FlatList, StyleSheet } from 'react-native';

const DUMMY_USERS = [
  { id: '1', name: 'Alice', distance: '120 m away' },
  { id: '2', name: 'Bob', distance: '300 m away' },
  { id: '3', name: 'Charlie', distance: '450 m away' },
  { id: '4', name: 'Diana', distance: '600 m away' },
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  userCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12, // 👈 curved rectangle
    marginBottom: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  distance: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});


export default function NearbyUsersScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>PeerReach</Text>

      <Text style={styles.subtitle}>Nearby Users</Text>

      {/* User List */}
      <FlatList
        data={DUMMY_USERS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.distance}>{item.distance}</Text>
          </View>
        )}
      />
    </View>
  );
}
