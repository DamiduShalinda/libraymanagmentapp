import { getAllBooks } from "@/api/books";
import AuthorItemCard from "@/components/author/AuthorItemCard";
import BookItem from "@/components/books/BookItem";
import { Book } from "@/modal/book";
import useBookStore from "@/store/bookListStore";
import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Pressable  ,Image, FlatList , Modal } from "react-native";

export default function Home() {

  const [modalVisible, setModalVisible] = useState(false);
  const { books } = useBookStore();
  const {isLoading , isError , data , error} = useQuery({
    queryKey: ["books"],
    queryFn: getAllBooks,
  })

  const handleOnClickFunction = () => {
    console.log("Clicked");
    setModalVisible(true);
  }


  if(isLoading){
    return <Text>Loading...</Text>
  }

  if (data === undefined) {
    return <Text>No Data</Text>
  }

  if(isError){
    return <Text>{error.message}</Text>
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBooksContainer} id="#BookSection">
        <Text style={styles.title}>Books</Text>
        <Text style={styles.description}>Top Selected Books. </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollViewContainer}
        >
          {data.map((book) => (
            <BookItem key={book.id} item={book} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.authorsContainer} id="#AuthorSection">
        <Text style={styles.title}>Authors</Text>
        <Text style={styles.description}>Top Selected Authors. </Text>
        <FlatList
          data={[
            { imageLink: "https://via.placeholder.com/150", name: "Author 1" },
            { imageLink: "https://via.placeholder.com/150", name: "Author 2" },
            { imageLink: "https://via.placeholder.com/150", name: "Author 3" },
            { imageLink: "https://via.placeholder.com/150", name: "Author 4" },
            { imageLink: "https://via.placeholder.com/150", name: "Author 5" },
            { imageLink: "https://via.placeholder.com/150", name: "Author 6" },
          ]}
          renderItem={({ item }) => <AuthorItemCard item={item} />}
          keyExtractor={(item) => item.name}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          style={styles.authorFlatList}
        />
        <View style={styles.AllAuthors}>
          <Text>View All Authors</Text>
          </View>
      </View>
      <Pressable onPress={() => handleOnClickFunction()} style={styles.floaitngActionButton}>
        <Text style={styles.floatingActionButtonText}>List {books.length}</Text>
      </Pressable>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
        presentationStyle="pageSheet"
        style={{ backgroundColor: "#fff" , height: "60%" , width: "100%"}}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff"}}>
          {data.map((book: Book) => (
            <Text key={book.id}>{book.bookName}</Text>
          ))}
          <Pressable onPress={() => setModalVisible(false)}>
            <Text>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  topBooksContainer: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 250,
    width: "100%",
  },
  authorsContainer: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 280,
    width: "100%",
  },
  scrollViewContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    maxHeight: 200,
  },
  title: {
    marginLeft: 20,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
  },
  description: {
    marginLeft: 20,
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
  },
  authorFlatList: {
    width: "100%",
  },
  AllAuthors: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 50,
    width: "100%",
    padding: 5,
    borderColor: "#C3C3C3",
    borderWidth: 1,
    margin: 5,
  },
  floaitngActionButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    borderColor: "#000",
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 50,
  },
  floatingActionButtonText: {
    color: "#000",
    fontSize: 15,
    padding: 5,
  },
});
