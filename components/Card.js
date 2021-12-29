import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";

// import { SharedElement } from "react-navigation-shared-element";

import { ThemeContext } from "../utils/theme";

import TeamInfo from './TeamInfo';
import CardHeader from './CardHeader';
import GameTime from './GameTime';
import GameScore from "./GameScore";
const DURATION = 400;

const Card = ({ item }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Animatable.View
      animation='bounceIn'
      delay={DURATION}
      style={[styles.item, { backgroundColor: theme.backgroundCard }]}
    >
      <CardHeader statusNum={item.statusNum} />
      {/* <SharedElement id={`item.${item.matchId}.card`}> */}
      <View style={styles.content}>
        <View>
          <TeamInfo
            home
            teamId={item.hTeam.teamId}
            teamName={item.hTeam.teamName}
            teamShortName={item.hTeam.teamShortName}
            teamRecord={item.hTeamRecordFormatted}
            teamScore={item.hTeamScore}
          />
        </View>
        <View style={styles.center}>
          <View style={styles.gameTime}>
            {/* <SharedElement id={`item.${item.matchId}.gametime`}> */}
            <GameScore item={item} />
            <GameTime item={item} />
            {/* </SharedElement> */}
          </View>
        </View>
        <View>
          <TeamInfo
            home={false}
            teamId={item.vTeam.teamId}
            teamName={item.vTeam.teamName}
            teamShortName={item.vTeam.teamShortName}
            teamRecord={item.vTeamRecordFormatted}
            teamScore={item.vTeamScore}
          />
        </View>
      </View>
      {/* </SharedElement> */}
    </Animatable.View>
  );
};

export default Card

const styles = StyleSheet.create({
  item: {
    margin: 10,
    borderRadius: 10,
    minHeight: 150,
    paddingHorizontal: 5,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 5,
    position: 'relative',
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});
