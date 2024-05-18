import { View, Text, StyleSheet, Image, Pressable, ViewStyle, TextStyle } from "react-native";
import React from "react";
import {
  DrawerContent,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/build/AntDesign";
import { useRouter } from "expo-router";
import useBookStore, { BookCartItem } from "@/src/store/bookListStore";

type CustomDrawerButtonProps = {
  text: string;
  onPress: () => void;
  icon: React.ReactNode;
  viewStyle? : ViewStyle;
  textStyle? : TextStyle;
};

const CustomDrawerContent = (props: any) => {
  const { books, removeBook, clearBooks } = useBookStore();
  const { top, bottom, left } = useSafeAreaInsets();
  const router = useRouter();
  const BookCartItem = (item : BookCartItem) => (
    <Pressable style={Styles.bookCartItem} key={item.id} onPress={() => router.push(`/(drawer)/(tabs)/books/${item.id}`)}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={{ uri: item.imageUrl }}
          style={{ width: 40, height: 60 }}
        />
        <Text>{item.bookName}</Text>
      </View>
      <Pressable
        onPress={() => {
          removeBook(item.id);
        }}
      >
        <AntDesign name="delete" size={24} color="black" />
      </Pressable>
    </Pressable>
  );

  const customDrawerButton: React.FC<CustomDrawerButtonProps> = ({
    icon,
    onPress,
    text,
    viewStyle,
    textStyle
  }) => (
    <Pressable onPress={onPress} style={[Styles.customDrawerButton , viewStyle]}>
      <Text style={[Styles.customDrawerButtonText , textStyle]}>{text}</Text>
      {icon}
    </Pressable>
  );

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} scrollEnabled={false}>
        <View style={Styles.profilePicContainer}>
          <View style={Styles.profilePic}></View>
          <Text style={{ fontSize: 17, fontWeight: "600" }}>
            Damidu Shalinda
          </Text>
          <Text style={{ fontSize: 12, fontStyle: "italic" }}>
            {new Date().toLocaleString()}
          </Text>
        </View>
        <View style={Styles.horizontolLine}></View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start",
            paddingLeft: left,
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 10 }}>Book Cart</Text>
          <View style={Styles.bookItemList}>
            {books.length > 0 ? (
              books.map((item) => BookCartItem(item))
            ) : (
              <Text style={{ textAlign: "center" }}>No Items in the cart</Text>
            )}
          </View>
          <View style={Styles.horizontolLine}></View>
          <View style={{ flex: 1 }}>
            {customDrawerButton({
              text: "Clear Cart",
              onPress: clearBooks,
              icon: <AntDesign name="delete" size={16} color="black" />,
            })}
            {customDrawerButton({
              text: "Checkout",
              onPress: () => {},
              icon: <AntDesign name="right" size={16} color="black" />,
              viewStyle: Styles.checkOutButton,
              textStyle: Styles.checkOutButtonText
            })}
          </View>
        </View>
        <View style={{marginBottom : 20 + bottom}}>
        {customDrawerButton({
          text: "Logout",
          onPress: () => router.replace("/"),
          icon: <AntDesign name="logout" size={16} color="black" />,
          textStyle: Styles.logOutButtonText,
          viewStyle: Styles.logOutButton
        })}
      </View>
      </DrawerContentScrollView>
      <View style={{marginBottom : bottom}}>
        {customDrawerButton({
          text: "Logout",
          onPress: () => router.replace("/"),
          icon: <AntDesign name="logout" size={16} color="black" />,
          textStyle: Styles.logOutButtonText,
          viewStyle: Styles.logOutButton
        })}
      </View>
    </View>
  );
};

export default CustomDrawerContent;

const Styles = StyleSheet.create({
  profilePicContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePic: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: "gray",
  },
  horizontolLine: {
    width: "90%",
    height: 1,
    marginHorizontal: 10,
    backgroundColor: "gray",
  },
  bookItemList: {
    flex: 1,
  },
  bookCartItem: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 20,
  },
  customDrawerButton: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    width : "90%",
    paddingHorizontal: 20,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: "gray",
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
  },
  customDrawerButtonText: {
    fontSize: 17,
    fontWeight: "600",
  },
  logOutButton: {
    backgroundColor: "#FFB4B4",
    color: "white",
  },
  logOutButtonText: {
    color: "white",
  },
  checkOutButton: {
    backgroundColor: "#77FF77",
    color: "white",
  },
  checkOutButtonText: {
    color: "white",
  },
});
