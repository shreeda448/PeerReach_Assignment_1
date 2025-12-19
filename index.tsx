import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const DUMMY_CHATS = [
  { id: '1', name: 'Alice', lastMessage: 'Hey, how are you?' },
  { id: '2', name: 'Bob', lastMessage: 'Let’s catch up later.' },
  { id: '3', name: 'Charlie', lastMessage: 'Sent you the files.' },
  { id: '4', name: 'Diana', lastMessage: 'Okay 👍' },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>PeerReach</Text>

        <TouchableOpacity onPress={() => router.push('/chatscreen')}>
          <Text style={styles.more}>More</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Chats */}
      <Text style={styles.sectionTitle}>Recent Chats</Text>

      <FlatList
        data={DUMMY_CHATS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.chatItem}>
            <Text style={styles.chatName}>{item.name}</Text>
            <Text style={styles.chatMessage}>{item.lastMessage}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  more: {
    fontSize: 16,
    color: '#007AFF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  chatItem: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  chatName: {
    fontSize: 16,
    fontWeight: '500',
  },
  chatMessage: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});
