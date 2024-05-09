import { View , StyleSheet , Text , Image } from "react-native";


const AuthorItemCard = ({item} : {item : {imageLink : string , name : string}}) => (
    <View style={styles.authorDetailsCard}>
      <Image source={{uri : item.imageLink}} style={styles.authorImage}/>
      <Text style={styles.authorName}>{item.name}</Text>
    </View>
  );

export default AuthorItemCard

const styles = StyleSheet.create({
    authorDetailsCard: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 5,
        padding: 5,
        borderColor: "#C3C3C3",
        borderWidth: 1,
        backgroundColor: "#fff",
        borderRadius: 10,
      },
      authorImage: {
        width: 25,
        height: 25,
        margin: 5,
        borderRadius: 50,
        backgroundColor: "gray",
      },
      authorName: {
        fontSize: 12,
        fontWeight: "400",
        textAlign: "center",
      },
})