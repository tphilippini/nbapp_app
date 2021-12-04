import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
// import { SharedElement } from "react-navigation-shared-element";
import { Feather } from "@expo/vector-icons";

import List from "../components/List";
import { getStringTodayDate } from "../utils/date";
import { ThemeContext } from "../utils/theme";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Home = () => {
  const { dark, theme, toggle } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <StatusBar style={theme.status} />
      <View style={styles.header}>
        <View>
          <Text style={[styles.title, { color: theme.color }]}>
            GAME RESULTS
          </Text>
          <Text style={[styles.subtitle, { color: theme.color }]}>
            {getStringTodayDate()}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={toggle}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: theme.backgroundCard,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather
                name={dark ? "sun" : "moon"}
                size={22}
                color={theme.color}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <List />
      {/* <SharedElement id="general.bg"> */}
      {/* <View style={styles.bg} /> */}
      {/* </SharedElement> */}
    </SafeAreaView>
  );
};

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "pink",
    paddingHorizontal: 10,
    // minHeight: 60,
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
    textTransform: "uppercase",
    alignItems: "flex-start",
  },
  subtitle: {
    fontSize: 10,
    textTransform: "uppercase",
    alignItems: "flex-start",
  },
  // bg: {
  //   position: "absolute",
  //   width: width,
  //   height: height,
  //   transform: [{ translateY: height }],
  //   borderRadius: 25,
  // },
});
