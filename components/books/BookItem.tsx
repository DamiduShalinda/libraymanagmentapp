import { Pressable, StyleSheet, Text, Image, View , ToastAndroid } from "react-native";
import React from "react";
import { Book } from "@/modal/book";
import { AntDesign } from "@expo/vector-icons";
import useBookStore from "@/store/bookListStore";

const BookItem = ({ item }: { item: Book }) =>{

  const {addBook} = useBookStore();

  const handleAddBook = (book: string) => {
    addBook(book);
    console.log("Item added");
    ToastAndroid.show("Item added", ToastAndroid.SHORT);
  }

  return (
    <Pressable style={styles.contentCard} onPress={() => console.log(item.id)}>
      <View style={styles.contentImage}>
        <Image source={{ uri: item.coverImageUrl }} width={100} height={150} />
        <Pressable
          onPress={() => handleAddBook(item.bookName) }
          style={styles.addButton}
        >
          <AntDesign name="plus" size={16} color="black" />
        </Pressable>
      </View>
      <Text style={styles.contentCardText}>{item.bookName}</Text>
    </Pressable>
  );
}

export default BookItem;

const styles = StyleSheet.create({
  contentImage: {
    width: 100,
    height: 150,
    margin: 5,
    backgroundColor: "gray",
  },
  contentCardText: {
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
  },
  contentCard: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 5,
  },
  addButton: {
    width: 24,
    height: 24,
    backgroundColor: "#fff",
    borderRadius: 12,
    position: "absolute",
    bottom: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow radius (optional)
  },
});
