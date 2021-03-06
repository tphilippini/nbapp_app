import React, { useState, useContext } from "react";
import { animated } from "react-spring";
import styled from "styled-components";
import YouTube from "react-youtube";

import VideoContext from "../../stores/contexts/video.context";
// import VideoItem from "./VideoItem.component";
// import "../index.css";

const VideoOverlayWrapper = styled(animated.div)`
  position: absolute;
  opacity: 0.8;
  width: 100%;
  height: 100%;
  background-color: black;
  top: 0px;
  z-index: 1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  font-size: 20px;
  /* font-family: "Fugaz one"; */
  color: white;
  width: 100%;
  height: 100%;
`;

const VideoContent = styled.div`
  position: relative;
  overflow: hidden;
  /* padding-top: 56.25%; */
`;

const VideoCloseButton = styled.h1`
  text-align: center;
  padding: 20px;
  margin-top: 50px;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 800;
  text-transform: uppercase;
`;

// const VideoItemRow = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 5px;
//   background-color: ${props => (props.selected ? "#222323" : "#151414")};
//   &:first-child {
//     margin-top: 0px;
//   }
//   &:last-child {
//     margin-bottom: 0px;
//   }
// `;

// const VideoSuggestion = styled(animated.div)`
//   width: 100%;
//   height: 100%;
//   max-height: 350px;
//   background-color: #151414;
//   opacity: 1;
//   overflow-y: scroll;
//   overflow-x: hidden;
//   &::-webkit-scrollbar {
//     width: 0px;
//     background: transparent; /* make scrollbar transparent */
//   }
// `;

// const VideoTitle = styled.div`
//   font-family: "SF-Pro-Medium";
//   font-weight: 800;
//   font-size: 12px;
//   color: white;
//   text-align: center;
//   text-align: center;
//   max-width: 200px;
// `;

const VideoFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 10%;
  width: 100%;
  height: 100%;
  visibility: ${props => (!props.visible ? "hidden" : "visible")};
`;

const VideoLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -40px;
  margin-top: -15px;
  visibility: ${props => (!props.visible ? "visible" : "hidden")};
`;

// const VideoSuggestionTitle = styled.div`
//   font-size: 12px;
//   color: white;
//   text-align: center;
//   text-transform: uppercase;
//   padding: 20px;
// `;

const VideoOverlay = props => {
  const { selectedVideo, hideVideo, toggleVideoPlay } = useContext(
    VideoContext
  );
  const [playBackReady, setPlayBackStatus] = useState(false);

  const opts = {
    playerVars: {
      autoplay: 1,
      fs: 1,
      rel: 0,
      modestbranding: 1,
      playsinline: 1
    }
  };

  const iframeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0
  };

  const onVideoReady = () => {
    setPlayBackStatus(true);
  };

  const onVideoPlay = () => {
    toggleVideoPlay(true);
  };

  // const renderRelatedVideos = () => {
  //   return relatedVideos.map((video, index) => {
  //     return (
  //       <VideoItemRow
  //         key={index}
  //         selected={selectedVideo === video.videoId}
  //         onClick={() => setVideoId(video.videoId)}
  //       >
  //         <VideoItem
  //           video={video}
  //           index={index}
  //           handleClick={() => setVideoId(video.videoId)}
  //         />
  //         <VideoTitle>{video.title.substring(0, 100)}</VideoTitle>
  //       </VideoItemRow>
  //     );
  //   });
  // };

  return (
    <>
      <VideoOverlayWrapper style={props.style}>
        <Content>
          <VideoContent>
            <VideoFrame visible={playBackReady}>
              <YouTube
                style={iframeStyle}
                opts={opts}
                videoId={selectedVideo}
                onReady={onVideoReady}
                onPlay={onVideoPlay}
              />
            </VideoFrame>
            <VideoLoading visible={playBackReady}>CHARGEMENT</VideoLoading>
          </VideoContent>
          {/* {relatedVideos.length > 0 && (
            <>
              <VideoSuggestionTitle>Related Videos</VideoSuggestionTitle>
              <VideoSuggestion>{renderRelatedVideos()}</VideoSuggestion>
            </>
          )} */}
          <VideoCloseButton onClick={hideVideo}>RETOUR</VideoCloseButton>
        </Content>
      </VideoOverlayWrapper>
    </>
  );
};

export default VideoOverlay;
