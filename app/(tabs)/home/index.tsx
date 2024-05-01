import { getAllBooks } from "@/api/books";
import { Book } from "@/modal/book";
import { useQuery } from "@tanstack/react-query";
import { View, Text, ScrollView, StyleSheet, Pressable  ,Image } from "react-native";

export default function Home() {

  const {isLoading , isError , data , error} = useQuery({
    queryKey: ["books"],
    queryFn: getAllBooks,
  })

  const BookItem = ({ item }: { item: Book }) => (
    <Pressable style={styles.contentCard} onPress={() => console.log(item.id)}>
      <Image source={{ uri: item.coverImageUrl }} width={100} height={150}/>
      <Text style={styles.contentCardText}>{item.bookName}</Text>
    </Pressable>
  );


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
      <View style={styles.subContainer} id="#BookSection">
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
      <View style={styles.subContainer} id="#AuthorSection">
        <Text style={styles.title}>Authors</Text>
        <Text style={styles.description}>Top Selected Authors. </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollViewContainer}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <View key={index} style={styles.contentCard}>
              <View style={styles.contentImage} />
              <Text style={styles.contentCardText}>Author {index + 1}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
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
  subContainer: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  },
});
