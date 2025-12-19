import { View, Text, FlatList, StyleSheet } from 'react-native';

const DUMMY_MESSAGES = [
  { id: '1', sender: 'Alice', text: 'Hey everyone!', isMe: false },
  { id: '2', sender: 'Bob', text: 'Hi Alice 👋', isMe: false },
  { id: '3', sender: 'Me', text: 'Good morning!', isMe: true },
  { id: '4', sender: 'Charlie', text: 'Are we meeting today?', isMe: false },
  { id: '5', sender: 'Me', text: 'Yes, at 5 PM.', isMe: true },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  chatArea: {
    paddingBottom: 20,
  },
  messageBox: {
    maxWidth: '75%',
    padding: 12,
    marginVertical: 6,
    borderRadius: 12, // 👈 curved rectangle
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#D6EAF8',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  sender: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 4,
    color: '#333',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
});

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>PeerReach</Text>

      {/* Chat Messages */}
      <FlatList
        data={DUMMY_MESSAGES}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatArea}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageBox,
              item.isMe ? styles.myMessage : styles.otherMessage,
            ]}
          >
            {!item.isMe && (
              <Text style={styles.sender}>{item.sender}</Text>
            )}
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}
