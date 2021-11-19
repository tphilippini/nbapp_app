import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ScoreTable = ({ cardOpen, homeScores, awayScores }) => {
  const [hq1 = 0, hq2 = 0, hq3 = 0, hq4 = 0] = homeScores;
  const [aq1 = 0, aq2 = 0, aq3 = 0, aq4 = 0] = awayScores;

  return (
    <View style={[styles.content, (cardOpen ? styles.open : styles.close)]}>
      <View style={styles.row}>
        <Text style={styles.score}>{hq1}</Text>
        <Text style={styles.score}>{hq2}</Text>
        <Text style={styles.score}>{hq3}</Text>
        <Text style={styles.score}>{hq4}</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.divider} />
      </View>
      <View style={styles.row}>
        <Text style={styles.score}>{aq1}</Text>
        <Text style={styles.score}>{aq2}</Text>
        <Text style={styles.score}>{aq3}</Text>
        <Text style={styles.score}>{aq4}</Text>
      </View>
    </View>
  );
};

export default ScoreTable

const styles = StyleSheet.create({
  content: {
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: 60,
  },
  divider: {
    borderBottomColor: "#9E9E9F",
    borderBottomWidth: 1,
    width: 60,
  },
  score: {
    fontSize: 10,
    color: "#848181",
  },
  open: { opacity: 1, display: "flex" },
  close: { opacity : 0, display: "none" },
});
