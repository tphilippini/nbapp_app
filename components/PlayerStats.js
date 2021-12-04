import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import * as Animatable from "react-native-animatable";

import { findTopStats } from '../utils/stats';
import { ThemeContext } from "../utils/theme";

const DURATION = 400;

const PlayerStats = ({ stats }) => {
  const { theme } = useContext(ThemeContext);

  let sortedStats = findTopStats(stats);

  return (
    <View style={styles.wrapper}>
      {sortedStats.map((item, index) => {
        return (
          <Animatable.View
            key={index}
            animation='fadeIn'
            delay={DURATION + index * 100}
            style={styles.item}
          >
            <View style={styles.row}>
              <Text style={[styles.name, { color: theme.color }]}>{`${item.player.firstName.substring(
                0,
                1
              )}. ${item.player.lastName}`}</Text>
            </View>
            <View style={styles.row}>
              {item.statsFormatted.map((stat, index) => {
                return (
                  <Animatable.View
                    key={index}
                    animation='bounceIn'
                    delay={DURATION + index * 100}
                    style={styles.stats}
                  >
                    <Text style={styles.number}>{stat.value}</Text>
                    <Text style={styles.type}>{stat.type}</Text>
                  </Animatable.View>
                );
              })}
            </View>
          </Animatable.View>
        );
      })}
    </View>
  );
}

export default PlayerStats

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  item: {
    marginVertical: 5,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  name: {
    fontSize: 12,
    fontWeight: "bold",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  stats: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
    backgroundColor: "#EFEFEF",
  },
  number: {
    fontSize: 10,
    fontWeight: '700',
  },
  type: {
    fontSize: 10,
  },
});
