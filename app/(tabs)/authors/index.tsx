import { View, Text, TextInput , StyleSheet, FlatList } from "react-native";

const data = Array.from({ length: 10 }).map((_, index) => ({
  id: String(index),
  name: `Author ${index + 1}`,
}));

export default () => {

  const AuthorNameItem = ({ item }: { item: { name: string; id: string } }) => (
    <View style={styles.authorItemContainer}>
      <Text>{item.id}</Text>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
      <TextInput placeholder="Search By Author Name" style={styles.filterButton} />
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <AuthorNameItem item={item} />}
        keyExtractor={(item) => item.id}
        style={{ width: '100%' }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  filterButton: {
    borderColor: '#929292',
    borderWidth: 1,
    width: '90%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  authorItemContainer: {
    flexDirection: 'row',
    padding: 10,
    gap : 5,
    backgroundColor: '#f9f9f9',
    width: '100%',
    borderRadius: 5,
    marginBottom: 10,
    borderColor: '#f9f9f9',

  },
});
