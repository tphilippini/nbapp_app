import dayjs from "dayjs";

const formatTime = (
  currentPeriod,
  gameClock,
  statusNum,
  isHalfTime,
  isEndOfPeriod,
  startTimeUTCString
) => {
  if (statusNum === 3) {
    return "FINAL";
  } else if (isHalfTime) {
    return "HALF TIME";
  } else if (isEndOfPeriod) {
    return `END OF Q${currentPeriod}`;
  } else if (statusNum === 1) {
    let gameTimeDate = new Date(startTimeUTCString);
    let hours = gameTimeDate.getHours();
    let minutes = gameTimeDate.getMinutes();
    return `${hours}:${minutes === 0 ? "00" : minutes}`;
    // sometimes nba api is slow to update a match has finished, leaving statusNum at 2 and gameClock null X_X
  } else if (gameClock === null && statusNum === 2 && currentPeriod === 4) {
    return `FINAL`;
    // when quarter is just beginning, game clock is null
  } else if (gameClock === null && statusNum === 2) {
    return `Q${currentPeriod} 12:00}`;
  } else if (gameClock === null) {
    return `END OF Q${currentPeriod}`;
  } else {
    return `Q${currentPeriod} ${gameClock || "12:00"}`;
  }
};

const getTodayDate = () => {
  return dayjs().hour() < 17
    ? dayjs().subtract(1, "d").format("YYYYMMDD")
    : dayjs().format("YYYYMMDD");
};

module.exports = {
  getTodayDate,
  formatTime,
};
