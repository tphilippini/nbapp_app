import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { ThemeContext } from "../utils/theme";
import { formatTime } from "../utils/date";

const GameScore = ({item}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles.gameScore}>
      <Text
        style={[
          styles.score,
          {
            color: theme.color,
            fontWeight: item.hTeamScore > item.vTeamScore ? "800" : "300",
          },
        ]}
      >
        {item.hTeamScore}
      </Text>
      <Text style={[styles.divider, { color: theme.color }]}>:</Text>
      <Text
        style={[
          styles.score,
          {
            color: theme.color,
            fontWeight: item.hTeamScore < item.vTeamScore ? "800" : "300",
          },
        ]}
      >
        {item.vTeamScore}
      </Text>
    </View>
  );
};

export default GameScore;

const styles = StyleSheet.create({
  gameScore: {
    flexDirection: "row",
    minWidth: 60,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  score: {
    textTransform: "uppercase",
    fontSize: 22,
    marginHorizontal: 5,
  },
  divider: {
    fontWeight: '800',
  }
});
