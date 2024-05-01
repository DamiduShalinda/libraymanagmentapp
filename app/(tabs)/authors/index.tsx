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
    <View>
      <TextInput placeholder="Search By Author Name" style={styles.filterButton} placeholderTextColor={'#fff'} />
      <FlatList
        data={data}
        renderItem={({ item }) => <AuthorNameItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  filterButton: {
    backgroundColor: 'black',
    color: 'white',
    width: '90%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  authorItemContainer: {
    flexDirection: 'row',
    padding: 10,
    gap : 5
  },
  container : {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
