import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CardHeader = ({ statusNum }) => {
  return (
    <View style={styles.header}>
      <View style={styles.indicator}>
        {statusNum === 2 && <Text style={styles.live}>LIVE</Text>}
      </View>
    </View>
  );
}

export default CardHeader

const styles = StyleSheet.create({
  header: {
    minHeight: 16,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    // backgroundColor: "pink",
  },
  indicator: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
  },
  live: {
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "700",
    // color: "#7af1ba",
    color: "#fc3636",
  },
});
