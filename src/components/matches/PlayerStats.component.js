import React, { useContext } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

import VideoContext from "../../stores/contexts/video.context";
import VideoItem from "./VideoItem.component";

const PlayerStatWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

// const PlayerName = styled(Link)`
const PlayerName = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.font};
  text-align: start;
  padding-bottom: 10px;
  padding-left: 10px;
  min-width: 100px;
  padding-top: 10px;
  text-decoration: unset;
`;

const Stats = styled.div`
  font-size: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
  padding: 10px;
  background-color: ${props => props.theme.box};
  color: ${props => props.theme.fontSecondary};
`;

const StatNumber = styled.div`
  /* color: #848181; */
  font-size: 13px;
  font-weight: 800;
  color: ${props => props.theme.font};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-variant-numeric: tabular-nums;
`;

const StatType = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  font-variant-numeric: tabular-nums;
  font-size: 10px;
  width: 25px;
`;

const VideoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background-color: #80808014;
  padding-bottom: 10px;
  padding-top: 10px;
`;

const StatsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background-color: ${props => props.theme.background};
`;

const GridItem = styled.div`
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PlayerStats = ({ stats = {}, videos = [], firstName, lastName, id }) => {
  const { setVideoId, toggleVideoOverlay } = useContext(VideoContext);

  const renderStats = () => {
    return stats.map((stat, index) => {
      return (
        <GridItem key={index}>
          <StatNumber>{stat.value}</StatNumber>
          <StatType>{stat.type}</StatType>
        </GridItem>
      );
    });
  };

  const handleVideoClick = (event, id) => {
    event.stopPropagation();
    setVideoId(id);
    toggleVideoOverlay(true);
  };

  const renderVideos = () => {
    return videos.map((video, index) => {
      if (index < 3) {
        return (
          <VideoItem
            key={index}
            video={video}
            index={index}
            handleClick={handleVideoClick}
          />
        );
      } else return null;
    });
  };

  // const handleClick = e => {
  //   e.stopPropagation();
  // };

  return (
    <PlayerStatWrapper>
      <StatsRow>
        {/* <PlayerName onClick={handleClick} to={`/player/${id}`}> */}
        <PlayerName>{`${firstName.substring(0, 1)}. ${lastName}`}</PlayerName>
      </StatsRow>
      <StatsRow>
        <Stats>{renderStats()}</Stats>
      </StatsRow>
      {videos.length > 0 && <VideoRow>{renderVideos()}</VideoRow>}
    </PlayerStatWrapper>
  );
};

export default PlayerStats;
