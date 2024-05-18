import AuthorItemCard from "@/src/components/author/AuthorItemCard";
import BookItem from "@/src/components/books/BookItem";
import { Book } from "@/src/modal/book";
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

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={books}
          renderItem={({ item }) => <BookItem item={item} />}
          keyExtractor={(item) => item.id.toFixed()}
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
    alignItems: "flex-start",
    backgroundColor: "white",
    width: "100%",
  },
  flatListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: "100%",
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
