import React, { useContext } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
// import { SharedElement } from 'react-navigation-shared-element';

import TeamInfo from "../components/TeamInfo";
import CardHeader from "../components/CardHeader";
import GameScore from "../components/GameScore";
import GameTime from "../components/GameTime";
import PlayerStats from '../components/PlayerStats';

import { sortMatchStats } from "../utils/stats";
import { ThemeContext } from "../utils/theme";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const DURATION = 400;

const Details = ({ route, navigation }) => {
  const { item } = route.params;
  const { dark, theme } = useContext(ThemeContext);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <AntDesign
        name='arrowleft'
        size={28}
        style={{
          padding: 12,
          position: "absolute",
          top: 40,
          left: 5,
          zIndex: 2,
        }}
        color={theme.color}
        onPress={() => navigation.goBack()}
      />
      {/* <SharedElement id={`item.${item.matchId}.card`}> */}
      <Animatable.View
        animation='bounceIn'
        delay={DURATION}
        style={styles.content}
      >
        <TeamInfo
          home
          teamId={item.hTeam.teamId}
          teamName={item.hTeam.teamName}
          teamShortName={item.hTeam.teamShortName}
          teamRecord={item.hTeamRecordFormatted}
          teamScore={item.hTeamScore}
        />
        <View>
          {/* <SharedElement id={`item.${item.matchId}.gametime`}> */}
          <GameScore item={item} />
          <GameTime item={item} />
          {/* </SharedElement> */}
        </View>
        <TeamInfo
          home={false}
          teamId={item.vTeam.teamId}
          teamName={item.vTeam.teamName}
          teamShortName={item.vTeam.teamShortName}
          teamRecord={item.vTeamRecordFormatted}
          teamScore={item.vTeamScore}
        />
      </Animatable.View>
      {/* </SharedElement> */}
      {/* <SharedElement id='general.bg' style={styles.bg}> */}
      <Animatable.View
        animation='fadeIn'
        delay={DURATION}
        style={[styles.bg, { backgroundColor: theme.backgroundCard }]}
      >
        <ScrollView
          alwaysBounceVertical={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View style={styles.stats}>
            <PlayerStats stats={sortMatchStats(item.stats, item.hTeamId)} />
            <PlayerStats stats={sortMatchStats(item.stats, item.vTeamId)} />
          </View>

          {/* <Animatable.View
              animation='bounceIn'
              delay={DURATION}
              style={styles.name}
            >
              <Text>hello</Text>
            </Animatable.View> */}
        </ScrollView>
      </Animatable.View>
      {/* </SharedElement> */}
    </View>
  );
}

// Details.sharedElements = (route, otherRoute, showing) => {
//   const { item } = route.params;
//   return [
//     // {
//     //   id: `item.${item.matchId}.card`,
//     // },
//     // {
//     //   id: "general.bg",
//     // },
//     {
//       id: `item.${item.matchId}.gametime`,
//     }
//   ];
// };

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 50,
    // marginTop: 50,
    height: height * 0.3 + 25,
  },
  bg: {
    flex: 1,
    position: "absolute",
    width: width,
    height: height,
    transform: [{ translateY: height * 0.3 }],
    borderRadius: 25,
    padding: 25,
    paddingTop: 30,
  },
  stats: {
    flexDirection: "row",
    paddingBottom: 250,
    justifyContent: "space-between",
  },
});
