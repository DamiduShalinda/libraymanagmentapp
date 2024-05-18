import { getBookData } from "@/api/books";
import useBookStore from "@/src/store/bookListStore";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

export default function BookPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { addBook } = useBookStore();
  const idNum = parseInt(id);

  const { isLoading, data, isError } = useQuery({
    queryKey: ["book", idNum],
    queryFn: () => getBookData(idNum),
  });

  if (isLoading) return <ActivityIndicator size={"large"} />;
  if (isError) return <Text>Something went wrong</Text>;
  if (!data) return <Text>No data</Text>;

  return (
    <View>
      <View id="book-header" style={styles.bookHeader}>
        <Text style={styles.bookNameText}>{data.bookName}</Text>
        <View style={styles.bookCoverImage}>
          <Image
            source={{ uri: data.coverImageUrl }}
            width={150}
            height={200}
          />
        </View>
        <View id="book-header-text" style={styles.bookTitleText}>
          <Text style={styles.authorNameText}>{data.authorName}</Text>
          <Text style={styles.authorNameText}>{data.status}</Text>
        </View>
        <View id="header-buttons" style={styles.headerButtons}>
          <Text style={styles.statusButton}>
            <Entypo name="dot-single" size={24} color="black" />
            Read
          </Text>
          <Pressable onPress={() => {addBook({id : data.id , bookName : data.bookName , imageUrl : data.coverImageUrl})}} style={styles.addButton}>
            <AntDesign name="plus" size={30} color="black" />
          </Pressable>
        </View>
      </View>
      <View id="book-description" style={styles.descriptionContainer}>
        <Text style={styles.descriptionHeader}>Description</Text>
        <Text style={styles.descriptionText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          temporibus rerum sunt consectetur placeat excepturi facere dolore
          accusantium veniam officiis mollitia minus quas neque at, eligendi
          libero velit! Aperiam tenetur labore, repudiandae, eveniet, tempora
          iusto deleniti perspiciatis consectetur officiis vel dolore quibusdam
          alias ab omnis quae inventore accusantium ipsam. Velit quo
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bookHeader: {
    width: "100%",
    height: 230,
    backgroundColor: "orange",
    position: "relative",
  },
  bookTitleText: {
    position: "absolute",
    top: "30%",
    right: 20,
    flex : 1,
    alignItems : "flex-end"
  },
  bookCoverImage: {
    position: "absolute",
    bottom: -50,
    left: 30,
    overflow: "visible",
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 99,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  statusButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  bookNameText: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    margin: 10,
    color: "white",
    textTransform: "uppercase",
  },
  authorNameText: {
    fontSize: 16,
    fontWeight: "400",
  },
  descriptionContainer: {
    margin: 30,
    alignItems: "flex-end",
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionHeader: {
    fontSize: 25,
    fontWeight: "600",
    marginVertical: 10,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "justify",
  },
  headerButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    margin: 10,
    position: "absolute",
    bottom: -30,
    right: 10,
  },
});
