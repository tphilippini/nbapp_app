import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SvgCssUri } from "react-native-svg";

import { ThemeContext } from "../utils/theme";

const IMAGE_SIZE = 80;

const TeamInfo = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles.wrapper}>
      <SvgCssUri
        fill='#000'
        uri={`https://cdn.nba.com/logos/nba/${props.teamId}/global/L/logo.svg`}
        style={styles.teamImage}
      />
      <Text style={[styles.teamName, { color: theme.color }]}>
        {props.teamShortName}
      </Text>
      <Text style={styles.teamRecord}>{props.teamRecord}</Text>
      {/* <Text style={[styles.teamScore, { color: theme.color }]}>
        {props.teamScore}
      </Text> */}
    </View>
  );
}

export default TeamInfo

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 150,
  },
  teamImage: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    marginBottom: 10,
  },
  teamName: {
    fontSize: 12,
    fontWeight: "600",
    color: "#B2B1BA",
    textTransform: "uppercase",
  },
  teamRecord: {
    fontSize: 10,
    color: "#9E9E9F",
  },
  teamScore: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 5,
  },
});
