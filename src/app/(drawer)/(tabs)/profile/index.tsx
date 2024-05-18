import { AntDesign } from "@expo/vector-icons";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function Profile() {
  return (
    <View style={Styles.mainContainer}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={Styles.profilePicContainer}>
        <View style={Styles.profilePic}></View>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Damidu Shalinda</Text>
        <Text style={{ fontSize: 14, fontStyle: "italic" }}>
          {new Date().toLocaleString()}
        </Text>
      </View>
      <View style={Styles.ordersSection}>
        <View style={Styles.horizontalLine}></View>
        <Text style={{ fontSize: 15, fontWeight: "600" }}>Orders</Text>
        <View style={Styles.ordersContainer}>
          <Text>No orders yet</Text>
        </View>
      </View>
      <View style={Styles.settingsSection}>
        <View style={Styles.horizontalLine}></View>
        <Text style={{ fontSize: 15, fontWeight: "600" }}>Settings</Text>
        <View style={Styles.settingsContainer}>
        <AntDesign name="user" size={16} color="black" />
        <Text>User Settings</Text>
        </View>
        <View style={Styles.settingsContainer}>
        <AntDesign name="user" size={16} color="black" />
        <Text>Privacy Settings</Text>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePicContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "gray",
  },
  ordersSection: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "90%",
    height: "30%",
  },
  ordersContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  settingsSection: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "90%",
    gap : 10
  },
  settingsContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    padding: 10,
    borderColor: "#D5D5D5",
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderRadius: 10,
    width : "100%"
  },
  horizontalLine: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "100%",
  },
});
