import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import * as Animatable from "react-native-animatable";
import { SvgUri, SvgCssUri } from "react-native-svg";

// import { SharedElement } from "react-navigation-shared-element";

import { ThemeContext } from "../utils/theme";

import TeamInfo from './TeamInfo';
import CardHeader from './CardHeader';
import GameTime from './GameTime';
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
          {/* <SvgCssUri
            width='50%'
            height='50%'
            fill='#000'
            uri={`https://cdn.nba.com/logos/nba/${item.hTeam.teamId}/global/L/logo.svg`}
            style={styles.hImage}
          /> */}
          <TeamInfo
            home
            teamName={item.hTeam.teamShortName}
            teamRecord={item.hTeamRecordFormatted}
            teamScore={item.hTeamScore}
          />
        </View>
        <View style={styles.center}>
          <View style={styles.gameTime}>
            {/* <SharedElement id={`item.${item.matchId}.gametime`}> */}
            <GameTime item={item} />
            {/* </SharedElement> */}
          </View>
        </View>
        <View>
          {/* <SvgCssUri
            width='100%'
            height='100%'
            fill='#000'
            uri={`https://cdn.nba.com/logos/nba/${item.vTeam.teamId}/global/L/logo.svg`}
            style={styles.vImage}
          /> */}
          <TeamInfo
            home={false}
            teamName={item.vTeam.teamShortName}
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
    minHeight: 120,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 5,
    position: 'relative',
  },
  hImage: {
    // width: 50,
    // height: 50,
    position: "absolute",
    left: 25,
    top: -35,
  },
  vImage: {
    // width: 50,
    // height: 50,
    position: "absolute",
    right: 0,
    top: 0,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});
