import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const TeamInfo = (props) => {

  const handleClick = () => {
    props.homeSelected && !props.home && props.cardOpen && props.toggleDivider();
    !props.homeSelected && props.home && props.cardOpen && props.toggleDivider();
  };

  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        (props.home && styles.wrapperLeft: styles.wrapperRight),
      ]}
      onPress={() => handleClick()}
    >
      <Text style={styles.teamName}>{props.teamName}</Text>
      <Text style={styles.teamRecord}>{props.teamRecord}</Text>
      <Text style={styles.teamScore}>{props.teamScore}</Text>
    </TouchableOpacity>
  );
}

export default TeamInfo

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 5,
    minWidth: 100,
    // backgroundColor: 'yellow',
  },
  // wrapperLeft: {
  //   marginLeft: 10,
  //   marginRight: 0,
  // },
  // wrapperRight: {
  //   marginLeft: 0,
  //   marginRight: 10,
  // },
  teamName: {
    fontSize: 16,
    fontWeight: "800",
    textTransform: "uppercase",
    color: "#2C2839",
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
