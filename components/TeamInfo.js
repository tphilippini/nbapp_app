import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { ThemeContext } from "../utils/theme";

const TeamInfo = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.teamName, { color: theme.color }]}>{(props.teamName.toLowerCase() == 'timberwolves' ? 'wolves' : props.teamName)}</Text>
      <Text style={styles.teamRecord}>{props.teamRecord}</Text>
      <Text style={[styles.teamScore, { color: theme.color }]}>{props.teamScore}</Text>
    </View>
  );
}

export default TeamInfo

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
  },
  teamName: {
    fontSize: 16,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  teamRecord: {
    fontSize: 10,
    color: "#9E9E9F",
  },
  teamScore: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
