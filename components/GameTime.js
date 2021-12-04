import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { formatTime } from "../utils/date";

const GameTime = (props) => {
  return (
    <View style={styles.gameTime}>
      <Text style={styles.time}>
        {formatTime(
          props.item.currentPeriod,
          props.item.gameClock,
          props.item.statusNum,
          props.item.isHalfTime,
          props.item.isEndofPeriod,
          props.item.startTimeUTCString
        )}
      </Text>
    </View>
  );
}

export default GameTime

const styles = StyleSheet.create({
  gameTime: {
    minWidth: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    textTransform: "uppercase",
    fontSize: 14,
    color: "#5f45bb",
    fontWeight: "800",
  },
});
