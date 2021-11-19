import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import TeamInfo from './TeamInfo'
import CardHeader from './CardHeader'
import GameTime from './GameTime'
import ScoreTable from './ScoreTable'

const Card = (props) => {
  let [cardOpen, toggleCardOpen] = useState(true);
  let [homeSelected, toggleDivider] = useState(true);

  const onCardClick = () => {
    if (props.item.statusNum === 1) return;
    if (!cardOpen) toggleDivider(true);
    toggleCardOpen(!cardOpen);
  };

  const handleToggleOnClick = () => {
    toggleDivider(!homeSelected);
  };

  return (
    <TouchableOpacity style={styles.item} onPress={() => onCardClick()}>
      <CardHeader statusNum={props.item.statusNum} />
      <View style={styles.content}>
        <TeamInfo
          home
          homeSelected={homeSelected}
          toggleDivider={handleToggleOnClick}
          cardOpen={cardOpen}
          teamName={props.item.hTeam.teamShortName}
          // teamNameStyle={teamNameStyle}
          teamRecord={props.item.hTeamRecordFormatted}
          // scoreStyle={scoreStyle}
          teamScore={props.item.hTeamScore}
        />
        <View style={styles.center}>
          <GameTime item={props.item} />
          <ScoreTable
            cardOpen={cardOpen}
            homeScores={props.item.hTeamQScore}
            awayScores={props.item.vTeamQScore}
          />
        </View>
        <TeamInfo
          home={false}
          homeSelected={homeSelected}
          toggleDivider={handleToggleOnClick}
          cardOpen={cardOpen}
          teamName={props.item.vTeam.teamShortName}
          // teamNameStyle={teamNameStyle}
          teamRecord={props.item.vTeamRecordFormatted}
          // scoreStyle={scoreStyle}
          teamScore={props.item.vTeamScore}
        />
      </View>

      {cardOpen && (
        <>
          <View style={styles.divider}>
            <TouchableOpacity
              style={[
                styles.dividerItem,
                homeSelected ? styles.left : styles.right,
              ]}
              onPress={() => handleToggleOnClick()}
            ></TouchableOpacity>
          </View>
          {/* {props.statusNum === 3 && props.videos.length > 0 && (
            <MatchHighlightsRail videos={props.videos} />
          )}
          {homeSelected && (
            <PlayerStatsSection
              stats={sortMatchStats(props.stats, props.hTeamId)}
              videos={props.videos}
            />
          )}
          {!homeSelected && (
            <PlayerStatsSection
              stats={sortMatchStats(props.stats, props.vTeamId)}
              videos={props.videos}
            />
          )} */}
        </>
      )}
    </TouchableOpacity>
  );
}

export default Card

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    margin: 10,
    borderRadius: 10,
    minHeight: 120,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 5,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    width: "100%",
    height: 4,
    marginTop: 10,
    backgroundColor: "#E8EAED",
  },
  dividerItem: {
    height: 4,
    width: "50%",
    backgroundColor: "#5f45bb",
  },
  left: {
    left: 0,
  },
  right: {
    left: "50%",
  },
});
