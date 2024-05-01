import { Book } from "@/modal/book";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Pressable,
  TextInput,
  Image,
} from "react-native";

const data = Array.from({ length: 60 }).map((_, index) => ({
  id: String(index),
  title: `Book ${index + 1}`,
}));


export default () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getBooksData();
  }, []);

  const getBooksData = async () => {
    try {
      const response = await axios.get<Book[]>("http://10.0.2.2:5212/api/Books");
      const { data } = response;
      setBooks(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  const renderItem = ({ item }: { item: Book }) => (
    <Pressable style={styles.contentCard} onPress={() => console.log(item.id)}>
      <Image source={{ uri: item.coverImageUrl }} width={100} height={150}/>
      <Text style={styles.contentCardText}>{item.bookName}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={books}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.flatListContainer}
          numColumns={3}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  flatListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  contentCard: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  contentImage: {
    width: 100,
    height: 150,
    backgroundColor: "gray",
    marginRight: 10,
  },
  contentCardText: {
    fontSize: 12,
    fontWeight: "bold",
  },
  filterButton: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    width: "90%",
    backgroundColor: "black",
    borderRadius: 5,
  },
  filterButtonText: {
    color: "white",
    textAlign: "center",
  },
});
